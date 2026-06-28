/** Locale overlays for home-page UI strings not yet in the main i18n bundles. */
import type { Language } from './i18n';

export type HomePageUiOverlay = {
  heroTrust?: { trustStripPrimary: string; trustStripStats: string };
  services?: {
    bottomCtaPrompt: string;
    bottomCtaButton: string;
    countryDepthBadge: string;
    kolCardTitle?: string;
  };
  footer?: {
    clientReviewsLink?: string;
    newsPress?: string;
    newsletterConsent?: string;
    industriesHub?: string;
  };
  clientReviewsTeaser?: { happyClientsCount: string };
};

export const homePageUiStrings: Record<Language, HomePageUiOverlay> = {
  en: {
    services: {
      bottomCtaPrompt:
        'Need a tailored healthcare market research scope for your pharmaceutical priorities?',
      bottomCtaButton: 'Request a proposal',
      countryDepthBadge: 'Country-Level Depth',
      kolCardTitle: 'KOL and Stakeholder Mapping',
    },
    footer: {
      clientReviewsLink: 'Client reviews',
      newsPress: 'News & press',
      newsletterConsent:
        'I would like to receive monthly EMEA pharma research insights from BioNixus. I can unsubscribe anytime.',
    },
    clientReviewsTeaser: { happyClientsCount: '40' },
  },
  de: {
    heroTrust: {
      trustStripPrimary: 'Vertrauenswürdig bei',
      trustStripStats: '48 globale Kunden · 127+ Projekte · 38 Länder',
    },
    services: {
      bottomCtaPrompt:
        'Benötigen Sie einen maßgeschneiderten Gesundheitsmarktforschungs-Umfang für Ihre pharmazeutischen Prioritäten?',
      bottomCtaButton: 'Angebot anfordern',
      countryDepthBadge: 'Länder-Tiefe',
      kolCardTitle: 'KOL- & Stakeholder-Mapping',
    },
    footer: {
      clientReviewsLink: 'Kundenbewertungen',
      newsPress: 'News & Presse',
      newsletterConsent:
        'Ich möchte monatliche EMEA-Pharma-Forschungserkenntnisse von BioNixus erhalten. Ich kann mich jederzeit abmelden.',
      industriesHub: 'Branchen',
    },
    clientReviewsTeaser: { happyClientsCount: '40' },
  },
  fr: {
    heroTrust: {
      trustStripPrimary: 'Recommandé par',
      trustStripStats: '48 clients mondiaux · 127+ projets · 38 pays',
    },
    services: {
      bottomCtaPrompt:
        'Besoin d’un périmètre d’études de marché santé sur mesure pour vos priorités pharmaceutiques ?',
      bottomCtaButton: 'Demander une proposition',
      countryDepthBadge: 'Profondeur pays',
      kolCardTitle: 'Mapping KOL & parties prenantes',
    },
    footer: {
      clientReviewsLink: 'Avis clients',
      newsPress: 'Actualités & presse',
      newsletterConsent:
        'Je souhaite recevoir les insights mensuels EMEA pharma de BioNixus. Je peux me désabonner à tout moment.',
      industriesHub: 'Secteurs',
    },
    clientReviewsTeaser: { happyClientsCount: '40' },
  },
  es: {
    heroTrust: {
      trustStripPrimary: 'Recomendado por',
      trustStripStats: '48 clientes globales · 127+ proyectos · 38 países',
    },
    services: {
      bottomCtaPrompt:
        '¿Necesita un alcance de investigación de mercado sanitario a medida para sus prioridades farmacéuticas?',
      bottomCtaButton: 'Solicitar propuesta',
      countryDepthBadge: 'Profundidad por país',
      kolCardTitle: 'Mapeo de KOL y stakeholders',
    },
    footer: {
      clientReviewsLink: 'Opiniones de clientes',
      newsPress: 'Noticias y prensa',
      newsletterConsent:
        'Deseo recibir insights mensuales de investigación farmacéutica EMEA de BioNixus. Puedo darme de baja en cualquier momento.',
      industriesHub: 'Industrias',
    },
    clientReviewsTeaser: { happyClientsCount: '40' },
  },
  pt: {
    heroTrust: {
      trustStripPrimary: 'Recomendado por',
      trustStripStats: '48 clientes globais · 127+ projetos · 38 países',
    },
    services: {
      bottomCtaPrompt:
        'Precisa de um escopo de pesquisa de mercado em saúde sob medida para suas prioridades farmacêuticas?',
      bottomCtaButton: 'Solicitar proposta',
      countryDepthBadge: 'Profundidade por país',
      kolCardTitle: 'Mapeamento de KOLs e stakeholders',
    },
    footer: {
      clientReviewsLink: 'Avaliações de clientes',
      newsPress: 'Notícias e imprensa',
      newsletterConsent:
        'Gostaria de receber insights mensais de pesquisa farmacêutica EMEA da BioNixus. Posso cancelar a inscrição a qualquer momento.',
      industriesHub: 'Setores',
    },
    clientReviewsTeaser: { happyClientsCount: '40' },
  },
  ru: {
    heroTrust: {
      trustStripPrimary: 'Нам доверяют',
      trustStripStats: '48 клиентов · 127+ проектов · 38 стран',
    },
    services: {
      bottomCtaPrompt:
        'Нужен индивидуальный объём исследований рынка здравоохранения под ваши фармацевтические приоритеты?',
      bottomCtaButton: 'Запросить предложение',
      countryDepthBadge: 'Глубина на уровне страны',
      kolCardTitle: 'Картирование KOL и стейкхолдеров',
    },
    footer: {
      clientReviewsLink: 'Отзывы клиентов',
      newsPress: 'Новости и пресса',
      newsletterConsent:
        'Я хочу получать ежемесячные инсайты EMEA pharma от BioNixus. Я могу отписаться в любое время.',
      industriesHub: 'Отрасли',
    },
    clientReviewsTeaser: { happyClientsCount: '40' },
  },
  zh: {
    heroTrust: {
      trustStripPrimary: '深受信赖',
      trustStripStats: '四十八家全球客户 · 一百二十七+项目 · 三十八个国家',
    },
    services: {
      bottomCtaPrompt: '需要为您的制药重点定制医疗健康市场研究范围吗？',
      bottomCtaButton: '索取方案',
      countryDepthBadge: '国家级深度',
      kolCardTitle: 'KOL与利益相关方映射',
    },
    footer: {
      clientReviewsLink: '客户评价',
      newsPress: '新闻与媒体',
      newsletterConsent: '我希望接收 BioNixus 的 EMEA 医药研究月度洞察。我可随时取消订阅。',
      industriesHub: '行业',
    },
    clientReviewsTeaser: { happyClientsCount: '四十' },
  },
  ar: {
    heroTrust: {
      trustStripPrimary: 'موثوق به من',
      trustStripStats: '٤٨ عميلاً عالمياً · ١٢٧+ مشروعاً · ٣٨ دولة',
    },
    services: {
      bottomCtaPrompt: 'هل تحتاج نطاقاً مخصصاً لأبحاث السوق الصحي وفق أولوياتك الدوائية؟',
      bottomCtaButton: 'طلب عرض',
      countryDepthBadge: 'عمق على مستوى الدولة',
      kolCardTitle: 'KOL — الخبراء والاستشاريين',
    },
    footer: {
      clientReviewsLink: 'آراء العملاء',
      newsPress: 'الأخبار والصحافة',
      newsletterConsent:
        'أرغب في تلقي رؤى أبحاث EMEA الدوائية الشهرية من بيونكسس. يمكنني إلغاء الاشتراك في أي وقت.',
      industriesHub: 'القطاعات',
    },
    clientReviewsTeaser: { happyClientsCount: '٤٠' },
  },
};
