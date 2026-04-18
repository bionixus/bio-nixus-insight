import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://www.bionixus.com';
const now = new Date().toISOString();

const COUNTRIES = ['saudi-arabia', 'uae', 'kuwait', 'uk', 'europe', 'egypt'];
const THERAPIES = ['oncology', 'diabetes', 'respiratory', 'immunology', 'biologics', 'vaccines'];
const SERVICES = [
  'market-access',
  'physician-insights',
  'kol-mapping',
  'quantitative-research',
  'qualitative-research',
];

const STATIC_ROUTES = [
  '/',
  '/de',
  '/fr',
  '/es',
  '/zh',
  '/ar',
  '/about',
  '/services',
  '/services/quantitative-research',
  '/services/qualitative-research',
  '/services/market-access',
  '/services/competitive-intelligence',
  '/services/clinical-trial-support',
  '/services/kol-stakeholder-mapping',
  '/faq',
  '/resources',
  '/sitemap',
  '/blog',
  '/case-studies',
  '/privacy',
  '/contact',
  '/methodology',
  '/market-research',
  '/bionixus-market-research-middle-east',
  '/mena-pharma-market-data',
  '/gcc-market-access-guide',
  '/quantitative-healthcare-market-research',
  '/qualitative-market-research',
  '/gcc-pharmaceutical-market-research',
  '/uae-pharmaceutical-market-research',
  '/gcc-hcp-recruitment-market-research',
  '/healthcare-market-research-agency-gcc',
  '/uae-market-access-research',
  '/real-world-evidence',
  '/real-world-evidence-gcc',
  '/pharmaceutical-companies-kuwait',
  '/pharmaceutical-companies-saudi-arabia',
  '/pharmaceutical-companies-uae',
  '/pharmaceutical-companies-egypt',
  '/pharmaceutical-companies-qatar',
  '/pharmaceutical-companies-oman',
  '/pharmaceutical-companies-bahrain',
  '/pharmaceutical-companies-iraq',
  '/pharmaceutical-companies-iran',
  '/market-research-uae',
  '/market-research-ksa',
  '/market-research-saudi',
  '/market-research-kuwait',
  '/market-research-egypt',
  '/market-research-healthcare',
  '/market-research-saudi-arabia-pharmaceutical',
  '/ar/market-research-uae',
  '/ar/market-research-ksa',
  '/ar/market-research-saudi',
  '/ar/market-research-kuwait',
  '/ar/market-research-egypt',
  '/ar/market-research-healthcare',
  '/global-websites',
  '/global-websites/united-arab-emirates',
  '/global-websites/saudi-arabia',
  '/global-websites/united-kingdom',
  '/global-websites/germany',
  '/global-websites/france',
  '/global-websites/spain',
  '/global-websites/italy',
  '/global-websites/kuwait',
  '/global-websites/qatar',
  '/global-websites/bahrain',
  '/global-websites/oman',
  '/global-websites/egypt',
  '/global-websites/united-states',
  '/blog/sfda-drug-registration-guide',
  '/blog/healthcare-market-research-methodologies-gcc',
  '/blog/kol-mapping-pharma-middle-east',
  '/blog/market-access-strategy-uae',
  '/blog/top-therapy-areas-pharma-growth-saudi-arabia',
  '/blog/pharma-market-entry-saudi-arabia-playbook',
  '/blog/competitive-intelligence-pharma-gcc',
  '/blog/nice-hta-evidence-requirements-guide',
  '/blog/patient-journey-mapping-saudi-arabia',
  '/blog/middle-east-healthcare-market-statistics-2025',
  '/blog/middle-east-healthcare-market-statistics-2026',
  '/blog/nupco-saudi-arabia-tendering-guide',
  '/blog/abu-dhabi-doh-vs-dubai-dha-formulary-guide',
  '/blog/regional-crisis-impact-middle-east-economies-healthcare-2026',
  '/blog/digital-therapeutics-regulation-mena-markets',
  '/blog/top-healthcare-market-research-companies-uae',
  '/blog/top-healthcare-market-research-firms-saudi-arabia',
  '/blog/top-market-research-companies-egypt-2026',
  '/ar/blog',
  '/ar/blog/saudi-healthcare-market-research-firms-ar',
  '/ar/contacts',
  '/insights/top-market-research-companies-egypt-2026',
  '/ar/insights/top-market-research-companies-egypt-2026',
  '/conf',
  '/ar/conf',
  '/healthcare-market-research/egypt',
];

function routeMeta(url) {
  if (url === '/') return { priority: '1.0', changefreq: 'weekly' };
  if (url === '/healthcare-market-research') return { priority: '0.95', changefreq: 'weekly' };
  if (url === '/global-websites/united-arab-emirates') return { priority: '0.95', changefreq: 'weekly' };
  if (url === '/conf' || url === '/ar/conf') return { priority: '0.95', changefreq: 'weekly' };
  if (url === '/bionixus-market-research-middle-east') return { priority: '0.9', changefreq: 'weekly' };
  if (url.includes('top-market-research-companies-egypt')) return { priority: '0.9', changefreq: 'weekly' };
  if (url.startsWith('/blog') || url.startsWith('/ar/blog')) return { priority: '0.85', changefreq: 'daily' };
  if (url.startsWith('/insights') || url.startsWith('/ar/insights')) return { priority: '0.9', changefreq: 'weekly' };
  if (url.startsWith('/healthcare-market-research')) return { priority: '0.9', changefreq: 'weekly' };
  if (url.startsWith('/global-websites/')) return { priority: '0.85', changefreq: 'monthly' };
  if (url.startsWith('/market-research-')) return { priority: '0.85', changefreq: 'weekly' };
  if (url.startsWith('/ar/market-research-')) return { priority: '0.8', changefreq: 'weekly' };
  if (url.startsWith('/services/')) return { priority: '0.8', changefreq: 'monthly' };
  if (url.startsWith('/pharmaceutical-companies-')) return { priority: '0.85', changefreq: 'monthly' };
  if (url.includes('pharmaceutical-market-research') || url.includes('market-access')) return { priority: '0.85', changefreq: 'weekly' };
  if (url.includes('real-world-evidence')) return { priority: '0.8', changefreq: 'monthly' };
  return { priority: '0.7', changefreq: 'monthly' };
}

const allRoutes = [
  ...STATIC_ROUTES,
  '/healthcare-market-research',
  '/healthcare-market-research/saudi-arabia',
  '/healthcare-market-research/riyadh',
  '/healthcare-market-research/jeddah',
  '/healthcare-market-research/uae',
  '/healthcare-market-research/dubai',
  '/healthcare-market-research/abu-dhabi',
  '/healthcare-market-research/kuwait',
  '/healthcare-market-research/uk',
  '/healthcare-market-research/europe',
  ...COUNTRIES.map((slug) => `/healthcare-market-research/${slug}`),
  ...THERAPIES.map((slug) => `/healthcare-market-research/therapy/${slug}`),
  ...SERVICES.map((slug) => `/healthcare-market-research/services/${slug}`),
];

const pages = [...new Set(allRoutes)].map((url) => ({ url, ...routeMeta(url) }));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
    .map(
      (page) => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
    )
    .join('\n')}
</urlset>
`;

const publicPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(publicPath, xml, 'utf8');

const distDir = path.resolve(__dirname, '../dist/client');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), xml, 'utf8');
}

// eslint-disable-next-line no-console
console.log(`Sitemap generated with ${pages.length} URLs`);

