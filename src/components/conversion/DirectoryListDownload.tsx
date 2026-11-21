import { useEffect, useRef, useState } from 'react';
import { Download, FileSpreadsheet } from 'lucide-react';
import { trackCtaClick, trackFormStart, trackGaEvent, trackLeadSubmitted } from '@/lib/analytics';
import { submitLeadDual } from '@/lib/submitLeadDual';
import { isValidLeadEmail } from '@/lib/leadEmailValidation';
import { focusFirstInvalidField, revealStatus } from '@/lib/formFeedback';
import {
  DIRECTORY_LIST_USES,
  buildDirectoryCsv,
  describeColumns,
  directoryCsvFileName,
  downloadDirectoryCsv,
} from '@/lib/directoryListCsv';
import { ScopingCallButton } from '@/components/conversion/ScopingCallButton';
import { STICKY_BAR_CLASS, STICKY_BUTTON_CLASS } from '@/components/conversion/stickyBarStyles';
import type { QUALIFICATION_FORM_NEEDS } from '@/data/qualificationFormOptions';

export const DIRECTORY_LIST_REQUEST_TYPE = 'Directory List Download';
export const DIRECTORY_LIST_SECTION_ID = 'download-list';


const RESEARCH_USES = new Set<string>(DIRECTORY_LIST_USES.slice(0, 2));
const JOB_USE = 'Job search';

const GENERIC_ERROR = 'Something went wrong. Please try again, or email admin@bionixus.com and we will send the list.';
const FIELD_CLASS =
  'w-full px-3.5 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors';

export type DirectoryListDownloadProps = {
  /** Page path, e.g. '/pharmaceutical-companies-egypt'. Names the file and the GA form id. */
  path: string;
  /** e.g. 'pharmaceutical companies' */
  labelLower: string;
  /** In-sentence country, e.g. 'Egypt' or 'the UAE'. */
  countryDisplay: string;
  /** Market string for the lead record, e.g. 'United Arab Emirates'. */
  market: string;
  headers: string[];
  rows: string[][];
  /** Date the list was last reviewed. */
  asOf?: string;
  /** Qualification-form need preselected when a research buyer books a call after downloading. */
  defaultNeed?: (typeof QUALIFICATION_FORM_NEEDS)[number];
  className?: string;
};

function capitalise(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * "Download this list" lead capture for company directory pages: work email, company and
 * intended use, then a CSV of the rows on the page. Saved as a `Directory List Download`
 * lead so it never counts as a scoping-call request. Research and market-entry answers are
 * offered the scoping call after the download; job seekers are pointed elsewhere.
 * Also renders a mobile bottom bar that jumps to the form until it is on screen.
 */
export function DirectoryListDownload({
  path,
  labelLower,
  countryDisplay,
  market,
  headers,
  rows,
  asOf,
  defaultNeed = 'Primary market research',
  className = 'mt-8',
}: DirectoryListDownloadProps) {
  const slug = path.replace(/^\/+/, '').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
  const formId = `directory-list-${slug}`;
  const listName = `${capitalise(labelLower)} in ${countryDisplay}`;
  const fileName = directoryCsvFileName(path);

  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [listUse, setListUse] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [started, setStarted] = useState(false);
  const [barReady, setBarReady] = useState(false);
  const [formInView, setFormInView] = useState(false);

  // The mobile bar is page chrome, not content: mount it after first paint, like the site-wide sticky CTA.
  useEffect(() => {
    const timer = window.setTimeout(() => setBarReady(true), 2500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(([entry]) => setFormInView(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const csv = () =>
    buildDirectoryCsv({
      title: `${listName} (BioNixus directory)`,
      sourceUrl: `https://www.bionixus.com${path}`,
      asOf,
      headers,
      rows,
    });

  const handleFirstInteraction = () => {
    if (started) return;
    setStarted(true);
    trackFormStart({ formId });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};

    const rawEmail = (data.get('workEmail') as string)?.trim() || '';
    if (!rawEmail) next.workEmail = 'Email is required';
    else if (!isValidLeadEmail(rawEmail)) next.workEmail = 'Please enter a valid email address';
    if (!(data.get('company') as string)?.trim()) next.company = 'Company or organisation is required';
    const use = (data.get('listUse') as string)?.trim() || '';
    if (!use) next.listUse = 'Please choose one';

    setErrors(next);
    setSubmitError(null);
    if (Object.keys(next).length > 0) {
      focusFirstInvalidField(form, next);
      return;
    }

    const currentUrl = window.location.href;
    const params = new URL(currentUrl).searchParams;
    const company = (data.get('company') as string).trim();
    data.set('_subject', `Directory list download: ${listName} (${company})`);
    data.set('requestType', DIRECTORY_LIST_REQUEST_TYPE);
    data.set('formVariant', formId);
    data.set('reportName', `${listName} list (CSV)`);
    data.set('country', market);
    data.set('sourcePage', window.location.pathname);
    data.set('sourceUrl', currentUrl);
    data.set('utmSource', params.get('utm_source') || '');
    data.set('utmMedium', params.get('utm_medium') || '');
    data.set('utmCampaign', params.get('utm_campaign') || '');
    data.set('utmContent', params.get('utm_content') || '');
    data.set('utmTerm', params.get('utm_term') || '');

    setSubmitting(true);
    try {
      const result = await submitLeadDual(data);
      if (result.skipped) {
        setSubmitted(true);
        return;
      }
      if (result.ok) {
        setListUse(use);
        setSubmitted(true);
        trackLeadSubmitted({ formId });
        trackGaEvent('directory_list_download', { form_id: formId, list_use: use, rows: rows.length });
        downloadDirectoryCsv(fileName, csv());
      } else {
        setSubmitError(result.error || GENERIC_ERROR);
      }
    } catch {
      setSubmitError(GENERIC_ERROR);
    } finally {
      setSubmitting(false);
    }
  };

  const showBar = barReady && !formInView && !submitted;

  return (
    <>
      <div
        ref={sectionRef}
        id={DIRECTORY_LIST_SECTION_ID}
        className={`${className} premium-card scroll-mt-40`}
        aria-labelledby={`${formId}-heading`}
        role="region"
      >
        {submitted ? (
          <div className="focus:outline-none" role="status" aria-live="polite" tabIndex={-1} ref={revealStatus}>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C9A84C] mb-2">Free download</p>
            <h2 id={`${formId}-heading`} className="text-xl md:text-2xl font-display font-semibold text-foreground mb-2">
              Your download has started
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              If it did not open,{' '}
              <button
                type="button"
                className="text-primary font-medium hover:underline"
                onClick={() => downloadDirectoryCsv(fileName, csv())}
              >
                download {fileName} again
              </button>
              . The file opens in Excel and Google Sheets.
            </p>
            {RESEARCH_USES.has(listUse) ? (
              <div className="border-t border-border pt-4">
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  Need more than names? BioNixus runs primary research with the customers, distributors and
                  decision-makers behind these accounts in {countryDisplay}. Proposal within 48 hours of a 30-minute call.
                </p>
                <ScopingCallButton
                  ctaId={`${formId}-after-download`}
                  ctaLocation="directory_list_download_success"
                  sourceContext={`${listName} list download`}
                  defaultNeed={defaultNeed}
                />
              </div>
            ) : listUse === JOB_USE ? (
              <p className="text-sm text-muted-foreground leading-relaxed">
                BioNixus is a research firm, not a recruiter. Open roles are on each company&apos;s own careers page and
                LinkedIn.
              </p>
            ) : null}
          </div>
        ) : (
          <>
            <div className="flex items-start gap-3 mb-4">
              <FileSpreadsheet className="w-6 h-6 text-[#C9A84C] shrink-0 mt-1" aria-hidden />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C9A84C] mb-1">Free download</p>
                <h2 id={`${formId}-heading`} className="text-xl md:text-2xl font-display font-semibold text-foreground">
                  Download this list as an Excel file
                </h2>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-3xl">
              All {rows.length} {labelLower} in {countryDisplay} from the table above, with {describeColumns(headers)},
              in a CSV file that opens in Excel or Google Sheets. Free.
            </p>
            <form
              onSubmit={handleSubmit}
              onFocus={handleFirstInteraction}
              className="grid gap-4 md:grid-cols-3"
              noValidate
            >
              <input
                type="text"
                name="hp_company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                defaultValue=""
                className="hidden"
              />
              <div>
                <label htmlFor={`${formId}-email`} className="block text-sm font-medium text-foreground mb-1.5">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  id={`${formId}-email`}
                  name="workEmail"
                  type="email"
                  autoComplete="email"
                  required
                  aria-invalid={Boolean(errors.workEmail)}
                  className={`${FIELD_CLASS} ${errors.workEmail ? 'border-destructive' : 'border-input'}`}
                  placeholder="you@company.com"
                />
                {errors.workEmail && <p className="text-xs text-destructive mt-1">{errors.workEmail}</p>}
              </div>
              <div>
                <label htmlFor={`${formId}-company`} className="block text-sm font-medium text-foreground mb-1.5">
                  Company or organisation <span className="text-destructive">*</span>
                </label>
                <input
                  id={`${formId}-company`}
                  name="company"
                  type="text"
                  autoComplete="organization"
                  required
                  aria-invalid={Boolean(errors.company)}
                  className={`${FIELD_CLASS} ${errors.company ? 'border-destructive' : 'border-input'}`}
                />
                {errors.company && <p className="text-xs text-destructive mt-1">{errors.company}</p>}
              </div>
              <div>
                <label htmlFor={`${formId}-use`} className="block text-sm font-medium text-foreground mb-1.5">
                  What is the list for? <span className="text-destructive">*</span>
                </label>
                <select
                  id={`${formId}-use`}
                  name="listUse"
                  required
                  defaultValue=""
                  aria-invalid={Boolean(errors.listUse)}
                  className={`${FIELD_CLASS} ${errors.listUse ? 'border-destructive' : 'border-input'}`}
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  {DIRECTORY_LIST_USES.map((use) => (
                    <option key={use} value={use}>
                      {use}
                    </option>
                  ))}
                </select>
                {errors.listUse && <p className="text-xs text-destructive mt-1">{errors.listUse}</p>}
              </div>
              <div className="md:col-span-3" aria-live="polite">
                {submitError ? (
                  <p className="text-sm text-destructive mb-3 focus:outline-none" role="alert" tabIndex={-1} ref={revealStatus}>
                    {submitError}
                  </p>
                ) : null}
                <button
                  type="submit"
                  disabled={submitting}
                  aria-busy={submitting}
                  className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Download className="w-4 h-4" aria-hidden />
                  {submitting ? 'Preparing your file…' : 'Download the list (Excel)'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
      {showBar ? (
        <div className={STICKY_BAR_CLASS} data-testid="directory-list-sticky-bar">
          <a
            href={`#${DIRECTORY_LIST_SECTION_ID}`}
            className={STICKY_BUTTON_CLASS}
            onClick={() =>
              trackCtaClick({ ctaId: `${formId}-sticky`, ctaLocation: 'sticky_mobile_bar', targetUrl: `#${DIRECTORY_LIST_SECTION_ID}` })
            }
          >
            <Download className="w-4 h-4" aria-hidden /> Download this list (Excel)
          </a>
        </div>
      ) : null}
    </>
  );
}
