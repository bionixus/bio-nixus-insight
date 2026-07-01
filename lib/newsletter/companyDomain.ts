import { FREE_EMAIL_DOMAINS } from './freeEmailDomains'

/**
 * Derive company grouping key from work email.
 * Free-mail addresses use full email so each person is independent.
 */
export function getCompanyDomain(email: string): string {
  const normalized = email.trim().toLowerCase()
  const at = normalized.lastIndexOf('@')
  if (at < 1) return normalized

  const domain = normalized.slice(at + 1)
  if (FREE_EMAIL_DOMAINS.has(domain)) {
    return normalized
  }
  return domain
}
