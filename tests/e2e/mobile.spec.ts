import { test, expect } from "@playwright/test";

// Phone-only checks; skipped on the desktop project.
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

test.beforeEach(({ isMobile }) => {
  test.skip(!isMobile, "phone viewports only");
});

for (const route of ROUTES) {
  test(`${route} has no horizontal overflow`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(route);
    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(scrollWidth, `page is ${scrollWidth}px wide in a ${clientWidth}px viewport`).toBeLessThanOrEqual(
      clientWidth,
    );
  });
}

test("mobile menu opens, navigates and closes", async ({ page }) => {
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await expect(toggle).toBeVisible();
  await toggle.tap();
  const mobileNav = page.getByRole("navigation", { name: "Mobile" });
  await expect(mobileNav).toBeVisible();
  await mobileNav.getByRole("link", { name: /know us/i }).tap();
  await expect(page).toHaveURL(/\/know-us$/);
  await expect(mobileNav).toBeHidden();
});
