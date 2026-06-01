# What We Do — Content Extraction

> Source-of-truth content extraction from the cleaned Wix mockup (`/tmp/sucstrat_clean/what_we_do_mockup.clean.html`).
> For a clean Next.js (App Router) + TS + CSS-Modules rebuild. **Verbatim copy** — do not paraphrase, round numbers, or invent. Markup/classes are NOT carried over.

- **Route:** `/what-we-do`
- **`<title>`:** `What We Do | SucStrat`
- **`<h1>` (exactly one):** `What we do.`
- **Meta description:** none present in mockup → `TODO(seo-copy)`.

---

## Section-by-section walkthrough (DOM / visual order)

### 0. Site header + primary nav (shared component)
Fixed navy header, scroll-shadow (gets `.solid` border + box-shadow once `scrollY > 20`).
- Logo: SVG `<use href="#sucstrat-logo">`, `aria-label="SucStrat"`, links to `#top`.
- Primary nav links (label → raw href):
  - Home → `sucstrat_homepage_mockup.html`
  - Know Us → `know_us_mockup.html`
  - What We Do → `#top` (current page; self-link to top)
  - Clients → `clients_mockup.html`
  - Careers → `careers_mockup.html`
  - Knowledge → `knowledge_mockup.html`
- Header CTA button (`.btn-white`): **"Book a Discovery Call"** → `#contact` (in-page anchor to the CTA band on this page).
- Mobile menu toggle button (`.menu-btn`), `aria-label="Menu"`, glyph `☰` (`&#9776;`). Client behavior: on click, expands `nav.main` as a stacked navy dropdown.

---

### 1. Page hero (`.khero`) — eyebrow + serif h1 + sub + CTA pair
Light hero background (`--hero-bg #f2f6fb`), text-only (no media on this page's hero; entrance animations: eyebrow fades, h1 rises, sub rises, acts rise).

- **Eyebrow:** `Our services`
- **H1 (serif):** `What we do.`
- **Sub (`.ksub`):** `We collaborate with visionary leaders, institutions, businesses, startups, and governments to solve complex strategic challenges, unlock growth, and create scalable transformation.`
- **CTA pair (`.acts`):**
  - `.btn-navy` → **"Book a discovery call"** → `#contact`
  - `.btn-ghost-navy` → **"See our practices"** → `#practices`

---

### 2. Approach band (`.firm-band`) — eyebrow + serif blockquote-style line
Mist background (`--mist #eef2f7`). Single emphasized serif line with a blue left-border rule.

- **Eyebrow:** `Our approach`
- **Statement (`.firm-line`):** `Strategy, execution, innovation, and leadership, working together to create measurable and sustainable impact.`

---

### 3. Stats band (`.wd-stats`) — 4-up count-up metrics
Navy background, full-bleed 4-column grid with hairline dividers. Each value animates from 0 to its target (count-up, cubic ease-out over ~1400ms) when it scrolls into view (threshold 0.6, fires once). **Carry the target numbers, not the literal "0" placeholders.**

| Value (`data-to`) | Suffix | Label |
|---|---|---|
| `127` | `+` | `Clients served` |
| `8` | — | `Countries` |
| `30` | — | `Years operating` |
| `21` | — | `Sectors` |

Rendered values: **127+**, **8**, **30**, **21**.

> NOTE — cross-page stat discrepancy to flag for human review: the homepage/known shared "impact metrics" likely use different figures; the count-up labels/values here are this page's source of truth. Carry verbatim: `127+` Clients served · `8` Countries · `30` Years operating · `21` Sectors.

---

### 4. Practices section (`.practices`, `id="practices"`) — section head ONLY
White background. Contains a `sec-head` but **no body content / no cards / no accordion items in the DOM**.

- **Eyebrow:** `Our consulting services`
- **H2 (serif):** `Seven integrated practices`
- **Lead paragraph:** `Strategic thinking, digital capability, market intelligence, leadership alignment, and execution excellence, in one operating system.`

> ⚠️ **CONTENT GAP (major):** The heading promises **"Seven integrated practices"**, and the page's CSS + JS fully implement an **accordion** (`.acc`, `.acc-item`, `.acc-head`, `.acc-num`, `.acc-title`, `.acc-body`, `.acc-tag`, `.acc-chips .chip`, with `.acc-item.open` rotate-chevron behavior and a one-open-at-a-time click handler). **But the markup contains ZERO accordion items** — the seven practices' titles, italic tags, and chip lists are missing. The five "delivery" cards in §5 (Strategy / Digital Capability / Market Intelligence / Leadership Alignment / Execution Excellence) are NOT the seven practices — they are the "what stays constant" set. The seven named practices are not present anywhere in this mockup. → `TODO(content): provide the 7 integrated practice titles + descriptions/chips for the accordion under #practices.`

---

### 5. How-we-deliver section (`.wd-deliver`) — 5 numbered cards
Navy background. Section head + a 5-column card grid (each card: number, line-icon, serif h3, body). Cards reveal-on-scroll.

- **Eyebrow:** `How we deliver`
- **H2 (serif):** `What stays constant`
- **Lead paragraph:** `Whatever the practice, five things hold true across every engagement.`

Cards (in order — note: no visible numerals are populated in the markup, though `.wdd-num` styling exists; icons are decorative line-SVGs):
- **Card 1 — `Strategy`** — `Adaptive strategy built for the market, not just the boardroom.`
- **Card 2 — `Digital Capability`** — `AI, analytics, and tooling that compound over time.`
- **Card 3 — `Market Intelligence`** — `Every move grounded in competitive and customer insight.`
- **Card 4 — `Leadership Alignment`** — `Consensus, capability, and conviction at every level.`
- **Card 5 — `Execution Excellence`** — `Strategy translated into operating rhythm and measurable outcomes.`

---

### 6. Industries section (`.industries`) — sector tile grid (13 tiles)
Mist background. Section head + a 4-column tile grid (each tile: line-icon + serif name). Tiles reveal-on-scroll; hover reveals a blue left accent bar + lift.

- **Eyebrow:** `Sectors`
- **H2 (serif):** `Industries we serve`
- **Lead paragraph:** `Deep contextual understanding across the sectors we operate in.`

Tiles (in DOM order, entity-decoded):
1. `Education & Universities`
2. `Media & Communication`
3. `Consumer & Retail`
4. `Healthcare`
5. `Industrial & Manufacturing`
6. `Technology & AI`
7. `Public Policy`
8. `Startups & Emerging Businesses`
9. `Social Impact Organisations`
10. `Real Estate & Infrastructure`
11. `Digital & Internet Businesses`
12. `Skill Development & Learning`

> 13th `.ind-name` entries: there are **12** named tiles in the markup. (Stats band says `21` Sectors; only 12 are listed here — not a contradiction to fix, but note the gap between "21 Sectors" claim and 12 displayed industries.)

---

### 7. CTA band (`.cta-band`, `id="contact"`) — centered navy
Navy background, centered. The `#contact` anchor target for the header CTA and hero "Book a discovery call" buttons.

- **H2 (serif, with italic blue emphasis on "transform"):** `Ready to transform?`
  - Markup: `Ready to <span class="em">transform</span>?` — "transform" is styled italic in `--blue-soft`.
- **CTA pair (`.acts`):**
  - `.btn-white` → **"Book a discovery call"** → `https://sucstrat.com/pitch-us`
  - `.btn-ghost-white` → **"Explore case studies"** → `https://sucstrat.com/case-studies`

---

### 8. Footer (shared component)
Navy-deep background, multi-column.

- Logo (SVG `#sucstrat-logo`, `aria-label="SucStrat"`) → `#top`.
- **Tagline:** `India's only execution-first consulting firm`
- **Link columns:**
  - **Company**
    - Know Us → `know_us_mockup.html`
    - What We Do → `#top`
    - Clients → `clients_mockup.html`
    - Careers → `careers_mockup.html`
  - **More**
    - Knowledge → `knowledge_mockup.html`
    - Case Studies → `https://sucstrat.com/case-studies`
    - Get in Touch → `#contact`
  - **Contact**
    - `connect@sucstrat.com` (plain text span, not a mailto link)
    - `[confirm contact details]` (literal placeholder span, muted styling)
- **Footer base:**
  - `© 2026 SucStrat. All rights reserved.`
  - `Privacy   Terms` (two labels in one span; not separate links in markup)

---

## Images
- **No raster/`<img>` content images on this page.** The only graphics are:
  - The SucStrat logo, rendered as an inline SVG via `<use href="#sucstrat-logo">` (header + footer). `aria-label="SucStrat"`. (Referenced symbol `#sucstrat-logo` is not defined in this cleaned file — comes from the shared logo sprite.)
  - Decorative inline line-icon SVGs inside the 5 delivery cards and 12 industry tiles (no `alt`, purely decorative — should be `aria-hidden` in rebuild).

---

## CTAs / buttons (consolidated, label → raw href)
| Location | Label | Raw href | Style |
|---|---|---|---|
| Header | Book a Discovery Call | `#contact` | btn-white |
| Hero | Book a discovery call | `#contact` | btn-navy |
| Hero | See our practices | `#practices` | btn-ghost-navy |
| CTA band | Book a discovery call | `https://sucstrat.com/pitch-us` | btn-white |
| CTA band | Explore case studies | `https://sucstrat.com/case-studies` | btn-ghost-white |
| Footer (More) | Get in Touch | `#contact` | text link |

> Note inconsistency to reconcile later: the header + hero "Book a discovery call" go to the in-page `#contact` band, but the *CTA-band's own* "Book a discovery call" goes to the off-site `https://sucstrat.com/pitch-us`. In the rebuild, all "Book a discovery call" / "Book a Discovery Call" CTAs should likely route to `/pitch-us`.

---

## Interactive / animated behaviors
- **Header scroll-shadow:** adds `.solid` (border + shadow) when `window.scrollY > 20`; passive scroll listener; runs once on load.
- **Reveal-on-scroll:** elements with `.reveal` (section heads, delivery cards, industry tiles) fade/translate-up in via IntersectionObserver (threshold 0.15), unobserved after firing once.
- **Mobile nav toggle:** `.menu-btn` click expands `nav.main` into a stacked navy dropdown panel below the header.
- **Count-up stat counters** (stats band §3): each `[data-to]` value animates 0 → target with a cubic ease-out over ~1400ms, triggered when it enters the viewport (IntersectionObserver threshold 0.6), fires once per element (tracked via WeakSet). Targets: 127, 8, 30, 21.
- **Accordion (DEFINED BUT UNUSED):** CSS + a click handler for `.acc-head` exist (one-item-open-at-a-time, chevron rotate, max-height expand) — but there are no `.acc-item` elements in the DOM, so nothing is interactive here. Tied to the missing "Seven integrated practices" content (§4).
- **Hero entrance animations:** eyebrow fade-in, h1 rise, sub rise, CTA acts rise (CSS keyframe `rise`/`fade`, staggered delays).
- **Hover micro-interactions (CSS-only):** delivery cards lift + shadow on hover; industry tiles lift + reveal blue left accent bar on hover; nav links underline-grow; buttons color-swap.

> The CSS also carries styles for components NOT rendered on this page (split-media `.hero`, `.pillars`/`.pcard`, `.impact`/`.metric`, world map `.geo`/`#worldmap`/`.map-tip`/`.sector-cloud`, two-column `.wwd`/`.plist`, case logo cards `.cases`/`.ccard`, founder block `.founder`). These are leftover shared-stylesheet rules — **none of these components appear in this page's `<body>`** and they carry no content to extract.

---

## Content gaps / placeholders / off-mockup links
- **`[confirm contact details]`** — literal placeholder text in the footer Contact column.
- **Missing "Seven integrated practices" body** — the `#practices` section has only a heading + lead; the promised seven practices (and their accordion items/descriptions/chips) are absent. `TODO(content)`.
- **Stat vs. industries mismatch** — stats claim `21` Sectors but only 12 industry tiles are listed (informational; verify intended sector count).
- **Meta description / SEO copy** — none in mockup → `TODO(seo-copy)`.
- **No raster images / no OG image** defined on the page → shared OG image to be supplied in rebuild.
- **Off-mockup / external links referenced (must not 404 in rebuild):**
  - `https://sucstrat.com/pitch-us` (contact page — CTA-band "Book a discovery call")
  - `https://sucstrat.com/case-studies` (CTA-band "Explore case studies" + footer "Case Studies")
- **In-page anchors:** `#contact` (CTA band) and `#practices` (practices section) and `#top` (page top / logo).
- **Email:** `connect@sucstrat.com` appears as plain text (no `mailto:`); rebuild may wrap as a `mailto:` link.
- **Footer "Privacy" / "Terms"** are plain text, not linked in the mockup — likely need real `/privacy` and `/terms` (or similar) links.

---

## Notes for the content layer / rebuild
- Single `<h1>`: "What we do." ✓ (only one h1 in the body).
- Heading hierarchy: h1 (hero) → h2 per section (firm-band uses an emphasized `<p>`, not a heading — the firm-band has no h2, just eyebrow + statement paragraph) → h3 for delivery cards. The stats band and industries tiles use the serif-styled values/names (industry names are spans, not headings).
- All section navy/mist/white backgrounds alternate; preserve that rhythm in the rebuild.
- This page is the canonical home for the §3 impact numbers (127+/8/30/21) and the §6 industry list — feed both into the typed content layer.
