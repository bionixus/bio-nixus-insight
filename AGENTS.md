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

- **`.env` is optional for running the site, and you should usually run WITHOUT one.** It is gitignored. All Sanity clients (`src/lib/sanity*.ts`) fall back to the real public read-only project IDs (`h2whvvpo` for blog, `gj6cv27f` for case studies) on the `production` dataset (`useCdn: true`, no token), so the dev server boots and renders real blog + case-studies content (articles, cover images, and gated PDFs) with no secrets.
- **Do NOT blindly `cp .env.example .env`.** The example file's placeholder values (e.g. `VITE_SANITY_PROJECT_ID=your-project-id`, `VITE_SANITY_CASE_STUDIES_PROJECT_ID=your-case-studies-project-id`) are non-empty and therefore **override** those working public defaults, which breaks local blog + case-studies data with Sanity `Dataset not found` 404s (blog silently falls back to hardcoded posts; `/case-studies` shows nothing). If you need real secrets, create `.env` with only the keys you actually need and set the Sanity project IDs to the real values above — do not leave the `your-...` placeholders in place.
- The dev server is a custom Express app (`server.js`), so editing `server.js` itself requires restarting `npm run dev`; React component edits hot-reload via Vite.
- Package manager is **npm** (`package-lock.json` is the source of truth). A stale `bun.lockb` exists but is not used.
