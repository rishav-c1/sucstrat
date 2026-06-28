import type { LogoItem, Metric, Practice } from "./types";

// Eight practices, each with an italic description and its "the work" list.
const PRACTICES: Practice[] = [
  {
    num: "01",
    title: "Strategic Transformation",
    description:
      "We turn a growth ambition into a sequenced plan: what to do, in what order, and what to stop, then build the go-to-market to execute it.",
    services: [
      "Corporate & business-unit strategy",
      "Growth strategy & portfolio choices",
      "Market entry & geographic expansion",
      "Scale-up roadmap",
      "Revenue & margin acceleration",
      "Pricing & monetisation strategy",
      "Go-to-market architecture",
      "Strategic planning & OKR cascade",
    ],
  },
  {
    num: "02",
    title: "Venture Building & Incubation",
    description:
      "We build new ventures from the model up, stand up the operations, and stay hands-on through the early milestones, often as an equity-aligned partner.",
    services: [
      "Venture build (0-to-1)",
      "Business model & unit economics",
      "MVP & product-market fit",
      "Operating model stand-up",
      "Incubation & acceleration",
      "Founding team & hiring architecture",
      "Launch & first traction",
      "Equity-aligned partnership",
    ],
  },
  {
    num: "03",
    title: "Turnaround & Operations",
    description:
      "We take the controls of an underperforming business, rebuild the operating model, and hold a weekly cadence until it runs back to profit.",
    services: [
      "Turnaround & restructuring",
      "P&L diagnostic & recovery",
      "Operating model redesign",
      "Cost & working-capital optimisation",
      "Operational excellence (Lean / Six Sigma)",
      "Supply chain & procurement",
      "Turnkey operations",
      "Performance management cadence",
    ],
  },
  {
    num: "04",
    title: "Brand, Marketing & Consumer Insights",
    description:
      "We move from consumer insight to brand DNA to demand, defining who you are, the story you tell, and the reputation that carries it.",
    services: [
      "Consumer insight & research",
      "Brand DNA & positioning",
      "Brand architecture & naming",
      "Verbal & visual identity",
      "Strategic narrative & storytelling",
      "Messaging & value proposition",
      "Demand & performance marketing",
      "Content & channel strategy",
      "PR & communications",
      "Reputation & executive profile",
    ],
  },
  {
    num: "05",
    title: "Capital & Corporate Development",
    description:
      "We make the business fundable, valued, and deal-ready, from first raise to IPO, with the numbers, the narrative, and the diligence to close.",
    services: [
      "Fundraising (debt & equity)",
      "Equity story & investor narrative",
      "Investor readiness & data room",
      "Financial modelling & projections",
      "Valuation & due diligence",
      "M&A, JV & partnerships",
      "Deal structuring & negotiation",
      "IPO readiness",
    ],
  },
  {
    num: "06",
    title: "Leadership & CXO Coaching",
    description: "We sharpen the leaders at the top, set the mandate, and build the team that executes it.",
    services: [
      "Executive & CXO coaching",
      "Founder mentorship",
      "Leadership team alignment",
      "Org design & mandate setting",
      "Succession & talent architecture",
      "Leadership communication & presence",
    ],
  },
  {
    num: "07",
    title: "Digital, Data & AI",
    description:
      "We make the business run on live data, modernising the core, putting decisions on evidence, and automating the work that shouldn't be manual.",
    services: [
      "Digital transformation roadmap",
      "Core systems modernisation",
      "Data architecture & governance",
      "Analytics & business intelligence",
      "AI & GenAI use-case design",
      "Process automation",
      "Decision-support systems",
      "MLOps & deployment",
    ],
  },
  {
    num: "08",
    title: "Public Policy & Institutions",
    description:
      "We help leaders shape policy and build institutions that endure, setting governance and grounding growth in a credible ESG agenda.",
    services: [
      "Policy design & advocacy",
      "Governance & regulatory affairs",
      "Institution building",
      "Stakeholder & government relations",
      "ESG strategy & reporting",
      "Social impact & sustainability",
    ],
  },
];

export const WHAT_WE_DO = {
  hero: {
    eyebrow: "Our services",
    title: "What we do.",
    sub: "Eight practices, from strategy and turnaround to capital and AI, under one operating discipline: we stay until it holds.",
    primaryCta: { label: "Book a discovery call", href: "/get-in-touch" },
    secondaryCta: { label: "See our practices", href: "#practices" },
  },
  // The stats band now carries the "Our approach" framing on its own (the adjective sub-line
  // was the first of three identical capability lists and was cut).
  approach: {
    eyebrow: "Our approach",
  },
  // Canonical, site-wide stat set (matches Home). "14+ countries" was unverified and dropped.
  stats: [
    { to: 195, suffix: "+", label: "Consultants" },
    { to: 21, label: "Sectors" },
    { to: 35, suffix: "+", label: "Active clients" },
    { to: 300, suffix: "+", label: "Transformation projects" },
  ] satisfies Metric[],
  practices: {
    eyebrow: "Our consulting services",
    title: "Eight practices. One operating discipline.",
    // No section lead: the per-practice detail cards now carry the point of view.
    items: PRACTICES,
  },
  // NEW (Appendix C): EDGE, the operating signature. Brand-navy aurora, no periwinkle.
  edge: {
    eyebrow: "The operating signature",
    acronym: ["E", "D", "G", "E"],
    title: "Every Day, Great Execution.",
    expansions: [
      { letter: "E", word: "Every", body: "No off days. Compounding beats intensity." },
      { letter: "D", word: "Day", body: "A daily operating cadence, not a quarterly review." },
      { letter: "G", word: "Great", body: "A standard of work, not a status update." },
      { letter: "E", word: "Execution", body: "In the room until the rhythm holds." },
    ],
    footer: "The behaviour beneath every framework, small, relentless, daily execution compounds into scale.",
  },
  // Replaces the former "Industries we serve" sector grid with a full-width scrolling marquee
  // of the client logos from the (now-removed) Clients page. Section copy + logo roster carried
  // verbatim from the old Clients page LogoWall.
  marquee: {
    eyebrow: "Our clients",
    title: "The companies we build with",
    lead: "From market leaders to emerging disruptors, we partner with organisations that shape industries and scale with intent.",
    logos: [
      { name: "Hamar Hajaala", logo: "hamar-hajaala.jpg" },
      { name: "Dainikpuri", logo: "Dainikpuri.jpg" },
      { name: "Narayana", logo: "Narayana.jpg" },
      { name: "The Cake Room", logo: "The-Cake-Room.jpg" },
      { name: "Sparsh", logo: "sparsh.jpg" },
      { name: "Sree Vidyanikethan", logo: "Sree-Vidyanikethan.jpg" },
      { name: "New York", logo: "New-York.jpg" },
      { name: "Nav Bharath", logo: "Nav-Bharath.jpg" },
      { name: "Mohan Babu University", logo: "MBU.jpg" },
      { name: "Maison AVA", logo: "Maison-AVA.jpg" },
      { name: "Kutchina", logo: "kutchina.jpg" },
      { name: "Kespariya", logo: "kespariya.jpg" },
      { name: "AVA", logo: "AVA.jpg" },
      { name: "24 Frames", logo: "24-frames.jpg" },
      { name: "Valmar", logo: "valmar.jpg" },
      { name: "EY", logo: "ey-1.jpg" },
      { name: "Korn Ferry", logo: "Kf.jpg" },
      { name: "S&P", logo: "SP.jpg" },
      { name: "Hypolator", logo: "Hypolator.jpg" },
      { name: "RunTailor", logo: "RunTailor.jpg" },
      { name: "Kalaclap", logo: "kalaclap.jpg" },
      { name: "Papa Pawsome", logo: "papa-pawsome.jpg" },
      { name: "Therapeutics", logo: "therapeutics.jpg" },
      { name: "SpaceBasic", logo: "spacebasic.jpg" },
    ] satisfies LogoItem[],
  },
  cta: {
    primaryCta: { label: "Book a discovery call", href: "/get-in-touch" },
  },
};
