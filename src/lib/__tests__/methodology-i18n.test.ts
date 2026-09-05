import { describe, expect, it } from 'vitest';
import type { Language } from '@/lib/i18n';
import { getTranslations } from '@/lib/getTranslations';
import { METHODOLOGY_SEO_AND_HERO } from '@/pages/methodology/methodologySeoHero';
import { METHODOLOGY_PT_FAQ } from '@/pages/methodology/MethodologyLongFormPt';
import { METHODOLOGY_RU_FAQ } from '@/pages/methodology/MethodologyLongFormRu';
import { METHODOLOGY_DE_COPY, METHODOLOGY_DE_FAQ } from '@/pages/methodology/MethodologyLongFormDe';
import { METHODOLOGY_FR_COPY, METHODOLOGY_FR_FAQ } from '@/pages/methodology/MethodologyLongFormFr';
import { METHODOLOGY_ES_COPY, METHODOLOGY_ES_FAQ } from '@/pages/methodology/MethodologyLongFormEs';
import { METHODOLOGY_ZH_COPY, METHODOLOGY_ZH_FAQ } from '@/pages/methodology/MethodologyLongFormZh';
import { METHODOLOGY_AR_COPY, METHODOLOGY_AR_FAQ } from '@/pages/methodology/MethodologyLongFormAr';

const LOCALES: Exclude<Language, 'en'>[] = ['de', 'fr', 'es', 'pt', 'ru', 'zh', 'ar'];

describe('methodology chrome is localized', () => {
  it('does not keep English hero chrome on other locales', () => {
    const en = METHODOLOGY_SEO_AND_HERO.en;
    for (const lang of LOCALES) {
      const copy = METHODOLOGY_SEO_AND_HERO[lang];
      expect(copy.heroEyebrow, `${lang}.heroEyebrow`).not.toBe(en.heroEyebrow);
      expect(copy.twoTheatres, `${lang}.twoTheatres`).not.toBe(en.twoTheatres);
      expect(copy.healthcareProgrammes, `${lang}.healthcareProgrammes`).not.toBe(en.healthcareProgrammes);
      expect(copy.emailCta, `${lang}.emailCta`).not.toBe(en.emailCta);
      expect(copy.marketResearchHubLabel, `${lang}.marketResearchHubLabel`).not.toBe(en.marketResearchHubLabel);
    }
  });

  it('uses the six-section methodology layout in German, French, Spanish, Chinese, and Arabic', () => {
    const copies = [
      METHODOLOGY_DE_COPY,
      METHODOLOGY_FR_COPY,
      METHODOLOGY_ES_COPY,
      METHODOLOGY_ZH_COPY,
      METHODOLOGY_AR_COPY,
    ];
    for (const copy of copies) {
      expect(copy.theatre.h2).not.toBe('Healthcare and consumer share the method, not the respondent');
      expect(copy.theatre.eyebrow).not.toBe('One spine');
      expect(copy.design.h2).not.toBe('Research design principles');
      expect(copy.faqTitle).not.toBe('Frequently asked questions');
      expect(copy.sampling.h2).not.toBe('Sampling frameworks and sample-size governance');
      expect(copy.theatre.rows).toHaveLength(4);
      expect(copy.sampling.panel).toHaveLength(4);
    }
  });

  it('translates methodology FAQs for every locale', () => {
    const enQ = 'Does BioNixus use the same methodology for healthcare and consumer research?';
    expect(METHODOLOGY_DE_FAQ[0].question).not.toBe(enQ);
    expect(METHODOLOGY_FR_FAQ[0].question).not.toBe(enQ);
    expect(METHODOLOGY_ES_FAQ[0].question).not.toBe(enQ);
    expect(METHODOLOGY_PT_FAQ[0].question).not.toBe(enQ);
    expect(METHODOLOGY_RU_FAQ[0].question).not.toBe(enQ);
    expect(METHODOLOGY_ZH_FAQ[0].question).not.toBe(enQ);
    expect(METHODOLOGY_AR_FAQ[0].question).not.toBe(enQ);
    for (const faq of [
      METHODOLOGY_DE_FAQ,
      METHODOLOGY_FR_FAQ,
      METHODOLOGY_ES_FAQ,
      METHODOLOGY_PT_FAQ,
      METHODOLOGY_RU_FAQ,
      METHODOLOGY_ZH_FAQ,
      METHODOLOGY_AR_FAQ,
    ]) {
      expect(faq).toHaveLength(6);
    }
  });

  it('translates Portuguese contact validation and locale prompt', () => {
    const en = getTranslations('en');
    const pt = getTranslations('pt');
    expect(pt.localePrompt.yes).toBe('Sim');
    expect(pt.localePrompt.no).toBe('Não');
    expect(pt.contact.validation.firstName).not.toBe(en.contact.validation.firstName);
    expect(pt.contact.countryLabel).not.toBe(en.contact.countryLabel);
    expect(pt.insights.items.length).toBeGreaterThan(0);
    expect(pt.insights.items[0].title).not.toBe(en.insights.items[0].title);
  });
});
