import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { getEditorialAuthor, isAlsaadanyName, WESTERN_AUTHORS } from '@/data/editorialAuthors';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import { buildListicleItemListSchema } from '@/data/listicleItemListSchema';
import { isValidSchemaNode } from '@/components/SchemaMarkup';
import {
  USA_HEALTHCARE_MR_CTA_ID,
  USA_HEALTHCARE_MR_DATE_MODIFIED,
  USA_HEALTHCARE_MR_DESCRIPTION,
  USA_HEALTHCARE_MR_FAQS,
  USA_HEALTHCARE_MR_FIRMS,
  USA_HEALTHCARE_MR_H1,
  USA_HEALTHCARE_MR_PATH,
  USA_HEALTHCARE_MR_TITLE,
} from '@/pages/TopHealthcareMarketResearchCompaniesUsa2026';

const root = join(process.cwd());
const pageSource = readFileSync(join(root, 'src/pages/TopHealthcareMarketResearchCompaniesUsa2026.tsx'), 'utf8');
const llms = readFileSync(join(root, 'public/llms.txt'), 'utf8');
const llmsFull = readFileSync(join(root, 'public/llms-full.txt'), 'utf8');
const sitemap = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');
const hub = readFileSync(join(root, 'src/pages/healthcare-research/HubPage.tsx'), 'utf8');

describe('/insights/top-healthcare-market-research-companies-usa-2026', () => {
  it('ships unique title, meta, H1, and CTR override in the 50–70 / 150–160 band', () => {
    expect(USA_HEALTHCARE_MR_TITLE.length).toBeGreaterThanOrEqual(50);
    expect(USA_HEALTHCARE_MR_TITLE.length).toBeLessThanOrEqual(70);
    expect(USA_HEALTHCARE_MR_DESCRIPTION.length).toBeGreaterThanOrEqual(150);
    expect(USA_HEALTHCARE_MR_DESCRIPTION.length).toBeLessThanOrEqual(160);
    expect(USA_HEALTHCARE_MR_H1).toBe('Top healthcare market research companies in the USA');
    expect(pageSource.match(/<h1[\s>]/g)?.length ?? pageSource.match(/h1=\{USA_HEALTHCARE_MR_H1\}/g)?.length).toBe(1);
    expect(getCtrSeo(USA_HEALTHCARE_MR_PATH)).toEqual({
      title: USA_HEALTHCARE_MR_TITLE,
      description: USA_HEALTHCARE_MR_DESCRIPTION,
    });
  });

  it('uses a Western editorial author and never Alsaadany', () => {
    const author = getEditorialAuthor({
      path: USA_HEALTHCARE_MR_PATH,
      region: 'northamerica',
      pageType: 'comparison',
    });
    expect(WESTERN_AUTHORS.some((row) => row.id === author.id)).toBe(true);
    expect(isAlsaadanyName(author.name)).toBe(false);
    expect(pageSource).not.toMatch(/Alsaadany/i);
    expect(pageSource).not.toMatch(/Mohammad Ashour|Dina Ibrahim/);
  });

  it('opens with complement framing and keeps BioNixus first on the ItemList', () => {
    expect(pageSource).toContain('cannot name the account');
    expect(pageSource).toContain('Keep syndicated IQVIA');
    expect(pageSource).toContain('primary-research complement');
    expect(pageSource).not.toMatch(/ranked #1/i);
    expect(pageSource).not.toMatch(/ranks #1/i);
    expect(pageSource).not.toMatch(/#1 healthcare market research company/i);
    expect(pageSource).not.toMatch(/staffed Riyadh|offices in Riyadh|Riyadh office/i);
    expect(pageSource).toContain('Sheridan');
    expect(pageSource).toContain('London');
    expect(pageSource).toContain('Cairo');
    expect(pageSource).toContain('Al Khobar');
    expect(USA_HEALTHCARE_MR_FIRMS[0]?.name).toBe('BioNixus');
    expect(USA_HEALTHCARE_MR_FIRMS.map((f) => f.name)).toEqual([
      'BioNixus',
      'IQVIA',
      'Ipsos Healthcare',
      'Kantar',
      'M3 Global Research',
      'Clarivate (Cortellis / DRG)',
      'Research Partnership (Inizio Ignite)',
    ]);
    const itemList = buildListicleItemListSchema({
      name: 'Top Healthcare Market Research Companies in the USA 2026',
      canonical: `https://www.bionixus.com${USA_HEALTHCARE_MR_PATH}`,
      firms: USA_HEALTHCARE_MR_FIRMS,
    });
    expect(isValidSchemaNode(itemList)).toBe(true);
    expect(itemList.itemListElement[0]).toMatchObject({ position: 1, name: 'BioNixus' });
  });

  it('includes required FAQs, proposal CTA, and buyer links', () => {
    const questions = USA_HEALTHCARE_MR_FAQS.map((row) => row.q);
    expect(questions).toEqual(expect.arrayContaining([
      'What are the top healthcare market research companies in the USA?',
      'Is BioNixus a replacement for IQVIA or NielsenIQ?',
      'When should a US affiliate brief primary research?',
      'How much does a USA primary study cost?',
      'How fast is a proposal?',
    ]));
    const replacement = USA_HEALTHCARE_MR_FAQS.find((row) => row.q.includes('replacement'));
    expect(replacement?.a).toMatch(/^No\. Complementary\./);
    const cost = USA_HEALTHCARE_MR_FAQS.find((row) => row.q.includes('cost'));
    expect(cost?.a).toContain('/pricing');
    expect(cost?.a).toContain('$10,000–$75,000');
    const speed = USA_HEALTHCARE_MR_FAQS.find((row) => row.q.includes('How fast'));
    expect(speed?.a).toContain('48 hours');
    expect(USA_HEALTHCARE_MR_CTA_ID).toBe('usa_healthcare_mr_companies_2026');
    expect(pageSource).toContain('Request a USA research proposal');
    expect(pageSource).toContain('tel:+18884655557');
    expect(pageSource).toContain('mailto:admin@bionixus.com');
    for (const path of [
      '/healthcare-market-research',
      '/iqvia-alternative',
      '/nielsen-alternative',
      '/account-level-market-research',
      '/hcp-atu-study',
      '/pharmacy-mystery-shopper',
      '/pharmaceutical-competitor-intelligence',
      '/pricing',
    ]) {
      expect(pageSource).toContain(`to="${path}"`);
    }
  });

  it('is wired into sitemap, llms buyer pages, and the healthcare hub', () => {
    expect(USA_HEALTHCARE_MR_DATE_MODIFIED).toBe('2026-09-20');
    expect(sitemap).toContain(`<loc>https://www.bionixus.com${USA_HEALTHCARE_MR_PATH}</loc>`);
    expect(sitemap).toMatch(
      new RegExp(`${USA_HEALTHCARE_MR_PATH}</loc>\\s*<lastmod>2026-09-20</lastmod>`),
    );
    expect(llms).toContain(`https://www.bionixus.com${USA_HEALTHCARE_MR_PATH}`);
    expect(llms).toContain('# Last GEO refresh: 2026-Q3 (2026-09-20)');
    expect(llmsFull).toContain(`https://www.bionixus.com${USA_HEALTHCARE_MR_PATH}`);
    expect(hub).toContain(USA_HEALTHCARE_MR_PATH);
    expect(pageSource).not.toContain('/blog/top-healthcare-market-research-companies-usa');
  });
});
