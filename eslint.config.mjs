// ESLint flat config (ESLint 9 + eslint-config-next 16 native flat config).
// `eslint-config-next` bundles core-web-vitals + typescript rules and ignores
// .next/out/build/next-env.d.ts already; we add our test/report output dirs.
import next from "eslint-config-next";

const eslintConfig = [
  ...next,
  {
    ignores: ["playwright-report/**", "test-results/**", "coverage/**", ".lighthouseci/**", "scripts/**"],
  },
];

export default eslintConfig;
