import { defineConfig, devices } from "@playwright/test";

const iphoneDuo = {
  ...devices["iPhone 15 Pro Max"],
  deviceScaleFactor: 3,
  defaultBrowserType: "chromium" as const,
};

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
    // iPhone Duo (foldable, 2026). Not in Playwright's device list yet; points are
    // third-party estimates (published pixels ÷ 3), so re-check against Xcode's
    // simulator when available. The unfolded 890px width sits just under the 900px
    // mobile-nav breakpoint, so it's the tightest case here.
    {
      name: "iphone-duo-folded",
      use: { ...iphoneDuo, viewport: { width: 466, height: 678 } },
    },
    {
      name: "iphone-duo-unfolded",
      use: { ...iphoneDuo, viewport: { width: 890, height: 626 } },
    },
    {
      name: "iphone-duo-unfolded-portrait",
      use: { ...iphoneDuo, viewport: { width: 626, height: 890 } },
    },
    // Android: a current mid-size phone plus a narrow 320px one (the tightest width we support).
    { name: "android-pixel-7", use: { ...devices["Pixel 7"] } },
    { name: "android-narrow", use: { ...devices["Galaxy S9+"] } },
    // iPad: smallest portrait (768, just under the 900px nav breakpoint) and a large landscape.
    { name: "ipad-mini", use: { ...devices["iPad Mini"], defaultBrowserType: "chromium" } },
    {
      name: "ipad-pro-landscape",
      use: { ...devices["iPad Pro 11 landscape"], defaultBrowserType: "chromium" },
    },
    // Laptop + large desktop, beyond the default 1280x720 Desktop Chrome project.
    { name: "laptop", use: { ...devices["Desktop Chrome"], viewport: { width: 1366, height: 768 } } },
    { name: "desktop-xl", use: { ...devices["Desktop Chrome"], viewport: { width: 1920, height: 1080 } } },
  ],
});
