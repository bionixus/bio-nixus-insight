import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSanityBlog } from '@/hooks/useSanityBlog';
import { fetchCaseStudies } from '@/lib/sanity-case-studies';
import { LOW_INTERNAL_LINK_PATHS } from '@/lib/lowInternalLinkTargets.generated';
import { INTERNAL_LINK_PRIORITY_TARGETS } from '@/lib/internalLinkAmplificationTargets';

const staticLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/market-research', label: 'Market Research Hub' },
  { to: '/healthcare-market-research/uae', label: 'Market Research UAE' },
  { to: '/market-research-ksa', label: 'Market Research KSA' },
  { to: '/market-research-saudi', label: 'Market Research Saudi' },
  { to: '/market-research-kuwait', label: 'Market Research Kuwait' },
  { to: '/market-research-egypt', label: 'Market Research Egypt' },
  { to: '/market-research-healthcare', label: 'Healthcare Market Research' },
  { to: '/healthcare-market-research/saudi-arabia', label: 'Saudi Pharmaceutical Market Research' },
  { to: '/pharmacies-saudi-arabia-marketing', label: 'Pharmacy Market Research & Marketing Automation in Saudi Arabia' },
  { to: '/qualitative-market-research', label: 'Qualitative Market Research' },
  { to: '/quantitative-healthcare-market-research', label: 'Quantitative Healthcare Market Research' },
  { to: '/bionixus-market-research-middle-east', label: 'Middle East Market Research' },
  { to: '/healthcare-market-research', label: 'Healthcare Research Hub' },
  { to: '/global-websites', label: 'Global Websites' },
  { to: '/gcc-market-access-guide', label: 'GCC Market Access Guide' },
  { to: '/mena-pharma-market-data', label: 'MENA Pharma Market Data' },
  { to: '/blog', label: 'Blog' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/resources', label: 'Resources' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/methodology', label: 'Methodology' },
  { to: '/strategic-portfolio', label: 'Strategic Portfolio' },
  { to: '/blog/top-market-research-companies-egypt-2026', label: 'Top Market Research Companies in Egypt (2026)' },
];

const serviceLinks = [
  { to: '/services/quantitative-research', label: 'Quantitative Research' },
  { to: '/services/qualitative-research', label: 'Qualitative Research' },
  { to: '/services/market-access', label: 'Market Access' },
  { to: '/services/competitive-intelligence', label: 'Competitive Intelligence' },
  { to: '/services/clinical-trial-support', label: 'Clinical Trial Support' },
  { to: '/services/kol-stakeholder-mapping', label: 'KOL & Stakeholder Mapping' },
];

const pharmaCountryLinks = [
  { to: '/pharmaceutical-companies-saudi-arabia', label: 'Pharmaceutical Companies in Saudi Arabia' },
  { to: '/pharmaceutical-companies-uae', label: 'Pharmaceutical Companies in UAE' },
  { to: '/pharmaceutical-companies-egypt', label: 'Pharmaceutical Companies in Egypt' },
  { to: '/pharmaceutical-companies-kuwait', label: 'Pharmaceutical Companies in Kuwait' },
  { to: '/pharmaceutical-companies-qatar', label: 'Pharmaceutical Companies in Qatar' },
  { to: '/pharmaceutical-companies-oman', label: 'Pharmaceutical Companies in Oman' },
  { to: '/pharmaceutical-companies-bahrain', label: 'Pharmaceutical Companies in Bahrain' },
  { to: '/pharmaceutical-companies-iraq', label: 'Pharmaceutical Companies in Iraq' },
  { to: '/pharmaceutical-companies-iran', label: 'Pharmaceutical Companies in Iran' },
];

const healthcareCountryLinks = [
  { to: '/healthcare-market-research/europe', label: 'Healthcare Market Research in Europe' },
  { to: '/healthcare-market-research/uk', label: 'Healthcare Market Research in UK' },
  { to: '/healthcare-market-research/saudi-arabia', label: 'Healthcare Market Research in Saudi Arabia' },
  { to: '/healthcare-market-research/uae', label: 'Healthcare Market Research in UAE' },
  { to: '/healthcare-market-research/kuwait', label: 'Healthcare Market Research in Kuwait' },
  { to: '/healthcare-market-research/egypt', label: 'Healthcare Market Research in Egypt' },
];

const marketReportLinks = [
  { to: '/gcc-pharma-market-report-2026', label: 'GCC Pharmaceutical Market Report 2026' },
  { to: '/gcc-medical-devices-market-report', label: 'GCC Medical Devices Market Report 2026' },
  { to: '/gcc-anesthesia-surgical-market-report', label: 'GCC Anesthesia & Surgical Market Report 2026' },
  { to: '/saudi-arabia-healthcare-market-report', label: 'Saudi Arabia Healthcare Market Report 2026' },
  { to: '/saudi-arabia-medical-devices-market-report', label: 'Saudi Arabia Medical Devices Market Report 2026' },
  { to: '/uae-healthcare-market-report', label: 'UAE Healthcare Market Report 2026' },
  { to: '/uae-medical-devices-market-report', label: 'UAE Medical Devices Market Report 2026' },
  { to: '/kuwait-healthcare-market-report', label: 'Kuwait Healthcare Market Report 2026' },
  { to: '/kuwait-medical-devices-market-report', label: 'Kuwait Medical Devices Market Report 2026' },
  { to: '/qatar-healthcare-market-report', label: 'Qatar Healthcare Market Report 2026' },
  { to: '/qatar-medical-devices-market-report', label: 'Qatar Medical Devices Market Report 2026' },
  { to: '/bahrain-healthcare-market-report', label: 'Bahrain Healthcare Market Report 2026' },
  { to: '/bahrain-medical-devices-market-report', label: 'Bahrain Medical Devices Market Report 2026' },
  { to: '/oman-healthcare-market-report', label: 'Oman Healthcare Market Report 2026' },
  { to: '/oman-medical-devices-market-report', label: 'Oman Medical Devices Market Report 2026' },
  { to: '/egypt-healthcare-market-report', label: 'Egypt Healthcare Market Report 2026' },
  { to: '/egypt-medical-devices-market-report', label: 'Egypt Medical Devices Market Report 2026' },
];

/** Canonical Arabic posts under /ar/blog/ (also listed in public/sitemap.xml). */
const arabicBlogCanonicalLinks = [
  {
    to: '/ar/blog/gcc-pharmaceuticals-market-arabic-2026',
    label: 'GCC pharmaceuticals market outlook 2026 (Arabic)',
  },
  {
    to: '/ar/blog/quantitative-market-research-and-market-access',
    label: 'Quantitative market research and market access (Arabic)',
  },
  {
    to: '/ar/blog/saudi-healthcare-market-research-firms-ar',
    label: 'Leading Saudi healthcare market research firms (Arabic)',
  },
  {
    to: '/ar/blog/أبحاث-السوق-الدوائية-في-الشرق-الأوسط-و-دول-الخليج-العربي',
    label: 'GCC & Middle East pharma market research (Arabic slug)',
  },
  {
    to: '/ar/blog/سوق-الدواء-السعودي-2026',
    label: 'Saudi pharmaceutical market outlook 2026 (Arabic)',
  },
];

const localizedLinks = [
  { to: '/de/market-research-healthcare', label: 'DE: Healthcare Market Research' },
  { to: '/fr/market-research-healthcare', label: 'FR: Healthcare Market Research' },
  { to: '/es/market-research-healthcare', label: 'ES: Healthcare Market Research' },
  { to: '/zh/market-research-healthcare', label: 'ZH: Healthcare Market Research' },
  { to: '/ar/market-research-healthcare', label: 'AR: Healthcare Market Research' },
  { to: '/ar/market-research-uae', label: 'AR: Market Research UAE' },
  { to: '/ar/market-research-ksa', label: 'AR: Market Research KSA' },
  { to: '/ar/market-research-saudi', label: 'AR: Market Research Saudi' },
  { to: '/ar/market-research-kuwait', label: 'AR: Market Research Kuwait' },
  { to: '/ar/market-research-egypt', label: 'AR: Market Research Egypt' },
  { to: '/ar/arabic-blog-alsawdyh', label: 'AR: Arabic pharmaceutical market research guide (Saudi Arabia)' },
  { to: '/ar/blog', label: 'AR: Arabic blog index' },
];

function pathToLabel(path: string) {
  const clean = path.replace(/^\/+/, '');
  if (!clean) return 'Home';
  return clean
    .split('/')
    .map((segment) =>
      segment
        .replace(/[-_]+/g, ' ')
        .replace(/\b\w/g, (m) => m.toUpperCase()),
    )
    .join(' / ');
}

function categorizePath(path: string) {
  if (path.startsWith('/blog/')) return 'Blog Insights';
  if (path.startsWith('/case-studies/')) return 'Case Studies';
  if (path.startsWith('/global-websites/')) return 'Global Websites';
  if (path.startsWith('/healthcare-market-research/')) return 'Healthcare Country Pages';
  if (path.startsWith('/pharmaceutical-companies-')) return 'Pharmaceutical Company Guides';
  if (/^\/(ar|de|fr|es|zh)(\/|$)/.test(path)) return 'Language & Localized Pages';
  if (path.startsWith('/services/')) return 'Service Pages';
  return 'Core & Strategic Pages';
}

export default function SiteMapPage() {
  const { data: blogPosts = [] } = useSanityBlog();
  const { data: caseStudies = [] } = useQuery({
    queryKey: ['sitemap-case-studies'],
    queryFn: fetchCaseStudies,
    staleTime: 60 * 1000,
  });

  const canonicalUrl = 'https://www.bionixus.com/sitemap';
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: 'Sitemap', item: canonicalUrl },
    ],
  };
  const groupedCoverageLinks = LOW_INTERNAL_LINK_PATHS.reduce<Record<string, string[]>>((acc, path) => {
    const bucket = categorizePath(path);
    if (!acc[bucket]) acc[bucket] = [];
    acc[bucket].push(path);
    return acc;
  }, {});
  const coverageGroupOrder = [
    'Core & Strategic Pages',
    'Language & Localized Pages',
    'Service Pages',
    'Global Websites',
    'Healthcare Country Pages',
    'Pharmaceutical Company Guides',
    'Blog Insights',
    'Case Studies',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sitemap | BioNixus</title>
        <meta
          name="description"
          content="Structured BioNixus directory of services, blog articles, case studies, country hubs, and pharmaceutical intelligence pages—organized for marketers, access leads, and research buyers."
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar />
      <main className="section-padding">
        <div className="container-wide max-w-6xl mx-auto">
          <nav className="text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary">Home</Link> <span>/</span>{' '}
            <span className="text-foreground">Sitemap</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            Sitemap
          </h1>
          <p className="text-muted-foreground mb-10">
            Browse all major BioNixus pages and content hubs.
          </p>

          <section
            className="mb-14 rounded-2xl border border-border bg-muted/25 p-6 md:p-10 max-w-4xl"
            aria-labelledby="sitemap-guide-heading"
          >
            <h2 id="sitemap-guide-heading" className="text-2xl font-display font-semibold text-foreground mb-4">
              How to use this BioNixus content directory
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
              <p>
                This sitemap is designed for healthcare and pharmaceutical teams that need a trustworthy map of
                BioNixus market research services, regional hubs, and evidence-led insight articles. Instead of relying on
                fragmented bookmarks, you can start here to jump directly to quantitative and qualitative research
                programs, country-specific healthcare market research pages, and pharmaceutical company guides that
                support launch, market access, and growth planning.
              </p>
              <p>
                BioNixus operates across Europe, the United Kingdom, the Gulf Cooperation Council (GCC), and wider MENA
                markets. The links below group services, blog insights, case studies, and recovery paths that reflect how
                commercial, medical, and market access teams actually search for information: by decision type, by
                geography, and by stakeholder evidence need. When you need a consolidated view of Saudi Arabia, UAE,
                Kuwait, Egypt, or EU5 markets, use the healthcare country pages and pharmaceutical company directories
                as complementary entry points.
              </p>
              <p>
                Market research quality depends on transparent methodology, compliant fieldwork, and reporting that
                connects data to decisions. As you navigate from this sitemap to deeper service pages, you will find
                consistent guidance on physician surveys, payer interviews, KOL mapping, competitive intelligence, and
                HTA-aligned narratives. If you are evaluating partners for a multi-country program, compare the market
                research hub, qualitative and quantitative service pages, and the methodology overview to confirm scope,
                timelines, and governance expectations.
              </p>
              <p>
                The curated &quot;Priority internal discovery&quot; section and the &quot;Additional content links&quot;
                grids below consolidate routes we monitor for crawl completeness—including methodology entry points,
                localized hubs, pillar reports, and long-tail pharma intelligence URLs—without overloading global
                navigation or homepage modules.
              </p>
              <p>
                When you are ready to move from reading to execution, use the contact page to request a tailored proposal.
                Share your objective market, timeline, and evidence standard; BioNixus will align research modules to
                your launch, access, or portfolio prioritization questions while keeping deliverables decision-ready for
                leadership reviews.
              </p>
            </div>
          </section>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <section>
              <h2 className="font-semibold text-foreground mb-4">Core Pages</h2>
              <ul className="space-y-2">
                {staticLinks.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-primary hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-semibold text-foreground mb-4">Service Pages</h2>
              <ul className="space-y-2">
                {serviceLinks.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-primary hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-semibold text-foreground mb-4">Pharma Country Guides</h2>
              <ul className="space-y-2">
                {pharmaCountryLinks.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-primary hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-12 mb-10">
            <section>
              <h2 className="font-semibold text-foreground mb-4">Market Research Reports</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {marketReportLinks.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-primary hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <section>
              <h2 className="font-semibold text-foreground mb-4">Healthcare Country Pages</h2>
              <ul className="space-y-2">
                {healthcareCountryLinks.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-primary hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-semibold text-foreground mb-4">Localized Healthcare Pages</h2>
              <ul className="space-y-2">
                {localizedLinks.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-primary hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mt-12">
            <section>
              <h2 className="font-semibold text-foreground mb-4">Latest Blog Articles</h2>
              <p className="text-sm text-muted-foreground mb-3">
                English Sanity posts linked under <span className="font-mono">/blog/</span>. Canonical Arabic
                equivalents live under <span className="font-mono">/ar/blog/</span> (see adjacent list).
              </p>
              <ul className="space-y-2">
                {blogPosts.map((post) => (
                  <li key={post.id}>
                    <Link to={`/blog/${post.slug}`} className="text-primary hover:underline">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-semibold text-foreground mb-4">Arabic blog articles</h2>
              <p className="text-sm text-muted-foreground mb-3">
                Indexed canonical URLs mirrored in{' '}
                <a href="/sitemap.xml" className="text-primary underline underline-offset-2">
                  sitemap.xml
                </a>
                .
              </p>
              <ul className="space-y-2">
                {arabicBlogCanonicalLinks.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-primary hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mt-14" aria-labelledby="priority-discovery-heading">
            <h2 id="priority-discovery-heading" className="font-semibold text-foreground mb-4">
              Priority internal discovery
            </h2>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed max-w-3xl">
              Editorially-labelled destinations we keep discoverable via this directory (plus thematic rails on editorial
              pages). Mirrors the curated list previously surfaced sitewide in the footer—centralised here so crawl paths
              stay explicit while primary navigation stays lean.
            </p>
            <ul className="grid md:grid-cols-2 gap-x-10 gap-y-2">
              {INTERNAL_LINK_PRIORITY_TARGETS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-primary hover:underline text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 max-w-xl">
            <h2 className="font-semibold text-foreground mb-4">Case Studies</h2>
            <ul className="space-y-2">
              {caseStudies.map((item) => (
                <li key={item.id}>
                  <Link to={`/case-studies/${item.slug}`} className="text-primary hover:underline">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="font-semibold text-foreground mb-4">Additional Content Links</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Supplemental links for extended content coverage across the site.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {coverageGroupOrder
                .filter((group) => Array.isArray(groupedCoverageLinks[group]) && groupedCoverageLinks[group].length > 0)
                .map((group) => (
                  <article key={group} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="text-base font-semibold text-foreground mb-3">{group}</h3>
                    <ul className="space-y-2">
                      {groupedCoverageLinks[group].map((path) => (
                        <li key={path}>
                          <Link to={path} className="text-primary hover:underline break-all text-sm">
                            {pathToLabel(path)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

