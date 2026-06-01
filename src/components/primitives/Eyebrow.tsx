import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Eyebrow.module.css";

/** Small uppercase label that precedes most section headings. */
export function Eyebrow({
  children,
  as: Tag = "span",
  className,
}: {
  children: ReactNode;
  as?: "span" | "p" | "div";
  className?: string;
}) {
  return <Tag className={clsx(styles.eyebrow, className)}>{children}</Tag>;
}
