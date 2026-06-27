import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { StatBand } from "@/components/sections/StatBand";
import { PracticeShowcase } from "@/components/sections/PracticeShowcase";
import { EdgeBlock } from "@/components/sections/EdgeBlock";
import { IndustryTiles } from "@/components/sections/IndustryTiles";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHead } from "@/components/primitives/SectionHead";
import { Reveal } from "@/components/primitives/Reveal";
import { JsonLd } from "@/components/primitives/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { WHAT_WE_DO } from "@/content/whatWeDo";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Eight practices from strategy and turnaround to capital and AI, under one operating signature: Every Day, Great Execution.",
  alternates: { canonical: "/what-we-do" },
};

export default function WhatWeDoPage() {
  const w = WHAT_WE_DO;
  return (
    <>
      <PageHero
        {...w.hero}
        title={
          <>
            What we <em>do</em>.
          </>
        }
      />
      <StatBand eyebrow={w.approach.eyebrow} metrics={w.stats} columns={4} />

      <Section id="practices" bg="paper">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow={w.practices.eyebrow}
              title={
                <>
                  Eight practices.
                  <br />
                  <em>One operating discipline.</em>
                </>
              }
            />
          </Reveal>
          <Reveal>
            <PracticeShowcase items={w.practices.items} />
          </Reveal>
        </Container>
      </Section>

      <EdgeBlock
        eyebrow={w.edge.eyebrow}
        acronym={w.edge.acronym}
        title={w.edge.title}
        expansions={w.edge.expansions}
        footer={w.edge.footer}
      />

      <IndustryTiles {...w.industries} />

      <CtaBand
        title={
          <>
            Ready to <em>transform</em>?
          </>
        }
        primaryCta={w.cta.primaryCta}
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "What We Do", path: "/what-we-do" },
        ])}
      />
    </>
  );
}
