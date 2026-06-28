import { SplitMediaHero } from "@/components/sections/SplitMediaHero";
import { PillarGrid } from "@/components/sections/PillarGrid";
import { StatBand } from "@/components/sections/StatBand";
import { GlobalImpact } from "@/components/sections/GlobalImpact";
import { PracticeList } from "@/components/sections/PracticeList";
import { FounderBio } from "@/components/sections/FounderBio";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/primitives/SectionHead";
import { Reveal } from "@/components/primitives/Reveal";
import { JsonLd } from "@/components/primitives/JsonLd";
import { personJsonLd } from "@/lib/jsonld";
import { LOGO_PATH } from "@/content/site";
import { HOME } from "@/content/home";
import { CLIENTS } from "@/content/clients";

export default function HomePage() {
  const { impact, ctaBand } = HOME;

  return (
    <>
      <SplitMediaHero />
      <PillarGrid />
      <StatBand eyebrow={impact.eyebrow} title={impact.title} metrics={impact.metrics} columns={4} />
      <GlobalImpact />
      <PracticeList />
      <FounderBio founder={HOME.founder} compact bg="paper" />

      {/* "Our clients" marquee — same section as What We Do, right after the Pivot. */}
      <Section bg="mist">
        <Container>
          <Reveal>
            <SectionHead eyebrow={CLIENTS.eyebrow} title={CLIENTS.title} lead={CLIENTS.lead} />
          </Reveal>
          <Reveal>
            <LogoMarquee
              speedSeconds={80}
              logos={CLIENTS.logos.map((l) => ({ src: `${LOGO_PATH}/${l.logo}`, alt: l.name }))}
            />
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        title={
          <>
            {ctaBand.titleBefore}
            <em>{ctaBand.titleEmphasis}</em>
            {ctaBand.titleAfter}
          </>
        }
        primaryCta={ctaBand.primaryCta}
      />
      <JsonLd data={personJsonLd()} />
    </>
  );
}
