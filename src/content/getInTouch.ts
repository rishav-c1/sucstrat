import { SITE } from "./site";
import type { ReachCard } from "./types";

/** Get in Touch — verbatim from html_static_pages/get_in_touch_mockup.html. */
export const GET_IN_TOUCH = {
  hero: {
    eyebrow: "Get in touch",
    title: "How can we help?",
    sub: "Tell us who you are and what you're after, and we'll point you to the right person.",
  },

  reach: {
    eyebrow: "Reach us",
    cards: [
      {
        title: "Clients",
        body: "A new or current client exploring a mandate with us.",
        icon: "target",
        href: "#form",
        cta: "Start a conversation",
      },
      {
        title: "Job seekers",
        body: "Ready to build more than a career? See open paths.",
        icon: "briefcase",
        href: "/careers",
        cta: "See open paths",
      },
      {
        title: "Partners & alliances",
        body: "Institutions and ecosystem partners exploring collaboration.",
        icon: "people",
        href: `mailto:${SITE.email}?subject=Partnership`,
        cta: "Email us",
      },
      {
        title: "Media & press",
        body: "Interviews, quotes, and press enquiries.",
        icon: "media",
        href: `mailto:${SITE.email}?subject=Media%20enquiry`,
        cta: "Email us",
      },
      {
        title: "Speaking & faculty",
        body: "Invite Vinay to a keynote, panel, or class.",
        icon: "microphone",
        href: `mailto:${SITE.email}?subject=Speaking%20enquiry`,
        cta: "Email us",
      },
      {
        title: "Ventures & funding",
        body: "Investor-readiness, fundraising, and scale.",
        icon: "chartUp",
        href: "#form",
        cta: "Start a conversation",
      },
    ] satisfies ReachCard[],
  },

  form: {
    eyebrow: "Let's talk",
    title: "Let's talk",
    leadBefore: "Tell us where you are and we'll take it from there. Prefer to keep it simple? ",
    leadLinkLabel: "Just email us directly.",
    // Select options (verbatim from the mockup).
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

  aside: {
    heading: "Prefer email?",
    email: SITE.email,
    linkedinLabel: "Connect on LinkedIn",
    note: "We typically reply within two business days.",
  },
};
