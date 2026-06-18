import type { EngagementModel, FrameworkCard, LogoItem, PedigreeGroup } from "./types";

export const KNOW_US = {
  hero: {
    eyebrow: "Know us",
    titleBefore: "Strategy. ",
    titleEmphasis: "Built to Scale.",
    // Lead with the thesis; "The firm" band below now carries the proof, not a second slogan.
    sub: "We don't hand over a deck and leave. We stay in the room until strategy becomes operating rhythm, and rhythm becomes scale.",
    primaryCta: { label: "Book a discovery call", href: "/get-in-touch" },
    secondaryCta: { label: "See our approach", href: "#engagement" },
  },
  firm: {
    eyebrow: "The firm",
    // Credibility line, not a second slogan: introduces the bench that justifies the page.
    statement:
      "An execution-first consulting collective of 195+ operators, top-ranked CAs and MBAs, led by a founder with three decades of building and turning around businesses. We are judged on one thing: the outcomes we leave behind.",
  },
  // "How we engage" — the single "how we work" section. The former "How we lead" delivery
  // modes are covered by the What We Do practices and so were removed to kill the duplication.
  engagement: {
    eyebrow: "How we engage",
    title: "Five archetypes. One standard of work.",
    lead: "We embed: coaching boards, running turnaround, building ventures, then structure the relationship to fit the problem, from a two-week sprint to an equity-aligned build.",
    models: [
      {
        name: "Strategy Sprint",
        duration: "2 to 4 weeks",
        model: "Fixed scope, fixed fee",
        oneLine: "Fast clarity, sharp direction, immediate momentum.",
        body: "A focused engagement to solve a specific challenge or define the next growth stage; the ideal entry point before a longer partnership.",
        outputs: [
          "P&L review and opportunity diagnosis",
          "Tailored recommendations",
          "Prioritised roadmap",
          "Ready-to-execute plan",
        ],
      },
      {
        name: "Strategic Retainer",
        duration: "6 to 12 months",
        model: "Senior counsel, on demand",
        oneLine: "Ongoing senior strategic support, without a full-time hire.",
        body: "For scaling businesses navigating transformation, M&A, capital decisions, and CXO execution.",
        outputs: [
          "Monthly reviews",
          "P&L, cash-flow and investment models",
          "Capital and corporate guidance",
          "CXO mentoring",
          "Continuous accountability",
        ],
      },
      {
        name: "Project-Based",
        duration: "4 to 12 weeks",
        model: "Defined scope and deliverables",
        oneLine: "Build a defined growth asset, system, or framework.",
        body: "For specific needs: CRM, campaigns, market entry, positioning, consumer insights, IPO readiness.",
        outputs: [
          "Scoped strategy and frameworks",
          "Consumer insights and analytics",
          "Road-to-IPO support",
          "Execution plans and systems",
        ],
      },
      {
        name: "Hybrid Partnership",
        duration: "6 to 12 months",
        model: "Performance-linked",
        oneLine: "Fixed fee plus performance incentives, aligned to outcomes.",
        body: "Where success metrics are clear and SucStrat meaningfully influences results.",
        outputs: [
          "Ongoing support with performance reviews",
          "Outcome-tied growth planning",
          "Incentive-linked KPI execution",
        ],
      },
      {
        name: "Venture Partner",
        duration: "9 to 18 months",
        model: "Equity-aligned",
        oneLine: "A selective model for high-potential early-stage businesses.",
        body: "Via equity or a mix of cash and equity, for ventures we help build from the ground up.",
        outputs: [
          "Founder advisory",
          "Growth and business-building",
          "Hands-on at key milestones",
          "Genuine skin in the game",
        ],
      },
    ] satisfies EngagementModel[],
  },
  // "Our consultants" — the 195+ operator bench (names withheld), shown as a bento: a dark hero
  // banner (count + blurb), a pedigree ledger, and an "areas we go deep" card.
  expertise: {
    eyebrow: "The collective",
    title: "A bench that has built it before",
    bench: {
      stat: "195+",
      statLabel: "Consultants",
      blurb:
        "Top-ranked CAs and MBAs, ex-CXOs and founders who have built, scaled, and turned around businesses.",
    },
    pedigreeLabel: "Where they have led & advised",
    pedigree: [
      { label: "Education", orgs: ["Mohan Babu University", "Sree Vidyanikethan Group"] },
      {
        label: "Media & Publishing",
        orgs: ["Dainik Bhaskar", "Sakshi", "India TV", "Hindustan Times", "ABP Network", "The Telegraph"],
      },
      { label: "Consumer & FMCG", orgs: ["Reckitt Benckiser", "Dabur India"] },
      { label: "Investment & Industry", orgs: ["Mitsui & Co.", "Krishna Maruti Group", "Rockman Industries"] },
      { label: "Analytics & Insights", orgs: ["Evalueserve"] },
    ] satisfies PedigreeGroup[],
    areasLabel: "Our expertise",
    areas: [
      "Growth & Transformation",
      "Investments & Corporate Development",
      "Brand, Marketing & Consumer",
      "Finance, Governance & Risk",
      "Data, Analytics & Intelligence",
      "International Business",
    ],
  },
  frameworks: {
    eyebrow: "The method",
    title: "Proprietary frameworks",
    lead: "The IP behind the practice.",
    label: "Proprietary framework · Copyright registered, Govt. of India",
    cards: [
      {
        num: "01",
        title: "The D Scale-Up Loop",
        tagline: "Compress complexity. Concentrate impact.",
        insight:
          "Scale-ups die from too many priorities, not bad strategy. The Loop is the discipline of deliberately doing less until only what moves the number is left.",
        steps: [
          { n: "01", text: "Strip the gap to its 1 to 3 driving variables." },
          { n: "02", text: "Build the smallest intervention that moves them, deployed in weeks not quarters." },
          { n: "03", text: "Monitor and adjust weekly, closing the loop fast." },
        ],
      },
      {
        num: "02",
        title: "The Growth Momentum Matrix",
        tagline: "Effort meets timing. Trend alignment is the multiplier.",
        insight:
          "Effort and timing get you in the game; trend alignment decides whether you compound or stall. Same quadrant, opposite fates.",
        steps: [
          { n: "01", text: "Plot the move on effort by timing." },
          { n: "02", text: "Operate in high-effort, right-timing for compound returns." },
          { n: "03", text: "Layer trend alignment: 3 to 5x when aligned, decay when contrarian." },
        ],
      },
      {
        num: "03",
        title: "The Fear-Excitement Intensity Model",
        tagline: "High arousal compresses decision time.",
        insight:
          "Likeable brands get remembered, intense ones get bought. The lever is intensity, not valence. Calibrate, do not maximise.",
        steps: [
          { n: "01", text: "Identify the dominant arousal lever, fear or excitement." },
          { n: "02", text: "Dial intensity to the conversion peak and hold." },
          { n: "03", text: "Past the peak is paralysis or scepticism." },
        ],
      },
      {
        num: "04",
        title: "Qualified vs Classified Audience",
        tagline: "Not every sale builds the brand.",
        insight:
          "Revenue can climb while a brand quietly dies. It turns on who buys and why; the wrong audience trades relevance for cash.",
        steps: [
          { n: "01", text: "Classify buyers as on-thesis or off-thesis." },
          { n: "02", text: "Measure the ratio; healthy brands hold 70%+ Classified." },
          { n: "03", text: "Course-correct before the 50:50 identity drift." },
        ],
      },
    ] satisfies FrameworkCard[],
  },
  // Recognition & platform: awards strip + the faculty/speaker platforms (merged in from the
  // former "Impact at a glance" section, whose other items duplicated the Pivot and this strip).
  awards: {
    eyebrow: "Recognition & platform",
    title: "Awards & recognition",
    lead: "Recognised across the industry, and on the platforms that shape it.",
    // Real logos where available; the four newer awards fall back to name placeholders.
    logos: [
      { name: "FICCI", logo: "FICCI.jpg" },
      { name: "WAN-IFRA", logo: "waninfra.jpg" },
      { name: "INMA", logo: "INMA.jpg" },
      { name: "Abby's", logo: "abbys.jpg" },
      { name: "Maddy's", logo: "maddys.jpg" },
      { name: "INMA NY World Congress" },
      { name: "Print Media Professional of the Year 2016" },
      { name: "WAN World Youth Readership, Warsaw" },
      { name: "CSR & Brand Leadership, CMO Asia" },
    ] satisfies LogoItem[],
    platform: {
      label: "Faculty & speaker",
      items: ["IIMs", "FICCI", "WAN-IFRA", "INMA"],
    },
  },
  cta: {
    primaryCta: { label: "Book a working session", href: "/get-in-touch" },
  },
};
