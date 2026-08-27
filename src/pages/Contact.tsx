import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/lib/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { SEOHead } from '@/components/seo/SEOHead';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { getContactFormStrings } from '@/lib/contactFormStrings';
import { getLocalizedPathForLanguage, languagePaths, localizedContactPath } from '@/lib/seo';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowDown, ArrowRight } from 'lucide-react';

type ContactPageCopy = {
  heroTitle?: string;
  heroSubtitle?: string;
  brandLine?: string;
  primaryCta?: string;
  secondaryCta?: string;
};

const engagementByLanguage: Record<
  Language,
  { heading: string; lead: string; paragraphs: string[] }
> = {
  en: {
    heading: 'What a BioNixus engagement looks like',
    lead: 'Every inquiry starts a scoped research partnership with a team that executes across EMEA, the Americas, and APAC—not a generic sales queue.',
    paragraphs: [
      'Share the decision you need to make, the markets that matter, and the evidence standard your stakeholders expect. A research director with relevant geography and sector experience reviews your brief the same day.',
      'Programs span healthcare and pharma, B2B and B2C: launch readiness, market access, competitive intelligence, KOL mapping, brand tracking, and post-launch adoption. Deliverables stay decision-ready—executive narratives, segment cuts, and outputs tied to commercial milestones.',
      'Fieldwork runs in-market with local-language capability across our regions. When you are comparing partners, ask for methodology notes, sample governance, and anonymized deliverable structures—we answer with specifics.',
    ],
  },
  de: {
    heading: 'So beginnt eine Zusammenarbeit mit BioNixus',
    lead: 'Jede Anfrage ist der Start einer klar abgegrenzten Research-Partnerschaft—kein generischer Vertriebsprozess.',
    paragraphs: [
      'Beschreiben Sie die Entscheidung, die Märkte und den Evidenzstandard. Eine Research-Führungskraft mit passender Regional- und Indikationserfahrung prüft Ihr Briefing noch am selben Tag.',
      'Typische Mandate: Launch-Readiness, Marktzugang, Wettbewerbsintelligenz, KOL-Mapping und Post-Launch-Adoption. Die Liefergegenstände bleiben entscheidungsreif.',
      'Golfprogramme zweisprachig arabisch–englisch; Europa DSGVO-konform. Bei Vendor-Vergleichen liefern wir Methodik, Sample-Governance und Beispielstrukturen.',
    ],
  },
  fr: {
    heading: 'Comment commence une mission BioNixus',
    lead: 'Chaque demande ouvre un partenariat de recherche cadré—pas une file d’attente commerciale générique.',
    paragraphs: [
      'Précisez la décision, les marchés et le niveau de preuve attendu. Un directeur de recherche compétent pour votre zone et votre indication examine le brief le jour même.',
      'Missions typiques : préparation de lancement, market access, intelligence concurrentielle, cartographie KOL et suivi post-lancement. Les livrables restent orientés décision.',
      'Programmes Golfe bilingues arabe–anglais ; Europe alignée RGPD. Pour comparer des partenaires, nous fournissons méthodologie, gouvernance d’échantillon et exemples de structures.',
    ],
  },
  es: {
    heading: 'Cómo empieza un engagement con BioNixus',
    lead: 'Cada consulta inicia una colaboración de investigación acotada—no una cola comercial genérica.',
    paragraphs: [
      'Indica la decisión, los mercados y el estándar de evidencia. Un director de investigación con experiencia comparable revisa tu brief el mismo día.',
      'Encargos habituales: preparación de lanzamiento, market access, inteligencia competitiva, mapeo de KOL y seguimiento post-lanzamiento.',
      'Programas del Golfo en árabe–inglés; Europa alineada con RGPD. En comparativas de proveedores compartimos metodología, gobernanza de muestra y ejemplos de entregables.',
    ],
  },
  zh: {
    heading: '与 BioNixus 合作如何展开',
    lead: '每一条咨询都是一次明确范围的研究合作起点，而非通用销售队列。',
    paragraphs: [
      '请说明需要支持的决策、关键市场与证据标准。具备相应地区与适应症经验的研究负责人将于当日审阅您的需求。',
      '常见项目涵盖上市准备、市场准入、竞争情报、KOL 图谱与上市后采用追踪，交付物强调可决策。',
      '海湾项目支持阿英双语；欧洲现场遵循 GDPR。供应商比选时可提供方法论、样本治理与匿名交付结构示例。',
    ],
  },
  pt: {
    heading: 'Como começa uma colaboração com a BioNixus',
    lead: 'Cada contacto abre uma parceria de pesquisa delimitada — não uma fila comercial genérica.',
    paragraphs: [
      'Descreva a decisão que precisa de tomar, os mercados relevantes e o padrão de evidência que os seus stakeholders esperam. Um diretor de pesquisa com experiência na geografia e na área terapêutica analisa o seu briefing no próprio dia.',
      'Os projetos cobrem tipicamente preparação de lançamento, evidência para acesso ao mercado, inteligência competitiva, mapeamento de KOL e adoção pós-lançamento. As entregas permanecem prontas para decisão.',
      'Os programas do Golfo decorrem com trabalho de campo bilíngue árabe–inglês; o trabalho europeu segue protocolos alinhados com o RGPD. Ao comparar parceiros, peça notas metodológicas, governação da amostra e estruturas de entrega anonimizadas — respondemos com especificidade.',
    ],
  },
  ru: {
    heading: 'Как начинается работа с BioNixus',
    lead: 'Каждый запрос — начало исследовательского партнёрства с чёткими границами, а не общая очередь продаж.',
    paragraphs: [
      'Опишите решение, которое вам предстоит принять, значимые рынки и требуемый стандарт доказательности. Директор по исследованиям с опытом в нужном регионе и терапевтической области рассмотрит ваш бриф в тот же день.',
      'Проекты обычно охватывают готовность к запуску, доказательную базу для доступа на рынок, конкурентную разведку, картирование ключевых экспертов и динамику назначений после запуска. Результаты остаются пригодными для принятия решений.',
      'Программы в странах Персидского залива ведутся на арабском и английском языках; европейские проекты соответствуют требованиям GDPR. При сравнении подрядчиков запрашивайте методологию, управление выборкой и обезличенные примеры отчётов — мы отвечаем конкретикой.',
    ],
  },
  ar: {
    heading: 'كيف تبدأ شراكة البحث مع BioNixus',
    lead: 'كل استفسار هو بداية شراكة بحثية محددة النطاق—وليس طابور مبيعات عام.',
    paragraphs: [
      'شارك القرار الذي تحتاج اتخاذه والأسواق ومعيار الأدلة. يراجع مدير بحث بخبرة جغرافية وعلاجية مناسبة موجزك في اليوم نفسه.',
      'تشمل المشاريع الشائعة جاهزية الإطلاق والوصول إلى السوق والاستخبارات التنافسية وخرائط أصحاب التأثير ومتابعة التبني بعد الإطلاق.',
      'برامج الخليج ثنائية اللغة عربية–إنجليزية؛ العمل الأوروبي متوافق مع GDPR. عند مقارنة الشركاء نقدم منهجية وحوكمة عينة وأمثلة هياكل تسليم.',
    ],
  },
};

const processStepsByLanguage: Record<
  Language,
  { heading: string; steps: { title: string; body: string }[] }
> = {
  en: {
    heading: 'From inquiry to briefing',
    steps: [
      {
        title: 'Share the decision',
        body: 'Markets, sector, stakeholders, and the question leadership needs answered.',
      },
      {
        title: 'Meet a research director',
        body: 'Same-day triage with someone who has run comparable work in EMEA, the Americas, or APAC.',
      },
      {
        title: 'Receive a scoped proposal',
        body: 'Methodology, sample frame, timeline, and investment—typically within one business day.',
      },
    ],
  },
  de: {
    heading: 'Vom Kontakt zum Briefing',
    steps: [
      {
        title: 'Entscheidung skizzieren',
        body: 'Land, Indikation, Stakeholder und die Führungsfrage.',
      },
      {
        title: 'Research-Direktor treffen',
        body: 'Priorisierung am selben Tag mit vergleichbarer Regionalerfahrung.',
      },
      {
        title: 'Scoped Proposal erhalten',
        body: 'Methodik, Sample, Zeitplan und Investment—meist innerhalb eines Werktags.',
      },
    ],
  },
  fr: {
    heading: 'De la demande au briefing',
    steps: [
      {
        title: 'Clarifier la décision',
        body: 'Pays, indication, parties prenantes et question de direction.',
      },
      {
        title: 'Parler à un directeur',
        body: 'Priorisation le jour même avec une expérience comparable.',
      },
      {
        title: 'Recevoir une proposition',
        body: 'Méthode, échantillon, calendrier et investissement—souvent sous un jour ouvré.',
      },
    ],
  },
  es: {
    heading: 'De la consulta al briefing',
    steps: [
      {
        title: 'Definir la decisión',
        body: 'País, terapia, stakeholders y la pregunta de liderazgo.',
      },
      {
        title: 'Hablar con un director',
        body: 'Priorización el mismo día con experiencia comparable.',
      },
      {
        title: 'Recibir una propuesta',
        body: 'Metodología, muestra, plazos e inversión—habitualmente en un día laborable.',
      },
    ],
  },
  zh: {
    heading: '从咨询到立项沟通',
    steps: [
      { title: '说明决策需求', body: '国家、治疗领域、利益相关方与管理层待回答的问题。' },
      { title: '对接研究负责人', body: '当日分流，由具备同类项目经验的负责人对接。' },
      { title: '获取范围提案', body: '方法、样本、时间表与预算—通常一个工作日内。' },
    ],
  },
  pt: {
    heading: 'Do contacto ao briefing',
    steps: [
      {
        title: 'Descreva a decisão',
        body: 'País, área terapêutica, stakeholders e a pergunta que a direção precisa de responder.',
      },
      {
        title: 'Fale com um diretor de pesquisa',
        body: 'Triagem no próprio dia com quem já conduziu projetos comparáveis no Golfo, MENA ou Europa.',
      },
      {
        title: 'Receba uma proposta delimitada',
        body: 'Metodologia, amostra, cronograma e investimento — normalmente dentro de um dia útil.',
      },
    ],
  },
  ru: {
    heading: 'От запроса до брифинга',
    steps: [
      {
        title: 'Опишите решение',
        body: 'Страна, терапевтическая область, заинтересованные стороны и вопрос, на который нужен ответ.',
      },
      {
        title: 'Познакомьтесь с директором по исследованиям',
        body: 'Разбор запроса в тот же день специалистом с опытом сопоставимых проектов.',
      },
      {
        title: 'Получите проработанное предложение',
        body: 'Методология, выборка, сроки и бюджет — как правило, в течение одного рабочего дня.',
      },
    ],
  },
  ar: {
    heading: 'من الاستفسار إلى الإحاطة',
    steps: [
      {
        title: 'حدد القرار',
        body: 'الدولة والعلاج وأصحاب المصلحة والسؤال الذي تحتاجه القيادة.',
      },
      {
        title: 'التقِ بمدير البحث',
        body: 'فرز في اليوم نفسه مع خبرة تنفيذ مماثلة.',
      },
      {
        title: 'استلم مقترحاً محدداً',
        body: 'المنهجية والعينة والجدول والاستثمار—عادة خلال يوم عمل.',
      },
    ],
  },
};

const Contact = () => {
  const { t, language, isRTL } = useLanguage();
  const cp = (t as { contactPage?: ContactPageCopy }).contactPage;
  const heroTitle = cp?.heroTitle ?? t.contact.title;
  const heroSubtitle = cp?.heroSubtitle ?? t.contact.subtitle;
  const page = getContactFormStrings(language).page;
  const brandLine = cp?.brandLine ?? 'BioNixus';
  const primaryCta = cp?.primaryCta ?? page.primaryCta;
  const secondaryCta = cp?.secondaryCta ?? page.secondaryCta;
  const engagement = engagementByLanguage[language] ?? engagementByLanguage.en;
  const process = processStepsByLanguage[language] ?? processStepsByLanguage.en;
  const heroRef = useScrollReveal<HTMLElement>({ stagger: 70, threshold: 0.05 });
  const processRef = useScrollReveal<HTMLElement>({ stagger: 90 });
  const engagementRef = useScrollReveal<HTMLElement>({ stagger: 80 });

  const contactPath = localizedContactPath(language);
  const breadcrumbItems = [
    { name: page.breadcrumbHome, href: languagePaths[language] || '/' },
    { name: page.breadcrumbContact, href: contactPath },
  ];

  const jsonLd = [
    buildBreadcrumbSchema(breadcrumbItems),
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: page.jsonLdName,
      url: `https://www.bionixus.com${contactPath}`,
      inLanguage: language,
      description: page.seoDescription,
      mainEntity: {
        '@type': 'Organization',
        '@id': 'https://www.bionixus.com/#organization',
        name: 'BioNixus',
        url: 'https://www.bionixus.com',
        email: 'admin@bionixus.com',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: 'admin@bionixus.com',
            availableLanguage: ['English', 'Arabic', 'German', 'French', 'Spanish', 'Chinese'],
          },
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <SEOHead
        title={page.seoTitle}
        description={page.seoDescription}
        canonical={contactPath}
        jsonLd={jsonLd}
      />
      <Navbar />
      <main className="min-w-0">
        <section
          ref={heroRef}
          className="relative overflow-hidden text-primary-foreground"
          aria-labelledby="contact-hero-heading"
        >
          <div
            className="absolute inset-0"
            style={{ background: 'var(--gradient-hero)' }}
            aria-hidden
          />
          <div
            className="absolute inset-0 opacity-[0.35] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 80% 60% at 15% 20%, hsl(38 92% 50% / 0.18), transparent 55%), radial-gradient(ellipse 70% 50% at 85% 75%, hsl(220 40% 40% / 0.35), transparent 50%)',
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(hsl(0 0% 100% / 0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.06) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
            }}
            aria-hidden
          />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-80" aria-hidden />

          <div className="relative container-wide pt-28 pb-20 md:pt-32 md:pb-28">
            <BreadcrumbNav
              items={breadcrumbItems}
              className="px-0 mb-10 text-primary-foreground/55 [&_a]:text-primary-foreground/70 [&_a:hover]:text-accent [&_span[aria-current=page]]:text-primary-foreground [&_.text-border]:text-primary-foreground/25"
            />

            <p className="sr sr-up font-display text-2xl md:text-3xl lg:text-4xl tracking-tight text-accent mb-6">
              {brandLine}
            </p>
            <h1
              id="contact-hero-heading"
              className="sr-lcp sr sr-up max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-semibold leading-[1.08] text-balance break-words mb-6"
            >
              {heroTitle}
            </h1>
            <p className="sr sr-up max-w-xl text-base sm:text-lg md:text-xl text-primary-foreground/75 leading-relaxed mb-10 break-words">
              {heroSubtitle}
            </p>

            <div
              className={`sr sr-up flex flex-col sm:flex-row gap-3 w-full max-w-xl ${isRTL ? 'sm:flex-row-reverse' : ''}`}
            >
              <a
                href="#request-proposal"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground font-semibold rounded-md hover:brightness-105 transition-[filter,transform] duration-300 hover:-translate-y-0.5"
              >
                {primaryCta}
                <ArrowDown className="w-4 h-4" aria-hidden />
              </a>
              <a
                href="mailto:admin@bionixus.com?subject=Research%20proposal%20inquiry"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-3.5 border border-primary-foreground/25 text-primary-foreground font-semibold rounded-md hover:bg-primary-foreground/10 transition-colors duration-300"
              >
                {secondaryCta}
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} aria-hidden />
              </a>
            </div>
          </div>
        </section>

        <section
          ref={processRef}
          className="border-b border-border bg-background"
          aria-labelledby="contact-process-heading"
        >
          <div className="container-wide py-16 md:py-20">
            <h2
              id="contact-process-heading"
              className={`sr sr-up text-2xl md:text-3xl font-display font-semibold text-foreground mb-12 ${isRTL ? 'text-right' : ''}`}
            >
              {process.heading}
            </h2>
            <ol className="grid md:grid-cols-3 gap-10 md:gap-8">
              {process.steps.map((step, index) => (
                <li
                  key={step.title}
                  className={`sr sr-up relative ${isRTL ? 'text-right' : ''}`}
                >
                  <span className="block font-display text-5xl text-accent/40 leading-none mb-4 tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.body}</p>
                  {index < process.steps.length - 1 ? (
                    <span
                      className="hidden md:block absolute top-6 end-0 w-px h-16 bg-border translate-x-4 rtl:-translate-x-4"
                      aria-hidden
                    />
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ContactSection premium />

        <section
          ref={engagementRef}
          className="section-padding py-16 md:py-20 border-t border-border bg-[hsl(var(--navy-deep))] text-primary-foreground"
          aria-labelledby="contact-engagement-heading"
        >
          <div className={`container-wide max-w-3xl ${isRTL ? 'text-right' : ''}`}>
            <h2
              id="contact-engagement-heading"
              className="sr sr-up text-2xl md:text-3xl font-display font-semibold mb-4"
            >
              {engagement.heading}
            </h2>
            <p className="sr sr-up text-lg text-accent mb-8 leading-relaxed">{engagement.lead}</p>
            <div className="space-y-5 text-primary-foreground/75 leading-relaxed">
              {engagement.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="sr sr-up">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="sr sr-up mt-10 text-sm text-primary-foreground/55">
              {page.directLinePrompt}{' '}
              <a href="mailto:admin@bionixus.com" className="text-accent hover:underline font-medium">
                admin@bionixus.com
              </a>
              {' · '}
              <Link
                to={getLocalizedPathForLanguage('/case-studies', language)}
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                {page.caseStudiesLink}
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
