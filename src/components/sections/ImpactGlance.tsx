import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/primitives/SectionHead";
import { Icon } from "@/components/primitives/Icon";
import { Reveal } from "@/components/primitives/Reveal";
import type { ImpactGlanceCard } from "@/content/types";
import styles from "./ImpactGlance.module.css";

/** Know Us "Impact at a glance" — three list cards. */
export function ImpactGlance({
  eyebrow,
  title,
  lead,
  cards,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  cards: ImpactGlanceCard[];
}) {
  return (
    <Section bg="paper">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
        </Reveal>
        <Reveal>
          <div className={styles.grid}>
            {cards.map((card) => (
              <div className={styles.card} key={card.label}>
                <span className={styles.ico}>
                  <Icon name={card.icon} />
                </span>
                <div className={styles.label}>{card.label}</div>
                <ul className={styles.list}>
                  {card.items.map((item) => (
                    <li key={item} className={styles.item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
