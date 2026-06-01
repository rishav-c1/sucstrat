import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { LogoWall } from "@/components/sections/LogoWall";
import { StatBand } from "@/components/sections/StatBand";
import { CaseCards } from "@/components/sections/CaseCards";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/primitives/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { CLIENTS } from "@/content/clients";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Partners in performance — the market leaders, institutions, and ventures SucStrat builds with across 21 sectors.",
  alternates: { canonical: "/clients" },
};

export default function ClientsPage() {
  const c = CLIENTS;
  return (
    <>
      <PageHero {...c.hero} />
      <LogoWall {...c.logoWall} />
      <StatBand metrics={c.stats} columns={4} />
      <CaseCards
        eyebrow={c.cases.eyebrow}
        title={c.cases.title}
        lead={c.cases.lead}
        items={c.cases.items}
        id="cases"
      />
      <CtaBand
        title={
          <>
            Let&apos;s build something that <em>scales</em>.
          </>
        }
        primaryCta={c.cta.primaryCta}
        secondaryCta={c.cta.secondaryCta}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Clients", path: "/clients" },
        ])}
      />
    </>
  );
}
