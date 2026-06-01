"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import clsx from "clsx";

/**
 * Nav link that marks itself current (aria-current + active class) based on the
 * pathname. Client leaf, but its text is server-rendered (so it stays indexable).
 */
export function NavLink({
  href,
  children,
  className,
  activeClassName,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={clsx(className, active && activeClassName)}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
