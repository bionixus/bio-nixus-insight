import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowUpRight,
  BarChart3,
  BookMarked,
  BookOpen,
  FileStack,
  Globe2,
  LayoutGrid,
  Layers,
  Map,
  Newspaper,
  Radar,
  Shield,
  Sparkles,
  Building2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { defaultOgImageUrl } from '@/lib/seo';
import { CTASection } from '@/components/shared/CTASection';
import { useSanityBlog, useIndustriesInsights } from '@/hooks/useSanityBlog';
import { fetchCaseStudies } from '@/lib/sanity-case-studies';
import { getBlogPostPath, INDUSTRIES_INSIGHTS_INDEX_PATH } from '@/lib/blog-content-silo';
import { LOW_INTERNAL_LINK_PATHS } from '@/lib/lowInternalLinkTargets.generated';
import { INTERNAL_LINK_PRIORITY_TARGETS } from '@/lib/internalLinkAmplificationTargets';
import {
  MATRIX_COUNTRIES,
  MATRIX_INDUSTRIES,
  MATRIX_INDUSTRY_SLUGS_ORDERED,
  getIndustryBofuPath,
  getIndustryListiclePath,
  MATRIX_COUNTRY_SLUGS_ORDERED,
} from '@/data/industryMarketResearchMatrix';

const industryMatrixGroups = MATRIX_INDUSTRY_SLUGS_ORDERED.filter(
  (slug) => MATRIX_INDUSTRIES[slug].published,
).map((industrySlug) => {
  const industry = MATRIX_INDUSTRIES[industrySlug];
  const links = MATRIX_COUNTRY_SLUGS_ORDERED.flatMap((countrySlug) => {
    const country = MATRIX_COUNTRIES[countrySlug];
    return [
      {
        to: getIndustryBofuPath(countrySlug, industrySlug),
        label: `${industry.displayName} market research company — ${country.label}`,
      },
      {
        to: getIndustryListiclePath(countrySlug, industrySlug),
        label: `Top ${industry.displayNameShort} market research firms — ${country.label} (2026)`,
      },
    ];
  });
  return { industrySlug, title: industry.displayName, links };
});

const industryMatrixLinkCount = industryMatrixGroups.reduce((n, g) => n + g.links.length, 0);

const staticLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/client-reviews', label: 'Client Reviews' },
  { to: '/services', label: 'Services' },
  { to: '/market-research', label: 'Market Research Hub' },
  { to: '/market-research-by-industry', label: 'Market Research by Industry (GCC & MENA)' },
  { to: '/bionixus-industries', label: 'BioNixus Industries Hub' },
  { to: '/bionixus-industries/insights', label: 'Industry Insights (B2B & B2C)' },
  { to: '/healthcare-market-research/uae', label: 'Market Research UAE' },
  { to: '/market-research-ksa', label: 'Market Research KSA' },
  { to: '/market-research-saudi', label: 'Market Research Saudi' },
  { to: '/market-research-saudi-arabia-pharmaceutical', label: 'Healthcare Market Research Company Saudi Arabia' },
  { to: '/pharma-fieldwork-saudi-arabia', label: 'Pharma Fieldwork Saudi Arabia' },
  { to: '/uae-pharmaceutical-market-research', label: 'Healthcare Market Research Company UAE' },
  { to: '/pharma-fieldwork-uae', label: 'Pharma Fieldwork UAE' },
  { to: '/egypt-pharmaceutical-market-research', label: 'Healthcare Market Research Company Egypt' },
  { to: '/pharma-fieldwork-egypt', label: 'Pharma Fieldwork Egypt' },
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
  { to: '/insights/top-market-research-companies-egypt-2026', label: 'Best Market Research Companies in Egypt (2026)' },
  { to: '/nf1-pharma-market-research', label: 'NF1 pharma market research (services)' },
  { to: '/desmoid-tumor-pharma-market-research', label: 'Desmoid tumor pharma market research (services)' },
  { to: '/blog/nf1-koselugo-selumetinib-pharma-market-research', label: 'NF1 Koselugo / selumetinib market research (blog)' },
  { to: '/blog/neurofibromatosis', label: 'Neurofibromatosis market access briefing (blog)' },
  { to: '/blog/desmoid-tumors-nirogacestat-pharma-market-access', label: 'Desmoid tumors / Ogsiveo market access (blog)' },
];

const globalWebsitesCountryLinks = [
  { to: '/global-websites/saudi-arabia', label: 'Saudi Arabia — pharma market entry blueprint' },
  { to: '/global-websites/united-arab-emirates', label: 'UAE — pharmaceutical go-to-market blueprint' },
  { to: '/global-websites/united-states', label: 'United States — pharmaceutical market entry' },
  { to: '/global-websites/united-kingdom', label: 'United Kingdom — pharmaceutical market entry' },
  { to: '/global-websites/germany', label: 'Germany — pharmaceutical market entry' },
  { to: '/global-websites/france', label: 'France — pharmaceutical market entry' },
  { to: '/global-websites/egypt', label: 'Egypt — pharmaceutical market entry' },
];

const geoListicleLinks = [
  { to: '/insights/top-market-research-companies-saudi-arabia-2026', label: 'Best market research companies in Saudi Arabia (2026)' },
  { to: '/insights/top-healthcare-market-research-companies-saudi-arabia-2026', label: 'Best healthcare MR firms in Saudi Arabia (2026)' },
  { to: '/insights/top-market-research-companies-uae-2026', label: 'Best market research companies in UAE (2026)' },
  { to: '/insights/top-market-research-companies-dubai-2026', label: 'Best market research companies in Dubai (2026)' },
  { to: '/insights/top-healthcare-market-research-companies-dubai-2026', label: 'Best healthcare MR firms in Dubai (2026)' },
  { to: '/insights/top-market-research-companies-abu-dhabi-2026', label: 'Best market research companies in Abu Dhabi (2026)' },
  { to: '/insights/top-healthcare-market-research-companies-abu-dhabi-2026', label: 'Best healthcare MR firms in Abu Dhabi (2026)' },
  { to: '/insights/top-market-research-companies-riyadh-2026', label: 'Best market research companies in Riyadh (2026)' },
  { to: '/insights/top-healthcare-market-research-companies-riyadh-2026', label: 'Best healthcare MR firms in Riyadh (2026)' },
  { to: '/insights/top-global-healthcare-market-research-companies-2026', label: 'Top global healthcare MR companies (2026)' },
  { to: '/insights/best-global-market-research-companies-pharma-2026', label: 'Best global pharma MR companies (2026)' },
  { to: '/insights/top-pharma-market-research-companies-middle-east-2026', label: 'Top pharma MR companies — Middle East (2026)' },
  { to: '/insights/top-market-research-companies-gcc-2026', label: 'Top market research companies — GCC (2026)' },
  { to: '/ar/insights/top-market-research-companies-egypt-2026', label: 'أفضل شركات أبحاث السوق في مصر (2026)' },
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
  { to: '/healthcare-market-research/uae', label: 'Healthcare Market Research in UAE (Dubai & Abu Dhabi)' },
  { to: '/healthcare-market-research/united-arab-emirates', label: 'Healthcare Market Research — United Arab Emirates (federated)' },
  { to: '/healthcare-market-research/dubai', label: 'Healthcare Market Research in Dubai' },
  { to: '/healthcare-market-research/abu-dhabi', label: 'Healthcare Market Research in Abu Dhabi' },
  { to: '/healthcare-market-research/riyadh', label: 'Healthcare Market Research in Riyadh' },
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
  { to: '/uk-healthcare-market-report', label: 'UK Healthcare Market Report 2026' },
  { to: '/uk-medical-devices-market-report', label: 'UK Medical Devices Market Report 2026' },
  { to: '/germany-healthcare-market-report', label: 'Germany Healthcare Market Report 2026' },
  { to: '/germany-medical-devices-market-report', label: 'Germany Medical Devices Market Report 2026' },
  { to: '/france-healthcare-market-report', label: 'France Healthcare Market Report 2026' },
  { to: '/france-medical-devices-market-report', label: 'France Medical Devices Market Report 2026' },
  { to: '/italy-healthcare-market-report', label: 'Italy Healthcare Market Report 2026' },
  { to: '/italy-medical-devices-market-report', label: 'Italy Medical Devices Market Report 2026' },
  { to: '/spain-healthcare-market-report', label: 'Spain Healthcare Market Report 2026' },
  { to: '/spain-medical-devices-market-report', label: 'Spain Medical Devices Market Report 2026' },
  { to: '/usa-healthcare-market-report', label: 'USA Healthcare Market Report 2026' },
  { to: '/usa-medical-devices-market-report', label: 'USA Medical Devices Market Report 2026' },
  { to: '/brazil-healthcare-market-report', label: 'Brazil Healthcare Market Report 2026' },
  { to: '/brazil-medical-devices-market-report', label: 'Brazil Medical Devices Market Report 2026' },
  { to: '/canada-healthcare-market-report', label: 'Canada Healthcare Market Report 2026' },
  { to: '/canada-medical-devices-market-report', label: 'Canada Medical Devices Market Report 2026' },
  { to: '/india-healthcare-market-report', label: 'India Healthcare Market Report 2026' },
  { to: '/india-medical-devices-market-report', label: 'India Medical Devices Market Report 2026' },
  { to: '/china-healthcare-market-report', label: 'China Healthcare Market Report 2026' },
  { to: '/china-medical-devices-market-report', label: 'China Medical Devices Market Report 2026' },
  { to: '/japan-healthcare-market-report', label: 'Japan Healthcare Market Report 2026' },
  { to: '/japan-medical-devices-market-report', label: 'Japan Medical Devices Market Report 2026' },
  { to: '/south-korea-healthcare-market-report', label: 'South Korea Healthcare Market Report 2026' },
  { to: '/south-korea-medical-devices-market-report', label: 'South Korea Medical Devices Market Report 2026' },
  { to: '/australia-healthcare-market-report', label: 'Australia Healthcare Market Report 2026' },
  { to: '/australia-medical-devices-market-report', label: 'Australia Medical Devices Market Report 2026' },
  { to: '/singapore-healthcare-market-report', label: 'Singapore Healthcare Market Report 2026' },
  { to: '/singapore-medical-devices-market-report', label: 'Singapore Medical Devices Market Report 2026' },
  { to: '/turkey-healthcare-market-report', label: 'Turkey Healthcare Market Report 2026' },
  { to: '/turkey-medical-devices-market-report', label: 'Turkey Medical Devices Market Report 2026' },
  { to: '/market-reports', label: 'Healthcare Market Research Reports Hub' },
  { to: '/market-reports/therapy/oncology', label: 'Oncology Market Research Reports' },
  { to: '/market-reports/therapy/diabetes-metabolic', label: 'Diabetes & Metabolic Market Research Reports' },
  { to: '/market-reports/therapy/cardiovascular', label: 'Cardiovascular Market Research Reports' },
  { to: '/market-reports/therapy/immunology-biologics', label: 'Immunology & Biologics Market Research Reports' },
  { to: '/market-reports/therapy/respiratory', label: 'Respiratory Market Research Reports' },
  { to: '/market-reports/therapy/rare-diseases', label: 'Rare Diseases Market Research Reports' },
  { to: '/market-reports/therapy/neurology-cns', label: 'Neurology & CNS Market Research Reports' },
  { to: '/market-reports/therapy/biosimilars', label: 'Biosimilars Market Research Reports' },
  { to: '/market-reports/therapy/digital-health', label: 'Digital Health Market Research Reports' },
  { to: '/market-reports/therapy/vaccines', label: 'Vaccines Market Research Reports' },
  { to: '/market-reports/therapy/dermatology', label: 'Dermatology Market Research Reports' },
  { to: '/market-reports/country/saudi-arabia', label: 'Saudi Arabia Healthcare Reports' },
  { to: '/market-reports/country/uae', label: 'UAE Healthcare Reports' },
  { to: '/market-reports/country/gcc', label: 'GCC Healthcare Reports' },
  { to: '/market-reports/country/egypt', label: 'Egypt Healthcare Reports' },
  { to: '/market-reports/country/kuwait', label: 'Kuwait Healthcare Reports' },
  { to: '/market-reports/country/qatar', label: 'Qatar Healthcare Reports' },
  { to: '/market-reports/country/bahrain', label: 'Bahrain Healthcare Reports' },
  { to: '/market-reports/country/oman', label: 'Oman Healthcare Reports' },
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
  if (path.startsWith('/insights/top-') && path.includes('-market-research-companies-')) {
    return 'Industry Market Research';
  }
  const matrixCountryPattern = MATRIX_COUNTRY_SLUGS_ORDERED.join('|');
  if (
    new RegExp(`^\\/(${matrixCountryPattern})-[a-z0-9-]+-market-research$`).test(path) &&
    path !== '/market-research-by-industry'
  ) {
    return 'Industry Market Research';
  }
  if (/^\/(ar|de|fr|es|zh)(\/|$)/.test(path)) return 'Language & Localized Pages';
  if (path.startsWith('/services/')) return 'Service Pages';
  return 'Core & Strategic Pages';
}

const tocNav = [
  { id: 'section-guide', label: 'Directory guide' },
  { id: 'section-core', label: 'Core navigation' },
  { id: 'section-services', label: 'Services' },
  { id: 'section-pharma', label: 'Pharma guides' },
  { id: 'section-reports', label: 'Market reports' },
  { id: 'section-industry', label: 'Industry matrix' },
  { id: 'section-healthcare', label: 'Healthcare geography' },
  { id: 'section-global', label: 'Global websites' },
  { id: 'section-listicles', label: '2026 rankings' },
  { id: 'section-locales', label: 'Languages' },
  { id: 'section-blog', label: 'Healthcare blog' },
  { id: 'section-industry-insights', label: 'Industry insights' },
  { id: 'section-priority', label: 'Priority routes' },
  { id: 'section-cases', label: 'Case studies' },
  { id: 'section-extended', label: 'Extended coverage' },
] as const;

function PremiumInternalLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="group flex items-start gap-3 rounded-xl border border-border/70 bg-card/40 px-4 py-3 text-left text-sm text-foreground transition-all hover:border-primary/35 hover:bg-muted/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
    >
      <span className="min-w-0 flex-1 leading-snug">{children}</span>
      <ArrowUpRight
        className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground opacity-50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary group-hover:opacity-100"
        aria-hidden
      />
    </Link>
  );
}

function SectionShell({
  id,
  icon: Icon,
  title,
  description,
  countLabel,
  children,
}: {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  countLabel: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-28">
      <div className="overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-b from-card to-card/95 shadow-sm">
        <header className="flex flex-col gap-4 border-b border-border/60 bg-muted/25 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-start gap-4">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/15"
              aria-hidden
            >
              <Icon className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <div>
              <h2 id={`${id}-heading`} className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                {title}
              </h2>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          </div>
          <span className="shrink-0 self-start rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground md:self-center">
            {countLabel}
          </span>
        </header>
        <div className="p-6 md:p-8">{children}</div>
      </div>
    </section>
  );
}

export default function SiteMapPage() {
  const { data: blogPosts = [] } = useSanityBlog();
  const { data: industriesPosts = [] } = useIndustriesInsights();
  const { data: caseStudies = [] } = useQuery({
    queryKey: ['sitemap-case-studies'],
    queryFn: fetchCaseStudies,
    staleTime: 60 * 1000,
  });

  const canonicalUrl = 'https://www.bionixus.com/sitemap';
  const ogTitle = 'Sitemap | BioNixus Healthcare Market Research Directory';
  const ogDescription =
    'Explore every major BioNixus route: services, GCC and global reports, country intelligence, blog insights, and case studies.';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: 'Sitemap', item: canonicalUrl },
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Sitemap | BioNixus Healthcare & Pharmaceutical Intelligence Directory',
    description:
      'Structured directory of BioNixus healthcare market research services, regional hubs, market reports, pharmaceutical company guides, blog articles, case studies, and localized pages.',
    url: canonicalUrl,
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      url: 'https://www.bionixus.com',
      name: 'BioNixus',
    },
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
    'Industry Market Research',
    'Blog Insights',
    'Case Studies',
  ];

  const approxExtendedCount = coverageGroupOrder.reduce((n, g) => n + (groupedCoverageLinks[g]?.length ?? 0), 0);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sitemap | BioNixus — Healthcare &amp; Pharmaceutical Intelligence Directory</title>
        <meta
          name="description"
          content="Structured BioNixus directory of services, industry market research (KSA, UAE, Egypt), blog articles, case studies, country hubs, market reports, and pharmaceutical intelligence—organized for marketing, access, and research leaders."
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      </Helmet>
      <OpenGraphMeta
        title={ogTitle}
        description={ogDescription}
        image={defaultOgImageUrl}
        url={canonicalUrl}
        type="website"
        locale="en_US"
        alternateLocales={['ar_SA']}
        siteName="BioNixus Healthcare Market Research"
        imageAlt="BioNixus healthcare and pharmaceutical market research sitemap directory"
        twitterSite="@BioNixus"
      />

      <Navbar />

      <main>
        <section
          className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-navy-deep via-navy-medium to-primary text-primary-foreground"
          aria-labelledby="sitemap-hero-heading"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-32 -left-16 h-[22rem] w-[22rem] rounded-full bg-primary-foreground/5 blur-3xl" aria-hidden />
          <div className="section-padding relative pt-24 pb-14 md:pb-16">
            <div className="container-wide mx-auto max-w-6xl">
              <BreadcrumbNav
                items={[
                  { name: 'Home', href: '/' },
                  { name: 'Sitemap', href: '/sitemap' },
                ]}
                className="mb-8 px-0 text-primary-foreground/70 [&_a]:text-primary-foreground/85 [&_a:hover]:text-white [&_span.text-foreground]:text-white"
              />

              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground/95">
                <Map className="h-3.5 w-3.5" aria-hidden />
                Site directory
              </div>

              <h1
                id="sitemap-hero-heading"
                className="mt-5 max-w-4xl font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
              >
                Every BioNixus route—curated for precision navigation
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-primary-foreground/88 md:text-xl">
                A human-organized index of healthcare market research capabilities, regional intelligence, reports, and
                editorial evidence—mirroring how commercial, medical, and access teams actually search.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-white/90"
                >
                  Request a research proposal
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
                <a
                  href="https://www.bionixus.com/sitemap.xml"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/35 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-white/10"
                >
                  Machine-readable sitemap.xml
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/35 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-white/10"
                >
                  Latest blog insights
                </Link>
              </div>

              <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  { label: 'XML index', value: '618' },
                  { label: 'Core routes', value: String(staticLinks.length) },
                  { label: 'Industry matrix', value: String(industryMatrixLinkCount) },
                  { label: 'Report pages', value: String(marketReportLinks.length) },
                  { label: 'Healthcare blog', value: String(blogPosts.length) },
                  { label: 'Industry insights', value: String(industriesPosts.length) },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-4 text-center backdrop-blur-sm"
                  >
                    <dt className="text-xs font-medium uppercase tracking-wider text-primary-foreground/75">{stat.label}</dt>
                    <dd className="mt-1 font-display text-2xl font-semibold tabular-nums">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <div className="section-padding py-12 md:py-16">
          <div className="container-wide mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] xl:gap-16">
              <aside className="mb-10 lg:mb-0" aria-label="On this page">
                <div className="lg:sticky lg:top-28">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">On this page</p>
                  <nav className="hidden max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-border/80 bg-muted/20 p-3 lg:block">
                    <ol className="space-y-0.5 text-sm">
                      {tocNav.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="block rounded-lg px-3 py-2 text-muted-foreground transition hover:bg-background hover:text-foreground"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                  <div className="flex gap-2 overflow-x-auto pb-1 lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {tocNav.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="shrink-0 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </aside>

              <div className="min-w-0 space-y-12 md:space-y-16">
                <section id="section-guide" className="scroll-mt-28">
                  <div className="rounded-2xl border border-border/80 bg-card/30 p-6 shadow-sm md:p-10">
                    <div className="mb-6 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-400">
                        <Sparkles className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <h2 className="font-display text-xl font-semibold text-foreground md:text-2xl">
                          How to use this directory
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Written for healthcare and pharmaceutical decision-makers who need a trustworthy map—not a raw link dump.
                        </p>
                      </div>
                    </div>

                    <p className="text-[15px] leading-relaxed text-muted-foreground">
                      Start with <strong className="font-medium text-foreground">core navigation</strong> and{' '}
                      <strong className="font-medium text-foreground">services</strong>, then move into{' '}
                      <strong className="font-medium text-foreground">country intelligence</strong> and{' '}
                      <strong className="font-medium text-foreground">market reports</strong> when you are scoping a launch,
                      access dossier, or portfolio review. Blog and case study sections surface evidence-led narratives and
                      programme patterns.
                    </p>

                    <details className="group mt-6 rounded-xl border border-border/70 bg-background/60 open:border-primary/25" open>
                      <summary className="cursor-pointer list-none px-5 py-4 font-medium text-foreground outline-none ring-offset-background transition marker:content-none [&::-webkit-details-marker]:hidden">
                        <span className="flex items-center justify-between gap-3">
                          <span className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-primary" aria-hidden />
                            Full guidance for research and access teams
                          </span>
                          <span className="text-xs font-normal text-muted-foreground group-open:hidden">Expand</span>
                          <span className="hidden text-xs font-normal text-muted-foreground group-open:inline">Collapse</span>
                        </span>
                      </summary>
                      <div className="space-y-4 border-t border-border/60 px-5 py-5 text-[15px] leading-relaxed text-muted-foreground">
                        <p>
                          This sitemap is designed for healthcare and pharmaceutical teams that need a trustworthy map of
                          BioNixus market research services, regional hubs, and evidence-led insight articles. Instead of relying
                          on fragmented bookmarks, you can start here to jump directly to quantitative and qualitative research
                          programs, country-specific healthcare market research pages, and pharmaceutical company guides that
                          support launch, market access, and growth planning.
                        </p>
                        <p>
                          BioNixus operates across Europe, the United Kingdom, the Gulf Cooperation Council (GCC), and wider
                          MENA markets. The links below group services, blog insights, case studies, and recovery paths that
                          reflect how commercial, medical, and market access teams actually search for information: by
                          decision type, by geography, and by stakeholder evidence need.
                        </p>
                        <p>
                          Market research quality depends on transparent methodology, compliant fieldwork, and reporting that
                          connects data to decisions. As you navigate from this sitemap to deeper service pages, you will find
                          consistent guidance on physician surveys, payer interviews, KOL mapping, competitive intelligence,
                          and HTA-aligned narratives.
                        </p>
                        <p>
                          The &quot;Priority internal discovery&quot; section and &quot;Extended coverage&quot; consolidate routes we monitor for
                          crawl completeness—including methodology entry points, localized hubs, pillar reports, and long-tail
                          pharma intelligence URLs—without overloading global navigation.
                        </p>
                        <p>
                          Ready to brief a programme? Visit{' '}
                          <Link to="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
                            the contact page
                          </Link>{' '}
                          with your objective market, timeline, and evidence standard—we align modules to leadership-ready
                          deliverables.
                        </p>
                      </div>
                    </details>
                  </div>
                </section>

                <SectionShell
                  id="section-core"
                  icon={LayoutGrid}
                  title="Core navigation"
                  description="Primary entry points: hubs, methodology, commercial assets, and compliance pages."
                  countLabel={`${staticLinks.length} links`}
                >
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {staticLinks.map((item) => (
                      <li key={item.to}>
                        <PremiumInternalLink to={item.to}>{item.label}</PremiumInternalLink>
                      </li>
                    ))}
                  </ul>
                </SectionShell>

                <SectionShell
                  id="section-services"
                  icon={Layers}
                  title="Service delivery"
                  description="Specialist healthcare research modules—quant, qual, access, and competitive intelligence."
                  countLabel={`${serviceLinks.length} links`}
                >
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {serviceLinks.map((item) => (
                      <li key={item.to}>
                        <PremiumInternalLink to={item.to}>{item.label}</PremiumInternalLink>
                      </li>
                    ))}
                  </ul>
                </SectionShell>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
                  <SectionShell
                    id="section-pharma"
                    icon={Building2}
                    title="Pharmaceutical company guides"
                    description="Directories by market for manufacturer and portfolio intelligence."
                    countLabel={`${pharmaCountryLinks.length} markets`}
                  >
                    <ul className="grid gap-2">
                      {pharmaCountryLinks.map((item) => (
                        <li key={item.to}>
                          <PremiumInternalLink to={item.to}>{item.label}</PremiumInternalLink>
                        </li>
                      ))}
                    </ul>
                  </SectionShell>

                  <SectionShell
                    id="section-healthcare"
                    icon={Globe2}
                    title="Healthcare by geography"
                    description="Regional healthcare market research corridors—European and GCC/MENA anchors."
                    countLabel={`${healthcareCountryLinks.length} hubs`}
                  >
                    <ul className="grid gap-2">
                      {healthcareCountryLinks.map((item) => (
                        <li key={item.to}>
                          <PremiumInternalLink to={item.to}>{item.label}</PremiumInternalLink>
                        </li>
                      ))}
                    </ul>
                  </SectionShell>
                </div>

                <SectionShell
                  id="section-global"
                  icon={Globe2}
                  title="Global websites — market entry blueprints"
                  description="Go-to-market and commercialization intelligence by country (distinct from healthcare MR service hubs). Proposal in 24 hours."
                  countLabel={`${globalWebsitesCountryLinks.length} countries`}
                >
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {globalWebsitesCountryLinks.map((item) => (
                      <li key={item.to}>
                        <PremiumInternalLink to={item.to}>{item.label}</PremiumInternalLink>
                      </li>
                    ))}
                  </ul>
                </SectionShell>

                <SectionShell
                  id="section-listicles"
                  icon={BarChart3}
                  title="2026 firm rankings & buyer guides"
                  description="Geo and therapy listicles indexed in sitemap.xml — general MR vs healthcare-only angles."
                  countLabel={`${geoListicleLinks.length} guides`}
                >
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {geoListicleLinks.map((item) => (
                      <li key={item.to}>
                        <PremiumInternalLink to={item.to}>{item.label}</PremiumInternalLink>
                      </li>
                    ))}
                  </ul>
                </SectionShell>

                <SectionShell
                  id="section-reports"
                  icon={BarChart3}
                  title="Market intelligence reports"
                  description="Healthcare and medical devices outlooks across GCC, key EU markets, Americas, and APAC corridors. Proposal in 24 hours."
                  countLabel={`${marketReportLinks.length} reports`}
                >
                  <ul className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                    {marketReportLinks.map((item) => (
                      <li key={item.to}>
                        <PremiumInternalLink to={item.to}>{item.label}</PremiumInternalLink>
                      </li>
                    ))}
                  </ul>
                </SectionShell>

                <SectionShell
                  id="section-industry"
                  icon={LayoutGrid}
                  title="Market research by industry (GCC & MENA)"
                  description="Sixteen industries × seven countries: BOFU company-intent pages and 2026 top-firms listicles—indexed in sitemap.xml alongside the industry hub."
                  countLabel={`${industryMatrixLinkCount} routes`}
                >
                  <p className="mb-6 text-sm text-muted-foreground">
                    Start at{' '}
                    <Link to="/market-research-by-industry" className="font-medium text-primary underline-offset-4 hover:underline">
                      Market research by industry
                    </Link>{' '}
                    for the full matrix. Pharmaceutical company BOFU pages remain on separate legacy URLs listed under core navigation.
                  </p>
                  <div className="grid gap-8 lg:grid-cols-2">
                    {industryMatrixGroups.map((group) => (
                      <article
                        key={group.industrySlug}
                        className="rounded-xl border border-border/70 bg-card/50 p-5"
                      >
                        <h3 className="mb-4 border-b border-border/50 pb-2 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                          {group.title}
                        </h3>
                        <ul className="grid gap-2">
                          {group.links.map((item) => (
                            <li key={item.to}>
                              <PremiumInternalLink to={item.to}>{item.label}</PremiumInternalLink>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </SectionShell>

                <SectionShell
                  id="section-locales"
                  icon={Globe2}
                  title="Languages & localized hubs"
                  description="Regional language routes mirroring flagship healthcare positioning pages. Proposal in 24 hours."
                  countLabel={`${localizedLinks.length} routes`}
                >
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {localizedLinks.map((item) => (
                      <li key={item.to}>
                        <PremiumInternalLink to={item.to}>{item.label}</PremiumInternalLink>
                      </li>
                    ))}
                  </ul>
                </SectionShell>

                <div id="section-blog" className="scroll-mt-28 space-y-12 lg:space-y-10">
                  <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
                    <SectionShell
                      id="section-blog-en"
                      icon={Newspaper}
                      title="Healthcare & pharmaceutical blog"
                      description="Sanity-backed posts served under /blog/ only — pharmaceutical, clinical, and market access content."
                      countLabel={`${blogPosts.length} articles`}
                    >
                      <ul className="grid gap-2">
                        {blogPosts.map((post) => (
                          <li key={post.id}>
                            <PremiumInternalLink to={`/blog/${post.slug}`}>{post.title}</PremiumInternalLink>
                          </li>
                        ))}
                      </ul>
                    </SectionShell>

                    <SectionShell
                      id="section-blog-ar"
                      icon={BookMarked}
                      title="Arabic blog & canonical routes"
                      description="Arabic-language insight articles indexed for bilingual programmes and regional fieldwork."
                      countLabel={`${arabicBlogCanonicalLinks.length} articles`}
                    >
                      <p className="mb-4 text-sm text-muted-foreground">
                        Canonical Arabic URLs mirrored in{' '}
                        <a
                          href="https://www.bionixus.com/sitemap.xml"
                          className="font-medium text-primary underline-offset-4 hover:underline"
                        >
                          sitemap.xml
                        </a>
                        .
                      </p>
                      <ul className="grid gap-2">
                        {arabicBlogCanonicalLinks.map((item) => (
                          <li key={item.to}>
                            <PremiumInternalLink to={item.to}>{item.label}</PremiumInternalLink>
                          </li>
                        ))}
                      </ul>
                    </SectionShell>
                  </div>
                </div>

                <SectionShell
                  id="section-industry-insights"
                  icon={Building2}
                  title="Industry insights (B2B & B2C)"
                  description={`Non-healthcare market research articles served under ${INDUSTRIES_INSIGHTS_INDEX_PATH}/ — separate from the pharmaceutical blog.`}
                  countLabel={`${industriesPosts.length} articles`}
                >
                  <p className="mb-4 text-sm text-muted-foreground">
                    Hub index:{' '}
                    <Link
                      to={INDUSTRIES_INSIGHTS_INDEX_PATH}
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Industry Insights portal
                    </Link>
                  </p>
                  {industriesPosts.length > 0 ? (
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {industriesPosts.map((post) => (
                        <li key={post.id}>
                          <PremiumInternalLink to={getBlogPostPath(post)}>{post.title}</PremiumInternalLink>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Industry articles are published on the{' '}
                      <Link to={INDUSTRIES_INSIGHTS_INDEX_PATH} className="text-primary font-medium hover:underline">
                        Industry Insights hub
                      </Link>
                      .
                    </p>
                  )}
                </SectionShell>

                <SectionShell
                  id="section-priority"
                  icon={Radar}
                  title="Priority internal discovery"
                  description="Curated corridors we keep prominent for thematic linking and crawler clarity—centralised without bloating primary navigation."
                  countLabel={`${INTERNAL_LINK_PRIORITY_TARGETS.length} picks`}
                >
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {INTERNAL_LINK_PRIORITY_TARGETS.map((item) => (
                      <li key={item.to}>
                        <PremiumInternalLink to={item.to}>{item.label}</PremiumInternalLink>
                      </li>
                    ))}
                  </ul>
                </SectionShell>

                <SectionShell
                  id="section-cases"
                  icon={Shield}
                  title="Case studies"
                  description="Programme snapshots spanning oncology, GCC markets, tender intelligence, and access storytelling."
                  countLabel={`${caseStudies.length} studies`}
                >
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {caseStudies.map((item) => (
                      <li key={item.id}>
                        <PremiumInternalLink to={`/case-studies/${item.slug}`}>{item.title}</PremiumInternalLink>
                      </li>
                    ))}
                  </ul>
                </SectionShell>

                <section id="section-extended" className="scroll-mt-28" aria-labelledby="section-extended-heading">
                  <div className="overflow-hidden rounded-2xl border border-border/80 bg-muted/15 shadow-sm">
                    <header className="flex flex-col gap-3 border-b border-border/60 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
                      <div className="flex items-start gap-4">
                        <span
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/15"
                          aria-hidden
                        >
                          <FileStack className="h-6 w-6" strokeWidth={1.75} />
                        </span>
                        <div>
                          <h2 id="section-extended-heading" className="font-display text-xl font-semibold md:text-2xl">
                            Extended coverage registry
                          </h2>
                          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                            Supplementary long-tail paths grouped by topical cluster—ideal for auditors, SEO stakeholders, and
                            deep-link discovery.
                          </p>
                        </div>
                      </div>
                      <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        ~{approxExtendedCount} paths
                      </span>
                    </header>
                    <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8">
                      {coverageGroupOrder
                        .filter((group) => Array.isArray(groupedCoverageLinks[group]) && groupedCoverageLinks[group].length > 0)
                        .map((group) => (
                          <article
                            key={group}
                            className="rounded-xl border border-border/70 bg-card/80 p-5 shadow-[inset_0_1px_0_0_hsl(var(--border)/0.5)]"
                          >
                            <h3 className="mb-4 border-b border-border/50 pb-2 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                              {group}
                            </h3>
                            <ul className="max-h-[min(24rem,50vh)] space-y-1 overflow-y-auto pr-1 text-sm">
                              {groupedCoverageLinks[group].map((path) => (
                                <li key={path}>
                                  <Link
                                    to={path}
                                    className="block rounded-md py-1.5 text-primary transition hover:bg-muted/80 hover:text-primary/90"
                                  >
                                    {pathToLabel(path)}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </article>
                        ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      <CTASection variant="research-proposal" />
      <Footer />
    </div>
  );
}
