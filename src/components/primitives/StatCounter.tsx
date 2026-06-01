"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  /** Target integer to count up to. */
  to: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  className?: string;
  /** Class applied to the prefix/suffix spans (e.g. to render them smaller/blue). */
  affixClassName?: string;
}

/**
 * Counts up to `to` when it scrolls into view. The initial state is the FINAL
 * value, so SSR / no-JS / reduced-motion always render the correct, indexable
 * number (no layout shift). The count-up animation only runs client-side, when
 * motion is allowed and the element enters the viewport.
 */
export function StatCounter({
  to,
  prefix = "",
  suffix = "",
  durationMs = 1500,
  className,
  affixClassName,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Already showing the final value — nothing to animate.
    if (reduced || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            observer.unobserve(entry.target);
            const start = performance.now();
            const step = (now: number) => {
              const progress = Math.min((now - start) / durationMs, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(eased * to));
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, durationMs]);

  return (
    <span ref={ref} className={className}>
      {prefix ? <span className={affixClassName}>{prefix}</span> : null}
      {value.toLocaleString("en-IN")}
      {suffix ? <span className={affixClassName}>{suffix}</span> : null}
    </span>
  );
}
