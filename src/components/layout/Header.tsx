import { Container } from "./Container";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { MobileNav } from "./MobileNav";
import { ScrollShadow } from "./ScrollShadow";
import { Button } from "@/components/primitives/Button";
import { PRIMARY_NAV } from "@/content/site";
import styles from "./Header.module.css";

const DEFAULT_CTA = { label: "Get in Touch", href: "/get-in-touch" };

/**
 * Fixed site header. Server-rendered shell; the scroll-shadow and mobile menu are
 * isolated client leaves (ScrollShadow / MobileNav), and nav links mark the current
 * route via the NavLink leaf.
 */
export function Header({ cta = DEFAULT_CTA }: { cta?: { label: string; href: string } }) {
  return (
    <header className={styles.header}>
      <ScrollShadow />
      <Container className={styles.inner}>
        <NavLink href="/" className={styles.logoLink}>
          {/* Not `priority`: the logo isn't the LCP (the hero heading is), so preloading
              it would only compete with the LCP-critical fonts on slow connections. */}
          <Logo tone="light" height={40} />
        </NavLink>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            {PRIMARY_NAV.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  className={styles.navLink}
                  activeClassName={styles.navLinkActive}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button href={cta.href} variant="white" className={styles.headerCta}>
            {cta.label}
          </Button>
          <MobileNav links={PRIMARY_NAV} cta={cta} />
        </div>
      </Container>
    </header>
  );
}
