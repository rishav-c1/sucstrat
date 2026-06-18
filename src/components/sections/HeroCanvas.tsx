"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroCanvas.module.css";

interface Line {
  amp: number;
  len: number;
  y: number;
  sp: number;
  w: number;
  a: number;
  col: string;
}

// Brand-blue tones (was light-on-navy) so the lines read as a visible flowing texture on the
// light hero bg. The centre is masked clear (see .media) so the headline stays crisp.
const LINES: Line[] = [
  { amp: 34, len: 300, y: 0.3, sp: 0.55, w: 1.6, a: 0.34, col: "68,118,161" },
  { amp: 50, len: 360, y: 0.46, sp: 0.42, w: 1.9, a: 0.42, col: "93,144,186" },
  { amp: 40, len: 320, y: 0.6, sp: 0.5, w: 1.6, a: 0.3, col: "53,92,125" },
  { amp: 58, len: 400, y: 0.73, sp: 0.34, w: 2.2, a: 0.4, col: "68,118,161" },
  { amp: 30, len: 270, y: 0.87, sp: 0.66, w: 1.4, a: 0.28, col: "93,144,186" },
];

/**
 * Decorative flowing "cadence" lines in the hero media panel. Draws one static
 * frame under reduced-motion; otherwise animates and pauses when the tab is hidden.
 */
export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let raf = 0;
    let running = true;
    let t = 0;

    const size = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      t += 0.006;
      for (let i = 0; i < LINES.length; i++) {
        const line = LINES[i];
        if (!line) continue;
        ctx.beginPath();
        for (let x = 0; x <= width; x += 10) {
          const y =
            line.y * height +
            Math.sin(x / line.len + t * line.sp + i) * line.amp +
            Math.sin(x / (line.len * 0.5) + t * line.sp * 1.4) * line.amp * 0.3;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(${line.col},${line.a})`;
        ctx.lineWidth = line.w;
        ctx.stroke();
      }
      if (running && !reduced) raf = requestAnimationFrame(draw);
    };

    size();
    draw();

    const onResize = () => {
      size();
      if (reduced) draw();
    };
    const onVisibility = () => {
      running = !document.hidden;
      if (running && !reduced) raf = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
