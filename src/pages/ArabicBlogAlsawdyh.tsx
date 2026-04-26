import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'دليل البحث السوقي الدوائي في السعودية',
    inLanguage: 'ar',
    publisher: { '@type': 'Organization', name: 'BioNixus' },
  },
  buildBreadcrumbSchema([
    { name: 'الرئيسية', href: '/ar' },
    { name: 'المدونة العربية', href: '/ar/blog' },
    { name: 'دليل أبحاث السوق', href: '/ar/arabic-blog-alsawdyh' },
  ]),
];

export default function ArabicBlogAlsawdyh() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="المدونة العربية: أبحاث السوق الدوائي في السعودية | BioNixus"
        description="محتوى عربي متخصص حول أبحاث السوق الدوائي في السعودية ودول الخليج مع تركيز على التنظيم، التسعير، وديناميكيات التبني."
        canonical="/ar/arabic-blog-alsawdyh"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'الرئيسية', href: '/ar' },
            { name: 'المدونة العربية', href: '/ar/blog' },
            { name: 'دليل أبحاث السوق', href: '/ar/arabic-blog-alsawdyh' },
          ]}
        />

        <section className="py-16">
          <div className="container-wide max-w-4xl mx-auto">
            <h1 className="text-4xl font-display font-semibold text-foreground mb-4">
              دليل أبحاث السوق الدوائي في السعودية
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              يقدم هذا الدليل نظرة عملية حول كيفية تصميم أبحاث سوق دوائية تدعم القرارات التجارية والتنظيمية في المملكة
              العربية السعودية، مع مراعاة السياق المحلي وديناميكيات مقدمي الرعاية الصحية.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              نركز على ثلاثة محاور رئيسية: فهم أصحاب المصلحة، تحليل متطلبات الوصول إلى السوق، وتحويل النتائج إلى خطط
              تنفيذية قابلة للتطبيق.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              للمزيد من الخدمات المرتبطة، تفضل بزيارة صفحة{' '}
              <Link to="/market-research-saudi-arabia-pharmaceutical" className="text-primary underline">
                أبحاث السوق الدوائي في السعودية
              </Link>
              .
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mb-3">
              منهجية عملية لتصميم أبحاث السوق الدوائي في المملكة
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              تبدأ الدراسات القوية بتحديد قرار واضح: هل تحتاج إلى تقدير حجم الشريحة، أم فهم عوائق الوصف بعد صدور تعميم
              تنظيمي، أم تقييم استجابة الصيادلة لبرنامج دعم المرضى؟ بعد تحديد السؤال، نبني أدوات قياس تتوافق مع لغة
              المستجيبين وتفضيلاتهم العربية أو الإنجليزية، مع مراعاة خصوصية البيانات والمعايير المهنية لقطاع الرعاية
              الصحية.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              في السياق السعودي، تتداخل مسارات المستشفيات الحكومية والخاصة مع قنوات الصيدليات الكبرى والرقمية، لذلك لا
              يكفي استطلاع عام دون تمييز نوع المنشأة وحجم الوصف. نربط بين البيانات الكمية وبين مقابلات نوعية مع أصحاب
              قرار سريريين وماليين عند الحاجة، حتى تفهم لماذا تتحرك مؤشرات السوق—أو تتوقف—بعد تحديثات التسعير أو تغيير
              قوائم الأدوية في بعض المناطق.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              استخدم المقالات أدناه كنقاط دخول لمواضيع محددة، ثم انتقل إلى صفحات الخدمات والمدونة العربية الأوسع
              لمواءمة الأدلة مع استراتيجية الإطلاق أو الوصول إلى السوق لديكم.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">مقالات عربية</h2>
            <ul className="space-y-4 text-muted-foreground leading-relaxed list-disc pr-5 mb-6">
              <li>
                <Link
                  to="/ar/blog/saudi-healthcare-market-research-firms-ar"
                  className="text-primary font-medium hover:underline"
                >
                  أبرز شركات أبحاث السوق الصحي في المملكة العربية السعودية
                </Link>
                <span className="block text-sm mt-1">
                  ملخص المشهد، معايير اختيار الشريك، ونماذج شركات عالمية وإقليمية مع BioNixus.
                </span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              <Link to="/ar/blog" className="text-primary font-medium hover:underline">
                تصفح جميع المقالات العربية
              </Link>
            </p>
          </div>
        </section>

        <CTASection variant="research-proposal" />
      </main>
      <Footer />
    </div>
  );
}
