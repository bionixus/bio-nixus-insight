# Bing & Google indexing recovery checklist

After SSR 500 fix (Jun 2026) and bulk IndexNow deploy.

## Immediate (post-deploy)

- [ ] **Bing Webmaster Tools** → Sitemaps → Submit `https://www.bionixus.com/sitemap.xml`
- [ ] Run `npm run indexnow:priority` (top MENA BOFU URLs)
- [ ] Run `npm run indexnow:batch` (full sitemap, requires `INDEXNOW_KEY` in env)
- [ ] Run `npm run indexnow:matrix` (96 industry matrix URLs + hub)
- [ ] GSC → URL Inspection → Request indexing on URLs in `scripts/gsc-priority-recrawl.txt`

## Weekly monitoring

| Check | Command / location |
|-------|-------------------|
| SSR bundle healthy | `npm run verify:ssr-bundle` (runs on every build) |
| Production homepage | `curl -sI https://www.bionixus.com/` → HTTP 200 |
| GSC coverage | Export Chart + Critical issues → `docs/seo/exports/` |
| Bing crawl errors | Bing WMT → Site Scan / URL Inspection |
| IndexNow after CMS publish | Sanity webhook → `api/webhooks/sanity-indexnow.ts` |

## GSC coverage baseline (2026-06-22)

See [gsc-mena-dashboard.md](./gsc-mena-dashboard.md) for full breakdown.

| Issue | Pages | Mitigation |
|-------|------:|------------|
| Crawled - not indexed | 50 | Content depth + internal links |
| Discovered - not indexed | 27 | IndexNow + sitemap |
| 404 | 15 | Route audit |
| 5xx | 1 | `verify:ssr-bundle` gate |

## Priority recrawl list

`scripts/gsc-priority-recrawl.txt` — top 20+ MENA BOFU and report URLs.
