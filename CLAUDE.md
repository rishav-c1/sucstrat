# CLAUDE.md — SucStrat Website

Persistent project memory. Read every turn. If a request conflicts with anything here, stop and flag it rather than improvising.

## What this is

Marketing/content website for **SucStrat**, a strategy & consulting firm (founder: Vinay Maheshwari). Six pages. The source material is **six hand-authored semantic HTML mockups** in `/html_static_pages/` — **NOT Wix exports** (clean markup, one `<h1>` each, proper heading nesting, a shared CSS-custom-property design system; the multi-hundred-KB bulk of each file is embedded base64 Lato/Lora fonts, not a runtime blob). They are **visual + content reference**. **Still never copy their markup, classes, or inline styles into the build.** Reproduce the *design* (layout, palette, type, spacing, motion) and carry the *content* verbatim; rebuild the *implementation* clean and semantic. Verbatim per-page copy is extracted in `/content-extraction/*.md`.

Canonical production domain: **https://sucstrat.com**

## Assets & contact (provided)

- Brand + portrait assets live in `/static/` (imported via the `@static/*` alias; served through `next/image`). Logos: **`logo_white.png` (default — for dark/navy backgrounds)**, `logo_navy.png` / `logo_black.png` (for light backgrounds), `logo_wordmark_navy.png` (tagline-free wordmark), plus `logo_preview_on_navy.png` / `logo_preview_on_white.png` (usage comps, not for direct use). Founder portrait: `static/Vinay-Maheshwari.jpg` (1400×936).
- Public contact email: **info@v3consultant.com** (resolves the mockups' `[confirm contact details]` placeholder; supersedes the mockups' `connect@sucstrat.com`). Careers applications also route to `info@v3consultant.com` (unified inbox; the mockup's `careers@sucstrat.com` is superseded).
- `/get-in-touch` contact form: a **static `mailto:` form** (no backend) so the site deploys to **GitHub Pages**. The earlier zod-validated Server Action + `EmailTransport` (Resend-ready) is preserved in git history (commit `d17ede7`) for a Node host.
- Runtime: **Node 20** (nvm default set to 20; Next 16 requires ≥20.9). pnpm via corepack.

## Stack (do not substitute without sign-off)

- Next.js (latest stable) — **App Router**, React Server Components by default.
- TypeScript, `strict: true`. No `any` (use `unknown` + narrowing). No non-null `!` to silence the compiler.
- Styling: **CSS Modules** (`*.module.css`), one per component. A small global `tokens.css` holds design tokens as CSS custom properties. No Tailwind, no CSS-in-JS runtime. Do not reinterpret the design into a different system — match the reference pixel-intent.
- Fonts: **Lora** (headings/serif) + **Lato** (body/sans) via `next/font/google`, `display: swap`, subset `latin`, self-hosted by next/font. No raw `<link>` to Google Fonts.
- Images: `next/image` only. No `<img>`. Provide width/height or `fill` + sized container; every image needs meaningful `alt`.
- Content lives in a typed content layer: `src/content/*.ts` exporting typed objects/MDX. **No CMS, no DB** unless a task explicitly adds one.
- Package manager: pnpm. Node 20 LTS.

## Rendering & routes

All six pages are **static (SSG)**. Use Server Components; add `"use client"` only for genuinely interactive leaf components (mobile nav toggle, scroll-triggered stat counters). Keep client bundles minimal.

Routes:
- `/` — Home
- `/know-us` — Know Us
- `/what-we-do` — What We Do
- `/clients` — Clients
- `/careers` — Careers
- `/knowledge` — Knowledge

Referenced by the mockups but **not provided** (handle, don't 404):
- `/get-in-touch` — contact page. **Mockup later provided** (`get_in_touch_mockup.html`) and built from it: hero + "Reach us" grid + a "Let's talk" form. To allow **static (GitHub Pages)** hosting, it submits via a prefilled **`mailto:`** (no server); a zod-validated Server Action + email-transport version is preserved in git history for a Node host. (`/pitch-us` 308-redirects here — renamed to match the mockup.)
- `/case-studies` and `/case-studies/[slug]` (sakshi-media-group, mohan-babu-university, valmar, dainik-bhaskar) — out of scope for content, but create placeholder routes with proper metadata so nav/links don't 404. Flag as stubs in PLAN.md.

## Design tokens (from reference extraction — refine against the files)

```
--navy-900: #1b3140;  --navy-800: #264259;  --blue-700: #355c7d;
--blue-600: #4476a1;  --blue-500: #5d90ba;  --blue-200: #a9c0d8;
--mist-100: #cfdbe8;  --bg-100:   #eef2f7;  --bg-50:    #f2f6fb;
--slate:    #5a6e80;  --white:    #ffffff;
```
Headings: Lora. Body/UI: Lato. Confirm exact scale/weights/spacing against each reference page before building — these tokens are a starting palette, not the full system.

## SEO requirements (non-negotiable — these are acceptance criteria)

- `generateMetadata` (or static `metadata`) per route: unique `title`, `description`, `canonical` (absolute, sucstrat.com), `openGraph`, `twitter` (`summary_large_image`).
- Single `<h1>` per page (the references already follow this — preserve it). Logical h2/h3 nesting, no skipped levels.
- JSON-LD: `Organization` + `ProfessionalService` site-wide (in root layout); `Person` for Vinay Maheshwari on Know Us/Home; `BreadcrumbList` on inner pages; `JobPosting` on Careers *only if* real structured listings exist (otherwise omit — never fabricate).
- `app/sitemap.ts` and `app/robots.ts` (allow all, point to sitemap).
- One shared OG image (1200×630) via `opengraph-image` convention; per-page override where it adds value.
- Semantic landmarks: one `<header>`, `<main>`, `<footer>`, `<nav aria-label>`. Skip-to-content link.
- No client-side-only content for anything that must be indexed — it must be in the server-rendered HTML.

## Logo & icons (acceptance criteria)

The logo serves four distinct surfaces — each wants its own export from one master. Treating "the logo" as a single file loses either the search-result icon or the knowledge-panel logo.

- **Header logo** — prefer inline `<svg>` (crisp at any DPI, no request, themeable via `currentColor` for the dark bands). Raster fallback is `next/image` with explicit `width`/`height` (CLS=0) and **never** `priority` (the hero is the LCP, not the logo). The link wraps to `/`. **Accessible name is the brand only** (`alt="SucStrat"` / `<title>SucStrat</title>`) — no tagline or keyword stuffing. **Never wrap the logo in `<h1>`** (the H1 is the page headline; the logo is a home link).
- **Search-result favicon** — a *separate, square* asset built from the **mark/monogram, not the wordmark** (a wordmark rescaled to 16×16 is mush). Square (1:1), sized as a multiple of 48 (48/96/144) or an SVG (no fixed size); Google rescales to 16×16. App Router placement under `src/app/`: `icon.svg` (primary; stable URL, no content hash), optional `favicon.ico`, optional `icon.png` (96/144), and **`apple-icon.png` at 180×180** (generated via `next/og` `ImageResponse` — no raster tool needed). The favicon file and the home page must be crawlable (don't block in `robots.ts`); keep the URL stable across deploys (Google caches favicons).
- **Knowledge-panel logo** — driven by `Organization` JSON-LD, **not** the favicon. Set `logo` (and `image`) to an **absolute, stable** `https://sucstrat.com/...` URL served from `/public` (not the hashed `@static` bundle), designed to read on **all-white**. Keep one canonical `@id`; add `sameAs` with real profile URLs (LinkedIn etc.) when available — **never fabricate**. Validate with Google's Rich Results Test.
- **Social card** — `app/opengraph-image` at 1200×630 (brand appearance / CTR, not a ranking factor).
- **Asset pipeline** — one SVG master → header SVG (`currentColor`), favicon set (square mark, `.ico`/SVG/PNG), `apple-icon` 180, a structured-data logo PNG that reads on white, and the 1200×630 OG card. Descriptive filenames (`sucstrat-logo.png`); don't churn these URLs between deploys.
- **Open inputs (`TODO`)**: no vector master or square brand **mark** has been supplied — header uses the optimized raster wordmark and the favicon/`apple-icon` use a derived serif **"S"** monogram (swap in a real mark/SVG when available). `sameAs` profile URLs are pending (`SOCIAL_PROFILES` in `content/site.ts`).

## Performance / a11y bar

- Lighthouse (mobile) ≥ 95 on Performance, SEO, Best Practices, Accessibility for every route.
- Zero `axe-core` violations.
- CLS ~0: reserve space for images/fonts. LCP image `priority`. No layout shift from the stat counters.
- Respect `prefers-reduced-motion` for the counter animation and any transitions.

## Never do

- Never paste the reference mockups' markup, classes, ids, or inline styles into the build.
- Never fabricate copy, stats, testimonials, awards, or job listings. If the reference shows a number/claim, carry it across verbatim; if content is missing, leave a `// TODO(content):` and list it in PLAN.md — do not invent.
- Never invent SEO metadata content (descriptions, etc.) beyond a reasonable draft clearly marked `TODO(seo-copy)` for human review.
- Never add a dependency, CMS, DB, auth, or analytics without it being in the approved PLAN.md.
- Never use `<img>`, raw Google-Fonts `<link>`, `any`, `localStorage`/`sessionStorage` for anything indexable, or client components where a server component works.
- Never mark a phase complete with failing gates.

## Commands

```
pnpm dev            # local
pnpm build          # MUST pass clean before any phase is "done"
pnpm typecheck      # tsc --noEmit, zero errors
pnpm lint           # eslint, zero errors/warnings
pnpm test           # unit (vitest)
pnpm test:e2e       # playwright smoke: every route 200s, h1 present, no console errors
pnpm lhci           # lighthouse-ci against the gate above
```

## Definition of done (per page)

build clean · typecheck clean · lint clean · matches reference design intent · metadata + JSON-LD present and valid · Lighthouse ≥95 ·  axe clean · Playwright smoke passing · all content carried (no fabrication) · TODOs logged in PLAN.md.
