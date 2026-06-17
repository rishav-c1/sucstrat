import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/primitives/SectionHead";
import { Reveal } from "@/components/primitives/Reveal";
import styles from "./KeyClients.module.css";

interface Group {
  label: string;
  names: string[];
}

/**
 * Clients "Key clients handled across industries" (v4.0 Section 4): a quiet, grouped name
 * list (interim text; logos deferred). Names are carried-in interim content, flagged for
 * confirmation of the right to claim them before publishing.
 */
export function KeyClients({
  eyebrow,
  title,
  lead,
  groups,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  groups: Group[];
}) {
  return (
    <Section bg="paper">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
        </Reveal>
        <Reveal>
          <ul className={styles.list}>
            {groups.map((group) => (
              <li key={group.label} className={styles.row}>
                <span className={styles.label}>{group.label}</span>
                <ul className={styles.names}>
                  {group.names.map((name) => (
                    <li key={name} className={styles.name}>
                      {name}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
