import type { ReactNode } from "react";
import type { IconName } from "@/content/types";

/**
 * Decorative line-icon registry — paths copied verbatim from the reference mockups
 * (24×24, stroke-based). Rendered with `aria-hidden` (cards convey meaning via text).
 */
const PATHS: Record<IconName, ReactNode> = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </>
  ),
  barChart: (
    <>
      <line x1="5" y1="20" x2="5" y2="12" />
      <line x1="12" y1="20" x2="12" y2="5" />
      <line x1="19" y1="20" x2="19" y2="14" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.5" y2="16.5" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3.3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16.5 5.2a3.3 3.3 0 0 1 0 6.6" />
      <path d="M15 20a6 6 0 0 0-1-3.3" />
    </>
  ),
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </>
  ),
  education: (
    <>
      <path d="M2 8l10-4 10 4-10 4z" />
      <path d="M6 10v4c0 1.4 2.7 3 6 3s6-1.6 6-3v-4" />
    </>
  ),
  media: (
    <>
      <circle cx="6" cy="18" r="1.4" />
      <path d="M6 12a6 6 0 0 1 6 6" />
      <path d="M6 6a12 12 0 0 1 12 12" />
    </>
  ),
  consumer: (
    <>
      <path d="M6 8h12l-1 12H7z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </>
  ),
  healthcare: <path d="M3 12h4l2-6 3 12 2-6h7" />,
  industrial: <path d="M3 21V10l6 4V10l6 4V6l6 4v11z" />,
  technology: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="1.5" />
      <rect x="9.5" y="9.5" width="5" height="5" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </>
  ),
  publicPolicy: (
    <>
      <path d="M3 9l9-5 9 5" />
      <path d="M5 9v8M10 9v8M14 9v8M19 9v8" />
      <path d="M3 20h18" />
    </>
  ),
  startups: (
    <>
      <path d="M5 15c-2 1-3 5-3 5s4-1 5-3" />
      <path d="M9.5 13.5l-3-1 1-3c2-5 6-7 10-7 0 4-2 8-7 10l-3 1z" />
      <circle cx="14" cy="9" r="1.2" />
    </>
  ),
  socialImpact: <path d="M12 21s-7-4.5-9-9a4.5 4.5 0 0 1 9-2 4.5 4.5 0 0 1 9 2c-2 4.5-9 9-9 9z" />,
  realEstate: (
    <>
      <rect x="4" y="3" width="9" height="18" />
      <path d="M13 8h7v13h-7" />
      <path d="M7 7h2M7 11h2M7 15h2M16 12h1M16 16h1" />
    </>
  ),
  digital: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </>
  ),
  skills: (
    <>
      <path d="M12 6c-2-1.4-5-2-8-2v14c3 0 6 .6 8 2 2-1.4 5-2 8-2V4c-3 0-6 .6-8 2z" />
      <path d="M12 6v14" />
    </>
  ),
  dashboard: (
    <>
      <rect x="3" y="3" width="18" height="13" rx="1.5" />
      <path d="M7 12l3-3 2 2 4-4" />
      <line x1="12" y1="16" x2="12" y2="20" />
      <line x1="8" y1="20" x2="16" y2="20" />
    </>
  ),
  lightning: <path d="M13 2 L4 14 H11 L10 22 L20 9 H13 Z" />,
  refresh: (
    <>
      <path d="M21 12a9 9 0 1 1-2.64-6.36" />
      <path d="M21 3v6h-6" />
    </>
  ),
  microphone: (
    <>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </>
  ),
  trophy: (
    <>
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
      <path d="M7 5H4v2a3 3 0 0 0 3 3" />
      <path d="M17 5h3v2a3 3 0 0 1-3 3" />
    </>
  ),
  faculty: (
    <>
      <path d="M2 8l10-4 10 4-10 4z" />
      <path d="M6 10v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4" />
      <line x1="22" y1="8" x2="22" y2="13" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  flag: (
    <>
      <path d="M5 21V4" />
      <path d="M5 4h12l-2 3.5L17 11H5" />
    </>
  ),
  medal: (
    <>
      <circle cx="8" cy="15" r="5" />
      <path d="M11.5 11.5L21 2" />
      <path d="M17 6l3 3" />
    </>
  ),
  chartUp: (
    <>
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M15 8h6v6" />
    </>
  ),
  scales: (
    <>
      <path d="M12 4v16" />
      <path d="M6 8h12" />
      <path d="M6 8l-2.5 6a3 3 0 0 0 5 0z" />
      <path d="M18 8l-2.5 6a3 3 0 0 0 5 0z" />
      <path d="M8 20h8" />
    </>
  ),
  star: <path d="M12 3l2.7 5.5 6 .9-4.4 4.3 1 6-5.3-2.8-5.3 2.8 1-6L3.3 9.4l6-.9z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
    </>
  ),
  steps: <path d="M4 18h4v-4h4v-4h4V6h4" />,
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </>
  ),
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}
