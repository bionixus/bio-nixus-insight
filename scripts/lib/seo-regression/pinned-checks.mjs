import { fetchPage } from './fetch-page.mjs';
import { loadHtml } from './html-helpers.mjs';

function finding(rule, status, message, details) {
  return { rule, status, message, ...(details !== undefined ? { details } : {}) };
}

/**
 * Run the explicit named regression pins from config/pinned-checks.json —
 * exact assertions for the exact pages where a specific bug was previously
 * found, so that precise regression can never silently return even if the
 * generic rules above are ever loosened or miss a variant of the same bug.
 */
export async function runPinnedChecks(pinnedConfig, base) {
  const findings = [];
  if (!pinnedConfig?.checks) return findings;

  for (const check of pinnedConfig.checks) {
    const url = `${base}${check.url}`;
    const res = await fetchPage(url);

    if (check.expectedRedirectTo) {
      const isRedirect = res.status >= 300 && res.status < 400;
      const location = res.location?.startsWith('http') ? new URL(res.location).pathname : res.location;
      if (!isRedirect || location !== check.expectedRedirectTo) {
        findings.push(
          finding(
            'PINNED',
            'error',
            `${check.url}: expected redirect to "${check.expectedRedirectTo}", got status ${res.status} -> "${location}" (regression of: ${check.bug})`,
          ),
        );
      } else {
        findings.push(finding('PINNED', 'pass', `${check.url}: redirects correctly to ${check.expectedRedirectTo}`));
      }
      continue;
    }

    if (res.status !== 200) {
      findings.push(finding('PINNED', 'error', `${check.url}: expected 200, got ${res.status} (regression of: ${check.bug})`));
      continue;
    }

    const $ = loadHtml(res.html);
    const problems = [];

    if (typeof check.minWords === 'number') {
      const text = $('body').text().replace(/\s+/g, ' ').trim();
      const words = text ? text.split(' ').length : 0;
      if (words < check.minWords) problems.push(`word count ${words} below pinned minimum ${check.minWords}`);
    }

    if (Array.isArray(check.mustContain)) {
      for (const needle of check.mustContain) {
        if (!res.html.includes(needle)) problems.push(`missing required text "${needle}"`);
      }
    }

    if (Array.isArray(check.mustNotContain)) {
      const bodyText = $('body').text();
      for (const needle of check.mustNotContain) {
        const re = new RegExp(`\\b${needle}\\b`, 'i');
        if (re.test(bodyText)) problems.push(`forbidden text "${needle}" found in body`);
      }
    }

    if (check.expectedHtmlLangPrefix) {
      const lang = ($('html').attr('lang') || '').toLowerCase();
      if (!lang.startsWith(check.expectedHtmlLangPrefix.toLowerCase())) {
        problems.push(`html[lang]="${lang}" does not start with expected "${check.expectedHtmlLangPrefix}"`);
      }
    }

    if (check.expectedHreflangSelfPrefix) {
      const values = [];
      $('head link[rel="alternate" i][hreflang]').each((_, el) => values.push(($(el).attr('hreflang') || '').toLowerCase()));
      const hasSelf = values.some((v) => v.split('-')[0] === check.expectedHreflangSelfPrefix.toLowerCase());
      if (!hasSelf) {
        problems.push(
          `no self-referencing hreflang matching "${check.expectedHreflangSelfPrefix}" (found: ${values.join(', ') || 'none'})`,
        );
      }
    }

    if (check.expectedCanonical) {
      const canonical = $('head link[rel="canonical" i]').attr('href');
      if (canonical !== check.expectedCanonical) {
        problems.push(`canonical "${canonical}" does not match expected "${check.expectedCanonical}"`);
      }
    }

    if (problems.length > 0) {
      findings.push(finding('PINNED', 'error', `${check.url}: ${problems.join('; ')} (regression of: ${check.bug})`));
    } else {
      findings.push(finding('PINNED', 'pass', `${check.url}: all pinned assertions hold`));
    }
  }

  return findings;
}
