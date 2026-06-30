import { CaseStudyContactGate } from '@/components/CaseStudyContactGate';

interface MarketReportContactGateProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  reportTitle: string;
  reportSlug: string;
  onSuccess: () => void;
}

/** Contact gate for gated market-report white papers (Formspree via shared case-study gate). */
export function MarketReportContactGate({
  open,
  onOpenChange,
  reportTitle,
  reportSlug,
  onSuccess,
}: MarketReportContactGateProps) {
  return (
    <CaseStudyContactGate
      open={open}
      onOpenChange={onOpenChange}
      caseStudyTitle={reportTitle}
      onSuccess={onSuccess}
      dialogTitle="Enter your details to browse and download the full report"
      requestType="Market Report White Paper Access"
      formVariant={`whitepaper_gate_${reportSlug}`}
    />
  );
}
