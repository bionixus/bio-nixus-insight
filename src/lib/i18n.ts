export type Language = 'en' | 'de' | 'fr' | 'es' | 'zh' | 'ar';

export const languages: { code: Language; name: string; flag: string; rtl?: boolean }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', rtl: true },
];

export const translations = {
  en: {
    nav: {
      services: 'Services',
      insights: 'Insights',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Healthcare Market Research',
      title: 'Strategic Intelligence for Healthcare Innovation',
      subtitle: 'We transform complex healthcare data into actionable insights that drive pharmaceutical excellence and patient outcomes worldwide.',
      cta: 'Explore Our Expertise',
      ctaSecondary: 'View Case Studies',
    },
    services: {
      title: 'Our Expertise',
      subtitle: 'Comprehensive healthcare market research solutions tailored to your strategic needs',
      items: [
        {
          title: 'Market Access & Pricing',
          description: 'Navigate complex reimbursement landscapes with evidence-based pricing strategies and payer engagement frameworks.',
        },
        {
          title: 'Competitive Intelligence',
          description: 'Stay ahead with real-time competitive monitoring, pipeline analysis, and strategic positioning insights.',
        },
        {
          title: 'Patient Journey Mapping',
          description: 'Understand the complete patient experience from diagnosis to treatment to optimize touchpoints and outcomes.',
        },
        {
          title: 'KOL & Stakeholder Analysis',
          description: 'Identify and engage key opinion leaders with data-driven influence mapping and relationship strategies.',
        },
        {
          title: 'Clinical Trial Optimization',
          description: 'Accelerate development with site selection analytics, patient recruitment strategies, and protocol optimization.',
        },
        {
          title: 'Launch Excellence',
          description: 'Maximize launch impact with integrated go-to-market strategies, forecasting, and market shaping initiatives.',
        },
      ],
    },
    insights: {
      title: 'Latest Insights',
      subtitle: 'Thought leadership and research perspectives from our global team',
      readMore: 'Read Article',
      items: [
        {
          category: 'Market Access',
          title: 'The Future of Value-Based Healthcare Agreements in Europe',
          excerpt: 'How innovative contracting models are reshaping pharmaceutical pricing and access strategies across major European markets.',
          date: '2024 Q4 Report',
        },
        {
          category: 'Digital Health',
          title: 'AI-Driven Drug Discovery: Market Implications',
          excerpt: 'Analyzing the competitive landscape shift as artificial intelligence transforms pharmaceutical R&D and time-to-market.',
          date: 'Strategic Brief',
        },
        {
          category: 'Oncology',
          title: 'Precision Medicine Market Dynamics 2025',
          excerpt: 'Comprehensive analysis of biomarker-driven therapies and the evolving oncology treatment paradigm.',
          date: 'Industry Analysis',
        },
      ],
    },
    stats: {
      title: 'Global Impact',
      items: [
        { value: '50+', label: 'Countries Covered' },
        { value: '10+', label: 'Pharma Clients' },
        { value: '120+', label: 'Projects Delivered' },
        { value: '15+', label: 'Years Experience' },
      ],
    },
    testimonials: {
      title: 'Client Perspectives',
      subtitle: 'Trusted by leading pharmaceutical and biotech companies worldwide',
    },
    contact: {
      title: "Let's Connect",
      subtitle: 'Ready to transform your healthcare market strategy? Our team of experts is here to help.',
      cta: 'Schedule a Consultation',
      email: 'admin@bionixus.com',
      headquarters: 'Wyoming, USA',
    },
    footer: {
      tagline: 'Strategic Healthcare Intelligence',
      copyright: '© 2024 BioNixus. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
  de: {
    nav: {
      services: 'Leistungen',
      insights: 'Erkenntnisse',
      about: 'Über uns',
      contact: 'Kontakt',
    },
    hero: {
      tagline: 'Gesundheitsmarktforschung',
      title: 'Strategische Intelligenz für Gesundheitsinnovation',
      subtitle: 'Wir transformieren komplexe Gesundheitsdaten in umsetzbare Erkenntnisse, die pharmazeutische Exzellenz und Patientenergebnisse weltweit vorantreiben.',
      cta: 'Unsere Expertise entdecken',
      ctaSecondary: 'Fallstudien ansehen',
    },
    services: {
      title: 'Unsere Expertise',
      subtitle: 'Umfassende Gesundheitsmarktforschungslösungen, zugeschnitten auf Ihre strategischen Bedürfnisse',
      items: [
        {
          title: 'Marktzugang & Preisgestaltung',
          description: 'Navigieren Sie komplexe Erstattungslandschaften mit evidenzbasierten Preisstrategien und Kostenträger-Engagement-Frameworks.',
        },
        {
          title: 'Wettbewerbsanalyse',
          description: 'Bleiben Sie mit Echtzeit-Wettbewerbsbeobachtung, Pipeline-Analyse und strategischen Positionierungserkenntnissen voraus.',
        },
        {
          title: 'Patientenreise-Mapping',
          description: 'Verstehen Sie die gesamte Patientenerfahrung von der Diagnose bis zur Behandlung, um Berührungspunkte und Ergebnisse zu optimieren.',
        },
        {
          title: 'KOL & Stakeholder-Analyse',
          description: 'Identifizieren und engagieren Sie Key Opinion Leader mit datengestütztem Einfluss-Mapping und Beziehungsstrategien.',
        },
        {
          title: 'Klinische Studienoptimierung',
          description: 'Beschleunigen Sie die Entwicklung mit Standortauswahl-Analytik, Patientenrekrutierungsstrategien und Protokolloptimierung.',
        },
        {
          title: 'Launch-Exzellenz',
          description: 'Maximieren Sie die Launch-Wirkung mit integrierten Go-to-Market-Strategien, Prognosen und Marktgestaltungsinitiativen.',
        },
      ],
    },
    insights: {
      title: 'Aktuelle Erkenntnisse',
      subtitle: 'Thought Leadership und Forschungsperspektiven von unserem globalen Team',
      readMore: 'Artikel lesen',
      items: [
        {
          category: 'Marktzugang',
          title: 'Die Zukunft wertbasierter Gesundheitsvereinbarungen in Europa',
          excerpt: 'Wie innovative Vertragsmodelle pharmazeutische Preis- und Zugangsstrategien in großen europäischen Märkten umgestalten.',
          date: '2024 Q4 Bericht',
        },
        {
          category: 'Digitale Gesundheit',
          title: 'KI-gesteuerte Arzneimittelentdeckung: Marktimplikationen',
          excerpt: 'Analyse der Wettbewerbslandschaftsverschiebung, während künstliche Intelligenz pharmazeutische F&E transformiert.',
          date: 'Strategische Kurzanalyse',
        },
        {
          category: 'Onkologie',
          title: 'Präzisionsmedizin Marktdynamik 2025',
          excerpt: 'Umfassende Analyse von Biomarker-gesteuerten Therapien und dem sich entwickelnden Onkologie-Behandlungsparadigma.',
          date: 'Branchenanalyse',
        },
      ],
    },
    stats: {
      title: 'Globale Wirkung',
      items: [
        { value: '50+', label: 'Abgedeckte Länder' },
        { value: '10+', label: 'Pharma-Kunden' },
        { value: '120+', label: 'Gelieferte Projekte' },
        { value: '15+', label: 'Jahre Erfahrung' },
      ],
    },
    testimonials: {
      title: 'Kundenperspektiven',
      subtitle: 'Vertraut von führenden Pharma- und Biotech-Unternehmen weltweit',
    },
    contact: {
      title: 'Kontaktieren Sie uns',
      subtitle: 'Bereit, Ihre Gesundheitsmarktstrategie zu transformieren? Unser Expertenteam steht Ihnen zur Verfügung.',
      cta: 'Beratung vereinbaren',
      email: 'admin@bionixus.com',
      headquarters: 'Wyoming, USA',
    },
    footer: {
      tagline: 'Strategische Gesundheitsintelligenz',
      copyright: '© 2024 BioNixus. Alle Rechte vorbehalten.',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
    },
  },
  fr: {
    nav: {
      services: 'Services',
      insights: 'Perspectives',
      about: 'À propos',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Études de Marché Santé',
      title: 'Intelligence Stratégique pour l\'Innovation en Santé',
      subtitle: 'Nous transformons des données de santé complexes en insights actionnables qui favorisent l\'excellence pharmaceutique et les résultats patients dans le monde entier.',
      cta: 'Découvrir Notre Expertise',
      ctaSecondary: 'Voir les Études de Cas',
    },
    services: {
      title: 'Notre Expertise',
      subtitle: 'Solutions complètes d\'études de marché santé adaptées à vos besoins stratégiques',
      items: [
        {
          title: 'Accès au Marché & Tarification',
          description: 'Naviguez dans des paysages de remboursement complexes avec des stratégies de prix basées sur les preuves.',
        },
        {
          title: 'Veille Concurrentielle',
          description: 'Gardez une longueur d\'avance avec une surveillance concurrentielle en temps réel et une analyse de pipeline.',
        },
        {
          title: 'Cartographie du Parcours Patient',
          description: 'Comprenez l\'expérience patient complète du diagnostic au traitement pour optimiser les résultats.',
        },
        {
          title: 'Analyse KOL & Parties Prenantes',
          description: 'Identifiez et engagez les leaders d\'opinion clés avec une cartographie d\'influence basée sur les données.',
        },
        {
          title: 'Optimisation des Essais Cliniques',
          description: 'Accélérez le développement avec des analyses de sélection de sites et des stratégies de recrutement.',
        },
        {
          title: 'Excellence de Lancement',
          description: 'Maximisez l\'impact du lancement avec des stratégies go-to-market intégrées et des prévisions.',
        },
      ],
    },
    insights: {
      title: 'Dernières Perspectives',
      subtitle: 'Leadership éclairé et perspectives de recherche de notre équipe mondiale',
      readMore: 'Lire l\'article',
      items: [
        {
          category: 'Accès au Marché',
          title: 'L\'Avenir des Accords de Santé Basés sur la Valeur en Europe',
          excerpt: 'Comment les modèles contractuels innovants remodèlent les stratégies de prix et d\'accès pharmaceutiques.',
          date: 'Rapport T4 2024',
        },
        {
          category: 'Santé Numérique',
          title: 'Découverte de Médicaments par l\'IA: Implications Marché',
          excerpt: 'Analyse du changement de paysage concurrentiel alors que l\'IA transforme la R&D pharmaceutique.',
          date: 'Note Stratégique',
        },
        {
          category: 'Oncologie',
          title: 'Dynamique du Marché de la Médecine de Précision 2025',
          excerpt: 'Analyse complète des thérapies guidées par biomarqueurs et du paradigme de traitement oncologique.',
          date: 'Analyse Sectorielle',
        },
      ],
    },
    stats: {
      title: 'Impact Mondial',
      items: [
        { value: '50+', label: 'Pays Couverts' },
        { value: '10+', label: 'Clients Pharma' },
        { value: '120+', label: 'Projets Livrés' },
        { value: '15+', label: 'Ans d\'Expérience' },
      ],
    },
    testimonials: {
      title: 'Perspectives Clients',
      subtitle: 'Approuvé par les principales entreprises pharmaceutiques et biotechnologiques mondiales',
    },
    contact: {
      title: 'Connectons-nous',
      subtitle: 'Prêt à transformer votre stratégie de marché santé? Notre équipe d\'experts est là pour vous aider.',
      cta: 'Planifier une Consultation',
      email: 'admin@bionixus.com',
      headquarters: 'Wyoming, USA',
    },
    footer: {
      tagline: 'Intelligence Stratégique en Santé',
      copyright: '© 2024 BioNixus. Tous droits réservés.',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation',
    },
  },
  es: {
    nav: {
      services: 'Servicios',
      insights: 'Perspectivas',
      about: 'Nosotros',
      contact: 'Contacto',
    },
    hero: {
      tagline: 'Investigación de Mercado Sanitario',
      title: 'Inteligencia Estratégica para la Innovación en Salud',
      subtitle: 'Transformamos datos sanitarios complejos en insights accionables que impulsan la excelencia farmacéutica y los resultados de los pacientes en todo el mundo.',
      cta: 'Explorar Nuestra Experiencia',
      ctaSecondary: 'Ver Casos de Estudio',
    },
    services: {
      title: 'Nuestra Experiencia',
      subtitle: 'Soluciones integrales de investigación de mercado sanitario adaptadas a sus necesidades estratégicas',
      items: [
        {
          title: 'Acceso al Mercado y Precios',
          description: 'Navegue por paisajes de reembolso complejos con estrategias de precios basadas en evidencia.',
        },
        {
          title: 'Inteligencia Competitiva',
          description: 'Manténgase adelante con monitoreo competitivo en tiempo real y análisis de pipeline.',
        },
        {
          title: 'Mapeo del Recorrido del Paciente',
          description: 'Comprenda la experiencia completa del paciente desde el diagnóstico hasta el tratamiento.',
        },
        {
          title: 'Análisis de KOL y Stakeholders',
          description: 'Identifique y comprometa a líderes de opinión clave con mapeo de influencia basado en datos.',
        },
        {
          title: 'Optimización de Ensayos Clínicos',
          description: 'Acelere el desarrollo con análisis de selección de sitios y estrategias de reclutamiento.',
        },
        {
          title: 'Excelencia en Lanzamiento',
          description: 'Maximice el impacto del lanzamiento con estrategias integradas go-to-market y pronósticos.',
        },
      ],
    },
    insights: {
      title: 'Últimas Perspectivas',
      subtitle: 'Liderazgo de pensamiento y perspectivas de investigación de nuestro equipo global',
      readMore: 'Leer Artículo',
      items: [
        {
          category: 'Acceso al Mercado',
          title: 'El Futuro de los Acuerdos de Salud Basados en Valor en Europa',
          excerpt: 'Cómo los modelos de contratación innovadores están remodelando las estrategias de precios farmacéuticos.',
          date: 'Informe Q4 2024',
        },
        {
          category: 'Salud Digital',
          title: 'Descubrimiento de Fármacos con IA: Implicaciones de Mercado',
          excerpt: 'Análisis del cambio en el panorama competitivo mientras la IA transforma la I+D farmacéutica.',
          date: 'Brief Estratégico',
        },
        {
          category: 'Oncología',
          title: 'Dinámica del Mercado de Medicina de Precisión 2025',
          excerpt: 'Análisis integral de terapias guiadas por biomarcadores y el paradigma de tratamiento oncológico.',
          date: 'Análisis Industrial',
        },
      ],
    },
    stats: {
      title: 'Impacto Global',
      items: [
        { value: '50+', label: 'Países Cubiertos' },
        { value: '10+', label: 'Clientes Pharma' },
        { value: '120+', label: 'Proyectos Entregados' },
        { value: '15+', label: 'Años de Experiencia' },
      ],
    },
    testimonials: {
      title: 'Perspectivas de Clientes',
      subtitle: 'Confiado por empresas farmacéuticas y biotecnológicas líderes en todo el mundo',
    },
    contact: {
      title: 'Conectemos',
      subtitle: '¿Listo para transformar su estrategia de mercado sanitario? Nuestro equipo de expertos está aquí para ayudar.',
      cta: 'Programar Consulta',
      email: 'admin@bionixus.com',
      headquarters: 'Wyoming, USA',
    },
    footer: {
      tagline: 'Inteligencia Estratégica en Salud',
      copyright: '© 2024 BioNixus. Todos los derechos reservados.',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
    },
  },
  zh: {
    nav: {
      services: '服务',
      insights: '洞察',
      about: '关于我们',
      contact: '联系我们',
    },
    hero: {
      tagline: '医疗健康市场研究',
      title: '医疗创新的战略智能',
      subtitle: '我们将复杂的医疗健康数据转化为可操作的洞察，推动全球制药卓越和患者成果。',
      cta: '探索我们的专业知识',
      ctaSecondary: '查看案例研究',
    },
    services: {
      title: '我们的专业领域',
      subtitle: '根据您的战略需求量身定制的全面医疗健康市场研究解决方案',
      items: [
        {
          title: '市场准入与定价',
          description: '通过基于证据的定价策略和付款方参与框架，驾驭复杂的报销环境。',
        },
        {
          title: '竞争情报',
          description: '通过实时竞争监控、管线分析和战略定位洞察保持领先。',
        },
        {
          title: '患者旅程映射',
          description: '了解从诊断到治疗的完整患者体验，以优化接触点和结果。',
        },
        {
          title: 'KOL与利益相关者分析',
          description: '通过数据驱动的影响力映射和关系策略识别和吸引关键意见领袖。',
        },
        {
          title: '临床试验优化',
          description: '通过站点选择分析、患者招募策略和方案优化加速开发。',
        },
        {
          title: '上市卓越',
          description: '通过整合的市场进入策略、预测和市场塑造计划最大化上市影响。',
        },
      ],
    },
    insights: {
      title: '最新洞察',
      subtitle: '来自我们全球团队的思想领导力和研究视角',
      readMore: '阅读文章',
      items: [
        {
          category: '市场准入',
          title: '欧洲基于价值的医疗协议的未来',
          excerpt: '创新合同模式如何重塑主要欧洲市场的制药定价和准入策略。',
          date: '2024年第四季度报告',
        },
        {
          category: '数字健康',
          title: 'AI驱动的药物发现：市场影响',
          excerpt: '分析人工智能改变制药研发和上市时间时的竞争格局变化。',
          date: '战略简报',
        },
        {
          category: '肿瘤学',
          title: '2025年精准医疗市场动态',
          excerpt: '对生物标志物驱动疗法和不断发展的肿瘤治疗范式的全面分析。',
          date: '行业分析',
        },
      ],
    },
    stats: {
      title: '全球影响',
      items: [
        { value: '50+', label: '覆盖国家' },
        { value: '10+', label: '制药客户' },
        { value: '120+', label: '交付项目' },
        { value: '15+', label: '年经验' },
      ],
    },
    testimonials: {
      title: '客户观点',
      subtitle: '受到全球领先制药和生物技术公司的信赖',
    },
    contact: {
      title: '让我们联系',
      subtitle: '准备好转变您的医疗健康市场战略了吗？我们的专家团队随时为您服务。',
      cta: '预约咨询',
      email: 'admin@bionixus.com',
      headquarters: 'Wyoming, USA',
    },
    footer: {
      tagline: '战略医疗健康智能',
      copyright: '© 2024 BioNixus。保留所有权利。',
      privacy: '隐私政策',
      terms: '服务条款',
    },
  },
  ar: {
    nav: {
      services: 'الخدمات',
      insights: 'الرؤى',
      about: 'من نحن',
      contact: 'اتصل بنا',
    },
    hero: {
      tagline: 'أبحاث سوق الرعاية الصحية',
      title: 'الذكاء الاستراتيجي للابتكار في الرعاية الصحية',
      subtitle: 'نحول بيانات الرعاية الصحية المعقدة إلى رؤى قابلة للتنفيذ تدفع التميز الصيدلاني ونتائج المرضى في جميع أنحاء العالم.',
      cta: 'استكشف خبرتنا',
      ctaSecondary: 'عرض دراسات الحالة',
    },
    services: {
      title: 'خبرتنا',
      subtitle: 'حلول شاملة لأبحاث سوق الرعاية الصحية مصممة وفقاً لاحتياجاتك الاستراتيجية',
      items: [
        {
          title: 'الوصول إلى السوق والتسعير',
          description: 'تنقل في مشهد التعويضات المعقد باستخدام استراتيجيات تسعير قائمة على الأدلة وأطر إشراك الدافعين.',
        },
        {
          title: 'الاستخبارات التنافسية',
          description: 'ابق في المقدمة مع المراقبة التنافسية في الوقت الفعلي وتحليل خط الأنابيب ورؤى الموقع الاستراتيجي.',
        },
        {
          title: 'رسم خريطة رحلة المريض',
          description: 'فهم تجربة المريض الكاملة من التشخيص إلى العلاج لتحسين نقاط الاتصال والنتائج.',
        },
        {
          title: 'تحليل قادة الرأي وأصحاب المصلحة',
          description: 'تحديد وإشراك قادة الرأي الرئيسيين من خلال رسم خرائط التأثير المستندة إلى البيانات واستراتيجيات العلاقات.',
        },
        {
          title: 'تحسين التجارب السريرية',
          description: 'تسريع التطوير من خلال تحليلات اختيار الموقع واستراتيجيات تجنيد المرضى وتحسين البروتوكول.',
        },
        {
          title: 'التميز في الإطلاق',
          description: 'تعظيم تأثير الإطلاق من خلال استراتيجيات الذهاب إلى السوق المتكاملة والتنبؤ ومبادرات تشكيل السوق.',
        },
      ],
    },
    insights: {
      title: 'أحدث الرؤى',
      subtitle: 'القيادة الفكرية ووجهات نظر البحث من فريقنا العالمي',
      readMore: 'اقرأ المقال',
      items: [
        {
          category: 'الوصول إلى السوق',
          title: 'مستقبل اتفاقيات الرعاية الصحية القائمة على القيمة في أوروبا',
          excerpt: 'كيف تعيد نماذج التعاقد المبتكرة تشكيل استراتيجيات التسعير والوصول الصيدلاني عبر الأسواق الأوروبية الرئيسية.',
          date: 'تقرير الربع الرابع 2024',
        },
        {
          category: 'الصحة الرقمية',
          title: 'اكتشاف الأدوية بالذكاء الاصطناعي: تداعيات السوق',
          excerpt: 'تحليل تحول المشهد التنافسي بينما يحول الذكاء الاصطناعي البحث والتطوير الصيدلاني ووقت الوصول إلى السوق.',
          date: 'موجز استراتيجي',
        },
        {
          category: 'الأورام',
          title: 'ديناميكيات سوق الطب الدقيق 2025',
          excerpt: 'تحليل شامل للعلاجات الموجهة بالمؤشرات الحيوية ونموذج علاج الأورام المتطور.',
          date: 'تحليل الصناعة',
        },
      ],
    },
    stats: {
      title: 'التأثير العالمي',
      items: [
        { value: '+50', label: 'دولة مغطاة' },
        { value: '+10', label: 'شركاء نجاح' },
        { value: '+120', label: 'مشروع منجز' },
        { value: '+15', label: 'سنة خبرة' },
      ],
    },
    testimonials: {
      title: 'آراء العملاء',
      subtitle: 'موثوق به من قبل شركات الأدوية والتكنولوجيا الحيوية الرائدة في جميع أنحاء العالم',
    },
    contact: {
      title: 'لنتواصل',
      subtitle: 'هل أنت مستعد لتحويل استراتيجية سوق الرعاية الصحية الخاصة بك؟ فريق خبرائنا هنا للمساعدة.',
      cta: 'حدد موعد استشارة',
      email: 'admin@bionixus.com',
      headquarters: 'Wyoming, USA',
    },
    footer: {
      tagline: 'الذكاء الاستراتيجي للرعاية الصحية',
      copyright: '© 2024 بيونيكسس. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
    },
  },
} as const;

export type TranslationKey = typeof translations['en'];
