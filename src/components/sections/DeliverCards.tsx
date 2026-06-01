import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Icon } from "@/components/primitives/Icon";
import { Reveal } from "@/components/primitives/Reveal";
import type { IconCard } from "@/content/types";
import styles from "./DeliverCards.module.css";

/** Navy band of "what stays constant" delivery cards with line icons (What We Do). */
export function DeliverCards({
  eyebrow,
  title,
  lead,
  cards,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  cards: IconCard[];
}) {
  return (
    <section className={styles.deliver}>
      <Container>
        <Reveal>
          <div className={styles.head}>
            <Eyebrow className={styles.eyebrow}>{eyebrow}</Eyebrow>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.lead}>{lead}</p>
          </div>
        </Reveal>
        <Reveal>
          <div className={styles.grid}>
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
      </Container>
    </section>
  );
}
