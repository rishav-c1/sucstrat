import type { IconCard } from "./types";
import { SITE } from "./site";

const APPLY = `mailto:${SITE.careersEmail}?subject=Application`;
const TALENT = `mailto:${SITE.careersEmail}?subject=Talent%20Community`;

export const CAREERS = {
  hero: {
    eyebrow: "Careers",
    title: "Build more than a career. Build legacies.",
    sub: "At SucStrat, we give consultants and professionals true ownership from day one. Your work will shape institutions, scale brands, and leave an impact that carries your name.",
    primaryCta: { label: "Apply now", href: APPLY },
    secondaryCta: { label: "Life at SucStrat", href: "#life" },
  },
  why: {
    eyebrow: "Why SucStrat",
    title: "We grow people as fast as we grow companies",
    lead: "We attract ambitious consultants and professionals who want to deliver outcomes that last.",
    cards: [
      { icon: "flag", title: "Ownership from day one", body: "Own outcomes and client relationships from your first week." },
      { icon: "trophy", title: "Outcomes over tenure", body: "You are recognised by the results you ship, not years served." },
      { icon: "people", title: "Coached to scale", body: "Direct mentorship from senior consultants and partners." },
      { icon: "realEstate", title: "Built to last", body: "Work that shapes institutions and carries your name." },
    ] satisfies IconCard[],
  },
  life: {
    eyebrow: "Life at SucStrat",
    title: "What you can expect",
    lead: "Professionalism with agility. Trusted with autonomy, backed with coaching, measured by outcomes.",
    cards: [
      { icon: "medal", title: "Ownership", body: "Lead initiatives with real client visibility." },
      { icon: "chartUp", title: "Growth", body: "Mentorship, skill-building, and leadership tracks." },
      { icon: "scales", title: "Flexibility", body: "Freedom in how you work; accountability in what you deliver." },
      { icon: "star", title: "Recognition", body: "Performance rewarded by results, not tenure." },
    ] satisfies IconCard[],
  },
  growth: {
    eyebrow: "Growth",
    title: "Advance your career",
    lead: "We invest in every professional who joins us.",
    cards: [
      { icon: "compass", title: "Coaching & Sponsorship", body: "Guidance from senior consultants and partners." },
      { icon: "skills", title: "Skills Development", body: "Training across strategy, GTM, operations, and data." },
      { icon: "target", title: "Client Impact", body: "Early exposure to high-stakes projects and transformations." },
      { icon: "steps", title: "Leadership Pathways", body: "A transparent path to senior roles and client ownership." },
    ] satisfies IconCard[],
  },
  beyond: {
    eyebrow: "Beyond SucStrat",
    title: "Jobs with our clients",
    lead: "We also connect exceptional professionals with our clients when that is the highest-impact path.",
    cards: [
      { icon: "briefcase", title: "Permanent Roles", body: "Join client leadership teams to drive long-term transformation." },
      { icon: "lightning", title: "Interim & Project Roles", body: "Lead time-bound, high-impact missions." },
    ] satisfies IconCard[],
  },
  cta: {
    primaryCta: { label: "Apply now", href: APPLY },
    secondaryCta: { label: "Join the talent community", href: TALENT },
  },
};
