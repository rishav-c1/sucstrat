import Image from "next/image";
import clsx from "clsx";
import logoWhite from "@static/logo_white.png";
import logoNavy from "@static/logo_navy.png";
import styles from "./Logo.module.css";

/**
 * SucStrat wordmark (provided in /static). `tone="light"` (default) is the white
 * lockup for dark/navy backgrounds; `tone="dark"` is the navy lockup for light
 * backgrounds. Width is derived from the intrinsic aspect ratio to keep CLS at 0.
 */
export function Logo({
  tone = "light",
  height = 40,
  priority = false,
  className,
}: {
  tone?: "light" | "dark";
  height?: number;
  priority?: boolean;
  className?: string;
}) {
  const src = tone === "light" ? logoWhite : logoNavy;
  const width = Math.round((height * src.width) / src.height);

  return (
    <Image
      src={src}
      // Accessible name is the brand only (the link goes to home). Keyword- or
      // tagline-stuffed alt text is a negative signal; the tagline lives in the H1/copy.
      alt="SucStrat"
      height={height}
      width={width}
      priority={priority}
      className={clsx(styles.logo, className)}
      // Pin the rendered height (width auto-scales) so the raw PNG can't render at its
      // intrinsic 2051×557 size under `images.unoptimized` (the GitHub Pages export).
      style={{ height, width: "auto" }}
    />
  );
}
