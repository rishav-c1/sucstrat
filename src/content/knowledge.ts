import type { InsightCard } from "./types";

export const KNOWLEDGE = {
  hero: {
    eyebrow: "Knowledge",
    title: "Insights & ideas.",
    sub: "Selected writing and commentary from the SucStrat team, across education, media, and the business of building things that scale.",
    primaryCta: { label: "Get in touch", href: "/get-in-touch" },
    secondaryCta: { label: "Browse insights", href: "#insights" },
  },
  // `tag` convention — it marks authorship, not topic, so keep it accurate:
  //   "Op-ed"     — a bylined opinion column written by Vinay.
  //   "Interview" — Vinay interviewed by the publication.
  //   "Feature"   — the publication writing about MBU/SucStrat (may quote him).
  topics: [
    {
      id: "insights",
      title: "Strategy & Execution",
      bg: "paper" as const,
      cards: [
        // Grid order note: the Knowledge page flattens every topic's cards into one grid, so the
        // topic order is the grid order — except for cards marked `pinned`, which lead it. Tile
        // treatments are assigned by position in InsightCardGrid (no two neighbours match), so
        // cards carry no colour of their own.
        {
          tag: "Op-ed",
          title: "How global trends are reshaping overseas education decisions",
          desc: "Why Indian students now weigh academic quality, affordability, and employability over rankings alone.",
          source: "India Today",
          href: "https://bestcolleges.indiatoday.in/study-abroad/how-evolving-global-trends-are-influencing-indian-students-overseas-education-decisions-in-2026-10883",
        },
        {
          // TODO(content): verify the tag. ET credits this to "Spotlight Wire" (its branded-content
          // desk), not a Vinay byline — if it was a placement rather than a commissioned column,
          // "Op-ed" overstates it and this should be "Feature".
          tag: "Op-ed",
          title: "Making strategy work: why execution is the real differentiator",
          // TODO(content): description paraphrases the headline thesis — article body could not be fetched to confirm a fuller summary.
          desc: "On why disciplined execution — not strategy on paper — is what separates organisations that deliver.",
          source: "The Economic Times",
          href: "https://economictimes.indiatimes.com/news/company/corporate-trends/making-strategy-work-why-execution-is-the-real-differentiator/articleshow/132532866.cms",
        },
      ] satisfies InsightCard[],
    },
    {
      title: "Education & Skills",
      bg: "mist" as const,
      cards: [
        // The two newest pieces (19 Oct and 10 Sep 2026). Both are education articles, so they
        // live here rather than under Strategy & Execution; `pinned` is what puts them in the
        // grid's lead tiles.
        {
          pinned: true,
          tag: "Interview",
          title: "Skills must complement degrees",
          desc: "On AI, employability, and building applied learning into the degree itself so graduates are industry-ready.",
          source: "BW Education",
          href: "https://www.bweducation.com/article/skills-must-complement-degrees-629271",
        },
        {
          pinned: true,
          tag: "Op-ed",
          title: "Beyond the lab: how innovation spaces are shaping school education",
          desc: "Why open-ended innovation spaces, in the spirit of NEP 2020, build creativity and problem-solving across every discipline.",
          source: "The Week",
          href: "https://www.theweek.in/news/education/2026/09/10/guest-opinion-nep-2020-student-creativity.html",
        },
        {
          tag: "Op-ed",
          title: "Preparing students for two chances at the CBSE boards",
          desc: "How schools can turn CBSE's two-attempt board policy into continuous assessment and closer academic support.",
          source: "ETEducation",
          href: "https://education.economictimes.indiatimes.com/news/school-education/cbse-schools-embrace-new-examination-opportunities-a-revolutionary-approach-to-student-learning/132704758",
        },
        {
          // TODO(content): verify the tag — the byline could not be read (the page renders its
          // article body client-side). Confirm this is Vinay's own column, not coverage.
          tag: "Op-ed",
          title: "Preparing Indian graduates for jobs that didn't exist five years ago",
          desc: "On reshaping curricula so graduates are ready for roles the market only just invented.",
          source: "EducationWorld",
          href: "https://educationworld.in/preparing-indian-graduates-for-jobs-that-didnt-exist-five-years-ago/",
        },
        {
          tag: "Op-ed",
          title: "Five years of NEP: why the Union Budget must rethink skills",
          desc: "Five years into the NEP, the case for realigning skills and curriculum with industry.",
          source: "The Week",
          href: "https://www.theweek.in/news/india/2026/01/30/five-years-of-nep-why-union-budget-must-rethink-skills-curriculum-industry-alignment.html",
        },
        {
          // Bylined "DH Web Desk" — reported coverage quoting Vinay, not an authored column.
          tag: "Feature",
          title: "Union Budget 2025: strengthen public schools in underserved regions",
          desc: "Why the Budget should prioritise public schools in rural and underserved India.",
          source: "Deccan Herald",
          href: "https://www.deccanherald.com/business/union-budget/union-budget-2025-govt-should-strengthen-public-schools-in-rural-and-underserved-regions-says-mohan-babu-university-ed-vinay-maheshwari-3374500",
        },
        {
          tag: "Feature",
          title: "On inclusive, future-ready learning",
          desc: "A perspective for International Education Day on building education for what comes next.",
          source: "APN News",
          href: "https://www.apnnews.com/international-education-day-quote-by-vinay-maheshwari-executive-director-trustee-mohan-babu-university/",
        },
        {
          tag: "Interview",
          title: "MBU: a torchbearer of inclusive education",
          desc: "How MBU grew from regional roots to global relevance.",
          source: "IANS Live",
          href: "https://ianslive.in/mbu-a-torchbearer-of-inclusive-education-expanded-from-regional-to-global-relevance--20250603170342",
        },
        {
          tag: "Feature",
          title: "Industry-readiness, built into the B.Tech 2026 curriculum",
          desc: "Embedding employability and industry alignment into the core curriculum at MBU.",
          source: "SiliconIndia",
          href: "https://www.siliconindia.com/news/mohan-babu-university-adds-industryreadiness-to-btech-2026-curriculum-nwid-54288.html",
        },
        {
          tag: "Feature",
          title: "1,990 offers, a 95% placement rate",
          desc: "Inside the placement track record MBU has built.",
          source: "SMEStreet",
          href: "https://smestreet.in/sectors/mohan-babu-university-strengthens-placement-track-record-with-1990-offers-achieves-95-placement-rate-11886528",
        },
      ] satisfies InsightCard[],
    },
    {
      title: "Media & Broadcast",
      bg: "mist" as const,
      cards: [
        {
          tag: "Interview",
          title: "Print still holds relevance for a large section of consumers",
          desc: "Why print continues to command attention in a digital-first market.",
          source: "Exchange4media",
          href: "https://www.exchange4media.com/media-print-news/print-still-holds-relevance-for-large-section-of-consumers-vinay-maheshwari-sakshi-media-99128.html",
        },
        {
          tag: "Feature",
          title: "Content drives readership",
          desc: "Reading the IRS Q2 2019 South numbers, and what they say about content.",
          source: "Exchange4media",
          href: "https://www.exchange4media.com/media-print-news/irs-q2-2019-daily-thanthi-malayala-manorama-vijay-karnataka-eenadu-lead-in-south-98922.html",
        },
        {
          tag: "Interview",
          title: "Equal justice to digital and print",
          desc: "Inside Sakshi Media Group's push to balance both platforms.",
          source: "All About Newspapers",
          // TODO(content): this source link is http:// (not https) — kept verbatim from the reference.
          href: "http://www.allaboutnewspapers.com/sakshi-media-group-putting-effort-to-do-equal-justice-to-both-digital-and-print-platforms/",
        },
      ] satisfies InsightCard[],
    },
    {
      title: "Academic Partnerships",
      bg: "paper" as const,
      cards: [
        {
          tag: "Feature",
          title: "India's first joint degree with QS Top-100 Penn State",
          desc: "MBU partners with Penn State to launch India's first joint degree programme.",
          source: "NewKerala",
          href: "https://www.newkerala.com/news/o/mohan-babu-university-partners-qs-top-100-penn-state-indias-763",
        },
        {
          tag: "Feature",
          title: "MBU and Penn State: academic and research collaboration",
          desc: "A collaboration spanning curriculum, mobility, and joint research.",
          source: "Curriculum Magazine",
          href: "https://curriculum-magazine.com/mohan-babu-university-and-penn-state-university-enter-into-academic-research-collaboration/",
        },
        {
          tag: "Feature",
          title: "MBU signs MoU with Penn State University, USA",
          desc: "Formalising research and academic collaboration with Penn State.",
          source: "Skilloutlook",
          href: "https://skilloutlook.com/education/mohan-babu-university-signs-mou-with-penn-state-university-usa-to-foster-academic-collaboration-and-research-excellence",
        },
      ] satisfies InsightCard[],
    },
    {
      title: "Research & Innovation",
      bg: "mist" as const,
      cards: [
        {
          tag: "Feature",
          title: "Global academia and industry, together at the Research Conclave",
          desc: "MBU's International Research Conclave convenes academia and industry.",
          source: "APN News",
          href: "https://www.apnnews.com/mbu-brings-global-academia-and-industry-together-at-international-research-conclave/",
        },
        {
          tag: "Feature",
          title: "Hosting the 2026 IEEE Computing Innovations Conference",
          desc: "MBU hosts the 2026 IEEE Contemporary Computing Innovations Conference.",
          source: "APN News",
          href: "https://www.apnnews.com/mohan-babu-university-hosts-2026-ieee-contemporary-computing-innovations-conference-showcasing-advances-in-next-generation-computing/",
        },
        {
          tag: "Feature",
          title: "IEEE CCIC 2026 draws global computing experts",
          desc: "Global experts gather for next-generation computing at IEEE CCIC 2026.",
          source: "The Hans India",
          href: "https://www.thehansindia.com/hans/education-careers/ieee-ccic-2026-attracts-global-experts-in-computing-innovation-1047963",
        },
      ] satisfies InsightCard[],
    },
  ],
  cta: {
    // Single closing CTA only (v4.0).
    primaryCta: { label: "Get in touch", href: "/get-in-touch" },
  },
};
