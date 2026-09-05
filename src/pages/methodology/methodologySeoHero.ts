import type { Language } from '@/lib/i18n';

/** SEO + hero + CTA chrome for methodology routes — full page body lives in `./longforms/*`. */
export const METHODOLOGY_SEO_AND_HERO: Record<
  Language,
  {
    seoTitle: string;
    seoDescription: string;
    h1: string;
    intro: string;
    langMirrorLead: string;
    langMirrorMid: string;
    langMirrorTail: string;
    marketResearchHubLabel: string;
    gfkAlternativeLabel: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    heroEyebrow: string;
    healthcareProgrammes: string;
    asideAria: string;
    twoTheatres: string;
    sameBar: string;
    spineNote: string;
    healthcareLabel: string;
    healthcarePeople: string;
    healthcareLink: string;
    consumerLabel: string;
    consumerPeople: string;
    industriesLink: string;
    emailCta: string;
  }
> = {
  en: {
    seoTitle: 'Market Research Methodology | Healthcare & Consumer',
    seoDescription:
      'How BioNixus designs and quality-assures market research for healthcare and consumer brands: sampling, fieldwork, validation, ethics, and decision-ready reports.',
    h1: 'Market research methodology for healthcare and consumer industries',
    intro:
      'A commercial decision is only as good as the evidence under it — whether the brief is a named brand versus a competitor in hospital accounts, or a pack versus a rival on a traditional-trade shelf. Evidence is only trustworthy if you can see how it was made. This page is that look behind the curtain: how BioNixus designs each study, recruits and verifies the right respondents, governs fieldwork, validates the data, meets the ethics bar in every market, and reports findings a marketing or access team can act on. One governance spine. Two theatres: healthcare and consumer.',
    langMirrorLead: 'Localized methodology mirrors:',
    langMirrorMid:
      '. Align evidence plans with the market research insights hub at',
    langMirrorTail: 'or explore',
    marketResearchHubLabel: 'market research data insights hub',
    gfkAlternativeLabel: 'GfK alternative coverage in Egypt',
    ctaTitle: 'Discuss your research requirements',
    ctaBody:
      'A multi-market launch study, a single-country shopper or payer landscape, or an always-on competitive programme — the method flexes to the industry, the complexity, and the regulatory context in front of it. Tell us the decision you need to make and we will design the research that meets your evidence bar.',
    ctaButton: 'Get in touch',
    heroEyebrow: 'Healthcare · Consumer · One spine',
    healthcareProgrammes: 'Healthcare programmes',
    asideAria: 'Healthcare and consumer methodology theatres',
    twoTheatres: 'Two theatres',
    sameBar: 'Same quality bar. Different respondents.',
    spineNote: 'The brief names the industry. The spine — design, sample, field, validate, report — does not change.',
    healthcareLabel: 'Healthcare',
    healthcarePeople: 'Physicians, payers, KOLs, hospitals',
    healthcareLink: 'Healthcare market research',
    consumerLabel: 'Consumer',
    consumerPeople: 'Shoppers, buyers, retailers, trade',
    industriesLink: 'Industries we study',
    emailCta: 'Email admin@bionixus.com',
  },
  de: {
    seoTitle: 'Methodik der Gesundheitsmarktforschung | BioNixus',
    seoDescription:
      'BioNixus-Methodik für Gesundheitsmarktforschung: Forschungsdesign, Stichprobenplanung, Feldmanagement- und Qualitätsgovernance, Datenvalidierung, Ethik sowie Berichtsstandards in EMEA und im Golfraum.',
    h1: 'Methodik der Gesundheitsmarktforschung',
    intro:
      'Pharmaentscheidungen brauchen evidenzbasierte Erkenntnisse, die methodisch tragfähig, operativ nachvollziehbar und an die regulatorischen Rahmen jedes Landes angepasst sind. Auf dieser Seite erläutern wir, wie BioNixus jedes Gesundheitsmarktforschungsprogramm entwickelt, umsetzt und qualitätsgesichert — in europäischen und Golfstaaten‑Märkten.',
    langMirrorLead: 'Weitere Sprachvarianten dieser Methodik-Seite:',
    langMirrorMid:
      '. Ordnen Sie Ihre Evidence-Planung über den Marktforschungs-Insights‑Hub unter',
    langMirrorTail: 'oder vergleichen Sie',
    marketResearchHubLabel: 'Hub für Marktforschungsdaten und Insights',
    gfkAlternativeLabel: 'GfK-Alternative Ägypten Marktforschungsabdeckung',
    ctaTitle: 'Forschungsanforderungen besprechen',
    ctaBody:
      'Ob Multi-Market-Launch-Analyse, Payer‑Landschaft in einem Land oder laufende Wettbewerbsintelligence — unsere Methodik passt sich Komplexität und regulatorischem Kontext Ihres Vorhabens an. Kontaktieren Sie uns für ein auf Ihre Evidence‑Standards zugeschnittenes Programm.',
    ctaButton: 'Kontakt aufnehmen',
    heroEyebrow: 'Gesundheitswesen · Konsumgüter · Ein Gerüst',
    healthcareProgrammes: 'Gesundheitsprogramme',
    asideAria: 'Methodik-Bereiche Gesundheitswesen und Konsumgüter',
    twoTheatres: 'Zwei Felder',
    sameBar: 'Dieselbe Qualitätslatte. Andere Befragte.',
    spineNote: 'Das Briefing nennt die Branche. Das Gerüst — Design, Sample, Feld, Validierung, Bericht — bleibt.',
    healthcareLabel: 'Gesundheitswesen',
    healthcarePeople: 'Ärzte, Kostenträger, KOLs, Krankenhäuser',
    healthcareLink: 'Gesundheitsmarktforschung',
    consumerLabel: 'Konsumgüter',
    consumerPeople: 'Shopper, Einkäufer, Handel, Vertrieb',
    industriesLink: 'Branchen, die wir erforschen',
    emailCta: 'E-Mail an admin@bionixus.com',
  },
  fr: {
    seoTitle: 'Méthodologie des études de marché santé | BioNixus',
    seoDescription:
      'Méthodologie BioNixus pour les études de marché santé : conception, échantillonnage, gouvernance terrain, validation des données, éthique et standards de livrables en EMEA et dans les pays du Golfe.',
    h1: 'Méthodologie des études de marché santé',
    intro:
      'Les décisions pharmaceutiques reposent sur des preuves méthodologiquement solides, opérationnellement transparentes et alignées avec le cadre réglementaire local. Cette page décrit comment BioNixus conçoit, pilote et contrôle qualitativement chaque programme de recherche marché santé livré dans la zone EMEA et le Golfe.',
    langMirrorLead: 'Traductions disponibles du présent dossier méthodo :',
    langMirrorMid:
      '. Reliez votre plan probatoire au hub données & insights recherche marché sur',
    langMirrorTail: 'ou analysez par exemple',
    marketResearchHubLabel: 'plateforme données & insights recherche marché',
    gfkAlternativeLabel: 'alternative GfK / couverture recherche marché Égypte',
    ctaTitle: 'Parlons de votre besoin de recherche',
    ctaBody:
      'Études multi‑pays pré‑launch, panorama payeur mono‑pays ou veille concurrentielle continue — notre méthodologie s’adapte à la densité médicale, au contexte réglementaire et à vos niveaux de preuve. Contactez‑nous pour un dispositif sur mesure.',
    ctaButton: 'Écrivez‑nous',
    heroEyebrow: 'Santé · Grande consommation · Une même colonne',
    healthcareProgrammes: 'Programmes santé',
    asideAria: 'Théâtres méthodologiques santé et grande consommation',
    twoTheatres: 'Deux théâtres',
    sameBar: 'Le même niveau d’exigence. D’autres répondants.',
    spineNote: 'Le brief nomme le secteur. La colonne — conception, échantillon, terrain, validation, rapport — ne change pas.',
    healthcareLabel: 'Santé',
    healthcarePeople: 'Médecins, payeurs, KOL, hôpitaux',
    healthcareLink: 'Études de marché santé',
    consumerLabel: 'Grande consommation',
    consumerPeople: 'Shoppers, acheteurs, distributeurs, commerce',
    industriesLink: 'Secteurs que nous étudions',
    emailCta: 'Écrire à admin@bionixus.com',
  },
  es: {
    seoTitle: 'Metodología de investigación de mercado sanitario | BioNixus',
    seoDescription:
      'Metodología BioNixus para investigación de mercado sanitario: diseño, muestreo, gobierno del trabajo de campo, validación de datos, ética y estándares de reporting en EMEA y el Golfo.',
    h1: 'Metodología de investigación de mercado sanitario',
    intro:
      'Las decisiones en farmacia exigen evidencia metodológicamente sólida, operativa y alineada con la realidad regulatoria de cada país. Aquí describimos cómo BioNixus diseña, ejecuta y garantiza la calidad de cada programa de investigación de mercado sanitario en EMEA y el Golfo.',
    langMirrorLead: 'Otras versiones idiomáticas de esta metodología:',
    langMirrorMid:
      '. Alineé sus planes probatorios con el hub de datos e insights sobre investigación en',
    langMirrorTail: 'o compare la',
    marketResearchHubLabel: 'hub de datos e insights de investigación de mercado',
    gfkAlternativeLabel: 'alternativa tipo GfK para cobertura en Egipto',
    ctaTitle: 'Hablemos sobre sus necesidades analíticas',
    ctaBody:
      'Lanzamiento multi‑país, paisaje de pagadores nacional o Inteligencia competitiva continua: nuestra metodología se adapta a la complejidad y la normativa aplicable al proyecto y a sus niveles de evidencia. Contacte para personalizar.',
    ctaButton: 'Contactar',
    heroEyebrow: 'Salud · Consumo · Una misma columna',
    healthcareProgrammes: 'Programas de salud',
    asideAria: 'Escenarios metodológicos de salud y consumo',
    twoTheatres: 'Dos escenarios',
    sameBar: 'El mismo listón de calidad. Otros encuestados.',
    spineNote: 'El brief nombra el sector. La columna — diseño, muestra, campo, validación, informe — no cambia.',
    healthcareLabel: 'Salud',
    healthcarePeople: 'Médicos, pagadores, KOL, hospitales',
    healthcareLink: 'Investigación de mercado sanitario',
    consumerLabel: 'Consumo',
    consumerPeople: 'Shoppers, compradores, retailers, trade',
    industriesLink: 'Industrias que investigamos',
    emailCta: 'Escribir a admin@bionixus.com',
  },
  zh: {
    seoTitle: '医疗与健康市场研究方法 | BioNixus',
    seoDescription:
      'BioNixus 医疗健康市场研究方法：欧洲、中东非洲与海湾地区的研究设计、抽样、现场质量管理、数据验证、合规伦理与交付标准。',
    h1: '医疗健康市场研究方法',
    intro:
      '制药决策依赖于方法稳健、流程透明并能贴合各地监管语境的证据。本文说明 BioNixus 如何在欧洲、中东、非洲（EMEA）与海湾地区设计、交付并质控每一个医疗健康市场研究项目。',
    langMirrorLead: '本方法论页面的其它语言版本：',
    langMirrorMid: '。您也可通过市场研究与数据洞察中转页对齐证据路线图：',
    langMirrorTail: '，或参阅',
    marketResearchHubLabel: '市场研究数据与洞察专区',
    gfkAlternativeLabel: '埃及市场研究中的可比替代洞察（原 GfK 类数据源）',
    ctaTitle: '讨论您的研究合规与交付需求',
    ctaBody:
      '多国上市研究、单个国家医保方格局评估或持续竞争情报项目——我们都会根据复杂度、监管环境与证据阈值调整方法学与治理。请联系我们定制方案。',
    ctaButton: '联系 BioNixus',
    heroEyebrow: '医疗健康 · 消费品 · 同一骨架',
    healthcareProgrammes: '医疗健康项目',
    asideAria: '医疗健康与消费品研究方法场景',
    twoTheatres: '两个场景',
    sameBar: '同一质量门槛。不同受访者。',
    spineNote: '简报点明行业。骨架——设计、抽样、执行、校验、报告——不变。',
    healthcareLabel: '医疗健康',
    healthcarePeople: '医生、支付方、KOL、医院',
    healthcareLink: '医疗健康市场研究',
    consumerLabel: '消费品',
    consumerPeople: '购物者、采购、零售商、渠道',
    industriesLink: '我们研究的行业',
    emailCta: '发邮件至 admin@bionixus.com',
  },
  pt: {
    seoTitle: 'Metodologia de pesquisa de mercado em saúde | BioNixus',
    seoDescription:
      'Como a BioNixus projeta, executa e garante qualidade em pesquisa de mercado em saúde: desenho de estudo, amostragem, governança de campo, validação de dados, ética e relatórios orientados à decisão em EMEA e no Golfo.',
    h1: 'Metodologia de pesquisa de mercado em saúde',
    intro:
      'Uma decisão farmacêutica só é tão boa quanto a evidência que a sustenta — e essa evidência só é confiável quando o processo que a produziu é transparente. Esta página explica como a BioNixus desenha cada estudo, recruta e verifica os respondentes certos, governa o trabalho de campo, valida os dados, cumpre requisitos éticos e regulatórios em cada mercado e entrega achados acionáveis. Sem caixas-pretas.',
    langMirrorLead: 'Versões idiomáticas desta metodologia:',
    langMirrorMid:
      '. Alinhe planos de evidência ao hub de insights de pesquisa de mercado em',
    langMirrorTail: 'ou explore',
    marketResearchHubLabel: 'hub de dados e insights de pesquisa de mercado',
    gfkAlternativeLabel: 'cobertura alternativa de pesquisa de mercado no Egito',
    ctaTitle: 'Discuta os requisitos do seu estudo',
    ctaBody:
      'Um estudo de lançamento multi-país, um panorama de pagadores em um único mercado ou um programa contínuo de inteligência competitiva — o método adapta-se à complexidade e ao contexto regulatório. Conte-nos a decisão que precisa tomar e desenharemos a pesquisa que atende ao seu padrão de evidência.',
    ctaButton: 'Entre em contato',
    heroEyebrow: 'Saúde · Consumo · Uma mesma espinha',
    healthcareProgrammes: 'Programas de saúde',
    asideAria: 'Cenários metodológicos de saúde e consumo',
    twoTheatres: 'Dois cenários',
    sameBar: 'O mesmo padrão de qualidade. Outros respondentes.',
    spineNote: 'O brief nomeia o setor. A espinha — desenho, amostra, campo, validação, relatório — não muda.',
    healthcareLabel: 'Saúde',
    healthcarePeople: 'Médicos, pagadores, KOLs, hospitais',
    healthcareLink: 'Pesquisa de mercado em saúde',
    consumerLabel: 'Consumo',
    consumerPeople: 'Shoppers, compradores, retalhistas, trade',
    industriesLink: 'Setores que estudamos',
    emailCta: 'Enviar e-mail para admin@bionixus.com',
  },
  ru: {
    seoTitle: 'Методология исследований рынка здравоохранения | BioNixus',
    seoDescription:
      'Как BioNixus проектирует, проводит и контролирует качество исследований рынка здравоохранения: дизайн исследования, выборка, управление полевыми работами, валидация данных, этика и отчётность, ориентированная на решения, в EMEA и странах Персидского залива.',
    h1: 'Методология исследований рынка здравоохранения',
    intro:
      'Фармацевтическое решение настолько надёжно, насколько надёжны доказательства, на которых оно основано — а доказательства заслуживают доверия только тогда, когда виден весь процесс их получения. На этой странице описано, как BioNixus проектирует каждое исследование, подбирает и верифицирует респондентов, управляет полевыми работами, валидирует данные, соблюдает этические и регуляторные требования в каждой стране и готовит выводы, пригодные для действий. Без «чёрных ящиков».',
    langMirrorLead: 'Языковые версии этой методологии:',
    langMirrorMid:
      '. Согласуйте план доказательной базы с хабом аналитики исследований рынка на',
    langMirrorTail: 'или изучите',
    marketResearchHubLabel: 'хаб данных и аналитики исследований рынка',
    gfkAlternativeLabel: 'альтернативное покрытие исследований рынка в Египте',
    ctaTitle: 'Обсудите требования к исследованию',
    ctaBody:
      'Многонациональное исследование перед запуском, картирование плательщиков в одной стране или постоянная конкурентная аналитика — методология адаптируется к сложности и регуляторному контексту. Расскажите, какое решение вам нужно принять, и мы спроектируем исследование под ваш стандарт доказательности.',
    ctaButton: 'Связаться с нами',
    heroEyebrow: 'Здравоохранение · Потребление · Один каркас',
    healthcareProgrammes: 'Программы здравоохранения',
    asideAria: 'Методологические сцены здравоохранения и потребления',
    twoTheatres: 'Две сцены',
    sameBar: 'Та же планка качества. Другие респонденты.',
    spineNote: 'Бриф называет отрасль. Каркас — дизайн, выборка, поле, валидация, отчёт — не меняется.',
    healthcareLabel: 'Здравоохранение',
    healthcarePeople: 'Врачи, плательщики, KOL, больницы',
    healthcareLink: 'Исследования рынка здравоохранения',
    consumerLabel: 'Потребление',
    consumerPeople: 'Покупатели, байеры, ритейл, торговля',
    industriesLink: 'Отрасли, которые мы изучаем',
    emailCta: 'Написать на admin@bionixus.com',
  },
  ar: {
    seoTitle: 'منهجية أبحاث السوق الصحي | BioNixus',
    seoDescription:
      'تشرح هذه الصفحة منهجية BioNixus لأبحاث السوق الدوائي والصحي: تصميم الدراسات، العينات، حوكمة الميدان، مراجعة جودة البيانات، الامتثال الأخلاقي، ومعايير التسليم في أسواق أوروبا والشرق الأوسط وأفريقيا ودول الخليج.',
    h1: 'منهجية أبحاث السوق الصحي والدوائي',
    intro:
      'تعتمد قرارات قطاع الدواء على أدلة منهجية سليمة وشفّافة تشغيليًا ومتوافقة مع الإطارات التنظيمية في كل سوق. هنا نوضّح كيف نصمّم وننفّذ ونضمن جودة كل برنامج أبحاث سوق طبية ومخبرية تقدمه BioNixus عبر أوروبا ومنطقة الشرق الأوسط وشمال أفريقيا ومجلس التعاون الخليجي.',
    langMirrorLead: 'تتوفر هذه الورقة المنهجية باللغات:',
    langMirrorMid: '. لمزامنة مسار الأدلة، انتقلوا إلى',
    langMirrorTail: ' ولمراجعة',
    marketResearchHubLabel: 'صفحة المركز الموحد لمعلومات أبحاث السوق',
    gfkAlternativeLabel: 'تغطيات بديلة لأبحاث السوق الدوائي في مصر',
    ctaTitle: 'حدّدوا معنا متطلّبات الأدلة لديكم',
    ctaBody:
      'سياسات طرح متعدّدة الأسواق، أو تشخيص منظومة جهات الدفع في بلد واحد، أو برامج دورية للاستخبارات التنافسية — تتأقلم منهجيتنا مع التعقيد والسياق التنظيمي. تواصلوا لبناء برنامج يلبي معايير الأدلة لديكم.',
    ctaButton: 'تواصل الآن',
    heroEyebrow: 'الرعاية الصحية · الاستهلاك · عمود واحد',
    healthcareProgrammes: 'برامج الرعاية الصحية',
    asideAria: 'مسارح منهجية الرعاية الصحية والاستهلاك',
    twoTheatres: 'مسارحان',
    sameBar: 'العتبة نفسها. مستجيبون مختلفون.',
    spineNote: 'الموجز يسمّي القطاع. العمود — التصميم، العينة، الميدان، التحقق، التقرير — لا يتغيّر.',
    healthcareLabel: 'الرعاية الصحية',
    healthcarePeople: 'أطباء، جهات دفع، خبراء رأي، مستشفيات',
    healthcareLink: 'أبحاث سوق الرعاية الصحية',
    consumerLabel: 'الاستهلاك',
    consumerPeople: 'متسوقون، مشترين، تجزئة، تجارة',
    industriesLink: 'القطاعات التي ندرسها',
    emailCta: 'راسلوا admin@bionixus.com',
  },
};
