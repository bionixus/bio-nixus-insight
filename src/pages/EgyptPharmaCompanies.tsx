import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Share2, BookOpen, Building2, Globe, ShieldCheck, Pill, TrendingUp, BarChart3, Truck, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languagePaths } from '@/lib/seo';
import { Helmet } from 'react-helmet-async';

interface PharmaCompany {
  name: string;
  hq: string;
  type: 'Local Manufacturer' | 'MNC Office' | 'Distributor' | 'Regional';
  therapeuticAreas: string;
  notes: string;
}

const pharmaCompanies: PharmaCompany[] = [
  { name: 'EIPICO (Egyptian International Pharmaceutical Industries Company)', hq: 'Egypt', type: 'Local Manufacturer', therapeuticAreas: 'Multi-therapeutic, generics, OTC', notes: 'Largest private pharma; 54 production lines; 310M packs/yr' },
  { name: 'EVA Pharma', hq: 'Egypt', type: 'Local Manufacturer', therapeuticAreas: 'Branded generics, EMEA', notes: 'Branded generics in 40+ countries; strong EMEA presence' },
  { name: 'Amoun Pharmaceutical', hq: 'Egypt', type: 'Local Manufacturer', therapeuticAreas: 'Human & veterinary pharmaceuticals', notes: 'Human and veterinary product portfolio' },
  { name: 'Global Napi Pharma', hq: 'Egypt', type: 'Local Manufacturer', therapeuticAreas: 'Generics, export-focused', notes: '3 EMA-approved facilities; international standards' },
  { name: 'Minapharm Pharmaceuticals', hq: 'Egypt', type: 'Local Manufacturer', therapeuticAreas: 'Biotech, biologics, generics', notes: 'Since 1958; biotech leader in Egypt' },
  { name: 'Pharco Corporation', hq: 'Egypt', type: 'Local Manufacturer', therapeuticAreas: 'HCV, hepatology, generics', notes: 'HCV treatment leader; major local player' },
  { name: 'Egyptian Group for Pharmaceutical Industries', hq: 'Egypt', type: 'Local Manufacturer', therapeuticAreas: 'Multi-therapeutic', notes: 'Key domestic manufacturer' },
  { name: 'Memphis Pharmaceuticals', hq: 'Egypt', type: 'Local Manufacturer', therapeuticAreas: 'Generics, multi-therapeutic', notes: 'Since 1960s; established local player' },
  { name: 'Kahira Pharmaceuticals', hq: 'Egypt', type: 'Local Manufacturer', therapeuticAreas: 'Multi-therapeutic', notes: 'Public sector manufacturer' },
  { name: 'Alexandria Pharma (AXPH)', hq: 'Egypt', type: 'Local Manufacturer', therapeuticAreas: 'Generics, multi-therapeutic', notes: 'Oldest Egyptian pharma company' },
  { name: 'Pfizer', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, vaccines, inflammation, rare diseases', notes: 'Major EDA-registered portfolio in Egypt' },
  { name: 'Novartis', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, immunology, ophthalmology, cardiovascular', notes: 'Strong presence in Egyptian market' },
  { name: 'Sanofi', hq: 'France', type: 'MNC Office', therapeuticAreas: 'Diabetes, vaccines, rare diseases, consumer health', notes: 'Local production in Egypt' },
  { name: 'AstraZeneca', hq: 'UK / Sweden', type: 'MNC Office', therapeuticAreas: 'Oncology, respiratory, cardiovascular, rare diseases', notes: 'Growing presence in Egypt' },
  { name: 'GSK (GlaxoSmithKline)', hq: 'UK', type: 'MNC Office', therapeuticAreas: 'Vaccines, respiratory, HIV, consumer health', notes: 'Key MNC in Egyptian market' },
  { name: 'Roche', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, haematology, neuroscience, diagnostics', notes: 'Leading oncology portfolio in Egypt' },
  { name: 'MSD (Merck & Co.)', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, vaccines, infectious disease, diabetes', notes: 'Major innovator presence' },
  { name: 'AbbVie', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Immunology, oncology, neuroscience, aesthetics', notes: 'Growing franchise in Egypt' },
  { name: 'Hikma Pharmaceuticals', hq: 'Jordan / UK', type: 'Regional', therapeuticAreas: 'Injectables, generics, branded generics', notes: 'MENA-headquartered; strong in Egypt' },
  { name: 'Ibn Sina Pharma', hq: 'Egypt', type: 'Distributor', therapeuticAreas: 'Nationwide distribution', notes: 'Largest distributor in Egypt; nationwide coverage' },
];

const faqItems = [
  { q: 'How many pharmaceutical companies operate in Egypt?', a: 'Egypt has over 120 pharmaceutical companies, including local manufacturers, multinational offices, and distributors. The market is valued at approximately $5.8 billion, with local manufacturers holding around 56% market share. Egypt has the strongest local manufacturing base in MENA, with roughly 90% of medicines consumed produced domestically.' },
  { q: 'What is the size of Egypt\'s pharmaceutical market?', a: 'Egypt\'s pharmaceutical market is valued at approximately US$5.8 billion, with 9.2% year-over-year growth. With a population of 109.3 million — the largest in MENA — per-capita pharmaceutical spending is about $53, which is low but growing as Universal Health Insurance (Hayah Karima) expands and the EDA modernises regulation.' },
  { q: 'What is the EDA (Egyptian Drug Authority)?', a: 'The Egyptian Drug Authority (EDA) is Egypt\'s national pharmaceutical regulator, established in 2020. It oversees drug registration, quality control, pricing, pharmacovigilance, and import licensing. The EDA is driving regulatory modernisation to align with international standards and support the country\'s position as a generics powerhouse and African export hub.' },
  { q: 'How dominant is local pharmaceutical manufacturing in Egypt?', a: 'Egypt has the strongest local pharmaceutical manufacturing in MENA: approximately 90% of medicines consumed are produced domestically. Over 120 companies operate in the market, with local manufacturers holding about 56% market share. Only around 10% of the market is import-dependent, making Egypt a generics powerhouse and key African export hub.' },
  { q: 'How does pharmaceutical pricing work in Egypt?', a: 'Egypt uses government-controlled reference pricing. The EDA oversees pricing decisions, which are benchmarked to control affordability while supporting local manufacturing. This mechanism helps maintain access for the large population while encouraging domestic production.' },
  { q: 'How long does drug registration take with the EDA?', a: 'Drug registration with the Egyptian Drug Authority (EDA) typically takes 12–24 months. Registration requires a full dossier, GMP certification, stability data, and compliance with EDA requirements. Licences are renewed on a 5-year basis.' },
];

const EgyptPharmaCompanies = () => {
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const citationUrl = 'https://www.bionixus.com/pharmaceutical-companies-egypt';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pharmaceutical Companies in Egypt | Industry Guide 2026 | BioNixus</title>
        <meta name="description" content="Complete guide to pharmaceutical companies in Egypt for 2026: top pharma companies list, $5.8B market size, EDA drug registration, 90% local manufacturing, and industry outlook." />
        <meta name="keywords" content="pharmaceutical companies in Egypt, Egypt pharmaceutical companies, pharma companies in Egypt, top pharmaceutical companies in Egypt, list of pharmaceutical companies in Egypt, EDA drug registration, Egyptian pharma market, Egyptian Drug Authority" />
        <link rel="canonical" href={citationUrl} />
        <meta property="og:title" content="Pharmaceutical Companies in Egypt — Complete Industry Guide 2026" />
        <meta property="og:description" content="Comprehensive guide: 20+ pharmaceutical companies in Egypt, $5.8B market data, EDA registration, 90% local manufacturing, and market outlook." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={citationUrl} />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Pharmaceutical Companies in Egypt: Complete Industry Guide 2026', description: 'Comprehensive guide to pharmaceutical companies operating in Egypt — local manufacturers, MNC offices, distributors, $5.8B market data, EDA regulatory landscape, and 90% local manufacturing dominance.', url: citationUrl, datePublished: '2026-02-15', dateModified: '2026-02-15', author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' }, publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' } })}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' }, { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.bionixus.com/resources' }, { '@type': 'ListItem', position: 3, name: 'Pharmaceutical Companies in Egypt' }] })}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) })}</script>
      </Helmet>
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-4"><div className="container-wide"><div className="flex items-center gap-2 text-sm text-muted-foreground mb-6"><Link to={basePath} className="hover:text-primary transition-colors">Home</Link><span>/</span><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link><span>/</span><span className="text-foreground">Pharmaceutical Companies in Egypt</span></div></div></div>

        <section className="section-padding pt-0 pb-12"><div className="container-wide max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"><Building2 className="w-4 h-4" />Industry Guide 2026</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">Pharmaceutical Companies in Egypt</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">A comprehensive guide to the pharmaceutical industry in Egypt — the largest population in MENA and the strongest local manufacturing base in the region. Covering major pharma companies, EDA regulatory framework, 90% domestic production, market data, distribution channels, and strategic opportunities.</p>
          <p className="text-sm text-muted-foreground">Last updated: February 2026 &middot; Sources: EDA, IQVIA MEA, company filings, industry reports</p>
          <div className="mt-8 p-5 bg-muted/50 border border-border rounded-xl"><div className="flex items-start gap-3"><Share2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground text-sm mb-1">Cite this guide</p><p className="text-sm text-muted-foreground leading-relaxed">BioNixus. &quot;Pharmaceutical Companies in Egypt: Complete Industry Guide 2026.&quot; BioNixus Healthcare Market Research, Feb. 2026, <a href={citationUrl} className="text-primary hover:underline break-all">{citationUrl}</a>.<br />Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CC BY 4.0</a> — free to share and adapt with attribution.</p></div></div></div>
        </div></section>

        <section className="section-padding py-12 bg-primary text-primary-foreground"><div className="container-wide max-w-5xl mx-auto"><div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><p className="text-3xl md:text-4xl font-display font-bold">$5.8B</p><p className="text-primary-foreground/70 text-sm mt-1">Pharmaceutical market value</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">9.2%</p><p className="text-primary-foreground/70 text-sm mt-1">Year-over-year growth</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">109.3M</p><p className="text-primary-foreground/70 text-sm mt-1">Population</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">$53</p><p className="text-primary-foreground/70 text-sm mt-1">Pharma spending per capita</p></div>
        </div></div></section>

        <section className="section-padding py-8 bg-muted/30"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
          <div className="grid md:grid-cols-2 gap-2">
            <a href="#market-overview" className="text-sm text-primary hover:underline flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Egyptian Pharmaceutical Market Overview</a>
            <a href="#top-companies" className="text-sm text-primary hover:underline flex items-center gap-2"><Building2 className="w-4 h-4" /> Top Pharmaceutical Companies</a>
            <a href="#companies-by-category" className="text-sm text-primary hover:underline flex items-center gap-2"><Users className="w-4 h-4" /> Companies by Category</a>
            <a href="#regulatory-landscape" className="text-sm text-primary hover:underline flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> EDA Regulatory Landscape</a>
            <a href="#distribution-channels" className="text-sm text-primary hover:underline flex items-center gap-2"><Truck className="w-4 h-4" /> Distribution Channels</a>
            <a href="#growth-drivers" className="text-sm text-primary hover:underline flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Growth Drivers</a>
            <a href="#bionixus-support" className="text-sm text-primary hover:underline flex items-center gap-2"><Globe className="w-4 h-4" /> How BioNixus Supports Pharma in Egypt</a>
            <a href="#faq" className="text-sm text-primary hover:underline flex items-center gap-2"><BookOpen className="w-4 h-4" /> Frequently Asked Questions</a>
          </div>
        </div></section>

        <section className="section-padding py-16" id="market-overview"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Egypt Pharmaceutical Market Overview</h2>
          <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
            <p>Egypt has the <strong className="text-foreground">largest population in MENA (109.3 million)</strong> and the <strong className="text-foreground">strongest local pharmaceutical manufacturing base in the region</strong>. The market is valued at approximately <strong className="text-foreground">US$5.8 billion</strong>, with <strong className="text-foreground">90% of medicines consumed produced domestically</strong> — only around 10% import dependency. Over 120 pharmaceutical companies operate in Egypt, with local manufacturers holding about <strong className="text-foreground">56% market share</strong>.</p>
            <p>Per-capita pharmaceutical spending is <strong className="text-foreground">$53</strong>, which is low but growing as Universal Health Insurance (UHI) and Hayah Karima expand, and the <strong className="text-foreground">Egyptian Drug Authority (EDA)</strong>, established in 2020, drives regulatory modernisation. Egypt is a <strong className="text-foreground">generics powerhouse</strong> and an important African export hub.</p>
            <p>The market is growing at <strong className="text-foreground">9.2% year-over-year</strong>, driven by UHI expansion, chronic disease burden, EDA reforms, and the scale of local manufacturing. Pricing is government-controlled via reference pricing, and drug registration typically takes 12–24 months with 5-year renewal.</p>
            <p>For a broader regional comparison, see our <Link to="/mena-pharma-market-data" className="text-primary hover:underline">MENA Pharmaceutical Market Data 2026</Link> and <Link to="/gcc-market-access-guide" className="text-primary hover:underline">GCC Pharmaceutical Market Access Guide</Link>.</p>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="top-companies"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Top Pharmaceutical Companies in Egypt</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">The following table lists the major pharmaceutical companies operating in Egypt — including local manufacturers, multinational corporation offices, regional players, and the largest distributor.</p>
          <div className="overflow-x-auto rounded-xl border border-border"><table className="w-full text-sm"><thead><tr className="bg-primary/5 border-b border-border"><th className="text-left px-4 py-3 font-semibold text-foreground">Company</th><th className="text-left px-4 py-3 font-semibold text-foreground">HQ</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Type</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden lg:table-cell">Therapeutic Areas</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden xl:table-cell">Notes</th></tr></thead><tbody>
            {pharmaCompanies.map((c, i) => (<tr key={c.name} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}><td className="px-4 py-3 font-medium text-foreground">{c.name}</td><td className="px-4 py-3 text-muted-foreground">{c.hq}</td><td className="px-4 py-3 hidden md:table-cell"><span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${c.type === 'Local Manufacturer' ? 'bg-green-50 text-green-700' : c.type === 'MNC Office' ? 'bg-blue-50 text-blue-700' : c.type === 'Regional' ? 'bg-amber-50 text-amber-700' : 'bg-purple-50 text-purple-700'}`}>{c.type}</span></td><td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">{c.therapeuticAreas}</td><td className="px-4 py-3 text-muted-foreground text-xs hidden xl:table-cell">{c.notes}</td></tr>))}
          </tbody></table></div>
        </div></section>

        <section className="section-padding py-16" id="companies-by-category"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">List of Pharmaceutical Companies in Egypt by Category</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Egypt pharmaceutical companies span local manufacturers (90% domestic production), multinational corporations with offices, regional players, and the largest nationwide distributor.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center"><Pill className="w-5 h-5 text-green-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Local Manufacturers</h3></div><p className="text-sm text-muted-foreground mb-4">Egypt has over 120 pharmaceutical companies with roughly 90% of the market supplied by local production. Leaders include EIPICO (largest private, 54 lines, 310M packs/yr), EVA Pharma (40+ countries), Minapharm (biotech leader since 1958), Pharco (HCV leader), and Alexandria Pharma (oldest).</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Local Manufacturer').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-green-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center"><Globe className="w-5 h-5 text-blue-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Multinational Pharma Offices</h3></div><p className="text-sm text-muted-foreground mb-4">Major global pharmaceutical companies maintain offices in Egypt. Pfizer, Novartis, Sanofi (with local production), AstraZeneca, GSK, Roche, MSD, and AbbVie are key MNCs in the market, serving the innovator segment alongside strong local generics.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'MNC Office').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-blue-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center"><Building2 className="w-5 h-5 text-amber-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Regional Pharma Companies</h3></div><p className="text-sm text-muted-foreground mb-4">Regional player Hikma Pharmaceuticals (Jordan/UK) has a strong presence in Egypt, with injectables and generics across MENA.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Regional').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center"><Truck className="w-5 h-5 text-purple-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Distributors</h3></div><p className="text-sm text-muted-foreground mb-4">Retail pharmacy is the dominant channel with 80,000+ pharmacies. Ibn Sina Pharma is the largest distributor in Egypt with nationwide coverage.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Distributor').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-purple-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="regulatory-landscape"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Pharma Companies in Egypt: EDA Regulatory Landscape</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">The Egyptian Drug Authority (EDA), established in 2020, oversees pharmaceutical registration, quality control, pricing, and pharmacovigilance, and is driving regulatory modernisation.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" />Regulatory Authority</h3><p className="text-sm text-muted-foreground leading-relaxed mb-4">The <strong className="text-foreground">Egyptian Drug Authority (EDA)</strong>, established in 2020, oversees all pharmaceutical registration, quality control, pricing, pharmacovigilance, and import licensing. Egypt uses <strong className="text-foreground">government-controlled reference pricing</strong>.</p><div className="space-y-3"><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Registration Timeline</p><p className="text-lg font-semibold text-foreground">12&ndash;24 months</p></div><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Renewal Period</p><p className="text-lg font-semibold text-foreground">5 years</p></div><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pricing Model</p><p className="text-sm text-foreground">Government-controlled reference pricing</p></div></div></div>
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Pill className="w-5 h-5 text-primary" />Key Registration Requirements</h3><ul className="space-y-3 text-sm text-foreground"><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Full dossier submission via EDA</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>GMP certificates and compliance</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Stability data for local climate conditions</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Arabic labelling mandatory on all products</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Clinical trial data and bioequivalence studies (generics)</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Certificate of Pharmaceutical Product (CPP) where applicable</span></li></ul></div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">Local Manufacturing &amp; Export</h3><p className="text-sm text-muted-foreground leading-relaxed">Approximately <strong className="text-foreground">90% of medicines consumed in Egypt are produced domestically</strong>; only around 10% are imported. The EDA supports local manufacturing and Egypt&apos;s role as an African export hub. For regional registration details, see our <Link to="/gcc-market-access-guide" className="text-primary hover:underline">GCC Pharmaceutical Market Access Guide</Link> and <Link to="/mena-pharma-market-data" className="text-primary hover:underline">MENA Pharmaceutical Market Data 2026</Link>.</p></div>
        </div></section>

        <section className="section-padding py-16" id="distribution-channels"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Drug Distribution Channels in Egypt</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Egypt&apos;s pharmaceutical distribution is dominated by retail pharmacy, with government and private hospitals also key channels.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-primary" />Retail Pharmacy (Dominant)</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p>With <strong className="text-foreground">80,000+ pharmacies</strong>, retail pharmacy is the dominant distribution channel in Egypt. Ibn Sina Pharma is the largest distributor with nationwide coverage.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> 80,000+ pharmacies nationwide</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Ibn Sina Pharma — largest distributor</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> OTC and prescription dispensing</li></ul></div></div>
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-primary" />Hospitals (Government &amp; Private)</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p>Government hospitals serve a large share of the population; private hospitals are growing as UHI and Hayah Karima expand access and investment.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Government hospital procurement</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Private hospitals growing</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> UHI expansion driving utilisation</li></ul></div></div>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="growth-drivers"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Egypt Pharmaceutical Market Growth Drivers</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Universal Health Insurance, demographics, local manufacturing strength, and regulatory reform are driving growth in Egypt&apos;s pharmaceutical sector.</p>
          <div className="grid md:grid-cols-3 gap-6">{[
            { title: 'Universal Health Insurance (Hayah Karima)', desc: 'UHI and Hayah Karima are expanding coverage across Egypt, driving pharmaceutical utilisation and improving access for the largest population in MENA (109.3M).' },
            { title: 'Largest MENA Population', desc: 'With 109.3 million people, Egypt offers the largest addressable pharmaceutical market in the region, with per-capita spending ($53) low but growing.' },
            { title: 'Local Manufacturing Strength (90% Domestic)', desc: 'Roughly 90% of medicines are produced locally; 120+ companies and 56% local market share make Egypt the strongest local manufacturing base in MENA.' },
            { title: 'EDA Regulatory Modernisation', desc: 'The Egyptian Drug Authority (established 2020) is modernising regulation, improving predictability and alignment with international standards for market access.' },
            { title: 'African Export Hub', desc: 'Egypt is a key export hub for pharmaceuticals into Africa, leveraging local manufacturing capacity and trade agreements.' },
            { title: 'Chronic Disease Burden', desc: 'Rising chronic disease burden drives sustained demand for generics and specialty therapies, supporting both local manufacturers and MNCs.' },
          ].map((d) => (<div key={d.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{d.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-16" id="bionixus-support"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">How BioNixus Supports Pharma Companies in Egypt</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">BioNixus is a leading healthcare market research company with deep expertise in the Egyptian pharmaceutical market. We help pharma, biotech, and medtech companies with:</p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">{[
            { title: 'Physician Surveys & KOL Mapping', desc: 'Large-scale quantitative and qualitative research with Egyptian physicians across government and private hospitals. Arabic-English bilingual capabilities.' },
            { title: 'Market Access & EDA Strategy', desc: 'EDA formulary strategy, competitive pricing analysis, reimbursement landscape, and payer research to optimise commercial success in Egypt.' },
            { title: 'Competitive Intelligence', desc: 'Real-time monitoring of competitor launches, tender outcomes, formulary changes, and market share across all therapeutic areas.' },
            { title: 'Market Entry Strategy', desc: 'Comprehensive market assessment including regulatory pathway analysis, local partner identification, KOL engagement, and go-to-market planning for the Egyptian market.' },
          ].map((s) => (<div key={s.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{s.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="faq"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">{faqItems.map((faq) => (<div key={faq.q} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-12" id="methodology"><div className="container-wide max-w-5xl mx-auto"><div className="bg-card border border-border rounded-xl p-8"><h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" />Data Sources &amp; Methodology</h2><p className="text-sm text-muted-foreground leading-relaxed mb-4">This guide aggregates publicly available information from:</p><ul className="text-sm text-muted-foreground space-y-2 mb-6"><li>IQVIA Middle East &amp; Africa Pharmaceutical Market Report</li><li>Egyptian Drug Authority (EDA) — regulatory and market data</li><li>Company filings and annual reports (EIPICO, EVA Pharma, Minapharm, Pharco, etc.)</li><li>Industry reports on Egyptian pharma and distribution</li><li>BioNixus proprietary research from physician surveys in Egypt (2024–2025)</li></ul><p className="text-sm text-muted-foreground leading-relaxed">For customised market intelligence on Egypt, <Link to="/contact" className="text-primary hover:underline">contact our team</Link>.</p></div></div></section>

        <section className="section-padding py-16 bg-primary text-primary-foreground"><div className="container-wide max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">Need Market Intelligence on Egypt?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">BioNixus delivers custom pharmaceutical market research across Egypt and MENA — physician surveys, competitive intelligence, market access strategy, and KOL mapping.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors">Request a Proposal <ArrowRight className="w-4 h-4" /></Link><Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground font-semibold hover:bg-white/20 transition-colors">View Our Services</Link></div>
        </div></section>
      </main>
      <Footer />
    </div>
  );
};

export default EgyptPharmaCompanies;
