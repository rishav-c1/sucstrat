import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHead } from "@/components/primitives/SectionHead";
import { Reveal } from "@/components/primitives/Reveal";
import { LOGO_PATH } from "@/content/site";
import type { LogoItem } from "@/content/types";
import styles from "./LogoWall.module.css";

/** A logo cell: real logo image when supplied, brand-name placeholder otherwise. */
function LogoCell({
  item,
  cellClass,
  nameClass,
}: {
  item: LogoItem;
  cellClass: string | undefined;
  nameClass: string | undefined;
}) {
  return (
    <li className={cellClass}>
      {item.logo ? (
        <Image
          src={`${LOGO_PATH}/${item.logo}`}
          alt={item.name}
          fill
          sizes="(max-width: 600px) 45vw, 200px"
          className={styles.img}
        />
      ) : (
        <span className={nameClass}>{item.name}</span>
      )}
    </li>
  );
}

/**
 * Clients roster (v4.0): one clean wall of client logos, no group headings. `startups`
 * (incl. Hypolator) are appended so the whole wall is a single uniform grid of equal-size
 * cells. Logo assets render as images, falling back to a labelled name placeholder.
 */
export function LogoWall({
  eyebrow,
  title,
  lead,
  logos,
  startups,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  logos: LogoItem[];
  startups?: LogoItem[];
}) {
  const all = startups ? [...logos, ...startups] : logos;
  return (
    <Section bg="mist">
      <Container>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
        </Reveal>
        <Reveal>
          <ul className={styles.grid}>
            {all.map((item) => (
              <LogoCell key={item.name} item={item} cellClass={styles.cell} nameClass={styles.name} />
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
