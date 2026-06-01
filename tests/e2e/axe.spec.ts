import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// Every route. Zero axe violations is an acceptance gate.
const ROUTES = [
  "/",
  "/what-we-do",
  "/know-us",
  "/clients",
  "/careers",
  "/knowledge",
  "/get-in-touch",
  "/case-studies",
  "/case-studies/sakshi-media-group",
];

for (const route of ROUTES) {
  test(`${route} has no axe-core violations`, async ({ page }) => {
    // Test the settled, reduced-motion baseline (transient entrance animations are
    // not WCAG-evaluated; reduced-motion is the accessibility baseline).
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(route);
    const { violations } = await new AxeBuilder({ page }).analyze();
    expect(violations, JSON.stringify(violations, null, 2)).toEqual([]);
  });
}
