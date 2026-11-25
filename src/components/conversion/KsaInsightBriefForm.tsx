import { EmailCaptureForm } from '@/components/conversion/EmailCaptureForm';
import {
  KSA_AI_SEARCH_REVIEWED_LABEL,
  KSA_INSIGHT_BRIEF_TAG,
  type KsaAiSearchPage,
} from '@/data/ksaAiSearchRefresh';

type KsaInsightBriefFormProps = {
  page: Pick<KsaAiSearchPage, 'path' | 'pageTag'>;
  className?: string;
};

/** Work-email capture on the existing HighLevel route. Tags: website-lead (server) and source-ai-search. */
export function KsaInsightBriefForm({ page, className = '' }: KsaInsightBriefFormProps) {
  return (
    <section className={`py-12 ${className}`.trim()} aria-labelledby={`ksa-insight-brief-${page.pageTag}`}>
      <div className="container-wide max-w-3xl mx-auto rounded-2xl border border-border bg-card p-6 md:p-8">
        <h2
          id={`ksa-insight-brief-${page.pageTag}`}
          className="font-display text-2xl font-semibold text-foreground mb-3"
        >
          Request a 2-page KSA insight brief
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          Send a work email and BioNixus will reply with a two-page brief for this page. The scoping call on this page stays available.
        </p>
        <EmailCaptureForm
          formVariant="ksa-insight-brief"
          requestType={`2-page KSA insight brief ${page.pageTag}`}
          extraTags={KSA_INSIGHT_BRIEF_TAG}
          subject="Request a 2-page KSA insight brief"
          sourcePage={page.path}
          sourceUrl={`https://www.bionixus.com${page.path}`}
          reportName={page.pageTag}
          submitLabel="Request a 2-page KSA insight brief"
        />
      </div>
    </section>
  );
}

export function KsaLastReviewed({ className = '' }: { className?: string }) {
  return (
    <p className={className}>
      Last reviewed: {KSA_AI_SEARCH_REVIEWED_LABEL}.
    </p>
  );
}
