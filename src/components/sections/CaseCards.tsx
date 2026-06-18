import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/primitives/SectionHead";
import { Reveal } from "@/components/primitives/Reveal";
import { LOGO_PATH } from "@/content/site";
import type { CaseItem } from "@/content/types";
import styles from "./CaseCards.module.css";

/**
 * Case logo cards (grayscale → colour on hover). `linked` (default) wraps each card in
 * a link to its case study; pass `linked={false}` to render plain, non-linking cards
 * (the Home proof section, where the case-study pages aren't surfaced).
 */
export function CaseCards({
  title,
  lead,
  items,
  id,
  eyebrow,
  linked = true,
}: {
  title: string;
  lead: string;
  items: CaseItem[];
  id?: string;
  eyebrow?: string;
  linked?: boolean;
}) {
  return (
    <section className={styles.cases} id={id}>
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
        </Reveal>
        <Reveal>
          <div className={styles.row}>
            {items.map((item) => {
              const content: ReactNode = (
                <>
                  <div className={styles.logo}>
                    {item.logo ? (
                      <span className={styles.logoBox}>
                        <Image
                          src={`${LOGO_PATH}/${item.logo}`}
                          alt={item.name}
                          fill
                          sizes="170px"
                          className={styles.logoImg}
                        />
                      </span>
                    ) : (
                      <span className={styles.logoName}>{item.name}</span>
                    )}
                  </div>
                  <div className={styles.eyebrow}>{item.eyebrow}</div>
                  <div className={styles.stat}>
                    {item.stat.prefix ? <span className={styles.affix}>{item.stat.prefix}</span> : null}
                    {item.stat.value}
                    {item.stat.suffix ? <span className={styles.affix}>{item.stat.suffix}</span> : null}
                  </div>
                  <div className={styles.statLabel}>{item.statLabel}</div>
                  <div className={styles.spacer} />
                  <p className={styles.body}>{item.body}</p>
                  {linked ? (
                    <span className={styles.more} aria-hidden="true">
                      Read the case →
                    </span>
                  ) : null}
                </>
              );
              return linked ? (
                <Link
                  key={item.slug}
                  href={`/case-studies/${item.slug}`}
                  className={styles.card}
                  aria-label={`${item.name} case study`}
                >
                  {content}
                </Link>
              ) : (
                <div key={item.slug} className={styles.card} data-static="">
                  {content}
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
