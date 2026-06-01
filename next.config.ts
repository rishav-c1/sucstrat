import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Inline CSS into the HTML to remove the render-blocking stylesheet request
  // (improves FCP/LCP on high-latency mobile — the Lighthouse profile).
  experimental: {
    inlineCss: true,
  },
  images: {
    // Brand/client/award logos are served from the SucStrat WordPress; next/image
    // fetches + optimizes them server-side. TODO(content): self-host for production.
    remotePatterns: [{ protocol: "https", hostname: "sucstrat.com", pathname: "/wp-content/uploads/**" }],
  },
  // The contact page moved from /pitch-us to /get-in-touch (matches the mockup + CTA).
  async redirects() {
    return [{ source: "/pitch-us", destination: "/get-in-touch", permanent: true }];
  },
};

export default nextConfig;
