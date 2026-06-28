import { SITE } from "./site";
import type { EngagementModel, LogoItem, MethodFramework, PedigreeGroup, PivotArc } from "./types";

export const KNOW_US = {
  hero: {
    eyebrow: "Know us",
    titleBefore: "Strategy. ",
    titleEmphasis: "Built to Scale.",
    // Lead with the thesis; "The firm" band below now carries the proof, not a second slogan.
    sub: "We don't hand over a deck and leave. We stay in the room until strategy becomes operating rhythm, and rhythm becomes scale.",
    primaryCta: { label: "Book a discovery call", href: "/get-in-touch" },
    secondaryCta: { label: "See our approach", href: "#engagement" },
  },
  firm: {
    eyebrow: "The firm",
    // Credibility line, not a second slogan: introduces the bench that justifies the page.
    statement:
      "An execution-first consulting collective of 195+ operators, top-ranked CAs and MBAs, led by a founder with three decades of building and turning around businesses. We are judged on one thing: the outcomes we leave behind.",
  },
  // Pivot "The arc" + "Across industries" — rendered below the founder bio on Know Us only
  // (replaces the former "Leadership track record" credentials row). Industry/brand grid
  // carried over from the removed Clients page's key-clients data.
  pivotArc: {
    arcLabel: "The arc",
    entries: [
      {
        org: "Sakshi Media Group",
        role: "Executive Director & CEO",
        body: "Restored profitability across TV, print, and digital and reset the growth engine.",
      },
      { org: "India TV", role: "Group CEO", body: "Led one of India's national news networks as Group CEO." },
      {
        org: "Mohan Babu University",
        role: "Trustee & Executive Director",
        body: "Built and governed at institutional scale, from strategy to execution.",
      },
      {
        org: "SucStrat",
        role: "Founder & Principal Consultant",
        body: "Today, channelling three decades into consulting for promoters, boards, and CXOs.",
      },
    ],
    industriesLabel: "Across industries",
    industriesLead:
      "Operating roles across media, retail, and consumer businesses have put Vinay across the table from the brands that define their categories.",
    industries: [
      { label: "Retail & Fashion", brands: ["Gap", "A&F", "Walmart", "Macy's", "Tommy Hilfiger", "Levi's"] },
      { label: "Media & Entertainment", brands: ["Sony", "Star", "Colors", "&tv", "Eros International"] },
      { label: "FMCG", brands: ["HUL", "P&G", "Dabur", "ITC", "Patanjali", "RHPL"] },
      { label: "Financial Services", brands: ["Birla Sun Life", "ICICI Pru", "MobiKwik", "Paytm"] },
      { label: "Automotive", brands: ["Maruti", "Honda", "Hyundai", "KIA"] },
      { label: "Education", brands: ["VIT", "SRM", "Aakash", "FIITJEE", "Narayana", "Sri Chaitanya"] },
      { label: "Digital & Retail", brands: ["Amazon", "Flipkart", "Snapdeal", "Big Bazaar", "Modern Retail", "Disney", "GVK"] },
    ],
  } satisfies PivotArc,
  // "How we engage" — the single "how we work" section. The former "How we lead" delivery
  // modes are covered by the What We Do practices and so were removed to kill the duplication.
  engagement: {
    eyebrow: "How we engage",
    title: "Five archetypes. One standard of work.",
    lead: "We embed: coaching boards, running turnaround, building ventures, then structure the relationship to fit the problem, from a two-week sprint to an equity-aligned build.",
    models: [
      {
        name: "Strategy Sprint",
        duration: "2 to 4 weeks",
        model: "Fixed scope",
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
  // "Our consultants" — the 195+ operator bench (names withheld), shown as a bento: a dark hero
  // banner (count + blurb), a pedigree ledger, and an "areas we go deep" card.
  expertise: {
    eyebrow: "The collective",
    title: "A bench that has built it before",
    bench: {
      stat: "195+",
      statLabel: "Consultants",
      blurb:
        "Top-ranked CAs and MBAs, ex-CXOs and founders who have built, scaled, and turned around businesses.",
    },
    pedigreeLabel: "Where they have led & advised",
    pedigree: [
      { label: "Education", orgs: ["Mohan Babu University", "Sree Vidyanikethan Group"] },
      {
        label: "Media & Publishing",
        orgs: ["Dainik Bhaskar", "Sakshi", "India TV", "Hindustan Times", "ABP Network", "The Telegraph"],
      },
      { label: "Consumer & FMCG", orgs: ["Reckitt Benckiser", "Dabur India"] },
      { label: "Investment & Industry", orgs: ["Mitsui & Co.", "Krishna Maruti Group", "Rockman Industries"] },
      { label: "Analytics & Insights", orgs: ["Evalueserve"] },
    ] satisfies PedigreeGroup[],
    areasLabel: "Our expertise",
    areas: [
      "Growth & Transformation",
      "Investments & Corporate Development",
      "Brand, Marketing & Consumer",
      "Finance, Governance & Risk",
      "Data, Analytics & Intelligence",
      "International Business",
    ],
  },
  // "Our method" — interactive proprietary-frameworks section (replaces the former navy
  // Frameworks band). Content carried verbatim from the design handoff: four frameworks,
  // each with a category, eyebrow, thesis (pre + bold mark + post), three points, and a
  // bespoke CSS diagram ("exhibit") selected by `type`. Em dashes intentionally avoided.
  method: {
    eyebrow: "Our method",
    titleLead: "Proprietary ",
    titleEmph: "frameworks",
    titleRest: ", built and proven in the field.",
    indexHeading: "The four frameworks",
    author: SITE.founder,
    authorRole: SITE.founderRole,
    // Sourced claim is copyright registration (not a registered trademark) — © not ®.
    exhibitReg: "© Copyright registered",
    credential: "Proprietary framework · Copyright registered, Govt. of India",
    frameworks: [
      {
        num: "01",
        type: "loop",
        cat: "Scaling System",
        eyebrow: "Scaling System",
        titleLead: "The D Scale-Up",
        emph: "Loop",
        fullTitle: "The D Scale-Up Loop",
        exhibitLabel: "The continuous loop",
        thesisPre:
          "Scaling stalls when diagnosis, design, and delivery sit in silos. The Loop runs all three as one continuous cycle, ",
        thesisMark: "simplification in motion",
        thesisPost: ", turning complexity into clarity.",
        points: [
          {
            label: "Discover & Diagnose",
            text: "Translate messy realities into sharp, simplified problem statements.",
          },
          {
            label: "Design & Deploy",
            text: "Build bespoke interventions tailored to context, not borrowed playbooks.",
          },
          {
            label: "Debug & Deliver",
            text: "Track on live dashboards; debug failures in real time with clear accountability.",
          },
        ],
      },
      {
        num: "02",
        type: "matrix",
        cat: "Effort × Timing × Trend",
        eyebrow: "Effort × Timing × Trend Alignment",
        titleLead: "The Momentum",
        emph: "Matrix",
        fullTitle: "The Momentum Matrix",
        exhibitLabel: "Effort × timing quadrants",
        thesisPre:
          "Effort alone does not compound. Returns appear only where effort meets the right timing and trend: ",
        thesisMark: "a GPS for where to spend energy",
        thesisPost: ", not just how hard to work.",
        points: [
          { label: "Effort", text: "Provides the endurance and resilience to stay in the game." },
          { label: "Timing", text: "Ensures the market is actually ready to receive the effort." },
          { label: "Trend Alignment", text: "Amplifies both, so growth compounds instead of dissipating." },
        ],
      },
      {
        num: "03",
        type: "intensity",
        cat: "Emotional Intensity",
        eyebrow: "Emotional Intensity · FEIM",
        titleLead: "Fear–Excitement",
        emph: "Intensity Model",
        fullTitle: "Fear–Excitement Intensity Model",
        exhibitLabel: "Intensity drives response",
        thesisPre:
          "Rational appeals delay decisions; emotion accelerates them. The greater the intensity of fear or excitement, ",
        thesisMark: "the faster and stronger the response",
        thesisPost: ", and the longer it lasts.",
        points: [
          {
            label: "Emotion as catalyst",
            text: "Fear and excitement compress hesitation directly into action.",
          },
          {
            label: "Differentiation as intensity",
            text: "Newness, originality and uniqueness raise the emotional charge.",
          },
          {
            label: "Retention through intensity",
            text: "High arousal sustains attention, and in some channels, habit.",
          },
        ],
      },
      {
        num: "04",
        type: "dominance",
        cat: "Audience Strategy",
        eyebrow: "Audience Strategy · QACAM",
        titleLead: "Qualified vs Classified",
        emph: "Audience Model",
        fullTitle: "Qualified vs Classified Audience",
        exhibitLabel: "Audience composition",
        thesisPre:
          "Not every buyer strengthens a brand. Enduring equity depends on the dominance of the Classified Audience: ",
        thesisMark: "relevance over raw revenue",
        thesisPost: ".",
        points: [
          {
            label: "Classified",
            text: "The intended target; all design, positioning and message optimised for them.",
          },
          {
            label: "Qualified",
            text: "Can afford to buy, but consume off-concept, revenue without relevance.",
          },
          {
            label: "Guardrail",
            text: "When Qualified consumption dominates, identity erodes despite the growth.",
          },
        ],
      },
    ] satisfies MethodFramework[],
  },
  // Recognition & platform: awards strip + the faculty/speaker platforms (merged in from the
  // former "Impact at a glance" section, whose other items duplicated the Pivot and this strip).
  awards: {
    eyebrow: "Recognition & platform",
    title: "Awards & recognition",
    lead: "Recognised across the industry, and on the platforms that shape it.",
    logos: [
      { name: "FICCI", logo: "FICCI.jpg" },
      { name: "WAN-IFRA", logo: "waninfra.jpg" },
      { name: "INMA", logo: "INMA.jpg" },
      { name: "Abby's", logo: "abbys.jpg" },
      { name: "Maddy's", logo: "maddys.jpg" },
      { name: "ET Entrepreneur Summit & Awards", logo: "et-economic-times.png" },
      { name: "Hermes Creative Awards", logo: "hermes.png" },
      { name: "Public Relations Council of India", logo: "prci.png" },
    ] satisfies LogoItem[],
    platform: {
      label: "Speaker & faculty",
      items: ["IIMs", "ET", "FICCI", "WAN-IFRA", "INMA"],
    },
  },
  cta: {
    primaryCta: { label: "Book a working session", href: "/get-in-touch" },
  },
};
