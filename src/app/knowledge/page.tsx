import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { InsightCardGrid } from "@/components/sections/InsightCardGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/primitives/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { KNOWLEDGE } from "@/content/knowledge";

export const metadata: Metadata = {
  title: "Knowledge",
  description: "Op-eds, interviews, and features from the SucStrat team.",
  alternates: { canonical: "/knowledge" },
};

export default function KnowledgePage() {
  const k = KNOWLEDGE;
  // v4.0: one free-flowing grid of all article tiles (topic-row headers removed),
  // in content order (newest first).
  const articles = k.topics.flatMap((topic) => topic.cards);
  return (
    <>
      <PageHero
        eyebrow={k.hero.eyebrow}
        title={
          <>
            Insights &amp; <em>ideas</em>.
          </>
        }
        sub={k.hero.sub}
        primaryCta={k.hero.primaryCta}
        secondaryCta={k.hero.secondaryCta}
      />
      <InsightCardGrid id="insights" title="Articles" cards={articles} headingHidden bg="paper" />
      <CtaBand
        title={
          <>
            Have a brief worth <em>solving</em>?
          </>
        }
        primaryCta={k.cta.primaryCta}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Knowledge", path: "/knowledge" },
        ])}
      />
    </>
  );
}
