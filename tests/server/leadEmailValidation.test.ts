import { describe, expect, it, vi } from 'vitest';
import {
  LEAD_EMAIL_CHECK_ERROR,
  LEAD_EMAIL_REQUIRED_ERROR,
  isValidLeadEmail,
  leadEmailProblem,
} from '@/lib/leadEmailValidation';
import { processHighLevelLead } from '@/server/highlevelLead';

const local64 = `${'a'.repeat(64)}@example.com`;
const local65 = `${'a'.repeat(65)}@example.com`;
const exactly254 = `${'a'.repeat(64)}@${'b'.repeat(63)}.${'c'.repeat(63)}.${'d'.repeat(57)}.com`;
const exactly255 = `${'a'.repeat(64)}@${'b'.repeat(63)}.${'c'.repeat(63)}.${'d'.repeat(58)}.com`;

const VALID = [
  'jane.doe@pfizer.com',
  'Jane.Doe+rfq@novartis.co.uk',
  'first_last@sub.domain-name.org',
  local64,
  exactly254,
];

const INVALID = [
  local65,
  exactly255,
  'user@localhost',
  'not an email',
  'jane@pfizer',
  'jane..doe@pfizer.com',
  '.jane@pfizer.com',
  'jane@-pfizer.com',
  'jane@pfizer-.com',
  'jane@pfizer..com',
  'jane doe@pfizer.com',
  'jane@pfi zer.com',
  '@pfizer.com',
  'jane@',
];

describe('shared lead email rule', () => {
  it('fixes the boundary lengths', () => {
    expect(exactly254).toHaveLength(254);
    expect(exactly255).toHaveLength(255);
  });

  it.each(VALID)('accepts %s', (email) => {
    expect(isValidLeadEmail(email)).toBe(true);
    expect(leadEmailProblem(email)).toBeNull();
  });

  it.each(INVALID)('rejects %s', (email) => {
    expect(isValidLeadEmail(email)).toBe(false);
    expect(leadEmailProblem(email)).toBe(LEAD_EMAIL_CHECK_ERROR);
  });

  it('asks for an email when the field is empty', () => {
    expect(isValidLeadEmail('   ')).toBe(false);
    expect(leadEmailProblem('')).toBe(LEAD_EMAIL_REQUIRED_ERROR);
  });

  it('ignores surrounding whitespace', () => {
    expect(isValidLeadEmail('  jane.doe@pfizer.com  ')).toBe(true);
  });

  it('gives the same verdict as /api/highlevel-lead for every case', async () => {
    const fetchImpl = vi.fn(async () => new Response('{}', { status: 500 }));
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    const options = { env: { HIGHLEVEL_API_KEY: 'pit-test-token' }, fetchImpl, skipRateLimit: true };
    for (const email of [...VALID, ...INVALID]) {
      const result = await processHighLevelLead({ workEmail: email }, options);
      const rejectedEmail = result.status === 400 && result.body.error === LEAD_EMAIL_CHECK_ERROR;
      expect(rejectedEmail, email).toBe(!isValidLeadEmail(email));
    }
    error.mockRestore();
  });
});
