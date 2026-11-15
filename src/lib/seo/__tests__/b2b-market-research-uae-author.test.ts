import { describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { WESTERN_AUTHORS } from '@/data/editorialAuthors';
import {
  UAE_B2B_MR_AUTHOR_NAME,
  UAE_B2B_MR_HARDCODED_POST,
  UAE_B2B_MR_PATH,
  UAE_B2B_MR_SLUG,
} from '@/data/blog-b2b-market-research-uae';

const AUTHOR = 'Sarah Chen';
const TITLE = 'Global Research Manager';

const countText = (html: string, value: string) => html.split(`>${value}<`).length - 1;

describe('UAE B2B market research author', () => {
  it('credits Sarah Chen from the Western roster only', () => {
    expect(UAE_B2B_MR_AUTHOR_NAME).toBe(AUTHOR);
    expect(WESTERN_AUTHORS.find((author) => author.name === AUTHOR)?.jobTitle).toBe(TITLE);
    expect(UAE_B2B_MR_HARDCODED_POST.authorName).toBe(AUTHOR);
    expect(UAE_B2B_MR_HARDCODED_POST.authorTitle).toBe(TITLE);
  });

  it('credits Sarah Chen in the visible byline, the Person node and article:author', async () => {
    HelmetProvider.canUseDOM = false;
    const { render } = await import('@/entry-server');
    const { html, helmetData } = await render(UAE_B2B_MR_PATH, {
      pageType: 'blog-post',
      blogSlug: UAE_B2B_MR_SLUG,
      blogPost: UAE_B2B_MR_HARDCODED_POST,
      relatedPosts: { related: [], prev: null, next: null },
    });
    const head = [helmetData.meta, helmetData.script].map((part) => part.toString()).join('\n');

    expect(countText(html, AUTHOR)).toBeGreaterThanOrEqual(2);
    expect(countText(html, TITLE)).toBeGreaterThanOrEqual(2);
    expect(html).not.toContain('Mohammad Ashour');
    expect(head).toMatch(new RegExp(`property="article:author" content="${AUTHOR}"`));
    expect(head).not.toMatch(/article:author"[^>]*Mohammad/);

    const nodes = [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map(
      (match) => JSON.parse(match[1]) as Record<string, unknown>,
    );
    const people = nodes.filter((node) => node['@type'] === 'Person');
    expect(people).toHaveLength(0);
    const article = nodes.find((node) => node['@type'] === 'BlogPosting') as {
      author?: Record<string, unknown>;
    };
    expect(article?.author).toEqual({
      '@type': 'Person',
      name: AUTHOR,
      jobTitle: TITLE,
      worksFor: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    });
  }, 120_000);
});
