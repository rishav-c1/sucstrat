import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/primitives/Icon";
import { Reveal } from "@/components/primitives/Reveal";
import type { IconCard } from "@/content/types";
import styles from "./FeatureGrid.module.css";

/**
 * Reusable section: eyebrow + heading + lead, over a grid of title/body cards.
 * Tone follows the background (Know Us "how we work"; Careers value sections).
 */
export function FeatureGrid({
  eyebrow,
  title,
  lead,
  cards,
  columns = 4,
  bg = "paper",
  id,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  cards: IconCard[];
  columns?: 2 | 4;
  bg?: "paper" | "mist" | "navy";
  id?: string;
}) {
  return (
    <Section id={id} bg={bg}>
      <Container>
        <div className={styles.inner} data-bg={bg}>
          <Reveal>
            <div className={styles.head}>
              <span className={styles.eyebrow}>{eyebrow}</span>
              <h2 className={styles.title}>{title}</h2>
              {lead ? <p className={styles.lead}>{lead}</p> : null}
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.grid} data-cols={columns}>
              {cards.map((card) => (
                <div className={styles.card} key={card.title}>
                  <span className={styles.ico}>
                    <Icon name={card.icon} />
                  </span>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardBody}>{card.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
