import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

// Emit as a static file under `output: export`.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE.domain}/sitemap.xml`,
    host: SITE.domain,
  };
}
