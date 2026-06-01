import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import styles from "./FirmBand.module.css";

/** Mist band with an eyebrow + an emphasised serif pull-quote (What We Do, Know Us). */
export function FirmBand({ eyebrow, statement }: { eyebrow: string; statement: string }) {
  return (
    <section className={styles.band}>
      <Container>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <p className={styles.line}>{statement}</p>
        </Reveal>
      </Container>
    </section>
  );
}
