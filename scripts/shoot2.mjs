import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";

const BASE = "http://localhost:3000";
const OUT = "/tmp/sucstrat_shots";
mkdirSync(OUT, { recursive: true });

const PAGES = ["what-we-do", "know-us", "careers", "knowledge", "get-in-touch"];
const browser = await chromium.launch();

for (const slug of PAGES) {
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(`${BASE}/${slug}`, { waitUntil: "load" });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${OUT}/page-${slug}.png`, fullPage: true });
  await page.close();
}
await browser.close();
console.log("saved");
