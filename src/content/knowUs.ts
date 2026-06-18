import type {
  EngagementModel,
  ExpertiseGroup,
  FrameworkCard,
  IconCard,
  ImpactGlanceCard,
  LogoItem,
  PedigreeGroup,
} from "./types";

export const KNOW_US = {
  hero: {
    eyebrow: "Know us",
    titleBefore: "Strategy. ",
    titleEmphasis: "Built to Scale.",
    sub: "We design strategy systems that don't just look good on paper, they deliver measurable outcomes in the market.",
    primaryCta: { label: "Book a discovery call", href: "/get-in-touch" },
    secondaryCta: { label: "See our approach", href: "#how" },
  },
  firm: {
    eyebrow: "The firm",
    // v4.0: drop "India's only".
    statement:
      "SucStrat is an execution-first consulting firm. We stay in the room until strategy becomes operating rhythm, and rhythm becomes scale.",
  },
  // "How we lead" (was "How we work"): language toward 360 / turnkey / turnaround / operations.
  howWeLead: {
    eyebrow: "Business scale-up coach",
    title: "How we lead",
    lead: "Four ways we embed with leadership to turn strategy into operating rhythm.",
    cards: [
      { icon: "dashboard", title: "Boardroom Coaching", body: "A 12-week CXO cadence for clarity and execution discipline." },
      { icon: "lightning", title: "Leadership Sprints", body: "Three to five cross-functional plays, shipped in weeks." },
      { icon: "refresh", title: "Turnaround & Operations", body: "Hands-on embedding for turnaround and 360 turnkey operations." },
      { icon: "microphone", title: "Keynotes & Classes", body: "Practical playbooks for leadership cohorts." },
    ] satisfies IconCard[],
  },
  // NEW (Appendix D). Aurora/card system, flagged for Ashley sign-off.
  engagement: {
    eyebrow: "How we engage",
    title: "How we engage. Five archetypes. One standard of work.",
    lead: "From a focused sprint to an equity-aligned venture build, every engagement holds to the same standard of work.",
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
  // NEW (Appendix E): the 195+ consultant collective (names withheld).
  expertise: {
    eyebrow: "The collective",
    title: "Our collective expertise",
    intro:
      "We bring together leaders who have built, scaled, transformed, and advised organizations across industries. Our experience spans strategy, investments, education, media, consumer brands, manufacturing, finance, governance, analytics, and international business. We combine boardroom thinking with execution-grounded expertise to help organizations move from ambition to scale. The collective includes top-ranked CAs and MBAs.",
    specialisationsLabel: "Areas of specialisation",
    specialisations: [
      {
        title: "Growth & Transformation",
        points: [
          "Business Strategy",
          "Institutional Transformation",
          "Scale-Up Roadmaps",
          "Revenue Acceleration",
          "Market Expansion",
          "Turnaround Management",
        ],
      },
      {
        title: "Investments & Corporate Development",
        points: [
          "Mergers & Acquisitions",
          "Investment Advisory",
          "Strategic Partnerships",
          "Valuation & Due Diligence",
          "Post-Merger Integration",
          "Cross-Border Transactions",
        ],
      },
      {
        title: "Brand, Marketing & Communications",
        points: [
          "Brand Strategy",
          "Consumer Marketing",
          "Growth Marketing",
          "Audience Development",
          "Reputation Management",
          "Corporate Communications",
        ],
      },
      {
        title: "Education & Institution Building",
        points: [
          "University Strategy",
          "Admissions Growth",
          "International Partnerships",
          "Academic Ecosystem Development",
          "Student Recruitment",
          "Institutional Positioning",
        ],
      },
      {
        title: "Finance, Governance & Risk",
        points: [
          "Treasury Management",
          "Corporate Finance",
          "Governance Frameworks",
          "Regulatory Compliance",
          "Risk Management",
          "Business Controls",
        ],
      },
      {
        title: "Data, Analytics & Intelligence",
        points: [
          "Business Intelligence",
          "Market Intelligence",
          "Performance Analytics",
          "Process Excellence",
          "Revenue Optimization",
          "Decision Support Systems",
        ],
      },
      {
        title: "International Business",
        points: [
          "India-Japan Partnerships",
          "India-Korea Collaborations",
          "Market Entry Strategy",
          "Global Business Development",
          "Strategic Alliances",
          "International Expansion",
        ],
      },
    ] satisfies ExpertiseGroup[],
    pedigreeLabel: "Leadership pedigree",
    pedigreeNote: "Where the collective has led and advised.",
    pedigree: [
      { label: "Education", orgs: ["Mohan Babu University", "Sree Vidyanikethan Group"] },
      {
        label: "Media & Publishing",
        orgs: ["Dainik Bhaskar", "Sakshi Media", "India TV", "Hindustan Times", "ABP Network", "The Telegraph"],
      },
      { label: "Consumer & FMCG", orgs: ["Reckitt Benckiser", "Dabur India"] },
      { label: "Global Investment & Industry", orgs: ["Mitsui & Co.", "Krishna Maruti Group", "Rockman Industries"] },
      { label: "Analytics & Insights", orgs: ["Evalueserve"] },
    ] satisfies PedigreeGroup[],
  },
  impactGlance: {
    eyebrow: "Impact at a glance",
    title: "The throughlines of a thirty-year career",
    lead: "The roles, platforms, and sectors behind the SucStrat approach.",
    cards: [
      { icon: "trophy", label: "Honours", items: ["CEO of the Year", "Media Professional of the Year", "Best CEO"] },
      { icon: "faculty", label: "Faculty & speaker", items: ["IIMs", "FICCI", "WAN-IFRA", "INMA"] },
      { icon: "layers", label: "Industries impacted", items: ["Media", "Consumer", "Education", "Retail", "Private Equity"] },
    ] satisfies ImpactGlanceCard[],
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
  awards: {
    eyebrow: "Recognition",
    title: "Awards & recognition",
    lead: "Recognised across the industry.",
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
  },
  cta: {
    primaryCta: { label: "Book a working session", href: "/get-in-touch" },
  },
};
