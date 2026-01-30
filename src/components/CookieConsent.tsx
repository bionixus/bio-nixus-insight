import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const COOKIE_CONSENT_KEY = 'bionixus-cookie-consent';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consent === null) setVisible(true);
  }, []);

  const setConsent = (value: 'accepted' | 'declined') => {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 shadow-lg"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="container-wide section-padding py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-muted-foreground flex-1">
            {t.cookieConsent.message}{' '}
            <Link to="/privacy" className="text-primary underline hover:no-underline">
              {t.cookieConsent.privacyLink}
            </Link>
          </p>
          <div className="flex gap-3 w-full sm:w-auto">
            <Button onClick={() => setConsent('decline')} variant="outline" size="sm">
              {t.cookieConsent.decline}
            </Button>
            <Button onClick={() => setConsent('accepted')} size="sm">
              {t.cookieConsent.accept}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
