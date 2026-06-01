# Home — Content Extraction (source of truth)

- **Route:** `/`
- **Exact `<title>`:** `SucStrat | Strategy to Scale, execution built in`
- **Exact `<h1>`:** `Your Success. Our Strategy.`  (rendered across two lines; "Strategy" is emphasized in blue with an animated underline SVG. Line 1: "Your Success." / Line 2: "Our Strategy.")
- **`<h1>` count:** 1
- **Meta description:** none present in mockup → `TODO(seo-copy)`

> Note: the fixed `.demo-badge` reads "Concept mockup · homepage" — IGNORE, not site content.

---

## Header / Primary nav (fixed, navy, scroll-shadow)

Logo: SVG logo mark labeled "SucStrat" (aria-label), links to `#top`.

Nav links (in order):
1. Home → `#top`
2. Know Us → `know_us_mockup.html`
3. What We Do → `#wwd`  (note: header link is an in-page anchor to the What We Do section, NOT the standalone page)
4. Clients → `clients_mockup.html`
5. Careers → `careers_mockup.html`
6. Knowledge → `knowledge_mockup.html`

Header CTA button (white): **Get in Touch** → `#contact` (in-page anchor to the CTA band)

Mobile menu toggle button: hamburger icon (`☰`), `aria-label="Menu"`. Client-side: opens nav as a vertical dropdown panel below the 76px header.

---

## SECTION 1 — Hero (split-media)

- **Eyebrow:** `India's only execution-first consulting firm`
- **H1 (serif):** `Your Success.` / `Our Strategy.`  ("Strategy" emphasized blue + animated hand-drawn underline; trailing period after Strategy)
- **Sub:** `From strategy to scale, with success built in.`
- **CTA pair:**
  - Primary (navy button): **Get in Touch** → `#contact`
  - Secondary (ghost-navy button): **See how we scale** → `#cases`

**Media:** right 50% of hero is a navy panel with a diagonal mask containing an animated `<canvas>` (`#heroFlow`) — flowing horizontal "cadence" sine-wave lines in blues/white. There is also CSS for a Ken-Burns background image layer (`.hero-media .img`, `@keyframes kenburns`), but no image src is set in the markup — the canvas is what renders. No `<img>`/`alt` in hero.

**Hero motion:** eyebrow fades in; h1 lines slide up (staggered reveal); underline SVG path draws in; sub + actions fade in; canvas animates continuously (pauses on tab hidden).

---

## SECTION 2 — Pillars ("The SucStrat Standard")

Section head:
- **H2 (serif):** `The SucStrat Standard`
- **Lead:** `How we think. How we build. How we win.`

4-card numbered grid (each: number / animated bar / h3 / body):

- **Card 01** — title: `Strategy to Scale` — body: `Vision crafted, outcomes delivered end-to-end.`
- **Card 02** — title: `Built With You` — body: `True partnership, aligned at every step.`
- **Card 03** — title: `Execution Excellence` — body: `Flawless delivery, every single day.`
- **Card 04** — title: `Process Power` — body: `Disciplined systems that make success repeatable.`

Motion: cards reveal-on-scroll; on hover, card lifts, border darkens, accent bar widens.

---

## SECTION 3 — Impact metrics band (navy, count-up)

- **Eyebrow:** `Our impact`
- **H2 (serif):** `Three decades of operating, measured the only way that counts: in outcomes.`

Metrics grid (3 columns × 2 rows = 6 stat counters). Each animates count-up from 0 to target when scrolled into view. Format = prefix / value / suffix:

| Value (verbatim) | Label |
|---|---|
| `127+` | `Clients served` |
| `53+` | `Institutional clients` |
| `93+` | `Projects delivered` |
| `₹250cr+` | `Value created` |
| `30` | `Years operating experience` |
| `8` | `Countries` |

(Raw data-to targets: 127, 53, 93, 250, 30, 8. Prefix "₹" on Value created; suffixes "+", "+", "+", "cr+", —, —.)

---

## SECTION 4 — Global impact (world map + sector cloud)

Section head:
- **H2 (serif):** `Global impact`
- **Sub:** `Execution that travels, from Hyderabad to Helsinki, across 21 sectors and four continents.`

**Map box:** interactive D3 + topojson world map (`#worldmap`, 960×480 viewBox, Natural Earth projection). Served countries are filled (gradient on scroll into view); HQ + engagement pins plotted at country centroids; HQ pin (India) has an animated halo.

**Legend (top-right):** `Headquarters` (navy dot) · `Engagement` (blue dot)

**Map hover tooltip** shows per region: eyebrow (Headquarters/Engagement), region name (h4), optional footnote (cities/countries), a count line ("N sectors"), and sector chips. (India tooltip uses a wider 2-col layout.)

**Region data (from script — real SucStrat data, drives map + tooltips):**

- **India** — eyebrow `Headquarters` (HQ). Footnote: `Delhi, Madhya Pradesh, Hyderabad, Uttar Pradesh, Mumbai`. Sectors (20): Hospitality & Leisure; Fashion, Luxury & Lifestyle; Education & EdTech; Student Housing & Campus Infrastructure; Broadcast & Media; Publishing & Print Media; Media & Entertainment Tech; Infrastructure & Smart Cities; Film & Content Production; Technology & Innovation; Government & Public Policy; HealthTech & Digital Health; Healthcare & Medical Services; AI, Deep Tech & Data Science; Real Estate & Urban Development; Food Services & QSR; FMCG & Packaged Goods; Faith, Culture & Spiritual Enterprises; Textile & Home Furnishing; Aviation & Aerospace.
- **United States** — `Engagement`. Country: United States of America. Sectors (5): Fashion, Luxury & Lifestyle; Education & EdTech; Student Housing & Campus Infrastructure; HealthTech & Digital Health; Real Estate & Urban Development.
- **Middle East** — `Engagement`. Countries: United Arab Emirates, Saudi Arabia, Qatar, Oman. Footnote: `UAE, Saudi Arabia, Qatar, Oman`. Sectors (8): Fashion, Luxury & Lifestyle; Education & EdTech; Student Housing & Campus Infrastructure; Media & Entertainment Tech; HealthTech & Digital Health; Real Estate & Urban Development; Textile & Home Furnishing; Aviation & Aerospace.
- **United Kingdom** — `Engagement`. Sectors (1): Fashion, Luxury & Lifestyle.
- **Finland** — `Engagement`. Sectors (1): Hospitality & Leisure.
- **Russia** — `Engagement`. Sectors (1): Fashion, Luxury & Lifestyle.
- **Mauritania** — `Engagement`. Sectors (1): Mining & Natural Resources.
- **Zimbabwe** — `Engagement`. Sectors (1): Mining & Natural Resources.

**Sector cloud** (below map):
- Label: `Sectors we serve`
- Hint: `Hover a sector to highlight where we run it`
- Chips (clickable/hover) — full `ALL_SECTORS` list (21):
  1. Hospitality & Leisure
  2. Fashion, Luxury & Lifestyle
  3. Mining & Natural Resources
  4. Education & EdTech
  5. Student Housing & Campus Infrastructure
  6. Broadcast & Media
  7. Publishing & Print Media
  8. Media & Entertainment Tech
  9. Infrastructure & Smart Cities
  10. Film & Content Production
  11. Technology & Innovation
  12. Government & Public Policy
  13. HealthTech & Digital Health
  14. Healthcare & Medical Services
  15. AI, Deep Tech & Data Science
  16. Real Estate & Urban Development
  17. Food Services & QSR
  18. FMCG & Packaged Goods
  19. Faith, Culture & Spiritual Enterprises
  20. Textile & Home Furnishing
  21. Aviation & Aerospace

Interaction: hovering/clicking a sector chip lights up (navy) the regions/countries that run that sector on the map and dims the rest; pins light up too. Map-failure fallback text: `Map failed to load.`

> Data note: the copy says "21 sectors" — the master sector list has 21 entries; India alone lists 20 (it excludes "Mining & Natural Resources"). Carry "21 sectors" verbatim.

---

## SECTION 5 — What We Do (two-column practice list)

Left column:
- **Eyebrow:** `What we do`
- **H2 (serif):** `Seven integrated practices. One operating discipline.`
- **Body:** `From corporate strategy to digital transformation to execution on the ground, we work across the full arc, then stay to make it hold.`
- **CTA (navy button):** **Explore what we do** → `what_we_do_mockup.html`

Right column — practice list (7 items, each a link with a hover arrow `→`, all → `what_we_do_mockup.html`):
1. Strategy
2. Digital & AI Transformation
3. Business Transformation
4. Marketing, Brand & Communication
5. Startup & Leadership Advisory
6. Venture Funding & Investment
7. Public Policy & Social Impact

Motion: list links shift right + turn blue on hover; arrow fades in.

---

## SECTION 6 — Cases ("Proof, not promises.")

Section head:
- **H2 (serif):** `Proof, not promises.`
- **Sub:** `A few of the rooms we stayed in until the number moved.`

4 case-study logo cards (each: logo image w/ text fallback / eyebrow / big stat / stat label / hover-expand body / "Read the case →"). Whole card is a link.

- **Card 1 — Sakshi Media Group** → `https://sucstrat.com/sakshi-media-group`
  - Logo img src: `https://sucstrat.com/wp-content/uploads/2025/09/sakshi.jpg`, alt: `Sakshi Media Group` (text fallback: "Sakshi Media Group")
  - Eyebrow: `Turnaround`
  - Stat: `₹147cr`  (₹ prefix, "cr" suffix)
  - Stat label: `Profit, up from a ₹14 cr loss`
  - Body: `A break-even media group to ₹147 cr profit in three years, with standalone P&Ls, Must-Win Battles, and India's first paperless newsroom.`
  - Link text: `Read the case →`

- **Card 2 — Mohan Babu University** → `https://sucstrat.com/mohan-babu-university`
  - Logo img src: `https://sucstrat.com/wp-content/uploads/2025/09/MBU.jpg`, alt: `Mohan Babu University`
  - Eyebrow: `Education`
  - Stat: `18k+`
  - Stat label: `Students, up from 7,000`
  - Body: `Brownfield to a globally linked university, with industry curriculum, 86% placements, and partnerships with Penn State and RWTH Aachen.`
  - Link text: `Read the case →`

- **Card 3 — Valmar** → `https://sucstrat.com/valmar`
  - Logo img src: `https://sucstrat.com/wp-content/uploads/2025/09/valmar.jpg`, alt: `Valmar`
  - Eyebrow: `Housing & Food-tech`
  - Stat: `₹80cr+`  (₹ prefix, "cr+" suffix)
  - Stat label: `FY25 revenue`
  - Body: `5,000+ beds and 24,000 meals a day, built from feasibility to live operations, with smart kitchens, ops dashboards, and IPO structuring.`
  - Link text: `Read the case →`

- **Card 4 — Dainik Bhaskar** → `https://sucstrat.com/dainik-bhaskar`
  - Logo img src: `https://sucstrat.com/wp-content/uploads/2025/09/dainik-Bhaskar.jpg`, alt: `Dainik Bhaskar`
  - Eyebrow: `National Media`
  - Stat: `4th`
  - Stat label: `Largest daily in the world`
  - Body: `Consumer-connect programmes and insights-led GTM at national scale, aligning editorial and sales across the group.`
  - Link text: `Read the case →`

Motion: cards lift on hover; grayscale logo goes color; body expands; "Read the case →" fades up.

---

## SECTION 7 — Founder bio (Vinay Maheshwari)

Left: portrait block. No real image src — placeholder shows monogram `VM` over caption `Vinay Maheshwari` on a navy panel (CSS `.portrait .img` Ken-Burns/grayscale layer exists but no src set). → `TODO(content)`: founder portrait image.

Right:
- **Eyebrow:** `The operator`
- **H2 (serif):** `Vinay Maheshwari`
- **Role:** `Founder & Principal Consultant, SucStrat`
- **Highlight (callout):** `30+ years of transforming institutions, scaling businesses, and coaching leaders.`

Stat tiles (4) — value / label:
- `3 Decades` / `Leadership`
- `225+` / `Industry Awards`
- `100+` / `Clients`
- `8` / `Countries`

Bio paragraphs:
1. `Vinay Maheshwari is the driving force behind SucStrat. Over a three-decade career, he has led large-scale organizations, turned around underperforming businesses, and scaled high-growth ventures.`
2. `As Group CEO of India TV, Executive Director & CEO of Sakshi Media Group, and Senior Vice President at Dainik Bhaskar Group, Vinay has consistently delivered transformation at scale, from restoring profitability to building India's largest and the world's third-largest newspaper.`
3. `Today, as Founder of SucStrat, he brings this depth of experience to promoters, boards, CXOs, and institutions, delivering consulting that is practical, execution-focused, and built to scale.`

Credentials block:
- Label: `Leadership track record`
- Items (role / org-or-year):
  - `India TV` — `Group CEO`
  - `Sakshi Media Group` — `ED & CEO`
  - `Dainik Bhaskar Group` — `Senior VP`
  - `CEO of the Year` — `2021`

---

## SECTION 8 — CTA band (navy, centered) — `id="contact"`

- **H2 (serif):** `Ready to scale, with success built in?`  ("scale" emphasized italic/blue)
- **CTA pair:**
  - Primary (white button): **Get in Touch** → `https://sucstrat.com/pitch-us`
  - Secondary (ghost-white button): **See how we scale** → `#cases`

---

## Footer (multi-column, navy-deep)

Brand block: SucStrat logo (→ `#top`) + tagline `India's only execution-first consulting firm`.

Link columns:

**Company**
- Know Us → `know_us_mockup.html`
- What We Do → `#wwd`
- Clients → `clients_mockup.html`
- Careers → `careers_mockup.html`

**More**
- Knowledge → `knowledge_mockup.html`
- Case Studies → `https://sucstrat.com/case-studies`
- Get in Touch → `#contact`

**Contact**
- `connect@sucstrat.com` (plain text span, not a mailto link)
- `[confirm contact details]` (placeholder span)

Footer base:
- `© 2026 SucStrat. All rights reserved.`
- `Privacy` &nbsp; `Terms` (plain text spans — NOT links; no hrefs)

---

## Interactive / animated behaviors (summary)

- **Header scroll shadow:** adds solid border + shadow when `scrollY > 20`.
- **Hero canvas flow:** continuous animated sine-wave "cadence" lines; pauses when document hidden (visibilitychange).
- **Hero entrance:** eyebrow/sub/actions fade; h1 lines staggered slide-up; underline SVG draw-in.
- **Reveal-on-scroll:** `.reveal` elements fade/translate in via IntersectionObserver (threshold .15), unobserved after.
- **Count-up stats:** impact metrics animate 0→target (cubic ease-out, ~1500ms) once, when ≥60% visible.
- **Mobile menu:** hamburger toggles a vertical nav dropdown (inline-styled in mockup; rebuild as client component).
- **World map:** D3/topojson render; served-country gradient fill triggers when map ≥20% in view; per-region hover tooltip (India = wide variant); pins with HQ halo.
- **Sector cloud ↔ map cross-highlight:** hover/click a sector chip lights matching regions/pins and dims others; leaving clears.
- **Card hovers:** pillar cards lift + bar grows; practice-list rows indent + arrow reveal; case cards lift + logo de-grayscale + body expand + "Read the case →" reveal; founder portrait de-grayscale on hover.
- **prefers-reduced-motion:** NOT handled in mockup → must be added per CLAUDE.md (counter + transitions).

---

## Content gaps / placeholders / off-mockup links

- Footer Contact: literal placeholder `[confirm contact details]`.
- Footer email `connect@sucstrat.com` is plain text — decide mailto in rebuild.
- Footer `Privacy` / `Terms` are non-linked text (no destination pages provided) → `TODO(content)`: privacy & terms routes/links.
- Hero media: no image src (canvas only); CSS Ken-Burns layer unused → no asset to carry.
- Founder portrait: placeholder monogram only, no image → `TODO(content)`: portrait asset.
- Meta description / OG / canonical: none in mockup → `TODO(seo-copy)`.
- **Off-mockup / external links (remap later):**
  - CTA + "Get in Touch" (CTA band) → `https://sucstrat.com/pitch-us` (contact page — to be built per CLAUDE.md).
  - 4 case cards → `https://sucstrat.com/{sakshi-media-group | mohan-babu-university | valmar | dainik-bhaskar}` (case-study detail pages — stub routes per CLAUDE.md).
  - Footer "Case Studies" → `https://sucstrat.com/case-studies` (index — stub route).
  - Header/footer "Get in Touch" anchors → `#contact` (in-page); hero/CTA "See how we scale" → `#cases` (in-page).
  - Header & footer "What We Do" point to `#wwd` (in-page anchor), while the section CTA + practice list point to the standalone `what_we_do_mockup.html`. Reconcile in nav remap (likely `/what-we-do`).
- Case-study logo images are hot-linked from `sucstrat.com/wp-content/uploads/2025/09/*.jpg` with JS `onerror` text fallback → in rebuild, self-host via `next/image` or use logotype fallback.
