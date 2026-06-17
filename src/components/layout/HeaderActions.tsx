"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/primitives/Button";
import { MobileNav } from "./MobileNav";
import { PRIMARY_NAV, headerCtaFor } from "@/content/site";
import styles from "./Header.module.css";

/**
 * Right-hand header actions: the page-specific CTA (label varies by route, always routes
 * to Get in Touch) plus the mobile menu. Client leaf so the CTA can be resolved from the
 * current pathname; under static export each route pre-renders its own correct label.
 */
export function HeaderActions() {
  const pathname = usePathname();
  const cta = headerCtaFor(pathname);

  return (
    <div className={styles.actions}>
      <Button href={cta.href} variant="white" className={styles.headerCta}>
        {cta.label}
      </Button>
      <MobileNav links={PRIMARY_NAV} cta={cta} />
    </div>
  );
}
