import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';
import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { isValidSchemaNode } from '@/components/SchemaMarkup';
import { getCanonicalPath, getHreflangLinks } from '@/lib/seo';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import {
  CHINA_EN_INTL_PAGE,
  CHINA_ZH_INTL_PAGE,
  INTL_MONEY_PAGES,
  JAPAN_EN_INTL_PAGE,
  JAPAN_JA_INTL_PAGE,
  SINGAPORE_INTL_PAGE,
  USA_INTL_PAGE,
  countPageWords,
} from '@/data/intl-outbound';

const root = process.cwd();
const vercel = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8')) as {
  rewrites: { source: string; destination: string }[];
};
const routesSource = readFileSync(join(root, 'src/routes.tsx'), 'utf8');
const sitemapScript = readFileSync(join(root, 'scripts/generate-sitemap.mjs'), 'utf8');
const llms = readFileSync(join(root, 'public/llms.txt'), 'utf8');
const hub = readFileSync(join(root, 'src/pages/healthcare-research/HubPage.tsx'), 'utf8');
const industries = readFileSync(join(root, 'src/pages/industries/BionixusIndustries.tsx'), 'utf8');

type JsonLdNode = Record<string, unknown>;

function text(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function jsonLdFromHtml(html: string): JsonLdNode[] {
  return [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].flatMap((match) => {
    try {
      const parsed = JSON.parse(match[1]);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      return [];
    }
  });
}

describe('international outbound money pages', () => {
  it('registers six corridor pages before the industry slug catch-all', () => {
    for (const page of INTL_MONEY_PAGES) {
      expect(routesSource).toContain(`path: '${page.path}'`);
    }
    const usa = routesSource.indexOf("path: '/market-research/usa'");
    const catchAll = routesSource.indexOf("path: '/market-research/:industrySlug'");
    expect(usa).toBeGreaterThan(-1);
    expect(catchAll).toBeGreaterThan(usa);
  });

  it('wires vercel SSR rewrites, sitemap, llms and hub links', () => {
    for (const page of INTL_MONEY_PAGES) {
      expect(vercel.rewrites.some((row) => row.source === page.path && row.destination.includes(page.path))).toBe(
        true,
      );
      expect(sitemapScript).toContain(`path: '${page.path}'`);
      expect(llms).toContain(`https://www.bionixus.com${page.path}`);
    }
    expect(hub).toContain('/market-research/usa');
    expect(hub).toContain('/market-research/japan');
    expect(hub).toContain('/market-research/china');
    expect(hub).toContain('/market-research/singapore');
    expect(industries).toContain('/market-research/usa');
    expect(readFileSync(join(root, 'src/pages/MarketResearch.tsx'), 'utf8')).toContain('/market-research/usa');
    expect(readFileSync(join(root, 'src/data/blog-chinese-companies-entering-ksa-uae.ts'), 'utf8')).toContain(
      '/market-research/china',
    );
    expect(readFileSync(join(root, 'src/data/blog-australia-gcc-market-entry-research.ts'), 'utf8')).toContain(
      '/market-research/singapore',
    );
    expect(readFileSync(join(root, 'src/pages/healthcare-research/HubPage.tsx'), 'utf8')).not.toContain(
      '/home-staging',
    );
  });

  it('keeps reciprocal hreflang pairs for Japan and China', () => {
    const japanEn = getHreflangLinks('/market-research/japan');
    const japanJa = getHreflangLinks('/ja/market-research/japan');
    expect(japanEn.map((link) => link.lang).sort()).toEqual(['en', 'ja', 'x-default']);
    expect(japanJa.map((link) => link.href)).toEqual(japanEn.map((link) => link.href));
    expect(japanEn.find((link) => link.lang === 'ja')?.href).toBe('https://www.bionixus.com/ja/market-research/japan');

    const chinaEn = getHreflangLinks('/market-research/china');
    const chinaZh = getHreflangLinks('/zh/market-research/china');
    expect(chinaEn.map((link) => link.lang).sort()).toEqual(['en', 'x-default', 'zh-Hans']);
    expect(chinaZh.map((link) => link.href)).toEqual(chinaEn.map((link) => link.href));
  });

  it('uses exact CTR titles and descriptions', () => {
    for (const page of INTL_MONEY_PAGES) {
      expect(getCtrSeo(page.path)).toEqual({ title: page.title, description: page.description });
    }
  });

  it('has one H1 phrase, seven FAQs, 2,000–3,000 content words, and native-review flags', () => {
    for (const page of INTL_MONEY_PAGES) {
      expect(page.h1.length).toBeGreaterThan(8);
      expect(page.title.length).toBeGreaterThanOrEqual(50);
      expect(page.title.length).toBeLessThanOrEqual(60);
      expect(page.description.length).toBeGreaterThanOrEqual(150);
      expect(page.description.length).toBeLessThanOrEqual(160);
      expect(page.faqs).toHaveLength(7);
      const words = countPageWords(page);
      expect(words).toBeGreaterThanOrEqual(2000);
      expect(words).toBeLessThanOrEqual(3200);
    }
    expect(JAPAN_JA_INTL_PAGE.nativeReviewRequired).toBe(true);
    expect(CHINA_ZH_INTL_PAGE.nativeReviewRequired).toBe(true);
    expect(USA_INTL_PAGE.nativeReviewRequired).toBe(false);
    expect(JAPAN_EN_INTL_PAGE.nativeReviewRequired).toBe(false);
    expect(CHINA_EN_INTL_PAGE.nativeReviewRequired).toBe(false);
    expect(SINGAPORE_INTL_PAGE.nativeReviewRequired).toBe(false);
  });

  it('never claims guaranteed accuracy or offices in Japan, China or Singapore', () => {
    const corpus = INTL_MONEY_PAGES.map((page) => JSON.stringify(page)).join('\n');
    expect(corpus).not.toMatch(/we guarantee(?:d)? (?:the )?accuracy/i);
    expect(corpus).not.toMatch(/accuracy is guaranteed/i);
    expect(corpus).toMatch(/Findings are not guaranteed/i);
    expect(corpus).toMatch(/never claims guaranteed accuracy/i);
    expect(corpus).toMatch(/not a claim that the findings are guaranteed/i);
    expect(corpus).toMatch(/do not claim guaranteed accuracy of findings/i);
    expect(corpus).not.toMatch(/our (?:Tokyo|Osaka|Shanghai|Beijing|Shenzhen|Singapore) office/i);
    expect(corpus).toMatch(/does not claim an office in Japan/);
    expect(corpus).toMatch(/does not claim an office in China/);
    expect(corpus).toMatch(/does not claim an office in Singapore/);
    expect(JAPAN_JA_INTL_PAGE.faqs[0].answer).toContain('日本にオフィスを主張しません');
    expect(CHINA_ZH_INTL_PAGE.faqs[0].answer).toContain('不宣称在中国设有办公室');
  });

  it('keeps self-canonicals on every language version', () => {
    for (const page of INTL_MONEY_PAGES) {
      expect(getCanonicalPath(page.path)).toBe(page.path);
    }
  });

  it('ships 1200×630 navy/gold covers and heroes', async () => {
    for (const page of INTL_MONEY_PAGES) {
      const cover = join(root, 'public', page.coverImage.replace(/^\//, ''));
      const hero = join(root, 'public', page.heroImage.replace(/^\//, ''));
      expect(existsSync(cover), cover).toBe(true);
      expect(existsSync(hero), hero).toBe(true);
      const coverMeta = await sharp(cover).metadata();
      const heroMeta = await sharp(hero).metadata();
      expect(coverMeta.width).toBe(1200);
      expect(coverMeta.height).toBe(630);
      expect(heroMeta.width).toBe(1200);
      expect(heroMeta.height).toBe(630);
    }
  });
});

describe.each(INTL_MONEY_PAGES.map((page) => [page.path, page] as const))('SSR %s', (path, page) => {
  let html = '';
  let head = '';
  let nodes: JsonLdNode[] = [];

  beforeAll(async () => {
    HelmetProvider.canUseDOM = false;
    const result = await render(path, {});
    html = result.html;
    const helmet = result.helmetData;
    head = [helmet?.title, helmet?.meta, helmet?.link, helmet?.script]
      .map((part) => part?.toString() ?? '')
      .join('\n');
    nodes = jsonLdFromHtml(`${head}\n${html}`);
  }, 120_000);

  it('server-renders one H1, seven details FAQs, and matching schema', () => {
    const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((match) => text(match[1]));
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toContain(page.h1);
    expect([...html.matchAll(/<details/g)]).toHaveLength(7);
    expect(html).toContain(page.quickAnswer.slice(0, 40));
    expect(nodes.length).toBeGreaterThan(0);
    expect(nodes.every((node) => isValidSchemaNode(node))).toBe(true);
    const types = nodes.map((node) => String(node['@type'] || ''));
    expect(types.some((type) => type.includes('Organization'))).toBe(true);
    expect(types.some((type) => type.includes('FAQPage') || type.includes('FAQ'))).toBe(true);
    expect(types.some((type) => type.includes('BreadcrumbList'))).toBe(true);
    expect(head).toContain(page.title);
    expect(head).toContain(`https://www.bionixus.com${page.path}`);
    expect(html.toLowerCase()).not.toMatch(/we guarantee(?:d)? accuracy/);
    expect(html).not.toMatch(/our Tokyo office|our Shanghai office|our Singapore office/);
  });
});
