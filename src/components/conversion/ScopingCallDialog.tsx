import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { QualificationForm } from '@/components/conversion/QualificationForm';
import type { QUALIFICATION_FORM_NEEDS } from '@/data/qualificationFormOptions';
import { ScopingCallAgenda } from '@/components/conversion/ScopingCallAgenda';

export { ScopingCallAgenda } from '@/components/conversion/ScopingCallAgenda';

type ScopingCallDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formId: string;
  sourceContext?: string;
  defaultNeed?: (typeof QUALIFICATION_FORM_NEEDS)[number];
  defaultMarkets?: string[];
  title?: string;
};

export function ScopingCallDialog({
  open,
  onOpenChange,
  formId,
  sourceContext,
  defaultNeed,
  defaultMarkets,
  title = 'Book a 30-minute scoping call',
}: ScopingCallDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Tell us what you need — a research lead confirms a slot within one business day.
          </DialogDescription>
        </DialogHeader>
        <ScopingCallAgenda className="rounded-lg bg-muted/50 p-3" />
        <QualificationForm
          formId={formId}
          sourceContext={sourceContext}
          defaultNeed={defaultNeed}
          defaultMarkets={defaultMarkets}
          onSuccess={() => undefined}
        />
      </DialogContent>
    </Dialog>
  );
}

export default ScopingCallDialog;
