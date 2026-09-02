import { Link } from 'react-router-dom';
import { BookOpen, Building2, Globe, Store, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { IndustryDirectoryBridge } from '@/components/seo/IndustryDirectoryBridge';
import { ListicleProposalCta } from '@/components/seo/ListicleProposalCta';
import { PharmaCompaniesFaqSection } from '@/components/seo/PharmaCompaniesFaqSection';
import { buildPharmaCompaniesFaqLd, buildPharmaCompaniesItemListLd } from '@/components/seo/pharmaCompaniesSeo';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import {
  getIndustryDirectory,
  type IndustryCompanyType,
  type IndustryDirectoryCountrySlug,
  type IndustryDirectorySlug,
} from '@/data/industryCompanyDirectories';

type Props = {
  industry: IndustryDirectorySlug;
  countrySlug: IndustryDirectoryCountrySlug;
};

const TYPE_BADGE: Record<IndustryCompanyType, string> = {
  Local: 'bg-green-50 text-green-700',
  MNC: 'bg-blue-50 text-blue-700',
  Regional: 'bg-amber-50 text-amber-700',
  Distributor: 'bg-purple-50 text-purple-700',
  Retailer: 'bg-purple-50 text-purple-700',
  Developer: 'bg-purple-50 text-purple-700',
};

function tradeHeading(industry: IndustryDirectorySlug): string {
  if (industry === 'fmcg') return 'Distributors & trade partners';
  if (industry === 'retail') return 'Retail banners & pharmacies';
  return 'Developers we field';
}

export default function IndustryCompaniesDirectoryPage({ industry, countrySlug }: Props) {
  const config = getIndustryDirectory(industry, countrySlug);
  if (!config) return null;

  const citationUrl = `https://www.bionixus.com${config.path}`;
  const ctr = getCtrSeo(config.path);
  const pageTitle = ctr?.title ?? config.title;
  const pageDescription = ctr?.description ?? config.metaDescription;
  const articleHeadline = `${config.industryLabel} Companies in ${config.countryName}: 2026 Directory`;
  const locals = config.companies.filter((c) => c.type === 'Local');
  const mncs = config.companies.filter((c) => c.type === 'MNC');
  const regionals = config.companies.filter((c) => c.type === 'Regional');
  const trade = config.companies.filter(
    (c) => c.type === 'Distributor' || c.type === 'Retailer' || c.type === 'Developer',
  );
  const formMarket = countrySlug === 'uae' ? 'United Arab Emirates' : config.countryName;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={citationUrl} />
        <link rel="alternate" hrefLang="en" href={citationUrl} />
        <link rel="alternate" hrefLang="x-default" href={citationUrl} />
        <script type="application/ld+json">
          {JSON.stringify(buildPharmaCompaniesItemListLd(citationUrl, config.companies.map((c) => c.name)))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            image: 'https://www.bionixus.com/og-image.png',
            headline: articleHeadline,
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.bionixus.com/resources' },
              { '@type': 'ListItem', position: 3, name: config.h1, item: citationUrl },
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
        locale="en_US"
        article={{
          publishedTime: config.publishedDate,
          modifiedTime: config.modifiedDate,
          section: config.industryLabel,
        }}
      />
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav
              items={[
                { name: 'Home', href: '/' },
                { name: 'Resources', href: '/resources' },
                { name: config.h1, href: config.path },
              ]}
              className="px-0 mb-2"
            />
          </div>
        </div>

        <section className="section-padding pt-0 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">
              {config.industryLabel} directory 2026
            </p>
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

        <section className="section-padding py-16 bg-muted/30" id="top-companies">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              Top {config.industryLabel} companies in {config.countryDisplay}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Public, well-known names BioNixus studies at account and SKU level. This is an editorial snapshot, not an
              endorsement or a market-share ranking.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary/5 border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Company</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">HQ</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Type</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground hidden lg:table-cell">Focus</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground hidden xl:table-cell">Notes</th>
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
            <IndustryDirectoryBridge
              countryName={formMarket}
              countryDisplay={config.countryDisplay}
              industryLabel={config.industryLabel}
              listicleTo={config.listicleTo}
              listicleLabel={config.listicleLabel}
              ctaId={`${config.industry}_${config.countrySlug}_after_table`}
              sourceContext={`${config.industryLabel} companies directory — ${config.countryDisplay}`}
            />
          </div>
        </section>

        <section className="section-padding py-16" id="channels">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              {config.channelHeading}
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl leading-relaxed">{config.channelBody}</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-green-700" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">Local</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{config.categoryBlurbs.local}</p>
                <ul className="space-y-1.5 text-sm text-foreground">
                  {locals.map((company) => (
                    <li key={company.name} className="flex items-start gap-2">
                      <span className="text-green-600 mt-1 shrink-0">&#x2713;</span> {company.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">Multinational</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{config.categoryBlurbs.mnc}</p>
                <ul className="space-y-1.5 text-sm text-foreground">
                  {mncs.map((company) => (
                    <li key={company.name} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1 shrink-0">&#x2713;</span> {company.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-amber-700" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">Regional</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{config.categoryBlurbs.regional}</p>
                <ul className="space-y-1.5 text-sm text-foreground">
                  {regionals.map((company) => (
                    <li key={company.name} className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1 shrink-0">&#x2713;</span> {company.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                    <Store className="w-5 h-5 text-purple-700" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">{tradeHeading(config.industry)}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{config.categoryBlurbs.trade}</p>
                <ul className="space-y-1.5 text-sm text-foreground">
                  {trade.map((company) => (
                    <li key={company.name} className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1 shrink-0">&#x2713;</span> {company.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding py-16 bg-muted/30" id="growth-drivers">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              What is moving {config.industryLabel.toLowerCase()} in {config.countryDisplay}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {config.growthDrivers.map((driver) => (
                <div key={driver.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{driver.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{driver.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16" id="related">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              Related research and directories
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Matching listicle and country brief, sibling industry directories in {config.countryDisplay}, and the
              healthcare company guides buyers already use.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {config.relatedLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary"
                >
                  {link.label}
                  <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PharmaCompaniesFaqSection items={config.faq} />

        <section className="section-padding py-12" id="methodology">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Data sources &amp; methodology
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                This directory aggregates publicly available company and channel facts — filings, brand sites, and
                BioNixus fieldwork in {config.countryDisplay}. It is an editorial snapshot of the accounts we study, not
                a share ranking and not a substitute for NielsenIQ, IQVIA, or another syndicated feed.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                BioNixus sells account-level and SKU-level primary research that complements those subscriptions. For a
                scoped proposal,{' '}
                <Link to="/contact" className="text-primary hover:underline">
                  contact the team
                </Link>{' '}
                or use the form below. Email{' '}
                <a href="mailto:admin@bionixus.com" className="text-primary hover:underline">
                  admin@bionixus.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <ListicleProposalCta
          countryName={formMarket}
          ctaId={`${config.industry}_${config.countrySlug}_footer`}
          headline={`Need account-level ${config.industryLabel} data in ${config.countryDisplay}?`}
          body="Brand versus competitor, including traditional trade and the accounts a dashboard averages away. Proposal ready within 48 hours of a brief."
        />
      </main>
      <Footer />
    </div>
  );
}
