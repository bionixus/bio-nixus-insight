import { describe, expect, it } from 'vitest';
import { BUSINESS_EMAIL_REQUIRED_MESSAGE } from '@/lib/freeMailDomains';
import {
  buildDownloadNotifyEmail,
  escapeNotifyHtml,
  validateDownloadNotifyPayload,
} from '@/lib/notifyDownloadLead';

describe('validateDownloadNotifyPayload', () => {
  const valid = {
    workEmail: 'lead@acme-pharma.com',
    company: 'Acme',
    reportName: 'GCC sample',
    formVariant: 'gated_sample',
  };

  it('accepts a business-email payload', () => {
    const result = validateDownloadNotifyPayload(valid);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.workEmail).toBe('lead@acme-pharma.com');
      expect(result.data.requestType).toBe('Gated Asset Download');
    }
  });

  it('rejects free/personal email', () => {
    const result = validateDownloadNotifyPayload({ ...valid, workEmail: 'lead@gmail.com' });
    expect(result).toEqual({ ok: false, error: BUSINESS_EMAIL_REQUIRED_MESSAGE });
  });

  it('rejects missing report metadata', () => {
    expect(validateDownloadNotifyPayload({ ...valid, reportName: '' }).ok).toBe(false);
    expect(validateDownloadNotifyPayload({ ...valid, formVariant: '' }).ok).toBe(false);
  });
});

describe('buildDownloadNotifyEmail', () => {
  it('includes the report and work email and escapes HTML', () => {
    const { subject, html } = buildDownloadNotifyEmail({
      workEmail: 'lead@acme-pharma.com',
      company: 'Acme <Inc>',
      reportName: 'GCC sample',
      formVariant: 'gated_sample',
    });
    expect(subject).toContain('GCC sample');
    expect(subject).toContain('Acme <Inc>');
    expect(html).toContain('lead@acme-pharma.com');
    expect(html).toContain('Acme &lt;Inc&gt;');
    expect(html).not.toContain('Acme <Inc>');
  });
});

describe('escapeNotifyHtml', () => {
  it('escapes markup characters', () => {
    expect(escapeNotifyHtml('<script>"x"')).toBe('&lt;script&gt;&quot;x&quot;');
  });
});
