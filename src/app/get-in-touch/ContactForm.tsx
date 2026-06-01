"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { GET_IN_TOUCH } from "@/content/getInTouch";
import { SITE } from "@/content/site";
import styles from "./ContactForm.module.css";

const F = GET_IN_TOUCH.form;

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  as?: "input" | "textarea" | "select";
  options?: readonly string[];
};

function Field({ id, label, type = "text", required = false, placeholder, autoComplete, as = "input", options }: FieldProps) {
  const shared = { id, name: id, required, className: styles.input, autoComplete };
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
    </div>
  );
}

/**
 * Static contact form: composes a prefilled `mailto:` on submit (works on any
 * static host, incl. GitHub Pages — no server). Native HTML5 validation enforces
 * the required fields + consent before the email app opens.
 * To take real submissions without a mailto handoff, point the <form> at a static
 * form provider (Web3Forms / Formspree) — see README.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const body = [
      `Inquiry type: ${get("inquiryType")}`,
      `Name: ${get("firstName")} ${get("lastName")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone") || "—"}`,
      `Company: ${get("company")}`,
      `Country / region: ${get("country")}`,
      "",
      get("message"),
    ].join("\n");
    const subject = `Enquiry — ${get("inquiryType") || "General"}${get("company") ? ` (${get("company")})` : ""}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.success} role="status">
        <h3 className={styles.successTitle}>{F.success.title}</h3>
        <p>
          Your email app should open with everything filled in. If it didn’t, email us directly at{" "}
          <a href={`mailto:${SITE.email}`} className={styles.leadLinkInline}>
            {SITE.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Field id="inquiryType" label="Inquiry type" required as="select" options={F.inquiryTypes} />

      <div className={styles.row}>
        <Field id="firstName" label="First name" required placeholder="First name" autoComplete="given-name" />
        <Field id="lastName" label="Last name" required placeholder="Last name" autoComplete="family-name" />
      </div>

      <div className={styles.row}>
        <Field id="email" label="Email" type="email" required placeholder="you@company.com" autoComplete="email" />
        <Field id="phone" label="Phone" type="tel" placeholder="+91" autoComplete="tel" />
      </div>

      <div className={styles.row}>
        <Field id="company" label="Company" required placeholder="Your organisation" autoComplete="organization" />
        <Field id="country" label="Country / region" required as="select" options={F.countries} />
      </div>

      <Field id="message" label="How can we help?" required as="textarea" placeholder="Tell us briefly about the mandate or question." />

      <div className={styles.consent}>
        <input id="consent" name="consent" type="checkbox" value="yes" required className={styles.checkbox} />
        <label htmlFor="consent" className={styles.consentLabel}>
          {F.consentLabel}
          <span aria-hidden="true"> *</span>
        </label>
      </div>

      <button type="submit" className={styles.submit}>
        Send message
      </button>
    </form>
  );
}
