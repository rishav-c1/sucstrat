"use client";

import { Fragment, useState } from "react";
import clsx from "clsx";
import type { Practice } from "@/content/types";
import styles from "./PracticeShowcase.module.css";

/**
 * What We Do services: a clickable index (left) + detail card (right) on desktop; on mobile
 * (<820px) it reflows to an accordion where the card expands directly beneath its title. One
 * practice is selected at a time (first by default); selecting one swaps the card, no page nav.
 *
 * Single interleaved grid (row, card, row, card, …): on desktop every row sits in column 1 and
 * the active card is pinned to the top of column 2; on mobile both fall into one column so the
 * active card flows right after its own row.
 */
export function PracticeShowcase({ items }: { items: Practice[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.wrap}>
      {items.map((p, i) => {
        const isActive = i === active;
        const rowId = `practice-row-${i}`;
        const cardId = `practice-card-${i}`;
        return (
          <Fragment key={p.num}>
            <button
              id={rowId}
              type="button"
              className={clsx(styles.row, isActive && styles.rowActive)}
              aria-expanded={isActive}
              aria-controls={cardId}
              onClick={() => setActive(i)}
            >
              <span className={styles.rowNum} aria-hidden="true">
                {p.num}
              </span>
              <span className={styles.rowTitle}>{p.title}</span>
            </button>
            <div
              id={cardId}
              role="region"
              aria-labelledby={rowId}
              className={clsx(styles.card, isActive && styles.cardActive)}
              hidden={!isActive}
            >
              <span className={styles.cardEyebrow}>Practice {p.num}</span>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.description}>{p.description}</p>
              <span className={styles.workLabel}>The work</span>
              <ul className={styles.workGrid}>
                {p.services.map((service) => (
                  <li key={service} className={styles.work}>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
