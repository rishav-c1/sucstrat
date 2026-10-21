import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { InsightCardGrid } from "@/components/sections/InsightCardGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/primitives/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { KNOWLEDGE } from "@/content/knowledge";
import type { InsightCard } from "@/content/types";

export const metadata: Metadata = {
  title: "Knowledge",
  description: "Op-eds, interviews, and features from the SucStrat team.",
  alternates: { canonical: "/knowledge" },
};

export default function KnowledgePage() {
  const k = KNOWLEDGE;
  // v4.0: one free-flowing grid of all article tiles (topic-row headers removed). Order is
  // curated, not computed: `pinned` articles lead, then each topic's cards in content order.
  // It is deliberately not sorted by date — most of these publications don't expose a
  // machine-readable publish date (see the TODO(content) in PLAN.md §11), and a half-known
  // sort would read worse than the curated order.
  // Annotated rather than inferred: `satisfies InsightCard[]` keeps each topic's literal card
  // type, and only the topics that hold a pinned card carry the key at all.
  const articles: InsightCard[] = k.topics.flatMap((topic) => topic.cards);
  // Stable sort, so everything that isn't pinned keeps its content order.
  articles.sort((a, b) => Number(b.pinned ?? false) - Number(a.pinned ?? false));
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
