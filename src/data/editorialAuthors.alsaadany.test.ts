import { describe, expect, it } from 'vitest';
import {
  ALSAADANY_AUTHOR,
  ALSAADANY_PROFILE_URL,
  ALSAADANY_PROFILE_URL_AR,
  ALSAADANY_SAME_AS_URL,
  alsaadanyProfileUrl,
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
});
