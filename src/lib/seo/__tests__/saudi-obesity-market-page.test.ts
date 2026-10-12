import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { GCC_MIDDLE_EAST_SEGMENT_PAGES } from '@/data/segmentMarkets/gccAndMiddleEast';
import { SAUDI_DEVICES_CONSUMER_SEGMENT_PAGES } from '@/data/segmentMarkets/saudiDevicesConsumer';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import { buildFAQSchema, buildServiceSchema } from '@/lib/seo/schemas';

const page = SAUDI_DEVICES_CONSUMER_SEGMENT_PAGES.find((item) => item.slug === 'saudi-arabia-obesity-market');
const gcc = GCC_MIDDLE_EAST_SEGMENT_PAGES.find((item) => item.slug === 'gcc-obesity-market');

const META =
  'BioNixus does obesity market research in Saudi Arabia: GLP-1 physician surveys, journeys and access from Dubai and Al Khobar. Custom $10k–$60k.';
const TITLE = 'Who Does Obesity Market Research in Saudi Arabia? | BioNixus';
const QUERY = 'Who does obesity market research in Saudi Arabia?';

describe('/saudi-arabia-obesity-market', () => {
  it('ships the query title, meta, H1, canonical, and review date', () => {
    expect(page).toBeDefined();
    expect(page?.title).toBe(TITLE);
    expect(page?.title.length).toBeLessThanOrEqual(60);
    expect(page?.description).toBe(META);
    expect(page?.h1).toBe('Who Does Obesity Market Research in Saudi Arabia?');
    expect(page?.canonical).toBe('https://www.bionixus.com/saudi-arabia-obesity-market');
    expect(page?.lastUpdated).toBe('2026-10-12');
    expect(page?.dateLabel).toBe('Last reviewed');
    const ctr = getCtrSeo('/saudi-arabia-obesity-market');
    expect(ctr?.title).toBe(TITLE);
    expect(ctr?.description).toBe(META);
  });

  it('answers the query in the intro and the answer block', () => {
    expect(page?.intro[0]?.startsWith('BioNixus does obesity market research in Saudi Arabia')).toBe(true);
    expect(page?.intro[0]).toMatch(/GLP-1 physician surveys/);
    expect(page?.intro[0]).toMatch(/patient-journey and persistence/);
    expect(page?.intro[0]).toMatch(/payer and access interviews/);
    expect(page?.intro[0]).toMatch(/Al Khobar field office/);
    expect(page?.intro[0]).toMatch(/Cairo/);
    expect(page?.intro[0]).toMatch(/Sheridan/);
    expect(page?.intro[0]).toMatch(/not a syndicated pack/);
    expect(page?.intro[0]).toMatch(/\$10,000–\$60,000/);
    expect(page?.intro[0]).toMatch(/one working day/);
    expect(page?.introLinks?.some((link) => link.to === '/healthcare-market-research')).toBe(true);
    expect(page?.quickAnswer.question).toBe(QUERY);
    expect(page?.quickAnswer.answer.startsWith('BioNixus does')).toBe(true);
    const answerText = [
      page?.quickAnswer.answer,
      ...(page?.quickAnswer.points.map((point) => `${point.title} ${point.description}`) ?? []),
      page?.quickAnswer.summary,
    ].join(' ');
    expect(answerText).toMatch(/endocrinology, family medicine, internal medicine, and bariatric surgery/);
    expect(answerText).toMatch(/Patient journey and discontinuation|patient-journey and discontinuation/i);
    expect(answerText).toMatch(/SFDA, NUPCO, and CHI/);
    expect(answerText).toMatch(/Arabic and English/);
    expect(answerText).toMatch(/Al Khobar field office/);
    expect(answerText).toMatch(/field offices/);
  });

  it('uses the confirmed hero stats', () => {
    const stats = page?.heroStats?.map((stat) => `${stat.value} ${stat.label}`).join(' | ');
    expect(stats).toContain('$10,000–$60,000 custom studies');
    expect(stats).toContain('~3,200 physicians in network');
    expect(stats).toContain('127 studies year-to-date in 2026');
    expect(stats).toContain('Al Khobar');
    expect(stats).toContain('US HQ Sheridan, WY');
  });

  it('compares publishers as plain text', () => {
    expect(page?.comparisonTable?.heading).toBe('BioNixus vs syndicated obesity publishers in Saudi Arabia');
    const rows = page?.comparisonTable?.rows ?? [];
    expect(rows.map((row) => row.who)).toEqual([
      'Ken Research, IMARC, Euromonitor, Mordor, Grand View',
      'BioNixus',
      'IQVIA, plus BioNixus for primary research',
      'Kantar',
      'NielsenIQ',
    ]);
    const blob = JSON.stringify(page?.comparisonTable);
    expect(blob).not.toMatch(/https?:\/\//);
  });

  it('replaces the FAQ and mirrors it in FAQPage JSON-LD', () => {
    const questions = page?.faqs.map((item) => item.question) ?? [];
    expect(questions).toEqual([
      QUERY,
      'Can BioNixus run a GLP-1 physician survey in KSA?',
      'Is semaglutide for weight loss reimbursed in Saudi Arabia?',
      'How do tirzepatide and semaglutide compete in the Saudi obesity market?',
      'How does BioNixus differ from IQVIA or a syndicated obesity report?',
      'Where is BioNixus based?',
      'What does obesity market research in Saudi Arabia cost?',
    ]);
    expect(page?.faqs[2]?.answer).toMatch(/Coverage is inconsistent: NUPCO public pathways, CHI private cover varies, and much is out of pocket/);
    expect(page?.faqs[5]?.answer).toMatch(/Regional leadership offices/);
    expect(page?.faqs[5]?.answer).toMatch(/Field offices/);
    expect(page?.faqs[5]?.answer).toMatch(/in the process of opening a São Paulo office by the end of 2026/);
    const schema = buildFAQSchema(page?.faqs ?? [], { pageUrl: page?.canonical }) as {
      mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }>;
    };
    expect(schema.mainEntity.map((item) => item.name)).toEqual(questions);
    expect(schema.mainEntity.map((item) => item.acceptedAnswer.text)).toEqual(page?.faqs.map((item) => item.answer));
  });

  it('includes the query once in the Service description and links the required chips', () => {
    const service = {
      ...buildServiceSchema(),
      description: page?.serviceDescription,
    } as { description: string };
    const matches = service.description.match(/who does obesity market research in Saudi Arabia/g) ?? [];
    expect(matches).toHaveLength(1);
    const hrefs = page?.relatedLinks.map((link) => link.to) ?? [];
    for (const href of [
      '/gcc-obesity-market',
      '/patient-journey-research-gcc#obesity',
      '/insights/top-market-research-companies-saudi-arabia-2026',
      '/physician-survey-saudi-arabia',
      '/healthcare-market-research/saudi-arabia',
      '/uae-obesity-market',
      '/kuwait-obesity-market',
      '/egypt-obesity-market',
    ]) {
      expect(hrefs).toContain(href);
    }
    expect(gcc?.relatedLinks.some((link) => link.to === '/saudi-arabia-obesity-market' && link.label === QUERY)).toBe(
      true,
    );
    const ranking = readFileSync(
      join(process.cwd(), 'src/pages/TopMarketResearchCompaniesSaudiArabia2026.tsx'),
      'utf8',
    );
    expect(ranking).toContain('to="/saudi-arabia-obesity-market"');
    expect(ranking).toContain('Who does obesity market research in Saudi Arabia?');
  });
});
