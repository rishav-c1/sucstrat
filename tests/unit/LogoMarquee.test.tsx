import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

// next/image isn't needed in jsdom — render a plain <img> so we can assert alt text.
vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element -- jsdom test mock, not production
    <img src={src} alt={alt} />
  ),
}));

import { LogoMarquee } from "@/components/sections/LogoMarquee";

const LOGOS = [
  { src: "/logos/a.jpg", alt: "Alpha" },
  { src: "/logos/b.jpg", alt: "Beta" },
  { src: "/logos/c.jpg", alt: "Gamma" },
];

describe("LogoMarquee", () => {
  it("repeats a short roster to fill both halves, announcing only the first group", () => {
    const { container } = render(<LogoMarquee logos={LOGOS} />);
    const groups = [...container.querySelectorAll("ul")];
    // 3 logos → ceil(16 / 3) = 6 groups per half, 12 in all (two identical halves for the loop).
    expect(groups).toHaveLength(12);
    // Only the first is announced; every repeat is aria-hidden.
    expect(groups[0]).not.toHaveAttribute("aria-hidden");
    for (const g of groups.slice(1)) expect(g).toHaveAttribute("aria-hidden", "true");
  });

  it("uses exactly two groups when the roster already overfills a half", () => {
    const many = Array.from({ length: 20 }, (_, i) => ({ src: `/logos/${i}.jpg`, alt: `Logo ${i}` }));
    const { container } = render(<LogoMarquee logos={many} />);
    expect(container.querySelectorAll("ul")).toHaveLength(2);
  });

  it("gives each brand an accessible name exactly once", () => {
    render(<LogoMarquee logos={LOGOS} />);
    // The real alts come only from the announced group (the duplicate's imgs are alt="").
    for (const logo of LOGOS) {
      expect(screen.getAllByAltText(logo.alt)).toHaveLength(1);
    }
  });

  it("labels the marquee region (default and custom)", () => {
    const { unmount } = render(<LogoMarquee logos={LOGOS} />);
    expect(screen.getByRole("group", { name: "Client logos" })).toBeInTheDocument();
    unmount();
    render(<LogoMarquee logos={LOGOS} label="Bank logos" />);
    expect(screen.getByRole("group", { name: "Bank logos" })).toBeInTheDocument();
  });

  it("pauses the scroll on hover and resumes on leave", () => {
    const { container } = render(<LogoMarquee logos={LOGOS} />);
    const region = screen.getByRole("group", { name: "Client logos" });
    const track = container.querySelector("[data-paused]");
    expect(track).toHaveAttribute("data-paused", "false");
    fireEvent.mouseEnter(region);
    expect(track).toHaveAttribute("data-paused", "true");
    fireEvent.mouseLeave(region);
    expect(track).toHaveAttribute("data-paused", "false");
  });
});
