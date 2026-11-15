export type IntlMoneyLang = 'en' | 'ja' | 'zh-Hans';

export type IntlMoneyPageId = 'usa' | 'japan' | 'japan-ja' | 'china' | 'china-zh' | 'singapore';

export type IntlRichText = string;

export type IntlMoneySection = {
  id: string;
  heading: string;
  paragraphs: IntlRichText[];
};

export type IntlMoneyFaq = {
  question: string;
  answer: string;
};

export type IntlRelatedLink = {
  to: string;
  label: string;
};

export type IntlMoneyPage = {
  id: IntlMoneyPageId;
  path: string;
  lang: IntlMoneyLang;
  htmlLang: string;
  nativeReviewRequired: boolean;
  title: string;
  description: string;
  h1: string;
  primaryKeyword: string;
  quickAnswer: string;
  breadcrumbLabel: string;
  dateModified: string;
  coverImage: string;
  heroImage: string;
  coverAlt: string;
  heroAlt: string;
  areaServed: Array<{ '@type': 'Country' | 'Place'; name: string }>;
  proofPoints: Array<{ title: string; description: string }>;
  sections: IntlMoneySection[];
  faqs: IntlMoneyFaq[];
  relatedLinks: IntlRelatedLink[];
  hreflang: Array<{ lang: string; href: string }>;
};
