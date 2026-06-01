import type { MetadataRoute } from "next";
import { SITE, CASE_STUDIES } from "@/content/site";

// Emit as a static file under `output: export`.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.domain;

  const primary = ["", "/what-we-do", "/know-us", "/clients", "/careers", "/knowledge", "/get-in-touch", "/case-studies"].map(
    (path) => ({
      url: `${base}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    }),
  );

  const caseStudies = CASE_STUDIES.map((cs) => ({
    url: `${base}/case-studies/${cs.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...primary, ...caseStudies];
}
