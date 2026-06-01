# PLAN.md — SucStrat Website

**Status:** Phase 0 signed off (2026-06-01). Phase 1 (design system & shared shell) in progress.

**Phase 0 sign-off resolutions:**
- Email provider: **TBD — intended Resend** (non-critical); `EmailTransport` stays stubbed (console in dev) until integrated.
- Reference discrepancy: **`CLAUDE.md` corrected** (approved).
- Lato 500/600 → 400/700 mapping: **accepted**.
- Node 20: **nvm default set to 20** (approved).
- Assets provided in `/static/` (alias `@static/*`): logos (`logo_white` = default/dark-bg; `logo_navy`/`logo_black` = light-bg; `logo_wordmark_navy` = tagline-free) + founder portrait `Vinay-Maheshwari.jpg` (1400×936).
- Contact email: **ashley@v3consultant.com** (resolves `[confirm contact details]`; supersedes mockup `connect@sucstrat.com`).
**Source of truth for copy:** `content-extraction/*.md` (verbatim, one file per page — written during ingest). This plan references those files rather than duplicating all copy.
**Binding spec:** `CLAUDE.md`. Where this plan makes a call, it is flagged; genuine forks are listed in §12 with a recommendation.

---

## 1. ⚠️ Reference discrepancy (flag per CLAUDE.md "stop and flag" rule)

`CLAUDE.md` describes `/reference/` as *Wix HTML exports — machine-generated markup with a multi-hundred-KB minified Wix runtime blob and absolutely-positioned divs.* **The actual files do not match that description, in our favour:**

| CLAUDE.md says | Reality (measured) |
|---|---|
| Located in `/reference/` | Located in **`/html_static_pages/`** (6 files) |
| Wix export, machine-generated | **Clean, hand-authored semantic HTML** — one `<h1>`/page, correct h2/h3 nesting |
| Multi-hundred-KB Wix runtime blob | Bulk is **embedded base64 Lato/Lora fonts** (6 `data:font` blobs) + a few inline base64/SVG images; no Wix runtime |
| Absolutely-positioned divs | Normal flow / flexbox / CSS grid; only ~11 incidental `position:absolute` (hero mask, map tooltip) |
| `wixstatic.com` assets | Images point at **`sucstrat.com/wp-content/...`** (WordPress) |

Each file also ships a **complete, consistent CSS design system** in `:root` (byte-identical across all six pages) and real interaction JS (scroll-reveal, count-up, D3 world map). 

**Impact:** the reference is far higher-fidelity than assumed. I can carry exact tokens, type scale, spacing, copy, and interaction logic. **The binding rule still holds and is honoured:** rebuild clean & semantic in Next.js/React/CSS-Modules — no markup, class, id, inline-style, or font-blob copy/paste. I am only flagging that the stated rationale is inaccurate; no change to approach unless you object.

---

## 2. Final route map

All six content pages are **static (SSG)**, React Server Components, with `"use client"` only on interactive leaves (§10).

| Route | Source | h1 | `<title>` |
|---|---|---|---|
| `/` | `sucstrat_homepage_mockup.html` | Your Success. Our Strategy. | SucStrat \| Strategy to Scale, execution built in |
| `/what-we-do` | `what_we_do_mockup.html` | What we do. | What We Do \| SucStrat |
| `/know-us` | `know_us_mockup.html` | Strategy. Built to Scale. | Know Us \| SucStrat |
| `/clients` | `clients_mockup.html` | Partners in performance. | Clients \| SucStrat |
| `/careers` | `careers_mockup.html` | Build more than a career. Build legacies. | Careers \| SucStrat |
| `/knowledge` | `knowledge_mockup.html` | Insights & ideas. | Knowledge \| SucStrat |

**Off-mockup routes (referenced by nav/CTAs; build so they never 404):**

| Route | Type | Notes |
|---|---|---|
| `/pitch-us` | **Real contact page** | Contact form → zod-validated **Server Action** → stubbed email transport (§9). The only backend in the project. |
| `/case-studies` | Stub index | Linked from every footer ("Case Studies"). Proper metadata; placeholder body; flagged stub. |
| `/case-studies/sakshi-media-group` | Stub detail | Case card target (remapped — see §4). |
| `/case-studies/mohan-babu-university` | Stub detail | " |
| `/case-studies/valmar` | Stub detail | " |
| `/case-studies/dainik-bhaskar` | Stub detail | " |

Case-study detail stubs share one `app/case-studies/[slug]/page.tsx` with `generateStaticParams` over the four slugs. Index + detail bodies are "case study coming soon" placeholders with correct titles/canonicals — **content is explicitly out of scope** per CLAUDE.md (logged in §11).

---

## 3. Design system spec (confirmed from the references)

The `:root` block is **identical across all six pages** — this is the canonical system. Token names below use CLAUDE.md's palette scale as the primitive layer, with the mockup's functional tokens layered on top. Full mapping so nothing is lost:

### 3.1 Color tokens (`tokens.css`)

| Canonical (CLAUDE.md) | Hex | Mockup name(s) | Role |
|---|---|---|---|
| `--navy-900` | `#1b3140` | `--navy-deep` | Footer bg, deepest navy |
| `--navy-800` | `#264259` | `--navy`, `--ink` | Primary navy: header, navy bands, body ink |
| `--blue-700` | `#355c7d` | `--navy-2` | Mid accent |
| `--blue-600` | `#4476a1` | `--blue` | Primary blue accent, links/hover |
| `--blue-500` | `#5d90ba` | `--blue-soft`, `--blue-bright` | Eyebrows, emphasis, on-navy accent |
| `--blue-200` | `#a9c0d8` | (`.land.served`) | Map served-country fill |
| `--mist-100` | `#cfdbe8` | (`.land`) | Map base land, soft fills |
| `--bg-100` | `#eef2f7` | `--mist` | Mist section bg |
| `--bg-50` | `#f2f6fb` | `--hero-bg` | Light hero bg |
| `--slate` | `#5a6e80` | `--muted` | Muted body text |
| `--white` | `#ffffff` | `--paper` | Paper/white |
| — | `#e6e6e6` | `--mist-2` | Hairline gray (rare) |
| `--on-navy` | `#cdd9e6` | `--on-navy` | Footer text on navy |
| `--on-navy-mute` | `#8ba0b5` | `--on-navy-mute` | Footer muted on navy |
| `--line` | `rgba(38,66,89,.14)` | `--line` | Hairline border on light |
| `--line-2` | `rgba(38,66,89,.24)` | `--line-2` | Stronger hairline |
| `--line-navy` | `rgba(255,255,255,.14)` | `--line-navy` | Hairline on navy |

Functional aliases (`--ink`, `--muted`, `--paper`, `--hero-bg`, `--mist`) will be defined in `tokens.css` pointing at the primitives, so component CSS reads naturally and matches the references.

### 3.2 Typography

- **Families** (next/font/google, self-hosted, `display:swap`, subset `latin`, exposed as CSS vars `--font-serif`, `--font-sans`):
  - **Lora** → headings/serif. Weights **400, 500, 600, 700** + **italic 400** (all available on Google Fonts). ⚠️ The mockups embed only Lora 400 and faux-bold the rest; the rebuild loads the real weights actually used in CSS (500 on lists/CTA band, 600 on headings, italic on emphasis spans) to avoid synthetic bold.
  - **Lato** → body/UI/sans. ⚠️ **Constraint:** Google Fonts ships Lato only at **100/300/400/700/900 — no 500/600** (the mockups' Lato 500/600 came from a non-Google embed). Since CLAUDE.md mandates `next/font/google`, we load **Lato {400, 700}** and map the design's medium(500)→400 and semibold(600)→700. *Alternative if exact fidelity is required: self-host Lato 500/600 via `next/font/local` — but that deviates from the mandated `next/font/google`; flagged for your call (§12).*
- **Base:** body 17px / line-height 1.6 / `--ink` on `--paper`.
- **Type scale (from CSS, fluid via `clamp`):**

| Token | Family / weight | Size | LH / tracking | Used for |
|---|---|---|---|---|
| Eyebrow | Lato 600 | 11px | uppercase, `.18em` | section eyebrows (`--blue-600`) |
| Display h1 | Lora 600 | `clamp(34px,5vw,60px)` | 1.07 / `-.02em` | page hero h1 |
| h2 | Lora 600 | `clamp(30px,4.2vw,48px)` | ~1.06 / `-.02em` | section heads |
| CTA-band h2 | Lora 500 | `clamp(32px,5vw,56px)` | 1.08 | navy CTA bands |
| h3 | Lora 500–600 | 21–22px | 1.15 | card titles, list items |
| Stat value | Lora 600 | `clamp(42px,5vw,58px)` | 1 | count-up metrics |
| Lead / sub | Lato 400 | 17–19px | 1.55 | section leads, hero sub (`--slate`) |
| Body sm | Lato 400 | 13.5–15px | 1.5 | card bodies |
| Button | Lato 600 | 14–15px | — | `.btn` |
| Nav link | Lato 500 | 14.5px | — | header nav |

### 3.3 Spacing, layout, radius, motion

- **Container:** max-width **1200px**, gutter **48px** (→ **24px** ≤900px).
- **Section rhythm:** ~**100px** vertical (variants: hero 110px top, founder 64px, CTA band 108px). Alternating band backgrounds: paper → mist → navy, preserved per page.
- **Header height:** 76px, fixed.
- **Radius:** buttons 2px; cards 6–8px; pills/tiles 6px.
- **Grid gaps:** 18–20px (card grids), 52–60px (two-column splits).
- **Breakpoints:** **980** (4-col → 2-col), **900** (nav → hamburger, gutter shrink, splits stack, hero media hidden), **600** (some grids → fewer cols), **560** (grids → 1-col). Codify as `--bp-*` doc constants (CSS uses literal media queries).
- **Elevation:** `0 16px 44px rgba(38,66,89,.10)` (card hover), `0 2px 24px rgba(0,0,0,.18)` (header shadow), `0 14px 40px rgba(38,66,89,.18)` (tooltip).
- **Motion:** reveal = opacity 0→1 + translateY(22px)→0 over .7s; count-up ~1.4–1.5s cubic ease-out; hover lifts translateY(-3 to -5px). **All gated behind `prefers-reduced-motion: no-preference`** (mockups don't do this — we must, per a11y bar).

---

## 4. Navigation graph (reconciled) + link-remap table

**Primary nav (header) — identical 6 items site-wide:** Home · Know Us · What We Do · Clients · Careers · Knowledge. Current page is non-linked / `aria-current="page"`.

**Header CTA is page-contextual in the mockups.** The shared `Header` takes a `cta={label, href}` prop; defaults to **Get in Touch → /pitch-us**. Per-page mockup labels preserved:

| Page | Header CTA label | → |
|---|---|---|
| Home | Get in Touch | /pitch-us |
| What We Do | Book a Discovery Call | /pitch-us |
| Know Us | Book a Call | /pitch-us |
| Clients | Work With Us | /pitch-us |
| Careers | Apply Now | `mailto:careers@sucstrat.com?subject=Application` |
| Knowledge | Get in Touch | /pitch-us |

**Footer — identical site-wide:** Company [Know Us · What We Do · Clients · Careers] · More [Knowledge · Case Studies · Get in Touch] · Contact [**ashley@v3consultant.com**] · base [© 2026 SucStrat. All rights reserved. · Privacy · Terms].

**Raw-href → clean-route remap (applied everywhere):**

| Raw href in mockups | Clean target |
|---|---|
| `sucstrat_homepage_mockup.html`, `#top` (on Home) | `/` |
| `know_us_mockup.html`, `https://sucstrat.com/know-us` | `/know-us` |
| `what_we_do_mockup.html`, **`#wwd`** (dead anchor on inner pages / Home section link) | `/what-we-do` |
| `clients_mockup.html` | `/clients` |
| `careers_mockup.html` | `/careers` |
| `knowledge_mockup.html` | `/knowledge` |
| `#contact` (header/hero/footer "Get in Touch") | `/pitch-us` |
| `https://sucstrat.com/pitch-us` | `/pitch-us` |
| `https://sucstrat.com/case-studies` | `/case-studies` |
| `https://sucstrat.com/sakshi-media-group` | `/case-studies/sakshi-media-group` |
| `https://sucstrat.com/mohan-babu-university` | `/case-studies/mohan-babu-university` |
| `https://sucstrat.com/valmar` | `/case-studies/valmar` |
| `https://sucstrat.com/dainik-bhaskar` | `/case-studies/dainik-bhaskar` |
| `mailto:careers@sucstrat.com?subject=...` | kept verbatim (Careers apply) |
| external article URLs (Knowledge, 16 cards) | kept verbatim, `target="_blank" rel="noopener"` |
| `connect@sucstrat.com` (plain text) | rendered as `mailto:connect@sucstrat.com` (minor enhancement) |
| `Privacy` / `Terms` (plain text, no target) | kept as plain text (no pages provided) — see §11 |

**In-page anchors retained where they exist** (homepage `#cases`, `#wwd`; "See our work/practices/approach" jumps): these stay as same-page smooth-scroll anchors on the page that actually contains the section. "Get in Touch"/CTA-band primary buttons route to `/pitch-us`.

---

## 5. Component inventory

**Convention:** Server Component unless marked **[client]**. One `*.module.css` per component. Decorative SVG icons inline with `aria-hidden`.

### 5.1 Shared layout & primitives
- `Header` + `PrimaryNav` (fixed navy) — **[client]** thin wrapper only for scroll-shadow (`scrollY>20`) + mobile toggle; nav markup is server-rendered.
- `MobileNav` toggle — **[client]** leaf.
- `Footer` (multi-column).
- `SkipLink` (skip-to-content).
- `Container` (`.wrap`), `Eyebrow`, `Button` (variants: white / navy / ghost-navy / ghost-white), `SectionHead` (eyebrow + h2 + lead).
- `Reveal` — **[client]** IntersectionObserver fade/translate wrapper; reduced-motion → render visible, no transform.
- `StatCounter` — **[client]** count-up; reduced-motion → final value immediately. Used by all stat bands.
- `Logo` — inline SVG wordmark component (replaces `#sucstrat-logo` sprite; **TODO(content)**: final logo artwork — placeholder wordmark for now).
- `JsonLd` — script[type=ld+json] helper.

### 5.2 Heroes
- `SplitMediaHero` (Home) — animated serif h1 (line reveal + underline draw), sub, CTA pair, navy media panel with **[client]** `HeroCanvas` (sine-wave flow; reduced-motion → static gradient).
- `PageHero` (What We Do, Know Us, Clients, Careers, Knowledge) — light bg, eyebrow + serif h1 + sub + CTA pair, CSS entrance only.

### 5.3 Sections / blocks
- `PillarGrid` — numbered/icon cards (Home "SucStrat Standard" ×4; Know Us "How we work" ×4 icon variant).
- `StatBand` — navy count-up band using `StatCounter` (Home ×6, What We Do ×4, Clients ×4).
- `WorldMap` + `SectorCloud` (Home only) — see §8.
- `PracticeList` — two-column hover-arrow list (Home; seeds the 7 practice titles).
- `CaseCards` — hover-expand logo cards (Home ×4, Clients ×4). Logo = text/logotype fallback (no `<img>` until assets supplied).
- `FounderBio` — portrait + tiles + prose + credentials (Home, Know Us). Portrait = monogram placeholder (**TODO(content)**).
- `CtaBand` — centered navy CTA (all pages; italic-blue emphasis word).
- `FirmBand` — pull-quote band (What We Do, Know Us).
- `LogoWall` — 3 grouped logo grids (Clients; 24 logos, text fallback).
- `ImpactGlance` — 3 list-cards (Know Us).
- `Frameworks` — 2×2 SVG-diagram cards (Know Us; 4 inline decorative diagrams).
- `AwardsStrip` — logo row w/ text fallback (Know Us; 5 awards).
- `DeliverCards` — 5 numbered cards "What stays constant" (What We Do).
- `IndustryTiles` — 12 sector tiles (What We Do).
- `IconCardGrid` — 4-up / 2-up icon cards (Careers; 4 sections).
- `PracticeAccordion` — **[client]** one-open-at-a-time (What We Do "Seven integrated practices"). Seeded with 7 verbatim titles from Home; **descriptions = TODO(content)**.
- `InsightCardGrid` — external-article link cards, 4 topic sections (Knowledge; 16 cards).

---

## 6. Per-page section maps

Concise outlines; **verbatim copy lives in `content-extraction/<page>.md`**.

**`/` Home** (`home.md`): SplitMediaHero → PillarGrid "The SucStrat Standard" (4) → StatBand "…in outcomes" (6) → WorldMap + SectorCloud "Global impact" → PracticeList "Seven integrated practices…" (7) → CaseCards "Proof, not promises." (4) → FounderBio "Vinay Maheshwari" → CtaBand "Ready to scale…".

**`/what-we-do`** (`what-we-do.md`): PageHero "What we do." → FirmBand "Our approach" → StatBand (127+/8/30/21) → PracticeAccordion "Seven integrated practices" *(heading+lead present; 7 items = TODO(content))* → DeliverCards "What stays constant" (5) → IndustryTiles "Industries we serve" (12) → CtaBand "Ready to transform?".

**`/know-us`** (`know-us.md`): PageHero "Strategy. Built to Scale." → FirmBand "The firm" → PillarGrid "How we work" (4 icon) → FounderBio "Vinay Maheshwari" → ImpactGlance "throughlines…" (3 list-cards) → Frameworks "Proprietary frameworks" (4) → AwardsStrip "Awards & recognition" (5) → CtaBand "Unlock opportunities.".

**`/clients`** (`clients.md`): PageHero "Partners in performance." → LogoWall "The companies we build with" (Industry leaders 16 · Alliance network 3 · Innovators & startups 5) → StatBand (127+/53+/8/21) → CaseCards "Complex challenges…" (4) → CtaBand "Let's build something that scales.".

**`/careers`** (`careers.md`): PageHero "Build more than a career…" → IconCardGrid "Why SucStrat" (4) → IconCardGrid "What you can expect" (4, navy) → IconCardGrid "Advance your career" (4) → IconCardGrid "Jobs with our clients" (2) → CtaBand "Ready to build something that lasts?". **No `JobPosting` JSON-LD** (no structured listings).

**`/knowledge`** (`knowledge.md`): PageHero "Insights & ideas." → InsightCardGrid ×4 [Education & Skills 7 · Media & Broadcast 3 · Academic Partnerships 3 · Research & Innovation 3] → CtaBand "Have a brief worth solving?". 16 external article links (one is `http://` — flagged; keep verbatim).

---

## 7. SEO plan per route

Common: per-route `metadata`/`generateMetadata` with unique title, description (`TODO(seo-copy)` drafts below — human review), absolute **canonical** (`https://sucstrat.com<route>`), `openGraph`, `twitter: summary_large_image`. One shared OG image (1200×630) via `opengraph-image`; per-page override where it helps. `metadataBase = https://sucstrat.com`.

| Route | Title (from mockup) | Description draft `TODO(seo-copy)` | Page JSON-LD |
|---|---|---|---|
| `/` | SucStrat \| Strategy to Scale, execution built in | "India's only execution-first consulting firm — strategy to scale with execution built in. 30 years, 127+ clients, 8 countries." | `WebSite`, `Person` (Vinay Maheshwari) |
| `/what-we-do` | What We Do \| SucStrat | "Seven integrated consulting practices — strategy, digital & AI, transformation, brand, advisory, funding, public policy — in one operating discipline." | `BreadcrumbList` |
| `/know-us` | Know Us \| SucStrat | "Meet SucStrat and founder Vinay Maheshwari — proprietary frameworks and a thirty-year track record of turnarounds and scale." | `Person` (Vinay Maheshwari), `BreadcrumbList` |
| `/clients` | Clients \| SucStrat | "Partners in performance — the market leaders, institutions, and ventures SucStrat builds with across 21 sectors." | `BreadcrumbList` |
| `/careers` | Careers \| SucStrat | "Build more than a career. Ownership from day one, outcomes over tenure, and work that carries your name." | `BreadcrumbList` |
| `/knowledge` | Knowledge \| SucStrat | "Selected writing and commentary from Vinay Maheshwari across education, media, and building things that scale." | `BreadcrumbList` |
| `/pitch-us` | Pitch Us \| SucStrat *(draft)* | "Tell us the number you want to move. Start a conversation with SucStrat." | `BreadcrumbList`, `ContactPage` |
| `/case-studies`(+slugs) | `<Name> case study \| SucStrat` *(draft)* | placeholder — stub | `BreadcrumbList` |

**Site-wide JSON-LD (root layout):** `Organization` + `ProfessionalService` (name SucStrat, founder Vinay Maheshwari, url sucstrat.com, areaServed from map regions, sameAs `TODO(content)`). **`Person`** (Vinay Maheshwari: Founder & Principal Consultant; built from verbatim bio — no fabrication) on Home + Know Us. **`BreadcrumbList`** on all inner pages. **No `JobPosting`** (no real listings). `app/sitemap.ts` (all routes), `app/robots.ts` (allow all → sitemap).

---

## 8. World map (`/` Global impact) — implementation

Signature homepage element: interactive world map + 21-chip sector cloud with cross-highlighting and per-region tooltips. **Approach chosen for the Lighthouse budget: keep D3 out of the client bundle.**

- **Build/server-time:** `d3-geo` (`geoNaturalEarth1`, `geoPath`, `geoCentroid`) + `topojson-client` decode `world-atlas` `countries-110m` → emit **static SVG `<path>` strings** for served countries + pin centroids into the typed content layer. No D3 ships to the browser.
- **Client leaf** (`WorldMap` **[client]**, small): wires hover → tooltip, sector-chip hover/click → light/dim served regions. Pure DOM class toggling over the pre-rendered SVG. Reduced-motion safe (no entrance animation requirement).
- **Region/sector data** (real, from the mockup script — captured verbatim in `home.md`): India (HQ, 20 sectors) + US, Middle East, UK, Finland, Russia, Mauritania, Zimbabwe; master list **21 sectors**. Lives in `src/content/home.ts`.
- **Fallback:** if the SVG can't render, static text "Map failed to load." (mockup parity). **If the map endangers the perf gate, fallback to a non-interactive highlighted SVG** (flagged §12).

---

## 9. `/pitch-us` contact form — Server Action design

The only backend. Progressive-enhancement form (works without JS).

- **UI:** `app/pitch-us/page.tsx` (server) renders `ContactForm` **[client]** using `useActionState`; `<form action={submitPitch}>`. Inline field errors + pending state + success panel.
- **Server Action** (`'use server'`, `src/app/pitch-us/actions.ts`): parse `FormData` → **zod** schema → on success call `EmailTransport.send()` → return `{ ok: true }`; on failure return typed field errors.
- **Proposed fields** (assumption — exact set is `TODO(content)`, §12): `name` (req, 2–80), `email` (req, email), `organization` (opt), `message` (req, 10–2000), hidden **honeypot** (`company_url`) for spam, optional consent note. No PII stored.
- **Email transport interface** (provider TBD per CLAUDE.md):
  ```ts
  interface EmailTransport { send(msg: PitchMessage): Promise<void> }
  ```
  `ConsoleEmailTransport` (dev: `console.info` the payload) is the default; `createEmailTransport()` factory swaps in a real provider (Resend/SES/SMTP) behind an env flag later. **No provider added now.**
- **Security/a11y:** server-side validation is authoritative; honeypot + (future) rate-limit; labelled inputs, `aria-describedby` errors, focus management on submit; success is announced (`role=status`).

---

## 10. Interactions & accessibility

| Behaviour | Where | Impl | Reduced-motion |
|---|---|---|---|
| Header scroll-shadow | all | [client] thin | n/a (instant) |
| Mobile nav toggle | all | [client] `MobileNav` | n/a |
| Reveal-on-scroll | all | [client] `Reveal` (IO) | render visible, no transform |
| Count-up stats | Home/WWD/Clients | [client] `StatCounter` | final value immediately |
| Hero line/underline entrance | Home | CSS | disabled |
| Hero canvas flow | Home | [client] `HeroCanvas` | static gradient, no rAF |
| World map + sector highlight | Home | [client] `WorldMap` (no D3) | no entrance anim |
| Practice accordion | WWD | [client] `PracticeAccordion` | instant expand |
| Card hover-expands (case/knowledge/pillar/tile) | several | CSS-only | unaffected (hover) |

**a11y bar:** one `<header>/<main>/<footer>`, `<nav aria-label>`, skip link, single h1/page, no skipped heading levels (verified per page), labelled controls, visible focus, decorative SVG `aria-hidden`, indexable content server-rendered. Targets: Lighthouse ≥95 (Perf/SEO/BP/A11y) per route; zero axe violations; CLS ~0 (reserve font/img space, LCP `priority`).

---

## 11. Content gaps — `TODO(content)` / `TODO(seo-copy)` master list

1. **`TODO(content)` — What We Do "Seven integrated practices" accordion bodies.** Titles known (7, verbatim from Home); per-practice descriptions/chips absent in mockup. Seed titles; leave bodies as flagged placeholders.
2. **✅ Resolved — Founder portrait** `static/Vinay-Maheshwari.jpg` (Home + Know Us), served via `next/image`.
3. **✅ Resolved (brand) · `TODO(content)` (third-party logos)** — SucStrat logo provided in `/static/`. The 24 client logos (Clients), 4 case logos, 5 award logos (Know Us) were hotlinked in the mockups → rebuild uses the mockups' **text/logotype fallback** (no `<img>`, no hotlinking) until real assets are supplied.
4. **✅ Resolved — Footer contact:** **ashley@v3consultant.com** (replaces `[confirm contact details]` + mockup `connect@sucstrat.com`).
5. **`TODO(content)` — Privacy / Terms:** no pages/targets provided; kept as plain text (mockup parity). Decide real `/privacy`, `/terms` later.
6. **`TODO(content)` — Careers apply flow:** currently `mailto:careers@sucstrat.com` (kept verbatim); confirm whether to route to `/pitch-us`.
7. **`TODO(content)` — `/case-studies` index + 4 detail bodies:** out of scope (stubs only).
8. **`TODO(seo-copy)` — meta descriptions (all routes), OG image art, Organization `sameAs`/social, `/pitch-us` + case-study titles.** Drafts in §7 for human review.
9. **Observations (carry verbatim, do NOT reconcile):** stat figures differ by page (Home founder "225+ Industry Awards" vs Know Us "300+ Brand solutions"; "21 sectors" vs 12 industry tiles vs 21 cloud chips vs 20 India sectors). One Knowledge link is `http://` (Card 3, Media & Broadcast).

**No copy, stat, testimonial, award, or job listing will be fabricated.** Where missing, a flagged placeholder is rendered and logged here.

---

## 12. Assumptions & forks (each with a recommendation)

1. **Reference discrepancy (§1)** — proceeding on the clean mockups as visual+content truth; honouring "no markup copy." → *Recommend: accept.*
2. **Token naming** — canonical = CLAUDE.md scale names + mockup functional aliases (full map §3.1). → *Recommend: accept.*
3. **Header CTA** — shared `Header` with per-page `cta` prop; default Get in Touch → /pitch-us; Careers → mailto. → *Recommend: accept.*
4. **"Get in Touch"/#contact** routes to **/pitch-us** (not an in-page band) for a real contact path. → *Recommend: accept.*
5. **Map** — server-render SVG, no client D3; interactive highlight only. Fallback to static highlighted SVG if perf at risk. → *Recommend: accept; flag if Lighthouse forces fallback.*
6. **Contact form fields** — name/email/organization/message + honeypot (§9). **Email provider: resolved → TBD/Resend intended, deferred (non-blocking); console stub now.**
7. **Logos/portrait** — text-fallback now, real assets later. → *Recommend: accept.*
8. **Privacy/Terms** — plain text, no routes (mockup parity). → *Recommend: accept; revisit if you want real pages.*

**One-line ask:** the only fork that may block Phase 2 is **#6 — which email provider** for `/pitch-us`? (Everything else proceeds on the recommended default.)

---

## 13. Dependencies (proposed — justify each; nothing installed without your nod)

**Runtime:**
| Package | Why |
|---|---|
| `next`, `react`, `react-dom` | Framework (App Router, RSC) — CLAUDE.md stack |
| `zod` | Contact-form Server Action validation — **mandated** by CLAUDE.md |
| `clsx` | 0.5kb conditional `className` helper for CSS-Module state classes (reveal/active/open). *Optional — can drop for template strings.* |

**Build/dev only (NOT shipped to client):**
| Package | Why |
|---|---|
| `d3-geo`, `topojson-client`, `world-atlas` | Generate the homepage world-map SVG paths at build/server time (§8) |
| `@types/d3-geo`, `@types/topojson-client` | Types for above |
| `typescript`, `@types/react`, `@types/react-dom`, `@types/node` | TS strict |
| `eslint`, `eslint-config-next` | Lint gate |
| `vitest`, `@vitejs/plugin-react`, `jsdom`, `@testing-library/react`, `@testing-library/jest-dom` | Unit tests |
| `@playwright/test` | e2e smoke (route 200s, h1, no console errors) |
| `@axe-core/playwright` | Zero-axe-violation gate |
| `@lhci/cli` | Lighthouse-CI gate (≥95 ×4) |

Fonts: `next/font/google` (built-in, no dep). Styling: CSS Modules (built-in). **No CMS/DB/auth/analytics/Tailwind/CSS-in-JS** (per CLAUDE.md).

---

## 14. Proposed project structure (scaffold)

```
src/
  app/
    layout.tsx                 # root: <html><body>, fonts, header/main/footer, skip link, site JSON-LD
    page.tsx                   # /
    globals.css                # resets + base element styles (imports tokens)
    tokens.css                 # design tokens (CSS custom properties)
    opengraph-image.tsx        # shared OG (1200×630)
    sitemap.ts  robots.ts
    what-we-do/page.tsx
    know-us/page.tsx
    clients/page.tsx
    careers/page.tsx
    knowledge/page.tsx
    pitch-us/{page.tsx, actions.ts, ContactForm.tsx}
    case-studies/{page.tsx, [slug]/page.tsx}
  components/
    layout/   {Header, PrimaryNav, MobileNav, Footer, SkipLink, Container}.{tsx,module.css}
    primitives/ {Eyebrow, Button, SectionHead, Reveal, StatCounter, Logo, JsonLd}...
    sections/ {SplitMediaHero, PageHero, PillarGrid, StatBand, WorldMap, SectorCloud,
               PracticeList, CaseCards, FounderBio, CtaBand, FirmBand, LogoWall,
               ImpactGlance, Frameworks, AwardsStrip, DeliverCards, IndustryTiles,
               IconCardGrid, PracticeAccordion, InsightCardGrid, HeroCanvas}...
  content/    {home, whatWeDo, knowUs, clients, careers, knowledge, site, seo}.ts
  lib/        {email/ (EmailTransport, console, factory), jsonld.ts, worldmap/ (build-time geo)}
  types/
tests/
  unit/ (vitest)   e2e/ (playwright)
content-extraction/   # ingest artifacts (verbatim copy source) — already written
reference/ → html_static_pages/   # visual reference (do not ship)
PLAN.md  REVIEW.md(Phase4)  CLAUDE.md
config: next.config.ts, tsconfig.json, .eslintrc, vitest.config.ts, playwright.config.ts, lighthouserc.json, .gitignore
```

**Commands wired (CLAUDE.md):** `dev`, `build`, `typecheck` (`tsc --noEmit`), `lint`, `test` (vitest), `test:e2e` (playwright), `lhci`.

---

## 15. Phase plan (gated; STOP after each)

- **Phase 0 (this):** ingest + PLAN.md + scaffold. → **STOP for sign-off.**
- **Phase 1:** `tokens.css`, fonts, shared shell (layout/header/nav/footer/skip link), site JSON-LD, `MobileNav` + `StatCounter` + `Reveal` client leaves. Gates: build/typecheck/lint/axe clean. → STOP.
- **Phase 2:** pages in order `/` → `/what-we-do` → `/know-us` → `/clients` → `/careers` → `/knowledge` → `/pitch-us` → case-study stubs. Per-page Definition of Done. → STOP each.
- **Phase 3:** SEO/perf hardening (sitemap/robots/OG, canonical/OG/Twitter, BreadcrumbList, JSON-LD validation, LCP/CLS, `lhci` ≥95 ×4 all routes). → STOP.
- **Phase 4:** full gate sweep + link integrity + `REVIEW.md`. → STOP.

---
*Generated in Phase 0. Verbatim page copy: `content-extraction/*.md`. Awaiting approval/edits before Phase 1.*
