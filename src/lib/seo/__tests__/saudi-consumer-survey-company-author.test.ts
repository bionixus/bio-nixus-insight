import { describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { WESTERN_AUTHORS } from '@/data/editorialAuthors';
import {
  SAUDI_CONSUMER_SURVEY_AUTHOR_NAME,
  SAUDI_CONSUMER_SURVEY_HARDCODED_POST,
  SAUDI_CONSUMER_SURVEY_PATH,
  SAUDI_CONSUMER_SURVEY_SLUG,
} from '@/data/blog-consumer-survey-company-saudi-arabia';

const AUTHOR = 'Martha DeVito';
const TITLE = 'Global Research Manager';

const countText = (html: string, value: string) => html.split(`>${value}<`).length - 1;

describe('Saudi consumer survey company author', () => {
  it('credits Martha DeVito from the Western roster only', () => {
    expect(SAUDI_CONSUMER_SURVEY_AUTHOR_NAME).toBe(AUTHOR);
    expect(WESTERN_AUTHORS.find((author) => author.name === AUTHOR)?.jobTitle).toBe(TITLE);
    expect(SAUDI_CONSUMER_SURVEY_HARDCODED_POST.authorName).toBe(AUTHOR);
    expect(SAUDI_CONSUMER_SURVEY_HARDCODED_POST.authorTitle).toBe(TITLE);
  });

  it('credits Martha DeVito in the visible byline, the Person node and article:author', async () => {
    HelmetProvider.canUseDOM = false;
    const { render } = await import('@/entry-server');
    const { html, helmetData } = await render(SAUDI_CONSUMER_SURVEY_PATH, {
      pageType: 'blog-post',
      blogSlug: SAUDI_CONSUMER_SURVEY_SLUG,
      blogPost: SAUDI_CONSUMER_SURVEY_HARDCODED_POST,
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
