import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/primitives/Button";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { HOME } from "@/content/home";
import styles from "./PracticeList.module.css";

/** Home "What we do" teaser — two columns: intro + 7-practice list → /what-we-do. */
export function PracticeList() {
  const { eyebrow, title, body, cta, practices } = HOME.whatWeDo;
  return (
    <section className={styles.wwd} id="wwd">
      <Container>
        <div className={styles.grid}>
          <Reveal>
            <Eyebrow className={styles.eyebrow}>{eyebrow}</Eyebrow>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.body}>{body}</p>
            <Button href={cta.href} variant="navy">
              {cta.label}
            </Button>
          </Reveal>
          <Reveal>
            <div className={styles.plist}>
              {practices.map((practice) => (
                <Link key={practice} href={cta.href} className={styles.prow}>
                  <span>{practice}</span>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
