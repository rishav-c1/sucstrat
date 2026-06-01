import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/primitives/Button";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { SectionHead } from "@/components/primitives/SectionHead";
import { Reveal } from "@/components/primitives/Reveal";
import { StatCounter } from "@/components/primitives/StatCounter";

describe("Button", () => {
  it("renders an external http link in a new tab with a safe rel", () => {
    render(
      <Button href="https://example.com" variant="white">
        Out
      </Button>,
    );
    const link = screen.getByRole("link", { name: "Out" });
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders a mailto link without a target", () => {
    render(<Button href="mailto:ashley@v3consultant.com">Mail</Button>);
    const link = screen.getByRole("link", { name: "Mail" });
    expect(link).toHaveAttribute("href", "mailto:ashley@v3consultant.com");
    expect(link).not.toHaveAttribute("target");
  });
});

describe("Eyebrow", () => {
  it("renders its text", () => {
    render(<Eyebrow>Our impact</Eyebrow>);
    expect(screen.getByText("Our impact")).toBeInTheDocument();
  });
});

describe("SectionHead", () => {
  it("renders an h2 plus eyebrow and lead", () => {
    render(<SectionHead eyebrow="What we do" title="Seven integrated practices" lead="One discipline." />);
    expect(
      screen.getByRole("heading", { level: 2, name: "Seven integrated practices" }),
    ).toBeInTheDocument();
    expect(screen.getByText("What we do")).toBeInTheDocument();
    expect(screen.getByText("One discipline.")).toBeInTheDocument();
  });
});

describe("Reveal", () => {
  it("renders its children", () => {
    render(
      <Reveal>
        <p>revealed content</p>
      </Reveal>,
    );
    expect(screen.getByText("revealed content")).toBeInTheDocument();
  });
});

describe("StatCounter", () => {
  it("renders the final value when IntersectionObserver is unavailable", () => {
    const { container } = render(<StatCounter to={127} suffix="+" />);
    expect(container.textContent).toContain("127+");
  });
});
