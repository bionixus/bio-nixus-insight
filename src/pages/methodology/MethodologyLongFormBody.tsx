import type { JSX } from 'react';
import type { Language } from '@/lib/i18n';
import { MethodologyLongFormAr } from './MethodologyLongFormAr';
import { MethodologyLongFormDe } from './MethodologyLongFormDe';
import { MethodologyLongFormEn } from './MethodologyLongFormEn';
import { MethodologyLongFormEs } from './MethodologyLongFormEs';
import { MethodologyLongFormFr } from './MethodologyLongFormFr';
import { MethodologyLongFormZh } from './MethodologyLongFormZh';

/** Numbered methodology sections localized per route language (`/methodology`, `/de/methodology`, …). */
export function MethodologyLongFormBody({ lang }: { lang: Language }): JSX.Element {
  switch (lang) {
    case 'de':
      return <MethodologyLongFormDe lang={lang} />;
    case 'fr':
      return <MethodologyLongFormFr lang={lang} />;
    case 'es':
      return <MethodologyLongFormEs lang={lang} />;
    case 'zh':
      return <MethodologyLongFormZh lang={lang} />;
    case 'ar':
      return <MethodologyLongFormAr lang={lang} />;
    case 'pt':
    case 'ru':
      return <MethodologyLongFormEn lang={lang} />;
    default:
      return <MethodologyLongFormEn lang={lang} />;
  }
}
