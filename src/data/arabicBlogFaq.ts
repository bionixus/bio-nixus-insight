import type { PortableTextBlock } from '@portabletext/types';

export type BlogFaqItem = { question: string; answer: string };

const EN_FAQ_MARKERS =
  /\b(Who is this|How does BioNixus support pharmaceutical teams in the Gulf|What is the typical SFDA|Scope your|Request a commercial briefing)\b/i;

export function looksLikeEnglishFaq(items: BlogFaqItem[]): boolean {
  if (!items.length) return true;
  return items.some((item) => EN_FAQ_MARKERS.test(item.question) || EN_FAQ_MARKERS.test(item.answer));
}

export const BLOG_INDEX_FAQ_AR: BlogFaqItem[] = [
  {
    question: 'ما الموضوعات التي يغطيها مدونة BioNixus؟',
    answer:
      'مقالات عن البحث الكمي مع الأطباء، برامج KOL النوعية، الوصول إلى السوق في السعودية والخليج وأوروبا وعالمياً، تبني المستشفيات، التحديثات التنظيمية واستراتيجيات الإطلاق — لفرق Commercial وMedical وAccess.',
  },
  {
    question: 'كم مرة تُنشر رؤى جديدة؟',
    answer:
      'ننشر مقالات عملية من برامج ميدانية جارية مع تغيّر الأسواق. اشترك في النشرة الإخبارية في تذييل الموقع للحصول على أبرز أبحاث السوق الدوائية شهرياً.',
  },
  {
    question: 'هل يمكنني طلب موضوع أو تحليل عميق لبلد معيّن؟',
    answer:
      'نعم. استخدم نموذج التواصل مع مجال العلاج والجغرافيا وموعد القرار — عادةً نرد خلال يوم عمل واحد بمخطط منهجية مخصص.',
  },
];

export const GENERIC_ARABIC_BLOG_FAQ: BlogFaqItem[] = [
  {
    question: 'لمن يُعد هذا الدليل؟',
    answer:
      'مسؤولو Commercial وMarket Access وMedical Affairs في السعودية والخليج وفرق دولية تركز على MENA. يدعم تخطيط التسعيس والوصول والرؤى — ولا يغني عن استشارة طبية خاصة بالمنتج.',
  },
  {
    question: 'كيف يتحقق الفريق من تقديرات حجم السوق؟',
    answer:
      'استخدم مصادر متعددة — ملخصات الجهات التنظيمية، وبيانات وبائية محلية، ومقابلات مع الدافعين. BioNixus توصي بنمذجة محافظة تتماشى مع SFDA وCHI وNUPCO بدلاً من توقعات عالمية واحدة.',
  },
  {
    question: 'كيف يعمل مسار SFDA بعد تسجيل المنتج؟',
    answer:
      'بعد التسجيل، يُقيَّم المنتج ضمن قوائم CHI وNUPCO وآليات التسعير والتفاوض. يختلف المسار حسب فئة المنتج والمنافسة والأدلة المتاحة — ويؤثر مباشرة على الإيرادات والوصول.',
  },
  {
    question: 'متى يكون البحث المخصص أفضل من البيانات المجمّعة؟',
    answer:
      'البيانات المجمّعة تجيب عن الحجم والحصة؛ البحث الكمي والنوعي المخصص يفسر لماذا يختلف سلوك الوصف والتغطية بين السعودية والإمارات ومصر. التصميم المختلط شائع لقرارات الوصول والإطلاق.',
  },
  {
    question: 'كيف تدعم BioNixus فرق الأدوية في MENA؟',
    answer:
      'BioNixus تقدم أبحاث سوق الرعاية الصحية، استشارات الوصول إلى السوق، تحليل فجوات SFDA، رسم KOL، ومحاكاة تنافسية في السعودية والخليج وعالمياً. تواصل مع BioNixus لطلب إحاطة.',
  },
  {
    question: 'هل يتضمن هذا المقال توصيات علاجية؟',
    answer:
      'لا. يتناول العمليات التجارية والوصول والبحث فقط. على الأطباء اتباع معلومات المنتج المعتمدة والإرشادات المحلية.',
  },
];

const ARABIC_BLOG_FAQ_BY_SLUG: Record<string, BlogFaqItem[]> = {
  'gcc-pharmaceuticals-market-arabic-2026': [
    {
      question: 'ما الذي يميز سوق الأدوية في دول الخليج عن أوروبا؟',
      answer:
        'الخليج يجمع بين نمو سكاني مرتفع، وبرامج تنويع اقتصادي، وآليات تسعير مركزية عبر CHI وNUPCO وSFDA — مع تنوع كبير بين السعودية والإمارات وقطر ومصر.',
    },
    {
      question: 'كيف يؤثر NUPCO على دخول السوق في السعودية؟',
      answer:
        'NUPCO يدير مشتريات المستشفيات الحكومية والمركزية؛ قرارات القائمة والتسعير تحدد سرعة التبني والحجم الفعلي بعد SFDA.',
    },
    {
      question: 'ما دور SFDA في استراتيجية الإطلاق؟',
      answer:
        'SFDA يحدد متطلبات التسجيل والأدلة؛ يجب مواءمة خطة MR مع توقيت SFDA وCHI وNUPCO قبل الإطلاق التجاري.',
    },
    {
      question: 'هل يمكن مقارنة GCC بأسواق EU من حيث HTA؟',
      answer:
        'EU تعتمد HTA وطنية معقدة؛ GCC أسرع في بعض المسارات لكن أكثر مركزية في التسعير — يتطلب أبحاثاً منفصلة لكل سوق.',
    },
    {
      question: 'كيف تساعد BioNixus فرق GCC؟',
      answer:
        'بتحليل السوق، استبيانات الأطباء، KOL، RWE، ومراقبة الإطلاق عبر السعودية والإمارات ومصر والخليج.',
    },
  ],
  'saudi-healthcare-market-research-firms-ar': [
    {
      question: 'ما معايير اختيار شريك أبحاث في السعودية؟',
      answer:
        'الخبرة في SFDA وCHI وNUPCO، شبكة أطباء سعوديين، امتثال PDPL، وقدرة على دمج رؤى نوعية وكمية في إطار واحد.',
    },
    {
      question: 'هل تختلف MR عن EU في السوق السعودي؟',
      answer:
        'نعم — تركز على الدافعين الحكوميين، المستشفيات المركزية، وسلوك الوصف في القطاع الخاص بجانب المسارات التنظيمية المحلية.',
    },
    {
      question: 'ما دور KOL في السعودية؟',
      answer:
        'KOL يؤثرون على المسارات السريرية والتبني في المستشفيات المرجعية؛ رسم الشبكة مبكراً ضروري للإطلاق.',
    },
    {
      question: 'كيف تدعم BioNixus السوق السعودي؟',
      answer:
        'ببرامج ميدانية، تحليل وصول، استبيانات أطباء، وخرائط KOL مصممة لقرارات Commercial وAccess.',
    },
  ],
  'pharmaceutical-market-research-middle-east-gcc': [
    {
      question: 'ما نطاق أبحاث السوق الدوائية في الشرق الأوسط؟',
      answer:
        'يشمل السعودية والإمارات ومصر والخليج — مع تغطية SFDA وMOHAP وEgypt MOH وآليات التسعير والتغطية.',
    },
    {
      question: 'كيف تختلف أولويات البحث بين MENA وEU؟',
      answer:
        'MENA: دافعون مركزيون، قوائم، تفاوض حكومي. EU: HTA متعددة، مرجعية أسعار، تنوع وطني أكبر.',
    },
    {
      question: 'هل BioNixus تغطي أبحاثاً نوعية وكمية؟',
      answer:
        'نعم — استبيانات أطباء، مقابلات KOL، تحليل وصف، وبرامج RWE مصممة لكل سوق.',
    },
  ],
  'saudi-pharma-market-2026': [
    {
      question: 'ما أبرز محركات سوق الأدوية السعودي 2026؟',
      answer:
        'Vision 2030، توسع التغطية، محلي الصنع، وبرامج SFDA وCHI وNUPCO التي تسرّع الوصول مع ضغط تسعير.',
    },
    {
      question: 'كيف يؤثر التحول الرقمي على MR؟',
      answer:
        'بيانات Seha وNPHIES والسجلات الإلكترونية تفتح RWE — مع متطلبات خصوصية وامتثال PDPL.',
    },
    {
      question: 'ما دور BioNixus في الإطلاق السعودي؟',
      answer:
        'تخطيط أدلة، KOL، استبيانات، ومراقبة ما بعد الإطلاق مع خبرة GCC وعالمية.',
    },
  ],
  'quantitative-market-research-and-market-access': [
    {
      question: 'متى يكون البحث الكمي ضرورياً للوصول إلى السوق؟',
      answer:
        'عند تقدير حجم الوصف، تقسيم الأطباء، واختبار رسائل الدافعين قبل SFDA أو CHI — خاصة في السعودية والخليج.',
    },
    {
      question: 'كيف يُدمج MR الكمي مع نوعي؟',
      answer:
        'الكمي يحدد «ماذا»؛ النوعي يفسر «لماذا» — معاً يدعمان dossiers واستراتيجية تسعير.',
    },
  ],
};

const EN_SUMMARY_MARKERS =
  /\b(market access and healthcare market research guidance|without substituting clinical advice|summarizes payer|Scope your|Executive summary)\b/i;

export function looksLikeEnglishExecutiveSummary(text: string): boolean {
  return EN_SUMMARY_MARKERS.test(text);
}

const ARABIC_EXECUTIVE_SUMMARY_BY_SLUG: Record<string, string> = {
  'gcc-pharmaceuticals-market-arabic-2026':
    'سوق الأدوية في دول الخليج 2026: الوصول إلى السوق وأبحاث الرعاية الصحية لفرق Commercial وMedTech. BioNixus تلخص SFDA وCHI وNUPCO والتسعير — دون استبدال المشورة السريرية.',
  'saudi-healthcare-market-research-firms-ar':
    'شركات أبحاث السوق الصحي في السعودية: معايير الاختيار، SFDA وCHI وNUPCO، وبرامج MR ميدانية — لفرق الأدوية الدولية والمحلية.',
  'pharmaceutical-market-research-middle-east-gcc':
    'أبحاث السوق الدوائية في الشرق الأوسط ودول الخليج: SFDA وMOHAP وEgypt MOH، KOL، RWE، واستراتيجيات الوصول لفرق Commercial.',
  'saudi-pharma-market-2026':
    'سوق الدواء السعودي 2026: Vision 2030، التحول الرقمي، SFDA وCHI — رؤى للفرق التجارية وAccess في المملكة وMENA.',
};

export function getArabicExecutiveSummary(title: string | undefined, slug: string | undefined): string {
  if (slug && ARABIC_EXECUTIVE_SUMMARY_BY_SLUG[slug]) {
    return ARABIC_EXECUTIVE_SUMMARY_BY_SLUG[slug];
  }
  const focus = title?.split(':')[0]?.trim() || 'هذا المقال';
  return `${focus}: الوصول إلى السوق وأبحاث الرعاية الصحية في السعودية والخليج وMENA لفرق الأدوية وMedTech. BioNixus تلخص الدافعين والتنظيم والرؤى — دون استبدال المشورة السريرية.`;
}

const TOC_HEADING_AR_BY_ANCHOR: Record<string, string> = {
  'key-insights': 'أبرز الرؤى',
  'detailed-analysis': 'تحليل مفصل',
  'gcc-implications': 'الوصول إلى السوق والتغطية في الخليج',
  'gcc-market-access': 'الوصول إلى السوق في GCC',
  'bionixus-advisory': 'استشارة BioNixus',
  'related-reading': 'قراءات ذات صلة',
  'market-context': 'سياق السوق والسياسات',
  'definitions-use-cases': 'التعريفات وحالات الاستخدام',
  'operational-playbook': 'دليل عملي لفرق الرؤى والوصول',
  'future-outlook': 'آفاق 2026 وما بعد',
  faq: 'الأسئلة الشائعة',
  einleitung: 'مقدمة',
  fazit: 'الخلاصة',
};

export function localizeTocForArabic<T extends { heading?: string; anchor?: string }>(
  items: T[] | null | undefined,
): T[] | null {
  if (!items?.length) return null;
  return items.map((item) => {
    const anchor = item.anchor?.replace(/^#/, '') ?? '';
    const arHeading = anchor ? TOC_HEADING_AR_BY_ANCHOR[anchor] : undefined;
    return arHeading ? { ...item, heading: arHeading } : item;
  });
}

function portableTextToPlainText(blocks: unknown): string {
  if (!Array.isArray(blocks)) return '';
  return blocks
    .flatMap((block) => {
      if (block && typeof block === 'object' && 'children' in block && Array.isArray(block.children)) {
        return block.children.map((child: { text?: string }) => child.text ?? '');
      }
      return [];
    })
    .join(' ')
    .trim();
}

export function resolveArabicExecutiveSummary(
  title: string | undefined,
  slug: string | undefined,
  summary: string | PortableTextBlock[] | null,
): string | PortableTextBlock[] | null {
  if (!summary) {
    return getArabicExecutiveSummary(title, slug);
  }
  const plain = typeof summary === 'string' ? summary : portableTextToPlainText(summary);
  if (!plain || looksLikeEnglishExecutiveSummary(plain)) {
    return getArabicExecutiveSummary(title, slug);
  }
  return summary;
}

export function getArabicBlogFaqItems(
  slug: string | undefined,
  title: string | undefined,
  sanityFaq: BlogFaqItem[] = [],
): BlogFaqItem[] {
  if (slug && ARABIC_BLOG_FAQ_BY_SLUG[slug]) {
    return ARABIC_BLOG_FAQ_BY_SLUG[slug];
  }
  if (sanityFaq.length > 0 && !looksLikeEnglishFaq(sanityFaq)) {
    return sanityFaq;
  }
  const focus = title?.split(':')[0]?.trim() || 'هذا الدليل';
  return GENERIC_ARABIC_BLOG_FAQ.map((item, index) =>
    index === 0 ? { ...item, question: `لمن يُعد ${focus}؟` } : item,
  );
}
