/** The Get in Touch email transport — the only backend in the project. */

export interface ContactMessage {
  inquiryType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  country: string;
  message: string;
}

export interface EmailTransport {
  send(message: ContactMessage): Promise<void>;
}

/** Default/dev transport — logs the enquiry. Replace with a real provider later. */
class ConsoleEmailTransport implements EmailTransport {
  async send(message: ContactMessage): Promise<void> {
    console.info("[get-in-touch] new enquiry:", JSON.stringify(message));
  }
}

/**
 * TODO(provider): wire a real transport (intended: Resend) behind an env flag,
 * e.g. `if (process.env.RESEND_API_KEY) return new ResendEmailTransport(...)`.
 * Until then we log in dev so the flow is fully testable.
 */
export function createEmailTransport(): EmailTransport {
  return new ConsoleEmailTransport();
}
