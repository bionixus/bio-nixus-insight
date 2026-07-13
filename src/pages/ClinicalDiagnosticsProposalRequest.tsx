import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema } from '@/lib/seo/schemas';
import {
  CLINICAL_DIAGNOSTICS_PATH,
  CLINICAL_DIAGNOSTICS_PROPOSAL_DECK_PATH,
} from '@/data/clinicalDiagnosticsOffering';
import '@/styles/clinical-diagnostics-proposal.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgozewew';
const PAGE_PATH = '/clinical-diagnostics-proposal-request';
const PAGE_URL = `https://www.bionixus.com${PAGE_PATH}`;

const COUNTRY_OPTIONS = [
  'Saudi Arabia',
  'Türkiye',
  'United Arab Emirates',
  'United Kingdom',
  'Germany',
  'France',
  'United States',
  'Other',
] as const;

export default function ClinicalDiagnosticsProposalRequest() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Register for Clinical Diagnostics Market Assessment Proposal',
      description:
        'Register to receive the full BioNixus clinical diagnostics proposal for QC and immunohematology in Saudi Arabia and Türkiye. Methodology and deliverables only — no pricing published online.',
      url: PAGE_URL,
    },
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Clinical Diagnostics', href: CLINICAL_DIAGNOSTICS_PATH },
      { name: 'Request full proposal', href: PAGE_PATH },
    ]),
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = (data.get('workEmail') as string)?.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid work email.');
      return;
    }
    if (!data.get('consent')) {
      setError('Please agree to the privacy policy.');
      return;
    }

    data.set('_subject', `Clinical Diagnostics Proposal Request — ${data.get('company')}`);
    data.set('requestType', 'clinical_diagnostics_proposal');
    data.set('formVariant', 'clinical_diagnostics_proposal_request');
    data.set('sourcePage', PAGE_PATH);
    data.set('sourceUrl', window.location.href);
    data.set('message', (data.get('message') as string) || 'Requesting full QC/IH market assessment proposal (no pricing).');

    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('submit_failed');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Email digital@bionixus.uk with your company name and we will send the deck.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="cd-proposal-site min-h-screen">
      <SEOHead
        title="Register for Clinical Diagnostics Proposal | BioNixus"
        description="Register to receive the full BioNixus QC and immunohematology market assessment proposal for Saudi Arabia and Türkiye. Complete methodology deck without."
        canonical={PAGE_PATH}
        jsonLd={jsonLd}
      />
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;1,400&family=Barlow:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Clinical Diagnostics', href: CLINICAL_DIAGNOSTICS_PATH },
            { name: 'Request full proposal', href: PAGE_PATH },
          ]}
        />

        <div className="cd-document w-full max-w-full mx-auto my-6 sm:my-8">
          <section className="cd-cover">
            <p className="cd-cover-eyebrow">Confidential · Registration</p>
            <h1 className="cd-cover-title">Receive the full market assessment proposal</h1>
            <p className="cd-cover-sub">
              Complete programme deck: methodology, KSA and Türkiye field matrices, timeline, team roster, deliverable
              architecture, and indicative analytics. Commercial terms are shared after registration — not published on
              this site.
            </p>
          </section>

          <section className="cd-page">
            {!submitted ? (
              <>
                <div className="cd-page-rule">
                  <span className="cd-page-rule-text">Register</span>
                </div>
                <h2 className="cd-section-title">
                  Request access to the <em>full proposal</em>
                </h2>
                <p className="cd-section-lede mb-6">
                  For clinical diagnostics, QC, and immunohematology leaders evaluating Saudi Arabia and Türkiye. We respond
                  within one business day with a link to the complete HTML proposal and optional alignment call.
                </p>

                <form onSubmit={handleSubmit} className="max-w-xl space-y-4 font-[family-name:var(--cd-sans)]">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block text-sm">
                      <span className="font-semibold text-[#002244]">First name *</span>
                      <input
                        name="firstName"
                        required
                        className="mt-1 w-full border border-[#D0D6DE] rounded-sm px-3 py-2 text-sm"
                      />
                    </label>
                    <label className="block text-sm">
                      <span className="font-semibold text-[#002244]">Last name *</span>
                      <input
                        name="lastName"
                        required
                        className="mt-1 w-full border border-[#D0D6DE] rounded-sm px-3 py-2 text-sm"
                      />
                    </label>
                  </div>
                  <label className="block text-sm">
                    <span className="font-semibold text-[#002244]">Work email *</span>
                    <input
                      name="workEmail"
                      type="email"
                      required
                      className="mt-1 w-full border border-[#D0D6DE] rounded-sm px-3 py-2 text-sm"
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="font-semibold text-[#002244]">Company *</span>
                    <input
                      name="company"
                      required
                      className="mt-1 w-full border border-[#D0D6DE] rounded-sm px-3 py-2 text-sm"
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="font-semibold text-[#002244]">Job title</span>
                    <input name="jobTitle" className="mt-1 w-full border border-[#D0D6DE] rounded-sm px-3 py-2 text-sm" />
                  </label>
                  <label className="block text-sm">
                    <span className="font-semibold text-[#002244]">Country / market focus *</span>
                    <select
                      name="country"
                      required
                      className="mt-1 w-full border border-[#D0D6DE] rounded-sm px-3 py-2 text-sm bg-white"
                    >
                      <option value="">Select…</option>
                      {COUNTRY_OPTIONS.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block text-sm">
                    <span className="font-semibold text-[#002244]">Notes (optional)</span>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="e.g. QC vs IH priority, timeline, market focus"
                      className="mt-1 w-full border border-[#D0D6DE] rounded-sm px-3 py-2 text-sm"
                    />
                  </label>
                  <label className="flex items-start gap-2 text-sm text-[#3D4A5C]">
                    <input name="consent" type="checkbox" required className="mt-1" />
                    <span>
                      I agree to BioNixus processing my details to send the proposal and follow up. See{' '}
                      <Link to="/privacy" className="text-[#0069A3] underline">
                        privacy policy
                      </Link>
                      .
                    </span>
                  </label>
                  {error && <p className="text-sm text-red-700">{error}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="cd-btn-gold border-0 cursor-pointer disabled:opacity-60"
                  >
                    {submitting ? 'Submitting…' : 'Register & receive the full proposal'}
                  </button>
                </form>
              </>
            ) : (
              <div className="cd-request-panel">
                <h2 className="cd-section-title">Thank you — your request is registered</h2>
                <p className="text-[#3D4A5C] mb-6 max-w-lg mx-auto leading-relaxed">
                  You can open the full proposal deck now (methodology, matrices, timeline — no pricing section). Our team
                  may follow up to confirm use-case and alignment.
                </p>
                <a
                  href={`https://www.bionixus.com${CLINICAL_DIAGNOSTICS_PROPOSAL_DECK_PATH}`}
                  className="cd-btn-gold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open full proposal (HTML deck)
                </a>
                <p className="mt-4 text-sm text-[#6B7684]">
                  <Link to={CLINICAL_DIAGNOSTICS_PATH} className="text-[#0069A3] underline">
                    Return to programme overview
                  </Link>
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
