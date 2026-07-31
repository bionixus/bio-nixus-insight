import type { PortableTextBlock } from '@portabletext/types';
import type { BlogPostCtaSection } from '@/types/blog';
import type { BlogArticleLocale } from '@/lib/blogPostUiStrings';
import type { BlogFaqItem } from '@/data/germanBlogFaq';

const EN_MARKERS = /\b(Who is this|Scope your|SFDA|MOHAP|AMNOG|Request a commercial|Executive summary|market access and healthcare)\b/i;

type LocalePack = {
  genericFaq: BlogFaqItem[];
  defaultCta: BlogPostCtaSection;
  execSummary: (title: string) => string;
  tocByAnchor: Record<string, string>;
  contactPath: string;
};

const PACKS: Record<Exclude<BlogArticleLocale, 'en' | 'de' | 'ar'>, LocalePack> = {
  fr: {
    contactPath: '/fr/contact',
    defaultCta: {
      title: 'Briefing accès marché — France & Europe',
      description:
        'BioNixus accompagne les dossiers HAS/CEPS, la recherche médecins et payeurs, le mapping KOL et l’analyse concurrentielle en France, UE et UK — pour des décisions d’accès et de lancement.',
      buttonText: 'Demander un briefing',
      buttonUrl: 'https://www.bionixus.com/fr/contact',
    },
    execSummary: (title) => {
      const focus = title?.split(':')[0]?.trim() || 'Cet article';
      return `${focus} : accès marché et études de marché santé en France et en Europe pour les équipes pharma et MedTech. BioNixus synthétise payeurs, régulation et insights — sans remplacer un avis clinique.`;
    },
    genericFaq: [
      { question: 'À qui s’adresse ce guide ?', answer: 'Aux responsables commercial, market access et medical affairs en France et en Europe. Il soutient la planification remboursement et insights — sans conseil médical produit.' },
      { question: 'Comment valider les estimations de marché ?', answer: 'Croiser sources réglementaires, épidémiologie locale et entretiens payeurs. BioNixus recommande une modélisation prudente alignée HAS/CEPS plutôt qu’une seule projection globale.' },
      { question: 'Quand privilégier la recherche sur mesure ?', answer: 'Les données syndiquées répondent au volume ; la recherche custom explique les écarts de prescription et remboursement. Le mixed-mode est courant pour l’accès et le lancement.' },
      { question: 'Comment BioNixus aide les équipes pharma ?', answer: 'Études santé, accès marché, analyse dossiers HTA, KOL et simulation concurrentielle en France, UE et UK. Contactez BioNixus pour un briefing.' },
      { question: 'Ce contenu contient-il des recommandations thérapeutiques ?', answer: 'Non. Il traite uniquement du commercial, de l’accès et de la recherche.' },
    ],
    tocByAnchor: {
      'key-insights': 'Points clés',
      'detailed-analysis': 'Analyse détaillée',
      'bionixus-advisory': 'Conseil BioNixus',
      'related-reading': 'Lectures associées',
      faq: 'Questions fréquentes',
    },
  },
  es: {
    contactPath: '/es/contact',
    defaultCta: {
      title: 'Briefing de acceso al mercado — España y Europa',
      description:
        'BioNixus apoya dossiers HTA, investigación con médicos y pagadores, mapping KOL y análisis competitivo en España, UE y LATAM — para decisiones de acceso y lanzamiento.',
      buttonText: 'Solicitar briefing',
      buttonUrl: 'https://www.bionixus.com/es/contact',
    },
    execSummary: (title) => {
      const focus = title?.split(':')[0]?.trim() || 'Este artículo';
      return `${focus}: acceso al mercado e investigación de mercado sanitario en España, Europa y LATAM para equipos pharma y MedTech. BioNixus resume pagadores, regulación e insights — sin sustituir asesoramiento clínico.`;
    },
    genericFaq: [
      { question: '¿Para quién es esta guía?', answer: 'Para responsables comerciales, market access y medical affairs en España, Europa y LATAM. Apoya planificación de reembolso e insights — no sustituye consejo médico.' },
      { question: '¿Cómo validar estimaciones de mercado?', answer: 'Usar múltiples fuentes — resúmenes regulatorios, epidemiología local y entrevistas con pagadores. BioNixus recomienda modelización conservadora alineada con HTA nacional.' },
      { question: '¿Cuándo elegir investigación a medida?', answer: 'Los datos sindicados responden volumen; la investigación custom explica diferencias de prescripción y reembolso. Los diseños mixtos son habituales para acceso y lanzamiento.' },
      { question: '¿Cómo apoya BioNixus a equipos pharma?', answer: 'Investigación sanitaria, acceso al mercado, análisis HTA, KOL y simulación competitiva en España, UE y globalmente. Contacte a BioNixus para un briefing.' },
      { question: '¿Incluye recomendaciones terapéuticas?', answer: 'No. Solo cubre operaciones comerciales, acceso e investigación.' },
    ],
    tocByAnchor: {
      'key-insights': 'Ideas clave',
      'detailed-analysis': 'Análisis detallado',
      'bionixus-advisory': 'Asesoría BioNixus',
      'related-reading': 'Lecturas relacionadas',
      faq: 'Preguntas frecuentes',
    },
  },
  pt: {
    contactPath: '/pt/contact',
    defaultCta: {
      title: 'Briefing de acesso ao mercado — Brasil e Europa',
      description:
        'A BioNixus apoia dossiers HTA, pesquisa com médicos e pagadores, mapeamento KOL e análise competitiva no Brasil, UE e mercados globais — para decisões de acesso e lançamento.',
      buttonText: 'Solicitar briefing',
      buttonUrl: 'https://www.bionixus.com/pt/contact',
    },
    execSummary: (title) => {
      const focus = title?.split(':')[0]?.trim() || 'Este artigo';
      return `${focus}: acesso ao mercado e pesquisa de mercado de saúde no Brasil, Europa e globalmente para equipas pharma e MedTech. A BioNixus resume pagadores, regulação e insights — sem substituir aconselhamento clínico.`;
    },
    genericFaq: [
      { question: 'Para quem é este guia?', answer: 'Para responsáveis comercial, market access e medical affairs no Brasil, Europa e internacionalmente. Apoia planeamento de reembolso e insights — não substitui aconselhamento médico.' },
      { question: 'Como validar estimativas de mercado?', answer: 'Usar múltiplas fontes — resumos regulatórios, epidemiologia local e entrevistas com pagadores. A BioNixus recomenda modelação conservadora alinhada com HTA.' },
      { question: 'Quando escolher pesquisa customizada?', answer: 'Dados sindicados respondem volume; pesquisa custom explica diferenças de prescrição. Desenhos mixed-mode são comuns para acesso e lançamento.' },
      { question: 'Como a BioNixus apoia equipas pharma?', answer: 'Pesquisa de saúde, acesso ao mercado, análise HTA, KOL e simulação competitiva. Contacte a BioNixus para um briefing.' },
      { question: 'Inclui recomendações terapêuticas?', answer: 'Não. Cobre apenas operações comerciais, acesso e pesquisa.' },
    ],
    tocByAnchor: {
      'key-insights': 'Principais insights',
      'detailed-analysis': 'Análise detalhada',
      'bionixus-advisory': 'Consultoria BioNixus',
      faq: 'Perguntas frequentes',
    },
  },
  ru: {
    contactPath: '/ru/contact',
    defaultCta: {
      title: 'Брифинг по доступу на рынок — Россия и Европа',
      description:
        'BioNixus поддерживает HTA-досье, исследования врачей и плательщиков, KOL-картирование и конкурентный анализ в России, ЕС и глобально — для решений по доступу и запуску.',
      buttonText: 'Запросить брифинг',
      buttonUrl: 'https://www.bionixus.com/ru/contact',
    },
    execSummary: (title) => {
      const focus = title?.split(':')[0]?.trim() || 'Эта статья';
      return `${focus}: доступ на рынок и исследования рынка здравоохранения в России, Европе и глобально для pharma и MedTech. BioNixus обобщает плательщиков, регулирование и insights — без замены клинических рекомендаций.`;
    },
    genericFaq: [
      { question: 'Для кого это руководство?', answer: 'Для commercial, market access и medical affairs в России, ЕС и международных команд. Поддерживает планирование возмещения и insights — не заменяет медицинский совет.' },
      { question: 'Как проверять оценки рынка?', answer: 'Использовать несколько источников — регуляторные сводки, локальную эпидемиологию и интервью с плательщиками. BioNixus рекомендует консервативное моделирование.' },
      { question: 'Когда нужно custom-исследование?', answer: 'Синдицированные данные дают объём; custom объясняет различия назначений и возмещения. Mixed-mode типичен для доступа и запуска.' },
      { question: 'Как BioNixus помогает pharma-командам?', answer: 'Исследования здравоохранения, доступ на рынок, HTA, KOL и конкурентный анализ. Свяжитесь с BioNixus для брифинга.' },
      { question: 'Содержит ли статья терапевтические рекомендации?', answer: 'Нет. Только коммерческие, access и research операции.' },
    ],
    tocByAnchor: {
      'key-insights': 'Ключевые выводы',
      'detailed-analysis': 'Подробный анализ',
      'bionixus-advisory': 'Консультация BioNixus',
      faq: 'Частые вопросы',
    },
  },
  zh: {
    contactPath: '/zh/contact',
    defaultCta: {
      title: '中国与全球市场准入简报',
      description:
        'BioNixus 支持 HTA 档案、医生与支付方研究、KOL 映射及竞争分析，覆盖中国、欧洲及全球市场 — 助力准入与上市决策。',
      buttonText: '申请简报',
      buttonUrl: 'https://www.bionixus.com/zh/contact',
    },
    execSummary: (title) => {
      const focus = title?.split(':')[0]?.trim() || '本文';
      return `${focus}：面向制药与 MedTech 商业团队的中国及全球医疗市场研究与市场准入要点。BioNixus 汇总支付方、监管与洞察 — 不替代临床建议。`;
    },
    genericFaq: [
      { question: '本指南适合谁？', answer: '面向中国、欧洲及国际团队的 commercial、market access 与 medical affairs 负责人。支持报销与洞察规划 — 不替代产品医学建议。' },
      { question: '如何验证市场规模？', answer: '多源交叉 — 监管摘要、本地流行病学与支付方访谈。BioNixus 建议与 NMPA/HTA 时间线一致的保守建模。' },
      { question: '何时选择定制研究？', answer: '汇总数据回答量级；定制定性与定量研究解释处方与报销差异。混合设计常见于准入与上市。' },
      { question: 'BioNixus 如何支持制药团队？', answer: '医疗市场研究、市场准入、HTA 分析、KOL 与竞争模拟。联系 BioNixus 获取简报。' },
      { question: '是否包含治疗建议？', answer: '否。仅涵盖商业、准入与研究运营。' },
    ],
    tocByAnchor: {
      'key-insights': '核心洞察',
      'detailed-analysis': '详细分析',
      'bionixus-advisory': 'BioNixus 咨询',
      faq: '常见问题',
    },
  },
};

function looksLikeEnglish(text: string): boolean {
  return EN_MARKERS.test(text);
}

function portableTextToPlainText(blocks: unknown): string {
  if (!Array.isArray(blocks)) return '';
  return blocks
    .flatMap((block) => {
      if (block && typeof block === 'object' && 'children' in block && Array.isArray(block.children)) {
        return block.children.map((child: { text?: string }) => child.text ?? '');
      }
      return [];
    })
    .join(' ')
    .trim();
}

export function getGenericLocaleBlogFaq(
  locale: Exclude<BlogArticleLocale, 'en' | 'de' | 'ar'>,
  _title: string | undefined,
  sanityFaq: BlogFaqItem[] = [],
): BlogFaqItem[] {
  const pack = PACKS[locale];
  if (sanityFaq.length > 0 && !sanityFaq.some((i) => looksLikeEnglish(i.question) || looksLikeEnglish(i.answer))) {
    return sanityFaq;
  }
  return pack.genericFaq;
}

export function getGenericLocaleBlogCta(
  locale: Exclude<BlogArticleLocale, 'en' | 'de' | 'ar'>,
  sanityCta: BlogPostCtaSection | undefined | null,
): BlogPostCtaSection {
  const pack = PACKS[locale];
  if (sanityCta?.title && !looksLikeEnglish([sanityCta.title, sanityCta.description, sanityCta.buttonText].join(' '))) {
    return { ...pack.defaultCta, ...sanityCta, buttonUrl: sanityCta.buttonUrl || pack.defaultCta.buttonUrl };
  }
  return pack.defaultCta;
}

export function resolveGenericLocaleExecutiveSummary(
  locale: Exclude<BlogArticleLocale, 'en' | 'de' | 'ar'>,
  title: string | undefined,
  summary: string | PortableTextBlock[] | null,
): string | PortableTextBlock[] | null {
  const pack = PACKS[locale];
  if (!summary) return pack.execSummary(title ?? '');
  const plain = typeof summary === 'string' ? summary : portableTextToPlainText(summary);
  if (!plain || looksLikeEnglish(plain)) return pack.execSummary(title ?? '');
  return summary;
}

export function localizeTocForGenericLocale<T extends { heading?: string; anchor?: string }>(
  locale: Exclude<BlogArticleLocale, 'en' | 'de' | 'ar'>,
  items: T[] | null | undefined,
): T[] | null {
  if (!items?.length) return null;
  const map = PACKS[locale].tocByAnchor;
  return items.map((item) => {
    const anchor = item.anchor?.replace(/^#/, '') ?? '';
    const heading = anchor ? map[anchor] : undefined;
    return heading ? { ...item, heading } : item;
  });
}

export function getLocaleContactPath(locale: BlogArticleLocale): string {
  if (locale === 'de') return '/de/contact';
  if (locale === 'ar') return '/ar/contact';
  if (locale in PACKS) return PACKS[locale as keyof typeof PACKS].contactPath;
  return '/contact';
}

export type RelatedResearchLink = { to: string; label: string };

export function getRelatedResearchLinksForLocale(
  locale: BlogArticleLocale,
  ctx: { isGccComparisonEn?: boolean; isQuantMrMaEn?: boolean },
): RelatedResearchLink[] {
  if (locale === 'de') {
    return [
      { to: '/de/healthcare-market-research/germany', label: 'Gesundheitsmarktforschung Deutschland' },
      { to: '/europe', label: 'Healthcare-Marktforschung Europa' },
      { to: '/uk', label: 'Pharmamarktforschung UK' },
      { to: '/germany-healthcare-market-report', label: 'Deutschland Healthcare-Marktbericht 2026' },
      { to: '/de/blog/pharmamarktforschung-deutschland-2026', label: 'Pharmamarktforschung Deutschland 2026' },
      { to: '/de/contact', label: 'BioNixus kontaktieren' },
    ];
  }
  if (locale === 'ar') {
    return [
      { to: '/ar/healthcare-market-research/saudi-arabia', label: 'أبحاث سوق الرعاية الصحية في السعودية' },
      { to: '/healthcare-market-research/uae', label: 'أبحاث السوق الصحي في الإمارات' },
      { to: '/ar/blog/gcc-pharmaceuticals-market-arabic-2026', label: 'سوق الأدوية في الخليج 2026' },
      { to: '/ar/arabic-blog-alsawdyh', label: 'دليل أبحاث السوق الدوائي في السعودية' },
      { to: '/gcc-pharmaceutical-market-research', label: 'أبحاث السوق الدوائي في GCC' },
      { to: '/gcc-pharma-market-report-2026', label: 'تقرير سوق الأدوية في دول الخليج 2026' },
      { to: '/ar/contact', label: 'تواصل مع BioNixus' },
    ];
  }
  if (locale === 'fr') {
    return [
      { to: '/fr/market-research-healthcare', label: 'Études de marché santé' },
      { to: '/healthcare-market-research/france', label: 'Recherche pharma France' },
      { to: '/europe', label: 'Hub Europe healthcare' },
      { to: '/france-healthcare-market-report', label: 'Rapport marché santé France 2026' },
      { to: '/fr/contact', label: 'Contacter BioNixus' },
    ];
  }
  if (locale === 'es') {
    return [
      { to: '/es/market-research-healthcare', label: 'Investigación de mercado sanitario' },
      { to: '/healthcare-market-research/spain', label: 'Investigación pharma España' },
      { to: '/europe', label: 'Hub Europa healthcare' },
      { to: '/spain-healthcare-market-report', label: 'Informe del mercado sanitario de España 2026' },
      { to: '/es/contact', label: 'Contactar BioNixus' },
    ];
  }
  if (locale === 'pt') {
    return [
      { to: '/pt/market-research-healthcare', label: 'Pesquisa de mercado de saúde' },
      { to: '/healthcare-market-research/brazil', label: 'Pesquisa pharma Brasil' },
      { to: '/europe', label: 'Hub Europa healthcare' },
      { to: '/brazil-healthcare-market-report', label: 'Relatório do mercado de saúde do Brasil 2026' },
      { to: '/pt/contact', label: 'Contactar BioNixus' },
    ];
  }
  if (locale === 'ru') {
    return [
      { to: '/ru/market-research-healthcare', label: 'Исследования рынка здравоохранения' },
      { to: '/europe', label: 'Healthcare hub Europe' },
      { to: '/uk', label: 'Pharma research UK' },
      { to: '/uk-healthcare-market-report', label: 'Отчёт о рынке здравоохранения Великобритании 2026' },
      { to: '/ru/contact', label: 'Связаться с BioNixus' },
    ];
  }
  if (locale === 'zh') {
    return [
      { to: '/zh/market-research-healthcare', label: '医疗健康市场研究' },
      { to: '/healthcare-market-research/china', label: '中国医药市场研究' },
      { to: '/blog/healthcare-overview-china-market-2026', label: '2026 中国医疗市场概览' },
      { to: '/china-healthcare-market-report', label: '2026 中国医疗健康市场报告' },
      { to: '/zh/contact', label: '联系 BioNixus' },
    ];
  }
  return [
    ...(ctx.isGccComparisonEn
      ? [
          { to: '/gcc-pharmaceutical-market-research', label: 'GCC pharmaceutical market research' },
          { to: '/healthcare-market-research/kuwait', label: 'Healthcare market research in Kuwait' },
        ]
      : []),
    ...(ctx.isQuantMrMaEn
      ? [{ to: '/quantitative-healthcare-market-research', label: 'Quantitative healthcare market research methodology' }]
      : []),
    { to: '/healthcare-market-research', label: 'EMEA healthcare market research hub' },
    { to: '/healthcare-market-research/saudi-arabia', label: 'Pharma market research in Saudi Arabia' },
    { to: '/healthcare-market-research/uae', label: 'Healthcare market research in the UAE' },
    { to: '/healthcare-market-research/therapy/oncology', label: 'Oncology market research in MENA' },
    { to: '/gcc-pharma-market-report-2026', label: 'GCC Pharmaceutical Market Report 2026' },
  ];
}
