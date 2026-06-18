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
  | "briefcase"
  | "globe"
  | "mail"
  | "linkedin"
  | "mapPin";

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

/**
 * A practice in the What We Do services index — number + title, a point-of-view line and a
 * second supporting line for the detail card, plus its "the work" sub-services.
 */
export interface Practice {
  num: string;
  title: string;
  pov: string;
  detail: string;
  services: string[];
}

/**
 * A brand/client/award logo. Logo image assets are deferred (v4.0), so the `name` renders
 * as a labelled placeholder; `logo` (a future local filename) is optional until supplied.
 */
export interface LogoItem {
  name: string;
  logo?: string;
}

/** An engagement archetype (Know Us "How we engage"). */
export interface EngagementModel {
  name: string;
  duration: string;
  model: string;
  oneLine: string;
  body: string;
  outputs: string[];
}

/** A "Leadership pedigree" grouping (Know Us). */
export interface PedigreeGroup {
  label: string;
  orgs: string[];
}

/** One numbered "How it works" step inside a proprietary framework card. */
export interface FrameworkStep {
  n: string;
  text: string;
}

/** A proprietary framework (Know Us) — theory only: tagline, insight, three steps. */
export interface FrameworkCard {
  num: string;
  title: string;
  tagline: string;
  insight: string;
  steps: FrameworkStep[];
}

/** A "Reach us" routing card on Get in Touch — icon + blurb + a link (mailto / route / #form). */
export interface ReachCard {
  title: string;
  body: string;
  icon: IconName;
  href: string;
  cta: string;
}

/** A contact row in the Get in Touch form's navy panel (Email / LinkedIn / Visit). */
export interface ContactRow {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
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
