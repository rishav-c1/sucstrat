# SucStrat - Landing Page

Marketing/content site for **SucStrat**, an execution-first strategy & consulting firm (founder: Vinay Maheshwari). Next.js App Router, TypeScript (strict), CSS Modules, and a typed content layer.

- **Spec & decisions:** [`CLAUDE.md`](./CLAUDE.md)
- **Build audit & deploy notes:** [`REVIEW.md`](./REVIEW.md)
- **Plan:** [`PLAN.md`](./PLAN.md)

## Stack

- Next.js 16 (App Router, React Server Components), React 19, TypeScript 5 (`strict` + `noUncheckedIndexedAccess`)
- CSS Modules + `tokens.css`; `next/font` (Lora + Lato); `next/image`
- One backend: a zod-validated **Server Action** behind `/get-in-touch` (the contact form)
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

This app has a **server runtime** — the contact-form Server Action, `next/image` optimization, and a `/pitch-us → /get-in-touch` redirect. It deploys **as-is, with the form fully working**, to **Vercel / Netlify / Cloudflare Pages** (see [`REVIEW.md`](./REVIEW.md) §7). No env vars are needed to build; add `RESEND_API_KEY` and wire the transport in `src/lib/email.ts` before the form sends real email.

---

## Hosting on GitHub Pages (static export)

> **This requires changes — not just "enable Pages."** GitHub Pages serves **static files only** (no Node server). Consequences for this app:
> - the contact-form **Server Action can't run** — and `next build` with `output: "export"` will **fail to build** while it exists, so the form must be replaced;
> - **`next/image` optimization** is unavailable (images load unoptimized);
> - **`redirects()`** in `next.config.ts` are ignored.
>
> If you'd rather keep all of that working for free, deploy to **Vercel / Netlify / Cloudflare Pages** instead. To proceed with Pages:

**1. Switch to static export** — in `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: "export",              // emits static HTML to ./out
  trailingSlash: true,           // /x -> /x/index.html (Pages-friendly)
  images: { unoptimized: true }, // no server-side image optimizer on Pages
  // Project-page only (https://rishav-c1.github.io/sucstrat/) — omit for a custom domain:
  // basePath: "/sucstrat",
  // assetPrefix: "/sucstrat",
  // Remove the async redirects() block — unsupported by `output: "export"`.
};
```

**2. Replace the contact form** (the Server Action won't export). Either:
- point the `<form>` at a static provider — [Web3Forms](https://web3forms.com), [Formspree](https://formspree.io), or [Getform](https://getform.io) (`action="https://…" method="POST"` + their access-key hidden input), or
- swap it for a `mailto:ashley@v3consultant.com` button.

Then delete `src/app/get-in-touch/actions.ts` and `src/lib/email.ts` (and the `useActionState` wiring in `ContactForm.tsx`) so the export builds.

**3. Domain — pick one:**
- **Custom domain (recommended; matches the `https://sucstrat.com` canonicals already set in `src/content/site.ts`):** add `public/CNAME` containing `sucstrat.com`, point DNS at GitHub Pages, and leave `basePath` unset.
- **Project page** (`rishav-c1.github.io/sucstrat`): set `basePath`/`assetPrefix` to `/sucstrat` (step 1) and update the canonical/sitemap base in `src/content/site.ts`.

**4. Add `public/.nojekyll`** (empty file). Harmless; required only if you ever deploy from a branch rather than the Actions artifact below.

**5. Add `.github/workflows/deploy.yml`:**

```yaml
name: Deploy to GitHub Pages
on:
  push: { branches: [main] }
  workflow_dispatch:
permissions: { contents: read, pages: write, id-token: write }
concurrency: { group: pages, cancel-in-progress: true }
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4            # reads packageManager from package.json
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: pnpm }
      - run: pnpm install --frozen-lockfile
      - run: pnpm build                        # output:"export" -> ./out
      - uses: actions/upload-pages-artifact@v3
        with: { path: ./out }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

**6. Enable Pages:** repo **Settings → Pages → Build and deployment → Source: GitHub Actions**. Push to `main`; the workflow builds `out/` and deploys.

**Lost on static export:** the working contact form (use a form provider / mailto), image optimization, and the `/pitch-us` redirect (recreate it as a static `out/pitch-us/index.html` meta-refresh if needed).
