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
    { name: 'المدونة', href: '/blog' },
    { name: 'المدونة العربية', href: '/ar/arabic-blog-alsawdyh' },
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
            { name: 'المدونة', href: '/blog' },
            { name: 'المدونة العربية', href: '/ar/arabic-blog-alsawdyh' },
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
            <p className="text-muted-foreground leading-relaxed">
              للمزيد من الخدمات المرتبطة، تفضل بزيارة صفحة{' '}
              <Link to="/market-research-saudi-arabia-pharmaceutical" className="text-primary underline">
                أبحاث السوق الدوائي في السعودية
              </Link>
              .
            </p>
          </div>
        </section>

        <CTASection variant="research-proposal" />
      </main>
      <Footer />
    </div>
  );
}
