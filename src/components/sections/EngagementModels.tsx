"use client";

import { useId, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/primitives/SectionHead";
import { Reveal } from "@/components/primitives/Reveal";
import type { EngagementModel } from "@/content/types";
import styles from "./EngagementModels.module.css";

/**
 * Know Us "How we engage" — five engagement archetypes as a left-to-right commitment spectrum.
 * A row of five equal cards sits above a detail panel that swaps to the selected model. Selecting
 * a card (hover on desktop, tap on touch, or keyboard focus) updates the panel and tints the card
 * in its own spectrum shade. All five panels are rendered (server HTML for SEO); only the active
 * one shows. Rebuilt from the design handoff; the handoff's ghost-light label colours are darkened
 * to on-brand tones that clear WCAG AA on the light backgrounds.
 */
export function EngagementModels({
  eyebrow,
  title,
  lead,
  models,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  models: EngagementModel[];
}) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const stripId = `${baseId}-strip`;

  // On touch devices (no hover), bring the detail panel into view after a tap so the selected
  // model's detail is seen without hunting for it. No-op on hover/pointer devices.
  function select(index: number, fromTap: boolean) {
    setActive(index);
    if (fromTap && typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
      window.requestAnimationFrame(() => {
        document.getElementById(stripId)?.scrollIntoView({ block: "nearest", behavior: "smooth" });
      });
    }
  }

  return (
    <Section id="engagement" bg="paper">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
        </Reveal>

        <Reveal className={styles.spectrum}>
          {/* Card row (the commitment spectrum) */}
          <div className={styles.cards} role="group" aria-label="Engagement models">
            {models.map((m, i) => {
              const num = String(i + 1).padStart(2, "0");
              const isActive = i === active;
              return (
                <button
                  key={m.name}
                  type="button"
                  className={`${styles.card}${isActive ? ` ${styles.cardActive}` : ""}`}
                  aria-current={isActive || undefined}
                  aria-controls={`${baseId}-panel-${i}`}
                  onMouseEnter={() => select(i, false)}
                  onFocus={() => select(i, false)}
                  onClick={() => select(i, true)}
                >
                  <span className={styles.accentBar} aria-hidden="true" />
                  <span className={styles.cardBody}>
                    <span className={styles.cardNum}>{num}</span>
                    <span className={styles.cardName}>{m.name}</span>
                    <span className={styles.cardDuration}>
                      <span className={styles.rule} aria-hidden="true" />
                      {m.duration}
                    </span>
                    <span className={styles.cardPromise}>{m.oneLine}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel — all five render; only the active is shown */}
          <div className={styles.strip} id={stripId}>
            {models.map((m, i) => {
              const num = String(i + 1).padStart(2, "0");
              return (
                <div
                  key={m.name}
                  id={`${baseId}-panel-${i}`}
                  className={`${styles.panel}${i === active ? ` ${styles.panelActive}` : ""}`}
                >
                  <div className={styles.panelHead}>
                    <div className={styles.panelHeadLeft}>
                      <span className={styles.panelNum}>{num}</span>
                      <span className={styles.panelName}>{m.name}</span>
                    </div>
                    <div className={styles.panelHeadRight}>
                      <span className={styles.panelDuration}>
                        <span className={styles.rule} aria-hidden="true" />
                        {m.duration}
                      </span>
                      <span className={styles.panelDivider} aria-hidden="true" />
                      <span className={styles.panelModel}>{m.model}</span>
                    </div>
                  </div>

                  <div className={styles.panelBody}>
                    <div>
                      <div className={styles.labelEngagement}>The engagement</div>
                      <p className={styles.panelDetail}>{m.body}</p>
                      <div className={styles.labelBestFor}>Best for</div>
                      <p className={styles.panelBestFor}>{m.bestFor}</p>
                    </div>
                    <div>
                      <div className={styles.labelIncluded}>What&rsquo;s included</div>
                      <ul className={styles.bullets}>
                        {m.outputs.map((output) => (
                          <li key={output} className={styles.bullet}>
                            <span className={styles.bulletDash} aria-hidden="true" />
                            <span className={styles.bulletText}>{output}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
