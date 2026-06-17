import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/primitives/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { CAREERS } from "@/content/careers";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build with a collective of top-ranked CAs and MBAs delivering boardroom thinking with execution on the ground.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  const c = CAREERS;
  return (
    <>
      <PageHero {...c.hero} />
      <FeatureGrid {...c.why} columns={4} bg="mist" />
      <FeatureGrid id="life" {...c.life} columns={4} bg="navy" />
      <FeatureGrid {...c.growth} columns={4} bg="paper" />
      <FeatureGrid {...c.beyond} columns={2} bg="mist" />
      <CtaBand
        title={
          <>
            Ready to build something that <em>lasts</em>?
          </>
        }
        primaryCta={c.cta.primaryCta}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ])}
      />
    </>
  );
}
