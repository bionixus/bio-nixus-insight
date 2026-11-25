/**
 * Google Consent Mode v2 defaults and the GTM container snippet.
 * The SPA template keeps the %VITE_GTM_ID% placeholder so Vite (and the SSR
 * server, if the placeholder survives the build) can fill the container id.
 * Static pages in public/conf/ are served as files, so they get the literal id.
 */

export const GTM_CONTAINER_FALLBACK_ID = 'GTM-NQ84B7ZH';
const MARKER = 'gtm-consent:start';

export function resolveGtmContainerId(env = process.env) {
  const fromEnv = typeof env.VITE_GTM_ID === 'string' ? env.VITE_GTM_ID.trim() : '';
  return fromEnv || GTM_CONTAINER_FALLBACK_ID;
}

/** Consent default (denied) must run before the GTM loader. */
export function gtmConsentHeadHtml(containerId) {
  return `<!-- ${MARKER} -->
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });
  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'url_passthrough', false);
  try {
    if (localStorage.getItem('bionixus-cookie-consent') === 'accepted') {
      gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted'
      });
    }
  } catch (e) {}
</script>
<script>
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
  j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${containerId}');
  window.__gtmLoaded = true;
</script>
<!-- gtm-consent:end -->`;
}

export function gtmNoscriptHtml(containerId) {
  return `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${containerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`;
}

/** Minimal banner for static pages that have no React cookie dialog. Same storage key as the SPA. */
export function staticCookieBannerHtml() {
  return `<!-- gtm-consent-banner:start -->
<style>
#bionixus-cookie-banner{position:fixed;bottom:0;left:0;right:0;z-index:10001;background:#0b1f33;color:#f3efe7;padding:16px 20px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;font-family:system-ui,sans-serif;font-size:14px;line-height:1.4}
#bionixus-cookie-banner[hidden]{display:none!important}
#bionixus-cookie-banner p{margin:0;flex:1 1 240px}
#bionixus-cookie-banner a{color:#f0c14b}
#bionixus-cookie-banner .bionixus-cookie-actions{display:flex;gap:8px}
#bionixus-cookie-banner button{border-radius:6px;padding:8px 14px;font-weight:600;cursor:pointer;font-size:14px}
#bionixus-cookie-banner button[data-consent="accepted"]{background:#f0c14b;color:#0b1f33;border:0}
#bionixus-cookie-banner button[data-consent="declined"]{background:transparent;color:#f3efe7;border:1px solid rgba(243,239,231,.45)}
</style>
<div id="bionixus-cookie-banner" hidden role="dialog" aria-label="Cookie consent">
  <p>We use cookies to improve your experience and analyse site traffic. By clicking Accept you agree to our use of cookies and our <a href="/privacy">Privacy Policy</a>.</p>
  <div class="bionixus-cookie-actions">
    <button type="button" data-consent="declined">Decline</button>
    <button type="button" data-consent="accepted">Accept</button>
  </div>
</div>
<script>
(function () {
  var KEY = 'bionixus-cookie-consent';
  var banner = document.getElementById('bionixus-cookie-banner');
  function apply(value) {
    var granted = value === 'accepted' ? 'granted' : 'denied';
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: granted,
        ad_storage: granted,
        ad_user_data: granted,
        ad_personalization: granted
      });
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'consent_update', consent_choice: value });
    try { localStorage.setItem(KEY, value); } catch (e) {}
    window.dispatchEvent(new Event('bionixus-consent-changed'));
    if (banner) banner.hidden = true;
  }
  var existing = null;
  try { existing = localStorage.getItem(KEY); } catch (e) {}
  if (!existing && banner) banner.hidden = false;
  if (!banner) return;
  banner.addEventListener('click', function (event) {
    var button = event.target.closest('button[data-consent]');
    if (!button) return;
    apply(button.getAttribute('data-consent'));
  });
})();
</script>
<!-- gtm-consent-banner:end -->`;
}

/** Replace a leftover placeholder or an empty container id. A real id is left as-is. */
export function applyGtmContainerId(html, containerId = resolveGtmContainerId()) {
  return html
    .replaceAll('%VITE_GTM_ID%', containerId)
    .replaceAll("dataLayer','')", `dataLayer','${containerId}')`)
    .replaceAll('ns.html?id=""', `ns.html?id=${containerId}"`);
}

function insertAfterTag(html, tagName, insertion) {
  const re = new RegExp(`<${tagName}(\\s[^>]*)?>`, 'i');
  if (!re.test(html)) return html;
  return html.replace(re, (match) => `${match}\n${insertion}`);
}

/** index.html: consent default + GTM. The React banner handles the choice. */
export function injectSpaGtmTemplate(html, containerId = '%VITE_GTM_ID%') {
  if (html.includes(MARKER)) return html;
  let out = insertAfterTag(html, 'head', gtmConsentHeadHtml(containerId));
  out = insertAfterTag(out, 'body', gtmNoscriptHtml(containerId));
  return out;
}

/** Standalone HTML pages: same head/body tags, plus a banner that writes the shared consent key. */
export function injectStaticConsentAndGtm(html, containerId = GTM_CONTAINER_FALLBACK_ID) {
  if (html.includes(MARKER)) return html;
  let out = insertAfterTag(html, 'head', gtmConsentHeadHtml(containerId));
  out = insertAfterTag(out, 'body', gtmNoscriptHtml(containerId));
  if (out.includes('</body>')) {
    out = out.replace('</body>', `${staticCookieBannerHtml()}\n</body>`);
  }
  return out;
}
