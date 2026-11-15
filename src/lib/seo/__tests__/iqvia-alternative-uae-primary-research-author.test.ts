import { describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { WESTERN_AUTHORS } from '@/data/editorialAuthors';
import {
  IQVIA_UAE_PRIMARY_HARDCODED_POST,
  IQVIA_UAE_PRIMARY_PATH,
  IQVIA_UAE_PRIMARY_SLUG,
} from '@/data/blog-iqvia-alternative-uae-primary-research';

const AUTHOR = 'Laura McConaughey';
const TITLE = 'Global Research Manager';

const countText = (html: string, value: string) => html.split(`>${value}<`).length - 1;

describe('IQVIA alternative UAE primary research author', () => {
  it('credits Laura McConaughey from the six rotating Western authors', () => {
    const roster = WESTERN_AUTHORS.find((author) => author.name === AUTHOR);
    expect(roster?.jobTitle).toBe(TITLE);
    expect(roster?.id).toBe('5373a02d-e67d-4415-9739-33ee8f4da7e2');
    expect(IQVIA_UAE_PRIMARY_HARDCODED_POST.authorName).toBe(AUTHOR);
    expect(IQVIA_UAE_PRIMARY_HARDCODED_POST.authorTitle).toBe(TITLE);
  });

  it('credits Laura McConaughey in the visible byline, the Person node and article:author', async () => {
    HelmetProvider.canUseDOM = false;
    const { render } = await import('@/entry-server');
    const { html, helmetData } = await render(IQVIA_UAE_PRIMARY_PATH, {
      pageType: 'blog-post',
      blogSlug: IQVIA_UAE_PRIMARY_SLUG,
      blogPost: IQVIA_UAE_PRIMARY_HARDCODED_POST,
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
