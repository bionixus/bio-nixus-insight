import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import {
  getMarketResearchCountryContent,
  type MarketResearchContentKey,
  type MarketResearchCountryContent,
} from '@/data/marketResearchCountryContent';

const SAUDI_BOFU_PATH = '/market-research-saudi-arabia-pharmaceutical';
const UAE_BOFU_PATH = '/uae-pharmaceutical-market-research';
const EGYPT_BOFU_PATH = '/egypt-pharmaceutical-market-research';

type MarketResearchCountryLandingProps = {
  contentKey: MarketResearchContentKey;
  /** Override content file (optional). */
  content?: MarketResearchCountryContent;
};

export default function MarketResearchCountryLanding({
  contentKey,
  content: contentOverride,
}: MarketResearchCountryLandingProps) {
  const content = contentOverride ?? getMarketResearchCountryContent(contentKey);
  if (!content) {
    return null;
  }

  const {
    title,
    description,
    canonical,
    h1,
    intro,
    countryLabel,
    primaryKeyword,
    faqItems,
    relatedLinks,
    regulatory,
    marketStructure,
    services,
    methodology,
    therapyFocus,
    process,
    deliverables,
    decisionBlueprint,
    hubLinkLabel,
  } = content;

  const isRtl = canonical.startsWith('/ar/');
  const hubLabel = hubLinkLabel ?? 'healthcare market research hub';
  const showSaudiBofuCta =
    contentKey === 'ksa' || contentKey === 'saudi' || contentKey === 'ar-ksa' || contentKey === 'ar-saudi';
  const showUaeBofuCta = contentKey === 'uae' || contentKey === 'ar-uae';
  const showEgyptBofuCta = contentKey === 'egypt' || contentKey === 'ar-egypt';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: h1,
      serviceType: primaryKeyword,
      areaServed: {
        '@type': 'Country',
        name: countryLabel,
      },
      provider: {
        '@type': 'Organization',
        name: 'BioNixus',
        url: 'https://www.bionixus.com',
      },
    },
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Market Research', href: '/market-research' },
      { name: h1, href: canonical },
    ]),
    buildFAQSchema(faqItems),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={title} description={description} canonical={canonical} jsonLd={jsonLd} />
      <Navbar />
      <main dir={isRtl ? 'rtl' : 'ltr'} lang={isRtl ? 'ar' : 'en'}>
        <BreadcrumbNav
          items={[
            { name: isRtl ? 'الرئيسية' : 'Home', href: isRtl ? '/ar' : '/' },
            { name: isRtl ? 'أبحاث السوق' : 'Market Research', href: '/market-research' },
            { name: h1, href: canonical },
          ]}
        />

        <section className="section-padding py-14 bg-gradient-to-b from-muted/30 to-background">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4">
              {h1}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">{intro}</p>
            <p className="text-muted-foreground leading-relaxed">
              {isRtl ? 'للمسارات التنفيذية حسب الدولة، ابدأ من ' : 'For country-by-country execution pathways, start from the '}
              <Link to="/healthcare-market-research" className="text-primary underline font-medium">
                {hubLabel}
              </Link>
              {isRtl ? '.' : '.'}
            </p>
            {showSaudiBofuCta ? (
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {isRtl ? (
                  <>
                    لبرامج الشركات الدوائية في المملكة، راجع{' '}
                    <Link to={SAUDI_BOFU_PATH} className="text-primary underline font-medium">
                      شركة أبحاث السوق الدوائية في السعودية
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    For company-level Saudi pharma programs, see our{' '}
                    <Link to={SAUDI_BOFU_PATH} className="text-primary underline font-medium">
                      pharmaceutical market research company in Saudi Arabia
                    </Link>
                    .
                  </>
                )}
              </p>
            ) : null}
            {showUaeBofuCta ? (
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {isRtl ? (
                  <>
                    لبرامج الشركات الدوائية في الإمارات، راجع{' '}
                    <Link to={UAE_BOFU_PATH} className="text-primary underline font-medium">
                      شركة أبحاث السوق الدوائية في الإمارات
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    For company-level UAE pharma programs, see our{' '}
                    <Link to={UAE_BOFU_PATH} className="text-primary underline font-medium">
                      pharmaceutical market research company in UAE
                    </Link>
                    .
                  </>
                )}
              </p>
            ) : null}
            {showEgyptBofuCta ? (
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {isRtl ? (
                  <>
                    لبرامج الشركات الدوائية في مصر، راجع{' '}
                    <Link to={EGYPT_BOFU_PATH} className="text-primary underline font-medium">
                      شركة أبحاث السوق الدوائية في مصر
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    For company-level Egypt pharma programs, see our{' '}
                    <Link to={EGYPT_BOFU_PATH} className="text-primary underline font-medium">
                      pharmaceutical market research company in Egypt
                    </Link>
                    .
                  </>
                )}
              </p>
            ) : null}
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              {regulatory.heading}
            </h2>
            {regulatory.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              {marketStructure.heading}
            </h2>
            {marketStructure.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              {services.heading}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.items.map((item) => (
                <article key={item.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              {methodology.heading}
            </h2>
            {methodology.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              {therapyFocus.heading}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{therapyFocus.paragraph}</p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground list-disc pl-5">
              {therapyFocus.areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              {process.heading}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {process.steps.map((step) => (
                <article key={step.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
              {deliverables.heading}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
              {deliverables.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-padding py-8">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {isRtl ? 'إطار القرار للإدارة' : 'Decision blueprint for leadership teams'}
            </h2>
            <div className="grid md:grid-cols-3 gap-3">
              <article className="rounded-xl border border-border bg-card p-4">
                <h3 className="font-semibold text-foreground mb-2">
                  {isRtl ? 'لماذا يهم' : 'Why it matters'}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{decisionBlueprint.why}</p>
              </article>
              <article className="rounded-xl border border-border bg-card p-4">
                <h3 className="font-semibold text-foreground mb-2">
                  {isRtl ? 'ماذا تقول الأدلة' : 'What the evidence says'}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{decisionBlueprint.evidence}</p>
              </article>
              <article className="rounded-xl border border-border bg-card p-4">
                <h3 className="font-semibold text-foreground mb-2">
                  {isRtl ? 'الخطوة التالية' : 'What to do next'}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{decisionBlueprint.next}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-padding py-8 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {isRtl ? 'صفحات ذات صلة' : 'Related country and intent pages'}
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {relatedLinks.map((link) => (
                <Link
                  key={`${link.to}-${link.label}`}
                  to={link.to}
                  className="rounded-lg border border-border bg-card p-4 text-primary hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-8">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              {isRtl ? 'الأسئلة الشائعة' : 'FAQs'}
            </h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details key={item.question} className="rounded-xl border border-border bg-card p-4">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTASection variant="country" countryName={countryLabel} />
      </main>
      <Footer />
    </div>
  );
}
