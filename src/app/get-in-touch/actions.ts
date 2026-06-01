"use server";

import { z } from "zod";
import { createEmailTransport } from "@/lib/email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const schema = z.object({
  inquiryType: z.string().trim().min(1, "Please choose an inquiry type."),
  firstName: z.string().trim().min(2, "Please enter your first name.").max(80),
  lastName: z.string().trim().min(2, "Please enter your last name.").max(80),
  email: z.string().trim().min(1, "Please enter your email.").regex(EMAIL_RE, "Please enter a valid email address."),
  phone: z.string().trim().max(40).optional(),
  company: z.string().trim().min(2, "Please enter your organisation.").max(120),
  country: z.string().trim().min(1, "Please choose your country or region."),
  message: z.string().trim().min(10, "Please tell us a little more (at least 10 characters).").max(2000),
});

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
}

export async function submitEnquiry(_prev: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Honeypot: a hidden field only bots fill. Pretend success without sending.
  if (String(formData.get("company_url") ?? "").trim() !== "") {
    return { status: "success" };
  }

  // Consent is a required gate, validated separately from the message payload.
  if (String(formData.get("consent") ?? "") !== "yes") {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors: { consent: "Please agree to be contacted so we can reply." },
    };
  }

  const parsed = schema.safeParse({
    inquiryType: formData.get("inquiryType"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    country: formData.get("country"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      errors[key] ??= issue.message;
    }
    return { status: "error", message: "Please fix the highlighted fields.", errors };
  }

  try {
    await createEmailTransport().send(parsed.data);
  } catch {
    return {
      status: "error",
      message: "Something went wrong sending your message. Please email us directly.",
    };
  }

  return { status: "success" };
}
