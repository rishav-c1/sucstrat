import Link from "next/link";
import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

export type ButtonVariant = "white" | "navy" | "ghostNavy" | "ghostWhite";

interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Link-style CTA button (all shell CTAs are links). Renders a Next <Link> for
 * internal hrefs and a plain <a> for external / mailto / tel targets.
 */
export function Button({ href, variant = "navy", children, className, onClick }: ButtonProps) {
  const cls = clsx(styles.btn, styles[variant], className);
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);

  if (isExternal) {
    const rel = href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a className={cls} href={href} onClick={onClick} {...rel}>
        {children}
      </a>
    );
  }

  return (
    <Link className={cls} href={href} onClick={onClick}>
      {children}
    </Link>
  );
}
