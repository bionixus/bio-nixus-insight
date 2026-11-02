import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languages } from '@/lib/i18n';
import { localizedContactPath } from '@/lib/seo';
import { isBuyerIntentPath, isDirectoryPath } from '@/lib/pageIntent';
import { ScopingCallButton } from '@/components/conversion/ScopingCallButton';

const contactPaths = new Set(languages.map((lang) => localizedContactPath(lang.code)));

const barClassName =
  'fixed bottom-0 left-0 right-0 z-40 md:hidden bg-night-2/85 backdrop-blur-xl backdrop-saturate-150 border-t border-line px-4 py-3 safe-area-bottom';
const buttonClassName =
  'flex items-center justify-center gap-2 w-full rounded-full bg-primary bg-gradient-to-r from-accent to-primary text-on-gold font-semibold py-3 text-sm shadow-[0_14px_40px_-16px_hsl(var(--gold-glow)/0.6),inset_0_1px_0_rgb(255_255_255/0.35)] transition-[filter] hover:brightness-105';

const StickyCTA = () => {
  const { pathname } = useLocation();
  const { t, language } = useLanguage();

  if (contactPaths.has(pathname) || isDirectoryPath(pathname)) return null;

  if (isBuyerIntentPath(pathname)) {
    return (
      <div className={barClassName}>
        <ScopingCallButton
          ctaId="sticky-scoping-call"
          ctaLocation="sticky_mobile_bar"
          sourceContext={pathname}
          label="Book a 30-minute scoping call"
          className={buttonClassName}
        />
      </div>
    );
  }

  return (
    <div className={barClassName}>
      <Link to={localizedContactPath(language)} className={buttonClassName}>
        {t.homePage.cta.requestProposal} <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default StickyCTA;
