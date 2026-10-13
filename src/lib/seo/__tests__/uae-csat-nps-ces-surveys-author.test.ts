import { describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { WESTERN_AUTHORS } from '@/data/editorialAuthors';
import {
  UAE_CSAT_HARDCODED_POST,
  UAE_CSAT_PATH,
  UAE_CSAT_SLUG,
} from '@/data/blog-uae-csat-nps-ces-surveys';

const AUTHOR = 'Ivona Gunjova';
const TITLE = 'Global Research Manager';

const countText = (html: string, value: string) => html.split(`>${value}<`).length - 1;

describe('UAE CSAT/NPS/CES surveys author', () => {
  it('credits Ivona Gunjova from the six rotating Western authors', () => {
    const roster = WESTERN_AUTHORS.find((author) => author.name === AUTHOR);
    expect(roster?.jobTitle).toBe(TITLE);
    expect(UAE_CSAT_HARDCODED_POST.authorName).toBe(AUTHOR);
    expect(UAE_CSAT_HARDCODED_POST.authorTitle).toBe(TITLE);
  });

  it('credits Ivona Gunjova in the visible byline, the Person node and article:author', async () => {
    HelmetProvider.canUseDOM = false;
    const { render } = await import('@/entry-server');
    const { html, helmetData } = await render(UAE_CSAT_PATH, {
      pageType: 'blog-post',
      blogSlug: UAE_CSAT_SLUG,
      blogPost: UAE_CSAT_HARDCODED_POST,
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
