import type { LogoItem } from "./types";

/**
 * "Our clients" marquee — the shared client roster rendered on both Home (right after the
 * Pivot) and What We Do. Single source of truth so the two sections stay in sync.
 */
export const CLIENTS = {
  eyebrow: "Our clients",
  title: "The companies we build with",
  lead: "From market leaders to emerging disruptors, we partner with organisations that shape industries and scale with intent.",
  // Ordered (owner-set, Nov 2026): MBU, Physics Wallah, Maison AVA, Narayana, Dainik Jagran,
  // Nav Bharath; then the other Nov 2026 additions (India Donates, Prarthana School, Aatm Nirbhar,
  // Greater Valley School); then the rest, with Kutchina and Papa Pawsome last. Shapoorji
  // Pallonji (was the mislabelled "S&P") removed. `hamar-hajaala.jpg` is the Amar Ujala wordmark
  // and `Dainikpuri.jpg` is the Dainik Jagran logo (the mockup mislabelled it "Dainikpuri"). The
  // Nov 2026 additions' logos were pulled from each client's own site.
  // TODO(content): India Donates' site only serves a 106px logo — swap in a higher-res file.
  logos: [
    { name: "Mohan Babu University", logo: "MBU.jpg" },
    { name: "Physics Wallah", logo: "Physics-Wallah.jpg" },
    { name: "Maison AVA", logo: "Maison-AVA.jpg" },
    { name: "Narayana", logo: "Narayana.jpg" },
    { name: "Dainik Jagran", logo: "Dainikpuri.jpg" },
    { name: "Nav Bharath", logo: "Nav-Bharath.jpg" },
    { name: "India Donates", logo: "India-Donates.jpg" },
    { name: "Prarthana School", logo: "Prarthana-School.jpg" },
    { name: "Aatm Nirbhar", logo: "Aatm-Nirbhar.jpg" },
    { name: "Greater Valley School", logo: "Greater-Valley-School.jpg" },
    { name: "Amar Ujala", logo: "hamar-hajaala.jpg" },
    { name: "miCure Therapeutics", logo: "micure.jpeg" },
    { name: "Kalaclap", logo: "kalaclap.jpg" },
    { name: "Sree Vidyanikethan", logo: "Sree-Vidyanikethan.jpg" },
    { name: "CRIG", logo: "crig.png" },
    { name: "RunTailor", logo: "RunTailor.jpg" },
    { name: "SpaceBasic", logo: "spacebasic.jpg" },
    { name: "The Cake Room", logo: "The-Cake-Room.jpg" },
    { name: "Hypolator", logo: "Hypolator.jpg" },
    { name: "24 Frames", logo: "24-frames.jpg" },
    { name: "Sparsh", logo: "sparsh.jpg" },
    { name: "V Hub", logo: "v-hub.jpg" },
    { name: "Valmar", logo: "valmar.jpg" },
    { name: "New York", logo: "New-York.jpg" },
    { name: "Therapeutics", logo: "therapeutics.jpg" },
    { name: "AVA", logo: "AVA.jpg" },
    { name: "Kespariya", logo: "kespariya.jpg" },
    { name: "Kutchina", logo: "kutchina.jpg" },
    { name: "Papa Pawsome", logo: "papa-pawsome.jpg" },
  ] satisfies LogoItem[],
};
