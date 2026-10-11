import { describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { ALSAADANY_AUTHOR, ALSAADANY_PROFILE_URL, WESTERN_AUTHORS } from '@/data/editorialAuthors';
import {
  SAUDI_OBESITY_SHORTLIST_HARDCODED_POST,
  SAUDI_OBESITY_SHORTLIST_PATH,
  SAUDI_OBESITY_SHORTLIST_SLUG,
  resolveShortlistAuthor,
} from '@/data/blog-saudi-obesity-market-research-shortlist';

const AUTHOR = 'Laura McConaughey';
const TITLE = 'Global Research Manager';

const countText = (html: string, value: string) => html.split(`>${value}<`).length - 1;

describe('Saudi obesity shortlist author', () => {
  it('gives the six Western roster authors the Global Research Manager title', () => {
    expect(WESTERN_AUTHORS.map(({ name, jobTitle }) => [name, jobTitle])).toEqual(
      ['Laura McConaughey', 'Sarah Chen', 'Martha DeVito', 'Anna Cuban', 'Armela Belba', 'Ivona Gunjova'].map(
        (name) => [name, TITLE],
      ),
    );
  });

  it('resolves Mohammad Alsaadany from the roster like any other author', () => {
    const author = resolveShortlistAuthor('Mohammad Alsaadany');
    expect(author.authorName).toBe('Mohammad Alsaadany');
    expect(author.authorTitle).toBe(ALSAADANY_AUTHOR.jobTitle);
    expect(author.schema).toMatchObject({
      '@type': 'Person',
      name: 'Mohammad Alsaadany',
      jobTitle: ALSAADANY_AUTHOR.jobTitle,
      url: ALSAADANY_PROFILE_URL,
    });
    expect(resolveShortlistAuthor('Dr. Mohammad Alsaadany').schema).toMatchObject({ url: ALSAADANY_PROFILE_URL });
  });

  it('credits Laura McConaughey in the visible byline, the Person node and article:author', async () => {
    expect(SAUDI_OBESITY_SHORTLIST_HARDCODED_POST.authorName).toBe(AUTHOR);
    expect(SAUDI_OBESITY_SHORTLIST_HARDCODED_POST.authorTitle).toBe(TITLE);

    HelmetProvider.canUseDOM = false;
    const { render } = await import('@/entry-server');
    const { html, helmetData } = await render(SAUDI_OBESITY_SHORTLIST_PATH, {
      pageType: 'blog-post',
      blogSlug: SAUDI_OBESITY_SHORTLIST_SLUG,
      blogPost: SAUDI_OBESITY_SHORTLIST_HARDCODED_POST,
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
