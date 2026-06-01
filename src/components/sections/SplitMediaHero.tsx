import { Container } from "@/components/layout/Container";
import { Button } from "@/components/primitives/Button";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { HeroCanvas } from "./HeroCanvas";
import { HOME } from "@/content/home";
import styles from "./SplitMediaHero.module.css";

const hero = HOME.hero;

/** Home hero: split media (animated canvas) + animated serif headline. */
export function SplitMediaHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.media} aria-hidden="true">
        <HeroCanvas />
      </div>
      <Container className={styles.wrap}>
        <div className={styles.inner}>
          <Eyebrow className={styles.eyebrow}>{hero.eyebrow}</Eyebrow>
          <h1 className={styles.title}>
            <span className={styles.line}>
              <span>{hero.titleLeadLine}</span>
            </span>
            <span className={styles.line}>
              <span>
                {hero.titleRestBefore}
                <span className={styles.em}>
                  {hero.titleEmphasis}
                  <svg className={styles.underline} viewBox="0 0 200 11" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M3 8 Q 100 1 197 6" />
                  </svg>
                </span>
                .
              </span>
            </span>
          </h1>
          <p className={styles.sub}>{hero.sub}</p>
          <div className={styles.acts}>
            <Button href={hero.primaryCta.href} variant="navy">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="ghostNavy">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
