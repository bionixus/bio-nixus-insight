import { lazy, Suspense, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { trackCtaClick, trackFormView } from '@/lib/analytics';
import type { QUALIFICATION_FORM_NEEDS } from '@/data/qualificationFormOptions';

const LazyScopingCallDialog = lazy(() => import('@/components/conversion/ScopingCallDialog'));

type ScopingCallButtonProps = {
  ctaId: string;
  ctaLocation: string;
  sourceContext?: string;
  defaultNeed?: (typeof QUALIFICATION_FORM_NEEDS)[number];
  label?: string;
  className?: string;
};

/** Opens the scoping-call qualification dialog (Formspree + HighLevel); the form loads on first click. */
export function ScopingCallButton({
  ctaId,
  ctaLocation,
  sourceContext,
  defaultNeed,
  label = 'Book a 30-minute scoping call',
  className = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity',
}: ScopingCallButtonProps) {
  const [open, setOpen] = useState(false);
  const [requested, setRequested] = useState(false);
  const handleOpen = () => {
    trackCtaClick({ ctaId, ctaLocation, targetUrl: '#qualification-form' });
    trackFormView({ formId: ctaId });
    setRequested(true);
    setOpen(true);
  };
  return (
    <>
      <button type="button" onClick={handleOpen} className={className}>
        {label} <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden />
      </button>
      {requested ? (
        <Suspense fallback={null}>
          <LazyScopingCallDialog
            open={open}
            onOpenChange={setOpen}
            formId={ctaId}
            sourceContext={sourceContext}
            defaultNeed={defaultNeed}
          />
        </Suspense>
      ) : null}
    </>
  );
}

export default ScopingCallButton;
