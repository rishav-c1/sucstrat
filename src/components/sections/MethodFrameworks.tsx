"use client";

import { useId, useState } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import type { MethodDiagram, MethodFramework } from "@/content/types";
import styles from "./MethodFrameworks.module.css";

/* ===== Exhibit diagrams (pure CSS + Unicode glyphs) ===== */

function LoopDiagram() {
  return (
    <div className={styles.loop}>
      <div className={styles.loopRing} aria-hidden="true" />
      <span className={`${styles.loopChevron} ${styles.loopChevron1}`} aria-hidden="true">
        {"►"}
      </span>
      <span className={`${styles.loopChevron} ${styles.loopChevron2}`} aria-hidden="true">
        {"►"}
      </span>
      <span className={`${styles.loopChevron} ${styles.loopChevron3}`} aria-hidden="true">
        {"►"}
      </span>
      <div className={styles.loopHub}>
        <span className={styles.loopHubGlyph} aria-hidden="true">
          {"↻"}
        </span>
        <span className={styles.loopHubLabel}>The loop</span>
      </div>
      <div className={`${styles.loopNode} ${styles.loopNode1}`}>
        <span className={styles.loopNodeTag}>D1</span>
        <span className={styles.loopNodeName}>Discover &amp; Diagnose</span>
      </div>
      <div className={`${styles.loopNode} ${styles.loopNode2}`}>
        <span className={styles.loopNodeTag}>D2</span>
        <span className={styles.loopNodeName}>Design &amp; Deploy</span>
      </div>
      <div className={`${styles.loopNode} ${styles.loopNode3}`}>
        <span className={styles.loopNodeTag}>D3</span>
        <span className={styles.loopNodeName}>Debug &amp; Deliver</span>
      </div>
    </div>
  );
}

function MatrixDiagram() {
  return (
    <div className={styles.matrix}>
      <div className={styles.matrixYAxis}>
        <span className={styles.axisEnd}>HIGH</span>
        <span className={styles.axisLabelV}>EFFORT</span>
        <span className={styles.axisEnd}>LOW</span>
      </div>
      <div className={styles.matrixMain}>
        <div className={styles.matrixGrid}>
          <div className={`${styles.quadrant} ${styles.quadrantMuted}`}>
            <div className={styles.quadrantTag}>High effort {"·"} Wrong timing</div>
            <div className={styles.quadrantName}>Burnout / Stagnation</div>
          </div>
          <div className={`${styles.quadrant} ${styles.quadrantWin}`}>
            <div className={styles.quadrantTag}>High effort {"·"} Right timing</div>
            <div className={styles.quadrantName}>Exponential Growth</div>
          </div>
          <div className={`${styles.quadrant} ${styles.quadrantMuted}`}>
            <div className={styles.quadrantTag}>Low effort {"·"} Wrong timing</div>
            <div className={styles.quadrantName}>No Growth</div>
          </div>
          <div className={`${styles.quadrant} ${styles.quadrantSpike}`}>
            <div className={styles.quadrantTag}>Low effort {"·"} Right timing</div>
            <div className={styles.quadrantName}>Temporary Spike</div>
          </div>
        </div>
        <div className={styles.matrixXAxis}>
          <span>WRONG TIMING</span>
          <span className={styles.axisLabelH}>TIMING / TREND {"→"}</span>
          <span>RIGHT TIMING</span>
        </div>
      </div>
    </div>
  );
}

function IntensityDiagram() {
  return (
    <div className={styles.intensity}>
      <div className={styles.intensityYAxis}>
        <span className={styles.axisLabelV}>RESPONSE SPEED &amp; STRENGTH {"→"}</span>
      </div>
      <div className={styles.intensityMain}>
        <div className={styles.chips}>
          <span className={styles.chip}>FEAR</span>
          <span className={styles.chip}>EXCITEMENT</span>
          <span className={styles.chipNote}>the two accelerators of response</span>
        </div>
        <div className={styles.bars}>
          <div className={`${styles.bar} ${styles.bar1}`} aria-hidden="true" />
          <div className={`${styles.bar} ${styles.bar2}`} aria-hidden="true" />
          <div className={`${styles.bar} ${styles.bar3}`} aria-hidden="true" />
          <div className={`${styles.bar} ${styles.bar4}`} aria-hidden="true" />
          <div className={`${styles.bar} ${styles.barPeak}`}>
            <span className={styles.barPeakLabel}>Fast {"·"} strong {"·"} lasting</span>
          </div>
        </div>
        <div className={styles.intensityXAxis}>
          <span>LOW INTENSITY</span>
          <span className={styles.axisLabelH}>EMOTIONAL INTENSITY {"→"}</span>
          <span>HIGH INTENSITY</span>
        </div>
      </div>
    </div>
  );
}

function DominanceDiagram() {
  return (
    <div>
      <div className={styles.domBar}>
        <div className={styles.domClassified}>
          <div className={styles.domClassifiedTitle}>Classified Audience</div>
          <div className={styles.domClassifiedSub}>Intended, on-concept {"·"} the source of brand strength</div>
        </div>
        <div className={styles.domQualified}>
          <div className={styles.domQualifiedTitle}>Qualified</div>
          <div className={styles.domQualifiedSub}>Off-concept</div>
        </div>
      </div>
      <div className={styles.domLegend}>
        <span className={styles.domLegendUp}>
          {"▲"} Revenue <span className={styles.domMuted}>with</span> relevance
        </span>
        <span className={styles.domLegendDown}>
          Revenue <span className={styles.domMutedDeep}>without</span> relevance {"·"} dilution risk {"▼"}
        </span>
      </div>
      <div className={styles.domCaption}>Brand strength = dominance of the Classified Audience</div>
    </div>
  );
}

function Exhibit({ type }: { type: MethodDiagram }) {
  if (type === "loop") return <LoopDiagram />;
  if (type === "matrix") return <MatrixDiagram />;
  if (type === "intensity") return <IntensityDiagram />;
  return <DominanceDiagram />;
}

/**
 * Know Us "Our method" — interactive proprietary-frameworks section. A persistent dark index
 * rail lists all four frameworks; selecting one swaps the white content panel (eyebrow, title,
 * thesis, three points, and a bespoke CSS exhibit). All four panels are rendered (server HTML /
 * SEO); only the active one is shown. Rebuilt from the design handoff.
 */
export function MethodFrameworks({
  eyebrow,
  titleLead,
  titleEmph,
  titleRest,
  indexHeading,
  author,
  authorRole,
  credential,
  frameworks,
}: {
  eyebrow: string;
  titleLead: string;
  titleEmph: string;
  titleRest: string;
  indexHeading: string;
  author: string;
  authorRole: string;
  credential: string;
  frameworks: MethodFramework[];
}) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const [credLead, credRest] = credential.split(" · ");

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
          <div className={styles.header}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h2 className={styles.title}>
              {titleLead}
              <span className={styles.titleEmph}>{titleEmph}</span>
              {titleRest}
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className={styles.card}>
            <div className={styles.grid}>
              {/* Index rail */}
              <div className={styles.rail}>
                <div className={styles.railHeading}>{indexHeading}</div>
                {frameworks.map((fw, i) => (
                  <button
                    key={fw.num}
                    type="button"
                    className={`${styles.row}${i === active ? ` ${styles.rowActive}` : ""}`}
                    aria-current={i === active || undefined}
                    aria-controls={`${baseId}-view-${i}`}
                    onClick={() => setActive(i)}
                  >
                    <span className={styles.rowNum}>{fw.num}</span>
                    <span className={styles.rowBody}>
                      <span className={styles.rowTitle}>{fw.fullTitle}</span>
                      <span className={styles.rowCat}>{fw.cat}</span>
                    </span>
                  </button>
                ))}
                <div className={styles.railFooter}>
                  <div className={styles.railCredit}>
                    Authored by <span className={styles.railCreditName}>{author}</span>
                    <br />
                    {authorRole}
                  </div>
                </div>
              </div>

              {/* Content panel (all views render; active one is shown) */}
              <div className={styles.panel}>
                {frameworks.map((fw, i) => (
                  <div
                    key={fw.num}
                    id={`${baseId}-view-${i}`}
                    className={`${styles.view}${i === active ? ` ${styles.viewActive}` : ""}`}
                  >
                    <div className={styles.panelHead}>
                      <div className={styles.panelHeadLeft}>
                        <div className={styles.panelEyebrow}>{fw.eyebrow}</div>
                        <h3 className={styles.panelTitle}>
                          {fw.titleLead} <span className={styles.panelTitleEmph}>{fw.emph}</span>
                        </h3>
                      </div>
                      <div className={styles.panelNum} aria-hidden="true">
                        {fw.num}
                      </div>
                    </div>

                    <p className={styles.thesis}>
                      {fw.thesisPre}
                      <strong className={styles.thesisMark}>{fw.thesisMark}</strong>
                      {fw.thesisPost}
                    </p>

                    <div className={styles.points}>
                      {fw.points.map((p) => (
                        <div className={styles.point} key={p.label}>
                          <div className={styles.pointLabel}>{p.label}</div>
                          <div className={styles.pointText}>{p.text}</div>
                        </div>
                      ))}
                    </div>

                    <div className={styles.exhibitWrap}>
                      <div className={styles.exhibit}>
                        <div className={styles.exhibitHead}>
                          <div className={styles.exhibitLabel}>Exhibit {"·"} {fw.exhibitLabel}</div>
                          <div className={styles.exhibitReg}>{"®"} Reg. Govt. of India</div>
                        </div>
                        <div className={styles.exhibitBody}>
                          <Exhibit type={fw.type} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer credential */}
            <div className={styles.credential}>
              <span className={styles.seal} aria-hidden="true">
                {"®"}
              </span>
              <span className={styles.credentialText}>
                {credLead}
                <span className={styles.credentialDot}>{"·"}</span>
                {credRest}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
