import type { ElementType, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Container.module.css";

/** Centered max-width content wrapper with responsive gutters (the references' `.wrap`). */
export function Container({
  as: Tag = "div",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return <Tag className={clsx(styles.wrap, className)}>{children}</Tag>;
}
