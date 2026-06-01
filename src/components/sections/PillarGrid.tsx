import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/primitives/SectionHead";
import { Reveal } from "@/components/primitives/Reveal";
import { HOME } from "@/content/home";
import styles from "./PillarGrid.module.css";

/** "The SucStrat Standard" — four numbered pillar cards. */
export function PillarGrid() {
  const { title, lead, cards } = HOME.pillars;
  return (
    <section className={styles.pillars}>
      <Container>
        <Reveal>
          <SectionHead title={title} lead={lead} />
        </Reveal>
        <Reveal>
          <div className={styles.grid}>
            {cards.map((card) => (
              <div className={styles.card} key={card.num}>
                <div className={styles.num}>{card.num}</div>
                <div className={styles.bar} aria-hidden="true" />
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
