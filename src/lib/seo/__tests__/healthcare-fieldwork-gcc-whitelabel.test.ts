import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { beforeAll, describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';

const root = process.cwd();
const TITLE = 'Healthcare Fieldwork GCC | Specialist HCP Research | BioNixus';
const DESCRIPTION =
  'White-label healthcare fieldwork across all six GCC markets for agencies, under NDA. Role-verified HCP recruitment from about 3,200 Middle East physicians.';
const FAQ_Q = 'Does BioNixus run white-label healthcare fieldwork for agencies in the GCC?';

/** Mirrors api/indexnow-key.ts normalizeDescriptionLength (production SSR, max 155). */
function productionDescriptionClamp(description: string, max = 155): string {
  const clean = String(description || '').replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > 90 ? cut.slice(0, lastSpace) : cut).trim().replace(/[|,;:\-–—\s]+$/, '')}.`;
}

describe('/healthcare-fieldwork-gcc white-label fieldwork', () => {
  let html = '';
  let head = '';

  beforeAll(async () => {
    HelmetProvider.canUseDOM = false;
    const page = await render('/healthcare-fieldwork-gcc');
    html = page.html;
    head = [page.helmetData.title, page.helmetData.meta, page.helmetData.script]
      .map((part) => part.toString())
      .join('\n');
  }, 120_000);

  it('keeps the frozen title and ships a complete description within 155 characters', () => {
    expect(DESCRIPTION.length).toBeLessThanOrEqual(155);
    expect(DESCRIPTION.length).toBeGreaterThanOrEqual(120);
    expect(productionDescriptionClamp(DESCRIPTION)).toBe(DESCRIPTION);
    const titles = [...head.matchAll(/<title[^>]*>([\s\S]*?)<\/title>/g)].map((match) => match[1]);
    expect(titles).toEqual([TITLE]);
    const descriptions = [...head.matchAll(/<meta[^>]*name="description"[^>]*>/g)].map((match) => {
      const content = match[0].match(/content="([^"]*)"/);
      return content?.[1] ?? '';
    });
    expect(descriptions).toEqual([DESCRIPTION]);
    expect(head).toContain(`property="og:description" content="${DESCRIPTION}"`);
    expect(head).toContain(`name="twitter:description" content="${DESCRIPTION}"`);
    expect(head).toContain('property="og:title" content="Healthcare Fieldwork Gcc | BioNixus"');
    expect(head).not.toContain('about 3,200 physicians in the.');
  });

  it('puts the agency sentence first and does not repeat the six-market list in the next sentence', () => {
    const intro = html.match(/<p class="text-muted-foreground leading-relaxed max-w-4xl mb-6">([\s\S]*?)<\/p>/)?.[1] ?? '';
    const text = intro.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    expect(text.startsWith(
      'BioNixus is a white-label fieldwork partner for market research agencies, working under NDA across all six GCC markets (Saudi Arabia, UAE, Kuwait, Qatar, Bahrain and Oman), so the agency keeps the client relationship and its own brand on deliverables.',
    )).toBe(true);
    const second = text.split('. ')[1] ?? '';
    expect(second.startsWith('For agencies and pharma teams alike, BioNixus designs and executes the fieldwork with role-verified')).toBe(true);
    expect(second).not.toMatch(/Saudi Arabia|Kuwait|Qatar|Bahrain|Oman/);
    expect(html.match(/<h1[\s>]/g)?.length).toBe(1);
  });

  it('adds the agency FAQ in the page and in FAQPage schema', () => {
    expect(html).toContain(FAQ_Q);
    expect(html).toContain('works as a white-label fieldwork partner for market research agencies under NDA across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain and Oman');
    const visible = html.replace(/&#x27;/g, "'").replace(/&amp;/g, '&');
    expect(visible).toContain(
      "Yes. BioNixus works as a white-label fieldwork partner for market research agencies under NDA across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain and Oman. Instruments, fieldwork and datasets can ship under the agency's brand, and the end client's identity stays with the people working the project.",
    );
    expect(html).toContain('<summary');
    expect(head).toContain('"@type":"FAQPage"');
    expect(head).toContain(FAQ_Q);
    expect(head).toContain('white-label fieldwork partner for market research agencies under NDA');
    expect(head).not.toContain('"dateModified"');
  });

  it('does not add guarantee language, competitor names, or a number-one claim', () => {
    const page = readFileSync(join(root, 'src/pages/HealthcareFieldworkGcc.tsx'), 'utf8');
    expect(page).not.toMatch(/dateModified/);
    expect(page).not.toMatch(/guaranteed/i);
    expect(page).not.toMatch(/SurveyArabia/i);
    expect(page).not.toMatch(/#1|number one|ranked first/i);
    expect(html).not.toMatch(/guaranteed/i);
    expect(html).not.toMatch(/SurveyArabia/i);
  });

  it('bumps sitemap lastmod and leaves the title freeze and home-staging alone', () => {
    const sitemap = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');
    const block = sitemap.split('<loc>https://www.bionixus.com/healthcare-fieldwork-gcc</loc>')[1]?.slice(0, 200) ?? '';
    expect(block).toContain('<lastmod>2026-11-05</lastmod>');
    const generator = readFileSync(join(root, 'scripts/generate-sitemap.mjs'), 'utf8');
    expect(generator).toContain("path: '/healthcare-fieldwork-gcc', priority: '0.8', changefreq: 'monthly', lastmod: '2026-11-05'");
    const server = readFileSync(join(root, 'server.js'), 'utf8');
    expect(server).toContain("pathname === '/healthcare-fieldwork-gcc' && clean.length > 0 && clean.length <= 155");
    expect(readFileSync(join(root, 'public/home-staging.html'), 'utf8')).not.toContain(FAQ_Q);
  });
});
