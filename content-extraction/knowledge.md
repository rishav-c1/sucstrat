# Knowledge — Content Extraction

> Source mockup: `/tmp/sucstrat_clean/knowledge_mockup.clean.html` (blob-stripped Wix export).
> This file is the source-of-truth for the content layer. Copy is VERBATIM. Do NOT reuse mockup markup/classes/styles — design intent only.

- **Route:** `/knowledge`
- **`<title>`:** `Knowledge | SucStrat`
- **`<h1>` (exactly one):** `Insights & ideas.`
- **Meta description:** none present in mockup → `TODO(seo-copy)`.

---

## Page shape (DOM / visual order)

1. Site header + primary nav (shared)
2. Knowledge hero (`.khero`) — eyebrow + h1 + sub + CTA pair
3. Insights section 1 — **Education & Skills** (7 link cards)
4. Insights section 2 — **Media & Broadcast** (3 link cards)
5. Insights section 3 — **Academic Partnerships** (3 link cards)
6. Insights section 4 — **Research & Innovation** (3 link cards)
7. Centered navy CTA band (shared)
8. Footer (shared)

> NOTE on layout vs. the homepage: this page does **NOT** use the split-media Ken-Burns hero. It uses a shorter, **text-only hero** (`.khero`, `min-height:50vh`, plain `--hero-bg` background, no canvas/media panel). The h1 simply rises in; there is no per-word line reveal or hand-drawn underline.
> NOTE: the four insights sections alternate background — white / mist / white / mist (`.ktopic` then `.ktopic.mist`, repeating).

---

## 1. Header / Primary nav (shared component)

Logo: SucStrat SVG logomark (`aria-label="SucStrat"`), links to `#top`.

Primary nav links (label → raw href):
- `Home` → `sucstrat_homepage_mockup.html`
- `Know Us` → `know_us_mockup.html`
- `What We Do` → `#wwd`  ← in-page anchor that does NOT exist on this page (no `#wwd` target here; remap to `/what-we-do`)
- `Clients` → `clients_mockup.html`
- `Careers` → `careers_mockup.html`
- `Knowledge` → `knowledge_mockup.html` (current page)

Header CTA button (white): `Get in Touch` → `#contact` (anchors to the in-page CTA band lower on this page).

Mobile: hamburger menu button, `aria-label="Menu"`, glyph ☰ (`&#9776;`). Toggles the nav into a stacked dropdown (client behavior).

---

## 2. Knowledge hero (`.khero`)

- **Eyebrow:** `Knowledge`
- **h1 (serif):** `Insights & ideas.`
- **Sub (`.ksub`):** `Selected writing and commentary from Vinay Maheshwari, across education, media, and the business of building things that scale.`
- **CTA pair (`.acts`):**
  - Button (navy): `Get in touch` → `#contact`
  - Button (ghost-navy): `Browse insights` → `#insights`

Motion: eyebrow fades in; h1 rises in (delay ~.28s); sub rises in (~.45s); acts rise in (~.6s). No media panel.

---

## 3. Insights — Section 1: Education & Skills

Section id: `insights` (target of the hero "Browse insights" CTA).
- **Eyebrow:** `Education & Skills`
- **h2 (serif):** `Education & Skills`
- Grid: 4-up card grid (`.kgrid`) of external article link cards. This section has **7 cards**.

Each card = colored tile (navy / gradient / light variants) with: a small uppercase TAG, a serif H3 (article title), a `.kdesc` blurb (revealed on hover), and a `.kmore` "Read on <publication> ↗" affordance. Entire card is an `<a>` opening the external article in a new tab (`target="_blank" rel="noopener"`). The `↗` glyph is `&#8599;`.

**Card 1** (tile: navy, with concentric-circle SVG motif)
- Tag: `Op-ed`
- Title: `Preparing Indian graduates for jobs that didn't exist five years ago`
- Desc: `On reshaping curricula so graduates are ready for roles the market only just invented.`
- More: `Read on EducationWorld ↗`
- Href: `https://educationworld.in/preparing-indian-graduates-for-jobs-that-didnt-exist-five-years-ago/`

**Card 2** (tile: gradient t-g1)
- Tag: `Op-ed`
- Title: `Five years of NEP: why the Union Budget must rethink skills`
- Desc: `Five years into the NEP, the case for realigning skills and curriculum with industry.`
- More: `Read on The Week ↗`
- Href: `https://www.theweek.in/news/india/2026/01/30/five-years-of-nep-why-union-budget-must-rethink-skills-curriculum-industry-alignment.html`

**Card 3** (tile: light)
- Tag: `Op-ed`
- Title: `Union Budget 2025: strengthen public schools in underserved regions`
- Desc: `Why the Budget should prioritise public schools in rural and underserved India.`
- More: `Read on Deccan Herald ↗`
- Href: `https://www.deccanherald.com/business/union-budget/union-budget-2025-govt-should-strengthen-public-schools-in-rural-and-underserved-regions-says-mohan-babu-university-ed-vinay-maheshwari-3374500`

**Card 4** (tile: gradient t-g2)
- Tag: `Feature`
- Title: `On inclusive, future-ready learning`
- Desc: `A perspective for International Education Day on building education for what comes next.`
- More: `Read on APN News ↗`
- Href: `https://www.apnnews.com/international-education-day-quote-by-vinay-maheshwari-executive-director-trustee-mohan-babu-university/`

**Card 5** (tile: navy, with concentric-circle SVG motif)
- Tag: `Interview`
- Title: `MBU: a torchbearer of inclusive education`
- Desc: `How MBU grew from regional roots to global relevance.`
- More: `Read on IANS Live ↗`
- Href: `https://ianslive.in/mbu-a-torchbearer-of-inclusive-education-expanded-from-regional-to-global-relevance--20250603170342`

**Card 6** (tile: gradient t-g1)
- Tag: `Feature`
- Title: `Industry-readiness, built into the B.Tech 2026 curriculum`
- Desc: `Embedding employability and industry alignment into the core curriculum at MBU.`
- More: `Read on SiliconIndia ↗`
- Href: `https://www.siliconindia.com/news/mohan-babu-university-adds-industryreadiness-to-btech-2026-curriculum-nwid-54288.html`

**Card 7** (tile: light)
- Tag: `Feature`
- Title: `1,990 offers, a 95% placement rate`
- Desc: `Inside the placement track record MBU has built.`
- More: `Read on SMEStreet ↗`
- Href: `https://smestreet.in/sectors/mohan-babu-university-strengthens-placement-track-record-with-1990-offers-achieves-95-placement-rate-11886528`

---

## 4. Insights — Section 2: Media & Broadcast

Background: mist (`.ktopic.mist`).
- **Eyebrow:** `Media & Broadcast`
- **h2 (serif):** `Media & Broadcast`
- 3 cards.

**Card 1** (tile: gradient t-g2)
- Tag: `Interview`
- Title: `Print still holds relevance for a large section of consumers`
- Desc: `Why print continues to command attention in a digital-first market.`
- More: `Read on Exchange4media ↗`
- Href: `https://www.exchange4media.com/media-print-news/print-still-holds-relevance-for-large-section-of-consumers-vinay-maheshwari-sakshi-media-99128.html`

**Card 2** (tile: navy, with concentric-circle SVG motif)
- Tag: `Feature`
- Title: `Content drives readership`
- Desc: `Reading the IRS Q2 2019 South numbers, and what they say about content.`
- More: `Read on Exchange4media ↗`
- Href: `https://www.exchange4media.com/media-print-news/irs-q2-2019-daily-thanthi-malayala-manorama-vijay-karnataka-eenadu-lead-in-south-98922.html`

**Card 3** (tile: gradient t-g1)
- Tag: `Interview`
- Title: `Equal justice to digital and print`
- Desc: `Inside Sakshi Media Group's push to balance both platforms.`
- More: `Read on All About Newspapers ↗`
- Href: `http://www.allaboutnewspapers.com/sakshi-media-group-putting-effort-to-do-equal-justice-to-both-digital-and-print-platforms/`

> NOTE: Card 3 href uses `http://` (not https) — carry verbatim; flag for review when remapping.

---

## 5. Insights — Section 3: Academic Partnerships

Background: white (`.ktopic`).
- **Eyebrow:** `Academic Partnerships`
- **h2 (serif):** `Academic Partnerships`
- 3 cards.

**Card 1** (tile: light)
- Tag: `Feature`
- Title: `India's first joint degree with QS Top-100 Penn State`
- Desc: `MBU partners with Penn State to launch India's first joint degree programme.`
- More: `Read on NewKerala ↗`
- Href: `https://www.newkerala.com/news/o/mohan-babu-university-partners-qs-top-100-penn-state-indias-763`

**Card 2** (tile: gradient t-g2)
- Tag: `Feature`
- Title: `MBU and Penn State: academic and research collaboration`
- Desc: `A collaboration spanning curriculum, mobility, and joint research.`
- More: `Read on Curriculum Magazine ↗`
- Href: `https://curriculum-magazine.com/mohan-babu-university-and-penn-state-university-enter-into-academic-research-collaboration/`

**Card 3** (tile: navy, with concentric-circle SVG motif)
- Tag: `Feature`
- Title: `MBU signs MoU with Penn State University, USA`
- Desc: `Formalising research and academic collaboration with Penn State.`
- More: `Read on Skilloutlook ↗`
- Href: `https://skilloutlook.com/education/mohan-babu-university-signs-mou-with-penn-state-university-usa-to-foster-academic-collaboration-and-research-excellence`

---

## 6. Insights — Section 4: Research & Innovation

Background: mist (`.ktopic.mist`).
- **Eyebrow:** `Research & Innovation`
- **h2 (serif):** `Research & Innovation`
- 3 cards.

**Card 1** (tile: gradient t-g1)
- Tag: `Feature`
- Title: `Global academia and industry, together at the Research Conclave`
- Desc: `MBU's International Research Conclave convenes academia and industry.`
- More: `Read on APN News ↗`
- Href: `https://www.apnnews.com/mbu-brings-global-academia-and-industry-together-at-international-research-conclave/`

**Card 2** (tile: light)
- Tag: `Feature`
- Title: `Hosting the 2026 IEEE Computing Innovations Conference`
- Desc: `MBU hosts the 2026 IEEE Contemporary Computing Innovations Conference.`
- More: `Read on APN News ↗`
- Href: `https://www.apnnews.com/mohan-babu-university-hosts-2026-ieee-contemporary-computing-innovations-conference-showcasing-advances-in-next-generation-computing/`

**Card 3** (tile: gradient t-g2)
- Tag: `Feature`
- Title: `IEEE CCIC 2026 draws global computing experts`
- Desc: `Global experts gather for next-generation computing at IEEE CCIC 2026.`
- More: `Read on The Hans India ↗`
- Href: `https://www.thehansindia.com/hans/education-careers/ieee-ccic-2026-attracts-global-experts-in-computing-innovation-1047963`

---

## 7. CTA band (shared, navy, centered) — id `contact`

- **h2 (serif):** `Have a brief worth solving?` — the word `solving` is emphasized (italic, blue-soft) via inline `<span class="em">`.
- **CTA pair:**
  - Button (white): `Get in touch` → `https://sucstrat.com/pitch-us`  ← OFF-MOCKUP page (contact)
  - Button (ghost-white): `See our work` → `clients_mockup.html`

> NOTE: this section carries `id="contact"`, so the header "Get in Touch" CTA and the hero "Get in touch" CTA (both `#contact`) scroll the user here. The button *inside* this band is the one that actually leaves to `/pitch-us`.

---

## 8. Footer (shared component)

Logo: SucStrat logomark → `#top`.
Tagline: `India's only execution-first consulting firm`

Link columns:

**Company**
- `Know Us` → `know_us_mockup.html`
- `What We Do` → `#wwd`  (anchor with no target on this page; remap to `/what-we-do`)
- `Clients` → `clients_mockup.html`
- `Careers` → `careers_mockup.html`

**More**
- `Knowledge` → `knowledge_mockup.html`
- `Case Studies` → `https://sucstrat.com/case-studies`  ← OFF-MOCKUP
- `Get in Touch` → `#contact`

**Contact**
- `connect@sucstrat.com` (plain text span, not a `mailto:` link)
- `[confirm contact details]` (placeholder text, muted)

Footer base:
- `© 2026 SucStrat. All rights reserved.`
- `Privacy   Terms` (single span, two words separated by non-breaking spaces — NOT separate links in the mockup)

---

## Images / media

- **No raster images** (`<img>`) on this page. The SucStrat logomark is an inline SVG (`<use href="#sucstrat-logo">`); the symbol definition is not present in this cleaned export (the `<defs>`/`<symbol>` lives elsewhere in the original Wix doc — supply the real logo asset in the rebuild). `alt`/label = `SucStrat`.
- **Decorative SVG motif** on every navy (`t-navy`) card: four concentric circles centered bottom-left (`cx=60 cy=360`, r = 60/100/140/180), stroke `#5d90ba`, opacity .16, `aria-hidden="true"`. Purely decorative.
- Gradient card variants (`t-g1`, `t-g2`) are CSS radial-gradient backgrounds, no image.

---

## Interactive / animated behaviors

1. **Header scroll-shadow:** `header` gains `.solid` (border + box-shadow) once `window.scrollY > 20`. (shared)
2. **Reveal-on-scroll:** elements with `.reveal` (each section's `.sec-head` and every `.kcard`) fade/translate in via IntersectionObserver at threshold .1, then unobserve. (shared)
3. **Mobile nav toggle:** hamburger sets the nav to a stacked dropdown panel below the 76px header. (shared, client)
4. **Hero entrance:** eyebrow fade-in, h1 rise-in, sub rise-in, CTAs rise-in (staggered CSS `@keyframes rise`/`fade`). Page-specific to `.khero` (simpler than homepage hero — no line-by-line word reveal, no underline draw).
5. **Knowledge card hover:** card lifts (`translateY(-5px)`) with a deepened shadow; the `.kdesc` blurb expands from `max-height:0` to visible; the `.kmore` "Read on …" label fades/slides in. On mobile (≤600px) the desc and "more" are shown by default (no hover).
6. `html { scroll-behavior:smooth }` — smooth in-page anchor scrolling for the `#insights` / `#contact` jumps.

> No stat counters, no map, no carousels, no accordions/tabs, no forms on this page.

---

## Content gaps / placeholders / off-mockup links

- **`[confirm contact details]`** — verbatim placeholder in footer Contact column. → `TODO(content)`
- **Off-mockup page `/pitch-us`** — CTA-band "Get in touch" → `https://sucstrat.com/pitch-us` (contact page; to be built per CLAUDE.md).
- **Off-mockup page `/case-studies`** — footer "Case Studies" → `https://sucstrat.com/case-studies` (placeholder route per CLAUDE.md).
- **Dangling in-page anchor `#wwd`** — used by nav "What We Do" and footer "What We Do"; there is no `#wwd` element on the Knowledge page. Remap to `/what-we-do` on rebuild.
- **Anchor `#contact`** — used by header CTA, hero "Get in touch", footer "Get in Touch"; resolves to the on-page CTA band (`id="contact"`). Decide whether these stay in-page or route to `/pitch-us` in the rebuild (mockup keeps them in-page; only the button inside the band leaves to /pitch-us).
- **`connect@sucstrat.com`** rendered as plain text, not a `mailto:` link — consider linking on rebuild.
- **Logo SVG symbol** (`#sucstrat-logo`) not included in this cleaned file — supply real logo asset.
- **Meta description / OG / canonical** absent in mockup → `TODO(seo-copy)` (canonical should be `https://sucstrat.com/knowledge`).
- **No `Person` JSON-LD source data** beyond the name "Vinay Maheshwari" referenced in the hero sub; no bio block on this page.
- All 23 article links point to **live external publications** (EducationWorld, The Week, Deccan Herald, APN News, IANS Live, SiliconIndia, SMEStreet, Exchange4media ×2, All About Newspapers, NewKerala, Curriculum Magazine, Skilloutlook, The Hans India). Treat as real outbound press/insight links; preserve `target="_blank" rel="noopener"`.

### Card counts (for the content array)
- Education & Skills: **7**
- Media & Broadcast: **3**
- Academic Partnerships: **3**
- Research & Innovation: **3**
- **Total: 16 insight cards.**
