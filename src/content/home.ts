import type { Cta, Metric, Region } from "./types";

/** Verbatim Home content (see content-extraction/home.md). */

const primaryCta: Cta = { label: "Get in Touch", href: "/get-in-touch" };
const seeOurWork: Cta = { label: "See our work", href: "/clients" };

export const HOME = {
  hero: {
    eyebrow: "Execution-first consulting.",
    // h1 renders as "Your Success." / "Our Strategy." with "Strategy" emphasised.
    titleLeadLine: "Your Success.",
    titleRestBefore: "Our ",
    titleEmphasis: "Strategy",
    sub: "From strategy to scale, with success built in.",
    primaryCta,
    secondaryCta: seeOurWork,
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
    title:
      "Three decades of building and turning around businesses, judged on one thing: the outcomes we leave behind.",
    metrics: [
      { to: 195, suffix: "+", label: "Consultants" },
      { to: 21, label: "Sectors" },
      { to: 127, suffix: "+", label: "Clients served" },
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
    title: "Seven practices. One operating discipline.",
    body: "From strategy and turnaround to capital and AI, we work across the full arc, then stay to make it hold.",
    cta: { label: "Explore what we do", href: "/what-we-do" } satisfies Cta,
    practices: [
      { name: "Strategy & Scale", desc: "Growth strategy, scale-up roadmaps, and go-to-market." },
      { name: "Turnaround & Operations", desc: "360 turnkey operations, turnaround, and operational excellence." },
      { name: "Brand, Marketing & Consumer", desc: "Brand strategy, consumer insight, and reputation." },
      { name: "Capital & Corporate Development", desc: "Funding, M&A, valuation, and the road to IPO." },
      { name: "Leadership & CXO Coaching", desc: "Executive coaching, founder mentorship, and alignment." },
      { name: "Digital, Data & AI", desc: "Digital transformation, analytics, and automation." },
      { name: "Public Policy & Institutions", desc: "Policy, institution building, and ESG impact." },
    ],
  },

  founder: {
    eyebrow: "The pivot",
    name: "Vinay Maheshwari",
    role: "Founder & Principal Consultant, SucStrat",
    highlight: "30+ years of transforming institutions, scaling businesses, and coaching leaders.",
    portraitAlt: "Vinay Maheshwari, Founder & Principal Consultant of SucStrat",
    tiles: [
      { value: "3 Decades", label: "Leadership" },
      { value: "300+", label: "Brand solutions" },
      { value: "$1B+", label: "Enterprise value shaped" },
    ],
    paragraphs: [
      "Vinay Maheshwari is the driving force behind SucStrat. Over a three-decade career, he has led large-scale organizations, turned around underperforming businesses, and scaled high-growth ventures.",
      "As Group CEO of India TV, Executive Director & CEO of Sakshi Media Group, and Trustee & Executive Director at Mohan Babu University, Vinay has consistently delivered transformation at scale, from restoring profitability to building one of the world's largest daily newspapers by circulation.",
      "Today, as Founder of SucStrat, he brings this depth of experience to promoters, boards, CXOs, and institutions, delivering consulting that is practical, execution-focused, and built to scale.",
    ],
    credentialsLabel: "Leadership track record",
    credentials: [
      { org: "India TV", role: "Group CEO" },
      { org: "Sakshi Media Group", role: "ED & CEO" },
      { org: "Mohan Babu University", role: "Trustee & ED" },
      { org: "CEO of the Year", role: "2021" },
    ],
  },

  ctaBand: {
    titleBefore: "Your success. ",
    titleEmphasis: "Our strategy.",
    titleAfter: "",
    primaryCta,
    secondaryCta: seeOurWork,
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
