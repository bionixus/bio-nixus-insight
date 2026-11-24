import { describe, expect, it } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@/entry-server';
import { getReportSafe } from '@/data/healthcareReportData';
import { SAUDI_DEVICES_CONSUMER_SEGMENT_PAGES } from '@/data/segmentMarkets/saudiDevicesConsumer';
import { MENTAL_HEALTH_SAUDI_ARTICLE } from '@/data/blog-mental-health-market-research-saudi-arabia';
import { KSA_AI_SEARCH_PAGE_LIST, KSA_AI_SEARCH_PAGES, KSA_AI_SEARCH_REVIEWED_ISO } from '@/data/ksaAiSearchRefresh';
import { getCtrSeo } from '@/data/ctr-seo-overrides';

function collectStrings(value: unknown, out: string[] = []): string[] {
  if (typeof value === 'string') out.push(value);
  else if (Array.isArray(value)) value.forEach((item) => collectStrings(item, out));
  else if (value && typeof value === 'object') {
    Object.values(value).forEach((item) => collectStrings(item, out));
  }
  return out;
}

const BANNED = /IQVIA|Kantar|Ipsos|Nielsen|Euromonitor|Mordor|—|\b(?:best|leading|independent)\b|#1|top-ranked|Dawaa/i;

describe('KSA AI-search refresh', () => {
  it('opens the diabetes report on the research question and dates it', () => {
    const report = getReportSafe('saudi-arabia-diabetes-market-report');
    expect(report?.heroLead?.startsWith(KSA_AI_SEARCH_PAGES.diabetes.opening)).toBe(true);
    expect(report?.faqs[0]?.question).toBe(KSA_AI_SEARCH_PAGES.diabetes.firstFaqQuestion);
    expect(report?.faqs.length).toBeGreaterThanOrEqual(5);
    expect(report?.faqs.length).toBeLessThanOrEqual(7);
    expect(report?.modifiedDate).toBe(KSA_AI_SEARCH_REVIEWED_ISO);
    expect(report?.heroLead).toMatch(/21\.4|physicians/);
    expect(report?.stat1Value).toBe('21.4%');
    expect(`${report?.heroLead} ${report?.summaryPara1} ${report?.faqs.map((item) => item.answer).join(' ')}`).not.toMatch(BANNED);
    const ctr = getCtrSeo(KSA_AI_SEARCH_PAGES.diabetes.path);
    expect(ctr?.title.length).toBeLessThanOrEqual(60);
    expect(ctr?.description.length).toBeLessThanOrEqual(155);
    expect(ctr?.description.startsWith('BioNixus runs diabetes market research in Saudi Arabia')).toBe(true);
  });

  it('keeps the obesity page answer-first, sourced, and free of competitor names', () => {
    const page = SAUDI_DEVICES_CONSUMER_SEGMENT_PAGES.find((item) => item.slug === 'saudi-arabia-obesity-market');
    expect(page?.intro[0]?.startsWith(KSA_AI_SEARCH_PAGES.obesity.opening)).toBe(true);
    expect(page?.faqs[0]?.question).toBe(KSA_AI_SEARCH_PAGES.obesity.firstFaqQuestion);
    expect(page?.faqs.some((item) => item.question === 'Who does obesity market research in Saudi Arabia?')).toBe(true);
    expect(page?.lastUpdated).toBe(KSA_AI_SEARCH_REVIEWED_ISO);
    expect(page?.faqs.length).toBeGreaterThanOrEqual(5);
    expect(page?.faqs.length).toBeLessThanOrEqual(7);
    expect(JSON.stringify(page)).not.toMatch(BANNED);
    expect(page?.description.length).toBeLessThanOrEqual(155);
  });

  it('opens the mental health article on the research question', () => {
    const post = MENTAL_HEALTH_SAUDI_ARTICLE.post;
    const summary = typeof post.executiveSummary === 'string' ? post.executiveSummary : '';
    expect(summary.startsWith(`<p>${KSA_AI_SEARCH_PAGES.mentalHealth.opening}`)).toBe(true);
    expect(summary).toContain('Last reviewed: 24 November 2026.');
    expect(post.faq?.[0]?.question).toBe(KSA_AI_SEARCH_PAGES.mentalHealth.firstFaqQuestion);
    expect(post.faq?.length).toBeGreaterThanOrEqual(5);
    expect(post.faq?.length).toBeLessThanOrEqual(7);
    expect(post.updatedAtIso?.startsWith(KSA_AI_SEARCH_REVIEWED_ISO)).toBe(true);
    const body = typeof post.body === 'string' ? post.body : '';
    expect(`${summary} ${body}`).not.toMatch(BANNED);
    const ctr = getCtrSeo(KSA_AI_SEARCH_PAGES.mentalHealth.path);
    expect(ctr?.description.length).toBeLessThanOrEqual(155);
    expect(ctr?.description.startsWith('BioNixus runs mental health market research in Saudi Arabia')).toBe(true);
    expect(ctr?.description.length).toBeGreaterThanOrEqual(150);
    expect(ctr?.title.length).toBeLessThanOrEqual(60);
  });

  it('does not leave uninterpolated KSA tokens in copy or rendered HTML', async () => {
    const diabetes = getReportSafe('saudi-arabia-diabetes-market-report');
    const obesity = SAUDI_DEVICES_CONSUMER_SEGMENT_PAGES.find((item) => item.slug === 'saudi-arabia-obesity-market');
    const copy = collectStrings({
      diabetes,
      obesity,
      mental: MENTAL_HEALTH_SAUDI_ARTICLE,
      pages: KSA_AI_SEARCH_PAGE_LIST,
      ctr: KSA_AI_SEARCH_PAGE_LIST.map((page) => getCtrSeo(page.path)),
    }).join('\n');
    expect(copy).not.toContain('${KSA_');

    HelmetProvider.canUseDOM = false;
    for (const page of KSA_AI_SEARCH_PAGE_LIST) {
      const result = await render(page.path);
      const html = `${result.html}\n${result.helmetData?.title ?? ''}\n${result.helmetData?.meta ?? ''}\n${result.helmetData?.script ?? ''}`;
      expect(html, page.path).not.toContain('${KSA_');
    }
  });
});
