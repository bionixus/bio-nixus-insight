# `seo-regression.config.json` — field reference

Plain JSON doesn't support comments, so allowlist rationale lives here
instead. Every entry in an allowlist array below must have a one-line
reason recorded here — an allowlist entry with no explanation is a smell
(it usually means "this failed and I didn't want to fix it").

## `host`

`www.bionixus.com` — the canonical production host. R08 (canonical) checks
that every canonical link resolves to this host.

## `trailingSlashPolicy`

`no-trailing-slash` — the site's canonical URLs never carry a trailing
slash (except `/` itself). `server.js` and `api/indexnow-key.ts` both treat
a trailing-slash request as a 301 to the slash-less form.

## `locales` / `regionVariants`

`locales` are the 8 UI locales the site actually ships (`en, de, fr, es, ar,
zh, pt, ru`) — used by R11 (html-lang-matches-URL-prefix) and R04/R05's
same-locale-vs-cross-locale duplicate policy.

`regionVariants` covers non-UI-locale hreflang region codes the site
deliberately emits (e.g. Swiss listicles declaring `de-CH`/`fr-CH`/`it-CH`
alongside `en-CH`). R09 also accepts any syntactically well-formed
BCP-47-ish language tag beyond this list — several country-targeting
listicles declare hreflang for markets without a full UI translation (e.g.
`da` for the Denmark listicle, `it` for Italy, `ko` for South Korea), which
is intentional: the page's content is in English but is meant to surface
for that country's searchers.

## `minWordCountDefault` / `minWordCountOverrides`

Default 150 words. Overrides exist for page types that are legitimately
shorter by design, not because they're thin:
- `/contact` and its locale variants (40 words) — a contact form page has
  little body copy by nature.
- `/blog/.+` (200 words) / non-English blog variants (150 words) — matches
  the shorter-form editorial style already established for blog posts.
- `/unsubscribe` (10 words) — a transactional confirmation page.

## `noindexAllowlist`

Empty. No page on the site is currently expected to carry `noindex` while
still being listed in `sitemap.xml` — if one legitimately needs to (e.g. a
seasonal landing page being sunset), add its path pattern here with a
comment explaining why, rather than letting R14 silently pass.

## `orphanAllowlist`

Empty. Every sitemap URL is expected to have at least one real inbound
internal link (this is the exact bug class fixed in PR #42 — 22 pages had
zero inbound links). If a future page is intentionally reachable only via
sitemap/external link (rare, and usually a design smell), allowlist it here
with the reason.

## `duplicateTitleExemptPatterns`

Empty. No page pattern is currently expected to intentionally share an
exact title with another page.

## `jsonldOrganizationAllowlist`

- `^/unsubscribe$` — a bare transactional confirmation page with no
  Organization schema by design (it's not a content/marketing page).

## `routeDriftAllowlist`

- `^/admin` — internal admin tool routes, intentionally not in the public
  sitemap.
- `^/api/` — API routes are not pages and should never be in the sitemap.

## `htmlLangExemptPatterns`

- `^/blog/souk-adwiya-saudiya-dalil-shamel-rueya-2030-2026$` — a
  Latin-transliterated-slug Arabic-language article published under the
  unprefixed `/blog/` path (see `LATIN_SLUG_ARABIC_BLOG_POSTS` in
  `server.js` and `api/indexnow-key.ts`, which both already special-case
  this exact slug for the same reason). `html[lang]="ar"` on a URL with no
  `/ar/` prefix is intentional here, not a locale-routing bug.
