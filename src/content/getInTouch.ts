import { SITE, LINKEDIN_URL } from "./site";
import type { ContactRow, ReachCard } from "./types";

/** Get in Touch — verbatim from html_static_pages/get_in_touch_mockup.html. */
export const GET_IN_TOUCH = {
  hero: {
    eyebrow: "Get in touch",
    title: "How can we help?",
    sub: "Tell us who you are and what you're after, and we'll point you to the right person.",
  },

  // "Reach us" routing cards (the mockup section has no heading — cards follow the hero).
  reach: {
    cards: [
      {
        title: "Clients",
        body: "A new or current client exploring a mandate with us.",
        icon: "people",
        href: "#form",
        cta: "Send us a message",
      },
      {
        title: "Job seekers",
        body: "Ready to build more than a career? See open paths.",
        icon: "briefcase",
        href: "/careers",
        cta: "SucStrat Careers",
      },
      {
        title: "Partners & alliances",
        body: "Institutions and ecosystem partners exploring collaboration.",
        icon: "globe",
        href: `mailto:${SITE.email}?subject=Partnership`,
        cta: "Partner with us",
      },
      {
        title: "Media & press",
        body: "Interviews, quotes, and press enquiries.",
        icon: "media",
        href: `mailto:${SITE.email}?subject=Media%20enquiry`,
        cta: "Media enquiries",
      },
      {
        title: "Speaking & faculty",
        body: "Invite Vinay to a keynote, panel, or class.",
        icon: "microphone",
        href: `mailto:${SITE.email}?subject=Speaking%20enquiry`,
        cta: "Speaking enquiries",
      },
      {
        title: "Ventures & funding",
        body: "Investor-readiness, fundraising, and scale.",
        icon: "chartUp",
        href: "#form",
        cta: "Talk to us",
      },
    ] satisfies ReachCard[],
  },

  // Navy info panel of the "Let's talk" form block.
  contact: {
    eyebrow: "Reach us",
    title: "Let's talk",
    intro:
      "Tell us where you are and we'll take it from there. Prefer to keep it simple? Just email us directly.",
    rows: [
      { icon: "mail", label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
      { icon: "linkedin", label: "LinkedIn", value: "linkedin.com/company/sucstrat", href: LINKEDIN_URL },
      { icon: "mapPin", label: "Visit", value: "New Delhi, India" },
    ] satisfies ContactRow[],
  },

  // The white form panel (fields + select options, verbatim from the mockup).
  form: {
    inquiryTypes: [
      "Client mandate",
      "Advisory / consulting",
      "Partnership",
      "Media / press",
      "Speaking / faculty",
      "Careers",
      "Other",
    ],
    countries: ["India", "United States", "United Kingdom", "Middle East", "Singapore", "Other"],
    consentLabel: "I agree to be contacted regarding this enquiry.",
    success: {
      title: "Thank you, we've got it.",
      body: "Our team will be in touch shortly.",
    },
  },
};
