import type { BlogArticleLocale } from '@/lib/blogPostUiStrings';
import type { SiteExplorerSection } from '@/lib/blogSiteExplorer';

export interface SiteExplorerUiStrings {
  ariaLabel: string;
  title: string;
  description: string;
  groupsLabel: (groups: number, urls: number) => string;
  sitemapLink: string;
}

const UI: Record<BlogArticleLocale, SiteExplorerUiStrings> = {
  en: {
    ariaLabel: 'BioNixus site directory',
    title: 'Explore BioNixus capabilities & hubs',
    description:
      'A directory of every indexed marketing destination — country and therapy hubs, research methodologies, pharmaceutical directories, market reports, global websites, insights, case studies, and localized coverage across regions. Use this index instead of generic related-article lists for full-site context.',
    groupsLabel: (groups, urls) => `${groups} groups · ${urls} URLs`,
    sitemapLink: 'Full structured sitemap',
  },
  de: {
    ariaLabel: 'BioNixus Seitenverzeichnis',
    title: 'BioNixus-Leistungen & Hubs entdecken',
    description:
      'Verzeichnis aller indexierten Marketing-Seiten — Länder- und Therapie-Hubs, Forschungsmethoden, Pharma-Verzeichnisse, Marktberichte, globale Websites, Insights, Fallstudien und lokalisierte Inhalte weltweit. Nutzen Sie diesen Index für den vollständigen Seitenkontext statt generischer „Weitere Artikel“-Listen.',
    groupsLabel: (groups, urls) => `${groups} Gruppen · ${urls} URLs`,
    sitemapLink: 'Vollständige Sitemap',
  },
  ar: {
    ariaLabel: 'دليل موقع BioNixus',
    title: 'استكشف قدرات BioNixus ومراكزها',
    description:
      'دليل لجميع صفحات التسويق المفهرسة — محاور البلدان ومجالات العلاج، منهجيات البحث، دلائل الأدوية، تقارير السوق، المواقع العالمية، الرؤى، دراسات الحالة، وتغطية محلية في مختلف المناطق. استخدم هذا الفهرس بدلاً من قوائم المقالات ذات الصلة للحصول على سياق الموقع الكامل.',
    groupsLabel: (groups, urls) => `${groups} مجموعات · ${urls} روابط`,
    sitemapLink: 'خريطة الموقع الكاملة',
  },
  fr: {
    ariaLabel: 'Répertoire du site BioNixus',
    title: 'Explorer les capacités et hubs BioNixus',
    description:
      'Répertoire de toutes les destinations marketing indexées — hubs pays et thérapeutiques, méthodologies, annuaires pharma, rapports de marché, sites globaux, insights, études de cas et pages localisées dans le monde.',
    groupsLabel: (groups, urls) => `${groups} groupes · ${urls} URLs`,
    sitemapLink: 'Plan du site complet',
  },
  es: {
    ariaLabel: 'Directorio del sitio BioNixus',
    title: 'Explorar capacidades y hubs de BioNixus',
    description:
      'Directorio de destinos de marketing indexados — hubs de países y terapias, metodologías, directorios farmacéuticos, informes de mercado, sitios globales, insights, casos de estudio y cobertura localizada en todo el mundo.',
    groupsLabel: (groups, urls) => `${groups} grupos · ${urls} URLs`,
    sitemapLink: 'Mapa del sitio completo',
  },
  pt: {
    ariaLabel: 'Diretório do site BioNixus',
    title: 'Explorar capacidades e hubs BioNixus',
    description:
      'Diretório de destinos de marketing indexados — hubs de países e terapias, metodologias, diretórios farmacêuticos, relatórios de mercado, sites globais, insights, casos de estudo e cobertura localizada mundialmente.',
    groupsLabel: (groups, urls) => `${groups} grupos · ${urls} URLs`,
    sitemapLink: 'Mapa do site completo',
  },
  ru: {
    ariaLabel: 'Каталог сайта BioNixus',
    title: 'Возможности и хабы BioNixus',
    description:
      'Каталог всех индексируемых маркетинговых страниц — хабы стран и терапий, методологии, фарма-справочники, отчёты, глобальные сайты, insights, кейсы и локализованное покрытие по миру.',
    groupsLabel: (groups, urls) => `${groups} групп · ${urls} URL`,
    sitemapLink: 'Полная карта сайта',
  },
  zh: {
    ariaLabel: 'BioNixus 网站目录',
    title: '探索 BioNixus 能力与中心页',
    description:
      '所有已索引营销页面的目录 — 国家与治疗领域中心、研究方法、医药目录、市场报告、全球网站、洞察、案例研究及全球本地化覆盖。',
    groupsLabel: (groups, urls) => `${groups} 组 · ${urls} 链接`,
    sitemapLink: '完整网站地图',
  },
};

type SectionMeta = { id: string; title: string; description?: string };

const SECTIONS_EN: SectionMeta[] = [
  { id: 'hubs', title: 'Home & language hubs', description: 'Localized entry points for BioNixus.' },
  {
    id: 'company',
    title: 'Company, trust & methodology',
    description: 'About, contact, compliance, and how we work.',
  },
  { id: 'services', title: 'Core services', description: 'Quantitative, qualitative, access, intelligence, trials, KOL.' },
  {
    id: 'healthcare',
    title: 'Healthcare market research hub',
    description: 'Countries, cities, therapy areas, and research modules.',
  },
  {
    id: 'global',
    title: 'Global websites',
    description: 'Country blueprint navigation for international teams.',
  },
  {
    id: 'pillars',
    title: 'GCC, MENA & specialty programs',
    description: 'Pillar landings, alternatives, and deep-dive reports.',
  },
  {
    id: 'pharma-cos',
    title: 'Pharmaceutical company directories',
    description: 'Country-level industry snapshots.',
  },
  {
    id: 'reports',
    title: 'Healthcare & devices market reports',
    description: 'GCC and country medical market briefs.',
  },
  { id: 'blog', title: 'Blog & insights', description: 'Editorial briefs, guides, and regional analysis.' },
  { id: 'cases', title: 'Case studies', description: 'Selected client evidence and programme outcomes.' },
  { id: 'portfolio', title: 'Portfolio & conference', description: 'Strategic portfolio deck and event pages.' },
  {
    id: 'localized',
    title: 'Localized pages',
    description: 'Market access, contacts, and market research by locale.',
  },
  { id: 'other', title: 'Additional pages', description: 'Supporting URLs and tooling.' },
];

const SECTIONS_DE: SectionMeta[] = [
  { id: 'hubs', title: 'Startseite & Sprach-Hubs', description: 'Lokalisierte Einstiegspunkte für BioNixus.' },
  {
    id: 'company',
    title: 'Unternehmen, Vertrauen & Methodik',
    description: 'Über uns, Kontakt, Compliance und Arbeitsweise.',
  },
  {
    id: 'services',
    title: 'Kernleistungen',
    description: 'Quantitative und qualitative Forschung, Marktzugang, Intelligence, Studien, KOL.',
  },
  {
    id: 'healthcare',
    title: 'Hub Gesundheitsmarktforschung',
    description: 'Länder, Städte, Therapiegebiete und Forschungsmodule.',
  },
  {
    id: 'global',
    title: 'Globale Websites',
    description: 'Länder-Navigation für internationale Teams.',
  },
  {
    id: 'pillars',
    title: 'GCC, MENA & Spezialprogramme',
    description: 'Pillar-Landingpages, Alternativen und Deep-Dive-Berichte.',
  },
  {
    id: 'pharma-cos',
    title: 'Pharma-Unternehmensverzeichnisse',
    description: 'Branchenübersichten nach Land.',
  },
  {
    id: 'reports',
    title: 'Gesundheits- & MedTech-Marktberichte',
    description: 'GCC- und Länder-Marktbriefings.',
  },
  { id: 'blog', title: 'Blog & Insights', description: 'Redaktionelle Briefings, Leitfäden und Regionalanalysen.' },
  { id: 'cases', title: 'Fallstudien', description: 'Ausgewählte Kundenbelege und Projektergebnisse.' },
  { id: 'portfolio', title: 'Portfolio & Konferenz', description: 'Strategisches Portfolio und Event-Seiten.' },
  {
    id: 'localized',
    title: 'Lokalisierte Seiten',
    description: 'Marktzugang, Kontakt und Marktforschung nach Sprache/Region.',
  },
  { id: 'other', title: 'Weitere Seiten', description: 'Ergänzende URLs und Tools.' },
];

const SECTIONS_AR: SectionMeta[] = [
  { id: 'hubs', title: 'الرئيسية ومحاور اللغات', description: 'نقاط الدخول المحلية لـ BioNixus.' },
  { id: 'company', title: 'الشركة والثقة والمنهجية', description: 'من نحن، التواصل، الامتثال، وآلية العمل.' },
  { id: 'services', title: 'الخدمات الأساسية', description: 'بحث كمي ونوعي، وصول للسوق، ذكاء، تجارب، KOL.' },
  { id: 'healthcare', title: 'محور أبحاث سوق الرعاية الصحية', description: 'البلدان والمدن ومجالات العلاج ووحدات البحث.' },
  { id: 'global', title: 'المواقع العالمية', description: 'تصفح حسب البلد للفرق الدولية.' },
  { id: 'pillars', title: 'GCC وMENA وبرامج متخصصة', description: 'صفحات رئيسية وتقارير متعمقة.' },
  { id: 'pharma-cos', title: 'دلائل شركات الأدوية', description: 'لمحات صناعية حسب البلد.' },
  { id: 'reports', title: 'تقارير سوق الرعاية الصحية والأجهزة', description: 'موجزات سوق GCC والبلدان.' },
  { id: 'blog', title: 'المدونة والرؤى', description: 'موجزات تحريرية وأدلة وتحليل إقليمي.' },
  { id: 'cases', title: 'دراسات الحالة', description: 'أدلة عملاء مختارة ونتائج البرامج.' },
  { id: 'portfolio', title: 'المحفظة والمؤتمر', description: 'عرض المحفظة الاستراتيجية وصفحات الفعاليات.' },
  { id: 'localized', title: 'صفحات محلية', description: 'وصول للسوق والتواصل والبحث حسب اللغة.' },
  { id: 'other', title: 'صفحات إضافية', description: 'روابط داعمة وأدوات.' },
];

/** Arabic anchor text overrides for explorer links (path → label). */
export const AR_PATH_LABEL_OVERRIDES: Readonly<Record<string, string>> = {
  '/': 'الرئيسية',
  '/ar': 'BioNixus — الصفحة الرئيسية العربية',
  '/ar/blog': 'المدونة العربية',
  '/ar/contact': 'تواصل معنا',
  '/ar/market-research-healthcare': 'أبحاث سوق الرعاية الصحية',
  '/contact': 'تواصل',
  '/about': 'من نحن',
  '/healthcare-market-research': 'محور أبحاث سوق الرعاية الصحية',
  '/healthcare-market-research/saudi-arabia': 'أبحاث السوق في السعودية',
  '/healthcare-market-research/uae': 'أبحاث السوق في الإمارات',
  '/gcc-pharmaceutical-market-research': 'أبحاث السوق الدوائي في GCC',
  '/ar/blog/gcc-pharmaceuticals-market-arabic-2026': 'سوق الأدوية في الخليج 2026',
  '/ar/arabic-blog-alsawdyh': 'دليل أبحاث السوق الدوائي في السعودية',
  '/insights': 'الرؤى',
  '/case-studies': 'دراسات الحالة',
  '/sitemap': 'خريطة الموقع',
};

/** German anchor text overrides for explorer links (path → label). */
export const DE_PATH_LABEL_OVERRIDES: Readonly<Record<string, string>> = {
  '/': 'Startseite',
  '/de': 'BioNixus — Deutsche Startseite',
  '/de/blog': 'Blog',
  '/de/contact': 'Kontakt',
  '/de/market-research-healthcare': 'Gesundheitsmarktforschung',
  '/contact': 'Kontakt',
  '/about': 'Über uns',
  '/faq': 'FAQ',
  '/sitemap': 'Sitemap',
  '/insights': 'Insights',
  '/methodology': 'Methodik',
  '/case-studies': 'Fallstudien',
  '/services': 'Leistungen',
  '/services/market-access': 'Marktzugang',
  '/services/quantitative-research': 'Quantitative Forschung',
  '/services/qualitative-research': 'Qualitative Forschung',
  '/services/kol-mapping': 'KOL-Mapping',
  '/healthcare-market-research': 'Hub Gesundheitsmarktforschung',
  '/healthcare-market-research/germany': 'Gesundheitsmarktforschung Deutschland',
  '/healthcare-market-research/europe': 'Gesundheitsmarktforschung Europa',
  '/healthcare-market-research-germany': 'Gesundheitsmarktforschung Deutschland',
  '/pharmaceutical-market-research-germany': 'Pharmazeutische Marktforschung Deutschland',
  '/germany-healthcare-market-report': 'Deutschland-Gesundheitsmarktbericht',
  '/germany-medical-devices-market-report': 'Deutschland MedTech-Marktbericht',
  '/insights/top-market-research-companies-germany-2026': 'Top Marktforschungsunternehmen Deutschland 2026',
  '/insights/top-healthcare-market-research-companies-germany-2026':
    'Top Gesundheitsmarktforschung Deutschland 2026',
  '/blog/gesundheitsmarkt-deutschland-2026': 'Gesundheitsmarkt Deutschland 2026',
  '/blog/deutsche-pharmaunternehmen-2026-pipeline-updates': 'Deutsche Pharmaunternehmen 2026 — Pipeline-Updates',
  '/de/blog/pharmamarktforschung-deutschland-2026': 'Pharmamarktforschung Deutschland 2026',
  '/de/blog/amnog-frueher-nutzen-marktzugang-2026': 'AMNOG Frühe Nutzenbewertung 2026',
  '/blog/healthcare-market-research-europe-2026': 'Gesundheitsmarktforschung Europa 2026',
  '/blog/pharmaceutical-market-research-uk-2026': 'Pharmazeutische Marktforschung UK 2026',
  '/blog/emea-jca-market-access-update-2026': 'EMEA JCA Marktzugang 2026',
  '/blog/nice-hta-evidence-requirements-guide': 'NICE HTA Evidenzanforderungen',
  '/healthcare-market-research/services/market-access': 'Marktzugang — Gesundheitsmarktforschung',
  '/healthcare-market-research/services/quantitative-research': 'Quantitative Forschung — Hub',
  '/healthcare-market-research/services/qualitative-research': 'Qualitative Forschung — Hub',
  '/healthcare-market-research/services/kol-mapping': 'KOL-Mapping — Hub',
  '/healthcare-market-research/services/physician-insights': 'Ärzte-Insights — Hub',
  '/healthcare-market-research/therapy/oncology': 'Onkologie — Therapiegebiet',
  '/healthcare-market-research/therapy/immunology': 'Immunologie — Therapiegebiet',
  '/healthcare-market-research/therapy/rare-diseases': 'Seltene Erkrankungen — Therapiegebiet',
  '/europe': 'Europa',
  '/uk': 'Vereinigtes Königreich',
};

export function getSiteExplorerUiStrings(locale: BlogArticleLocale): SiteExplorerUiStrings {
  return UI[locale] ?? UI.en;
}

export function getSiteExplorerSectionMeta(locale: BlogArticleLocale): SectionMeta[] {
  if (locale === 'de') return SECTIONS_DE;
  if (locale === 'ar') return SECTIONS_AR;
  if (locale === 'fr') {
    return SECTIONS_EN.map((s) => ({
      ...s,
      title: s.title
        .replace('Home & language hubs', 'Accueil et hubs linguistiques')
        .replace('Company, trust & methodology', 'Entreprise, confiance et méthodologie')
        .replace('Core services', 'Services principaux')
        .replace('Healthcare market research hub', 'Hub études de marché santé')
        .replace('Global websites', 'Sites globaux')
        .replace('GCC, MENA & specialty programs', 'GCC, MENA et programmes spécialisés')
        .replace('Pharmaceutical company directories', 'Annuaires pharma')
        .replace('Healthcare & devices market reports', 'Rapports marché santé & dispositifs')
        .replace('Blog & insights', 'Blog et insights')
        .replace('Case studies', 'Études de cas')
        .replace('Portfolio & conference', 'Portfolio et conférences')
        .replace('Localized pages', 'Pages localisées')
        .replace('Additional pages', 'Pages supplémentaires'),
    }));
  }
  return SECTIONS_EN;
}

export function applySectionLocale(
  sections: SiteExplorerSection[],
  locale: BlogArticleLocale,
): SiteExplorerSection[] {
  const metaById = new Map(getSiteExplorerSectionMeta(locale).map((m) => [m.id, m]));
  return sections.map((sec) => {
    const meta = metaById.get(sec.id);
    if (!meta) return sec;
    return { ...sec, title: meta.title, description: meta.description };
  });
}
