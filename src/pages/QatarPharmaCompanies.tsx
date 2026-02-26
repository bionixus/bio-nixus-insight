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
  { name: 'Qatar Pharmaceutical Industries (QPI)', hq: 'Qatar', type: 'Local Manufacturer', therapeuticAreas: 'Multi-therapeutic (planning 140 drugs)', notes: 'New plant 2028; expanding local production under Qatar National Vision 2030' },
  { name: 'QLife Pharma', hq: 'Qatar', type: 'Local Manufacturer', therapeuticAreas: 'Wound healing, cardiovascular', notes: 'WHO cGMP certified; growing domestic portfolio' },
  { name: 'Pfizer', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, vaccines, inflammation, rare diseases', notes: 'Major MOPH-registered portfolio; government and private presence' },
  { name: 'Novartis', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, immunology, ophthalmology, cardiovascular', notes: 'Strong hospital formulary presence in Qatar' },
  { name: 'Roche', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, haematology, neuroscience, diagnostics', notes: 'Sidra Medicine partnership; leading oncology and specialty portfolio' },
  { name: 'Sanofi', hq: 'France', type: 'MNC Office', therapeuticAreas: 'Diabetes, vaccines, rare diseases, consumer health', notes: 'Strong insulin and vaccine franchise in Qatar' },
  { name: 'AstraZeneca', hq: 'UK / Sweden', type: 'MNC Office', therapeuticAreas: 'Oncology, respiratory, cardiovascular, rare diseases', notes: 'Active in MOPH registration and hospital tenders' },
  { name: 'GSK (GlaxoSmithKline)', hq: 'UK', type: 'MNC Office', therapeuticAreas: 'Vaccines, respiratory, HIV, consumer health', notes: 'Key vaccine and respiratory supplier' },
  { name: 'MSD (Merck & Co.)', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, vaccines, infectious disease, diabetes', notes: 'Keytruda and HPV vaccine presence' },
  { name: 'Novo Nordisk', hq: 'Denmark', type: 'MNC Office', therapeuticAreas: 'Diabetes, obesity, rare diseases, haemophilia', notes: 'Insulin and GLP-1 franchise in Qatar' },
  { name: 'AbbVie', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Immunology, oncology, neuroscience, aesthetics', notes: 'Humira & Rinvoq franchise; growing specialty presence' },
  { name: 'Boehringer Ingelheim', hq: 'Germany', type: 'MNC Office', therapeuticAreas: 'Respiratory, cardiovascular, metabolism, oncology', notes: 'Jardiance diabetes franchise; respiratory portfolio' },
  { name: 'Julphar', hq: 'UAE', type: 'Regional', therapeuticAreas: 'Generics, insulin, consumer health', notes: 'GCC regional player; generics and branded generics in Qatar' },
  { name: 'Hikma Pharmaceuticals', hq: 'Jordan / UK', type: 'Regional', therapeuticAreas: 'Injectables, generics, branded generics', notes: 'MENA-headquartered; strong injectable portfolio in Qatar hospitals' },
  { name: 'Doha Pharmacy', hq: 'Qatar', type: 'Distributor', therapeuticAreas: 'Retail pharmacy, OTC, consumer health', notes: 'Major retail pharmacy and distribution in Qatar' },
  { name: 'Al Emadi Hospital Pharmacy', hq: 'Qatar', type: 'Distributor', therapeuticAreas: 'Hospital pharmacy, specialty', notes: 'Al Emadi Hospital group; growing private channel' },
  { name: 'National Health Care Group', hq: 'Qatar', type: 'Distributor', therapeuticAreas: 'Healthcare distribution, pharmacy', notes: 'Qatar-based healthcare and pharmacy distribution' },
  { name: 'Qatar Pharmacy', hq: 'Qatar', type: 'Distributor', therapeuticAreas: 'Retail pharmacy, OTC, consumer health', notes: 'Retail pharmacy chain; expanding footprint' },
];

const faqItems = [
  { q: 'How many pharmaceutical companies operate in Qatar?', a: 'Qatar has approximately 18 major pharmaceutical companies operating in the market — including local manufacturers (QPI, QLife Pharma), multinational offices (Pfizer, Novartis, Roche, Sanofi, AstraZeneca, GSK, MSD, Novo Nordisk, AbbVie, Boehringer Ingelheim), regional players (Julphar, Hikma), and distributors (Doha Pharmacy, Al Emadi Hospital Pharmacy, National Health Care Group, Qatar Pharmacy). The market is valued at $0.9 billion with 12.3% growth and the highest pharma spending per capita in MENA ($333).' },
  { q: 'What is the size of Qatar\'s pharmaceutical market?', a: 'Qatar\'s pharmaceutical market is valued at approximately US$0.9 billion, with a population of 2.7 million and pharma spending per capita of $333 — the highest in the MENA region. The market is growing at 12.3% year-over-year, driven by Qatar National Vision 2030, post-FIFA infrastructure, clinical research expansion (e.g. Sidra Medicine CAR-T), and growing demand for biologics and specialty medicines. About 95% of pharmaceuticals are imported.' },
  { q: 'How do you register a pharmaceutical product with MOPH Qatar?', a: 'Drug registration with the Ministry of Public Health (MOPH), Pharmacy & Drug Control Department requires submission of a Common Technical Document (CTD). The process typically takes 8–16 months and requires a local authorised representative, GMP certificates, stability data, Arabic labelling, and clinical/bioequivalence data as applicable. Registration is valid for 5 years before renewal.' },
  { q: 'Who dominates pharmaceutical distribution in Qatar?', a: 'Hamad Medical Corporation (HMC) dominates the government channel and is the largest public healthcare provider. The private sector is growing, with Al Emadi and Al Ahli hospitals among key private players. Retail pharmacies (e.g. Doha Pharmacy, Qatar Pharmacy) are expanding. E-pharmacy and digital health are emerging. Pricing follows reference pricing (KSA, UAE, select EU).' },
  { q: 'Is local pharmaceutical manufacturing growing in Qatar?', a: 'Yes. Qatar has two local manufacturers — Qatar Pharmaceutical Industries (QPI) and QLife Pharma (WHO cGMP). QPI is planning 140 drugs and a new plant by 2028 under Qatar National Vision 2030. Local manufacturing is encouraged to reduce import dependency (currently ~95%). Sidra Medicine supports clinical research and specialty therapies including CAR-T.' },
  { q: 'Do I need a local partner to sell pharmaceuticals in Qatar?', a: 'Yes. Foreign pharmaceutical companies must appoint a local authorised representative to handle MOPH regulatory submissions, in-country logistics, and pharmacovigilance. This is a legal requirement for all foreign manufacturers selling in Qatar.' },
];

const QatarPharmaCompanies = () => {
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const citationUrl = 'https://www.bionixus.com/pharmaceutical-companies-qatar';

  const ogTitle = "Pharmaceutical Companies in Qatar — Complete Industry Guide 2026";
  const ogDescription = "Comprehensive guide: 18 pharmaceutical companies in Qatar, $0.9B market data, MOPH registration, Qatar National Vision 2030, Sidra Medicine, and market outlook.";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pharmaceutical Companies in Qatar | Industry Guide 2026 | BioNixus</title>
        <meta name="description" content="Complete guide to pharmaceutical companies in Qatar for 2026: top pharma companies list, $0.9B market size, MOPH drug registration, Qatar National Vision 2030, Sidra Medicine, and industry outlook." />
        <meta name="keywords" content="pharmaceutical companies in Qatar, Qatar pharmaceutical companies, pharma companies in Qatar, top pharmaceutical companies in Qatar, list of pharmaceutical companies in Qatar, MOPH drug registration, Qatar pharma market, Qatar National Vision 2030 pharmaceutical" />
        <link rel="canonical" href={citationUrl} />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Pharmaceutical Companies in Qatar: Complete Industry Guide 2026', description: 'Comprehensive guide to pharmaceutical companies operating in Qatar — local manufacturers, MNC offices, distributors, $0.9B market data, MOPH regulatory landscape, and Qatar National Vision 2030 outlook.', url: citationUrl, datePublished: '2026-02-15', dateModified: '2026-02-15', author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' }, publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' } })}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' }, { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.bionixus.com/resources' }, { '@type': 'ListItem', position: 3, name: 'Pharmaceutical Companies in Qatar' }] })}</script>
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
        <div className="section-padding pt-24 pb-4"><div className="container-wide"><div className="flex items-center gap-2 text-sm text-muted-foreground mb-6"><Link to={basePath} className="hover:text-primary transition-colors">Home</Link><span>/</span><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link><span>/</span><span className="text-foreground">Pharmaceutical Companies in Qatar</span></div></div></div>

        <section className="section-padding pt-0 pb-12"><div className="container-wide max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"><Building2 className="w-4 h-4" />Industry Guide 2026</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">Pharmaceutical Companies in Qatar</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">A comprehensive guide to the pharmaceutical industry in Qatar — the highest healthcare spending per capita in MENA. Covering major pharma companies, MOPH regulatory framework, Qatar National Vision 2030, market data, distribution channels (Hamad Medical Corp, Sidra Medicine), and strategic opportunities.</p>
          <p className="text-sm text-muted-foreground">Last updated: February 2026 &middot; Sources: MOPH, IQVIA MEA, QPI, Sidra Medicine, company filings</p>
          <div className="mt-8 p-5 bg-muted/50 border border-border rounded-xl"><div className="flex items-start gap-3"><Share2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground text-sm mb-1">Cite this guide</p><p className="text-sm text-muted-foreground leading-relaxed">BioNixus. &quot;Pharmaceutical Companies in Qatar: Complete Industry Guide 2026.&quot; BioNixus Healthcare Market Research, Feb. 2026, <a href={citationUrl} className="text-primary hover:underline break-all">{citationUrl}</a>.<br />Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CC BY 4.0</a> — free to share and adapt with attribution.</p></div></div></div>
        </div></section>

        <section className="section-padding py-12 bg-primary text-primary-foreground"><div className="container-wide max-w-5xl mx-auto"><div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><p className="text-3xl md:text-4xl font-display font-bold">$0.9B</p><p className="text-primary-foreground/70 text-sm mt-1">Pharmaceutical market value</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">12.3%</p><p className="text-primary-foreground/70 text-sm mt-1">Year-over-year growth</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">2.7M</p><p className="text-primary-foreground/70 text-sm mt-1">Population</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">$333</p><p className="text-primary-foreground/70 text-sm mt-1">Pharma spending per capita</p></div>
        </div></div></section>

        <section className="section-padding py-8 bg-muted/30"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
          <div className="grid md:grid-cols-2 gap-2">
            <a href="#market-overview" className="text-sm text-primary hover:underline flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Qatar Pharmaceutical Market Overview</a>
            <a href="#top-companies" className="text-sm text-primary hover:underline flex items-center gap-2"><Building2 className="w-4 h-4" /> Top Pharmaceutical Companies</a>
            <a href="#companies-by-category" className="text-sm text-primary hover:underline flex items-center gap-2"><Users className="w-4 h-4" /> Companies by Category</a>
            <a href="#regulatory-landscape" className="text-sm text-primary hover:underline flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> MOPH Regulatory Landscape</a>
            <a href="#distribution-channels" className="text-sm text-primary hover:underline flex items-center gap-2"><Truck className="w-4 h-4" /> Distribution Channels</a>
            <a href="#growth-drivers" className="text-sm text-primary hover:underline flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Qatar National Vision 2030 &amp; Growth Drivers</a>
            <a href="#bionixus-support" className="text-sm text-primary hover:underline flex items-center gap-2"><Globe className="w-4 h-4" /> How BioNixus Supports Pharma in Qatar</a>
            <a href="#faq" className="text-sm text-primary hover:underline flex items-center gap-2"><BookOpen className="w-4 h-4" /> Frequently Asked Questions</a>
          </div>
        </div></section>

        <section className="section-padding py-16" id="market-overview"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Qatar Pharmaceutical Market Overview</h2>
          <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
            <p>Qatar&apos;s pharmaceutical market has the <strong className="text-foreground">highest healthcare spending per capita in MENA</strong>, with pharma spending at <strong className="text-foreground">$333 per capita</strong> and a total market valued at approximately <strong className="text-foreground">US$0.9 billion</strong>. With a population of 2.7 million, the market is growing at <strong className="text-foreground">12.3% year-over-year</strong> — one of the fastest growth rates in the region — driven by Qatar National Vision 2030, post-FIFA infrastructure, clinical research expansion (Sidra Medicine CAR-T and specialty therapies), and rising demand for biologics and specialty medicines.</p>
            <p>Approximately <strong className="text-foreground">95% of pharmaceuticals are imported</strong>, though local manufacturing is expanding. Qatar Pharmaceutical Industries (QPI) is planning 140 drugs and a new plant by 2028; QLife Pharma is WHO cGMP certified. Sidra Medicine is a key centre for specialty and advanced therapies. The market is regulated by the <strong className="text-foreground">Ministry of Public Health (MOPH), Pharmacy &amp; Drug Control</strong>.</p>
            <p>Pricing follows <strong className="text-foreground">reference pricing</strong> (KSA, UAE, select EU). Registration typically takes 8–16 months with 5-year renewal. For a broader regional comparison, see our <Link to="/mena-pharma-market-data" className="text-primary hover:underline">MENA Pharmaceutical Market Data 2026</Link> and <Link to="/gcc-market-access-guide" className="text-primary hover:underline">GCC Pharmaceutical Market Access Guide</Link>.</p>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="top-companies"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Top Pharmaceutical Companies in Qatar</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">The following table lists the major pharmaceutical companies operating in Qatar — including local manufacturers, multinational corporation offices, regional players, and leading pharmacy chains and distributors.</p>
          <div className="overflow-x-auto rounded-xl border border-border"><table className="w-full text-sm"><thead><tr className="bg-primary/5 border-b border-border"><th className="text-left px-4 py-3 font-semibold text-foreground">Company</th><th className="text-left px-4 py-3 font-semibold text-foreground">HQ</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Type</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden lg:table-cell">Therapeutic Areas</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden xl:table-cell">Notes</th></tr></thead><tbody>
            {pharmaCompanies.map((c, i) => (<tr key={c.name} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}><td className="px-4 py-3 font-medium text-foreground">{c.name}</td><td className="px-4 py-3 text-muted-foreground">{c.hq}</td><td className="px-4 py-3 hidden md:table-cell"><span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${c.type === 'Local Manufacturer' ? 'bg-green-50 text-green-700' : c.type === 'MNC Office' ? 'bg-blue-50 text-blue-700' : c.type === 'Regional' ? 'bg-amber-50 text-amber-700' : 'bg-purple-50 text-purple-700'}`}>{c.type}</span></td><td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">{c.therapeuticAreas}</td><td className="px-4 py-3 text-muted-foreground text-xs hidden xl:table-cell">{c.notes}</td></tr>))}
          </tbody></table></div>
        </div></section>

        <section className="section-padding py-16" id="companies-by-category"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">List of Pharmaceutical Companies in Qatar by Category</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Qatar pharmaceutical companies span local manufacturers (QPI, QLife Pharma), multinational offices, regional players, and distributors serving Hamad Medical Corp and the growing private sector.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center"><Pill className="w-5 h-5 text-green-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Local Manufacturers</h3></div><p className="text-sm text-muted-foreground mb-4">Qatar has two local pharmaceutical manufacturers: QPI (planning 140 drugs, new plant 2028) and QLife Pharma (WHO cGMP, wound healing/cardiovascular). Qatar National Vision 2030 supports local production to reduce import dependency (~95%).</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Local Manufacturer').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-green-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center"><Globe className="w-5 h-5 text-blue-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Multinational Pharma Offices</h3></div><p className="text-sm text-muted-foreground mb-4">Major global pharmaceutical companies maintain offices in Qatar. MNCs dominate the innovator and specialty segment; Roche has a Sidra Medicine partnership. Qatar is an important high-value market per capita.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'MNC Office').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-blue-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center"><Building2 className="w-5 h-5 text-amber-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Regional Pharma Companies</h3></div><p className="text-sm text-muted-foreground mb-4">Regional players Julphar and Hikma Pharmaceuticals supply generics and injectables to Qatar, benefiting from GCC regulatory alignment.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Regional').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center"><Truck className="w-5 h-5 text-purple-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Pharmacy Chains &amp; Distributors</h3></div><p className="text-sm text-muted-foreground mb-4">Doha Pharmacy, Al Emadi Hospital Pharmacy, National Health Care Group, and Qatar Pharmacy serve retail and hospital channels; retail pharmacies are expanding.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Distributor').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-purple-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="regulatory-landscape"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Pharma Companies in Qatar: MOPH Regulatory Landscape</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">The Ministry of Public Health (MOPH), Pharmacy &amp; Drug Control Department oversees all pharmaceutical registration, quality control, pricing, and pharmacovigilance in Qatar.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" />Regulatory Authority</h3><p className="text-sm text-muted-foreground leading-relaxed mb-4">The <strong className="text-foreground">Ministry of Public Health (MOPH), Pharmacy &amp; Drug Control</strong> oversees pharmaceutical registration, quality, pricing, and import licensing. Submissions follow CTD format.</p><div className="space-y-3"><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Registration Timeline</p><p className="text-lg font-semibold text-foreground">8&ndash;16 months</p></div><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Renewal Period</p><p className="text-lg font-semibold text-foreground">5 years</p></div><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pricing Model</p><p className="text-sm text-foreground">Reference pricing (KSA, UAE, select EU)</p></div></div></div>
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Pill className="w-5 h-5 text-primary" />Key Registration Requirements</h3><ul className="space-y-3 text-sm text-foreground"><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>CTD-format dossier via MOPH process</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>GMP certificates from recognised authorities</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Stability data for relevant climate zone</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Arabic labelling mandatory on all products</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Clinical trial / bioequivalence data as applicable</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Certificate of Pharmaceutical Product (CPP)</span></li><li className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0"><Building2 className="w-4 h-4" /></span><span className="font-medium">Local authorised representative mandatory</span></li></ul></div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">Qatar National Vision 2030 &amp; Local Manufacturing</h3><p className="text-sm text-muted-foreground leading-relaxed">Qatar National Vision 2030 supports local pharmaceutical production. QPI is expanding with a new plant (2028) and 140-drug pipeline; QLife Pharma is WHO cGMP certified. For complete GCC registration details, see our <Link to="/gcc-market-access-guide" className="text-primary hover:underline">GCC Pharmaceutical Market Access Guide</Link>.</p></div>
        </div></section>

        <section className="section-padding py-16" id="distribution-channels"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Drug Distribution Channels in Qatar</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Qatar&apos;s pharmaceutical distribution is led by the government channel (Hamad Medical Corp) with a growing private sector and expanding retail pharmacies.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-primary" />Government Channel</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p><strong className="text-foreground">Hamad Medical Corporation (HMC)</strong> dominates the government sector and is the largest public healthcare provider. Government procurement drives a significant share of pharmaceutical spend.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Hamad Medical Corp (HMC) — main public provider</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Tender and formulary-based procurement</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Sidra Medicine — specialty and advanced therapies</li></ul></div></div>
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-primary" />Private Sector &amp; Retail</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p>The private sector is growing. Al Emadi and Al Ahli hospitals are key private players. Retail pharmacies (Doha Pharmacy, Qatar Pharmacy, National Health Care Group) are expanding; e-pharmacy and digital health are emerging.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Al Emadi Hospital, Al Ahli Hospital</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Doha Pharmacy, Qatar Pharmacy, National Health Care Group</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> E-pharmacy and digital health growth</li></ul></div></div>
          </div>
        </div></section>

        <section className="section-padding py-16" id="growth-drivers"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Qatar Pharmaceutical Market Growth Drivers</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Qatar National Vision 2030, post-FIFA infrastructure, and clinical research expansion are driving strong growth in Qatar&apos;s pharmaceutical sector.</p>
          <div className="grid md:grid-cols-3 gap-6">{[
            { title: 'Qatar National Vision 2030', desc: 'National plan supports healthcare excellence, local pharmaceutical manufacturing (QPI 2028 plant, QLife Pharma), and reduced import dependency. Healthcare and pharma are strategic priorities.' },
            { title: 'Clinical Research Expansion', desc: 'Sidra Medicine drives specialty and advanced therapies including CAR-T. Qatar is building a reputation for clinical research and high-end care, attracting MNC partnerships (e.g. Roche).' },
            { title: 'Post-FIFA Infrastructure', desc: 'Post-2022 FIFA World Cup infrastructure and healthcare investments continue to support hospital capacity, formulary expansion, and pharmaceutical utilisation.' },
            { title: 'E-Pharmacy & Digital Health', desc: 'E-pharmacy and digital health initiatives are expanding access and convenience, supporting growth in retail and chronic disease management.' },
            { title: 'Biologics & Specialty Medicines', desc: 'Demand for biologics and specialty medicines is rising, supported by Sidra Medicine and high per-capita spending ($333 pharma/capita — highest in MENA).' },
            { title: 'Local Manufacturing (QPI 2028)', desc: 'Qatar Pharmaceutical Industries\' new plant (2028) and 140-drug pipeline will increase local supply and create opportunities for partnerships and supply chain diversification.' },
          ].map((d) => (<div key={d.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{d.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-16" id="bionixus-support"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">How BioNixus Supports Pharma Companies in Qatar</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">BioNixus is a leading healthcare market research company with expertise in the Qatar and GCC pharmaceutical markets. We help pharma, biotech, and medtech companies with:</p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">{[
            { title: 'Physician Surveys & KOL Mapping', desc: 'Quantitative and qualitative research with Qatar physicians across Hamad Medical Corp, Sidra Medicine, and private hospitals. Arabic-English bilingual capabilities.' },
            { title: 'Market Access & MOPH Strategy', desc: 'MOPH formulary strategy, reference pricing analysis, reimbursement landscape, and payer research to optimise commercial success in Qatar.' },
            { title: 'Competitive Intelligence', desc: 'Monitoring of competitor launches, tender outcomes, formulary changes, and market share across therapeutic areas in Qatar and the GCC.' },
            { title: 'Market Entry Strategy', desc: 'Market assessment including MOPH regulatory pathway, local partner identification, KOL engagement, and go-to-market planning for Qatar.' },
          ].map((s) => (<div key={s.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{s.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="faq"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">{faqItems.map((faq) => (<div key={faq.q} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-12" id="methodology"><div className="container-wide max-w-5xl mx-auto"><div className="bg-card border border-border rounded-xl p-8"><h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" />Data Sources &amp; Methodology</h2><p className="text-sm text-muted-foreground leading-relaxed mb-4">This guide aggregates publicly available information from:</p><ul className="text-sm text-muted-foreground space-y-2 mb-6"><li>IQVIA Middle East &amp; Africa Pharmaceutical Market Report</li><li>MOPH — Pharmacy &amp; Drug Control</li><li>Qatar Pharmaceutical Industries (QPI), QLife Pharma</li><li>Sidra Medicine, Hamad Medical Corporation</li><li>BioNixus proprietary research (2024–2025)</li></ul><p className="text-sm text-muted-foreground leading-relaxed">For customised market intelligence on Qatar, <Link to="/contact" className="text-primary hover:underline">contact our team</Link>.</p></div></div></section>

        <section className="section-padding py-16 bg-primary text-primary-foreground"><div className="container-wide max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">Need Market Intelligence on Qatar?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">BioNixus delivers custom pharmaceutical market research across Qatar and the GCC — physician surveys, competitive intelligence, market access strategy, and KOL mapping.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors">Request a Proposal <ArrowRight className="w-4 h-4" /></Link><Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground font-semibold hover:bg-white/20 transition-colors">View Our Services</Link></div>
        </div></section>
      </main>
      <Footer />
    </div>
  );
};

export default QatarPharmaCompanies;
