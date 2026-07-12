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

/** R04/R05 — cross-URL exact-duplicate detection for titles or meta descriptions. Same-locale dup = error, cross-locale = warn. */
export function checkCrossUrlDuplicates(crawlResults, rule, extractValue, config) {
  const findings = new Map();
  const locales = config.locales || ['en', 'de', 'fr', 'es', 'ar', 'zh', 'pt', 'ru'];
  const exemptPatterns = (config.duplicateTitleExemptPatterns || []).map((p) => new RegExp(p));

  const groups = new Map(); // value -> [{url, locale}]
  for (const r of crawlResults) {
    if (!r.$ || r.fetchResult.status !== 200) continue;
    const pathname = new URL(r.url).pathname;
    if (exemptPatterns.some((re) => re.test(pathname))) continue;
    const value = extractValue(r.$);
    if (!value) continue;
    const locale = localeOf(pathname, locales);
    if (!groups.has(value)) groups.set(value, []);
    groups.get(value).push({ url: r.url, locale });
  }

  for (const [value, members] of groups) {
    if (members.length < 2) continue;
    const localeCounts = new Map();
    for (const m of members) localeCounts.set(m.locale, (localeCounts.get(m.locale) || 0) + 1);
    const hasSameLocaleDup = [...localeCounts.values()].some((c) => c > 1);
    const status = hasSameLocaleDup ? 'error' : 'warn';
    const urls = members.map((m) => m.url);
    for (const url of urls) {
      findings.set(url, finding(rule, status, `Duplicate value shared with ${urls.length - 1} other URL(s): "${value.slice(0, 80)}"`, {
        value,
        sharedWith: urls.filter((u) => u !== url),
      }));
    }
  }
  return findings;
}

/** R10 — hreflang reciprocity: if A lists B, B must exist, return 200, and list A back with correct lang. */
export function checkHreflangReciprocity(crawlResults) {
  const findings = new Map();
  const byUrl = new Map(crawlResults.map((r) => [r.url, r]));
  // hreflang/canonical hrefs are always rendered as absolute production URLs
  // (e.g. https://www.bionixus.com/...) regardless of what host is actually
  // being crawled — when testing a local build or preview deploy, `crawlResults`
  // is keyed by the rewritten --base host, so hrefs pulled straight from the
  // HTML need the same rewrite applied before they'll match `byUrl`.
  const baseUrlObj = crawlResults.length > 0 ? new URL(crawlResults[0].url) : null;
  function toBaseHost(url) {
    if (!baseUrlObj) return url;
    try {
      const u = new URL(url);
      u.protocol = baseUrlObj.protocol;
      u.host = baseUrlObj.host;
      return u.toString();
    } catch {
      return url;
    }
  }

  function hreflangMap(r) {
    if (!r.$) return new Map();
    const map = new Map();
    r.$('head link[rel="alternate" i][hreflang]').each((_, el) => {
      const lang = (r.$(el).attr('hreflang') || '').trim().toLowerCase();
      const href = toBaseHost((r.$(el).attr('href') || '').trim());
      if (lang && href) map.set(href, lang);
    });
    return map;
  }

  for (const r of crawlResults) {
    if (!r.$ || r.fetchResult.status !== 200) continue;
    const alternates = hreflangMap(r);
    const problems = [];
    for (const [altUrl, lang] of alternates) {
      if (lang === 'x-default') continue; // x-default is not required to reciprocate
      const target = byUrl.get(altUrl);
      if (!target) {
        problems.push(`alternate "${altUrl}" (${lang}) is not in the crawl set`);
        continue;
      }
      if (target.fetchResult.status !== 200) {
        problems.push(`alternate "${altUrl}" (${lang}) does not return 200`);
        continue;
      }
      const targetAlternates = hreflangMap(target);
      const backLang = targetAlternates.get(r.url);
      const expectedLang = (r.$('html').attr('lang') || '').trim().toLowerCase();
      if (!targetAlternates.has(r.url)) {
        problems.push(`alternate "${altUrl}" does not list this page back`);
      } else if (backLang.split('-')[0] !== expectedLang.split('-')[0]) {
        problems.push(`alternate "${altUrl}" lists this page back with lang "${backLang}", expected "${expectedLang}"`);
      }
    }
    if (problems.length > 0) {
      findings.set(r.url, finding('R10', 'error', problems.join('; ')));
    } else if (alternates.size > 0) {
      findings.set(r.url, finding('R10', 'pass', 'All hreflang alternates reciprocate correctly'));
    }
  }
  return findings;
}
