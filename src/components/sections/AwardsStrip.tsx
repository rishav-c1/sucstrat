import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/primitives/SectionHead";
import { Reveal } from "@/components/primitives/Reveal";
import { LOGO_PATH } from "@/content/site";
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
            {/* Real logo when supplied; the newer awards (no file yet) fall back to a
                labelled name placeholder. */}
            {logos.map((item) => (
              <li key={item.name} className={item.logo ? styles.item : styles.itemText}>
                {item.logo ? (
                  <Image
                    src={`${LOGO_PATH}/${item.logo}`}
                    alt={item.name}
                    fill
                    sizes="(max-width: 600px) 45vw, 180px"
                    className={styles.img}
                  />
                ) : (
                  <span className={styles.name}>{item.name}</span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
