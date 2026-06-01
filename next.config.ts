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
    // Brand/client/award logos are served from the SucStrat WordPress; next/image
    // fetches + optimizes them server-side. TODO(content): self-host for production.
    remotePatterns: [{ protocol: "https", hostname: "sucstrat.com", pathname: "/wp-content/uploads/**" }],
    // GitHub Pages has no image optimizer — serve images as-is in the export build.
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
