import { describe, expect, it } from 'vitest';
import { getCanonicalPath, getHreflangLinks, untranslatedLocaleEnglishPath } from '@/lib/seo';

const EN_HUB = 'https://www.bionixus.com/healthcare-market-research';
const EN_BLOG = 'https://www.bionixus.com/blog';
const EN_MRH = 'https://www.bionixus.com/market-research-healthcare';

function langs(path: string) {
  return getHreflangLinks(path).map((link) => link.lang);
}

function hrefs(path: string) {
  return getHreflangLinks(path).map((link) => link.href);
}

describe('untranslated locale duplicates', () => {
  it('canonicals English-body locale hubs, blog indexes, and market-research pages to English', () => {
    expect(untranslatedLocaleEnglishPath('/ru/healthcare-market-research')).toBe('/healthcare-market-research');
    expect(getCanonicalPath('/zh/healthcare-market-research')).toBe('/healthcare-market-research');
    expect(getCanonicalPath('/pt/healthcare-market-research')).toBe('/healthcare-market-research');
    expect(getCanonicalPath('/es/blog')).toBe('/blog');
    expect(getCanonicalPath('/pt/blog')).toBe('/blog');
    expect(getCanonicalPath('/ru/blog')).toBe('/blog');
    expect(getCanonicalPath('/zh/blog')).toBe('/blog');
    expect(getCanonicalPath('/pt/market-research-healthcare')).toBe('/market-research-healthcare');
    expect(getCanonicalPath('/ru/market-research-healthcare')).toBe('/market-research-healthcare');
    expect(getCanonicalPath('/de/healthcare-market-research/uae')).toBe('/healthcare-market-research/uae');
  });

  it('keeps translated locale pages self-canonical', () => {
    expect(untranslatedLocaleEnglishPath('/zh/about')).toBeNull();
    expect(getCanonicalPath('/zh/about')).toBe('/zh/about');
    expect(getCanonicalPath('/fr/healthcare-market-research')).toBe('/fr/healthcare-market-research');
    expect(getCanonicalPath('/es/healthcare-market-research')).toBe('/es/healthcare-market-research');
    expect(getCanonicalPath('/de/healthcare-market-research/germany')).toBe(
      '/de/healthcare-market-research/germany',
    );
    expect(getCanonicalPath('/es/healthcare-market-research/spain')).toBe('/es/healthcare-market-research/spain');
    expect(getCanonicalPath('/fr/healthcare-market-research/france')).toBe('/fr/healthcare-market-research/france');
    expect(getCanonicalPath('/ar/healthcare-market-research/saudi-arabia')).toBe(
      '/ar/healthcare-market-research/saudi-arabia',
    );
    expect(getCanonicalPath('/de/blog')).toBe('/de/blog');
    expect(getCanonicalPath('/zh/market-research-healthcare')).toBe('/zh/market-research-healthcare');
  });

  it('advertises only the English URL from an untranslated duplicate', () => {
    expect(hrefs('/ru/healthcare-market-research')).toEqual([EN_HUB, EN_HUB]);
    expect(langs('/ru/healthcare-market-research')).toEqual(['x-default', 'en']);
    expect(hrefs('/es/blog')).toEqual([EN_BLOG, EN_BLOG]);
    expect(hrefs('/ru/market-research-healthcare')).toEqual([EN_MRH, EN_MRH]);
  });

  it('does not list untranslated duplicates on the English pages', () => {
    const hub = hrefs('/healthcare-market-research').join(' ');
    expect(hub).not.toContain('/ru/healthcare-market-research');
    expect(hub).not.toContain('/zh/healthcare-market-research');
    expect(hub).not.toContain('/pt/healthcare-market-research');
    expect(hub).toContain('/fr/healthcare-market-research');
    expect(hub).toContain('/es/healthcare-market-research');
    expect(hub).toContain('/de/healthcare-market-research/germany');
    expect(hub).toContain('/ar/healthcare-market-research');

    const blog = hrefs('/blog').join(' ');
    expect(blog).not.toContain('/es/blog');
    expect(blog).not.toContain('/pt/blog');
    expect(blog).not.toContain('/ru/blog');
    expect(blog).not.toContain('/zh/blog');
    expect(blog).toContain('/de/blog');
    expect(blog).toContain('/ar/blog');

    const mrh = hrefs('/market-research-healthcare').join(' ');
    expect(mrh).not.toContain('/pt/market-research-healthcare');
    expect(mrh).not.toContain('/ru/market-research-healthcare');
    expect(mrh).toContain('/zh/market-research-healthcare');
  });
});
