import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/content/site";

// Only the four known slugs are valid; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.name} case study`, // TODO(seo-copy): finalise when content lands
    description: `Case study: ${cs.name}. Coming soon.`,
  };
}

/** Stub detail — content out of scope per CLAUDE.md. */
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <div className="page-stub">
      <h1>{cs.name}</h1>
      <p>Case study coming soon.</p>
    </div>
  );
}
