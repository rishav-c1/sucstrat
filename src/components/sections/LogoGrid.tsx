import Image from "next/image";
import styles from "./LogoGrid.module.css";

export interface GridLogo {
  /** Image URL (under /public). */
  src: string;
  /** Accessible brand name. */
  alt: string;
}

/**
 * A static, symmetrical wall of identical logo chips — the same chip as `LogoMarquee` (grayscale
 * until hovered) laid out open, so a roster can be scanned in full (What We Do "Our clients").
 * Rows wrap and centre, so any roster length stays symmetrical. Server component: no client JS.
 */
export function LogoGrid({ logos, label }: { logos: GridLogo[]; label: string }) {
  return (
    <ul className={styles.grid} aria-label={label}>
      {logos.map((logo) => (
        <li key={logo.alt} className={styles.chip}>
          <span className={styles.imgWrap}>
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              sizes="(max-width: 600px) 45vw, 200px"
              loading="lazy"
              className={styles.img}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}
