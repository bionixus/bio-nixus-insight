import { describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { WESTERN_AUTHORS } from '@/data/editorialAuthors';
import {
  NIELSEN_KSA_AUTHOR_NAME,
  NIELSEN_KSA_HARDCODED_POST,
  NIELSEN_KSA_PATH,
  NIELSEN_KSA_SLUG,
} from '@/data/blog-nielsen-alternative-saudi-arabia';

const AUTHOR = 'Armela Belba';
const TITLE = 'Global Research Manager';

const countText = (html: string, value: string) => html.split(`>${value}<`).length - 1;

describe('Nielsen alternative Saudi Arabia author', () => {
  it('credits Armela Belba from the Western roster only', () => {
    expect(NIELSEN_KSA_AUTHOR_NAME).toBe(AUTHOR);
    expect(WESTERN_AUTHORS.find((author) => author.name === AUTHOR)?.jobTitle).toBe(TITLE);
    expect(NIELSEN_KSA_HARDCODED_POST.authorName).toBe(AUTHOR);
    expect(NIELSEN_KSA_HARDCODED_POST.authorTitle).toBe(TITLE);
  });

  it('credits Armela Belba in the visible byline, the Person node and article:author', async () => {
    HelmetProvider.canUseDOM = false;
    const { render } = await import('@/entry-server');
    const { html, helmetData } = await render(NIELSEN_KSA_PATH, {
      pageType: 'blog-post',
      blogSlug: NIELSEN_KSA_SLUG,
      blogPost: NIELSEN_KSA_HARDCODED_POST,
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
