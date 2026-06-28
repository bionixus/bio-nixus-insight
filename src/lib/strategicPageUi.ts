/** Localized chrome strings for StrategicServicePage (Arabic / Chinese landing pages). */

export type StrategicPageLocale = 'en' | 'ar' | 'zh';

export function resolveStrategicPageLocale(canonicalUrl: string): StrategicPageLocale {
  const path = canonicalUrl.replace('https://www.bionixus.com', '');
  if (path.startsWith('/ar/')) return 'ar';
  if (path.startsWith('/zh/')) return 'zh';
  return 'en';
}

export interface StrategicPageUi {
  home: string;
  badges: [string, string, string];
  hubIntroPrefix: string;
  hubLink: string;
  hubIntroSuffix: string;
  hubPath: string;
  decisionEyebrow: string;
  decisionHeading: (label: string) => string;
  deliveryHeading: string;
  proofHeading: string;
  exploreHeading: string;
  faqTitle: (label: string) => string;
  primaryCta: string;
  consultationHeadline: (label: string) => string;
  consultationBody: string;
  midPageHeadline: (service: string) => string;
  midPageBody: string;
  routingHint: (service: string) => string;
  processSteps: string[];
}

const UI: Record<StrategicPageLocale, StrategicPageUi> = {
  en: {
    home: 'Home',
    badges: ['BioNixus service', 'Senior-led analysis', 'Bilingual fieldwork'],
    hubIntroPrefix: 'For regional context and related services, start from our',
    hubLink: 'healthcare market research hub',
    hubIntroSuffix: 'before scoping this engagement.',
    hubPath: '/healthcare-market-research',
    decisionEyebrow: 'Executive decision framework',
    decisionHeading: (label) => `How we approach ${label.toLowerCase()}`,
    deliveryHeading: 'Delivery priorities',
    proofHeading: 'Proof & execution snapshot',
    exploreHeading: 'Explore next',
    faqTitle: (label) => `${label} — frequently asked questions`,
    primaryCta: 'Book a discovery call',
    consultationHeadline: (label) => `Plan your ${label.toLowerCase()} with BioNixus`,
    consultationBody:
      'BioNixus pairs senior-led design with bilingual fieldwork and audit-ready governance — scoped to the decision in front of you, not a generic template.',
    midPageHeadline: (service) => `Scope a ${service} engagement`,
    midPageBody: 'Book a 30-minute briefing to align on objectives, stakeholders, and timeline before we build the proposal.',
    routingHint: (service) =>
      `Tell us your target market and the decision you are making, and we route you to the right ${service} lead.`,
    processSteps: [
      'Discovery and feasibility sprint',
      'Protocol and sample governance',
      'Bilingual field execution',
      'Decision-ready insight handover',
    ],
  },
  ar: {
    home: 'الرئيسية',
    badges: ['خدمة BioNixus', 'تحليل بقيادة خبراء', 'ميدان ثنائي اللغة'],
    hubIntroPrefix: 'للسياق الإقليمي والخدمات ذات الصلة، ابدأ من',
    hubLink: 'محور أبحاث سوق الرعاية الصحية',
    hubIntroSuffix: 'قبل تحديد نطاق هذا البرنامج.',
    hubPath: '/ar/healthcare-market-research',
    decisionEyebrow: 'إطار القرار التنفيذي',
    decisionHeading: (label) => `كيف نتعامل مع ${label}`,
    deliveryHeading: 'أولويات التسليم',
    proofHeading: 'لمحة عن الإنجاز والتنفيذ',
    exploreHeading: 'استكشف المزيد',
    faqTitle: (label) => `${label} — الأسئلة الشائعة`,
    primaryCta: 'احجز مكالمة استكشافية',
    consultationHeadline: (label) => `خطّط ${label} مع BioNixus`,
    consultationBody:
      'BioNixus تجمع تصميماً بقيادة خبراء مع ميدان عربي–إنجليزي وحوكمة جاهزة للتدقيق — مصممة لقرارك الحالي، وليس قالباً عاماً.',
    midPageHeadline: (service) => `حدّد نطاق برنامج ${service}`,
    midPageBody: 'احجز إحاطة 30 دقيقة لمواءمة الأهداف وأصحاب المصلحة والجدول الزمني قبل إعداد العرض.',
    routingHint: (service) =>
      `أخبرنا بالسوق المستهدف والقرار الذي تتخذه، وسنوجّهك لمسؤول ${service} المناسب.`,
    processSteps: [
      'اكتشاف وجدوى سريعة',
      'حوكمة البروتوكول والعينة',
      'تنفيذ ميداني ثنائي اللغة',
      'تسليم رؤى جاهزة للقرار',
    ],
  },
  zh: {
    home: '首页',
    badges: ['BioNixus 服务', '资深主导分析', '双语实地研究'],
    hubIntroPrefix: '了解区域背景与相关服务，请从我们的',
    hubLink: '医疗健康市场研究中心',
    hubIntroSuffix: '开始，再确定本项目范围。',
    hubPath: '/zh/market-research-healthcare',
    decisionEyebrow: '高管决策框架',
    decisionHeading: (label) => `我们的${label}方法`,
    deliveryHeading: '交付重点',
    proofHeading: '执行与成果概览',
    exploreHeading: '延伸阅读',
    faqTitle: (label) => `${label} — 常见问题`,
    primaryCta: '预约发现通话',
    consultationHeadline: (label) => `与 BioNixus 规划${label}`,
    consultationBody:
      'BioNixus 以资深设计、中英双语实地研究与可审计治理 — 针对您当前决策，而非通用模板。',
    midPageHeadline: (service) => `确定${service}项目范围`,
    midPageBody: '预约 30 分钟简报，对齐目标、利益相关者与时间表后再提交方案。',
    routingHint: (service) => `告知目标市场与待决事项，我们将对接合适的${service}负责人。`,
    processSteps: ['发现与可行性', '方案与样本治理', '双语实地执行', '决策就绪交付'],
  },
};

export function getStrategicPageUi(locale: StrategicPageLocale): StrategicPageUi {
  return UI[locale];
}
