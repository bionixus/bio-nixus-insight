import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { WESTERN_AUTHORS } from '@/data/editorialAuthors';

const ARMELA_AUTHOR_ID = '4e924019-dd92-48cf-899b-3bd63c266dd3';

describe('GLP-1 physician survey Sanity publish script', () => {
  it('pins Armela Belba to the Western roster id and does not take another author', () => {
    const armela = WESTERN_AUTHORS.find((author) => author.name === 'Armela Belba');
    expect(armela).toMatchObject({
      id: ARMELA_AUTHOR_ID,
      name: 'Armela Belba',
      jobTitle: 'Global Research Manager',
    });

    const source = readFileSync(
      join(process.cwd(), 'scripts/publish-glp1-physician-survey-saudi-arabia.mjs'),
      'utf8',
    );
    expect(source).toContain(`const ARMELA_AUTHOR_ID = '${ARMELA_AUTHOR_ID}'`);
    expect(source).toContain("const ARMELA_NAME = 'Armela Belba'");
    expect(source).toContain('Do not fall back to another author');
    expect(source).not.toContain('author[0]');
  });
});
