import { Helmet } from 'react-helmet-async';
import { ONCOLOGY_PREMIUM_CSS } from '@/pages/oncology-listicle/oncologyPremiumCss';
import { COUNTRY_RANKING_BODY_CSS } from '@/pages/country-ranking/countryRankingBodyCss';

/** Navy / gold / serif treatment shared with the oncology ranking. */
export function CountryRankingPremiumStyles() {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <style type="text/css">{`${ONCOLOGY_PREMIUM_CSS}${COUNTRY_RANKING_BODY_CSS}`}</style>
    </Helmet>
  );
}
