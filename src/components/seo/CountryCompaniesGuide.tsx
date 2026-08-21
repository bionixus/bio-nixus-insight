import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Share2, BookOpen, Building2, Globe, ShieldCheck, Pill, TrendingUp, BarChart3, Truck, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { ConversionCTA } from '@/components/conversion/ConversionCTA';
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
import { PHARMA_GUIDE_ARTICLE_CONTAINER, PHARMA_GUIDE_INNER, PHARMA_GUIDE_SECTION_X } from '@/components/report-conversion/constants';

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
  const industryLabel = config.industry === 'pharmaceutical' ? 'pharma' : 'medtech';
  return {
    marketName: config.countryName,
    reportLabel: `${config.countryName} ${config.industry} companies`,
    canonicalPath: config.path,
    shareSlug: config.path.replace(/^\//, ''),
    emailSubject: config.conversion.emailSubject,
    routingHint: config.conversion.routingHint,
    primaryCtaLabel: `Schedule a ${config.countryName} research briefing`,
    consultationHeadline: `Ready for a ${config.countryName} ${industryLabel} market intelligence engagement?`,
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
  const industryTitle = config.industry === 'pharmaceutical' ? 'Pharmaceutical' : 'Medical Device';
  const headline = `${industryTitle} Companies in ${config.countryName}: Complete Industry Guide 2026`;
  const guideSlugId = config.path.replace(/^\//, '').replace(/[^a-z0-9-]/g, '');

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{config.title}</title>
        <meta name="description" content={config.metaDescription} />
        <link rel="canonical" href={citationUrl} />
        <script type="application/ld+json">{JSON.stringify(buildPharmaCompaniesItemListLd(citationUrl, config.companies.map((c) => c.name)))}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', image: 'https://www.bionixus.com/og-image.png', headline, description: config.metaDescription, url: citationUrl, datePublished: config.publishedDate, dateModified: config.modifiedDate, author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' }, publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' } })}</script>
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
        <div className={`${PHARMA_GUIDE_SECTION_X} pt-24 pb-4`}><div className={PHARMA_GUIDE_INNER}><nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-6"><Link to="/" className="hover:text-primary transition-colors">Home</Link><span>/</span><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link><span>/</span><span className="text-foreground">{industryTitle} Companies in {config.countryName}</span></nav></div></div>

        <section className={`${PHARMA_GUIDE_SECTION_X} pt-0 pb-12`}><div className={PHARMA_GUIDE_INNER}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"><Building2 className="w-4 h-4" />Industry Guide 2026</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-5xl">{config.h1}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mb-4">{config.introLead} — see BioNixus&apos;s <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">healthcare market research</Link> hub for global context. {config.introRest}</p>
          <p className="text-sm text-muted-foreground">Last updated: August 2026 &middot; Sources: {config.sources.slice(0, 3).join(', ')}, BioNixus research</p>
          <div className="mt-8 p-5 bg-muted/50 border border-border rounded-xl"><div className="flex items-start gap-3"><Share2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground text-sm mb-1">Cite this guide</p><p className="text-sm text-muted-foreground leading-relaxed">BioNixus. &quot;{headline}.&quot; BioNixus Healthcare Market Research, Aug. 2026, <a href={citationUrl} className="text-primary hover:underline break-all">{citationUrl}</a>.<br />Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CC BY 4.0</a> — free to share and adapt with attribution.</p></div></div></div>
          <ReportEarlyCtaBar config={conversion} className="mt-8" /></div></section>

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
        <section className="py-12 bg-primary text-primary-foreground"><div className="container-wide w-full"><div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {config.stats.map((s) => (<div key={s.label}><p className="text-3xl md:text-4xl font-display font-bold">{s.value}</p><p className="text-primary-foreground/70 text-sm mt-1">{s.label}</p></div>))}
        </div></div></section>

        <section className="section-padding py-8 bg-muted/30"><div className="container-wide w-full">
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
          <div className="grid md:grid-cols-2 gap-2">
            <a href="#market-overview" className="text-sm text-primary hover:underline flex items-center gap-2"><BarChart3 className="w-4 h-4" /> {config.countryName} Market Overview</a>
            <a href="#top-companies" className="text-sm text-primary hover:underline flex items-center gap-2"><Building2 className="w-4 h-4" /> Top {industryTitle} Companies</a>
            <a href="#companies-by-category" className="text-sm text-primary hover:underline flex items-center gap-2"><Users className="w-4 h-4" /> Companies by Category</a>
            <a href="#regulatory-landscape" className="text-sm text-primary hover:underline flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> {config.regulator.short} Regulatory Landscape</a>
            <a href="#growth-drivers" className="text-sm text-primary hover:underline flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Growth Drivers</a>
            <a href="#bionixus-support" className="text-sm text-primary hover:underline flex items-center gap-2"><Globe className="w-4 h-4" /> How BioNixus Supports Teams in {config.countryName}</a>
            <a href="#related-directories" className="text-sm text-primary hover:underline flex items-center gap-2"><Truck className="w-4 h-4" /> Related Country Directories</a>
            <a href="#faq" className="text-sm text-primary hover:underline flex items-center gap-2"><BookOpen className="w-4 h-4" /> Frequently Asked Questions</a>
          </div>
        </div></section>

        <section className="section-padding py-16" id="market-overview"><div className="container-wide w-full">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">{config.countryName} {industryTitle} Market Overview</h2>
          <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
            {config.marketOverviewParagraphs.map((p, i) => (<p key={i}>{p}</p>))}
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="top-companies"><div className="container-wide w-full">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Top {industryTitle} Companies in {countryDisplay}</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">The following table lists the major {config.industry} companies operating in {countryDisplay} — including local manufacturers, multinational offices, regional players, and leading distributors.</p>
          <div className="overflow-x-auto rounded-xl border border-border"><table className="w-full text-sm"><thead><tr className="bg-primary/5 border-b border-border"><th className="text-left px-4 py-3 font-semibold text-foreground">Company</th><th className="text-left px-4 py-3 font-semibold text-foreground">HQ</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Type</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden lg:table-cell">Focus Areas</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden xl:table-cell">Notes</th></tr></thead><tbody>
            {config.companies.map((c, i) => (<tr key={c.name} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}><td className="px-4 py-3 font-medium text-foreground">{c.name}</td><td className="px-4 py-3 text-muted-foreground">{c.hq}</td><td className="px-4 py-3 hidden md:table-cell"><span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${c.type === 'Local Manufacturer' ? 'bg-green-50 text-green-700' : c.type === 'MNC Office' ? 'bg-blue-50 text-blue-700' : c.type === 'Regional' ? 'bg-amber-50 text-amber-700' : 'bg-purple-50 text-purple-700'}`}>{c.type}</span></td><td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">{c.therapeuticAreas}</td><td className="px-4 py-3 text-muted-foreground text-xs hidden xl:table-cell">{c.notes}</td></tr>))}
          </tbody></table></div>
          <div className="mt-8">
            <ConversionCTA
              variant="talk-to-research"
              market={config.countryName}
              ctaId={`companies_${guideSlugId}_after_table`}
              ctaLocation="after_first_table"
            />
          </div>
        </div></section>

        <ReportMidPageCta config={conversion} />

        <section className="section-padding py-16" id="companies-by-category"><div className="container-wide w-full">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">List of {industryTitle} Companies in {countryDisplay} by Category</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">{config.countryName} {config.industry} companies span local manufacturers, multinational corporation offices, regional suppliers, and key distributors.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center"><Pill className="w-5 h-5 text-green-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Local Manufacturers</h3></div><p className="text-sm text-muted-foreground mb-4">{config.categoryBlurbs.local}</p><ul className="space-y-1.5 text-sm text-foreground">{config.companies.filter(c => c.type === 'Local Manufacturer').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-green-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center"><Globe className="w-5 h-5 text-blue-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Multinational Offices</h3></div><p className="text-sm text-muted-foreground mb-4">{config.categoryBlurbs.mnc}</p><ul className="space-y-1.5 text-sm text-foreground">{config.companies.filter(c => c.type === 'MNC Office').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-blue-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center"><Building2 className="w-5 h-5 text-amber-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Regional Players</h3></div><p className="text-sm text-muted-foreground mb-4">{config.categoryBlurbs.regional}</p><ul className="space-y-1.5 text-sm text-foreground">{config.companies.filter(c => c.type === 'Regional').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center"><Truck className="w-5 h-5 text-purple-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Distributors</h3></div><p className="text-sm text-muted-foreground mb-4">{config.categoryBlurbs.distributor}</p><ul className="space-y-1.5 text-sm text-foreground">{config.companies.filter(c => c.type === 'Distributor').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-purple-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
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
          <div className="grid md:grid-cols-3 gap-6">{config.growthDrivers.map((d) => (<div key={d.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{d.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p></div>))}</div>
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
            {config.relatedLinks.map((l) => (<Link key={l.to} to={l.to} className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">{l.label} <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>))}
          </div>
        </div></section>

        <PharmaCompaniesFaqSection items={config.faq} />

        <section className="section-padding py-12" id="methodology"><div className="container-wide w-full"><div className="bg-card border border-border rounded-xl p-8"><h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" />Data Sources &amp; Methodology</h2><p className="text-sm text-muted-foreground leading-relaxed mb-4">This guide aggregates publicly available information from:</p><ul className="text-sm text-muted-foreground space-y-2 mb-6">{config.sources.map((s) => (<li key={s}>{s}</li>))}</ul><p className="text-sm text-muted-foreground leading-relaxed">Company lists are editorial snapshots, not endorsements; market sizes are BioNixus estimate ranges synthesised from regulator and industry sources. For customised market intelligence on {countryDisplay}, <Link to="/contact" className="text-primary hover:underline">contact our team</Link>.</p></div></div></section>
        </ReportContentWithAside>

        <ReportConsultationBand config={conversion} />
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
