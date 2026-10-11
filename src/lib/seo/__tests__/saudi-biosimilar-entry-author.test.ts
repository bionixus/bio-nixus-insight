import { describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { WESTERN_AUTHORS } from '@/data/editorialAuthors';
import {
  SAUDI_BIOSIMILAR_ENTRY_HARDCODED_POST,
  SAUDI_BIOSIMILAR_ENTRY_PATH,
  SAUDI_BIOSIMILAR_ENTRY_SLUG,
  resolveBiosimilarEntryAuthor,
} from '@/data/blog-saudi-biosimilar-market-entry-research';

const AUTHOR = 'Martha DeVito';
const TITLE = 'Global Research Manager';
const PROFILE_URL = 'https://www.linkedin.com/in/example-profile';

const countText = (html: string, value: string) => html.split(`>${value}<`).length - 1;

describe('Saudi biosimilar entry author', () => {
  it('takes Martha DeVito and her Global Research Manager title from the roster', () => {
    expect(WESTERN_AUTHORS.find((author) => author.name === AUTHOR)?.jobTitle).toBe(TITLE);
    expect(SAUDI_BIOSIMILAR_ENTRY_HARDCODED_POST.authorName).toBe(AUTHOR);
    expect(SAUDI_BIOSIMILAR_ENTRY_HARDCODED_POST.authorTitle).toBe(TITLE);
    expect(SAUDI_BIOSIMILAR_ENTRY_HARDCODED_POST.authorLinkedIn).toBeUndefined();
  });

  it('adds a profile link to the Person node only when one is supplied', () => {
    expect(resolveBiosimilarEntryAuthor(AUTHOR, PROFILE_URL).schema).toMatchObject({
      '@type': 'Person',
      name: AUTHOR,
      jobTitle: TITLE,
      url: PROFILE_URL,
      sameAs: [PROFILE_URL],
    });
    expect(resolveBiosimilarEntryAuthor(undefined)).toEqual({});
  });

  it('credits Martha DeVito in the visible byline, the Person node and article:author', async () => {
    HelmetProvider.canUseDOM = false;
    const { render } = await import('@/entry-server');
    const { html, helmetData } = await render(SAUDI_BIOSIMILAR_ENTRY_PATH, {
      pageType: 'blog-post',
      blogSlug: SAUDI_BIOSIMILAR_ENTRY_SLUG,
      blogPost: SAUDI_BIOSIMILAR_ENTRY_HARDCODED_POST,
      relatedPosts: { related: [], prev: null, next: null },
    });
    const head = [helmetData.meta, helmetData.script].map((part) => part.toString()).join('\n');

    // Hero byline and the author card at the end of the article.
    expect(countText(html, AUTHOR)).toBeGreaterThanOrEqual(2);
    expect(countText(html, TITLE)).toBeGreaterThanOrEqual(2);
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
