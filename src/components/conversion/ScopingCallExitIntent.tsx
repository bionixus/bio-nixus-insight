import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useExitIntent } from '@/hooks/useExitIntent';
import { isBuyerIntentPath } from '@/lib/pageIntent';
import { trackFormView, trackGaEvent } from '@/lib/analytics';
import { ScopingCallDialog } from '@/components/conversion/ScopingCallDialog';

const FORM_ID = 'exit-intent-scoping-call';

function ExitIntentScopingDialog({ pathname }: { pathname: string }) {
  const { triggered, dismiss } = useExitIntent();

  useEffect(() => {
    if (!triggered) return;
    trackGaEvent('exit_intent_shown', { form_id: FORM_ID, page_path: pathname });
    trackFormView({ formId: FORM_ID });
  }, [triggered, pathname]);

  return (
    <ScopingCallDialog
      open={triggered}
      onOpenChange={(open) => {
        if (!open) dismiss(true);
      }}
      formId={FORM_ID}
      sourceContext={`Exit intent: ${pathname}`}
      title="Before you go: book a 30-minute scoping call"
    />
  );
}

/** Exit-intent scoping-call prompt, English buyer-intent pages only (never directories or blogs). */
export function ScopingCallExitIntent() {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  if (language !== 'en' || !isBuyerIntentPath(pathname)) return null;
  return <ExitIntentScopingDialog pathname={pathname} />;
}

export default ScopingCallExitIntent;
