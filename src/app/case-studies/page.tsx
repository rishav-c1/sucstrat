import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES } from "@/content/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Selected SucStrat engagements. Detailed case studies coming soon.",
};

/** Stub index — case-study content is out of scope per CLAUDE.md. Route exists so nav never 404s. */
export default function CaseStudiesPage() {
  return (
    <div className="page-stub">
      <h1>Case studies.</h1>
      <p>Detailed case studies are coming soon.</p>
      <ul>
        {CASE_STUDIES.map((cs) => (
          <li key={cs.slug}>
            <Link href={`/case-studies/${cs.slug}`}>{cs.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
