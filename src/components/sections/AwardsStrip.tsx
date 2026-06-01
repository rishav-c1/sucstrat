import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/primitives/SectionHead";
import { Reveal } from "@/components/primitives/Reveal";
import { LOGO_BASE } from "@/content/site";
import type { LogoItem } from "@/content/types";
import styles from "./AwardsStrip.module.css";

/** Know Us "Awards & recognition" — logo strip (grayscale → colour on hover). */
export function AwardsStrip({
  eyebrow,
  title,
  lead,
  logos,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  logos: LogoItem[];
}) {
  return (
    <Section bg="mist">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
        </Reveal>
        <Reveal>
          <ul className={styles.row}>
            {logos.map((item) => (
              <li key={item.name} className={styles.item}>
                <Image
                  src={`${LOGO_BASE}/${item.logo}`}
                  alt={item.name}
                  fill
                  sizes="(max-width: 600px) 45vw, 180px"
                  className={styles.img}
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
