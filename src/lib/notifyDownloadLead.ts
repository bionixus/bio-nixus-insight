import { getWorkEmailValidationError } from './freeMailDomains';

/** Reuses /api/subscribe so we do not add a 13th Vercel serverless function. */
export const DOWNLOAD_NOTIFY_ENDPOINT = '/api/subscribe';
export const DOWNLOAD_NOTIFY_INTENT = 'gated-download-notify';

export type DownloadNotifyPayload = {
  workEmail: string;
  company?: string;
  country?: string;
  reportName: string;
  formVariant: string;
  requestType?: string;
  sourcePage?: string;
  sourceUrl?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
};

export type DownloadNotifyValidation =
  | { ok: true; data: DownloadNotifyPayload }
  | { ok: false; error: string };

function asTrimmedString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

/** Shared client/server validation for gated-download notify payloads. */
export function validateDownloadNotifyPayload(body: unknown): DownloadNotifyValidation {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Invalid request body' };
  }
  const raw = body as Record<string, unknown>;
  const workEmail = asTrimmedString(raw.workEmail);
  const reportName = asTrimmedString(raw.reportName);
  const formVariant = asTrimmedString(raw.formVariant);

  const emailError = getWorkEmailValidationError(workEmail);
  if (emailError) return { ok: false, error: emailError };
  if (!reportName) return { ok: false, error: 'Report name is required' };
  if (!formVariant) return { ok: false, error: 'Form variant is required' };

  return {
    ok: true,
    data: {
      workEmail,
      company: asTrimmedString(raw.company) || undefined,
      country: asTrimmedString(raw.country) || undefined,
      reportName,
      formVariant,
      requestType: asTrimmedString(raw.requestType) || 'Gated Asset Download',
      sourcePage: asTrimmedString(raw.sourcePage) || undefined,
      sourceUrl: asTrimmedString(raw.sourceUrl) || undefined,
      utmSource: asTrimmedString(raw.utmSource) || undefined,
      utmMedium: asTrimmedString(raw.utmMedium) || undefined,
      utmCampaign: asTrimmedString(raw.utmCampaign) || undefined,
      utmContent: asTrimmedString(raw.utmContent) || undefined,
      utmTerm: asTrimmedString(raw.utmTerm) || undefined,
    },
  };
}

export function escapeNotifyHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function buildDownloadNotifyEmail(data: DownloadNotifyPayload): { subject: string; html: string } {
  const company = data.company || 'not provided';
  const subject = `Report download request — ${data.reportName} (${company})`;
  const rows: Array<[string, string]> = [
    ['Work email', data.workEmail],
    ['Company', company],
    ['Country', data.country || 'not provided'],
    ['Report', data.reportName],
    ['Request type', data.requestType || 'Gated Asset Download'],
    ['Form', data.formVariant],
    ['Source page', data.sourcePage || ''],
    ['Source URL', data.sourceUrl || ''],
    ['utm_source', data.utmSource || ''],
    ['utm_medium', data.utmMedium || ''],
    ['utm_campaign', data.utmCampaign || ''],
    ['utm_content', data.utmContent || ''],
    ['utm_term', data.utmTerm || ''],
  ];
  const html = `
    <p>A website download form was submitted. This notice was sent instead of Formspree.</p>
    <table cellpadding="6" cellspacing="0" border="0">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td><strong>${escapeNotifyHtml(label)}</strong></td><td>${escapeNotifyHtml(value)}</td></tr>`,
        )
        .join('')}
    </table>
  `;
  return { subject, html };
}

/**
 * Notify admin of a gated download. Returns whether Resend accepted the send.
 * Callers should still complete the client download UX if this fails.
 */
export async function notifyDownloadLead(payload: DownloadNotifyPayload): Promise<{ notified: boolean }> {
  try {
    const res = await fetch(DOWNLOAD_NOTIFY_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ intent: DOWNLOAD_NOTIFY_INTENT, ...payload }),
    });
    return { notified: res.ok };
  } catch {
    return { notified: false };
  }
}
