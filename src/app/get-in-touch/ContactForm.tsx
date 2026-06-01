"use client";

import { useActionState } from "react";
import { GET_IN_TOUCH } from "@/content/getInTouch";
import { submitEnquiry, type ContactFormState } from "./actions";
import styles from "./ContactForm.module.css";

const initialState: ContactFormState = { status: "idle" };
const F = GET_IN_TOUCH.form;

type FieldProps = {
  id: string;
  label: string;
  state: ContactFormState;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  as?: "input" | "textarea" | "select";
  options?: readonly string[];
};

function Field({
  id,
  label,
  state,
  type = "text",
  required = false,
  placeholder,
  autoComplete,
  as = "input",
  options,
}: FieldProps) {
  const error = state.errors?.[id];
  const describedBy = error ? `${id}-error` : undefined;
  const shared = {
    id,
    name: id,
    required,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
    className: styles.input,
    autoComplete,
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
        <p id={`${id}-error`} className={styles.fieldError} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);

  if (state.status === "success") {
    return (
      <div className={styles.success} role="status">
        <h3 className={styles.successTitle}>{F.success.title}</h3>
        <p>{F.success.body}</p>
      </div>
    );
  }

  const consentError = state.errors?.consent;

  return (
    <form action={formAction} className={styles.form} noValidate>
      {state.status === "error" && state.message ? (
        <p className={styles.formError} role="alert">
          {state.message}
        </p>
      ) : null}

      <Field id="inquiryType" label="Inquiry type" state={state} required as="select" options={F.inquiryTypes} />

      <div className={styles.row}>
        <Field id="firstName" label="First name" state={state} required placeholder="First name" autoComplete="given-name" />
        <Field id="lastName" label="Last name" state={state} required placeholder="Last name" autoComplete="family-name" />
      </div>

      <div className={styles.row}>
        <Field id="email" label="Email" type="email" state={state} required placeholder="you@company.com" autoComplete="email" />
        <Field id="phone" label="Phone" type="tel" state={state} placeholder="+91" autoComplete="tel" />
      </div>

      <div className={styles.row}>
        <Field id="company" label="Company" state={state} required placeholder="Your organisation" autoComplete="organization" />
        <Field id="country" label="Country / region" state={state} required as="select" options={F.countries} />
      </div>

      <Field
        id="message"
        label="How can we help?"
        state={state}
        required
        as="textarea"
        placeholder="Tell us briefly about the mandate or question."
      />

      <div className={styles.consent}>
        <input
          id="consent"
          name="consent"
          type="checkbox"
          value="yes"
          required
          aria-invalid={consentError ? true : undefined}
          aria-describedby={consentError ? "consent-error" : undefined}
          className={styles.checkbox}
        />
        <label htmlFor="consent" className={styles.consentLabel}>
          {F.consentLabel}
          <span aria-hidden="true"> *</span>
        </label>
      </div>
      {consentError ? (
        <p id="consent-error" className={styles.fieldError} role="alert">
          {consentError}
        </p>
      ) : null}

      {/* Honeypot — hidden from users, catches bots. */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="company_url">Company URL</label>
        <input id="company_url" name="company_url" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className={styles.submit} disabled={pending}>
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
