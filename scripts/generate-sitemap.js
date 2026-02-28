import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://www.bionixus.com';
const now = new Date().toISOString();

const COUNTRIES = ['saudi-arabia', 'uae', 'kuwait', 'uk', 'europe'];
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
  '/pharmaceutical-companies-kuwait',
  '/pharmaceutical-companies-saudi-arabia',
  '/pharmaceutical-companies-uae',
  '/pharmaceutical-companies-egypt',
  '/pharmaceutical-companies-qatar',
  '/pharmaceutical-companies-oman',
  '/pharmaceutical-companies-bahrain',
  '/pharmaceutical-companies-iraq',
  '/pharmaceutical-companies-iran',
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
  '/blog/nupco-saudi-arabia-tendering-guide',
  '/blog/abu-dhabi-doh-vs-dubai-dha-formulary-guide',
];

function routeMeta(url) {
  if (url === '/') return { priority: '1.0', changefreq: 'weekly' };
  if (url.startsWith('/blog')) return { priority: '0.85', changefreq: 'daily' };
  if (url.startsWith('/healthcare-market-research')) return { priority: '0.9', changefreq: 'weekly' };
  if (url.startsWith('/services/')) return { priority: '0.8', changefreq: 'monthly' };
  if (url.startsWith('/pharmaceutical-companies-')) return { priority: '0.85', changefreq: 'monthly' };
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

