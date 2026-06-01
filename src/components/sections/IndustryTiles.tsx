import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Icon } from "@/components/primitives/Icon";
import { Reveal } from "@/components/primitives/Reveal";
import type { IndustryTile } from "@/content/types";
import styles from "./IndustryTiles.module.css";

/** Mist band of sector tiles with line icons (What We Do "Industries we serve"). */
export function IndustryTiles({
  eyebrow,
  title,
  lead,
  tiles,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  tiles: IndustryTile[];
}) {
  return (
    <section className={styles.industries}>
      <Container>
        <Reveal>
          <div className={styles.head}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.lead}>{lead}</p>
          </div>
        </Reveal>
        <Reveal>
          <ul className={styles.grid}>
            {tiles.map((tile) => (
              <li className={styles.tile} key={tile.name}>
                <span className={styles.ico}>
                  <Icon name={tile.icon} />
                </span>
                <span className={styles.name}>{tile.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
