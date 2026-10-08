import { describe, expect, it } from 'vitest';
import { buildSchemas } from '@/components/SchemaMarkup';
import { DESMOID_BLOG_HARDCODED_POST } from '@/data/blog-desmoid-ogsiveo-market-research';
import { GCC_PHARMACOECONOMICS_HARDCODED_POST } from '@/data/blog-gcc-pharmacoeconomics';
import {
  NF1_KOSELUGO_DRUG_HARDCODED_POST,
  NF1_KOSELUGO_HARDCODED_POST,
} from '@/data/blog-nf1-koselugo-market-research';
import { SKYRIZI_HARDCODED_POST } from '@/data/blog-skyrizi-omnichannel';
import {
  ALSAADANY_AUTHOR,
  ALSAADANY_PROFILE_URL,
  ALSAADANY_PROFILE_URL_AR,
  ALSAADANY_SAME_AS_URL,
  MENA_AUTHORS,
  alsaadanyProfileUrl,
  authorLinkedInForDisplay,
  isAlsaadanyLinkedInUrl,
  personAuthorJsonLd,
  withAlsaadanyPersonJsonLd,
} from '@/data/editorialAuthors';

type PersonNode = {
  name?: string;
  url?: string;
  jobTitle?: string;
  sameAs?: string[];
  worksFor?: { '@type': string; '@id': string; name: string };
};

function asPerson(node: object): PersonNode {
  return node as PersonNode;
}

describe('Alsaadany profile links', () => {
  it('maps Latin and Arabic display names to the right profile URL', () => {
    expect(alsaadanyProfileUrl('Dr. Mohammad Alsaadany')).toBe(ALSAADANY_PROFILE_URL);
    expect(alsaadanyProfileUrl('Mohammad Alsaadany')).toBe(ALSAADANY_PROFILE_URL);
    expect(alsaadanyProfileUrl('محمد السعداني')).toBe(ALSAADANY_PROFILE_URL_AR);
    expect(alsaadanyProfileUrl('Mohammad Ashour')).toBeNull();
  });

  it('adds url and sameAs on his Person node and keeps an existing jobTitle', () => {
    const node = asPerson(withAlsaadanyPersonJsonLd({
      '@type': 'Person' as const,
      name: 'Dr. Mohammad Alsaadany',
      jobTitle: 'Healthcare Market Research Advisor',
      sameAs: ['https://www.linkedin.com/in/dr-mohammad-alsaadany'],
    }));
    expect(node.url).toBe(ALSAADANY_PROFILE_URL);
    expect(node.jobTitle).toBe('Healthcare Market Research Advisor');
    expect(node.sameAs).toEqual([
      'https://www.linkedin.com/in/dr-mohammad-alsaadany',
      ALSAADANY_SAME_AS_URL,
    ]);
  });

  it('uses Director only when his Person node has no jobTitle', () => {
    const node = asPerson(withAlsaadanyPersonJsonLd({ '@type': 'Person' as const, name: 'Mohammad Alsaadany' }));
    expect(node.jobTitle).toBe('Director');
    expect(node.url).toBe(ALSAADANY_PROFILE_URL);
    expect(node.sameAs).toEqual([ALSAADANY_SAME_AS_URL]);
  });

  it('leaves other authors unchanged', () => {
    const node = personAuthorJsonLd({
      id: 'x',
      name: 'Dina Ibrahim',
      slug: 'dina-ibrahim',
      jobTitle: 'Healthcare Analyst, GCC',
    });
    expect(node).toEqual({
      '@type': 'Person',
      name: 'Dina Ibrahim',
      jobTitle: 'Healthcare Analyst, GCC',
      worksFor: {
        '@type': 'Organization',
        '@id': 'https://www.bionixus.com/#organization',
        name: 'BioNixus',
      },
    });
    expect('url' in node).toBe(false);
  });

  it('keeps the roster jobTitle on his editorial author object', () => {
    const node = asPerson(personAuthorJsonLd(ALSAADANY_AUTHOR));
    expect(node.jobTitle).toBe('Director, BioNixus Healthcare Market Research');
    expect(node.url).toBe(ALSAADANY_PROFILE_URL);
    expect(node.sameAs).toEqual([ALSAADANY_SAME_AS_URL]);
  });

  it('does not give Mohammad Ashour an Alsaadany LinkedIn URL', () => {
    const ashour = MENA_AUTHORS.find((author) => author.name === 'Mohammad Ashour');
    expect(ashour?.name).toBe('Mohammad Ashour');
    expect(ashour?.jobTitle).toBe('Research Lead, MENA');
    expect(JSON.stringify(ashour)).not.toMatch(/linkedin\.com\/in\/(?:dr-)?mohammad-alsaadany/i);

    const seeds = [
      GCC_PHARMACOECONOMICS_HARDCODED_POST,
      DESMOID_BLOG_HARDCODED_POST,
      SKYRIZI_HARDCODED_POST,
      NF1_KOSELUGO_HARDCODED_POST,
      NF1_KOSELUGO_DRUG_HARDCODED_POST,
    ];
    for (const post of seeds) {
      expect(post.authorName).toBe('Mohammad Ashour');
      expect(post.authorTitle).toBe('Research Lead, BioNixus Healthcare Market Research');
      expect(post.authorLinkedIn).toBeUndefined();
    }

    expect(isAlsaadanyLinkedInUrl('https://www.linkedin.com/in/mohammad-alsaadany')).toBe(true);
    expect(isAlsaadanyLinkedInUrl('https://www.linkedin.com/in/dr-mohammad-alsaadany/')).toBe(true);
    expect(authorLinkedInForDisplay('Mohammad Ashour', 'https://www.linkedin.com/in/mohammad-alsaadany')).toBeUndefined();
    expect(authorLinkedInForDisplay('Mohammad Ashour', undefined)).toBeUndefined();
    expect(authorLinkedInForDisplay('Dina Ibrahim', 'https://www.linkedin.com/in/dina-ibrahim')).toBe(
      'https://www.linkedin.com/in/dina-ibrahim',
    );
  });

  it('omits LinkedIn from Ashour Person JSON-LD when none is set', () => {
    const nodes = buildSchemas({
      pageType: 'blog',
      pageUrl: 'https://www.bionixus.com/blog/gcc-pharmacoeconomics',
      language: 'en',
      headline: 'GCC pharmacoeconomics',
      description: 'How GCC pharmacoeconomics differs from EU HTA for Saudi and UAE payers.',
      imageUrl: 'https://www.bionixus.com/og-image.png',
      authorName: 'Mohammad Ashour',
      authorJobTitle: 'Research Lead, BioNixus Healthcare Market Research',
      publishedAt: '2026-03-01',
      modifiedAt: '2026-03-01',
      breadcrumb: [
        { name: 'Home', item: 'https://www.bionixus.com/' },
        { name: 'Blog', item: 'https://www.bionixus.com/blog' },
      ],
    });
    const article = nodes.find((node) => node['@type'] === 'BlogPosting') as { author: PersonNode };
    expect(article.author.name).toBe('Mohammad Ashour');
    expect(article.author.jobTitle).toBe('Research Lead, BioNixus Healthcare Market Research');
    expect(article.author.url).toBeUndefined();
    expect(article.author.sameAs).toBeUndefined();
    expect(JSON.stringify(article.author)).not.toMatch(/alsaadany/i);
  });
});
