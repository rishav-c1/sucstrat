import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/primitives/Icon";
import { Reveal } from "@/components/primitives/Reveal";
import type { ReachCard } from "@/content/types";
import styles from "./ReachGrid.module.css";

/** Get in Touch "Reach us" — a grid of routing cards (icon + blurb + link). */
export function ReachGrid({ eyebrow, cards }: { eyebrow: string; cards: ReachCard[] }) {
  return (
    <Section bg="mist">
      <Container>
        <Reveal>
          <h2 className={styles.title}>{eyebrow}</h2>
        </Reveal>
        <Reveal>
          <div className={styles.grid}>
            {cards.map((card) => {
              const inner: ReactNode = (
                <>
                  <span className={styles.ico}>
                    <Icon name={card.icon} />
                  </span>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardBody}>{card.body}</p>
                  <span className={styles.cta}>
                    {card.cta} <span aria-hidden="true">→</span>
                  </span>
                </>
              );
              // Internal routes use next/link; mailto + same-page anchors use <a>.
              return card.href.startsWith("/") ? (
                <Link key={card.title} href={card.href} className={styles.card}>
                  {inner}
                </Link>
              ) : (
                <a key={card.title} href={card.href} className={styles.card}>
                  {inner}
                </a>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
