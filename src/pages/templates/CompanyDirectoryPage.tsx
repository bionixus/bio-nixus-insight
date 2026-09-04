import { Link } from 'react-router-dom';
import { BookOpen, Building2, ClipboardList, Globe, Store, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { IndustryDirectoryBridge } from '@/components/seo/IndustryDirectoryBridge';
import { ListicleProposalCta } from '@/components/seo/ListicleProposalCta';
import { PharmaCompaniesFaqSection } from '@/components/seo/PharmaCompaniesFaqSection';
import { buildDirectoryItemListLd, buildPharmaCompaniesFaqLd } from '@/components/seo/pharmaCompaniesSeo';
import { CountryDirectoryLinks } from '@/components/seo/CountryDirectoryLinks';
import { ReportReadingProgress } from '@/components/report-conversion';
import {
  DirectoryCategoryCard,
  DirectoryCompanyTable,
  DirectoryDriverCard,
  DirectoryGoldLink,
  DirectoryHero,
  DirectoryJumpNav,
  DirectoryLinkTile,
  DirectoryOutlineLink,
  DirectorySection,
  formatDirectoryDate,
} from '@/components/seo/DirectoryPremium';
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
  const hasSections = Boolean(config.sections && config.sections.length > 0);

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Company directories', href: DIRECTORY_MASTER_HUB_PATH },
    ...(config.hubs.country ? [{ name: `Companies in ${country.display}`, href: config.hubs.country }] : []),
    { name: config.h1, href: config.path },
  ];

  const jumpItems = [
    { href: '#top-companies', label: 'Companies' },
    { href: '#channels', label: 'Channels' },
    ...(hasSections ? [{ href: '#market-structure', label: 'Market' }] : []),
    { href: '#growth-drivers', label: 'Drivers' },
    ...(config.fieldNotes.length > 0 ? [{ href: '#bionixus-fieldwork', label: 'Fieldwork' }] : []),
    { href: '#related', label: 'Related' },
    { href: '#faq', label: 'FAQ' },
    { href: '#methodology', label: 'Sources' },
  ];

  const metaBits = [
    `Updated ${formatDirectoryDate(config.modifiedDate)}`,
    config.regulatorSource ? `${config.regulatorSource.name} as of ${formatDirectoryDate(config.regulatorSource.asOf)}` : null,
    `${config.companies.length} named accounts`,
  ].filter(Boolean);

  return (
    <div className="directory-page min-h-screen">
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
      <ReportReadingProgress progressId={`dir-rp-${config.path.replace(/^\//, '').replace(/[^a-z0-9]+/g, '-')}`} />
      <Navbar />
      <main>
        <DirectoryHero
          breadcrumbs={breadcrumbs}
          kicker={entityMeta.kicker}
          h1={config.h1}
          lead={config.introLead}
          rest={<p>{config.introRest}</p>}
          stats={config.stats}
          metaLine={metaBits.join(' · ')}
          actions={
            <>
              <DirectoryGoldLink to="#request-proposal">Request a proposal for {country.display}</DirectoryGoldLink>
              <DirectoryOutlineLink href="#top-companies">Browse the {config.companies.length} companies</DirectoryOutlineLink>
            </>
          }
        />

        <DirectoryJumpNav items={jumpItems} />

        <DirectorySection
          id="top-companies"
          eyebrow="Named accounts"
          title={`Top ${entityMeta.labelLower} in ${country.display}`}
          body={
            <>
              Public, well-known names BioNixus studies at account and SKU level. This is an editorial snapshot, not an
              endorsement or a market-share ranking.
              {config.regulatorSource ? (
                <>
                  {' '}
                  Cross-checked against {config.regulatorSource.name} (as of {config.regulatorSource.asOf}).
                </>
              ) : null}
            </>
          }
        >
          <DirectoryCompanyTable companies={config.companies} focusColumn={entityMeta.focusColumn} />
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
        </DirectorySection>

        <DirectorySection
          id="channels"
          surface="cream"
          eyebrow="How the market is structured"
          title={config.channelHeading}
          body={config.channelBody}
        >
          <div className="grid md:grid-cols-2 gap-5">
            <DirectoryCategoryCard
              title="Local"
              icon={<Building2 className="w-5 h-5" />}
              blurb={config.categoryBlurbs.local}
              names={locals.map((c) => c.name)}
            />
            <DirectoryCategoryCard
              title="Multinational"
              icon={<Globe className="w-5 h-5" />}
              blurb={config.categoryBlurbs.mnc}
              names={mncs.map((c) => c.name)}
            />
            <DirectoryCategoryCard
              title="Regional"
              icon={<TrendingUp className="w-5 h-5" />}
              blurb={config.categoryBlurbs.regional}
              names={regionals.map((c) => c.name)}
            />
            <DirectoryCategoryCard
              title={entityMeta.tradeHeading}
              icon={<Store className="w-5 h-5" />}
              blurb={config.categoryBlurbs.trade}
              names={trade.map((c) => c.name)}
            />
          </div>
        </DirectorySection>

        {hasSections ? (
          <DirectorySection id="market-structure" eyebrow="Market structure">
            <div className="space-y-12">
              {config.sections!.map((sec) => (
                <div key={sec.heading}>
                  <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">{sec.heading}</h2>
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
          </DirectorySection>
        ) : null}

        <DirectorySection
          id="growth-drivers"
          surface={hasSections ? 'cream' : 'ivory'}
          eyebrow="What is moving"
          title={`What is moving ${entityMeta.movementNoun} in ${country.display}`}
        >
          <div className="grid md:grid-cols-3 gap-5">
            {config.growthDrivers.map((driver) => (
              <DirectoryDriverCard key={driver.title} title={driver.title} desc={driver.desc} />
            ))}
          </div>
        </DirectorySection>

        {config.fieldNotes.length > 0 ? (
          <DirectorySection
            id="bionixus-fieldwork"
            surface={hasSections ? 'ivory' : 'cream'}
            eyebrow="BioNixus fieldwork"
            title={`How BioNixus studies ${entityMeta.labelLower} in ${country.display}`}
            body={
              <>
                The accounts above are the ones our field teams and analysts work with. What a brand team typically
                commissions from us in {country.display}:
              </>
            }
          >
            <ul className="grid md:grid-cols-2 gap-3">
              {config.fieldNotes.map((note) => (
                <li
                  key={note}
                  className="flex items-start gap-3 text-sm text-foreground bg-[#FFFEFB] rounded-2xl border border-[#EDE9E3] p-5"
                >
                  <ClipboardList className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" aria-hidden />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
            {config.bofuTo && config.bofuLabel ? (
              <p className="mt-8 text-sm">
                <Link to={config.bofuTo} className="inline-flex items-center gap-1.5 font-semibold text-[#8A6A12] hover:underline">
                  {config.bofuLabel} <span aria-hidden>&rarr;</span>
                </Link>
              </p>
            ) : null}
          </DirectorySection>
        ) : null}

        <DirectorySection
          id="related"
          surface="cream"
          eyebrow="Keep reading"
          title="Related research and directories"
          body={`Matching listicle and country brief, sibling directories in ${country.display}, and the same directory for neighbouring markets.`}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {config.relatedLinks.map((link) => (
              <DirectoryLinkTile key={link.to} to={link.to} title={link.label} />
            ))}
          </div>
          <CountryDirectoryLinks country={config.countrySlug} excludePath={config.path} className="mt-12" />
        </DirectorySection>

        <PharmaCompaniesFaqSection items={config.faq} contained />

        <DirectorySection
          id="methodology"
          surface="ivory"
          eyebrow="Sources"
          title="Data sources & methodology"
        >
          <div className="premium-card">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" aria-hidden />
              <span>
                This directory aggregates publicly available company and channel facts — filings, brand sites, and
                BioNixus fieldwork in {country.display}. It is an editorial snapshot of the accounts we study, not a
                share ranking and not a substitute for NielsenIQ, IQVIA, or another syndicated feed.
              </span>
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
        </DirectorySection>

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
