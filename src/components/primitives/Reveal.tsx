"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import clsx from "clsx";
import styles from "./Reveal.module.css";

/**
 * Fade/translate-in-on-scroll wrapper (IntersectionObserver, fires once).
 * Content is visible by default; the hidden→reveal animation is gated behind
 * `html[data-js]` (set pre-paint in the root layout) so no-JS / no-IO users
 * always see content, and reduced-motion is honoured via CSS.
 */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={clsx(styles.reveal, shown && styles.shown, className)}>
      {children}
    </div>
  );
}
