import { Helmet } from 'react-helmet-async';
import { PREMIUM_INDUSTRIES_CSS } from './premiumIndustriesCss';

/**
 * Injects premium industries CSS into <head> (valid HTML).
 * Do not render a raw <style> inside body wrappers — W3C flags that as a critical markup error.
 */
export function PremiumIndustriesStyles() {
  return (
    <Helmet>
      <style type="text/css">{PREMIUM_INDUSTRIES_CSS}</style>
    </Helmet>
  );
}
