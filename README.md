# SucStrat - Landing Page

Marketing/content site for **SucStrat**, an execution-first strategy & consulting firm (founder: Vinay Maheshwari). Next.js App Router, TypeScript (strict), CSS Modules, and a typed content layer.

- **Spec & decisions:** [`CLAUDE.md`](./CLAUDE.md)
- **Build audit & deploy notes:** [`REVIEW.md`](./REVIEW.md)
- **Plan:** [`PLAN.md`](./PLAN.md)

## Stack

- Next.js 16 (App Router, React Server Components), React 19, TypeScript 5 (`strict` + `noUncheckedIndexedAccess`)
- CSS Modules + `tokens.css`; `next/font` (Lora + Lato); `next/image`
- Contact form (`/get-in-touch`): a static **mailto** form — no server required, so it deploys to any static host; swap in a form provider for inbox submissions (see below)
- Tests: Vitest (unit), Playwright + axe (e2e), Lighthouse CI

## Local development

Requires **Node 20** (`.nvmrc`) and **pnpm** (via corepack).

```bash
nvm use && corepack enable
pnpm install
pnpm dev            # http://localhost:3000
```

Gates: `pnpm typecheck` · `pnpm lint` · `pnpm test` · `pnpm test:e2e` · `pnpm build`

## Deployment

This repo is **configured to deploy to GitHub Pages** out of the box. [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) builds a static export and publishes it on every push to `main`:

**→ https://rishav-c1.github.io/sucstrat/**

It also runs unchanged on a **Node host** (Vercel / Netlify / Cloudflare Pages): a normal `pnpm build` (without `STATIC_EXPORT`) keeps `next/image` optimization and the `/pitch-us → /get-in-touch` redirect. See [`REVIEW.md`](./REVIEW.md) §7.

### How GitHub Pages is wired

Pages serves **static files only** (no Node server), so the repo adapts in three ways — all gated on `STATIC_EXPORT=1`, which **only the workflow sets**, so local dev, the test suite, and a Node build are untouched:

- **Static export** — `next.config.ts` switches on `output: "export"`, `trailingSlash`, `images.unoptimized`, and `basePath`/`assetPrefix: "/sucstrat"` (the project-page path). The `redirects()` block (unsupported by export) is dropped in this mode.
- **Static contact form** — with no server on Pages, the `/get-in-touch` form composes a prefilled **`mailto:`** on submit (`ContactForm.tsx`). To take submissions without the mail-app handoff, point the `<form>` at [Web3Forms](https://web3forms.com) / [Formspree](https://formspree.io) (add their access-key hidden input — no other change needed).
- **Image/metadata routes** — `opengraph-image`, `apple-icon`, `sitemap`, and `robots` are marked `dynamic = "force-static"` so they emit as files.

**First-time setup (one-time, repo owner):** enable Pages by hand — repo **Settings → Pages → Build and deployment → Source: GitHub Actions** (the workflow's `GITHUB_TOKEN` can't enable Pages itself — that needs admin). After that, every push to `main` redeploys automatically.

**Custom domain (`sucstrat.com`)** instead of the github.io path: add `public/CNAME` with `sucstrat.com`, point DNS at GitHub Pages, and remove `basePath`/`assetPrefix` from `next.config.ts` (the `https://sucstrat.com` canonicals in `src/content/site.ts` already match).

Preview the Pages build locally:

```bash
STATIC_EXPORT=1 pnpm build      # -> ./out  (assets under /sucstrat)
```
