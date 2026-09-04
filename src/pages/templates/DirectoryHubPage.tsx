import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { ListicleProposalCta } from '@/components/seo/ListicleProposalCta';
import { PharmaCompaniesFaqSection } from '@/components/seo/PharmaCompaniesFaqSection';
import { buildPharmaCompaniesFaqLd } from '@/components/seo/pharmaCompaniesSeo';
import { ReportReadingProgress } from '@/components/report-conversion';
import {
  DirectoryDriverCard,
  DirectoryGoldLink,
  DirectoryHero,
  DirectoryJumpNav,
  DirectoryLinkTile,
  DirectoryOutlineLink,
  DirectorySection,
} from '@/components/seo/DirectoryPremium';
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
  const kicker =
    hub.kind === 'master'
      ? 'BioNixus company directories'
      : hub.kind === 'country'
        ? `${country?.name} company directories`
        : `${entity?.labelPlural} directories`;

  const stats = [
    { value: String(items.length), label: 'directories in this hub' },
    { value: String(new Set(items.map((d) => d.countrySlug)).size), label: 'countries covered' },
    { value: String(new Set(items.map((d) => d.entity)).size), label: 'company types' },
    { value: '48h', label: 'to a scoped proposal' },
  ];

  const jumpItems =
    hub.kind === 'master'
      ? [
          { href: '#by-country', label: 'By country' },
          { href: '#by-industry', label: 'By industry' },
          { href: '#all-directories', label: 'A–Z' },
          { href: '#use-cases', label: 'Use cases' },
          { href: '#faq', label: 'FAQ' },
        ]
      : hub.kind === 'country'
        ? [
            { href: '#directories', label: 'Directories' },
            { href: '#research', label: 'Research' },
            { href: '#use-cases', label: 'Use cases' },
            { href: '#faq', label: 'FAQ' },
          ]
        : [
            { href: '#directories', label: 'By country' },
            { href: '#use-cases', label: 'Use cases' },
            { href: '#faq', label: 'FAQ' },
          ];

  return (
    <div className="directory-page min-h-screen">
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
      <ReportReadingProgress progressId={`hub-rp-${hub.path.replace(/^\//, '').replace(/[^a-z0-9]+/g, '-')}`} />
      <Navbar />
      <main>
        <DirectoryHero
          breadcrumbs={breadcrumbs}
          kicker={kicker}
          h1={hub.h1}
          lead={hub.intro[0] ?? pageDescription}
          rest={
            hub.intro.length > 1 ? (
              <>
                {hub.intro.slice(1).map((p, i) => (
                  <p key={i} className={i > 0 ? 'mt-3' : undefined}>
                    {p}
                  </p>
                ))}
              </>
            ) : undefined
          }
          stats={stats}
          actions={
            <>
              <DirectoryGoldLink to={hub.kind === 'master' ? '#by-country' : '#directories'}>
                Browse the directories
              </DirectoryGoldLink>
              <DirectoryOutlineLink href="#use-cases">See how teams use them</DirectoryOutlineLink>
            </>
          }
        />

        <DirectoryJumpNav items={jumpItems} />

        {hub.kind === 'master' ? <MasterBody /> : null}
        {hub.kind === 'country' && hub.countrySlug ? <CountryBody country={hub.countrySlug} items={items} /> : null}
        {hub.kind === 'entity' && hub.entity ? <EntityBody entity={hub.entity} items={items} /> : null}

        <DirectorySection id="use-cases" surface="ivory" eyebrow="Who this is for" title="What these directories are for">
          <div className="grid md:grid-cols-3 gap-5">
            {hub.useCases.map((u) => (
              <DirectoryDriverCard key={u.title} title={u.title} desc={u.desc} />
            ))}
          </div>
        </DirectorySection>

        <PharmaCompaniesFaqSection items={hub.faq} contained />

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

function GroupHeading({ children }: { children: string }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-3 mt-2">{children}</h3>
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
      <DirectorySection
        id="by-country"
        eyebrow="Geography"
        title="Browse by country"
        body="Every market where BioNixus maintains at least one named-account directory. Countries with a dedicated hub list ten or more company types."
      >
        {byRegion.map((g) => (
          <div key={g.region} className="mb-8">
            <GroupHeading>{REGION_LABEL[g.region]}</GroupHeading>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {g.countries.map((c) => {
                const n = getDirectoriesForCountry(c).length;
                const to = hasCountryHub(c) ? countryHubPath(c) : getDirectoriesForCountry(c)[0]?.path;
                return (
                  <DirectoryLinkTile
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
      </DirectorySection>

      <DirectorySection
        id="by-industry"
        surface="cream"
        eyebrow="Company type"
        title="Browse by company type"
        body="The same directory format across sectors: 12–25 named accounts, channel structure, growth drivers and the regulator or registry the list was checked against."
      >
        {bySector.map((g) => (
          <div key={g.sector} className="mb-8">
            <GroupHeading>{SECTOR_LABEL[g.sector]}</GroupHeading>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {g.entities.map((e) => {
                const list = getDirectoriesForEntity(e);
                const to = hasEntityHub(e) ? DIRECTORY_ENTITIES[e].hubPath! : list[0]?.path;
                return (
                  <DirectoryLinkTile
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
      </DirectorySection>

      <DirectorySection id="all-directories" eyebrow="Index" title="All directories, A–Z">
        <ul className="columns-1 sm:columns-2 lg:columns-3 gap-6 text-sm">
          {ALL_DIRECTORY_LISTINGS.map((d) => (
            <li key={d.path} className="mb-2 break-inside-avoid">
              <Link to={d.path} className="text-foreground hover:text-[#8A6A12] hover:underline underline-offset-4">
                {d.label}
              </Link>
            </li>
          ))}
        </ul>
      </DirectorySection>
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
      <DirectorySection
        id="directories"
        eyebrow={meta.display}
        title={`Company directories for ${meta.display}`}
        body={`Each directory lists the named ${meta.display} accounts BioNixus studies, the channel structure they sell through and the public register the list was checked against.`}
      >
        {groups.map((g) => (
          <div key={g.sector} className="mb-8">
            <GroupHeading>{SECTOR_LABEL[g.sector]}</GroupHeading>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {g.items.map((d) => (
                <DirectoryLinkTile key={d.path} to={d.path} title={DIRECTORY_ENTITIES[d.entity].labelPlural} sub={d.label} />
              ))}
            </div>
          </div>
        ))}
      </DirectorySection>

      <DirectorySection id="research" surface="cream" eyebrow="Briefs" title={`Research briefs for ${meta.display}`}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {research.map((l) => (
            <DirectoryLinkTile key={l.to} to={l.to} title={l.label} />
          ))}
        </div>
      </DirectorySection>
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
    <DirectorySection
      id="directories"
      eyebrow={meta.labelPlural}
      title={`${meta.labelPlural} by country`}
      body={`Every ${meta.labelSingular} directory BioNixus maintains, grouped by region. Each page carries 12–25 named accounts, the ${meta.tradeHeading.toLowerCase()} layer, growth drivers and a country proposal form.`}
    >
      {groups.map((g) => (
        <div key={g.region} className="mb-8">
          <GroupHeading>{REGION_LABEL[g.region]}</GroupHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {g.items.map((d) => (
              <DirectoryLinkTile key={d.path} to={d.path} title={DIRECTORY_COUNTRIES[d.countrySlug].name} sub={d.label} />
            ))}
          </div>
        </div>
      ))}
    </DirectorySection>
  );
}
