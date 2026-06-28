import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MethodFrameworks } from "@/components/sections/MethodFrameworks";
import styles from "@/components/sections/MethodFrameworks.module.css";
import type { MethodFramework } from "@/content/types";

const FRAMEWORKS: MethodFramework[] = [
  {
    num: "01",
    type: "loop",
    cat: "Scaling System",
    eyebrow: "Scaling System",
    titleLead: "The D Scale-Up",
    emph: "Loop",
    fullTitle: "The D Scale-Up Loop",
    exhibitLabel: "The continuous loop",
    thesisPre: "Pre ",
    thesisMark: "mark",
    thesisPost: " post.",
    points: [
      { label: "A", text: "a" },
      { label: "B", text: "b" },
      { label: "C", text: "c" },
    ],
  },
  {
    num: "02",
    type: "matrix",
    cat: "Effort × Timing",
    eyebrow: "Effort × Timing",
    titleLead: "The Momentum",
    emph: "Matrix",
    fullTitle: "The Momentum Matrix",
    exhibitLabel: "Quadrants",
    thesisPre: "Pre ",
    thesisMark: "mark",
    thesisPost: " post.",
    points: [
      { label: "A", text: "a" },
      { label: "B", text: "b" },
      { label: "C", text: "c" },
    ],
  },
];

function renderSection() {
  return render(
    <MethodFrameworks
      eyebrow="Our method"
      titleLead="Proprietary "
      titleEmph="frameworks"
      titleRest=", proven."
      indexHeading="The frameworks"
      author="Vinay Maheshwari"
      authorRole="Founder & Principal Consultant"
      exhibitReg="© Copyright registered"
      credential="Proprietary framework · Copyright registered, Govt. of India"
      frameworks={FRAMEWORKS}
    />,
  );
}

describe("MethodFrameworks", () => {
  it("renders every panel in the DOM (all titles server-rendered for SEO)", () => {
    renderSection();
    // One <h3> per framework panel — all rendered, not just the active one.
    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings).toHaveLength(FRAMEWORKS.length);
    // The rail lists every framework's full title.
    expect(screen.getByText("The D Scale-Up Loop")).toBeInTheDocument();
    expect(screen.getByText("The Momentum Matrix")).toBeInTheDocument();
  });

  it("marks the first framework active by default", () => {
    renderSection();
    const loop = screen.getByRole("button", { name: /The D Scale-Up Loop/ });
    const matrix = screen.getByRole("button", { name: /The Momentum Matrix/ });
    expect(loop).toHaveAttribute("aria-current", "true");
    expect(matrix).not.toHaveAttribute("aria-current");
  });

  it("toggles aria-current when a rail row is selected", () => {
    renderSection();
    const loop = screen.getByRole("button", { name: /The D Scale-Up Loop/ });
    const matrix = screen.getByRole("button", { name: /The Momentum Matrix/ });
    fireEvent.click(matrix);
    expect(matrix).toHaveAttribute("aria-current", "true");
    expect(loop).not.toHaveAttribute("aria-current");
  });

  it("swaps the shown panel when a rail row is selected (independent of aria-current)", () => {
    renderSection();
    const activeClass = styles.viewActive;
    expect(activeClass).toBeTruthy();
    if (!activeClass) return; // narrows string | undefined -> string for the asserts below
    const loopBtn = screen.getByRole("button", { name: /The D Scale-Up Loop/ });
    const matrixBtn = screen.getByRole("button", { name: /The Momentum Matrix/ });
    // The panel each rail row controls is the one it shows.
    const loopPanel = document.getElementById(loopBtn.getAttribute("aria-controls") ?? "");
    const matrixPanel = document.getElementById(matrixBtn.getAttribute("aria-controls") ?? "");
    expect(loopPanel).not.toBeNull();
    expect(matrixPanel).not.toBeNull();
    // Default: the loop panel is the active (shown) one.
    expect(loopPanel).toHaveClass(activeClass);
    expect(matrixPanel).not.toHaveClass(activeClass);
    // Selecting matrix moves the active class to its panel — verified via the class, not aria-current.
    fireEvent.click(matrixBtn);
    expect(matrixPanel).toHaveClass(activeClass);
    expect(loopPanel).not.toHaveClass(activeClass);
  });
});
