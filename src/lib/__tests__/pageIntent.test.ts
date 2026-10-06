import { describe, expect, it } from 'vitest';
import { DIRECTORY_ENTITIES, parseDirectoryPath } from '@/data/companyDirectories';
import { DIRECTORY_ENTITY_PREFIXES, isBuyerIntentPath, isDirectoryPath } from '@/lib/pageIntent';

describe('pageIntent', () => {
  it('keeps the directory prefix list in sync with the registry', () => {
    expect([...DIRECTORY_ENTITY_PREFIXES].sort()).toEqual(Object.keys(DIRECTORY_ENTITIES).sort());
  });

  it('classifies every registry directory path as a directory', () => {
    for (const path of ['/banks-qatar', '/fmcg-companies-tunisia', '/pharmaceutical-companies-uae', '/top-pharmacies-saudi-arabia']) {
      expect(parseDirectoryPath(path)).not.toBeNull();
      expect(isDirectoryPath(path)).toBe(true);
      expect(isBuyerIntentPath(path)).toBe(false);
    }
    expect(isDirectoryPath('/pharmaceutical-companies')).toBe(true);
  });

  it('marks supplier-evaluation pages as buyer intent', () => {
    for (const path of [
      '/healthcare-market-research',
      '/healthcare-market-research/country/saudi-arabia',
      '/services/market-access',
      '/pricing',
      '/heor-consulting',
      '/iqvia-alternative',
      '/nielsen-alternative',
      '/pharmaceutical-market-research',
      '/saudi-payer-market-access-research',
      '/insights/top-healthcare-market-research-companies-usa-2026',
      '/ar/healthcare-market-research/',
    ]) {
      expect(isBuyerIntentPath(path), path).toBe(true);
    }
  });

  it('leaves blogs, reports and the homepage out of buyer intent', () => {
    for (const path of ['/', '/blog/nupco-saudi-arabia-tendering-guide', '/gcc-medical-devices-market-report', '/case-studies']) {
      expect(isBuyerIntentPath(path), path).toBe(false);
    }
  });
});
