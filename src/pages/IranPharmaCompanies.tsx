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
  { name: 'Darou Pakhsh', hq: 'Iran', type: 'Local Manufacturer', therapeuticAreas: 'Multi-therapeutic, generics, OTC', notes: 'Largest private pharma; 10% market share' },
  { name: 'Sobhan Pharmaceutical', hq: 'Iran', type: 'Local Manufacturer', therapeuticAreas: 'Biologics, insulin', notes: 'Biologics leader; insulin producer' },
  { name: 'Razak Laboratories', hq: 'Iran', type: 'Local Manufacturer', therapeuticAreas: 'Generics', notes: 'Generics; exports to 20+ countries' },
  { name: 'Abidi Pharmaceutical', hq: 'Iran', type: 'Local Manufacturer', therapeuticAreas: 'OTC', notes: 'OTC leader; strong brands' },
  { name: 'Hakim Pharmaceutical', hq: 'Iran', type: 'Local Manufacturer', therapeuticAreas: 'Generics, OTC', notes: 'Generics & OTC' },
  { name: 'Exir Pharmaceutical', hq: 'Iran', type: 'Local Manufacturer', therapeuticAreas: 'Biosimilars, vaccines', notes: 'Biosimilars, vaccines' },
  { name: 'Osvah Pharmaceutical', hq: 'Iran', type: 'Local Manufacturer', therapeuticAreas: 'Anti-cancer drugs', notes: 'Government-owned; anti-cancer drugs' },
  { name: 'Rouz Darou', hq: 'Iran', type: 'Local Manufacturer', therapeuticAreas: 'Generics', notes: 'Modern generics facility' },
  { name: 'Cinnagen', hq: 'Iran', type: 'Local Manufacturer', therapeuticAreas: 'Biotechnology, EPO, insulin', notes: 'Biotechnology pioneer; EPO, insulin' },
  { name: 'Tehran Chemie', hq: 'Iran', type: 'Local Manufacturer', therapeuticAreas: 'Specialty generics', notes: 'Specialty generics' },
  { name: 'Novartis', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Multi-therapeutic', notes: 'Limited operations due to sanctions' },
  { name: 'Roche', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, diagnostics', notes: 'Through distributors' },
  { name: 'Sanofi', hq: 'France', type: 'MNC Office', therapeuticAreas: 'Diabetes, vaccines', notes: 'Through local partners' },
  { name: 'Cipla', hq: 'India', type: 'Regional', therapeuticAreas: 'Generics', notes: 'Growing Iran exports' },
  { name: "Dr. Reddy's", hq: 'India', type: 'Regional', therapeuticAreas: 'Generics', notes: 'Generics supply' },
  { name: 'Ranbaxy / Sun Pharma', hq: 'India', type: 'Regional', therapeuticAreas: 'Generics', notes: 'India-based; Iran presence' },
  { name: 'Darou Pakhsh Distribution', hq: 'Iran', type: 'Distributor', therapeuticAreas: 'Pharma distribution', notes: 'Largest pharma distributor' },
  { name: 'Hakim Distribution', hq: 'Iran', type: 'Distributor', therapeuticAreas: 'Pharma distribution', notes: 'Major distributor' },
  { name: 'TPICO (Tehran Pharma Investment Co.)', hq: 'Iran', type: 'Distributor', therapeuticAreas: 'Pharma distribution', notes: 'Tehran Pharma Investment Co.' },
];

const faqItems = [
  { q: 'How many pharmaceutical companies operate in Iran?', a: 'Iran has over 180 licensed pharmaceutical manufacturers and hundreds of registered companies including multinational offices (limited due to sanctions), regional suppliers, and distributors. The market is the second-largest in MENA by volume, valued at $4.2 billion, with approximately 95% of pharmaceuticals produced locally.' },
  { q: 'What is the size of Iran\'s pharmaceutical market?', a: 'Iran\'s pharmaceutical market is valued at approximately US$4.2 billion, growing at 7.3% year-over-year. With a population of 88.6 million (the largest in the region) and per-capita pharmaceutical spending of $47, Iran is uniquely self-sufficient — about 95% of drugs consumed are produced domestically.' },
  { q: 'How dominant is local pharmaceutical manufacturing in Iran?', a: 'Iran is one of the most self-sufficient pharmaceutical markets globally: approximately 95% of medicines are produced locally by 180+ manufacturers. Sanctions have driven local innovation, especially in biosimilars (insulin, EPO) and generics. Only around 5% of the market is supplied by imports.' },
  { q: 'How do sanctions affect the pharmaceutical market in Iran?', a: 'Sanctions have limited direct MNC operations; many global companies (e.g. Novartis, Roche, Sanofi) operate through distributors or local partners. They have also accelerated local R&D and biosimilar development. Post-sanctions scenarios could open significant opportunities for foreign investment and partnerships.' },
  { q: 'Does Iran have biosimilar capabilities?', a: 'Yes. Iran has developed a strong biosimilar sector driven by necessity under sanctions. Companies such as Sobhan Pharmaceutical (insulin), Cinnagen (EPO, insulin), and Exir Pharmaceutical (biosimilars, vaccines) are regional leaders. University–pharma research partnerships and a knowledge-based economy push support ongoing development.' },
  { q: 'How do you register a pharmaceutical product with IFDA?', a: 'Drug registration with the Iran Food and Drug Administration (IFDA) requires submission of a full dossier including GMP certificates, stability data, and labelling in Persian. The process typically takes 12–24 months. IFDA controls pricing (government-controlled), distribution chain, and renewal (5-year renewal). A local representative is typically required for foreign manufacturers.' },
];

const IranPharmaCompanies = () => {
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const citationUrl = 'https://www.bionixus.com/pharmaceutical-companies-iran';

  const ogTitle = "Pharmaceutical Companies in Iran — Complete Industry Guide 2026";
  const ogDescription = "Comprehensive guide: pharmaceutical companies in Iran, $4.2B market data, 95% local production, IFDA registration, and market outlook.";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pharmaceutical Companies in Iran | Industry Guide 2026 | BioNixus</title>
        <meta name="description" content="Complete guide to pharmaceutical companies in Iran for 2026: top pharma companies list, $4.2B market size, 95% local production, IFDA drug registration, and industry outlook." />
        <meta name="keywords" content="pharmaceutical companies in Iran, Iran pharmaceutical companies, pharma companies in Iran, top pharmaceutical companies in Iran, list of pharmaceutical companies in Iran, IFDA drug registration, Iran pharma market, Iranian pharma manufacturers" />
        <link rel="canonical" href={citationUrl} />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Pharmaceutical Companies in Iran: Complete Industry Guide 2026', description: 'Comprehensive guide to pharmaceutical companies operating in Iran — local manufacturers, MNC offices, distributors, $4.2B market data, IFDA regulatory landscape, and 95% local production.', url: citationUrl, datePublished: '2026-02-15', dateModified: '2026-02-15', author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' }, publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' } })}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' }, { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.bionixus.com/resources' }, { '@type': 'ListItem', position: 3, name: 'Pharmaceutical Companies in Iran' }] })}</script>
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
        <div className="section-padding pt-24 pb-4"><div className="container-wide"><div className="flex items-center gap-2 text-sm text-muted-foreground mb-6"><Link to={basePath} className="hover:text-primary transition-colors">Home</Link><span>/</span><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link><span>/</span><span className="text-foreground">Pharmaceutical Companies in Iran</span></div></div></div>

        <section className="section-padding pt-0 pb-12"><div className="container-wide max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"><Building2 className="w-4 h-4" />Industry Guide 2026</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">Pharmaceutical Companies in Iran</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">A comprehensive guide to the pharmaceutical industry in Iran — the MENA region&apos;s second-largest pharma market by volume. Covering major pharma companies, IFDA regulatory framework, 95% local production, market data, distribution channels, and strategic opportunities.</p>
          <p className="text-sm text-muted-foreground">Last updated: February 2026 &middot; Sources: IFDA, industry reports, company filings</p>
          <div className="mt-8 p-5 bg-muted/50 border border-border rounded-xl"><div className="flex items-start gap-3"><Share2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground text-sm mb-1">Cite this guide</p><p className="text-sm text-muted-foreground leading-relaxed">BioNixus. &quot;Pharmaceutical Companies in Iran: Complete Industry Guide 2026.&quot; BioNixus Healthcare Market Research, Feb. 2026, <a href={citationUrl} className="text-primary hover:underline break-all">{citationUrl}</a>.<br />Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CC BY 4.0</a> — free to share and adapt with attribution.</p></div></div></div>
        </div></section>

        <section className="section-padding py-12 bg-primary text-primary-foreground"><div className="container-wide max-w-5xl mx-auto"><div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><p className="text-3xl md:text-4xl font-display font-bold">$4.2B</p><p className="text-primary-foreground/70 text-sm mt-1">Pharmaceutical market value</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">7.3%</p><p className="text-primary-foreground/70 text-sm mt-1">Year-over-year growth</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">88.6M</p><p className="text-primary-foreground/70 text-sm mt-1">Population</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">$47</p><p className="text-primary-foreground/70 text-sm mt-1">Pharma spending per capita</p></div>
        </div></div></section>

        <section className="section-padding py-8 bg-muted/30"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
          <div className="grid md:grid-cols-2 gap-2">
            <a href="#market-overview" className="text-sm text-primary hover:underline flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Iranian Pharmaceutical Market Overview</a>
            <a href="#top-companies" className="text-sm text-primary hover:underline flex items-center gap-2"><Building2 className="w-4 h-4" /> Top Pharmaceutical Companies</a>
            <a href="#companies-by-category" className="text-sm text-primary hover:underline flex items-center gap-2"><Users className="w-4 h-4" /> Companies by Category</a>
            <a href="#regulatory-landscape" className="text-sm text-primary hover:underline flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> IFDA Regulatory Landscape</a>
            <a href="#distribution-channels" className="text-sm text-primary hover:underline flex items-center gap-2"><Truck className="w-4 h-4" /> Distribution Channels</a>
            <a href="#growth-drivers" className="text-sm text-primary hover:underline flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Growth Drivers</a>
            <a href="#bionixus-support" className="text-sm text-primary hover:underline flex items-center gap-2"><Globe className="w-4 h-4" /> How BioNixus Supports Pharma in Iran</a>
            <a href="#faq" className="text-sm text-primary hover:underline flex items-center gap-2"><BookOpen className="w-4 h-4" /> Frequently Asked Questions</a>
          </div>
        </div></section>

        <section className="section-padding py-16" id="market-overview"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Iran Pharmaceutical Market Overview</h2>
          <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
            <p>Iran is the <strong className="text-foreground">MENA region&apos;s second-largest pharmaceutical market by volume</strong>, valued at approximately <strong className="text-foreground">US$4.2 billion</strong>, growing at <strong className="text-foreground">7.3% year-over-year</strong>. With a population of <strong className="text-foreground">88.6 million</strong> (the largest in the region) and per-capita pharmaceutical spending of <strong className="text-foreground">$47</strong>, Iran is uniquely <strong className="text-foreground">95% self-sufficient</strong> in pharmaceutical production — about 180+ manufacturers supply the vast majority of medicines domestically.</p>
            <p>Sanctions have driven local innovation, especially in biosimilars (insulin, EPO) and generics. Only around <strong className="text-foreground">5% of the market</strong> is supplied by imports. The <strong className="text-foreground">Iran Food and Drug Administration (IFDA)</strong> regulates all aspects of registration, pricing (government-controlled), and distribution. For broader regional context, see our <Link to="/mena-pharma-market-data" className="text-primary hover:underline">MENA Pharmaceutical Market Data 2026</Link> and <Link to="/gcc-market-access-guide" className="text-primary hover:underline">GCC Pharmaceutical Market Access Guide</Link>.</p>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="top-companies"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Top Pharmaceutical Companies in Iran</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">The following table lists major pharmaceutical companies operating in Iran — including local manufacturers, limited MNC presence, regional suppliers, and leading distributors.</p>
          <div className="overflow-x-auto rounded-xl border border-border"><table className="w-full text-sm"><thead><tr className="bg-primary/5 border-b border-border"><th className="text-left px-4 py-3 font-semibold text-foreground">Company</th><th className="text-left px-4 py-3 font-semibold text-foreground">HQ</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Type</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden lg:table-cell">Therapeutic Areas</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden xl:table-cell">Notes</th></tr></thead><tbody>
            {pharmaCompanies.map((c, i) => (<tr key={c.name} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}><td className="px-4 py-3 font-medium text-foreground">{c.name}</td><td className="px-4 py-3 text-muted-foreground">{c.hq}</td><td className="px-4 py-3 hidden md:table-cell"><span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${c.type === 'Local Manufacturer' ? 'bg-green-50 text-green-700' : c.type === 'MNC Office' ? 'bg-blue-50 text-blue-700' : c.type === 'Regional' ? 'bg-amber-50 text-amber-700' : 'bg-purple-50 text-purple-700'}`}>{c.type}</span></td><td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">{c.therapeuticAreas}</td><td className="px-4 py-3 text-muted-foreground text-xs hidden xl:table-cell">{c.notes}</td></tr>))}
          </tbody></table></div>
        </div></section>

        <section className="section-padding py-16" id="companies-by-category"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">List of Pharmaceutical Companies in Iran by Category</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Iran pharmaceutical companies span dominant local manufacturers (95% of supply), limited MNC operations through distributors or partners, regional Indian suppliers, and major distributors controlling the IFDA-regulated chain.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center"><Pill className="w-5 h-5 text-green-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Local Manufacturers</h3></div><p className="text-sm text-muted-foreground mb-4">Iran has 180+ licensed pharmaceutical manufacturers; approximately 95% of medicines are produced locally. Leaders include Darou Pakhsh (10% market share), Sobhan (biologics, insulin), Razak (generics, exports), Cinnagen (biotech, EPO, insulin), and Exir (biosimilars, vaccines).</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Local Manufacturer').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-green-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center"><Globe className="w-5 h-5 text-blue-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">MNC Offices (Limited)</h3></div><p className="text-sm text-muted-foreground mb-4">Multinational presence is limited due to sanctions. Novartis, Roche, and Sanofi operate through limited operations, distributors, or local partners. Post-sanctions scenarios could expand MNC engagement.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'MNC Office').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-blue-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center"><Building2 className="w-5 h-5 text-amber-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Regional (India)</h3></div><p className="text-sm text-muted-foreground mb-4">Indian companies such as Cipla, Dr. Reddy&apos;s, and Ranbaxy/Sun Pharma supply generics to Iran, with growing export volumes.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Regional').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center"><Truck className="w-5 h-5 text-purple-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Distributors</h3></div><p className="text-sm text-muted-foreground mb-4">Distribution is dominated by Darou Pakhsh Distribution (largest), Hakim Distribution, and TPICO. IFDA controls the distribution chain; 10,000+ pharmacies operate nationwide.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Distributor').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-purple-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="regulatory-landscape"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Pharma Companies in Iran: IFDA Regulatory Landscape</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">The Iran Food and Drug Administration (IFDA) regulates pharmaceutical registration, quality control, government-controlled pricing, and the distribution chain.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" />Regulatory Authority</h3><p className="text-sm text-muted-foreground leading-relaxed mb-4">The <strong className="text-foreground">Iran Food and Drug Administration (IFDA)</strong> oversees all pharmaceutical registration, quality control, pricing (government-controlled), pharmacovigilance, and distribution. IFDA controls the entire supply chain from registration to pharmacy.</p><div className="space-y-3"><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Registration Timeline</p><p className="text-lg font-semibold text-foreground">12&ndash;24 months</p></div><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Renewal Period</p><p className="text-lg font-semibold text-foreground">5 years</p></div><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pricing Model</p><p className="text-sm text-foreground">Government-controlled pricing (IFDA)</p></div></div></div>
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Pill className="w-5 h-5 text-primary" />Key Registration Requirements</h3><ul className="space-y-3 text-sm text-foreground"><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Full dossier submission to IFDA</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>GMP certificates and stability data</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Labelling in Persian (Farsi)</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Local representative typically required for foreign manufacturers</span></li><li className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0"><Building2 className="w-4 h-4" /></span><span className="font-medium">Government-controlled pricing set by IFDA</span></li></ul></div>
          </div>
        </div></section>

        <section className="section-padding py-16" id="distribution-channels"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Drug Distribution Channels in Iran</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Iran&apos;s pharmaceutical distribution is government-dominated, with insurance bodies and IFDA controlling the chain. Over 10,000 pharmacies operate nationwide.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-primary" />Government &amp; Insurance (~95% coverage)</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p>The <strong className="text-foreground">Social Security Organization</strong>, <strong className="text-foreground">Armed Forces insurance</strong>, and <strong className="text-foreground">Salamat insurance</strong> cover approximately 95% of the population. IFDA controls the distribution chain from manufacturer to pharmacy.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Social Security Organization (major payer)</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Armed Forces and Salamat insurance</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> 10,000+ pharmacies nationwide</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> IFDA-regulated supply chain</li></ul></div></div>
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-primary" />Key Distributors</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p>Darou Pakhsh Distribution is the largest pharma distributor; Hakim Distribution and TPICO (Tehran Pharma Investment Co.) are other major players. All operate under IFDA oversight.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Darou Pakhsh Distribution</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Hakim Distribution, TPICO</li></ul></div></div>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="growth-drivers"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Iran Pharmaceutical Market Growth Drivers</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Self-sufficiency, population size, and innovation under constraints drive Iran&apos;s pharmaceutical sector.</p>
          <div className="grid md:grid-cols-3 gap-6">{[
            { title: '95% Local Production', desc: 'Iran is one of the most self-sufficient pharma markets globally. Approximately 95% of medicines are produced domestically by 180+ manufacturers, with only ~5% import dependency. This creates a resilient supply base and export potential.' },
            { title: '88.6M Population', desc: 'Iran has the largest population in the region (88.6 million), providing a large addressable market and sustained demand for generics, biosimilars, and essential medicines.' },
            { title: 'Biosimilar Development Hub', desc: 'Sanctions have accelerated local R&D in biosimilars (insulin, EPO) and vaccines. Companies like Sobhan, Cinnagen, and Exir are regional leaders in biotech and biosimilars.' },
            { title: 'Knowledge-Based Economy Push', desc: 'Government emphasis on knowledge-based enterprises and university–pharma research partnerships supports innovation and local drug development.' },
            { title: 'University–Pharma Partnerships', desc: 'Strong linkages between universities and pharmaceutical companies drive R&D, clinical trials, and talent pipeline for the domestic industry.' },
            { title: 'Post-Sanctions Opportunity', desc: 'Any easing of sanctions could open significant opportunities for foreign investment, MNC partnerships, technology transfer, and export growth.' },
          ].map((d) => (<div key={d.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{d.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-16" id="bionixus-support"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">How BioNixus Supports Pharma Companies in Iran</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">BioNixus provides healthcare market research and strategic support for companies engaging with the Iranian pharmaceutical market. We help with:</p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">{[
            { title: 'Market & Competitive Intelligence', desc: 'Assessment of local manufacturers, biosimilar capabilities, distribution landscape, and competitive dynamics in Iran\'s pharma sector.' },
            { title: 'IFDA & Market Access Strategy', desc: 'Regulatory pathway analysis, IFDA registration process, government pricing and reimbursement landscape, and partner identification.' },
            { title: 'Partner & Distributor Mapping', desc: 'Identification of credible local partners, distributors (e.g. Darou Pakhsh Distribution, TPICO), and potential collaboration opportunities.' },
            { title: 'Post-Sanctions Readiness', desc: 'Scenario planning, market entry strategies, and commercial due diligence for companies considering Iran once regulatory and trade conditions allow.' },
          ].map((s) => (<div key={s.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{s.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="faq"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">{faqItems.map((faq) => (<div key={faq.q} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-12" id="methodology"><div className="container-wide max-w-5xl mx-auto"><div className="bg-card border border-border rounded-xl p-8"><h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" />Data Sources &amp; Methodology</h2><p className="text-sm text-muted-foreground leading-relaxed mb-4">This guide aggregates publicly available information from:</p><ul className="text-sm text-muted-foreground space-y-2 mb-6"><li>IFDA and Iranian pharmaceutical industry sources</li><li>Industry reports and company filings</li><li>BioNixus proprietary research and market assessments</li></ul><p className="text-sm text-muted-foreground leading-relaxed">For customised market intelligence on Iran, <Link to="/contact" className="text-primary hover:underline">contact our team</Link>.</p></div></div></section>

        <section className="section-padding py-16 bg-primary text-primary-foreground"><div className="container-wide max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">Need Market Intelligence on Iran?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">BioNixus delivers custom pharmaceutical market research and strategy support for Iran — competitive intelligence, IFDA regulatory guidance, partner mapping, and post-sanctions readiness.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors">Request a Proposal <ArrowRight className="w-4 h-4" /></Link><Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground font-semibold hover:bg-white/20 transition-colors">View Our Services</Link></div>
        </div></section>
      </main>
      <Footer />
    </div>
  );
};

export default IranPharmaCompanies;
