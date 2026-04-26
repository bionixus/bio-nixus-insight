import { useEffect } from 'react';

/**
 * Client-side navigations only: initial GET /conf (or /ar/conf) is served as a standalone
 * HTML deck from Express (see server.js) or via a Vercel rewrite to the static file.
 * If users reach this route inside the SPA, force a full navigation so they load the
 * same document.
 */
type ConfPortfolioProps = {
  locale?: 'en' | 'ar';
};

export default function ConfPortfolio({ locale = 'en' }: ConfPortfolioProps) {
  useEffect(() => {
    const target = locale === 'ar' ? '/ar/conf' : '/conf';
    window.location.replace(target);
  }, [locale]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-background text-muted-foreground text-sm"
      role="status"
      aria-live="polite"
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
    >
      {locale === 'ar' ? 'جارٍ فتح الملف الاستراتيجي…' : 'Opening strategic portfolio…'}
    </div>
  );
}
