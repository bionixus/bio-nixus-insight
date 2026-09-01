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
import { buildPharmaCompaniesFaqLd, buildPharmaCompaniesItemListLd } from '@/components/seo/pharmaCompaniesSeo';
import {
  ReportConsultationBand,
  ReportContentWithAside,
  ReportEarlyCtaBar,
  ReportMidPageCta,
  ReportReadingProgress,
} from '@/components/report-conversion';

const PHARMA_CONVERSION = getPharmaGuideConfig('canada');

interface PharmaCompany {
  name: string;
  hq: string;
  type: 'Local Manufacturer' | 'MNC Office' | 'Distributor' | 'Regional';
  therapeuticAreas: string;
  notes: string;
}

const pharmaCompanies: PharmaCompany[] = [
  { name: 'Apotex', hq: 'Canada', type: 'Local Manufacturer', therapeuticAreas: 'Generics, biosimilars', notes: 'Canada\'s largest generics manufacturer' },
  { name: 'Bausch Health', hq: 'Canada', type: 'Local Manufacturer', therapeuticAreas: 'Gastroenterology, ophthalmology, dermatology, neurology', notes: 'Laval HQ; specialty and branded portfolio' },
  { name: 'Pharmascience', hq: 'Canada', type: 'Local Manufacturer', therapeuticAreas: 'Generics, hospital, consumer', notes: 'Major Quebec-based generics group' },
  { name: 'Knight Therapeutics', hq: 'Canada', type: 'Local Manufacturer', therapeuticAreas: 'Specialty licensing, oncology, rare disease', notes: 'Canadian specialty commercial platform' },
  { name: 'Valeo Pharma', hq: 'Canada', type: 'Local Manufacturer', therapeuticAreas: 'Hospital, specialty, primary care', notes: 'Canadian specialty/hospital focus' },
  { name: 'Pfizer', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, vaccines, inflammation, rare diseases', notes: 'Major Canadian commercial presence' },
  { name: 'Novartis', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, immunology, ophthalmology, cardiovascular', notes: 'Strong specialty presence' },
  { name: 'Roche', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, haematology, neuroscience, diagnostics', notes: 'Oncology and diagnostics leadership' },
  { name: 'Sanofi', hq: 'France', type: 'MNC Office', therapeuticAreas: 'Vaccines, immunology, rare diseases, diabetes', notes: 'Vaccine and specialty franchise' },
  { name: 'AstraZeneca', hq: 'UK / Sweden', type: 'MNC Office', therapeuticAreas: 'Oncology, respiratory, CVRM, rare diseases', notes: 'Oncology and respiratory growth' },
  { name: 'GSK (GlaxoSmithKline)', hq: 'UK', type: 'MNC Office', therapeuticAreas: 'Vaccines, respiratory, HIV, specialty', notes: 'Vaccine franchise in Canada' },
  { name: 'MSD (Merck & Co.)', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, vaccines, infectious disease', notes: 'Keytruda and vaccines' },
  { name: 'AbbVie', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Immunology, oncology, neuroscience, aesthetics', notes: 'Immunology franchise' },
  { name: 'Eli Lilly', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Diabetes, obesity, oncology, neuroscience', notes: 'Metabolic growth' },
  { name: 'Novo Nordisk', hq: 'Denmark', type: 'MNC Office', therapeuticAreas: 'Diabetes, obesity, rare diseases', notes: 'Insulin and GLP-1 franchise' },
  { name: 'Johnson & Johnson', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, immunology, neuroscience, medtech', notes: 'Janssen specialty portfolio' },
  { name: 'Boehringer Ingelheim', hq: 'Germany', type: 'MNC Office', therapeuticAreas: 'Respiratory, cardiovascular, metabolism', notes: 'Respiratory and diabetes franchise' },
  { name: 'Bayer', hq: 'Germany', type: 'MNC Office', therapeuticAreas: 'Cardiology, oncology, women\'s health, consumer', notes: 'Canadian commercial presence' },
  { name: 'Takeda', hq: 'Japan', type: 'MNC Office', therapeuticAreas: 'GI, rare diseases, oncology, plasma', notes: 'Specialty and rare disease focus' },
  { name: 'Teva Canada', hq: 'Israel / Canada', type: 'Regional', therapeuticAreas: 'Generics, specialty CNS', notes: 'Major generics supplier in Canada' },
  { name: 'McKesson Canada', hq: 'Canada / USA', type: 'Distributor', therapeuticAreas: 'Wholesale distribution, specialty pharmacy', notes: 'Leading Canadian pharmaceutical wholesaler' },
  { name: 'Shoppers Drug Mart (Loblaw)', hq: 'Canada', type: 'Distributor', therapeuticAreas: 'Retail pharmacy, OTC, consumer health', notes: 'Largest national pharmacy chain brand' },
];

const faqItems = [
  { q: 'How many major pharmaceutical companies operate in Canada?', a: 'Canada hosts notable local manufacturers (Apotex, Bausch Health, Pharmascience, Knight, Valeo) plus a full set of multinational affiliates and national wholesale/retail channels. This guide covers 20+ major companies and distributors.' },
  { q: 'What is the size of the Canadian pharmaceutical market?', a: 'Canada is among the larger OECD pharmaceutical markets. Public industry framing typically places national prescription spend in the tens of billions of Canadian dollars, with specialty medicines and provincial formularies shaping value growth.' },
  { q: 'Who regulates pharmaceuticals in Canada?', a: 'Health Canada oversees drug approval, manufacturing quality, and labelling. CADTH (and INESSS in Quebec) influence reimbursement recommendations, while the pCPA and provincial drug plans negotiate listing and pricing.' },
  { q: 'How does CADTH affect pharmaceutical companies in Canada?', a: 'CADTH reviews inform public-plan listing decisions across provinces. Companies typically plan evidence packages and pricing strategies for CADTH/INESSS and subsequent pCPA negotiations.' },
  { q: 'Do foreign companies need a local presence to sell in Canada?', a: 'Foreign manufacturers generally need Health Canada market authorisation, a Canadian importer/DIN holder arrangement, pharmacovigilance responsibilities, and provincial access strategy covering CADTH and public/private formularies.' },
  { q: 'Which companies dominate Canadian drug distribution?', a: 'McKesson Canada is a leading wholesaler, while Shoppers Drug Mart (Loblaw) is the most visible national retail pharmacy brand alongside hospital and specialty pharmacy channels.' },
];

const CanadaPharmaCompanies = () => {
  const past70Percent = useScrollThreshold(70);
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const citationUrl = 'https://www.bionixus.com/pharmaceutical-companies-canada';
  const ogTitle = 'Top Pharmaceutical Companies in Canada (2026 Ranked List)';
  const ogDescription = 'Complete 2026 list of pharmaceutical companies in Canada — Apotex, Bausch, MNCs, wholesalers, Health Canada/CADTH context. Research by BioNixus.';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Top Pharmaceutical Companies in Canada (2026 Ranked List)</title>
        <meta name="description" content="Complete 2026 list of pharmaceutical companies in Canada — Apotex, Bausch, MNCs, wholesalers, Health Canada/CADTH context. Research by BioNixus." />
        <link rel="canonical" href={citationUrl} />
        <script type="application/ld+json">{JSON.stringify(buildPharmaCompaniesItemListLd(citationUrl, pharmaCompanies.map((c) => c.name)))}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', image: 'https://www.bionixus.com/og-image.png', headline: 'Pharmaceutical Companies in Canada: Complete Industry Guide 2026', description: 'Guide to pharmaceutical companies in Canada — local manufacturers, multinational affiliates, wholesalers, Health Canada/CADTH landscape, and market structure for 2026.', url: citationUrl, datePublished: '2026-08-14', dateModified: '2026-08-14', author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' }, publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' } })}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' }, { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.bionixus.com/resources' }, { '@type': 'ListItem', position: 3, name: 'Pharmaceutical Companies in Canada', item: citationUrl }] })}</script>
        <script type="application/ld+json">{JSON.stringify(buildPharmaCompaniesFaqLd(citationUrl, faqItems))}</script>
      </Helmet>
      <OpenGraphMeta title={ogTitle} description={ogDescription} image="https://www.bionixus.com/og-image.png" url={citationUrl} type="article" locale={language === 'ar' ? 'ar_SA' : 'en_US'} alternateLocales={language === 'ar' ? ['en_US'] : ['ar_SA']} />
      <Navbar />
      <ReportReadingProgress progressId="pharma-guide-rp-canada" />
      <main>
        <div className="section-padding pt-24 pb-4"><div className="container-wide"><div className="flex items-center gap-2 text-sm text-muted-foreground mb-6"><Link to={basePath} className="hover:text-primary transition-colors">Home</Link><span>/</span><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link><span>/</span><span className="text-foreground">Pharmaceutical Companies in Canada</span></div></div></div>

        <section className="section-padding pt-0 pb-12"><div className="container-wide max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"><Building2 className="w-4 h-4" />Industry Guide 2026</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">Pharmaceutical Companies in Canada</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">Canada combines a strong generics manufacturing base (led by Apotex and peers) with multinational specialty franchises serving provincial public plans and private insurers. Pharmaceutical companies in Canada navigate Health Canada approval and CADTH/pCPA access — start from <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">healthcare market research</Link> for programme scoping. This guide covers major manufacturers, distributors, regulatory context, and strategic opportunities.</p>
          <p className="text-sm text-muted-foreground">Last updated: August 2026 &middot; Sources: Health Canada, CADTH, company filings, BioNixus research</p>
          <div className="mt-8 p-5 bg-muted/50 border border-border rounded-xl"><div className="flex items-start gap-3"><Share2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground text-sm mb-1">Cite this guide</p><p className="text-sm text-muted-foreground leading-relaxed">BioNixus. &quot;Pharmaceutical Companies in Canada: Complete Industry Guide 2026.&quot; BioNixus Healthcare Market Research, Aug. 2026, <a href={citationUrl} className="text-primary hover:underline break-all">{citationUrl}</a>.<br />Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CC BY 4.0</a> — free to share and adapt with attribution.</p></div></div></div>
          <ReportEarlyCtaBar config={PHARMA_CONVERSION} className="mt-8" /></div></section>

        <section className="section-padding py-12 bg-primary text-primary-foreground"><div className="container-wide max-w-5xl mx-auto"><div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><p className="text-3xl md:text-4xl font-display font-bold">OECD</p><p className="text-primary-foreground/70 text-sm mt-1">Major OECD pharma market</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">13</p><p className="text-primary-foreground/70 text-sm mt-1">Provincial / territorial plans</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">HC</p><p className="text-primary-foreground/70 text-sm mt-1">Health Canada regulator</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">CADTH</p><p className="text-primary-foreground/70 text-sm mt-1">HTA / listing influence</p></div>
        </div></div></section>

        <PharmaCompaniesQuickAnswer
          country="canada"
          marketSize="a major OECD pharmaceutical market (tens of billions CAD in public framing)"
          growthRate="specialty-led value growth across provincial formularies"
          regulatorLabel="Health Canada and CADTH"
          topCompanyNames={pharmaCompanies.map((c) => c.name)}
        />

        <ReportContentWithAside config={PHARMA_CONVERSION}>
        <section className="section-padding py-8 bg-muted/30"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
          <div className="grid md:grid-cols-2 gap-2">
            <a href="#market-overview" className="text-sm text-primary hover:underline flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Canada Pharmaceutical Market Overview</a>
            <a href="#top-companies" className="text-sm text-primary hover:underline flex items-center gap-2"><Building2 className="w-4 h-4" /> Top Pharmaceutical Companies</a>
            <a href="#companies-by-category" className="text-sm text-primary hover:underline flex items-center gap-2"><Users className="w-4 h-4" /> Companies by Category</a>
            <a href="#regulatory-landscape" className="text-sm text-primary hover:underline flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Regulatory Landscape (Health Canada / CADTH)</a>
            <a href="#distribution-channels" className="text-sm text-primary hover:underline flex items-center gap-2"><Truck className="w-4 h-4" /> Distribution Channels</a>
            <a href="#growth-drivers" className="text-sm text-primary hover:underline flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Growth Drivers</a>
            <a href="#bionixus-support" className="text-sm text-primary hover:underline flex items-center gap-2"><Globe className="w-4 h-4" /> How BioNixus Supports Pharma in Canada</a>
            <a href="#faq" className="text-sm text-primary hover:underline flex items-center gap-2"><BookOpen className="w-4 h-4" /> Frequently Asked Questions</a>
          </div>
        </div></section>

        <section className="section-padding py-16" id="market-overview"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Canada Pharmaceutical Market Overview</h2>
          <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
            <p>Canada is a <strong className="text-foreground">major OECD pharmaceutical market</strong> with a strong generics manufacturing base led by companies such as <strong className="text-foreground">Apotex</strong> and <strong className="text-foreground">Pharmascience</strong>, alongside specialty firms including <strong className="text-foreground">Bausch Health</strong> and Knight Therapeutics.</p>
            <p>Regulation is led by <strong className="text-foreground">Health Canada</strong>, while <strong className="text-foreground">CADTH</strong> (and INESSS in Quebec) shape public-plan listing recommendations ahead of <strong className="text-foreground">pCPA</strong> and provincial negotiations.</p>
            <p>For comparative country programmes, see our <Link to="/healthcare-market-research" className="text-primary hover:underline">healthcare market research hub</Link> and peer directories for the USA, UK, Germany, and Brazil.</p>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="top-companies"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Top Pharmaceutical Companies in Canada</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">The following table lists major pharmaceutical companies operating in Canada — including Canadian manufacturers, multinational affiliates, regional generics players, and leading distributors.</p>
          <div className="overflow-x-auto rounded-xl border border-border"><table className="w-full text-sm"><thead><tr className="bg-primary/5 border-b border-border"><th className="text-left px-4 py-3 font-semibold text-foreground">Company</th><th className="text-left px-4 py-3 font-semibold text-foreground">HQ</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Type</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden lg:table-cell">Therapeutic Areas</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden xl:table-cell">Notes</th></tr></thead><tbody>
            {pharmaCompanies.map((c, i) => (<tr key={c.name} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}><td className="px-4 py-3 font-medium text-foreground">{c.name}</td><td className="px-4 py-3 text-muted-foreground">{c.hq}</td><td className="px-4 py-3 hidden md:table-cell"><span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${c.type === 'Local Manufacturer' ? 'bg-green-50 text-green-700' : c.type === 'MNC Office' ? 'bg-blue-50 text-blue-700' : c.type === 'Regional' ? 'bg-amber-50 text-amber-700' : 'bg-purple-50 text-purple-700'}`}>{c.type}</span></td><td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">{c.therapeuticAreas}</td><td className="px-4 py-3 text-muted-foreground text-xs hidden xl:table-cell">{c.notes}</td></tr>))}
          </tbody></table></div>
          <PharmaDirectoryBridge
            countryName="Canada"
            directorySlug="canada"
            ctaId="pharma_companies_canada_after_table"
          />
        </div></section>

        <ReportMidPageCta config={PHARMA_CONVERSION} />

        <section className="section-padding py-16" id="companies-by-category"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">List of Pharmaceutical Companies in Canada by Category</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Canadian pharmaceutical companies span local manufacturers, multinational affiliates, generics suppliers, and national wholesale/retail networks.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center"><Pill className="w-5 h-5 text-green-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Canadian Manufacturers</h3></div><p className="text-sm text-muted-foreground mb-4">Apotex, Bausch Health, Pharmascience, Knight Therapeutics, and Valeo Pharma anchor much of the domestic industry.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Local Manufacturer').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-green-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center"><Globe className="w-5 h-5 text-blue-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Multinational Pharma Affiliates</h3></div><p className="text-sm text-muted-foreground mb-4">Global MNCs maintain large Canadian commercial organisations for specialty and primary-care categories.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'MNC Office').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-blue-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center"><Building2 className="w-5 h-5 text-amber-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Regional / Generics Players</h3></div><p className="text-sm text-muted-foreground mb-4">Teva Canada and peer generics suppliers remain important for public-plan cost containment.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Regional').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center"><Truck className="w-5 h-5 text-purple-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Wholesalers &amp; Pharmacy Retail</h3></div><p className="text-sm text-muted-foreground mb-4">McKesson Canada and Shoppers Drug Mart (Loblaw) dominate much of Canadian wholesale and retail pharmacy visibility.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Distributor').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-purple-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="regulatory-landscape"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Pharma Companies in Canada: Regulatory Landscape (Health Canada / CADTH)</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Health Canada approval and CADTH/pCPA pathways define Canadian public-plan access for many new medicines.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" />Regulatory Authorities</h3><p className="text-sm text-muted-foreground leading-relaxed mb-4"><strong className="text-foreground">Health Canada</strong> oversees market authorisation; <strong className="text-foreground">CADTH</strong> (and INESSS in Quebec) influence listing recommendations before <strong className="text-foreground">pCPA</strong> and provincial negotiations.</p><div className="space-y-3"><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Access Pathway</p><p className="text-lg font-semibold text-foreground">Health Canada + CADTH/INESSS + pCPA</p></div><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pricing / Access Model</p><p className="text-sm text-foreground">PMPRB context + provincial public/private formularies</p></div></div></div>
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Pill className="w-5 h-5 text-primary" />Key Registration Requirements</h3><ul className="space-y-3 text-sm text-foreground"><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Health Canada NDS/ANDS dossier</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>GMP compliance and inspections</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Bilingual labelling (English/French) where required</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>CADTH evidence package for public-plan launches</span></li><li className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0"><Building2 className="w-4 h-4" /></span><span className="font-medium">Canadian importer / DIN holder typically required</span></li></ul></div>
          </div>
        </div></section>

        <section className="section-padding py-16" id="distribution-channels"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Drug Distribution Channels in Canada</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Wholesale, retail pharmacy, and hospital/specialty channels serve both public and private payers.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-primary" />Retail Pharmacy / Private</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p>Community pharmacy remains the primary outpatient channel, supported by national wholesalers.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Shoppers Drug Mart and peer banners</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> McKesson Canada wholesale</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Private insurance formularies</li></ul></div></div>
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-primary" />Public Plans &amp; Hospital</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p>Provincial drug plans and hospital formularies are central for many high-cost therapies.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Provincial public drug plans</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> CADTH/INESSS-informed listing</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Hospital and specialty pharmacy</li></ul></div></div>
          </div>
        </div></section>

        <section className="section-padding py-16" id="growth-drivers"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Canada Pharmaceutical Market Growth Drivers</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Specialty innovation, generics strength, and provincial access reform shape Canadian pharma growth.</p>
          <div className="grid md:grid-cols-3 gap-6">{[
            { title: 'Specialty & Oncology', desc: 'Specialty medicines continue to drive value growth across public and private plans.' },
            { title: 'Generics & Biosimilars', desc: 'Canadian generics manufacturers and biosimilar switching policies remain strategically important.' },
            { title: 'CADTH / pCPA Pathways', desc: 'HTA and joint negotiation frameworks influence launch sequencing and pricing.' },
            { title: 'Metabolic Demand', desc: 'Diabetes and obesity therapies are reshaping primary-care and specialty budgets.' },
            { title: 'Quebec & Provincial Nuance', desc: 'INESSS and provincial formularies require market-by-market access planning.' },
            { title: 'Cross-Border Dynamics', desc: 'Proximity to the US shapes manufacturing, talent, and commercial strategies.' },
          ].map((d) => (<div key={d.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{d.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-16" id="bionixus-support"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">How BioNixus Supports Pharma Companies in Canada</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            BioNixus supports pharma and biotech programmes in Canada and globally. For company-level programmes, see our{' '}
            <Link to="/pharmaceutical-market-research-canada" className="text-primary hover:underline font-medium">market research company for Canada pharma</Link>. We help with:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">{[
            { title: 'Physician Surveys & KOL Mapping', desc: 'Research with Canadian physicians across provincial systems and specialty centres.' },
            { title: 'Market Access & CADTH Strategy', desc: 'Stakeholder research aligned to Health Canada, CADTH/INESSS, and provincial payer realities.' },
            { title: 'Competitive Intelligence', desc: 'Launch tracking and channel monitoring across priority Canadian therapeutic categories.' },
            { title: 'Market Entry & Expansion', desc: 'Indication prioritisation and go-to-market planning for Canadian launches.' },
          ].map((s) => (<div key={s.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{s.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p></div>))}</div>
          <p className="text-muted-foreground leading-relaxed mt-8 max-w-4xl">
            Explore our <Link to="/healthcare-market-research" className="text-primary hover:underline">healthcare market research services</Link> or contact our{' '}
            <Link to="/healthcare-market-research/canada" className="text-primary hover:underline">Canada pharmaceutical market research team</Link>.
          </p>
        </div></section>

        <section className="section-padding py-16" id="peer-directories"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Pharmaceutical companies in other major markets</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">Compare the Canadian pharmaceutical industry with BioNixus company directories for peer markets.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link to="/pharmaceutical-companies-usa" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Pharmaceutical companies in USA <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/pharmaceutical-companies-uk" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Pharmaceutical companies in UK <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/pharmaceutical-companies-germany" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Pharmaceutical companies in Germany <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/pharmaceutical-companies-brazil" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Pharmaceutical companies in Brazil <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/insights/top-global-healthcare-market-research-companies-2026" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Healthcare market research companies <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/insights/top-healthcare-market-research-companies-canada-2026" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Canada healthcare MR companies 2026 <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
          </div>
        </div></section>

        <PharmaCompaniesFaqSection items={faqItems} />
        <PharmaCompaniesGlobalHubLinks country="canada" />
        <section className="section-padding py-12" id="methodology"><div className="container-wide max-w-5xl mx-auto"><div className="bg-card border border-border rounded-xl p-8"><h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" />Data Sources &amp; Methodology</h2><p className="text-sm text-muted-foreground leading-relaxed mb-4">This guide aggregates publicly available information from:</p><ul className="text-sm text-muted-foreground space-y-2 mb-6"><li>Health Canada and CADTH public materials</li><li>Company filings and investor disclosures</li><li>Wholesaler and pharmacy channel disclosures</li><li>BioNixus primary research with Canadian healthcare stakeholders (2024–2026)</li></ul><p className="text-sm text-muted-foreground leading-relaxed">For customised market intelligence on Canada, <Link to="/contact" className="text-primary hover:underline">contact our team</Link>.</p></div></div></section>
        </ReportContentWithAside>
        <ReportConsultationBand config={PHARMA_CONVERSION} />
        </main>
      <Footer />
      {past70Percent ? (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border shadow-lg p-4">
          <div className="container-wide max-w-3xl mx-auto">
            <ConversionCTA variant="talk-to-research" market="Canada" ctaId="pharma_companies_canada_scroll70" ctaLocation="scroll_70_percent" className="border-0 p-0 text-left md:flex md:items-center md:justify-between md:gap-4" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CanadaPharmaCompanies;
