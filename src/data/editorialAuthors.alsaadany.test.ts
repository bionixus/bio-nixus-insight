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
  ALSAADANY_JOB_TITLE,
  ALSAADANY_LINKEDIN_URL,
  ALSAADANY_PROFILE_URL,
  ALSAADANY_PROFILE_URL_AR,
  ALSAADANY_SAME_AS_URL,
  MENA_AUTHORS,
  alsaadanyProfileUrl,
  authorLinkedInForDisplay,
  canonicalAlsaadanyJobTitle,
  isAlsaadanyLinkedInUrl,
  personAuthorJsonLd,
  replaceMeaDirectorTitle,
  withAlsaadanyPersonJsonLd,
} from '@/data/editorialAuthors';
import { IN_THE_MEDIA } from '@/data/inTheMedia';

const HIT_URL = 'https://www.healthcareittoday.com/2026/11/13/when-your-billing-team-is-overseas-what-data-residency-laws-teach-about-ehr-access/';

const HIT_SUBJECT = {
  '@type': 'NewsArticle',
  headline: IN_THE_MEDIA[0]?.headline,
  url: HIT_URL,
  datePublished: '2026-11-13',
  publisher: {
    '@type': 'Organization',
    name: 'Healthcare IT Today',
    url: 'https://www.healthcareittoday.com/',
  },
};

type PersonNode = {
  name?: string;
  url?: string;
  jobTitle?: string;
  sameAs?: string[];
  honorificPrefix?: string;
  worksFor?: { '@type': string; '@id': string; name: string };
  subjectOf?: typeof HIT_SUBJECT;
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

  it('rewrites legacy titles, including any AMEA Director variant, to Director and keeps a different explicit title', () => {
    expect(ALSAADANY_JOB_TITLE).toBe('Director');
    for (const jobTitle of [
      'Healthcare Market Research Advisor',
      'MEA Director',
      'Director, BioNixus Healthcare Market Research',
      'AMEA Director (APAC, Middle East and Africa)',
      'AMEA Director, Gulf markets',
    ]) {
      const node = asPerson(withAlsaadanyPersonJsonLd({
        '@type': 'Person' as const,
        name: 'Dr. Mohammad Alsaadany',
        jobTitle,
        sameAs: ['https://www.linkedin.com/in/dr-mohammad-alsaadany'],
      }));
      expect(node.jobTitle).toBe('Director');
      expect(node.url).toBe(ALSAADANY_PROFILE_URL);
      expect(node.sameAs).toEqual([ALSAADANY_LINKEDIN_URL, ALSAADANY_SAME_AS_URL]);
      expect(node.sameAs).not.toContain(HIT_URL);
      expect(node.honorificPrefix).toBeUndefined();
    }
    expect(canonicalAlsaadanyJobTitle('AMEA Director (APAC, Middle East and Africa)')).toBe('Director');
    expect(canonicalAlsaadanyJobTitle('  AMEA Director  ')).toBe('Director');
    const social = asPerson(withAlsaadanyPersonJsonLd({
      '@type': 'Person' as const,
      name: 'Mohammad Alsaadany',
      jobTitle: 'Marketing and Digital Transformation Director at BioNixus Group',
    }));
    expect(social.jobTitle).toBe('Marketing and Digital Transformation Director at BioNixus Group');
    expect(replaceMeaDirectorTitle(`Dr. Mohammad Alsaadany, ${ALSAADANY_JOB_TITLE} at BioNixus`)).toBe(
      `Dr. Mohammad Alsaadany, ${ALSAADANY_JOB_TITLE} at BioNixus`,
    );
    expect(replaceMeaDirectorTitle('Dr. Mohammad Alsaadany, MEA Director at BioNixus')).toBe(
      `Dr. Mohammad Alsaadany, ${ALSAADANY_JOB_TITLE} at BioNixus`,
    );
  });

  it('uses Director when his Person node has no jobTitle, and limits sameAs to owned profiles', () => {
    const node = asPerson(withAlsaadanyPersonJsonLd({ '@type': 'Person' as const, name: 'Mohammad Alsaadany' }));
    expect(node.jobTitle).toBe('Director');
    expect(node.url).toBe(ALSAADANY_PROFILE_URL);
    expect(node.sameAs).toEqual([ALSAADANY_LINKEDIN_URL, ALSAADANY_SAME_AS_URL]);
    expect(node.worksFor).toEqual({
      '@type': 'Organization',
      '@id': 'https://www.bionixus.com/#organization',
      name: 'BioNixus',
    });
    expect(node.subjectOf).toEqual(HIT_SUBJECT);
    expect(JSON.stringify(node.sameAs)).not.toContain('healthcareittoday.com');
    expect(node.honorificPrefix).toBeUndefined();
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
    expect(node.jobTitle).toBe('Director');
    expect(node.url).toBe(ALSAADANY_PROFILE_URL);
    expect(node.sameAs).toEqual([ALSAADANY_LINKEDIN_URL, ALSAADANY_SAME_AS_URL]);
    expect(node.subjectOf).toEqual(HIT_SUBJECT);
    expect(node.worksFor?.['@id']).toBe('https://www.bionixus.com/#organization');
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

  it('adds worksFor and the Healthcare IT Today subjectOf on the article author fallback', () => {
    const nodes = buildSchemas({
      pageType: 'blog',
      pageUrl: 'https://www.bionixus.com/blog/example',
      language: 'en',
      headline: 'Example',
      description: 'Example description for the author fallback.',
      imageUrl: 'https://www.bionixus.com/og-image.png',
      authorName: 'Mohammad Alsaadany',
      authorJobTitle: 'AMEA Director (APAC, Middle East and Africa)',
      authorUrl: HIT_URL,
      publishedAt: '2026-11-13',
      modifiedAt: '2026-11-13',
      breadcrumb: [
        { name: 'Home', item: 'https://www.bionixus.com/' },
        { name: 'Blog', item: 'https://www.bionixus.com/blog' },
      ],
    });
    const article = nodes.find((node) => node['@type'] === 'BlogPosting') as { author: PersonNode };
    expect(article.author.jobTitle).toBe('Director');
    expect(article.author.url).toBe(ALSAADANY_PROFILE_URL);
    expect(article.author.sameAs).toEqual([ALSAADANY_LINKEDIN_URL, ALSAADANY_SAME_AS_URL]);
    expect(article.author.subjectOf).toEqual(HIT_SUBJECT);
    expect(article.author.worksFor).toEqual({
      '@type': 'Organization',
      '@id': 'https://www.bionixus.com/#organization',
      name: 'BioNixus',
    });
    expect(article.author.honorificPrefix).toBeUndefined();
  });

  it('keeps worksFor and subjectOf when a blog passes authorNode', () => {
    const nodes = buildSchemas({
      pageType: 'blog',
      pageUrl: 'https://www.bionixus.com/blog/example',
      language: 'en',
      headline: 'Example',
      description: 'Example description for a passed author node.',
      imageUrl: 'https://www.bionixus.com/og-image.png',
      authorName: 'Mohammad Alsaadany',
      authorNode: { '@type': 'Person', name: 'Mohammad Alsaadany', jobTitle: 'Director' },
      publishedAt: '2026-11-13',
      modifiedAt: '2026-11-13',
      breadcrumb: [
        { name: 'Home', item: 'https://www.bionixus.com/' },
        { name: 'Blog', item: 'https://www.bionixus.com/blog' },
      ],
    });
    const article = nodes.find((node) => node['@type'] === 'BlogPosting') as { author: PersonNode };
    expect(article.author.url).toBe(ALSAADANY_PROFILE_URL);
    expect(article.author.worksFor?.name).toBe('BioNixus');
    expect(article.author.subjectOf?.url).toBe(HIT_URL);
    expect(article.author.sameAs).not.toContain(HIT_URL);
  });
});
