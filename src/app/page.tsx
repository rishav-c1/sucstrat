import { SplitMediaHero } from "@/components/sections/SplitMediaHero";
import { PillarGrid } from "@/components/sections/PillarGrid";
import { StatBand } from "@/components/sections/StatBand";
import { GlobalImpact } from "@/components/sections/GlobalImpact";
import { PracticeList } from "@/components/sections/PracticeList";
import { CaseCards } from "@/components/sections/CaseCards";
import { FounderBio } from "@/components/sections/FounderBio";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/primitives/JsonLd";
import { personJsonLd } from "@/lib/jsonld";
import { HOME } from "@/content/home";

export default function HomePage() {
  const { impact, cases, ctaBand } = HOME;

  return (
    <>
      <SplitMediaHero />
      <PillarGrid />
      <StatBand eyebrow={impact.eyebrow} title={impact.title} metrics={impact.metrics} columns={3} />
      <GlobalImpact />
      <PracticeList />
      <CaseCards title={cases.title} lead={cases.sub} items={cases.items} id="cases" />
      <FounderBio founder={HOME.founder} />
      <CtaBand
        title={
          <>
            {ctaBand.titleBefore}
            <em>{ctaBand.titleEmphasis}</em>
            {ctaBand.titleAfter}
          </>
        }
        primaryCta={ctaBand.primaryCta}
        secondaryCta={ctaBand.secondaryCta}
      />
      <JsonLd data={personJsonLd()} />
    </>
  );
}
