"use client";

import { useState } from "react";
import clsx from "clsx";
import styles from "./PracticeAccordion.module.css";

interface AccordionItem {
  num: string;
  title: string;
  body: string;
}

/** One-open-at-a-time accordion (What We Do practices). Client leaf. */
export function PracticeAccordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={styles.acc}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `practice-panel-${i}`;
        const buttonId = `practice-button-${i}`;
        return (
          <div className={clsx(styles.item, isOpen && styles.itemOpen)} key={item.title}>
            <h3 className={styles.head}>
              <button
                id={buttonId}
                type="button"
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className={styles.num}>{item.num}</span>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.chev} aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} className={styles.panel} hidden={!isOpen}>
              <p className={styles.body}>{item.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
