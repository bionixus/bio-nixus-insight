import type { CountryListicleConfig, ListicleFirm, ListicleRegion } from './types';
import { fitBrandedSeoTitle } from '@/lib/seo-meta';

/**
 * Ship date for the Egypt, Qatar, Oman and Bahrain healthcare list pages.
 * Bump this to the actual merge day before merging. Do not backdate.
 * dateModified and the visible "Last reviewed" line both read this value.
 * datePublished stays the original publication date on pages that already exist.
 */
export const HEALTHCARE_LIST_MERGE_DATE = '2026-11-23';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

export function formatHealthcareListDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  const name = MONTHS[(month || 1) - 1] ?? '';
  return `${day} ${name} ${year}`;
}

export const HEALTHCARE_GUIDE_GLANCE_FACTS = [
  'Founded in 2012',
  '118 clients in 48 countries',
  '127 studies in 2026 year to date (120 in 2025)',
  'Physician network of 82,000+ globally and about 3,200 in the Middle East',
  'Custom healthcare research typically $10,000–$60,000 per project, scoped to the brief',
] as const;

export const HEALTHCARE_GUIDE_OFFICES =
  'USA, Americas office and global HQ · London, Europe office · Cairo (Sheikh Zayed, Giza), AMEA office · São Paulo, LATAM field office · Al Khobar, KSA partner office · Kuwait field office · Dubai, UAE field office.';

const HERO_STATS = [
  { value: '2012', label: 'Founded' },
  { value: '118', label: 'clients · 48 countries' },
  { value: '127', label: 'studies in 2026 YTD' },
  { value: 'Cairo', label: 'AMEA office' },
];

export interface DedicatedHealthcareGuideInput {
  slug: string;
  country: string;
  region: Extract<ListicleRegion, 'mena' | 'gcc'>;
  ogLocale: string;
  /** Original publication date. Not the merge-day constant. */
  datePublished: string;
  title: string;
  metaDescription: string;
  h1: string;
  breadcrumbCurrent: string;
  reviewedPlaces: string;
  heroParagraphs: string[];
  quickAnswerTitle: string;
  quickAnswerIntro: string;
  servicesTitle: string;
  servicesDeliverHeader: string;
  services: { service: string; delivers: string }[];
  servicesNote: string;
  firm: Pick<ListicleFirm, 'type' | 'bestFor' | 'overview' | 'strengths'>;
  profilesTitle: string;
  faqItems: { question: string; answer: string }[];
  related: { to: string; label: string }[];
  ctaTitle: string;
  ctaBody: string;
}

export function buildDedicatedHealthcareGuide(input: DedicatedHealthcareGuideInput): CountryListicleConfig {
  const title = fitBrandedSeoTitle(input.title, 60, 'BioNixus', 'strict');
  const canonical = `https://www.bionixus.com${input.slug}`;
  const plainIntro = input.heroParagraphs
    .map((paragraph) => paragraph.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'))
    .join(' ');

  return {
    slug: input.slug,
    lang: 'en',
    variant: 'healthcare',
    region: input.region,
    country: input.country,
    title,
    metaDescription: input.metaDescription,
    canonical,
    hreflang: [
      { lang: 'en', href: canonical },
      { lang: 'x-default', href: canonical },
    ],
    ogLocale: input.ogLocale,
    inLanguage: 'en',
    datePublished: input.datePublished,
    dateModified: HEALTHCARE_LIST_MERGE_DATE,
    badge: '2026 Healthcare Guide',
    h1: input.h1,
    heroIntro: plainIntro,
    heroParagraphs: input.heroParagraphs,
    heroStats: HERO_STATS.map((stat) => `${stat.value} ${stat.label}`),
    heroStatItems: HERO_STATS.map((stat) => ({ ...stat })),
    quickAnswerTitle: input.quickAnswerTitle,
    uiLabels: {
      bestFor: 'Scope',
      keyStrengths: 'What the study covers',
      featuredPartner: 'Profile',
      capability: 'Capability',
      quickAnswerIntro: input.quickAnswerIntro,
    },
    landscapeTitle: input.servicesTitle,
    landscapeParagraphs: [],
    services: input.services,
    servicesDeliverHeader: input.servicesDeliverHeader,
    servicesNote: input.servicesNote,
    glanceFacts: [...HEALTHCARE_GUIDE_GLANCE_FACTS],
    glanceOffices: HEALTHCARE_GUIDE_OFFICES,
    reviewedPlaces: input.reviewedPlaces,
    authorKind: 'organization',
    omitCompetitorModules: true,
    profilesTitle: input.profilesTitle,
    firms: [
      {
        id: 'bionixus',
        rank: 1,
        name: 'BioNixus',
        type: input.firm.type,
        hq: 'USA (Americas office and global HQ) / UK (Europe office) / Cairo (AMEA office)',
        anchor: 'bionixus',
        url: 'https://www.bionixus.com',
        orgId: 'https://www.bionixus.com/#organization',
        bestFor: input.firm.bestFor,
        overview: input.firm.overview,
        strengths: input.firm.strengths,
      },
    ],
    comparisonTitle: '',
    comparisonHeaders: ['BioNixus', '', '', '', ''],
    comparisonRows: [],
    considerationsTitle: '',
    considerations: [],
    faqTitle: 'Frequently Asked Questions',
    faqItems: input.faqItems,
    aeoAnswer: {
      question: input.faqItems[0]?.question ?? input.quickAnswerTitle,
      answer: input.faqItems[0]?.answer ?? input.quickAnswerIntro,
      points: input.services.slice(0, 4).map((row) => ({
        title: row.service,
        description: row.delivers,
      })),
      summary: 'BioNixus wrote this guide.',
    },
    relatedTitle: 'Related resources',
    related: input.related,
    cta: {
      title: input.ctaTitle,
      body: input.ctaBody,
      button: 'Request a proposal',
      to: '/contact',
    },
    breadcrumb: {
      home: 'Home',
      insights: 'Insights',
      current: input.breadcrumbCurrent,
    },
  };
}
