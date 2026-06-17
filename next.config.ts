import type { NextConfig } from "next";

// Static export for GitHub Pages (project page at rishav-c1.github.io/sucstrat).
// Gated on STATIC_EXPORT=1 (set only by the Pages workflow) so local dev, the test
// suite, and a Node/Vercel build are completely unaffected.
const isExport = process.env.STATIC_EXPORT === "1";
const basePath = process.env.PAGES_BASE_PATH ?? "/sucstrat";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Inline CSS into the HTML to remove the render-blocking stylesheet request.
  experimental: {
    inlineCss: true,
  },
  images: {
    // v4.0 self-contained gate: all imagery is local (next/image over /static + /public),
    // no remote patterns. GitHub Pages has no image optimizer, so serve as-is on export.
    ...(isExport ? { unoptimized: true } : {}),
  },
  ...(isExport
    ? {
        // Emit static HTML to ./out; basePath/assetPrefix make assets resolve under /sucstrat.
        output: "export" as const,
        basePath,
        assetPrefix: basePath,
        trailingSlash: true,
      }
    : {
        // redirects() is unsupported by `output: export` — only the Node/Vercel build serves it.
        async redirects() {
          return [{ source: "/pitch-us", destination: "/get-in-touch", permanent: true }];
        },
      }),
};

export default nextConfig;
