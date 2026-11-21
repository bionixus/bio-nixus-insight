import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { languages } from '@/lib/i18n';
import { localizedContactPath } from '@/lib/seo';
import { isBuyerIntentPath, isDirectoryPath } from '@/lib/pageIntent';
import { ScopingCallButton } from '@/components/conversion/ScopingCallButton';
import { STICKY_BAR_CLASS as barClassName, STICKY_BUTTON_CLASS as buttonClassName } from '@/components/conversion/stickyBarStyles';

const contactPaths = new Set(languages.map((lang) => localizedContactPath(lang.code)));

const StickyCTA = () => {
  const { pathname } = useLocation();
  const { t, language } = useLanguage();

  // Directory pages render their own "Download this list" bar (DirectoryListDownload), never a meeting prompt.
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
