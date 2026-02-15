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
  { name: 'Julphar (Gulf Pharmaceutical Industries)', hq: 'Ras Al Khaimah', type: 'Local Manufacturer', therapeuticAreas: 'Multi-therapeutic, generics, OTC', notes: 'Largest Arab pharma manufacturer; 50+ countries; Ras Al Khaimah' },
  { name: 'Neopharma', hq: 'Abu Dhabi', type: 'Local Manufacturer', therapeuticAreas: 'Generics, biosimilars', notes: 'Abu Dhabi-based; generics and biosimilars focus' },
  { name: 'Globalpharma', hq: 'Dubai', type: 'Local Manufacturer', therapeuticAreas: 'Generics', notes: 'Dubai generics; WHO prequalified portfolio' },
  { name: 'Gulf Inject', hq: 'UAE', type: 'Local Manufacturer', therapeuticAreas: 'Injectables', notes: 'Injectables specialist' },
  { name: 'Pharmax Pharmaceuticals', hq: 'Dubai', type: 'Local Manufacturer', therapeuticAreas: 'Consumer health', notes: 'Dubai-based; consumer health focus' },
  { name: 'Pfizer', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, vaccines, inflammation, rare diseases', notes: 'Major UAE-registered portfolio; regional presence' },
  { name: 'Novartis', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, immunology, ophthalmology, cardiovascular', notes: 'Strong MEA and UAE hospital formulary presence' },
  { name: 'Roche', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, haematology, neuroscience, diagnostics', notes: 'Leading oncology portfolio; diagnostics in UAE' },
  { name: 'Sanofi', hq: 'France', type: 'MNC Office', therapeuticAreas: 'Diabetes, vaccines, rare diseases, consumer health', notes: 'Strong insulin and vaccine franchise in UAE' },
  { name: 'AstraZeneca', hq: 'UK / Sweden', type: 'MNC Office', therapeuticAreas: 'Oncology, respiratory, cardiovascular, rare diseases', notes: 'Regional HQ Dubai; growing UAE presence' },
  { name: 'GSK (GlaxoSmithKline)', hq: 'UK', type: 'MNC Office', therapeuticAreas: 'Vaccines, respiratory, HIV, consumer health', notes: 'Vaccine and respiratory franchise in UAE' },
  { name: 'MSD (Merck & Co.)', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, vaccines, infectious disease, diabetes', notes: 'Keytruda and HPV vaccine programmes in UAE' },
  { name: 'AbbVie', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Immunology, oncology, neuroscience, aesthetics', notes: 'Humira & Rinvoq; growing dermatology presence' },
  { name: 'Eli Lilly', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Diabetes, oncology, immunology, neuroscience', notes: 'Fastest growing MNC in UAE (100%+ YoY); GLP-1 surge' },
  { name: 'Novo Nordisk', hq: 'Denmark', type: 'MNC Office', therapeuticAreas: 'Diabetes, obesity, rare diseases, haemophilia', notes: 'Ozempic/Wegovy driving explosive growth in UAE' },
  { name: 'Johnson & Johnson', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Consumer health, pharmaceuticals, medtech', notes: 'Broad portfolio across UAE market' },
  { name: 'Boehringer Ingelheim', hq: 'Germany', type: 'MNC Office', therapeuticAreas: 'Respiratory, cardiovascular, metabolism, oncology', notes: 'Jardiance diabetes; growing respiratory portfolio' },
  { name: 'Hikma Pharmaceuticals', hq: 'Jordan / UK', type: 'Regional', therapeuticAreas: 'Injectables, generics, branded generics', notes: 'MENA-headquartered; strong injectable portfolio in UAE' },
  { name: 'Life Pharmacy', hq: 'UAE', type: 'Distributor', therapeuticAreas: 'Retail pharmacy, OTC, consumer health', notes: 'Largest pharmacy chain in UAE (300+ stores)' },
  { name: 'Aster Pharmacy', hq: 'UAE', type: 'Distributor', therapeuticAreas: 'Retail pharmacy, OTC, consumer health', notes: '250+ stores; part of Aster DM Healthcare' },
  { name: 'BinSina Pharmacy', hq: 'UAE', type: 'Distributor', therapeuticAreas: 'Retail pharmacy, OTC, consumer health', notes: 'Major UAE pharmacy chain' },
];

const faqItems = [
  { q: 'How many pharmaceutical companies operate in the UAE?', a: 'The UAE has approximately 20 major pharmaceutical companies including local manufacturers (e.g. Julphar, Neopharma, Globalpharma), multinational offices, regional players such as Hikma, and leading pharmacy chains (Life Pharmacy, Aster Pharmacy, BinSina). The market is the fastest-growing in the GCC at 17.5% YoY, valued at $4.5 billion, with the highest per-capita pharmaceutical spend in the region ($446).' },
  { q: 'What is the size of the UAE pharmaceutical market?', a: 'The UAE pharmaceutical market is valued at approximately US$4.5 billion, with year-over-year growth of 17.5% — the fastest in the GCC. The population is about 10.1 million, with per-capita pharmaceutical spending of $446, the highest in the Gulf. The market is driven by medical tourism (630K+ tourists), mandatory insurance in Abu Dhabi and Dubai, and the Dubai Health Strategy.' },
  { q: 'How do you register a pharmaceutical product in the UAE?', a: 'Drug registration in the UAE is overseen by three main regulators: MOHAP (federal), DHA (Dubai), and DOH (Abu Dhabi). The process typically takes 6–14 months — the fastest in the GCC — and requires a Common Technical Document (CTD), GMP certificates, stability data, Arabic labelling, and a local authorised representative. Pricing follows External Reference Pricing (EU + regional basket).' },
  { q: 'How does the UAE pharmaceutical market compare to Saudi Arabia?', a: 'The UAE market is smaller in absolute size ($4.5B vs Saudi\'s $12.4B) but has the highest per-capita spend in the GCC ($446 vs $336 in Saudi) and the fastest growth (17.5% vs 11.1%). UAE offers the fastest registration timeline in the GCC (6–14 months) and is a major medical tourism hub (630K+ tourists). Saudi has a larger local manufacturing base; the UAE relies on ~85% imports with growing biopharma manufacturing initiatives.' },
  { q: 'What is the impact of mandatory insurance on UAE pharma?', a: 'Mandatory health insurance in Abu Dhabi and Dubai drives approximately 60% of the market through the private sector — insurance-driven reimbursement supports higher innovator drug uptake. Government channels (MOHAP, DHA, DOH) account for ~40%. This split makes the UAE distinct from Saudi Arabia, where government procurement dominates (~60%).' },
  { q: 'Do I need a local partner to sell pharmaceuticals in the UAE?', a: 'Yes, foreign pharmaceutical companies typically need a local authorised representative to handle regulatory submissions to MOHAP, DHA, and/or DOH, in-country logistics, and pharmacovigilance. Distribution is often through local partners or owned entities; major hospital groups include NMC, Aster DM, and Mediclinic, and pharmacy chains such as Life, Aster, and BinSina dominate retail.' },
];

const UaePharmaCompanies = () => {
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const citationUrl = 'https://www.bionixus.com/pharmaceutical-companies-uae';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pharmaceutical Companies in the UAE | Industry Guide 2026 | BioNixus</title>
        <meta name="description" content="Complete guide to pharmaceutical companies in the UAE for 2026: top pharma companies list, $4.5B market size, MOHAP/DHA/DOH registration (6-14 months fastest in GCC), medical tourism, and industry outlook." />
        <meta name="keywords" content="pharmaceutical companies in UAE, UAE pharmaceutical companies, pharma companies in UAE, top pharmaceutical companies in UAE, list of pharmaceutical companies in UAE, MOHAP drug registration, DHA DOH UAE pharma, UAE pharma market" />
        <link rel="canonical" href={citationUrl} />
        <meta property="og:title" content="Pharmaceutical Companies in the UAE — Complete Industry Guide 2026" />
        <meta property="og:description" content="Comprehensive guide: 20+ pharmaceutical companies in the UAE, $4.5B market data, MOHAP/DHA/DOH registration (fastest in GCC), medical tourism hub, and market outlook." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={citationUrl} />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Pharmaceutical Companies in the UAE: Complete Industry Guide 2026', description: 'Comprehensive guide to pharmaceutical companies operating in the United Arab Emirates — local manufacturers, MNC offices, distributors, $4.5B market data, MOHAP/DHA/DOH regulatory landscape, and medical tourism outlook.', url: citationUrl, datePublished: '2026-02-15', dateModified: '2026-02-15', author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' }, publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' } })}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' }, { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.bionixus.com/resources' }, { '@type': 'ListItem', position: 3, name: 'Pharmaceutical Companies in the UAE' }] })}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) })}</script>
      </Helmet>
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-4"><div className="container-wide"><div className="flex items-center gap-2 text-sm text-muted-foreground mb-6"><Link to={basePath} className="hover:text-primary transition-colors">Home</Link><span>/</span><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link><span>/</span><span className="text-foreground">Pharmaceutical Companies in the UAE</span></div></div></div>

        <section className="section-padding pt-0 pb-12"><div className="container-wide max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"><Building2 className="w-4 h-4" />Industry Guide 2026</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">Pharmaceutical Companies in the UAE</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">A comprehensive guide to the pharmaceutical industry in the United Arab Emirates — the fastest-growing GCC market with the highest per-capita pharmaceutical spend. Covering major pharma companies, MOHAP/DHA/DOH regulatory framework, medical tourism, market data, distribution channels, and strategic opportunities.</p>
          <p className="text-sm text-muted-foreground">Last updated: February 2026 &middot; Sources: MOHAP, DHA, DOH, IQVIA MEA, company filings</p>
          <div className="mt-8 p-5 bg-muted/50 border border-border rounded-xl"><div className="flex items-start gap-3"><Share2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground text-sm mb-1">Cite this guide</p><p className="text-sm text-muted-foreground leading-relaxed">BioNixus. &quot;Pharmaceutical Companies in the UAE: Complete Industry Guide 2026.&quot; BioNixus Healthcare Market Research, Feb. 2026, <a href={citationUrl} className="text-primary hover:underline break-all">{citationUrl}</a>.<br />Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CC BY 4.0</a> — free to share and adapt with attribution.</p></div></div></div>
        </div></section>

        <section className="section-padding py-12 bg-primary text-primary-foreground"><div className="container-wide max-w-5xl mx-auto"><div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><p className="text-3xl md:text-4xl font-display font-bold">$4.5B</p><p className="text-primary-foreground/70 text-sm mt-1">Pharmaceutical market value</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">17.5%</p><p className="text-primary-foreground/70 text-sm mt-1">Year-over-year growth</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">10.1M</p><p className="text-primary-foreground/70 text-sm mt-1">Population</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">$446</p><p className="text-primary-foreground/70 text-sm mt-1">Pharma spending per capita</p></div>
        </div></div></section>

        <section className="section-padding py-8 bg-muted/30"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
          <div className="grid md:grid-cols-2 gap-2">
            <a href="#market-overview" className="text-sm text-primary hover:underline flex items-center gap-2"><BarChart3 className="w-4 h-4" /> UAE Pharmaceutical Market Overview</a>
            <a href="#top-companies" className="text-sm text-primary hover:underline flex items-center gap-2"><Building2 className="w-4 h-4" /> Top Pharmaceutical Companies</a>
            <a href="#companies-by-category" className="text-sm text-primary hover:underline flex items-center gap-2"><Users className="w-4 h-4" /> Companies by Category</a>
            <a href="#regulatory-landscape" className="text-sm text-primary hover:underline flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Regulatory Landscape (MOHAP / DHA / DOH)</a>
            <a href="#distribution-channels" className="text-sm text-primary hover:underline flex items-center gap-2"><Truck className="w-4 h-4" /> Distribution Channels</a>
            <a href="#growth-drivers" className="text-sm text-primary hover:underline flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Growth Drivers</a>
            <a href="#bionixus-support" className="text-sm text-primary hover:underline flex items-center gap-2"><Globe className="w-4 h-4" /> How BioNixus Supports Pharma in the UAE</a>
            <a href="#faq" className="text-sm text-primary hover:underline flex items-center gap-2"><BookOpen className="w-4 h-4" /> Frequently Asked Questions</a>
          </div>
        </div></section>

        <section className="section-padding py-16" id="market-overview"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">UAE Pharmaceutical Market Overview</h2>
          <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
            <p>The UAE pharmaceutical market is the <strong className="text-foreground">fastest-growing in the GCC</strong>, valued at approximately <strong className="text-foreground">US$4.5 billion</strong>, with <strong className="text-foreground">17.5% year-over-year growth</strong> and the <strong className="text-foreground">highest per-capita pharmaceutical spend in the Gulf ($446)</strong>. With a population of 10.1 million, the UAE is a major medical tourism hub — over <strong className="text-foreground">630,000 medical tourists</strong> annually — and benefits from mandatory health insurance in Abu Dhabi and Dubai, driving private-sector utilisation.</p>
            <p>Regulation is managed by a <strong className="text-foreground">triple-regulator system</strong>: federal <strong className="text-foreground">MOHAP</strong>, <strong className="text-foreground">DHA</strong> (Dubai), and <strong className="text-foreground">DOH</strong> (Abu Dhabi). Drug registration typically takes <strong className="text-foreground">6–14 months</strong> — the fastest in the GCC — with pricing based on External Reference Pricing (EU + regional basket). Approximately <strong className="text-foreground">85% of pharmaceuticals are imported</strong>; local manufacturing is growing with initiatives such as the biopharmaceutical manufacturing campus.</p>
            <p>Oncology represents the <strong className="text-foreground">largest therapeutic segment</strong>, followed by diabetes and obesity (e.g. GLP-1s). For a broader regional comparison, see our <Link to="/mena-pharma-market-data" className="text-primary hover:underline">MENA Pharmaceutical Market Data 2026</Link> and <Link to="/gcc-market-access-guide" className="text-primary hover:underline">GCC Pharmaceutical Market Access Guide</Link>.</p>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="top-companies"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Top Pharmaceutical Companies in the UAE</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">The following table lists the major pharmaceutical companies operating in the UAE — including local manufacturers, multinational corporation offices, regional players, and leading pharmacy chains.</p>
          <div className="overflow-x-auto rounded-xl border border-border"><table className="w-full text-sm"><thead><tr className="bg-primary/5 border-b border-border"><th className="text-left px-4 py-3 font-semibold text-foreground">Company</th><th className="text-left px-4 py-3 font-semibold text-foreground">HQ</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Type</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden lg:table-cell">Therapeutic Areas</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden xl:table-cell">Notes</th></tr></thead><tbody>
            {pharmaCompanies.map((c, i) => (<tr key={c.name} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}><td className="px-4 py-3 font-medium text-foreground">{c.name}</td><td className="px-4 py-3 text-muted-foreground">{c.hq}</td><td className="px-4 py-3 hidden md:table-cell"><span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${c.type === 'Local Manufacturer' ? 'bg-green-50 text-green-700' : c.type === 'MNC Office' ? 'bg-blue-50 text-blue-700' : c.type === 'Regional' ? 'bg-amber-50 text-amber-700' : 'bg-purple-50 text-purple-700'}`}>{c.type}</span></td><td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">{c.therapeuticAreas}</td><td className="px-4 py-3 text-muted-foreground text-xs hidden xl:table-cell">{c.notes}</td></tr>))}
          </tbody></table></div>
        </div></section>

        <section className="section-padding py-16" id="companies-by-category"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">List of Pharmaceutical Companies in the UAE by Category</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">UAE pharmaceutical companies span local manufacturers (e.g. Julphar, Neopharma, Globalpharma), multinational corporations with regional offices (including AstraZeneca regional HQ in Dubai), regional players, and major pharmacy chains dominating retail distribution.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center"><Pill className="w-5 h-5 text-green-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Local Manufacturers</h3></div><p className="text-sm text-muted-foreground mb-4">The UAE has several local pharmaceutical manufacturers, led by Julphar (Gulf Pharmaceutical Industries) — the largest Arab pharma company, based in Ras Al Khaimah and operating in 50+ countries. Neopharma (Abu Dhabi), Globalpharma (Dubai, WHO prequalified), Gulf Inject (injectables), and Pharmax (consumer health) round out the local base.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Local Manufacturer').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-green-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center"><Globe className="w-5 h-5 text-blue-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Multinational Pharma Offices</h3></div><p className="text-sm text-muted-foreground mb-4">Major global pharmaceutical companies maintain offices in the UAE; AstraZeneca has its regional HQ in Dubai. MNCs dominate the innovator segment. Eli Lilly is among the fastest-growing (100%+ YoY); Novo Nordisk (Ozempic/Wegovy) is driving strong growth in diabetes and obesity.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'MNC Office').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-blue-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center"><Building2 className="w-5 h-5 text-amber-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Regional Pharma Companies</h3></div><p className="text-sm text-muted-foreground mb-4">Regional pharmaceutical companies such as Hikma Pharmaceuticals play important roles in the UAE generics and injectable segments, benefiting from GCC regulatory harmonisation.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Regional').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center"><Truck className="w-5 h-5 text-purple-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Pharmacy Chains &amp; Distributors</h3></div><p className="text-sm text-muted-foreground mb-4">The UAE retail pharmacy market is dominated by Life Pharmacy (300+ stores, largest chain), Aster Pharmacy (250+), and BinSina Pharmacy.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Distributor').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-purple-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="regulatory-landscape"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Pharma Companies in the UAE: Regulatory Landscape (MOHAP / DHA / DOH)</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">The UAE uses a triple-regulator system: federal MOHAP, Dubai Health Authority (DHA), and Department of Health Abu Dhabi (DOH). Registration timelines are the fastest in the GCC.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" />Regulatory Authorities</h3><p className="text-sm text-muted-foreground leading-relaxed mb-4"><strong className="text-foreground">MOHAP</strong> (federal), <strong className="text-foreground">DHA</strong> (Dubai), and <strong className="text-foreground">DOH</strong> (Abu Dhabi) oversee pharmaceutical registration, quality control, pricing, and import licensing depending on emirate. Submissions follow CTD format; pricing uses <strong className="text-foreground">External Reference Pricing (EU + regional basket)</strong>.</p><div className="space-y-3"><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Registration Timeline</p><p className="text-lg font-semibold text-foreground">6–14 months (fastest in GCC)</p></div><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pricing Model</p><p className="text-sm text-foreground">External Reference Pricing (EU + regional basket)</p></div></div></div>
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Pill className="w-5 h-5 text-primary" />Key Registration Requirements</h3><ul className="space-y-3 text-sm text-foreground"><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>CTD dossier via relevant authority (MOHAP / DHA / DOH)</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>GMP certificates and inspections</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Stability data for relevant climate zone</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Arabic labelling mandatory</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Clinical trial / bioequivalence data (generics)</span></li><li className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0"><Building2 className="w-4 h-4" /></span><span className="font-medium">Local authorised representative typically required</span></li></ul></div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">Biopharmaceutical Manufacturing &amp; Free Zones</h3><p className="text-sm text-muted-foreground leading-relaxed">The UAE is developing biopharmaceutical manufacturing capacity (e.g. dedicated campus initiatives) and benefits from free zone logistics hubs, supporting both import and future local production. For complete GCC registration details, see our <Link to="/gcc-market-access-guide" className="text-primary hover:underline">GCC Pharmaceutical Market Access Guide</Link>.</p></div>
        </div></section>

        <section className="section-padding py-16" id="distribution-channels"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Drug Distribution Channels in the UAE</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">The UAE pharmaceutical distribution is dominated by the private sector (insurance-driven), with government channels playing a significant role.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-primary" />Private Sector (~60%)</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p>Mandatory health insurance in Abu Dhabi and Dubai drives the majority of pharmaceutical utilisation. Major hospital groups and pharmacy chains form the backbone of private distribution.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Hospital groups: NMC, Aster DM, Mediclinic</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Pharmacy chains: Life Pharmacy (300+), Aster (250+), BinSina</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Insurance-driven reimbursement; higher innovator uptake</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> E-pharmacy and digital health growing</li></ul></div></div>
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-primary" />Government Channel (~40%)</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p>MOHAP, DHA, and DOH oversee public-sector procurement and reimbursement. Government hospitals and primary care centres serve citizens and eligible residents.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Federal and emirate-level health authorities</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Tender and formulary processes</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Growing biosimilar adoption for cost control</li></ul></div></div>
          </div>
        </div></section>

        <section className="section-padding py-16" id="growth-drivers"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">UAE Pharmaceutical Market Growth Drivers</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Medical tourism, mandatory insurance, and strategic healthcare investments are driving the UAE&apos;s position as the fastest-growing GCC pharma market.</p>
          <div className="grid md:grid-cols-3 gap-6">{[
            { title: 'Medical Tourism', desc: 'Over 630,000 medical tourists annually make the UAE a major regional hub for specialty care and high-value treatments, driving demand for oncology, aesthetics, and advanced therapies.' },
            { title: 'Mandatory Insurance (Abu Dhabi & Dubai)', desc: 'Mandatory health insurance in Abu Dhabi and Dubai expands coverage and drives private-sector pharmaceutical utilisation, supporting innovator drug uptake.' },
            { title: 'Dubai Health Strategy', desc: 'Dubai\'s health strategy focuses on quality, medical tourism, and digital health, creating sustained demand for pharmaceuticals and specialty care.' },
            { title: 'Biopharmaceutical Manufacturing Campus', desc: 'Investments in biopharma manufacturing and free zone logistics support local production and re-exports, reducing long-term import dependency.' },
            { title: 'E-Pharmacy & Digital Health', desc: 'E-pharmacy and digital health initiatives are expanding access and convenience, supporting growth in OTC and chronic disease management.' },
            { title: 'Free Zone Logistics Hub', desc: 'UAE free zones serve as regional logistics hubs for pharma distribution, supporting both domestic supply and re-exports across the GCC and wider MENA.' },
          ].map((d) => (<div key={d.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{d.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-16" id="bionixus-support"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">How BioNixus Supports Pharma Companies in the UAE</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">BioNixus is a leading healthcare market research company with deep expertise in the UAE and GCC pharmaceutical markets. We help pharma, biotech, and medtech companies with:</p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">{[
            { title: 'Physician Surveys & KOL Mapping', desc: 'Large-scale quantitative and qualitative research with UAE physicians across DHA, DOH, MOHAP, and private hospitals. Arabic-English bilingual capabilities.' },
            { title: 'Market Access & Regulatory Strategy', desc: 'MOHAP/DHA/DOH formulary strategy, competitive pricing analysis, reimbursement landscape, and payer research to optimise commercial success in the UAE.' },
            { title: 'Competitive Intelligence', desc: 'Real-time monitoring of competitor launches, tender outcomes, formulary changes, and market share across all therapeutic areas in the UAE and GCC.' },
            { title: 'Market Entry Strategy', desc: 'Comprehensive market assessment including regulatory pathway analysis (6–14 months fastest GCC), local partner identification, KOL engagement, and go-to-market planning for the UAE.' },
          ].map((s) => (<div key={s.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{s.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="faq"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">{faqItems.map((faq) => (<div key={faq.q} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-12" id="methodology"><div className="container-wide max-w-5xl mx-auto"><div className="bg-card border border-border rounded-xl p-8"><h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" />Data Sources &amp; Methodology</h2><p className="text-sm text-muted-foreground leading-relaxed mb-4">This guide aggregates publicly available information from:</p><ul className="text-sm text-muted-foreground space-y-2 mb-6"><li>IQVIA Middle East &amp; Africa Pharmaceutical Market Report</li><li>MOHAP, DHA, DOH — regulatory and market data</li><li>Company filings and annual reports (Julphar, Neopharma, etc.)</li><li>BioNixus proprietary research from physician surveys across the UAE (2024–2025)</li></ul><p className="text-sm text-muted-foreground leading-relaxed">For customised market intelligence on the UAE, <Link to="/contact" className="text-primary hover:underline">contact our team</Link>.</p></div></div></section>

        <section className="section-padding py-16 bg-primary text-primary-foreground"><div className="container-wide max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">Need Market Intelligence on the UAE?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">BioNixus delivers custom pharmaceutical market research across the UAE and the GCC — physician surveys, competitive intelligence, market access strategy, and KOL mapping.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors">Request a Proposal <ArrowRight className="w-4 h-4" /></Link><Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground font-semibold hover:bg-white/20 transition-colors">View Our Services</Link></div>
        </div></section>
      </main>
      <Footer />
    </div>
  );
};

export default UaePharmaCompanies;
