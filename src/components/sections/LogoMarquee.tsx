"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./LogoMarquee.module.css";

export interface MarqueeLogo {
  /** Image URL (under /public). */
  src: string;
  /** Accessible brand name. */
  alt: string;
}

/** A single white logo chip. The duplicate (`decorative`) copy is hidden from the a11y tree. */
function Chip({ logo, decorative }: { logo: MarqueeLogo; decorative?: boolean }) {
  return (
    <li className={styles.item} aria-hidden={decorative || undefined}>
      <span className={styles.chip}>
        <span className={styles.imgWrap}>
          {/* Lazy + below the fold: keeps the ~1.4 MB of logos off the initial paint (Perf bar).
              Visible chips load on scroll-in; the hero stays the LCP. */}
          <Image
            src={logo.src}
            alt={decorative ? "" : logo.alt}
            fill
            sizes="200px"
            loading="lazy"
            className={styles.img}
          />
        </span>
      </span>
    </li>
  );
}

/** One full pass of the logo set. Rendered twice in the track for a seamless -50% loop. */
function LogoGroup({ logos, decorative }: { logos: MarqueeLogo[]; decorative?: boolean }) {
  return (
    <ul className={styles.group} aria-hidden={decorative || undefined}>
      {logos.map((logo, i) => (
        <Chip key={`${logo.alt}-${i}`} logo={logo} decorative={decorative} />
      ))}
    </ul>
  );
}

/** Minimum chips per half-track, so a short roster still overfills the widest viewports
 *  (16 × 220px ≈ 3500px) and the -50% loop never shows a gap. */
const MIN_CHIPS_PER_HALF = 16;

/**
 * A full-width, continuously scrolling, seamless-looping band of logos with gradient edge masks.
 * Presentational only.
 *
 * The track is two identical halves and translates by -50%. A short roster is repeated within
 * each half until it overfills the viewport. Only the very first group is announced; every
 * repeat is `aria-hidden` so each brand is announced once. Motion pauses while the band is
 * hovered (so a logo can be read) and is disabled entirely under `prefers-reduced-motion` (CSS),
 * which also hides the repeats.
 */
export function LogoMarquee({
  logos,
  label = "Client logos",
  speedSeconds = 60,
  direction = "left",
}: {
  logos: MarqueeLogo[];
  /** Accessible name for the band. */
  label?: string;
  speedSeconds?: number;
  direction?: "left" | "right";
}) {
  const [hoverPaused, setHoverPaused] = useState(false);
  const perHalf = Math.max(1, Math.ceil(MIN_CHIPS_PER_HALF / Math.max(1, logos.length)));
  const groupCount = perHalf * 2;

  return (
    <div
      className={styles.root}
      role="group"
      aria-label={label}
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
    >
      <div
        className={`${styles.track} ${direction === "right" ? styles.right : styles.left}`}
        data-paused={hoverPaused}
        style={{ "--marquee-duration": `${speedSeconds}s` } as CSSProperties}
      >
        {Array.from({ length: groupCount }, (_, i) => (
          <LogoGroup key={i} logos={logos} decorative={i > 0} />
        ))}
      </div>

      <div className={`${styles.mask} ${styles.maskLeft}`} aria-hidden="true" />
      <div className={`${styles.mask} ${styles.maskRight}`} aria-hidden="true" />
    </div>
  );
}
