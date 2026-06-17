import { Container } from "./Container";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { HeaderActions } from "./HeaderActions";
import { ScrollShadow } from "./ScrollShadow";
import { PRIMARY_NAV } from "@/content/site";
import styles from "./Header.module.css";

/**
 * Fixed site header. Server-rendered shell; the scroll-shadow, the page-specific CTA, and
 * the mobile menu are isolated client leaves (ScrollShadow / HeaderActions), and nav links
 * mark the current route via the NavLink leaf.
 */
export function Header() {
  return (
    <header className={styles.header}>
      <ScrollShadow />
      <Container className={styles.inner}>
        <NavLink href="/" className={styles.logoLink}>
          {/* Not `priority`: the logo isn't the LCP (the hero heading is), so preloading
              it would only compete with the LCP-critical fonts on slow connections. */}
          <Logo tone="light" height={38} />
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

        <HeaderActions />
      </Container>
    </header>
  );
}
