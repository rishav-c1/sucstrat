import { test, expect } from "@playwright/test";

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
  test(`${route} 200s, has exactly one <h1>, no console/page errors`, async ({ page }) => {
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });
    page.on("pageerror", (error) => pageErrors.push(error.message));

    const response = await page.goto(route);
    expect(response?.status(), `status for ${route}`).toBeLessThan(400);
    await expect(page.locator("h1")).toHaveCount(1);
    expect(pageErrors, pageErrors.join("\n")).toHaveLength(0);
    expect(consoleErrors, consoleErrors.join("\n")).toHaveLength(0);
  });
}
