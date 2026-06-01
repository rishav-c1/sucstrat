import type { JsonLdData } from "@/lib/jsonld";

/**
 * Renders a JSON-LD <script>. Content is first-party (built in src/lib/jsonld.ts),
 * so dangerouslySetInnerHTML is safe here. `<` is escaped to avoid breaking out of
 * the script element.
 */
export function JsonLd({ data }: { data: JsonLdData | JsonLdData[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
