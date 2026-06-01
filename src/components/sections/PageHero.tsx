import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/primitives/Button";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import type { Cta } from "@/content/types";
import styles from "./PageHero.module.css";

/** Light inner-page hero (no media) — eyebrow + serif h1 + sub + CTA pair. */
export function PageHero({
  eyebrow,
  title,
  sub,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: ReactNode;
  sub: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
}) {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.inner}>
          <Eyebrow className={styles.eyebrow}>{eyebrow}</Eyebrow>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.sub}>{sub}</p>
          {primaryCta || secondaryCta ? (
            <div className={styles.acts}>
              {primaryCta ? (
                <Button href={primaryCta.href} variant="navy">
                  {primaryCta.label}
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="ghostNavy">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
