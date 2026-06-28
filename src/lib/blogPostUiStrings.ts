export type BlogArticleLocale = 'en' | 'de' | 'ar';

export interface BlogPostUiStrings {
  backTo: (label: string) => string;
  ctaEyebrow: string;
  sidebarCtaEyebrow: string;
  sidebarCtaTitle: string;
  sidebarCtaButton: string;
  contactPath: string;
  faqHeading: string;
  faqBadge: string;
  faqQuestionFallback: string;
  executiveSummary: string;
  executiveSummaryAria: string;
  tocHeading: string;
  authorEyebrow: string;
  linkedInProfile: string;
  updated: string;
  readingMin: string;
  articleNotFound: string;
  invalidArticle: string;
  tocSectionCount: (count: number) => string;
  tocAriaLabel: string;
  shareLabel: string;
  shareOn: (platform: string) => string;
  copyLink: string;
  linkCopied: string;
  linkCopyFailed: string;
  relatedArticles: string;
  readArticle: string;
  previous: string;
  next: string;
  postNavigationAria: string;
  relatedArticlesAria: string;
  relatedResearchHeading: string;
  relatedResearchDescription: string;
}

const UI: Record<BlogArticleLocale, BlogPostUiStrings> = {
  en: {
    backTo: (label) => `Back to ${label}`,
    ctaEyebrow: 'Expert Consultation',
    sidebarCtaEyebrow: 'Expert Research',
    sidebarCtaTitle: 'Need pharma market research for your team?',
    sidebarCtaButton: 'Request a briefing',
    contactPath: '/contact',
    faqHeading: 'Frequently asked questions',
    faqBadge: 'FAQ',
    faqQuestionFallback: 'Question',
    executiveSummary: 'Executive Summary',
    executiveSummaryAria: 'Executive summary',
    tocHeading: 'On this page',
    authorEyebrow: 'Research Author',
    linkedInProfile: 'LinkedIn Profile',
    updated: 'Updated',
    readingMin: 'min',
    articleNotFound: 'Article not found.',
    invalidArticle: 'Invalid article.',
    tocSectionCount: (count) => `${count} sections`,
    tocAriaLabel: 'Table of contents',
    shareLabel: 'Share:',
    shareOn: (platform) => `Share on ${platform}`,
    copyLink: 'Copy link',
    linkCopied: 'Link copied to clipboard',
    linkCopyFailed: 'Failed to copy link',
    relatedArticles: 'Related Articles',
    readArticle: 'Read article',
    previous: 'Previous',
    next: 'Next',
    postNavigationAria: 'Post navigation',
    relatedArticlesAria: 'Related articles',
    relatedResearchHeading: 'Explore related research',
    relatedResearchDescription:
      'For deeper regional insight, explore our healthcare market research framework and country coverage.',
  },
  de: {
    backTo: (label) => `Zurück zu ${label}`,
    ctaEyebrow: 'Expertenberatung',
    sidebarCtaEyebrow: 'Expertenforschung',
    sidebarCtaTitle: 'Pharmamarktforschung für Ihr Team benötigt?',
    sidebarCtaButton: 'Briefing anfragen',
    contactPath: '/de/contact',
    faqHeading: 'Häufig gestellte Fragen',
    faqBadge: 'FAQ',
    faqQuestionFallback: 'Frage',
    executiveSummary: 'Kurzfassung',
    executiveSummaryAria: 'Kurzfassung',
    tocHeading: 'Auf dieser Seite',
    authorEyebrow: 'Autor',
    linkedInProfile: 'LinkedIn-Profil',
    updated: 'Aktualisiert',
    readingMin: 'Min.',
    articleNotFound: 'Artikel nicht gefunden.',
    invalidArticle: 'Ungültiger Artikel.',
    tocSectionCount: (count) => `${count} Abschnitte`,
    tocAriaLabel: 'Inhaltsverzeichnis',
    shareLabel: 'Teilen:',
    shareOn: (platform) => `Auf ${platform} teilen`,
    copyLink: 'Link kopieren',
    linkCopied: 'Link in die Zwischenablage kopiert',
    linkCopyFailed: 'Link konnte nicht kopiert werden',
    relatedArticles: 'Verwandte Artikel',
    readArticle: 'Artikel lesen',
    previous: 'Vorheriger',
    next: 'Nächster',
    postNavigationAria: 'Artikelnavigation',
    relatedArticlesAria: 'Verwandte Artikel',
    relatedResearchHeading: 'Verwandte Forschung entdecken',
    relatedResearchDescription:
      'Vertiefen Sie Ihr Verständnis mit unserem Gesundheitsmarktforschungs-Framework und Länderabdeckung in Deutschland, Europa und weltweit.',
  },
  ar: {
    backTo: (label) => `العودة إلى ${label}`,
    ctaEyebrow: 'استشارة متخصصة',
    sidebarCtaEyebrow: 'بحث متخصص',
    sidebarCtaTitle: 'هل تحتاج فريقك إلى أبحاث سوق دوائية؟',
    sidebarCtaButton: 'اطلب إحاطة',
    contactPath: '/ar/contact',
    faqHeading: 'الأسئلة الشائعة',
    faqBadge: 'FAQ',
    faqQuestionFallback: 'سؤال',
    executiveSummary: 'ملخص تنفيذي',
    executiveSummaryAria: 'ملخص تنفيذي',
    tocHeading: 'في هذه الصفحة',
    authorEyebrow: 'المؤلف',
    linkedInProfile: 'ملف LinkedIn',
    updated: 'تم التحديث',
    readingMin: 'د',
    articleNotFound: 'المقال غير موجود.',
    invalidArticle: 'مقال غير صالح.',
    tocSectionCount: (count) => `${count} أقسام`,
    tocAriaLabel: 'جدول المحتويات',
    shareLabel: 'مشاركة:',
    shareOn: (platform) => `مشاركة على ${platform}`,
    copyLink: 'نسخ الرابط',
    linkCopied: 'تم نسخ الرابط',
    linkCopyFailed: 'تعذر نسخ الرابط',
    relatedArticles: 'مقالات ذات صلة',
    readArticle: 'قراءة المقال',
    previous: 'السابق',
    next: 'التالي',
    postNavigationAria: 'تنقل المقالات',
    relatedArticlesAria: 'مقالات ذات صلة',
    relatedResearchHeading: 'استكشف أبحاثًا ذات صلة',
    relatedResearchDescription:
      'للحصول على رؤى إقليمية أعمق، استكشف إطار أبحاث سوق الرعاية الصحية وتغطيتنا حسب البلد.',
  },
};

const GERMAN_SLUG_RE = /germany|deutsche|gesundheit|pharmamarktforschung|amnog-frueher/i;

export function resolveBlogArticleLocale(
  post: { language?: string; slug?: string } | null | undefined,
  pathname: string,
): BlogArticleLocale {
  if (pathname.startsWith('/ar/blog') || post?.language === 'ar' || /[\u0600-\u06FF]/.test(post?.slug ?? '')) {
    return 'ar';
  }
  if (
    pathname.startsWith('/de/') ||
    post?.language === 'de' ||
    GERMAN_SLUG_RE.test(post?.slug ?? '')
  ) {
    return 'de';
  }
  return 'en';
}

export function getBlogPostUiStrings(locale: BlogArticleLocale): BlogPostUiStrings {
  return UI[locale];
}

export function getBlogArticleIndexPath(locale: BlogArticleLocale, contentSilo?: string): string {
  if (locale === 'ar') return '/ar/blog';
  if (locale === 'de') return '/de/blog';
  if (contentSilo === 'industries') return '/bionixus-industries/insights';
  return '/blog';
}

export function getBlogArticleIndexLabel(locale: BlogArticleLocale, contentSilo?: string): string {
  if (locale === 'ar') return 'المدونة العربية';
  if (locale === 'de') return 'Blog';
  if (contentSilo === 'industries') return 'Industry Insights';
  return 'Blog';
}
