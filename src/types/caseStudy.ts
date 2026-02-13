export interface CaseStudyFaqItem {
  question?: string;
  answer?: string;
}

export interface CaseStudyCtaSection {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body?: string;
  date: string;
  category: string;
  country: string;
  coverImage?: string;
  pdfUrl: string;
  language?: string;
  // New fields matching blog post
  authorName?: string;
  authorImage?: string;
  tags?: string[];
  readingTime?: number;
  tableOfContents?: { heading?: string; anchor?: string }[];
  executiveSummary?: unknown[];
  faq?: CaseStudyFaqItem[];
  ctaSection?: CaseStudyCtaSection;
  // SEO / OG (used in Helmet)
  seoMetaTitle?: string;
  seoMetaDescription?: string;
  seoCanonicalUrl?: string;
  seoNoIndex?: boolean;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}
