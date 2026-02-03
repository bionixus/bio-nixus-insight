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
}
