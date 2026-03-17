import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/lib/i18n';
import { languagePaths } from '@/lib/seo';

type LocalizedCopy = {
  seoTitle: string;
  seoDescription: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBody: string;
  scopeTitle: string;
  scopeBody: string;
  capabilitiesTitle: string;
  capabilities: { title: string; description: string }[];
  coverageTitle: string;
  coverageBody: string;
  methodologyTitle: string;
  methodologyBody: string;
  useCasesTitle: string;
  useCases: { title: string; description: string }[];
  linksTitle: string;
  linksLead: string;
  faqTitle: string;
  faq: { question: string; answer: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

const copyByLanguage: Record<Language, LocalizedCopy> = {
  en: {
    seoTitle:
      'Healthcare Market Research | Pharmaceutical Healthcare Market Research Services in Europe and Middle East',
    seoDescription:
      'Healthcare market research for pharmaceutical teams across Europe and the Middle East. Quantitative and qualitative healthcare market research for launch, market access, and growth decisions.',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Healthcare Market Research',
    heroBadge: 'Healthcare Market Research',
    heroTitle: 'Healthcare market research for pharmaceutical decisions in Europe and the Middle East',
    heroSubtitle: 'Keyword-focused healthcare market research built for launch, market access, and growth.',
    heroBody:
      'BioNixus delivers healthcare market research programs that help pharmaceutical teams convert physician, payer, and hospital evidence into practical commercial actions.',
    scopeTitle: 'What this healthcare market research page solves',
    scopeBody:
      'This page is built for pharmaceutical teams that need healthcare market research with clear business relevance. It focuses on evidence quality, execution speed, and market-specific decision support rather than generic market summaries.',
    capabilitiesTitle: 'Core healthcare market research capabilities',
    capabilities: [
      {
        title: 'Quantitative healthcare market research',
        description:
          'Use structured surveys to size demand, segment opportunity, and prioritize accounts with measurable confidence.',
      },
      {
        title: 'Qualitative pharmaceutical research',
        description:
          'Understand why adoption barriers happen through physician, payer, and hospital interviews across priority markets.',
      },
      {
        title: 'Market access and value evidence',
        description:
          'Align evidence strategy with payer expectations to improve pharmaceutical pricing and reimbursement planning.',
      },
      {
        title: 'Stakeholder mapping and influence analysis',
        description:
          'Map decision influence from KOLs to procurement and committee pathways to improve engagement strategy quality.',
      },
    ],
    coverageTitle: 'Europe and Middle East coverage',
    coverageBody:
      'Healthcare market research across the UK, Germany, France, Italy, Spain, Saudi Arabia, UAE, Egypt, Kuwait, and Qatar with country-level execution depth and regional comparability.',
    methodologyTitle: 'Methodology and compliance',
    methodologyBody:
      'Programs are designed with GDPR, EMA, MOH, and SFDA-aware governance. This supports healthcare market research quality, respondent integrity, and audit-ready delivery for pharmaceutical stakeholders.',
    useCasesTitle: 'Healthcare market research use-case outcomes',
    useCases: [
      {
        title: 'Launch readiness',
        description:
          'Prioritize segments, pressure-test assumptions, and improve early market activation decisions.',
      },
      {
        title: 'Market access strategy',
        description:
          'Identify payer evidence gaps and sharpen value narratives for pharmaceutical market access pathways.',
      },
      {
        title: 'Growth optimization',
        description:
          'Track adoption friction and refine physician and account-level strategy for sustained growth.',
      },
    ],
    linksTitle: 'Priority healthcare market research pathways',
    linksLead:
      'Use these internal pathways to deepen strategy planning and connect healthcare market research with pharmaceutical execution.',
    faqTitle: 'Healthcare market research FAQs',
    faq: [
      {
        question: 'How is healthcare market research different from general market research?',
        answer:
          'Healthcare market research must reflect clinical workflow, payer logic, and institutional decision structures. Pharmaceutical decisions require this additional depth.',
      },
      {
        question: 'Can one healthcare market research framework work across all markets?',
        answer:
          'A shared backbone can be used, but country-level modules are required for Europe and Middle East markets because access pathways and stakeholder influence differ.',
      },
      {
        question: 'How quickly can healthcare market research start?',
        answer:
          'Most projects can begin after objective alignment and scope confirmation, then move into fieldwork with clear quality controls.',
      },
    ],
    ctaTitle: 'Need a tailored healthcare market research roadmap?',
    ctaBody:
      'Talk with BioNixus about pharmaceutical priorities and receive a practical scope for launch, market access, or growth decisions.',
    ctaPrimary: 'Request a proposal',
    ctaSecondary: 'Explore market research hub',
  },
  de: {
    seoTitle:
      'Healthcare Market Research | Pharma Healthcare Market Research in Europa und Nahost',
    seoDescription:
      'Healthcare market research fuer Pharma-Teams in Europa und Nahost. Quantitative und qualitative Healthcare Market Research fuer Launch, Market Access und Wachstum.',
    breadcrumbHome: 'Startseite',
    breadcrumbCurrent: 'Healthcare Market Research',
    heroBadge: 'Healthcare Market Research',
    heroTitle: 'Healthcare market research fuer pharmazeutische Entscheidungen in Europa und Nahost',
    heroSubtitle: 'Healthcare market research fuer Launch, Market Access und Wachstum.',
    heroBody:
      'BioNixus liefert healthcare market research Programme, mit denen Pharma-Teams Arzt-, Payer- und Krankenhaus-Insights in umsetzbare Entscheidungen ueberfuehren.',
    scopeTitle: 'Was diese Seite loest',
    scopeBody:
      'Diese Seite ist fuer Pharma-Teams, die healthcare market research mit direkter Geschaeftsrelevanz benoetigen. Fokus: Evidenzqualitaet, Ausfuehrungsgeschwindigkeit und marktspezifische Entscheidungen.',
    capabilitiesTitle: 'Kernleistungen',
    capabilities: [
      {
        title: 'Quantitative healthcare market research',
        description: 'Nachfrage messen, Segmente priorisieren und Account-Entscheidungen datenbasiert steuern.',
      },
      {
        title: 'Qualitative pharmaceutical research',
        description: 'Adoptionsbarrieren verstehen durch Interviews mit Aerzten, Payern und Krankenhaeusern.',
      },
      {
        title: 'Market access und Value Evidence',
        description: 'Evidenzstrategie mit Payer-Anforderungen fuer bessere Erstattungsplanung ausrichten.',
      },
      {
        title: 'Stakeholder- und Einflussanalyse',
        description: 'Entscheidungseinfluss entlang KOL-, Komitee- und Beschaffungspfaden sichtbar machen.',
      },
    ],
    coverageTitle: 'Europa- und Nahost-Abdeckung',
    coverageBody:
      'Healthcare market research in UK, Deutschland, Frankreich, Italien, Spanien, Saudi-Arabien, VAE, Aegypten, Kuwait und Katar.',
    methodologyTitle: 'Methodik und Compliance',
    methodologyBody:
      'Programme werden mit GDPR-, EMA-, MOH- und SFDA-orientierter Governance umgesetzt. Das sichert Datenqualitaet und audit-faehige Ergebnisse.',
    useCasesTitle: 'Anwendungsfaelle',
    useCases: [
      { title: 'Launch Readiness', description: 'Segmente priorisieren und fruehe Markteinfuehrung verbessern.' },
      { title: 'Market Access', description: 'Payer-Evidenzluecken identifizieren und Value Narrative schaerfen.' },
      { title: 'Wachstumsoptimierung', description: 'Adoptionshemmnisse erkennen und Strategie nachsteuern.' },
    ],
    linksTitle: 'Wichtige interne Wege',
    linksLead: 'Vertiefen Sie Ihre Planung ueber diese healthcare market research und pharma-nahen Seiten.',
    faqTitle: 'FAQs',
    faq: [
      {
        question: 'Warum unterscheidet sich healthcare market research von allgemeiner Marktforschung?',
        answer: 'Im Gesundheitsbereich bestimmen klinische Prozesse, Payer-Logik und institutionelle Entscheidungen den Erfolg.',
      },
      {
        question: 'Kann ein Framework fuer alle Maerkte genutzt werden?',
        answer: 'Ein Kern-Framework ja, aber Laender-Module sind fuer Europa und Nahost unverzichtbar.',
      },
      {
        question: 'Wie schnell kann ein Projekt starten?',
        answer: 'Nach Zielabstimmung und Scope-Freigabe kann die Feldphase zeitnah beginnen.',
      },
    ],
    ctaTitle: 'Benoetigen Sie eine healthcare market research Roadmap?',
    ctaBody: 'Sprechen Sie mit BioNixus ueber Ihre pharmazeutischen Prioritaeten.',
    ctaPrimary: 'Angebot anfragen',
    ctaSecondary: 'Market research hub',
  },
  fr: {
    seoTitle:
      'Healthcare Market Research | Recherche healthcare et pharmaceutique Europe et Moyen-Orient',
    seoDescription:
      'Healthcare market research pour equipes pharmaceutiques en Europe et au Moyen-Orient. Recherche quantitative et qualitative pour lancement, access et croissance.',
    breadcrumbHome: 'Accueil',
    breadcrumbCurrent: 'Healthcare Market Research',
    heroBadge: 'Healthcare Market Research',
    heroTitle: 'Healthcare market research pour decisions pharmaceutiques en Europe et Moyen-Orient',
    heroSubtitle: 'Healthcare market research orientee lancement, market access et croissance.',
    heroBody:
      'BioNixus fournit des programmes de healthcare market research qui transforment les insights medecins, payeurs et hopitaux en actions concretes.',
    scopeTitle: 'Ce que cette page resout',
    scopeBody:
      'Cette page cible les equipes pharmaceutiques qui ont besoin de healthcare market research avec impact business clair.',
    capabilitiesTitle: 'Capacites principales',
    capabilities: [
      { title: 'Quantitative healthcare market research', description: 'Mesurer la demande et prioriser les segments avec des donnees robustes.' },
      { title: 'Qualitative pharmaceutical research', description: 'Comprendre les freins d adoption via interviews medecins, payeurs et hopitaux.' },
      { title: 'Market access et value evidence', description: 'Aligner la strategie de preuve avec les attentes payeurs.' },
      { title: 'Mapping stakeholders', description: 'Identifier les influenceurs reels pour une execution pharmaceutique plus efficace.' },
    ],
    coverageTitle: 'Couverture Europe et Moyen-Orient',
    coverageBody:
      'Healthcare market research au Royaume-Uni, Allemagne, France, Italie, Espagne, Arabie Saoudite, EAU, Egypte, Koweit et Qatar.',
    methodologyTitle: 'Methodologie et conformite',
    methodologyBody:
      'Execution avec gouvernance alignee GDPR, EMA, MOH et SFDA pour qualite de donnees et livrables auditables.',
    useCasesTitle: 'Resultats par cas d usage',
    useCases: [
      { title: 'Launch readiness', description: 'Prioriser les segments et ameliorer l activation initiale.' },
      { title: 'Market access', description: 'Identifier les ecarts de preuve et renforcer la narration de valeur.' },
      { title: 'Optimisation croissance', description: 'Suivre les frictions d adoption et ajuster la strategie.' },
    ],
    linksTitle: 'Parcours internes prioritaires',
    linksLead: 'Approfondissez votre strategie via ces pages healthcare market research et pharmaceutiques.',
    faqTitle: 'FAQ healthcare market research',
    faq: [
      { question: 'Quelle difference avec une etude generale?', answer: 'La healthcare market research integre logiques cliniques, payeurs et institutions.' },
      { question: 'Un seul cadre suffit-il pour tous les pays?', answer: 'Un socle commun oui, mais des modules pays sont necessaires.' },
      { question: 'Delai de demarrage?', answer: 'Demarrage rapide apres alignement des objectifs et du scope.' },
    ],
    ctaTitle: 'Besoin d une roadmap healthcare market research?',
    ctaBody: 'Parlez avec BioNixus de vos priorites pharmaceutiques.',
    ctaPrimary: 'Demander une proposition',
    ctaSecondary: 'Voir le hub market research',
  },
  es: {
    seoTitle:
      'Healthcare Market Research | Investigacion healthcare y farmaceutica en Europa y Oriente Medio',
    seoDescription:
      'Healthcare market research para equipos farmaceuticos en Europa y Oriente Medio. Estudios cuantitativos y cualitativos para lanzamiento, acceso y crecimiento.',
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Healthcare Market Research',
    heroBadge: 'Healthcare Market Research',
    heroTitle: 'Healthcare market research para decisiones farmaceuticas en Europa y Oriente Medio',
    heroSubtitle: 'Healthcare market research para lanzamiento, market access y crecimiento.',
    heroBody:
      'BioNixus ofrece programas de healthcare market research que convierten insights de medicos, pagadores y hospitales en decisiones accionables.',
    scopeTitle: 'Que resuelve esta pagina',
    scopeBody:
      'Pensada para equipos farmaceuticos que necesitan healthcare market research con impacto comercial real.',
    capabilitiesTitle: 'Capacidades clave',
    capabilities: [
      { title: 'Quantitative healthcare market research', description: 'Medir demanda, segmentar oportunidad y priorizar cuentas con confianza.' },
      { title: 'Qualitative pharmaceutical research', description: 'Entender barreras de adopcion mediante entrevistas con medicos, pagadores y hospitales.' },
      { title: 'Market access y value evidence', description: 'Alinear evidencia con expectativas de pagadores y mejorar estrategia de acceso.' },
      { title: 'Mapeo de stakeholders', description: 'Identificar influenciadores reales para mejorar ejecucion farmaceutica.' },
    ],
    coverageTitle: 'Cobertura Europa y Oriente Medio',
    coverageBody:
      'Healthcare market research en Reino Unido, Alemania, Francia, Italia, Espana, Arabia Saudita, EAU, Egipto, Kuwait y Qatar.',
    methodologyTitle: 'Metodologia y cumplimiento',
    methodologyBody:
      'Gobernanza alineada con GDPR, EMA, MOH y SFDA para calidad de datos y entregables auditables.',
    useCasesTitle: 'Resultados por caso de uso',
    useCases: [
      { title: 'Launch readiness', description: 'Priorizar segmentos y mejorar activacion inicial de mercado.' },
      { title: 'Market access', description: 'Detectar brechas de evidencia y fortalecer narrativa de valor.' },
      { title: 'Optimizacion de crecimiento', description: 'Medir fricciones de adopcion y ajustar estrategia.' },
    ],
    linksTitle: 'Rutas internas prioritarias',
    linksLead: 'Profundiza tu estrategia con estas paginas de healthcare market research y foco farmaceutico.',
    faqTitle: 'FAQs',
    faq: [
      { question: 'En que difiere de investigacion general?', answer: 'Integra dinamicas clinicas, pagadores e instituciones de salud.' },
      { question: 'Sirve un solo marco para todos los paises?', answer: 'Hay base comun, pero se requieren modulos por pais.' },
      { question: 'Cuando puede iniciar un proyecto?', answer: 'Tras alinear objetivos y alcance, el inicio es rapido.' },
    ],
    ctaTitle: 'Necesitas una roadmap de healthcare market research?',
    ctaBody: 'Habla con BioNixus sobre tus prioridades farmaceuticas.',
    ctaPrimary: 'Solicitar propuesta',
    ctaSecondary: 'Explorar market research hub',
  },
  zh: {
    seoTitle: 'Healthcare Market Research | 欧洲与中东医药Healthcare市场研究',
    seoDescription:
      '面向欧洲与中东制药团队的healthcare market research。提供定量与定性研究，支持上市、市场准入与增长决策。',
    breadcrumbHome: '首页',
    breadcrumbCurrent: 'Healthcare Market Research',
    heroBadge: 'Healthcare Market Research',
    heroTitle: '服务欧洲与中东制药决策的healthcare market research',
    heroSubtitle: '聚焦上市、market access与增长的healthcare market research。',
    heroBody: 'BioNixus将医生、支付方和医院洞察转化为可执行的制药业务决策。',
    scopeTitle: '本页解决的问题',
    scopeBody: '面向需要高业务相关性的制药团队，提供可落地的healthcare market research框架。',
    capabilitiesTitle: '核心能力',
    capabilities: [
      { title: 'Quantitative healthcare market research', description: '通过结构化调研测量需求、细分机会并优化账户优先级。' },
      { title: 'Qualitative pharmaceutical research', description: '通过深访识别采用障碍与决策动因。' },
      { title: 'Market access与价值证据', description: '对齐支付方证据要求，优化准入策略。' },
      { title: '利益相关方映射', description: '识别真实影响者并提升市场执行质量。' },
    ],
    coverageTitle: '欧洲与中东覆盖',
    coverageBody: '覆盖英国、德国、法国、意大利、西班牙、沙特、阿联酋、埃及、科威特与卡塔尔。',
    methodologyTitle: '方法与合规',
    methodologyBody: '采用GDPR、EMA、MOH、SFDA导向治理，保障数据质量与可审计交付。',
    useCasesTitle: '典型应用结果',
    useCases: [
      { title: '上市准备', description: '优化细分与优先级，提升首轮市场激活质量。' },
      { title: '市场准入', description: '识别证据缺口并强化价值叙事。' },
      { title: '增长优化', description: '持续追踪采用摩擦并迭代执行策略。' },
    ],
    linksTitle: '关键内部路径',
    linksLead: '通过以下页面连接healthcare market research与制药执行。',
    faqTitle: '常见问题',
    faq: [
      { question: '与普通市场研究有何不同？', answer: 'healthcare market research必须覆盖临床流程、支付逻辑与机构决策。' },
      { question: '所有国家可用同一模型吗？', answer: '可以共享骨架，但各国需要本地化模块。' },
      { question: '项目多久可以启动？', answer: '目标与范围确认后，可快速进入执行阶段。' },
    ],
    ctaTitle: '需要定制化healthcare market research路线图？',
    ctaBody: '与BioNixus沟通您的制药优先事项。',
    ctaPrimary: '提交方案请求',
    ctaSecondary: '查看market research hub',
  },
  ar: {
    seoTitle: 'Healthcare Market Research | ابحاث healthcare ودوائية لاوروبا والشرق الاوسط',
    seoDescription:
      'Healthcare market research لفرق الادوية في اوروبا والشرق الاوسط. دراسات كمية ونوعية لدعم الاطلاق والدخول للسوق والنمو.',
    breadcrumbHome: 'الرئيسية',
    breadcrumbCurrent: 'Healthcare Market Research',
    heroBadge: 'Healthcare Market Research',
    heroTitle: 'Healthcare market research لقرارات دوائية في اوروبا والشرق الاوسط',
    heroSubtitle: 'Healthcare market research موجهة للاطلاق وmarket access والنمو.',
    heroBody: 'تقدم BioNixus برامج تحول رؤى الاطباء والجهات الدافعة والمستشفيات الى قرارات تنفيذية.',
    scopeTitle: 'ماذا تقدم هذه الصفحة',
    scopeBody: 'هذه الصفحة مخصصة لفرق الادوية التي تحتاج healthcare market research مرتبطة مباشرة بالقرار التجاري.',
    capabilitiesTitle: 'القدرات الاساسية',
    capabilities: [
      { title: 'Quantitative healthcare market research', description: 'قياس الطلب وتقسيم الفرص وتحديد الاولويات عبر دراسات كمية دقيقة.' },
      { title: 'Qualitative pharmaceutical research', description: 'فهم اسباب سلوك السوق عبر مقابلات الاطباء والجهات الدافعة والمستشفيات.' },
      { title: 'Market access and value evidence', description: 'مواءمة الادلة مع متطلبات الجهات الدافعة لتحسين استراتيجية الوصول.' },
      { title: 'Stakeholder mapping', description: 'تحديد اصحاب التأثير الحقيقيين لتحسين تنفيذ الخطط الدوائية.' },
    ],
    coverageTitle: 'التغطية في اوروبا والشرق الاوسط',
    coverageBody: 'ابحاث healthcare في المملكة المتحدة، المانيا، فرنسا، ايطاليا، اسبانيا، السعودية، الامارات، مصر، الكويت، وقطر.',
    methodologyTitle: 'المنهجية والامتثال',
    methodologyBody: 'تنفيذ بحوكمة متوافقة مع GDPR وEMA وMOH وSFDA لضمان جودة البيانات وقابلية التدقيق.',
    useCasesTitle: 'نتائج حالات الاستخدام',
    useCases: [
      { title: 'جاهزية الاطلاق', description: 'تحديد الشرائح ذات الاولوية وتحسين تفعيل السوق من البداية.' },
      { title: 'استراتيجية الدخول للسوق', description: 'تحديد فجوات الادلة وتقوية رواية القيمة.' },
      { title: 'تحسين النمو', description: 'متابعة عوائق التبني وتحديث الاستراتيجية باستمرار.' },
    ],
    linksTitle: 'مسارات داخلية مهمة',
    linksLead: 'استخدم هذه الروابط لربط healthcare market research بالتنفيذ الدوائي العملي.',
    faqTitle: 'الاسئلة الشائعة',
    faq: [
      { question: 'ما الفرق عن ابحاث السوق العامة؟', answer: 'تتضمن healthcare market research مسارات سريرية ومنطق جهات الدفع والقرارات المؤسسية.' },
      { question: 'هل يصلح نفس الاطار لكل الاسواق؟', answer: 'يمكن استخدام اطار مشترك، مع وحدات محلية لكل دولة.' },
      { question: 'متى يمكن بدء المشروع؟', answer: 'بعد مواءمة الاهداف والنطاق يمكن البدء بسرعة.' },
    ],
    ctaTitle: 'تحتاج خارطة طريق healthcare market research؟',
    ctaBody: 'تواصل مع BioNixus لمناقشة اولوياتك الدوائية.',
    ctaPrimary: 'اطلب عرضا',
    ctaSecondary: 'استكشف market research hub',
  },
};

export default function MarketResearchHealthcare() {
  const { language } = useLanguage();
  const { pathname } = useLocation();
  const copy = copyByLanguage[language] ?? copyByLanguage.en;
  const basePath = languagePaths[language] || '/';
  const contactPath =
    language === 'fr' ? '/fr/contacts' : language === 'ar' ? '/ar/contacts' : `${basePath === '/' ? '' : basePath}/contact`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: copy.heroTitle,
      serviceType: 'Healthcare and pharmaceutical market research',
      provider: { '@type': 'Organization', name: 'BioNixus', url: 'https://www.bionixus.com' },
      areaServed: [
        'United Kingdom',
        'Germany',
        'France',
        'Italy',
        'Spain',
        'Saudi Arabia',
        'United Arab Emirates',
        'Egypt',
        'Kuwait',
        'Qatar',
      ],
      url: `https://www.bionixus.com${pathname}`,
    },
    buildBreadcrumbSchema([
      { name: copy.breadcrumbHome, href: basePath === '/' ? '/' : basePath },
      { name: copy.breadcrumbCurrent, href: pathname },
    ]),
    buildFAQSchema(copy.faq),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={copy.seoTitle}
        description={copy.seoDescription}
        canonical="/market-research-healthcare"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: copy.breadcrumbHome, href: basePath === '/' ? '/' : basePath },
            { name: copy.breadcrumbCurrent, href: pathname },
          ]}
        />

        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-sm mb-4">{copy.heroBadge}</p>
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">{copy.heroTitle}</h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed mb-4">{copy.heroSubtitle}</p>
            <p className="text-base text-primary-foreground/85 leading-relaxed">{copy.heroBody}</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto space-y-5 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">{copy.scopeTitle}</h2>
            <p>{copy.scopeBody}</p>
          </div>
        </section>

        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">{copy.capabilitiesTitle}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {copy.capabilities.map((item) => (
                <article key={item.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">{copy.coverageTitle}</h2>
            <p>{copy.coverageBody}</p>
          </div>
        </section>

        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">{copy.methodologyTitle}</h2>
            <p>{copy.methodologyBody}</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">{copy.useCasesTitle}</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {copy.useCases.map((item) => (
                <article key={item.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-4">{copy.linksTitle}</h2>
            <p className="text-muted-foreground mb-6">{copy.linksLead}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/healthcare-market-research" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">Healthcare market research hub</h3>
                <p className="text-sm text-muted-foreground">Explore country pages and therapy tracks for healthcare market research.</p>
              </Link>
              <Link to="/market-research" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">Market research services</h3>
                <p className="text-sm text-muted-foreground">Compare quantitative, qualitative, and pharmaceutical market research pathways.</p>
              </Link>
              <Link to="/market-research-saudi-arabia-pharmaceutical" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">Saudi pharmaceutical market research</h3>
                <p className="text-sm text-muted-foreground">Review country-level pharmaceutical strategy and access priorities for KSA.</p>
              </Link>
              <Link to="/global-websites" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">Global websites directory</h3>
                <p className="text-sm text-muted-foreground">Navigate market pages across Europe and Middle East coverage zones.</p>
              </Link>
              <Link to="/gcc-market-access-guide" className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">GCC market access guide</h3>
                <p className="text-sm text-muted-foreground">Connect healthcare market research evidence to GCC access strategy planning.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">{copy.faqTitle}</h2>
            <div className="space-y-3">
              {copy.faq.map((item) => (
                <details key={item.question} className="rounded-xl border border-border bg-card p-4">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold mb-3">{copy.ctaTitle}</h2>
            <p className="text-primary-foreground/90 mb-6">{copy.ctaBody}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to={contactPath}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-primary font-semibold hover:bg-white/90 transition-colors"
              >
                {copy.ctaPrimary}
              </Link>
              <Link
                to="/market-research"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-primary-foreground font-semibold hover:bg-white/10 transition-colors"
              >
                {copy.ctaSecondary}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
