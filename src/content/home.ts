import type { Cta, Metric, Region } from "./types";

/** Verbatim Home content (see content-extraction/home.md). */

const primaryCta: Cta = { label: "Get in Touch", href: "/get-in-touch" };

export const HOME = {
  hero: {
    eyebrow: "Execution-first consulting",
    // h1 renders as "Your Success." / "Our Strategy." with "Strategy" emphasised.
    titleLeadLine: "Your Success.",
    titleRestBefore: "Our ",
    titleEmphasis: "Strategy",
    sub: "From strategy to scale, with success built in.",
    primaryCta,
  },

  pillars: {
    title: "The SucStrat Standard",
    lead: "How we think. How we build. How we win.",
    cards: [
      { num: "01", title: "Strategy to Scale", body: "Vision crafted, outcomes delivered end-to-end." },
      { num: "02", title: "Built With You", body: "True partnership, aligned at every step." },
      { num: "03", title: "Execution Excellence", body: "Flawless delivery, every single day." },
      { num: "04", title: "Process Power", body: "Disciplined systems that make success repeatable." },
    ],
  },

  impact: {
    eyebrow: "Our impact",
    title: "Building and turning around businesses judged by the outcomes we leave behind",
    metrics: [
      { to: 170, label: "Consultants" },
      { to: 21, label: "Sectors" },
      { to: 35, suffix: "+", label: "Active clients" },
      { to: 300, suffix: "+", label: "Transformation projects" },
    ] satisfies Metric[],
  },

  globalImpact: {
    title: "Global impact",
    sub: "Strategy that travels. Execution that stays.",
    legend: { hq: "Headquarters", engagement: "Engagement" },
    cloudLabel: "Sectors we serve",
    cloudHint: "Select a sector to highlight where we run it",
  },

  whatWeDo: {
    eyebrow: "What we do",
    title: "Eight practices. One operating discipline.",
    body: "From strategy and turnaround to capital and AI, we work across the full arc, then stay to make it hold.",
    cta: { label: "Explore what we do", href: "/what-we-do" } satisfies Cta,
    practices: [
      { name: "Strategic Transformation", desc: "Growth strategy, scale-up roadmaps, and go-to-market." },
      { name: "Venture Building & Incubation", desc: "New ventures built from the ground up, often equity-aligned." },
      { name: "Turnaround & Operations", desc: "360 turnkey operations, turnaround, and operational excellence." },
      { name: "Brand, Marketing & Consumer Insights", desc: "Brand positioning, consumer trends, and reputation management." },
      { name: "Capital & Corporate Development", desc: "Funding, M&A, valuation, and the road to IPO." },
      { name: "Leadership & CXO Coaching", desc: "Executive coaching, founder mentorship, and alignment." },
      { name: "Digital, Data & AI", desc: "Digital transformation, analytics, and automation." },
      { name: "Public Policy & Institutions", desc: "Policy, institution building, and ESG impact." },
    ],
  },

  founder: {
    eyebrow: "The Pivot",
    name: "Vinay Maheshwari",
    role: "Founder & Principal Consultant, SucStrat",
    highlight: "Thirty years transforming institutions, scaling businesses, and coaching the leaders who run them.",
    portraitAlt: "Vinay Maheshwari, Founder & Principal Consultant of SucStrat",
    tiles: [
      { value: "3 Decades", label: "Leadership" },
      { value: "300+", label: "Brand Solutions" },
      { value: "$1B+", label: "Enterprise Value Shaped" },
    ],
    // Home teaser (compact variant) — a single condensed line; the full bio below is Know Us only.
    teaser:
      "The driving force behind SucStrat: a three-decade operator who has led large-scale organisations, turned around underperforming businesses, and scaled high-growth ventures.",
    paragraphs: [
      "Vinay Maheshwari has spent three decades doing the hard part: taking institutions and businesses from where they are to where they need to be.",
      "He has led national media as Group CEO of India TV, rebuilt profitability as Executive Director & CEO of Sakshi Media Group, and governed at institutional scale as Trustee & Executive Director at Mohan Babu University. Along the way, that work helped build one of the world's largest daily newspapers by circulation.",
      "Those operating years put him across the table from the brands that define their categories, from Walmart and HUL to Maruti, ICICI, Amazon, and Disney.",
      "Today he channels that depth into SucStrat, advising promoters, boards, and CXOs with consulting that is practical, execution-focused, and built to scale.",
    ],
  },

  ctaBand: {
    titleBefore: "Your success. ",
    titleEmphasis: "Our strategy.",
    titleAfter: "",
    primaryCta,
  },
};

/** Master sector list (21) for the Global-impact sector cloud. */
export const ALL_SECTORS: string[] = [
  "Hospitality & Leisure",
  "Fashion, Luxury & Lifestyle",
  "Mining & Natural Resources",
  "Education & EdTech",
  "Student Housing & Campus Infrastructure",
  "Broadcast & Media",
  "Publishing & Print Media",
  "Media & Entertainment Tech",
  "Infrastructure & Smart Cities",
  "Film & Content Production",
  "Technology & Innovation",
  "Government & Public Policy",
  "HealthTech & Digital Health",
  "Healthcare & Medical Services",
  "AI, Deep Tech & Data Science",
  "Real Estate & Urban Development",
  "Food Services & QSR",
  "FMCG & Packaged Goods",
  "Faith, Culture & Spiritual Enterprises",
  "Textile & Home Furnishing",
  "Aviation & Aerospace",
];

/** Engagement regions + their sectors (drives the world map + tooltips). */
export const REGIONS: Region[] = [
  {
    id: "IN",
    name: "India",
    eyebrow: "Headquarters",
    hq: true,
    countries: ["India"],
    sectors: [
      "Hospitality & Leisure",
      "Fashion, Luxury & Lifestyle",
      "Education & EdTech",
      "Student Housing & Campus Infrastructure",
      "Broadcast & Media",
      "Publishing & Print Media",
      "Media & Entertainment Tech",
      "Infrastructure & Smart Cities",
      "Film & Content Production",
      "Technology & Innovation",
      "Government & Public Policy",
      "HealthTech & Digital Health",
      "Healthcare & Medical Services",
      "AI, Deep Tech & Data Science",
      "Real Estate & Urban Development",
      "Food Services & QSR",
      "FMCG & Packaged Goods",
      "Faith, Culture & Spiritual Enterprises",
      "Textile & Home Furnishing",
      "Aviation & Aerospace",
    ],
  },
  {
    id: "US",
    name: "United States",
    eyebrow: "Engagement",
    countries: ["United States of America"],
    sectors: [
      "Fashion, Luxury & Lifestyle",
      "Education & EdTech",
      "Student Housing & Campus Infrastructure",
      "HealthTech & Digital Health",
      "Real Estate & Urban Development",
    ],
  },
  {
    id: "ME",
    name: "Middle East",
    eyebrow: "Engagement",
    countries: ["United Arab Emirates", "Saudi Arabia", "Qatar", "Oman"],
    sectors: [
      "Fashion, Luxury & Lifestyle",
      "Education & EdTech",
      "Student Housing & Campus Infrastructure",
      "Media & Entertainment Tech",
      "HealthTech & Digital Health",
      "Real Estate & Urban Development",
      "Textile & Home Furnishing",
      "Aviation & Aerospace",
    ],
  },
  {
    id: "GB",
    name: "United Kingdom",
    eyebrow: "Engagement",
    countries: ["United Kingdom"],
    sectors: ["Fashion, Luxury & Lifestyle", "HealthTech & Digital Health", "Food Services & QSR"],
  },
  {
    id: "FI",
    name: "Finland",
    eyebrow: "Engagement",
    countries: ["Finland"],
    sectors: ["Hospitality & Leisure"],
  },
  {
    id: "RU",
    name: "Russia",
    eyebrow: "Engagement",
    countries: ["Russia"],
    sectors: ["Fashion, Luxury & Lifestyle"],
  },
  {
    id: "MR",
    name: "Mauritania",
    eyebrow: "Engagement",
    countries: ["Mauritania"],
    sectors: ["Mining & Natural Resources"],
  },
  {
    id: "ZW",
    name: "Zimbabwe",
    eyebrow: "Engagement",
    countries: ["Zimbabwe"],
    sectors: ["Mining & Natural Resources"],
  },
  {
    id: "VN",
    name: "Vietnam",
    eyebrow: "Engagement",
    countries: ["Vietnam"],
    sectors: ["Education & EdTech"],
  },
  {
    id: "TZ",
    name: "Tanzania",
    eyebrow: "Engagement",
    countries: ["Tanzania"],
    sectors: ["Mining & Natural Resources"],
  },
  {
    id: "KR",
    name: "South Korea",
    eyebrow: "Engagement",
    countries: ["South Korea"],
    sectors: ["Fashion, Luxury & Lifestyle"],
  },
  {
    id: "IT",
    name: "Italy",
    eyebrow: "Engagement",
    countries: ["Italy"],
    sectors: ["Fashion, Luxury & Lifestyle"],
  },
  {
    id: "AU",
    name: "Australia",
    eyebrow: "Engagement",
    countries: ["Australia"],
    sectors: ["Student Housing & Campus Infrastructure"],
  },
  {
    id: "MY",
    name: "Malaysia",
    eyebrow: "Engagement",
    countries: ["Malaysia"],
    sectors: ["Student Housing & Campus Infrastructure"],
  },
];
