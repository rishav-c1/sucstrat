import { SITE, LINKEDIN_URL } from "./site";
import type { ContactRow, ReachCard } from "./types";

/** Get in Touch — verbatim from html_static_pages/get_in_touch_mockup.html. */
export const GET_IN_TOUCH = {
  hero: {
    eyebrow: "Get in touch",
    title: "How can we help?",
    sub: "Give us a quick sense of who you are and what you're looking for. We'll take it from there.",
  },

  // "Reach us" routing cards (the mockup section has no heading — cards follow the hero).
  reach: {
    cards: [
      {
        title: "Clients",
        body: "A new or current connect exploring a mandate with us.",
        icon: "people",
        href: "#form",
        cta: "Send us a message",
      },
      {
        title: "Job Seekers",
        body: "Ready to build more than a career? See open paths.",
        icon: "briefcase",
        href: "/careers",
        cta: "SucStrat Careers",
      },
      {
        title: "Partners & Alliances",
        body: "Institutions and ecosystem partners exploring collaboration.",
        icon: "globe",
        href: `mailto:${SITE.email}?subject=Partnership`,
        cta: "Partner with us",
      },
      {
        title: "Media & PR",
        body: "Interviews, quotes, and press enquiries.",
        icon: "media",
        href: `mailto:${SITE.email}?subject=Media%20enquiry`,
        cta: "Media enquiries",
      },
      {
        title: "Speaking & Faculty",
        body: "Invite subject matter experts to a keynote, panel or class.",
        icon: "microphone",
        href: `mailto:${SITE.email}?subject=Speaking%20enquiry`,
        cta: "Speaking enquiries",
      },
      {
        title: "Fundraising & Expansion",
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
    intro: "Prefer to keep it simple? Just email us directly.",
    rows: [
      { icon: "mail", label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
      { icon: "linkedin", label: "LinkedIn", value: "linkedin.com/company/sucstrat", href: LINKEDIN_URL },
      { icon: "mapPin", label: "Visit", value: SITE.address },
    ] satisfies ContactRow[],
  },

  // The white form panel (fields + select options). Inquiry types mirror the "Reach us"
  // routing cards above (same categories, in the same order) so the two stay in sync.
  form: {
    inquiryTypes: [
      "Client mandate",
      "Job seekers",
      "Partners & alliances",
      "Media & PR",
      "Speaking & faculty",
      "Fundraising & expansion",
      "Other",
    ],
    countries: ["India", "United States", "United Kingdom", "Middle East", "Singapore", "Other"],
    // International dialing codes for the phone field (India default, then the firm's regions, then common others).
    dialCodes: [
      "+91",
      "+1",
      "+44",
      "+971",
      "+966",
      "+974",
      "+65",
      "+61",
      "+49",
      "+33",
      "+31",
      "+41",
      "+81",
      "+86",
      "+852",
      "+82",
      "+60",
      "+62",
      "+27",
      "+234",
      "+55",
      "+34",
      "+39",
      "+353",
      "+64",
    ],
    consentLabel: "I agree to be contacted regarding this enquiry.",
    success: {
      title: "Thank you for getting in touch",
      body: "We'll get back to you shortly.",
    },
  },
};
