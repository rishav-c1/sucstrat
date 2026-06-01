/** Shared content-layer types (used across pages). */

/** Names of the decorative line icons in src/components/primitives/Icon.tsx. */
export type IconName =
  | "compass"
  | "barChart"
  | "search"
  | "people"
  | "checkCircle"
  | "education"
  | "media"
  | "consumer"
  | "healthcare"
  | "industrial"
  | "technology"
  | "publicPolicy"
  | "startups"
  | "socialImpact"
  | "realEstate"
  | "digital"
  | "skills"
  | "dashboard"
  | "lightning"
  | "refresh"
  | "microphone"
  | "trophy"
  | "faculty"
  | "layers"
  | "flag"
  | "medal"
  | "chartUp"
  | "scales"
  | "star"
  | "target"
  | "steps"
  | "briefcase";

export interface Cta {
  label: string;
  href: string;
}

/** A count-up metric in a stats band. */
export interface Metric {
  to: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

/** A case-study card. `logo` is a filename under LOGO_BASE; stat is static text. */
export interface CaseItem {
  slug: string;
  name: string;
  eyebrow: string;
  stat: { prefix?: string; value: string; suffix?: string };
  statLabel: string;
  body: string;
  logo: string;
}

/** A map region used by the Home "Global impact" world map. */
export interface Region {
  id: string;
  name: string;
  eyebrow: "Headquarters" | "Engagement";
  hq?: boolean;
  countries: string[];
  foot?: string;
  sectors: string[];
}

/** Founder bio block content (Home + Know Us). */
export interface FounderContent {
  eyebrow: string;
  name: string;
  role: string;
  highlight: string;
  portraitAlt: string;
  tiles: { value: string; label: string }[];
  paragraphs: string[];
  credentialsLabel: string;
  credentials: { org: string; role: string }[];
}

/** A title + body card with a line icon (Careers value cards, Know Us "how we work"). */
export interface IconCard {
  title: string;
  body: string;
  icon: IconName;
}

/** A sector tile with a line icon (What We Do "Industries we serve"). */
export interface IndustryTile {
  name: string;
  icon: IconName;
}

/** A list card with a line icon (Know Us "Impact at a glance"). */
export interface ImpactGlanceCard {
  label: string;
  items: string[];
  icon: IconName;
}

/** A logo (rendered via next/image). `logo` is a filename under LOGO_BASE. */
export interface LogoItem {
  name: string;
  logo: string;
}

/** A "Reach us" routing card on Get in Touch — icon + blurb + a link (mailto / route / #form). */
export interface ReachCard {
  title: string;
  body: string;
  icon: IconName;
  href: string;
  cta: string;
}

/** An external article/insight link card (Knowledge). */
export interface InsightCard {
  tag: string;
  title: string;
  desc: string;
  source: string;
  href: string;
  tile: "navy" | "g1" | "g2" | "light";
}
