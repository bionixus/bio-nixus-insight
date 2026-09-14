import { describe, expect, it } from 'vitest';
import {
  BUSINESS_EMAIL_REQUIRED_MESSAGE,
  getWorkEmailValidationError,
  isFreeMailDomain,
} from '@/lib/freeMailDomains';

describe('isFreeMailDomain', () => {
  it('rejects common consumer domains and country variants', () => {
    const blocked = [
      'user@gmail.com',
      'user@googlemail.com',
      'user@yahoo.co.uk',
      'user@hotmail.co.uk',
      'user@me.com',
      'user@proton.me',
      'user@outlook.com',
      'user@icloud.com',
      'User@Yahoo.COM',
    ];
    for (const email of blocked) {
      expect(isFreeMailDomain(email), email).toBe(true);
    }
  });

  it('allows business domains', () => {
    expect(isFreeMailDomain('name@bionixus.com')).toBe(false);
    expect(isFreeMailDomain('name@novartis.com')).toBe(false);
    expect(isFreeMailDomain('name@moh.gov.sa')).toBe(false);
  });

  it('does not treat missing @ as free mail', () => {
    expect(isFreeMailDomain('not-an-email')).toBe(false);
  });
});

describe('getWorkEmailValidationError', () => {
  it('hard-blocks free mail with a business-email message', () => {
    expect(getWorkEmailValidationError('name@gmail.com')).toBe(BUSINESS_EMAIL_REQUIRED_MESSAGE);
    expect(getWorkEmailValidationError('name@yahoo.co.uk')).toBe(BUSINESS_EMAIL_REQUIRED_MESSAGE);
  });

  it('rejects empty and malformed addresses', () => {
    expect(getWorkEmailValidationError('')).toBe('Work email is required');
    expect(getWorkEmailValidationError('not-an-email')).toBe('Please enter a valid email address');
  });

  it('accepts a company email', () => {
    expect(getWorkEmailValidationError('lead@acme-pharma.com')).toBeUndefined();
  });

  it('uses custom free-mail copy when provided', () => {
    expect(
      getWorkEmailValidationError('name@gmail.com', { freeMail: 'Company email only' }),
    ).toBe('Company email only');
  });
});
