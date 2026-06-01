import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { SITE, FOOTER_NAV } from "@/content/site";
import styles from "./Footer.module.css";

/** Site footer — brand + tagline, link columns, contact, legal base. */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.brandLogo} aria-label="SucStrat — home">
              <Logo tone="light" height={30} />
            </Link>
            <p className={styles.tagline}>{SITE.tagline}</p>
          </div>

          <nav className={styles.cols} aria-label="Footer">
            {FOOTER_NAV.map((column) => (
              <div key={column.heading} className={styles.col}>
                <h2 className={styles.colHeading}>{column.heading}</h2>
                <ul className={styles.colList}>
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={styles.colLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className={styles.col}>
              <h2 className={styles.colHeading}>Contact</h2>
              <ul className={styles.colList}>
                <li>
                  <a href={`mailto:${SITE.email}`} className={styles.colLink}>
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className={styles.base}>
          <span>© 2026 SucStrat. All rights reserved.</span>
          <span className={styles.legal}>
            {/* Plain text in the references — no destination pages provided (TODO(content)). */}
            <span>Privacy</span>
            <span>Terms</span>
          </span>
        </div>
      </Container>
    </footer>
  );
}
