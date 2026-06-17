import type { CSSProperties, ReactNode } from "react";
import clsx from "clsx";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/primitives/Reveal";
import type { FrameworkCard } from "@/content/types";
import styles from "./Frameworks.module.css";

const SERIF: CSSProperties = { fontFamily: "var(--font-serif)" };
const SANS: CSSProperties = { fontFamily: "var(--font-sans)" };

/**
 * On-brand SVG diagram placeholders (brand-blue only, no purple/periwinkle), one per
 * framework, sketched from the Appendix B descriptions. The locked high-end assets are
 * not in the repo, so these stand in and are flagged for design sign-off.
 */
const DIAGRAMS: Record<string, ReactNode> = {
  // D Scale-Up Loop: 3-phase loop around a "concentrate to 1 to 3 variables" core.
  "01": (
    <svg viewBox="0 0 260 180" fill="none" className={styles.diaSvg} aria-hidden="true">
      <circle cx="130" cy="90" r="30" fill="#264259" />
      <text x="130" y="86" textAnchor="middle" style={SERIF} fontSize="20" fill="#bcd4ee">
        1-3
      </text>
      <text x="130" y="103" textAnchor="middle" style={SANS} fontSize="8" letterSpacing="1.5" fill="#8fb4dd">
        VARIABLES
      </text>
      <circle cx="130" cy="28" r="16" stroke="#5d90ba" strokeWidth="1.6" />
      <circle cx="206" cy="132" r="16" stroke="#4476a1" strokeWidth="1.6" />
      <circle cx="54" cy="132" r="16" stroke="#4476a1" strokeWidth="1.6" />
      <path d="M146 40 A78 78 0 0 1 196 116" stroke="#8fb4dd" strokeWidth="1.3" strokeDasharray="3 3" />
      <path d="M188 140 A78 78 0 0 1 72 140" stroke="#8fb4dd" strokeWidth="1.3" strokeDasharray="3 3" />
      <path d="M64 116 A78 78 0 0 1 114 40" stroke="#8fb4dd" strokeWidth="1.3" strokeDasharray="3 3" />
      <text x="130" y="32" textAnchor="middle" style={SANS} fontSize="8.5" fill="#264259">
        DISCOVER
      </text>
      <text x="206" y="136" textAnchor="middle" style={SANS} fontSize="8.5" fill="#264259">
        DESIGN
      </text>
      <text x="54" y="136" textAnchor="middle" style={SANS} fontSize="8.5" fill="#264259">
        DEBUG
      </text>
    </svg>
  ),
  // Growth Momentum Matrix: 2x2, top-right quadrant highlighted.
  "02": (
    <svg viewBox="0 0 260 180" fill="none" className={styles.diaSvg} aria-hidden="true">
      <rect x="132" y="26" width="96" height="60" fill="#4476a1" opacity="0.16" />
      <line x1="34" y1="86" x2="232" y2="86" stroke="#c2cedb" strokeWidth="1.4" />
      <line x1="132" y1="20" x2="132" y2="150" stroke="#c2cedb" strokeWidth="1.4" />
      <path d="M44 78 L120 70 L210 30" stroke="#4476a1" strokeWidth="1.8" />
      <circle cx="210" cy="30" r="4.5" fill="#264259" />
      <text x="180" y="58" textAnchor="middle" style={SANS} fontSize="8.5" fill="#355c7d">
        EXPONENTIAL
      </text>
      <text x="83" y="58" textAnchor="middle" style={SANS} fontSize="8.5" fill="#9aa9b8">
        BURNOUT
      </text>
      <text x="83" y="116" textAnchor="middle" style={SANS} fontSize="8.5" fill="#9aa9b8">
        NO GROWTH
      </text>
      <text x="183" y="116" textAnchor="middle" style={SANS} fontSize="8.5" fill="#9aa9b8">
        TEMP SPIKE
      </text>
      <text x="131" y="166" textAnchor="middle" style={SANS} fontSize="8.5" letterSpacing="1" fill="#5a6e80">
        TIMING
      </text>
      <text x="18" y="60" textAnchor="middle" style={SANS} fontSize="8.5" letterSpacing="1" fill="#5a6e80" transform="rotate(-90 18 60)">
        EFFORT
      </text>
    </svg>
  ),
  // Fear-Excitement Intensity Model: two response curves + calibration band.
  "03": (
    <svg viewBox="0 0 260 180" fill="none" className={styles.diaSvg} aria-hidden="true">
      <rect x="116" y="22" width="28" height="118" fill="#5d90ba" opacity="0.14" />
      <line x1="34" y1="140" x2="232" y2="140" stroke="#c2cedb" strokeWidth="1.4" />
      <line x1="34" y1="20" x2="34" y2="140" stroke="#c2cedb" strokeWidth="1.4" />
      <path d="M40 136 C90 132 110 36 130 36 C150 36 170 120 222 132" stroke="#4476a1" strokeWidth="1.8" />
      <path d="M40 132 C96 128 112 60 130 60 C150 60 176 110 222 122" stroke="#8fb4dd" strokeWidth="1.6" strokeDasharray="4 3" />
      <circle cx="130" cy="36" r="4.5" fill="#264259" />
      <text x="60" y="36" textAnchor="middle" style={SANS} fontSize="8.5" fill="#355c7d">
        EXCITEMENT
      </text>
      <text x="204" y="112" textAnchor="middle" style={SANS} fontSize="8.5" fill="#5d90ba">
        FEAR
      </text>
      <text x="130" y="158" textAnchor="middle" style={SANS} fontSize="8.5" letterSpacing="1" fill="#5a6e80">
        INTENSITY
      </text>
    </svg>
  ),
  // Qualified vs Classified Audience: consumption-mix ratio bar with 50:50 drift marker.
  "04": (
    <svg viewBox="0 0 260 180" fill="none" className={styles.diaSvg} aria-hidden="true">
      <rect x="34" y="74" width="192" height="34" rx="4" fill="#e1e9f1" />
      <rect x="34" y="74" width="134" height="34" rx="4" fill="#4476a1" />
      <line x1="130" y1="64" x2="130" y2="118" stroke="#264259" strokeWidth="1.4" strokeDasharray="4 3" />
      <text x="101" y="96" textAnchor="middle" style={SANS} fontSize="9" fill="#ffffff">
        CLASSIFIED 70%+
      </text>
      <text x="197" y="96" textAnchor="middle" style={SANS} fontSize="9" fill="#5a6e80">
        ~30%
      </text>
      <text x="130" y="58" textAnchor="middle" style={SANS} fontSize="8" letterSpacing="1" fill="#5a6e80">
        50:50 DRIFT
      </text>
      <text x="44" y="132" textAnchor="start" style={SANS} fontSize="8.5" letterSpacing="1" fill="#5a6e80">
        CONSUMPTION MIX
      </text>
    </svg>
  ),
};

/**
 * Know Us "Proprietary frameworks" (v4.0 Appendix B): navy band, four theory-only cards,
 * each with a luminous brand-blue diagram, italic tagline, the insight, and how it works
 * (01 to 03). Diagram side alternates left/right.
 */
export function Frameworks({
  eyebrow,
  title,
  lead,
  label,
  cards,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  label: string;
  cards: FrameworkCard[];
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
        <div className={styles.stack}>
          {cards.map((card, i) => (
            <Reveal key={card.num}>
              <article className={clsx(styles.card, i % 2 === 1 && styles.cardReverse)}>
                <div className={styles.diaCol}>
                  <div className={styles.dia}>{DIAGRAMS[card.num]}</div>
                </div>
                <div className={styles.txtCol}>
                  <div className={styles.num}>{card.num}</div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.tagline}>{card.tagline}</p>
                  <span className={styles.label}>{label}</span>
                  <div className={styles.block}>
                    <span className={styles.subhead}>The insight</span>
                    <p className={styles.insight}>{card.insight}</p>
                  </div>
                  <div className={styles.block}>
                    <span className={styles.subhead}>How it works</span>
                    <ol className={styles.steps}>
                      {card.steps.map((step) => (
                        <li key={step.n} className={styles.step}>
                          <span className={styles.stepNum}>{step.n}</span>
                          <span className={styles.stepText}>{step.text}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
