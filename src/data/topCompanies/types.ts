/**
 * Data-driven "Top Market Research Companies in [Country]" listicle engine.
 *
 * One CountryListicleConfig = one rendered page (a country × variant × language).
 * The shared renderer is src/pages/insights/TopCompaniesCountryPage.tsx, which
 * mirrors the proven bespoke pattern (TopMarketResearchCompaniesBrazil2026.tsx):
 * Quick-Answer <ol>, firm profiles, comparison table, regulatory cards, FAQ,
 * and four JSON-LD blocks (BreadcrumbList, Article, ItemList with item.@id
 * entity linking for BioNixus, FAQPage).
 */

export type ListicleLang = 'en' | 'ar' | 'fr' | 'es' | 'pt' | 'de' | 'it';
export type ListicleVariant = 'general' | 'healthcare';
export type ListicleRegion = 'mena' | 'gcc' | 'africa' | 'europe' | 'latam';

export interface ListicleFirm {
  rank: number;
  name: string;
  /** Short label for comparison-table column headers (e.g. "Kantar"). */
  shortName: string;
  type: string;
  hq: string;
  /** In-page anchor id. */
  anchor: string;
  /** Full "Best for:" sentence shown in the profile card and ItemList description. */
  bestFor: string;
  /** One-line version for the Quick Answer <ol>. */
  bestForShort: string;
  url: string;
  /** Set to 'https://www.bionixus.com/#organization' for BioNixus only. */
  orgId?: string;
  strengths: string[];
  overview: string;
}

export interface ListicleFaqItem {
  q: string;
  a: string;
}

export interface ListicleComparisonRow {
  label: string;
  /** Booleans aligned with the firms array order. */
  values: boolean[];
}

export interface ListicleConsiderationCard {
  icon: 'users' | 'shield' | 'chart';
  title: string;
  body: string;
}

export interface ListicleRelatedLink {
  to: string;
  title: string;
  subtitle: string;
}

export interface ListicleHreflang {
  lang: string; // hreflang value: 'en', 'ar', 'x-default', …
  href: string; // absolute URL
}

export interface CountryListicleConfig {
  /** Route path, e.g. '/insights/top-market-research-companies-qatar-2026'. */
  slug: string;
  lang: ListicleLang;
  variant: ListicleVariant;
  region: ListicleRegion;
  /** Country display name in the page language. */
  country: string;
  rtl?: boolean;

  // SEO head
  title: string;
  metaDescription: string;
  canonical: string;
  hreflang: ListicleHreflang[];
  ogLocale: string;
  /** BCP-47-ish value for Article.inLanguage (e.g. 'en', 'ar', 'de-DE'). */
  inLanguage: string;
  datePublished: string;
  dateModified: string;

  // Hero
  badge: string;
  h1: string;
  heroIntro: string;
  heroStats: string[];

  // Sections
  quickAnswerTitle: string;
  landscapeTitle: string;
  landscapeParagraphs: string[];
  profilesTitle: string;
  firms: ListicleFirm[];
  comparisonTitle: string;
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
  };
}
