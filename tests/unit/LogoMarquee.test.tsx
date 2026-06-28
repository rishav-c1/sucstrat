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
  it("duplicates the group but hides the copy from the a11y tree (each brand announced once)", () => {
    const { container } = render(<LogoMarquee logos={LOGOS} />);
    const groups = container.querySelectorAll("ul");
    // Two identical groups for the seamless loop.
    expect(groups).toHaveLength(2);
    // The first is announced; the decorative duplicate is aria-hidden.
    expect(groups[0]).not.toHaveAttribute("aria-hidden");
    expect(groups[1]).toHaveAttribute("aria-hidden", "true");
  });

  it("gives each brand an accessible name exactly once", () => {
    render(<LogoMarquee logos={LOGOS} />);
    // The real alts come only from the announced group (the duplicate's imgs are alt="").
    for (const logo of LOGOS) {
      expect(screen.getAllByAltText(logo.alt)).toHaveLength(1);
    }
  });

  it("labels the marquee region", () => {
    render(<LogoMarquee logos={LOGOS} />);
    expect(screen.getByRole("group", { name: "Client logos" })).toBeInTheDocument();
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
