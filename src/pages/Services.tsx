import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe2 } from 'lucide-react';
import { useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CTASection } from '@/components/shared/CTASection';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { SEOHead } from '@/components/seo/SEOHead';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import { PremiumComplianceRibbon } from '@/components/home/PremiumComplianceRibbon';
import { serviceRecoveryPaths } from '@/lib/internalLinkRecovery';
import {
  getServicesHubBundle,
} from '@/data/servicesHubContent';
import { languagePaths, localizedContactPath } from '@/lib/seo';

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
  '/blog/top-healthcare-market-research-companies-mena': 'Top Healthcare Market Research Companies in MENA',
  '/healthcare-market-research/algeria': 'Healthcare Market Research in Algeria',
  '/healthcare-market-research/bahrain': 'Healthcare Market Research in Bahrain',
};

function pathToLabel(path: string): string {
  if (recoveryLinkLabels[path]) return recoveryLinkLabels[path];
  const slug = path.split('/').filter(Boolean).pop() ?? path;
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

const recoveryLinksWithLabels = serviceRecoveryPaths.map((path) => ({
  path,
  label: pathToLabel(path),
}));

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
  const { language } = useLanguage();
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
          'Pharmaceutical and healthcare market research plus B2B and B2C commercial research — CATI, CAWI, CAPI, focus groups, mystery shopping, price elasticity, and online behaviour tracking across 38 countries.',
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
    <div className="min-h-screen bg-background">
      <SEOHead
        title={
          copy?.seo.title ??
          'Global Market Research Services | Pharma, Healthcare & Commercial | BioNixus'
        }
        description={
          copy?.seo.description ??
          'BioNixus market research across 38 countries — pharma modules, CATI, CAWI, CAPI, focus groups, mystery shopping, price elasticity, and B2B/B2C programmes for financial services, retail, technology, and more.'
        }
        canonical={copy?.seo.canonical ?? 'https://www.bionixus.com/services'}
        jsonLd={jsonLd}
      />
      <Navbar />
      <main dir="ltr" lang={language}>
        <div className="section-padding pt-24 pb-2">
          <div className="container-wide">
            <BreadcrumbNav items={breadcrumbItems} />
          </div>
        </div>

        <section
          className="section-padding relative overflow-hidden pb-12 pt-4 text-[#FFFEFB]"
          style={{
            background: `
              radial-gradient(ellipse 70% 55% at 65% 45%, rgba(12,27,51,1) 0%, transparent 70%),
              radial-gradient(ellipse 50% 45% at 20% 80%, rgba(14,165,160,0.08) 0%, transparent 50%),
              linear-gradient(180deg, #06101F 0%, #081628 100%)
            `,
          }}
          ref={heroRef}
        >
          <div className="container-wide relative z-10 mx-auto max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2.5 sr sr-left sr-fast revealed">
              <span className="h-px w-8 bg-[#C9A84C]/40" aria-hidden="true" />
              <Globe2 className="h-4 w-4 text-[#C9A84C]" aria-hidden="true" />
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C]">
                {copy?.hero.eyebrow ?? 'Global services'}
              </span>
            </div>
            <h1 className="mb-6 max-w-4xl font-display text-3xl font-light leading-tight tracking-tight md:text-4xl lg:text-5xl sr sr-up sr-line revealed">
              {copy?.hero.h1 ??
                'Market research services for pharma, healthcare, and commercial industries'}
            </h1>
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl sr sr-up revealed">
              {copy?.hero.subtitle ??
                'BioNixus runs senior-led programmes across 38 countries — from physician surveys and HTA strategy to CATI, CAWI, CAPI fieldwork, focus groups, mystery shopping, price elasticity, and online behaviour tracking. One firm, one methodology standard, scoped to the decision you need to make.'}
            </p>
            <div className="mb-10 flex flex-wrap gap-3 sr sr-up revealed">
              <Link
                to={contactPath}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#C9A84C] to-[#B8933E] px-6 py-3 text-sm font-semibold text-[#06101F] shadow-[0_4px_20px_rgba(201,168,76,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(201,168,76,0.35)] cursor-pointer"
              >
                {copy?.hero.ctaProposal ?? 'Request a proposal'}
              </Link>
              <Link
                to={methodologyPath}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-normal text-white/60 transition-colors hover:border-white/30 hover:text-white cursor-pointer"
              >
                {copy?.hero.ctaMethodology ?? 'Research methodology'}
              </Link>
            </div>
            <ul
              className="grid grid-cols-2 gap-4 sm:grid-cols-4 sr sr-up revealed"
              aria-label="Service credentials"
            >
              {heroMetrics.map((metric) => (
                <li
                  key={metric.label}
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-4 text-center"
                >
                  <p className="font-display text-2xl font-semibold text-[#FFFEFB] md:text-3xl">{metric.value}</p>
                  <p className="mt-1 text-xs text-white/60 md:text-sm">{metric.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <PremiumComplianceRibbon />

        <section className="section-padding py-14 bg-[#F4F2ED]" ref={introRef}>
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6 sr sr-up sr-line">
              {copy?.intro.h2 ?? 'Three connected research portfolios'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-muted-foreground leading-relaxed">
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
              <article
                key={column.h3}
                className={`rounded-xl border border-[#D6D0C7]/60 bg-white p-6 sr hover-lift ${
                  index === 0 ? 'sr-left' : index === 1 ? 'sr-up' : 'sr-right'
                }`}
              >
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">{column.h3}</h3>
                <p>
                  {column.body}
                  {index === 2 ? (
                    <>
                      {' '}
                      <Link to="/bionixus-industries" className="text-primary font-medium hover:underline">
                        {language === 'de' ? 'Branchen-Hub' : 'industries hub'}
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

        <section className="section-padding py-14" ref={healthcareRef}>
          <div className="container-wide max-w-6xl mx-auto">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3 sr sr-up sr-line">
                {copy?.healthcare.h2 ?? 'Pharma & healthcare research modules'}
              </h2>
              <p className="text-muted-foreground leading-relaxed sr sr-up">
                {copy?.healthcare.intro ??
                  'Quantitative, qualitative, access, intelligence, trial support, and stakeholder mapping — combinable into one global programme.'}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {healthcareServices.map((svc) => {
                const Icon = svc.icon;
                return (
                  <Link
                    key={svc.slug}
                    to={`/services/${svc.slug}`}
                    className="group flex flex-col rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:border-[#C9A84C]/40 hover:shadow-[0_12px_40px_-12px_rgba(6,16,31,0.15)] cursor-pointer sr sr-scale-up sr-spring hover-lift"
                  >
                    <div
                      className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#06101F]/5 ring-1 ring-[#C9A84C]/20"
                      aria-hidden
                    >
                      <Icon className="h-6 w-6 text-[#0C1B33]" />
                    </div>
                    <h3 className="mb-3 text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {svc.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{svc.summary}</p>
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {svc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-[#F4F2ED] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#7A7267]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      {copy?.healthcare.viewScope ?? 'View scope'} <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="section-padding py-14 bg-[#06101F] text-[#FFFEFB]"
          ref={methodologyRef}
        >
          <div className="container-wide max-w-6xl mx-auto">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#C9A84C] sr sr-up">
                {copy?.methodology.eyebrow ?? 'Fieldwork & analytics'}
              </p>
              <h2 className="text-2xl md:text-3xl font-display font-light text-[#FFFEFB] mb-3 sr sr-up sr-line">
                {copy?.methodology.h2 ?? 'Methodologies across industries'}
              </h2>
              <p className="text-white/65 leading-relaxed sr sr-up">
                {copy?.methodology.intro ??
                  'The same senior team runs CATI, CAWI, and CAPI fieldwork for pharma HCP panels and B2B buyer programmes — plus mystery shopping, price elasticity, focus groups, and online behaviour tracking where your category demands it.'}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {methodologyServices.map((svc) => {
                const Icon = svc.icon;
                return (
                  <Link
                    key={svc.id}
                    to={svc.href}
                    className="group flex flex-col rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-[#C9A84C]/35 hover:bg-white/[0.07] cursor-pointer sr sr-scale-up hover-lift"
                  >
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#C9A84C]/10 ring-1 ring-[#C9A84C]/25"
                        aria-hidden
                      >
                        <Icon className="h-5 w-5 text-[#E4CC7A]" />
                      </div>
                      {svc.abbr ? (
                        <span className="rounded-md border border-white/10 px-2 py-0.5 text-[10px] font-bold tracking-widest text-[#C9A84C]">
                          {svc.abbr}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mb-2 text-base font-display font-semibold text-[#FFFEFB] group-hover:text-[#E4CC7A] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="mb-3 flex-1 text-sm leading-relaxed text-white/60">{svc.summary}</p>
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-[#C9A84C]/70">
                      {svc.industries}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[#E4CC7A] group-hover:gap-2 transition-all">
                      {copy?.methodology.learnMore ?? 'Learn more'} <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding py-14 bg-[#F4F2ED]" ref={commercialRef}>
          <div className="container-wide max-w-6xl mx-auto">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3 sr sr-up sr-line">
                {copy?.commercial.h2 ?? 'Commercial & cross-industry research'}
              </h2>
              <p className="text-muted-foreground leading-relaxed sr sr-up">
                {copy?.commercial.intro ??
                  'Non-pharma programmes for enterprise buyers, institutional decision-makers, and consumer markets — Americas, EMEA, Africa, and LATAM.'}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {commercialOfferings.map((offering) => {
                const Icon = offering.icon;
                return (
                  <Link
                    key={offering.to}
                    to={offering.to}
                    className="group flex flex-col rounded-xl border border-[#D6D0C7]/60 bg-white p-8 transition-all duration-300 hover:border-[#C9A84C]/40 hover:shadow-[0_12px_40px_-12px_rgba(6,16,31,0.12)] cursor-pointer sr sr-scale-up sr-spring hover-lift"
                  >
                    <div
                      className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#06101F]/5 ring-1 ring-[#C9A84C]/20"
                      aria-hidden
                    >
                      <Icon className="h-6 w-6 text-[#0C1B33]" />
                    </div>
                    <h3 className="mb-3 text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {offering.title}
                    </h3>
                    <p className="mb-3 flex-1 text-muted-foreground leading-relaxed">{offering.summary}</p>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary/80">
                      {offering.examples}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      {copy?.commercial.explore ?? 'Explore segment'} <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding py-14" ref={linksRef}>
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 sr sr-up sr-line">
              {copy?.links.h2 ?? 'Related research hubs & industries'}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl sr sr-up">
              {copy?.links.intro ??
                'Start from a healthcare hub, an industry segment, or a global index — depending on your category and geography.'}
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 sr sr-up">
              {hubLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-primary font-medium hover:underline cursor-pointer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <details className="mt-8 rounded-xl border border-border bg-card p-6 sr sr-up">
              <summary className="cursor-pointer font-display font-semibold text-foreground list-none flex items-center justify-between gap-2">
                {copy?.links.moreGuides ?? 'More research guides'}
                <span className="text-sm font-normal text-muted-foreground">
                  {recoveryLinksWithLabels.length} {copy?.links.linksCount ?? 'links'}
                </span>
              </summary>
              <ul className="grid sm:grid-cols-2 gap-2 mt-4 pt-4 border-t border-border">
                {recoveryLinksWithLabels.map(({ path, label }) => (
                  <li key={path}>
                    <Link to={path} className="text-sm text-primary hover:underline cursor-pointer">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </section>

        <section className="section-padding py-14 bg-[#F4F2ED]">
          <div className="container-wide max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8 text-center">
              {copy?.faq.h2 ?? 'Frequently asked questions'}
            </h2>
            <div className="space-y-3">
              {serviceFaq.map((item) => (
                <details
                  key={item.question}
                  className="rounded-xl border border-[#D6D0C7]/60 bg-white px-6 py-4 group"
                >
                  <summary className="cursor-pointer font-medium text-foreground list-none pr-4">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{item.answer}</p>
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
};

export default Services;
