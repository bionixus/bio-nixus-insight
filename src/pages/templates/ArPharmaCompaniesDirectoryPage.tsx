import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { ConversionCTA } from '@/components/conversion/ConversionCTA';
import { ListicleProposalCta } from '@/components/seo/ListicleProposalCta';
import { PharmaCompaniesFaqSection } from '@/components/seo/PharmaCompaniesFaqSection';
import { buildPharmaCompaniesFaqLd, buildPharmaCompaniesItemListLd } from '@/components/seo/pharmaCompaniesSeo';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import {
  getArPharmaDirectory,
  type ArPharmaCompanyType,
  type ArPharmaCountrySlug,
} from '@/data/arPharmaDirectories';

type Props = {
  countrySlug: ArPharmaCountrySlug;
};

const TYPE_BADGE: Record<ArPharmaCompanyType, string> = {
  محلي: 'bg-green-50 text-green-700',
  'متعدد الجنسيات': 'bg-blue-50 text-blue-700',
  إقليمي: 'bg-amber-50 text-amber-700',
  موزّع: 'bg-purple-50 text-purple-700',
};

export default function ArPharmaCompaniesDirectoryPage({ countrySlug }: Props) {
  const config = getArPharmaDirectory(countrySlug);
  if (!config) return null;

  const citationUrl = `https://www.bionixus.com${config.path}`;
  const enUrl = `https://www.bionixus.com${config.enPath}`;
  const ctr = getCtrSeo(config.path);
  const pageTitle = ctr?.title ?? config.title;
  const pageDescription = ctr?.description ?? config.metaDescription;

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Helmet>
        <html lang="ar" dir="rtl" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={citationUrl} />
        <link rel="alternate" hrefLang="ar" href={citationUrl} />
        <link rel="alternate" hrefLang="en" href={enUrl} />
        <link rel="alternate" hrefLang="x-default" href={enUrl} />
        <script type="application/ld+json">
          {JSON.stringify(buildPharmaCompaniesItemListLd(citationUrl, config.companies.map((c) => c.name)))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            inLanguage: 'ar',
            image: 'https://www.bionixus.com/og-image.png',
            headline: config.h1,
            description: pageDescription,
            url: citationUrl,
            datePublished: config.publishedDate,
            dateModified: config.modifiedDate,
            author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
            publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://www.bionixus.com/ar' },
              { '@type': 'ListItem', position: 2, name: config.h1, item: citationUrl },
            ],
          })}
        </script>
        <script type="application/ld+json">{JSON.stringify(buildPharmaCompaniesFaqLd(citationUrl, config.faq))}</script>
      </Helmet>
      <OpenGraphMeta
        title={pageTitle}
        description={pageDescription}
        image="https://www.bionixus.com/og-image.png"
        url={citationUrl}
        type="article"
        locale="ar_SA"
        alternateLocales={['en_US']}
        article={{
          publishedTime: config.publishedDate,
          modifiedTime: config.modifiedDate,
          section: 'شركات الأدوية',
        }}
      />
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav
              items={[
                { name: 'الرئيسية', href: '/ar' },
                { name: config.h1, href: config.path },
              ]}
              className="px-0 mb-2"
            />
          </div>
        </div>

        <section className="section-padding pt-0 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">دليل شركات الأدوية 2026</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              {config.h1}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">{config.introLead}</p>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">{config.introRest}</p>
          </div>
        </section>

        <section className="section-padding py-12 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {config.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-display font-bold">{stat.value}</p>
                  <p className="text-primary-foreground/70 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/30" id="companies">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              أبرز الشركات في هذا السوق
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              أسماء معلنة ندرسها على مستوى الحساب والعبوة. الأسماء اللاتينية كما تُذكر في العقود؛ الملاحظات بالعربية.
              هذه لقطة تحريرية لا ترتيب حصة.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary/5 border-b border-border">
                    <th className="text-right px-4 py-3 font-semibold text-foreground">الشركة</th>
                    <th className="text-right px-4 py-3 font-semibold text-foreground">المقر</th>
                    <th className="text-right px-4 py-3 font-semibold text-foreground hidden md:table-cell">النوع</th>
                    <th className="text-right px-4 py-3 font-semibold text-foreground hidden lg:table-cell">التركيز</th>
                    <th className="text-right px-4 py-3 font-semibold text-foreground hidden xl:table-cell">ملاحظة</th>
                  </tr>
                </thead>
                <tbody>
                  {config.companies.map((company, index) => (
                    <tr
                      key={company.name}
                      className={`border-b border-border ${index % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}
                    >
                      <td className="px-4 py-3 font-medium text-foreground">{company.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{company.hq}</td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${TYPE_BADGE[company.type]}`}
                        >
                          {company.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">{company.focus}</td>
                      <td className="px-4 py-3 text-muted-foreground text-xs hidden xl:table-cell">{company.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8">
              <ConversionCTA
                variant="talk-to-research"
                market={config.countryNameEn}
                sourceContext={`Arabic pharma directory — ${config.countryNameEn}`}
                defaultNeed="Brand and competitor data (account- or SKU-level)"
                ctaId={`ar_pharma_${config.countrySlug}_after_table`}
                ctaLocation="after_first_table"
              />
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="related">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">روابط ذات صلة</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {config.related.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary"
                >
                  {link.label}
                  <span className="text-primary transition-transform group-hover:-translate-x-1" aria-hidden>
                    &larr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PharmaCompaniesFaqSection items={config.faq} title="أسئلة متكررة" />

        <section className="section-padding py-12" id="methodology">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                المنهجية والمصادر
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                يجمع هذا الدليل وقائع معلنة من مواقع الشركات والهيئات ومن عمل بيونيكسس الميداني. ليس ترتيب حصة ولا بديلاً
                عن تدقيق IQVIA أو اشتراك نيلسن. بيونيكسس تبيع بحثاً أولياً على مستوى الحساب والعبوة يُكمّل تلك الاشتراكات.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                للنسخة الإنجليزية:{' '}
                <Link to={config.enPath} className="text-primary hover:underline">
                  {config.enPath}
                </Link>
                . للتواصل:{' '}
                <a href="mailto:admin@bionixus.com" className="text-primary hover:underline">
                  admin@bionixus.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <ListicleProposalCta
          countryName={config.countryNameEn}
          ctaId={`ar_pharma_${config.countrySlug}_footer`}
          headline="تحتاجون بيانات حساب أو عبوة في هذا السوق؟"
          body="بحث أولي يُكمّل التدقيق ولا يستبدله. عرض خلال 48 ساعة من موجز واضح."
        />
      </main>
      <Footer />
    </div>
  );
}
