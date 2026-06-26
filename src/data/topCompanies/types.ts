export type ListicleLang = 'en' | 'ar' | 'fr' | 'es' | 'pt' | 'de' | 'it';
export type ListicleVariant = 'general' | 'healthcare';
export type ListicleRegion = 'mena' | 'gcc' | 'africa' | 'europe' | 'latam';

export interface ListicleHreflang {
  lang: string;
  href: string;
}

export interface ListicleFirm {
  id: string;
  rank: number;
  name: string;
  type: string;
  hq: string;
  anchor: string;
  url: string;
  orgId?: string;
  bestFor: string;
  overview: string;
  strengths: string[];
}

export interface ListicleComparisonRow {
  capability: string;
  bionixus: string;
  competitor2: string;
  competitor3: string;
  competitor4: string;
  competitor5: string;
}

export interface ListicleConsiderationCard {
  title: string;
  body: string;
}

export interface ListicleFaqItem {
  question: string;
  answer: string;
}

export interface ListicleRelatedLink {
  to: string;
  label: string;
}

export interface CountryListicleConfig {
  slug: string;
  lang: ListicleLang;
  variant: ListicleVariant;
  region: ListicleRegion;
  country: string;
  rtl?: boolean;
  title: string;
  metaDescription: string;
  canonical: string;
  hreflang: ListicleHreflang[];
  ogLocale: string;
  inLanguage: string;
  datePublished: string;
  dateModified: string;
  badge: string;
  h1: string;
  heroIntro: string;
  heroStats: string[];
  quickAnswerTitle: string;
  landscapeTitle: string;
  landscapeParagraphs: string[];
  profilesTitle: string;
  firms: ListicleFirm[];
  comparisonTitle: string;
  comparisonHeaders: [string, string, string, string, string];
  comparisonRows: ListicleComparisonRow[];
  considerationsTitle: string;
  considerations: ListicleConsiderationCard[];
  faqTitle: string;
  faqItems: ListicleFaqItem[];
  relatedTitle: string;
  related: ListicleRelatedLink[];
  cta: { title: string; body: string; button: string; to: string };
  breadcrumb: { home: string; insights: string; current: string };
  uiLabels: {
    bestFor: string;
    keyStrengths: string;
    featuredPartner: string;
    capability: string;
    quickAnswerIntro?: string;
  };
}
