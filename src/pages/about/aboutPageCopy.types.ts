import type { Language } from '@/lib/i18n';

export interface AboutMetric {
  value: string;
  label: string;
}

export interface AboutDifferentiator {
  title: string;
  body: string;
}

export interface AboutValue {
  title: string;
  body: string;
  bodyBeforeLink?: string;
  linkLabel?: string;
  bodyAfterLink?: string;
}

export interface AboutOffice {
  title: string;
  lines: string[];
  linkLabel?: string;
}

export interface AboutPageCopy {
  seoTitle: string;
  seoDescription: string;
  breadcrumbHome: string;
  breadcrumbAbout: string;
  heroTagline: string;
  h1: string;
  heroSubheadBeforeSa: string;
  heroLinkSa: string;
  heroSubheadBeforeUae: string;
  heroLinkUae: string;
  heroSubheadBeforeEg: string;
  heroLinkEg: string;
  heroSubheadAfter: string;
  ctaPrimary: string;
  ctaSecondary: string;
  metrics: AboutMetric[];
  compliance: string[];
  storyH2: string;
  storyTagline: string;
  storyAct1H3: string;
  storyAct1P1: string;
  storyAct1P2: string;
  storyAct2H3: string;
  storyAct2P1: string;
  storyAct2P2BeforeLink: string;
  storyAct2LinkCairo: string;
  storyAct2P2AfterLink: string;
  storyAct3H3: string;
  storyAct3P1: string;
  storyAct3P2BeforePharma: string;
  storyAct3LinkPharma: string;
  storyAct3P2Mid1: string;
  storyAct3LinkIndustries: string;
  storyAct3P2Mid2: string;
  storyAct3LinkMethodology: string;
  storyAct3P2After: string;
  diffH2: string;
  diffIntro: string;
  differentiators: AboutDifferentiator[];
  valuesH2: string;
  values: AboutValue[];
  presenceH2: string;
  presenceIntro: string;
  offices: AboutOffice[];
  langMirrorLead: string;
}

export type AboutPageCopyMap = Record<Language, AboutPageCopy>;

export const ABOUT_LANGUAGE_MIRROR: { href: string; label: string }[] = [
  { href: '/about', label: 'English' },
  { href: '/de/about', label: 'Deutsch' },
  { href: '/fr/about', label: 'Français' },
  { href: '/es/about', label: 'Español' },
  { href: '/zh/about', label: '中文' },
  { href: '/ar/about', label: 'العربية' },
  { href: '/pt/about', label: 'Português' },
  { href: '/ru/about', label: 'Русский' },
];
