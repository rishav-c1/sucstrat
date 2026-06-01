import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/primitives/Icon";
import { Reveal } from "@/components/primitives/Reveal";
import type { ReachCard } from "@/content/types";
import styles from "./ReachGrid.module.css";

/**
 * Get in Touch "Reach us" — routing cards (icon badge + blurb + link). Matches the
 * mockup: no visible section heading (cards follow the hero), continuous hero bg.
 */
export function ReachGrid({ cards }: { cards: ReachCard[] }) {
  return (
    <section className={styles.sec}>
      <Container>
        {/* Section label for assistive tech only — the mockup shows no visible heading. */}
        <h2 className={styles.srOnly}>Reach us</h2>
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
                    {card.cta} <span aria-hidden="true">↗</span>
                  </span>
                </>
              );
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
    </section>
  );
}
