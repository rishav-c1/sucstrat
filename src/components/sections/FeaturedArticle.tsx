import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Reveal } from "@/components/primitives/Reveal";
import portrait from "@static/vinay-v3-consultants.jpg";
import { HOME } from "@/content/home";
import styles from "./FeaturedArticle.module.css";

/**
 * "Insights & ideas" — navy band featuring one hand-picked article: a white card
 * (portrait + masthead + headline + byline) beside "The brief" summary.
 */
export function FeaturedArticle() {
  const { eyebrow, titleBefore, titleEmphasis, allLink, briefLabel, article } = HOME.featured;

  return (
    <Section bg="navy">
      <Container>
        <Reveal>
          <div className={styles.head}>
            <div>
              <Eyebrow className={styles.eyebrow}>{eyebrow}</Eyebrow>
              <h2 className={styles.title}>
                {titleBefore}
                <em>{titleEmphasis}</em>
              </h2>
            </div>
            <Link href={allLink.href} className={styles.allLink}>
              {allLink.label}
              <span aria-hidden="true"> →</span>
            </Link>
          </div>
        </Reveal>

        <Reveal>
          <div className={styles.grid}>
            <article className={styles.card}>
              <div className={styles.portrait}>
                <Image
                  src={portrait}
                  alt={article.imageAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 340px"
                  className={styles.portraitImg}
                />
              </div>
              <div className={styles.body}>
                <Eyebrow className={styles.source}>{article.source}</Eyebrow>
                <h3 className={styles.articleTitle}>{article.title}</h3>
                <p className={styles.byline}>
                  By <strong>{article.byline}</strong>
                </p>
                <p className={styles.role}>{article.role}</p>
                <a
                  className={styles.more}
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read ${article.title} on ${article.source} (opens in a new tab)`}
                >
                  Read on {article.source} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>

            <div className={styles.brief}>
              <Eyebrow className={styles.briefLabel}>{briefLabel}</Eyebrow>
              {article.brief.map((para) => (
                <p key={para.slice(0, 28)} className={styles.briefPara}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
