// Dev-only: validate the world-map geometry pipeline + country-name matching.
import { feature } from "topojson-client";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const world = require("world-atlas/countries-110m.json");

const fc = feature(world, world.objects.countries);
console.log("feature count:", fc.features.length);

const projection = geoNaturalEarth1().fitExtent(
  [
    [10, 10],
    [950, 464],
  ],
  fc,
);
const path = geoPath(projection);

const COUNTRIES = [
  "India",
  "United States of America",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Oman",
  "United Kingdom",
  "Finland",
  "Russia",
  "Mauritania",
  "Zimbabwe",
];

const names = new Set(fc.features.map((f) => f.properties.name));
for (const c of COUNTRIES) {
  const found = names.has(c);
  const feat = fc.features.find((f) => f.properties.name === c);
  const d = feat ? path(feat) : null;
  console.log(`${found ? "✓" : "✗"} ${c}${d ? " (path " + d.length + " chars)" : " — NOT FOUND"}`);
}

const sampleD = path(fc.features[0]);
console.log("sample path[0] length:", sampleD?.length);
