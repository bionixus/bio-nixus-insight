import { extractInternalLinks } from './html-helpers.mjs';
import { extractStaticRoutePaths } from './route-drift.mjs';
import {
  detectBoilerplateBlocks,
  stripBoilerplate,
  computeSimilarityPairs,
  clusterFromPairs,
  computeWordDocFrequency,
  uniqueWordCountFromDocFreq,
} from './similarity.mjs';
import { parseSitemapEntries } from './sitemap-entries.mjs';
import { fetchPage } from './fetch-page.mjs';
import pLimit from 'p-limit';

function finding(rule, status, message, details) {
  return { rule, status, message, ...(details !== undefined ? { details } : {}) };
}

function localeOf(pathname, locales) {
  for (const lang of locales) {
    if (lang === 'en') continue;
    if (pathname === `/${lang}` || pathname.startsWith(`/${lang}/`)) return lang;
  }
  return 'en';
}

/**
 * S01 — every sitemap URL must have >= 1 inbound internal link from another
 * sitemap page. Config `orphanAllowlist` holds intentionally standalone URLs.
 */
export function checkOrphanPages(crawlResults, config) {
  const findings = new Map(); // url -> finding
  // Use the host actually crawled (localhost/preview/production), not
  // config.host (always the production host) — sitemap URLs get rewritten to
  // --base before crawling, so comparing against config.host here would
  // never match any link and flag every single page as orphaned.
  const host = crawlResults.length > 0 ? new URL(crawlResults[0].url).host : config.host;
  const inbound = new Map(crawlResults.map((r) => [r.url, 0]));
  const urlSet = new Set(crawlResults.map((r) => r.url));

  for (const r of crawlResults) {
    if (!r.$ || r.fetchResult.status !== 200) continue;
    const links = extractInternalLinks(r.$, r.url, host);
    for (const link of links) {
      if (link !== r.url && urlSet.has(link)) {
        inbound.set(link, (inbound.get(link) || 0) + 1);
      }
    }
  }

  const allowlist = (config.orphanAllowlist || []).map((p) => new RegExp(p));
  for (const r of crawlResults) {
    const pathname = new URL(r.url).pathname;
    const isAllowlisted = allowlist.some((re) => re.test(pathname));
    const count = inbound.get(r.url) || 0;
    if (count === 0 && !isAllowlisted) {
      findings.set(r.url, finding('S01', 'error', `Orphan page: 0 inbound internal links from other sitemap pages`));
    } else {
      findings.set(r.url, finding('S01', 'pass', `${count} inbound internal link(s)`, { inbound: count }));
    }
  }
  return findings;
}

/** S02 — sitemap.xml itself: no redirect/404/noindex entries, no dup <loc>, absolute https, lastmod parseable. */
export function checkSitemapHygiene(sitemapXml, crawlResults) {
  const findings = [];
  const entries = parseSitemapEntries(sitemapXml);
  const seen = new Map();
  for (const e of entries) {
    seen.set(e.loc, (seen.get(e.loc) || 0) + 1);
  }
  const dupes = [...seen.entries()].filter(([, count]) => count > 1);
  if (dupes.length > 0) {
    findings.push(finding('S02', 'error', `Duplicate <loc> entries: ${dupes.map(([loc]) => loc).join(', ')}`));
  } else {
    findings.push(finding('S02', 'pass', 'No duplicate <loc> entries'));
  }

  const nonAbsolute = entries.filter((e) => !/^https:\/\//.test(e.loc || ''));
  if (nonAbsolute.length > 0) {
    findings.push(finding('S02', 'error', `Non-absolute/non-https <loc> entries: ${nonAbsolute.map((e) => e.loc).join(', ')}`));
  }

  const badLastmod = entries.filter((e) => e.lastmod && Number.isNaN(Date.parse(e.lastmod)));
  if (badLastmod.length > 0) {
    findings.push(finding('S02', 'error', `Unparseable <lastmod>: ${badLastmod.map((e) => `${e.loc} (${e.lastmod})`).join(', ')}`));
  }

  const byUrl = new Map(crawlResults.map((r) => [r.url, r]));
  // `entries` come straight from sitemap.xml (always production hrefs); when
  // testing a local/preview build, crawlResults is keyed by the rewritten
  // --base host, so rewrite before matching or every lookup here misses.
  const baseUrlObj = crawlResults.length > 0 ? new URL(crawlResults[0].url) : null;
  for (const e of entries) {
    let loc = e.loc;
    if (baseUrlObj) {
      try {
        const u = new URL(e.loc);
        u.protocol = baseUrlObj.protocol;
        u.host = baseUrlObj.host;
        loc = u.toString();
      } catch {
        /* leave as-is */
      }
    }
    const r = byUrl.get(loc);
    if (!r) continue;
    if (r.fetchResult.status >= 300 && r.fetchResult.status < 400) {
      findings.push(finding('S02', 'error', `Sitemap URL redirects: ${e.loc}`));
    } else if (r.fetchResult.status === 404) {
      findings.push(finding('S02', 'error', `Sitemap URL 404s: ${e.loc}`));
    }
  }

  return findings;
}

/** S03 — every legacy redirect resolves in a single 301 hop to a live (200) target. */
export async function checkRedirectMap(redirectMap, config) {
  const baseHost = config.host.startsWith('http') ? config.host : `https://${config.host}`;
  const limit = pLimit(config.redirectCheckConcurrency || 12);

  const results = await Promise.all(
    Object.entries(redirectMap).map(([source, expectedTarget]) =>
      limit(async () => {
        const sourceUrl = `${baseHost}${source}`;
        const res = await fetchPage(sourceUrl);
        if (res.status < 300 || res.status >= 400) {
          return finding('S03', 'error', `${source} did not redirect (status ${res.status})`, { source, expectedTarget });
        }
        const location = res.location || '';
        const normalizedLocation = location.startsWith('http') ? new URL(location).pathname : location;
        if (normalizedLocation !== expectedTarget) {
          return finding('S03', 'error', `${source} redirected to "${normalizedLocation}", expected "${expectedTarget}"`, {
            source,
            expectedTarget,
            actualTarget: normalizedLocation,
          });
        }
        const targetUrl = `${baseHost}${expectedTarget}`;
        const targetRes = await fetchPage(targetUrl);
        if (targetRes.status !== 200) {
          return finding('S03', 'error', `${source} -> ${expectedTarget} target returns ${targetRes.status}, expected 200`, {
            source,
            expectedTarget,
          });
        }
        return finding('S03', 'pass', `${source} -> ${expectedTarget} (single hop, target 200)`, { source });
      }),
    ),
  );
  return results;
}

/** S04 — declared static routes vs sitemap membership (warn-only, exact-path match). */
export function checkRouteVsSitemapDrift(routesFilePath, sitemapUrls, config) {
  const findings = [];
  const routePaths = extractStaticRoutePaths(routesFilePath);
  const sitemapPaths = new Set(sitemapUrls.map((u) => new URL(u).pathname));
  const routeAllowlist = (config.routeDriftAllowlist || []).map((p) => new RegExp(p));

  const missingFromSitemap = routePaths.filter(
    (p) => !sitemapPaths.has(p) && !routeAllowlist.some((re) => re.test(p)),
  );
  for (const p of missingFromSitemap) {
    findings.push(finding('S04', 'warn', `Declared route "${p}" is not in sitemap.xml`));
  }

  const routePathSet = new Set(routePaths);
  const missingFromRoutes = [...sitemapPaths].filter((p) => !routePathSet.has(p));
  for (const p of missingFromRoutes) {
    findings.push(finding('S04', 'warn', `Sitemap URL "${p}" has no exact matching static route (may be dynamic)`));
  }

  if (missingFromSitemap.length === 0 && missingFromRoutes.length === 0) {
    findings.push(finding('S04', 'pass', 'No route/sitemap drift detected'));
  }
  return findings;
}

/** S05 — compare current crawl to a stored baseline; word-count drop > 40% = error, title/canonical change = warn. */
export function checkBaselineDrift(crawlResults, perUrlFindingsByUrl, baseline) {
  if (!baseline) return [];
  const findings = [];
  for (const r of crawlResults) {
    const base = baseline[r.url];
    if (!base) continue;
    const current = perUrlFindingsByUrl.get(r.url) || [];
    const titleFinding = current.find((f) => f.rule === 'R03');
    const wordFinding = current.find((f) => f.rule === 'R07');
    const canonicalFinding = current.find((f) => f.rule === 'R08');

    const currentTitle = titleFinding?.details?.title;
    const currentWords = wordFinding?.details?.words;
    const currentCanonical = canonicalFinding?.details?.canonical;

    if (typeof currentWords === 'number' && typeof base.words === 'number' && base.words > 0) {
      const drop = (base.words - currentWords) / base.words;
      if (drop > 0.4) {
        findings.push(
          finding('S05', 'error', `Word count dropped ${Math.round(drop * 100)}% (${base.words} -> ${currentWords})`, {
            url: r.url,
          }),
        );
      }
    }
    if (currentTitle && base.title && currentTitle !== base.title) {
      findings.push(finding('S05', 'warn', `Title changed: "${base.title}" -> "${currentTitle}"`, { url: r.url }));
    }
    if (currentCanonical && base.canonical && currentCanonical !== base.canonical) {
      findings.push(finding('S05', 'warn', `Canonical changed: "${base.canonical}" -> "${currentCanonical}"`, { url: r.url }));
    }
  }
  return findings;
}

/** S06 — near-duplicate content detection (5-shingle MinHash), locale-scoped, boilerplate-stripped. Also emits R16. */
export function checkContentSimilarity(crawlResults, config) {
  const findings = [];
  const locales = config.locales || ['en', 'de', 'fr', 'es', 'ar', 'zh', 'pt', 'ru'];
  const pages = crawlResults
    .filter((r) => r.$ && r.fetchResult.status === 200)
    .map((r) => ({ url: r.url, pathname: new URL(r.url).pathname, text: r.mainText }));

  const boilerplate = detectBoilerplateBlocks(pages.map((p) => p.text));
  const cleaned = pages.map((p) => ({ ...p, text: stripBoilerplate(p.text, boilerplate) }));

  const byLocale = new Map();
  for (const p of cleaned) {
    const locale = localeOf(p.pathname, locales);
    if (!byLocale.has(locale)) byLocale.set(locale, []);
    byLocale.get(locale).push(p);
  }

  const localeDocFreq = new Map();
  for (const [locale, group] of byLocale) {
    localeDocFreq.set(locale, computeWordDocFrequency(group));
  }

  const clusterReport = [];
  for (const [locale, group] of byLocale) {
    const docFreq = localeDocFreq.get(locale);
    const { pairs } = computeSimilarityPairs(group);
    for (const pair of pairs) {
      const status = pair.similarity >= 0.85 ? 'error' : pair.similarity >= 0.6 ? 'warn' : null;
      if (status) {
        findings.push(
          finding('S06', status, `Near-duplicate content (${Math.round(pair.similarity * 100)}% similar): ${pair.a} <-> ${pair.b}`, {
            a: pair.a,
            b: pair.b,
            similarity: pair.similarity,
            locale,
          }),
        );
      }
    }
    const errorClusters = clusterFromPairs(pairs, 0.85);
    for (const cluster of errorClusters) {
      const groupTexts = group.filter((p) => cluster.includes(p.url));
      clusterReport.push({
        locale,
        urls: cluster,
        avgSimilarity:
          pairs
            .filter((p) => cluster.includes(p.a) && cluster.includes(p.b))
            .reduce((sum, p, _, arr) => sum + p.similarity / arr.length, 0) || null,
        perUrl: groupTexts.map((p) => ({
          url: p.url,
          totalWords: p.text.split(/\s+/).filter(Boolean).length,
          uniqueWords: uniqueWordCountFromDocFreq(p.text, docFreq),
        })),
      });
    }
  }

  // R16 unique-word-count per page (against same-locale siblings)
  const r16 = new Map();
  for (const [locale, group] of byLocale) {
    const docFreq = localeDocFreq.get(locale);
    for (const p of group) {
      const uw = uniqueWordCountFromDocFreq(p.text, docFreq);
      const status = uw < 40 ? 'error' : uw < 100 ? 'warn' : 'pass';
      r16.set(p.url, finding('R16', status, `${uw} words not shared with any sibling page`, { uniqueWords: uw }));
    }
  }

  return { findings, clusterReport, r16 };
}
