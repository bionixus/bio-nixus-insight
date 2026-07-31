import { useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { QualificationForm } from '@/components/conversion/QualificationForm';
import { GatedAssetForm } from '@/components/conversion/GatedAssetForm';
import { trackCtaClick, trackFormView } from '@/lib/analytics';

type TalkToResearchCtaProps = {
  variant: 'talk-to-research';
  market?: string;
  ctaId: string;
  ctaLocation: string;
  className?: string;
};

type GatedAssetCtaProps = {
  variant: 'gated-asset';
  reportName: string;
  pdfPath: string;
  ctaId: string;
  ctaLocation: string;
  className?: string;
};

type ConversionCtaProps = TalkToResearchCtaProps | GatedAssetCtaProps;

/** Reusable conversion CTA — Variant A ("talk to research") opens the qualification form;
 * Variant B ("gated asset") opens a short form that emails a PDF sample and notifies sales. */
export function ConversionCTA(props: ConversionCtaProps) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    trackCtaClick({ ctaId: props.ctaId, ctaLocation: props.ctaLocation, targetUrl: '#qualification-form' });
    trackFormView({ formId: props.ctaId });
    setOpen(true);
  };

  if (props.variant === 'talk-to-research') {
    const market = props.market || 'your market';
    return (
      <>
        <div className={`rounded-2xl border border-border bg-card p-6 md:p-8 text-center ${props.className || ''}`}>
          <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-2">
            Planning research in {market}?
          </h3>
          <p className="text-sm text-muted-foreground mb-5 max-w-xl mx-auto">
            Primary research, market access &amp; HEOR. Proposals within 48 hours.
          </p>
          <button
            type="button"
            onClick={handleOpen}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Request a Proposal <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-md max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Request a Proposal</DialogTitle>
              <DialogDescription>Tell us what you need — we typically respond within 48 hours.</DialogDescription>
            </DialogHeader>
            <QualificationForm formId={props.ctaId} sourceContext={market} onSuccess={() => undefined} />
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return (
    <>
      <div className={`rounded-2xl border border-border bg-card p-6 md:p-8 text-center ${props.className || ''}`}>
        <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-2 flex items-center justify-center gap-2">
          <Download className="w-5 h-5 text-primary" />
          Download the full {props.reportName} sample (PDF)
        </h3>
        <p className="text-sm text-muted-foreground mb-5 max-w-xl mx-auto">
          Work email, company, and country of interest — that's it.
        </p>
        <button
          type="button"
          onClick={handleOpen}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Get the sample PDF <Download className="w-4 h-4" />
        </button>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Get the {props.reportName} sample</DialogTitle>
            <DialogDescription>We'll email the PDF and notify our team of your interest.</DialogDescription>
          </DialogHeader>
          <GatedAssetForm formId={props.ctaId} reportName={props.reportName} pdfPath={props.pdfPath} />
        </DialogContent>
      </Dialog>
    </>
  );
}
