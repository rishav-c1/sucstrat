"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/primitives/Button";
import type { NavLink } from "@/content/site";
import styles from "./MobileNav.module.css";

/** Hamburger toggle + slide-down panel (shown ≤900px). Client leaf. */
export function MobileNav({
  links,
  cta,
}: {
  links: NavLink[];
  cta: { label: string; href: string };
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const pathname = usePathname();

  // Close on Escape while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className={styles.mobile}>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true">{open ? "✕" : "☰"}</span>
      </button>

      <div id={panelId} className={styles.panel} hidden={!open}>
        <nav aria-label="Mobile">
          <ul className={styles.list}>
            {links.map((link) => {
              const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={styles.link}
                    aria-current={active ? "page" : undefined}
                    onClick={close}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Button href={cta.href} variant="white" className={styles.cta} onClick={close}>
          {cta.label}
        </Button>
      </div>
    </div>
  );
}
