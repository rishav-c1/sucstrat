import { SITE, ORG_LOGO_URL, SOCIAL_PROFILES } from "@/content/site";

export type JsonLdData = Record<string, unknown>;

const ORG_ID = `${SITE.domain}/#organization`;

/** Site-wide Organization + ProfessionalService (root layout). */
export function organizationJsonLd(): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE.domain,
    email: SITE.email,
    slogan: SITE.tagline,
    description: SITE.tagline,
    founder: { "@type": "Person", name: SITE.founder, jobTitle: SITE.founderRole },
    // areaServed mirrors the engagement regions on the Home world map.
    areaServed: ["IN", "US", "AE", "SA", "QA", "OM", "GB", "FI", "RU", "MR", "ZW"],
    // Logo signals which image to show in the brand knowledge panel (absolute, stable URL).
    logo: ORG_LOGO_URL,
    image: ORG_LOGO_URL,
    // sameAs strengthens entity recognition — only emitted once real profile URLs exist
    // (see SOCIAL_PROFILES); never fabricated.
    ...(SOCIAL_PROFILES.length > 0 ? { sameAs: SOCIAL_PROFILES } : {}),
  };
}

/** Person (Vinay Maheshwari) — Home + Know Us. Built only from verbatim reference copy. */
export function personJsonLd(): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.founder,
    jobTitle: `${SITE.founderRole}, ${SITE.name}`,
    worksFor: { "@id": ORG_ID },
    url: `${SITE.domain}/know-us`,
  };
}

/** BreadcrumbList for inner pages. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.domain}${item.path}`,
    })),
  };
}
