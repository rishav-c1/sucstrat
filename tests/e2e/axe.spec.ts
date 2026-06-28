import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// Every route. Zero axe violations is an acceptance gate.
const ROUTES = [
  "/",
  "/what-we-do",
  "/know-us",
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

// The Know Us "Our Method" rail swaps the visible panel; the other three exhibits are
// display:none until selected, so the default scan above never checks their labels. Activate
// each framework and scan, so every exhibit's contrast is covered.
test("/know-us — every Our Method panel passes axe", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/know-us");
  for (const title of [/D Scale-Up Loop/, /Momentum Matrix/, /Intensity Model/, /Qualified vs Classified/]) {
    await page.getByRole("button", { name: title }).click();
    const { violations } = await new AxeBuilder({ page }).analyze();
    expect(violations, `${title}: ${JSON.stringify(violations, null, 2)}`).toEqual([]);
  }
});
