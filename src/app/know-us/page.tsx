import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FirmBand } from "@/components/sections/FirmBand";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { FounderBio } from "@/components/sections/FounderBio";
import { CollectiveExpertise } from "@/components/sections/CollectiveExpertise";
import { Frameworks } from "@/components/sections/Frameworks";
import { AwardsStrip } from "@/components/sections/AwardsStrip";
import { ImpactGlance } from "@/components/sections/ImpactGlance";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/primitives/JsonLd";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/jsonld";
import { KNOW_US } from "@/content/knowUs";
import { HOME } from "@/content/home";

export const metadata: Metadata = {
  title: "Know Us",
  description:
    "An execution-first consulting firm. 195+ leaders who build, scale, and turn around businesses, in the room until rhythm holds.",
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
        eyebrow={k.howWeLead.eyebrow}
        title={k.howWeLead.title}
        lead={k.howWeLead.lead}
        cards={k.howWeLead.cards}
        columns={4}
        bg="paper"
      />
      <EngagementModels
        eyebrow={k.engagement.eyebrow}
        title={k.engagement.title}
        lead={k.engagement.lead}
        models={k.engagement.models}
      />
      {/* The Pivot: same component and content as Home. */}
      <FounderBio founder={HOME.founder} />
      <CollectiveExpertise
        eyebrow={k.expertise.eyebrow}
        title={k.expertise.title}
        intro={k.expertise.intro}
        specialisationsLabel={k.expertise.specialisationsLabel}
        specialisations={k.expertise.specialisations}
        pedigreeLabel={k.expertise.pedigreeLabel}
        pedigreeNote={k.expertise.pedigreeNote}
        pedigree={k.expertise.pedigree}
      />
      <Frameworks
        eyebrow={k.frameworks.eyebrow}
        title={k.frameworks.title}
        lead={k.frameworks.lead}
        label={k.frameworks.label}
        cards={k.frameworks.cards}
      />
      <AwardsStrip {...k.awards} />
      <ImpactGlance {...k.impactGlance} />
      <CtaBand
        title={
          <>
            Unlock <em>opportunities</em>.
          </>
        }
        primaryCta={k.cta.primaryCta}
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
