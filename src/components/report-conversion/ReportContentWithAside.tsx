import type { ReactNode } from 'react';
import type { ReportConversionConfig } from '@/data/reportConversionConfig';
import { ReportStickyAside } from '@/components/report-conversion/ReportStickyAside';

type ReportContentWithAsideProps = {
  config: ReportConversionConfig;
  children: ReactNode;
  tocItems?: { href: string; label: string }[];
  containerClassName?: string;
};

/** Desktop grid: article content + sticky conversion aside. */
export function ReportContentWithAside({
  config,
  children,
  tocItems,
  containerClassName = 'container-wide max-w-5xl mx-auto',
}: ReportContentWithAsideProps) {
  return (
    <div className={containerClassName}>
      <div className="grid lg:grid-cols-[minmax(0,1fr)_272px] gap-10 lg:gap-14 items-start">
        <div className="min-w-0">{children}</div>
        <ReportStickyAside config={config} tocItems={tocItems} />
      </div>
    </div>
  );
}
