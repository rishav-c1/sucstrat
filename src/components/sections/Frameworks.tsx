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
 * Luminous brand-blue framework diagrams (no purple/periwinkle), one per framework,
 * sketched from the Appendix B descriptions and centered/balanced within a navy panel.
 * Locked high-end assets are not in the repo, so these stand in and are flagged for
 * design sign-off. Each defs id is namespaced per diagram to avoid collisions.
 */
const DIAGRAMS: Record<string, ReactNode> = {
  // D Scale-Up Loop: 3-phase loop around a glowing "concentrate to 1 to 3 variables" core.
  "01": (
    <svg viewBox="0 0 280 200" fill="none" className={styles.diaSvg} aria-hidden="true">
      <defs>
        <radialGradient id="fwA-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#5d90ba" stopOpacity="0.55" />
          <stop offset="1" stopColor="#5d90ba" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fwA-core" cx="0.42" cy="0.36" r="0.75">
          <stop offset="0" stopColor="#eaf3ff" />
          <stop offset="1" stopColor="#5d90ba" />
        </radialGradient>
      </defs>
      <circle cx="140" cy="102" r="78" fill="url(#fwA-glow)" />
      <path d="M150 44 A62 62 0 0 1 196 150" stroke="#6f9fc6" strokeWidth="1.4" strokeDasharray="2 5" strokeLinecap="round" opacity="0.85" />
      <path d="M186 158 A62 62 0 0 1 94 158" stroke="#6f9fc6" strokeWidth="1.4" strokeDasharray="2 5" strokeLinecap="round" opacity="0.85" />
      <path d="M84 150 A62 62 0 0 1 130 44" stroke="#6f9fc6" strokeWidth="1.4" strokeDasharray="2 5" strokeLinecap="round" opacity="0.85" />
      <circle cx="140" cy="102" r="34" fill="url(#fwA-core)" />
      <circle cx="140" cy="102" r="34" stroke="#eaf3ff" strokeWidth="0.8" opacity="0.5" />
      <text x="140" y="99" textAnchor="middle" style={SERIF} fontSize="24" fill="#16293d">1-3</text>
      <text x="140" y="116" textAnchor="middle" style={SANS} fontSize="8" letterSpacing="2" fill="#1b3140">VARIABLES</text>
      <circle cx="140" cy="40" r="16" fill="#1b3140" stroke="#8fb4dd" strokeWidth="1.4" />
      <circle cx="206" cy="156" r="16" fill="#1b3140" stroke="#8fb4dd" strokeWidth="1.4" />
      <circle cx="74" cy="156" r="16" fill="#1b3140" stroke="#8fb4dd" strokeWidth="1.4" />
      <text x="140" y="43" textAnchor="middle" style={SANS} fontSize="7.5" fill="#bcd4ee">DISCOVER</text>
      <text x="206" y="159" textAnchor="middle" style={SANS} fontSize="7.5" fill="#bcd4ee">DESIGN</text>
      <text x="74" y="159" textAnchor="middle" style={SANS} fontSize="7.5" fill="#bcd4ee">DEBUG</text>
    </svg>
  ),
  // Growth Momentum Matrix: 2x2 with a glowing top-right (exponential) quadrant + compounding curve.
  "02": (
    <svg viewBox="0 0 280 200" fill="none" className={styles.diaSvg} aria-hidden="true">
      <defs>
        <linearGradient id="fwB-q" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#4476a1" stopOpacity="0.05" />
          <stop offset="1" stopColor="#8fb4dd" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="fwB-line" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#5d90ba" />
          <stop offset="1" stopColor="#eaf3ff" />
        </linearGradient>
      </defs>
      <rect x="140" y="36" width="100" height="64" rx="3" fill="url(#fwB-q)" />
      <line x1="40" y1="100" x2="240" y2="100" stroke="#3f6485" strokeWidth="1.2" />
      <line x1="140" y1="30" x2="140" y2="164" stroke="#3f6485" strokeWidth="1.2" />
      <path d="M48 92 C108 86 150 78 232 38" stroke="url(#fwB-line)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="232" cy="38" r="5" fill="#eaf3ff" />
      <circle cx="232" cy="38" r="9" fill="#eaf3ff" opacity="0.18" />
      <text x="190" y="60" textAnchor="middle" style={SANS} fontSize="8" letterSpacing="0.5" fill="#dcebfa">EXPONENTIAL</text>
      <text x="90" y="60" textAnchor="middle" style={SANS} fontSize="8" fill="#6f87a0">BURNOUT</text>
      <text x="90" y="134" textAnchor="middle" style={SANS} fontSize="8" fill="#6f87a0">NO GROWTH</text>
      <text x="190" y="134" textAnchor="middle" style={SANS} fontSize="8" fill="#6f87a0">TEMP SPIKE</text>
      <text x="140" y="182" textAnchor="middle" style={SANS} fontSize="8" letterSpacing="1.5" fill="#9bb6dd">TIMING</text>
      <text x="22" y="100" textAnchor="middle" style={SANS} fontSize="8" letterSpacing="1.5" fill="#9bb6dd" transform="rotate(-90 22 100)">EFFORT</text>
    </svg>
  ),
  // Fear-Excitement Intensity Model: two response curves + a glowing calibration band at the peak.
  "03": (
    <svg viewBox="0 0 280 200" fill="none" className={styles.diaSvg} aria-hidden="true">
      <defs>
        <linearGradient id="fwC-band" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8fb4dd" stopOpacity="0.34" />
          <stop offset="1" stopColor="#8fb4dd" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="128" y="34" width="24" height="120" fill="url(#fwC-band)" />
      <line x1="40" y1="154" x2="244" y2="154" stroke="#3f6485" strokeWidth="1.2" />
      <line x1="40" y1="30" x2="40" y2="154" stroke="#3f6485" strokeWidth="1.2" />
      <path d="M46 150 C96 146 118 44 140 44 C162 44 184 132 238 146" stroke="#eaf3ff" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M46 146 C104 142 122 70 140 70 C160 70 190 124 238 136" stroke="#5d90ba" strokeWidth="1.8" strokeDasharray="5 4" strokeLinecap="round" />
      <circle cx="140" cy="44" r="4.5" fill="#eaf3ff" />
      <circle cx="140" cy="44" r="8" fill="#eaf3ff" opacity="0.2" />
      <text x="74" y="44" textAnchor="middle" style={SANS} fontSize="8" fill="#dcebfa">EXCITEMENT</text>
      <text x="214" y="120" textAnchor="middle" style={SANS} fontSize="8" fill="#7fa8cf">FEAR</text>
      <text x="140" y="180" textAnchor="middle" style={SANS} fontSize="8" letterSpacing="1.5" fill="#9bb6dd">INTENSITY</text>
    </svg>
  ),
  // Qualified vs Classified Audience: a centered consumption-mix ratio bar with 50:50 drift marker.
  "04": (
    <svg viewBox="0 0 280 200" fill="none" className={styles.diaSvg} aria-hidden="true">
      <defs>
        <linearGradient id="fwD-bar" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#4476a1" />
          <stop offset="1" stopColor="#8fb4dd" />
        </linearGradient>
      </defs>
      <rect x="40" y="86" width="200" height="40" rx="6" fill="#1b3140" stroke="#33536f" strokeWidth="1" />
      <rect x="40" y="86" width="140" height="40" rx="6" fill="url(#fwD-bar)" />
      <rect x="40" y="86" width="140" height="14" rx="6" fill="#ffffff" opacity="0.12" />
      <line x1="140" y1="74" x2="140" y2="138" stroke="#eaf3ff" strokeWidth="1.4" strokeDasharray="4 3" />
      <text x="110" y="111" textAnchor="middle" style={SANS} fontSize="9.5" fill="#ffffff">CLASSIFIED 70%+</text>
      <text x="210" y="111" textAnchor="middle" style={SANS} fontSize="9.5" fill="#9bb6dd">~30%</text>
      <text x="140" y="66" textAnchor="middle" style={SANS} fontSize="8" letterSpacing="1" fill="#bcd4ee">50:50 DRIFT</text>
      <text x="140" y="150" textAnchor="middle" style={SANS} fontSize="8" letterSpacing="1.5" fill="#9bb6dd">CONSUMPTION MIX</text>
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
