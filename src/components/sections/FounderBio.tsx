import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import portrait from "@static/Vinay-Maheshwari.jpg";
import type { FounderContent, PivotArc } from "@/content/types";
import styles from "./FounderBio.module.css";

/**
 * Founder bio block — portrait + highlight + stat tiles + prose.
 * `compact` renders the Home teaser (one line + link to the full story on Know Us). The full
 * block (Know Us) shows the prose plus, when `pivotArc` is supplied, "The arc" timeline +
 * "Across industries" grid below the bio.
 */
export function FounderBio({
  founder,
  compact = false,
  bg = "mist",
  id,
  pivotArc,
}: {
  founder: FounderContent;
  compact?: boolean;
  /** Section background — "mist" (Know Us) or "paper" (Home, to avoid a double-mist run). */
  bg?: "mist" | "paper";
  /** Optional anchor id (e.g. "pivot" on Know Us) so links can jump straight to this section. */
  id?: string;
  /** Full-variant only: the "arc" timeline + "across industries" grid below the bio. */
  pivotArc?: PivotArc;
}) {
  return (
    <section id={id} className={clsx(styles.founder, bg === "paper" && styles.paper)}>
      <Container>
        <div className={styles.grid}>
          <Reveal className={styles.portraitWrap}>
            <div className={styles.portrait}>
              <Image
                src={portrait}
                alt={founder.portraitAlt}
                fill
                sizes="(max-width: 900px) 100vw, 380px"
                className={styles.portraitImg}
              />
            </div>
          </Reveal>
          <Reveal>
            <Eyebrow className={styles.eyebrow}>{founder.eyebrow}</Eyebrow>
            <h2 className={styles.name}>{founder.name}</h2>
            <div className={styles.role}>{founder.role}</div>
            <p className={styles.highlight}>{founder.highlight}</p>
            <div className={styles.tiles}>
              {founder.tiles.map((tile) => (
                <div className={styles.tile} key={tile.label}>
                  <div className={styles.tileValue}>{tile.value}</div>
                  <div className={styles.tileLabel}>{tile.label}</div>
                </div>
              ))}
            </div>
            {compact ? (
              <>
                <p className={styles.para}>{founder.teaser}</p>
                <Link href="/know-us#pivot" className={styles.moreLink}>
                  Read Vinay&rsquo;s full story
                  <span aria-hidden="true"> →</span>
                </Link>
              </>
            ) : (
              <>
                {founder.paragraphs.map((para) => (
                  <p key={para.slice(0, 28)} className={styles.para}>
                    {para}
                  </p>
                ))}
              </>
            )}
          </Reveal>
        </div>

        {!compact && pivotArc ? (
          <Reveal className={styles.arcWrap}>
            <div className={styles.arcGrid}>
              {/* The arc — leadership timeline */}
              <div>
                <Eyebrow className={styles.colEyebrow}>{pivotArc.arcLabel}</Eyebrow>
                <ol className={styles.timeline}>
                  {pivotArc.entries.map((entry) => (
                    <li className={styles.arcItem} key={entry.org}>
                      <span className={styles.arcDot} aria-hidden="true" />
                      <div className={styles.arcOrg}>{entry.org}</div>
                      <div className={styles.arcRole}>{entry.role}</div>
                      <p className={styles.arcBody}>{entry.body}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Across industries — brand-by-sector grid */}
              <div>
                <Eyebrow className={styles.colEyebrow}>{pivotArc.industriesLabel}</Eyebrow>
                <p className={styles.indLead}>{pivotArc.industriesLead}</p>
                <dl className={styles.indGroups}>
                  {pivotArc.industries.map((group) => (
                    <div className={styles.indGroup} key={group.label}>
                      <dt className={styles.indLabel}>{group.label}</dt>
                      <dd className={styles.indBrands}>{group.brands.join("  ·  ")}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
