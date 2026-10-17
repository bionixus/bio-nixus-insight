import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import { CTR_SEO_BY_PATH as MIRROR_CTR } from '@/server/ctr-seo-overrides.js';
import { CTR_SEO_BY_PATH as LIB_CTR } from '../../../../lib/ctr-seo-overrides.mjs';
import { KSA_HUB_COMPANIES_COPY } from '@/data/healthcareHubCompaniesCopy';
import { COUNTRY_CONFIGS } from '@/lib/constants/countries';
import { buildCountryPageSchemas, buildHubPageSchemas } from '@/lib/seo/schemas';
import { SAUDI_OBESITY_SHORTLIST_BODY_HTML } from '@/data/blog-saudi-obesity-market-research-shortlist';
import { GLP1_PHYSICIAN_SURVEY_BODY_HTML } from '@/data/blog-glp1-physician-survey-saudi-arabia';
import { HEMATOLOGY_KSA_BODY_HTML } from '@/data/blog-hematology-market-research-saudi-arabia';
import { CHOOSE_AGENCY_KSA_BODY_HTML } from '@/data/blog-how-to-choose-healthcare-market-research-agency-saudi-arabia';
import { NUPCO_TENDER_BODY_HTML } from '@/data/blog-nupco-tender-market-research-saudi-arabia';
import { IQVIA_UAE_PRIMARY_BODY_HTML } from '@/data/blog-iqvia-alternative-uae-primary-research';
import { THIQA_OBESITY_BODY_HTML } from '@/data/blog-thiqa-obesity-reimbursement-abu-dhabi';
import { UAE_EDE_BODY_HTML } from '@/data/blog-uae-drug-pricing-ede-takeover-launch-research';
import { DEDL_FORMULARY_BODY_HTML } from '@/data/blog-dubai-essential-drug-list-formulary-submission';

const root = process.cwd();
const hubSource = readFileSync(join(root, 'src/pages/healthcare-research/HubPage.tsx'), 'utf8');
const blogPostSource = readFileSync(join(root, 'src/pages/BlogPost.tsx'), 'utf8');
const dubaiSource = readFileSync(join(root, 'src/pages/TopMarketResearchCompaniesDubai2026.tsx'), 'utf8');
const ksaListicleSource = readFileSync(
  join(root, 'src/pages/TopHealthcareMarketResearchCompaniesSaudiArabia2026.tsx'),
  'utf8',
);
const iqviaHtml = readFileSync(join(root, 'public/conf/iqvia-alternative.html'), 'utf8');
const nielsenHtml = readFileSync(join(root, 'public/conf/nielsen-alternative.html'), 'utf8');
const sitemapScript = readFileSync(join(root, 'scripts/generate-sitemap.mjs'), 'utf8');
const ssrBundle = readFileSync(join(root, 'scripts/verify-ssr-bundle.mjs'), 'utf8');
const llms = readFileSync(join(root, 'public/llms.txt'), 'utf8');
const freeze = JSON.parse(readFileSync(join(root, 'data/seo/title-freeze.json'), 'utf8')) as {
  entries: Record<string, { override: { title: string; description: string } | null }>;
};

const GSC_PATHS = [
  '/healthcare-market-research',
  '/blog/healthcare-overview-egypt-market-2026',
  '/iqvia-alternative',
  '/nielsen-alternative',
  '/healthcare-market-research/saudi-arabia',
  '/insights/top-market-research-companies-dubai-2026',
] as const;

const OCT_KSA_UAE_BLOGS = [
  { body: SAUDI_OBESITY_SHORTLIST_BODY_HTML, saudi: true },
  { body: GLP1_PHYSICIAN_SURVEY_BODY_HTML, saudi: true },
  { body: HEMATOLOGY_KSA_BODY_HTML, saudi: true },
  { body: CHOOSE_AGENCY_KSA_BODY_HTML, saudi: true },
  { body: NUPCO_TENDER_BODY_HTML, saudi: true },
  { body: IQVIA_UAE_PRIMARY_BODY_HTML, saudi: false },
  { body: THIQA_OBESITY_BODY_HTML, saudi: false },
  { body: UAE_EDE_BODY_HTML, saudi: false },
  { body: DEDL_FORMULARY_BODY_HTML, saudi: false },
];

function firstFiftyWords(text: string): string {
  return text.trim().split(/\s+/).slice(0, 50).join(' ');
}

function visibleText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractJsonLd(document: string): Array<Record<string, unknown>> {
  return [...document.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.parse(match[1]) as Record<string, unknown>,
  );
}

function h1Text(html: string): string {
  const match = html.match(/<h1[\s\S]*?<\/h1>/i);
  return match ? visibleText(match[0]) : '';
}

describe('GSC 17 Sep–14 Oct 2026 buyer CTR rewrites', () => {
  it('keeps the six CTR titles in 50–60 and metas in 150–160, mirrored in both tables', () => {
    for (const path of GSC_PATHS) {
      const ctr = getCtrSeo(path);
      expect(ctr, path).toBeTruthy();
      expect(ctr!.title.length, path).toBeGreaterThanOrEqual(50);
      expect(ctr!.title.length, path).toBeLessThanOrEqual(60);
      expect(ctr!.description.length, path).toBeGreaterThanOrEqual(150);
      expect(ctr!.description.length, path).toBeLessThanOrEqual(160);
      expect(MIRROR_CTR[path]).toEqual(ctr);
      expect(LIB_CTR[path]).toEqual(ctr);
      expect(freeze.entries[path]?.override).toEqual(ctr);
    }
  });

  it('targets the GSC queries in titles and leaves URLs unchanged', () => {
    expect(getCtrSeo('/healthcare-market-research')?.title).toBe(
      'Healthcare Market Research Company | Saudi, UAE & GCC',
    );
    expect(getCtrSeo('/blog/healthcare-overview-egypt-market-2026')?.title).toBe(
      'Cairo Hospitals Ranked 2026 | Kasr Al-Ainy & Cleopatra',
    );
    expect(getCtrSeo('/iqvia-alternative')?.title).toBe(
      'IQVIA vs Competitors: Primary Research Compared 2026',
    );
    expect(getCtrSeo('/nielsen-alternative')?.title).toBe(
      'NielsenIQ vs Competitors: Audit or Fieldwork (2026)',
    );
    expect(getCtrSeo('/healthcare-market-research/saudi-arabia')?.title).toBe(
      'Healthcare Market Research Company in Saudi Arabia',
    );
    expect(getCtrSeo('/insights/top-market-research-companies-dubai-2026')?.title).toBe(
      'Market Research Companies in Dubai 2026 | Ranked Guide',
    );
    expect(hubSource).not.toContain('/home-staging');
    expect(blogPostSource).toContain("EGYPT_HEALTHCARE_2026_SLUG = 'healthcare-overview-egypt-market-2026'");
    expect(blogPostSource).toContain(
      "EGYPT_HEALTHCARE_2026_DISPLAY_TITLE =\n  'Cairo Hospitals Healthcare 2023–2026: Ranked Hospital Guide'",
    );
  });

  it('rebuilds the Saudi buyer page with exact-query title, H1, first sentence, FAQ and schema', () => {
    expect(KSA_HUB_COMPANIES_COPY.title).toBe('Healthcare Market Research Company in Saudi Arabia');
    expect(KSA_HUB_COMPANIES_COPY.h1).toBe(KSA_HUB_COMPANIES_COPY.title);
    expect(COUNTRY_CONFIGS['saudi-arabia'].h1).toBe(KSA_HUB_COMPANIES_COPY.h1);
    expect(firstFiftyWords(KSA_HUB_COMPANIES_COPY.opening)).toBe(KSA_HUB_COMPANIES_COPY.opening);
    expect(KSA_HUB_COMPANIES_COPY.opening.startsWith('BioNixus is the healthcare market research company in Saudi Arabia')).toBe(
      true,
    );
    expect(KSA_HUB_COMPANIES_COPY.faqQuestion).toBe('Who is the healthcare market research company in Saudi Arabia?');
    expect(KSA_HUB_COMPANIES_COPY.faqAnswer).not.toMatch(/ranked #1|guaranteed accuracy/i);
    const schemas = buildCountryPageSchemas(COUNTRY_CONFIGS['saudi-arabia']);
    const faq = schemas.find((node) => node['@type'] === 'FAQPage') as {
      mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }>;
    };
    const service = schemas.find((node) => node['@type'] === 'ProfessionalService' || node['@type'] === 'Service') as {
      name?: string;
      dateModified?: string;
    };
    expect(faq.mainEntity[0].name).toBe(KSA_HUB_COMPANIES_COPY.faqQuestion);
    expect(faq.mainEntity[0].acceptedAnswer.text).toBe(KSA_HUB_COMPANIES_COPY.faqAnswer);
    expect(service.name).toBe(KSA_HUB_COMPANIES_COPY.h1);
    expect(service.dateModified).toBe('2026-10-17');
  });

  it('links the company hub from every 11–17 Oct KSA/UAE blog and the Saudi buyer page from every Saudi article', () => {
    expect(OCT_KSA_UAE_BLOGS).toHaveLength(9);
    for (const article of OCT_KSA_UAE_BLOGS) {
      expect(article.body).toContain('href="/healthcare-market-research"');
      if (article.saudi) {
        expect(article.body).toContain('href="/healthcare-market-research/saudi-arabia"');
      }
    }
    expect(blogPostSource).toContain('isSaudiHealthcareBlog');
    expect(blogPostSource).toContain('!pathClean.startsWith(\'/bionixus-industries\')');
    expect(blogPostSource).toContain('to="/healthcare-market-research/saudi-arabia"');
    expect(ksaListicleSource).toContain('to="/healthcare-market-research/saudi-arabia"');
  });

  it('matches IQVIA visible FAQ details to FAQPage schema (12 questions) and keeps Nielsen FAQPage', () => {
    const iqviaSchemas = extractJsonLd(iqviaHtml);
    const iqviaFaq = iqviaSchemas.find((node) => node['@type'] === 'FAQPage') as {
      mainEntity: Array<{ name: string }>;
    };
    const iqviaSummaries = [...iqviaHtml.matchAll(/<summary>([^<]+)<\/summary>/g)].map((match) => match[1]);
    expect(iqviaFaq.mainEntity).toHaveLength(12);
    expect(iqviaSummaries).toHaveLength(12);
    expect(iqviaFaq.mainEntity.map((item) => item.name)).toEqual(iqviaSummaries);
    expect(iqviaHtml).toContain('<title>IQVIA vs Competitors: Primary Research Compared 2026</title>');
    expect(nielsenHtml).toContain('<title>NielsenIQ vs Competitors: Audit or Fieldwork (2026)</title>');
    expect(nielsenHtml).toContain('"@type":"FAQPage"');
    expect(nielsenHtml.match(/<details/g)?.length).toBe(8);
  });

  it('refreshes Dubai for market research companies in dubai and links UAE healthcare pages', () => {
    expect(dubaiSource).toContain('Market Research Companies in Dubai: 2026 Ranked Guide');
    expect(dubaiSource).toContain('Who are the market research companies in Dubai?');
    expect(dubaiSource).toContain('to="/healthcare-market-research/uae"');
    expect(dubaiSource).toContain('to="/insights/top-healthcare-market-research-companies-dubai-2026"');
    expect(dubaiSource).toContain('to="/insights/top-healthcare-market-research-companies-uae-2026"');
    expect(dubaiSource).toContain('to="/insights/top-pharmaceutical-market-research-companies-uae-2026"');
    expect(dubaiSource).toContain('to="/pharmaceutical-market-research-dubai"');
    expect(dubaiSource).toContain("dateModified: '2026-10-17'");
  });

  it('floors sitemap lastmod, lists the six URLs in llms.txt, and keeps SSR critical paths', () => {
    for (const path of GSC_PATHS) {
      expect(sitemapScript).toContain(`[\`\${BASE}${path}\`]: '2026-10-17'`);
    }
    expect(llms).toContain('# Last GEO refresh: 2026-Q4 (2026-10-17)');
    expect(llms).toContain('https://www.bionixus.com/healthcare-market-research');
    expect(llms).toContain('https://www.bionixus.com/healthcare-market-research/saudi-arabia');
    expect(llms).toContain('https://www.bionixus.com/iqvia-alternative');
    expect(llms).toContain('https://www.bionixus.com/nielsen-alternative');
    expect(llms).toContain('https://www.bionixus.com/insights/top-market-research-companies-dubai-2026');
    expect(ssrBundle).toContain("'/healthcare-market-research/saudi-arabia'");
    expect(ssrBundle).toContain("'/blog/healthcare-overview-egypt-market-2026'");
    expect(ssrBundle).toContain("'/insights/top-market-research-companies-dubai-2026'");
  });
});

describe('GSC 17 Sep–14 Oct 2026 SSR titles, H1s and FAQs', () => {
  let hubHtml = '';
  let hubHead = '';
  let ksaHtml = '';
  let ksaHead = '';
  let dubaiHtml = '';
  let dubaiHead = '';

  beforeAll(async () => {
    HelmetProvider.canUseDOM = false;
    const hub = await render('/healthcare-market-research', { pageType: 'hub' });
    hubHtml = hub.html;
    hubHead = [hub.helmetData.title, hub.helmetData.meta, hub.helmetData.script].map((part) => part.toString()).join('\n');
    const ksa = await render('/healthcare-market-research/saudi-arabia', {
      pageType: 'country',
      slug: 'saudi-arabia',
    });
    ksaHtml = ksa.html;
    ksaHead = [ksa.helmetData.title, ksa.helmetData.meta, ksa.helmetData.script].map((part) => part.toString()).join('\n');
    const dubai = await render('/insights/top-market-research-companies-dubai-2026', {});
    dubaiHtml = dubai.html;
    dubaiHead = [dubai.helmetData.title, dubai.helmetData.meta, dubai.helmetData.script]
      .map((part) => part.toString())
      .join('\n');
  });

  it('SSRs the hub with the GCC company title, unchanged H1 and a matching FAQPage', () => {
    expect(hubHead.replace(/&amp;/g, '&')).toContain(
      'Healthcare Market Research Company | Saudi, UAE & GCC',
    );
    expect(h1Text(hubHtml)).toBe('Healthcare Market Research Company for Pharma & MedTech');
    expect(hubHtml.match(/<h1[\s>]/g)?.length).toBe(1);
    expect(visibleText(hubHtml)).toContain(
      'BioNixus is the primary healthcare market research company for Saudi Arabia, the UAE and the GCC',
    );
    const faq = extractJsonLd(hubHead).find((node) => node['@type'] === 'FAQPage') as {
      mainEntity: Array<{ name: string }>;
    };
    expect(faq.mainEntity[0].name).toBe(
      'Which healthcare market research company covers Saudi Arabia, the UAE and the GCC?',
    );
    expect(hubHtml.match(/<details/g)?.length ?? 0).toBeGreaterThanOrEqual(faq.mainEntity.length);
    for (const item of faq.mainEntity) {
      expect(hubHtml).toContain(item.name);
    }
    expect(buildHubPageSchemas([{ question: faq.mainEntity[0].name, answer: 'x' }])[1]['@type']).toBe('FAQPage');
  });

  it('SSRs the Saudi buyer page with the exact-query H1, opening, details FAQ and hub link', () => {
    expect(ksaHead).toContain('Healthcare Market Research Company in Saudi Arabia');
    expect(h1Text(ksaHtml)).toBe('Healthcare Market Research Company in Saudi Arabia');
    expect(ksaHtml.match(/<h1[\s>]/g)?.length).toBe(1);
    expect(visibleText(ksaHtml)).toContain(KSA_HUB_COMPANIES_COPY.opening);
    expect(ksaHtml).toContain('href="/healthcare-market-research"');
    expect(ksaHtml).toContain('id="who-briefs-ksa-healthcare-mr-company"');
    expect(ksaHtml).toContain('id="what-bionixus-fields-ksa"');
    const faq = extractJsonLd(ksaHead).find((node) => node['@type'] === 'FAQPage') as {
      mainEntity: Array<{ name: string }>;
    };
    expect(faq.mainEntity[0].name).toBe(KSA_HUB_COMPANIES_COPY.faqQuestion);
    expect(ksaHtml).toContain(`<summary`);
    expect(visibleText(ksaHtml)).toContain(KSA_HUB_COMPANIES_COPY.faqQuestion);
  });

  it('SSRs the Dubai ranking with the 2026 H1, FAQPage and UAE healthcare links', () => {
    expect(dubaiHead).toContain('Market Research Companies in Dubai 2026 | Ranked Guide');
    expect(h1Text(dubaiHtml)).toBe('Market Research Companies in Dubai: 2026 Ranked Guide');
    expect(dubaiHtml.match(/<h1[\s>]/g)?.length).toBe(1);
    expect(dubaiHtml).toContain('href="/healthcare-market-research/uae"');
    const faq = extractJsonLd(dubaiHead).find((node) => node['@type'] === 'FAQPage') as {
      mainEntity: Array<{ name: string }>;
    };
    expect(faq.mainEntity[0].name).toBe('Who are the market research companies in Dubai?');
    expect(dubaiHtml.match(/<details/g)?.length ?? 0).toBeGreaterThanOrEqual(faq.mainEntity.length);
  });
});
