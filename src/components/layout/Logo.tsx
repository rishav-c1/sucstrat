import Image from "next/image";
import clsx from "clsx";
import wordmark from "@static/logo_wordmark_navy.png";
import styles from "./Logo.module.css";

/**
 * SucStrat wordmark — the tagline-free lockup (matches the reference header/footer,
 * where the wordmark fills the bar rather than a small lockup-with-tagline).
 * The source art is navy; on dark/navy backgrounds (`tone="light"`, the default) it's
 * recolored to white via CSS filter. Height is pinned (width auto-scales) so it holds
 * under `images.unoptimized` (the GitHub Pages export) and keeps CLS at 0.
 */
export function Logo({
  tone = "light",
  height = 34,
  priority = false,
  className,
}: {
  tone?: "light" | "dark";
  height?: number;
  priority?: boolean;
  className?: string;
}) {
  const width = Math.round((height * wordmark.width) / wordmark.height);

  return (
    <Image
      src={wordmark}
      alt="SucStrat"
      height={height}
      width={width}
      priority={priority}
      className={clsx(styles.logo, tone === "light" && styles.onDark, className)}
      style={{ height, width: "auto" }}
    />
  );
}
