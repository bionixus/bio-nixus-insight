import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Share2, BookOpen, Building2, Globe, ShieldCheck, Pill, TrendingUp, BarChart3, Truck, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';

interface PharmaCompany {
  name: string;
  hq: string;
  type: 'Local Manufacturer' | 'MNC Office' | 'Distributor' | 'Regional';
  therapeuticAreas: string;
  notes: string;
}

const pharmaCompanies: PharmaCompany[] = [
  { name: 'Oman Pharmaceutical Products Co. (omanpharma)', hq: 'Oman', type: 'Local Manufacturer', therapeuticAreas: 'Multi-therapeutic, generics', notes: 'Leading local manufacturer in Oman' },
  { name: 'National Pharmaceutical Industries (NPI)', hq: 'Oman', type: 'Local Manufacturer', therapeuticAreas: 'Generics', notes: 'Muscat-based generics manufacturer' },
  { name: 'Gulf Pharma', hq: 'Oman', type: 'Local Manufacturer', therapeuticAreas: 'Oral solids, liquids', notes: 'Oman-based oral solids and liquids' },
  { name: 'Pfizer', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, vaccines, inflammation, rare diseases', notes: 'Major MOH-registered portfolio in Oman' },
  { name: 'Novartis', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, immunology, ophthalmology, cardiovascular', notes: 'Strong regional presence in Oman' },
  { name: 'Roche', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, haematology, neuroscience, diagnostics', notes: 'Leading oncology and diagnostics in Oman' },
  { name: 'Sanofi', hq: 'France', type: 'MNC Office', therapeuticAreas: 'Diabetes, vaccines, rare diseases, consumer health', notes: 'Key diabetes and vaccine franchise' },
  { name: 'AstraZeneca', hq: 'UK / Sweden', type: 'MNC Office', therapeuticAreas: 'Oncology, respiratory, cardiovascular, rare diseases', notes: 'Growing presence in Oman market' },
  { name: 'GSK (GlaxoSmithKline)', hq: 'UK', type: 'MNC Office', therapeuticAreas: 'Vaccines, respiratory, HIV, consumer health', notes: 'Vaccine and respiratory portfolio' },
  { name: 'MSD (Merck & Co.)', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, vaccines, infectious disease, diabetes', notes: 'Keytruda and vaccine programmes' },
  { name: 'Novo Nordisk', hq: 'Denmark', type: 'MNC Office', therapeuticAreas: 'Diabetes, obesity, rare diseases, haemophilia', notes: 'Insulin and GLP-1 franchise' },
  { name: 'AbbVie', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Immunology, oncology, neuroscience, aesthetics', notes: 'Immunology and specialty portfolio' },
  { name: 'Boehringer Ingelheim', hq: 'Germany', type: 'MNC Office', therapeuticAreas: 'Respiratory, cardiovascular, metabolism, oncology', notes: 'Jardiance and respiratory portfolio' },
  { name: 'Julphar', hq: 'UAE', type: 'Regional', therapeuticAreas: 'Generics, antibiotics, consumer health', notes: 'Strong Oman exports; regional generics leader' },
  { name: 'Hikma Pharmaceuticals', hq: 'Jordan / UK', type: 'Regional', therapeuticAreas: 'Injectables, generics, branded generics', notes: 'MENA-headquartered; injectables in Oman' },
  { name: 'Tabuk Pharmaceutical', hq: 'Saudi Arabia', type: 'Regional', therapeuticAreas: 'Generics, anti-infectives, gastroenterology', notes: 'GCC presence including Oman' },
  { name: 'Muscat Pharmacy', hq: 'Oman', type: 'Distributor', therapeuticAreas: 'Retail pharmacy, OTC, distribution', notes: 'Major pharmacy and distribution in Oman' },
  { name: 'Oman Medical Trading', hq: 'Oman', type: 'Distributor', therapeuticAreas: 'Medical and pharma distribution', notes: 'Medical and pharmaceutical trading' },
  { name: 'National Distribution Company', hq: 'Oman', type: 'Distributor', therapeuticAreas: 'Pharma distribution, logistics', notes: 'National-level pharma distribution' },
];

const faqItems = [
  { q: 'How many pharmaceutical companies operate in Oman?', a: 'Oman has approximately 18 pharmaceutical companies including local manufacturers (omanpharma, NPI, Gulf Pharma), multinational offices (Pfizer, Novartis, Roche, Sanofi, AstraZeneca, GSK, MSD, Novo Nordisk, AbbVie, Boehringer Ingelheim), regional players (Julphar, Hikma, Tabuk), and distributors (Muscat Pharmacy, Oman Medical Trading, National Distribution Company). The market is valued at $0.7 billion and is growing at 6.9% under Vision 2040 healthcare modernisation.' },
  { q: 'What is the size of Oman\'s pharmaceutical market?', a: 'Oman\'s pharmaceutical market is valued at approximately US$0.7 billion, with 6.9% year-over-year growth. The population is about 4.6 million with pharma spending per capita of $152. It is a smaller GCC market but strategically important, with ~90% of pharmaceuticals imported and local manufacturing expanding with government incentives.' },
  { q: 'How do you register a pharmaceutical product with MOH DGPA in Oman?', a: 'Drug registration in Oman is overseen by the Ministry of Health Directorate General of Pharmaceutical Affairs (MOH DGPA). The registration process typically takes 10–18 months and requires a 5-year renewal. Submissions follow GCC harmonisation where applicable; companies need a local authorised representative, GMP certificates, stability data, and Arabic labelling.' },
  { q: 'How does Vision 2040 affect Oman\'s pharmaceutical sector?', a: 'Vision 2040 drives healthcare modernisation in Oman, including investment in hospital infrastructure, digital health adoption, and incentives for local pharmaceutical manufacturing. Government support for domestic production and growing insurance coverage are expanding both public and private pharmaceutical utilisation.' },
  { q: 'Is local pharmaceutical manufacturing required in Oman?', a: 'Local manufacturing is not legally required but is encouraged through government incentives. Approximately 90% of pharmaceuticals are imported; Oman has a small but growing local base (omanpharma, NPI, Gulf Pharma) with Vision 2040 supporting expansion of domestic production.' },
  { q: 'Do I need a local partner to sell pharmaceuticals in Oman?', a: 'Yes, foreign pharmaceutical companies typically need a local authorised representative to handle MOH DGPA regulatory submissions, in-country logistics, and pharmacovigilance. This is standard for market access in Oman and the wider GCC.' },
];

const OmanPharmaCompanies = () => {
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const citationUrl = 'https://www.bionixus.com/pharmaceutical-companies-oman';

  const ogTitle = "Pharmaceutical Companies in Oman — Complete Industry Guide 2026";
  const ogDescription = "Comprehensive guide: 18+ pharmaceutical companies in Oman, $0.7B market data, MOH DGPA registration, Vision 2040, and market outlook.";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pharmaceutical Companies in Oman | Industry Guide 2026 | BioNixus</title>
        <meta name="description" content="Complete guide to pharmaceutical companies in Oman for 2026: top pharma companies list, $0.7B market size, MOH DGPA drug registration, Vision 2040, and industry outlook." />
        <meta name="keywords" content="pharmaceutical companies in Oman, Oman pharmaceutical companies, pharma companies in Oman, top pharmaceutical companies in Oman, list of pharmaceutical companies in Oman, MOH DGPA drug registration, Oman pharma market, Vision 2040 pharmaceutical" />
        <link rel="canonical" href={citationUrl} />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Pharmaceutical Companies in Oman: Complete Industry Guide 2026', description: 'Comprehensive guide to pharmaceutical companies operating in Oman — local manufacturers, MNC offices, distributors, $0.7B market data, MOH DGPA regulatory landscape, and Vision 2040 outlook.', url: citationUrl, datePublished: '2026-02-15', dateModified: '2026-02-15', author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' }, publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' } })}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' }, { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.bionixus.com/resources' }, { '@type': 'ListItem', position: 3, name: 'Pharmaceutical Companies in Oman' }] })}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) })}</script>
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
      <main>
        <div className="section-padding pt-24 pb-4"><div className="container-wide"><div className="flex items-center gap-2 text-sm text-muted-foreground mb-6"><Link to={basePath} className="hover:text-primary transition-colors">Home</Link><span>/</span><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link><span>/</span><span className="text-foreground">Pharmaceutical Companies in Oman</span></div></div></div>

        <section className="section-padding pt-0 pb-12"><div className="container-wide max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"><Building2 className="w-4 h-4" />Industry Guide 2026</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">Pharmaceutical Companies in Oman</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">A comprehensive guide to the pharmaceutical industry in Oman — a smaller GCC market that is strategically important. Covering major pharma companies, MOH DGPA regulatory framework, Vision 2040 healthcare modernisation, market data ($0.7B, 6.9% growth), distribution channels, and strategic opportunities.</p>
          <p className="text-sm text-muted-foreground">Last updated: February 2026 &middot; Sources: MOH DGPA, IQVIA MEA, company filings</p>
          <div className="mt-8 p-5 bg-muted/50 border border-border rounded-xl"><div className="flex items-start gap-3"><Share2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground text-sm mb-1">Cite this guide</p><p className="text-sm text-muted-foreground leading-relaxed">BioNixus. &quot;Pharmaceutical Companies in Oman: Complete Industry Guide 2026.&quot; BioNixus Healthcare Market Research, Feb. 2026, <a href={citationUrl} className="text-primary hover:underline break-all">{citationUrl}</a>.<br />Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CC BY 4.0</a> — free to share and adapt with attribution.</p></div></div></div>
        </div></section>

        <section className="section-padding py-12 bg-primary text-primary-foreground"><div className="container-wide max-w-5xl mx-auto"><div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><p className="text-3xl md:text-4xl font-display font-bold">$0.7B</p><p className="text-primary-foreground/70 text-sm mt-1">Pharmaceutical market value</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">6.9%</p><p className="text-primary-foreground/70 text-sm mt-1">Year-over-year growth</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">4.6M</p><p className="text-primary-foreground/70 text-sm mt-1">Population</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">$152</p><p className="text-primary-foreground/70 text-sm mt-1">Pharma spending per capita</p></div>
        </div></div></section>

        <section className="section-padding py-8 bg-muted/30"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
          <div className="grid md:grid-cols-2 gap-2">
            <a href="#market-overview" className="text-sm text-primary hover:underline flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Oman Pharmaceutical Market Overview</a>
            <a href="#top-companies" className="text-sm text-primary hover:underline flex items-center gap-2"><Building2 className="w-4 h-4" /> Top Pharmaceutical Companies</a>
            <a href="#companies-by-category" className="text-sm text-primary hover:underline flex items-center gap-2"><Users className="w-4 h-4" /> Companies by Category</a>
            <a href="#regulatory-landscape" className="text-sm text-primary hover:underline flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> MOH DGPA Regulatory Landscape</a>
            <a href="#distribution-channels" className="text-sm text-primary hover:underline flex items-center gap-2"><Truck className="w-4 h-4" /> Distribution Channels</a>
            <a href="#growth-drivers" className="text-sm text-primary hover:underline flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Vision 2040 &amp; Growth Drivers</a>
            <a href="#bionixus-support" className="text-sm text-primary hover:underline flex items-center gap-2"><Globe className="w-4 h-4" /> How BioNixus Supports Pharma in Oman</a>
            <a href="#faq" className="text-sm text-primary hover:underline flex items-center gap-2"><BookOpen className="w-4 h-4" /> Frequently Asked Questions</a>
          </div>
        </div></section>

        <section className="section-padding py-16" id="market-overview"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Oman Pharmaceutical Market Overview</h2>
          <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
            <p>Oman&apos;s pharmaceutical market is a <strong className="text-foreground">smaller GCC market but strategically important</strong>, valued at approximately <strong className="text-foreground">US$0.7 billion</strong>, growing at <strong className="text-foreground">6.9% year-over-year</strong>. With a population of 4.6 million and per-capita pharmaceutical spending of <strong className="text-foreground">$152</strong>, Oman is undergoing healthcare modernisation under <strong className="text-foreground">Vision 2040</strong>, with approximately <strong className="text-foreground">90% of pharmaceuticals imported</strong> and local manufacturing expanding with government incentives.</p>
            <p>Vision 2040 targets healthcare sector development, digital health adoption, and support for local pharmaceutical production. Chronic disease burden, growing insurance coverage, and medical tourism from the region are key demand drivers. The market is regulated by the <strong className="text-foreground">Ministry of Health Directorate General of Pharmaceutical Affairs (MOH DGPA)</strong>, with pricing moving toward the GCC unified pricing framework (in progress).</p>
            <p>For a broader regional comparison, see our <Link to="/mena-pharma-market-data" className="text-primary hover:underline">MENA Pharmaceutical Market Data 2026</Link> and <Link to="/gcc-market-access-guide" className="text-primary hover:underline">GCC Pharmaceutical Market Access Guide</Link>.</p>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="top-companies"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Top Pharmaceutical Companies in Oman</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">The following table lists the major pharmaceutical companies operating in Oman — including local manufacturers, multinational corporation offices, regional players, and leading distributors.</p>
          <div className="overflow-x-auto rounded-xl border border-border"><table className="w-full text-sm"><thead><tr className="bg-primary/5 border-b border-border"><th className="text-left px-4 py-3 font-semibold text-foreground">Company</th><th className="text-left px-4 py-3 font-semibold text-foreground">HQ</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Type</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden lg:table-cell">Therapeutic Areas</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden xl:table-cell">Notes</th></tr></thead><tbody>
            {pharmaCompanies.map((c, i) => (<tr key={c.name} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}><td className="px-4 py-3 font-medium text-foreground">{c.name}</td><td className="px-4 py-3 text-muted-foreground">{c.hq}</td><td className="px-4 py-3 hidden md:table-cell"><span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${c.type === 'Local Manufacturer' ? 'bg-green-50 text-green-700' : c.type === 'MNC Office' ? 'bg-blue-50 text-blue-700' : c.type === 'Regional' ? 'bg-amber-50 text-amber-700' : 'bg-purple-50 text-purple-700'}`}>{c.type}</span></td><td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">{c.therapeuticAreas}</td><td className="px-4 py-3 text-muted-foreground text-xs hidden xl:table-cell">{c.notes}</td></tr>))}
          </tbody></table></div>
        </div></section>

        <section className="section-padding py-16" id="companies-by-category"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">List of Pharmaceutical Companies in Oman by Category</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Oman pharmaceutical companies span local manufacturers (omanpharma, NPI, Gulf Pharma), multinational offices, regional players with strong Oman presence, and major distributors.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center"><Pill className="w-5 h-5 text-green-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Local Manufacturers</h3></div><p className="text-sm text-muted-foreground mb-4">Oman has a small but growing local manufacturing base. Oman Pharmaceutical Products Co. (omanpharma) is the leading local manufacturer; National Pharmaceutical Industries (NPI) is Muscat-based generics; Gulf Pharma produces oral solids and liquids. Vision 2040 incentives support expansion of domestic production.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Local Manufacturer').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-green-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center"><Globe className="w-5 h-5 text-blue-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Multinational Pharma Offices</h3></div><p className="text-sm text-muted-foreground mb-4">Major global pharmaceutical companies maintain presence in Oman. MNCs dominate the innovator drug segment and drive adoption of advanced therapies. Key players include Pfizer, Novartis, Roche, Sanofi, AstraZeneca, GSK, MSD, Novo Nordisk, AbbVie, and Boehringer Ingelheim.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'MNC Office').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-blue-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center"><Building2 className="w-5 h-5 text-amber-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Regional Pharma Companies</h3></div><p className="text-sm text-muted-foreground mb-4">Regional pharmaceutical companies play important roles in Oman: Julphar with strong Oman exports, Hikma Pharmaceuticals, and Tabuk Pharmaceutical. They benefit from GCC regulatory harmonisation.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Regional').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center"><Truck className="w-5 h-5 text-purple-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Distributors</h3></div><p className="text-sm text-muted-foreground mb-4">Key distributors in Oman include Muscat Pharmacy, Oman Medical Trading, and National Distribution Company, serving both government and private channels as insurance expansion grows the private sector.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Distributor').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-purple-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="regulatory-landscape"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Pharma Companies in Oman: MOH DGPA Regulatory Landscape</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">The Ministry of Health Directorate General of Pharmaceutical Affairs (MOH DGPA) oversees pharmaceutical registration, quality control, and market access in Oman.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" />Regulatory Authority</h3><p className="text-sm text-muted-foreground leading-relaxed mb-4">The <strong className="text-foreground">Ministry of Health Directorate General of Pharmaceutical Affairs (MOH DGPA)</strong> oversees pharmaceutical registration, quality control, pharmacovigilance, and import licensing. Oman is moving toward <strong className="text-foreground">GCC unified pricing framework</strong> (in progress).</p><div className="space-y-3"><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Registration Timeline</p><p className="text-lg font-semibold text-foreground">10&ndash;18 months</p></div><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Renewal Period</p><p className="text-lg font-semibold text-foreground">5 years</p></div><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pricing Model</p><p className="text-sm text-foreground">GCC unified pricing framework (in progress)</p></div></div></div>
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Pill className="w-5 h-5 text-primary" />Key Registration Requirements</h3><ul className="space-y-3 text-sm text-foreground"><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Dossier submission via MOH DGPA (CTD format where applicable)</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>GMP certificates from recognised authorities</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Stability data for Zone IVB climate conditions</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Arabic labelling mandatory on all products</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Clinical trial data and bioequivalence studies (generics)</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Certificate of Pharmaceutical Product (CPP)</span></li><li className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0"><Building2 className="w-4 h-4" /></span><span className="font-medium">Local authorised representative mandatory</span></li></ul></div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">Vision 2040 &amp; Local Manufacturing Incentives</h3><p className="text-sm text-muted-foreground leading-relaxed">Under Vision 2040, Oman supports healthcare modernisation and local pharmaceutical manufacturing incentives. Approximately 90% of the market is import-dependent; government programmes aim to expand domestic production. For complete GCC registration details, see our <Link to="/gcc-market-access-guide" className="text-primary hover:underline">GCC Pharmaceutical Market Access Guide</Link>.</p></div>
        </div></section>

        <section className="section-padding py-16" id="distribution-channels"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Drug Distribution Channels in Oman</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Oman&apos;s pharmaceutical distribution is dominated by government healthcare (free for Omani nationals), with the private sector growing as insurance expands.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-primary" />Government Channel (Dominant)</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p>Government healthcare is dominant, with <strong className="text-foreground">free care for Omani nationals</strong>. MOH hospitals, Royal Hospital, and Sultan Qaboos University Hospital form the core of public-sector procurement and dispensing.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> MOH hospitals and primary care</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Royal Hospital</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Sultan Qaboos University Hospital</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Tender-based procurement</li></ul></div></div>
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-primary" />Private Sector (Growing)</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p>The private sector is growing with insurance expansion. Distributors such as Muscat Pharmacy, Oman Medical Trading, and National Distribution Company serve both channels.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Growing insurance coverage driving private utilisation</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Private hospitals and clinics</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Retail pharmacy and OTC</li></ul></div></div>
          </div>
        </div></section>

        <section className="section-padding py-16" id="growth-drivers"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Oman Pharmaceutical Market Growth Drivers</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Vision 2040 and structural factors are driving growth in Oman&apos;s pharmaceutical sector.</p>
          <div className="grid md:grid-cols-3 gap-6">{[
            { title: 'Vision 2040 Healthcare Modernisation', desc: 'Oman\'s national plan prioritises healthcare modernisation, hospital infrastructure, digital health adoption, and support for local pharmaceutical manufacturing.' },
            { title: 'Local Manufacturing Incentives', desc: 'Government incentives aim to expand domestic production, reducing import dependency from ~90% and creating opportunities for local and regional manufacturers.' },
            { title: 'Growing Insurance Coverage', desc: 'Expansion of health insurance is driving private-sector pharmaceutical utilisation and creating reimbursement dynamics alongside the dominant government channel.' },
            { title: 'Chronic Disease Burden', desc: 'Rising prevalence of diabetes, cardiovascular disease, and other chronic conditions drives sustained demand for metabolic and specialty therapies.' },
            { title: 'Medical Tourism from Region', desc: 'Oman attracts medical tourism from the region, supporting demand for quality healthcare and pharmaceutical services.' },
            { title: 'Digital Health Adoption', desc: 'Vision 2040 and post-pandemic trends are accelerating digital health adoption, creating new channels and data-driven care.' },
          ].map((d) => (<div key={d.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{d.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-16" id="bionixus-support"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">How BioNixus Supports Pharma Companies in Oman</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">BioNixus is a leading healthcare market research company with expertise in the Oman and GCC pharmaceutical markets. We help pharma, biotech, and medtech companies with:</p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">{[
            { title: 'Physician Surveys & KOL Mapping', desc: 'Quantitative and qualitative research with Omani physicians across MOH, Royal Hospital, SQUH, and private sector. Arabic-English bilingual capabilities.' },
            { title: 'Market Access & MOH DGPA Strategy', desc: 'MOH DGPA formulary strategy, GCC pricing context, reimbursement landscape, and payer research to optimise commercial success in Oman.' },
            { title: 'Competitive Intelligence', desc: 'Monitoring of competitor launches, tender outcomes, formulary changes, and market share across therapeutic areas in Oman and the GCC.' },
            { title: 'Market Entry Strategy', desc: 'Market assessment including regulatory pathway analysis, local partner identification, KOL engagement, and go-to-market planning for Oman.' },
          ].map((s) => (<div key={s.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{s.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="faq"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">{faqItems.map((faq) => (<div key={faq.q} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-12" id="methodology"><div className="container-wide max-w-5xl mx-auto"><div className="bg-card border border-border rounded-xl p-8"><h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" />Data Sources &amp; Methodology</h2><p className="text-sm text-muted-foreground leading-relaxed mb-4">This guide aggregates publicly available information from:</p><ul className="text-sm text-muted-foreground space-y-2 mb-6"><li>IQVIA Middle East &amp; Africa Pharmaceutical Market Report</li><li>MOH DGPA — Pharmaceutical regulatory and licensing information</li><li>Company filings and public announcements</li><li>BioNixus proprietary research from physician and market surveys in Oman and the GCC (2024–2025)</li></ul><p className="text-sm text-muted-foreground leading-relaxed">For customised market intelligence on Oman, <Link to="/contact" className="text-primary hover:underline">contact our team</Link>.</p></div></div></section>

        <section className="section-padding py-16 bg-primary text-primary-foreground"><div className="container-wide max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">Need Market Intelligence on Oman?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">BioNixus delivers custom pharmaceutical market research across Oman and the GCC — physician surveys, competitive intelligence, market access strategy, and KOL mapping.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors">Request a Proposal <ArrowRight className="w-4 h-4" /></Link><Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground font-semibold hover:bg-white/20 transition-colors">View Our Services</Link></div>
        </div></section>
      </main>
      <Footer />
    </div>
  );
};

export default OmanPharmaCompanies;
