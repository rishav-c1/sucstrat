import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/primitives/SectionHead";
import { Reveal } from "@/components/primitives/Reveal";
import type { EngagementModel } from "@/content/types";
import styles from "./EngagementModels.module.css";

/**
 * Know Us "How we engage" (v4.0 Appendix D): five engagement archetypes as cards, each with
 * a duration, a pricing model, a one-line, what it is, and its outputs.
 */
export function EngagementModels({
  eyebrow,
  title,
  lead,
  models,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  models: EngagementModel[];
}) {
  return (
    <Section bg="paper">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
        </Reveal>
        <Reveal>
          <ul className={styles.grid}>
            {models.map((model) => (
              <li key={model.name} className={styles.card}>
                <div className={styles.top}>
                  <h3 className={styles.name}>{model.name}</h3>
                  <span className={styles.duration}>{model.duration}</span>
                </div>
                <span className={styles.model}>{model.model}</span>
                <p className={styles.oneLine}>{model.oneLine}</p>
                <p className={styles.body}>{model.body}</p>
                <ul className={styles.outputs}>
                  {model.outputs.map((output) => (
                    <li key={output} className={styles.output}>
                      {output}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
