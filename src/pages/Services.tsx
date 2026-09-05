import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CTASection } from '@/components/shared/CTASection';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { PremiumEyebrow } from '@/components/home/PremiumEyebrow';
import { PremiumComplianceRibbon } from '@/components/home/PremiumComplianceRibbon';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { serviceRecoveryPaths } from '@/lib/internalLinkRecovery';
import { getServicesHubBundle } from '@/data/servicesHubContent';
import { getLocalizedPathForLanguage, languagePaths, localizedContactPath } from '@/lib/seo';

const recoveryLinkLabels: Record<string, string> = {
  '/bionixus-market-research-middle-east': 'Middle East Pharmaceutical Market Research',
  '/blog/healthcare-market-research-europe-2026': 'Healthcare Market Research in Europe (2026 Guide)',
  '/blog/healthcare-market-research-methodologies-gcc': 'Healthcare Market Research Methodologies for the GCC',
  '/blog/healthcare-market-research-uae-guide-2025': 'Healthcare Market Research in the UAE — 2025 Guide',
  '/blog/hospital-market-research': 'Hospital Market Research for Pharma',
  '/blog/market-research-pharmaceutical-market-access-uae': 'Pharmaceutical Market Access Research in the UAE',
  '/blog/pharmaceutical-healthcare-market-research-gcc': 'Pharmaceutical Market Research in the GCC',
  '/blog/pharmaceutical-market-research-uk-2026': 'Pharmaceutical Market Research in the UK (2026 Guide)',
  '/blog/quantitative-market-research-and-market-access': 'Quantitative Market Research and Market Access',
  '/insights/top-healthcare-market-research-companies-mena-2026': 'Top Healthcare Market Research Companies in MENA',
  '/healthcare-market-research/algeria': 'Healthcare Market Research in Algeria',
  '/healthcare-market-research/bahrain': 'Healthcare Market Research in Bahrain',
};

function pathToLabel(path: string): string {
  if (recoveryLinkLabels[path]) return recoveryLinkLabels[path];
  const slug = path.split('/').filter(Boolean).pop() ?? path;
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

const servicesHubJsonLd = (
  healthcareServices: ReturnType<typeof getServicesHubBundle>['healthcareServices'],
  methodologyServices: ReturnType<typeof getServicesHubBundle>['methodologyServices'],
  commercialOfferings: ReturnType<typeof getServicesHubBundle>['commercialOfferings'],
  name: string,
  description: string,
  url: string,
) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name,
  description,
  url,
  publisher: {
    '@type': 'Organization',
    name: 'BioNixus',
    url: 'https://www.bionixus.com',
  },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: healthcareServices.length + methodologyServices.length + commercialOfferings.length,
    itemListElement: [
      ...healthcareServices.map((svc, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: svc.title,
        url: `https://www.bionixus.com/services/${svc.slug}`,
      })),
      ...methodologyServices.map((svc, i) => ({
        '@type': 'ListItem',
        position: healthcareServices.length + i + 1,
        name: svc.title,
        url: `https://www.bionixus.com${svc.href}`,
      })),
      ...commercialOfferings.map((offering, i) => ({
        '@type': 'ListItem',
        position: healthcareServices.length + methodologyServices.length + i + 1,
        name: offering.title,
        url: `https://www.bionixus.com${offering.to}`,
      })),
    ],
  },
});

const faqJsonLd = (items: readonly { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
});

const Services = () => {
  const { language, isRTL, t } = useLanguage();
  const bundle = getServicesHubBundle(language);
  const copy = bundle.copy;
  const healthcareServices = bundle.healthcareServices;
  const methodologyServices = bundle.methodologyServices;
  const commercialOfferings = bundle.commercialOfferings;
  const hubLinks = bundle.hubLinks;
  const serviceFaq = bundle.serviceFaq;
  const heroMetrics = bundle.heroMetrics;

  const recoveryLinksWithLabels = useMemo(
    () =>
      serviceRecoveryPaths.map((path) => ({
        path,
        label: bundle.recoveryLabels[path] ?? pathToLabel(path),
      })),
    [bundle.recoveryLabels],
  );

  const basePath = languagePaths[language] || '/';
  const servicesPath = basePath === '/' ? '/services' : `${basePath}/services`;
  const contactPath = localizedContactPath(language);
  const methodologyPath = basePath === '/' ? '/methodology' : `${basePath}/methodology`;
  const healthcareHubPath = getLocalizedPathForLanguage('/healthcare-market-research', language);

  const breadcrumbItems = useMemo(
    () => [
      { name: copy?.breadcrumb.home ?? 'Home', href: basePath === '/' ? '/' : basePath },
      { name: copy?.breadcrumb.services ?? 'Services', href: servicesPath },
    ],
    [basePath, copy, servicesPath],
  );

  const jsonLd = useMemo(
    () => [
      buildBreadcrumbSchema(breadcrumbItems),
      servicesHubJsonLd(
        healthcareServices,
        methodologyServices,
        commercialOfferings,
        copy?.jsonLd.collectionName ?? 'Global Market Research Services',
        copy?.jsonLd.collectionDescription ??
          'Pharmaceutical and healthcare market research plus B2B and B2C commercial research — CATI, CAWI, CAPI, focus groups, mystery shopping, price elasticity, and online behaviour tracking across 48 countries.',
        copy?.seo.canonical ?? 'https://www.bionixus.com/services',
      ),
      faqJsonLd(serviceFaq),
    ],
    [breadcrumbItems, commercialOfferings, copy, healthcareServices, methodologyServices, serviceFaq],
  );

  const heroRef = useScrollReveal<HTMLElement>({ stagger: 80 });
  const introRef = useScrollReveal<HTMLElement>({ stagger: 100 });
  const healthcareRef = useScrollReveal<HTMLElement>({ stagger: 80 });
  const methodologyRef = useScrollReveal<HTMLElement>({ stagger: 70 });
  const commercialRef = useScrollReveal<HTMLElement>({ stagger: 80 });
  const linksRef = useScrollReveal<HTMLElement>({ stagger: 60 });

  return (
    <div className="min-h-screen bg-[#FFFEFB]">
      <SEOHead
        title={
          copy?.seo.title ?? 'Market Research Services | Pharma, Healthcare & B2B | BioNixus'
        }
        description={
          copy?.seo.description ??
          'Pharma & B2B research across 48 countries: physician surveys, KOL mapping, market access & CATI/CAWI. Proposal in 24 hours.'
        }
        canonical={copy?.seo.canonical ?? 'https://www.bionixus.com/services'}
        jsonLd={jsonLd}
      />
      <Navbar />
      <main dir={isRTL ? 'rtl' : 'ltr'} lang={language}>
        <div className="premium-home-ivory pt-24 pb-0">
          <div className="container-wide mx-auto max-w-6xl">
            <BreadcrumbNav items={breadcrumbItems} className="px-0" />
          </div>
        </div>

        <section
          className="premium-home-midnight section-padding pt-10 pb-16 md:pt-14 md:pb-24"
          aria-labelledby="services-hub-heading"
          ref={heroRef}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#C9A84C] via-[#C9A84C]/30 to-transparent" aria-hidden="true" />
          <div className="container-wide relative z-10 mx-auto max-w-6xl">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-16">
              <div>
                <PremiumEyebrow>{copy?.hero.eyebrow ?? 'Global services'}</PremiumEyebrow>
                <h1
                  id="services-hub-heading"
                  className="sr-lcp max-w-4xl font-display text-3xl font-light leading-[1.12] tracking-tight text-[#FFFEFB] md:text-5xl"
                >
                  {copy?.hero.h1 ??
                    'Market research services for pharma, healthcare, and commercial industries'}
                </h1>
                <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/55">
                  {copy?.hero.subtitle ??
                    'BioNixus runs senior-led programmes across 48 countries — from physician surveys and HTA strategy to CATI, CAWI, CAPI fieldwork, focus groups, mystery shopping, price elasticity, and online behaviour tracking. One firm, one methodology standard, scoped to the decision you need to make.'}{' '}
                  <Link to={healthcareHubPath} className="text-[#C9A84C] underline-offset-4 hover:underline">
                    Healthcare market research
                  </Link>
                  .
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link to={contactPath} className="premium-gold-btn">
                    {copy?.hero.ctaProposal ?? 'Request a proposal'}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    to={methodologyPath}
                    className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/12 px-8 py-[15px] text-sm font-medium tracking-wide text-white/65 transition-colors hover:border-white/25 hover:text-[#FFFEFB]"
                  >
                    {copy?.hero.ctaMethodology ?? 'Research methodology'}
                  </Link>
                </div>
              </div>

              <aside className="premium-card-dark p-7 md:p-8" aria-label="Service credentials">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
                  {copy?.hero.eyebrow ?? 'Global services'}
                </p>
                <p className="mt-3 font-display text-xl font-light text-[#FFFEFB]">
                  {copy?.intro.h2 ?? 'Three connected research portfolios'}
                </p>
                <ul className="mt-7 space-y-4">
                  {heroMetrics.map((metric) => (
                    <li key={metric.label} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">{metric.label}</p>
                      <p className="mt-1.5 font-display text-lg font-light text-[#FFFEFB]">{metric.value}</p>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <PremiumComplianceRibbon />

        <section className="premium-home-cream section-padding py-16 md:py-20" ref={introRef}>
          <div className="container-wide mx-auto max-w-6xl">
            <div className="mb-12 max-w-2xl">
              <PremiumEyebrow tone="teal">{copy?.intro.h2 ?? 'Three connected research portfolios'}</PremiumEyebrow>
              <h2 className="font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
                {copy?.intro.h2 ?? 'Three connected research portfolios'}
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {(copy?.intro.columns ?? [
                {
                  h3: 'Pharma & healthcare',
                  body: 'Regulated categories that demand verified HCP and payer samples, HTA-aware synthesis, and launch-ready evidence across the US, EU5, UK, GCC, and North Africa.',
                },
                {
                  h3: 'Methodologies & fieldwork',
                  body: 'CATI, CAWI, CAPI, focus groups, mystery shopping, price elasticity, brand tracking, and digital behaviour modules — combinable into one programme with shared QC and reporting.',
                },
                {
                  h3: 'Commercial & cross-industry',
                  body: 'B2B buyer research, shopper insight, and consumer segmentation for banking, retail, tourism, technology, manufacturing, and FMCG — via the',
                },
              ]).map((column, index) => (
                <article key={column.h3} className="premium-card">
                  <h3 className="mb-3 font-display text-xl font-medium text-[#0C1B33]">{column.h3}</h3>
                  <p className="text-[15px] font-light leading-relaxed text-[#7A7267]">
                    {column.body}
                    {index === 2 ? (
                      <>
                        {' '}
                        <Link
                          to={getLocalizedPathForLanguage('/bionixus-industries', language)}
                          className="font-medium text-[#C9A84C] underline-offset-4 hover:underline"
                        >
                          {t.ui.services.industriesHubLink}
                        </Link>
                        .
                      </>
                    ) : null}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="premium-home-ivory section-padding py-16 md:py-20" ref={healthcareRef}>
          <div className="container-wide mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <PremiumEyebrow>{copy?.healthcare.h2 ?? 'Pharma & healthcare research modules'}</PremiumEyebrow>
              <h2 className="mb-4 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
                {copy?.healthcare.h2 ?? 'Pharma & healthcare research modules'}
              </h2>
              <p className="font-light leading-relaxed text-[#7A7267]">
                {copy?.healthcare.intro ??
                  'Quantitative, qualitative, access, intelligence, trial support, and stakeholder mapping — combinable into one global programme.'}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {healthcareServices.map((svc) => {
                const Icon = svc.icon;
                return (
                  <Link key={svc.slug} to={`/services/${svc.slug}`} className="premium-card group flex flex-col">
                    <Icon className="mb-5 h-5 w-5 text-[#C9A84C]" aria-hidden="true" />
                    <h3 className="mb-3 font-display text-xl font-medium text-[#0C1B33]">{svc.title}</h3>
                    <p className="mb-5 flex-1 text-[15px] font-light leading-relaxed text-[#7A7267]">{svc.summary}</p>
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {svc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-[#F4F2ED] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#7A7267]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C9A84C] underline-offset-4 group-hover:underline">
                      {copy?.healthcare.viewScope ?? 'View scope'}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="premium-home-midnight section-padding py-16 md:py-20"
          ref={methodologyRef}
        >
          <div className="container-wide relative z-10 mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <PremiumEyebrow>{copy?.methodology.eyebrow ?? 'Fieldwork & analytics'}</PremiumEyebrow>
              <h2 className="mb-4 font-display text-3xl font-light tracking-tight text-[#FFFEFB] md:text-4xl">
                {copy?.methodology.h2 ?? 'Methodologies across industries'}
              </h2>
              <p className="font-light leading-relaxed text-white/45">
                {copy?.methodology.intro ??
                  'The same senior team runs CATI, CAWI, and CAPI fieldwork for pharma HCP panels and B2B buyer programmes — plus mystery shopping, price elasticity, focus groups, and online behaviour tracking where your category demands it.'}
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {methodologyServices.map((svc) => {
                const Icon = svc.icon;
                return (
                  <Link key={svc.id} to={svc.href} className="premium-card-dark group flex flex-col p-7">
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <Icon className="h-5 w-5 text-[#C9A84C]" aria-hidden="true" />
                      {svc.abbr ? (
                        <span className="rounded-md border border-white/10 px-2 py-0.5 text-[10px] font-bold tracking-widest text-[#C9A84C]">
                          {svc.abbr}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mb-3 font-display text-lg font-medium text-[#FFFEFB]">{svc.title}</h3>
                    <p className="mb-4 flex-1 text-[15px] font-light leading-relaxed text-white/45">{svc.summary}</p>
                    <p className="mb-4 text-[10px] font-semibold uppercase tracking-wider text-[#C9A84C]/70">
                      {svc.industries}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C9A84C]">
                      {copy?.methodology.learnMore ?? 'Learn more'}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="premium-home-cream section-padding py-16 md:py-20" ref={commercialRef}>
          <div className="container-wide mx-auto max-w-6xl">
            <div className="mb-12 max-w-3xl">
              <PremiumEyebrow tone="teal">{copy?.commercial.h2 ?? 'Commercial & cross-industry research'}</PremiumEyebrow>
              <h2 className="mb-4 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
                {copy?.commercial.h2 ?? 'Commercial & cross-industry research'}
              </h2>
              <p className="font-light leading-relaxed text-[#7A7267]">
                {copy?.commercial.intro ??
                  'Non-pharma programmes for enterprise buyers, institutional decision-makers, and consumer markets — Americas, EMEA, Africa, and LATAM.'}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {commercialOfferings.map((offering) => {
                const Icon = offering.icon;
                return (
                  <Link key={offering.to} to={offering.to} className="premium-card group flex flex-col">
                    <Icon className="mb-5 h-5 w-5 text-[#C9A84C]" aria-hidden="true" />
                    <h3 className="mb-3 font-display text-xl font-medium text-[#0C1B33]">{offering.title}</h3>
                    <p className="mb-3 flex-1 text-[15px] font-light leading-relaxed text-[#7A7267]">{offering.summary}</p>
                    <p className="mb-5 text-[11px] font-semibold uppercase tracking-wider text-[#C9A84C]/80">
                      {offering.examples}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C9A84C] underline-offset-4 group-hover:underline">
                      {copy?.commercial.explore ?? 'Explore segment'}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="premium-home-ivory section-padding py-16 md:py-20" ref={linksRef}>
          <div className="container-wide mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <PremiumEyebrow>{copy?.links.h2 ?? 'Related research hubs & industries'}</PremiumEyebrow>
              <h2 className="mb-4 font-display text-3xl font-light tracking-tight text-[#0C1B33] md:text-4xl">
                {copy?.links.h2 ?? 'Related research hubs & industries'}
              </h2>
              <p className="font-light leading-relaxed text-[#7A7267]">
                {copy?.links.intro ??
                  'Start from a healthcare hub, an industry segment, or a global index — depending on your category and geography.'}
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {hubLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="premium-card flex items-center justify-between gap-4 p-6 text-sm font-medium text-[#0C1B33]"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#C9A84C]" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>

            <details className="premium-card mt-8 p-0">
              <summary className="cursor-pointer list-none px-7 py-6 font-display text-lg font-medium text-[#0C1B33]">
                <span className="flex items-center justify-between gap-2">
                  {copy?.links.moreGuides ?? 'More research guides'}
                  <span className="text-sm font-normal text-[#7A7267]">
                    {recoveryLinksWithLabels.length} {copy?.links.linksCount ?? 'links'}
                  </span>
                </span>
              </summary>
              <ul className="grid gap-2 border-t border-[#EDE9E3] px-7 py-5 sm:grid-cols-2">
                {recoveryLinksWithLabels.map(({ path, label }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C9A84C] underline-offset-4 hover:underline"
                    >
                      {label}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </section>

        <div className="premium-home-ivory">
          <FAQSection
            premium
            title={copy?.faq.h2 ?? 'Frequently asked questions'}
            items={[...serviceFaq]}
            className="section-padding py-16 md:py-20"
          />
        </div>

        <CTASection variant="service" premium />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
