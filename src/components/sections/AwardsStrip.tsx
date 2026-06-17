import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/primitives/SectionHead";
import { Reveal } from "@/components/primitives/Reveal";
import type { LogoItem } from "@/content/types";
import styles from "./AwardsStrip.module.css";

/** Know Us "Awards & recognition" — logo strip (grayscale → colour on hover). */
export function AwardsStrip({
  eyebrow,
  title,
  lead,
  logos,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  logos: LogoItem[];
}) {
  return (
    <Section bg="mist">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
        </Reveal>
        <Reveal>
          <ul className={styles.row}>
            {/* Award logos deferred (v4.0): each award name stands in as a labelled
                placeholder until the real logo files are supplied. */}
            {logos.map((item) => (
              <li key={item.name} className={styles.item}>
                <span className={styles.name}>{item.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
