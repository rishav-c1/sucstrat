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
 * A practice in the What We Do services index — number + title, an italic description, and its
 * "the work" sub-services.
 */
export interface Practice {
  num: string;
  title: string;
  description: string;
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

/** The diagram ("exhibit") variant rendered for a Know Us "Our method" framework. */
export type MethodDiagram = "loop" | "matrix" | "intensity" | "dominance";

/** One of the three supporting points shown under a method framework's thesis. */
export interface MethodPoint {
  label: string;
  text: string;
}

/**
 * A proprietary framework in the Know Us "Our method" section. The thesis renders as
 * `thesisPre` + a bold `thesisMark` + `thesisPost`; the title colours `emph`; the diagram
 * is selected by `type`.
 */
export interface MethodFramework {
  num: string;
  type: MethodDiagram;
  /** Category sub-label (index rail). */
  cat: string;
  /** Panel eyebrow (above the title). */
  eyebrow: string;
  /** Title before the coloured emphasis word(s). */
  titleLead: string;
  /** Coloured emphasis word(s) ending the title. */
  emph: string;
  /** Full title shown in the index rail. */
  fullTitle: string;
  exhibitLabel: string;
  thesisPre: string;
  thesisMark: string;
  thesisPost: string;
  points: MethodPoint[];
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
