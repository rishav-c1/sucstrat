import { Fragment, type ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import type { PedigreeGroup } from "@/content/types";
import styles from "./CollectiveExpertise.module.css";

interface Props {
  eyebrow: string;
  title: ReactNode;
  bench: { stat: string; statLabel: string; blurb: string };
  pedigreeLabel: string;
  pedigree: PedigreeGroup[];
  areasLabel: string;
  areas: string[];
}

/**
 * Know Us "Our consultants" — a bento layout: section header, a dark hero banner (bench count +
 * blurb), then a two-card row (pedigree ledger + areas we go deep). The dark banner is the only
 * coloured surface; the two cards are white with a soft shadow and stretch to equal height.
 */
export function CollectiveExpertise({
  eyebrow,
  title,
  bench,
  pedigreeLabel,
  pedigree,
  areasLabel,
  areas,
}: Props) {
  return (
    <Section bg="heroBg">
      <Container>
        <Reveal>
          <div className={styles.head}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className={styles.title}>{title}</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className={styles.bench}>
            <div className={styles.benchLeft}>
              <div className={styles.stat}>{bench.stat}</div>
              <div className={styles.statLabel}>{bench.statLabel}</div>
            </div>
            <p className={styles.benchBlurb}>{bench.blurb}</p>
          </div>
        </Reveal>

        <Reveal>
          <div className={styles.bento}>
            <div className={styles.cardWide}>
              <h3 className={styles.cardLabel}>{pedigreeLabel}</h3>
              <ul className={styles.ledger}>
                {pedigree.map((group) => (
                  <li key={group.label} className={styles.row}>
                    <span className={styles.rowLabel}>{group.label}</span>
                    <span className={styles.rowOrgs}>
                      {group.orgs.map((org, i) => (
                        <Fragment key={org}>
                          {i > 0 ? (
                            <span className={styles.sep} aria-hidden="true">
                              {" · "}
                            </span>
                          ) : null}
                          <span className={styles.org}>{org}</span>
                        </Fragment>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardLabel}>{areasLabel}</h3>
              <ul className={styles.areas}>
                {areas.map((area) => (
                  <li key={area} className={styles.area}>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
