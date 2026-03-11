#!/usr/bin/env node

const BASE = process.env.SEO_CHECK_BASE_URL || 'https://www.bionixus.com';
const MUST_BE_200_NO_REDIRECT = ['/', '/de/', '/es/'];
const REQUEST_TIMEOUT_MS = 15000;

async function checkUrl(pathname) {
  const url = new URL(pathname, BASE).toString();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'manual',
      signal: controller.signal,
      headers: {
        'user-agent': 'BioNixusSeoHardCheck/1.0',
        accept: 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.8',
      },
    });

    const isRedirect = res.status >= 300 && res.status < 400;
    const location = res.headers.get('location') || '';
    const ok = res.status === 200;

    return { pathname, url, status: res.status, ok, isRedirect, location };
  } finally {
    clearTimeout(timer);
  }
}

async function main() {
  const results = await Promise.all(MUST_BE_200_NO_REDIRECT.map(checkUrl));
  const failures = [];

  for (const result of results) {
    if (!result.ok) {
      failures.push(
        `${result.pathname} -> HTTP ${result.status}${result.isRedirect ? ` (redirect to ${result.location || '<missing location header>'})` : ''}`,
      );
    }
  }

  if (failures.length > 0) {
    // eslint-disable-next-line no-console
    console.error(`SEO hard check FAILED for base ${BASE}\n${failures.map((f) => `- ${f}`).join('\n')}`);
    process.exit(1);
  }

  // eslint-disable-next-line no-console
  console.log(`SEO hard check passed (${results.length} URLs) for base ${BASE}`);
}

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error('SEO hard check crashed:', error);
  process.exit(1);
});
