import { SITE } from "./site";
import type { EngagementModel, LogoItem, MethodFramework, PivotArc } from "./types";

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
      "An execution-first consulting collective of 170 operators, top-ranked CAs and MBAs, led by a founder with three decades of building and turning around businesses. We are judged on one thing: the outcomes we leave behind.",
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
    // Ordered as a commitment gradient (lighter touch -> deeper commitment); the card
    // spectrum colours track this order.
    models: [
      {
        name: "Strategy Sprint",
        duration: "2 to 4 weeks",
        model: "Fixed scope",
        oneLine: "Fast clarity, sharp direction, immediate momentum.",
        body: "A focused engagement to solve a specific challenge or define the next growth stage; the ideal entry point before a longer partnership.",
        bestFor: "Founders and leadership teams that need clarity on growth priorities, GTM, positioning, market entry, or P&L.",
        outputs: [
          "P&L review and opportunity diagnosis",
          "Tailored recommendations",
          "Prioritised roadmap",
          "Ready-to-execute plan",
        ],
      },
      {
        name: "Project-Based",
        duration: "4 to 12 weeks",
        model: "Defined scope and deliverables",
        oneLine: "Build a defined growth asset, system, or framework.",
        body: "For specific needs: CRM, campaigns, market entry, positioning, consumer insights, IPO readiness.",
        bestFor: "Businesses with a specific need: market entry, brand positioning, consumer insights, or IPO readiness.",
        outputs: [
          "Scoped strategy and frameworks",
          "Consumer insights and analytics",
          "Road-to-IPO support",
          "Execution plans and systems",
        ],
      },
      {
        name: "Strategic Retainer",
        duration: "6 to 12 months",
        model: "Senior counsel, on demand",
        oneLine: "Ongoing senior strategic support, without a full-time hire.",
        body: "For scaling businesses navigating transformation, M&A, capital decisions, and CXO execution.",
        bestFor: "Scaling businesses navigating transformation, M&A, capital decisions, and CXO-level execution.",
        outputs: [
          "Monthly reviews",
          "CXO mentoring",
          "Capital and corporate guidance",
          "P&L, cash-flow and investment models",
          "Continuous accountability",
        ],
      },
      {
        name: "Hybrid Partnership",
        duration: "6 to 12 months",
        model: "Performance-linked",
        oneLine: "Fixed fee plus performance incentives, aligned to outcomes.",
        body: "Where success metrics are clear and SucStrat meaningfully influences results.",
        bestFor: "Companies wanting a partner with shared accountability, where success metrics are clear.",
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
        bestFor: "High-potential startups needing strategic guidance with a flexible, stage-aligned structure.",
        outputs: [
          "Founder advisory",
          "Growth and business-building",
          "Hands-on at key milestones",
          "Genuine skin in the game",
        ],
      },
    ] satisfies EngagementModel[],
  },
  // "The collective" — a single summary paragraph about the consultant bench (replaced the
  // former bench/pedigree/areas bento).
  expertise: {
    eyebrow: "The collective",
    statement:
      "A bench of 170 consultants: top-ranked CAs and MBAs, ex-CXOs, and founders who have built, scaled, and turned around businesses. Between them they have worked across 350+ organisations spread over every sector we serve, from education and media to consumer, healthcare, and industry, leading and advising names like Mohan Babu University, Dainik Bhaskar, India TV, Reckitt Benckiser, Narayana, and Mitsui & Co. It means we arrive having already run the problem in front of you, not just studied it, with expertise spanning growth and transformation, corporate development, brand and consumer, finance and governance, data and analytics, and international business.",
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
