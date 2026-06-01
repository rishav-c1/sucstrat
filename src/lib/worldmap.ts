import { feature, merge } from "topojson-client";
import { geoNaturalEarth1, geoPath, type GeoPermissibleObjects } from "d3-geo";
import worldData from "world-atlas/countries-110m.json";
import type { Region } from "@/content/types";

/**
 * Build-time world-map geometry. d3/topojson/world-atlas are imported only by the
 * server GlobalImpact section — the computed SVG paths are passed to the client as
 * props, so no d3 ships to the browser.
 *
 * Non-served countries are merged (in topology space) into a SINGLE background path:
 * shared internal borders drop out, so it's far smaller than ~169 individual paths
 * and adds only one DOM node instead of ~169 (much faster Home render/parse).
 */

export interface MapCountry {
  name: string;
  d: string;
  regionId: string;
}

export interface MapPin {
  regionId: string;
  cx: number;
  cy: number;
  hq: boolean;
}

export interface WorldMapGeometry {
  viewBox: string;
  width: number;
  height: number;
  background: string;
  served: MapCountry[];
  pins: MapPin[];
}

interface CountryGeometry {
  properties?: { name?: string } | null;
}
interface CountryFeature {
  properties: { name?: string } | null;
}

const WIDTH = 960;
const HEIGHT = 480;

export function getWorldMapGeometry(regions: Region[]): WorldMapGeometry {
  const topology = worldData as unknown as Parameters<typeof feature>[0];
  const countriesObject = (worldData as unknown as { objects: { countries: Parameters<typeof feature>[1] } })
    .objects.countries;

  const collection = feature(topology, countriesObject) as unknown as { features: CountryFeature[] };
  const geoCollection = collection as unknown as GeoPermissibleObjects;

  const projection = geoNaturalEarth1().fitExtent(
    [
      [10, 10],
      [WIDTH - 10, HEIGHT - 16],
    ],
    geoCollection,
  );
  const path = geoPath(projection).digits(1);

  const servedNames = new Set<string>();
  const countryToRegion = new Map<string, Region>();
  for (const region of regions) {
    for (const country of region.countries) {
      servedNames.add(country);
      countryToRegion.set(country, region);
    }
  }

  const geometries = (countriesObject as unknown as { geometries: CountryGeometry[] }).geometries;
  const backgroundGeometries = geometries.filter((g) => !servedNames.has(g.properties?.name ?? ""));
  const merged = merge(topology, backgroundGeometries as unknown as Parameters<typeof merge>[1]);
  const background = path(merged as unknown as GeoPermissibleObjects) ?? "";

  const served: MapCountry[] = [];
  const pins: MapPin[] = [];
  for (const f of collection.features) {
    const name = (f.properties as { name?: string } | null)?.name ?? "";
    const region = countryToRegion.get(name);
    if (!region) continue;

    const geo = f as unknown as GeoPermissibleObjects;
    const d = path(geo);
    if (!d) continue;

    served.push({ name, d, regionId: region.id });
    const [cx, cy] = path.centroid(geo);
    if (!Number.isNaN(cx) && !Number.isNaN(cy)) {
      pins.push({ regionId: region.id, cx, cy, hq: region.hq ?? false });
    }
  }

  return { viewBox: `0 0 ${WIDTH} ${HEIGHT}`, width: WIDTH, height: HEIGHT, background, served, pins };
}
