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

const PHARMA_CONVERSION = getPharmaGuideConfig('uk');

interface PharmaCompany {
  name: string;
  hq: string;
  type: 'Local Manufacturer' | 'MNC Office' | 'Distributor' | 'Regional';
  therapeuticAreas: string;
  notes: string;
}

const pharmaCompanies: PharmaCompany[] = [
  { name: 'GSK (GlaxoSmithKline)', hq: 'UK', type: 'Local Manufacturer', therapeuticAreas: 'Vaccines, respiratory, HIV, specialty', notes: 'UK-listed major; vaccines and specialty focus' },
  { name: 'AstraZeneca', hq: 'UK / Sweden', type: 'Local Manufacturer', therapeuticAreas: 'Oncology, respiratory, CVRM, rare diseases', notes: 'Cambridge HQ; global oncology leader' },
  { name: 'Hikma Pharmaceuticals', hq: 'UK / Jordan', type: 'Local Manufacturer', therapeuticAreas: 'Injectables, generics, branded generics', notes: 'London-listed; injectables strength' },
  { name: 'Indivior', hq: 'UK', type: 'Local Manufacturer', therapeuticAreas: 'Addiction science, CNS', notes: 'UK specialty pharma' },
  { name: 'Oxford Biomedica', hq: 'UK', type: 'Local Manufacturer', therapeuticAreas: 'Gene therapy manufacturing', notes: 'Viral vector CDMO / gene therapy' },
  { name: 'Reckitt', hq: 'UK', type: 'Local Manufacturer', therapeuticAreas: 'Consumer health, OTC', notes: 'Consumer health brands with UK HQ' },
  { name: 'Pfizer', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, vaccines, inflammation, rare diseases', notes: 'Major UK commercial and manufacturing footprint' },
  { name: 'Novartis', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, immunology, ophthalmology, cardiovascular', notes: 'Strong NHS specialty presence' },
  { name: 'Roche', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, haematology, neuroscience, diagnostics', notes: 'Oncology and diagnostics in UK' },
  { name: 'Sanofi', hq: 'France', type: 'MNC Office', therapeuticAreas: 'Immunology, vaccines, rare diseases, diabetes', notes: 'Specialty and vaccine franchise' },
  { name: 'MSD (Merck & Co.)', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, vaccines, infectious disease', notes: 'Keytruda and vaccines in UK' },
  { name: 'AbbVie', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Immunology, oncology, neuroscience, aesthetics', notes: 'Immunology franchise across NHS' },
  { name: 'Eli Lilly', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Diabetes, obesity, oncology, neuroscience', notes: 'GLP-1 and specialty growth' },
  { name: 'Novo Nordisk', hq: 'Denmark', type: 'MNC Office', therapeuticAreas: 'Diabetes, obesity, rare diseases', notes: 'Insulin and GLP-1 presence' },
  { name: 'Johnson & Johnson', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, immunology, neuroscience, medtech', notes: 'Janssen specialty portfolio' },
  { name: 'Boehringer Ingelheim', hq: 'Germany', type: 'MNC Office', therapeuticAreas: 'Respiratory, cardiovascular, metabolism', notes: 'Respiratory and diabetes franchise' },
  { name: 'Bayer', hq: 'Germany', type: 'MNC Office', therapeuticAreas: 'Cardiology, oncology, women\'s health, consumer', notes: 'UK commercial presence' },
  { name: 'Takeda', hq: 'Japan', type: 'MNC Office', therapeuticAreas: 'GI, rare diseases, oncology, plasma', notes: 'Specialty and rare disease focus' },
  { name: 'Teva', hq: 'Israel', type: 'Regional', therapeuticAreas: 'Generics, specialty CNS', notes: 'Major generics supplier to UK market' },
  { name: 'Alliance Healthcare', hq: 'UK / Germany', type: 'Distributor', therapeuticAreas: 'Wholesale distribution', notes: 'Major UK pharmaceutical wholesaler (Phoenix Group)' },
  { name: 'AAH Pharmaceuticals', hq: 'UK', type: 'Distributor', therapeuticAreas: 'Wholesale distribution', notes: 'Leading UK pharmacy wholesaler' },
  { name: 'Boots (Walgreens Boots Alliance)', hq: 'UK / USA', type: 'Distributor', therapeuticAreas: 'Retail pharmacy, OTC, consumer health', notes: 'Largest UK pharmacy chain brand' },
];

const faqItems = [
  { q: 'How many major pharmaceutical companies operate in the UK?', a: 'The UK hosts two global majors (GSK and AstraZeneca) plus a deep ecosystem of specialty firms, CDMOs, and multinational commercial affiliates. This guide covers 20+ notable manufacturers, regional generics players, and leading wholesaler/retail channels.' },
  { q: 'What is the size of the UK pharmaceutical market?', a: 'The UK is among Europe\'s largest pharmaceutical markets. Public industry framing typically places national medicines spend in the tens of billions of pounds annually, with NHS purchasing dominating volume and specialty medicines driving value growth.' },
  { q: 'Who regulates pharmaceuticals in the UK?', a: 'The MHRA oversees medicines licensing, manufacturing quality, and pharmacovigilance. NICE appraisals heavily influence NHS England uptake for new medicines, alongside Scotland\'s SMC and local formulary processes.' },
  { q: 'How does NICE affect pharmaceutical companies in the UK?', a: 'NICE technology appraisals shape reimbursement and uptake across the NHS. Companies typically plan evidence packages, pricing negotiations, and patient-access schemes with NICE and NHS England pathways in mind.' },
  { q: 'Do foreign companies need a local presence to sell in the UK?', a: 'Foreign manufacturers generally need a UK/EU marketing authorisation route via MHRA, a local responsible person/affiliate for pharmacovigilance and distribution, and NHS access strategy covering NICE and regional formularies.' },
  { q: 'Which companies dominate UK drug distribution?', a: 'Wholesale distribution is led by players such as Alliance Healthcare and AAH Pharmaceuticals, while Boots remains the most visible national retail pharmacy brand alongside hospital and specialty channels.' },
];

const UkPharmaCompanies = () => {
  const past70Percent = useScrollThreshold(70);
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const citationUrl = 'https://www.bionixus.com/pharmaceutical-companies-uk';

  const ogTitle = 'Top Pharmaceutical Companies in UK (2026 Ranked List)';
  const ogDescription = 'Complete 2026 list of pharmaceutical companies in the UK — GSK, AstraZeneca, MNCs, wholesalers, MHRA/NICE context. Research by BioNixus.';
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Top Pharmaceutical Companies in UK (2026 Ranked List)</title>
        <meta name="description" content="Complete 2026 list of pharmaceutical companies in the UK — GSK, AstraZeneca, MNCs, wholesalers, MHRA/NICE context. Research by BioNixus." />
        <link rel="canonical" href={citationUrl} />
        <script type="application/ld+json">{JSON.stringify(buildPharmaCompaniesItemListLd(citationUrl, pharmaCompanies.map((c) => c.name)))}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', image: 'https://www.bionixus.com/og-image.png', headline: 'Pharmaceutical Companies in the UK: Complete Industry Guide 2026', description: 'Guide to pharmaceutical companies in the United Kingdom — UK majors, multinational affiliates, wholesalers, MHRA/NICE landscape, and NHS market structure for 2026.', url: citationUrl, datePublished: '2026-08-14', dateModified: '2026-08-14', author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' }, publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' } })}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' }, { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.bionixus.com/resources' }, { '@type': 'ListItem', position: 3, name: 'Pharmaceutical Companies in the UK', item: citationUrl }] })}</script>
        <script type="application/ld+json">{JSON.stringify(buildPharmaCompaniesFaqLd(citationUrl, faqItems))}</script>
      </Helmet>
      <OpenGraphMeta title={ogTitle} description={ogDescription} image="https://www.bionixus.com/og-image.png" url={citationUrl} type="article" locale={language === 'ar' ? 'ar_SA' : 'en_US'} alternateLocales={language === 'ar' ? ['en_US'] : ['ar_SA']} />
      <Navbar />
      <ReportReadingProgress progressId="pharma-guide-rp-uk" />
      <main>
        <div className="section-padding pt-24 pb-4"><div className="container-wide"><div className="flex items-center gap-2 text-sm text-muted-foreground mb-6"><Link to={basePath} className="hover:text-primary transition-colors">Home</Link><span>/</span><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link><span>/</span><span className="text-foreground">Pharmaceutical Companies in the UK</span></div></div></div>

        <section className="section-padding pt-0 pb-12"><div className="container-wide max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"><Building2 className="w-4 h-4" />Industry Guide 2026</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">Pharmaceutical Companies in the UK</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">The United Kingdom remains one of Europe&apos;s most important pharmaceutical markets, home to GSK and AstraZeneca and a dense network of multinational affiliates serving the NHS. Pharmaceutical companies in the UK navigate MHRA licensing and NICE appraisal pathways — start from <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">healthcare market research</Link> for programme scoping. This guide covers major manufacturers, distributors, regulatory context, and strategic opportunities.</p>
          <p className="text-sm text-muted-foreground">Last updated: August 2026 &middot; Sources: MHRA, NICE, NHS, company filings, BioNixus research</p>
          <div className="mt-8 p-5 bg-muted/50 border border-border rounded-xl"><div className="flex items-start gap-3"><Share2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground text-sm mb-1">Cite this guide</p><p className="text-sm text-muted-foreground leading-relaxed">BioNixus. &quot;Pharmaceutical Companies in the UK: Complete Industry Guide 2026.&quot; BioNixus Healthcare Market Research, Aug. 2026, <a href={citationUrl} className="text-primary hover:underline break-all">{citationUrl}</a>.<br />Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CC BY 4.0</a> — free to share and adapt with attribution.</p></div></div></div>
          <ReportEarlyCtaBar config={PHARMA_CONVERSION} className="mt-8" /></div></section>

        <section className="section-padding py-12 bg-primary text-primary-foreground"><div className="container-wide max-w-5xl mx-auto"><div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><p className="text-3xl md:text-4xl font-display font-bold">Top EU5</p><p className="text-primary-foreground/70 text-sm mt-1">Among Europe&apos;s largest markets</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">NHS</p><p className="text-primary-foreground/70 text-sm mt-1">Dominant purchaser</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">MHRA</p><p className="text-primary-foreground/70 text-sm mt-1">Medicines regulator</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">NICE</p><p className="text-primary-foreground/70 text-sm mt-1">HTA / uptake gatekeeper</p></div>
        </div></div></section>

        <PharmaCompaniesQuickAnswer
          country="uk"
          marketSize="one of Europe's largest national medicines markets (tens of billions of pounds in public framing)"
          growthRate="specialty-led value growth within a mature NHS system"
          regulatorLabel="MHRA and NICE"
          topCompanyNames={pharmaCompanies.map((c) => c.name)}
        />

        <ReportContentWithAside config={PHARMA_CONVERSION}>
        <section className="section-padding py-8 bg-muted/30"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
          <div className="grid md:grid-cols-2 gap-2">
            <a href="#market-overview" className="text-sm text-primary hover:underline flex items-center gap-2"><BarChart3 className="w-4 h-4" /> UK Pharmaceutical Market Overview</a>
            <a href="#top-companies" className="text-sm text-primary hover:underline flex items-center gap-2"><Building2 className="w-4 h-4" /> Top Pharmaceutical Companies</a>
            <a href="#companies-by-category" className="text-sm text-primary hover:underline flex items-center gap-2"><Users className="w-4 h-4" /> Companies by Category</a>
            <a href="#regulatory-landscape" className="text-sm text-primary hover:underline flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Regulatory Landscape (MHRA / NICE)</a>
            <a href="#distribution-channels" className="text-sm text-primary hover:underline flex items-center gap-2"><Truck className="w-4 h-4" /> Distribution Channels</a>
            <a href="#growth-drivers" className="text-sm text-primary hover:underline flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Growth Drivers</a>
            <a href="#bionixus-support" className="text-sm text-primary hover:underline flex items-center gap-2"><Globe className="w-4 h-4" /> How BioNixus Supports Pharma in the UK</a>
            <a href="#faq" className="text-sm text-primary hover:underline flex items-center gap-2"><BookOpen className="w-4 h-4" /> Frequently Asked Questions</a>
          </div>
        </div></section>

        <section className="section-padding py-16" id="market-overview"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">UK Pharmaceutical Market Overview</h2>
          <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
            <p>The UK pharmaceutical market is anchored by the <strong className="text-foreground">NHS</strong> as the dominant purchaser, with <strong className="text-foreground">GSK</strong> and <strong className="text-foreground">AstraZeneca</strong> as globally significant UK-based manufacturers. Specialty medicines, oncology, vaccines, and metabolic therapies drive much of the value growth.</p>
            <p>Post-Brexit, the <strong className="text-foreground">MHRA</strong> is the primary medicines regulator, while <strong className="text-foreground">NICE</strong> appraisals remain central to national uptake. Wholesalers and pharmacy chains manage the last mile into community and hospital settings.</p>
            <p>For comparative country programmes, see our <Link to="/healthcare-market-research" className="text-primary hover:underline">healthcare market research hub</Link> and peer directories for the USA, Germany, Brazil, and Canada.</p>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="top-companies"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Top Pharmaceutical Companies in the UK</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">The following table lists major pharmaceutical companies operating in the UK — including UK-headquartered manufacturers, multinational affiliates, regional generics players, and leading distributors.</p>
          <div className="overflow-x-auto rounded-xl border border-border"><table className="w-full text-sm"><thead><tr className="bg-primary/5 border-b border-border"><th className="text-left px-4 py-3 font-semibold text-foreground">Company</th><th className="text-left px-4 py-3 font-semibold text-foreground">HQ</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Type</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden lg:table-cell">Therapeutic Areas</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden xl:table-cell">Notes</th></tr></thead><tbody>
            {pharmaCompanies.map((c, i) => (<tr key={c.name} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}><td className="px-4 py-3 font-medium text-foreground">{c.name}</td><td className="px-4 py-3 text-muted-foreground">{c.hq}</td><td className="px-4 py-3 hidden md:table-cell"><span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${c.type === 'Local Manufacturer' ? 'bg-green-50 text-green-700' : c.type === 'MNC Office' ? 'bg-blue-50 text-blue-700' : c.type === 'Regional' ? 'bg-amber-50 text-amber-700' : 'bg-purple-50 text-purple-700'}`}>{c.type}</span></td><td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">{c.therapeuticAreas}</td><td className="px-4 py-3 text-muted-foreground text-xs hidden xl:table-cell">{c.notes}</td></tr>))}
          </tbody></table></div>
          <div className="mt-8"><ConversionCTA variant="talk-to-research" market="the UK" ctaId="pharma_companies_uk_after_table" ctaLocation="after_first_table" /></div>
        </div></section>

        <ReportMidPageCta config={PHARMA_CONVERSION} />

        <section className="section-padding py-16" id="companies-by-category"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">List of Pharmaceutical Companies in the UK by Category</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">UK pharmaceutical companies span global majors, specialty firms, multinational affiliates, generics suppliers, and national wholesale/retail networks.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center"><Pill className="w-5 h-5 text-green-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">UK-Headquartered Manufacturers</h3></div><p className="text-sm text-muted-foreground mb-4">GSK and AstraZeneca anchor the UK industry, alongside specialty and consumer-health players such as Hikma, Indivior, Oxford Biomedica, and Reckitt.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Local Manufacturer').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-green-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center"><Globe className="w-5 h-5 text-blue-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Multinational Pharma Affiliates</h3></div><p className="text-sm text-muted-foreground mb-4">US and continental European MNCs maintain large UK commercial organisations serving NHS and private channels.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'MNC Office').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-blue-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center"><Building2 className="w-5 h-5 text-amber-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Regional / Generics Players</h3></div><p className="text-sm text-muted-foreground mb-4">Generics suppliers such as Teva remain important for NHS cost containment and primary-care volume.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Regional').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center"><Truck className="w-5 h-5 text-purple-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Wholesalers &amp; Pharmacy Retail</h3></div><p className="text-sm text-muted-foreground mb-4">Alliance Healthcare, AAH Pharmaceuticals, and Boots dominate much of UK wholesale and retail pharmacy visibility.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Distributor').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-purple-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="regulatory-landscape"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Pharma Companies in the UK: Regulatory Landscape (MHRA / NICE)</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">MHRA licensing and NICE appraisal pathways define UK market access for most new medicines.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" />Regulatory Authorities</h3><p className="text-sm text-muted-foreground leading-relaxed mb-4"><strong className="text-foreground">MHRA</strong> oversees marketing authorisations and quality; <strong className="text-foreground">NICE</strong> appraisals strongly influence NHS England uptake. Scotland&apos;s SMC and local formularies add further access steps.</p><div className="space-y-3"><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Access Pathway</p><p className="text-lg font-semibold text-foreground">MHRA licence + NICE / SMC appraisal</p></div><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pricing / Access Model</p><p className="text-sm text-foreground">NHS negotiation, VPAS context, patient access schemes</p></div></div></div>
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Pill className="w-5 h-5 text-primary" />Key Registration Requirements</h3><ul className="space-y-3 text-sm text-foreground"><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>MHRA marketing authorisation dossier</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>GMP compliance and inspections</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Pharmacovigilance system and UK QPPV where required</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>NICE evidence package for major new medicines</span></li><li className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0"><Building2 className="w-4 h-4" /></span><span className="font-medium">UK affiliate / responsible person for distribution often required</span></li></ul></div>
          </div>
        </div></section>

        <section className="section-padding py-16" id="distribution-channels"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Drug Distribution Channels in the UK</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">NHS hospital and primary-care channels dominate volume, with community pharmacy and specialty routes completing access.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-primary" />Community &amp; Retail Pharmacy</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p>Community pharmacy remains the primary outpatient dispensing channel, supported by national wholesalers.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Boots and multiple pharmacy groups</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Alliance Healthcare and AAH wholesale</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> OTC and consumer health brands</li></ul></div></div>
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-primary" />NHS Hospital &amp; Specialty</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p>Hospital pharmacies and specialty pathways handle high-cost and infusion therapies.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> NHS Trust formularies and regional procurement</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Homecare and specialty pharmacy</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> NICE-guided uptake for new specialty drugs</li></ul></div></div>
          </div>
        </div></section>

        <section className="section-padding py-16" id="growth-drivers"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">UK Pharmaceutical Market Growth Drivers</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Specialty innovation, life-sciences investment, and NHS access reform shape UK pharma growth.</p>
          <div className="grid md:col-span-3 gap-6 md:grid-cols-3">{[
            { title: 'Specialty & Oncology', desc: 'Oncology and specialty medicines continue to drive value growth within NHS budgets.' },
            { title: 'Vaccines & Respiratory', desc: 'UK majors and MNCs maintain strong vaccine and respiratory franchises.' },
            { title: 'NICE Access Pathways', desc: 'Faster appraisal and commercial frameworks influence launch timing and uptake.' },
            { title: 'Life Sciences Clusters', desc: 'Cambridge, Oxford, and London ecosystems support biotech and CDMO growth.' },
            { title: 'Metabolic Demand', desc: 'Diabetes and obesity therapies are reshaping primary-care and specialty budgets.' },
            { title: 'Post-Brexit MHRA Agility', desc: 'Independent MHRA pathways create both opportunity and dual-filing complexity for global companies.' },
          ].map((d) => (<div key={d.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{d.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-16" id="bionixus-support"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">How BioNixus Supports Pharma Companies in the UK</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            BioNixus supports pharma and biotech programmes in the UK and globally. For company-level UK programmes, see our{' '}
            <Link to="/pharmaceutical-market-research-uk" className="text-primary hover:underline font-medium">market research company for UK pharma</Link>. We help with:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">{[
            { title: 'Physician Surveys & KOL Mapping', desc: 'Research with UK physicians across NHS Trusts, primary care, and specialty centres.' },
            { title: 'Market Access & NICE Strategy', desc: 'Evidence and stakeholder research aligned to MHRA, NICE, and NHS formulary realities.' },
            { title: 'Competitive Intelligence', desc: 'Launch tracking and channel monitoring across priority UK therapeutic categories.' },
            { title: 'Market Entry & Expansion', desc: 'Indication prioritisation and go-to-market planning for UK launches.' },
          ].map((s) => (<div key={s.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{s.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p></div>))}</div>
          <p className="text-muted-foreground leading-relaxed mt-8 max-w-4xl">
            Explore our <Link to="/healthcare-market-research" className="text-primary hover:underline">healthcare market research services</Link> or contact our{' '}
            <Link to="/healthcare-market-research/uk" className="text-primary hover:underline">UK pharmaceutical market research team</Link>.
          </p>
        </div></section>

        <section className="section-padding py-16" id="peer-directories"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Pharmaceutical companies in other major markets</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">Compare the UK pharmaceutical industry with BioNixus company directories for peer markets.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link to="/pharmaceutical-companies-usa" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Pharmaceutical companies in USA <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/pharmaceutical-companies-germany" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Pharmaceutical companies in Germany <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/pharmaceutical-companies-brazil" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Pharmaceutical companies in Brazil <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/pharmaceutical-companies-canada" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Pharmaceutical companies in Canada <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/healthcare-market-research-companies" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Healthcare market research companies <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/insights/top-healthcare-market-research-companies-uk-2026" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">UK healthcare MR companies 2026 <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
          </div>
        </div></section>

        <PharmaCompaniesFaqSection items={faqItems} />
        <PharmaCompaniesGlobalHubLinks country="uk" />
        <section className="section-padding py-12" id="methodology"><div className="container-wide max-w-5xl mx-auto"><div className="bg-card border border-border rounded-xl p-8"><h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" />Data Sources &amp; Methodology</h2><p className="text-sm text-muted-foreground leading-relaxed mb-4">This guide aggregates publicly available information from:</p><ul className="text-sm text-muted-foreground space-y-2 mb-6"><li>MHRA, NICE, and NHS public materials</li><li>Company annual reports and investor disclosures</li><li>Wholesaler and pharmacy channel disclosures</li><li>BioNixus primary research with UK healthcare stakeholders (2024–2026)</li></ul><p className="text-sm text-muted-foreground leading-relaxed">For customised market intelligence on the UK, <Link to="/contact" className="text-primary hover:underline">contact our team</Link>.</p></div></div></section>
        </ReportContentWithAside>
        <ReportConsultationBand config={PHARMA_CONVERSION} />
        </main>
      <Footer />
      {past70Percent ? (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border shadow-lg p-4">
          <div className="container-wide max-w-3xl mx-auto">
            <ConversionCTA variant="talk-to-research" market="the UK" ctaId="pharma_companies_uk_scroll70" ctaLocation="scroll_70_percent" className="border-0 p-0 text-left md:flex md:items-center md:justify-between md:gap-4" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UkPharmaCompanies;
