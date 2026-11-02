import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';

const PRIORITY_PATHS = [
  '/japan-medical-disposables-market',
  '/italy-portable-diagnostic-devices-market',
  '/gcc-medication-management-market',
  '/singapore-ivd-market-access',
] as const;

function visibleMainText(html: string): string {
  const mainMatch = html.match(/<main[\s\S]*?>([\s\S]*?)<\/main>/i);
  const block = mainMatch?.[1] ?? html;
  return block
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

describe('GSC priority specialty demand pages — SSR depth', () => {
  for (const path of PRIORITY_PATHS) {
    describe(path, () => {
      let html = '';

      beforeAll(async () => {
        HelmetProvider.canUseDOM = false;
        const rendered = await render(path);
        html = rendered.html;
      });

      it('ships ≥2000 visible main words and deep-dive section', () => {
        const words = visibleMainText(html).split(/\s+/).filter(Boolean).length;
        expect(words).toBeGreaterThanOrEqual(2000);
        expect(html).toContain('id="deep-dive"');
        expect(html).toContain('href="/healthcare-market-research"');
        expect(html).toContain('<details');
      });
    });
  }
});
