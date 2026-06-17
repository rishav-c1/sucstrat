import { Container } from "@/components/layout/Container";
import styles from "./EdgeBlock.module.css";

interface Expansion {
  letter: string;
  word: string;
  body: string;
}

/**
 * What We Do "EDGE, the operating signature" (v4.0 Appendix C). Brand-navy aurora (no
 * periwinkle); the standout block that ties the practices together. The locked high-end
 * asset is not in the repo, so this on-brand block stands in and is flagged for sign-off.
 */
export function EdgeBlock({
  eyebrow,
  acronym,
  title,
  expansions,
  footer,
}: {
  eyebrow: string;
  acronym: string[];
  title: string;
  expansions: Expansion[];
  footer: string;
}) {
  return (
    <section className={styles.edge}>
      <span className={styles.aura1} aria-hidden="true" />
      <span className={styles.aura2} aria-hidden="true" />
      <Container className={styles.inner}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <div className={styles.acronym} aria-hidden="true">
          {acronym.map((letter, i) => (
            <span key={`${letter}-${i}`} className={styles.letter}>
              {letter}
            </span>
          ))}
        </div>
        <h2 className={styles.title}>
          <span className={styles.srAcronym}>E D G E. </span>
          {title}
        </h2>
        <ul className={styles.grid}>
          {expansions.map((item, i) => (
            <li key={`${item.word}-${i}`} className={styles.card}>
              <span className={styles.cardLetter} aria-hidden="true">
                {item.letter}
              </span>
              <span className={styles.cardWord}>{item.word}</span>
              <p className={styles.cardBody}>{item.body}</p>
            </li>
          ))}
        </ul>
        <p className={styles.footer}>{footer}</p>
      </Container>
    </section>
  );
}
