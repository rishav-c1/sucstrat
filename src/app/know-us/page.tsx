import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FirmBand } from "@/components/sections/FirmBand";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { FounderBio } from "@/components/sections/FounderBio";
import { ImpactGlance } from "@/components/sections/ImpactGlance";
import { Frameworks } from "@/components/sections/Frameworks";
import { AwardsStrip } from "@/components/sections/AwardsStrip";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/primitives/JsonLd";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/jsonld";
import { KNOW_US } from "@/content/knowUs";

export const metadata: Metadata = {
  title: "Know Us",
  description:
    "Meet SucStrat and founder Vinay Maheshwari — proprietary frameworks and a thirty-year track record of turnarounds and scale.",
  alternates: { canonical: "/know-us" },
};

export default function KnowUsPage() {
  const k = KNOW_US;
  return (
    <>
      <PageHero
        eyebrow={k.hero.eyebrow}
        title={
          <>
            {k.hero.titleBefore}
            <em>{k.hero.titleEmphasis}</em>
          </>
        }
        sub={k.hero.sub}
        primaryCta={k.hero.primaryCta}
        secondaryCta={k.hero.secondaryCta}
      />
      <FirmBand eyebrow={k.firm.eyebrow} statement={k.firm.statement} />
      <FeatureGrid
        id="how"
        eyebrow={k.howWeWork.eyebrow}
        title={k.howWeWork.title}
        lead={k.howWeWork.lead}
        cards={k.howWeWork.cards}
        columns={4}
        bg="paper"
      />
      <FounderBio founder={k.founder} />
      <ImpactGlance {...k.impactGlance} />
      <Frameworks {...k.frameworks} />
      <AwardsStrip {...k.awards} />
      <CtaBand
        title={
          <>
            Unlock <em>opportunities</em>.
          </>
        }
        primaryCta={k.cta.primaryCta}
        secondaryCta={k.cta.secondaryCta}
      />
      <JsonLd
        data={[
          personJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Know Us", path: "/know-us" },
          ]),
        ]}
      />
    </>
  );
}
