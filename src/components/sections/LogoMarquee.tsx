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
          {/* Eager (not priority): most chips sit off-screen in the track's horizontal overflow,
              so lazy-loading would leave them blank until they scroll in. They're small and
              below the fold, so eager-load without preloading (the hero stays the LCP). */}
          <Image
            src={logo.src}
            alt={decorative ? "" : logo.alt}
            fill
            sizes="200px"
            loading="eager"
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
        <Chip key={`${decorative ? "b" : "a"}-${logo.alt}-${i}`} logo={logo} decorative={decorative} />
      ))}
    </ul>
  );
}

/**
 * A full-width, continuously scrolling, seamless-looping band of client logos with gradient
 * edge masks. Presentational only.
 *
 * The track renders the logo group twice and translates by -50%; the second copy is
 * `aria-hidden` so each brand is announced once. Motion pauses while the band is hovered (so a
 * logo can be read) and is disabled entirely under `prefers-reduced-motion` (CSS).
 */
export function LogoMarquee({
  logos,
  speedSeconds = 60,
  direction = "left",
}: {
  logos: MarqueeLogo[];
  speedSeconds?: number;
  direction?: "left" | "right";
}) {
  const [hoverPaused, setHoverPaused] = useState(false);

  return (
    <div
      className={styles.root}
      role="group"
      aria-label="Client logos"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
    >
      <div
        className={`${styles.track} ${direction === "right" ? styles.right : styles.left}`}
        data-paused={hoverPaused}
        style={{ "--marquee-duration": `${speedSeconds}s` } as CSSProperties}
      >
        <LogoGroup logos={logos} />
        <LogoGroup logos={logos} decorative />
      </div>

      <div className={`${styles.mask} ${styles.maskLeft}`} aria-hidden="true" />
      <div className={`${styles.mask} ${styles.maskRight}`} aria-hidden="true" />
    </div>
  );
}
