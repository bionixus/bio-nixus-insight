import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { SPECIALTY_MARKET_DEMAND_BY_SLUG } from '@/data/specialtyMarketDemandContent';

const P0_SLUGS = [
  'japan-medical-disposables-market',
  'japan-neurology-devices-market',
  'singapore-ivd-market-access',
  'mek-inhibitors-market',
  'febrile-neutropenia-market',
  'italy-portable-diagnostic-devices-market',
  'italy-medical-device-connectivity-market',
  'gcc-medication-management-market',
] as const;

function mainWordCount(html: string): number {
  const mainMatch = html.match(/<main[\s\S]*?<\/main>/i);
  const block = mainMatch?.[0] ?? html;
  return block
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(/\s+/).filter(Boolean).length;
}

describe('GSC P0 specialty market demand pages (Nov 2026)', () => {
  for (const slug of P0_SLUGS) {
    describe(`/${slug}`, () => {
      const content = SPECIALTY_MARKET_DEMAND_BY_SLUG[slug];
      let html = '';
      let head = '';

      beforeAll(async () => {
        HelmetProvider.canUseDOM = false;
        const page = await render(`/${slug}`, {});
        html = page.html;
        head = [page.helmetData.title, page.helmetData.meta, page.helmetData.script]
          .map((part) => part.toString())
          .join('\n');
      });

      it('has decision blueprint, geo answer, and dateModified 2026-11-04', () => {
        expect(content.decisionBlueprint?.why.length).toBeGreaterThan(40);
        expect(content.geoAnswer?.length).toBeGreaterThan(80);
        expect(content.dateModified).toBe('2026-11-04');
      });

      it('SSRs at least 2,000 visible main words', () => {
        const words = mainWordCount(html);
        expect(words).toBeGreaterThanOrEqual(2000);
      });

      it('SSRs hub link, geo answer, details FAQ, and JSON-LD dateModified', () => {
        expect(html).toContain('href="/healthcare-market-research"');
        expect(html).toContain('Short answer:');
        expect(html).toContain('<details');
        expect(head).toContain('"dateModified":"2026-11-04"');
        expect(html.match(/<h1[\s>]/g)?.length).toBe(1);
      });
    });
  }
});
