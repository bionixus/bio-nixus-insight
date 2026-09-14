/**
 * Consumer / personal mailbox providers.
 *
 * Exact domains cover one-off brands (me.com, proton.me). First-label matching
 * covers country variants (yahoo.co.uk, hotmail.fr) without listing every TLD.
 */

const FREE_MAIL_EXACT = new Set([
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'ymail.com',
  'rocketmail.com',
  'hotmail.com',
  'outlook.com',
  'live.com',
  'msn.com',
  'aol.com',
  'icloud.com',
  'me.com',
  'mac.com',
  'mail.com',
  'protonmail.com',
  'protonmail.ch',
  'proton.me',
  'pm.me',
  'gmx.com',
  'gmx.de',
  'gmx.net',
  'yandex.com',
  'yandex.ru',
  'mail.ru',
  'inbox.com',
  'hey.com',
  'tutanota.com',
  'tuta.io',
  'rediffmail.com',
  'qq.com',
  '163.com',
  '126.com',
  'naver.com',
  'daum.net',
  'web.de',
  'orange.fr',
  'wanadoo.fr',
  'libero.it',
  'btinternet.com',
  'virginmedia.com',
  'sky.com',
]);

/** Registrable labels that are always consumer mail, including country TLDs. */
const FREE_MAIL_LABELS = new Set([
  'gmail',
  'googlemail',
  'yahoo',
  'ymail',
  'rocketmail',
  'hotmail',
  'outlook',
  'live',
  'msn',
  'icloud',
  'aol',
  'protonmail',
  'gmx',
  'yandex',
]);

export const BUSINESS_EMAIL_REQUIRED_MESSAGE =
  'Please use a business/company email only. Personal addresses (Gmail, Yahoo, Outlook, and similar) are not accepted.';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** True when the email's domain is a common free/consumer mail provider. */
export function isFreeMailDomain(email: string): boolean {
  const at = email.lastIndexOf('@');
  if (at === -1) return false;
  const domain = email.slice(at + 1).trim().toLowerCase();
  if (!domain) return false;
  if (FREE_MAIL_EXACT.has(domain)) return true;
  const label = domain.split('.')[0];
  return FREE_MAIL_LABELS.has(label);
}

export function isValidEmailFormat(email: string): boolean {
  return EMAIL_RE.test(email.trim());
}

export type WorkEmailMessages = {
  required?: string;
  invalid?: string;
  freeMail?: string;
};

/** Hard-block helper: missing, malformed, or free/personal mail. */
export function getWorkEmailValidationError(
  email: string,
  messages?: WorkEmailMessages,
): string | undefined {
  const trimmed = email.trim();
  if (!trimmed) return messages?.required || 'Work email is required';
  if (!EMAIL_RE.test(trimmed)) return messages?.invalid || 'Please enter a valid email address';
  if (isFreeMailDomain(trimmed)) {
    return messages?.freeMail || BUSINESS_EMAIL_REQUIRED_MESSAGE;
  }
  return undefined;
}
