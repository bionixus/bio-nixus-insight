import type { Language } from '@/lib/i18n';
import type { HomePathwayCardCopy } from '@/lib/homePageHardcoded';
import type { PathwayCard } from '@/components/home/HomePathwaysSection';
import { getLocalizedPathForLanguage, languagePaths } from '@/lib/seo';

const PATHWAY_ROUTES: {
  to: string;
  highlight?: boolean;
}[] = [
  { to: '/healthcare-market-research' },
  { to: '/healthcare-market-research/saudi-arabia', highlight: true },
  { to: '/healthcare-market-research/uae', highlight: true },
  { to: '/bionixus-market-research-middle-east', highlight: true },
  { to: '/strategic-portfolio', highlight: true },
  { to: '/insights/top-market-research-companies-egypt-2026', highlight: true },
  { to: '/quantitative-healthcare-market-research', highlight: true },
  { to: '/bionixus-industries', highlight: true },
  { to: '/global-websites', highlight: true },
];

const ARABIC_BONUS_CARD: PathwayCard = {
  to: '/ar/arabic-blog-alsawdyh',
  title: 'دليل أبحاث السوق الدوائي في السعودية',
  description:
    'دليل عربي عملي يربط التنظيم المحلي، ديناميكيات المستشفيات، وأسئلة الوصول إلى السوق بقرارات الأدوية في المملكة.',
  highlight: true,
  label: 'موارد عربية',
  decisionHint: 'مقالات وروابط ذات صلة',
};

function localizeHomePathwayRoute(enPath: string, language: Language): string {
  const localized = getLocalizedPathForLanguage(enPath, language);
  if (localized !== enPath) return localized;
  if (language === 'en') return enPath;
  const prefix = languagePaths[language];
  if (!prefix || prefix === '/') return enPath;
  return `${prefix}${enPath}`;
}

export function buildHomePathwayCards(language: Language, cards: HomePathwayCardCopy[]): PathwayCard[] {
  const built = PATHWAY_ROUTES.map((route, i) => {
    const copy = cards[i];
    return {
      to: localizeHomePathwayRoute(route.to, language),
      title: copy.title,
      description: copy.description,
      highlight: route.highlight,
      ...(copy.label ? { label: copy.label } : {}),
      ...(copy.hint ? { decisionHint: copy.hint } : {}),
    };
  });

  if (language === 'ar') {
    return [ARABIC_BONUS_CARD, ...built];
  }
  return built;
}
