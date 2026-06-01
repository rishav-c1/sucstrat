# Careers — Content Extraction

> Source of truth for the `/careers` content layer. Extracted verbatim from the cleaned mockup
> (`/tmp/sucstrat_clean/careers_mockup.clean.html`). Do NOT copy markup/classes/styles — this captures
> *content* and *design intent* only. All copy below is VERBATIM (entities decoded).

- **Route:** `/careers`
- **`<title>`:** `Careers | SucStrat`
- **`<h1>` (single):** `Build more than a career. Build legacies.`
- **Meta description:** none present in mockup → `TODO(seo-copy)`.

---

## IMPORTANT — Job listings determination (for JSON-LD)

**There are NO real structured job openings on this page.** No role has a title + location + description + employment-type + salary or application deadline. The page is entirely **generic marketing prose** (benefit/value cards) plus `mailto:` apply links. The only "roles" mentioned are abstract categories with one-line descriptions under the "Jobs with our clients" section:

- "Permanent Roles" — "Join client leadership teams to drive long-term transformation."
- "Interim & Project Roles" — "Lead time-bound, high-impact missions."

These are **NOT** structured postings (no location, comp, deadline, individual apply URL, hiring org per role).

**Decision:** Per CLAUDE.md, do **NOT** emit `JobPosting` JSON-LD — there are no real structured listings. (`BreadcrumbList` is still appropriate for this inner page; site-wide `Organization`/`ProfessionalService` come from root layout.)

---

## Page structure (DOM / visual order)

### 0. Site header + primary nav  *(shared component)*
Fixed navy header, scroll-shadow (`solid` class toggles after 20px scroll). Logo (SVG `#sucstrat-logo`, `aria-label="SucStrat"`) links to `#top`.

Primary nav links (label → raw href):
- Home → `sucstrat_homepage_mockup.html`
- Know Us → `know_us_mockup.html`
- What We Do → `#wwd`  *(in-page anchor that does NOT exist on this page — there is no `#wwd` section here; off-page intent → What We Do page. Same dead anchor appears in footer.)*
- Clients → `clients_mockup.html`
- Careers → `#top`  *(current page; points to top)*
- Knowledge → `knowledge_mockup.html`

Header CTA button (white): **Apply Now** → `mailto:careers@sucstrat.com?subject=Application`

Mobile: `menu-btn` (hamburger `☰`, `aria-label="Menu"`) toggles the nav into a stacked dropdown (client behavior).

---

### 1. Hero — `.khero` (centered text hero, NOT the split-media homepage hero)
Light background (`--hero-bg #f2f6fb`), centered/left column, no media panel. Entrance animation: eyebrow fades in, h1 rises, sub rises, CTAs rise (staggered).

- **Eyebrow:** `Careers`
- **H1 (serif):** `Build more than a career. Build legacies.`
- **Sub (`.ksub`):** `At SucStrat, we give consultants and professionals true ownership from day one. Your work will shape institutions, scale brands, and leave an impact that carries your name.`
- **CTAs (`.acts`):**
  - Button (navy): **Apply now** → `mailto:careers@sucstrat.com?subject=Application`
  - Button (ghost-navy): **Life at SucStrat** → `#life`

---

### 2. "Why SucStrat" — `.csec.mist` (light grey band)
Section head + 4-up icon card grid (`.grid4`), reveal-on-scroll.

- **Eyebrow:** `Why SucStrat`
- **H2 (serif):** `We grow people as fast as we grow companies`
- **Lead `p`:** `We attract ambitious consultants and professionals who want to deliver outcomes that last.`

**Cards (4) — each: line-art SVG icon + h3 + p:**
1. **Ownership from day one** — `Own outcomes and client relationships from your first week.`
2. **Outcomes over tenure** — `You are recognised by the results you ship, not years served.`
3. **Coached to scale** — `Direct mentorship from senior consultants and partners.`
4. **Built to last** — `Work that shapes institutions and carries your name.`

---

### 3. "Life at SucStrat" — `.csec.navy` (navy band) · `id="life"` (anchor target of hero CTA)
Navy background, white text. Section head + 4-up icon card grid.

- **Eyebrow:** `Life at SucStrat`
- **H2 (serif):** `What you can expect`
- **Lead `p`:** `Professionalism with agility. Trusted with autonomy, backed with coaching, measured by outcomes.`

**Cards (4) — icon + h3 + p:**
1. **Ownership** — `Lead initiatives with real client visibility.`
2. **Growth** — `Mentorship, skill-building, and leadership tracks.`
3. **Flexibility** — `Freedom in how you work; accountability in what you deliver.`
4. **Recognition** — `Performance rewarded by results, not tenure.`

---

### 4. "Growth" — `.csec` (white band)
Section head + 4-up icon card grid.

- **Eyebrow:** `Growth`
- **H2 (serif):** `Advance your career`
- **Lead `p`:** `We invest in every professional who joins us.`

**Cards (4) — icon + h3 + p:**
1. **Coaching & Sponsorship** — `Guidance from senior consultants and partners.`
2. **Skills Development** — `Training across strategy, GTM, operations, and data.`
3. **Client Impact** — `Early exposure to high-stakes projects and transformations.`
4. **Leadership Pathways** — `A transparent path to senior roles and client ownership.`

---

### 5. "Beyond SucStrat" / Jobs with our clients — `.csec.mist` (light grey band)
Section head + 2-up icon card grid (`.grid2`).

- **Eyebrow:** `Beyond SucStrat`
- **H2 (serif):** `Jobs with our clients`
- **Lead `p`:** `We also connect exceptional professionals with our clients when that is the highest-impact path.`

**Cards (2) — icon + h3 + p:**
1. **Permanent Roles** — `Join client leadership teams to drive long-term transformation.`
2. **Interim & Project Roles** — `Lead time-bound, high-impact missions.`

> NOTE: These are generic role *categories*, not structured openings. See "Job listings determination" above.

---

### 6. CTA band — `.cta-band.navy` · `id="apply"`
Navy, centered. (Note: anchor id is `apply`, but nothing links to `#apply` on this page — it's just a landmark.)

- **H2 (serif, with italic emphasis on "lasts"):** `Ready to build something that lasts?`
  - "lasts" rendered as the `.em` italic blue-soft emphasis span.
- **CTAs (`.acts`):**
  - Button (white): **Apply now** → `mailto:careers@sucstrat.com?subject=Application`
  - Button (ghost-white): **Join the talent community** → `mailto:careers@sucstrat.com?subject=Talent%20Community`

---

### 7. Footer  *(shared component)*
Navy-deep background.

- Logo (SVG `#sucstrat-logo`) → `#top`
- **Tagline:** `India's only execution-first consulting firm`

**Footer link columns:**

Column **Company**:
- Know Us → `know_us_mockup.html`
- What We Do → `#wwd`  *(dead in-page anchor on this page; off-page intent)*
- Clients → `clients_mockup.html`
- Careers → `#top`

Column **More**:
- Knowledge → `knowledge_mockup.html`
- Case Studies → `https://sucstrat.com/case-studies`  *(absolute, off-mockup)*
- Get in Touch → `#contact`  *(dead in-page anchor on this page — no `#contact` section exists here; maps to contact/pitch-us later)*

Column **Contact** (spans, not links):
- `connect@sucstrat.com`
- `[confirm contact details]`  ← **verbatim placeholder, muted small text**

**Footer base:**
- `© 2026 SucStrat. All rights reserved.`
- `Privacy   Terms`  *(plain text, NOT links — single span containing both words separated by non-breaking spaces)*

---

## All CTAs / buttons (consolidated)

| Location | Label | Raw href |
|---|---|---|
| Header | Apply Now | `mailto:careers@sucstrat.com?subject=Application` |
| Hero | Apply now | `mailto:careers@sucstrat.com?subject=Application` |
| Hero | Life at SucStrat | `#life` |
| CTA band | Apply now | `mailto:careers@sucstrat.com?subject=Application` |
| CTA band | Join the talent community | `mailto:careers@sucstrat.com?subject=Talent%20Community` |

---

## Images
**None.** This page contains **zero `<img>` / raster images.** All "icons" are inline line-art `<svg>` glyphs (decorative, stroke-based, 24×24 viewBox) inside the cards, plus the SVG logo (`<use href="#sucstrat-logo">`, `aria-label="SucStrat"`) in header & footer. No portraits, no logos, no photography. (Logo symbol `#sucstrat-logo` is referenced but the `<symbol>`/`<defs>` is not inlined in this cleaned file — it's a shared sprite.)

Decorative card icons (for rebuild, give `aria-hidden` / empty alt): briefcase/flag, trophy, people, building/office (Why); medal-on-ribbon, line-chart-up, scales/balance, star (Life); compass/navigation, open-book, target, bar-steps (Growth); briefcase, lightning-bolt (Beyond).

---

## Interactive / animated behaviors
- **Header scroll-shadow:** adds `solid` (border + box-shadow) once `window.scrollY > 20`. Runs on load + scroll (passive).
- **Mobile nav toggle:** `.menu-btn` click expands `nav.main` into a stacked navy dropdown below the header (inline-styled in script; client-only).
- **Reveal-on-scroll:** every `.reveal` element (section heads + each icon card) fades up (`opacity 0→1`, `translateY(22px)→0`) via IntersectionObserver at `threshold .12`, unobserved after first intersection. Respect `prefers-reduced-motion` in rebuild.
- **Hero entrance animation:** eyebrow fades in (delay .15s), h1 rises (.28s), sub rises (.45s), CTA row rises (.6s) — pure CSS keyframes on load.
- **Icon card hover:** border → navy, lift (`translateY(-3px)`), shadow.
- **Button hovers:** white→blue fill, navy→blue fill, ghost variants invert (see `.btn-*` rules).
- **Nav link underline:** animated left-to-right underline on hover.
- No counters, no map, no carousel, no canvas on this page.

---

## Content gaps / placeholders / off-mockup links
- **`[confirm contact details]`** — verbatim placeholder in footer Contact column. → `TODO(content)`
- **Meta description** absent → `TODO(seo-copy)`.
- **`mailto:` apply flow:** all "Apply" CTAs are `mailto:careers@sucstrat.com` (with `?subject=Application` / `?subject=Talent%20Community`). The project spec defines a real `/pitch-us` contact form + Server Action; decide whether Careers Apply CTAs should route to `/pitch-us`, keep `mailto:`, or both. → `TODO(content)` / flag in PLAN.md.
- **Dead in-page anchors (no matching section on this page):**
  - `#wwd` (nav "What We Do" + footer "What We Do") → remap to `/what-we-do`.
  - `#contact` (footer "Get in Touch") → remap to `/pitch-us` (contact).
- **Off-mockup absolute link:** `https://sucstrat.com/case-studies` (footer) → create placeholder `/case-studies` route (stub) so it doesn't 404.
- **Cross-page mockup links** (remap to clean routes later): `sucstrat_homepage_mockup.html` → `/`, `know_us_mockup.html` → `/know-us`, `clients_mockup.html` → `/clients`, `knowledge_mockup.html` → `/knowledge`.
- **Footer "Privacy" / "Terms"** are plain text, not links — decide whether to wire to `/privacy` & `/terms` or leave as-is. → `TODO(content)`.
- **`#apply` CTA-band id** has no inbound link; harmless landmark.

---

## Design intent notes (page-specific)
- Uses the lighter **centered text hero** (`.khero`, `min-height:56vh`, padding-top 150px to clear fixed header) — distinct from the homepage split-media hero. No media/canvas/Ken-Burns.
- Repeating pattern: alternating section bands (mist → navy → white → mist) each with a **section-head (eyebrow + serif h2 + muted lead)** followed by an **icon-card grid** (`.grid4` 4-up, or `.grid2` 2-up). Cards are `.icard`: white, 1px border, radius 10px, line-art SVG icon (34px, blue), serif h3, muted body; hover lifts + navy border. On the navy band, cards stay white with a darker shadow on hover.
- CTA band reuses the shared navy centered CTA pattern with italic-blue emphasis word.
- Footer matches shared multi-column footer.
- `.grid4` collapses to 2-up ≤980px and 1-up ≤600px; `.grid2` collapses to 1-up ≤600px (responsive intent).
