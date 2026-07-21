const FREE_MAIL_DOMAINS = new Set([
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'aol.com',
  'icloud.com',
  'live.com',
  'msn.com',
  'mail.com',
  'protonmail.com',
  'gmx.com',
  'yandex.com',
]);

/** True when the email's domain is a common free/consumer mail provider. */
export function isFreeMailDomain(email: string): boolean {
  const at = email.lastIndexOf('@');
  if (at === -1) return false;
  const domain = email.slice(at + 1).trim().toLowerCase();
  return FREE_MAIL_DOMAINS.has(domain);
}
