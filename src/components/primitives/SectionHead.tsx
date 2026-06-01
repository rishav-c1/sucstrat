import type { ReactNode } from "react";
import clsx from "clsx";
import { Eyebrow } from "./Eyebrow";
import styles from "./SectionHead.module.css";

/** Eyebrow + heading + optional lead — the shared section-header pattern. */
export function SectionHead({
  eyebrow,
  title,
  lead,
  as: TitleTag = "h2",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  as?: "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={clsx(styles.head, className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <TitleTag className={styles.title}>{title}</TitleTag>
      {lead ? <p className={styles.lead}>{lead}</p> : null}
    </div>
  );
}
