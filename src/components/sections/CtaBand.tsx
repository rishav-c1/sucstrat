import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/primitives/Button";
import type { Cta } from "@/content/types";
import styles from "./CtaBand.module.css";

/** Centered navy CTA band (reused on every page). Title may include an <em> accent. */
export function CtaBand({
  title,
  primaryCta,
  secondaryCta,
  id,
}: {
  title: ReactNode;
  primaryCta: Cta;
  secondaryCta?: Cta;
  id?: string;
}) {
  return (
    <section className={styles.band} id={id}>
      <Container>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.acts}>
          <Button href={primaryCta.href} variant="white">
            {primaryCta.label}
          </Button>
          {secondaryCta ? (
            <Button href={secondaryCta.href} variant="ghostWhite">
              {secondaryCta.label}
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
