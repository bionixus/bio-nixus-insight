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
  return UI[locale];
}

export function getSiteExplorerSectionMeta(locale: BlogArticleLocale): SectionMeta[] {
  if (locale === 'de') return SECTIONS_DE;
  if (locale === 'ar') return SECTIONS_AR;
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
