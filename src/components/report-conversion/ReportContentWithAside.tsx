import type { ReactNode } from 'react';
import type { ReportConversionConfig } from '@/data/reportConversionConfig';
import { REPORT_ARTICLE_CONTAINER } from '@/components/report-conversion/constants';
import { ReportStickyAside } from '@/components/report-conversion/ReportStickyAside';

type ReportContentWithAsideProps = {
  config: ReportConversionConfig;
  children: ReactNode;
  tocItems?: { href: string; label: string }[];
  containerClassName?: string;
};

/** Desktop: full-width article + compact sticky aside (xl+ only). */
export function ReportContentWithAside({
  config,
  children,
  tocItems,
  containerClassName = REPORT_ARTICLE_CONTAINER,
}: ReportContentWithAsideProps) {
  return (
    <div className={`report-article-shell ${containerClassName}`.trim()}>
      <div className="flex flex-col xl:flex-row xl:items-start gap-10 xl:gap-10">
        <article className="min-w-0 flex-1 w-full space-y-10 md:space-y-12">{children}</article>
        <ReportStickyAside config={config} tocItems={tocItems} />
      </div>
    </div>
  );
}
