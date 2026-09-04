import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Building2, Globe2, Layers } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { ListicleProposalCta } from '@/components/seo/ListicleProposalCta';
import { PharmaCompaniesFaqSection } from '@/components/seo/PharmaCompaniesFaqSection';
import { buildPharmaCompaniesFaqLd } from '@/components/seo/pharmaCompaniesSeo';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import {
  ALL_DIRECTORY_LISTINGS,
  DIRECTORY_COUNTRIES,
  DIRECTORY_ENTITIES,
  DIRECTORY_MASTER_HUB_PATH,
  countryHubPath,
  getDirectoriesForCountry,
  getDirectoriesForEntity,
  getDirectoryCountriesWithPages,
  getDirectoryEntitiesWithPages,
  getDirectoryHub,
  hasCountryHub,
  hasEntityHub,
  resolveCountryListicle,
  type DirectoryCountrySlug,
  type DirectoryEntitySlug,
  type DirectoryListing,
  type DirectoryRegion,
  type DirectorySector,
} from '@/data/companyDirectories';

type Props = { path: string };

const SECTOR_LABEL: Record<DirectorySector, string> = {
  healthcare: 'Healthcare & life sciences',
  consumer: 'Consumer, retail & automotive',
  financial: 'Banking & insurance',
  property: 'Real estate',
  industrial: 'Industrial, construction & logistics',
};

const SECTOR_ORDER: DirectorySector[] = ['healthcare', 'consumer', 'property', 'financial', 'industrial'];

const REGION_LABEL: Record<DirectoryRegion, string> = {
  gcc: 'GCC',
  mena: 'Wider MENA & Turkey',
  africa: 'Africa',
  europe: 'Europe',
  northamerica: 'North America',
  latam: 'Latin America',
  apac: 'Asia-Pacific',
};

const REGION_ORDER: DirectoryRegion[] = ['gcc', 'mena', 'africa', 'europe', 'northamerica', 'latam', 'apac'];

function LinkTile({ to, title, sub }: { to: string; title: string; sub?: string }) {
  return (
    <Link
      to={to}
      className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 text-sm shadow-sm transition-colors hover:border-primary"
    >
      <span>
        <span className="block font-semibold text-foreground">{title}</span>
        {sub ? <span className="block text-xs text-muted-foreground mt-0.5">{sub}</span> : null}
      </span>
      <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>
        &rarr;
      </span>
    </Link>
  );
}

function SectionHeading({ icon, title, body }: { icon: ReactNode; title: string; body?: string }) {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3 flex items-center gap-3">
        {icon}
        {title}
      </h2>
      {body ? <p className="text-muted-foreground mb-8 max-w-3xl">{body}</p> : null}
    </>
  );
}

export default function DirectoryHubPage({ path }: Props) {
  const hub = getDirectoryHub(path);
  if (!hub) return null;

  const citationUrl = `https://www.bionixus.com${hub.path}`;
  const ctr = getCtrSeo(hub.path);
  const pageTitle = ctr?.title ?? hub.title;
  const pageDescription = ctr?.description ?? hub.metaDescription;

  const country = hub.countrySlug ? DIRECTORY_COUNTRIES[hub.countrySlug] : undefined;
  const entity = hub.entity ? DIRECTORY_ENTITIES[hub.entity] : undefined;

  const items: DirectoryListing[] =
    hub.kind === 'country' && hub.countrySlug
      ? getDirectoriesForCountry(hub.countrySlug)
      : hub.kind === 'entity' && hub.entity
        ? getDirectoriesForEntity(hub.entity)
        : ALL_DIRECTORY_LISTINGS;

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    ...(hub.kind === 'master'
      ? [{ name: 'Company directories', href: hub.path }]
      : [
          { name: 'Company directories', href: DIRECTORY_MASTER_HUB_PATH },
          { name: hub.h1, href: hub.path },
        ]),
  ];

  const formMarket = country?.formMarket ?? 'Global';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={citationUrl} />
        <link rel="alternate" hrefLang="en" href={citationUrl} />
        <link rel="alternate" hrefLang="x-default" href={citationUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: hub.h1,
            description: pageDescription,
            url: citationUrl,
            datePublished: hub.publishedDate,
            dateModified: hub.modifiedDate,
            publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' },
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: items.length,
              itemListElement: items.map((d, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: d.label,
                url: `https://www.bionixus.com${d.path}`,
              })),
            },
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
              item: `https://www.bionixus.com${b.href}`,
            })),
          })}
        </script>
        <script type="application/ld+json">{JSON.stringify(buildPharmaCompaniesFaqLd(citationUrl, hub.faq))}</script>
      </Helmet>
      <OpenGraphMeta
        title={pageTitle}
        description={pageDescription}
        image="https://www.bionixus.com/og-image.png"
        url={citationUrl}
        type="website"
        locale="en_US"
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
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">
              {hub.kind === 'master'
                ? 'BioNixus company directories'
                : hub.kind === 'country'
                  ? `${country?.name} company directories`
                  : `${entity?.labelPlural} directories`}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">
              {hub.h1}
            </h1>
            {hub.intro.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4'
                    : 'text-muted-foreground leading-relaxed max-w-3xl mb-4'
                }
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="section-padding py-12 bg-primary text-primary-foreground">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">{items.length}</p>
                <p className="text-primary-foreground/70 text-sm mt-1">directories in this hub</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">
                  {new Set(items.map((d) => d.countrySlug)).size}
                </p>
                <p className="text-primary-foreground/70 text-sm mt-1">countries covered</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">
                  {new Set(items.map((d) => d.entity)).size}
                </p>
                <p className="text-primary-foreground/70 text-sm mt-1">company types</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-bold">48h</p>
                <p className="text-primary-foreground/70 text-sm mt-1">to a scoped proposal</p>
              </div>
            </div>
          </div>
        </section>

        {hub.kind === 'master' ? <MasterBody /> : null}
        {hub.kind === 'country' && hub.countrySlug ? <CountryBody country={hub.countrySlug} items={items} /> : null}
        {hub.kind === 'entity' && hub.entity ? <EntityBody entity={hub.entity} items={items} /> : null}

        <section className="section-padding py-16" id="use-cases">
          <div className="container-wide max-w-5xl mx-auto">
            <SectionHeading
              icon={<Layers className="w-6 h-6 text-primary" aria-hidden />}
              title="What these directories are for"
            />
            <div className="grid md:grid-cols-3 gap-6">
              {hub.useCases.map((u) => (
                <div key={u.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{u.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PharmaCompaniesFaqSection items={hub.faq} />

        <ListicleProposalCta
          countryName={formMarket}
          ctaId={`hub_${hub.path.replace(/^\//, '').replace(/[^a-z0-9]+/g, '_')}_footer`}
          headline={
            country
              ? `Need account-level data on any of these companies in ${country.display}?`
              : 'Need account-level data on any of these companies?'
          }
          body="Tell us the market, the accounts and the decision. BioNixus scopes a primary-research proposal within 48 hours."
        />
      </main>
      <Footer />
    </div>
  );
}

function MasterBody() {
  const countries = getDirectoryCountriesWithPages();
  const entities = getDirectoryEntitiesWithPages();
  const byRegion = REGION_ORDER.map((region) => ({
    region,
    countries: countries.filter((c) => DIRECTORY_COUNTRIES[c].region === region),
  })).filter((g) => g.countries.length > 0);
  const bySector = SECTOR_ORDER.map((sector) => ({
    sector,
    entities: entities.filter((e) => DIRECTORY_ENTITIES[e].sector === sector),
  })).filter((g) => g.entities.length > 0);

  return (
    <>
      <section className="section-padding py-16 bg-muted/30" id="by-country">
        <div className="container-wide max-w-5xl mx-auto">
          <SectionHeading
            icon={<Globe2 className="w-6 h-6 text-primary" aria-hidden />}
            title="Browse by country"
            body="Every market where BioNixus maintains at least one named-account directory. Countries with a dedicated hub list ten or more company types."
          />
          {byRegion.map((g) => (
            <div key={g.region} className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                {REGION_LABEL[g.region]}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {g.countries.map((c) => {
                  const n = getDirectoriesForCountry(c).length;
                  const to = hasCountryHub(c) ? countryHubPath(c) : getDirectoriesForCountry(c)[0]?.path;
                  return (
                    <LinkTile
                      key={c}
                      to={to}
                      title={DIRECTORY_COUNTRIES[c].name}
                      sub={`${n} ${n === 1 ? 'directory' : 'directories'}${hasCountryHub(c) ? ' · country hub' : ''}`}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding py-16" id="by-industry">
        <div className="container-wide max-w-5xl mx-auto">
          <SectionHeading
            icon={<Building2 className="w-6 h-6 text-primary" aria-hidden />}
            title="Browse by company type"
            body="The same directory format across sectors: 12–25 named accounts, channel structure, growth drivers and the regulator or registry the list was checked against."
          />
          {bySector.map((g) => (
            <div key={g.sector} className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                {SECTOR_LABEL[g.sector]}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {g.entities.map((e) => {
                  const list = getDirectoriesForEntity(e);
                  const to = hasEntityHub(e) ? DIRECTORY_ENTITIES[e].hubPath! : list[0]?.path;
                  return (
                    <LinkTile
                      key={e}
                      to={to}
                      title={DIRECTORY_ENTITIES[e].labelPlural}
                      sub={`${list.length} ${list.length === 1 ? 'country' : 'countries'}${hasEntityHub(e) ? ' · hub' : ''}`}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding py-16 bg-muted/30" id="all-directories">
        <div className="container-wide max-w-5xl mx-auto">
          <SectionHeading
            icon={<Layers className="w-6 h-6 text-primary" aria-hidden />}
            title="All directories, A–Z"
          />
          <ul className="columns-1 sm:columns-2 lg:columns-3 gap-6 text-sm">
            {ALL_DIRECTORY_LISTINGS.map((d) => (
              <li key={d.path} className="mb-1.5 break-inside-avoid">
                <Link to={d.path} className="text-foreground hover:text-primary hover:underline">
                  {d.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function CountryBody({ country, items }: { country: DirectoryCountrySlug; items: DirectoryListing[] }) {
  const meta = DIRECTORY_COUNTRIES[country];
  const groups = SECTOR_ORDER.map((sector) => ({
    sector,
    items: items.filter((d) => DIRECTORY_ENTITIES[d.entity].sector === sector),
  })).filter((g) => g.items.length > 0);
  const listicle = resolveCountryListicle(country);
  const research: { to: string; label: string }[] = [
    listicle,
    ...(meta.healthcareHubSlug
      ? [{ to: `/healthcare-market-research/${meta.healthcareHubSlug}`, label: `Healthcare market research in ${meta.display}` }]
      : []),
    { to: '/account-level-market-research', label: 'Account-level market research' },
  ].filter((l, i, arr) => arr.findIndex((x) => x.to === l.to) === i);

  return (
    <>
      <section className="section-padding py-16 bg-muted/30" id="directories">
        <div className="container-wide max-w-5xl mx-auto">
          <SectionHeading
            icon={<Building2 className="w-6 h-6 text-primary" aria-hidden />}
            title={`Company directories for ${meta.display}`}
            body={`Each directory lists the named ${meta.display} accounts BioNixus studies, the channel structure they sell through and the public register the list was checked against.`}
          />
          {groups.map((g) => (
            <div key={g.sector} className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                {SECTOR_LABEL[g.sector]}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {g.items.map((d) => (
                  <LinkTile key={d.path} to={d.path} title={DIRECTORY_ENTITIES[d.entity].labelPlural} sub={d.label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding py-16" id="research">
        <div className="container-wide max-w-5xl mx-auto">
          <SectionHeading
            icon={<Globe2 className="w-6 h-6 text-primary" aria-hidden />}
            title={`Research briefs for ${meta.display}`}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {research.map((l) => (
              <LinkTile key={l.to} to={l.to} title={l.label} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function EntityBody({ entity, items }: { entity: DirectoryEntitySlug; items: DirectoryListing[] }) {
  const meta = DIRECTORY_ENTITIES[entity];
  const groups = REGION_ORDER.map((region) => ({
    region,
    items: items.filter((d) => DIRECTORY_COUNTRIES[d.countrySlug].region === region),
  })).filter((g) => g.items.length > 0);

  return (
    <section className="section-padding py-16 bg-muted/30" id="directories">
      <div className="container-wide max-w-5xl mx-auto">
        <SectionHeading
          icon={<Globe2 className="w-6 h-6 text-primary" aria-hidden />}
          title={`${meta.labelPlural} by country`}
          body={`Every ${meta.labelSingular} directory BioNixus maintains, grouped by region. Each page carries 12–25 named accounts, the ${meta.tradeHeading.toLowerCase()} layer, growth drivers and a country proposal form.`}
        />
        {groups.map((g) => (
          <div key={g.region} className="mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              {REGION_LABEL[g.region]}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {g.items.map((d) => (
                <LinkTile
                  key={d.path}
                  to={d.path}
                  title={DIRECTORY_COUNTRIES[d.countrySlug].name}
                  sub={d.label}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
