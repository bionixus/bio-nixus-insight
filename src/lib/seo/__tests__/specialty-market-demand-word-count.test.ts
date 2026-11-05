import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';

const GSC_PRIORITY_PATHS = [
  '/singapore-ivd-market-access',
  '/japan-medical-disposables-market',
  '/japan-neurology-devices-market',
  '/mek-inhibitors-market',
  '/febrile-neutropenia-market',
  '/italy-portable-diagnostic-devices-market',
  '/italy-medical-device-connectivity-market',
  '/gcc-medication-management-market',
] as const;

function mainWordCount(html: string): number {
  const mainMatch = html.match(/<main[\s\S]*?<\/main>/i);
  const block = mainMatch?.[0] ?? html;
  const text = block.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.split(/\s+/).filter(Boolean).length;
}

describe('GSC-priority specialty market demand pages (SSR word count)', () => {
  const counts: Record<string, number> = {};

  beforeAll(async () => {
    HelmetProvider.canUseDOM = false;
    for (const path of GSC_PRIORITY_PATHS) {
      const { html } = await render(path, {});
      counts[path] = mainWordCount(html);
    }
  });

  it.each(GSC_PRIORITY_PATHS)('%s ships at least 2,000 visible words in SSR HTML', (path) => {
    expect(counts[path], `${path} has ${counts[path]} words`).toBeGreaterThanOrEqual(2000);
  });
});
