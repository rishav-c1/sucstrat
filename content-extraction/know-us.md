# Know Us — Content Extraction

> Source-of-truth content extraction for the `/know-us` route of the SucStrat rebuild.
> Captured VERBATIM from the cleaned mockup. Do NOT copy markup/classes/styles — design intent + copy only.
> Mockup: `/tmp/sucstrat_clean/know_us_mockup.clean.html`

- **Route:** `/know-us`
- **`<title>`:** `Know Us | SucStrat`
- **`<h1>` (single):** `Strategy. Built to Scale.` (the words "Built to Scale." are emphasized — rendered in blue, `.em` span)
- **Meta description:** none present in mockup (`TODO(seo-copy)` for human review)

---

## 0. Site Header / Primary Nav  (SHARED — already inventoried)

Fixed navy header, scroll-shadow ("solid" class toggles when `scrollY > 20`).

- **Logo:** SVG sprite `#sucstrat-logo`, `aria-label="SucStrat"`, links to `#top`.
- **Primary nav links** (label → raw href):
  - Home → `sucstrat_homepage_mockup.html`
  - Know Us → `#top` (current page; self-anchor)
  - What We Do → `what_we_do_mockup.html`
  - Clients → `clients_mockup.html`
  - Careers → `careers_mockup.html`
  - Knowledge → `knowledge_mockup.html`
- **Header CTA button** (white): `Book a Call` → `#contact`
- **Mobile menu toggle** (client): hamburger `☰` (`&#9776;`), `aria-label="Menu"`. On click, opens nav.main as a stacked navy dropdown below the header.

---

## 1. Know-Us Hero  (`.khero`)

Light hero (`--hero-bg` #f2f6fb), serif h1, no media panel (page-specific simpler hero variant; NOT the split-media homepage hero). Animations: eyebrow fades in; h1 rises; subtitle rises; CTA row rises (staggered).

- **Eyebrow:** `Know us`
- **H1:** `Strategy. Built to Scale.`  — ("Built to Scale." is the blue-emphasized `.em` span)
- **Subtitle (`.ksub`):** `We design strategy systems that don't just look good on paper, they deliver measurable outcomes in the market.`
- **CTA pair (`.acts`):**
  - Button (navy): `Book a discovery call` → `#contact`
  - Button (ghost-navy): `See our approach` → `#how`

---

## 2. Firm Band  (`.firm-band`)

Mist-background band; large serif pull-quote line with blue left border.

- **Eyebrow:** `The firm`
- **Firm line (`.firm-line`):** `SucStrat is India's only execution-first consulting firm. We stay in the room until strategy becomes operating rhythm, and rhythm becomes scale.`

---

## 3. How We Work — Pillars  (`.pillars`, `id="how"`)

Numbered/iconed pillar card grid (4 cards). SHARED component type ("numbered pillar card grid (4)"), here each card uses an **inline SVG icon** (`.pico`) rather than a printed number, plus an animated `.pbar` underline that widens on hover. Reveal-on-scroll.

### Section head
- **Eyebrow:** `Business scale-up coach`
- **H2:** `How we work`
- **Lead/paragraph:** `Four ways we embed with leadership to turn strategy into operating rhythm.`

### Cards (title / body)
- **Card 1 — `Boardroom Coaching`** — icon: dashboard/chart-in-frame. Body: `A 12-week CXO cadence for clarity and execution discipline.`
- **Card 2 — `Leadership Sprints`** — icon: lightning bolt. Body: `Three to five cross-functional plays, shipped in weeks.`
- **Card 3 — `Turnaround Advisory`** — icon: refresh/cycle arrow. Body: `Hands-on embedding for transformation.`
- **Card 4 — `Keynotes & Classes`** — icon: microphone. Body: `Practical playbooks for leadership cohorts.`

---

## 4. Founder Bio Block  (`.founder`)

SHARED component ("founder bio block (portrait + tiles + credentials)"). Two-column: portrait left (4:5, navy, grayscale→color on hover; placeholder shows initials), bio right with highlight bar, stat tiles, prose, and a credentials row. Reveal-on-scroll.

### Portrait (placeholder)
- Initials: `VM`
- Caption: `Vinay Maheshwari`
- (Portrait is a CSS placeholder block — NO `<img>` / src in mockup. Real portrait image is `TODO(content)`: needs a photo of Vinay Maheshwari, alt e.g. "Vinay Maheshwari, Founder & Principal Consultant of SucStrat".)

### Bio column
- **Eyebrow:** `The operator`
- **H2:** `Vinay Maheshwari`
- **Role (`.role`):** `Founder & Principal Consultant, SucStrat`
- **Highlight bar (`.f-highlight`):** `30+ years of transforming institutions, scaling businesses, and coaching leaders.`

#### Stat tiles (`.f-tiles`) — value / label  (4 tiles)
- `3 Decades` / `Leadership`
- `300+` / `Brand solutions`   (the `+` is a blue `.s` superscript-style span)
- `100+` / `Clients`   (`+` blue `.s`)
- `8` / `Countries`

#### Prose paragraphs
1. `Vinay Maheshwari is the driving force behind SucStrat. Over a three-decade career, he has led large-scale organizations, turned around underperforming businesses, and scaled high-growth ventures.`
2. `As Group CEO of India TV, Executive Director & CEO of Sakshi Media Group, and Senior Vice President at Dainik Bhaskar Group, Vinay has consistently delivered transformation at scale, from restoring profitability to building India's largest and the world's third-largest newspaper.`
3. `Today, as Founder of SucStrat, he brings this depth of experience to promoters, boards, CXOs, and institutions, delivering consulting that is practical, execution-focused, and built to scale.`

#### Credentials — Leadership track record (`.f-cred`)
- **Label:** `Leadership track record`
- Items (org / role):
  - `India TV` / `Group CEO`
  - `Sakshi Media Group` / `ED & CEO`
  - `Dainik Bhaskar Group` / `Senior VP`
  - (NOTE: a 4th empty `.item` slot exists in the markup but contains no content — ignore; do not fabricate.)

---

## 5. Impact at a Glance  (`.impact-glance`)

Page-specific component. White section; 3 cards, each with an icon, a small label, and a serif `<ul>` list of items (divider lines between list items). Top accent bar on each card. Reveal-on-scroll + hover lift. (This is NOT the count-up impact metrics band — no numeric counters here.)

### Section head
- **Eyebrow:** `Impact at a glance`
- **H2:** `The throughlines of a thirty-year career`
- **Lead:** `The roles, platforms, and sectors behind the SucStrat approach.`

### Cards (label + list items)
- **Card 1 — Label `Honours`** — icon: trophy. List:
  - `CEO of the Year`
  - `Media Professional of the Year`
  - `Best CEO`
- **Card 2 — Label `Faculty & speaker`** — icon: graduation cap. List:
  - `IIMs`
  - `FICCI`
  - `WAN-IFRA`
  - `INMA`
- **Card 3 — Label `Industries impacted`** — icon: stacked layers. List:
  - `Media`
  - `Consumer`
  - `Education`
  - `Retail`
  - `Private Equity`

---

## 6. Proprietary Frameworks  (`.frameworks`)

Page-specific component. Navy section; 2×2 grid of white cards. Each card: a number (`01`–`04`), an inline-SVG diagram (`.fw-dia`, ~250×118), serif title, body. Hover lift. Reveal-on-scroll.

### Section head
- **Eyebrow:** `The method`
- **H2:** `Proprietary frameworks`
- **Lead:** `Earned in real turnarounds and refined until they travel. A glimpse of how we think.`

### Cards (number / title / body / diagram)
- **01 — `The D Scale-Up Loop`** — Body: `Scaling, reduced to three repeatable moves.`
  - Diagram: three circles labeled `1` / `2` / `3`, captioned `DISCOVER`, `DESIGN`, `DEBUG`, joined by arcs (a looping flow).
- **02 — `The Momentum Matrix`** — Body: `Where effort, timing, and trend compound.`
  - Diagram: line chart with rising trajectory; x-axis label `TIMING`, y-axis label `EFFORT`.
- **03 — `The Energy to Outcome Curve`** — Body: `How accountability and aspiration meet at peak performance.`
  - Diagram: bell curve, vertical dashed line at apex, caption `PEAK PERFORMANCE`.
- **04 — `The Execution Edge Model`** — Body: `Why disciplined execution outperforms raw talent.`
  - Diagram: equation `Talent × Execution` over a divider, captioned `OUTCOME`. (× = HTML `&#215;` multiplication sign, decoded → `×`.)

---

## 7. Awards & Recognition  (`.awards`)

Mist section. Section head + a horizontal row of award logos (grayscale→color on hover). Each logo has an `onerror` text fallback (the award NAME in serif). Reveal-on-scroll.

### Section head
- **Eyebrow:** `Recognition`
- **H2:** `Awards & recognition`
- **Lead:** `Recognised across the industry.`

### Award logos (img src / alt / text-fallback name)
- `https://sucstrat.com/wp-content/uploads/2025/09/FICCI.jpg` — alt `FICCI` — fallback name `FICCI`
- `https://sucstrat.com/wp-content/uploads/2025/09/waninfra.jpg` — alt `WAN-IFRA` — fallback name `WAN-IFRA`
- `https://sucstrat.com/wp-content/uploads/2025/09/INMA.jpg` — alt `INMA` — fallback name `INMA`
- `https://sucstrat.com/wp-content/uploads/2025/09/abbys.jpg` — alt `Abby's` — fallback name `Abby's`
- `https://sucstrat.com/wp-content/uploads/2025/09/maddys.jpg` — alt `Maddy's` — fallback name `Maddy's`

> NOTE: There is NO `.aw-personal` text block rendered in this mockup despite the CSS rule existing — only the logo row. Do not invent personal-recognition copy.

---

## 8. CTA Band  (`.cta-band`, `id="contact"`)

SHARED component ("centered CTA band (navy)"). Centered navy band. The hero/header "Book a Call" / "Book a discovery call" anchors (`#contact`) scroll to THIS section.

- **H2:** `Unlock opportunities.`  — ("opportunities" is italic blue `.em` span)
- **CTA pair:**
  - Button (white): `Book a working session` → `https://sucstrat.com/pitch-us`
  - Button (ghost-white): `Explore case studies` → `https://sucstrat.com/case-studies`

---

## 9. Footer  (SHARED — already inventoried)

Deep-navy footer. Logo + tagline left, link columns center/right, legal base row.

- **Logo:** SVG `#sucstrat-logo` → `#top`
- **Tagline:** `India's only execution-first consulting firm`

### Footer link columns (label → raw href)
- **Company**
  - Know Us → `https://sucstrat.com/know-us`
  - What We Do → `what_we_do_mockup.html`
  - Clients → `clients_mockup.html`
  - Careers → `careers_mockup.html`
- **More**
  - Knowledge → `knowledge_mockup.html`
  - Case Studies → `https://sucstrat.com/case-studies`
  - Get in Touch → `#contact`
- **Contact**
  - `connect@sucstrat.com` (plain span, not a mailto link in mockup)
  - `[confirm contact details]`  ← literal placeholder text, muted

### Base row
- `© 2026 SucStrat. All rights reserved.`
- `Privacy   Terms`  (two non-linked spans separated by `&nbsp;&nbsp;` — NOT actual links in this mockup)

---

## Interactions / Animations

- **Header scroll-shadow:** `solid` class added when `window.scrollY > 20` (border + box-shadow). Runs on load + scroll (passive).
- **Reveal-on-scroll:** `IntersectionObserver` (threshold 0.15) adds `in` to every `.reveal` element (section heads, pillar cards, founder portrait/column, impact cards, framework cards, awards row); unobserves after first reveal. Fade + translateY(22px → 0).
- **Mobile menu toggle (client):** hamburger button injects inline styles to display `nav.main` as a stacked navy dropdown under the 76px header.
- **Hero entrance animations (CSS):** eyebrow fade-in (0.15s delay); h1 rise (0.28s); subtitle rise (0.45s); CTA row rise (0.6s).
- **Pillar cards:** hover → border darkens to navy, lift (translateY -4px), shadow, and `.pbar` underline widens 30px → 52px.
- **Founder portrait:** grayscale→color on hover.
- **Founder stat tiles / framework cards / impact cards:** hover lift + shadow.
- **Award logos:** grayscale + reduced opacity → full color on hover; `onerror` swaps a broken image for a serif text name fallback.
- **Nav link underline:** animated left-to-right underline on hover.
- **Buttons:** color/background transitions on hover (white→blue, navy→blue, ghost fills).
- NOTE: Respect `prefers-reduced-motion` in rebuild (reveal + hero entrance + any transitions) per project a11y bar.

---

## Content Gaps / Placeholders / Off-mockup links

- **`[confirm contact details]`** — literal placeholder in footer Contact column. → `TODO(content)`.
- **Founder portrait image** — placeholder only (CSS block with "VM" initials); no real image src. → `TODO(content)`: source a portrait of Vinay Maheshwari with meaningful alt.
- **Logo** — SVG sprite reference `#sucstrat-logo` (defined elsewhere / shared); actual mark asset not in this file.
- **Empty 4th credential tile** — an extra empty `.item` exists in `Leadership track record`; no content. Do not fabricate a 4th role.
- **No meta description** in `<head>` → `TODO(seo-copy)`.
- **Off-mockup / external links (remap later):**
  - `https://sucstrat.com/pitch-us` — contact page (build per CLAUDE.md; remap `#contact` CTAs + this CTA accordingly).
  - `https://sucstrat.com/case-studies` — case-studies index (stub route; appears in CTA band + footer "More").
  - `https://sucstrat.com/know-us` — absolute self-link in footer "Company" (remap to `/know-us`).
- **In-mockup anchors:** `#contact` (hero CTA, header CTA, footer "Get in Touch" → CTA band), `#how` (hero "See our approach" → pillars), `#top` (logos, "Know Us" nav).
- **Footer `Privacy` / `Terms`** — rendered as plain text spans, not links. Decide whether to wire to real legal pages in rebuild (currently no targets → `TODO(content)`).
- **Footer Contact email** `connect@sucstrat.com` — plain text, not a `mailto:` link in mockup (consider making it a real `mailto:` in rebuild).
- **NOT site content (ignore):** the fixed `.demo-badge` ("Concept mockup ...").

---

## Notes for the content layer / rebuild

- Single `<h1>` confirmed (the `.khero` heading). All other section titles are `<h2>`; card titles are `<h3>`. No skipped levels.
- This page does NOT use: the count-up metrics band, the world map + sector cloud, the two-column practice list, or the case-study logo cards (those are other pages' shared components). The shared components actually present: header, mobile toggle, founder bio block, centered navy CTA band, footer, eyebrow/btn/section-head/reveal primitives.
- Page-specific NEW components vs. homepage set: (1) simplified light Know-Us hero (no media panel), (2) firm-band pull-quote, (3) "Impact at a glance" three-column list-card trio, (4) "Proprietary frameworks" 2×2 SVG-diagram card grid, (5) awards/recognition logo strip with text fallbacks.
- JobPosting JSON-LD: N/A on this page (no job listings).
- `JobPosting`/Careers note: not applicable here.
