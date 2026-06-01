"use client";

import { useEffect } from "react";

/**
 * Sets `data-scrolled` on <body> once the page scrolls past 20px, so the fixed
 * header can gain a hairline + shadow (driven entirely from CSS). Renders nothing.
 */
export function ScrollShadow() {
  useEffect(() => {
    const onScroll = () => {
      document.body.dataset.scrolled = window.scrollY > 20 ? "true" : "false";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
