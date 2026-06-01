import type { CaseItem, Cta, Metric, Region } from "./types";

/** Verbatim Home content (see content-extraction/home.md). */

const primaryCta: Cta = { label: "Get in Touch", href: "/get-in-touch" };
const seeHowWeScale: Cta = { label: "See how we scale", href: "#cases" };

export const HOME = {
  hero: {
    eyebrow: "India's only execution-first consulting firm",
    // h1 renders as "Your Success." / "Our Strategy." with "Strategy" emphasised.
    titleLeadLine: "Your Success.",
    titleRestBefore: "Our ",
    titleEmphasis: "Strategy",
    sub: "From strategy to scale, with success built in.",
    primaryCta,
    secondaryCta: seeHowWeScale,
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
    title: "Three decades of operating, measured the only way that counts: in outcomes.",
    metrics: [
      { to: 127, suffix: "+", label: "Clients served" },
      { to: 53, suffix: "+", label: "Institutional clients" },
      { to: 93, suffix: "+", label: "Projects delivered" },
      { to: 250, prefix: "₹", suffix: "cr+", label: "Value created" },
      { to: 30, label: "Years operating experience" },
      { to: 8, label: "Countries" },
    ] satisfies Metric[],
  },

  globalImpact: {
    title: "Global impact",
    sub: "Execution that travels, from Hyderabad to Helsinki, across 21 sectors and four continents.",
    legend: { hq: "Headquarters", engagement: "Engagement" },
    cloudLabel: "Sectors we serve",
    cloudHint: "Select a sector to highlight where we run it",
  },

  whatWeDo: {
    eyebrow: "What we do",
    title: "Seven integrated practices. One operating discipline.",
    body: "From corporate strategy to digital transformation to execution on the ground, we work across the full arc, then stay to make it hold.",
    cta: { label: "Explore what we do", href: "/what-we-do" } satisfies Cta,
    practices: [
      "Strategy",
      "Digital & AI Transformation",
      "Business Transformation",
      "Marketing, Brand & Communication",
      "Startup & Leadership Advisory",
      "Venture Funding & Investment",
      "Public Policy & Social Impact",
    ],
  },

  cases: {
    title: "Proof, not promises.",
    sub: "A few of the rooms we stayed in until the number moved.",
    items: [
      {
        slug: "sakshi-media-group",
        name: "Sakshi Media Group",
        logo: "sakshi.jpg",
        eyebrow: "Turnaround",
        stat: { prefix: "₹", value: "147", suffix: "cr" },
        statLabel: "Profit, up from a ₹14 cr loss",
        body: "A break-even media group to ₹147 cr profit in three years, with standalone P&Ls, Must-Win Battles, and India's first paperless newsroom.",
      },
      {
        slug: "mohan-babu-university",
        name: "Mohan Babu University",
        logo: "MBU.jpg",
        eyebrow: "Education",
        stat: { value: "18k", suffix: "+" },
        statLabel: "Students, up from 7,000",
        body: "Brownfield to a globally linked university, with industry curriculum, 86% placements, and partnerships with Penn State and RWTH Aachen.",
      },
      {
        slug: "valmar",
        name: "Valmar",
        logo: "valmar.jpg",
        eyebrow: "Housing & Food-tech",
        stat: { prefix: "₹", value: "80", suffix: "cr+" },
        statLabel: "FY25 revenue",
        body: "5,000+ beds and 24,000 meals a day, built from feasibility to live operations, with smart kitchens, ops dashboards, and IPO structuring.",
      },
      {
        slug: "dainik-bhaskar",
        name: "Dainik Bhaskar",
        logo: "dainik-Bhaskar.jpg",
        eyebrow: "National Media",
        stat: { value: "4th" },
        statLabel: "Largest daily in the world",
        body: "Consumer-connect programmes and insights-led GTM at national scale, aligning editorial and sales across the group.",
      },
    ] satisfies CaseItem[],
  },

  founder: {
    eyebrow: "The operator",
    name: "Vinay Maheshwari",
    role: "Founder & Principal Consultant, SucStrat",
    highlight: "30+ years of transforming institutions, scaling businesses, and coaching leaders.",
    portraitAlt: "Vinay Maheshwari, Founder & Principal Consultant of SucStrat",
    tiles: [
      { value: "3 Decades", label: "Leadership" },
      { value: "225+", label: "Industry Awards" },
      { value: "100+", label: "Clients" },
      { value: "8", label: "Countries" },
    ],
    paragraphs: [
      "Vinay Maheshwari is the driving force behind SucStrat. Over a three-decade career, he has led large-scale organizations, turned around underperforming businesses, and scaled high-growth ventures.",
      "As Group CEO of India TV, Executive Director & CEO of Sakshi Media Group, and Senior Vice President at Dainik Bhaskar Group, Vinay has consistently delivered transformation at scale, from restoring profitability to building India's largest and the world's third-largest newspaper.",
      "Today, as Founder of SucStrat, he brings this depth of experience to promoters, boards, CXOs, and institutions, delivering consulting that is practical, execution-focused, and built to scale.",
    ],
    credentialsLabel: "Leadership track record",
    credentials: [
      { org: "India TV", role: "Group CEO" },
      { org: "Sakshi Media Group", role: "ED & CEO" },
      { org: "Dainik Bhaskar Group", role: "Senior VP" },
      { org: "CEO of the Year", role: "2021" },
    ],
  },

  ctaBand: {
    titleBefore: "Ready to ",
    titleEmphasis: "scale",
    titleAfter: ", with success built in?",
    primaryCta,
    secondaryCta: seeHowWeScale,
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
    foot: "Delhi, Madhya Pradesh, Hyderabad, Uttar Pradesh, Mumbai",
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
    foot: "UAE, Saudi Arabia, Qatar, Oman",
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
    sectors: ["Fashion, Luxury & Lifestyle"],
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
];
