import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import type { ExpertiseGroup, PedigreeGroup } from "@/content/types";
import styles from "./CollectiveExpertise.module.css";

interface Props {
  eyebrow: string;
  title: string;
  intro: string;
  specialisationsLabel: string;
  specialisations: ExpertiseGroup[];
  sectorsLabel: string;
  sectors: string[];
  pedigreeLabel: string;
  pedigreeNote: string;
  pedigree: PedigreeGroup[];
}

/**
 * Know Us "Our collective expertise" (v4.0 Appendix E): the 195+ consultant collective
 * (names withheld) - intro, seven areas of specialisation, sector experience, and the
 * team's leadership pedigree framed as where the collective has led and advised.
 */
export function CollectiveExpertise({
  eyebrow,
  title,
  intro,
  specialisationsLabel,
  specialisations,
  sectorsLabel,
  sectors,
  pedigreeLabel,
  pedigreeNote,
  pedigree,
}: Props) {
  return (
    <Section bg="mist">
      <Container>
        <Reveal>
          <div className={styles.head}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.intro}>{intro}</p>
          </div>
        </Reveal>

        <Reveal>
          <h3 className={styles.subLabel}>{specialisationsLabel}</h3>
          <ul className={styles.specGrid}>
            {specialisations.map((group) => (
              <li key={group.title} className={styles.specCard}>
                <h4 className={styles.specTitle}>{group.title}</h4>
                <ul className={styles.specPoints}>
                  {group.points.map((point) => (
                    <li key={point} className={styles.specPoint}>
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <div className={styles.tagsBlock}>
            <h3 className={styles.subLabel}>{sectorsLabel}</h3>
            <ul className={styles.tags}>
              {sectors.map((sector) => (
                <li key={sector} className={styles.tag}>
                  {sector}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className={styles.pedigree}>
            <h3 className={styles.subLabel}>{pedigreeLabel}</h3>
            <p className={styles.pedigreeNote}>{pedigreeNote}</p>
            <ul className={styles.pedigreeList}>
              {pedigree.map((group) => (
                <li key={group.label} className={styles.pedigreeRow}>
                  <span className={styles.pedigreeGroupLabel}>{group.label}</span>
                  <span className={styles.pedigreeOrgs}>{group.orgs.join("  ·  ")}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
