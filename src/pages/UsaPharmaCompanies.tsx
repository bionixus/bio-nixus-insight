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

const PHARMA_CONVERSION = getPharmaGuideConfig('usa');

interface PharmaCompany {
  name: string;
  hq: string;
  type: 'Local Manufacturer' | 'MNC Office' | 'Distributor' | 'Regional';
  therapeuticAreas: string;
  notes: string;
}

const pharmaCompanies: PharmaCompany[] = [
  { name: 'Pfizer', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Oncology, vaccines, inflammation, rare diseases', notes: 'US HQ; major innovator and vaccine franchise' },
  { name: 'Johnson & Johnson (Janssen)', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Oncology, immunology, neuroscience, medtech', notes: 'Broad pharma + medtech footprint' },
  { name: 'Merck & Co. (MSD)', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Oncology, vaccines, infectious disease', notes: 'Keytruda-led oncology franchise' },
  { name: 'AbbVie', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Immunology, oncology, neuroscience, aesthetics', notes: 'Immunology and aesthetics leadership' },
  { name: 'Eli Lilly', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Diabetes, obesity, oncology, neuroscience', notes: 'GLP-1 and metabolic growth leader' },
  { name: 'Bristol Myers Squibb', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Oncology, haematology, immunology, cardiovascular', notes: 'Oncology and specialty focus' },
  { name: 'Amgen', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Oncology, bone health, inflammation, biosimilars', notes: 'Biotech major; biosimilars expanding' },
  { name: 'Gilead Sciences', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'HIV, antiviral, oncology', notes: 'Antiviral and oncology portfolio' },
  { name: 'Regeneron', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Ophthalmology, immunology, oncology', notes: 'Antibody platform; Dupixent partnership' },
  { name: 'Vertex Pharmaceuticals', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Cystic fibrosis, rare diseases', notes: 'CF franchise; pipeline expansion' },
  { name: 'Moderna', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Vaccines, mRNA therapeutics', notes: 'mRNA vaccine platform' },
  { name: 'Biogen', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Neuroscience, MS, Alzheimer\'s', notes: 'Neuroscience-focused biotech' },
  { name: 'Novartis', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, immunology, cardiovascular, gene therapy', notes: 'Major US commercial and manufacturing presence' },
  { name: 'Roche / Genentech', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, haematology, neuroscience, diagnostics', notes: 'Genentech as US research/commercial hub' },
  { name: 'Sanofi', hq: 'France', type: 'MNC Office', therapeuticAreas: 'Immunology, vaccines, rare diseases, diabetes', notes: 'Strong US specialty and vaccine presence' },
  { name: 'AstraZeneca', hq: 'UK / Sweden', type: 'MNC Office', therapeuticAreas: 'Oncology, respiratory, CVRM, rare diseases', notes: 'Major US oncology and respiratory footprint' },
  { name: 'GSK (GlaxoSmithKline)', hq: 'UK', type: 'MNC Office', therapeuticAreas: 'Vaccines, respiratory, HIV, specialty', notes: 'Vaccine and specialty presence in US' },
  { name: 'Novo Nordisk', hq: 'Denmark', type: 'MNC Office', therapeuticAreas: 'Diabetes, obesity, rare diseases', notes: 'GLP-1 franchise driving US growth' },
  { name: 'Takeda', hq: 'Japan', type: 'MNC Office', therapeuticAreas: 'GI, rare diseases, oncology, plasma', notes: 'US specialty and plasma focus' },
  { name: 'Bayer', hq: 'Germany', type: 'MNC Office', therapeuticAreas: 'Cardiology, oncology, women\'s health, consumer', notes: 'US pharma and consumer health' },
  { name: 'Boehringer Ingelheim', hq: 'Germany', type: 'MNC Office', therapeuticAreas: 'CVRM, respiratory, oncology', notes: 'Jardiance franchise; large US operations' },
  { name: 'Daiichi Sankyo', hq: 'Japan', type: 'MNC Office', therapeuticAreas: 'Oncology (ADCs), cardiovascular', notes: 'Enhertu-led US oncology growth' },
  { name: 'Astellas', hq: 'Japan', type: 'MNC Office', therapeuticAreas: 'Oncology, urology, transplant', notes: 'Xtandi and cell therapy investment' },
  { name: 'Teva Pharmaceuticals USA', hq: 'Israel', type: 'MNC Office', therapeuticAreas: 'Generics, biosimilars, CNS specialty', notes: 'Largest US generics supplier' },
  { name: 'Viatris', hq: 'USA', type: 'Local Manufacturer', therapeuticAreas: 'Generics, biosimilars, established brands', notes: 'Mylan-Upjohn merged portfolio' },
  { name: 'McKesson', hq: 'USA', type: 'Distributor', therapeuticAreas: 'Wholesale distribution, specialty pharmacy', notes: 'Leading US pharmaceutical wholesaler' },
  { name: 'Cencora (AmerisourceBergen)', hq: 'USA', type: 'Distributor', therapeuticAreas: 'Wholesale distribution, specialty', notes: 'Big Three wholesaler' },
  { name: 'Cardinal Health', hq: 'USA', type: 'Distributor', therapeuticAreas: 'Wholesale distribution, specialty', notes: 'Big Three wholesaler and specialty services' },
];

const faqItems = [
  { q: 'How many major pharmaceutical companies operate in the USA?', a: 'The USA hosts the densest concentration of global pharmaceutical and biotech headquarters. This guide highlights 20+ major manufacturers and biotech firms plus the Big Three wholesalers (McKesson, Cencora, Cardinal Health) that dominate national distribution.' },
  { q: 'What is the size of the US pharmaceutical market?', a: 'Public estimates commonly place US prescription pharmaceutical spending in the USD 600 billion-plus range — the largest national market worldwide. Specialty, oncology, and metabolic (including GLP-1) categories drive disproportionate value growth.' },
  { q: 'Who regulates pharmaceuticals in the United States?', a: 'The FDA oversees drug approval, manufacturing quality, labelling, and pharmacovigilance. CMS shapes Medicare and Medicaid coverage and reimbursement, while commercial insurers and PBMs control much of private-sector formulary access.' },
  { q: 'How do drugs reach patients in the USA?', a: 'Most prescription medicines flow through national wholesalers (McKesson, Cencora, Cardinal Health) into retail chains, independent pharmacies, hospitals, and specialty pharmacies. Specialty products increasingly use limited-distribution and specialty pharmacy channels.' },
  { q: 'Do foreign companies need a local presence to sell in the USA?', a: 'Foreign manufacturers typically establish a US affiliate or partner for FDA submissions, labelling, pharmacovigilance, and commercial operations. Distribution agreements with wholesalers and specialty pharmacies are standard for national reach.' },
  { q: 'Which therapeutic areas dominate US pharma growth?', a: 'Oncology, immunology, rare diseases, and metabolic diseases (notably GLP-1 obesity/diabetes therapies) are among the strongest growth drivers. Vaccines and infectious disease remain strategically important for several majors.' },
  { q: 'What are the largest pharmaceutical companies in the USA by revenue?', a: 'By 2026 US-market revenue, the leaders are Eli Lilly, Pfizer, Merck & Co., AbbVie, Johnson & Johnson, Bristol Myers Squibb, Amgen, and Gilead among US-headquartered firms — with Novo Nordisk, Roche/Genentech, AstraZeneca, and Novartis the largest foreign players by US sales.' },
  { q: 'How is the Inflation Reduction Act changing US pharma?', a: 'The IRA introduced Medicare price negotiation for selected high-spend drugs, a $2,000 Part D out-of-pocket cap, and inflation rebates. Manufacturers are responding with revised launch sequencing, indication strategies, and portfolio decisions weighted toward earlier lifecycle value capture.' },
];

const TOP_10_US_PHARMA: { name: string; note: string }[] = [
  { name: 'Eli Lilly', note: 'GLP-1 franchise (Mounjaro, Zepbound) has made Lilly the most valuable pharma company globally' },
  { name: 'Pfizer', note: 'broadest US commercial infrastructure; oncology and vaccine anchor' },
  { name: 'Merck & Co. (MSD)', note: 'Keytruda remains the world\'s top-selling drug' },
  { name: 'AbbVie', note: 'Skyrizi and Rinvoq successfully replaced Humira revenue' },
  { name: 'Johnson & Johnson', note: 'diversified pharma + medtech leader' },
  { name: 'Novo Nordisk (US)', note: 'Ozempic/Wegovy drive the largest foreign-company US franchise' },
  { name: 'Bristol Myers Squibb', note: 'oncology, haematology, and cardiovascular specialty depth' },
  { name: 'Amgen', note: 'biotech pioneer with expanding biosimilar and obesity pipeline' },
  { name: 'AstraZeneca (US)', note: 'fastest-growing large-cap oncology portfolio' },
  { name: 'Gilead Sciences', note: 'HIV leadership plus growing oncology franchise' },
];

const UsaPharmaCompanies = () => {
  const past70Percent = useScrollThreshold(70);
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const citationUrl = 'https://www.bionixus.com/pharmaceutical-companies-usa';

  const ogTitle = 'Top Pharmaceutical Companies in USA (2026 Ranked List)';
  const ogDescription = 'Complete 2026 list of pharmaceutical companies in the USA — Big Pharma, biotech, wholesalers, FDA/CMS context. Research by BioNixus.';
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Top Pharmaceutical Companies in USA (2026 Ranked List)</title>
        <meta name="description" content="Complete 2026 list of pharmaceutical companies in the USA — Big Pharma, biotech, wholesalers, FDA/CMS context. Research by BioNixus." />
        <link rel="canonical" href={citationUrl} />
        <script type="application/ld+json">{JSON.stringify(buildPharmaCompaniesItemListLd(citationUrl, pharmaCompanies.map((c) => c.name)))}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', image: 'https://www.bionixus.com/og-image.png', headline: 'Pharmaceutical Companies in the USA: Complete Industry Guide 2026', description: 'Guide to pharmaceutical companies in the United States — major manufacturers, biotech leaders, wholesalers, FDA/CMS landscape, and market structure for 2026.', url: citationUrl, datePublished: '2026-08-14', dateModified: '2026-08-22', author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' }, publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' } })}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' }, { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.bionixus.com/resources' }, { '@type': 'ListItem', position: 3, name: 'Pharmaceutical Companies in the USA', item: citationUrl }] })}</script>
        <script type="application/ld+json">{JSON.stringify(buildPharmaCompaniesFaqLd(citationUrl, faqItems))}</script>
      </Helmet>
      <OpenGraphMeta
        title={ogTitle}
        description={ogDescription}
        image="https://www.bionixus.com/og-image.png"
        url={citationUrl}
        type="article"
        locale={language === 'ar' ? 'ar_SA' : 'en_US'}
        alternateLocales={language === 'ar' ? ['en_US'] : ['ar_SA']}
      />
      <Navbar />
      <ReportReadingProgress progressId="pharma-guide-rp-usa" />
      <main>
        <div className="section-padding pt-24 pb-4"><div className="container-wide"><div className="flex items-center gap-2 text-sm text-muted-foreground mb-6"><Link to={basePath} className="hover:text-primary transition-colors">Home</Link><span>/</span><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link><span>/</span><span className="text-foreground">Pharmaceutical Companies in the USA</span></div></div></div>

        <section className="section-padding pt-0 pb-12"><div className="container-wide max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"><Building2 className="w-4 h-4" />Industry Guide 2026</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">Pharmaceutical Companies in the USA</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">The United States is the world&apos;s largest pharmaceutical market — commonly cited in the USD 600 billion-plus range for prescription medicines — with headquarters and major commercial operations for most global innovators. Pharmaceutical companies in the USA set the pace for specialty, oncology, and metabolic launches — start from <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline">healthcare market research</Link> for programme scoping. This guide covers major manufacturers, biotech leaders, wholesalers, FDA/CMS dynamics, distribution channels, and strategic opportunities.</p>
          <p className="text-sm text-muted-foreground">Last updated: August 2026 &middot; Sources: FDA, CMS, company filings, BioNixus research</p>
          <div className="mt-8 p-5 bg-muted/50 border border-border rounded-xl"><div className="flex items-start gap-3"><Share2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground text-sm mb-1">Cite this guide</p><p className="text-sm text-muted-foreground leading-relaxed">BioNixus. &quot;Pharmaceutical Companies in the USA: Complete Industry Guide 2026.&quot; BioNixus Healthcare Market Research, Aug. 2026, <a href={citationUrl} className="text-primary hover:underline break-all">{citationUrl}</a>.<br />Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CC BY 4.0</a> — free to share and adapt with attribution.</p></div></div></div>
          <ReportEarlyCtaBar config={PHARMA_CONVERSION} className="mt-8" /></div></section>

        <section className="section-padding py-12 bg-primary text-primary-foreground"><div className="container-wide max-w-5xl mx-auto"><div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><p className="text-3xl md:text-4xl font-display font-bold">$600B+</p><p className="text-primary-foreground/70 text-sm mt-1">Rx pharma market (ballpark)</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">340M+</p><p className="text-primary-foreground/70 text-sm mt-1">Population</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">FDA</p><p className="text-primary-foreground/70 text-sm mt-1">Primary drug regulator</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">CMS</p><p className="text-primary-foreground/70 text-sm mt-1">Federal payer / coverage</p></div>
        </div></div></section>

        <PharmaCompaniesQuickAnswer
          country="usa"
          marketSize="approximately USD 600 billion-plus (prescription medicines, established public ballpark)"
          growthRate="mature volume with specialty and GLP-1-led value growth"
          regulatorLabel="FDA and CMS"
          topCompanyNames={pharmaCompanies.map((c) => c.name)}
        />

        <ReportContentWithAside config={PHARMA_CONVERSION}>
        <section className="section-padding py-8 bg-muted/30"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
          <div className="grid md:grid-cols-2 gap-2">
            <a href="#market-overview" className="text-sm text-primary hover:underline flex items-center gap-2"><BarChart3 className="w-4 h-4" /> USA Pharmaceutical Market Overview</a>
            <a href="#top-companies" className="text-sm text-primary hover:underline flex items-center gap-2"><Building2 className="w-4 h-4" /> Top Pharmaceutical Companies</a>
            <a href="#companies-by-category" className="text-sm text-primary hover:underline flex items-center gap-2"><Users className="w-4 h-4" /> Companies by Category</a>
            <a href="#regulatory-landscape" className="text-sm text-primary hover:underline flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Regulatory Landscape (FDA / CMS)</a>
            <a href="#distribution-channels" className="text-sm text-primary hover:underline flex items-center gap-2"><Truck className="w-4 h-4" /> Distribution Channels</a>
            <a href="#growth-drivers" className="text-sm text-primary hover:underline flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Growth Drivers</a>
            <a href="#bionixus-support" className="text-sm text-primary hover:underline flex items-center gap-2"><Globe className="w-4 h-4" /> How BioNixus Supports Pharma in the USA</a>
            <a href="#faq" className="text-sm text-primary hover:underline flex items-center gap-2"><BookOpen className="w-4 h-4" /> Frequently Asked Questions</a>
          </div>
        </div></section>

        <section className="section-padding py-16" id="market-overview"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">USA Pharmaceutical Market Overview</h2>
          <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
            <p>The US pharmaceutical market is the <strong className="text-foreground">largest globally</strong>, with prescription spend commonly framed in the <strong className="text-foreground">USD 600 billion-plus</strong> range. Growth is concentrated in specialty medicines, oncology, immunology, and metabolic therapies (including GLP-1s), while traditional primary-care categories remain more mature.</p>
            <p>Regulation is led by the <strong className="text-foreground">FDA</strong> (approval, manufacturing quality, labelling) and coverage policy by <strong className="text-foreground">CMS</strong> (Medicare, Medicaid) alongside commercial PBMs and insurers. Distribution is dominated by the &quot;Big Three&quot; wholesalers and specialty pharmacy networks.</p>
            <p>For comparative country programmes, see our <Link to="/healthcare-market-research" className="text-primary hover:underline">healthcare market research hub</Link> and peer directories for the UK, Germany, Brazil, and Canada.</p>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="top-companies"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Top Pharmaceutical Companies in the USA</h2>
          <div className="bg-card border border-border rounded-xl p-6 mb-8 max-w-4xl">
            <h3 className="text-lg font-display font-semibold text-foreground mb-4">Top 10 pharmaceutical companies in the USA (2026, by US-market revenue)</h3>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-foreground">
              {TOP_10_US_PHARMA.map((c) => (
                <li key={c.name}><strong>{c.name}</strong> — <span className="text-muted-foreground">{c.note}</span></li>
              ))}
            </ol>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">The following table lists major pharmaceutical companies operating in the USA — including US-headquartered manufacturers, foreign multinational affiliates, and national wholesalers.</p>
          <div className="overflow-x-auto rounded-xl border border-border"><table className="w-full text-sm"><thead><tr className="bg-primary/5 border-b border-border"><th className="text-left px-4 py-3 font-semibold text-foreground">Company</th><th className="text-left px-4 py-3 font-semibold text-foreground">HQ</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Type</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden lg:table-cell">Therapeutic Areas</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden xl:table-cell">Notes</th></tr></thead><tbody>
            {pharmaCompanies.map((c, i) => (<tr key={c.name} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}><td className="px-4 py-3 font-medium text-foreground">{c.name}</td><td className="px-4 py-3 text-muted-foreground">{c.hq}</td><td className="px-4 py-3 hidden md:table-cell"><span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${c.type === 'Local Manufacturer' ? 'bg-green-50 text-green-700' : c.type === 'MNC Office' ? 'bg-blue-50 text-blue-700' : c.type === 'Regional' ? 'bg-amber-50 text-amber-700' : 'bg-purple-50 text-purple-700'}`}>{c.type}</span></td><td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">{c.therapeuticAreas}</td><td className="px-4 py-3 text-muted-foreground text-xs hidden xl:table-cell">{c.notes}</td></tr>))}
          </tbody></table></div>
          <PharmaDirectoryBridge
            countryName="United States"
            countryDisplay="the USA"
            directorySlug="usa"
            ctaId="pharma_companies_usa_after_table"
          />
        </div></section>

        <ReportMidPageCta config={PHARMA_CONVERSION} />

        <section className="section-padding py-16" id="companies-by-category"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">List of Pharmaceutical Companies in the USA by Category</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">US pharmaceutical companies span headquarters manufacturers, foreign multinational affiliates with large US operations, and national wholesaler/specialty pharmacy networks.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center"><Pill className="w-5 h-5 text-green-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">US-Headquartered Manufacturers</h3></div><p className="text-sm text-muted-foreground mb-4">US-headquartered innovators and biotech majors anchor the market — Pfizer, J&amp;J, Merck, AbbVie, Lilly, BMS, Amgen, Gilead, Regeneron, Vertex, Moderna, and Biogen among others.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Local Manufacturer').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-green-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center"><Globe className="w-5 h-5 text-blue-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Multinational Pharma Affiliates</h3></div><p className="text-sm text-muted-foreground mb-4">European and Japanese MNCs maintain large US commercial and manufacturing footprints (Novartis, Roche/Genentech, Sanofi, AstraZeneca, GSK, Novo Nordisk, Takeda, Bayer).</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'MNC Office').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-blue-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6 md:col-span-2"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center"><Truck className="w-5 h-5 text-purple-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Wholesalers &amp; Distribution</h3></div><p className="text-sm text-muted-foreground mb-4">McKesson, Cencora (AmerisourceBergen), and Cardinal Health dominate wholesale distribution and specialty pharmacy logistics.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Distributor').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-purple-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="regulatory-landscape"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Pharma Companies in the USA: Regulatory Landscape (FDA / CMS)</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">FDA leads drug approval and quality; CMS and commercial payers shape coverage and reimbursement.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" />Regulatory Authorities</h3><p className="text-sm text-muted-foreground leading-relaxed mb-4"><strong className="text-foreground">FDA</strong> leads approval and quality oversight; <strong className="text-foreground">CMS</strong> shapes federal coverage. Commercial payers and PBMs control most private formulary access. Pricing and access debates centre on IRA negotiation, Part D redesign, and specialty utilization management.</p><div className="space-y-3"><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Approval Pathways</p><p className="text-lg font-semibold text-foreground">NDA/BLA with priority and accelerated options</p></div><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pricing / Access Model</p><p className="text-sm text-foreground">Commercial + Medicare/Medicaid; IRA negotiation for selected drugs</p></div></div></div>
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Pill className="w-5 h-5 text-primary" />Key Registration Requirements</h3><ul className="space-y-3 text-sm text-foreground"><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>FDA CTD/eCTD dossier and manufacturing inspections</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>GMP / cGMP compliance</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Labelling and REMS where applicable</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Pharmacovigilance and post-marketing commitments</span></li><li className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0"><Building2 className="w-4 h-4" /></span><span className="font-medium">US agent / affiliate typically required for foreign applicants</span></li></ul></div>
          </div>
        </div></section>

        <section className="section-padding py-16" id="distribution-channels"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Drug Distribution Channels in the USA</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">US pharmaceutical distribution is dominated by national wholesalers feeding retail, hospital, and specialty pharmacy channels.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-primary" />Private / Commercial Channel</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p>Commercial insurance and employer plans dominate private utilisation, with PBMs managing formularies and rebates.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Retail chains and independent pharmacies</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Specialty pharmacy limited networks</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Hospital GPO purchasing</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> PBM formulary and prior authorisation</li></ul></div></div>
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-primary" />Public Payer Channel</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p>Medicare (Parts B/D), Medicaid, and VA/DoD channels are major public payers.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> CMS coverage and IRA negotiation</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> State Medicaid formularies</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> 340B and safety-net channels</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> VA/DoD procurement</li></ul></div></div>
          </div>
        </div></section>

        <section className="section-padding py-16" id="growth-drivers"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">USA Pharmaceutical Market Growth Drivers</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Specialty innovation, metabolic demand, and payer reform are reshaping the US pharmaceutical landscape.</p>
          <div className="grid md:grid-cols-3 gap-6">{[
            { title: 'Specialty & Oncology', desc: 'Specialty medicines and oncology continue to concentrate value growth and drive complex channel strategies.' },
            { title: 'Metabolic / GLP-1 Demand', desc: 'Diabetes and obesity therapies have reshaped volume, manufacturing, and payer budgets across the US market.' },
            { title: 'IRA & Payer Pressure', desc: 'Inflation Reduction Act negotiation and PBM reform debates are reshaping pricing and launch sequencing.' },
            { title: 'Biotech Innovation Clusters', desc: 'Boston, Bay Area, San Diego, and other hubs feed continuous pipeline renewal into Big Pharma portfolios.' },
            { title: 'Specialty Pharmacy', desc: 'Limited distribution and specialty pharmacy networks are critical for high-cost biologics and cell/gene therapies.' },
            { title: 'Manufacturing Resilience', desc: 'Onshoring and dual-sourcing strategies remain priorities after pandemic supply shocks.' },
          ].map((d) => (<div key={d.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{d.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-16" id="bionixus-support"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">How BioNixus Supports Pharma Companies in the USA</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            BioNixus is a healthcare market research company supporting pharma and biotech programmes in the United States and globally.
            For company-level US programmes, see our{' '}
            <Link to="/pharmaceutical-market-research-usa" className="text-primary hover:underline font-medium">
              market research company for USA pharma
            </Link>
            . We help pharma, biotech, and medtech companies with:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">{[
            { title: 'Physician Surveys & KOL Mapping', desc: 'Quantitative and qualitative research with US physicians across specialties, IDNs, and community settings.' },
            { title: 'Market Access & Payer Strategy', desc: 'CMS, commercial payer, and PBM landscape research to stress-test formulary and contracting hypotheses.' },
            { title: 'Competitive Intelligence', desc: 'Launch tracking, share-of-voice, and channel monitoring across key US therapeutic categories.' },
            { title: 'Market Entry & Expansion', desc: 'Indication prioritisation, stakeholder mapping, and go-to-market planning for US launches.' },
          ].map((s) => (<div key={s.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{s.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p></div>))}</div>
          <p className="text-muted-foreground leading-relaxed mt-8 max-w-4xl">
            For tailored healthcare research, explore our{' '}
            <Link to="/healthcare-market-research" className="text-primary hover:underline">
              healthcare market research services
            </Link>{' '}
            or contact our{' '}
            <Link to="/healthcare-market-research/united-states" className="text-primary hover:underline">
              US pharmaceutical market research team
            </Link>.
          </p>
        </div></section>

        <section className="section-padding py-16" id="peer-directories"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Pharmaceutical companies in other major markets</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">Compare the US pharmaceutical industry with BioNixus company directories for peer markets.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Link to="/pharmaceutical-companies-uk" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Pharmaceutical companies in UK <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/pharmaceutical-companies-germany" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Pharmaceutical companies in Germany <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/pharmaceutical-companies-brazil" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Pharmaceutical companies in Brazil <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/pharmaceutical-companies-canada" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Pharmaceutical companies in Canada <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/insights/top-global-healthcare-market-research-companies-2026" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Healthcare market research companies <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/insights/top-healthcare-market-research-companies-usa-2026" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">USA healthcare MR companies 2026 <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
            <Link to="/medical-device-companies-usa" className="group flex items-center justify-between gap-2 rounded-xl border border-border bg-card p-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary">Medical device companies in USA <span className="text-primary transition-transform group-hover:translate-x-1" aria-hidden>&rarr;</span></Link>
          </div>
        </div></section>

        <PharmaCompaniesFaqSection items={faqItems} />

        <PharmaCompaniesGlobalHubLinks country="usa" />
        <section className="section-padding py-12" id="methodology"><div className="container-wide max-w-5xl mx-auto"><div className="bg-card border border-border rounded-xl p-8"><h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" />Data Sources &amp; Methodology</h2><p className="text-sm text-muted-foreground leading-relaxed mb-4">This guide aggregates publicly available information from:</p><ul className="text-sm text-muted-foreground space-y-2 mb-6"><li>FDA and CMS public materials</li><li>Company 10-K / annual reports and investor disclosures</li><li>Wholesaler and specialty pharmacy channel disclosures</li><li>BioNixus primary research with US healthcare stakeholders (2024–2026)</li></ul><p className="text-sm text-muted-foreground leading-relaxed">For customised market intelligence on the USA, <Link to="/contact" className="text-primary hover:underline">contact our team</Link>.</p></div></div></section>
        </ReportContentWithAside>

        <ReportConsultationBand config={PHARMA_CONVERSION} />
        </main>
      <Footer />
      {past70Percent ? (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border shadow-lg p-4">
          <div className="container-wide max-w-3xl mx-auto">
            <ConversionCTA
              variant="talk-to-research"
              market="the USA"
              ctaId="pharma_companies_usa_scroll70"
              ctaLocation="scroll_70_percent"
              className="border-0 p-0 text-left md:flex md:items-center md:justify-between md:gap-4"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UsaPharmaCompanies;
