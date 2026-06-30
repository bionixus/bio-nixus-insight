const STORAGE_PREFIX = 'bionixus_whitepaper_access_';

export function hasWhitePaperAccess(reportSlug: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return window.localStorage.getItem(`${STORAGE_PREFIX}${reportSlug}`) === '1';
  } catch {
    return false;
  }
}

export function grantWhitePaperAccess(reportSlug: string): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(`${STORAGE_PREFIX}${reportSlug}`, '1');
  } catch {
    /* ignore quota / private mode */
  }
}
