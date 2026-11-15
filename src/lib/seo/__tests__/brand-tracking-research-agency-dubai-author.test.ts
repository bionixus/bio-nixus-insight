import { describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { WESTERN_AUTHORS } from '@/data/editorialAuthors';
import {
  DUBAI_BRAND_TRACKING_HARDCODED_POST,
  DUBAI_BRAND_TRACKING_PATH,
  DUBAI_BRAND_TRACKING_SLUG,
} from '@/data/blog-brand-tracking-research-agency-dubai';

const AUTHOR = 'Armela Belba';
const TITLE = 'Global Research Manager';

const countText = (html: string, value: string) => html.split(`>${value}<`).length - 1;

describe('Dubai brand tracking author', () => {
  it('credits Armela Belba from the six rotating Western authors', () => {
    const roster = WESTERN_AUTHORS.find((author) => author.name === AUTHOR);
    expect(roster?.jobTitle).toBe(TITLE);
    expect(DUBAI_BRAND_TRACKING_HARDCODED_POST.authorName).toBe(AUTHOR);
    expect(DUBAI_BRAND_TRACKING_HARDCODED_POST.authorTitle).toBe(TITLE);
  });

  it('credits Armela Belba in the visible byline, the Person node and article:author', async () => {
    HelmetProvider.canUseDOM = false;
    const { render } = await import('@/entry-server');
    const { html, helmetData } = await render(DUBAI_BRAND_TRACKING_PATH, {
      pageType: 'blog-post',
      blogSlug: DUBAI_BRAND_TRACKING_SLUG,
      blogPost: DUBAI_BRAND_TRACKING_HARDCODED_POST,
      relatedPosts: { related: [], prev: null, next: null },
    });
    const head = [helmetData.meta, helmetData.script].map((part) => part.toString()).join('\n');

    expect(countText(html, AUTHOR)).toBeGreaterThanOrEqual(2);
    expect(countText(html, TITLE)).toBeGreaterThanOrEqual(2);
    expect(html).not.toContain('Mohammad Ashour');
    expect(head).toMatch(new RegExp(`property="article:author" content="${AUTHOR}"`));

    const nodes = [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map(
      (match) => JSON.parse(match[1]) as Record<string, unknown>,
    );
    const article = nodes.find((node) => node['@type'] === 'BlogPosting');
    expect(article?.author).toEqual({
      '@type': 'Person',
      name: AUTHOR,
      jobTitle: TITLE,
      worksFor: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    });
  }, 120_000);
});
