/**
 * Fetch raw HTML for a URL, retrying once on network error (not on HTTP
 * error status — a 404/500/301 is a valid, meaningful result to record).
 * We deliberately use plain fetch() rather than a browser — the suite tests
 * the SERVER-RENDERED string, so JS must NOT execute.
 */
export async function fetchPage(url, { timeoutMs = 15000 } = {}) {
  const attempt = async () => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(url, {
        redirect: 'manual',
        signal: controller.signal,
        headers: { 'user-agent': 'BioNixus-SEO-Regression-Suite/1.0 (+internal)' },
      });
      const status = res.status;
      const isRedirect = status >= 300 && status < 400;
      const location = isRedirect ? res.headers.get('location') : null;
      const contentType = res.headers.get('content-type') || '';
      const html = isRedirect ? '' : await res.text();
      return { url, status, location, contentType, html, error: null };
    } finally {
      clearTimeout(timer);
    }
  };

  try {
    return await attempt();
  } catch (firstError) {
    try {
      return await attempt();
    } catch (secondError) {
      return {
        url,
        status: 0,
        location: null,
        contentType: '',
        html: '',
        error: String(secondError?.message || secondError || firstError),
      };
    }
  }
}
