// Dev-only: capture screenshots of the rendered app. Run against a live server.
import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";

const BASE = "http://localhost:3000";
const OUT = "/tmp/sucstrat_shots";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();

// Desktop full Home (reduced-motion → all reveal content captured, no fade timing).
const d = await browser.newPage({ viewport: { width: 1366, height: 900 } });
await d.emulateMedia({ reducedMotion: "reduce" });
await d.goto(`${BASE}/`, { waitUntil: "load" });
await d.waitForTimeout(600);
await d.screenshot({ path: `${OUT}/home-desktop-full.png`, fullPage: true });

// World map with a sector highlighted.
await d.locator("#geo").scrollIntoViewIfNeeded();
await d.getByRole("button", { name: "Education & EdTech" }).click();
await d.waitForTimeout(300);
await d.locator("#geo").screenshot({ path: `${OUT}/home-map-highlight.png` });
await d.close();

// Mobile full Home.
const m = await browser.newPage({ viewport: { width: 390, height: 844 } });
await m.emulateMedia({ reducedMotion: "reduce" });
await m.goto(`${BASE}/`, { waitUntil: "load" });
await m.waitForTimeout(600);
await m.screenshot({ path: `${OUT}/home-mobile-full.png`, fullPage: true });
await m.close();

await browser.close();
console.log("shots saved to", OUT);
