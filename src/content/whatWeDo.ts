import type { IndustryTile, Metric, Practice } from "./types";

// Eight practices, each with a point-of-view line, a supporting line, and its "the work" list.
const PRACTICES: Practice[] = [
  {
    num: "01",
    title: "Strategic Transformation",
    pov: "We turn a growth ambition into a sequenced plan: what to do, in what order, and what to stop.",
    detail:
      "We pressure-test the economics, prioritise the few moves that compound, and build the go-to-market to execute them.",
    services: [
      "Business strategy",
      "Growth strategy",
      "Scale-up roadmaps",
      "Market entry & expansion",
      "Revenue acceleration",
      "Go-to-market",
    ],
  },
  {
    num: "02",
    title: "Venture Building & Incubation",
    pov: "We help founders build new ventures from the ground up, and back the ones we believe in.",
    detail:
      "We shape the model, stand up the operations, and stay hands-on through the early milestones, often as an equity-aligned partner.",
    services: [
      "Venture building",
      "Incubation & acceleration",
      "Founder advisory",
      "Business model design",
      "Launch go-to-market",
      "Equity-aligned partnership",
    ],
  },
  {
    num: "03",
    title: "Turnaround & Operations",
    pov: "We take the controls of an underperforming business and run it back to profit.",
    detail:
      "We diagnose the P&L, rebuild the operating model, and hold a weekly cadence until performance is stable.",
    services: [
      "360 turnkey operations",
      "Turnaround management",
      "Operational excellence",
      "P&L & performance",
      "Process & systems design",
    ],
  },
  {
    num: "04",
    title: "Brand, Marketing & Consumer",
    pov: "We build the brand position and the demand behind it, grounded in what the consumer wants.",
    detail:
      "We move from consumer insight to positioning to demand, and protect the reputation that carries it.",
    services: [
      "Brand strategy",
      "Consumer insight",
      "Growth & consumer marketing",
      "PR & communications",
      "Reputation management",
      "CEO branding",
    ],
  },
  {
    num: "05",
    title: "Capital & Corporate Development",
    pov: "We make the business fundable, valued, and deal-ready, from first raise to IPO.",
    detail: "We build the numbers and the narrative, run the diligence, and structure the deal to close.",
    services: [
      "Funding (debt & equity)",
      "Investor readiness",
      "M&A, JV & partnerships",
      "Valuation & due diligence",
      "360 venture",
      "Road to IPO",
    ],
  },
  {
    num: "06",
    title: "Leadership & CXO Coaching",
    pov: "We sharpen the leaders at the top and align the team beneath them.",
    detail:
      "We coach the individual, set the mandate, and build a team that executes without the founder in every room.",
    services: ["Executive coaching", "Founder mentorship", "Leadership alignment", "Team & mandate design"],
  },
  {
    num: "07",
    title: "Digital, Data & AI",
    pov: "We make the business run on live data, turning digital and AI into an advantage.",
    detail: "We modernise the core, put decisions on evidence, and automate the work that should not be manual.",
    services: ["Digital transformation", "Analytics & BI", "Automation", "Decision-support systems"],
  },
  {
    num: "08",
    title: "Public Policy & Institutions",
    pov: "We help leaders shape policy and build institutions that endure.",
    detail: "We set governance, build the institution, and ground growth in a credible ESG agenda.",
    services: ["Policy & governance", "Education & institution building", "ESG & social impact"],
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
    { to: 127, suffix: "+", label: "Clients served" },
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
  industries: {
    eyebrow: "Sectors",
    title: "Industries we serve",
    // Framed as a deliberate subset of the 21-sector master list (the Home map), not a fourth
    // contradictory sector taxonomy.
    lead: "We work across 21 sectors worldwide. These are the twelve where we go deepest.",
    tiles: [
      { icon: "education", name: "Education & Universities" },
      { icon: "media", name: "Media & Communication" },
      { icon: "consumer", name: "Consumer & Retail" },
      { icon: "healthcare", name: "Healthcare" },
      { icon: "industrial", name: "Industrial & Manufacturing" },
      { icon: "technology", name: "Technology & AI" },
      { icon: "publicPolicy", name: "Public Policy" },
      { icon: "startups", name: "Startups & Emerging Businesses" },
      { icon: "socialImpact", name: "Social Impact Organisations" },
      { icon: "realEstate", name: "Real Estate & Infrastructure" },
      { icon: "digital", name: "Digital & Internet Businesses" },
      { icon: "skills", name: "Skill Development & Learning" },
    ] satisfies IndustryTile[],
  },
  cta: {
    primaryCta: { label: "Book a discovery call", href: "/get-in-touch" },
  },
};
