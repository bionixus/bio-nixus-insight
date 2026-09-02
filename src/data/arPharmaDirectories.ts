export type ArPharmaCountrySlug = 'egypt' | 'uae' | 'saudi-arabia' | 'kuwait' | 'oman' | 'qatar';

export type ArPharmaCompanyType = 'محلي' | 'متعدد الجنسيات' | 'إقليمي' | 'موزّع';

export type ArPharmaCompanyEntry = {
  name: string;
  hq: string;
  type: ArPharmaCompanyType;
  focus: string;
  notes: string;
};

export type ArPharmaDirectoryConfig = {
  path: string;
  countrySlug: ArPharmaCountrySlug;
  countryNameEn: string;
  title: string;
  metaDescription: string;
  h1: string;
  introLead: string;
  introRest: string;
  stats: { value: string; label: string }[];
  companies: ArPharmaCompanyEntry[];
  faq: { q: string; a: string }[];
  related: { to: string; label: string }[];
  enPath: string;
  publishedDate: string;
  modifiedDate: string;
};

const PUBLISHED = '2026-09-02';

function pathFor(country: ArPharmaCountrySlug): string {
  return `/ar/pharmaceutical-companies-${country}`;
}

const EGYPT: ArPharmaDirectoryConfig = {
  path: pathFor('egypt'),
  countrySlug: 'egypt',
  countryNameEn: 'Egypt',
  title: 'شركات الأدوية في مصر (2026) | دليل بيونيكسس',
  metaDescription:
    'دليل 2026 لشركات الأدوية في مصر: إيبيكو، إيفا، آمون، فاركو، فايزر، هيكما، ابن سينا. أبحاث حساب وعبوة من بيونيكسس.',
  h1: 'شركات الأدوية في مصر',
  introLead:
    'مصر ليست سوق استيراد يُدار من دبي. هي أكبر قاعدة تصنيع دوائي في المنطقة: إيبيكو، إيفا فارما، آمون، جلوبال نابي، مينا فارم، وفاركو يصنعون هنا، والهيئة المصرية للدواء تضبط التسجيل والسعر. فايزر ونوفارتس وسانوفي يقفون إلى جانبهم لا فوقهم.',
  introRest:
    'بيونيكسس تدرس هذه الحسابات على مستوى المستشفى والموزّع والعبوة — تكملة لتدقيقات IQVIA وليس بديلاً عنها. راجع أيضاً دليل شركات أبحاث السوق في مصر بالعربية، والصفحة الإنجليزية لشركات الأدوية في مصر.',
  stats: [
    { value: '11+', label: 'شركة نذكرها وندرسها' },
    { value: 'تصنيع محلي', label: 'إيبيكو وإيفا وفاركو' },
    { value: 'EDA', label: 'الهيئة المصرية للدواء' },
    { value: 'ابن سينا', label: 'أكبر موزّع وطني' },
  ],
  companies: [
    { name: 'EIPICO', hq: 'مصر', type: 'محلي', focus: 'أدوية متعددة، جنيس، بدون وصفة', notes: 'أكبر مصنع خاص؛ خطوط إنتاج واسعة وحجم عبوات مرتفع' },
    { name: 'EVA Pharma', hq: 'مصر', type: 'محلي', focus: 'جنيس ذو علامة، تصدير إقليمي', notes: 'حضور في عشرات الأسواق؛ قصة تصدير مصرية' },
    { name: 'Amoun Pharmaceutical', hq: 'مصر', type: 'محلي', focus: 'بشري وبيطري', notes: 'محفظة محلية طويلة الأمد' },
    { name: 'Global Napi Pharma', hq: 'مصر', type: 'محلي', focus: 'جنيس موجّه للتصدير', notes: 'مرافق بمعايير أوروبية؛ تصدير لا سوق محلي فقط' },
    { name: 'Minapharm', hq: 'مصر', type: 'محلي', focus: 'بيوتكنولوجي وجنيس', notes: 'من أقدم الأسماء؛ ريادة بيولوجية محلية' },
    { name: 'Pharco', hq: 'مصر', type: 'محلي', focus: 'التهاب الكبد والجنيس', notes: 'اسم التهاب الكبد سي في السوق المصري' },
    { name: 'Pfizer', hq: 'الولايات المتحدة', type: 'متعدد الجنسيات', focus: 'أورام، لقاحات، أمراض نادرة', notes: 'محفظة مسجّلة لدى الهيئة؛ حضور مناقصات ومستشفيات' },
    { name: 'Novartis', hq: 'سويسرا', type: 'متعدد الجنسيات', focus: 'أورام، مناعة، قلب', notes: 'حضور قوي في المستشفيات الخاصة والحكومية' },
    { name: 'Sanofi', hq: 'فرنسا', type: 'متعدد الجنسيات', focus: 'سكري، لقاحات، صحة مستهلك', notes: 'إنتاج محلي إلى جانب الاستيراد' },
    { name: 'Hikma Pharmaceuticals', hq: 'الأردن / المملكة المتحدة', type: 'إقليمي', focus: 'حقن وجنيس', notes: 'لاعب إقليمي يُعامل في مصر كحساب لا كهامش' },
    { name: 'Ibn Sina Pharma', hq: 'مصر', type: 'موزّع', focus: 'توزيع وطني', notes: 'أكبر موزّع؛ الحساب الذي تسأله الفرق عندما ينقطع التغطية' },
  ],
  faq: [
    {
      q: 'من أبرز شركات الأدوية في مصر؟',
      a: 'على الجانب المحلي: إيبيكو، إيفا فارما، آمون، جلوبال نابي، مينا فارم، وفاركو. على الجانب الدولي: فايزر، نوفارتس، وسانوفي. هيكما لاعب إقليمي، وابن سينا هو الموزّع الذي يُذكر أولاً.',
    },
    {
      q: 'هل تغني بيانات IQVIA عن دراسة ميدانية في مصر؟',
      a: 'التدقيق يجيب عن الحصة داخل الكون الذي يغطيه. لا يجيب عن مستشفى بعينه أو موزّع بعينه أو عبوة في صيدلية ابن سينا مقابل صيدلية حيّ. بيونيكسس تُكمّل التدقيق ولا تستبدله.',
    },
    {
      q: 'ما دور الهيئة المصرية للدواء في هذا الدليل؟',
      a: 'الهيئة تضبط التسجيل والتسعير والتيقظ. أي موجز لا يذكر مسار الهيئة يقيس سوقاً متخيلاً. نبني الأسئلة على ذلك لا على استبيان منسوخ من الخليج.',
    },
    {
      q: 'لماذا ابن سينا في قائمة شركات لا موزّعين فقط؟',
      a: 'لأن الحساب في مصر كثيراً ما يكون الموزّع. فجوة التغطية تُنسب للعلامة وهي في الحقيقة فجوة ابن سينا أو تاجر جملة. هذا ما ندرسه.',
    },
    {
      q: 'كيف نطلب دراسة من بيونيكسس؟',
      a: 'عرض خلال 48 ساعة من موجز قابل للتنفيذ. التسعير بالمشروع والدولة. النموذج أدناه أو admin@bionixus.com.',
    },
  ],
  related: [
    { to: '/ar/insights/top-market-research-companies-egypt-2026', label: 'أفضل شركات أبحاث السوق في مصر (2026)' },
    { to: '/pharmaceutical-companies-egypt', label: 'الدليل الإنجليزي لشركات الأدوية في مصر' },
    { to: '/egypt-pharmaceutical-market-research', label: 'أبحاث سوق دوائية في مصر' },
    { to: '/ar/pharmaceutical-companies-saudi-arabia', label: 'شركات الأدوية في السعودية' },
    { to: '/ar/pharmaceutical-companies-uae', label: 'شركات الأدوية في الإمارات' },
    { to: '/iqvia-alternative', label: 'بديل IQVIA' },
  ],
  enPath: '/pharmaceutical-companies-egypt',
  publishedDate: PUBLISHED,
  modifiedDate: PUBLISHED,
};

const UAE: ArPharmaDirectoryConfig = {
  path: pathFor('uae'),
  countrySlug: 'uae',
  countryNameEn: 'United Arab Emirates',
  title: 'شركات الأدوية في الإمارات (2026) | دليل بيونيكسس',
  metaDescription:
    'دليل 2026 لشركات الأدوية في الإمارات: جلفار، نيوفارما، فايزر، روش، هيكما، لايف فارمسي. أبحاث حساب من بيونيكسس.',
  h1: 'شركات الأدوية في الإمارات',
  introLead:
    'الإمارات سوق تأمين خاص وسرعة تسجيل أكثر مما هي سوق تصنيع. جلفار ونيوفارما وجلوبال فارما يصنّعون في رأس الخيمة وأبوظبي ودبي، لكن الحصة الأكبر ما زالت استيراداً يمرّ عبر مكاتب متعددة الجنسيات في دبي وصيدليات لايف وأستر وبن سينا.',
  introRest:
    'ثلاثة منظّمين — الوزارة الاتحادية، وهيئة صحة دبي، ودائرة صحة أبوظبي — يعني أن «دراسة الإمارات» من دون تسمية الإمارة دراسة ناقصة. بيونيكسس تعمل ميدانياً على الحساب والعبوة. راجع أيضاً دليل شركات أبحاث السوق في الإمارات بالعربية.',
  stats: [
    { value: '12+', label: 'شركة نذكرها وندرسها' },
    { value: 'جلفار', label: 'أكبر مصنع عربي' },
    { value: 'MOHAP / DHA / DOH', label: 'ثلاثة مسارات تسجيل' },
    { value: 'تأمين خاص', label: 'قناة دبي وأبوظبي' },
  ],
  companies: [
    { name: 'Julphar', hq: 'رأس الخيمة', type: 'محلي', focus: 'جنيس، بدون وصفة، تصدير', notes: 'أكبر مصنع عربي؛ قصة رأس الخيمة لا قصة دبي مول' },
    { name: 'Neopharma', hq: 'أبوظبي', type: 'محلي', focus: 'جنيس وبيوسيميلار', notes: 'منصة أبوظبي للتصنيع' },
    { name: 'Globalpharma', hq: 'دبي', type: 'محلي', focus: 'جنيس', notes: 'تصنيع دبي؛ محفظة بمعايير منظمة الصحة' },
    { name: 'Pfizer', hq: 'الولايات المتحدة', type: 'متعدد الجنسيات', focus: 'أورام، لقاحات', notes: 'مكتب إقليمي؛ مناقصات ومستشفيات خاصة' },
    { name: 'Novartis', hq: 'سويسرا', type: 'متعدد الجنسيات', focus: 'أورام، مناعة', notes: 'حضور مستشفيات الإمارات' },
    { name: 'Roche', hq: 'سويسرا', type: 'متعدد الجنسيات', focus: 'أورام وتشخيص', notes: 'محفظة تخصصية وتشخيص مرافقة' },
    { name: 'Sanofi', hq: 'فرنسا', type: 'متعدد الجنسيات', focus: 'سكري ولقاحات', notes: 'حضور تأمين خاص وحكومي' },
    { name: 'AstraZeneca', hq: 'المملكة المتحدة / السويد', type: 'متعدد الجنسيات', focus: 'أورام وجهاز تنفسي', notes: 'مقر إقليمي في دبي' },
    { name: 'Hikma Pharmaceuticals', hq: 'الأردن / المملكة المتحدة', type: 'إقليمي', focus: 'حقن وجنيس', notes: 'حساب مستشفيات لا هامش خليجي' },
    { name: 'Life Pharmacy', hq: 'الإمارات', type: 'موزّع', focus: 'سلسلة صيدليات', notes: 'أكبر سلسلة؛ مسار عناية شخصية أيضاً' },
    { name: 'Aster Pharmacy', hq: 'الإمارات', type: 'موزّع', focus: 'سلسلة صيدليات', notes: 'جزء من مجموعة أستر دي إم' },
    { name: 'BinSina Pharmacy', hq: 'الإمارات', type: 'موزّع', focus: 'سلسلة صيدليات', notes: 'سلسلة وطنية منافسة للايف' },
  ],
  faq: [
    {
      q: 'من أبرز شركات الأدوية في الإمارات؟',
      a: 'جلفار ونيوفارما وجلوبال فارما محلياً. فايزر ونوفارتس وروش وسانوفي وأسترازينيكا دولياً. هيكما إقليمياً. لايف وأستر وبن سينا على مسار الصيدلية.',
    },
    {
      q: 'هل يكفي مكتب دبي لدراسة «الإمارات»؟',
      a: 'لا. أبوظبي ودبي والوزارة الاتحادية مسارات مختلفة. دراسة لا تسمّي الإمارة تخلط تأمين أبوظبي بسياحة دبي العلاجية.',
    },
    {
      q: 'كيف نتعامل مع جلفار مقابل الشركات متعددة الجنسيات؟',
      a: 'جلفار مصنع رأس الخيمة وحساب تصدير. ليست «محلياً صغيراً» يُذكر في حاشية. نضعها في مجموعة المنافسة لا في خانة التلوين.',
    },
    {
      q: 'هل بيونيكسس بديل لتدقيق IQVIA في الإمارات؟',
      a: 'لا. نُكمّل التدقيق بعمل ميداني على المستشفى والصيدلية والعبوة. الصفحة الإنجليزية لبديل IQVIA تشرح النموذج نفسه.',
    },
    {
      q: 'أين دليل شركات الأبحاث بالعربية؟',
      a: 'في /ar/insights/top-sharaket-abhath-alsuq-alimarat-2026. هذا الدليل للشركات الدوائية لا لشركات البحث.',
    },
  ],
  related: [
    { to: '/ar/insights/top-sharaket-abhath-alsuq-alimarat-2026', label: 'أفضل شركات أبحاث السوق في الإمارات (2026)' },
    { to: '/pharmaceutical-companies-uae', label: 'الدليل الإنجليزي لشركات الأدوية في الإمارات' },
    { to: '/uae-pharmaceutical-market-research', label: 'أبحاث سوق دوائية في الإمارات' },
    { to: '/ar/pharmaceutical-companies-saudi-arabia', label: 'شركات الأدوية في السعودية' },
    { to: '/ar/pharmaceutical-companies-egypt', label: 'شركات الأدوية في مصر' },
    { to: '/iqvia-alternative', label: 'بديل IQVIA' },
  ],
  enPath: '/pharmaceutical-companies-uae',
  publishedDate: PUBLISHED,
  modifiedDate: PUBLISHED,
};

const KSA: ArPharmaDirectoryConfig = {
  path: pathFor('saudi-arabia'),
  countrySlug: 'saudi-arabia',
  countryNameEn: 'Saudi Arabia',
  title: 'شركات الأدوية في السعودية (2026) | دليل بيونيكسس',
  metaDescription:
    'دليل 2026 لشركات الأدوية في السعودية: سبيماكو، جمجوم، تبوك، فايزر، نهدي، الدواء. أبحاث حساب وهيئة الغذاء والدواء.',
  h1: 'شركات الأدوية في السعودية',
  introLead:
    'السعودية أكبر سوق دواء في الخليج، وقصة توطين قبل أن تكون قصة برج في الرياض. سبيماكو وجمجوم وتبوك وساجا يصنّعون هنا. نوپكو يشتري للحكومة. نهدي والدواء يلتقطان رحلة الصيدلية. فايزر ونوفارتس وسانوفي يقفون في المناقصة والمستشفى الخاص معاً.',
  introRest:
    'بيونيكسس تعمل بوعي هيئة الغذاء والدواء وعلى مستوى الحساب — تكملة لتدقيق IQVIA لا استبدالاً له. راجع دليل شركات أبحاث السوق في السعودية بالعربية، وبديل IQVIA في السعودية بالإنجليزية.',
  stats: [
    { value: '12+', label: 'شركة نذكرها وندرسها' },
    { value: 'سبيماكو', label: 'أكبر مصنع محلي' },
    { value: 'SFDA', label: 'هيئة الغذاء والدواء' },
    { value: 'نهدي / الدواء', label: 'مسار الصيدلية' },
  ],
  companies: [
    { name: 'SPIMACO', hq: 'السعودية', type: 'محلي', focus: 'جنيس، بدون وصفة، مشابهات حيوية', notes: 'أكبر مصنع محلي؛ قصة رؤية 2030 لا حاشية' },
    { name: 'Jamjoom Pharma', hq: 'السعودية', type: 'محلي', focus: 'عيون، جلد، صحة مستهلك', notes: 'اسم العيون؛ تصدير إقليمي' },
    { name: 'Tabuk Pharmaceutical', hq: 'السعودية', type: 'محلي', focus: 'جنيس ومضادات حيوية', notes: 'ثاني منتج محلي يُذكر بعد سبيماكو' },
    { name: 'SAJA Pharmaceutical', hq: 'السعودية', type: 'محلي', focus: 'جنيس وقلب وسكري', notes: 'تصنيع جدة؛ مستفيد من حوافز التوطين' },
    { name: 'Pfizer', hq: 'الولايات المتحدة', type: 'متعدد الجنسيات', focus: 'أورام ولقاحات', notes: 'حضور مناقصات الوزارة والمستشفيات العسكرية' },
    { name: 'Novartis', hq: 'سويسرا', type: 'متعدد الجنسيات', focus: 'أورام ومناعة', notes: 'حضور قوي في قوائم المستشفيات' },
    { name: 'Sanofi', hq: 'فرنسا', type: 'متعدد الجنسيات', focus: 'سكري ولقاحات', notes: 'فرانشايز إنسولين ولقاح' },
    { name: 'AstraZeneca', hq: 'المملكة المتحدة / السويد', type: 'متعدد الجنسيات', focus: 'أورام وجهاز تنفسي', notes: 'مسارات مراجعة أولوية لدى الهيئة' },
    { name: 'Hikma Pharmaceuticals', hq: 'الأردن / المملكة المتحدة', type: 'إقليمي', focus: 'حقن وجنيس', notes: 'حساب المستشفى لا هامش' },
    { name: 'NAHDI', hq: 'السعودية', type: 'موزّع', focus: 'سلسلة صيدليات', notes: 'أكبر سلسلة؛ مسار بدون وصفة وعناية' },
    { name: 'Al Dawaa Pharmacies', hq: 'السعودية', type: 'موزّع', focus: 'سلسلة صيدليات', notes: 'ثاني نظام صيدلي وطني' },
    { name: 'NUPCO', hq: 'السعودية', type: 'موزّع', focus: 'شراء حكومي', notes: 'بوابة المناقصة التي يتجاهلها الاستبيان المستورد' },
  ],
  faq: [
    {
      q: 'من أبرز شركات الأدوية في السعودية؟',
      a: 'سبيماكو، جمجوم، تبوك، وساجا محلياً. فايزر ونوفارتس وسانوفي وأسترازينيكا دولياً. هيكما إقليمياً. نهدي والدواء ونوپكو على قنوات الصرف والشراء.',
    },
    {
      q: 'هل نوپكو شركة أدوية؟',
      a: 'نوپكو شركة شراء وتوريد حكومي. نضعها في الدليل لأن الحساب في المملكة كثيراً ما يكون المناقصة لا المصنع. تجاهلها دراسة مستشفى خاص فقط.',
    },
    {
      q: 'كيف نبحث سبيماكو مقابل فايزر؟',
      a: 'كمجموعة منافسة حقيقية لا كـ«محلي مقابل مبتكر» عام. العبوة والقناة والمناقصة تغيّر الإجابة. هذا عمل ميداني على الحساب.',
    },
    {
      q: 'هل نُلغي اشتراك IQVIA إذا تعاقدنا مع بيونيكسس؟',
      a: 'لا. أبقوا التدقيق للحصة. أضيفوا بيونيكسس للمستشفى والمناقصة ومسار الهيئة. الصفحة /iqvia-alternative-saudi-arabia بالإنجليزية تفصّل ذلك.',
    },
    {
      q: 'أين دليل شركات الأبحاث بالعربية؟',
      a: 'في /ar/insights/top-sharaket-abhath-alsuq-alsaudia-2026.',
    },
  ],
  related: [
    { to: '/ar/insights/top-sharaket-abhath-alsuq-alsaudia-2026', label: 'أفضل شركات أبحاث السوق في السعودية (2026)' },
    { to: '/pharmaceutical-companies-saudi-arabia', label: 'الدليل الإنجليزي لشركات الأدوية في السعودية' },
    { to: '/iqvia-alternative-saudi-arabia', label: 'بديل IQVIA في السعودية' },
    { to: '/ar/pharmaceutical-companies-uae', label: 'شركات الأدوية في الإمارات' },
    { to: '/ar/pharmaceutical-companies-egypt', label: 'شركات الأدوية في مصر' },
    { to: '/market-research-saudi-arabia-pharmaceutical', label: 'أبحاث سوق دوائية في السعودية' },
  ],
  enPath: '/pharmaceutical-companies-saudi-arabia',
  publishedDate: PUBLISHED,
  modifiedDate: PUBLISHED,
};

const KUWAIT: ArPharmaDirectoryConfig = {
  path: pathFor('kuwait'),
  countrySlug: 'kuwait',
  countryNameEn: 'Kuwait',
  title: 'شركات الأدوية في الكويت (2026) | دليل بيونيكسس',
  metaDescription:
    'دليل 2026 لشركات الأدوية في الكويت: كي سبيكو، كيورا، علي عبد الوهاب، فايزر، هيكما. أبحاث حساب وموزّعين من بيونيكسس.',
  h1: 'شركات الأدوية في الكويت',
  introLead:
    'الكويت سوق صغير عالي الإنفاق، وقصة موزّعين قبل أن تكون قصة مصنع. كي سبيكو اسم التصنيع المحلي الذي يُذكر. كيورا (صفوان سابقاً) وعلي عبد الوهاب والموجل والحجيري وبدر سلطان هم الحسابات التي تُغلق الصفقة. فايزر ونوفارتس وسانوفي يمرّون عبر تلك البيوت أكثر مما يمرّون عبر «مكتب كويتي» متخيّل.',
  introRest:
    'بيونيكسس تدرس الموزّع كحساب. لوحة خليجية تطوي الكويت تحت «بقية الخليج» ستُخطئ قواعد الوزارة وبيت التوزيع. الدليل الإنجليزي لشركات الأدوية في الكويت أطول؛ هذه الصفحة بالعربية للمشتري الذي يبحث بالعربية.',
  stats: [
    { value: '10+', label: 'شركة نذكرها وندرسها' },
    { value: 'موزّعون', label: 'كيورا وعلي عبد الوهاب' },
    { value: 'MOH', label: 'وزارة الصحة' },
    { value: 'استيراد', label: 'حصة المصنع المحلي محدودة' },
  ],
  companies: [
    { name: 'KSPICO', hq: 'الكويت', type: 'محلي', focus: 'تصنيع جنيس', notes: 'اسم التصنيع المحلي الذي يظهر في المناقصة' },
    { name: 'Pfizer', hq: 'الولايات المتحدة', type: 'متعدد الجنسيات', focus: 'أورام ولقاحات', notes: 'محفظة وزارة الصحة؛ تُنفَّذ عبر موزّع' },
    { name: 'Novartis', hq: 'سويسرا', type: 'متعدد الجنسيات', focus: 'أورام ومناعة', notes: 'حضور مستشفيات حكومية وخاصة' },
    { name: 'Sanofi', hq: 'فرنسا', type: 'متعدد الجنسيات', focus: 'سكري ولقاحات', notes: 'فرانشايز مزمن عبر بيت توزيع' },
    { name: 'GSK', hq: 'المملكة المتحدة', type: 'متعدد الجنسيات', focus: 'لقاحات وجهاز تنفسي', notes: 'حساب لقاح لا حساب تجزئة فقط' },
    { name: 'Hikma Pharmaceuticals', hq: 'الأردن / المملكة المتحدة', type: 'إقليمي', focus: 'حقن وجنيس', notes: 'حساب المستشفى الكويتي' },
    { name: 'Julphar', hq: 'الإمارات', type: 'إقليمي', focus: 'جنيس وصحة مستهلك', notes: 'تصدير خليجي إلى الكويت' },
    { name: 'Cura Health (Safwan)', hq: 'الكويت', type: 'موزّع', focus: 'توزيع طبي وصيدلي', notes: 'من أكبر بيوت التوزيع؛ الاسم السابق صفوان' },
    { name: 'Ali Abdelwahab (AAW)', hq: 'الكويت', type: 'موزّع', focus: 'توزيع متعدد العلاج', notes: 'بيت عائلي يُذكر في كل موجز جاد' },
    { name: 'Almojil', hq: 'الكويت', type: 'موزّع', focus: 'توزيع طبي', notes: 'حساب توزيع لا هامش' },
    { name: 'Bader Sultan', hq: 'الكويت', type: 'موزّع', focus: 'توزيع وصيدلة', notes: 'اسم توزيع كلاسيكي في الكويت' },
  ],
  faq: [
    {
      q: 'من أبرز شركات الأدوية في الكويت؟',
      a: 'كي سبيكو محلياً. فايزر ونوفارتس وسانوفي وجي إس كيه دولياً. هيكما وجلفار إقليمياً. كيورا وعلي عبد الوهاب والموجل وبدر سلطان على التوزيع — وهم غالباً الحساب الحقيقي.',
    },
    {
      q: 'لماذا قائمة الكويت مليئة بالموزّعين؟',
      a: 'لأن التصنيع المحلي محدود والصفقة تُغلق في بيت التوزيع. دراسة «علامات فقط» في الكويت تُخطئ البلد عن قصد.',
    },
    {
      q: 'هل ننسخ تصميم دراسة سعودية على الكويت؟',
      a: 'لا. لا نوپكو بحجمه، ولا سبيماكو بحجمه. الوزارة وبيت التوزيع هما الواقعة الكويتية.',
    },
    {
      q: 'هل يغني تدقيق إقليمي عن عمل ميداني؟',
      a: 'قد يحجم ما يراه. لن يقول كيف تُ dispens عبوة عبر كيورا مقابل علي عبد الوهاب. هذا تكملة بيونيكسس.',
    },
    {
      q: 'أين دليل الأبحاث بالكويت؟',
      a: 'الصفحة الإنجليزية /insights/top-market-research-companies-kuwait-2026 والدليل الإنجليزي /pharmaceutical-companies-kuwait. هذه الصفحة بالعربية للشركات الدوائية.',
    },
  ],
  related: [
    { to: '/insights/top-market-research-companies-kuwait-2026', label: 'أفضل شركات أبحاث السوق في الكويت (إنجليزي)' },
    { to: '/pharmaceutical-companies-kuwait', label: 'الدليل الإنجليزي لشركات الأدوية في الكويت' },
    { to: '/ar/pharmaceutical-companies-saudi-arabia', label: 'شركات الأدوية في السعودية' },
    { to: '/ar/pharmaceutical-companies-qatar', label: 'شركات الأدوية في قطر' },
    { to: '/iqvia-alternative', label: 'بديل IQVIA' },
    { to: '/account-level-market-research', label: 'بيانات على مستوى الحساب' },
  ],
  enPath: '/pharmaceutical-companies-kuwait',
  publishedDate: PUBLISHED,
  modifiedDate: PUBLISHED,
};

const OMAN: ArPharmaDirectoryConfig = {
  path: pathFor('oman'),
  countrySlug: 'oman',
  countryNameEn: 'Oman',
  title: 'شركات الأدوية في عُمان (2026) | دليل بيونيكسس',
  metaDescription:
    'دليل 2026 لشركات الأدوية في عُمان: عُمان فارما، إن بي آي، فايزر، جلفار، صيدلية مسقط. أبحاث حساب من بيونيكسس.',
  h1: 'شركات الأدوية في عُمان',
  introLead:
    'عُمان سوق استيراد بثلاثة مصانع تُذكر: عُمان فارما، والصناعات الدوائية الوطنية، وجلف فارما. فايزر ونوفارتس وسانوفي يصلون عبر مكتب إقليمي وموزّع مسقط أكثر مما يصلون عبر شركة عُمانية تابعة. صيدلية مسقط وشركة التوزيع الوطنية هما الحساب الذي تكتشفه الفرق متأخراً.',
  introRest:
    'رؤية 2040 تُشجّع التصنيع ولا تُلغي الاستيراد. دراسة تُعامل مسقط كلوّلا ستُخطئ الباطنة وظفار. بيونيكسس تعمل ميدانياً على الحساب. الدليل الإنجليزي أطول؛ هذه الصفحة بالعربية.',
  stats: [
    { value: '10+', label: 'شركة نذكرها وندرسها' },
    { value: 'عُمان فارما', label: 'التصنيع المحلي' },
    { value: 'MOH DGPA', label: 'شؤون الدواء' },
    { value: 'مسقط', label: 'صيدلية وتوزيع' },
  ],
  companies: [
    { name: 'omanpharma', hq: 'عُمان', type: 'محلي', focus: 'جنيس متعدد العلاج', notes: 'أبرز مصنع محلي يُذكر في المناقصة' },
    { name: 'National Pharmaceutical Industries (NPI)', hq: 'عُمان', type: 'محلي', focus: 'جنيس', notes: 'تصنيع مسقط؛ جنيس لا مبتكر' },
    { name: 'Gulf Pharma', hq: 'عُمان', type: 'محلي', focus: 'صلب وسوائل', notes: 'مصنع محلي ثالث يُغفل في الاستبيانات المستوردة' },
    { name: 'Pfizer', hq: 'الولايات المتحدة', type: 'متعدد الجنسيات', focus: 'أورام ولقاحات', notes: 'محفظة وزارة الصحة؛ تنفيذ عبر موزّع' },
    { name: 'Novartis', hq: 'سويسرا', type: 'متعدد الجنسيات', focus: 'أورام ومناعة', notes: 'حضور إقليمي يُدار غالباً من الإمارات' },
    { name: 'Sanofi', hq: 'فرنسا', type: 'متعدد الجنسيات', focus: 'سكري ولقاحات', notes: 'فرانشايز مزمن' },
    { name: 'Hikma Pharmaceuticals', hq: 'الأردن / المملكة المتحدة', type: 'إقليمي', focus: 'حقن وجنيس', notes: 'حساب المستشفى العُماني' },
    { name: 'Julphar', hq: 'الإمارات', type: 'إقليمي', focus: 'جنيس وصحة مستهلك', notes: 'تصدير خليجي إلى عُمان' },
    { name: 'Tabuk Pharmaceutical', hq: 'السعودية', type: 'إقليمي', focus: 'جنيس', notes: 'حضور خليجي يشمل عُمان' },
    { name: 'Muscat Pharmacy', hq: 'عُمان', type: 'موزّع', focus: 'صيدلية وتوزيع', notes: 'الحساب الذي يُذكر بعد المصنع' },
    { name: 'National Distribution Company', hq: 'عُمان', type: 'موزّع', focus: 'توزيع دوائي', notes: 'توزيع وطني؛ فجوات التغطية تبدأ هنا' },
  ],
  faq: [
    {
      q: 'من أبرز شركات الأدوية في عُمان؟',
      a: 'عُمان فارما وإن بي آي وجلف فارما محلياً. فايزر ونوفارتس وسانوفي دولياً. هيكما وجلفار وتبوك إقليمياً. صيدلية مسقط وشركة التوزيع الوطنية على القناة.',
    },
    {
      q: 'هل عُمان مجرد نسخة أصغر من الإمارات؟',
      a: 'لا. عدد المصانع أقل، والموزّع أوضح، والباطنة وظفار ليستا مسقط. تصميم دبي المنسوخ يفشل هنا.',
    },
    {
      q: 'ما أثر رؤية 2040 على هذا الدليل؟',
      a: 'تحفيز تصنيع محلي وتحديث صحي. المتسوق قد لا يردد الرؤية؛ لجان التسجيل أحياناً تفعل. نبني الأسئلة على ذلك.',
    },
    {
      q: 'هل يغني تدقيق خليجي عن دراسة عُمانية؟',
      a: 'قد يحجم التجارة الحديثة الساحلية. لن يقول كيف تُ dispens عبوة في صيدلية مسقط مقابل موزّع في الداخلية. هذا عمل بيونيكسس.',
    },
    {
      q: 'أين الصفحة الإنجليزية؟',
      a: '/pharmaceutical-companies-oman للدليل، و/insights/top-market-research-companies-oman-2026 لشركات الأبحاث.',
    },
  ],
  related: [
    { to: '/insights/top-market-research-companies-oman-2026', label: 'أفضل شركات أبحاث السوق في عُمان (إنجليزي)' },
    { to: '/pharmaceutical-companies-oman', label: 'الدليل الإنجليزي لشركات الأدوية في عُمان' },
    { to: '/ar/pharmaceutical-companies-uae', label: 'شركات الأدوية في الإمارات' },
    { to: '/ar/pharmaceutical-companies-saudi-arabia', label: 'شركات الأدوية في السعودية' },
    { to: '/iqvia-alternative', label: 'بديل IQVIA' },
    { to: '/account-level-market-research', label: 'بيانات على مستوى الحساب' },
  ],
  enPath: '/pharmaceutical-companies-oman',
  publishedDate: PUBLISHED,
  modifiedDate: PUBLISHED,
};

const QATAR: ArPharmaDirectoryConfig = {
  path: pathFor('qatar'),
  countrySlug: 'qatar',
  countryNameEn: 'Qatar',
  title: 'شركات الأدوية في قطر (2026) | دليل بيونيكسس',
  metaDescription:
    'دليل 2026 لشركات الأدوية في قطر: كي بي آي، كيو لايف، فايزر، روش، هيكما، صيدلية الدوحة. أبحاث حساب من بيونيكسس.',
  h1: 'شركات الأدوية في قطر',
  introLead:
    'قطر سوق استيراد بنسبة عالية، ومؤسستا تصنيع تُذكران في الرؤية: قطر للصناعات الدوائية وكيو لايف فارما. حمد الطبية تشتري للقطاع الحكومي. روش حاضرة عبر شراكات تخصصية (مثل سدرة). فايزر ونوفارتس وسانوفي يملأون القائمة. صيدلية الدوحة وصيدلية قطر تلتقطان رحلة التجزئة.',
  introRest:
    'ما بعد كأس العالم غيّر البنية لا عادة الصرف. دراسة تُعامل الدوحة كدبي مصغّرة ستُخطئ حمد والممثل المحلي. بيونيكسس تعمل على الحساب. الدليل الإنجليزي أطول؛ هذه الصفحة بالعربية.',
  stats: [
    { value: '10+', label: 'شركة نذكرها وندرسها' },
    { value: 'QPI / QLife', label: 'التصنيع المحلي الناشئ' },
    { value: 'MOPH', label: 'وزارة الصحة العامة' },
    { value: 'HMC', label: 'قناة حمد الحكومية' },
  ],
  companies: [
    { name: 'Qatar Pharmaceutical Industries (QPI)', hq: 'قطر', type: 'محلي', focus: 'تصنيع محلي قيد التوسع', notes: 'مصنع جديد في أفق الرؤية؛ قصة توطين لا حصة اليوم فقط' },
    { name: 'QLife Pharma', hq: 'قطر', type: 'محلي', focus: 'التئام جروح وقلب', notes: 'اعتماد منظمة الصحة؛ محفظة محلية نامية' },
    { name: 'Pfizer', hq: 'الولايات المتحدة', type: 'متعدد الجنسيات', focus: 'أورام ولقاحات', notes: 'حضور حكومي وخاص' },
    { name: 'Novartis', hq: 'سويسرا', type: 'متعدد الجنسيات', focus: 'أورام ومناعة', notes: 'قوائم مستشفيات قطر' },
    { name: 'Roche', hq: 'سويسرا', type: 'متعدد الجنسيات', focus: 'أورام وتشخيص', notes: 'شراكة تخصصية مع سدرة وغيرها' },
    { name: 'Sanofi', hq: 'فرنسا', type: 'متعدد الجنسيات', focus: 'سكري ولقاحات', notes: 'فرانشايز مزمن' },
    { name: 'AstraZeneca', hq: 'المملكة المتحدة / السويد', type: 'متعدد الجنسيات', focus: 'أورام وجهاز تنفسي', notes: 'تسجيل الوزارة ومناقصات المستشفى' },
    { name: 'Hikma Pharmaceuticals', hq: 'الأردن / المملكة المتحدة', type: 'إقليمي', focus: 'حقن وجنيس', notes: 'حساب المستشفى القطري' },
    { name: 'Julphar', hq: 'الإمارات', type: 'إقليمي', focus: 'جنيس وإنسولين', notes: 'تصدير خليجي إلى قطر' },
    { name: 'Doha Pharmacy', hq: 'قطر', type: 'موزّع', focus: 'صيدلية وتوزيع', notes: 'حساب تجزئة يُذكر أولاً' },
    { name: 'Qatar Pharmacy', hq: 'قطر', type: 'موزّع', focus: 'سلسلة صيدليات', notes: 'تجزئة نامية إلى جانب حمد' },
  ],
  faq: [
    {
      q: 'من أبرز شركات الأدوية في قطر؟',
      a: 'كي بي آي وكيو لايف محلياً. فايزر ونوفارتس وروش وسانوفي وأسترازينيكا دولياً. هيكما وجلفار إقليمياً. صيدلية الدوحة وصيدلية قطر على التجزئة. حمد هي القناة الحكومية حتى إن لم تُدرج كـ«شركة أدوية».',
    },
    {
      q: 'هل التصنيع المحلي جاهز ليُقاس كحصة؟',
      a: 'هو قصة توسع تحت الرؤية أكثر مما هو حصة اليوم. نذكر كي بي آي وكيو لايف لأن الموجز يسأل عنهما — لا لأنهما يغنيان عن الاستيراد.',
    },
    {
      q: 'كيف نتعامل مع حمد في الدراسة؟',
      a: 'كحساب شراء لا كحاشية. دراسة قطاع خاص فقط في قطر تُخطئ أكبر مزوّد.',
    },
    {
      q: 'هل ننسخ استبيان دبي على الدوحة؟',
      a: 'لا. ممثل محلي إلزامي، وحمد كقناة، وتصنيع ناشئ. هذه واقعة قطرية لا خليجية عامة.',
    },
    {
      q: 'أين الصفحة الإنجليزية؟',
      a: '/pharmaceutical-companies-qatar للدليل، و/insights/top-market-research-companies-qatar-2026 لشركات الأبحاث.',
    },
  ],
  related: [
    { to: '/insights/top-market-research-companies-qatar-2026', label: 'أفضل شركات أبحاث السوق في قطر (إنجليزي)' },
    { to: '/pharmaceutical-companies-qatar', label: 'الدليل الإنجليزي لشركات الأدوية في قطر' },
    { to: '/ar/pharmaceutical-companies-uae', label: 'شركات الأدوية في الإمارات' },
    { to: '/ar/pharmaceutical-companies-kuwait', label: 'شركات الأدوية في الكويت' },
    { to: '/iqvia-alternative', label: 'بديل IQVIA' },
    { to: '/account-level-market-research', label: 'بيانات على مستوى الحساب' },
  ],
  enPath: '/pharmaceutical-companies-qatar',
  publishedDate: PUBLISHED,
  modifiedDate: PUBLISHED,
};

export const AR_PHARMA_DIRECTORIES: ArPharmaDirectoryConfig[] = [EGYPT, UAE, KSA, KUWAIT, OMAN, QATAR];

export function getArPharmaDirectory(country: ArPharmaCountrySlug): ArPharmaDirectoryConfig | undefined {
  return AR_PHARMA_DIRECTORIES.find((d) => d.countrySlug === country);
}

export function getArPharmaDirectoryByPath(path: string): ArPharmaDirectoryConfig | undefined {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return AR_PHARMA_DIRECTORIES.find((d) => d.path === normalized);
}

export function getArPharmaDirectorySitemapPages(): Array<{
  path: string;
  lastmod: string;
  priority: string;
  changefreq: string;
}> {
  return AR_PHARMA_DIRECTORIES.map((d) => ({
    path: d.path,
    lastmod: d.modifiedDate,
    priority: '0.75',
    changefreq: 'monthly',
  }));
}
