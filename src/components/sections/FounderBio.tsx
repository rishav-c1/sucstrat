import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import portrait from "@static/Vinay-Maheshwari.jpg";
import type { FounderContent } from "@/content/types";
import styles from "./FounderBio.module.css";

/**
 * Founder bio block — portrait + highlight + stat tiles + prose + credentials.
 * `compact` renders the Home teaser (no prose/credentials, links to the full story on Know Us);
 * the full block lives on Know Us.
 */
export function FounderBio({
  founder,
  compact = false,
  bg = "mist",
}: {
  founder: FounderContent;
  compact?: boolean;
  /** Section background — "mist" (Know Us) or "paper" (Home, to avoid a double-mist run). */
  bg?: "mist" | "paper";
}) {
  return (
    <section className={clsx(styles.founder, bg === "paper" && styles.paper)}>
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
                <p className={styles.para}>{founder.paragraphs[0]}</p>
                <Link href="/know-us" className={styles.moreLink}>
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
                <div className={styles.cred}>
                  <div className={styles.credLabel}>{founder.credentialsLabel}</div>
                  <div className={styles.credRow}>
                    {founder.credentials.map((item) => (
                      <div className={styles.credItem} key={item.org}>
                        <div className={styles.credOrg}>{item.org}</div>
                        <div className={styles.credRole}>{item.role}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
