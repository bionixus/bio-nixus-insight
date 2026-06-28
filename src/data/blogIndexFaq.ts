import type { BlogArticleLocale } from '@/lib/blogPostUiStrings';
import { BLOG_INDEX_FAQ_DE, type BlogFaqItem } from '@/data/germanBlogFaq';
import { BLOG_INDEX_FAQ_AR } from '@/data/arabicBlogFaq';
import { BLOG_INDEX_FAQ_ZH } from '@/data/chineseBlogFaq';
import { getGenericLocaleBlogFaq } from '@/data/localizedBlogGeneric';

const BLOG_INDEX_FAQ_EN: BlogFaqItem[] = [
  {
    question: 'What topics does the BioNixus blog cover?',
    answer:
      'Articles span quantitative physician research, qualitative KOL work, market access across GCC, Europe and globally, hospital adoption, regulatory updates, and launch strategy—written for commercial, medical, and access teams.',
  },
  {
    question: 'How often are new insights published?',
    answer:
      'We add practical fieldwork-led articles as programs complete and markets shift. Subscribe via the site footer for monthly research highlights.',
  },
  {
    question: 'Can I request a topic or country deep-dive?',
    answer:
      'Yes. Use the contact form with your therapy area, geography, and decision deadline—we typically respond with a tailored methodology outline within one business day.',
  },
];

export function getBlogIndexFaq(locale: BlogArticleLocale): BlogFaqItem[] {
  if (locale === 'de') return BLOG_INDEX_FAQ_DE;
  if (locale === 'ar') return BLOG_INDEX_FAQ_AR;
  if (locale === 'zh') return BLOG_INDEX_FAQ_ZH;
  if (locale === 'en') return BLOG_INDEX_FAQ_EN;
  return getGenericLocaleBlogFaq(locale, undefined, []);
}

export function getBlogIndexFaqHeading(locale: BlogArticleLocale): string {
  const headings: Record<BlogArticleLocale, string> = {
    en: 'Frequently asked questions',
    de: 'Häufig gestellte Fragen',
    ar: 'الأسئلة الشائعة',
    fr: 'Questions fréquentes',
    es: 'Preguntas frecuentes',
    pt: 'Perguntas frequentes',
    ru: 'Частые вопросы',
    zh: '常见问题',
  };
  return headings[locale];
}
