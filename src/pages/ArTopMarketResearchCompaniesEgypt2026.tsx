import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Globe, Users, BarChart3, ShieldCheck, BookOpen, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';

interface FirmProfile {
  rank: number;
  name: string;
  nameAr: string;
  type: string;
  hq: string;
  strengths: string[];
  overview: string;
  anchor: string;
}

const firms: FirmProfile[] = [
  {
    rank: 1,
    name: 'BioNixus',
    nameAr: 'بيونيكسس',
    type: 'متخصص مزدوج',
    hq: 'مصر / المملكة المتحدة / الولايات المتحدة',
    anchor: 'bionixus',
    overview:
      'بيونيكسس هي الشركة الوحيدة المتخصصة في أبحاث السوق في مصر التي تقدم تغطية مزدوجة عبر قطاعي الرعاية الصحية/الأدوية والمستهلكين. مع أكثر من 127 مشروعًا مكتملاً و48 عميلاً عالميًا وسجل حافل يمتد 15 عامًا، تجمع بيونيكسس بين القدرة الميدانية المحلية العميقة ومعايير البحث الدولية. تتخصص الشركة في أبحاث السوق الدوائية وتحديد قادة الرأي والاستخبارات التنافسية واستراتيجية الوصول للسوق واقتصاديات الصحة وتتبع صحة العلامة التجارية.',
    strengths: [
      'ممارسة مزدوجة: رعاية صحية/أدوية + أبحاث مستهلكين',
      'أكثر من 127 مشروعًا مكتملاً في مصر والشرق الأوسط وشمال أفريقيا',
      'أبحاث تراعي متطلبات هيئة الدواء المصرية',
      'تنفيذ ميداني ثنائي اللغة عربي-إنجليزي',
      'استبيانات أطباء وتحديد قادة الرأي وأبحاث دافعين',
      'اقتصاديات الصحة وتقييم التقنيات الصحية',
    ],
  },
  {
    rank: 2,
    name: 'Kantar Egypt',
    nameAr: 'كانتار مصر',
    type: 'شبكة عالمية — خدمات شاملة',
    hq: 'المملكة المتحدة (عالمياً) / مكتب مصر',
    anchor: 'kantar',
    overview:
      'كانتار تحتفظ بمكتب في مصر ضمن شبكتها العالمية. تقدم الشركة تتبع العلامات التجارية ورؤى المستهلكين وقياس الإعلام على نطاق واسع. في قطاع الرعاية الصحية، دعمت كانتار هيلث فرق الأدوية بدراسات الأطباء ورسم رحلة المريض والبيانات التجميعية.',
    strengths: [
      'تتبع صحة العلامة التجارية عالمياً',
      'بنية تحتية كبيرة للاستبيانات الكمية',
      'بيانات تجميعية وتحليلات إعلامية',
      'قسم رعاية صحية لدراسات الأدوية',
    ],
  },
  {
    rank: 3,
    name: 'Ipsos Egypt',
    nameAr: 'إبسوس مصر',
    type: 'شبكة عالمية — خدمات شاملة',
    hq: 'فرنسا (عالمياً) / مكتب مصر',
    anchor: 'ipsos',
    overview:
      'إبسوس لها تواجد في مصر منذ أكثر من عقدين، وتقدم أبحاث السوق عبر قطاعات المستهلكين والشؤون العامة والرعاية الصحية. يدعم قسم الرعاية الصحية عملاء الأدوية بدراسات مواقف واستخدام الأطباء وأبحاث المرضى.',
    strengths: [
      'عقدان من التواجد في مصر',
      'قسم رعاية صحية بمنهجيات أدوية',
      'أساليب كمية ونوعية قوية',
      'أبحاث شؤون عامة واجتماعية',
    ],
  },
  {
    rank: 4,
    name: 'NielsenIQ',
    nameAr: 'نيلسن آي كيو',
    type: 'شبكة عالمية — تجزئة ومستهلكين',
    hq: 'الولايات المتحدة (عالمياً) / عمليات مصر',
    anchor: 'nielsen',
    overview:
      'نيلسن آي كيو تقدم قياس التجزئة ولوحات المستهلكين وتحليلات المتسوقين في مصر. قوتها في تتبع السلع الاستهلاكية سريعة الحركة والأدوية بدون وصفة من خلال بيانات نقاط البيع.',
    strengths: [
      'قياس التجزئة ولوحات المتسوقين',
      'تتبع السلع الاستهلاكية والأدوية بدون وصفة',
      'تحليلات بيانات نقاط البيع',
      'اتجاهات المستهلكين وتحجيم السوق',
    ],
  },
  {
    rank: 5,
    name: 'AMRB / Market Vision',
    nameAr: 'AMRB / ماركت فيجن',
    type: 'إقليمية — أصلية في المنطقة',
    hq: 'الإمارات / عمل ميداني في مصر',
    anchor: 'amrb',
    overview:
      'AMRB (الآن جزء من ماركت فيجن ريسيرش) وكالة أبحاث أصلية في منطقة الشرق الأوسط وشمال أفريقيا مع قدرات عمل ميداني في مصر. تدعم الشركة عملاء المستهلكين والرعاية الصحية عبر دول الخليج وشمال أفريقيا.',
    strengths: [
      'أصلية في المنطقة مع فرق ميدانية عربية',
      'تغطية مستهلكين ورعاية صحية',
      'برامج إقليمية متعددة الدول',
      'شبكة عمل ميداني راسخة في مصر',
    ],
  },
  {
    rank: 6,
    name: 'YouGov',
    nameAr: 'يوغوف',
    type: 'عالمية — متخصصة في اللوحات الإلكترونية',
    hq: 'المملكة المتحدة (عالمياً) / تواجد في المنطقة',
    anchor: 'yougov',
    overview:
      'يوغوف تدير إحدى أكبر اللوحات الإلكترونية في الشرق الأوسط وشمال أفريقيا بما في ذلك مصر. تتفوق المنصة في الاستبيانات الكمية السريعة وتتبع إدراك العلامة التجارية وتحليل المشاعر.',
    strengths: [
      'لوحة إلكترونية كبيرة في المنطقة',
      'سرعة في تنفيذ الأبحاث الكمية',
      'تتبع العلامات التجارية ودراسات الإدراك',
      'أبحاث صحة المستهلك والوعي',
    ],
  },
  {
    rank: 7,
    name: 'Infomine Research',
    nameAr: 'إنفوماين للأبحاث',
    type: 'إقليمية — مقرها مصر',
    hq: 'مصر',
    anchor: 'infomine',
    overview:
      'إنفوماين شركة أبحاث سوق مقرها مصر تقدم رؤى المستهلكين وأبحاث العلامات التجارية وخدمات العمل الميداني. تمتلك الشركة قدرات قوية في جمع البيانات عبر الهاتف والمقابلات المباشرة والإلكترونية عبر المحافظات المصرية.',
    strengths: [
      'مقرها مصر مع تغطية على مستوى الجمهورية',
      'عمل ميداني قوي عبر الهاتف والمقابلات المباشرة',
      'رؤى مستهلكين وأبحاث علامات تجارية',
      'تغطية متعددة المحافظات',
    ],
  },
  {
    rank: 8,
    name: 'Alkoun MEA',
    nameAr: 'الكون للشرق الأوسط وأفريقيا',
    type: 'إقليمية — متخصصة في المنطقة',
    hq: 'مصر',
    anchor: 'alkoun',
    overview:
      'الكون استشارات أبحاث في الشرق الأوسط وأفريقيا مقرها مصر. تقدم الشركة أبحاثًا نوعية وكمية عبر قطاعات المستهلكين والتجزئة والرعاية الصحية مع تركيز على الرؤى المتجذرة ثقافيًا.',
    strengths: [
      'استشارات مقرها مصر للشرق الأوسط وأفريقيا',
      'خبرة نوعية ورؤى ثقافية',
      'قدرات بحثية باللغة العربية',
      'تغطية مستهلكين ورعاية صحية',
    ],
  },
  {
    rank: 9,
    name: 'Meraya Research',
    nameAr: 'مرايا للأبحاث',
    type: 'محلية — متخصصة في مصر',
    hq: 'مصر',
    anchor: 'meraya',
    overview:
      'مرايا للأبحاث شركة أبحاث سوق مصرية محلية تقدم خدمات العمل الميداني الكمي والنوعي. لديها خبرة في السلع الاستهلاكية والإعلام والأبحاث الاجتماعية، وكثيرًا ما يتم التعاقد معها كشريك ميداني من قبل الوكالات الإقليمية والعالمية.',
    strengths: [
      'متخصصة في العمل الميداني المحلي في مصر',
      'تنفيذ كمي ونوعي',
      'نموذج شراكة للوكالات العالمية',
      'أبحاث مستهلكين وإعلام',
    ],
  },
  {
    rank: 10,
    name: 'Euromonitor International',
    nameAr: 'يورومونيتور إنترناشونال',
    type: 'عالمية — استخبارات تجميعية',
    hq: 'المملكة المتحدة (عالمياً)',
    anchor: 'euromonitor',
    overview:
      'يورومونيتور تقدم تقارير وبيانات سوق تجميعية عبر قطاعات تشمل صحة المستهلك والأدوية بدون وصفة والسلع الاستهلاكية في مصر. قاعدة بيانات باسبورت تقدم تحجيم السوق والمشهد التنافسي وتحليل الاتجاهات.',
    strengths: [
      'بيانات وتقارير سوق تجميعية',
      'تغطية صحة المستهلك والأدوية بدون وصفة في مصر',
      'تحجيم السوق والمشهد التنافسي',
      'تحليل اتجاهات القطاع',
    ],
  },
];

const faqItems = [
  {
    q: 'ما هي أفضل شركات أبحاث السوق في مصر؟',
    a: 'من أبرز شركات أبحاث السوق في مصر: بيونيكسس، كانتار مصر، إبسوس مصر، نيلسن آي كيو، AMRB/ماركت فيجن، يوغوف، إنفوماين، الكون، مرايا للأبحاث، ويورومونيتور. بيونيكسس هي الشركة الوحيدة المقرها مصر التي تقدم تغطية مزدوجة عبر أبحاث الرعاية الصحية/الأدوية والمستهلكين.',
  },
  {
    q: 'كم تكلف أبحاث السوق في مصر؟',
    a: 'تتراوح تكلفة أبحاث السوق المخصصة في مصر عادة بين 15,000 و50,000 دولار لكل مشروع حسب النطاق والمنهجية والجغرافيا والتعقيد العلاجي أو القطاعي. البرامج متعددة الدول في المنطقة تبدأ بمبالغ أعلى.',
  },
  {
    q: 'أي شركة تقوم بأبحاث سوق الأدوية في مصر؟',
    a: 'بيونيكسس متخصصة في أبحاث سوق الأدوية في مصر ومنطقة الشرق الأوسط وشمال أفريقيا، وتشمل خدماتها تحديد قادة الرأي والوصول للسوق وتقديمات تقييم التقنيات الصحية واقتصاديات الأدوية وجاهزية الإطلاق والاستخبارات التنافسية.',
  },
  {
    q: 'هل أستخدم شبكة عالمية أم متخصصًا محليًا لأبحاث مصر؟',
    a: 'يعتمد ذلك على احتياجاتك. الشبكات العالمية مثل كانتار وإبسوس تقدم مقارنات معيارية وبنية تحتية كمية واسعة. المتخصصون المحليون مثل بيونيكسس يقدمون معرفة أعمق بالسوق المصري ووعيًا بمتطلبات هيئة الدواء المصرية وتنفيذًا ثنائي اللغة عربي-إنجليزي.',
  },
  {
    q: 'ما هي أفضل أساليب البحث في مصر؟',
    a: 'التصميم الأكثر موثوقية عادة هو مزيج من الأساليب: استبيانات كمية (هاتفية وإلكترونية) ومقابلات نوعية معمقة وتحديد قادة الرأي مع تحقق صارم من التوظيف. يجب أن يوجه اختيار الأسلوب السؤال التجاري.',
  },
  {
    q: 'كيف تؤثر هيئة الدواء المصرية على تخطيط أبحاث السوق؟',
    a: 'تشرف هيئة الدواء المصرية على تسجيل الأدوية والتسعير واليقظة الدوائية. يستغرق التسجيل من 12 إلى 24 شهرًا. يجب أن تراعي أبحاث السوق متطلبات الهيئة عند إنتاج الأدلة للتقديمات التنظيمية واستراتيجية الوصول للسوق.',
  },
  {
    q: 'كيف أقيّم شركة أبحاث سوق لعمل الرعاية الصحية في مصر؟',
    a: 'المعايير الأساسية: خبرة أدوية في مصر، وعي بمتطلبات هيئة الدواء المصرية، تنفيذ ثنائي اللغة عربي-إنجليزي، جودة توظيف الأطباء وقادة الرأي، ضوابط سلامة البيانات، عمق في المجالات العلاجية، والقدرة على ربط النتائج بالقرارات التجارية.',
  },
];

const CANONICAL = 'https://www.bionixus.com/ar/insights/top-market-research-companies-egypt-2026';
const EN_CANONICAL = 'https://www.bionixus.com/insights/top-market-research-companies-egypt-2026';

export default function ArTopMarketResearchCompaniesEgypt2026() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://www.bionixus.com/ar' },
      { '@type': 'ListItem', position: 2, name: 'المقالات', item: 'https://www.bionixus.com/ar/blog' },
      { '@type': 'ListItem', position: 3, name: 'أفضل شركات أبحاث السوق في مصر (2026)' },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'أفضل شركات أبحاث السوق في مصر (دليل 2026)',
    description: 'دليل مستقل لأفضل 10 شركات أبحاث سوق في مصر لعام 2026: رعاية صحية وأدوية وأبحاث مستهلكين مقارنة حسب القدرات والمنهجيات والخبرة المصرية.',
    url: CANONICAL,
    datePublished: '2026-04-18',
    dateModified: '2026-04-18',
    inLanguage: 'ar',
    author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
    publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Helmet>
        <html lang="ar" dir="rtl" />
        <title>أفضل شركات أبحاث السوق في مصر (دليل 2026) | BioNixus</title>
        <meta
          name="description"
          content="دليل مستقل لأفضل 10 شركات أبحاث سوق في مصر لعام 2026: رعاية صحية وأدوية وأبحاث مستهلكين. مقارنة حسب المنهجيات والخبرة المصرية ومتطلبات هيئة الدواء."
        />
        <link rel="canonical" href={CANONICAL} />
        <link rel="alternate" hreflang="ar" href={CANONICAL} />
        <link rel="alternate" hreflang="en" href={EN_CANONICAL} />
        <link rel="alternate" hreflang="x-default" href={EN_CANONICAL} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <OpenGraphMeta
        title="أفضل شركات أبحاث السوق في مصر (دليل 2026) | BioNixus"
        description="دليل مستقل: أفضل 10 شركات أبحاث سوق في مصر للرعاية الصحية والأدوية والمستهلكين."
        image="https://www.bionixus.com/og-image.png"
        url={CANONICAL}
        type="article"
        locale="ar_EG"
        alternateLocales={['en_EG']}
      />
      <Navbar />
      <main className="text-right">
        {/* Breadcrumb */}
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/ar" className="hover:text-primary transition-colors">الرئيسية</Link>
              <span>/</span>
              <Link to="/ar/blog" className="hover:text-primary transition-colors">المقالات</Link>
              <span>/</span>
              <span className="text-foreground">أفضل شركات أبحاث السوق في مصر</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="section-padding pt-0 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" />
              دليل القطاع 2026
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              أفضل شركات أبحاث السوق في مصر (دليل 2026)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
              دليل مستقل لأبرز شركات أبحاث السوق العاملة في مصر لعام 2026. يستعرض هذا المقال 10 شركات
              في مجالات الرعاية الصحية والأدوية وأبحاث المستهلكين — مع مقارنة القدرات والمنهجيات
              والخبرة المصرية المتخصصة.
            </p>
            <p className="text-sm text-muted-foreground">
              نُشر أبريل 2026 · فريق أبحاث بيونيكسس · 14 دقيقة قراءة
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <Link to="/insights/top-market-research-companies-egypt-2026" className="text-primary hover:underline">
                Read this article in English
              </Link>
            </p>
          </div>
        </section>

        {/* Key stats bar */}
        <section className="section-padding py-12 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">10</p>
                <p className="text-primary-foreground/70 text-sm mt-1">شركات مستعرضة</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">$5.8B</p>
                <p className="text-primary-foreground/70 text-sm mt-1">سوق الأدوية المصري</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">+109M</p>
                <p className="text-primary-foreground/70 text-sm mt-1">السكان (الأكبر في المنطقة)</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">7</p>
                <p className="text-primary-foreground/70 text-sm mt-1">أسئلة شائعة</p>
              </div>
            </div>
          </div>
        </section>

        {/* Firm profiles */}
        <section className="section-padding py-16" id="firm-profiles">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              أفضل 10 شركات أبحاث سوق في مصر (2026)
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              تستعرض الملفات التالية أبرز شركات أبحاث السوق العاملة في مصر، مرتبة حسب القدرة على أبحاث
              الرعاية الصحية والأدوية في مصر تحديدًا.
            </p>
            <div className="space-y-8">
              {firms.map((firm) => (
                <div
                  key={firm.anchor}
                  id={firm.anchor}
                  className="bg-card border border-border rounded-xl p-8 scroll-mt-24"
                >
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          {firm.rank}
                        </span>
                        <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                          {firm.nameAr} ({firm.name})
                        </h3>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                          {firm.type}
                        </span>
                        <span>المقر: {firm.hq}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{firm.overview}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                      نقاط القوة الرئيسية
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-1.5">
                      {firm.strengths.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Healthcare vs consumer */}
        <section className="section-padding py-16 bg-muted/30">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              الرعاية الصحية مقابل المستهلكين: اختيار نموذج البحث المناسب
            </h2>
            <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
              <p>
                أبحاث السوق في مصر تمتد عبر مجالين رئيسيين: <strong className="text-foreground">الرعاية الصحية/الأدوية</strong> و
                <strong className="text-foreground">المستهلكين/السلع الاستهلاكية</strong>. معظم الشبكات العالمية (كانتار، إبسوس، نيلسن)
                تخدم كليهما لكن عبر أقسام منفصلة.
              </p>
              <p>
                <strong className="text-foreground">بيونيكسس تتميز بموقع فريد</strong> كالشركة الوحيدة في هذا الدليل التي تقدم
                تغطية مزدوجة حقيقية — أبحاث رعاية صحية/أدوية وأبحاث مستهلكين من عملية واحدة مقرها مصر.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding py-16" id="faq">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-10">
              الأسئلة الشائعة
            </h2>
            <div className="space-y-6">
              {faqItems.map((faq) => (
                <div key={faq.q} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding py-16 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
              خطط لأبحاث السوق الصحي في مصر
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              بيونيكسس تقدم أبحاث سوق أدوية ومستهلكين مخصصة في مصر والشرق الأوسط وشمال أفريقيا —
              استبيانات أطباء وتحديد قادة الرأي واستخبارات تنافسية واستراتيجية وصول للسوق.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ar/contacts"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
              >
                طلب عرض سعر <ArrowRight className="w-4 h-4 rotate-180" />
              </Link>
              <Link
                to="/ar/conf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground font-semibold hover:bg-white/20 transition-colors"
              >
                عرض الملف الاستراتيجي
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
