import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { SPECIALTY_MARKET_DEMAND_BY_SLUG } from '@/data/specialtyMarketDemandContent';

function visibleWordCount(html: string): number {
  const main = html.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? html;
  const text = main
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text.split(/\s+/).filter(Boolean).length;
}

const EXPANDED_SLUGS = [
  'singapore-medtech-manufacturing-market',
  'gcc-medication-management-market',
] as const;

describe('GSC priority specialty pages — SSR word count', () => {
  beforeAll(() => {
    HelmetProvider.canUseDOM = false;
  });

  for (const slug of EXPANDED_SLUGS) {
    it(`/${slug} renders at least 2,000 visible words`, async () => {
      const content = SPECIALTY_MARKET_DEMAND_BY_SLUG[slug];
      expect(content).toBeTruthy();
      const { html } = await render(`/${slug}`, {});
      const words = visibleWordCount(html);
      expect(words).toBeGreaterThanOrEqual(2000);
    }, 120_000);
  }
});
