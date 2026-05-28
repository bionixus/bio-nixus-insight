import { Phone } from 'lucide-react';
import type { ReportConversionConfig } from '@/data/reportConversionConfig';
import { getReportPhoneLines } from '@/components/report-conversion/constants';

type ReportPhoneLinksProps = {
  config: ReportConversionConfig;
  /** Sticky aside uses smaller text; consultation band uses footer styling. */
  variant: 'aside' | 'footer';
};

export function ReportPhoneLinks({ config, variant }: ReportPhoneLinksProps) {
  const lines = getReportPhoneLines();

  if (variant === 'aside') {
    return (
      <div className="space-y-2 relative z-10">
        {lines.map((line) => (
          <a
            key={line.tel}
            href={`tel:${line.tel}`}
            className="flex items-center gap-1.5 text-[11px] text-white/85 hover:text-white leading-tight"
          >
            <Phone className="w-3.5 h-3.5 shrink-0 text-accent" aria-hidden /> {line.label}
          </a>
        ))}
      </div>
    );
  }

  return (
    <>
      {lines.map((line) => (
        <a
          key={line.tel}
          href={`tel:${line.tel}`}
          className="hover:text-white inline-flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4 shrink-0 text-accent" aria-hidden /> {line.label}
        </a>
      ))}
    </>
  );
}
