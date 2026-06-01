import type { FounderContent, IconCard, ImpactGlanceCard } from "./types";

const BIO_PARAGRAPHS = [
  "Vinay Maheshwari is the driving force behind SucStrat. Over a three-decade career, he has led large-scale organizations, turned around underperforming businesses, and scaled high-growth ventures.",
  "As Group CEO of India TV, Executive Director & CEO of Sakshi Media Group, and Senior Vice President at Dainik Bhaskar Group, Vinay has consistently delivered transformation at scale, from restoring profitability to building India's largest and the world's third-largest newspaper.",
  "Today, as Founder of SucStrat, he brings this depth of experience to promoters, boards, CXOs, and institutions, delivering consulting that is practical, execution-focused, and built to scale.",
];

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
    statement:
      "SucStrat is India's only execution-first consulting firm. We stay in the room until strategy becomes operating rhythm, and rhythm becomes scale.",
  },
  howWeWork: {
    eyebrow: "Business scale-up coach",
    title: "How we work",
    lead: "Four ways we embed with leadership to turn strategy into operating rhythm.",
    cards: [
      { icon: "dashboard", title: "Boardroom Coaching", body: "A 12-week CXO cadence for clarity and execution discipline." },
      { icon: "lightning", title: "Leadership Sprints", body: "Three to five cross-functional plays, shipped in weeks." },
      { icon: "refresh", title: "Turnaround Advisory", body: "Hands-on embedding for transformation." },
      { icon: "microphone", title: "Keynotes & Classes", body: "Practical playbooks for leadership cohorts." },
    ] satisfies IconCard[],
  },
  founder: {
    eyebrow: "The operator",
    name: "Vinay Maheshwari",
    role: "Founder & Principal Consultant, SucStrat",
    highlight: "30+ years of transforming institutions, scaling businesses, and coaching leaders.",
    portraitAlt: "Vinay Maheshwari, Founder & Principal Consultant of SucStrat",
    tiles: [
      { value: "3 Decades", label: "Leadership" },
      { value: "300+", label: "Brand solutions" },
      { value: "100+", label: "Clients" },
      { value: "8", label: "Countries" },
    ],
    paragraphs: BIO_PARAGRAPHS,
    credentialsLabel: "Leadership track record",
    // Only three credentials in the mockup (the 4th tile was empty — not fabricated).
    credentials: [
      { org: "India TV", role: "Group CEO" },
      { org: "Sakshi Media Group", role: "ED & CEO" },
      { org: "Dainik Bhaskar Group", role: "Senior VP" },
    ],
  } satisfies FounderContent,
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
    lead: "Earned in real turnarounds and refined until they travel. A glimpse of how we think.",
    cards: [
      { num: "01", title: "The D Scale-Up Loop", body: "Scaling, reduced to three repeatable moves." },
      { num: "02", title: "The Momentum Matrix", body: "Where effort, timing, and trend compound." },
      { num: "03", title: "The Energy to Outcome Curve", body: "How accountability and aspiration meet at peak performance." },
      { num: "04", title: "The Execution Edge Model", body: "Why disciplined execution outperforms raw talent." },
    ],
  },
  awards: {
    eyebrow: "Recognition",
    title: "Awards & recognition",
    lead: "Recognised across the industry.",
    logos: [
      { name: "FICCI", logo: "FICCI.jpg" },
      { name: "WAN-IFRA", logo: "waninfra.jpg" },
      { name: "INMA", logo: "INMA.jpg" },
      { name: "Abby's", logo: "abbys.jpg" },
      { name: "Maddy's", logo: "maddys.jpg" },
    ],
  },
  cta: {
    primaryCta: { label: "Book a working session", href: "/get-in-touch" },
    secondaryCta: { label: "Explore case studies", href: "/case-studies" },
  },
};
