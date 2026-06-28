import type { Language } from '@/lib/i18n';
import type { SegmentSlug } from '@/data/bionixusIndustrySegments';

export interface BionixusIndustriesStat {
  value: string;
  label: string;
  sub: string;
}

export interface BionixusIndustriesRegionGroupCopy {
  region: string;
  description: string;
}

export interface BionixusIndustriesSegmentCardCopy {
  label: string;
  tagline: string;
  intro: string;
  enterCta: string;
}

export interface BionixusIndustriesNextStepCopy {
  path: string;
  label: string;
  description: string;
}

export interface BionixusIndustriesFaqItem {
  question: string;
  answer: string;
}

export interface BionixusIndustriesPageCopy {
  seoTitle: string;
  seoDescription: string;
  breadcrumbHome: string;
  breadcrumbIndustries: string;
  schemaCollectionName: string;
  heroEyebrow: string;
  h1BeforeEm: string;
  h1Em: string;
  heroSub1BeforeStrong: string;
  heroSub1Strong: string;
  heroSub1AfterStrong: string;
  heroSub2: string;
  ctaInsights: string;
  ctaIndustriesIndex: string;
  cardHead: string;
  cardLive: string;
  chartNonHealthcare: string;
  chartHealthcare: string;
  cardFoot: string;
  regionRibbon: string[];
  trustStats: BionixusIndustriesStat[];
  statsAriaLabel: string;
  segmentsEyebrow: string;
  segmentsH2Before: string;
  segmentsH2Em: string;
  segmentsLead: string;
  segments: Record<SegmentSlug, BionixusIndustriesSegmentCardCopy>;
  insightsEyebrow: string;
  insightsH2Before: string;
  insightsH2Em: string;
  insightsLead: string;
  insightsCtaOpen: string;
  insightsCtaProposal: string;
  insightsPanelHead: string;
  insightsPublishedSuffix: string;
  insightsEmpty: string;
  insightsBrowseAll: string;
  narrativeEyebrow: string;
  narrativeH2Before: string;
  narrativeH2Em: string;
  narrativeP1: string;
  narrativeP2Part1: string;
  narrativeLatamLabel: string;
  narrativeP2Part2: string;
  narrativeApacLabel: string;
  narrativeP2Part3: string;
  narrativeB2bLink: string;
  narrativeP2Part4: string;
  narrativeB2cLink: string;
  narrativeP2Part5: string;
  narrativeHealthcareLink: string;
  narrativeP2Part6: string;
  regionGroups: BionixusIndustriesRegionGroupCopy[];
  nextEyebrow: string;
  nextH2Before: string;
  nextH2Em: string;
  nextSteps: BionixusIndustriesNextStepCopy[];
  faqEyebrow: string;
  faqH2Before: string;
  faqH2Em: string;
  faqItems: BionixusIndustriesFaqItem[];
  finalCtaH2: string;
  finalCtaP: string;
  finalCtaBook: string;
  finalCtaSeeWork: string;
  langMirrorLead: string;
}

export type BionixusIndustriesPageCopyMap = Record<Language, BionixusIndustriesPageCopy>;

export const BIONIXUS_INDUSTRIES_LANGUAGE_MIRROR: { href: string; label: string }[] = [
  { href: '/bionixus-industries', label: 'English' },
  { href: '/de/bionixus-industries', label: 'Deutsch' },
  { href: '/fr/bionixus-industries', label: 'Français' },
  { href: '/es/bionixus-industries', label: 'Español' },
  { href: '/zh/bionixus-industries', label: '中文' },
  { href: '/ar/bionixus-industries', label: 'العربية' },
  { href: '/pt/bionixus-industries', label: 'Português' },
  { href: '/ru/bionixus-industries', label: 'Русский' },
];
