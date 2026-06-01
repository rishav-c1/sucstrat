import type { IconCard, IndustryTile, Metric } from "./types";

// The mockup's "Seven integrated practices" section ships only a heading (no accordion
// items). Titles are verbatim from the homepage practice list; the descriptions below
// are concise DRAFT copy describing each practice area. TODO(content): client review.
const PRACTICES = [
  { num: "01", title: "Strategy", body: "Corporate, growth, and turnaround strategy — from vision and market positioning to a fundable, executable operating plan." },
  { num: "02", title: "Digital & AI Transformation", body: "AI, data, and digital tooling embedded into how the business runs, so capability compounds rather than ages." },
  { num: "03", title: "Business Transformation", body: "Operating-model, cost, and performance redesign that moves the numbers — and holds once we step back." },
  { num: "04", title: "Marketing, Brand & Communication", body: "Brand, go-to-market, and communications that build demand and tell one coherent story across every channel." },
  { num: "05", title: "Startup & Leadership Advisory", body: "Hands-on guidance for founders, promoters, and CXOs — from zero-to-one through scaling the leadership team." },
  { num: "06", title: "Venture Funding & Investment", body: "Investment readiness, capital structuring, and fundraising support — from the narrative and model through to close." },
  { num: "07", title: "Public Policy & Social Impact", body: "Policy, institutions, and social-impact programmes designed and delivered for measurable, lasting outcomes." },
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
