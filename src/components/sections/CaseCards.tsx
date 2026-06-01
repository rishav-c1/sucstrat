import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/primitives/SectionHead";
import { Reveal } from "@/components/primitives/Reveal";
import { LOGO_BASE } from "@/content/site";
import type { CaseItem } from "@/content/types";
import styles from "./CaseCards.module.css";

/** Case-study logo cards with hover-expand bodies (grayscale → colour on hover). */
export function CaseCards({
  title,
  lead,
  items,
  id,
  eyebrow,
}: {
  title: string;
  lead: string;
  items: CaseItem[];
  id?: string;
  eyebrow?: string;
}) {
  return (
    <section className={styles.cases} id={id}>
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
        </Reveal>
        <Reveal>
          <div className={styles.row}>
            {items.map((item) => (
              <Link
                key={item.slug}
                href={`/case-studies/${item.slug}`}
                className={styles.card}
                aria-label={`${item.name} case study`}
              >
                <div className={styles.logo}>
                  <span className={styles.logoBox}>
                    <Image
                      src={`${LOGO_BASE}/${item.logo}`}
                      alt={item.name}
                      fill
                      sizes="170px"
                      className={styles.logoImg}
                    />
                  </span>
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
                <span className={styles.more} aria-hidden="true">
                  Read the case →
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
