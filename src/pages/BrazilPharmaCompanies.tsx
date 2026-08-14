import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Share2, BookOpen, Building2, Globe, ShieldCheck, Pill, TrendingUp, BarChart3, Truck, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { ConversionCTA } from '@/components/conversion/ConversionCTA';
import { useScrollThreshold } from '@/hooks/useScrollThreshold';
import { getPharmaGuideConfig } from '@/data/reportConversionConfig';
import { PharmaCompaniesGlobalHubLinks } from '@/components/seo/PharmaCompaniesGlobalHubLinks';
import { PharmaCompaniesQuickAnswer } from '@/components/seo/PharmaCompaniesQuickAnswer';
import { PharmaCompaniesFaqSection } from '@/components/seo/PharmaCompaniesFaqSection';
import { buildPharmaCompaniesFaqLd, buildPharmaCompaniesItemListLd } from '@/components/seo/pharmaCompaniesSeo';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportEarlyCtaBar,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';

const PHARMA_CONVERSION = getPharmaGuideConfig('brazil');

interface PharmaCompany {
  name: string;
  hq: string;
  type: 'Local Manufacturer' | 'MNC Office' | 'Distributor' | 'Regional';
  therapeuticAreas: string;
  notes: string;
}

const pharmaCompanies: PharmaCompany[] = [
  { name: 'EMS', hq: 'Brazil', type: 'Local Manufacturer', therapeuticAreas: 'Generics, branded generics, OTC', notes: 'Among Brazil\'s largest local pharma groups' },
  { name: 'Hypera Pharma', hq: 'Brazil', type: 'Local Manufacturer', therapeuticAreas: 'Consumer health, branded generics, Rx', notes: 'Major Brazilian listed pharma' },
  { name: 'Eurofarma', hq: 'Brazil', type: 'Local Manufacturer', therapeuticAreas: 'Branded generics, specialty, LATAM expansion', notes: 'Strong regional expansion across LATAM' },
  { name: 'Aché Laboratórios', hq: 'Brazil', type: 'Local Manufacturer', therapeuticAreas: 'Branded Rx, consumer health', notes: 'Established Brazilian manufacturer' },
  { name: 'Biolab Sanus', hq: 'Brazil', type: 'Local Manufacturer', therapeuticAreas: 'Cardiology, CNS, specialty', notes: 'Specialty-focused Brazilian pharma' },
  { name: 'Cristália', hq: 'Brazil', type: 'Local Manufacturer', therapeuticAreas: 'Hospital injectables, anaesthetics, oncology', notes: 'Hospital and injectable specialist' },
  { name: 'União Química', hq: 'Brazil', type: 'Local Manufacturer', therapeuticAreas: 'Hospital, generics, biologics ambitions', notes: 'Hospital and institutional focus' },
  { name: 'Blau Farmacêutica', hq: 'Brazil', type: 'Local Manufacturer', therapeuticAreas: 'Hospital injectables, oncology, biologics', notes: 'Listed hospital/specialty manufacturer' },
  { name: 'Pfizer', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, vaccines, inflammation, rare diseases', notes: 'Major ANVISA-registered portfolio' },
  { name: 'Novartis', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, immunology, ophthalmology, cardiovascular', notes: 'Strong specialty presence' },
  { name: 'Roche', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, haematology, neuroscience, diagnostics', notes: 'Oncology and diagnostics leadership' },
  { name: 'Sanofi', hq: 'France', type: 'MNC Office', therapeuticAreas: 'Vaccines, diabetes, consumer health, rare diseases', notes: 'Vaccine and consumer strength in Brazil' },
  { name: 'AstraZeneca', hq: 'UK / Sweden', type: 'MNC Office', therapeuticAreas: 'Oncology, respiratory, CVRM, rare diseases', notes: 'Growing oncology footprint' },
  { name: 'GSK (GlaxoSmithKline)', hq: 'UK', type: 'MNC Office', therapeuticAreas: 'Vaccines, respiratory, HIV, consumer', notes: 'Vaccine franchise in Brazil' },
  { name: 'MSD (Merck & Co.)', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, vaccines, infectious disease', notes: 'Keytruda and vaccines' },
  { name: 'AbbVie', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Immunology, oncology, neuroscience, aesthetics', notes: 'Immunology franchise' },
  { name: 'Eli Lilly', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Diabetes, obesity, oncology, neuroscience', notes: 'Metabolic growth' },
  { name: 'Novo Nordisk', hq: 'Denmark', type: 'MNC Office', therapeuticAreas: 'Diabetes, obesity, rare diseases', notes: 'Insulin and GLP-1 franchise' },
  { name: 'Bayer', hq: 'Germany', type: 'MNC Office', therapeuticAreas: 'Cardiology, women\'s health, consumer, oncology', notes: 'Long-standing Brazil presence' },
  { name: 'Takeda', hq: 'Japan', type: 'MNC Office', therapeuticAreas: 'GI, rare diseases, oncology, plasma', notes: 'Specialty and rare disease focus' },
  { name: 'Raia Drogasil', hq: 'Brazil', type: 'Distributor', therapeuticAreas: 'Retail pharmacy, OTC, consumer health', notes: 'Largest Brazilian pharmacy retail chain' },
  { name: 'Grupo DPSP (Pacheco / São Paulo)', hq: 'Brazil', type: 'Distributor', therapeuticAreas: 'Retail pharmacy, OTC', notes: 'Major pharmacy retail group' },
];

const faqItems = [
  { q: 'How many major pharmaceutical companies operate in Brazil?', a: 'Brazil has a deep local manufacturing base (EMS, Hypera, Eurofarma, Aché, Biolab, Cristália, União Química, Blau) plus multinational affiliates from the US, Europe, and Japan. This guide covers 20+ notable manufacturers and leading pharmacy retail groups.' },
  { q: 'What is the size of the Brazilian pharmaceutical market?', a: 'Brazil is Latin America\'s largest pharmaceutical market. Public industry framing commonly places national medicines spend in the low-to-mid tens of billions of US dollars, with generics, retail pharmacy, and specialty growth as key themes.' },
  { q: 'Who regulates pharmaceuticals in Brazil?', a: 'ANVISA oversees product registration, manufacturing quality, and pharmacovigilance. CONITEC advises on incorporation into the SUS public system, while private insurers and retail pharmacy drive a large share of commercial volume.' },
  { q: 'How does SUS affect pharmaceutical companies in Brazil?', a: 'The Unified Health System (SUS) is a major public purchaser. CONITEC recommendations and federal/state procurement shape access for many therapies, alongside a large private retail and insurance market.' },
  { q: 'Do foreign companies need a local presence to sell in Brazil?', a: 'Foreign manufacturers typically need ANVISA registration, a local responsible company for regulatory and pharmacovigilance duties, and distribution partnerships covering retail pharmacy and institutional channels.' },
  { q: 'Which local companies lead Brazilian pharma?', a: 'EMS, Hypera Pharma, Eurofarma, Aché, Biolab, Cristália, União Química, and Blau Farmacêutica are among the most frequently cited Brazilian manufacturers across generics, branded Rx, hospital injectables, and consumer health.' },
];

const BrazilPharmaCompanies = () => {
  const past70Percent = useScrollThreshold(70);
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const citationUrl = 'https://www.bionixus.com/pharmaceutical-companies-brazil';
  const ogTitle = 'Top Pharmaceutical Companies in Brazil (2026 Ranked List)';
  const ogDescription = 'Complete 2026 list of pharmaceutical companies in Brazil — local giants, MNCs, retail pharmacy, ANVISA/CONITEC context. Research by BioNixus.';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Top Pharmaceutical Companies in Brazil (2026 Ranked List)</title>
        <meta name="description" content="Complete 2026 list of pharmaceutical companies in Brazil — local giants, MNCs, retail pharmacy, ANVISA/CONITEC context. Research by BioNixus." />
        <link rel="canonical" href={citationUrl} />
        <script type="application/ld+json">{JSON.stringify(buildPharmaCompaniesItemListLd(citationUrl, pharmaCompanies.map((c) => c.name)))}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', image: 'https://www.bionixus.com/og-image.png', headline: 'Pharmaceutical Companies in Brazil: Complete Industry Guide 2026', description: 'Guide to pharmaceutical companies in Brazil — local manufacturers, multinational affiliates, pharmacy retail, ANVISA/CONITEC landscape, and market structure for 2026.', url: citationUrl, datePublished: '2026-08-14', dateModified: '2026-08-14', author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' }, publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' } })}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' }, { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.bionixus.com/resources' }, { '@type': 'ListItem', position: 3, name: 'Pharmaceutical Companies in Brazil', item: citationUrl }] })}</script>
        <script type="application/ld+json">{JSON.stringify(buildPharmaCompaniesFaqLd(citationUrl, faqItems))}</script>
      </Helmet>
      <OpenGraphMeta title={ogTitle} description={ogDescription} image="https://www.bionixus.com/og-image.png" url={citationUrl} type="article" locale={language === 'ar' ? 'ar_SA' : 'en_US'} alternateLocales={language === 'ar' ? ['en_US'] : ['ar_SA']} />
      <Navbar />
      <ReportReadingProgress progressId="pharma-guide-rp-brazil" />
      <main>
        <div className="section-padding pt-24 pb-4"><div className="container-wide"><div className="flex items-center gap-2 text-sm text-muted-foreground mb-6"><Link to={basePath} className="hover:text-primary transition-colors">Home</Link><span>/</span><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link><span>/</span><span className="text-foreground">Pharmaceutical Companies in Brazil</span></div></div></div>

        <section className="section-padding pt-0 pb-12"><div className="container-wide max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"><Building2 className="w-4 h-4" />Industry Guide 2026</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">Pharmaceutical Companies in Brazil</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">Brazil is Latin America&apos;s largest pharmaceutical market, with powerful local manufacturers such as EMS, Hypera, and Eurofarma alongside multinational affiliates. Pharmaceutical companies in Brazil navigate ANVISA registration and CONITEC/SUS access — start from <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">healthcare market research</Link> for programme scoping. This guide covers major manufacturers, retail pharmacy groups, regulatory context, and strategic opportunities.</p>
          <p className="text-sm text-muted-foreground">Last updated: August 2026 &middot; Sources: ANVISA, CONITEC, company filings, BioNixus research</p>
          <div className="mt-8 p-5 bg-muted/50 border border-border rounded-xl"><div className="flex items-start gap-3"><Share2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground text-sm mb-1">Cite this guide</p><p className="text-sm text-muted-foreground leading-relaxed">BioNixus. &quot;Pharmaceutical Companies in Brazil: Complete Industry Guide 2026.&quot; BioNixus Healthcare Market Research, Aug. 2026, <a href={citationUrl} className="text-primary hover:underline break-all">{citationUrl}</a>.<br />Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CC BY 4.0</a> — free to share and adapt with attribution.</p></div></div></div>
          <ReportEarlyCtaBar config={PHARMA_CONVERSION} className="mt-8" /></div></section>

        <section className="section-padding py-12 bg-primary text-primary-foreground"><div className="container-wide max-w-5xl mx-auto"><div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><p className="text-3xl md:text-4xl font-display font-bold">#1 LATAM</p><p className="text-primary-foreground/70 text-sm mt-1">Largest LATAM pharma market</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">SUS</p><p className="text-primary-foreground/70 text-sm mt-1">Public health system</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">ANVISA</p><p className="text-primary-foreground/70 text-sm mt-1">Medicines regulator</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">CONITEC</p><p className="text-primary-foreground/70 text-sm mt-1">SUS incorporation advice</p></div>
        </div></div></section>

        <PharmaCompaniesQuickAnswer
          country="brazil"
          marketSize="Latin America's largest pharmaceutical market (low-to-mid tens of billions USD in public framing)"
          growthRate="generics, retail, and specialty-led expansion"
          regulatorLabel="ANVISA and CONITEC"
          topCompanyNames={pharmaCompanies.map((c) => c.name)}
        />

        <ReportContentWithAside config={PHARMA_CONVERSION}>
        <section className="section-padding py-8 bg-muted/30"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
          <div className="grid md:grid-cols-2 gap-2">
            <a href="#market-overview" className="text-sm text-primary hover:underline flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Brazil Pharmaceutical Market Overview</a>
            <a href="#top-companies" className="text-sm text-primary hover:underline flex items-center gap-2"><Building2 className="w-4 h-4" /> Top Pharmaceutical Companies</a>
            <a href="#companies-by-category" className="text-sm text-primary hover:underline flex items-center gap-2"><Users className="w-4 h-4" /> Companies by Category</a>
            <a href="#regulatory-landscape" className="text-sm text-primary hover:underline flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Regulatory Landscape (ANVISA / CONITEC)</a>
            <a href="#distribution-channels" className="text-sm text-primary hover:underline flex items-center gap-2"><Truck className="w-4 h-4" /> Distribution Channels</a>
            <a href="#growth-drivers" className="text-sm text-primary hover:underline flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Growth Drivers</a>
            <a href="#bionixus-support" className="text-sm text-primary hover:underline flex items-center gap-2"><Globe className="w-4 h-4" /> How BioNixus Supports Pharma in Brazil</a>
            <a href="#faq" className="text-sm text-primary hover:underline flex items-center gap-2"><BookOpen className="w-4 h-4" /> Frequently Asked Questions</a>
          </div>
        </div></section>

        <section className="section-padding py-16" id="market-overview"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Brazil Pharmaceutical Market Overview</h2>
          <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
            <p>Brazil is <strong className="text-foreground">Latin America&apos;s largest pharmaceutical market</strong>, characterised by a powerful local manufacturing base, dense retail pharmacy networks, and parallel <strong className="text-foreground">SUS</strong> public purchasing.</p>
            <p>Regulation is led by <strong className="text-foreground">ANVISA</strong>, while <strong className="text-foreground">CONITEC</strong> advises on incorporation into SUS. Private retail and insurance channels remain critical for branded and specialty launches.</p>
            <p>For comparative country programmes, see our <Link to="/healthcare-market-research" className="text-primary hover:underline">healthcare market research hub</Link> and peer directories for the USA, UK, Germany, and Canada.</p>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="top-companies"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Top Pharmaceutical Companies in Brazil</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">The following table lists major pharmaceutical companies operating in Brazil — including local manufacturers, multinational affiliates, and leading pharmacy retail groups.</p>
          <div className="overflow-x-auto rounded-xl border border-border"><table className="w-full text-sm"><thead><tr className="bg-primary/5 border-b border-border"><th className="text-left px-4 py-3 font-semibold text-foreground">Company</th><th className="text-left px-4 py-3 font-semibold text-foreground">HQ</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Type</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden lg:table-cell">Therapeutic Areas</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden xl:table-cell">Notes</th></tr></thead><tbody>
            {pharmaCompanies.map((c, i) => (<tr key={c.name} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}><td className="px-4 py-3 font-medium text-foreground">{c.name}</td><td className="px-4 py-3 text-muted-foreground">{c.hq}</td><td className="px-4 py-3 hidden md:table-cell"><span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${c.type === 'Local Manufacturer' ? 'bg-green-50 text-green-700' : c.type === 'MNC Office' ? 'bg-blue-50 text-blue-700' : c.type === 'Regional' ? 'bg-amber-50 text-amber-700' : 'bg-purple-50 text-purple-700'}`}>{c.type}</span></td><td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">{c.therapeuticAreas}</td><td className="px-4 py-3 text-muted-foreground text-xs hidden xl:table-cell">{c.notes}</td></tr>))}
          </tbody></table></div>
          <div className="mt-8"><ConversionCTA variant="talk-to-research" market="Brazil" ctaId="pharma_companies_brazil_after_table" ctaLocation="after_first_table" /></div>
        </div></section>

        <ReportMidPageCta config={PHARMA_CONVERSION} />

        <section className="section-padding py-16" id="companies-by-category"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">List of Pharmaceutical Companies in Brazil by Category</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Brazilian pharmaceutical companies span local manufacturing champions, multinational affiliates, and national pharmacy retail groups.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center"><Pill className="w-5 h-5 text-green-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Local Manufacturers</h3></div><p className="text-sm text-muted-foreground mb-4">EMS, Hypera, Eurofarma, Aché, Biolab, Cristália, União Química, and Blau lead much of the domestic industry.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Local Manufacturer').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-green-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center"><Globe className="w-5 h-5 text-blue-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Multinational Pharma Affiliates</h3></div><p className="text-sm text-muted-foreground mb-4">Global MNCs maintain large Brazilian commercial organisations for specialty, vaccines, and branded categories.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'MNC Office').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-blue-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6 md:col-span-2"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center"><Truck className="w-5 h-5 text-purple-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Pharmacy Retail</h3></div><p className="text-sm text-muted-foreground mb-4">Raia Drogasil and Grupo DPSP are among the most visible national pharmacy retail groups.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Distributor').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-purple-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="regulatory-landscape"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Pharma Companies in Brazil: Regulatory Landscape (ANVISA / CONITEC)</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">ANVISA registration and CONITEC/SUS incorporation pathways define Brazilian market access for many therapies.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" />Regulatory Authorities</h3><p className="text-sm text-muted-foreground leading-relaxed mb-4"><strong className="text-foreground">ANVISA</strong> oversees registration and quality; <strong className="text-foreground">CONITEC</strong> advises on SUS incorporation. Private insurers and retail pharmacy remain parallel commercial channels.</p><div className="space-y-3"><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Access Pathway</p><p className="text-lg font-semibold text-foreground">ANVISA registration + CONITEC/SUS where relevant</p></div><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pricing / Access Model</p><p className="text-sm text-foreground">CMED pricing oversight + SUS/private mix</p></div></div></div>
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Pill className="w-5 h-5 text-primary" />Key Registration Requirements</h3><ul className="space-y-3 text-sm text-foreground"><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>ANVISA dossier and manufacturing inspections</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>GMP compliance</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Portuguese labelling and local pharmacovigilance</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>CMED pricing procedures for many Rx products</span></li><li className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0"><Building2 className="w-4 h-4" /></span><span className="font-medium">Local responsible company typically required</span></li></ul></div>
          </div>
        </div></section>

        <section className="section-padding py-16" id="distribution-channels"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Drug Distribution Channels in Brazil</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Retail pharmacy chains and SUS institutional purchasing are the twin pillars of Brazilian distribution.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-primary" />Retail Pharmacy / Private</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p>National pharmacy chains dominate outpatient dispensing for many categories.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Raia Drogasil and peer chains</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Independent pharmacies</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Private insurance / specialty channels</li></ul></div></div>
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-primary" />SUS / Institutional</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p>Federal and state SUS purchasing remains critical for many therapies and hospital products.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> CONITEC-informed incorporation</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Federal and state tenders</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Hospital injectables and oncology</li></ul></div></div>
          </div>
        </div></section>

        <section className="section-padding py-16" id="growth-drivers"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Brazil Pharmaceutical Market Growth Drivers</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Local manufacturing scale, retail consolidation, and specialty demand shape Brazilian pharma growth.</p>
          <div className="grid md:grid-cols-3 gap-6">{[
            { title: 'Local Manufacturing Scale', desc: 'Domestic champions continue to expand branded generics and specialty portfolios.' },
            { title: 'Retail Pharmacy Consolidation', desc: 'Large chains concentrate outpatient access and private-label opportunity.' },
            { title: 'Specialty & Oncology', desc: 'Specialty medicines are growing within both private and SUS pathways.' },
            { title: 'Vaccines & Public Health', desc: 'National immunisation programmes sustain vaccine demand.' },
            { title: 'LATAM Hub Role', desc: 'Brazil often anchors regional manufacturing and commercial strategies.' },
            { title: 'Metabolic Demand', desc: 'Diabetes and obesity therapies are reshaping volume and payer attention.' },
          ].map((d) => (<div key={d.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{d.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-16" id="bionixus-support"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">How BioNixus Supports Pharma Companies in Brazil</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            BioNixus supports pharma and biotech programmes in Brazil and globally. For company-level programmes, see our{' '}
            <Link to="/brazil-pharmaceutical-market-research" className="text-primary hover:underline font-medium">market research company for Brazil pharma</Link>. We help with:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">{[
            { title: 'Physician Surveys & KOL Mapping', desc: 'Research with Brazilian physicians across private and SUS settings.' },
            { title: 'Market Access & CONITEC Strategy', desc: 'Stakeholder research aligned to ANVISA, CONITEC, and payer realities.' },
            { title: 'Competitive Intelligence', desc: 'Launch tracking and channel monitoring across priority Brazilian categories.' },
            { title: 'Market Entry & Expansion', desc: 'Indication prioritisation and go-to-market planning for Brazil launches.' },
          ].map((s) => (<div key={s.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{s.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p></div>))}</div>
          <p className="text-muted-foreground leading-relaxed mt-8 max-w-4xl">
            Explore our <Link to="/healthcare-market-research" className="text-primary hover:underline">healthcare market research services</Link> or contact our{' '}
            <Link to="/healthcare-market-research/brazil" className="text-primary hover:underline">Brazil pharmaceutical market research team</Link>.
          </p>
        </div></section>

        <section className="section-padding py-16" id="peer-directories"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Pharmaceutical companies in other major markets</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">Compare the Brazilian pharmaceutical industry with BioNixus company directories for peer markets.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link to="/pharmaceutical-companies-usa" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Pharmaceutical companies in USA <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/pharmaceutical-companies-uk" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Pharmaceutical companies in UK <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/pharmaceutical-companies-germany" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Pharmaceutical companies in Germany <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/pharmaceutical-companies-canada" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Pharmaceutical companies in Canada <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/healthcare-market-research-companies" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Healthcare market research companies <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/insights/top-healthcare-market-research-companies-brazil-2026" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Brazil healthcare MR companies 2026 <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
          </div>
        </div></section>

        <PharmaCompaniesFaqSection items={faqItems} />
        <PharmaCompaniesGlobalHubLinks country="brazil" />
        <section className="section-padding py-12" id="methodology"><div className="container-wide max-w-5xl mx-auto"><div className="bg-card border border-border rounded-xl p-8"><h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" />Data Sources &amp; Methodology</h2><p className="text-sm text-muted-foreground leading-relaxed mb-4">This guide aggregates publicly available information from:</p><ul className="text-sm text-muted-foreground space-y-2 mb-6"><li>ANVISA and CONITEC public materials</li><li>Company filings and investor disclosures</li><li>Pharmacy retail and channel disclosures</li><li>BioNixus primary research with Brazilian healthcare stakeholders (2024–2026)</li></ul><p className="text-sm text-muted-foreground leading-relaxed">For customised market intelligence on Brazil, <Link to="/contact" className="text-primary hover:underline">contact our team</Link>.</p></div></div></section>
        </ReportContentWithAside>
        <ReportConsultationBand config={PHARMA_CONVERSION} />
        </main>
      <Footer />
      {past70Percent ? (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border shadow-lg p-4">
          <div className="container-wide max-w-3xl mx-auto">
            <ConversionCTA variant="talk-to-research" market="Brazil" ctaId="pharma_companies_brazil_scroll70" ctaLocation="scroll_70_percent" className="border-0 p-0 text-left md:flex md:items-center md:justify-between md:gap-4" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default BrazilPharmaCompanies;
