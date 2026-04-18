import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSanityBlog } from '@/hooks/useSanityBlog';
import { fetchCaseStudies } from '@/lib/sanity-case-studies';
import { reportZeroLinkPaths } from '@/lib/internalLinkRecovery';

const staticLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/market-research', label: 'Market Research Hub' },
  { to: '/market-research-uae', label: 'Market Research UAE' },
  { to: '/market-research-ksa', label: 'Market Research KSA' },
  { to: '/market-research-saudi', label: 'Market Research Saudi' },
  { to: '/market-research-kuwait', label: 'Market Research Kuwait' },
  { to: '/market-research-egypt', label: 'Market Research Egypt' },
  { to: '/market-research-healthcare', label: 'Healthcare Market Research' },
  { to: '/market-research-saudi-arabia-pharmaceutical', label: 'Saudi Pharmaceutical Market Research' },
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
  { to: '/conf', label: 'Strategic Portfolio' },
  { to: '/insights/top-market-research-companies-egypt-2026', label: 'Top Market Research Companies in Egypt (2026)' },
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
  const groupedCoverageLinks = reportZeroLinkPaths.reduce<Record<string, string[]>>((acc, path) => {
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
          content="Comprehensive BioNixus content index linking services, blog articles, case studies, and market intelligence pages."
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
          </div>

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

