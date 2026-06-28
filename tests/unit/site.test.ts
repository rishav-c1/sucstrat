import { describe, it, expect } from "vitest";
import { PRIMARY_NAV, FOOTER_NAV, CASE_STUDIES, SITE } from "@/content/site";

describe("site content layer (scaffold smoke)", () => {
  it("exposes the five primary nav routes", () => {
    const hrefs = PRIMARY_NAV.map((l) => l.href);
    expect(PRIMARY_NAV).toHaveLength(5);
    expect(hrefs).toEqual(["/", "/know-us", "/what-we-do", "/careers", "/knowledge"]);
  });

  it("defines the four case-study stub slugs", () => {
    expect(CASE_STUDIES.map((c) => c.slug)).toEqual([
      "sakshi-media-group",
      "mohan-babu-university",
      "valmar",
      "dainik-bhaskar",
    ]);
  });

  it("has a canonical domain and brand name", () => {
    expect(SITE.domain).toBe("https://sucstrat.com");
    expect(SITE.name).toBe("SucStrat");
  });

  it("footer columns only link to in-site routes", () => {
    const allHrefs = FOOTER_NAV.flatMap((c) => c.links.map((l) => l.href));
    expect(allHrefs.every((h) => h.startsWith("/"))).toBe(true);
  });
});
