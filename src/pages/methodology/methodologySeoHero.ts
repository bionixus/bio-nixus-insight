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
  }
> = {
  en: {
    seoTitle: 'Healthcare Market Research Methodology | BioNixus',
    seoDescription:
      'BioNixus methodology for healthcare market research: research design, sampling, fieldwork governance, data validation, ethics, and reporting standards across EMEA and GCC markets.',
    h1: 'Healthcare Market Research Methodology',
    intro:
      'Pharmaceutical decisions depend on evidence that is methodologically sound, operationally transparent, and aligned with the regulatory realities of each market. This page explains how BioNixus designs, executes, and quality-assures every healthcare market research programme we deliver across EMEA and GCC markets.',
    langMirrorLead: 'Localized methodology mirrors:',
    langMirrorMid:
      '. Align evidence plans with the market research insights hub at',
    langMirrorTail: 'or explore',
    marketResearchHubLabel: 'market research data insights hub',
    gfkAlternativeLabel: 'GfK alternative coverage in Egypt',
    ctaTitle: 'Discuss Your Research Requirements',
    ctaBody:
      'Whether you are planning a multi-market launch study, a single-country payer landscape assessment, or an ongoing competitive intelligence programme, our methodology adapts to the complexity and regulatory context of your project. Contact us to discuss how we can design a research programme that meets your evidence standards.',
    ctaButton: 'Get in touch',
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
    marketResearchHubLabel: 'Market research data insights Hub',
    gfkAlternativeLabel: 'GfK-Alternative Ägypten Marktforschungsabdeckung',
    ctaTitle: 'Forschungsanforderungen besprechen',
    ctaBody:
      'Ob Multi-Market-Launch-Analyse, Payer‑Landschaft in einem Land oder laufende Wettbewerbsintelligence — unsere Methodik passt sich Komplexität und regulatorischem Kontext Ihres Vorhabens an. Kontaktieren Sie uns für ein auf Ihre Evidence‑Standards zugeschnittenes Programm.',
    ctaButton: 'Kontakt aufnehmen',
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
    marketResearchHubLabel: 'investigación de mercado datos e insights Hub',
    gfkAlternativeLabel: 'alternativa tipo GfK para cobertura en Egipto',
    ctaTitle: 'Hablemos sobre sus necesidades analíticas',
    ctaBody:
      'Lanzamiento multi‑país, paisaje de pagadores nacional o Inteligencia competitiva continua: nuestra metodología se adapta a la complejidad y la normativa aplicable al proyecto y a sus niveles de evidencia. Contacte para personalizar.',
    ctaButton: 'Contactar',
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
  },
};
