import { Container } from "@/components/layout/Container";
import { SectionHead } from "@/components/primitives/SectionHead";
import { Reveal } from "@/components/primitives/Reveal";
import { getWorldMapGeometry } from "@/lib/worldmap";
import { ALL_SECTORS, HOME, REGIONS } from "@/content/home";
import { WorldMapInteractive } from "./WorldMapInteractive";
import styles from "./GlobalImpact.module.css";

/** Home "Global impact" — server-rendered world map + interactive sector cloud. */
export function GlobalImpact() {
  const geometry = getWorldMapGeometry(REGIONS);
  const gi = HOME.globalImpact;

  return (
    <section className={styles.geo} id="geo">
      <Container>
        <Reveal>
          <SectionHead title={gi.title} lead={gi.sub} />
        </Reveal>
        <Reveal>
          <WorldMapInteractive
            geometry={geometry}
            regions={REGIONS}
            sectors={ALL_SECTORS}
            legend={gi.legend}
            cloudLabel={gi.cloudLabel}
            cloudHint={gi.cloudHint}
          />
        </Reveal>
      </Container>
    </section>
  );
}
