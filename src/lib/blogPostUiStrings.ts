export type BlogArticleLocale = 'en' | 'de' | 'ar' | 'fr' | 'es' | 'pt' | 'ru' | 'zh';

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
  fr: {
    backTo: (label) => `Retour à ${label}`,
    ctaEyebrow: 'Consultation experte',
    sidebarCtaEyebrow: 'Recherche experte',
    sidebarCtaTitle: 'Besoin d’études de marché pharma pour votre équipe ?',
    sidebarCtaButton: 'Demander un briefing',
    contactPath: '/fr/contact',
    faqHeading: 'Questions fréquentes',
    faqBadge: 'FAQ',
    faqQuestionFallback: 'Question',
    executiveSummary: 'Résumé',
    executiveSummaryAria: 'Résumé exécutif',
    tocHeading: 'Sur cette page',
    authorEyebrow: 'Auteur',
    linkedInProfile: 'Profil LinkedIn',
    updated: 'Mis à jour',
    readingMin: 'min',
    articleNotFound: 'Article introuvable.',
    invalidArticle: 'Article invalide.',
    tocSectionCount: (count) => `${count} sections`,
    tocAriaLabel: 'Table des matières',
    shareLabel: 'Partager :',
    shareOn: (platform) => `Partager sur ${platform}`,
    copyLink: 'Copier le lien',
    linkCopied: 'Lien copié',
    linkCopyFailed: 'Échec de la copie',
    relatedArticles: 'Articles associés',
    readArticle: 'Lire l’article',
    previous: 'Précédent',
    next: 'Suivant',
    postNavigationAria: 'Navigation des articles',
    relatedArticlesAria: 'Articles associés',
    relatedResearchHeading: 'Explorer la recherche associée',
    relatedResearchDescription:
      'Pour approfondir, explorez notre cadre d’études de marché santé et notre couverture par pays en France, en Europe et dans le monde.',
  },
  es: {
    backTo: (label) => `Volver a ${label}`,
    ctaEyebrow: 'Consultoría experta',
    sidebarCtaEyebrow: 'Investigación experta',
    sidebarCtaTitle: '¿Necesita investigación de mercado pharma para su equipo?',
    sidebarCtaButton: 'Solicitar briefing',
    contactPath: '/es/contact',
    faqHeading: 'Preguntas frecuentes',
    faqBadge: 'FAQ',
    faqQuestionFallback: 'Pregunta',
    executiveSummary: 'Resumen',
    executiveSummaryAria: 'Resumen ejecutivo',
    tocHeading: 'En esta página',
    authorEyebrow: 'Autor',
    linkedInProfile: 'Perfil de LinkedIn',
    updated: 'Actualizado',
    readingMin: 'min',
    articleNotFound: 'Artículo no encontrado.',
    invalidArticle: 'Artículo no válido.',
    tocSectionCount: (count) => `${count} secciones`,
    tocAriaLabel: 'Tabla de contenidos',
    shareLabel: 'Compartir:',
    shareOn: (platform) => `Compartir en ${platform}`,
    copyLink: 'Copiar enlace',
    linkCopied: 'Enlace copiado',
    linkCopyFailed: 'Error al copiar',
    relatedArticles: 'Artículos relacionados',
    readArticle: 'Leer artículo',
    previous: 'Anterior',
    next: 'Siguiente',
    postNavigationAria: 'Navegación de artículos',
    relatedArticlesAria: 'Artículos relacionados',
    relatedResearchHeading: 'Explorar investigación relacionada',
    relatedResearchDescription:
      'Para profundizar, explore nuestro marco de investigación de mercado sanitario y cobertura por país en España, Europa y globalmente.',
  },
  pt: {
    backTo: (label) => `Voltar a ${label}`,
    ctaEyebrow: 'Consultoria especializada',
    sidebarCtaEyebrow: 'Pesquisa especializada',
    sidebarCtaTitle: 'Precisa de pesquisa de mercado pharma para a sua equipa?',
    sidebarCtaButton: 'Solicitar briefing',
    contactPath: '/pt/contact',
    faqHeading: 'Perguntas frequentes',
    faqBadge: 'FAQ',
    faqQuestionFallback: 'Pergunta',
    executiveSummary: 'Resumo',
    executiveSummaryAria: 'Resumo executivo',
    tocHeading: 'Nesta página',
    authorEyebrow: 'Autor',
    linkedInProfile: 'Perfil LinkedIn',
    updated: 'Atualizado',
    readingMin: 'min',
    articleNotFound: 'Artigo não encontrado.',
    invalidArticle: 'Artigo inválido.',
    tocSectionCount: (count) => `${count} secções`,
    tocAriaLabel: 'Índice',
    shareLabel: 'Partilhar:',
    shareOn: (platform) => `Partilhar no ${platform}`,
    copyLink: 'Copiar link',
    linkCopied: 'Link copiado',
    linkCopyFailed: 'Falha ao copiar',
    relatedArticles: 'Artigos relacionados',
    readArticle: 'Ler artigo',
    previous: 'Anterior',
    next: 'Seguinte',
    postNavigationAria: 'Navegação de artigos',
    relatedArticlesAria: 'Artigos relacionados',
    relatedResearchHeading: 'Explorar pesquisa relacionada',
    relatedResearchDescription:
      'Para aprofundar, explore o nosso quadro de pesquisa de mercado de saúde e cobertura por país no Brasil, Europa e globalmente.',
  },
  ru: {
    backTo: (label) => `Назад к ${label}`,
    ctaEyebrow: 'Экспертная консультация',
    sidebarCtaEyebrow: 'Экспертные исследования',
    sidebarCtaTitle: 'Нужны pharma market research для вашей команды?',
    sidebarCtaButton: 'Запросить брифинг',
    contactPath: '/ru/contact',
    faqHeading: 'Частые вопросы',
    faqBadge: 'FAQ',
    faqQuestionFallback: 'Вопрос',
    executiveSummary: 'Краткое резюме',
    executiveSummaryAria: 'Краткое резюме',
    tocHeading: 'На этой странице',
    authorEyebrow: 'Автор',
    linkedInProfile: 'Профиль LinkedIn',
    updated: 'Обновлено',
    readingMin: 'мин',
    articleNotFound: 'Статья не найдена.',
    invalidArticle: 'Недействительная статья.',
    tocSectionCount: (count) => `${count} разделов`,
    tocAriaLabel: 'Содержание',
    shareLabel: 'Поделиться:',
    shareOn: (platform) => `Поделиться в ${platform}`,
    copyLink: 'Копировать ссылку',
    linkCopied: 'Ссылка скопирована',
    linkCopyFailed: 'Не удалось скопировать',
    relatedArticles: 'Похожие статьи',
    readArticle: 'Читать статью',
    previous: 'Предыдущая',
    next: 'Следующая',
    postNavigationAria: 'Навигация по статьям',
    relatedArticlesAria: 'Похожие статьи',
    relatedResearchHeading: 'Связанные исследования',
    relatedResearchDescription:
      'Для углублённого понимания изучите нашу методологию исследований рынка здравоохранения и покрытие по странам в России, Европе и глобально.',
  },
  zh: {
    backTo: (label) => `返回${label}`,
    ctaEyebrow: '专家咨询',
    sidebarCtaEyebrow: '专家研究',
    sidebarCtaTitle: '您的团队需要医药市场研究吗？',
    sidebarCtaButton: '申请简报',
    contactPath: '/zh/contact',
    faqHeading: '常见问题',
    faqBadge: 'FAQ',
    faqQuestionFallback: '问题',
    executiveSummary: '摘要',
    executiveSummaryAria: '执行摘要',
    tocHeading: '本页内容',
    authorEyebrow: '作者',
    linkedInProfile: 'LinkedIn 主页',
    updated: '更新于',
    readingMin: '分钟',
    articleNotFound: '未找到文章。',
    invalidArticle: '无效文章。',
    tocSectionCount: (count) => `${count} 个章节`,
    tocAriaLabel: '目录',
    shareLabel: '分享：',
    shareOn: (platform) => `分享到 ${platform}`,
    copyLink: '复制链接',
    linkCopied: '链接已复制',
    linkCopyFailed: '复制失败',
    relatedArticles: '相关文章',
    readArticle: '阅读文章',
    previous: '上一篇',
    next: '下一篇',
    postNavigationAria: '文章导航',
    relatedArticlesAria: '相关文章',
    relatedResearchHeading: '探索相关研究',
    relatedResearchDescription:
      '如需更深入的区域洞察，请浏览我们的医疗健康市场研究框架及中国、欧洲与全球的国家覆盖。',
  },
};

const LOCALE_PREFIX: Record<Exclude<BlogArticleLocale, 'en'>, string> = {
  de: '/de',
  ar: '/ar',
  fr: '/fr',
  es: '/es',
  pt: '/pt',
  ru: '/ru',
  zh: '/zh',
};

const GERMAN_SLUG_RE = /germany|deutsche|gesundheit|pharmamarktforschung|amnog-frueher/i;

/** Latin-slug Arabic articles published under `/blog/` (transliterated URLs). */
const LATIN_SLUG_ARABIC_BLOG_POSTS = new Set([
  'souk-adwiya-saudiya-dalil-shamel-rueya-2030-2026',
  'saudi-healthcare-market-research-guide-ar-2026',
  'heor-consulting-saudi-arabia-ar-2026',
  'saudi-arabia-pharmaceutical-market-research-2026-ar',
  'saudi-healthcare-market-research-firms-ar',
  'quantitative-market-research-and-market-access',
]);

/** Latin-slug Chinese articles published under `/blog/` without `/zh/` prefix. */
const LATIN_SLUG_CHINESE_BLOG_POSTS = new Set([
  'pharmaceutical-market-research-china-2026',
  'nmpa-pharmaceutical-market-research-china-2026',
  'healthcare-overview-china-market-2026',
]);

const CHINESE_SLUG_RE = /china|nmpa|chinese|zh-/i;

const ARABIC_SCRIPT_RE = /[\u0600-\u06FF]/;

export function isRtlBlogLocale(locale: BlogArticleLocale): boolean {
  return locale === 'ar';
}

export function resolveBlogArticleLocale(
  post: { language?: string; slug?: string; title?: string } | null | undefined,
  pathname: string,
): BlogArticleLocale {
  for (const [locale, prefix] of Object.entries(LOCALE_PREFIX) as [Exclude<BlogArticleLocale, 'en'>, string][]) {
    if (pathname.startsWith(`${prefix}/`) || pathname === prefix) {
      return locale;
    }
  }
  const lang = post?.language;
  if (lang && lang !== 'en' && lang in LOCALE_PREFIX) {
    return lang as BlogArticleLocale;
  }
  if (LATIN_SLUG_ARABIC_BLOG_POSTS.has(post?.slug ?? '')) return 'ar';
  if (LATIN_SLUG_CHINESE_BLOG_POSTS.has(post?.slug ?? '')) return 'zh';
  if (ARABIC_SCRIPT_RE.test(post?.slug ?? '')) return 'ar';
  if (ARABIC_SCRIPT_RE.test(post?.title ?? '')) return 'ar';
  if (CHINESE_SLUG_RE.test(post?.slug ?? '')) return 'zh';
  if (GERMAN_SLUG_RE.test(post?.slug ?? '')) return 'de';
  return 'en';
}

export const BLOG_DATE_LOCALE: Record<BlogArticleLocale, string> = {
  en: 'en-GB',
  de: 'de-DE',
  ar: 'ar-EG',
  fr: 'fr-FR',
  es: 'es-ES',
  pt: 'pt-PT',
  ru: 'ru-RU',
  zh: 'zh-CN',
};

export function getBlogPostUiStrings(locale: BlogArticleLocale): BlogPostUiStrings {
  return UI[locale];
}

export function getBlogArticleIndexPath(locale: BlogArticleLocale, contentSilo?: string): string {
  if (locale === 'ar') return '/ar/blog';
  if (locale === 'de') return '/de/blog';
  if (locale === 'fr') return '/fr/blog';
  if (locale === 'es') return '/es/blog';
  if (locale === 'pt') return '/pt/blog';
  if (locale === 'ru') return '/ru/blog';
  if (locale === 'zh') return '/zh/blog';
  if (contentSilo === 'industries') return '/bionixus-industries/insights';
  return '/blog';
}

export function getBlogArticleIndexLabel(locale: BlogArticleLocale, contentSilo?: string): string {
  if (locale === 'ar') return 'المدونة العربية';
  if (locale === 'de') return 'Blog';
  if (locale === 'fr') return 'Blog';
  if (locale === 'es') return 'Blog';
  if (locale === 'pt') return 'Blog';
  if (locale === 'ru') return 'Блог';
  if (locale === 'zh') return '博客';
  if (contentSilo === 'industries') return 'Industry Insights';
  return 'Blog';
}
