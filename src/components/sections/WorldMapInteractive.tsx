"use client";

import { useMemo, useRef, useState, type MouseEvent } from "react";
import clsx from "clsx";
import type { Region } from "@/content/types";
import type { WorldMapGeometry } from "@/lib/worldmap";
import styles from "./WorldMapInteractive.module.css";

interface Props {
  geometry: WorldMapGeometry;
  regions: Region[];
  sectors: string[];
  legend: { hq: string; engagement: string };
  cloudLabel: string;
  cloudHint: string;
}

export function WorldMapInteractive({ geometry, regions, sectors, legend, cloudLabel, cloudHint }: Props) {
  const regionById = useMemo(() => new Map(regions.map((r) => [r.id, r])), [regions]);

  const [activeSector, setActiveSector] = useState<string | null>(null);
  const [hoverSector, setHoverSector] = useState<string | null>(null);
  const [tipRegion, setTipRegion] = useState<Region | null>(null);

  const boxRef = useRef<HTMLDivElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);

  // Hover previews a sector; click pins it.
  const highlight = hoverSector ?? activeSector;

  // Position the tooltip imperatively (no re-render of the 177 paths on mousemove).
  const positionTip = (clientX: number, clientY: number) => {
    const box = boxRef.current;
    const tip = tipRef.current;
    if (!box || !tip) return;
    const rect = box.getBoundingClientRect();
    const tw = tip.offsetWidth;
    const th = tip.offsetHeight;
    let x = clientX - rect.left + 16;
    let y = clientY - rect.top + 16;
    if (x + tw + 16 > rect.width) x = clientX - rect.left - tw - 16;
    if (y + th + 12 > rect.height) y = rect.height - th - 12;
    tip.style.left = `${Math.max(8, x)}px`;
    tip.style.top = `${Math.max(8, y)}px`;
  };

  const enter = (region: Region, e: MouseEvent) => {
    const { clientX, clientY } = e;
    setTipRegion(region);
    requestAnimationFrame(() => positionTip(clientX, clientY));
  };
  const move = (e: MouseEvent) => positionTip(e.clientX, e.clientY);
  const leave = () => setTipRegion(null);

  return (
    <div className={styles.mapWrap}>
      <div className={styles.legendRow}>
        <span>
          <span className={styles.dotHq} aria-hidden="true" />
          {legend.hq}
        </span>
        <span>
          <span className={styles.dotEn} aria-hidden="true" />
          {legend.engagement}
        </span>
      </div>

      <div className={styles.mapBox} ref={boxRef}>
        <svg
          className={styles.svg}
          viewBox={geometry.viewBox}
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Map of the sectors SucStrat serves worldwide"
        >
          <defs>
            <linearGradient id="mapGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#5d90ba" />
              <stop offset="1" stopColor="#264259" />
            </linearGradient>
          </defs>
          <g>
            <path className={styles.land} d={geometry.background} />
            {geometry.served.map((c) => {
              const region = regionById.get(c.regionId);
              if (!region) return null;
              const isLit = highlight !== null && region.sectors.includes(highlight);
              const isDim = highlight !== null && !isLit;
              return (
                <path
                  key={c.name}
                  d={c.d}
                  className={clsx(styles.land, styles.served, isLit && styles.lit, isDim && styles.dim)}
                  onMouseEnter={(e) => enter(region, e)}
                  onMouseMove={move}
                  onMouseLeave={leave}
                />
              );
            })}
          </g>
          <g>
            {geometry.pins.map((p) => {
              const region = regionById.get(p.regionId);
              if (!region) return null;
              const isLit = highlight !== null && region.sectors.includes(highlight);
              const isDim = highlight !== null && !isLit;
              return (
                <g
                  key={`${p.regionId}-${p.cx}-${p.cy}`}
                  className={clsx(styles.pin, isDim && styles.pinDim)}
                  transform={`translate(${p.cx},${p.cy})`}
                  onMouseEnter={(e) => enter(region, e)}
                  onMouseMove={move}
                  onMouseLeave={leave}
                >
                  {p.hq ? <circle className={styles.halo} r={12} /> : null}
                  <circle className={styles.dot} r={p.hq ? 5.5 : 4} />
                </g>
              );
            })}
          </g>
        </svg>

        {tipRegion ? (
          <div ref={tipRef} className={clsx(styles.tip, tipRegion.hq && styles.tipWide)} aria-hidden="true">
            <div className={styles.tipEye}>{tipRegion.eyebrow}</div>
            <p className={styles.tipName}>{tipRegion.name}</p>
            {tipRegion.foot ? <div className={styles.tipFoot}>{tipRegion.foot}</div> : null}
            <div className={styles.tipCount}>
              {tipRegion.sectors.length} {tipRegion.sectors.length > 1 ? "sectors" : "sector"}
            </div>
            <div className={styles.tipChips}>
              {tipRegion.sectors.map((s) => (
                <span key={s} className={styles.tipChip}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className={styles.cloud}>
        <div className={styles.cloudHead}>
          <span className={styles.cloudLabel}>{cloudLabel}</span>
          <span className={styles.cloudHint}>{cloudHint}</span>
        </div>
        <div className={styles.chips}>
          {sectors.map((s) => {
            const on = activeSector === s || highlight === s;
            return (
              <button
                key={s}
                type="button"
                className={clsx(styles.chip, on && styles.chipOn)}
                aria-pressed={activeSector === s}
                onClick={() => setActiveSector((prev) => (prev === s ? null : s))}
                onMouseEnter={() => setHoverSector(s)}
                onMouseLeave={() => setHoverSector(null)}
                onFocus={() => setHoverSector(s)}
                onBlur={() => setHoverSector(null)}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      {/* Accessible, always-available equivalent of the map's hover information. */}
      <ul className="sr-only">
        {regions.map((r) => (
          <li key={r.id}>
            {r.name} ({r.eyebrow}
            {r.foot ? `, ${r.foot}` : ""}): {r.sectors.join(", ")}.
          </li>
        ))}
      </ul>
    </div>
  );
}
