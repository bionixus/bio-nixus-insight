/**
 * Localized copy for the `/insights` hub.
 *
 * The English page also renders a long list of `/insights/...` listicles. Those
 * targets exist only in English, so localized pages deliberately link to
 * destinations that do have translations (blog, case studies, services,
 * industries) rather than sending visitors to a dead end in another language.
 */
import type { Language } from '@/lib/i18n';

export type InsightsHubSection = {
  heading: string;
  paragraphs: [string, string];
};

export type InsightsHubCopy = {
  seo: { title: string; description: string };
  breadcrumb: { home: string; insights: string };
  hero: { h1: string; lead: string };
  sections: [InsightsHubSection, InsightsHubSection];
  resources: {
    heading: string;
    lead: string;
    blog: string;
    caseStudies: string;
    services: string;
    industries: string;
  };
  jsonLd: { name: string; description: string };
};

const en: InsightsHubCopy = {
  seo: {
    title: 'BioNixus Insights for Healthcare & Pharma Strategy | BioNixus',
    description:
      'Discover why BioNixus insights improve healthcare and pharmaceutical decisions across market access, launch planning, and growth strategy.',
  },
  breadcrumb: { home: 'Home', insights: 'Insights' },
  hero: {
    h1: 'Why BioNixus Insights Matter in Healthcare and Pharmaceuticals',
    lead: 'BioNixus insights connect market signals, stakeholder behavior, and regulatory context into decision-ready guidance for healthcare and pharmaceutical teams. These insights reduce uncertainty and improve the quality of launch, access, and growth decisions across complex markets.',
  },
  sections: [
    {
      heading: 'Better Decisions Across the Product Lifecycle',
      paragraphs: [
        'In pharmaceutical strategy, timing and evidence quality directly affect commercial outcomes. BioNixus insights help teams prioritize the right opportunities, understand clinician and payer expectations, and align internal plans with real market conditions.',
        'In healthcare services, insight depth is equally important. Decision-makers need clarity on demand patterns, treatment pathways, and access barriers. BioNixus translates this complexity into practical actions that leadership teams can apply immediately.',
      ],
    },
    {
      heading: 'Insight Quality Drives Commercial and Access Performance',
      paragraphs: [
        'High-impact insight programs support market entry planning, message optimization, competitive positioning, and market access readiness. With stronger evidence, teams can improve stakeholder alignment, reduce strategic rework, and accelerate informed execution.',
        'BioNixus combines quantitative and qualitative methods to ensure the insight output is both rigorous and actionable. This makes insights usable not only for research teams, but also for commercial, medical, and market access leaders.',
      ],
    },
  ],
  resources: {
    heading: 'Explore BioNixus Insight Resources',
    lead: 'Continue with our latest thought leadership in the blog or review practical outcomes in our case studies.',
    blog: 'Explore the Blog',
    caseStudies: 'View Case Studies',
    services: 'Research Services',
    industries: 'Industries We Serve',
  },
  jsonLd: {
    name: 'BioNixus Insights for Healthcare and Pharmaceutical Teams',
    description:
      'Learn why BioNixus insights help healthcare and pharmaceutical teams make better launch, access, and growth decisions.',
  },
};

const de: InsightsHubCopy = {
  seo: {
    title: 'BioNixus Insights für Pharma- und Gesundheitsstrategie',
    description:
      'Erfahren Sie, wie BioNixus Insights Entscheidungen in Pharma und Gesundheitswesen verbessern — von Marktzugang über Launch-Planung bis zur Wachstumsstrategie.',
  },
  breadcrumb: { home: 'Startseite', insights: 'Insights' },
  hero: {
    h1: 'Warum BioNixus Insights in Pharma und Gesundheitswesen zählen',
    lead: 'BioNixus Insights verbinden Marktsignale, Stakeholder-Verhalten und regulatorischen Kontext zu entscheidungsreifen Empfehlungen für Pharma- und Gesundheitsteams. Sie reduzieren Unsicherheit und verbessern die Qualität von Launch-, Zugangs- und Wachstumsentscheidungen in komplexen Märkten.',
  },
  sections: [
    {
      heading: 'Bessere Entscheidungen über den gesamten Produktlebenszyklus',
      paragraphs: [
        'In der Pharmastrategie wirken sich Timing und Evidenzqualität unmittelbar auf den kommerziellen Erfolg aus. BioNixus Insights helfen Teams, die richtigen Chancen zu priorisieren, Erwartungen von Ärztinnen, Ärzten und Kostenträgern zu verstehen und interne Pläne an realen Marktbedingungen auszurichten.',
        'Im Gesundheitsdienstleistungsbereich ist die Tiefe der Insights ebenso entscheidend. Entscheiderinnen und Entscheider brauchen Klarheit über Nachfragemuster, Behandlungspfade und Zugangsbarrieren. BioNixus übersetzt diese Komplexität in Maßnahmen, die Führungsteams sofort umsetzen können.',
      ],
    },
    {
      heading: 'Insight-Qualität bestimmt kommerzielle und Zugangsergebnisse',
      paragraphs: [
        'Wirksame Insight-Programme unterstützen Markteintrittsplanung, Botschaftsoptimierung, Wettbewerbspositionierung und die Vorbereitung des Marktzugangs. Mit belastbarer Evidenz verbessern Teams die Abstimmung mit Stakeholdern, vermeiden strategische Nacharbeit und setzen schneller fundiert um.',
        'BioNixus kombiniert quantitative und qualitative Methoden, damit die Ergebnisse zugleich methodisch belastbar und umsetzbar sind. So werden Insights nicht nur für Research-Teams nutzbar, sondern auch für Kommerz-, Medical- und Marktzugangsverantwortliche.',
      ],
    },
  ],
  resources: {
    heading: 'BioNixus Insight-Ressourcen entdecken',
    lead: 'Vertiefen Sie das Thema in unserem Blog oder sehen Sie sich konkrete Ergebnisse in unseren Fallstudien an.',
    blog: 'Zum Blog',
    caseStudies: 'Fallstudien ansehen',
    services: 'Research-Leistungen',
    industries: 'Betreute Branchen',
  },
  jsonLd: {
    name: 'BioNixus Insights für Pharma- und Gesundheitsteams',
    description:
      'Erfahren Sie, wie BioNixus Insights Pharma- und Gesundheitsteams zu besseren Launch-, Zugangs- und Wachstumsentscheidungen verhelfen.',
  },
};

const fr: InsightsHubCopy = {
  seo: {
    title: 'Insights BioNixus pour la stratégie santé et pharma',
    description:
      'Découvrez comment les insights BioNixus améliorent les décisions santé et pharmaceutiques : accès au marché, préparation de lancement et stratégie de croissance.',
  },
  breadcrumb: { home: 'Accueil', insights: 'Insights' },
  hero: {
    h1: 'Pourquoi les insights BioNixus comptent en santé et pharmacie',
    lead: 'Les insights BioNixus relient signaux de marché, comportements des parties prenantes et contexte réglementaire pour produire des recommandations directement exploitables par les équipes santé et pharmaceutiques. Ils réduisent l’incertitude et améliorent la qualité des décisions de lancement, d’accès et de croissance sur des marchés complexes.',
  },
  sections: [
    {
      heading: 'De meilleures décisions sur tout le cycle de vie du produit',
      paragraphs: [
        'En stratégie pharmaceutique, le calendrier et la qualité des preuves influent directement sur les résultats commerciaux. Les insights BioNixus aident les équipes à prioriser les bonnes opportunités, à comprendre les attentes des cliniciens et des payeurs, et à aligner les plans internes sur les conditions réelles du marché.',
        'Dans les services de santé, la profondeur de l’analyse est tout aussi déterminante. Les décideurs ont besoin de clarté sur les schémas de demande, les parcours de soins et les barrières à l’accès. BioNixus traduit cette complexité en actions concrètes, immédiatement applicables par les équipes dirigeantes.',
      ],
    },
    {
      heading: 'La qualité des insights détermine la performance commerciale et l’accès',
      paragraphs: [
        'Les programmes d’insights à fort impact soutiennent la planification de l’entrée sur le marché, l’optimisation des messages, le positionnement concurrentiel et la préparation de l’accès au marché. Avec des preuves plus solides, les équipes améliorent l’alignement des parties prenantes, limitent les reprises stratégiques et exécutent plus vite en connaissance de cause.',
        'BioNixus combine méthodes quantitatives et qualitatives pour que les résultats soient à la fois rigoureux et actionnables. Les insights servent ainsi non seulement aux équipes d’études, mais aussi aux responsables commerciaux, médicaux et de l’accès au marché.',
      ],
    },
  ],
  resources: {
    heading: 'Explorer les ressources BioNixus',
    lead: 'Poursuivez avec nos analyses les plus récentes sur le blog ou consultez des résultats concrets dans nos études de cas.',
    blog: 'Découvrir le blog',
    caseStudies: 'Voir les études de cas',
    services: 'Nos prestations d’études',
    industries: 'Secteurs couverts',
  },
  jsonLd: {
    name: 'Insights BioNixus pour les équipes santé et pharmaceutiques',
    description:
      'Découvrez comment les insights BioNixus aident les équipes santé et pharmaceutiques à mieux décider en matière de lancement, d’accès et de croissance.',
  },
};

const es: InsightsHubCopy = {
  seo: {
    title: 'Insights de BioNixus para estrategia sanitaria y farmacéutica',
    description:
      'Descubra cómo los insights de BioNixus mejoran las decisiones sanitarias y farmacéuticas en acceso al mercado, preparación de lanzamiento y estrategia de crecimiento.',
  },
  breadcrumb: { home: 'Inicio', insights: 'Insights' },
  hero: {
    h1: 'Por qué los insights de BioNixus importan en salud y farmacia',
    lead: 'Los insights de BioNixus conectan señales de mercado, comportamiento de los actores clave y contexto regulatorio en orientación lista para decidir, dirigida a equipos sanitarios y farmacéuticos. Reducen la incertidumbre y mejoran la calidad de las decisiones de lanzamiento, acceso y crecimiento en mercados complejos.',
  },
  sections: [
    {
      heading: 'Mejores decisiones en todo el ciclo de vida del producto',
      paragraphs: [
        'En la estrategia farmacéutica, el momento y la calidad de la evidencia afectan directamente a los resultados comerciales. Los insights de BioNixus ayudan a priorizar las oportunidades adecuadas, comprender las expectativas de clínicos y financiadores, y alinear los planes internos con las condiciones reales del mercado.',
        'En los servicios sanitarios, la profundidad del análisis es igual de importante. Quienes deciden necesitan claridad sobre patrones de demanda, rutas asistenciales y barreras de acceso. BioNixus traduce esa complejidad en acciones prácticas que los equipos directivos pueden aplicar de inmediato.',
      ],
    },
    {
      heading: 'La calidad del insight impulsa el desempeño comercial y de acceso',
      paragraphs: [
        'Los programas de insight de alto impacto respaldan la planificación de entrada al mercado, la optimización de mensajes, el posicionamiento competitivo y la preparación del acceso al mercado. Con evidencia más sólida, los equipos mejoran la alineación entre áreas, reducen el retrabajo estratégico y ejecutan con mayor rapidez y criterio.',
        'BioNixus combina métodos cuantitativos y cualitativos para que el resultado sea a la vez riguroso y accionable. Así, los insights resultan útiles no solo para los equipos de investigación, sino también para responsables comerciales, médicos y de acceso al mercado.',
      ],
    },
  ],
  resources: {
    heading: 'Explore los recursos de BioNixus',
    lead: 'Continúe con nuestros análisis más recientes en el blog o revise resultados concretos en nuestros casos de éxito.',
    blog: 'Ir al blog',
    caseStudies: 'Ver casos de éxito',
    services: 'Servicios de investigación',
    industries: 'Sectores que atendemos',
  },
  jsonLd: {
    name: 'Insights de BioNixus para equipos sanitarios y farmacéuticos',
    description:
      'Descubra cómo los insights de BioNixus ayudan a los equipos sanitarios y farmacéuticos a tomar mejores decisiones de lanzamiento, acceso y crecimiento.',
  },
};

const pt: InsightsHubCopy = {
  seo: {
    title: 'Insights BioNixus para estratégia em saúde e farmacêutica',
    description:
      'Descubra como os insights da BioNixus melhoram decisões em saúde e no setor farmacêutico: acesso ao mercado, preparação de lançamento e estratégia de crescimento.',
  },
  breadcrumb: { home: 'Início', insights: 'Insights' },
  hero: {
    h1: 'Por que os insights da BioNixus são decisivos em saúde e farmacêutica',
    lead: 'Os insights da BioNixus ligam sinais de mercado, comportamento dos stakeholders e contexto regulatório numa orientação pronta para decisão, dirigida a equipas de saúde e do setor farmacêutico. Reduzem a incerteza e melhoram a qualidade das decisões de lançamento, acesso e crescimento em mercados complexos.',
  },
  sections: [
    {
      heading: 'Melhores decisões ao longo do ciclo de vida do produto',
      paragraphs: [
        'Na estratégia farmacêutica, o momento certo e a qualidade da evidência afetam diretamente os resultados comerciais. Os insights da BioNixus ajudam as equipas a priorizar as oportunidades certas, a compreender as expectativas de clínicos e pagadores e a alinhar os planos internos com as condições reais do mercado.',
        'Nos serviços de saúde, a profundidade da análise é igualmente importante. Quem decide precisa de clareza sobre padrões de procura, percursos terapêuticos e barreiras de acesso. A BioNixus traduz essa complexidade em ações práticas que as equipas de liderança podem aplicar de imediato.',
      ],
    },
    {
      heading: 'A qualidade do insight determina o desempenho comercial e de acesso',
      paragraphs: [
        'Programas de insight de elevado impacto apoiam o planeamento de entrada no mercado, a otimização de mensagens, o posicionamento competitivo e a preparação do acesso ao mercado. Com evidência mais sólida, as equipas melhoram o alinhamento entre áreas, reduzem retrabalho estratégico e executam mais depressa e com melhor fundamento.',
        'A BioNixus combina métodos quantitativos e qualitativos para que o resultado seja simultaneamente rigoroso e acionável. Assim, os insights servem não só as equipas de pesquisa, mas também os responsáveis comerciais, médicos e de acesso ao mercado.',
      ],
    },
  ],
  resources: {
    heading: 'Explore os recursos da BioNixus',
    lead: 'Continue com as nossas análises mais recentes no blog ou veja resultados concretos nos nossos estudos de caso.',
    blog: 'Ir para o blog',
    caseStudies: 'Ver estudos de caso',
    services: 'Serviços de pesquisa',
    industries: 'Setores que servimos',
  },
  jsonLd: {
    name: 'Insights BioNixus para equipas de saúde e farmacêuticas',
    description:
      'Saiba como os insights da BioNixus ajudam equipas de saúde e farmacêuticas a tomar melhores decisões de lançamento, acesso e crescimento.',
  },
};

const ru: InsightsHubCopy = {
  seo: {
    title: 'Аналитика BioNixus для фармацевтической стратегии',
    description:
      'Узнайте, как аналитика BioNixus улучшает решения в здравоохранении и фарме: доступ на рынок, подготовка к запуску и стратегия роста.',
  },
  breadcrumb: { home: 'Главная', insights: 'Аналитика' },
  hero: {
    h1: 'Почему аналитика BioNixus важна в здравоохранении и фармацевтике',
    lead: 'Аналитика BioNixus объединяет рыночные сигналы, поведение заинтересованных сторон и регуляторный контекст в рекомендации, готовые для принятия решений командами в здравоохранении и фармацевтике. Это снижает неопределённость и повышает качество решений о запуске, доступе на рынок и росте на сложных рынках.',
  },
  sections: [
    {
      heading: 'Более обоснованные решения на всём жизненном цикле продукта',
      paragraphs: [
        'В фармацевтической стратегии сроки и качество доказательной базы напрямую влияют на коммерческий результат. Аналитика BioNixus помогает командам расставить приоритеты, понять ожидания врачей и плательщиков и привести внутренние планы в соответствие с реальными рыночными условиями.',
        'В сфере медицинских услуг глубина анализа не менее важна. Руководителям нужна ясность в отношении структуры спроса, маршрутов лечения и барьеров доступа. BioNixus переводит эту сложность в конкретные действия, которые команды могут применить сразу.',
      ],
    },
    {
      heading: 'Качество аналитики определяет коммерческие результаты и доступ на рынок',
      paragraphs: [
        'Результативные исследовательские программы поддерживают планирование выхода на рынок, оптимизацию ключевых сообщений, конкурентное позиционирование и готовность к получению доступа. С более надёжными данными команды лучше согласуют позиции сторон, сокращают переработку стратегии и быстрее переходят к обоснованным действиям.',
        'BioNixus сочетает количественные и качественные методы, чтобы результат был одновременно методологически строгим и практически применимым. Благодаря этому аналитика полезна не только исследовательским командам, но и руководителям коммерческих, медицинских подразделений и направлений доступа на рынок.',
      ],
    },
  ],
  resources: {
    heading: 'Материалы и ресурсы BioNixus',
    lead: 'Продолжите чтение в нашем блоге или изучите конкретные результаты в разделе кейсов.',
    blog: 'Перейти в блог',
    caseStudies: 'Смотреть кейсы',
    services: 'Исследовательские услуги',
    industries: 'Отрасли, с которыми мы работаем',
  },
  jsonLd: {
    name: 'Аналитика BioNixus для команд в здравоохранении и фармацевтике',
    description:
      'Узнайте, как аналитика BioNixus помогает командам в здравоохранении и фармацевтике принимать более обоснованные решения о запуске, доступе на рынок и росте.',
  },
};

const zh: InsightsHubCopy = {
  seo: {
    title: 'BioNixus 医药与健康战略洞察',
    description:
      '了解 BioNixus 洞察如何改善医药与医疗健康决策，涵盖市场准入、上市规划与增长战略。',
  },
  breadcrumb: { home: '首页', insights: '洞察' },
  hero: {
    h1: 'BioNixus 洞察为何对医药与医疗健康至关重要',
    lead: 'BioNixus 洞察将市场信号、利益相关方行为与监管环境整合为可直接支持决策的建议，服务于医药与医疗健康团队。这些洞察降低不确定性，并在复杂市场中提升上市、准入与增长决策的质量。',
  },
  sections: [
    {
      heading: '贯穿产品全生命周期的更优决策',
      paragraphs: [
        '在医药战略中，时机与证据质量直接影响商业成果。BioNixus 洞察帮助团队筛选真正值得投入的机会，理解临床医生与支付方的期望，并使内部规划与真实市场状况保持一致。',
        '在医疗服务领域，洞察的深度同样关键。决策者需要清晰把握需求格局、诊疗路径与准入壁垒。BioNixus 将这些复杂性转化为管理层可立即落地的具体行动。',
      ],
    },
    {
      heading: '洞察质量决定商业与准入表现',
      paragraphs: [
        '高价值的研究项目可支持市场进入规划、信息传递优化、竞争定位与市场准入准备。证据基础更扎实时，团队能够提升跨部门共识、减少战略返工，并更快地推进有依据的执行。',
        'BioNixus 结合定量与定性方法，确保研究成果兼具严谨性与可操作性。因此，洞察不仅适用于研究团队，也可服务于商业、医学事务与市场准入负责人。',
      ],
    },
  ],
  resources: {
    heading: '探索 BioNixus 洞察资源',
    lead: '您可以在博客中继续阅读我们的最新观点，或在案例研究中了解实际成果。',
    blog: '浏览博客',
    caseStudies: '查看案例研究',
    services: '研究服务',
    industries: '服务行业',
  },
  jsonLd: {
    name: 'BioNixus 面向医药与医疗健康团队的洞察',
    description:
      '了解 BioNixus 洞察如何帮助医药与医疗健康团队做出更好的上市、准入与增长决策。',
  },
};

const ar: InsightsHubCopy = {
  seo: {
    title: 'رؤى بيونكسس لاستراتيجيات الرعاية الصحية والأدوية',
    description:
      'اكتشف كيف تحسّن رؤى بيونكسس قرارات الرعاية الصحية والأدوية في الوصول إلى السوق والتحضير للإطلاق واستراتيجية النمو.',
  },
  breadcrumb: { home: 'الرئيسية', insights: 'الرؤى' },
  hero: {
    h1: 'لماذا تُحدث رؤى بيونكسس فرقاً في الرعاية الصحية والأدوية',
    lead: 'تربط رؤى بيونكسس بين إشارات السوق وسلوك أصحاب المصلحة والسياق التنظيمي لتقديم توجيه جاهز لاتخاذ القرار لفرق الرعاية الصحية والأدوية. تقلل هذه الرؤى حالة عدم اليقين وترفع جودة قرارات الإطلاق والوصول إلى السوق والنمو في الأسواق المعقدة.',
  },
  sections: [
    {
      heading: 'قرارات أفضل عبر دورة حياة المنتج',
      paragraphs: [
        'في استراتيجية الأدوية، يؤثر التوقيت وجودة الأدلة بشكل مباشر على النتائج التجارية. تساعد رؤى بيونكسس الفرق على ترتيب أولويات الفرص الصحيحة، وفهم توقعات الأطباء والجهات الدافعة، ومواءمة الخطط الداخلية مع ظروف السوق الفعلية.',
        'في خدمات الرعاية الصحية، لا يقل عمق الرؤية أهمية. يحتاج صانعو القرار إلى وضوح بشأن أنماط الطلب والمسارات العلاجية وحواجز الوصول. تترجم بيونكسس هذا التعقيد إلى إجراءات عملية يمكن لفرق القيادة تطبيقها فوراً.',
      ],
    },
    {
      heading: 'جودة الرؤى تقود الأداء التجاري والوصول إلى السوق',
      paragraphs: [
        'تدعم برامج الرؤى عالية الأثر تخطيط دخول السوق وتحسين الرسائل والتموضع التنافسي والجاهزية للوصول إلى السوق. ومع أدلة أقوى، تحسّن الفرق توافق أصحاب المصلحة وتقلل إعادة العمل الاستراتيجي وتنفّذ بوتيرة أسرع وعلى أساس مدروس.',
        'تجمع بيونكسس بين المنهجيات الكمية والنوعية لضمان أن تكون المخرجات دقيقة وقابلة للتطبيق في آن واحد. وهذا يجعل الرؤى مفيدة ليس لفرق البحث فحسب، بل أيضاً لقادة الشؤون التجارية والطبية والوصول إلى السوق.',
      ],
    },
  ],
  resources: {
    heading: 'استكشف موارد بيونكسس',
    lead: 'تابع أحدث تحليلاتنا في المدونة أو اطّلع على نتائج عملية في دراسات الحالة.',
    blog: 'تصفح المدونة',
    caseStudies: 'عرض دراسات الحالة',
    services: 'خدمات الأبحاث',
    industries: 'القطاعات التي نخدمها',
  },
  jsonLd: {
    name: 'رؤى بيونكسس لفرق الرعاية الصحية والأدوية',
    description:
      'تعرّف على كيفية مساعدة رؤى بيونكسس لفرق الرعاية الصحية والأدوية على اتخاذ قرارات أفضل بشأن الإطلاق والوصول إلى السوق والنمو.',
  },
};

const LOCALIZED: Partial<Record<Language, InsightsHubCopy>> = { de, fr, es, pt, ru, zh, ar };

export function getInsightsHubCopy(language: Language): InsightsHubCopy {
  return LOCALIZED[language] ?? en;
}
