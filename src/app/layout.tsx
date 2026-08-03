import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Lora, Lato } from "next/font/google";
import "./tokens.css";
import "./globals.css";
import { SITE } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/primitives/JsonLd";
import { organizationJsonLd } from "@/lib/jsonld";

/**
 * Lora (serif/headings): 400/500/600/700 + italic — all available on Google Fonts.
 * Lato (sans/body/UI): Google Fonts only ships 100/300/400/700/900 (no 500/600),
 * so the design's medium(500)/semibold(600) map to 400/700 here. See PLAN.md §3.2.
 */
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-lora",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} · Execution-First Consulting`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "From strategy to scale, with success built in. Three decades of building and turning around businesses, judged on outcomes.",
  alternates: { canonical: "/" },
  // Explicit, STABLE icon URLs (served from /public, so no build content-hash).
  // Google requires a stable favicon URL and caches by it; the .ico is the
  // universal crawler/browser fallback, the SVG is for modern browsers.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.domain,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${lato.variable}`} suppressHydrationWarning>
      <body>
        {/* Pre-paint marker: enables scroll-reveal animations only when JS + IO are
            available, so no-JS / no-IO users always see content unhidden. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if('IntersectionObserver' in window){document.documentElement.dataset.js=''}}catch(e){}`,
          }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}
