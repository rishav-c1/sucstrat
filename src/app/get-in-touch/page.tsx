import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/sections/PageHero";
import { ReachGrid } from "@/components/sections/ReachGrid";
import { JsonLd } from "@/components/primitives/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { SITE, LINKEDIN_URL } from "@/content/site";
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
  return (
    <>
      <PageHero eyebrow={p.hero.eyebrow} title={p.hero.title} sub={p.hero.sub} />
      <ReachGrid eyebrow={p.reach.eyebrow} cards={p.reach.cards} />
      <Section bg="paper" id="form">
        <Container>
          <div className={styles.layout}>
            <div>
              <h2 className={styles.heading}>{p.form.title}</h2>
              <p className={styles.lead}>
                {p.form.leadBefore}
                <a href={`mailto:${SITE.email}`} className={styles.leadLink}>
                  {p.form.leadLinkLabel}
                </a>
              </p>
              <ContactForm />
            </div>
            {/* A styled side panel, not a top-level complementary landmark (axe). */}
            <div className={styles.aside}>
              <h3 className={styles.asideHeading}>{p.aside.heading}</h3>
              <a href={`mailto:${p.aside.email}`} className={styles.email}>
                {p.aside.email}
              </a>
              <a href={LINKEDIN_URL} className={styles.linkedin} target="_blank" rel="noopener noreferrer">
                {p.aside.linkedinLabel}
              </a>
              <p className={styles.note}>{p.aside.note}</p>
            </div>
          </div>
        </Container>
      </Section>
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
