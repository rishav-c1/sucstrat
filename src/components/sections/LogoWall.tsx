import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/primitives/SectionHead";
import { Reveal } from "@/components/primitives/Reveal";
import type { LogoItem } from "@/content/types";
import styles from "./LogoWall.module.css";

/**
 * Clients roster (v4.0): one clean wall of client wordmarks plus a small startups row,
 * no group headings. Logo assets are deferred, so each cell carries the client name as a
 * labelled placeholder until a local logo file is supplied.
 */
export function LogoWall({
  eyebrow,
  title,
  lead,
  logos,
  startups,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  logos: LogoItem[];
  startups?: LogoItem[];
}) {
  return (
    <Section bg="mist">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
        </Reveal>
        <Reveal>
          <ul className={styles.grid}>
            {logos.map((item) => (
              <li key={item.name} className={styles.cell}>
                <span className={styles.name}>{item.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        {startups && startups.length > 0 ? (
          <Reveal>
            <div className={styles.startups}>
              <h3 className={styles.srOnly}>Startups</h3>
              <ul className={styles.startupRow}>
                {startups.map((item) => (
                  <li key={item.name} className={styles.startupCell}>
                    <span className={styles.startupName}>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}
      </Container>
    </Section>
  );
}
