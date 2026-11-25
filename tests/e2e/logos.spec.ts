import { test, expect } from "@playwright/test";

// What We Do: the open client grid and the banking marquee, on every device project.
test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/what-we-do");
});

test("client logo grid: identical chips in symmetrical, centred rows", async ({ page }) => {
  const grid = page.getByRole("list", { name: "Client logos" });
  await grid.scrollIntoViewIfNeeded();
  const boxes = await grid.locator("li").evaluateAll((els) =>
    els.map((el) => {
      const r = el.getBoundingClientRect();
      return { x: r.left, y: r.top, w: r.width, h: r.height };
    }),
  );
  expect(boxes).toHaveLength(29);

  // Every chip is the same size.
  const [first] = boxes;
  if (!first) throw new Error("no client chips rendered");
  for (const b of boxes) {
    expect(Math.abs(b.w - first.w)).toBeLessThanOrEqual(1);
    expect(Math.abs(b.h - first.h)).toBeLessThanOrEqual(1);
  }

  // Every row (including a short last row) is centred in the grid.
  const g = await grid.evaluate((el) => {
    const r = el.getBoundingClientRect();
    return { left: r.left, right: r.right };
  });
  const rows = new Map<number, { min: number; max: number }>();
  for (const b of boxes) {
    const key = Math.round(b.y);
    const row = rows.get(key) ?? { min: Infinity, max: -Infinity };
    rows.set(key, { min: Math.min(row.min, b.x), max: Math.max(row.max, b.x + b.w) });
  }
  for (const { min, max } of rows.values()) {
    expect(Math.abs(min - g.left - (g.right - max))).toBeLessThanOrEqual(2);
  }
});

test("banking marquee: every institution named once", async ({ page }) => {
  const band = page.getByRole("group", { name: "Banking and financial institution logos" });
  await expect(band).toBeVisible();
  for (const name of [
    "Union Bank of India",
    "Kotak Mahindra Bank",
    "Bank of Baroda",
    "HDFC Bank",
    "Axis Finance",
    "UTI Alternatives",
    "Punjab National Bank",
    "IndusInd Bank",
  ]) {
    await expect(band.getByRole("img", { name })).toHaveCount(1);
  }
});
