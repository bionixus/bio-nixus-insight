import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';
import { getRegionSuggestionAsync, getTestSuggestion } from '@/lib/region-locale';
import type { RegionSuggestion } from '@/lib/region-locale';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const STORAGE_KEY = 'bionixus-locale-prompt-dismissed';
const SESSION_KEY = 'bionixus-locale-prompt-session';

export default function LocalePrompt() {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const forceShow = searchParams.get('showLocalePrompt') === '1';
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [suggestion, setSuggestion] = useState<RegionSuggestion | null>(null);

  const isHomePage = pathname === '/';
  const POPUP_DELAY_MS = 5000;

  useEffect(() => {
    if (!isHomePage) return;

    if (forceShow) {
      if (sessionStorage.getItem(SESSION_KEY)) return;
      const timer = setTimeout(() => {
        sessionStorage.setItem(SESSION_KEY, '1');
        setSuggestion(getTestSuggestion());
        setOpen(true);
      }, POPUP_DELAY_MS);
      return () => clearTimeout(timer);
    }

    const dismissedForever = localStorage.getItem(STORAGE_KEY);
    if (dismissedForever) return;

    const alreadyShownThisSession = sessionStorage.getItem(SESSION_KEY);
    if (alreadyShownThisSession) return;

    const timer = setTimeout(async () => {
      if (sessionStorage.getItem(SESSION_KEY)) return;
      const result = await getRegionSuggestionAsync();
      if (!result) return;
      if (result.language === language) return;
      sessionStorage.setItem(SESSION_KEY, '1');
      setSuggestion(result);
      setOpen(true);
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, [isHomePage, language, forceShow]);

  const dismiss = () => {
    if (!forceShow) {
      localStorage.setItem(STORAGE_KEY, '1');
      sessionStorage.setItem(SESSION_KEY, '1');
    }
    setOpen(false);
  };

  const handleYes = () => {
    if (!suggestion) {
      dismiss();
      return;
    }
    localStorage.setItem(STORAGE_KEY, '1');
    sessionStorage.setItem(SESSION_KEY, '1');
    setOpen(false);
    setLanguage(suggestion.language);
  };

  const handleNo = () => {
    dismiss();
  };

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) dismiss();
  };

  if (!suggestion) return null;

  const lang = suggestion.language as Language;
  const enTitle = translations.en.localePrompt.title.replace('{region}', suggestion.regionName);
  const enQuestion = translations.en.localePrompt.question.replace('{language}', suggestion.languageName);
  const otherTitle = translations[lang].localePrompt.title.replace('{region}', suggestion.regionName);
  const otherQuestion = translations[lang].localePrompt.question.replace('{language}', suggestion.languageName);
  return (
    <AlertDialog open={open} onOpenChange={handleOpenChange}>
      <AlertDialogContent className="z-[100] bg-background border-border text-foreground shadow-elegant">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-display font-semibold text-foreground">
            {enTitle}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-muted-foreground space-y-2">
            <p>{enQuestion}</p>
            <p className="pt-2 border-t border-border/50 mt-2" dir={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang}>
              {otherTitle} {otherQuestion}
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="gap-2 sm:gap-0">
          <AlertDialogCancel
            onClick={handleNo}
            className="border-border bg-muted/50 hover:bg-muted text-foreground"
            type="button"
          >
            {t.localePrompt.no}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleYes}
            className="bg-primary text-primary-foreground hover:opacity-90"
            type="button"
          >
            {t.localePrompt.yes}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
