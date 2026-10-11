import { describe, expect, it, vi } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { ALSAADANY_AUTHOR, ALSAADANY_PROFILE_URL } from '@/data/editorialAuthors';
import {
  SAUDI_OBESITY_SHORTLIST_HARDCODED_POST,
  SAUDI_OBESITY_SHORTLIST_PATH,
  SAUDI_OBESITY_SHORTLIST_SLUG,
  resolveShortlistAuthor,
} from '@/data/blog-saudi-obesity-market-research-shortlist';

const PROFILE_URL = 'https://www.linkedin.com/in/example-profile';

vi.mock('@/data/blog-posts-index', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/data/blog-posts-index')>();
  const shortlist = await import('@/data/blog-saudi-obesity-market-research-shortlist');
  const author = shortlist.resolveShortlistAuthor('Dina Ibrahim', 'https://www.linkedin.com/in/example-profile');
  const post = {
    ...shortlist.SAUDI_OBESITY_SHORTLIST_HARDCODED_POST,
    authorName: author.authorName,
    authorTitle: author.authorTitle,
    authorLinkedIn: author.authorLinkedIn,
    schemaExtras: { ...shortlist.SAUDI_OBESITY_SHORTLIST_HARDCODED_POST.schemaExtras, author: author.schema },
  };
  return {
    ...actual,
    hardcodedSeoPosts: actual.hardcodedSeoPosts.map((item) => (item.slug === post.slug ? post : item)),
    getHardcodedPostBySlug: (slug: string) =>
      slug === shortlist.SAUDI_OBESITY_SHORTLIST_SLUG ? post : actual.getHardcodedPostBySlug(slug),
  };
});

describe('Saudi obesity shortlist author wiring', () => {
  it('ships with no byline until an editor sets one', () => {
    expect(SAUDI_OBESITY_SHORTLIST_HARDCODED_POST.authorName).toBeUndefined();
    expect(SAUDI_OBESITY_SHORTLIST_HARDCODED_POST.schemaExtras?.author).toBeUndefined();
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

  it('puts a roster author in the byline, the Person node and article:author', async () => {
    HelmetProvider.canUseDOM = false;
    const { render } = await import('@/entry-server');
    const { html, helmetData } = await render(SAUDI_OBESITY_SHORTLIST_PATH, {
      pageType: 'blog-post',
      blogSlug: SAUDI_OBESITY_SHORTLIST_SLUG,
      blogPost: SAUDI_OBESITY_SHORTLIST_HARDCODED_POST,
      relatedPosts: { related: [], prev: null, next: null },
    });
    const head = [helmetData.meta, helmetData.script].map((part) => part.toString()).join('\n');

    expect(html).toContain('Dina Ibrahim');
    expect(html).toContain('Healthcare Analyst, GCC');
    expect(head).toMatch(/property="article:author" content="Dina Ibrahim"/);

    const nodes = [...head.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map(
      (match) => JSON.parse(match[1]) as Record<string, unknown>,
    );
    const article = nodes.find((node) => node['@type'] === 'BlogPosting');
    expect(article?.author).toEqual({
      '@type': 'Person',
      name: 'Dina Ibrahim',
      jobTitle: 'Healthcare Analyst, GCC',
      worksFor: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
      url: PROFILE_URL,
      sameAs: [PROFILE_URL],
    });
  }, 120_000);
});
