import type { Language } from '@/lib/i18n';

export type HomeFaqItem = {
  question: string;
  answer: string;
};

export type HomeFaqBlock = {
  sectionTitle: string;
  items: HomeFaqItem[];
  ctaFullFaq: string;
  ctaProposal: string;
};

/** Visible home FAQ + FAQPage JSON-LD (keep in sync). */
export const HOME_FAQ_SECTION_ID = 'pharma-research-faq';

const byLanguage: Record<Language, HomeFaqBlock> = {
  en: {
    sectionTitle: 'Healthcare and pharmaceutical market research FAQs',
    ctaFullFaq: 'View the full FAQ library',
    ctaProposal: 'Request a tailored proposal',
    items: [
      {
        question: 'Which regions does BioNixus cover for pharmaceutical and healthcare market research?',
        answer:
          'BioNixus runs healthcare market research across Europe and the United Kingdom, the Middle East and North Africa, and the Gulf Cooperation Council (GCC), including priority markets such as Saudi Arabia, the United Arab Emirates, Egypt, Kuwait, and Qatar. Programs can be single-country, regional, or multi-market with comparable design where you need cross-country pharmaceutical insight.',
      },
      {
        question: 'What types of healthcare market research and pharmaceutical insights does BioNixus offer?',
        answer:
          'BioNixus delivers quantitative surveys, qualitative depth (for example in-depth interviews and advisory-style discussions), payer and market access diagnostics, hospital and pathway intelligence, KOL and stakeholder mapping, and evidence-oriented analytics for commercial, medical, and access teams. Engagements are scoped to the decisions you need—from positioning and demand to access barriers and launch tracking.',
      },
      {
        question: 'How does BioNixus support market access, payer, and health technology assessment (HTA) evidence needs?',
        answer:
          'BioNixus designs payer-facing research to clarify evidence expectations, pricing and reimbursement narratives, and value communication needs across European HTA systems and Middle East public and private payers. Deliverables are structured so teams can translate findings into access strategy, value dossier inputs, and cross-functional alignment—not generic slides without decision hooks.',
      },
      {
        question:
          'How does BioNixus align fieldwork with GDPR, EMA-aligned expectations, and Middle East regulatory requirements such as SFDA or ministry of health (MOH) frameworks?',
        answer:
          'Projects apply privacy-by-design data handling for GDPR, follow quality and ethics norms appropriate to healthcare research (including ICH-GCP awareness where relevant), and align operational controls to local requirements such as SFDA in Saudi Arabia and MOH or health authority expectations in the UAE and other GCC markets. Compliance posture is discussed during scoping so governance matches your risk and audit needs.',
      },
      {
        question: 'Can BioNixus run multi-country physician, payer, and hospital studies spanning Europe and the GCC?',
        answer:
          'Yes. BioNixus supports multi-country physician, payer, and hospital programs with consistent instruments where appropriate, plus locally adapted recruitment and moderation. The objective is defensible comparability across markets without forcing a one-size template that ignores local treatment, access, or regulatory context.',
      },
      {
        question: 'How quickly can we receive a proposal, and what influences healthcare market research study timelines?',
        answer:
          'After a short scope alignment on objectives, audiences, markets, and methods, BioNixus typically provides a proposal on a fast cadence. Timelines depend on incidence and screening, ethics or institutional requirements where applicable, survey length, qualitative depth, and field seasonality; milestones and dependencies are spelled out up front so teams can plan launches, advisory boards, and access workstreams realistically.',
      },
      {
        question: 'Where can pharmaceutical teams learn more about BioNixus methodology, case studies, and market insights?',
        answer:
          'Use the methodology area on this page for governance and quality standards, explore case studies for evidence of execution, and read the insights section for topical pharmaceutical and healthcare market commentary. For a deeper FAQ library or a tailored scope conversation, visit the dedicated FAQ page or request a proposal through the contact section.',
      },
    ],
  },
  de: {
    sectionTitle: 'FAQs: Gesundheits- und Pharmamarktforschung',
    ctaFullFaq: 'Zur vollständigen FAQ-Übersicht',
    ctaProposal: 'Individuelles Angebot anfragen',
    items: [
      {
        question: 'Welche Regionen deckt BioNixus in der Healthcare- und Pharmamarktforschung ab?',
        answer:
          'BioNixus führt Marktforschung im Gesundheitswesen in Europa und dem Vereinigten Königreich, im Nahen Osten und in Nordafrika sowie in den GCC-Staaten durch—u. a. Saudi-Arabien, die Vereinigten Arabischen Emirate, Ägypten, Kuwait und Katar. Programme können einländerisch, regional oder mehrländerisch mit vergleichbarem Design sein, wenn Sie länderübergreifende pharmazeutische Erkenntnisse benötigen.',
      },
      {
        question: 'Welche Forschungsarten und pharmazeutischen Insights bietet BioNixus?',
        answer:
          'BioNixus liefert quantitative Befragungen, qualitative Tiefe (z. B. Tiefeninterviews und Advisory-Formate), Payör- und Market-Access-Diagnostik, Krankenhaus- und Pfad-Intelligence sowie KOL- und Stakeholder-Mapping und evidenzorientierte Analysen für Commercial-, Medical- und Access-Teams. Die Mandate werden auf Ihre Entscheidungsfragen zugeschnitten—von Positionierung und Nachfrage bis zu Zugangsbarrieren und Launch-Tracking.',
      },
      {
        question: 'Wie unterstützt BioNixus Market Access, Payör und HTA-Evidenzbedarf?',
        answer:
          'Payör-fokussierte Designs klären Evidenz-Erwartungen, Preis- und Erstattungsnarrative sowie Value-Kommunikation in europäischen HTA-Kontexten und bei öffentlichen und privaten Payörn im Nahen Osten. Deliverables sind so strukturiert, dass Teams daraus Access-Strategie, Dossier-Inputs und funktionsübergreifende Abstimmung ableiten können.',
      },
      {
        question:
          'Wie richtet BioNixus Feldarbeit an DSGVO, EMA-orientierten Erwartungen und regulatorische Anforderungen im Nahen Osten (z. B. SFDA oder MOH) aus?',
        answer:
          'Projekte nutzen datenschutzorientiertes Handling gemäß DSGVO, Qualitäts- und Ethikstandards der Healthcare-Forschung (einschließlich ICH-GCP-Bewusstsein wo relevant) und operative Kontrollen passend zu lokalen Anforderungen wie SFDA in Saudi-Arabien sowie MOH- oder Health-Authority-Erwartungen in den VAE und weiteren GCC-Märkten. Die Compliance-Position wird in der Scope-Phase mit Ihrem Risiko- und Auditbedarf abgestimmt.',
      },
      {
        question: 'Kann BioNixus mehrländerische Ärzte-, Payör- und Krankenhausstudien zwischen Europa und dem GCC durchführen?',
        answer:
          'Ja. Mehrländerische Programme nutzen konsistente Instrumente wo sinnvoll und lokal angepasste Rekrutierung und Moderation. Ziel ist belastbare Vergleichbarkeit ohne starre Vorlagen, die lokale Therapie-, Access- oder Regulatorik ignorieren.',
      },
      {
        question: 'Wie schnell erhalten wir ein Angebot, und was beeinflusst Laufzeiten?',
        answer:
          'Nach kurzer Scope-Abstimmung zu Zielen, Zielgruppen, Märkten und Methoden liefert BioNixus typischerweise zügig ein Angebot. Laufzeiten hängen von Inzidenz und Screening, ggf. Ethik-/Institutionsanforderungen, Fragebogenumfang, qualitativer Tiefe und Feldsaisonalität ab; Meilensteine werden transparent benannt.',
      },
      {
        question: 'Wo finden Pharma-Teams mehr zu Methodik, Fallstudien und Insights?',
        answer:
          'Nutzen Sie den Methodik-Bereich auf dieser Seite, Fallstudien für Execution-Nachweise und den Insights-Bereich für aktuelle Marktkommentare. Für eine erweiterte FAQ-Liste oder ein maßgeschneidertes Gespräch besuchen Sie die FAQ-Seite oder fordern Sie ein Angebot über den Kontaktbereich an.',
      },
    ],
  },
  fr: {
    sectionTitle: 'FAQ — Recherche marché santé et pharma',
    ctaFullFaq: 'Voir toute la FAQ',
    ctaProposal: 'Demander une proposition sur mesure',
    items: [
      {
        question:
          'Quelles régions couvre BioNixus pour la recherche de marché pharmaceutique et des soins de santé ?',
        answer:
          'BioNixus conduit des études en Europe et au Royaume-Uni, au Moyen-Orient et en Afrique du Nord, et dans le Conseil de coopération du Golfe (CCG), notamment en Arabie saoudite, aux Émirats arabes unis, en Égypte, au Koweït et au Qatar. Les programmes peuvent être mono-pays, régionaux ou multi-pays avec un design comparable lorsque vous avez besoin d’insights transverses.',
      },
      {
        question: 'Quels types de recherche et d’insights pharmaceutiques propose BioNixus ?',
        answer:
          'BioNixus propose des enquêtes quantitatives, de la qualité (entretiens approfondis, formats consultatifs), des diagnostics payeurs et accès marché, de l’intelligence hôpitale et de parcours, du mapping KOL et parties prenantes, et des analyses orientées preuve pour les équipes commerciales, médicales et accès. Le cadrage suit vos décisions—positionnement, demande, barrières d’accès, suivi de lancement.',
      },
      {
        question: 'Comment BioNixus soutient-il l’accès marché, les payeurs et les besoins d’évidence HTA ?',
        answer:
          'La recherche payeur clarifie les attentes de preuve, les récits prix-remboursement et la communication de valeur en Europe et au Moyen-Orient. Les livrables sont structurés pour alimenter stratégie d’accès, dossiers et alignement transversal—pas seulement des slides génériques.',
      },
      {
        question:
          'Comment BioNixus aligne-t-il la collecte sur le RGPD, les attentes de type EMA et les cadres régionaux (SFDA, ministères de la santé) ?',
        answer:
          'Les projets appliquent une gouvernance données compatible RGPD, des standards qualité/éthique adaptés à la recherche santé (sensibilisation ICH-GCP si pertinent) et des contrôles alignés aux exigences locales (SFDA en Arabie saoudite, autorités de santé aux Émirats et dans d’autres pays du Golfe). La posture conformité est cadrée dès le scope selon vos besoins audit et risque.',
      },
      {
        question:
          'BioNixus peut-il mener des études multi-pays auprès de médecins, payeurs et hôpitaux entre l’Europe et le Golfe ?',
        answer:
          'Oui. Les programmes multi-pays combinent instruments cohérents quand c’est pertinent et recrutement/moderation locaux. L’objectif est une comparabilité défendable sans modèle unique inadapté au contexte local.',
      },
      {
        question: 'Quels délais pour une proposition et quels facteurs influencent le planning ?',
        answer:
          'Après alignement court sur objectifs, publics, marchés et méthodes, BioNixus délivre généralement une proposition rapidement. Les délais dépendent de l’incidence, du screening, d’éventuelles exigences éthiques, de la longueur du questionnaire, de la profondeur qualitative et de la saisonnalité ; les jalons sont explicités en amont.',
      },
      {
        question: 'Où en savoir plus sur la méthodologie, les études de cas et les insights ?',
        answer:
          'Consultez la section méthodologie sur cette page, les études de cas pour l’exécution, et la zone insights pour l’analyse marché. Pour une FAQ élargie ou un cadrage sur mesure, utilisez la page FAQ dédiée ou la section contact pour demander une proposition.',
      },
    ],
  },
  es: {
    sectionTitle: 'Preguntas frecuentes — Investigación de mercado sanitario y farmacéutico',
    ctaFullFaq: 'Ver todas las preguntas frecuentes',
    ctaProposal: 'Solicitar una propuesta a medida',
    items: [
      {
        question: '¿Qué regiones cubre BioNixus en investigación de mercado sanitario y farmacéutico?',
        answer:
          'BioNixus ejecuta investigación en Europa y Reino Unido, Oriente Medio y Norte de África, y el CCG, incluidos Arabia Saudí, Emiratos Árabes Unidos, Egipto, Kuwait y Qatar. Los programas pueden ser mono-país, regionales o multi-país con diseño comparable cuando necesite inteligencia transfronteriza.',
      },
      {
        question: '¿Qué tipos de investigación e insights farmacéuticos ofrece BioNixus?',
        answer:
          'BioNixus ofrece encuestas cuantitativas, profundidad cualitativa (entrevistas en profundidad y formatos tipo advisory), diagnóstico de pagadores y acceso a mercado, inteligencia hospitalaria y de trayectorias, mapeo de KOL y stakeholders, y analítica orientada a evidencia para equipos comerciales, médicos y de acceso. El alcance se adapta a sus decisiones: posicionamiento, demanda, barreras de acceso y seguimiento de lanzamiento.',
      },
      {
        question: '¿Cómo apoya BioNixus el acceso a mercado, pagadores y necesidades de evidencia HTA?',
        answer:
          'La investigación centrada en pagadores aclara expectativas de evidencia, narrativas de precio y reembolso y necesidades de comunicación de valor en Europa y Oriente Medio. Los entregables están estructurados para alimentar estrategia de acceso, insumos de dossier y alineación multifuncional.',
      },
      {
        question:
          '¿Cómo alinea BioNixus el trabajo de campo con RGPD, expectativas tipo EMA y requisitos locales (SFDA, ministerios de salud)?',
        answer:
          'Los proyectos aplican gobernanza de datos compatible con RGPD, estándares de calidad y ética propios de investigación sanitaria (conciencia ICH-GCP cuando aplica) y controles alineados a SFDA en Arabia Saudí y expectativas de autoridades en EAU y otros mercados del Golfo. La postura de cumplimiento se define en el alcance según riesgo y auditoría.',
      },
      {
        question: '¿Puede BioNixus ejecutar estudios multi-país con médicos, pagadores y hospitales entre Europa y el CCG?',
        answer:
          'Sí. Los programas multi-país combinan instrumentos coherentes cuando procede y reclutación y moderación local. El objetivo es comparabilidad sólida sin plantillas rígidas que ignoren el contexto local.',
      },
      {
        question: '¿Qué rapidez para una propuesta y qué factores marcan los plazos?',
        answer:
          'Tras un alineamiento breve de objetivos, audiencias, mercados y métodos, BioNixus suele entregar una propuesta con rapidez. Los plazos dependen de incidencia y cribado, requisitos éticos si aplica, longitud del cuestionario, profundidad cualitativa y estacionalidad de campo; los hitos se detallan al inicio.',
      },
      {
        question: '¿Dónde profundizar en metodología, casos de estudio e insights?',
        answer:
          'Use la sección de metodología en esta página, los casos de estudio como prueba de ejecución y la zona de insights para comentario de mercado. Para una FAQ más amplia o un alcance a medida, visite la página FAQ o solicite propuesta en contacto.',
      },
    ],
  },
  zh: {
    sectionTitle: '医疗健康与医药市场研究常见问题',
    ctaFullFaq: '查看完整常见问题',
    ctaProposal: '获取定制方案建议',
    items: [
      {
        question: 'BioNixus 的医药与医疗健康市场研究覆盖哪些地区？',
        answer:
          'BioNixus 在欧洲与英国、中东与北非以及海湾阿拉伯国家合作委员会（GCC）等市场开展研究，重点覆盖沙特阿拉伯、阿联酋、埃及、科威特与卡塔尔等。项目可单国、区域或多国并行设计，在需要跨国制药洞察时保持可比性与本地相关性。',
      },
      {
        question: 'BioNixus 提供哪些类型的医疗健康市场研究与制药洞察？',
        answer:
          'BioNixus 提供定量调研、定性深访与顾问式讨论、支付方与市场准入诊断、医院与诊疗路径情报、KOL 与利益相关方映射，以及面向商业、医学与准入团队的证据导向分析。研究范围围绕您的决策问题——从定位与需求到准入壁垒与上市后跟踪。',
      },
      {
        question: 'BioNixus 如何支持市场准入、支付方与卫生技术评估（HTA）相关证据需求？',
        answer:
          '通过面向支付方的研究设计，澄清证据预期、定价与报销叙事及价值沟通要点，覆盖欧洲 HTA 体系与中东公私支付环境。交付物结构化，便于团队转化为准入策略、价值档案输入与跨部门协同，而非泛泛的演示材料。',
      },
      {
        question: 'BioNixus 如何使项目符合 GDPR、EMA 相关预期以及中东监管（如 SFDA 或卫生部框架）？',
        answer:
          '项目采用符合 GDPR 的隐私设计数据处理，遵循医疗健康研究适用的质量与伦理规范（在相关场景兼顾 ICH-GCP 意识），并结合沙特 SFDA、阿联酋卫生当局及其他 GCC 市场的本地要求配置运营控制。合规基线在立项阶段与您的风险与审计需求对齐。',
      },
      {
        question: 'BioNixus 能否开展跨欧洲与海湾地区的多国医生、支付方与医院研究？',
        answer:
          '可以。多国项目在保证可比性的前提下使用一致化问卷或指南，并结合本地招募与主持策略，避免忽视各地治疗、准入与监管差异的“一刀切”模板。',
      },
      {
        question: '多久可收到方案，研究周期受哪些因素影响？',
        answer:
          '在目标、受众、市场与方法对齐后，BioNixus 通常能较快提供方案。周期取决于发病率与筛选、伦理或机构要求、问卷长度、定性深度及现场季节等因素；关键里程碑会在项目初期明确列出，便于与上市、顾问会与准入节奏衔接。',
      },
      {
        question: '制药团队可在哪里进一步了解 BioNixus 的方法论、案例与市场洞察？',
        answer:
          '请阅读本页的方法论介绍、案例研究以了解执行能力，并浏览洞察栏目获取专题评论。如需更完整 FAQ 或定制范围沟通，可访问独立 FAQ 页面或通过本页底部的联系表单提交方案需求。',
      },
    ],
  },
  ar: {
    sectionTitle: 'الأسئلة الشائعة — أبحاث السوق الصحية والدوائية',
    ctaFullFaq: 'عرض مكتبة الأسئلة الشائعة كاملة',
    ctaProposal: 'طلب عرض مخصص',
    items: [
      {
        question: 'ما هي المناطق التي تغطيها BioNixus في أبحاث السوق الصحية والدوائية؟',
        answer:
          'تنفّذ BioNixus أبحاث السوق الصحي عبر أوروبا والمملكة المتحدة والشرق الأوسط وشمال أفريقيا ودول مجلس التعاون الخليجي، بما في ذلك أسواق مثل السعودية والإمارات ومصر والكويت وقطر. يمكن أن تكون البرامج لدولة واحدة أو إقليمية أو متعددة الدول بتصميم قابل للمقارنة عند الحاجة إلى رؤى دوائية عابرة للحدود.',
      },
      {
        question: 'ما أنواع أبحاث السوق الصحية والرؤى الدوائية التي تقدمها BioNixus؟',
        answer:
          'تقدم BioNixus استبيانات كمية، تعمقاً نوعياً (مقابلات معمقة وجلسات استشارية)، تشخيصات للدافعين والوصول للسوق، ذكاءً مستنداً إلى المستشفيات ومسارات العلاج، خرائط لخبراء الرأي والأطراف ذات الصلة، وتحليلات موجهة بالأدلة للفرق التجارية والطبية والوصول. يُبنى النطاق على قراراتكم—من التموضع والطلب إلى حواجز الوصول ومتابعة الإطلاق.',
      },
      {
        question: 'كيف تدعم BioNixus احتياجات الوصول للسوق والدافعين وتقييم التكنولوجيا الصحية (HTA)؟',
        answer:
          'تُصمم الأبحاث الدافعة لتوضيح توقعات الأدلة وسرديات التسعير والتعويض ومتطلبات التواصل حول القيمة في أوروبا والشرق الأوسط. تُهيكل المخرجات لدعم استراتيجية الوصول ومدخلات الملفات والتوافق بين الوظائف وليس عروضاً عامة بلا قرار.',
      },
      {
        question: 'كيف تتماشى BioNixus مع GDPR وتوقعات EMA والمتطلبات التنظيمية في الشرق الأوسط مثل SFDA أو أطر وزارة الصحة؟',
        answer:
          'تطبق المشاريع حوكمة بيانات تراعي الخصوصية وفق GDPR، ومعايير جودة وأخلاقيات مناسبة لأبحاث الرعاية الصحية (مع مراعاة ICH-GCP عند الاقتضاء)، وضوابط تشغيلية متوافقة مع متطلبات SFDA في السعودية وتوقعات الجهات الصحية في الإمارات وأسواق خليجية أخرى. تُناقش الامتثال عند تحديد النطاق وفق احتياجات المخاطر والتدقيق.',
      },
      {
        question: 'هل يمكن لـ BioNixus تنفيذ دراسات متعددة الدول للأطباء والدافعين والمستشفيات بين أوروبا والخليج؟',
        answer:
          'نعم. تدعم البرامج متعددة الدول أدوات متسقة عند الحاجة مع توظيف وإدارة محلية. الهدف مقارنة دفاعية دون قوالب جامدة تتجاهل السياق العلاجي أو الوصولي أو التنظيمي المحلي.',
      },
      {
        question: 'ما سرعة الحصول على عرض، وما العوامل المؤثرة في الجداول الزمنية؟',
        answer:
          'بعد مواءمة قصيرة للأهداف والجمهور والأسواق والطرق، تقدم BioNixus عروضاً بوتيرة سريعة عادةً. تعتمد المدد على الانتشار والفلترة ومتطلبات الأخلاقيات إن وجدت وطول الاستبيان والعمق النوعي وموسمية الميدان؛ تُوضح المعالم مسبقاً.',
      },
      {
        question: 'أين يمكن للفرق الدوائية معرفة المزيد عن المنهجية ودراسات الحالة والرؤى؟',
        answer:
          'راجع قسم المنهجية في هذه الصفحة ودراسات الحالة للإثبات التنفيذي وقسم الرؤى للتعليق السوقي. للأسئلة الشائعة الأوسع أو نطاق مخصص، زر صفحة الأسئلة الشائعة أو تواصل عبر قسم الاتصال لطلب عرض.',
      },
    ],
  },
};

export function getHomePageFaq(language: Language): HomeFaqBlock {
  return byLanguage[language];
}
