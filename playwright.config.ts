import { defineConfig, devices } from "@playwright/test";

/**
 * Smoke e2e: every route 200s, single <h1>, no console errors.
 * Builds + starts the production server. Run under Node 20 (`.nvmrc`).
 */
export default defineConfig({
  testDir: "tests/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  webServer: {
    command: "pnpm build && pnpm start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    // iPhone duo: the narrowest and widest current iPhone viewports, so every spec
    // also runs at both ends of the phone range. Viewport, DPR, touch, isMobile and
    // UA come from the device descriptor; the engine is Chromium (no WebKit download).
    {
      name: "iphone-se",
      use: { ...devices["iPhone SE (3rd gen)"], defaultBrowserType: "chromium" },
    },
    {
      name: "iphone-pro-max",
      use: { ...devices["iPhone 15 Pro Max"], defaultBrowserType: "chromium" },
    },
  ],
});
