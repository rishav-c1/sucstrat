import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ReachGrid } from "@/components/sections/ReachGrid";
import { Icon } from "@/components/primitives/Icon";
import { Reveal } from "@/components/primitives/Reveal";
import { JsonLd } from "@/components/primitives/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { SITE } from "@/content/site";
import { GET_IN_TOUCH } from "@/content/getInTouch";
import { ContactForm } from "./ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Tell us who you are and what you're after, and we'll point you to the right person. Start a conversation with SucStrat.",
  alternates: { canonical: "/get-in-touch" },
};

export default function GetInTouchPage() {
  const p = GET_IN_TOUCH;
  const c = p.contact;
  return (
    <>
      <PageHero eyebrow={p.hero.eyebrow} title={p.hero.title} sub={p.hero.sub} compact />
      <ReachGrid cards={p.reach.cards} />

      <section id="form" className={styles.formSec}>
        <Container>
          <Reveal>
            <div className={styles.block}>
              <div className={styles.panel}>
                <svg className={styles.motif} viewBox="0 0 240 240" fill="none" aria-hidden="true">
                  <circle cx="205" cy="215" r="48" stroke="rgba(255,255,255,0.10)" />
                  <circle cx="205" cy="215" r="86" stroke="rgba(255,255,255,0.07)" />
                  <circle cx="205" cy="215" r="124" stroke="rgba(255,255,255,0.05)" />
                  <circle cx="205" cy="215" r="162" stroke="rgba(255,255,255,0.04)" />
                </svg>
                <span className={styles.eyebrow}>{c.eyebrow}</span>
                <h2 className={styles.panelTitle}>{c.title}</h2>
                <p className={styles.intro}>{c.intro}</p>
                <ul className={styles.infoList}>
                  {c.rows.map((row) => (
                    <li key={row.label}>
                      <span className={styles.ci}>
                        <Icon name={row.icon} />
                      </span>
                      <span>
                        <span className={styles.ciLabel}>{row.label}</span>
                        <span className={styles.ciValue}>
                          {row.href ? (
                            <a
                              href={row.href}
                              {...(row.href.startsWith("http")
                                ? { target: "_blank", rel: "noopener noreferrer" }
                                : {})}
                            >
                              {row.value}
                            </a>
                          ) : (
                            row.value
                          )}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.formWrap}>
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Get in Touch | SucStrat",
            url: `${SITE.domain}/get-in-touch`,
          },
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Get in Touch", path: "/get-in-touch" },
          ]),
        ]}
      />
    </>
  );
}
