import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { ConversionCTA } from '@/components/conversion/ConversionCTA';
import { ListicleProposalCta } from '@/components/seo/ListicleProposalCta';
import { PharmaCompaniesFaqSection } from '@/components/seo/PharmaCompaniesFaqSection';
import {
  DirectoryGoldLink,
  DirectoryHero,
  DirectoryJumpNav,
  DirectoryLinkTile,
  DirectoryOutlineLink,
} from '@/components/seo/DirectoryPremium';
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
    <div className="directory-page min-h-screen" dir="rtl">
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
        <DirectoryHero
          breadcrumbs={[
            { name: 'الرئيسية', href: '/ar' },
            { name: config.h1, href: config.path },
          ]}
          kicker="دليل شركات الأدوية 2026"
          h1={config.h1}
          lead={config.introLead}
          rest={<p>{config.introRest}</p>}
          stats={config.stats}
          actions={
            <>
              <DirectoryGoldLink to="#request-proposal">اطلب عرضاً</DirectoryGoldLink>
              <DirectoryOutlineLink href="#companies">تصفح الشركات</DirectoryOutlineLink>
            </>
          }
        />

        <DirectoryJumpNav
          items={[
            { href: '#companies', label: 'الشركات' },
            { href: '#related', label: 'روابط' },
            { href: '#faq', label: 'أسئلة' },
            { href: '#methodology', label: 'المنهجية' },
          ]}
        />

        <section className="section-padding py-16 bg-muted/30" id="companies">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              أبرز الشركات في هذا السوق
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              أسماء معلنة ندرسها على مستوى الحساب والعبوة. الأسماء اللاتينية كما تُذكر في العقود؛ الملاحظات بالعربية.
              هذه لقطة تحريرية لا ترتيب حصة.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-[#EDE9E3] shadow-[0_16px_50px_rgba(6,16,31,0.05)]">
              <table className="directory-table">
                <thead>
                  <tr>
                    <th>الشركة</th>
                    <th>المقر</th>
                    <th className="hidden md:table-cell">النوع</th>
                    <th className="hidden lg:table-cell">التركيز</th>
                    <th className="hidden xl:table-cell">ملاحظة</th>
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
                <DirectoryLinkTile key={link.to} to={link.to} title={link.label} />
              ))}
            </div>
          </div>
        </section>

        <PharmaCompaniesFaqSection items={config.faq} title="أسئلة متكررة" contained />

        <section className="section-padding py-12" id="methodology">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="premium-card p-8">
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

        <div id="request-proposal">
          <ListicleProposalCta
            countryName={config.countryNameEn}
            ctaId={`ar_pharma_${config.countrySlug}_footer`}
            headline="تحتاجون بيانات حساب أو عبوة في هذا السوق؟"
            body="بحث أولي يُكمّل التدقيق ولا يستبدله. عرض خلال 48 ساعة من موجز واضح."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
