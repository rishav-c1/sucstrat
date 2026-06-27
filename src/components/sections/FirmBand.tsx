import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import styles from "./FirmBand.module.css";

/** Navy band with an eyebrow + an emphasised serif pull-quote (Know Us). */
export function FirmBand({ eyebrow, statement }: { eyebrow: string; statement: string }) {
  return (
    <section className={styles.band}>
      <Container>
        <Reveal>
          <Eyebrow className={styles.eyebrow}>{eyebrow}</Eyebrow>
          <p className={styles.line}>{statement}</p>
        </Reveal>
      </Container>
    </section>
  );
}
