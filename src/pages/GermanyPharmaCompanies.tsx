import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Share2, BookOpen, Building2, Globe, ShieldCheck, Pill, TrendingUp, BarChart3, Truck, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { ConversionCTA } from '@/components/conversion/ConversionCTA';
import { PharmaDirectoryBridge } from '@/components/seo/PharmaDirectoryBridge';
import { useScrollThreshold } from '@/hooks/useScrollThreshold';
import { getPharmaGuideConfig } from '@/data/reportConversionConfig';
import { PharmaCompaniesGlobalHubLinks } from '@/components/seo/PharmaCompaniesGlobalHubLinks';
import { PharmaCompaniesQuickAnswer } from '@/components/seo/PharmaCompaniesQuickAnswer';
import { PharmaCompaniesFaqSection } from '@/components/seo/PharmaCompaniesFaqSection';
import { CountryDirectoryLinks } from '@/components/seo/CountryDirectoryLinks';
import { buildPharmaCompaniesFaqLd, buildPharmaCompaniesItemListLd } from '@/components/seo/pharmaCompaniesSeo';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportEarlyCtaBar,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';

const PHARMA_CONVERSION = getPharmaGuideConfig('germany');

interface PharmaCompany {
  name: string;
  hq: string;
  type: 'Local Manufacturer' | 'MNC Office' | 'Distributor' | 'Regional';
  therapeuticAreas: string;
  notes: string;
}

const pharmaCompanies: PharmaCompany[] = [
  { name: 'Bayer', hq: 'Germany', type: 'Local Manufacturer', therapeuticAreas: 'Cardiology, oncology, women\'s health, consumer', notes: 'Leverkusen/Berlin; global pharma + consumer' },
  { name: 'Boehringer Ingelheim', hq: 'Germany', type: 'Local Manufacturer', therapeuticAreas: 'Respiratory, cardiovascular, metabolism, oncology', notes: 'Family-owned; strong respiratory franchise' },
  { name: 'Merck KGaA', hq: 'Germany', type: 'Local Manufacturer', therapeuticAreas: 'Oncology, neurology, fertility, electronics', notes: 'Darmstadt; healthcare + life science' },
  { name: 'BioNTech', hq: 'Germany', type: 'Local Manufacturer', therapeuticAreas: 'mRNA vaccines, oncology', notes: 'Mainz; mRNA platform leader' },
  { name: 'Fresenius Kabi', hq: 'Germany', type: 'Local Manufacturer', therapeuticAreas: 'Injectables, biosimilars, clinical nutrition', notes: 'Hospital injectables and biosimilars' },
  { name: 'STADA Arzneimittel', hq: 'Germany', type: 'Local Manufacturer', therapeuticAreas: 'Generics, consumer health, specialty', notes: 'Bad Vilbel; generics and consumer' },
  { name: 'Hexal (Sandoz)', hq: 'Germany / Switzerland', type: 'Regional', therapeuticAreas: 'Generics, biosimilars', notes: 'Major German generics brand (Sandoz)' },
  { name: 'Pfizer', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, vaccines, inflammation, rare diseases', notes: 'Major German commercial presence' },
  { name: 'Novartis', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, immunology, ophthalmology, cardiovascular', notes: 'Strong SHI specialty presence' },
  { name: 'Roche', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, haematology, neuroscience, diagnostics', notes: 'Oncology and diagnostics leadership' },
  { name: 'Sanofi', hq: 'France', type: 'MNC Office', therapeuticAreas: 'Immunology, vaccines, rare diseases, diabetes', notes: 'Specialty and vaccine franchise' },
  { name: 'AstraZeneca', hq: 'UK / Sweden', type: 'MNC Office', therapeuticAreas: 'Oncology, respiratory, CVRM, rare diseases', notes: 'Oncology and respiratory growth' },
  { name: 'MSD (Merck & Co.)', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, vaccines, infectious disease', notes: 'Keytruda and vaccines in Germany' },
  { name: 'AbbVie', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Immunology, oncology, neuroscience, aesthetics', notes: 'Immunology franchise' },
  { name: 'Eli Lilly', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Diabetes, obesity, oncology, neuroscience', notes: 'GLP-1 and specialty growth' },
  { name: 'Novo Nordisk', hq: 'Denmark', type: 'MNC Office', therapeuticAreas: 'Diabetes, obesity, rare diseases', notes: 'Insulin and GLP-1 franchise' },
  { name: 'Johnson & Johnson', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, immunology, neuroscience, medtech', notes: 'Janssen specialty portfolio' },
  { name: 'Takeda', hq: 'Japan', type: 'MNC Office', therapeuticAreas: 'GI, rare diseases, oncology, plasma', notes: 'Specialty and rare disease focus' },
  { name: 'Phoenix Pharma', hq: 'Germany', type: 'Distributor', therapeuticAreas: 'Wholesale distribution', notes: 'Leading European pharmaceutical wholesaler' },
  { name: 'Noweda', hq: 'Germany', type: 'Distributor', therapeuticAreas: 'Wholesale distribution, pharmacy cooperative', notes: 'Pharmacy cooperative wholesaler' },
  { name: 'Gehe (McKesson Europe)', hq: 'Germany / USA', type: 'Distributor', therapeuticAreas: 'Wholesale distribution', notes: 'Major German wholesale brand historically under McKesson Europe' },
];

const faqItems = [
  { q: 'How many major pharmaceutical companies operate in Germany?', a: 'Germany hosts several global and European manufacturers (Bayer, Boehringer Ingelheim, Merck KGaA, BioNTech, Fresenius Kabi, STADA) plus a full roster of multinational affiliates and powerful wholesalers. This guide covers 20+ notable companies and channels.' },
  { q: 'What is the size of the German pharmaceutical market?', a: 'Germany is widely regarded as Europe\'s largest pharmaceutical market by value. Public industry framing places national medicines spend in the tens of billions of euros, with SHI reimbursement and specialty growth as key value drivers.' },
  { q: 'Who regulates pharmaceuticals in Germany?', a: 'BfArM (and PEI for biologics/vaccines in relevant cases) oversees marketing authorisations. The G-BA and AMNOG early-benefit assessment process are central to pricing and reimbursement after launch.' },
  { q: 'What is AMNOG and why does it matter?', a: 'AMNOG is Germany\'s early benefit assessment framework. After launch, manufacturers negotiate reimbursement with the GKV-SV based on G-BA benefit ratings — making evidence strategy critical for commercial success.' },
  { q: 'Do foreign companies need a local presence to sell in Germany?', a: 'Foreign manufacturers typically need an EU/German marketing authorisation route, a local affiliate or partner for pharmacovigilance and distribution, and an AMNOG/G-BA access strategy for reimbursed medicines.' },
  { q: 'Which companies dominate German drug distribution?', a: 'Wholesalers such as Phoenix Pharma, Noweda, and other national distributors supply community pharmacies and hospitals; pharmacy cooperatives play a larger role than in many other markets.' },
];

const GermanyPharmaCompanies = () => {
  const past70Percent = useScrollThreshold(70);
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const citationUrl = 'https://www.bionixus.com/pharmaceutical-companies-germany';
  const ogTitle = 'Top Pharmaceutical Companies in Germany (2026 Ranked List)';
  const ogDescription = 'Complete 2026 list of pharmaceutical companies in Germany — Bayer, BioNTech, MNCs, wholesalers, BfArM/G-BA context. Research by BioNixus.';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Top Pharmaceutical Companies in Germany (2026 Ranked List)</title>
        <meta name="description" content="Complete 2026 list of pharmaceutical companies in Germany — Bayer, BioNTech, MNCs, wholesalers, BfArM/G-BA context. Research by BioNixus." />
        <link rel="canonical" href={citationUrl} />
        <script type="application/ld+json">{JSON.stringify(buildPharmaCompaniesItemListLd(citationUrl, pharmaCompanies.map((c) => c.name)))}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', image: 'https://www.bionixus.com/og-image.png', headline: 'Pharmaceutical Companies in Germany: Complete Industry Guide 2026', description: 'Guide to pharmaceutical companies in Germany — local manufacturers, multinational affiliates, wholesalers, BfArM/G-BA landscape, and SHI market structure for 2026.', url: citationUrl, datePublished: '2026-08-14', dateModified: '2026-08-14', author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' }, publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp', width: 512, height: 512 } } })}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' }, { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.bionixus.com/resources' }, { '@type': 'ListItem', position: 3, name: 'Pharmaceutical Companies in Germany', item: citationUrl }] })}</script>
        <script type="application/ld+json">{JSON.stringify(buildPharmaCompaniesFaqLd(citationUrl, faqItems))}</script>
      </Helmet>
      <OpenGraphMeta title={ogTitle} description={ogDescription} image="https://www.bionixus.com/og-image.png" url={citationUrl} type="article" locale={language === 'ar' ? 'ar_SA' : 'en_US'} alternateLocales={language === 'ar' ? ['en_US'] : ['ar_SA']} />
      <Navbar />
      <ReportReadingProgress progressId="pharma-guide-rp-germany" />
      <main>
        <div className="section-padding pt-24 pb-4"><div className="container-wide"><div className="flex items-center gap-2 text-sm text-muted-foreground mb-6"><Link to={basePath} className="hover:text-primary transition-colors">Home</Link><span>/</span><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link><span>/</span><span className="text-foreground">Pharmaceutical Companies in Germany</span></div></div></div>

        <section className="section-padding pt-0 pb-12"><div className="container-wide max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"><Building2 className="w-4 h-4" />Industry Guide 2026</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">Pharmaceutical Companies in Germany</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">Germany is Europe&apos;s largest pharmaceutical market and home to Bayer, Boehringer Ingelheim, Merck KGaA, BioNTech, and a dense network of multinational affiliates. Pharmaceutical companies in Germany navigate BfArM licensing and G-BA/AMNOG reimbursement — start from <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">healthcare market research</Link> for programme scoping. This guide covers major manufacturers, wholesalers, regulatory context, and strategic opportunities.</p>
          <p className="text-sm text-muted-foreground">Last updated: August 2026 &middot; Sources: BfArM, G-BA, company filings, BioNixus research</p>
          <div className="mt-8 p-5 bg-muted/50 border border-border rounded-xl"><div className="flex items-start gap-3"><Share2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground text-sm mb-1">Cite this guide</p><p className="text-sm text-muted-foreground leading-relaxed">BioNixus. &quot;Pharmaceutical Companies in Germany: Complete Industry Guide 2026.&quot; BioNixus Healthcare Market Research, Aug. 2026, <a href={citationUrl} className="text-primary hover:underline break-all">{citationUrl}</a>.<br />Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CC BY 4.0</a> — free to share and adapt with attribution.</p></div></div></div>
          <ReportEarlyCtaBar config={PHARMA_CONVERSION} className="mt-8" /></div></section>

        <section className="section-padding py-12 bg-primary text-primary-foreground"><div className="container-wide max-w-5xl mx-auto"><div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><p className="text-3xl md:text-4xl font-display font-bold">#1 EU</p><p className="text-primary-foreground/70 text-sm mt-1">Largest EU pharma market</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">SHI</p><p className="text-primary-foreground/70 text-sm mt-1">Statutory health insurance</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">BfArM</p><p className="text-primary-foreground/70 text-sm mt-1">Medicines regulator</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">G-BA</p><p className="text-primary-foreground/70 text-sm mt-1">Benefit / reimbursement gate</p></div>
        </div></div></section>

        <PharmaCompaniesQuickAnswer
          country="germany"
          marketSize="Europe's largest national pharmaceutical market (tens of billions of euros in public framing)"
          growthRate="specialty-led value growth within the SHI system"
          regulatorLabel="BfArM and G-BA"
          topCompanyNames={pharmaCompanies.map((c) => c.name)}
        />

        <ReportContentWithAside config={PHARMA_CONVERSION}>
        <section className="section-padding py-8 bg-muted/30"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
          <div className="grid md:grid-cols-2 gap-2">
            <a href="#market-overview" className="text-sm text-primary hover:underline flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Germany Pharmaceutical Market Overview</a>
            <a href="#top-companies" className="text-sm text-primary hover:underline flex items-center gap-2"><Building2 className="w-4 h-4" /> Top Pharmaceutical Companies</a>
            <a href="#companies-by-category" className="text-sm text-primary hover:underline flex items-center gap-2"><Users className="w-4 h-4" /> Companies by Category</a>
            <a href="#regulatory-landscape" className="text-sm text-primary hover:underline flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Regulatory Landscape (BfArM / G-BA)</a>
            <a href="#distribution-channels" className="text-sm text-primary hover:underline flex items-center gap-2"><Truck className="w-4 h-4" /> Distribution Channels</a>
            <a href="#growth-drivers" className="text-sm text-primary hover:underline flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Growth Drivers</a>
            <a href="#bionixus-support" className="text-sm text-primary hover:underline flex items-center gap-2"><Globe className="w-4 h-4" /> How BioNixus Supports Pharma in Germany</a>
            <a href="#faq" className="text-sm text-primary hover:underline flex items-center gap-2"><BookOpen className="w-4 h-4" /> Frequently Asked Questions</a>
          </div>
        </div></section>

        <section className="section-padding py-16" id="market-overview"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Germany Pharmaceutical Market Overview</h2>
          <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
            <p>Germany is <strong className="text-foreground">Europe&apos;s largest pharmaceutical market</strong>, underpinned by statutory health insurance (SHI) coverage and a strong local manufacturing base including <strong className="text-foreground">Bayer</strong>, <strong className="text-foreground">Boehringer Ingelheim</strong>, <strong className="text-foreground">Merck KGaA</strong>, and <strong className="text-foreground">BioNTech</strong>.</p>
            <p>Market access centres on <strong className="text-foreground">BfArM</strong> licensing and the <strong className="text-foreground">G-BA / AMNOG</strong> early-benefit assessment process that shapes reimbursement. Wholesalers and pharmacy cooperatives are critical for community pharmacy supply.</p>
            <p>For comparative country programmes, see our <Link to="/healthcare-market-research" className="text-primary hover:underline">healthcare market research hub</Link> and peer directories for the USA, UK, Brazil, and Canada.</p>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="top-companies"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Top Pharmaceutical Companies in Germany</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">The following table lists major pharmaceutical companies operating in Germany — including German manufacturers, multinational affiliates, generics brands, and leading wholesalers.</p>
          <div className="overflow-x-auto rounded-xl border border-border"><table className="w-full text-sm"><thead><tr className="bg-primary/5 border-b border-border"><th className="text-left px-4 py-3 font-semibold text-foreground">Company</th><th className="text-left px-4 py-3 font-semibold text-foreground">HQ</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Type</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden lg:table-cell">Therapeutic Areas</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden xl:table-cell">Notes</th></tr></thead><tbody>
            {pharmaCompanies.map((c, i) => (<tr key={c.name} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}><td className="px-4 py-3 font-medium text-foreground">{c.name}</td><td className="px-4 py-3 text-muted-foreground">{c.hq}</td><td className="px-4 py-3 hidden md:table-cell"><span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${c.type === 'Local Manufacturer' ? 'bg-green-50 text-green-700' : c.type === 'MNC Office' ? 'bg-blue-50 text-blue-700' : c.type === 'Regional' ? 'bg-amber-50 text-amber-700' : 'bg-purple-50 text-purple-700'}`}>{c.type}</span></td><td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">{c.therapeuticAreas}</td><td className="px-4 py-3 text-muted-foreground text-xs hidden xl:table-cell">{c.notes}</td></tr>))}
          </tbody></table></div>
          <PharmaDirectoryBridge
            countryName="Germany"
            directorySlug="germany"
            ctaId="pharma_companies_germany_after_table"
          />
        </div></section>

        <ReportMidPageCta config={PHARMA_CONVERSION} />

        <section className="section-padding py-16" id="companies-by-category"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">List of Pharmaceutical Companies in Germany by Category</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">German pharmaceutical companies span global manufacturers, biotech innovators, multinational affiliates, generics brands, and national wholesalers.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center"><Pill className="w-5 h-5 text-green-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">German Manufacturers</h3></div><p className="text-sm text-muted-foreground mb-4">Bayer, Boehringer Ingelheim, Merck KGaA, BioNTech, Fresenius Kabi, and STADA anchor the domestic industry.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Local Manufacturer').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-green-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center"><Globe className="w-5 h-5 text-blue-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Multinational Pharma Affiliates</h3></div><p className="text-sm text-muted-foreground mb-4">Global MNCs maintain large German commercial organisations for SHI and hospital channels.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'MNC Office').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-blue-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center"><Building2 className="w-5 h-5 text-amber-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Generics / Regional Brands</h3></div><p className="text-sm text-muted-foreground mb-4">Hexal (Sandoz) and other generics brands remain central to German primary-care volume.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Regional').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center"><Truck className="w-5 h-5 text-purple-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Wholesalers</h3></div><p className="text-sm text-muted-foreground mb-4">Phoenix Pharma, Noweda, and other wholesalers supply Germany&apos;s dense community pharmacy network.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Distributor').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-purple-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="regulatory-landscape"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Pharma Companies in Germany: Regulatory Landscape (BfArM / G-BA)</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">BfArM licensing and G-BA/AMNOG benefit assessment define German market access for reimbursed medicines.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" />Regulatory Authorities</h3><p className="text-sm text-muted-foreground leading-relaxed mb-4"><strong className="text-foreground">BfArM</strong> (and PEI where applicable) oversee authorisations; the <strong className="text-foreground">G-BA</strong> drives early benefit assessment under AMNOG, shaping negotiated reimbursement with the GKV-SV.</p><div className="space-y-3"><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Access Pathway</p><p className="text-lg font-semibold text-foreground">Authorisation + AMNOG / G-BA assessment</p></div><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pricing / Access Model</p><p className="text-sm text-foreground">Free pricing at launch, then negotiated SHI reimbursement</p></div></div></div>
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Pill className="w-5 h-5 text-primary" />Key Registration Requirements</h3><ul className="space-y-3 text-sm text-foreground"><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>EU/German marketing authorisation dossier</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>GMP compliance and inspections</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>AMNOG dossier for new reimbursed medicines</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Pharmacovigilance system</span></li><li className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0"><Building2 className="w-4 h-4" /></span><span className="font-medium">Local affiliate / distribution partner typically required</span></li></ul></div>
          </div>
        </div></section>

        <section className="section-padding py-16" id="distribution-channels"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Drug Distribution Channels in Germany</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Community pharmacies and hospital channels dominate, with wholesalers and pharmacy cooperatives controlling logistics.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-primary" />Community Pharmacy / SHI</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p>Most outpatient medicines are dispensed via community pharmacies under SHI reimbursement.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Dense Apotheke network</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Phoenix, Noweda, and peer wholesalers</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Reference pricing / rebate contracts</li></ul></div></div>
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-primary" />Hospital &amp; Specialty</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p>Hospital pharmacies and specialty pathways handle high-cost and infusion therapies.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Hospital formularies and tenders</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Specialty / oncology centres</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> AMNOG-influenced uptake for new drugs</li></ul></div></div>
          </div>
        </div></section>

        <section className="section-padding py-16" id="growth-drivers"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Germany Pharmaceutical Market Growth Drivers</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Specialty innovation, biotech manufacturing, and AMNOG dynamics shape German pharma growth.</p>
          <div className="grid md:grid-cols-3 gap-6">{[
            { title: 'Specialty & Oncology', desc: 'Specialty medicines and oncology continue to drive SHI value growth.' },
            { title: 'mRNA & Biotech', desc: 'BioNTech and the broader biotech ecosystem reinforce Germany\'s innovation profile.' },
            { title: 'AMNOG Evidence Bar', desc: 'Early benefit assessment rewards strong comparative evidence and shapes pricing.' },
            { title: 'Generics & Biosimilars', desc: 'Cost-containment keeps generics and biosimilars strategically important.' },
            { title: 'Metabolic Demand', desc: 'Diabetes and obesity therapies are reshaping primary-care and specialty budgets.' },
            { title: 'Export Manufacturing', desc: 'German plants remain important supply nodes for Europe and global markets.' },
          ].map((d) => (<div key={d.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{d.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-16" id="bionixus-support"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">How BioNixus Supports Pharma Companies in Germany</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            BioNixus supports pharma and biotech programmes in Germany and globally. For company-level programmes, see our{' '}
            <Link to="/pharmaceutical-market-research-germany" className="text-primary hover:underline font-medium">market research company for Germany pharma</Link>. We help with:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">{[
            { title: 'Physician Surveys & KOL Mapping', desc: 'Research with German physicians across SHI outpatient and hospital settings.' },
            { title: 'Market Access & AMNOG Strategy', desc: 'Stakeholder research aligned to BfArM, G-BA, and payer negotiation realities.' },
            { title: 'Competitive Intelligence', desc: 'Launch tracking and channel monitoring across priority German therapeutic categories.' },
            { title: 'Market Entry & Expansion', desc: 'Indication prioritisation and go-to-market planning for German launches.' },
          ].map((s) => (<div key={s.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{s.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p></div>))}</div>
          <p className="text-muted-foreground leading-relaxed mt-8 max-w-4xl">
            Explore our <Link to="/healthcare-market-research" className="text-primary hover:underline">healthcare market research services</Link> or contact our{' '}
            <Link to="/healthcare-market-research/germany" className="text-primary hover:underline">Germany pharmaceutical market research team</Link>.
          </p>
        </div></section>

        <section className="section-padding py-16" id="peer-directories"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Pharmaceutical companies in other major markets</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">Compare the German pharmaceutical industry with BioNixus company directories for peer markets.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link to="/pharmaceutical-companies-usa" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Pharmaceutical companies in USA <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/pharmaceutical-companies-uk" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Pharmaceutical companies in UK <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/pharmaceutical-companies-brazil" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Pharmaceutical companies in Brazil <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/pharmaceutical-companies-canada" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Pharmaceutical companies in Canada <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/insights/top-global-healthcare-market-research-companies-2026" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Healthcare market research companies <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/insights/top-healthcare-market-research-companies-germany-2026" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Germany healthcare MR companies 2026 <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
          </div>
        </div></section>

        <section className="section-padding py-10" id="country-directories"><div className="container-wide w-full">
          <CountryDirectoryLinks country="germany" excludePath="/pharmaceutical-companies-germany" compact />
        </div></section>

        <PharmaCompaniesFaqSection items={faqItems} />
        <PharmaCompaniesGlobalHubLinks country="germany" />
        <section className="section-padding py-12" id="methodology"><div className="container-wide max-w-5xl mx-auto"><div className="bg-card border border-border rounded-xl p-8"><h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" />Data Sources &amp; Methodology</h2><p className="text-sm text-muted-foreground leading-relaxed mb-4">This guide aggregates publicly available information from:</p><ul className="text-sm text-muted-foreground space-y-2 mb-6"><li>BfArM and G-BA public materials</li><li>Company annual reports and investor disclosures</li><li>Wholesaler and pharmacy channel disclosures</li><li>BioNixus primary research with German healthcare stakeholders (2024–2026)</li></ul><p className="text-sm text-muted-foreground leading-relaxed">For customised market intelligence on Germany, <Link to="/contact" className="text-primary hover:underline">contact our team</Link>.</p></div></div></section>
        </ReportContentWithAside>
        <ReportConsultationBand config={PHARMA_CONVERSION} />
        </main>
      <Footer />
      {past70Percent ? (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border shadow-lg p-4">
          <div className="container-wide max-w-3xl mx-auto">
            <ConversionCTA variant="talk-to-research" market="Germany" ctaId="pharma_companies_germany_scroll70" ctaLocation="scroll_70_percent" className="border-0 p-0 text-left md:flex md:items-center md:justify-between md:gap-4" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default GermanyPharmaCompanies;
