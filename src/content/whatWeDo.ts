import type { IconCard, IndustryTile, Metric, Practice } from "./types";

// Seven practices — title, tagline, and sub-services (client-supplied content).
const PRACTICES: Practice[] = [
  {
    num: "01",
    title: "Strategy",
    tagline: "Adaptive. Future-ready. Outcome-focused.",
    services: [
      "Corporate Strategy",
      "Growth Strategy",
      "India Entry",
      "M&A Advisory",
      "Go-To-Market",
      "Business Model Innovation",
      "Competitive Positioning",
      "Revenue Acceleration",
    ],
  },
  {
    num: "02",
    title: "Digital & AI Transformation",
    tagline: "Human insight. Intelligent systems.",
    services: [
      "Digital Transformation",
      "AI Visibility Strategy",
      "Advanced Analytics",
      "Automation Strategy",
      "Martech Integration",
      "Innovation Consulting",
    ],
  },
  {
    num: "03",
    title: "Business Transformation",
    tagline: "Reimagine. Reform. Scale.",
    services: [
      "Organisational Transformation",
      "Turnaround Strategy",
      "Operational Excellence",
      "Sales Transformation",
      "Culture Transformation",
      "Change Management",
    ],
  },
  {
    num: "04",
    title: "Marketing, Brand & Communication",
    tagline: "Strategy meets market impact.",
    services: [
      "Brand Positioning",
      "CEO Branding",
      "PR & Communication",
      "Reputation Management",
      "Thought Leadership",
      "Narrative Architecture",
    ],
  },
  {
    num: "05",
    title: "Startup & Leadership Advisory",
    tagline: "Helping visionary leaders scale.",
    services: [
      "Founder Mentorship",
      "Leadership Coaching",
      "Growth Advisory",
      "Strategic Scaling",
      "Ecosystem Partnerships",
    ],
  },
  {
    num: "06",
    title: "Venture Funding & Investment",
    tagline: "Enabling visionary startups to scale.",
    services: [
      "Investor Readiness",
      "Pitch Deck Development",
      "Fundraising Strategy",
      "VC & Angel Connects",
      "Due Diligence Support",
      "Scale Roadmaps",
    ],
  },
  {
    num: "07",
    title: "Public Policy & Social Impact",
    tagline: "Strategy for meaningful change.",
    services: [
      "Policy Communication",
      "Public Engagement",
      "ESG & Sustainability",
      "Rural Development",
      "Community Transformation",
      "Impact Ecosystem Building",
    ],
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
    { to: 8, label: "Countries" },
    { to: 30, label: "Years operating" },
    { to: 21, label: "Sectors" },
  ] satisfies Metric[],
  practices: {
    eyebrow: "Our consulting services",
    title: "Seven integrated practices",
    lead: "Strategic thinking, digital capability, market intelligence, leadership alignment, and execution excellence, in one operating system.",
    items: PRACTICES,
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
    secondaryCta: { label: "Explore case studies", href: "/case-studies" },
  },
};
