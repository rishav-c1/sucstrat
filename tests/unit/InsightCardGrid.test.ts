import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { tileAt, GRID_MAX_COLUMNS, GRID_COLUMN_STEPS } from "@/components/sections/InsightCardGrid";

// Comfortably more cards than the Knowledge grid holds, so the invariant is pinned well
// past the current content rather than only for today's article count.
const SAMPLE = 60;

/** Column counts the stylesheet actually lays the grid out at, widest first. */
function columnStepsFromCss(): number[] {
  // jsdom gives import.meta.url an http:// value, so resolve from the vitest root instead.
  const css = readFileSync(resolve("src/components/sections/InsightCardGrid.module.css"), "utf8");
  return [...css.matchAll(/grid-template-columns:\s*([^;]+);/g)].map((match) => {
    const value = match[1] ?? "";
    const repeat = /repeat\(\s*(\d+)/.exec(value)?.[1];
    // `repeat(4, 1fr)` → 4; an explicit track list like `1fr` → its track count.
    return repeat ? Number(repeat) : value.trim().split(/\s+/).length;
  });
}

describe("tileAt", () => {
  // The treatments are assigned from a flat index, so the no-stripe guarantee only holds for
  // the column counts the TS knows about. If the CSS grows a breakpoint the TS hasn't been
  // told about (a 3-up, say), this is what catches it — and the neighbour test below will
  // then fail honestly rather than the grid quietly striping in production.
  it("knows every column count the stylesheet renders at", () => {
    expect(columnStepsFromCss()).toEqual([...GRID_COLUMN_STEPS]);
  });

  it.each([...GRID_COLUMN_STEPS])("gives no card a matching neighbour at %i-up", (cols) => {
    const matches: string[] = [];
    for (let i = 0; i < SAMPLE; i++) {
      if (i % cols !== 0 && tileAt(i) === tileAt(i - 1)) {
        matches.push(`${i - 1}+${i} side by side (${tileAt(i)})`);
      }
      if (i >= cols && tileAt(i) === tileAt(i - cols)) {
        matches.push(`${i - cols}+${i} stacked (${tileAt(i)})`);
      }
    }
    expect(matches).toEqual([]);
  });

  it("puts one of each treatment in every full row at the widest layout", () => {
    for (let row = 0; row * GRID_MAX_COLUMNS < SAMPLE; row++) {
      const start = row * GRID_MAX_COLUMNS;
      const treatments = Array.from({ length: GRID_MAX_COLUMNS }, (_, c) => tileAt(start + c));
      expect(new Set(treatments).size).toBe(GRID_MAX_COLUMNS);
    }
  });
});
