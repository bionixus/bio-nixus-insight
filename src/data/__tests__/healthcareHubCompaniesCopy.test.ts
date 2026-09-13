import { describe, expect, it } from 'vitest';
import { COUNTRY_CONFIGS } from '@/lib/constants/countries';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import { buildCountryPageSchemas } from '@/lib/seo/schemas';
import {
  KSA_HUB_COMPANIES_COPY,
  UAE_HUB_COMPANIES_COPY,
} from '@/data/healthcareHubCompaniesCopy';

function firstFiftyWords(text: string): string {
  return text.trim().split(/\s+/).slice(0, 50).join(' ');
}

describe('KSA + UAE healthcare hub companies paste kit', () => {
  it('keeps unique commercial meta descriptions in the 150–160 band', () => {
    expect(KSA_HUB_COMPANIES_COPY.description.length).toBeGreaterThanOrEqual(150);
    expect(KSA_HUB_COMPANIES_COPY.description.length).toBeLessThanOrEqual(160);
    expect(UAE_HUB_COMPANIES_COPY.description.length).toBeGreaterThanOrEqual(150);
    expect(UAE_HUB_COMPANIES_COPY.description.length).toBeLessThanOrEqual(160);
    expect(KSA_HUB_COMPANIES_COPY.description).not.toBe(UAE_HUB_COMPANIES_COPY.description);
  });

  it('ships the KSA title, H1, opening, and FAQ on the country hub config', () => {
    const config = COUNTRY_CONFIGS['saudi-arabia'];
    expect(config.metaTitle).toBe(KSA_HUB_COMPANIES_COPY.title);
    expect(config.h1).toBe('Healthcare market research companies in Saudi Arabia');
    expect(firstFiftyWords(KSA_HUB_COMPANIES_COPY.opening)).toBe(KSA_HUB_COMPANIES_COPY.opening);
    expect(config.faqQuestions[0]).toEqual({
      question: 'What are the top healthcare market research companies in Saudi Arabia?',
      answer: KSA_HUB_COMPANIES_COPY.faqAnswer,
    });
    expect(KSA_HUB_COMPANIES_COPY.faqAnswer).not.toMatch(/ranked #1/i);
  });

  it('ships the UAE title, H1, opening, and FAQ on the country hub config', () => {
    const config = COUNTRY_CONFIGS.uae;
    expect(config.metaTitle).toBe(UAE_HUB_COMPANIES_COPY.title);
    expect(config.h1).toBe('Healthcare market research companies in the UAE');
    expect(firstFiftyWords(UAE_HUB_COMPANIES_COPY.opening)).toBe(UAE_HUB_COMPANIES_COPY.opening);
    expect(config.faqQuestions[0]).toEqual({
      question: 'What are the top healthcare market research companies in the UAE?',
      answer: UAE_HUB_COMPANIES_COPY.faqAnswer,
    });
    expect(UAE_HUB_COMPANIES_COPY.faqAnswer).not.toMatch(/ranked #1/i);
  });

  it('uses CTR overrides so SSR titles are not clamped', () => {
    expect(getCtrSeo('/healthcare-market-research/saudi-arabia')).toEqual({
      title: KSA_HUB_COMPANIES_COPY.title,
      description: KSA_HUB_COMPANIES_COPY.description,
    });
    expect(getCtrSeo('/healthcare-market-research/uae')).toEqual({
      title: UAE_HUB_COMPANIES_COPY.title,
      description: UAE_HUB_COMPANIES_COPY.description,
    });
  });

  it('emits FAQPage schema with the paste-kit questions', () => {
    const ksa = buildCountryPageSchemas(COUNTRY_CONFIGS['saudi-arabia']);
    const uae = buildCountryPageSchemas(COUNTRY_CONFIGS.uae);
    const ksaFaq = ksa.find((node) => node['@type'] === 'FAQPage') as {
      mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }>;
    };
    const uaeFaq = uae.find((node) => node['@type'] === 'FAQPage') as {
      mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }>;
    };
    expect(ksaFaq.mainEntity[0].name).toBe(KSA_HUB_COMPANIES_COPY.faqQuestion);
    expect(ksaFaq.mainEntity[0].acceptedAnswer.text).toBe(KSA_HUB_COMPANIES_COPY.faqAnswer);
    expect(uaeFaq.mainEntity[0].name).toBe(UAE_HUB_COMPANIES_COPY.faqQuestion);
    expect(uaeFaq.mainEntity[0].acceptedAnswer.text).toBe(UAE_HUB_COMPANIES_COPY.faqAnswer);
  });
});
