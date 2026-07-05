# Postmortem: production SSR served an "undefined" broken shell on every URL

**Date:** 2026-07-05
**Severity:** P0 — every page on bionixus.com (all ~848 sitemap URLs) served broken,
unindexable content in production.
**Status:** Fixed, PR pending merge.

## Impact

Every request through the site's catch-all Vercel rewrite (i.e. every URL except
`/api/*`) rendered:
- `<title>BioNixus | Global Pharmaceutical &amp; Healthcare Market Resear</title>`
  (the same generic, truncated title on every URL)
- The homepage's generic meta description on every URL
- The literal string `undefined` inside the page body
- A correct, per-URL `<link rel="canonical">` (the one thing still working)
- HTTP 200 (so search engines had no signal to treat this as an error and would
  index/re-index this broken content)

## Timeline

- **2026-02-27, commit `6c3ab884`:** `api/indexnow-key.ts` — the Vercel serverless
  function that (via `vercel.json`'s catch-all rewrite,
  `/:path((?!api/).*) -> /api/indexnow-key?__ssr=1&url=/:path`) renders literally
  every page on the site — is written calling
  `const { html, helmetData } = serverEntry.render(url, initialData);` with no
  `await`. At the time, `src/entry-server.tsx`'s exported `render()` function was
  **synchronous**, so this was correct.
- **Earlier today (2026-07-05), commit `c2afbf0`, PR #34:** a separate, legitimate
  fix ("SSR fix for 44+ report pages shipping ~17 words to crawlers") changed
  `render()` in `src/entry-server.tsx` from `export function render(...)` to
  `export async function render(...)`, adding `await preloadRouteChunk(pathname)`
  to fix a real bug (lazy-loaded route chunks not resolving before
  `renderToString`). `server.js` (the local-dev Express server)'s call site was
  updated correctly (`await render(...)`). **`api/indexnow-key.ts`'s call site —
  a second, independent caller of the same function — was not updated.**
  Nobody caught this because:
  1. `api/**/*.ts` is not included in `tsconfig.app.json` or `tsconfig.node.json`
     — `npx tsc --noEmit` (the primary verification gate used all session) never
     type-checks this file at all.
  2. Even if it were checked, the hand-written `ServerEntryModule` type in
     `api/indexnow-key.ts` declared `render` as returning `RenderResult`
     synchronously, not `Promise<RenderResult>` — a stale type that was never
     updated when the real implementation changed shape. This would have hidden
     the bug from TypeScript even with the file included in a project.
  3. `server.js`'s Express pipeline (used for local dev and manual `curl`
     testing throughout the day) has the correct `await` and was never affected
     — every local verification this session against `node server.js` and the
     `render()` helper directly showed correct output, because none of that
     testing exercised the actual Vercel serverless function that serves real
     production traffic.
- **2026-07-05, ~afternoon:** Incident reported and verified via external fetch
  against production.

## Root cause

`await serverEntry.render(url, initialData)` was missing at
`api/indexnow-key.ts:736`. Since `render()` is `async`, calling it without
`await` returns a `Promise` object. Destructuring `{ html, helmetData }` off a
`Promise` yields `undefined` for both, unconditionally, on every single request.

That `undefined` then propagated through two more layers of unrelated code,
producing the specific symptoms observed:

- `template.replace('<!--ssr-outlet-->', appHtml)` — `String.prototype.replace`
  coerces a non-function replacement to a string, so `appHtml === undefined`
  becomes the literal text `"undefined"` in the output body.
- `helmetData === undefined` means every one of `helmetData?.title`,
  `?.meta`, `?.link`, `?.script` evaluates to `''`, so no real title/meta ever
  reaches the page. `ensureTitleTag()` falls back to whatever static `<title>`
  is baked into the compiled template (`dist/client/_ssr-template.html`,
  sourced from `index.html`'s generic default title). Its `isGeneric` detection
  (meant to catch and replace exactly this situation) failed because this
  file's copy of `GENERIC_DEFAULT_TITLES` was missing the specific string
  `'BioNixus | Global Pharmaceutical & Healthcare Market Research'` and lacked
  the regex fallback (`/^BioNixus \| Global Pharmaceutical/i`) that `server.js`'s
  already had — the two files' copies of this safety net had drifted out of
  sync. The generic title then passed through `normalizeTitleLength(title, 60)`,
  which truncates to `max - 1 = 59` characters when the title doesn't end in a
  known suffix — producing exactly the reported
  `"BioNixus | Global Pharmaceutical & Healthcare Market Resear"`.
- `isSsrNotFoundPage(headTags, appHtml)` returns `false` for `appHtml ===
  undefined` (its check requires `typeof appHtml === 'string'`), so the response
  shipped as `200` instead of any error status — no signal to crawlers or
  monitoring that anything was wrong.

`api/blog/[slug].js` and `api/case-studies/[slug].js` (the other two Vercel
functions with their own routing rules) do not call `serverEntry.render()` at
all — they build lightweight HTML directly from Sanity data for
social/crawler cards — so they were not affected by this bug.

## Why nothing alerted

- No alerting/webhook mechanism exists anywhere in the codebase for SSR render
  failures (confirmed by search — no `ALERT_WEBHOOK` or equivalent).
- The failure was not an exception — it was a silent, valid-looking `200`
  response, so no error-rate monitoring (if any exists) would have flagged it
  as a request failure.
- `api/**/*.ts` sits outside the TypeScript project configuration entirely, so
  even a `tsc --noEmit` CI gate would not have caught this before merge.
- No test suite exercises `api/indexnow-key.ts`'s `handleSsrRequest` path
  (confirmed: the only verification method available all session was manual
  `curl`/direct `render()` calls against `server.js`, which is not what
  production actually runs).

## Fix (this PR)

1. **Root cause:** added the missing `await` before `serverEntry.render(url,
   initialData)` in `api/indexnow-key.ts`.
2. **Type safety:** corrected the `ServerEntryModule.render` type to
   `Promise<RenderResult>` so a future divergence of this kind is caught by
   `tsc` wherever this file is type-checked.
3. **Defense in depth:** synced `GENERIC_DEFAULT_TITLES` and the `isGeneric`
   regex fallback in `api/indexnow-key.ts` with the already-correct version in
   `server.js`, so a generic/stale title can never silently ship even if
   something else upstream fails in the future.
4. **Never ship an "undefined" 200 again:** added an explicit guard right after
   the render call — if `renderResult.html` isn't a string, log loudly
   (`console.error`, captured in Vercel function logs) and return `503` with
   `Retry-After: 30` instead of `200` with broken content. A `503` tells
   crawlers "come back later"; the previous `200` told them "this is the real,
   permanent page" — a materially worse signal for rankings during any future
   outage of this kind.

**Verification:** built a harness that transpiles `api/indexnow-key.ts` with
esbuild and invokes its exported `handler()` directly against the real
compiled `dist/server/server-entry.js` and `dist/client/_ssr-template.html` —
i.e., the exact code path Vercel invokes in production, not a proxy for it.
Before the fix, this reproduced the incident byte-for-byte (`TITLE: BioNixus |
Global Pharmaceutical & Healthcare Market Resear`, `RAW undefined
OCCURRENCES: 1`, `STATUS: 200`). After the fix, verified across 9 diverse
URLs (`/`, `/news`, a hardcoded blog post, `/insights`, `/methodology`,
`/healthcare-market-research`, `/case-studies/:slug`, `/de/healthcare-market-research/uae`,
the Middle East pillar page) — all show unique correct titles, correct meta
descriptions, zero `undefined` occurrences, and full body content (8.6k–260k
characters).

## What's not fixed here (deliberately out of scope for this PR)

- **`api/**/*.ts` is still outside `tsconfig` project coverage.** This is the
  single highest-leverage prevention step (it would have caught the type
  mismatch immediately) but adding it now risks surfacing a wave of unrelated
  type errors across ~10 other API files (`admin.ts`, `calendar.ts`,
  `send-newsletter.ts`, etc.) not written with this in mind — that triage is a
  separate, larger task. **Recommended as the immediate next follow-up.**
- **No automated test exercises `handleSsrRequest`.** The verification harness
  built for this incident (esbuild + direct `handler()` invocation against
  real build artifacts) is a reusable pattern — turning it into a permanent
  `vitest` suite that runs on every PR touching `api/indexnow-key.ts` or
  `src/entry-server.tsx` would have caught this at review time. Not built here
  to keep this PR to the minimal incident fix.
- **No alerting on SSR failures exists.** The `503` fallback added here is
  loud in logs but nothing currently watches for it. Standing up a real alert
  (Vercel log drain → Slack/PagerDuty, or similar) is a separate
  infrastructure task, not a code diff.
- **A separate, unrelated robustness issue** was found during this
  investigation (not part of this incident): when Sanity's API is completely
  unreachable, an uncaught socket `error` event on the underlying HTTP request
  can crash the whole Node process in `server.js`'s local dev path. This only
  reproduces under total network unavailability to Sanity (confirmed in a
  network-restricted sandbox) and has not been confirmed to occur under normal
  production conditions. Flagged for separate investigation, not fixed in
  this PR to keep the diff minimal and focused.
- **Cosmetic, pre-existing, unrelated to this incident:** the homepage's meta
  description shows a double-escaped ampersand (`&amp;amp;`) after this fix is
  applied, suggesting the raw content is already HTML-entity-encoded before
  `escapeHtmlAttribute()` re-encodes it. Worth a follow-up but out of scope
  here.

## Prevention checklist (recommended, not all done in this PR)

- [x] Fix the missing `await` (this PR)
- [x] Fix the stale type that hid it from `tsc` (this PR)
- [x] Sync the duplicated title-safety-net logic between `server.js` and
      `api/indexnow-key.ts` (this PR)
- [x] Never let an SSR render failure ship as a `200` again (this PR)
- [ ] Bring `api/**/*.ts` under `tsc` project coverage
- [ ] Add a regression test for `handleSsrRequest` that fails if `render()`'s
      Promise is ever accidentally left unawaited
- [ ] Stand up real alerting on the new `503` fallback path
- [ ] Consider de-duplicating `server.js` and `api/indexnow-key.ts`'s render
      pipelines (they are two independent, hand-maintained copies of
      essentially the same logic — this is the structural reason the two
      files' safety nets drifted out of sync in the first place) — a larger
      refactor, deliberately not attempted here
