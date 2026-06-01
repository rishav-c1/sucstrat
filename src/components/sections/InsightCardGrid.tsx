import clsx from "clsx";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/primitives/Reveal";
import type { InsightCard } from "@/content/types";
import styles from "./InsightCardGrid.module.css";

const TILE_CLASS: Record<InsightCard["tile"], string | undefined> = {
  navy: styles.tileNavy,
  g1: styles.tileG1,
  g2: styles.tileG2,
  light: styles.tileLight,
};

function Motif() {
  return (
    <svg className={styles.motif} viewBox="0 0 300 430" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none" stroke="#5d90ba" strokeWidth="1.2" opacity="0.16">
        <circle cx="60" cy="360" r="60" />
        <circle cx="60" cy="360" r="100" />
        <circle cx="60" cy="360" r="140" />
        <circle cx="60" cy="360" r="180" />
      </g>
    </svg>
  );
}

/** A Knowledge topic section — heading + grid of external article link cards. */
export function InsightCardGrid({
  title,
  cards,
  bg = "paper",
  id,
}: {
  title: string;
  cards: InsightCard[];
  bg?: "paper" | "mist";
  id?: string;
}) {
  return (
    <Section id={id} bg={bg}>
      <Container>
        <Reveal>
          <h2 className={styles.title}>{title}</h2>
        </Reveal>
        <Reveal>
          <ul className={styles.grid}>
            {cards.map((card) => (
              <li key={card.href} className={styles.cell}>
                <a
                  className={clsx(styles.card, TILE_CLASS[card.tile])}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${card.title} — read on ${card.source} (opens in a new tab)`}
                >
                  {card.tile === "navy" ? <Motif /> : null}
                  <span className={styles.tag}>{card.tag}</span>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.desc}>{card.desc}</p>
                  <span className={styles.more}>
                    Read on {card.source} <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
