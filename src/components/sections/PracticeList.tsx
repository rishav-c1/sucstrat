import { Container } from "@/components/layout/Container";
import { Button } from "@/components/primitives/Button";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { HOME } from "@/content/home";
import styles from "./PracticeList.module.css";

/**
 * Home "What we do" teaser — intro + the seven practice names as a compact grid (each with
 * a one-line descriptor) and a single "Explore what we do" link to the full page.
 */
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
            <ul className={styles.plist}>
              {practices.map((practice) => (
                <li key={practice.name} className={styles.prow}>
                  <span className={styles.pname}>{practice.name}</span>
                  <span className={styles.pdesc}>{practice.desc}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
