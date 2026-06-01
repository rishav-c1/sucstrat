import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Section.module.css";

/** Generic full-bleed section wrapper with a background variant + vertical rhythm. */
export function Section({
  id,
  bg = "paper",
  children,
  className,
}: {
  id?: string;
  bg?: "paper" | "mist" | "navy";
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={clsx(styles.section, styles[bg], className)}>
      {children}
    </section>
  );
}
