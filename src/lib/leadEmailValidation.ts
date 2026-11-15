/**
 * Email rule shared by the browser forms and `/api/highlevel-lead`, so an address the
 * server would reject with a 400 is caught before anything is sent.
 * Imported by edge server code: keep it free of browser and Node APIs.
 */

const LEAD_EMAIL_RE =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;

export const LEAD_EMAIL_CHECK_ERROR = 'Please check your email address and try again.';
export const LEAD_EMAIL_REQUIRED_ERROR = 'A valid email is required';

/** Local part at most 64 characters, whole address at most 254, plus a practical syntax check. */
export function isValidLeadEmail(raw: string): boolean {
  const email = raw.trim();
  if (!email) return false;
  const at = email.lastIndexOf('@');
  const local = at === -1 ? email : email.slice(0, at);
  return local.length <= 64 && email.length <= 254 && LEAD_EMAIL_RE.test(email);
}

/** Server-facing message for an email that fails the rule, or null when it passes. */
export function leadEmailProblem(raw: string): string | null {
  if (!raw.trim()) return LEAD_EMAIL_REQUIRED_ERROR;
  return isValidLeadEmail(raw) ? null : LEAD_EMAIL_CHECK_ERROR;
}
