import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import styles from "./CollectiveExpertise.module.css";

interface Props {
  eyebrow: string;
  statement: string;
}

/**
 * Know Us "The collective" — a concise summary block (replaced the former bench/pedigree/areas
 * bento): an eyebrow over a single statement paragraph about the consultant bench.
 */
export function CollectiveExpertise({ eyebrow, statement }: Props) {
  return (
    <Section>
      <Container>
        <Reveal className={styles.block}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <p className={styles.statement}>{statement}</p>
        </Reveal>
      </Container>
    </Section>
  );
}
