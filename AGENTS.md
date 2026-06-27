# AGENTS.md

## Cursor Cloud specific instructions

This repo is **BioNixus Insight** — an SSR-rendered Vite + React Router (NOT Next.js) pharma/healthcare SEO marketing site. See `.cursorrules` for the strict SSR/SEO conventions that all changes must follow.

### Services

- **Web app (primary)**: An Express SSR server (`server.js`) that renders React to HTML on every request via Vite middleware in dev. This is the only service needed to develop/test the site end to end.
- **Sanity Studio (optional)**: CMS editors live under `day-one/apps/studio` and `day-one/apps/studio-case-studies`. They are separate apps with their own dependencies and are not required to run the website. The site reads blog/case-study content from Sanity but falls back to public project IDs and hardcoded content when no token is set.

### Run / lint / test / build

Standard commands are in `package.json` `scripts` — use those rather than duplicating here. Key ones:

- Dev server: `npm run dev` → serves at `http://localhost:5173` (NOT Vite's default 8082; `server.js` uses `PORT` or 5173). Console prints `SSR server running at http://localhost:5173`.
- Tests: `npm test` (Vitest; only `src/**/*.{test,spec}.{ts,tsx}` are collected — currently one example test).
- Lint: `npm run lint` (ESLint flat config). Note: the existing codebase has many pre-existing lint errors (irregular-whitespace, `no-explicit-any`, etc.); a non-zero exit from `npm run lint` does NOT mean your setup is broken.
- Production build + preview: `npm run build` then `npm run preview`.

### Non-obvious notes

- **`.env` is optional for running the site.** It is gitignored. All Sanity clients (`src/lib/sanity*.ts`) fall back to public project IDs (`h2whvvpo`, `gj6cv27f`) and `production` dataset, so the dev server boots and renders without any secrets. Copy `.env.example` → `.env` only when you need real Sanity write access, Resend/AWS SES email sending, GSC dashboards, or admin login.
- The dev server is a custom Express app (`server.js`), so editing `server.js` itself requires restarting `npm run dev`; React component edits hot-reload via Vite.
- Package manager is **npm** (`package-lock.json` is the source of truth). A stale `bun.lockb` exists but is not used.
