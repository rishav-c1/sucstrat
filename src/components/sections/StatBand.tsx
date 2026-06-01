import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import { StatCounter } from "@/components/primitives/StatCounter";
import type { Metric } from "@/content/types";
import styles from "./StatBand.module.css";

/** Navy band of count-up metrics. Reused on Home / What We Do / Clients. */
export function StatBand({
  eyebrow,
  title,
  metrics,
  columns = 4,
}: {
  eyebrow?: string;
  title?: string;
  metrics: Metric[];
  columns?: 3 | 4;
}) {
  return (
    <section className={styles.band}>
      <Container>
        {eyebrow || title ? (
          <Reveal className={styles.head}>
            {eyebrow ? <Eyebrow className={styles.eyebrow}>{eyebrow}</Eyebrow> : null}
            {title ? <h2 className={styles.title}>{title}</h2> : null}
          </Reveal>
        ) : null}
        <Reveal>
          <div className={styles.metrics} data-cols={columns}>
            {metrics.map((metric) => (
              <div className={styles.metric} key={metric.label}>
                <div className={styles.value}>
                  <StatCounter
                    to={metric.to}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    affixClassName={styles.affix}
                  />
                </div>
                <div className={styles.label}>{metric.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
