import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/primitives/SectionHead";
import { Reveal } from "@/components/primitives/Reveal";
import { LOGO_BASE } from "@/content/site";
import type { LogoItem } from "@/content/types";
import styles from "./LogoWall.module.css";

interface LogoGroup {
  heading: string;
  context: string;
  logos: LogoItem[];
}

/** Clients logo wall — grouped grids of real logos (grayscale → colour on hover). */
export function LogoWall({
  eyebrow,
  title,
  lead,
  groups,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  groups: LogoGroup[];
}) {
  return (
    <Section bg="mist">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
        </Reveal>
        {groups.map((group) => (
          <Reveal key={group.heading}>
            <div className={styles.group}>
              <div className={styles.groupHead}>
                <h3 className={styles.groupTitle}>{group.heading}</h3>
                <p className={styles.groupContext}>{group.context}</p>
              </div>
              <ul className={styles.grid}>
                {group.logos.map((item) => (
                  <li key={item.name} className={styles.cell}>
                    <Image
                      src={`${LOGO_BASE}/${item.logo}`}
                      alt={item.name}
                      fill
                      sizes="(max-width: 600px) 45vw, 210px"
                      className={styles.img}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </Container>
    </Section>
  );
}
