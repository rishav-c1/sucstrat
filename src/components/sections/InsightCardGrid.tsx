import clsx from "clsx";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/primitives/Reveal";
import type { InsightCard } from "@/content/types";
import styles from "./InsightCardGrid.module.css";

type Tile = "navy" | "g1" | "g2" | "light";

const TILE_CLASS: Record<Tile, string | undefined> = {
  navy: styles.tileNavy,
  g1: styles.tileG1,
  g2: styles.tileG2,
  light: styles.tileLight,
};

const TILE_CYCLE: readonly Tile[] = ["g2", "navy", "g1", "light"];

/**
 * Widest column count the grid is ever laid out at — must stay in step with the first
 * `grid-template-columns` in InsightCardGrid.module.css, since `tileAt` shifts the cycle
 * once per row of this width.
 */
export const GRID_MAX_COLUMNS = 4;

/**
 * Every column count the CSS actually renders at (`GRID_MAX_COLUMNS`, then each
 * `grid-template-columns` override, widest first). `tileAt` is only guaranteed
 * stripe-free at these widths; InsightCardGrid.test.ts pins that.
 */
export const GRID_COLUMN_STEPS: readonly number[] = [GRID_MAX_COLUMNS, 2, 1];

/**
 * Tile treatment by grid position: each row of four holds one of each, and every row shifts
 * the cycle by one. That keeps neighbours distinct side-by-side and top-to-bottom at every
 * breakpoint (4-up, 2-up and the 1-up stack). A plain i % 4 would stripe each 4-up column
 * in a single colour.
 *
 * The guarantee is specific to `GRID_COLUMN_STEPS`, not universal: a tile must differ from
 * the one before it and from the one a row above it, so covering a column count of `c` costs
 * one treatment per distinct neighbour distance. Four treatments cover distances 1, 2 and 4;
 * adding a 3-up breakpoint would need a fifth (at 3 columns this cycle puts navy directly
 * above navy). Change the breakpoints and you change this function — the test will say so.
 */
export function tileAt(index: number): Tile {
  const shifted = index + Math.floor(index / GRID_MAX_COLUMNS);
  return TILE_CYCLE[shifted % TILE_CYCLE.length] ?? "light";
}

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

/**
 * A grid of external article link cards. `headingHidden` keeps the section's <h2> in the
 * accessibility tree but visually hidden (used for the single free-flowing Knowledge grid,
 * which has no topic-row headers).
 */
export function InsightCardGrid({
  title,
  cards,
  bg = "paper",
  id,
  headingHidden = false,
}: {
  title: string;
  cards: InsightCard[];
  bg?: "paper" | "mist";
  id?: string;
  headingHidden?: boolean;
}) {
  return (
    <Section id={id} bg={bg}>
      <Container>
        {headingHidden ? (
          <h2 className="sr-only">{title}</h2>
        ) : (
          <Reveal>
            <h2 className={styles.title}>{title}</h2>
          </Reveal>
        )}
        <Reveal>
          <ul className={styles.grid}>
            {cards.map((card, i) => {
              const tile = tileAt(i);
              return (
                <li key={card.href} className={styles.cell}>
                  <a
                    className={clsx(styles.card, TILE_CLASS[tile])}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read ${card.title} on ${card.source} (opens in a new tab)`}
                  >
                    {tile === "navy" ? <Motif /> : null}
                    <span className={styles.tag}>{card.tag}</span>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.desc}>{card.desc}</p>
                    <span className={styles.more}>
                      Read on {card.source} <span aria-hidden="true">↗</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
