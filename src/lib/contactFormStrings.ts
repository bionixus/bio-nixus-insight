/**
 * Contact form copy that sits outside the `t.contact` i18n bundle.
 *
 * Select/checkbox options are `value -> label` maps on purpose: the **value** is
 * submitted to Formspree and copied into the fallback mailto, so it stays English
 * for lead triage, while the **label** is what the visitor reads.
 *
 * English is the complete shape; every other locale is deep-merged over it, so a
 * missing key degrades to English rather than crashing the form.
 */
import type { Language } from './i18n';

export type ContactFormStrings = {
  researchInterestLegend: string;
  /** Keys are the submitted values and must not be translated. */
  researchInterestOptions: Record<string, string>;
  timelineLabel: string;
  selectTimeline: string;
  timelineOptions: Record<string, string>;
  budgetLabel: string;
  selectBudget: string;
  budgetOptions: Record<string, string>;
  referralLabel: string;
  selectReferral: string;
  referralOptions: Record<string, string>;
  phoneFieldLabel: string;
  regionalRepresentationLabel: string;
  regionalOffices: [string, string, string, string];
  premiumFormSubcopy: string;
  premiumEyebrow: string;
  premiumHeading: string;
  premiumIntro: string;
  consentBefore: string;
  consentPrivacyLabel: string;
  consentAfter: string;
  /** `/contact` page chrome that sits outside the form itself. */
  page: {
    seoTitle: string;
    seoDescription: string;
    breadcrumbHome: string;
    breadcrumbContact: string;
    jsonLdName: string;
    primaryCta: string;
    secondaryCta: string;
    directLinePrompt: string;
    caseStudiesLink: string;
  };
};

type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };

const en: ContactFormStrings = {
  researchInterestLegend: 'Research Interest',
  researchInterestOptions: {
    Quantitative: 'Quantitative',
    Qualitative: 'Qualitative',
    'Market Access': 'Market Access',
    'KOL Mapping': 'KOL Mapping',
    'Competitive Intelligence': 'Competitive Intelligence',
    'Clinical Trial Support': 'Clinical Trial Support',
  },
  timelineLabel: 'Project Timeline',
  selectTimeline: 'Select timeline…',
  timelineOptions: {
    'Less than 1 month': 'Less than 1 month',
    '1-3 months': '1–3 months',
    '3-6 months': '3–6 months',
    '6+ months': '6+ months',
  },
  budgetLabel: 'Indicative Budget',
  selectBudget: 'Select budget…',
  budgetOptions: {
    'Under £25k': 'Under £25k',
    '£25k-75k': '£25k–75k',
    '£75k-150k': '£75k–150k',
    '£150k+': '£150k+',
    'Not sure yet': 'Not sure yet',
  },
  referralLabel: 'How did you hear about us?',
  selectReferral: 'Select…',
  referralOptions: {
    'Google Search': 'Google Search',
    LinkedIn: 'LinkedIn',
    Referral: 'Referral',
    'Conference/Event': 'Conference / Event',
    'Industry Publication': 'Industry Publication',
    Other: 'Other',
  },
  phoneFieldLabel: 'Phone',
  regionalRepresentationLabel: 'Regional representation',
  regionalOffices: ['Dubai, UAE', 'Jeddah, Saudi Arabia', 'Kuwait City, Kuwait', 'Cairo, Egypt'],
  premiumFormSubcopy:
    'Tell us the markets, sector, and decision at stake. We respond with a scoped plan — typically within one business day.',
  premiumEyebrow: 'Direct channels',
  premiumHeading: 'Talk with the research team',
  premiumIntro:
    'BioNixus delivers market research across healthcare, pharma, B2B, and B2C in EMEA, the Americas, and APAC. Prefer email or a call before the form? Reach headquarters and regional desks below.',
  consentBefore: 'I agree to BioNixus processing my information per the ',
  consentPrivacyLabel: 'Privacy Policy',
  consentAfter: '.',
  page: {
    seoTitle: 'Contact BioNixus | Global Market Research Company',
    seoDescription:
      'Contact BioNixus for market research across healthcare, pharma, B2B, and B2C in EMEA, the Americas, and APAC. Share your brief and receive a scoped proposal within one business day.',
    breadcrumbHome: 'Home',
    breadcrumbContact: 'Contact',
    jsonLdName: 'Contact BioNixus',
    primaryCta: 'Request a proposal',
    secondaryCta: 'Email the team',
    directLinePrompt: 'Prefer a direct line?',
    caseStudiesLink: 'Review case studies',
  },
};

const overrides: Record<Exclude<Language, 'en'>, DeepPartial<ContactFormStrings>> = {
  de: {
    researchInterestLegend: 'Forschungsinteresse',
    researchInterestOptions: {
      Quantitative: 'Quantitativ',
      Qualitative: 'Qualitativ',
      'Market Access': 'Marktzugang',
      'KOL Mapping': 'KOL-Mapping',
      'Competitive Intelligence': 'Wettbewerbsanalyse',
      'Clinical Trial Support': 'Unterstützung klinischer Studien',
    },
    timelineLabel: 'Projektzeitraum',
    selectTimeline: 'Zeitraum wählen…',
    timelineOptions: {
      'Less than 1 month': 'Weniger als 1 Monat',
      '1-3 months': '1–3 Monate',
      '3-6 months': '3–6 Monate',
      '6+ months': 'Mehr als 6 Monate',
    },
    budgetLabel: 'Indikatives Budget',
    selectBudget: 'Budget wählen…',
    budgetOptions: {
      'Under £25k': 'Unter 25.000 £',
      '£25k-75k': '25.000–75.000 £',
      '£75k-150k': '75.000–150.000 £',
      '£150k+': 'Über 150.000 £',
      'Not sure yet': 'Noch unklar',
    },
    referralLabel: 'Wie haben Sie von uns erfahren?',
    selectReferral: 'Auswählen…',
    referralOptions: {
      'Google Search': 'Google-Suche',
      LinkedIn: 'LinkedIn',
      Referral: 'Empfehlung',
      'Conference/Event': 'Konferenz / Veranstaltung',
      'Industry Publication': 'Fachpublikation',
      Other: 'Sonstiges',
    },
    phoneFieldLabel: 'Telefon',
    regionalRepresentationLabel: 'Regionale Vertretung',
    regionalOffices: [
      'Dubai, VAE',
      'Dschidda, Saudi-Arabien',
      'Kuwait-Stadt, Kuwait',
      'Kairo, Ägypten',
    ],
    premiumFormSubcopy:
      'Nennen Sie uns Markt, Indikation und die anstehende Entscheidung. Sie erhalten einen abgegrenzten Projektplan — in der Regel innerhalb eines Werktags.',
    premiumEyebrow: 'Direkte Kontaktwege',
    premiumHeading: 'Sprechen Sie mit dem Research-Team',
    premiumIntro:
      'Lieber eine E-Mail oder ein Telefonat vor dem Formular? Erreichen Sie die BioNixus-Zentrale und die regionalen Büros unten.',
    consentBefore: 'Ich stimme zu, dass BioNixus meine Daten gemäß der ',
    consentPrivacyLabel: 'Datenschutzerklärung',
    consentAfter: ' verarbeitet.',
    page: {
      seoTitle: 'BioNixus kontaktieren | Angebot für Gesundheitsmarktforschung',
      seoDescription: 'Kontaktieren Sie BioNixus für pharmazeutische Marktforschung in den USA, Europa, im GCC und in der MENA-Region. Schildern Sie Ihr Briefing und erhalten Sie innerhalb eines Werktags ein abgegrenztes Angebot.',
      breadcrumbHome: 'Startseite',
      breadcrumbContact: 'Kontakt',
      jsonLdName: 'BioNixus kontaktieren',
      primaryCta: 'Angebot anfordern',
      secondaryCta: 'Team per E-Mail kontaktieren',
      directLinePrompt: 'Lieber direkt sprechen?',
      caseStudiesLink: 'Fallstudien ansehen',
    },
  },
  fr: {
    researchInterestLegend: 'Domaine de recherche',
    researchInterestOptions: {
      Quantitative: 'Quantitatif',
      Qualitative: 'Qualitatif',
      'Market Access': 'Accès au marché',
      'KOL Mapping': 'Cartographie des KOL',
      'Competitive Intelligence': 'Veille concurrentielle',
      'Clinical Trial Support': 'Appui aux essais cliniques',
    },
    timelineLabel: 'Calendrier du projet',
    selectTimeline: 'Choisir un délai…',
    timelineOptions: {
      'Less than 1 month': 'Moins d’un mois',
      '1-3 months': '1 à 3 mois',
      '3-6 months': '3 à 6 mois',
      '6+ months': 'Plus de 6 mois',
    },
    budgetLabel: 'Budget indicatif',
    selectBudget: 'Choisir un budget…',
    budgetOptions: {
      'Under £25k': 'Moins de 25 000 £',
      '£25k-75k': '25 000 – 75 000 £',
      '£75k-150k': '75 000 – 150 000 £',
      '£150k+': 'Plus de 150 000 £',
      'Not sure yet': 'Pas encore défini',
    },
    referralLabel: 'Comment avez-vous connu BioNixus ?',
    selectReferral: 'Sélectionner…',
    referralOptions: {
      'Google Search': 'Recherche Google',
      LinkedIn: 'LinkedIn',
      Referral: 'Recommandation',
      'Conference/Event': 'Conférence / événement',
      'Industry Publication': 'Publication sectorielle',
      Other: 'Autre',
    },
    phoneFieldLabel: 'Téléphone',
    regionalRepresentationLabel: 'Représentation régionale',
    regionalOffices: [
      'Dubaï, Émirats arabes unis',
      'Djeddah, Arabie saoudite',
      'Koweït, Koweït',
      'Le Caire, Égypte',
    ],
    premiumFormSubcopy:
      'Indiquez-nous le marché, l’aire thérapeutique et la décision en jeu. Nous répondons avec un plan cadré — généralement sous un jour ouvré.',
    premiumEyebrow: 'Contacts directs',
    premiumHeading: 'Échangez avec l’équipe de recherche',
    premiumIntro:
      'Vous préférez un e-mail ou un appel avant le formulaire ? Contactez le siège de BioNixus et les bureaux régionaux ci-dessous.',
    consentBefore: 'J’accepte que BioNixus traite mes informations conformément à la ',
    consentPrivacyLabel: 'politique de confidentialité',
    consentAfter: '.',
    page: {
      seoTitle: 'Contacter BioNixus | Proposition d’études de marché santé',
      seoDescription: 'Contactez BioNixus pour des études de marché pharmaceutiques aux États-Unis, en Europe, dans le CCG et la région MENA. Transmettez votre brief et recevez une proposition cadrée sous un jour ouvré.',
      breadcrumbHome: 'Accueil',
      breadcrumbContact: 'Contact',
      jsonLdName: 'Contacter BioNixus',
      primaryCta: 'Demander une proposition',
      secondaryCta: 'Écrire à l’équipe',
      directLinePrompt: 'Vous préférez un contact direct ?',
      caseStudiesLink: 'Consulter les études de cas',
    },
  },
  es: {
    researchInterestLegend: 'Área de investigación',
    researchInterestOptions: {
      Quantitative: 'Cuantitativa',
      Qualitative: 'Cualitativa',
      'Market Access': 'Acceso al mercado',
      'KOL Mapping': 'Mapeo de KOL',
      'Competitive Intelligence': 'Inteligencia competitiva',
      'Clinical Trial Support': 'Apoyo a ensayos clínicos',
    },
    timelineLabel: 'Calendario del proyecto',
    selectTimeline: 'Seleccione un plazo…',
    timelineOptions: {
      'Less than 1 month': 'Menos de 1 mes',
      '1-3 months': '1 a 3 meses',
      '3-6 months': '3 a 6 meses',
      '6+ months': 'Más de 6 meses',
    },
    budgetLabel: 'Presupuesto indicativo',
    selectBudget: 'Seleccione un presupuesto…',
    budgetOptions: {
      'Under £25k': 'Menos de 25.000 £',
      '£25k-75k': '25.000 – 75.000 £',
      '£75k-150k': '75.000 – 150.000 £',
      '£150k+': 'Más de 150.000 £',
      'Not sure yet': 'Aún por definir',
    },
    referralLabel: '¿Cómo nos conoció?',
    selectReferral: 'Seleccione…',
    referralOptions: {
      'Google Search': 'Búsqueda en Google',
      LinkedIn: 'LinkedIn',
      Referral: 'Recomendación',
      'Conference/Event': 'Congreso / evento',
      'Industry Publication': 'Publicación sectorial',
      Other: 'Otro',
    },
    phoneFieldLabel: 'Teléfono',
    regionalRepresentationLabel: 'Representación regional',
    regionalOffices: [
      'Dubái, Emiratos Árabes Unidos',
      'Yeda, Arabia Saudí',
      'Ciudad de Kuwait, Kuwait',
      'El Cairo, Egipto',
    ],
    premiumFormSubcopy:
      'Cuéntenos el mercado, el área terapéutica y la decisión en juego. Respondemos con un plan acotado, normalmente en un día hábil.',
    premiumEyebrow: 'Canales directos',
    premiumHeading: 'Hable con el equipo de investigación',
    premiumIntro:
      '¿Prefiere un correo o una llamada antes del formulario? Contacte con la sede de BioNixus y las oficinas regionales que figuran abajo.',
    consentBefore: 'Acepto que BioNixus trate mis datos conforme a la ',
    consentPrivacyLabel: 'política de privacidad',
    consentAfter: '.',
    page: {
      seoTitle: 'Contactar con BioNixus | Propuesta de investigación sanitaria',
      seoDescription: 'Contacte con BioNixus para investigación de mercado farmacéutico en EE. UU., Europa, el CCG y la región MENA. Comparta su brief y reciba una propuesta acotada en un día hábil.',
      breadcrumbHome: 'Inicio',
      breadcrumbContact: 'Contacto',
      jsonLdName: 'Contactar con BioNixus',
      primaryCta: 'Solicitar propuesta',
      secondaryCta: 'Escribir al equipo',
      directLinePrompt: '¿Prefiere una línea directa?',
      caseStudiesLink: 'Ver casos de éxito',
    },
  },
  pt: {
    researchInterestLegend: 'Área de pesquisa',
    researchInterestOptions: {
      Quantitative: 'Quantitativa',
      Qualitative: 'Qualitativa',
      'Market Access': 'Acesso ao mercado',
      'KOL Mapping': 'Mapeamento de KOL',
      'Competitive Intelligence': 'Inteligência competitiva',
      'Clinical Trial Support': 'Apoio a ensaios clínicos',
    },
    timelineLabel: 'Cronograma do projeto',
    selectTimeline: 'Selecione o prazo…',
    timelineOptions: {
      'Less than 1 month': 'Menos de 1 mês',
      '1-3 months': '1 a 3 meses',
      '3-6 months': '3 a 6 meses',
      '6+ months': 'Mais de 6 meses',
    },
    budgetLabel: 'Orçamento indicativo',
    selectBudget: 'Selecione o orçamento…',
    budgetOptions: {
      'Under £25k': 'Menos de £25 mil',
      '£25k-75k': '£25 mil – £75 mil',
      '£75k-150k': '£75 mil – £150 mil',
      '£150k+': 'Mais de £150 mil',
      'Not sure yet': 'Ainda a definir',
    },
    referralLabel: 'Como ficou a saber de nós?',
    selectReferral: 'Selecione…',
    referralOptions: {
      'Google Search': 'Pesquisa no Google',
      LinkedIn: 'LinkedIn',
      Referral: 'Indicação',
      'Conference/Event': 'Congresso / evento',
      'Industry Publication': 'Publicação setorial',
      Other: 'Outro',
    },
    phoneFieldLabel: 'Telefone',
    regionalRepresentationLabel: 'Representação regional',
    regionalOffices: [
      'Dubai, Emirados Árabes Unidos',
      'Jeddah, Arábia Saudita',
      'Cidade do Kuwait, Kuwait',
      'Cairo, Egito',
    ],
    premiumFormSubcopy:
      'Diga-nos o mercado, a área terapêutica e a decisão em causa. Respondemos com um plano delimitado — normalmente dentro de um dia útil.',
    premiumEyebrow: 'Canais diretos',
    premiumHeading: 'Fale com a equipa de pesquisa',
    premiumIntro:
      'Prefere e-mail ou telefone antes do formulário? Contacte a sede da BioNixus e os escritórios regionais abaixo.',
    consentBefore: 'Concordo que a BioNixus trate os meus dados de acordo com a ',
    consentPrivacyLabel: 'política de privacidade',
    consentAfter: '.',
    page: {
      seoTitle: 'Contactar a BioNixus | Proposta de pesquisa em saúde',
      seoDescription: 'Contacte a BioNixus para pesquisa de mercado farmacêutico nos EUA, Europa, CCG e região MENA. Partilhe o seu briefing e receba uma proposta delimitada dentro de um dia útil.',
      breadcrumbHome: 'Início',
      breadcrumbContact: 'Contacto',
      jsonLdName: 'Contactar a BioNixus',
      primaryCta: 'Solicitar proposta',
      secondaryCta: 'Escrever à equipa',
      directLinePrompt: 'Prefere falar diretamente?',
      caseStudiesLink: 'Ver estudos de caso',
    },
  },
  ru: {
    researchInterestLegend: 'Направление исследования',
    researchInterestOptions: {
      Quantitative: 'Количественное',
      Qualitative: 'Качественное',
      'Market Access': 'Доступ на рынок',
      'KOL Mapping': 'Картирование ключевых экспертов',
      'Competitive Intelligence': 'Конкурентная разведка',
      'Clinical Trial Support': 'Поддержка клинических исследований',
    },
    timelineLabel: 'Сроки проекта',
    selectTimeline: 'Выберите срок…',
    timelineOptions: {
      'Less than 1 month': 'Менее 1 месяца',
      '1-3 months': '1–3 месяца',
      '3-6 months': '3–6 месяцев',
      '6+ months': 'Более 6 месяцев',
    },
    budgetLabel: 'Ориентировочный бюджет',
    selectBudget: 'Выберите бюджет…',
    budgetOptions: {
      'Under £25k': 'До 25 000 £',
      '£25k-75k': '25 000 – 75 000 £',
      '£75k-150k': '75 000 – 150 000 £',
      '£150k+': 'Более 150 000 £',
      'Not sure yet': 'Пока не определён',
    },
    referralLabel: 'Откуда вы о нас узнали?',
    selectReferral: 'Выберите…',
    referralOptions: {
      'Google Search': 'Поиск Google',
      LinkedIn: 'LinkedIn',
      Referral: 'Рекомендация',
      'Conference/Event': 'Конференция / мероприятие',
      'Industry Publication': 'Отраслевое издание',
      Other: 'Другое',
    },
    phoneFieldLabel: 'Телефон',
    regionalRepresentationLabel: 'Региональное представительство',
    regionalOffices: [
      'Дубай, ОАЭ',
      'Джидда, Саудовская Аравия',
      'Эль-Кувейт, Кувейт',
      'Каир, Египет',
    ],
    premiumFormSubcopy:
      'Расскажите о рынке, терапевтической области и предстоящем решении. Мы ответим планом работ с чёткими границами — как правило, в течение одного рабочего дня.',
    premiumEyebrow: 'Прямые контакты',
    premiumHeading: 'Свяжитесь с исследовательской командой',
    premiumIntro:
      'Предпочитаете написать или позвонить до заполнения формы? Ниже указаны штаб-квартира BioNixus и региональные офисы.',
    consentBefore: 'Я согласен на обработку моих данных компанией BioNixus в соответствии с ',
    consentPrivacyLabel: 'политикой конфиденциальности',
    consentAfter: '.',
    page: {
      seoTitle: 'Связаться с BioNixus | Предложение по исследованию рынка',
      seoDescription: 'Свяжитесь с BioNixus для исследований фармацевтического рынка в США, Европе, странах Персидского залива и регионе MENA. Пришлите бриф и получите проработанное предложение в течение рабочего дня.',
      breadcrumbHome: 'Главная',
      breadcrumbContact: 'Контакты',
      jsonLdName: 'Связаться с BioNixus',
      primaryCta: 'Запросить предложение',
      secondaryCta: 'Написать команде',
      directLinePrompt: 'Предпочитаете связаться напрямую?',
      caseStudiesLink: 'Смотреть кейсы',
    },
  },
  zh: {
    researchInterestLegend: '研究方向',
    researchInterestOptions: {
      Quantitative: '定量研究',
      Qualitative: '定性研究',
      'Market Access': '市场准入',
      'KOL Mapping': '关键意见领袖图谱',
      'Competitive Intelligence': '竞争情报',
      'Clinical Trial Support': '临床试验支持',
    },
    timelineLabel: '项目周期',
    selectTimeline: '请选择周期…',
    timelineOptions: {
      'Less than 1 month': '少于一个月',
      '1-3 months': '一至三个月',
      '3-6 months': '三至六个月',
      '6+ months': '六个月以上',
    },
    budgetLabel: '预估预算',
    selectBudget: '请选择预算…',
    budgetOptions: {
      'Under £25k': '二万五千英镑以下',
      '£25k-75k': '二万五千至七万五千英镑',
      '£75k-150k': '七万五千至十五万英镑',
      '£150k+': '十五万英镑以上',
      'Not sure yet': '尚未确定',
    },
    referralLabel: '您从何处了解到我们？',
    selectReferral: '请选择…',
    referralOptions: {
      'Google Search': '谷歌搜索',
      LinkedIn: '领英',
      Referral: '他人推荐',
      'Conference/Event': '会议或活动',
      'Industry Publication': '行业刊物',
      Other: '其他',
    },
    phoneFieldLabel: '电话',
    regionalRepresentationLabel: '区域代表处',
    regionalOffices: ['阿联酋迪拜', '沙特阿拉伯吉达', '科威特科威特城', '埃及开罗'],
    premiumFormSubcopy:
      '请告诉我们目标市场、治疗领域以及需要支持的决策。我们通常会在一个工作日内回复一份明确界定范围的研究方案。',
    premiumEyebrow: '直接联系方式',
    premiumHeading: '与研究团队直接沟通',
    premiumIntro:
      '希望在填写表单前先发邮件或通话？请通过下方的 BioNixus 总部与各区域办公室与我们联系。',
    consentBefore: '我同意 BioNixus 依据',
    consentPrivacyLabel: '隐私政策',
    consentAfter: '处理我的个人信息。',
    page: {
      seoTitle: '联系 BioNixus | 医疗健康市场研究方案',
      seoDescription: '就美国、欧洲、海湾国家与中东北非地区的医药市场研究联系 BioNixus。提交您的需求说明，一个工作日内即可获得明确界定范围的研究方案。',
      breadcrumbHome: '首页',
      breadcrumbContact: '联系我们',
      jsonLdName: '联系 BioNixus',
      primaryCta: '索取研究方案',
      secondaryCta: '发送邮件给团队',
      directLinePrompt: '希望直接联系？',
      caseStudiesLink: '查看案例研究',
    },
  },
  ar: {
    researchInterestLegend: 'مجال البحث',
    researchInterestOptions: {
      Quantitative: 'بحث كمي',
      Qualitative: 'بحث نوعي',
      'Market Access': 'الوصول إلى السوق',
      'KOL Mapping': 'رسم خريطة قادة الرأي',
      'Competitive Intelligence': 'استخبارات تنافسية',
      'Clinical Trial Support': 'دعم التجارب السريرية',
    },
    timelineLabel: 'الجدول الزمني للمشروع',
    selectTimeline: 'اختر المدة…',
    timelineOptions: {
      'Less than 1 month': 'أقل من شهر',
      '1-3 months': 'من شهر إلى ثلاثة أشهر',
      '3-6 months': 'من ثلاثة إلى ستة أشهر',
      '6+ months': 'أكثر من ستة أشهر',
    },
    budgetLabel: 'الميزانية التقديرية',
    selectBudget: 'اختر الميزانية…',
    budgetOptions: {
      'Under £25k': 'أقل من ٢٥٬٠٠٠ جنيه إسترليني',
      '£25k-75k': '٢٥٬٠٠٠ – ٧٥٬٠٠٠ جنيه إسترليني',
      '£75k-150k': '٧٥٬٠٠٠ – ١٥٠٬٠٠٠ جنيه إسترليني',
      '£150k+': 'أكثر من ١٥٠٬٠٠٠ جنيه إسترليني',
      'Not sure yet': 'لم تتحدد بعد',
    },
    referralLabel: 'كيف تعرفت علينا؟',
    selectReferral: 'اختر…',
    referralOptions: {
      'Google Search': 'بحث جوجل',
      LinkedIn: 'لينكد إن',
      Referral: 'ترشيح',
      'Conference/Event': 'مؤتمر أو فعالية',
      'Industry Publication': 'منشور متخصص',
      Other: 'أخرى',
    },
    phoneFieldLabel: 'الهاتف',
    regionalRepresentationLabel: 'التمثيل الإقليمي',
    regionalOffices: [
      'دبي، الإمارات العربية المتحدة',
      'جدة، المملكة العربية السعودية',
      'مدينة الكويت، الكويت',
      'القاهرة، مصر',
    ],
    premiumFormSubcopy:
      'أخبرنا بالسوق والمجال العلاجي والقرار المطروح. نرد بخطة بحث محددة النطاق — عادةً خلال يوم عمل واحد.',
    premiumEyebrow: 'قنوات الاتصال المباشر',
    premiumHeading: 'تحدث مع فريق الأبحاث',
    premiumIntro:
      'تفضل البريد الإلكتروني أو المكالمة قبل تعبئة النموذج؟ تواصل مع مقر بيونكسس والمكاتب الإقليمية أدناه.',
    consentBefore: 'أوافق على معالجة بيونكسس لبياناتي وفقاً لـ',
    consentPrivacyLabel: 'سياسة الخصوصية',
    consentAfter: '.',
    page: {
      seoTitle: 'تواصل مع بيونكسس | عرض أبحاث سوق الرعاية الصحية',
      seoDescription: 'تواصل مع بيونكسس لأبحاث سوق الأدوية في الولايات المتحدة وأوروبا ودول الخليج ومنطقة الشرق الأوسط وشمال أفريقيا. شارك موجزك واحصل على عرض محدد النطاق خلال يوم عمل واحد.',
      breadcrumbHome: 'الرئيسية',
      breadcrumbContact: 'تواصل معنا',
      jsonLdName: 'تواصل مع بيونكسس',
      primaryCta: 'اطلب عرضاً',
      secondaryCta: 'راسل الفريق',
      directLinePrompt: 'تفضل التواصل المباشر؟',
      caseStudiesLink: 'اطّلع على دراسات الحالة',
    },
  },
};

function merge(base: ContactFormStrings, patch: DeepPartial<ContactFormStrings>): ContactFormStrings {
  const out = { ...base } as Record<string, unknown>;
  for (const [key, value] of Object.entries(patch)) {
    if (value === undefined) continue;
    const current = out[key];
    if (
      value &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      current &&
      typeof current === 'object' &&
      !Array.isArray(current)
    ) {
      out[key] = { ...(current as object), ...(value as object) };
    } else {
      out[key] = value;
    }
  }
  return out as ContactFormStrings;
}

export function getContactFormStrings(lang: Language): ContactFormStrings {
  const patch = overrides[lang as Exclude<Language, 'en'>];
  return patch ? merge(en, patch) : en;
}
