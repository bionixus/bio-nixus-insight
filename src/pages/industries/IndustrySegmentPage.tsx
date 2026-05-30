import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import {
  SEGMENTS,
  getSegmentMatrixIndustries,
  type SegmentSlug,
} from '@/data/bionixusIndustrySegments';
import {
  MATRIX_COUNTRIES,
  MATRIX_INDUSTRIES,
  getIndustryBofuPath,
  type MatrixCountrySlug,
} from '@/data/industryMarketResearchMatrix';

const HUB_PATH = '/bionixus-industries';

/** Country cells available for every published matrix industry. */
const MATRIX_COUNTRY_ORDER: MatrixCountrySlug[] = ['saudi-arabia', 'uae', 'egypt'];

type IndustrySegmentPageProps = {
  slug: SegmentSlug;
};

export default function IndustrySegmentPage({ slug }: IndustrySegmentPageProps) {
  const segment = SEGMENTS[slug];
  if (!segment) {
    return null;
  }

  const coveredIndustries = getSegmentMatrixIndustries(slug);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: segment.h1,
      serviceType: segment.label,
      provider: {
        '@type': 'Organization',
        name: 'BioNixus',
        url: 'https://www.bionixus.com',
      },
      areaServed: ['United States', 'United Kingdom', 'Saudi Arabia', 'United Arab Emirates', 'Egypt'],
      url: `https://www.bionixus.com${segment.path}`,
    },
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Industries', href: HUB_PATH },
      { name: segment.label, href: segment.path },
    ]),
    buildFAQSchema(segment.faqItems, { pageUrl: `https://www.bionixus.com${segment.path}` }),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={segment.seoTitle}
        description={segment.seoDescription}
        canonical={segment.path}
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Industries', href: HUB_PATH },
            { name: segment.label, href: segment.path },
          ]}
        />

        <section className="section-padding py-14 bg-gradient-to-b from-muted/30 to-background">
          <div className="container-wide max-w-5xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wide text-primary mb-3">
              {segment.tagline}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4">
              {segment.h1}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">{segment.intro}</p>
            <p className="text-muted-foreground leading-relaxed">
              This page sits inside the{' '}
              <Link to={HUB_PATH} className="text-primary underline font-medium">
                BioNixus across-industries hub
              </Link>
              , which links our pharmaceutical and healthcare work to the broader B2B and B2C research we run for
              the same clients.
            </p>
          </div>
        </section>

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              How we approach {segment.label.toLowerCase()} research
            </h2>
            {segment.bodyParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              Who briefs us
            </h2>
            <p className="text-muted-foreground leading-relaxed">{segment.buyerContext}</p>
          </div>
        </section>

        {coveredIndustries.length > 0 ? (
          <section className="section-padding py-10">
            <div className="container-wide max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
                Industries we cover in this segment
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Each industry has dedicated country pages for Saudi Arabia, the UAE, and Egypt. Follow a link to the
                market you are planning for, or start from the{' '}
                <Link to="/market-research-by-industry" className="text-primary underline font-medium">
                  full industries index
                </Link>
                .
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {coveredIndustries.map((industrySlug) => {
                  const industry = MATRIX_INDUSTRIES[industrySlug];
                  return (
                    <article key={industrySlug} className="rounded-xl border border-border bg-card p-5">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{industry.displayName}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {industry.knowsAbout.slice(0, 3).join(' · ')}
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                        {MATRIX_COUNTRY_ORDER.map((countrySlug) => (
                          <Link
                            key={countrySlug}
                            to={getIndustryBofuPath(countrySlug, industrySlug)}
                            className="text-primary hover:underline"
                          >
                            {industry.displayNameShort} in {MATRIX_COUNTRIES[countrySlug].label}
                          </Link>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        ) : null}

        <section className="section-padding py-10 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">
              Explore in this section
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {segment.featuredLinks.map((link) => (
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
            <h2 className="text-2xl font-semibold text-foreground mb-3">FAQs</h2>
            <div className="space-y-3">
              {segment.faqItems.map((item) => (
                <details key={item.question} className="rounded-xl border border-border bg-card p-4">
                  <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTASection variant="service" />
      </main>
      <Footer />
    </div>
  );
}
