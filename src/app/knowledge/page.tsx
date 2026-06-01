import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { InsightCardGrid } from "@/components/sections/InsightCardGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/primitives/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { KNOWLEDGE } from "@/content/knowledge";

export const metadata: Metadata = {
  title: "Knowledge",
  description:
    "Selected writing and commentary from Vinay Maheshwari across education, media, and the business of building things that scale.",
  alternates: { canonical: "/knowledge" },
};

export default function KnowledgePage() {
  const k = KNOWLEDGE;
  return (
    <>
      <PageHero
        eyebrow={k.hero.eyebrow}
        title={k.hero.title}
        sub={k.hero.sub}
        primaryCta={k.hero.primaryCta}
        secondaryCta={k.hero.secondaryCta}
      />
      {k.topics.map((topic) => (
        <InsightCardGrid key={topic.title} id={topic.id} title={topic.title} cards={topic.cards} bg={topic.bg} />
      ))}
      <CtaBand
        title={
          <>
            Have a brief worth <em>solving</em>?
          </>
        }
        primaryCta={k.cta.primaryCta}
        secondaryCta={k.cta.secondaryCta}
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
