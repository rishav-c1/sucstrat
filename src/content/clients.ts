import type { LogoItem } from "./types";

/**
 * "Our clients" marquee — the shared client roster rendered on both Home (right after the
 * Pivot) and What We Do. Single source of truth so the two sections stay in sync.
 */
export const CLIENTS = {
  eyebrow: "Our clients",
  title: "The companies we build with",
  lead: "From market leaders to emerging disruptors, we partner with organisations that shape industries and scale with intent.",
  // Ordered: the lead set first (Amar Ujala, Maison AVA, MBU, Nav Bharath, miCure, Kalaclap,
  // Sree Vidyanikethan), then the rest mixed. Shapoorji Pallonji (was the mislabelled "S&P")
  // removed. `hamar-hajaala.jpg` is the Amar Ujala wordmark.
  logos: [
    { name: "Amar Ujala", logo: "hamar-hajaala.jpg" },
    { name: "Maison AVA", logo: "Maison-AVA.jpg" },
    { name: "Mohan Babu University", logo: "MBU.jpg" },
    { name: "Nav Bharath", logo: "Nav-Bharath.jpg" },
    { name: "miCure Therapeutics", logo: "micure.jpeg" },
    { name: "Kalaclap", logo: "kalaclap.jpg" },
    { name: "Sree Vidyanikethan", logo: "Sree-Vidyanikethan.jpg" },
    { name: "CRIG", logo: "crig.png" },
    { name: "Narayana", logo: "Narayana.jpg" },
    { name: "RunTailor", logo: "RunTailor.jpg" },
    { name: "Dainikpuri", logo: "Dainikpuri.jpg" },
    { name: "SpaceBasic", logo: "spacebasic.jpg" },
    { name: "The Cake Room", logo: "The-Cake-Room.jpg" },
    { name: "Hypolator", logo: "Hypolator.jpg" },
    { name: "24 Frames", logo: "24-frames.jpg" },
    { name: "Sparsh", logo: "sparsh.jpg" },
    { name: "V Hub", logo: "v-hub.jpg" },
    { name: "Kutchina", logo: "kutchina.jpg" },
    { name: "Valmar", logo: "valmar.jpg" },
    { name: "Papa Pawsome", logo: "papa-pawsome.jpg" },
    { name: "New York", logo: "New-York.jpg" },
    { name: "Therapeutics", logo: "therapeutics.jpg" },
    { name: "AVA", logo: "AVA.jpg" },
    { name: "Kespariya", logo: "kespariya.jpg" },
  ] satisfies LogoItem[],
};
