import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Share2, BookOpen, Building2, Globe, ShieldCheck, Pill, Truck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { ConversionCTA } from '@/components/conversion/ConversionCTA';
import { PharmaDirectoryBridge } from '@/components/seo/PharmaDirectoryBridge';
import { useScrollThreshold } from '@/hooks/useScrollThreshold';
import type { ReportConversionConfig } from '@/data/reportConversionConfig';
import { buildPharmaCompaniesFaqLd, buildPharmaCompaniesItemListLd } from '@/components/seo/pharmaCompaniesSeo';
import { PharmaCompaniesFaqSection } from '@/components/seo/PharmaCompaniesFaqSection';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportEarlyCtaBar,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';
import { CountryDirectoryLinks } from '@/components/seo/CountryDirectoryLinks';
import { parseDirectoryPath } from '@/data/companyDirectories';
import { PHARMA_GUIDE_ARTICLE_CONTAINER, PHARMA_GUIDE_INNER, PHARMA_GUIDE_SECTION_X } from '@/components/report-conversion/constants';
import {
  DirectoryCategoryCard,
  DirectoryDriverCard,
  DirectoryGoldLink,
  DirectoryHero,
  DirectoryJumpNav,
  DirectoryLinkTile,
  DirectoryOutlineLink,
  DirectorySection,
} from '@/components/seo/DirectoryPremium';
import { getEditorialAuthor, isComparisonPath, personAuthorJsonLd } from '@/data/editorialAuthors';

export type CountryCompanyEntry = {
  name: string;
  hq: string;
  type: 'Local Manufacturer' | 'MNC Office' | 'Distributor' | 'Regional';
  therapeuticAreas: string;
  notes: string;
};

export type CountryCompaniesGuideConfig = {
  /** Full route path, e.g. '/pharmaceutical-companies-turkey'. */
  path: string;
  countryName: string;
  /** Display form used inside sentences, e.g. 'the USA' — defaults to countryName. */
  countryDisplay?: string;
  /** 'pharmaceutical' or 'medical device' — controls all copy variants. */
  industry: 'pharmaceutical' | 'medical device';
  title: string;
  metaDescription: string;
  h1: string;
  /** Intro sentence(s) — the template injects the hub link after the first sentence. */
  introLead: string;
  introRest: string;
  stats: { value: string; label: string }[];
  quickAnswer: {
    marketSize: string;
    growthRate?: string;
    regulatorLabel: string;
    extraSentence?: string;
  };
  marketOverviewParagraphs: string[];
  companies: CountryCompanyEntry[];
  categoryBlurbs: { local: string; mnc: string; regional: string; distributor: string };
  regulator: {
    short: string;
    full: string;
    registrationTimeline: string;
    renewalPeriod: string;
    pricingModel: string;
    requirements: string[];
    note: string;
  };
  growthDrivers: { title: string; desc: string }[];
  bionixusServices: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
  /** Rule 18 — at least 2 country cross-links. */
  relatedLinks: { to: string; label: string }[];
  sources: string[];
  publishedDate: string;
  modifiedDate: string;
  conversion: {
    routingHint: string;
    emailSubject: string;
  };
};

function buildConversionConfig(config: CountryCompaniesGuideConfig): ReportConversionConfig {
  return {
    marketName: config.countryName,
    reportLabel: `${config.countryName} ${config.industry} companies`,
    canonicalPath: config.path,
    shareSlug: config.path.replace(/^\//, ''),
    emailSubject: config.conversion.emailSubject,
    routingHint: config.conversion.routingHint,
    primaryCtaLabel: `Request a ${config.countryName} research proposal`,
    consultationHeadline: `Need brand and competitor data in ${config.countryName}?`,
    consultationBody:
      'BioNixus designs bilingual instruments, recruits regulator-aligned stakeholders, monitors tender and formulary cycles, and packages board-ready narratives for pharma, biotech, and medtech teams.',
    asideDeskLabel: `${config.countryName} market desk`,
    midPageHeadline: `Commission custom ${config.countryName} fieldwork`,
    midPageBody: `Book a 30-minute briefing to align on ${config.regulator.short} pathway intelligence, stakeholder mapping, and competitive tracking for ${config.countryDisplay ?? config.countryName}.`,
  };
}

/**
 * Data-driven country company-directory guide (pharma or medical devices).
 * Mirrors the proven /pharmaceutical-companies-* template: quick-answer block,
 * ranked table + ItemList schema, category cards, regulatory landscape,
 * growth drivers, FAQ (details/summary + FAQPage schema), and cross-links.
 */
export function CountryCompaniesGuide({ config }: { config: CountryCompaniesGuideConfig }) {
  const past70Percent = useScrollThreshold(70);
  const citationUrl = `https://www.bionixus.com${config.path}`;
  const countryDisplay = config.countryDisplay ?? config.countryName;
  const conversion = buildConversionConfig(config);
  const directoryCountry = parseDirectoryPath(config.path)?.countrySlug;
  const industryTitle = config.industry === 'pharmaceutical' ? 'Pharmaceutical' : 'Medical Device';
  const headline = `${industryTitle} Companies in ${config.countryName}: Complete Industry Guide 2026`;
  const guideSlugId = config.path.replace(/^\//, '').replace(/[^a-z0-9-]/g, '');
  const pageAuthor = getEditorialAuthor({
    path: config.path,
    pageType: isComparisonPath(config.path) ? 'comparison' : 'article',
  });

  return (
    <div className="directory-page min-h-screen">
      <Helmet>
        <title>{config.title}</title>
        <meta name="description" content={config.metaDescription} />
        <link rel="canonical" href={citationUrl} />
        <script type="application/ld+json">{JSON.stringify(buildPharmaCompaniesItemListLd(citationUrl, config.companies.map((c) => c.name)))}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', image: 'https://www.bionixus.com/og-image.png', headline, description: config.metaDescription, url: citationUrl, datePublished: config.publishedDate, dateModified: config.modifiedDate, author: personAuthorJsonLd(pageAuthor), publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp', width: 512, height: 512 } } })}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' }, { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.bionixus.com/resources' }, { '@type': 'ListItem', position: 3, name: `${industryTitle} Companies in ${config.countryName}`, item: citationUrl }] })}</script>
        <script type="application/ld+json">{JSON.stringify(buildPharmaCompaniesFaqLd(citationUrl, config.faq))}</script>
      </Helmet>
      <OpenGraphMeta
        title={config.title}
        description={config.metaDescription}
        image="https://www.bionixus.com/og-image.png"
        url={citationUrl}
        type="article"
        locale="en_US"
      />
      <Navbar />
      <ReportReadingProgress progressId={`pharma-guide-rp-${guideSlugId}`} />
      <main>
        <div data-hero-lcp>
          <DirectoryHero
            breadcrumbs={[
              { name: 'Home', href: '/' },
              { name: 'Resources', href: '/resources' },
              { name: `${industryTitle} Companies in ${config.countryName}`, href: config.path },
            ]}
            kicker="Industry Guide 2026"
            h1={config.h1}
            lead={
              <>
                {config.introLead} — see BioNixus&apos;s <Link to="/healthcare-market-research">healthcare market research</Link> hub
                for global context. {config.introRest}
              </>
            }
            metaLine={`Last updated: August 2026 · Sources: ${config.sources.slice(0, 3).join(', ')}, BioNixus research`}
            stats={config.stats}
            actions={
              <>
                <DirectoryGoldLink to="#request-proposal">Request a {config.countryName} proposal</DirectoryGoldLink>
                <DirectoryOutlineLink href="#top-companies">Browse the companies</DirectoryOutlineLink>
              </>
            }
          />
        </div>

        <DirectoryJumpNav
          items={[
            { href: '#companies-quick-answer', label: 'Answer' },
            { href: '#top-companies', label: 'Companies' },
            { href: '#companies-by-category', label: 'Categories' },
            { href: '#regulatory-landscape', label: 'Regulator' },
            { href: '#growth-drivers', label: 'Drivers' },
            { href: '#faq', label: 'FAQ' },
          ]}
        />

        <DirectorySection id="cite" eyebrow="Attribution">
          <div className="premium-card p-5">
            <div className="flex items-start gap-3">
              <Share2 className="w-5 h-5 text-[#C9A84C] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Cite this guide</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  BioNixus. &quot;{headline}.&quot; BioNixus Healthcare Market Research, Aug. 2026,{' '}
                  <a href={citationUrl} className="text-primary hover:underline break-all">
                    {citationUrl}
                  </a>
                  .<br />
                  Licensed under{' '}
                  <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    CC BY 4.0
                  </a>{' '}
                  — free to share and adapt with attribution.
                </p>
              </div>
            </div>
          </div>
          <ReportEarlyCtaBar config={conversion} className="mt-8" />
        </DirectorySection>

        <section className={`${PHARMA_GUIDE_SECTION_X} py-10 bg-muted/25 border-y border-border/60`} id="companies-quick-answer" aria-labelledby="companies-quick-answer-heading">
          <div className={PHARMA_GUIDE_INNER}>
            <h2 id="companies-quick-answer-heading" className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">{industryTitle} companies in {countryDisplay}: quick answer (2026)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-3xl">
              {industryTitle} companies in {countryDisplay} span local manufacturers, multinational offices, and hospital-focused distributors overseen by {config.quickAnswer.regulatorLabel}. BioNixus sizes the market at {config.quickAnswer.marketSize}
              {config.quickAnswer.growthRate ? ` (${config.quickAnswer.growthRate} growth)` : ''} and maps the accounts that shape tenders, insurance, and retail access. For broader context, start at the{' '}
              <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">healthcare market research hub</Link>.
              {config.quickAnswer.extraSentence ? ` ${config.quickAnswer.extraSentence}` : ''}
            </p>
            <p className="text-sm font-semibold text-foreground mb-2">Companies and channels teams ask about first</p>
            <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground mb-4 max-w-3xl">
              {config.companies.slice(0, 7).map((c) => (<li key={c.name} className="pl-1">{c.name}</li>))}
            </ol>
          </div>
        </section>

        <ReportContentWithAside config={conversion} containerClassName={PHARMA_GUIDE_ARTICLE_CONTAINER}>

        <section className="section-padding py-16" id="market-overview"><div className="container-wide w-full">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">{config.countryName} {industryTitle} Market Overview</h2>
          <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
            {config.marketOverviewParagraphs.map((p, i) => (<p key={i}>{p}</p>))}
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="top-companies"><div className="container-wide w-full">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Top {industryTitle} Companies in {countryDisplay}</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">The following table lists the major {config.industry} companies operating in {countryDisplay} — including local manufacturers, multinational offices, regional players, and leading distributors.</p>
          <div className="overflow-x-auto rounded-2xl border border-[#EDE9E3] shadow-[0_16px_50px_rgba(6,16,31,0.05)]"><table className="directory-table"><thead><tr><th>Company</th><th>HQ</th><th className="hidden md:table-cell">Type</th><th className="hidden lg:table-cell">Focus Areas</th><th className="hidden xl:table-cell">Notes</th></tr></thead><tbody>
            {config.companies.map((c, i) => (<tr key={c.name} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}><td className="px-4 py-3 font-medium text-foreground">{c.name}</td><td className="px-4 py-3 text-muted-foreground">{c.hq}</td><td className="px-4 py-3 hidden md:table-cell"><span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${c.type === 'Local Manufacturer' ? 'bg-green-50 text-green-700' : c.type === 'MNC Office' ? 'bg-blue-50 text-blue-700' : c.type === 'Regional' ? 'bg-amber-50 text-amber-700' : 'bg-purple-50 text-purple-700'}`}>{c.type}</span></td><td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">{c.therapeuticAreas}</td><td className="px-4 py-3 text-muted-foreground text-xs hidden xl:table-cell">{c.notes}</td></tr>))}
          </tbody></table></div>
          {config.industry === 'pharmaceutical' ? (
            <PharmaDirectoryBridge
              countryName={config.countryName}
              countryDisplay={countryDisplay}
              directorySlug={config.path.replace('/pharmaceutical-companies-', '')}
              ctaId={`companies_${guideSlugId}_after_table`}
            />
          ) : (
            <div className="mt-8">
              <ConversionCTA
                variant="talk-to-research"
                market={config.countryName}
                ctaId={`companies_${guideSlugId}_after_table`}
                ctaLocation="after_first_table"
              />
            </div>
          )}
        </div></section>

        <ReportMidPageCta config={conversion} />

        <section className="section-padding py-16" id="companies-by-category"><div className="container-wide w-full">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">List of {industryTitle} Companies in {countryDisplay} by Category</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">{config.countryName} {config.industry} companies span local manufacturers, multinational corporation offices, regional suppliers, and key distributors.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <DirectoryCategoryCard title="Local Manufacturers" icon={<Pill className="w-5 h-5" />} blurb={config.categoryBlurbs.local} names={config.companies.filter((c) => c.type === 'Local Manufacturer').map((c) => c.name)} />
            <DirectoryCategoryCard title="Multinational Offices" icon={<Globe className="w-5 h-5" />} blurb={config.categoryBlurbs.mnc} names={config.companies.filter((c) => c.type === 'MNC Office').map((c) => c.name)} />
            <DirectoryCategoryCard title="Regional Players" icon={<Building2 className="w-5 h-5" />} blurb={config.categoryBlurbs.regional} names={config.companies.filter((c) => c.type === 'Regional').map((c) => c.name)} />
            <DirectoryCategoryCard title="Distributors" icon={<Truck className="w-5 h-5" />} blurb={config.categoryBlurbs.distributor} names={config.companies.filter((c) => c.type === 'Distributor').map((c) => c.name)} />
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="regulatory-landscape"><div className="container-wide w-full">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">{industryTitle} Companies in {countryDisplay}: {config.regulator.short} Regulatory Landscape</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">{config.regulator.full} is {countryDisplay}&apos;s {config.industry} regulator.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" />Regulatory Authority</h3><p className="text-sm text-muted-foreground leading-relaxed mb-4"><strong className="text-foreground">{config.regulator.full} ({config.regulator.short})</strong> oversees registration, quality control, pricing, vigilance, and import licensing.</p><div className="space-y-3"><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Registration Timeline</p><p className="text-lg font-semibold text-foreground">{config.regulator.registrationTimeline}</p></div><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Renewal Period</p><p className="text-lg font-semibold text-foreground">{config.regulator.renewalPeriod}</p></div><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pricing Model</p><p className="text-sm text-foreground">{config.regulator.pricingModel}</p></div></div></div>
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Pill className="w-5 h-5 text-primary" />Key Registration Requirements</h3><ul className="space-y-3 text-sm text-foreground">{config.regulator.requirements.map((r) => (<li key={r} className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>{r}</span></li>))}</ul></div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">Market Access Note</h3><p className="text-sm text-muted-foreground leading-relaxed">{config.regulator.note}</p></div>
        </div></section>

        <section className="section-padding py-16" id="growth-drivers"><div className="container-wide w-full">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">{config.countryName} {industryTitle} Market Growth Drivers</h2>
          <div className="grid md:grid-cols-3 gap-5">{config.growthDrivers.map((d) => (<DirectoryDriverCard key={d.title} title={d.title} desc={d.desc} />))}</div>
        </div></section>

        <section className="section-padding py-16" id="bionixus-support"><div className="container-wide w-full">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">How BioNixus Supports {industryTitle} Companies in {countryDisplay}</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">BioNixus is a healthcare market research company with primary-research capability in {countryDisplay} and cross-market benchmarking against GCC, USA, and European markets. We help pharma, biotech, and medtech companies with:</p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">{config.bionixusServices.map((s) => (<div key={s.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{s.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-16" id="related-directories"><div className="container-wide w-full">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Related BioNixus country directories &amp; reports</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">Compare the {config.countryName} {config.industry} industry with BioNixus company directories and market reports for other priority markets.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {config.relatedLinks.map((l) => (<DirectoryLinkTile key={l.to} to={l.to} title={l.label} />))}
          </div>
          {directoryCountry ? <CountryDirectoryLinks country={directoryCountry} excludePath={config.path} className="mt-10" /> : null}
        </div></section>

        <PharmaCompaniesFaqSection items={config.faq} contained />

        <section className="section-padding py-12" id="methodology"><div className="container-wide w-full"><div className="bg-card border border-border rounded-xl p-8"><h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" />Data Sources &amp; Methodology</h2><p className="text-sm text-muted-foreground leading-relaxed mb-4">This guide aggregates publicly available information from:</p><ul className="text-sm text-muted-foreground space-y-2 mb-6">{config.sources.map((s) => (<li key={s}>{s}</li>))}</ul><p className="text-sm text-muted-foreground leading-relaxed">Company lists are editorial snapshots, not endorsements; market sizes are BioNixus estimate ranges synthesised from regulator and industry sources. For customised market intelligence on {countryDisplay}, <Link to="/contact" className="text-primary hover:underline">contact our team</Link>.</p></div></div></section>
        </ReportContentWithAside>

        <div id="request-proposal">
          <ReportConsultationBand config={conversion} />
        </div>
        </main>
      <Footer />
      {past70Percent ? (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border shadow-lg p-4">
          <div className="container-wide max-w-3xl mx-auto">
            <ConversionCTA
              variant="gated-asset"
              reportName="GCC Pharma & MedTech Market Databook 2026"
              pdfPath="/downloads/gcc-pharma-medtech-databook-2026-sample.pdf"
              ctaId={`companies_${guideSlugId}_scroll70`}
              ctaLocation="scroll_70_percent"
              className="border-0 p-0 text-left md:flex md:items-center md:justify-between md:gap-4"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
