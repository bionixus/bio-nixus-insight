import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import { ExecutiveDecisionBlock } from '@/components/page/PremiumPageSections';
import {
  buildIndustryCountryPageConfig,
  type MatrixCountrySlug,
  type MatrixIndustrySlug,
} from '@/data/industryMarketResearchMatrix';
import { getIndustryListicleCrossLinks } from '@/data/industry-listicle-clusters';
import { IndustryListicleClusterCallout } from '@/components/seo/IndustryListicleClusterCallout';
import { ExpandedServiceLandingContent } from '@/components/page/ExpandedServiceLandingContent';
import { getHealthcareIndustryExpandedContent } from '@/data/industryHealthcareExpandedContent';
import { getGccIndustryExpandedContent } from '@/data/industryGccAdjacentExpandedContent';

type IndustryCountryBofuPageProps = {
  countrySlug: MatrixCountrySlug;
  industrySlug: MatrixIndustrySlug;
};

export default function IndustryCountryBofuPage({ countrySlug, industrySlug }: IndustryCountryBofuPageProps) {
  const config = buildIndustryCountryPageConfig(countrySlug, industrySlug);
  if (!config) return null;

  const pageUrl = `https://www.bionixus.com${config.bofuPath}`;
  const orgId = 'https://www.bionixus.com/#organization';
  const clusterLinks = getIndustryListicleCrossLinks(
    countrySlug,
    industrySlug,
    config.bofuPath,
    config.industry.displayNameShort,
    config.country.label,
  );
  const clusterRole = `Company-intent page for ${config.industry.displayNameShort.toLowerCase()} programs in ${config.country.label} — paired with the 2026 firm rankings listicle and cross-industry geo guides.`;
  const expandedHealthcare =
    industrySlug === 'healthcare' ? getHealthcareIndustryExpandedContent(countrySlug) : null;
  const expandedAdjacent =
    industrySlug !== 'healthcare' ? getGccIndustryExpandedContent(countrySlug, industrySlug) : null;
  const expandedContent = expandedHealthcare ?? expandedAdjacent;
  const faqItems = expandedContent
    ? [...config.faqItems, ...expandedContent.faqs]
    : config.faqItems;
  const primaryHubPath = config.industry.isHealthcareAdjacent
    ? '/healthcare-market-research'
    : '/market-research';
  const primaryHubLabel = config.industry.isHealthcareAdjacent
    ? 'healthcare market research hub'
    : 'market research services hub';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': orgId,
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
      logo: 'https://www.bionixus.com/bionixus-logo.webp',
      areaServed: { '@type': 'Country', name: config.country.label },
      knowsAbout: config.industry.knowsAbout,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': pageUrl,
      url: pageUrl,
      name: config.h1,
      description: config.metaDescription,
      about: { '@id': orgId },
      inLanguage: 'en',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: config.h1,
      serviceType: `${config.industry.displayNameShort} market research company ${config.country.label}`,
      areaServed: { '@type': 'Country', name: config.country.label },
      provider: { '@id': orgId },
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    },
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Market Research', href: '/market-research' },
      { name: config.h1, href: config.bofuPath },
    ]),
    buildFAQSchema(faqItems),
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={config.title}
        description={config.metaDescription}
        canonical={config.bofuPath}
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Market Research', href: '/market-research' },
            { name: config.h1, href: config.bofuPath },
          ]}
        />

        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">{config.h1}</h1>
            <p className="text-lg leading-relaxed text-primary-foreground/90 mb-4">{config.heroIntro}</p>
            <p className="text-base leading-relaxed text-primary-foreground/85">
              For regional context, start from the{' '}
              <Link to={primaryHubPath} className="underline font-medium text-primary-foreground">
                {primaryHubLabel}
              </Link>
              ; for {config.country.label} see{' '}
              <Link to={config.country.midFunnelPath} className="underline font-medium text-primary-foreground">
                market research in {config.country.label}
              </Link>
              {' '}and the{' '}
              <Link to={config.listiclePath} className="underline font-medium text-primary-foreground">
                top {config.industry.displayNameShort.toLowerCase()} market research companies in {config.country.label}{' '}
                (2026)
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-6">
          <div className="container-wide max-w-5xl mx-auto">
            <IndustryListicleClusterCallout
              industryLabel={config.industry.displayNameShort}
              countryLabel={config.country.label}
              roleText={clusterRole}
              links={clusterLinks}
            />
          </div>
        </section>

        <ExecutiveDecisionBlock heading={config.executiveHeading} points={config.executivePoints} />

        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-5">
              Why BioNixus for {config.industry.displayNameShort} in {config.country.label}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {config.proofBullets.map((item) => (
                <article key={item.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto space-y-5">
            <h2 className="text-3xl font-display font-semibold text-foreground">
              Decision map for {config.industry.displayNameShort} research in {config.country.label}
            </h2>
            <ol className="space-y-4 list-none pl-0">
              {config.regulatorySteps.map((item) => (
                <li key={item.step} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.step}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">{item.detail}</p>
                  <Link to={item.link.to} className="text-sm font-medium text-primary hover:underline">
                    {item.link.label}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto overflow-x-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-5">Stakeholder coverage</h2>
            <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="py-3 pr-4 font-semibold text-foreground">
                    Stakeholder
                  </th>
                  <th scope="col" className="py-3 font-semibold text-foreground">
                    Research focus
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {config.stakeholderRows.map((row) => (
                  <tr key={row.role} className="border-b border-border/60">
                    <td className="py-3 pr-4 font-medium text-foreground">{row.role}</td>
                    <td className="py-3">{row.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="py-12">
          <div className="container-wide max-w-5xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-display font-semibold text-foreground">
              Why {config.industry.displayNameShort} in {config.country.label} is unique
            </h2>
            {config.uniquenessParagraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            <p>
              Pharmaceutical company-intent:{' '}
              <Link to={config.country.pharmaBofuPath} className="text-primary underline font-medium">
                healthcare market research company — pharma in {config.country.label}
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-5">{config.servicesHeading}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {config.serviceCards.map((card) => (
                <article key={card.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.body}</p>
                </article>
              ))}
            </div>
            {config.relatedReportLink ? (
              <p className="mt-6 text-muted-foreground">
                Market structure:{' '}
                <Link to={config.relatedReportLink.to} className="text-primary underline">
                  {config.relatedReportLink.label}
                </Link>
              </p>
            ) : null}
          </div>
        </section>

        {expandedContent ? (
          <section className="py-12">
            <div className="container-wide max-w-5xl mx-auto">
              <ExpandedServiceLandingContent content={expandedContent} />
            </div>
          </section>
        ) : null}

        {expandedHealthcare ? (
          <section className="py-12 bg-muted/20">
            <div className="container-wide max-w-5xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
              <h2 className="text-3xl font-display font-semibold text-foreground">
                {expandedHealthcare.execution.heading}
              </h2>
              {expandedHealthcare.execution.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </section>
        ) : null}

        <section className="py-12 bg-muted/20">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-semibold text-foreground mb-6">FAQs</h2>
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

        <CTASection variant="country" countryName={config.country.label} />
      </main>
      <Footer />
    </div>
  );
}
