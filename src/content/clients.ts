import type { LogoItem } from "./types";

/**
 * "Our clients" marquee — the shared client roster rendered on both Home (right after the
 * Pivot) and What We Do. Single source of truth so the two sections stay in sync.
 */
export const CLIENTS = {
  eyebrow: "Our clients",
  title: "The companies we build with",
  lead: "From market leaders to emerging disruptors, we partner with organisations that shape industries and scale with intent.",
  logos: [
    { name: "Hamar Hajaala", logo: "hamar-hajaala.jpg" },
    { name: "Dainikpuri", logo: "Dainikpuri.jpg" },
    { name: "Narayana", logo: "Narayana.jpg" },
    { name: "The Cake Room", logo: "The-Cake-Room.jpg" },
    { name: "Sparsh", logo: "sparsh.jpg" },
    { name: "Sree Vidyanikethan", logo: "Sree-Vidyanikethan.jpg" },
    { name: "New York", logo: "New-York.jpg" },
    { name: "Nav Bharath", logo: "Nav-Bharath.jpg" },
    { name: "Mohan Babu University", logo: "MBU.jpg" },
    { name: "Maison AVA", logo: "Maison-AVA.jpg" },
    { name: "Kutchina", logo: "kutchina.jpg" },
    { name: "Kespariya", logo: "kespariya.jpg" },
    { name: "AVA", logo: "AVA.jpg" },
    { name: "24 Frames", logo: "24-frames.jpg" },
    { name: "Valmar", logo: "valmar.jpg" },
    { name: "EY", logo: "ey-1.jpg" },
    { name: "Korn Ferry", logo: "Kf.jpg" },
    { name: "S&P", logo: "SP.jpg" },
    { name: "Hypolator", logo: "Hypolator.jpg" },
    { name: "RunTailor", logo: "RunTailor.jpg" },
    { name: "Kalaclap", logo: "kalaclap.jpg" },
    { name: "Papa Pawsome", logo: "papa-pawsome.jpg" },
    { name: "Therapeutics", logo: "therapeutics.jpg" },
    { name: "SpaceBasic", logo: "spacebasic.jpg" },
  ] satisfies LogoItem[],
};
