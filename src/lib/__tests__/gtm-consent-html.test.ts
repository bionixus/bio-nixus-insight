import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const GTM_CONTAINER_ID = 'GTM-NQ84B7ZH';

const root = join(dirname(fileURLToPath(import.meta.url)), '../../..');

function headOf(html: string) {
  const start = html.search(/<head\b/i);
  const end = html.search(/<\/head>/i);
  return html.slice(start, end);
}

function expectConsentBeforeGtm(html: string, containerId: string) {
  const head = headOf(html);
  const consent = head.indexOf("gtag('consent', 'default'");
  const gtm = head.indexOf('https://www.googletagmanager.com/gtm.js?id=');
  expect(consent).toBeGreaterThan(-1);
  expect(gtm).toBeGreaterThan(consent);
  for (const key of ['analytics_storage', 'ad_storage', 'ad_user_data', 'ad_personalization']) {
    expect(head.slice(consent, gtm)).toContain(`${key}: 'denied'`);
  }
  expect(head).toContain(`dataLayer','${containerId}'`);
  expect(html).toContain(`ns.html?id=${containerId}`);
  const bodyAt = html.search(/<body\b/i);
  const noscriptAt = html.indexOf('<noscript><iframe src="https://www.googletagmanager.com/ns.html');
  expect(noscriptAt).toBeGreaterThan(bodyAt);
  expect(html.slice(bodyAt, noscriptAt)).not.toContain('<div');
}

describe('Consent Mode snippet', () => {
  it('places a denied consent default ahead of GTM in index.html', () => {
    const html = readFileSync(join(root, 'index.html'), 'utf8');
    expectConsentBeforeGtm(html, '%VITE_GTM_ID%');
    expect(html).not.toContain('GTM-NQ84B7ZH');
  });

  it('adds the same block and a cookie banner to every public/conf page', () => {
    const files = readdirSync(join(root, 'public/conf')).filter((name) => name.endsWith('.html')).sort();
    expect(files).toHaveLength(16);
    expect(files).toEqual(expect.arrayContaining(['iqvia-alternative.html', 'nielsen-alternative.html']));
    for (const file of files) {
      const html = readFileSync(join(root, 'public/conf', file), 'utf8');
      expectConsentBeforeGtm(html, GTM_CONTAINER_ID);
      expect(html).toContain('id="bionixus-cookie-banner"');
      expect(html).toContain("localStorage.getItem('bionixus-cookie-consent') === 'accepted'");
    }
  });

});
