import { describe, expect, it } from 'vitest';
import { buildDirectoryCsv, directoryCsvFileName, escapeCsvCell } from '@/lib/directoryListCsv';

describe('directory list CSV', () => {
  it('quotes commas, quotes and line breaks', () => {
    expect(escapeCsvCell('EVA Pharma')).toBe('EVA Pharma');
    expect(escapeCsvCell('Generics, OTC')).toBe('"Generics, OTC"');
    expect(escapeCsvCell('The "largest" maker')).toBe('"The ""largest"" maker"');
    expect(escapeCsvCell('line one\nline two')).toBe('"line one\nline two"');
  });

  it('neutralises cells Excel would run as formulas', () => {
    expect(escapeCsvCell('=HYPERLINK("x")')).toBe(`"'=HYPERLINK(""x"")"`);
    expect(escapeCsvCell('+20 2 1234')).toBe("'+20 2 1234");
    expect(escapeCsvCell('-5% share')).toBe("'-5% share");
    expect(escapeCsvCell('@handle')).toBe("'@handle");
  });

  it('starts with a UTF-8 BOM, cites the source page and numbers the rows', () => {
    const csv = buildDirectoryCsv({
      title: 'Pharmaceutical companies in Egypt (BioNixus directory)',
      sourceUrl: 'https://www.bionixus.com/pharmaceutical-companies-egypt',
      asOf: 'February 2026',
      headers: ['Company', 'HQ'],
      rows: [
        ['EIPICO', 'Egypt'],
        ['Pfizer Egypt', 'Cairo, Egypt'],
      ],
    });
    expect(csv.charCodeAt(0)).toBe(0xfeff);
    const lines = csv.slice(1).split('\r\n');
    expect(lines[0]).toBe('Pharmaceutical companies in Egypt (BioNixus directory)');
    expect(lines[1]).toBe(
      'Source: https://www.bionixus.com/pharmaceutical-companies-egypt (last reviewed February 2026)',
    );
    expect(lines[4]).toBe('#,Company,HQ');
    expect(lines[5]).toBe('1,EIPICO,Egypt');
    expect(lines[6]).toBe('2,Pfizer Egypt,"Cairo, Egypt"');
    expect(csv.endsWith('\r\n')).toBe(true);
  });

  it('names the file after the page path', () => {
    expect(directoryCsvFileName('/pharmaceutical-companies-egypt')).toBe('bionixus-pharmaceutical-companies-egypt.csv');
    expect(directoryCsvFileName('/fmcg-companies-pakistan/')).toBe('bionixus-fmcg-companies-pakistan.csv');
  });
});
