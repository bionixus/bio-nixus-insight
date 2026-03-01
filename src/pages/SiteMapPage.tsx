import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSanityBlog } from '@/hooks/useSanityBlog';
import { fetchCaseStudies } from '@/lib/sanity-case-studies';

const staticLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/blog', label: 'Blog' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/resources', label: 'Resources' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/methodology', label: 'Methodology' },
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

const reportZeroLinkPaths = [
  '/adobe-experience-cloud',
  '/ar',
  '/ar/about',
  '/ar/arabic-blog-alsawdyh',
  '/ar/contacts',
  '/ar/healthcare-market-research-saudi-arabia-ksa',
  '/ar/services',
  '/ar/sustainability-saudi-arabia-ksa',
  '/best-market-research-company-saudi-arabia',
  '/bionixus-ai-chatbots-increase-sales-and-lead-generation',
  '/bionixus-ai-crm-tools',
  '/bionixus-market-research-customer-experience-blog',
  '/bionixus-market-research-middle-east',
  '/blog/أبحاث-السوق-الدوائية-في-الشرق-الأوسط-و-دول-الخليج-العربي',
  '/blog/سوق-الدواء-السعودي-2026',
  '/blog/abu-dhabi-doh-vs-dubai-dha-formulary-guide',
  '/blog/ai-vs-human-insight-validating-quantitative-data-2026-pharma-research',
  '/blog/competitive-intelligence-pharma-gcc',
  '/blog/data-privacy-beyond-hipaa-global-quantitative-research-compliance-2026',
  '/blog/deutsche-pharmaunternehmen-2026-pipeline-updates',
  '/blog/emea-jca-market-access-update-2026',
  '/blog/fda-update-glp-1-obesity-market-crackdown-2026',
  '/blog/gesundheitsmarkt-deutschland-2026',
  '/blog/healthcare-market-research-europe',
  '/blog/healthcare-market-research-europe-2026',
  '/blog/healthcare-market-research-methodologies-gcc',
  '/blog/healthcare-market-research-uae-guide-2025',
  '/blog/healthcare-overview-china-market-2026',
  '/blog/healthcare-overview-egypt-market-2026',
  '/blog/healthcare-overview-kuwait-market-2026',
  '/blog/healthcare-overview-qatar-market-2026',
  '/blog/hospital-market-research',
  '/blog/kol-mapping-pharma-middle-east',
  '/blog/kuwait-healthcare-market-trends-2026',
  '/blog/market-access-strategy-uae',
  '/blog/market-research-pharmaceutical-market-access-uae',
  '/blog/maxdiff-vs-conjoint-analysis-medtech-pricing',
  '/blog/middle-east-healthcare-market-statistics-2025',
  '/blog/middle-east-healthcare-market-statistics-2026',
  '/blog/nice-hta-evidence-requirements-guide',
  '/blog/nupco-saudi-arabia-tendering-guide',
  '/blog/oncology-uae-2026-cancer-care-outlook',
  '/blog/patient-journey-mapping-saudi-arabia',
  '/blog/pharma-market-entry-saudi-arabia-playbook',
  '/blog/pharmaceutical-healthcare-market-research-gcc',
  '/blog/pharmaceutical-market-entry-saudi-arabia-2026-guide',
  '/blog/pharmaceutical-market-research-uk',
  '/blog/pharmaceutical-market-research-uk-2026',
  '/blog/pharmacoeconomics-gcc-practical-guide',
  '/blog/physician-surveys-healthcare',
  '/blog/physician-surveys-healthcare-digital-health-2026',
  '/blog/quantitative-market-research-and-market-access',
  '/blog/rare-disease-orphan-drug-saudi-arabia-sfda-2026',
  '/blog/recruiting-high-scarcity-specialists-oncology-quantitative-studies',
  '/blog/regional-crisis-impact-middle-east-economies-healthcare-2026',
  '/blog/sfda-approval-qfitlia-saudi-arabia-pharmaceutical-market',
  '/blog/sfda-drug-registration-guide',
  '/blog/shift-to-always-on-quantitative-tracking-why-periodic-studies-are-dying',
  '/blog/top-healthcare-market-research-companies-mena',
  '/blog/top-therapy-areas-pharma-growth-saudi-arabia',
  '/blog/uae-healthcare-market-trends-2025',
  '/careers',
  '/case-studies/biologics-market-analysis-uae',
  '/case-studies/gcc-oncology-market',
  '/case-studies/uae-influenza-vaccines-report-2025-2026',
  '/chatgpt-is-down',
  '/contact-details-bionixus',
  '/customer-experience',
  '/de',
  '/de/about',
  '/de/blog',
  '/de/contacts',
  '/de/page-z6rdbm',
  '/de/page-zjihuv',
  '/de/page-zv_yzf',
  '/de/page-zz8hgv',
  '/de/page-zzw-z8',
  '/de/services',
  '/de/success-in-startups',
  '/digital-transformation',
  '/es',
  '/es/market-access',
  '/faq',
  '/fr',
  '/fr/about',
  '/fr/blog',
  '/fr/contacts',
  '/fr/page-z6rdbm',
  '/fr/page-zjihuv',
  '/fr/page-zv_yzf',
  '/fr/page-zz8hgv',
  '/fr/page-zzw-z8',
  '/fr/services',
  '/fr/success-in-startups',
  '/gcc-market-access-guide',
  '/healthcare-market-research/algeria',
  '/healthcare-market-research/bahrain',
  '/healthcare-market-research/canada',
  '/healthcare-market-research/china',
  '/healthcare-market-research/denmark',
  '/healthcare-market-research/egypt',
  '/healthcare-market-research/france',
  '/healthcare-market-research/germany',
  '/healthcare-market-research/iraq',
  '/healthcare-market-research/italy',
  '/healthcare-market-research/japan',
  '/healthcare-market-research/jordan',
  '/healthcare-market-research/kenya',
  '/healthcare-market-research/kuwait',
  '/healthcare-market-research/lebanon',
  '/healthcare-market-research/libya',
  '/healthcare-market-research/mexico',
  '/healthcare-market-research/morocco',
  '/healthcare-market-research/nigeria',
  '/healthcare-market-research/oman',
  '/healthcare-market-research/qatar',
  '/healthcare-market-research/saudi-arabia',
  '/healthcare-market-research/singapore',
  '/healthcare-market-research/south-africa',
  '/healthcare-market-research/spain',
  '/healthcare-market-research/sweden',
  '/healthcare-market-research/switzerland',
  '/healthcare-market-research/tunisia',
  '/healthcare-market-research/turkey',
  '/healthcare-market-research/united-arab-emirates',
  '/healthcare-market-research/united-kingdom',
  '/healthcare-market-research/united-states',
  '/market-research-customer-insight',
  '/market-research-home',
  '/market-research-methods-simplified-how-to-understand-your-customers-like-marvel',
  '/mena-pharma-market-data',
  '/methodology',
  '/page',
  '/pharmaceutical-companies-bahrain',
  '/pharmaceutical-companies-egypt',
  '/pharmaceutical-companies-iran',
  '/pharmaceutical-companies-iraq',
  '/pharmaceutical-companies-kuwait',
  '/pharmaceutical-companies-oman',
  '/pharmaceutical-companies-qatar',
  '/pharmaceutical-companies-saudi-arabia',
  '/pharmaceutical-companies-uae',
  '/pharmacies-saudi-arabia-marketing',
  '/privacy-policy',
  '/qualitative-market-research',
  '/quantitative-healthcare-market-research',
  '/quantitative-market-research-healthcare',
  '/resources',
  '/sales-growth',
  '/services/clinical-trial-support',
  '/services/competitive-intelligence',
  '/startup-digital-marketing-package',
  '/terms-and-conditions',
  '/zh',
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
            <h2 className="font-semibold text-foreground mb-4">SEO Report Coverage Links</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Internal links included for URLs flagged with zero internal links in the latest crawl reports.
            </p>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
              {reportZeroLinkPaths.map((path) => (
                <li key={path}>
                  <Link to={path} className="text-primary hover:underline break-all">
                    {pathToLabel(path)}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

