import type { IconCard, IndustryTile, Metric, Practice } from "./types";

// Seven practices (v4.0 Section 3) — title, a concise descriptor, and sub-services.
const PRACTICES: Practice[] = [
  {
    num: "01",
    title: "Strategy & Scale",
    tagline: "Strategy, scale-up, and go-to-market.",
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
    title: "Turnaround & Operations",
    tagline: "360 turnkey operations and turnaround.",
    services: [
      "360 turnkey operations",
      "Turnaround management",
      "Operational excellence",
      "P&L and performance",
      "Process and systems design",
    ],
  },
  {
    num: "03",
    title: "Brand, Marketing & Consumer",
    tagline: "Brand, consumer insight, and reputation.",
    services: [
      "Brand strategy",
      "Consumer insights",
      "Growth and consumer marketing",
      "PR and communications",
      "Reputation management",
      "CEO branding",
    ],
  },
  {
    num: "04",
    title: "Capital & Corporate Development",
    tagline: "Funding, M&A, valuation, and IPO.",
    services: [
      "Funding (debt and equity)",
      "Investor readiness",
      "M&A, JV and partnerships",
      "Valuation and due diligence",
      "360 venture",
      "Road to IPO",
    ],
  },
  {
    num: "05",
    title: "Leadership & CXO Coaching",
    tagline: "Coaching, mentorship, and alignment.",
    services: [
      "Personal and executive coaching",
      "Founder mentorship",
      "Leadership alignment",
      "Team and mandate design",
    ],
  },
  {
    num: "06",
    title: "Digital, Data & AI",
    tagline: "Digital, analytics, and automation.",
    services: [
      "Digital transformation",
      "Analytics and business intelligence",
      "Automation",
      "Decision-support systems",
    ],
  },
  {
    num: "07",
    title: "Public Policy & Institutions",
    tagline: "Policy, institutions, and ESG impact.",
    services: ["Policy and governance", "Education and institution building", "ESG and social impact"],
  },
];

export const WHAT_WE_DO = {
  hero: {
    eyebrow: "Our services",
    title: "What we do.",
    sub: "We collaborate with visionary leaders, institutions, businesses, startups, and governments to solve complex strategic challenges, unlock growth, and create scalable transformation.",
    primaryCta: { label: "Book a discovery call", href: "/get-in-touch" },
    secondaryCta: { label: "See our practices", href: "#practices" },
  },
  approach: {
    eyebrow: "Our approach",
    statement: "Strategy, execution, innovation, and leadership, working together to create measurable and sustainable impact.",
  },
  stats: [
    { to: 127, suffix: "+", label: "Clients served" },
    { to: 14, suffix: "+", label: "Countries" },
    { to: 30, label: "Years operating" },
    { to: 21, label: "Sectors" },
  ] satisfies Metric[],
  practices: {
    eyebrow: "Our consulting services",
    title: "Seven practices",
    lead: "Strategic thinking, digital capability, market intelligence, leadership alignment, and execution excellence, in one operating system.",
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
  deliver: {
    eyebrow: "How we deliver",
    title: "What stays constant",
    lead: "Whatever the practice, five things hold true across every engagement.",
    cards: [
      { icon: "compass", title: "Strategy", body: "Adaptive strategy built for the market, not just the boardroom." },
      { icon: "barChart", title: "Digital Capability", body: "AI, analytics, and tooling that compound over time." },
      { icon: "search", title: "Market Intelligence", body: "Every move grounded in competitive and customer insight." },
      { icon: "people", title: "Leadership Alignment", body: "Consensus, capability, and conviction at every level." },
      { icon: "checkCircle", title: "Execution Excellence", body: "Strategy translated into operating rhythm and measurable outcomes." },
    ] satisfies IconCard[],
  },
  industries: {
    eyebrow: "Sectors",
    title: "Industries we serve",
    lead: "Deep contextual understanding across the sectors we operate in.",
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
