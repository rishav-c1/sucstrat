/**
 * Site-wide constants and the navigation graph.
 * Verbatim brand strings come from the reference mockups (see content-extraction/*.md).
 */

export const SITE = {
  name: "SucStrat",
  domain: "https://sucstrat.com",
  tagline: "India's only execution-first consulting firm",
  // Real contact email (resolves the mockups' "[confirm contact details]" placeholder;
  // supersedes the mockups' connect@sucstrat.com).
  email: "ashley@v3consultant.com",
  // Careers applications (per sign-off: route to the V3 Consultant address).
  careersEmail: "ashley@v3consultant.com",
  founder: "Vinay Maheshwari",
  founderRole: "Founder & Principal Consultant",
} as const;

/** Base URL for brand/client/award logo images (live on the SucStrat WordPress). */
export const LOGO_BASE = "https://sucstrat.com/wp-content/uploads/2025/09";

/**
 * Absolute, stable URL of the Organization logo for structured data (knowledge panel).
 * Served from `/public` (not the hashed `@static` bundle) so the URL never churns
 * between deploys. The asset is a navy wordmark on transparent — reads on all-white,
 * per Google's logo guideline. Update the path here if the file is renamed.
 */
export const ORG_LOGO_URL = `${SITE.domain}/sucstrat-logo.png`;

/** Official LinkedIn company page (from the Get in Touch mockup). */
export const LINKEDIN_URL = "https://www.linkedin.com/company/sucstrat";

/**
 * Public profiles for `Organization.sameAs` — strengthens entity recognition for the
 * knowledge panel. Add further authority profiles (Crunchbase, etc.) here as they exist.
 */
export const SOCIAL_PROFILES: string[] = [LINKEDIN_URL];

export interface NavLink {
  label: string;
  href: string;
}

/** Primary nav — identical across all six pages in the references. */
export const PRIMARY_NAV: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Know Us", href: "/know-us" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Clients", href: "/clients" },
  { label: "Careers", href: "/careers" },
  { label: "Knowledge", href: "/knowledge" },
];

/** Footer link columns — identical across all six pages. */
export const FOOTER_NAV: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "Know Us", href: "/know-us" },
      { label: "What We Do", href: "/what-we-do" },
      { label: "Clients", href: "/clients" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "More",
    links: [
      { label: "Knowledge", href: "/knowledge" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Get in Touch", href: "/get-in-touch" },
    ],
  },
];

/** Case-study stub routes (content out of scope per CLAUDE.md — placeholder routes only). */
export const CASE_STUDIES = [
  { slug: "sakshi-media-group", name: "Sakshi Media Group" },
  { slug: "mohan-babu-university", name: "Mohan Babu University" },
  { slug: "valmar", name: "Valmar" },
  { slug: "dainik-bhaskar", name: "Dainik Bhaskar" },
] as const;

export type CaseStudySlug = (typeof CASE_STUDIES)[number]["slug"];
