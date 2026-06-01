import type { CSSProperties, ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/primitives/Reveal";
import styles from "./Frameworks.module.css";

const SERIF: CSSProperties = { fontFamily: "var(--font-serif)" };
const SANS: CSSProperties = { fontFamily: "var(--font-sans)" };

// Diagram illustrations, keyed by card number — copied verbatim from the mockup.
const DIAGRAMS: Record<string, ReactNode> = {
  "01": (
    <svg viewBox="0 0 250 118" fill="none" className={styles.diaSvg} aria-hidden="true">
      <circle cx="48" cy="46" r="17" stroke="#4476a1" strokeWidth="1.6" />
      <circle cx="125" cy="34" r="17" stroke="#5d90ba" strokeWidth="1.6" />
      <circle cx="202" cy="46" r="17" stroke="#4476a1" strokeWidth="1.6" />
      <path d="M66 40 Q92 30 108 34" stroke="#5d90ba" strokeWidth="1.3" />
      <path d="M142 34 Q170 30 184 40" stroke="#5d90ba" strokeWidth="1.3" />
      <path d="M196 62 Q125 100 54 62" stroke="#9bb6dd" strokeWidth="1.2" strokeDasharray="3 3" />
      <text x="48" y="51" textAnchor="middle" style={SERIF} fontSize="15" fill="#264259">1</text>
      <text x="125" y="39" textAnchor="middle" style={SERIF} fontSize="15" fill="#264259">2</text>
      <text x="202" y="51" textAnchor="middle" style={SERIF} fontSize="15" fill="#264259">3</text>
      <text x="48" y="86" textAnchor="middle" style={SANS} fontSize="9" letterSpacing="1" fill="#5a6e80">DISCOVER</text>
      <text x="125" y="102" textAnchor="middle" style={SANS} fontSize="9" letterSpacing="1" fill="#5a6e80">DESIGN</text>
      <text x="202" y="86" textAnchor="middle" style={SANS} fontSize="9" letterSpacing="1" fill="#5a6e80">DEBUG</text>
    </svg>
  ),
  "02": (
    <svg viewBox="0 0 250 118" fill="none" className={styles.diaSvg} aria-hidden="true">
      <line x1="34" y1="92" x2="228" y2="92" stroke="#c2cedb" strokeWidth="1.4" />
      <line x1="34" y1="92" x2="34" y2="14" stroke="#c2cedb" strokeWidth="1.4" />
      <path d="M44 80 L100 64 L156 42 L214 20" stroke="#4476a1" strokeWidth="1.8" />
      <circle cx="44" cy="80" r="3.5" fill="#5d90ba" />
      <circle cx="100" cy="64" r="3.5" fill="#5d90ba" />
      <circle cx="156" cy="42" r="3.5" fill="#5d90ba" />
      <circle cx="214" cy="20" r="5" fill="#264259" />
      <text x="131" y="110" textAnchor="middle" style={SANS} fontSize="9" letterSpacing="1" fill="#5a6e80">TIMING</text>
      <text x="16" y="52" textAnchor="middle" style={SANS} fontSize="9" letterSpacing="1" fill="#5a6e80" transform="rotate(-90 16 52)">
        EFFORT
      </text>
    </svg>
  ),
  "03": (
    <svg viewBox="0 0 250 118" fill="none" className={styles.diaSvg} aria-hidden="true">
      <line x1="34" y1="92" x2="228" y2="92" stroke="#c2cedb" strokeWidth="1.4" />
      <path d="M40 88 C80 88 104 22 131 22 C158 22 182 88 222 88" stroke="#4476a1" strokeWidth="1.8" />
      <line x1="131" y1="27" x2="131" y2="92" stroke="#c2cedb" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="131" cy="22" r="5" fill="#264259" />
      <text x="131" y="108" textAnchor="middle" style={SANS} fontSize="9" letterSpacing="1.5" fill="#5a6e80">PEAK PERFORMANCE</text>
    </svg>
  ),
  "04": (
    <svg viewBox="0 0 250 118" className={styles.diaSvg} aria-hidden="true">
      <text x="125" y="54" textAnchor="middle" style={SERIF} fontSize="23" fill="#5a6e80">
        Talent <tspan fill="#4476a1">×</tspan> <tspan fill="#264259">Execution</tspan>
      </text>
      <line x1="74" y1="68" x2="176" y2="68" stroke="#c2cedb" strokeWidth="1" />
      <text x="125" y="88" textAnchor="middle" style={SANS} fontSize="10" letterSpacing="3" fill="#5a6e80">OUTCOME</text>
    </svg>
  ),
};

/** Know Us "Proprietary frameworks" — navy band, 2×2 white cards with diagrams. */
export function Frameworks({
  eyebrow,
  title,
  lead,
  cards,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  cards: { num: string; title: string; body: string }[];
}) {
  return (
    <Section bg="navy">
      <Container>
        <Reveal>
          <div className={styles.head}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.lead}>{lead}</p>
          </div>
        </Reveal>
        <Reveal>
          <div className={styles.grid}>
            {cards.map((card) => (
              <div className={styles.card} key={card.num}>
                <div className={styles.num}>{card.num}</div>
                <div className={styles.dia}>{DIAGRAMS[card.num]}</div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardBody}>{card.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
