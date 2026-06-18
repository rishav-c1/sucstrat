/**
 * Site-wide constants and the navigation graph.
 * Verbatim brand strings come from the reference mockups (see content-extraction/*.md).
 */

export const SITE = {
  name: "SucStrat",
  domain: "https://sucstrat.com",
  // v4.0 spec: drop "India's only" everywhere.
  tagline: "Execution-first consulting firm",
  // The only contact email anywhere on the site (v4.0 hard gate). Resolves the mockups'
  // "[confirm contact details]" placeholder and supersedes the mockups' contact address.
  email: "ashley@v3consultant.com",
  // Careers applications route to the same address.
  careersEmail: "ashley@v3consultant.com",
  founder: "Vinay Maheshwari",
  founderRole: "Founder & Principal Consultant",
  address: "209/210 Tower 1, Assotech Business Cresterra, Sector 135, Noida",
} as const;

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

/**
 * Local base path for brand/client/award logo images (served from /public/logos).
 *
 * next/image does NOT prepend the configured `basePath` to string `src`s (only to static
 * imports), so on the static-export build — where the site lives under a basePath such as
 * /sucstrat on GitHub Pages — we add it here, mirroring next.config's logic. The logo
 * components are server-rendered, so this is evaluated at build and passed as a prop.
 */
const LOGO_BASE_PATH = process.env.STATIC_EXPORT === "1" ? (process.env.PAGES_BASE_PATH ?? "/sucstrat") : "";
export const LOGO_PATH = `${LOGO_BASE_PATH}/logos`;

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

/**
 * Page-specific header CTA (v4.0 Section 0). The label changes per route; every CTA
 * routes to the Get in Touch page. Resolved client-side by HeaderActions via the
 * current pathname (SSR-correct under static export — each route pre-renders its own).
 */
export const DEFAULT_HEADER_CTA: NavLink = { label: "Get in Touch", href: "/get-in-touch" };

export const HEADER_CTAS: Record<string, NavLink> = {
  "/": { label: "Get in Touch", href: "/get-in-touch" },
  "/know-us": { label: "Book a Call", href: "/get-in-touch" },
  "/what-we-do": { label: "Book a Discovery Call", href: "/get-in-touch" },
  "/clients": { label: "Work With Us", href: "/get-in-touch" },
  "/careers": { label: "Apply Now", href: "/get-in-touch" },
  "/knowledge": { label: "Get in Touch", href: "/get-in-touch" },
  "/get-in-touch": { label: "Get in Touch", href: "/get-in-touch" },
};

/** Resolve the header CTA for a pathname (longest-prefix match, default fallback). */
export function headerCtaFor(pathname: string): NavLink {
  if (pathname === "/") return HEADER_CTAS["/"] ?? DEFAULT_HEADER_CTA;
  const match = Object.keys(HEADER_CTAS)
    .filter((route) => route !== "/" && pathname.startsWith(route))
    .sort((a, b) => b.length - a.length)[0];
  return (match ? HEADER_CTAS[match] : undefined) ?? DEFAULT_HEADER_CTA;
}

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
