import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/primitives/SectionHead";
import { Reveal } from "@/components/primitives/Reveal";
import { LOGO_PATH } from "@/content/site";
import type { LogoItem } from "@/content/types";
import styles from "./AwardsStrip.module.css";

/**
 * One award banner: the logo (or its name) over a description that reveals on hover/focus.
 * When an `href` is present the whole banner links to the awarding body's main page in a
 * new tab (mirrors the Knowledge tiles); otherwise it renders as a static card.
 */
function AwardCard({ item }: { item: LogoItem }) {
  const linked = Boolean(item.href);
  const inner: ReactNode = (
    <>
      <span className={styles.logoArea}>
        {item.logo ? (
          <Image
            src={`${LOGO_PATH}/${item.logo}`}
            // The link is labelled below, so the logo is decorative there; standalone cards name it.
            alt={linked ? "" : item.name}
            fill
            sizes="(max-width: 600px) 80vw, 300px"
            className={styles.img}
          />
        ) : (
          <span className={styles.name}>{item.name}</span>
        )}
      </span>
      {item.description ? <span className={styles.desc}>{item.description}</span> : null}
      {linked ? (
        <span className={styles.visit}>
          Visit site <span aria-hidden="true">↗</span>
        </span>
      ) : null}
    </>
  );

  return (
    <li className={styles.cell}>
      {linked ? (
        <a
          className={styles.card}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${item.name}${item.description ? `, ${item.description}` : ""} (opens in a new tab)`}
        >
          {inner}
        </a>
      ) : (
        <div className={styles.card} data-static="">
          {inner}
        </div>
      )}
    </li>
  );
}

/**
 * Know Us "Recognition & platform" — a wall of award credibility banners (logo + a
 * description that reveals on hover, each linking to the awarding body), plus an optional
 * faculty/speaker platform line (merged in from the former "Impact at a glance").
 */
export function AwardsStrip({
  eyebrow,
  title,
  lead,
  logos,
  platform,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  logos: LogoItem[];
  platform?: { label: string; items: string[] };
}) {
  return (
    <Section bg="mist">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
        </Reveal>
        <Reveal>
          <ul className={styles.grid}>
            {logos.map((item) => (
              <AwardCard key={item.name} item={item} />
            ))}
          </ul>
        </Reveal>
        {platform ? (
          <Reveal>
            <p className={styles.platform}>
              <span className={styles.platformLabel}>{platform.label}</span>
              <span className={styles.platformItems}>{platform.items.join("  ·  ")}</span>
            </p>
          </Reveal>
        ) : null}
      </Container>
    </Section>
  );
}
