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
  { name: 'Bahrain Pharma', hq: 'Bahrain', type: 'Local Manufacturer', therapeuticAreas: 'Generics', notes: 'Leading local manufacturer; generics' },
  { name: 'Gulf Biotech', hq: 'Bahrain', type: 'Local Manufacturer', therapeuticAreas: 'Biotech & generics', notes: 'Bahrain Investment Wharf; biotech & generics' },
  { name: 'Pfizer', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, vaccines, inflammation, rare diseases', notes: 'Major NHRA-registered portfolio; MNC presence in Bahrain' },
  { name: 'Novartis', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, immunology, ophthalmology, cardiovascular', notes: 'Strong regional presence; Bahrain market access' },
  { name: 'Roche', hq: 'Switzerland', type: 'MNC Office', therapeuticAreas: 'Oncology, haematology, neuroscience, diagnostics', notes: 'Leading oncology portfolio; Bahrain operations' },
  { name: 'Sanofi', hq: 'France', type: 'MNC Office', therapeuticAreas: 'Diabetes, vaccines, rare diseases, consumer health', notes: 'Insulin and vaccine franchise in Bahrain' },
  { name: 'AstraZeneca', hq: 'UK / Sweden', type: 'MNC Office', therapeuticAreas: 'Oncology, respiratory, cardiovascular, rare diseases', notes: 'Growing presence in Bahrain and GCC' },
  { name: 'GSK (GlaxoSmithKline)', hq: 'UK', type: 'MNC Office', therapeuticAreas: 'Vaccines, respiratory, HIV, consumer health', notes: 'Vaccine and respiratory franchise in Bahrain' },
  { name: 'MSD (Merck & Co.)', hq: 'USA', type: 'MNC Office', therapeuticAreas: 'Oncology, vaccines, infectious disease, diabetes', notes: 'Keytruda and vaccine programmes in Bahrain' },
  { name: 'Novo Nordisk', hq: 'Denmark', type: 'MNC Office', therapeuticAreas: 'Diabetes, obesity, rare diseases, haemophilia', notes: 'Insulin and GLP-1 presence in Bahrain' },
  { name: 'Julphar', hq: 'UAE', type: 'Regional', therapeuticAreas: 'Generics, antibiotics, consumer health', notes: 'Strong Bahrain exports; regional generics leader' },
  { name: 'Hikma Pharmaceuticals', hq: 'Jordan / UK', type: 'Regional', therapeuticAreas: 'Injectables, generics, branded generics', notes: 'MENA-headquartered; injectables in Bahrain hospitals' },
  { name: 'SPIMACO (Saudi Pharmaceutical Industries & Medical Appliances)', hq: 'Saudi Arabia', type: 'Regional', therapeuticAreas: 'Multi-therapeutic, generics, OTC, biosimilars', notes: 'Saudi manufacturer; Bahrain supply' },
  { name: 'Bahrain Pharmacy', hq: 'Bahrain', type: 'Distributor', therapeuticAreas: 'Retail pharmacy, OTC, consumer health', notes: 'Major pharmacy and distribution in Bahrain' },
  { name: 'Al Jishi Pharmacy', hq: 'Bahrain', type: 'Distributor', therapeuticAreas: 'Retail pharmacy, OTC, consumer health', notes: 'Pharmacy chain and distributor' },
  { name: 'National Medical Supplies', hq: 'Bahrain', type: 'Distributor', therapeuticAreas: 'Medical supplies, distribution', notes: 'Medical supplies and pharma distribution' },
];

const faqItems = [
  { q: 'How many pharmaceutical companies operate in Bahrain?', a: 'Bahrain has approximately 16 notable pharmaceutical companies including local manufacturers (Bahrain Pharma, Gulf Biotech), multinational offices (Pfizer, Novartis, Roche, Sanofi, AstraZeneca, GSK, MSD, Novo Nordisk), regional players (Julphar, Hikma, SPIMACO), and distributors (Bahrain Pharmacy, Al Jishi Pharmacy, National Medical Supplies). The market is the smallest in the GCC at $0.3 billion but well-regulated under NHRA.' },
  { q: 'What is the size of Bahrain\'s pharmaceutical market?', a: 'Bahrain\'s pharmaceutical market is valued at approximately US$0.3 billion, with 5.8% year-over-year growth. Per-capita pharmaceutical spending is around $188. The market is import-dependent (~95%) but benefits from NHRA regulatory modernisation and proximity to the Saudi market via the King Fahd Causeway.' },
  { q: 'How do you register a pharmaceutical product with NHRA?', a: 'Drug registration with the National Health Regulatory Authority (NHRA) of Bahrain typically takes 8–14 months. Requirements include a Common Technical Document (CTD), GMP certificates, stability data for GCC climate, Arabic labelling, and a local authorised representative. Registration is renewed every 5 years. NHRA uses reference pricing based on the GCC basket.' },
  { q: 'How does Vision 2030 affect Bahrain\'s pharmaceutical sector?', a: 'Bahrain\'s Economic Vision 2030 includes a healthcare pillar that supports regulatory modernisation (NHRA), growing health insurance coverage, and investment in digital health. The free zone and logistics hub status, plus proximity to Saudi Arabia, make Bahrain an attractive base for GCC market access.' },
  { q: 'Why is proximity to Saudi Arabia important for Bahrain pharma?', a: 'Bahrain is connected to Saudi Arabia by the King Fahd Causeway, making it a strategic logistics and re-export hub for the larger Saudi market. Many regional and MNC companies use Bahrain as a base for GCC operations. This proximity supports distribution and market access across both markets.' },
  { q: 'Do I need a local partner to sell pharmaceuticals in Bahrain?', a: 'Foreign pharmaceutical companies typically need a local authorised representative to handle NHRA regulatory submissions, in-country logistics, and pharmacovigilance. Local distributors (e.g. Bahrain Pharmacy, Al Jishi Pharmacy, National Medical Supplies) play a key role in market access.' },
];

const BahrainPharmaCompanies = () => {
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const citationUrl = 'https://www.bionixus.com/pharmaceutical-companies-bahrain';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Pharmaceutical Companies in Bahrain | Industry Guide 2026 | BioNixus</title>
        <meta name="description" content="Complete guide to pharmaceutical companies in Bahrain for 2026: top pharma companies list, $0.3B market size, NHRA drug registration, Vision 2030 healthcare pillar, and industry outlook." />
        <meta name="keywords" content="pharmaceutical companies in Bahrain, Bahrain pharmaceutical companies, pharma companies in Bahrain, top pharmaceutical companies in Bahrain, list of pharmaceutical companies in Bahrain, NHRA drug registration, Bahrain pharma market, Vision 2030 Bahrain" />
        <link rel="canonical" href={citationUrl} />
        <meta property="og:title" content="Pharmaceutical Companies in Bahrain — Complete Industry Guide 2026" />
        <meta property="og:description" content="Comprehensive guide: 16 pharmaceutical companies in Bahrain, $0.3B market data, NHRA registration, Vision 2030 healthcare, and market outlook." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={citationUrl} />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: 'Pharmaceutical Companies in Bahrain: Complete Industry Guide 2026', description: 'Comprehensive guide to pharmaceutical companies operating in Bahrain — local manufacturers, MNC offices, distributors, $0.3B market data, NHRA regulatory landscape, and Vision 2030 outlook.', url: citationUrl, datePublished: '2026-02-15', dateModified: '2026-02-15', author: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' }, publisher: { '@type': 'Organization', '@id': 'https://www.bionixus.com/#organization', name: 'BioNixus' } })}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' }, { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.bionixus.com/resources' }, { '@type': 'ListItem', position: 3, name: 'Pharmaceutical Companies in Bahrain' }] })}</script>
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) })}</script>
      </Helmet>
      <Navbar />
      <main>
        <div className="section-padding pt-24 pb-4"><div className="container-wide"><div className="flex items-center gap-2 text-sm text-muted-foreground mb-6"><Link to={basePath} className="hover:text-primary transition-colors">Home</Link><span>/</span><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link><span>/</span><span className="text-foreground">Pharmaceutical Companies in Bahrain</span></div></div></div>

        <section className="section-padding pt-0 pb-12"><div className="container-wide max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"><Building2 className="w-4 h-4" />Industry Guide 2026</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6 max-w-4xl">Pharmaceutical Companies in Bahrain</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">A comprehensive guide to the pharmaceutical industry in Bahrain — the smallest GCC market but well-regulated, with a $0.3B market growing at 5.8%. Covering major pharma companies, NHRA regulatory framework, Vision 2030 healthcare pillar, market data, distribution channels, and strategic advantages including proximity to Saudi Arabia.</p>
          <p className="text-sm text-muted-foreground">Last updated: February 2026 &middot; Sources: NHRA, IQVIA MEA, company filings, BioNixus research</p>
          <div className="mt-8 p-5 bg-muted/50 border border-border rounded-xl"><div className="flex items-start gap-3"><Share2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground text-sm mb-1">Cite this guide</p><p className="text-sm text-muted-foreground leading-relaxed">BioNixus. &quot;Pharmaceutical Companies in Bahrain: Complete Industry Guide 2026.&quot; BioNixus Healthcare Market Research, Feb. 2026, <a href={citationUrl} className="text-primary hover:underline break-all">{citationUrl}</a>.<br />Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CC BY 4.0</a> — free to share and adapt with attribution.</p></div></div></div>
        </div></section>

        <section className="section-padding py-12 bg-primary text-primary-foreground"><div className="container-wide max-w-5xl mx-auto"><div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><p className="text-3xl md:text-4xl font-display font-bold">$0.3B</p><p className="text-primary-foreground/70 text-sm mt-1">Pharmaceutical market value</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">5.8%</p><p className="text-primary-foreground/70 text-sm mt-1">Year-over-year growth</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">1.6M</p><p className="text-primary-foreground/70 text-sm mt-1">Population</p></div>
          <div><p className="text-3xl md:text-4xl font-display font-bold">$188</p><p className="text-primary-foreground/70 text-sm mt-1">Pharma spending per capita</p></div>
        </div></div></section>

        <section className="section-padding py-8 bg-muted/30"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">In this guide</h2>
          <div className="grid md:grid-cols-2 gap-2">
            <a href="#market-overview" className="text-sm text-primary hover:underline flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Bahrain Pharmaceutical Market Overview</a>
            <a href="#top-companies" className="text-sm text-primary hover:underline flex items-center gap-2"><Building2 className="w-4 h-4" /> Top Pharmaceutical Companies</a>
            <a href="#companies-by-category" className="text-sm text-primary hover:underline flex items-center gap-2"><Users className="w-4 h-4" /> Companies by Category</a>
            <a href="#regulatory-landscape" className="text-sm text-primary hover:underline flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> NHRA Regulatory Landscape</a>
            <a href="#distribution-channels" className="text-sm text-primary hover:underline flex items-center gap-2"><Truck className="w-4 h-4" /> Distribution Channels</a>
            <a href="#growth-drivers" className="text-sm text-primary hover:underline flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Vision 2030 &amp; Growth Drivers</a>
            <a href="#bionixus-support" className="text-sm text-primary hover:underline flex items-center gap-2"><Globe className="w-4 h-4" /> How BioNixus Supports Pharma in Bahrain</a>
            <a href="#faq" className="text-sm text-primary hover:underline flex items-center gap-2"><BookOpen className="w-4 h-4" /> Frequently Asked Questions</a>
          </div>
        </div></section>

        <section className="section-padding py-16" id="market-overview"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Bahrain Pharmaceutical Market Overview</h2>
          <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
            <p>Bahrain&apos;s pharmaceutical market is the <strong className="text-foreground">smallest in the GCC</strong> but well-regulated, valued at approximately <strong className="text-foreground">US$0.3 billion</strong> and growing at <strong className="text-foreground">5.8% year-over-year</strong>. With a population of 1.6 million and per-capita pharmaceutical spending of <strong className="text-foreground">$188</strong>, Bahrain is a compact market where the <strong className="text-foreground">National Health Regulatory Authority (NHRA)</strong> operates as a modern regulator aligned with regional standards.</p>
            <p>Approximately <strong className="text-foreground">95% of pharmaceuticals are imported</strong>, with local manufacturers Bahrain Pharma and Gulf Biotech serving part of the generics segment. Proximity to Saudi Arabia via the King Fahd Causeway is a <strong className="text-foreground">strategic advantage</strong> for companies using Bahrain as a logistics hub or re-export base for the larger GCC market.</p>
            <p>Vision 2030 (Bahrain&apos;s Economic Vision 2030) includes a healthcare pillar supporting NHRA regulatory modernisation, growing insurance coverage, and digital health. For regional context, see our <Link to="/mena-pharma-market-data" className="text-primary hover:underline">MENA Pharmaceutical Market Data 2026</Link> and <Link to="/gcc-market-access-guide" className="text-primary hover:underline">GCC Pharmaceutical Market Access Guide</Link>.</p>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="top-companies"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Top Pharmaceutical Companies in Bahrain</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">The following table lists the major pharmaceutical companies operating in Bahrain — including local manufacturers, multinational offices, regional players, and leading distributors.</p>
          <div className="overflow-x-auto rounded-xl border border-border"><table className="w-full text-sm"><thead><tr className="bg-primary/5 border-b border-border"><th className="text-left px-4 py-3 font-semibold text-foreground">Company</th><th className="text-left px-4 py-3 font-semibold text-foreground">HQ</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Type</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden lg:table-cell">Therapeutic Areas</th><th className="text-left px-4 py-3 font-semibold text-foreground hidden xl:table-cell">Notes</th></tr></thead><tbody>
            {pharmaCompanies.map((c, i) => (<tr key={c.name} className={`border-b border-border ${i % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}><td className="px-4 py-3 font-medium text-foreground">{c.name}</td><td className="px-4 py-3 text-muted-foreground">{c.hq}</td><td className="px-4 py-3 hidden md:table-cell"><span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${c.type === 'Local Manufacturer' ? 'bg-green-50 text-green-700' : c.type === 'MNC Office' ? 'bg-blue-50 text-blue-700' : c.type === 'Regional' ? 'bg-amber-50 text-amber-700' : 'bg-purple-50 text-purple-700'}`}>{c.type}</span></td><td className="px-4 py-3 text-muted-foreground hidden lg:table-cell">{c.therapeuticAreas}</td><td className="px-4 py-3 text-muted-foreground text-xs hidden xl:table-cell">{c.notes}</td></tr>))}
          </tbody></table></div>
        </div></section>

        <section className="section-padding py-16" id="companies-by-category"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">List of Pharmaceutical Companies in Bahrain by Category</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Bahrain pharmaceutical companies span local manufacturers, multinational corporation offices, regional suppliers, and key distributors.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center"><Pill className="w-5 h-5 text-green-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Local Manufacturers</h3></div><p className="text-sm text-muted-foreground mb-4">Bahrain has a small but growing local manufacturing base. Bahrain Pharma is the leading local manufacturer (generics); Gulf Biotech operates from Bahrain Investment Wharf in biotech and generics.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Local Manufacturer').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-green-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center"><Globe className="w-5 h-5 text-blue-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Multinational Pharma Offices</h3></div><p className="text-sm text-muted-foreground mb-4">Major global pharmaceutical companies maintain presence in Bahrain. MNCs dominate the innovator segment and use Bahrain as a base for GCC operations given proximity to Saudi Arabia.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'MNC Office').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-blue-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center"><Building2 className="w-5 h-5 text-amber-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Regional Pharma Companies</h3></div><p className="text-sm text-muted-foreground mb-4">Regional players from UAE, Jordan, and Saudi Arabia supply Bahrain with generics and injectables. Julphar has strong Bahrain exports; Hikma and SPIMACO supply the market.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Regional').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
            <div className="bg-card border border-border rounded-xl p-6"><div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center"><Truck className="w-5 h-5 text-purple-700" /></div><h3 className="text-lg font-display font-semibold text-foreground">Distributors</h3></div><p className="text-sm text-muted-foreground mb-4">Bahrain Pharmacy, Al Jishi Pharmacy, and National Medical Supplies are key distributors serving government and private channels.</p><ul className="space-y-1.5 text-sm text-foreground">{pharmaCompanies.filter(c => c.type === 'Distributor').map(c => (<li key={c.name} className="flex items-start gap-2"><span className="text-purple-600 mt-1 shrink-0">&#x2713;</span> {c.name}</li>))}</ul></div>
          </div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="regulatory-landscape"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Pharma Companies in Bahrain: NHRA Regulatory Landscape</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">The National Health Regulatory Authority (NHRA) is Bahrain&apos;s pharmaceutical regulator, with a modern framework aligned with GCC and international standards.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-primary" />Regulatory Authority</h3><p className="text-sm text-muted-foreground leading-relaxed mb-4">The <strong className="text-foreground">National Health Regulatory Authority (NHRA)</strong> oversees pharmaceutical registration, quality control, pricing, pharmacovigilance, and import licensing. Pricing follows <strong className="text-foreground">reference pricing (GCC basket)</strong>.</p><div className="space-y-3"><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Registration Timeline</p><p className="text-lg font-semibold text-foreground">8&ndash;14 months</p></div><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Renewal Period</p><p className="text-lg font-semibold text-foreground">5 years</p></div><div><p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Pricing Model</p><p className="text-sm text-foreground">Reference pricing (GCC basket)</p></div></div></div>
            <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Pill className="w-5 h-5 text-primary" />Key Registration Requirements</h3><ul className="space-y-3 text-sm text-foreground"><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>CTD dossier via NHRA processes</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>GMP certificates from recognised authorities</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Stability data for GCC climate conditions</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Arabic labelling mandatory</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Clinical trial and bioequivalence data (generics)</span></li><li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">&#x2713;</span><span>Certificate of Pharmaceutical Product (CPP)</span></li><li className="flex items-start gap-2"><span className="text-amber-600 mt-1 shrink-0"><Building2 className="w-4 h-4" /></span><span className="font-medium">Local authorised representative typically required</span></li></ul></div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">Vision 2030 &amp; NHRA Modernisation</h3><p className="text-sm text-muted-foreground leading-relaxed">Bahrain&apos;s Economic Vision 2030 includes a healthcare pillar supporting <strong className="text-foreground">NHRA regulatory modernisation</strong>, growing health insurance, and digital health. The free zone and logistics hub status, plus proximity to Saudi Arabia, support market access. For full GCC registration details, see our <Link to="/gcc-market-access-guide" className="text-primary hover:underline">GCC Pharmaceutical Market Access Guide</Link>.</p></div>
        </div></section>

        <section className="section-padding py-16" id="distribution-channels"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Drug Distribution Channels in Bahrain</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Bahrain&apos;s pharmaceutical distribution is government-dominant, with the private sector growing.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-primary" />Government Channel (Dominant)</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p>Government hospitals form the backbone of procurement. Key facilities include <strong className="text-foreground">King Hamad Hospital</strong>, <strong className="text-foreground">Salmaniya Medical Complex</strong>, and <strong className="text-foreground">BDF Hospital</strong> (Bahrain Defence Force).</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> King Hamad Hospital</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Salmaniya Medical Complex</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> BDF Hospital</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Government tender procurement</li></ul></div></div>
            <div className="bg-card border border-border rounded-xl p-8"><h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-primary" />Private Sector (Growing)</h3><div className="space-y-4 text-sm text-muted-foreground leading-relaxed"><p>The private sector is growing with expanding insurance and healthcare investment. Major private hospitals include <strong className="text-foreground">American Mission Hospital</strong> and <strong className="text-foreground">Royal Bahrain Hospital</strong>.</p><ul className="space-y-1.5"><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> American Mission Hospital</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Royal Bahrain Hospital</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Growing insurance coverage</li><li className="flex items-start gap-2"><span className="text-primary shrink-0">&#x25BA;</span> Pharmacy chains and distributors</li></ul></div></div>
          </div>
        </div></section>

        <section className="section-padding py-16" id="growth-drivers"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">Bahrain Pharmaceutical Market Growth Drivers</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">Vision 2030, NHRA modernisation, and strategic location drive growth in Bahrain&apos;s pharmaceutical sector.</p>
          <div className="grid md:grid-cols-3 gap-6">{[
            { title: 'Vision 2030 Healthcare Pillar', desc: 'Bahrain\'s Economic Vision 2030 includes healthcare as a key pillar, supporting regulatory modernisation, insurance expansion, and investment in health infrastructure and digital health.' },
            { title: 'NHRA Regulatory Modernisation', desc: 'NHRA is evolving as a modern regulator aligned with GCC and international standards, offering more predictable registration timelines and reference pricing (GCC basket).' },
            { title: 'Growing Insurance', desc: 'Expanding health insurance coverage is driving private-sector utilisation and creating reimbursement dynamics that support pharmaceutical uptake.' },
            { title: 'Free Zone & Logistics Hub', desc: 'Bahrain\'s free zone and logistics hub status makes it an attractive base for pharmaceutical distribution and re-export across the GCC.' },
            { title: 'Proximity to Saudi Market', desc: 'The King Fahd Causeway connects Bahrain to Saudi Arabia, enabling companies to use Bahrain as a strategic base for accessing the larger Saudi market.' },
            { title: 'Digital Health', desc: 'Investment in digital health and healthcare digitisation under Vision 2030 supports efficiency and creates opportunities for pharma engagement.' },
          ].map((d) => (<div key={d.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{d.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-16" id="bionixus-support"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">How BioNixus Supports Pharma Companies in Bahrain</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">BioNixus is a leading healthcare market research company with expertise in the Bahrain and GCC pharmaceutical markets. We help pharma, biotech, and medtech companies with:</p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">{[
            { title: 'Physician Surveys & KOL Mapping', desc: 'Quantitative and qualitative research with Bahrain and GCC physicians. Arabic-English bilingual capabilities across government and private hospitals.' },
            { title: 'Market Access & NHRA Strategy', desc: 'NHRA registration strategy, GCC reference pricing analysis, reimbursement landscape, and payer research for Bahrain and regional access.' },
            { title: 'Competitive Intelligence', desc: 'Monitoring of competitor launches, tender outcomes, formulary changes, and market share across therapeutic areas in Bahrain and the GCC.' },
            { title: 'Market Entry Strategy', desc: 'Market assessment including NHRA pathway analysis, local partner and distributor identification, and go-to-market planning for Bahrain and GCC hub strategies.' },
          ].map((s) => (<div key={s.title} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{s.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-16 bg-muted/30" id="faq"><div className="container-wide max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">{faqItems.map((faq) => (<div key={faq.q} className="bg-card border border-border rounded-xl p-6"><h3 className="text-lg font-display font-semibold text-foreground mb-3">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></div>))}</div>
        </div></section>

        <section className="section-padding py-12" id="methodology"><div className="container-wide max-w-5xl mx-auto"><div className="bg-card border border-border rounded-xl p-8"><h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary" />Data Sources &amp; Methodology</h2><p className="text-sm text-muted-foreground leading-relaxed mb-4">This guide aggregates publicly available information from:</p><ul className="text-sm text-muted-foreground space-y-2 mb-6"><li>IQVIA Middle East &amp; Africa Pharmaceutical Market Report</li><li>NHRA — National Health Regulatory Authority (Bahrain)</li><li>Bahrain Economic Vision 2030 documentation</li><li>Company and distributor sources</li><li>BioNixus proprietary research (Bahrain &amp; GCC, 2024–2025)</li></ul><p className="text-sm text-muted-foreground leading-relaxed">For customised market intelligence on Bahrain, <Link to="/contact" className="text-primary hover:underline">contact our team</Link>.</p></div></div></section>

        <section className="section-padding py-16 bg-primary text-primary-foreground"><div className="container-wide max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">Need Market Intelligence on Bahrain?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">BioNixus delivers custom pharmaceutical market research across Bahrain and the GCC — physician surveys, competitive intelligence, market access strategy, and KOL mapping.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors">Request a Proposal <ArrowRight className="w-4 h-4" /></Link><Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground font-semibold hover:bg-white/20 transition-colors">View Our Services</Link></div>
        </div></section>
      </main>
      <Footer />
    </div>
  );
};

export default BahrainPharmaCompanies;
