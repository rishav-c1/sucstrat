"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Logo } from "@/components/layout/Logo";
import { GET_IN_TOUCH } from "@/content/getInTouch";
import { SITE, WEB3FORMS_ACCESS_KEY } from "@/content/site";
import styles from "./ContactForm.module.css";

const F = GET_IN_TOUCH.form;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Country / region -> default phone dialing code (auto-filled when a region is chosen).
const COUNTRY_DIAL: Record<string, string> = {
  India: "+91",
  "United States": "+1",
  "United Kingdom": "+44",
  "Middle East": "+971",
  Singapore: "+65",
};

type Errors = Partial<Record<string, string>>;

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  as?: "input" | "textarea" | "select";
  options?: readonly string[];
  error?: string;
};

function Field({
  id,
  label,
  type = "text",
  required = false,
  placeholder,
  autoComplete,
  as = "input",
  options,
  error,
}: FieldProps) {
  const errorId = `${id}-error`;
  const shared = {
    id,
    name: id,
    className: styles.input,
    autoComplete,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
  };
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {as === "textarea" ? (
        <textarea rows={5} placeholder={placeholder} {...shared} />
      ) : as === "select" ? (
        <select defaultValue="" {...shared}>
          <option value="" disabled>
            Select one…
          </option>
          {options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} placeholder={placeholder} {...shared} />
      )}
      {error ? (
        <p id={errorId} className={styles.fieldError}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Static contact form: validates on the client, then composes a prefilled `mailto:` on
 * submit (works on any static host, incl. GitHub Pages — no server). Custom inline errors,
 * a hidden honeypot, and a disabled-on-submit button are all client-side.
 * To take real submissions without a mailto handoff, point the <form> at a static form
 * provider (Web3Forms / Formspree) — see README.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [country, setCountry] = useState("");
  const [phoneCode, setPhoneCode] = useState("+91");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    // Honeypot: a real user never fills the off-screen "website" field. Drop silently.
    if (get("website")) {
      setSubmitted(true);
      return;
    }

    const next: Errors = {};
    if (!get("inquiryType")) next.inquiryType = "Please select an inquiry type.";
    if (!get("firstName")) next.firstName = "Please enter your first name.";
    if (!get("lastName")) next.lastName = "Please enter your last name.";
    const email = get("email");
    if (!email) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(email)) next.email = "Please enter a valid email address.";
    if (!get("company")) next.company = "Please enter your company.";
    if (!get("country")) next.country = "Please select a country or region.";
    else if (get("country") === "Other" && !get("countryOther")) next.country = "Please enter your country or region.";
    if (!get("message")) next.message = "Please tell us how we can help.";
    if (data.get("consent") !== "yes") next.consent = "Please confirm your consent to proceed.";

    if (Object.keys(next).length > 0) {
      setErrors(next);
      const first = form.querySelector<HTMLElement>('[aria-invalid="true"]');
      first?.focus();
      return;
    }

    setErrors({});
    setSending(true);
    // Web3Forms delivers the submission to SITE.email server-side — no mail app, works on the
    // static (GitHub Pages) host. `replyto` lets us reply straight to the sender.
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New enquiry: ${get("inquiryType")} — ${get("firstName")} ${get("lastName")}${
            get("company") ? ` (${get("company")})` : ""
          }`,
          from_name: `${get("firstName")} ${get("lastName")}`,
          replyto: email,
          "Inquiry type": get("inquiryType"),
          Name: `${get("firstName")} ${get("lastName")}`,
          Email: email,
          Phone: get("phone") ? `${get("phoneCode")} ${get("phone")}` : "Not provided",
          Company: get("company"),
          "Country / region": get("country") === "Other" ? get("countryOther") || "Other" : get("country"),
          Message: get("message"),
        }),
      });
      const result = (await res.json()) as { success?: boolean };
      if (res.ok && result.success) {
        setSubmitted(true);
      } else {
        setSending(false);
        setErrors({ submit: "Something went wrong sending your message. Please try again, or email us directly." });
      }
    } catch {
      setSending(false);
      setErrors({ submit: "We couldn't reach the server. Please check your connection and try again, or email us directly." });
    }
  }

  if (submitted) {
    return (
      <div className={styles.thanks} role="status">
        <Logo tone="light" height={30} className={styles.thanksLogo} />
        <span className={styles.thanksCheck} aria-hidden="true">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <h3 className={styles.thanksTitle}>{F.success.title}</h3>
        <p className={styles.thanksBody}>{F.success.body}</p>
        <div className={styles.thanksDivider} aria-hidden="true" />
        <p className={styles.thanksEmail}>
          Prefer email? <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      {/* Honeypot: off-screen, not tabbable, ignored by real users. */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Field id="inquiryType" label="Inquiry type" required as="select" options={F.inquiryTypes} error={errors.inquiryType} />

      <div className={styles.row}>
        <Field id="firstName" label="First name" required placeholder="First name" autoComplete="given-name" error={errors.firstName} />
        <Field id="lastName" label="Last name" required placeholder="Last name" autoComplete="family-name" error={errors.lastName} />
      </div>

      <div className={styles.row}>
        <Field id="company" label="Company" required placeholder="Your organisation" autoComplete="organization" error={errors.company} />
        <div className={styles.field}>
          <label htmlFor="country" className={styles.label}>
            Country / region<span aria-hidden="true"> *</span>
          </label>
          <select
            id="country"
            name="country"
            defaultValue=""
            onChange={(e) => {
              const value = e.target.value;
              setCountry(value);
              if (COUNTRY_DIAL[value]) setPhoneCode(COUNTRY_DIAL[value]);
            }}
            aria-invalid={errors.country ? true : undefined}
            aria-describedby={errors.country ? "country-error" : undefined}
            className={styles.input}
          >
            <option value="" disabled>
              Select one…
            </option>
            {F.countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {country === "Other" ? (
            <input
              id="countryOther"
              name="countryOther"
              type="text"
              placeholder="Your country or region"
              aria-label="Your country or region"
              className={`${styles.input} ${styles.subInput}`}
            />
          ) : null}
          {errors.country ? (
            <p id="country-error" className={styles.fieldError}>
              {errors.country}
            </p>
          ) : null}
        </div>
      </div>

      <div className={styles.row}>
        <Field id="email" label="Email" type="email" required placeholder="Your work email" autoComplete="email" error={errors.email} />
        <div className={styles.field}>
          <label htmlFor="phone" className={styles.label}>
            Phone
          </label>
          <div className={styles.phoneGroup}>
            <select
              id="phoneCode"
              name="phoneCode"
              value={phoneCode}
              onChange={(e) => setPhoneCode(e.target.value)}
              aria-label="Country dialing code"
              className={`${styles.input} ${styles.dialCode}`}
            >
              {F.dialCodes.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone number"
              autoComplete="tel"
              className={`${styles.input} ${styles.phoneNum}`}
            />
          </div>
        </div>
      </div>

      <Field
        id="message"
        label="How can we help?"
        required
        as="textarea"
        placeholder="Tell us briefly about the mandate or question."
        error={errors.message}
      />

      <div className={styles.consent}>
        <input id="consent" name="consent" type="checkbox" value="yes" className={styles.checkbox} aria-invalid={errors.consent ? true : undefined} />
        <label htmlFor="consent" className={styles.consentLabel}>
          {F.consentLabel}
          <span aria-hidden="true"> *</span>
        </label>
      </div>
      {errors.consent ? <p className={styles.fieldError}>{errors.consent}</p> : null}

      {errors.submit ? (
        <p className={styles.fieldError} role="alert">
          {errors.submit}{" "}
          <a href={`mailto:${SITE.email}`} className={styles.leadLinkInline}>
            {SITE.email}
          </a>
        </p>
      ) : null}

      <button type="submit" className={styles.submit} disabled={sending}>
        {sending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
