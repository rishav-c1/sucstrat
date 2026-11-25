import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

// next/image isn't needed in jsdom — render a plain <img> so we can assert alt text.
vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element -- jsdom test mock, not production
    <img src={src} alt={alt} />
  ),
}));

import { LogoGrid } from "@/components/sections/LogoGrid";
import { WHAT_WE_DO } from "@/content/whatWeDo";

describe("LogoGrid", () => {
  it("renders one labelled list item per logo, each named once", () => {
    const logos = [
      { src: "/logos/a.jpg", alt: "Alpha" },
      { src: "/logos/b.jpg", alt: "Beta" },
    ];
    render(<LogoGrid logos={logos} label="Partners" />);
    expect(screen.getByRole("list", { name: "Partners" })).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    for (const l of logos) expect(screen.getAllByAltText(l.alt)).toHaveLength(1);
  });

  it("ships a logo file for every banking institution", () => {
    for (const l of WHAT_WE_DO.banking.logos) expect(l.logo).toMatch(/^banks\/.+\.jpg$/);
  });
});
