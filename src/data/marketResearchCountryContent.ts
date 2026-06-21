export type MarketResearchFaq = { question: string; answer: string };

export type MarketResearchCountryContent = {
  title: string;
  description: string;
  canonical: string;
  h1: string;
  intro: string;
  countryLabel: string;
  primaryKeyword: string;
  faqItems: MarketResearchFaq[];
  relatedLinks: Array<{ to: string; label: string }>;
};

/** English market-research country pages. */
const en: Record<string, MarketResearchCountryContent> = {
  egypt: {
    title: 'Egypt Healthcare Market Research | BioNixus',
    description: 'Egypt pharmaceutical market research: EDA/UHIA pathways, channel-weighted physician and payer programs, and actionable launch plans.',
    canonical: '/egypt-healthcare-market-research',
    h1: 'Egypt Healthcare Market Research',
    intro: 'We deliver Egypt market research programs for pharmaceutical and healthcare teams that require launch and access decisions grounded in local evidence—not generic MENA summaries. Studies cover hospital, payer, and physician behavior across Cairo, Alexandria, and regional governorates.',
    countryLabel: 'Egypt',
    primaryKeyword: 'Egypt market research',
    faqItems: [],
    relatedLinks: [],
    regulatory: {
      heading: 'Egypt regulatory and market access context',
      paragraphs: [
        'Egypt market research must account for Egyptian Drug Authority (EDA) requirements, pricing committees, and tender-oriented public procurement alongside private hospital and clinic channels that operate under different economic and competitive logics. EDA registration timelines, bioequivalence expectations for generics, and local manufacturing incentives shape which products can enter Egypt and at what cost structure. Market research Egypt modules validate how physicians perceive imported versus locally manufactured brands, and whether EDA-driven quality or pricing policies affect prescribing or substitution behavior.',
        'Universal Health Insurance Authority (UHIA) expansion and public sector procurement through Ministry of Health tenders create distinct access pathways for hospital-administered and outpatient therapies. Tender cycles, pricing negotiations, and formulary inclusion criteria differ significantly from private hospital purchasing or retail pharmacy dynamics. Market research Egypt studies map which channels matter for your therapy area, what evidence committees require, and how long procurement cycles typically run. Programs quantify the revenue split between public tender volume and private market sales so forecasts reflect realistic channel mix assumptions.',
        'Local manufacturing and generic competition shape willingness to pay and brand loyalty differently than in Gulf markets; studies use Egypt-appropriate analogues and pricing benchmarks rather than importing Saudi or UAE assumptions. Egypt has a large domestic pharmaceutical manufacturing base that produces generics at price points well below imported branded products. Market research Egypt programs test how physicians trade off brand trust versus cost, what clinical or safety concerns justify branded selection, and how private-pay patients versus insured or public sector patients respond to pricing differences. Understanding these dynamics is essential for positioning and pricing strategy in a market where generic substitution is the norm, not the exception.',
        'Economic sensitivity and out-of-pocket spend influence adherence, brand choice, and therapy persistence across chronic disease categories. Market research Egypt modules capture affordability constraints and patient support program design needs where relevant, recognizing that clinical efficacy data alone does not predict real-world uptake when patients cannot afford to fill prescriptions. Programs assess which patient segments can sustain branded therapy costs, where copay assistance or patient support programs are necessary, and how economic barriers affect long-term market sizing assumptions.',
      ],
    },    marketStructure: {
      heading: 'Egypt pharmaceutical market structure',
      paragraphs: [
        'Egypt is North Africa\'s largest pharmaceutical market — about $6.5 billion in 2024 and projected to roughly double to $13.8 billion by 2033 — an 8.74% CAGR (BioNixus market analysis, 2024). Volume often sits in primary care, retail pharmacy, and chronic disease management, while innovative brands concentrate in urban centers and private hospitals — which is why a single national story can mask very different access realities by channel. Market research Egypt programs segment by geography (Cairo/Alexandria delta versus Upper Egypt governorates), channel (MOH/UHIA tender versus private hospital versus retail), and payer (public insurance versus private insurance versus out-of-pocket) to ensure forecasts reflect where your brand can realistically compete.',
        'Distributor networks and local pharmaceutical company partnerships remain influential; stakeholder maps include commercial operators as well as clinicians. Unlike Gulf markets where pharmaceutical companies often maintain direct market presence, Egypt\'s market access often depends on distributor relationships, local manufacturing partnerships, or licensing deals with Egyptian pharmaceutical companies. Market research Egypt studies identify which distributors control key hospital and pharmacy networks, what their portfolio strategies are, and how partnership selection affects competitive positioning and margin structure. Programs validate whether direct market entry is feasible or whether partnership is the only viable access route.',
        'Regional HQ teams use Egypt as a scale market for forecasting and as a MENA hub for clinical development, regulatory precedent, and manufacturing partnerships. The scale of Egypt\'s population and pharmaceutical market makes it a natural anchor for regional strategy, but market research Egypt fieldwork must validate assumptions that desk research alone cannot: physician treatment patterns, patient adherence rates, payer formulary inclusion timelines, and competitive brand performance. Programs prevent the mistake of extrapolating Gulf or European data to Egypt without validating that clinical guidelines, prescribing cultures, and economic realities support those assumptions.',
        'Local manufacturing capacity and government policies favoring domestic production create both opportunity and complexity. Brands willing to partner with local manufacturers or invest in Egyptian production can access preferential pricing, tender qualification, and regulatory pathways not available to purely imported products. Market research Egypt modules quantify how local manufacturing partnerships affect physician and payer perceptions, whether quality concerns exist around local versus imported sourcing, and how these strategic choices influence competitive positioning. Programs assess trade-offs between margin protection and market access speed in a policy environment that increasingly favors localization.',
      ],
    },

    services: {
      heading: 'Market research Egypt services',
      items: [
        { title: 'Market sizing and segmentation', description: 'Population and channel-weighted opportunity views.' },
        { title: 'Physician and pharmacy insight', description: 'Prescribing, substitution, and promotion response.' },
        { title: 'Access and pricing research', description: 'Tender, listing, and private pay dynamics.' },
        { title: 'Competitive and company landscape', description: 'Local versus multinational positioning.' },
      ],
    },
    methodology: {
      heading: 'How Egypt studies are executed',
      paragraphs: [
        'Geographic coverage is scoped to Cairo/Alexandria deltas or national spreads depending on budget and decision needs.',
        'Mixed methods balance scale (quant) with depth (qual) for payer and physician “why” questions.',
        'Data quality protocols address connectivity, multi-site respondents, and category-specific verification.',
      ],
    },
    therapyFocus: {
      heading: 'Therapy areas in Egypt research',
      paragraph: 'Infectious disease, cardiometabolic, and oncology volumes drive significant research demand.',
      areas: [
        'Cardiometabolic',
        'Infectious disease and vaccines',
        'Oncology',
        'CNS',
        'Women’s health',
        'Respiratory',
      ],
    },
    process: {
      heading: 'Egypt program flow',
      steps: [
        { title: 'Design', body: 'Channel map and instrument build for public/private mix.' },
        { title: 'Field', body: 'Urban and regional cells as scoped.' },
        { title: 'Strategy', body: 'MENA leadership readout with Egypt action plan.' },
      ],
    },
    deliverables: { heading: 'Egypt deliverables', bullets: sharedDeliverables },
    decisionBlueprint: {
      why: 'Egypt scale rewards disciplined segmentation—averages hide channel risk.',
      evidence: 'Channel-specific modules prevent one national story from masking access failure.',
      next: 'Define public vs private priority, then field a channel-weighted Egypt module.',
    },
  },
};

/** Arabic market-research country pages (shorter body, RTL). */
const ar: Record<string, MarketResearchCountryContent> = {
  'ar-uae': {
    ...en.uae,
    title: 'أبحاث السوق في الإمارات | BioNixus',
    description:
      'أبحاث السوق الدوائية والصحية في الإمارات: أدلة DHA وDOH وMOHAP، برامج أطباء ودافعين، وخطط إطلاق قابلة للتنفيذ.',
    canonical: '/ar/market-research-uae',
    h1: 'أبحاث السوق في الإمارات',
    intro:
      'نقدّم برامج أبحاث السوق في الإمارات لفرق الأدوية والرعاية الصحية التي تحتاج قرارات إطلاق ووصول إلى السوق مبنية على أدلة محلية—وليس ملخصات خليجية عامة. تشمل الدراسات سلوك المستشفيات والجهات الدافعة والأطباء عبر دبي وأبوظبي والإمارات الشمالية.',
    countryLabel: 'United Arab Emirates',
    primaryKeyword: 'أبحاث السوق في الإمارات',
    faqItems: [
      {
        question: 'ما أهم مخرجات أبحاث السوق في الإمارات؟',
        answer:
          'تشمل عادةً خريطة أصحاب المصلحة، فجوات الوصول، توصيات تسلسل الإطلاق، وتقارير ثنائية اللغة للإدارة الإقليمية.',
      },
      {
        question: 'هل تدعمون العمل بالعربية والإنجليزية؟',
        answer: 'نعم—من التصفية الميدانية إلى التقارير التنفيذية.',
      },
      {
        question: 'كيف تختلف الإمارات عن السعودية في التصميم؟',
        answer: 'نبني وحدات مستقلة لكل سوق مع أدوات قابلة للمقارنة عند الحاجة.',
      },
      {
        question: 'هل توجد صفحة للشركات الدوائية في الإمارات؟',
        answer: 'نعم—راجع الروابط أدناه لدليل الشركات ومركز أبحاث الرعاية الصحية.',
      },
    ],
    relatedLinks: [
      { to: '/market-research-uae', label: 'Market research UAE (English)' },
      { to: '/healthcare-market-research/uae', label: 'Healthcare market research — UAE' },
      { to: '/pharmaceutical-companies-uae', label: 'الشركات الدوائية في الإمارات' },
      { to: '/ar/market-research-ksa', label: 'أبحاث السوق في السعودية' },
    ],
    regulatory: {
      heading: 'السياق التنظيمي والدافع في الإمارات',
      paragraphs: [
        'تختلف متطلبات DHA وDOH وMOHAP حسب الإمارة ونوع المنشأة؛ لذلك نربط تصميم الدراسة بالمسار التنظيمي الفعلي للمنتج.',
        'تؤثر التأمينات والقوائم الإلزامية ولجان السياسات الطبية على سرعة الاعتماد—نضمّن أصحاب القرار غير السريريين عند الحاجة.',
        'غالباً ما تُستخدم أدلة الإمارات في مقارنات خليجية—نحافظ على قابلية المقارنة دون فقدان التفاصيل المحلية.',
      ],
    },
    marketStructure: {
      heading: 'بنية سوق الأدوية في الإمارات',
      paragraphs: [
        'تتركز الرعاية المتخصصة في مستشفيات كبرى بينما يغطي الطب الأولي والمزمن شبكات عيادات وصيدليات.',
        'نحدّد أين يقع نفوذ القرار فعلياً—لجان، صيادلة، خبراء، مشتريات.',
        'السياحة العلاجية والتنوع السكاني يغيّران التوقعات—نختبر الفرضيات ميدانياً.',
      ],
    },
    services: {
      heading: 'خدمات أبحاث السوق',
      items: [
        { title: 'دراسات كمية للأطباء', description: 'قياس التبنّي والرسائل والشرائح.' },
        { title: 'عمق نوعي للدافعين', description: 'فهم الاعتراضات ومتطلبات الأدلة.' },
        { title: 'خرائط المستشفيات', description: 'أولوية الحسابات والمشتريات.' },
        { title: 'تشخيص الإطلاق والتسعير', description: 'سيناريوهات تسلسل الدخول للسوق.' },
      ],
    },
    methodology: {
      heading: 'منهجية التنفيذ',
      paragraphs: [
        'نبدأ بسؤال قرار واحد ونبني الأدوات بالعكس منه.',
        'نمزج الكمي والنوعي لربط الرقم بالسبب.',
        'حوكمة ميدانية تلائم أبحاث الرعاية الصحية.',
      ],
    },
    therapyFocus: {
      heading: 'مجالات علاجية شائعة',
      paragraph: 'نشغّل برامج في التخصصات عالية القيمة في الإمارات.',
      areas: ['الأورام', 'السكري', 'القلب', 'المناعة', 'الأمراض النادرة', 'اللقاحات'],
    },
    process: {
      heading: 'مراحل المشروع',
      steps: [
        { title: 'التصميم', body: 'نطاق، أدوات، جدوى.' },
        { title: 'الميدان', body: 'تجنيد ومراقبة جودة.' },
        { title: 'التفعيل', body: 'قراءة تنفيذية وخطة 30/60/90.' },
      ],
    },
    deliverables: { heading: 'المخرجات', bullets: sharedDeliverables },
    decisionBlueprint: {
      why: 'قرارات الإمارات تعتمد على الفوارق بين الإمارات ولجان المستشفيات.',
      evidence: 'الربط بين الطبيب والدافع يقلل إعادة العمل قبل الإدراج.',
      next: 'حدّد قراراً واحداً وابدأ بتشخيص مدته أربعة أسابيع.',
    },
    hubLinkLabel: 'مركز أبحاث الرعاية الصحية',
  },
  'ar-ksa': {
    ...en.ksa,
    title: 'أبحاث السوق في السعودية (KSA) | BioNixus',
    description:
      'أبحاث السوق في السعودية لفرق الأدوية: أدلة SFDA، سياق المشتريات، وميدان ثنائي اللغة لقرارات الإطلاق والوصول.',
    canonical: '/ar/market-research-ksa',
    h1: 'أبحاث السوق في السعودية',
    intro:
      'برامج أبحاث السوق في المملكة مبنية على قنوات الرعاية العامة والخاصة، متطلبات SFDA، وديناميكيات المشتريات المؤسسية—مع تقارير عربية–إنجليزية للفرق المحلية والإقليمية.',
    countryLabel: 'Saudi Arabia',
    primaryKeyword: 'أبحاث السوق السعودية',
    faqItems: en.ksa.faqItems.slice(0, 4).map((f, i) =>
      i === 0
        ? {
            question: 'كيف تختلف أبحاث السوق في السعودية عن برامج الخليج العامة؟',
            answer:
              'تتطلب تصميماً واعياً بـ SFDA والمشتريات وتجنيداً ثنائي اللغياً عبر شبكات MOH والمستشفيات الخاصة.',
          }
        : f,
    ),
    relatedLinks: [
      { to: '/market-research-ksa', label: 'Market research KSA (English)' },
      { to: '/ar/market-research-saudi', label: 'أبحاث السوق — Saudi keyword' },
      { to: '/pharmaceutical-companies-saudi-arabia', label: 'الشركات الدوائية السعودية' },
    ],
    regulatory: {
      heading: 'SFDA والمشتريات',
      paragraphs: en.ksa.regulatory.paragraphs,
    },
    marketStructure: en.ksa.marketStructure,
    services: en.ksa.services,
    methodology: en.ksa.methodology,
    therapyFocus: en.ksa.therapyFocus,
    process: en.ksa.process,
    deliverables: en.ksa.deliverables,
    decisionBlueprint: en.ksa.decisionBlueprint,
    hubLinkLabel: 'مركز أبحاث الرعاية الصحية',
  },
  'ar-saudi': {
    ...en.saudi,
    title: 'أبحاث السوق السعودية | BioNixus',
    description:
      'أبحاث السوق في السعودية لفرق الأدوية: أدلة الأطباء والدافعين، سياق SFDA، وتقارير ثنائية اللغة لقرارات الإطلاق.',
    canonical: '/ar/market-research-saudi',
    h1: 'أبحاث السوق في السعودية',
    intro:
      'ندعم فرق الأدوية والرعاية الصحية بأبحاث سوق سعودية تربط سلوك الأطباء والمشتريات المؤسسية بقرارات الإطلاق والوصول—مع روابط لصفحات KSA والصيدلة والتقارير السعودية.',
    hubLinkLabel: 'مركز أبحاث الرعاية الصحية',
    relatedLinks: [
      { to: '/ar/market-research-ksa', label: 'أبحاث السوق KSA' },
      { to: '/market-research-saudi', label: 'Market research Saudi (English)' },
      { to: '/pharmaceutical-companies-saudi-arabia', label: 'الشركات الدوائية السعودية' },
    ],
  },
  'ar-kuwait': {
    ...en.kuwait,
    title: 'أبحاث السوق في الكويت | BioNixus',
    description:
      'أبحاث السوق في الكويت للأدوية والرعاية الصحية: سياق وزارة الصحة، أصحاب المصلحة، وجاهزية الإطلاق في سوق خليجي مركّز.',
    canonical: '/ar/market-research-kuwait',
    h1: 'أبحاث السوق في الكويت',
    intro:
      'برامج أبحاث السوق في الكويت لفرق تحتاج أدلة جاهزة للقرار في سوق خليجي عالي الإنفاق—مع تركيز على القنوات العامة والخاصة والتوزيع.',
    hubLinkLabel: 'مركز أبحاث الرعاية الصحية',
    relatedLinks: [
      { to: '/market-research-kuwait', label: 'Market research Kuwait (English)' },
      { to: '/pharmaceutical-companies-kuwait', label: 'الشركات الدوائية في الكويت' },
    ],
  },
  'ar-egypt': {
    ...en.egypt,
    title: 'أبحاث السوق في مصر | BioNixus',
    description:
      'أبحاث السوق في مصر للأدوية: قنوات عامة وخاصة، تصنيع محلي، وتخطيط نمو MENA مبني على أدلة ميدانية.',
    canonical: '/ar/market-research-egypt',
    h1: 'أبحاث السوق في مصر',
    intro:
      'تنفيذ أبحاث السوق في مصر لدعم قرارات النمو والإطلاق والوصول عبر قنوات الرعاية العامة والخاصة والدفع من الجيب في أكبر سوق دوائي في شمال أفريقيا.',
    hubLinkLabel: 'مركز أبحاث الرعاية الصحية',
    relatedLinks: [
      { to: '/egypt-pharmaceutical-market-research', label: 'شركة أبحاث السوق الدوائية في مصر' },
      { to: '/market-research-egypt', label: 'Market research Egypt (English)' },
      { to: '/pharmaceutical-companies-egypt', label: 'الشركات الدوائية في مصر' },
    ],
  },
};

export type MarketResearchContentKey = keyof typeof en | keyof typeof ar;

export function getMarketResearchCountryContent(
  key: MarketResearchContentKey,
): MarketResearchCountryContent | undefined {
  if (key in ar) return ar[key as keyof typeof ar];
  if (key in en) return en[key as keyof typeof en];
  return undefined;
}

export const MARKET_RESEARCH_HUB_SECTIONS = {
  introExtra:
    'Think of this page as a switchboard, not a brochure. Pick the method that fits the decision in front of you — quantitative for sizing and confidence, qualitative for behaviour and context, healthcare-specific programmes for regulated execution — then jump straight to the country page you need: Saudi Arabia, the UAE, Kuwait, Egypt, or a wider Europe–MENA programme.',
  whyHeading: 'Why pharmaceutical teams are commissioning research now',
  whyParagraphs: [
    'The money is moving faster than the averages suggest. The GCC pharmaceutical market was worth roughly $23.7 billion in 2024 and is projected to reach about $49 billion by 2033 — a 7.6% CAGR (BioNixus market analysis, 2024) — but that headline hides sharp country-level divergence: Saudi Arabia alone accounts for around $9.4 billion of 2024 spend (BioNixus market analysis, 2024), with its own SFDA and NUPCO logic. Launch windows are shorter and access bars are higher, so research that ties physician behaviour to payer and procurement reality is what stops expensive rework before SFDA, MOH, or EU HTA milestones.',
    'We build for pharmaceutical commercial, medical, and market access leaders — not generic consumer panels. In practice that means therapy-appropriate recruitment, bilingual fieldwork where the market demands it, and findings mapped to the 30/60/90 decisions you actually have to make, rather than a slide deck that ends at insight.',
  ],
  methodHeading: 'How to choose the right research method',
  methodRows: [
    {
      method: 'Quantitative healthcare research',
      when: 'Sizing, segmentation, message testing, adoption tracking',
      output: 'Confidence intervals, priority segments, forecast inputs',
      link: '/quantitative-healthcare-market-research',
    },
    {
      method: 'Qualitative research',
      when: 'Objections, pathway detail, narrative testing',
      output: 'Themes, verbatims, strategic implications',
      link: '/qualitative-market-research',
    },
    {
      method: 'Healthcare hub programs',
      when: 'Multi-country Europe–MENA alignment',
      output: 'Comparable modules with local access depth',
      link: '/healthcare-market-research',
    },
    {
      method: 'Saudi pharmaceutical focus',
      when: 'SFDA, NUPCO, Vision 2030 execution',
      output: 'KSA stakeholder and procurement insight',
      link: '/market-research-saudi-arabia-pharmaceutical',
    },
  ],
} as const;
