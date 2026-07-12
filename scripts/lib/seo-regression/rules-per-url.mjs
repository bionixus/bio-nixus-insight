import { wordCount } from './html-helpers.mjs';

// The site's own 8 UI locales are always allowed, plus 'x-default'. Beyond
// that, country-targeting pages (e.g. a Danish-market listicle written in
// English) deliberately declare hreflang values for markets the site has no
// full UI translation for — real, syntactically-valid BCP-47-ish language
// subtags are accepted rather than restricted to the UI locale list.
const CORE_UI_LOCALES = new Set(['en', 'de', 'fr', 'es', 'ar', 'zh', 'pt', 'ru', 'x-default']);
const BCP47_LANGUAGE_TAG_RE = /^[a-z]{2,3}(-[a-z]{2,4})?$/i;

function finding(rule, status, message, details) {
  return { rule, status, message, ...(details !== undefined ? { details } : {}) };
}

function isAllowedHreflangValue(value, config) {
  const base = value.toLowerCase();
  if (CORE_UI_LOCALES.has(base)) return true;
  const region = new Set((config.regionVariants || []).map((v) => v.toLowerCase()));
  if (region.has(base)) return true;
  return BCP47_LANGUAGE_TAG_RE.test(value);
}

function localeFromPath(pathname, config) {
  const locales = config.locales || ['en', 'de', 'fr', 'es', 'ar', 'zh', 'pt', 'ru'];
  for (const lang of locales) {
    if (lang === 'en') continue;
    if (pathname === `/${lang}` || pathname.startsWith(`/${lang}/`)) return lang;
  }
  return 'en';
}

function isHtmlLangExempt(pathname, config) {
  return (config.htmlLangExemptPatterns || []).some((p) => new RegExp(p).test(pathname));
}

function matchesTrailingSlashPolicy(requested, actual, policy) {
  if (requested === actual) return true;
  if (policy === 'no-trailing-slash') {
    return requested.replace(/\/+$/, '') === actual.replace(/\/+$/, '') && requested !== '/' && actual !== '/';
  }
  return false;
}

/**
 * Run all single-page (non-cross-URL) rules against one fetched+parsed page.
 * `pageUrl` is the canonical sitemap URL under test; `$` is the cheerio doc
 * for `fetchResult.html` (undefined for non-200/redirect responses).
 */
export function runPerUrlRules({ pageUrl, fetchResult, $, visibleText, config }) {
  const findings = [];
  const pathname = new URL(pageUrl).pathname;

  // R01 status-200
  if (fetchResult.error) {
    findings.push(finding('R01', 'error', `Network error: ${fetchResult.error}`));
  } else if (fetchResult.status >= 300 && fetchResult.status < 400) {
    findings.push(
      finding('R01', 'error', `Sitemap URL redirects (${fetchResult.status} -> ${fetchResult.location})`, {
        location: fetchResult.location,
      }),
    );
  } else if (fetchResult.status !== 200) {
    findings.push(finding('R01', 'error', `Expected 200, got ${fetchResult.status}`));
  } else {
    findings.push(finding('R01', 'pass', 'Status 200'));
  }

  // Everything below requires a parsed 200 response.
  if (!$ || fetchResult.status !== 200) {
    return findings;
  }

  // R02 content-type
  const ct = fetchResult.contentType.toLowerCase();
  if (ct.includes('text/html') && ct.includes('charset=utf-8')) {
    findings.push(finding('R02', 'pass', 'Content-Type is text/html; charset=utf-8'));
  } else {
    findings.push(finding('R02', 'error', `Unexpected Content-Type: "${fetchResult.contentType}"`));
  }

  // R03 title-present
  const titles = $('head title');
  if (titles.length === 0) {
    findings.push(finding('R03', 'error', 'No <title> tag found'));
  } else if (titles.length > 1) {
    findings.push(finding('R03', 'error', `${titles.length} <title> tags found, expected exactly one`));
  } else {
    const title = titles.first().text().trim();
    if (title.length < 10 || title.length > 65) {
      findings.push(
        finding('R03', 'error', `Title length ${title.length} outside 10-65 char range: "${title}"`, { title }),
      );
    } else {
      findings.push(finding('R03', 'pass', `Title OK (${title.length} chars)`, { title }));
    }
  }

  // R05 meta-description (presence/length only here; duplicate check is cross-URL)
  const metaDescTags = $('head meta[name="description" i]');
  if (metaDescTags.length === 0) {
    findings.push(finding('R05', 'error', 'No meta description found'));
  } else if (metaDescTags.length > 1) {
    findings.push(finding('R05', 'error', `${metaDescTags.length} meta description tags found, expected exactly one`));
  } else {
    const desc = (metaDescTags.first().attr('content') || '').trim();
    if (desc.length < 50 || desc.length > 160) {
      findings.push(
        finding('R05', 'error', `Meta description length ${desc.length} outside 50-160 char range`, { description: desc }),
      );
    } else {
      findings.push(finding('R05', 'pass', `Meta description OK (${desc.length} chars)`, { description: desc }));
    }
  }

  // R06 h1-present
  const h1s = $('h1');
  const nonEmptyH1s = h1s.filter((_, el) => $(el).text().trim().length > 0);
  if (nonEmptyH1s.length !== 1) {
    findings.push(
      finding('R06', 'error', `Expected exactly one non-empty <h1>, found ${nonEmptyH1s.length} (of ${h1s.length} total)`),
    );
  } else {
    findings.push(finding('R06', 'pass', 'Exactly one non-empty <h1>'));
  }

  // R07 / R07b min-word-count
  const words = wordCount(visibleText);
  const override = (config.minWordCountOverrides || []).find((o) => new RegExp(o.pattern).test(pathname));
  const threshold = override ? override.min : config.minWordCountDefault ?? 150;
  if (words < 30) {
    findings.push(finding('R07b', 'error', `Skeleton page: only ${words} words (threshold 30)`, { words }));
    findings.push(finding('R07', 'error', `Word count ${words} below threshold ${threshold}`, { words, threshold }));
  } else if (words < threshold) {
    findings.push(finding('R07', 'error', `Word count ${words} below threshold ${threshold}`, { words, threshold }));
    findings.push(finding('R07b', 'pass', `Not a skeleton page (${words} words)`, { words }));
  } else {
    findings.push(finding('R07', 'pass', `Word count ${words} meets threshold ${threshold}`, { words, threshold }));
    findings.push(finding('R07b', 'pass', `Not a skeleton page (${words} words)`, { words }));
  }

  // R08 canonical
  const canonicals = $('head link[rel="canonical" i]');
  if (canonicals.length === 0) {
    findings.push(finding('R08', 'error', 'No canonical link found'));
  } else if (canonicals.length > 1) {
    findings.push(finding('R08', 'error', `${canonicals.length} canonical links found, expected exactly one`));
  } else {
    const href = (canonicals.first().attr('href') || '').trim();
    let ok = false;
    let reason = '';
    try {
      const u = new URL(href);
      if (u.protocol !== 'https:') {
        reason = `canonical is not https: "${href}"`;
      } else if (u.host !== config.host) {
        reason = `canonical host "${u.host}" does not match configured host "${config.host}"`;
      } else if (!matchesTrailingSlashPolicy(pathname, u.pathname, config.trailingSlashPolicy)) {
        reason = `canonical path "${u.pathname}" does not match requested path "${pathname}"`;
      } else {
        ok = true;
      }
    } catch {
      reason = `canonical is not an absolute URL: "${href}"`;
    }
    if (ok) {
      findings.push(finding('R08', 'pass', `Canonical matches requested URL: ${href}`, { canonical: href }));
    } else {
      findings.push(finding('R08', 'error', reason, { canonical: href }));
    }
  }

  // R09 hreflang-structure
  const hreflangLinks = $('head link[rel="alternate" i][hreflang]');
  if (hreflangLinks.length > 0) {
    const values = [];
    let allAbsoluteSameHost = true;
    hreflangLinks.each((_, el) => {
      const lang = ($(el).attr('hreflang') || '').trim();
      const href = ($(el).attr('href') || '').trim();
      values.push(lang);
      try {
        const u = new URL(href);
        if (u.host !== config.host) allAbsoluteSameHost = false;
      } catch {
        allAbsoluteSameHost = false;
      }
    });
    const invalid = values.filter((v) => !isAllowedHreflangValue(v, config));
    const xDefaultCount = values.filter((v) => v.toLowerCase() === 'x-default').length;
    const htmlLang = ($('html').attr('lang') || '').trim().toLowerCase();
    const selfPrimary = htmlLang.split('-')[0];
    const hasSelfRef = values.some((v) => v.toLowerCase().split('-')[0] === selfPrimary);

    const problems = [];
    if (invalid.length > 0) problems.push(`invalid hreflang values: ${invalid.join(', ')}`);
    if (xDefaultCount !== 1) problems.push(`expected exactly one x-default, found ${xDefaultCount}`);
    if (!hasSelfRef) problems.push(`no self-referencing hreflang matching html[lang]="${htmlLang}"`);
    if (!allAbsoluteSameHost) problems.push('one or more hreflang URLs are not absolute / same-host');

    if (problems.length > 0) {
      findings.push(finding('R09', 'error', problems.join('; '), { values }));
    } else {
      findings.push(finding('R09', 'pass', `hreflang structure OK (${values.length} entries)`, { values }));
    }
  } else {
    findings.push(finding('R09', 'warn', 'No hreflang links present'));
  }

  // R11 html-lang
  const htmlLangAttr = ($('html').attr('lang') || '').trim();
  const expectedLocale = localeFromPath(pathname, config);
  if (!htmlLangAttr) {
    findings.push(finding('R11', 'error', 'No html[lang] attribute present'));
  } else if (isHtmlLangExempt(pathname, config)) {
    findings.push(finding('R11', 'pass', `html[lang]="${htmlLangAttr}" (exempt: Latin-slug non-English content under an unprefixed URL)`));
  } else if (htmlLangAttr.toLowerCase().split('-')[0] !== expectedLocale.toLowerCase()) {
    findings.push(
      finding('R11', 'error', `html[lang]="${htmlLangAttr}" does not match URL locale prefix (expected "${expectedLocale}")`),
    );
  } else {
    findings.push(finding('R11', 'pass', `html[lang]="${htmlLangAttr}" matches URL locale`));
  }

  // R12 og-tags (image reachability is validated separately/deduplicated by the orchestrator)
  const ogTitle = $('head meta[property="og:title" i]').attr('content');
  const ogDesc = $('head meta[property="og:description" i]').attr('content');
  const ogUrl = $('head meta[property="og:url" i]').attr('content');
  const ogImage = $('head meta[property="og:image" i]').attr('content');
  const missing = [];
  if (!ogTitle) missing.push('og:title');
  if (!ogDesc) missing.push('og:description');
  if (!ogUrl) missing.push('og:url');
  if (!ogImage) missing.push('og:image');
  if (missing.length > 0) {
    findings.push(finding('R12', 'error', `Missing OG tags: ${missing.join(', ')}`));
  } else {
    const canonicalHref = canonicals.first().attr('href');
    if (canonicalHref && ogUrl !== canonicalHref) {
      findings.push(finding('R12', 'error', `og:url "${ogUrl}" does not match canonical "${canonicalHref}"`, { ogImage }));
    } else {
      findings.push(finding('R12', 'pass', 'OG tags present and consistent', { ogImage }));
    }
  }

  // R13 jsonld-valid
  const ldScripts = $('script[type="application/ld+json"]');
  let jsonldError = null;
  let hasOrganization = false;
  let faqPageOk = true;
  ldScripts.each((_, el) => {
    const raw = $(el).contents().text();
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (e) {
      jsonldError = `Invalid JSON in <script type="application/ld+json">: ${e.message}`;
      return;
    }
    const nodes = Array.isArray(parsed) ? parsed : parsed['@graph'] ? parsed['@graph'] : [parsed];
    for (const node of nodes) {
      if (!node || typeof node !== 'object') continue;
      if (!node['@context'] || !node['@type']) {
        jsonldError = jsonldError || 'JSON-LD node missing @context/@type';
      }
      const type = String(node['@type'] || '');
      if (type === 'Organization') hasOrganization = true;
      if (type === 'FAQPage') {
        const q = node.mainEntity;
        const count = Array.isArray(q) ? q.length : q ? 1 : 0;
        if (count === 0) faqPageOk = false;
      }
    }
  });
  if (jsonldError) {
    findings.push(finding('R13', 'error', jsonldError));
  } else if (!hasOrganization && !(config.jsonldOrganizationAllowlist || []).some((p) => new RegExp(p).test(pathname))) {
    findings.push(finding('R13', 'error', 'No Organization JSON-LD schema found on page'));
  } else if (!faqPageOk) {
    findings.push(finding('R13', 'error', 'FAQPage JSON-LD present with zero questions'));
  } else {
    findings.push(finding('R13', 'pass', `JSON-LD OK (${ldScripts.length} script(s))`));
  }

  // R14 noindex-guard
  const robotsMeta = ($('head meta[name="robots" i]').attr('content') || '').toLowerCase();
  const isAllowlisted = (config.noindexAllowlist || []).some((p) => new RegExp(p).test(pathname));
  if (robotsMeta.includes('noindex') && !isAllowlisted) {
    findings.push(finding('R14', 'error', 'Page has noindex but is listed in sitemap and not allowlisted'));
  } else {
    findings.push(finding('R14', 'pass', 'No unexpected noindex'));
  }

  // R15 helmet-leakage
  const titleText = titles.first().text() || '';
  const descText = metaDescTags.first().attr('content') || '';
  const canonicalHref = canonicals.first().attr('href') || '';
  const leakage = [];
  if (/\{/.test(titleText)) leakage.push('literal "{" in <title>');
  for (const [label, value] of [['title', titleText], ['description', descText], ['canonical', canonicalHref]]) {
    if (/\bundefined\b/i.test(value) || /\bnull\b/i.test(value)) {
      leakage.push(`"undefined"/"null" leaked into ${label}: "${value}"`);
    }
  }
  if (leakage.length > 0) {
    findings.push(finding('R15', 'error', leakage.join('; ')));
  } else {
    findings.push(finding('R15', 'pass', 'No helmet interpolation leakage detected'));
  }

  return findings;
}
