# REVIEW.md — SucStrat Website (final audit)

> **Post-audit change (2026-06-27):** the `/clients` route was removed and its client logos were moved into a scrolling `LogoMarquee` on `/what-we-do` (replacing the "Industries we serve" sector grid). Gate/route counts and the `/clients` Lighthouse row below are from the original audit and predate that change — the live site now has 5 content pages and the e2e suites no longer cover `/clients`.

Built across the phased plan in `PLAN.md`. All six content pages + `/get-in-touch` + case-study stubs are implemented from the verbatim extractions in `content-extraction/*.md`. Run everything under **Node 20** (`.nvmrc`; `corepack`-provided pnpm).

## 1. Gate results

| Gate | Command | Result |
|---|---|---|
| Build | `pnpm build` | ✅ clean — all routes prerendered static. Also builds as a static export (`STATIC_EXPORT=1`) for GitHub Pages; `/pitch-us` 308-redirects to `/get-in-touch` on a Node host |
| Types | `pnpm typecheck` | ✅ 0 errors (`strict` + `noUncheckedIndexedAccess`) |
| Lint | `pnpm lint` | ✅ 0 errors / 0 warnings |
| Unit | `pnpm test` | ✅ 18 passed (vitest) — incl. MethodFrameworks rail/panel-swap + LogoMarquee a11y/hover-pause |
| E2E | `pnpm test:e2e` | ✅ **8 smoke** (every route 200, exactly one `<h1>`, no console/page errors) + **9 axe** (per route + a per-panel "Our Method" scan), **zero violations**. The `/clients` route was removed (8 routes), and the "Our Method" contrast fix is verified with axe-core 4.11.4. |
| Lighthouse | `pnpm lhci` | ✅ green — **A11y / SEO / Best-Practices = 100** (hard `error` gates ≥95) on every route. **Performance is a `warn`-level target**: 6/9 routes ≥95; Home/Clients/Case-studies 92–94, accepted per sign-off (see §2). |

**Cross-page integrity:** no `*_mockup.html` links, no absolute `sucstrat.com` nav links (absolute URLs only in canonical/OG/JSON-LD), all internal hrefs resolve to real routes, and every in-page anchor (`#cases`, `#practices`, `#how`, `#life`, `#insights`) has a matching target. No 404s. Nav/footer consistent site-wide.

## 2. Lighthouse performance — accepted at 92–94 on 3 routes (signed off)

**Decision (accepted):** performance is a **`warn`-level** target in `lighthouserc.json`; A11y / SEO / Best-Practices stay hard `error` gates at ≥95 (passing at 100). The three routes below are accepted as-is given the excellent observed performance. The levers to reach a strict 95 (system-serif headings, or fetched-on-scroll map data) remain available if priorities change.

| Route | Perf (median of 3) | | Route | Perf |
|---|---|---|---|---|
| `/what-we-do` `/know-us` `/careers` `/knowledge` `/get-in-touch` `/case-studies/[slug]` | **0.95 ✅** | | `/` | 0.92 |
| | | | `/clients` | 0.94 |
| | | | `/case-studies` | 0.93 |

**Root cause:** the LCP element is the serif (Lora) hero heading, and Lighthouse's **Lantern simulated-throttling** model gates that heading's paint on the web-font download (~2.9s on emulated slow-4G) regardless of `font-display: swap`/`optional` or `preload`. The **observed** (unthrottled) LCP is **50 ms** — the real pages are effectively instant; CLS = 0 and TBT ≈ 0 everywhere. The shortfall tracks page weight: lighter pages clear 95, the three most content-rich don't (even the near-empty case-studies stub sits at 0.93, confirming it's the font ceiling, not content).

**Optimizations already applied** (kept): merged the world map's 169 background countries into one path (smaller SVG + far fewer DOM nodes); `content-visibility` to skip the off-screen map; inlined CSS (no render-blocking stylesheet); transform-only scroll reveals + non-animated hero heading (both LCP-safe); removed the competing logo image preload.

**To reach a strict ≥95 on all routes** (each trades something — recommend a product decision rather than a silent change):
1. **System-serif hero headings** (drop Lora from the LCP element only / site-wide) — removes the font-gated LCP entirely, at the cost of the brand serif. *Highest impact.*
2. **Ship the world-map geometry as a fetched-on-scroll JSON** (not in the Home document) — trims Home's HTML.
3. **Accept 92–94** on the three routes given the excellent real-world performance.

## 3. Outstanding `TODO(content)`

| # | Item | Where | Current state |
|---|---|---|---|
| 1 | **Seven practice descriptions** | `/what-we-do` accordion (`content/whatWeDo.ts`) | ✅ **Done** — client-supplied taglines + sub-service lists for all seven practices (rendered as tagline + service chips). |
| 2 | **Third-party logos** — 24 client (Clients), 5 award (Know Us), 4 case (Home/Clients) | logo wall / awards / case cards | Now rendered via `next/image` **hot-linked from the live `sucstrat.com` CDN** (same source URLs as the mockups; `remotePatterns` allow-listed; grayscale→colour). **For production: self-host** the assets under `/static` (or a CDN you control) so the site doesn't depend on the WordPress origin, then drop the remote pattern. |
| 3 | **Real brand mark** | `app/icon.svg`, `app/apple-icon.tsx` | Favicon is a square navy **monogram** ("S") + a 180×180 `apple-icon` (both derived, not the wordmark); structured-data `logo` wired. **Pending:** a real designed square mark / SVG master to swap in, and (optional) a query-less `app/favicon.ico` (needs a rasterizer). |
| 4 | **Privacy / Terms** | footer | Plain text (no pages provided). Decide whether to add `/privacy`, `/terms`. |
| 5 | **Case-study content** | `/case-studies` + 4 `[slug]` | Stub routes (out of scope per CLAUDE.md), correct metadata. |
| 6 | **Framework diagrams** (Know Us) & **per-card icons** (Careers / Know Us / What We Do) | sections | ✅ **Done** — 4 bespoke SVG framework illustrations + a 31-icon line-icon registry (`primitives/Icon.tsx`) wired across How-we-work, Impact-at-a-glance, What-stays-constant, Industries, and all Careers cards. |
| 7 | **Knowledge `http://` link** | Media & Broadcast card 3 | Kept verbatim (`allaboutnewspapers.com`); upgrade to `https` if available. |

## 4. Outstanding `TODO(seo-copy)`

- **Meta descriptions** (every route) — drafted in each `page.tsx`; human review.
- **`/get-in-touch`** — now built from `get_in_touch_mockup.html` (hero + 6-card "Reach us" grid + "Let's talk" form). Copy is verbatim from the mockup; the expanded form (inquiry type, first/last name, email, phone, company, country, message, consent) composes a prefilled `mailto:` on submit (static-host friendly). `/pitch-us` 308-redirects here.
- **OG image** — shared brand card via `app/opengraph-image.tsx`; customise if desired.
- **`Organization` `sameAs` / `logo`** — ✅ both wired: `logo`/`image` → `/sucstrat-logo.png`; `sameAs` → the LinkedIn company page (`https://www.linkedin.com/company/sucstrat`, from the Get in Touch mockup). Add any further authority profiles (Crunchbase, etc.) to `SOCIAL_PROFILES` in `content/site.ts` as they exist.

## 5. Contact form

`/get-in-touch` is a **static `mailto:` form** (`ContactForm.tsx`): it composes a prefilled email on submit, so it needs no backend and deploys to any static host (incl. GitHub Pages). Native HTML5 validation enforces the required fields + consent. To take submissions **without** the mail-app handoff, point the `<form>` at a static form provider (Web3Forms / Formspree — add their access-key hidden input). For a Node host, the earlier zod-validated **Server Action + `EmailTransport`** (Resend-ready, honeypot) is preserved in git history (commit `d17ede7`).

## 6. Assumptions still worth confirming

1. **Header CTA** is a single site-wide **"Get in Touch" → /get-in-touch** (the mockups varied the label per page). Page-specific CTA labels ("Book a discovery call", "Apply now", …) are preserved in each page's **hero + CTA band**.
2. **Contact email** `ashley@v3consultant.com` (footer + `/get-in-touch`); **careers** apply/talent mailtos also use `ashley@v3consultant.com` (per sign-off — was `careers@sucstrat.com`).
3. **Stat figures are carried verbatim per page and intentionally differ** across pages (e.g. founder tiles: "225+ Industry Awards" on Home vs "300+ Brand solutions" on Know Us; "21 sectors" vs 12 industry tiles vs 21 cloud chips). Not reconciled — flag if a single source of truth is wanted.
4. Reference files were clean semantic mockups (not Wix exports) — `CLAUDE.md` corrected (approved).

## 7. Deploy notes

**GitHub Pages (configured, default target).** [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) builds a static export (`STATIC_EXPORT=1` → `output: export`, `/sucstrat` basePath, `images.unoptimized`, mailto form, metadata routes forced static) and publishes to **https://rishav-c1.github.io/sucstrat/** on every push to `main`. Enable Pages once (owner action): Settings → Pages → Source: GitHub Actions. For a custom domain, add `public/CNAME` + drop the basePath (README has details).

**Node host (Vercel / Netlify / Cloudflare).** A plain `pnpm build` (no `STATIC_EXPORT`) keeps `next/image` optimization + the `/pitch-us → /get-in-touch` redirect.
- **Node:** `engines.node >= 20.9` + `.nvmrc` (20).
- **Build:** `pnpm build` (detected `packageManager: pnpm@9`); `experimental.inlineCss` is on.
- **Domain / canonicals:** `metadataBase` + JSON-LD use `https://sucstrat.com` (`src/content/site.ts`) — the intended production domain; update if it differs.
- **Assets:** `/static` (imported, optimized) + `/public` (served logo, `.nojekyll`).

---
*Final audit. Verbatim copy: `content-extraction/*.md`. Plan & decisions: `PLAN.md`.*
