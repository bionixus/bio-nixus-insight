import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';

const PATHS = [
  '/about',
  '/contact',
  '/market-research-uae',
  '/ar/insights/top-sharaket-abhath-alsuq-alimarat-2026',
] as const;

describe('2 Nov 2026 recovery copy', () => {
  const pages = new Map<string, string>();

  beforeAll(async () => {
    HelmetProvider.canUseDOM = false;
    for (const path of PATHS) {
      const result = await render(path);
      pages.set(path, result.html);
    }
  }, 180_000);

  it('states the office model on About and drops the old leadership-office phrases', () => {
    const html = pages.get('/about')!;
    expect(html).toContain('the USA is the Americas office and global HQ');
    expect(html).toContain('the UK is the Europe office');
    expect(html).toContain('Cairo is the AMEA (APAC, Middle East, Africa) office');
    expect(html).toContain('São Paulo is the field office for LATAM');
    expect(html).toContain('Al Khobar is the partner office for KSA');
    expect(html).toContain('Kuwait is the field office for Kuwait');
    expect(html).toContain('Dubai is the field office for UAE');
    expect(html).not.toContain('regional leadership office in Cairo');
    expect(html).not.toContain('European regional leadership office');
  });

  it('calls São Paulo the field office for LATAM on Contact', () => {
    const html = pages.get('/contact')!;
    expect(html).toContain('São Paulo is the field office for LATAM');
    expect(html).not.toMatch(/opening a São Paulo office|end of 2026/i);
  });

  it('describes the UAE comparison as a list written by BioNixus', () => {
    const html = pages.get('/market-research-uae')!;
    expect(html).toContain('BioNixus wrote this list');
    expect(html).not.toMatch(/independent ranking/i);
  });

  it('restores the Arabic twin without a doubled disclosure or a number-one claim', () => {
    const html = pages.get('/ar/insights/top-sharaket-abhath-alsuq-alimarat-2026')!;
    expect(html).toContain('تبحث عن أفضل شركة أبحاث سوق في الإمارات؟');
    expect(html).toContain('كتبت بيونيكسس هذه القائمة');
    expect(html).not.toMatch(/كتبت بيونيكسس هذه القائمة\.\s*كتبت بيونيكسس هذه القائمة/);
    expect(html).toContain('آخر مراجعة: 2 نوفمبر 2026');
    expect(html).toContain('بيونيكسس في سطور');
    expect(html).not.toMatch(/الأولى|المرتبة الأولى|دليل مستقل/);
    expect(html).not.toMatch(/iqvia\.com|kantar\.com|ipsos\.com|nielseniq\.com|yougov\.com|gfk\.com|euromonitor\.com|greenbook\.org/i);
    expect(html).not.toMatch(/Census|Researchers|SixthFactor|Dimensions|Greenland/);
  });
});
