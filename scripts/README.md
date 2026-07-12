# SEO Regression Suite

`scripts/seo-regression.mjs` crawls every URL in `sitemap.xml` against a
running build (local or a deployed preview/production URL) and checks the
raw server-rendered HTML — no browser, no JS execution — against a fixed
set of rules. It exists so the specific bug classes found by hand during
the 2026-07 SEO audit pass (thin Suspense pages, orphan pages, hreflang
mismatches, wrong/duplicate canonicals, broken legacy redirects, an
undefined-shell SSR incident) can never silently ship again.

## Running it locally

```bash
npm run build:client
npm run build:server
node -e "const fs=require('fs');const s='dist/client/index.html',d='dist/client/_ssr-template.html';if(fs.existsSync(s)){fs.copyFileSync(s,d);fs.unlinkSync(s);}"
NODE_ENV=production PORT=4173 node server.js &

npm run seo:test          # full run, fails CI-style on any error
npm run seo:test:fast     # skips OG-image fetches and the redirect-map check, for quick local iteration
npm run seo:baseline      # writes seo-baseline.json from the current run, for S05 drift detection later
npm run seo:test:rules    # seeded-fault tests against the rule engine itself — no build/server needed
```

## Seeded-fault tests (`scripts/test-seo-regression-rules.mjs`)

Constructs a synthetic HTML fixture for each of six bug classes this suite
exists to catch, runs the real rule function against it, and asserts the
expected rule fires with `error` status: R07/R07b (thin/skeleton page — the
React.lazy-without-preload class), R08 (wrong canonical), S01 (orphan page),
S03 (broken legacy redirect), S06 (near-duplicate content), and R10
(hreflang reciprocity — the class fixed in PR #43). Runs against the rule
functions directly rather than a real page + rebuild + server cycle, so it's
fast and deterministic and runs first in CI, before the expensive
build/crawl steps.

Useful flags on `scripts/seo-regression.mjs` directly:

| Flag | Purpose |
|---|---|
| `--base <url>` | **Required.** The build under test — `http://localhost:4173`, a Vercel preview URL, or `https://www.bionixus.com`. |
| `--sitemap <path>` | Read the sitemap from a local file instead of fetching `{base}/sitemap.xml`. |
| `--concurrency <n>` | Crawl concurrency (default 12). |
| `--report <path>` | Where to write the JSON report (default `seo-report.json`). |
| `--fail-on error\|warn` | Exit code 1 on error findings only (default), or on warnings too. |
| `--only "<regex>"` | Only crawl URLs matching this pattern — for fast local iteration. Site-wide checks that need the *full* crawl set (S01 orphan pages, S04 route/sitemap drift, R10 hreflang reciprocity, pinned checks) are automatically skipped on `--only` runs since they'd otherwise report false positives against a partial crawl. |
| `--baseline <path>` | Compare against a stored baseline (S05 word-count/title/canonical drift). |
| `--update-baseline` | Write `seo-baseline.json` from this run's results. |
| `--skip-og-images` | Skip fetching og:image URLs to verify they're reachable. Useful in network-restricted environments — see caveat below. |
| `--skip-redirect-map` | Skip S03 (this makes ~190 extra requests testing every entry in `config/legacy-redirects.json`). |

## A known environment caveat

Some pages (Sanity-CMS-backed blog posts, case studies) fetch their content
from Sanity at render time. If the machine running the suite has no network
route to Sanity's API, those specific pages will render a thin loading
skeleton instead of their real content, and R07/R07b/R12/R16 will report
false failures for them — this is a test-environment limitation, not a
real regression. The CI workflow runs in GitHub's hosted runners, which do
have real network access, so this should not affect CI results; if it ever
does, check whether the runner can reach Sanity before assuming the content
itself regressed.

This has two cascading effects worth knowing about specifically:
- **S01 (orphan pages)**: a Sanity-thin blog/news index page can't render its
  real list of post links, so every individual post it would normally link
  to looks orphaned in a Sanity-blocked run, even though production's real
  index page links to them fine.
- **S06 (near-duplicate content)**: many unrelated Sanity-backed pages (blog
  posts, case studies, news items) all collapse to the same tiny empty-state
  chrome text when Sanity is unreachable, so MinHash reports them as ~100%
  similar to each other. A Sanity-blocked run can show dozens of S06 pairs
  between pages that share nothing but being empty — always check whether
  the "duplicate" pages in a finding actually rendered real content before
  treating an S06 hit as real.

## CI is currently non-blocking (temporary)

The first real CI run against production (PR #47) confirmed ~764 genuine,
pre-existing errors on the live site (thin Arabic pages, duplicate/truncated
listicle titles, stale sitemap redirects, and more — see that PR for the
full list). Turning on `--fail-on error` unconditionally would make every
future PR's CI check red regardless of what it actually changes, which
defeats the point of a regression gate. All three jobs in
`.github/workflows/seo-regression.yml` currently run with
`continue-on-error: true` (or no hard-fail step, for the preview job) so the
suite is visible — reports upload as artifacts, the preview job still
comments pass/warn/error counts on the PR — without blocking merges.
**This is temporary.** Once the backlog above is fixed in follow-up PRs
(down to zero, or close enough that remaining errors are deliberately
allowlisted), remove `continue-on-error: true` from the two `run` steps and
re-add a hard-fail step to `seo-regression-preview` (see the comment at the
bottom of that job) so CI actually blocks new regressions again.

## Reading the report

`seo-report.json` has:
- `findings`: every rule result (`pass`/`warn`/`error`) with the URL, rule
  ID, and a human-readable message. Findings without a `url` are site-wide
  (S01–S06).
- `clusterReport`: S06's near-duplicate content clusters — grouped URLs with
  their pairwise similarity and per-page unique-word counts. This is the
  work queue for de-duplication remediation (see `reports/dedup-initial.json`
  for this session's starting snapshot).
- `counts`: total pass/warn/error tally.

## Rule ID reference

### Per-URL rules

| Rule | Checks |
|---|---|
| R01 | HTTP status is 200 (a sitemap URL that redirects is an error — sitemaps must list final URLs). |
| R02 | `Content-Type: text/html; charset=utf-8`. |
| R03 | Exactly one `<title>`, 10–65 characters. |
| R04 | *(cross-URL)* No two URLs share an identical title. Same-locale duplicate = error; cross-locale = warn. |
| R05 | Exactly one meta description, 50–160 characters; cross-URL duplicate policy same as R04. |
| R06 | Exactly one non-empty `<h1>`. |
| R07 | Visible text word count meets the configured threshold (default 150, see `minWordCountOverrides`). |
| R07b | Word count < 30 is always an error ("skeleton page") regardless of any override — this is the React.lazy()/Suspense thin-page detector. |
| R08 | Exactly one absolute `https://www.bionixus.com/...` canonical, matching the requested URL under the configured trailing-slash policy. |
| R09 | If hreflang links exist: only valid language values, exactly one `x-default`, a self-referencing entry matching `html[lang]`, all URLs absolute/same-host. |
| R10 | *(cross-URL)* Hreflang reciprocity — if A lists B, B must exist, return 200, and list A back with the right lang. |
| R11 | `html[lang]` present and matches the URL's locale prefix (or is listed in `htmlLangExemptPatterns`). |
| R12 | `og:title`/`og:description`/`og:url`(=canonical)/`og:image` present; `og:image` URL reachability is checked once per unique image, deduplicated across pages (`R12-image` findings). |
| R13 | Every `<script type="application/ld+json">` parses and has `@context`/`@type`; an Organization schema is present (unless allowlisted); any FAQPage schema has ≥1 question. |
| R14 | No unexpected `noindex` on a sitemap-listed URL. |
| R15 | No literal `{`, `undefined`, or `null` leaking into title/description/canonical — the exact class of bug behind the 2026-07-05 P0 incident. |
| R16 | *(needs S06)* Word count not shared with any same-locale sibling page — warn < 100, error < 40 ("this page says nothing of its own"). |

### Site-wide checks

| Rule | Checks |
|---|---|
| S01 | Every sitemap URL has ≥1 inbound internal link from another sitemap page (the orphan-page bug class, PR #42). |
| S02 | `sitemap.xml` itself: no duplicate `<loc>`, no redirecting/404/noindexed entries, absolute+https URLs, parseable `<lastmod>`. |
| S03 | Every entry in `config/legacy-redirects.json` resolves in a single 301 hop to the expected target, and that target returns 200. |
| S04 | *(warn-only)* Declared static routes in `routes.tsx` missing from the sitemap, and sitemap URLs with no matching static route. |
| S05 | *(only with `--baseline`)* Word count drop > 40%, or a changed title/canonical, vs. the stored baseline. |
| S06 | Near-duplicate content detection (5-word-shingle MinHash, locale-scoped, boilerplate-stripped) — ≥0.85 similarity = error, 0.60–0.85 = warn. |

### Pinned checks

`config/pinned-checks.json` holds exact, named assertions for the specific
pages where a specific bug was found and fixed this session — see the file
itself for the full list and the bug each entry guards against. These run
as `PINNED` findings and are skipped on `--only` runs.

## Updating `config/seo-regression.config.json`

Every allowlist array entry needs a one-line justification recorded in
`config/seo-regression.config.md` — see that file for the current
rationale behind every entry. Do not add an allowlist entry just to make a
genuine failure go away; either fix the underlying page, or write down why
the exception is legitimate.

## Content de-duplication remediation

`reports/dedup-initial.json` is the S06 cluster report from the first full
run this session, filtered down to the 2 clusters that are real (a raw local
run also surfaces Sanity-sandbox-cascade "clusters" — see the caveat above —
those are excluded, and a CI run with real network access should be treated
as authoritative for anything beyond these two):

- **`/global-websites/{country}`** (14 pages, ~2,500 words each, only
  4–8 words per page not shared with a sibling) — Type A, differentiate:
  a single `GlobalWebsiteCountry` template driven by `globalWebsitesData.ts`
  currently swaps in little beyond the country name. Needs real per-country
  differentiating content, not a data/template bug.
- **`/healthcare-market-research/{algeria,kenya,united-states}`** (3 pages,
  ~1,800 words, 13–17 unique words each) — same Type A pattern, smaller
  cluster.

Fixing either is a content-writing task (differentiating 17 pages with real,
fact-checked per-country detail), not a suite change — scoped out of this
PR and left as the next item in the ongoing thin/duplicate-page remediation
cadence already used elsewhere this session, rather than rushed here. The
general fix-per-type decision tree (differentiate legitimate programmatic
pages, 301-consolidate genuinely redundant ones, enrich-or-noindex thin
boilerplate-heavy ones) still applies to whatever a fresh CI run surfaces.

## Production canary

`scripts/seo-canary.mjs` is a separate, much lighter check meant to run on
a schedule (every 30 minutes) against production — see its own header
comment and `.github/workflows/seo-canary.yml` for details. It is not a
replacement for this suite; it's a fast tripwire for the specific failure
mode of the 2026-07-05 P0 incident (a generic/undefined page shipping with
a 200 status) between full regression runs.
