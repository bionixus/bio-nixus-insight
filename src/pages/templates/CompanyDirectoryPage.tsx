import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Building2, ClipboardList, Globe, Store, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { IndustryDirectoryBridge } from '@/components/seo/IndustryDirectoryBridge';
import { ListicleProposalCta } from '@/components/seo/ListicleProposalCta';
import { PharmaCompaniesFaqSection } from '@/components/seo/PharmaCompaniesFaqSection';
import { buildDirectoryItemListLd, buildPharmaCompaniesFaqLd } from '@/components/seo/pharmaCompaniesSeo';
import { CountryDirectoryLinks } from '@/components/seo/CountryDirectoryLinks';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import { getDirectoryConversionCopy } from '@/data/reportConversionConfig';
import {
  DIRECTORY_MASTER_HUB_PATH,
  getCompanyDirectory,
  type DirectoryCompanyType,
  type DirectoryPageConfig,
} from '@/data/companyDirectories';

type Props = {
  /** Directory path, e.g. '/pharmaceutical-distributors-saudi-arabia'. */
  path: string;
};

const TYPE_BADGE: Record<DirectoryCompanyType, string> = {
  Local: 'bg-green-50 text-green-700',
  MNC: 'bg-blue-50 text-blue-700',
  Regional: 'bg-amber-50 text-amber-700',
  Distributor: 'bg-purple-50 text-purple-700',
  Retailer: 'bg-purple-50 text-purple-700',
  Developer: 'bg-purple-50 text-purple-700',
  Operator: 'bg-purple-50 text-purple-700',
  Government: 'bg-slate-100 text-slate-700',
};

const TRADE_TYPES: DirectoryCompanyType[] = ['Distributor', 'Retailer', 'Developer', 'Operator', 'Government'];

/** Legacy FMCG / retail / real-estate pages keep their original cta_id prefix for GA continuity. */
function ctaPrefix(config: DirectoryPageConfig): string {
  return config.legacyIndustryConfig ? config.entity.replace(/-companies$/, '') : config.entity;
}

/** Short industry word for the bridge heading and footer CTA (e.g. "FMCG", "pharma distribution"). */
function shortLabel(config: DirectoryPageConfig): string {
  if (config.legacyIndustryConfig) {
    return config.entity === 'fmcg-companies' ? 'FMCG' : config.entity === 'retail-companies' ? 'Retail' : 'Real Estate';
  }
  return config.entityMeta.labelLower;
}

export default function CompanyDirectoryPage({ path }: Props) {
  const config = getCompanyDirectory(path);
  if (!config) return null;

  const { entityMeta, country } = config;
  const citationUrl = `https://www.bionixus.com${config.path}`;
  const ctr = getCtrSeo(config.path);
  const pageTitle = ctr?.title ?? config.title;
  const pageDescription = ctr?.description ?? config.metaDescription;
  const articleHeadline = `${entityMeta.labelPlural} in ${country.name}: 2026 Directory`;
  const locals = config.companies.filter((c) => c.type === 'Local');
  const mncs = config.companies.filter((c) => c.type === 'MNC');
  const regionals = config.companies.filter((c) => c.type === 'Regional');
  const trade = config.companies.filter((c) => TRADE_TYPES.includes(c.type));
  const formMarket = country.formMarket;
  const prefix = ctaPrefix(config);
  const label = shortLabel(config);
  const copy = getDirectoryConversionCopy(config.entity, { label, place: country.display });

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Company directories', href: DIRECTORY_MASTER_HUB_PATH },
    ...(config.hubs.country ? [{ name: `Companies in ${country.display}`, href: config.hubs.country }] : []),
    { name: config.h1, href: config.path },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={citationUrl} />
        <link rel="alternate" hrefLang="en" href={citationUrl} />
        <link rel="alternate" hrefLang="x-default" href={citationUrl} />
        <script type="application/ld+json">
          {JSON.stringify(
            buildDirectoryItemListLd(
              citationUrl,
              `${entityMeta.labelPlural} in ${country.name}`,
              config.companies.map((c) => ({ name: c.name, hq: c.hq, focus: c.focus })),
            ),
          )}
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
            itemListElement: breadcrumbs.map((b, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: b.name,
              item: `https://www.bionixus.com${b.href === '/' ? '/' : b.href}`,
            })),
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
          section: entityMeta.labelPlural,
        }}
      />
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <BreadcrumbNav items={breadcrumbs} className="px-0 mb-2" />
          </div>
        </div>

        <section className="section-padding pt-0 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">{entityMeta.kicker}</p>
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
              Top {entityMeta.labelLower} in {country.display}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Public, well-known names BioNixus studies at account and SKU level. This is an editorial snapshot, not an
              endorsement or a market-share ranking.
              {config.regulatorSource ? (
                <>
                  {' '}
                  Cross-checked against {config.regulatorSource.name} (as of {config.regulatorSource.asOf}).
                </>
              ) : null}
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary/5 border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Company</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">HQ</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Type</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground hidden lg:table-cell">
                      {entityMeta.focusColumn}
                    </th>
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
              countryDisplay={country.display}
              industryLabel={label}
              listicleTo={config.listicleTo}
              listicleLabel={config.listicleLabel}
              ctaId={`${prefix}_${config.countrySlug}_after_table`}
              sourceContext={`${entityMeta.labelPlural} directory — ${country.display}`}
              defaultNeed={entityMeta.formNeed}
              headline={config.legacyIndustryConfig ? undefined : copy.bridgeHeadline}
              body={config.legacyIndustryConfig ? undefined : copy.bridgeBody}
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
              <CategoryCard
                title="Local"
                icon={<Building2 className="w-5 h-5 text-green-700" />}
                iconBg="bg-green-50"
                tick="text-green-600"
                blurb={config.categoryBlurbs.local}
                names={locals.map((c) => c.name)}
              />
              <CategoryCard
                title="Multinational"
                icon={<Globe className="w-5 h-5 text-blue-700" />}
                iconBg="bg-blue-50"
                tick="text-blue-600"
                blurb={config.categoryBlurbs.mnc}
                names={mncs.map((c) => c.name)}
              />
              <CategoryCard
                title="Regional"
                icon={<TrendingUp className="w-5 h-5 text-amber-700" />}
                iconBg="bg-amber-50"
                tick="text-amber-600"
                blurb={config.categoryBlurbs.regional}
                names={regionals.map((c) => c.name)}
              />
              <CategoryCard
                title={entityMeta.tradeHeading}
                icon={<Store className="w-5 h-5 text-purple-700" />}
                iconBg="bg-purple-50"
                tick="text-purple-600"
                blurb={config.categoryBlurbs.trade}
                names={trade.map((c) => c.name)}
              />
            </div>
          </div>
        </section>

        {config.sections && config.sections.length > 0 ? (
          <section className="section-padding py-16 bg-muted/30" id="market-structure">
            <div className="container-wide max-w-5xl mx-auto space-y-12">
              {config.sections.map((sec) => (
                <div key={sec.heading}>
                  <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
                    {sec.heading}
                  </h2>
                  <div className="space-y-4 max-w-3xl">
                    {sec.paragraphs.map((p, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section
          className={`section-padding py-16 ${config.sections && config.sections.length > 0 ? '' : 'bg-muted/30'}`}
          id="growth-drivers"
        >
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              What is moving {entityMeta.movementNoun} in {country.display}
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

        {config.fieldNotes.length > 0 ? (
          <section className="section-padding py-16" id="bionixus-fieldwork">
            <div className="container-wide max-w-5xl mx-auto">
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                  <ClipboardList className="w-6 h-6 text-primary" />
                  How BioNixus studies {entityMeta.labelLower} in {country.display}
                </h2>
                <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                  The accounts above are the ones our field teams and analysts work with. What a brand team typically
                  commissions from us in {country.display}:
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  {config.fieldNotes.map((note) => (
                    <li key={note} className="flex items-start gap-3 text-sm text-foreground bg-card rounded-xl border border-border p-4">
                      <span className="text-primary mt-0.5 shrink-0">&#x2713;</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
                {config.bofuTo && config.bofuLabel ? (
                  <p className="mt-6 text-sm">
                    <Link to={config.bofuTo} className="text-primary font-medium hover:underline">
                      {config.bofuLabel} &rarr;
                    </Link>
                  </p>
                ) : null}
              </div>
            </div>
          </section>
        ) : null}

        <section className="section-padding py-16 bg-muted/30" id="related">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">
              Related research and directories
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Matching listicle and country brief, sibling directories in {country.display}, and the same directory for
              neighbouring markets.
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
            <CountryDirectoryLinks country={config.countrySlug} excludePath={config.path} className="mt-10" />
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
                BioNixus fieldwork in {country.display}. It is an editorial snapshot of the accounts we study, not a
                share ranking and not a substitute for NielsenIQ, IQVIA, or another syndicated feed.
              </p>
              {config.regulatorSource ? (
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Primary register:{' '}
                  <a
                    href={config.regulatorSource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {config.regulatorSource.name}
                  </a>
                  , consulted {config.regulatorSource.asOf}. Company classification (Local / MNC / Regional /{' '}
                  {entityMeta.tradeHeading.toLowerCase()}) reflects ownership and role in {country.display}, not size.
                </p>
              ) : null}
              {config.sources.length > 0 ? (
                <ul className="text-sm text-muted-foreground leading-relaxed mb-4 list-disc pl-5 space-y-1">
                  {config.sources.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              ) : null}
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
          ctaId={`${prefix}_${config.countrySlug}_footer`}
          headline={copy.footerHeadline}
          body={copy.footerBody}
        />
      </main>
      <Footer />
    </div>
  );
}

function CategoryCard({
  title,
  icon,
  iconBg,
  tick,
  blurb,
  names,
}: {
  title: string;
  icon: ReactNode;
  iconBg: string;
  tick: string;
  blurb: string;
  names: string[];
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center`}>{icon}</div>
        <h3 className="text-lg font-display font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{blurb}</p>
      {names.length > 0 ? (
        <ul className="space-y-1.5 text-sm text-foreground">
          {names.map((name) => (
            <li key={name} className="flex items-start gap-2">
              <span className={`${tick} mt-1 shrink-0`}>&#x2713;</span> {name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
