import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { FirmBand } from "@/components/sections/FirmBand";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { FounderBio } from "@/components/sections/FounderBio";
import { MethodFrameworks } from "@/components/sections/MethodFrameworks";
import { CollectiveExpertise } from "@/components/sections/CollectiveExpertise";
import { AwardsStrip } from "@/components/sections/AwardsStrip";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/primitives/JsonLd";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/jsonld";
import { KNOW_US } from "@/content/knowUs";
import { HOME } from "@/content/home";

export const metadata: Metadata = {
  title: "Know Us",
  description:
    "An execution-first consulting collective of 195+ operators who build, scale, and turn around businesses, judged on the outcomes they leave behind.",
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
      <EngagementModels
        eyebrow={k.engagement.eyebrow}
        title={k.engagement.title}
        lead={k.engagement.lead}
        models={k.engagement.models}
      />
      {/* The Pivot: full founder story here (Home shows the compact teaser variant). */}
      <FounderBio founder={HOME.founder} id="pivot" />
      {/* Recognition & platform sits directly below the Pivot. */}
      <AwardsStrip {...k.awards} />
      <MethodFrameworks {...k.method} />
      {/* The collective bench closes the page, just before the CTA. */}
      <CollectiveExpertise
        {...k.expertise}
        title={
          <>
            A bench that has <em>built it before</em>
          </>
        }
      />
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
