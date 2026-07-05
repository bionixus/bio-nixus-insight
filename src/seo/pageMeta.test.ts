import { describe, it, expect } from 'vitest';
import {
  buildCountryServiceTitle,
  buildGuideTitle,
  buildMetaDescription,
  validatePageMeta,
  TITLE_MAX,
  META_MIN,
  META_MAX,
} from './pageMeta';

describe('buildCountryServiceTitle', () => {
  it('fits within TITLE_MAX for a normal keyword + market', () => {
    const title = buildCountryServiceTitle({ primaryKeyword: 'Pharmaceutical Market Research', market: 'Kuwait' });
    expect(title).toBe('Pharmaceutical Market Research in Kuwait | BioNixus');
    expect(title.length).toBeLessThanOrEqual(TITLE_MAX);
  });

  it('truncates the keyword, never the market name, when too long', () => {
    const title = buildCountryServiceTitle({
      primaryKeyword: 'Pharmaceutical Market Research',
      market: 'United Arab Emirates',
    });
    expect(title).toContain('United Arab Emirates | BioNixus');
    expect(title).not.toMatch(/United Arab(?! Emirates)/);
    expect(title.length).toBeLessThanOrEqual(TITLE_MAX);
  });
});

describe('buildGuideTitle', () => {
  it('fits within TITLE_MAX and never truncates the year', () => {
    const title = buildGuideTitle({ benefitHeadline: 'Cut GCC Market Access Timelines with Local Fieldwork', year: 2026 });
    expect(title).toContain('(2026) | BioNixus');
    expect(title.length).toBeLessThanOrEqual(TITLE_MAX);
  });
});

describe('buildMetaDescription', () => {
  it('lands within the META_MIN-META_MAX band for a normal proof point + outcome', () => {
    const desc = buildMetaDescription({
      proofPoint: '93 clicks and 6,190 impressions across GCC pharma buyers',
      outcome: 'Faster, decision-ready market entry evidence for Kuwait',
    });
    expect(desc.length).toBeGreaterThanOrEqual(META_MIN);
    expect(desc.length).toBeLessThanOrEqual(META_MAX);
  });

  it('pads short copy up to META_MIN without exceeding META_MAX', () => {
    const desc = buildMetaDescription({ proofPoint: 'Short.', outcome: 'Short outcome.' });
    expect(desc.length).toBeGreaterThanOrEqual(META_MIN);
    expect(desc.length).toBeLessThanOrEqual(META_MAX);
  });

  it('drops the CTA before hard-truncating when proof point + outcome alone are already long', () => {
    const desc = buildMetaDescription({
      proofPoint: 'A'.repeat(100),
      outcome: 'B'.repeat(100),
    });
    expect(desc.length).toBeLessThanOrEqual(META_MAX);
  });
});

describe('validatePageMeta', () => {
  it('flags an over-length title and under-length description', () => {
    const result = validatePageMeta('A'.repeat(100), 'short');
    expect(result.titleOk).toBe(false);
    expect(result.descriptionOk).toBe(false);
  });

  it('passes a well-formed title/description pair', () => {
    const title = buildCountryServiceTitle({ primaryKeyword: 'Healthcare Market Research', market: 'Kuwait' });
    const description = buildMetaDescription({
      proofPoint: '93 clicks and 6,190 impressions across GCC pharma buyers',
      outcome: 'Faster, decision-ready market entry evidence for Kuwait',
    });
    const result = validatePageMeta(title, description);
    expect(result.titleOk).toBe(true);
    expect(result.descriptionOk).toBe(true);
  });
});
