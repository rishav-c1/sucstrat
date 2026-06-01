# Clients — Content Extraction

> Source-of-truth content extraction for the SucStrat **Clients** page rebuild.
> Verbatim copy + design intent only. No markup/classes carried over.

- **Route:** `/clients`
- **`<title>`:** `Clients | SucStrat`
- **`<h1>`:** `Partners in performance.` (single h1 — confirmed exactly one `<h1>` on page)
- **Meta description:** none present in mockup → `TODO(seo-copy)`

---

## Page structure (DOM / visual order)

1. Site header + primary nav (shared)
2. Page hero — "khero" centered text hero (eyebrow + h1 + sub + CTA pair)
3. "Our clients" intro + logo wall (3 grouped logo grids)
4. Clients impact stats band (navy, 4 count-up stats)
5. "Impact highlights" case-study logo cards (4, hover-expand)
6. CTA band (navy, centered)
7. Footer (shared)

---

## 1. Header / Primary nav (SHARED COMPONENT)

Fixed navy header, scroll-shadow (`.solid` class toggled when `scrollY > 20`). Logo at left links to `#top`. Logo is an inline SVG (`<use href="#sucstrat-logo">`) with `aria-label="SucStrat"` — note: the referenced `#sucstrat-logo` symbol is NOT defined in this cleaned file (logo asset to be supplied in rebuild).

Primary nav links (in order):
| Label | Raw href |
|---|---|
| Home | `sucstrat_homepage_mockup.html` |
| Know Us | `know_us_mockup.html` |
| What We Do | `what_we_do_mockup.html` |
| Clients | `#top` (current page — self/anchor) |
| Careers | `careers_mockup.html` |
| Knowledge | `knowledge_mockup.html` |

Header CTA button (white): **`Work With Us`** → `#contact` (in-page anchor to the CTA band).

Mobile: hamburger button (`☰`, `aria-label="Menu"`) shown ≤900px; toggles the nav into a stacked dropdown panel.

---

## 2. Hero ("khero" — centered text hero, page-specific variant)

Light background (`--hero-bg #f2f6fb`), centered/left-aligned text block, min-height ~54vh. Entrance animations: eyebrow fades in, h1 rises, sub rises, CTAs rise (staggered). No split media / canvas on this page's hero (this is a lighter inner-page hero, distinct from the homepage split-media hero).

- **Eyebrow:** `Clients`
- **H1:** `Partners in performance.`
- **Sub:** `We work with teams solving high-stakes problems across industries and stages.`
- **CTAs:**
  - Primary (navy btn): **`Work with us`** → `#contact`
  - Secondary (ghost-navy btn): **`See our work`** → `#cases`

---

## 3. "Our clients" intro + Logo Wall

Section background: `--mist #eef2f7`.

### Section head
- **Eyebrow:** `Our clients`
- **H2:** `The companies we build with`
- **Lead paragraph:** `From market leaders to emerging disruptors, we partner with organisations that shape industries and scale with intent.`

The logo wall is split into **three labeled groups**, each with an h3 + context paragraph, then a grid of logo cells. Each logo cell shows an `<img>` logo (grayscale, brightens on hover) with a hidden text-name fallback (`.lname`) revealed via `onerror` if the image fails to load.

> NOTE: All logo images are sourced from `https://sucstrat.com/wp-content/uploads/2025/09/...`. In the clean rebuild these become local assets; the `alt` text below is the brand name and should be preserved.

### Group A — "Industry leaders"
- **H3:** `Industry leaders`
- **Context:** `Market leaders and institutions we partner with to shape, turn around, and scale.`
- **Logos (16, in order — alt text / fallback name / src):**
  1. `Hamar Hajaala` — `.../hamar-hajaala.jpg`
  2. `Dainikpuri` — `.../Dainikpuri.jpg`
  3. `Narayana` — `.../Narayana.jpg`
  4. `The Cake Room` — `.../The-Cake-Room.jpg`
  5. `Sparsh` — `.../sparsh.jpg`
  6. `Sree Vidyanikethan` — `.../Sree-Vidyanikethan.jpg`
  7. `New York` — `.../New-York.jpg`
  8. `Nav Bharath` — `.../Nav-Bharath.jpg`
  9. `Mohan Babu University` — `.../MBU.jpg`
  10. `Maison AVA` — `.../Maison-AVA.jpg`
  11. `Hypolator` — `.../Hypolator.jpg`
  12. `Kutchina` — `.../kutchina.jpg`
  13. `Kespariya` — `.../kespariya.jpg`
  14. `AVA` — `.../AVA.jpg`
  15. `24 Frames` — `.../24-frames.jpg`
  16. `Valmar` — `.../valmar.jpg`

### Group B — "Alliance network"
- **H3:** `Alliance network`
- **Context:** `Collaborators who bring depth, reach, and specialist expertise to client outcomes.`
- **Logos (3, in order):**
  1. `EY` — `.../ey-1.jpg`
  2. `Korn Ferry` — `.../Kf.jpg`
  3. `S&P` (alt rendered from `S&amp;P`) — `.../SP.jpg`

### Group C — "Innovators & startups"
- **H3:** `Innovators & startups` (rendered from `Innovators &amp; startups`)
- **Context:** `High-growth ventures we help unlock new markets and scale.`
- **Logos (5, in order):**
  1. `RunTailor` — `.../RunTailor.jpg`
  2. `Kalaclap` — `.../kalaclap.jpg`
  3. `Papa Pawsome` — `.../papa-pawsome.jpg`
  4. `Therapeutics` — `.../therapeutics.jpg`
  5. `SpaceBasic` — `.../spacebasic.jpg`

---

## 4. Clients Impact Stats Band (navy)

Navy background, full-width band, 4-column grid of count-up stats. Numbers animate from 0 to target on scroll into view (`data-to`, ~1.4s cubic ease-out, fires once at 60% visibility). Respect `prefers-reduced-motion` in rebuild — show final value, no count-up.

| Stat value (final) | Suffix | Label |
|---|---|---|
| `127` | `+` | `Clients served` |
| `53` | `+` | `Institutional clients` |
| `8` | — | `Countries` |
| `21` | — | `Sectors` |

(Rendered as: **127+**, **53+**, **8**, **21**.)

---

## 5. "Impact highlights" — Case-study logo cards (4)

Section id `#cases` (target of hero "See our work" CTA). White background. 4-column card grid. Each card is a link to a case-study page; logo at top (grayscale → color on hover), eyebrow, big serif stat, stat label, then a body paragraph that is hidden by default and **expands on hover** (max-height animation) along with a "Read the case →" link that fades in.

### Section head
- **Eyebrow:** `Impact highlights`
- **H2:** `Complex challenges, clarified and delivered`
- **Lead:** `A few of the rooms we stayed in until the number moved.`

### Card 1 — Sakshi Media Group
- **Link href:** `https://sucstrat.com/sakshi-media-group`
- **Logo:** alt `Sakshi Media Group` — `.../sakshi.jpg` (text fallback: `Sakshi Media Group`)
- **Eyebrow:** `Multi-vertical turnaround`
- **Stat:** `₹147cr` (prefix `₹`, value `147`, suffix `cr`)
- **Stat label:** `Profit, up from a ₹14 cr loss`
- **Body (hover):** `TV rank 2nd to 3rd, 100%+ YoY digital growth. Standalone P&Ls, Must-Win Battles, and India's first paperless newsroom.`
- **Link text:** `Read the case →`

### Card 2 — Dainik Bhaskar
- **Link href:** `https://sucstrat.com/dainik-bhaskar`
- **Logo:** alt `Dainik Bhaskar` — `.../dainik-Bhaskar.jpg` (text fallback: `Dainik Bhaskar`)
- **Eyebrow:** `National circulation leadership`
- **Stat:** `4th`
- **Stat label:** `Largest daily, worldwide`
- **Body (hover):** `Consumer-connect programmes, insights-led GTM, and cross-functional alignment at national scale.`
- **Link text:** `Read the case →`

### Card 3 — Mohan Babu University
- **Link href:** `https://sucstrat.com/mohan-babu-university`
- **Logo:** alt `Mohan Babu University` — `.../MBU.jpg` (text fallback: `Mohan Babu University`)
- **Eyebrow:** `Brownfield to university`
- **Stat:** `18k+` (value `18k`, suffix `+`)
- **Stat label:** `Students, up from 7,000`
- **Body (hover):** `86% placements, 3,100 offers, NAAC A+. Partnerships with Penn State, RWTH, and UW-Madison.`
- **Link text:** `Read the case →`

### Card 4 — Valmar
- **Link href:** `https://sucstrat.com/valmar`
- **Logo:** alt `Valmar` — `.../valmar.jpg` (text fallback: `Valmar`)
- **Eyebrow:** `Student housing & food-tech`
- **Stat:** `₹80cr+` (prefix `₹`, value `80`, suffix `cr+`)
- **Stat label:** `FY25 revenue`
- **Body (hover):** `5,000+ beds, 24,000 meals a day, ₹38 cr+ EBITDA, with a 10,000+ bed pipeline.`
- **Link text:** `Read the case →`

> These 4 case-study links point to off-mockup pages (`/sakshi-media-group`, `/dainik-bhaskar`, `/mohan-babu-university`, `/valmar`). Per CLAUDE.md these map to `/case-studies/[slug]` stub routes: `sakshi-media-group`, `mohan-babu-university`, `valmar`, `dainik-bhaskar`. Remapping handled later.

---

## 6. CTA Band (navy, centered) — id `#contact`

Section id `#contact` (target of header "Work With Us" CTA and hero "Work with us" CTA). Navy background, centered.

- **H2:** `Let's build something that scales.` — the word **`scales`** is emphasized (italic, lighter blue accent).
- **CTAs:**
  - Primary (white btn): **`Book a working session`** → `https://sucstrat.com/pitch-us`
  - Secondary (ghost-white btn): **`Explore case studies`** → `https://sucstrat.com/case-studies`

---

## 7. Footer (SHARED COMPONENT)

Deep-navy background (`--navy-deep #1b3140`).

- Logo (SVG `aria-label="SucStrat"`) → `#top`
- **Tagline:** `India's only execution-first consulting firm`

### Footer link columns
**Company**
| Label | Raw href |
|---|---|
| Know Us | `know_us_mockup.html` |
| What We Do | `what_we_do_mockup.html` |
| Clients | `#top` |
| Careers | `careers_mockup.html` |

**More**
| Label | Raw href |
|---|---|
| Knowledge | `knowledge_mockup.html` |
| Case Studies | `https://sucstrat.com/case-studies` |
| Get in Touch | `#contact` |

**Contact**
- `connect@sucstrat.com` (plain text span, not a mailto link in mockup)
- `[confirm contact details]` (placeholder span, muted styling — see Content gaps)

### Footer base (legal row)
- `© 2026 SucStrat. All rights reserved.`
- `Privacy` and `Terms` (rendered as `Privacy &nbsp;&nbsp; Terms` — two adjacent labels, NOT links in mockup; no hrefs)

---

## Interactive / animated behaviors

| Behavior | Trigger | Notes |
|---|---|---|
| Header scroll shadow | `window.scrollY > 20` | toggles `.solid` (border + box-shadow) |
| Reveal-on-scroll | IntersectionObserver, threshold 0.12 | `.reveal` elements fade/translate up once, then unobserved |
| Mobile nav dropdown | click hamburger (`.menu-btn`) | expands `nav.main` into stacked navy panel below header |
| Hero entrance | autoplay on load | eyebrow fade-in; h1/sub/CTAs rise with stagger |
| Logo cell hover | hover | grayscale→color, opacity 0.65→1, lift + shadow |
| Count-up stats | IntersectionObserver, threshold 0.6, once | `data-to` values animate 0→target over ~1.4s, cubic ease-out (`1-(1-p)^3`) |
| Case card hover-expand | hover on `.ccard` | hidden body paragraph expands (max-height 0→200px) + "Read the case →" fades in; logo de-grayscales; card lifts |

> All count-up / motion must respect `prefers-reduced-motion` (CLAUDE.md a11y bar — render final values, no animation).

---

## Content gaps / placeholders / off-mockup links

- **`[confirm contact details]`** — verbatim placeholder in footer Contact column → `// TODO(content)`.
- **Meta description** — absent; needs `TODO(seo-copy)` draft.
- **Footer contact email** `connect@sucstrat.com` is plain text — likely should become a `mailto:` link in rebuild (confirm).
- **Footer `Privacy` / `Terms`** — shown as text, no destinations. Real routes not provided → `// TODO(content)` for legal page targets.
- **Off-mockup CTA/link targets:**
  - `https://sucstrat.com/pitch-us` — contact page (CTA "Book a working session"). Per CLAUDE.md, build `/pitch-us` contact form (Server Action). 
  - `https://sucstrat.com/case-studies` — case-studies index (CTA "Explore case studies" + footer "Case Studies"). Stub route per CLAUDE.md.
  - Case cards → `https://sucstrat.com/sakshi-media-group`, `/dainik-bhaskar`, `/mohan-babu-university`, `/valmar` — map to `/case-studies/[slug]` stub routes.
- **Logo assets** — all `https://sucstrat.com/wp-content/uploads/2025/09/*.jpg`; must be downloaded/replaced with local optimized assets (`next/image`). Each has `onerror` text fallback in mockup; rebuild should provide real `alt` (brand name) and a graceful fallback.
- **Logo SVG symbol** `#sucstrat-logo` referenced but not defined in cleaned HTML — supply logo component in rebuild.

## NOT site content (ignore)
- `.demo-badge` fixed badge ("Concept mockup · …") — per instructions, not part of the page.
