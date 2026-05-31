import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import {
  EvidenceMixDiagram,
  NarrativeWeightDiagram,
  ProcurementFlowDiagram,
  ReportVolumeMapDiagram,
} from '@/components/clinical-diagnostics/ProposalDiagrams';
import {
  CLINICAL_DIAGNOSTICS_PATH,
  CLINICAL_DIAGNOSTICS_PROPOSAL_REQUEST_PATH,
  clinicalDiagnosticsMeta,
  faqItems,
  fieldVolumeStats,
  governanceCadence,
  phase1BranchMatrix,
  phase2ProcurementMatrix,
  phaseOverview,
  programmeSpine,
  relatedLinks,
  reportTableOfContents,
  teamRoster,
  timelineMilestones,
  trackRecordStats,
  whyBioNixus,
} from '@/data/clinicalDiagnosticsOffering';
import '@/styles/clinical-diagnostics-proposal.css';

const PAGE_URL = `https://www.bionixus.com${CLINICAL_DIAGNOSTICS_PATH}`;

export default function ClinicalDiagnosticsMarketResearch() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: clinicalDiagnosticsMeta.h1,
      serviceType: 'Clinical diagnostics market research — QC and immunohematology',
      description: clinicalDiagnosticsMeta.description,
      provider: { '@type': 'Organization', name: 'BioNixus', url: 'https://www.bionixus.com' },
      areaServed: ['Saudi Arabia', 'Türkiye', 'United Arab Emirates', 'Egypt', 'United Kingdom'],
      url: PAGE_URL,
    },
    buildBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Pharma & Healthcare', href: '/pharma-healthcare-industries' },
      { name: 'Clinical Diagnostics', href: CLINICAL_DIAGNOSTICS_PATH },
    ]),
    buildFAQSchema(faqItems, { pageUrl: PAGE_URL }),
  ];

  return (
    <div className="cd-proposal-site min-h-screen">
      <SEOHead
        title={clinicalDiagnosticsMeta.title}
        description={clinicalDiagnosticsMeta.description}
        canonical={CLINICAL_DIAGNOSTICS_PATH}
        jsonLd={jsonLd}
      />
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;1,400&family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@600&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
      </Helmet>
      <Navbar />

      <div className="cd-register-bar" role="region" aria-label="Proposal registration">
        <span>
          Full QC &amp; IH proposal deck — methodology &amp; deliverables, <strong>no pricing online</strong>
        </span>
        <Link to={CLINICAL_DIAGNOSTICS_PROPOSAL_REQUEST_PATH} className="cd-btn-gold">
          Register for the full proposal
        </Link>
      </div>

      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Pharma & Healthcare', href: '/pharma-healthcare-industries' },
            { name: 'Clinical Diagnostics', href: CLINICAL_DIAGNOSTICS_PATH },
          ]}
        />

        <article className="cd-document mx-4 md:mx-auto my-6">
          <section className="cd-cover">
            <p className="cd-cover-eyebrow">{clinicalDiagnosticsMeta.tagline}</p>
            <h1 className="cd-cover-title text-white">{clinicalDiagnosticsMeta.h1}</h1>
            <p className="text-xl font-[family-name:var(--cd-serif)] italic text-[#D4A84B] mb-4">
              {clinicalDiagnosticsMeta.h1Accent}
            </p>
            <p className="cd-cover-sub">{clinicalDiagnosticsMeta.heroIntro}</p>
            <p className="text-sm text-white/75 mt-6 max-w-2xl">
              Saudi Arabia &amp; Türkiye · For the broader map see the{' '}
              <Link to="/healthcare-market-research" className="underline text-[#D4A84B]">
                healthcare market research hub
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={CLINICAL_DIAGNOSTICS_PROPOSAL_REQUEST_PATH} className="cd-btn-gold">
                Register for the full proposal
              </Link>
              <Link to="/contact" className="cd-btn-outline">
                Speak with research director
              </Link>
            </div>
          </section>

          <section className="cd-page cd-page--break">
            <div className="cd-page-rule">
              <span className="cd-page-rule-text">04 · Methodology</span>
            </div>
            <h2 className="cd-section-title">
              Two country engines,
              <em> one programme spine</em>
            </h2>
            <p className="cd-section-lede">{programmeSpine.lede}</p>
            <div className="cd-geo-grid">
              {programmeSpine.markets.map((m) => (
                <div key={m.flag} className="cd-geo-card">
                  <div className="cd-geo-flag">
                    {m.flag} · {m.title}
                  </div>
                  <h3 className="font-[family-name:var(--cd-serif)] text-lg mb-2">{m.title}</h3>
                  <p className="text-sm text-[#3D4A5C] mb-3">{m.execution}</p>
                  <p className="text-[10px] uppercase tracking-wider text-[#6B7684] font-semibold">Desk</p>
                  <p className="text-sm text-[#3D4A5C] mb-2">{m.desk}</p>
                  <p className="text-[10px] uppercase tracking-wider text-[#6B7684] font-semibold">Phase 1 branches</p>
                  <p className="text-sm text-[#3D4A5C] mb-2">{m.phase1}</p>
                  <p className="text-[10px] uppercase tracking-wider text-[#6B7684] font-semibold">Phase 2 procurement</p>
                  <p className="text-sm text-[#3D4A5C]">{m.phase2}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="cd-page cd-page--break">
            <div className="cd-page-rule">
              <span className="cd-page-rule-text">05 · Phases</span>
            </div>
            <div className="cd-phases mb-8">
              {phaseOverview.map((p) => (
                <div
                  key={p.id}
                  className={p.id === 'phase-2' ? 'cd-phase cd-phase--qual' : 'cd-phase'}
                >
                  <div className="cd-phase-num">{p.label}</div>
                  <h3 className="text-lg font-[family-name:var(--cd-serif)]">{p.title}</h3>
                  <p className="text-xs text-[#6B7684] my-2">{p.duration}</p>
                  <ul className="text-sm text-[#3D4A5C] list-disc pl-5 space-y-1">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="cd-fv-grid">
              {fieldVolumeStats.map((s) => (
                <div
                  key={s.label}
                  className={'premium' in s && s.premium ? 'cd-fv-cell cd-fv-cell--phase2' : 'cd-fv-cell'}
                >
                  <div className="cd-fv-num">{s.value}</div>
                  <div className="cd-fv-label">{s.label}</div>
                  <div className="cd-fv-detail">{s.detail}</div>
                </div>
              ))}
            </div>
            <ProcurementFlowDiagram />
          </section>

          <section className="cd-page cd-page--break">
            <div className="cd-page-rule">
              <span className="cd-page-rule-text">05 · Fieldwork</span>
            </div>
            <h2 className="cd-section-title">
              Branch insights &amp; procurement,<em> Phase 1 · Phase 2</em>
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-wide mt-6 mb-2">{phase1BranchMatrix.heading}</h3>
            <div className="overflow-x-auto mb-8">
              <table className="cd-matrix">
                <thead>
                  <tr>
                    <th>Segment</th>
                    <th>Insight</th>
                    <th>KSA</th>
                    <th>TR</th>
                  </tr>
                </thead>
                <tbody>
                  {phase1BranchMatrix.rows.map((r) => (
                    <tr key={r.segment}>
                      <td>{r.segment}</td>
                      <td>{r.insight}</td>
                      <td className="font-[family-name:var(--cd-mono)]">{r.ksa}</td>
                      <td className="font-[family-name:var(--cd-mono)]">{r.tr}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={2}>Total core branches</td>
                    <td>{phase1BranchMatrix.totals.ksa}</td>
                    <td>{phase1BranchMatrix.totals.tr}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wide mb-2">{phase2ProcurementMatrix.heading}</h3>
            <table className="cd-matrix">
              <thead>
                <tr>
                  <th>Segment</th>
                  <th>Insight</th>
                  <th>KSA</th>
                  <th>TR</th>
                </tr>
              </thead>
              <tbody>
                {phase2ProcurementMatrix.rows.map((r) => (
                  <tr key={r.segment}>
                    <td>{r.segment}</td>
                    <td>{r.insight}</td>
                    <td className="font-[family-name:var(--cd-mono)]">{r.ksa}</td>
                    <td className="font-[family-name:var(--cd-mono)]">{r.tr}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2}>Total procurement directors</td>
                  <td>{phase2ProcurementMatrix.totals.ksa}</td>
                  <td>{phase2ProcurementMatrix.totals.tr}</td>
                </tr>
              </tfoot>
            </table>
          </section>

          <section className="cd-page cd-page--break">
            <div className="cd-page-rule">
              <span className="cd-page-rule-text">06 · Timeline</span>
            </div>
            <h2 className="cd-section-title">
              Fourteen-week Phase 1,<em> optional procurement stream</em>
            </h2>
            <ul className="text-sm text-[#3D4A5C] grid sm:grid-cols-2 gap-2 list-disc pl-5 mb-6">
              {governanceCadence.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <table className="cd-matrix">
              <thead>
                <tr>
                  <th>Week</th>
                  <th>Milestone</th>
                </tr>
              </thead>
              <tbody>
                {timelineMilestones.map((row) => (
                  <tr key={row.week}>
                    <td className="font-[family-name:var(--cd-mono)] text-[#0069A3] w-20">{row.week}</td>
                    <td>{row.milestone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="cd-page cd-page--break">
            <div className="cd-page-rule">
              <span className="cd-page-rule-text">07 · Differentiation</span>
            </div>
            <h2 className="cd-section-title">
              What you get with us<em> you do not get elsewhere</em>
            </h2>
            {whyBioNixus.map((w) => (
              <div key={w.num} className="cd-why-item">
                <span className="cd-why-num">{w.num}</span>
                <div>
                  <h3 className="font-semibold text-[#002244] mb-1">{w.title}</h3>
                  <p className="text-sm text-[#3D4A5C]">{w.body}</p>
                </div>
              </div>
            ))}
            <div className="cd-fv-grid mt-8">
              {trackRecordStats.map((s) => (
                <div key={s.label} className="cd-fv-cell bg-white border border-[#D0D6DE]">
                  <div className="cd-fv-num">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#6B7684]">{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="cd-page cd-page--break" style={{ background: '#002244', color: '#fff' }}>
            <div className="cd-page-rule">
              <span className="cd-page-rule-text text-[#D4A84B]">03 · Team</span>
            </div>
            <h2 className="text-2xl text-white font-[family-name:var(--cd-serif)] mb-2">{teamRoster.heading}</h2>
            <p className="text-white/80 mb-6">{teamRoster.lede}</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {teamRoster.lead.map((l) => (
                <div key={l.title} className="border border-white/15 p-4 rounded-sm">
                  <h3 className="text-[#D4A84B] font-semibold mb-2">{l.title}</h3>
                  <p className="text-sm text-white/85">{l.body}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="text-[#D4A84B] uppercase tracking-widest text-xs mb-3">Saudi Arabia</h3>
                {teamRoster.ksa.map((r) => (
                  <p key={r.role} className="mb-3 border-b border-white/10 pb-2">
                    <strong>{r.role}</strong>
                    <br />
                    <span className="text-white/75">{r.desc}</span>
                  </p>
                ))}
              </div>
              <div>
                <h3 className="text-[#D4A84B] uppercase tracking-widest text-xs mb-3">Türkiye</h3>
                {teamRoster.tr.map((r) => (
                  <p key={r.role} className="mb-3 border-b border-white/10 pb-2">
                    <strong>{r.role}</strong>
                    <br />
                    <span className="text-white/75">{r.desc}</span>
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section className="cd-page cd-page--break">
            <div className="cd-page-rule">
              <span className="cd-page-rule-text">08 · Deliverables</span>
            </div>
            <h2 className="cd-section-title">
              Main report ·<em> structure &amp; indicative composition</em>
            </h2>
            <ol className="list-decimal pl-6 text-sm text-[#3D4A5C] space-y-2 max-w-2xl mb-8">
              {reportTableOfContents.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ol>
            <ReportVolumeMapDiagram />
            <div className="cd-diagrams-row mt-6">
              <NarrativeWeightDiagram />
              <EvidenceMixDiagram />
            </div>
            <div className="cd-request-panel mt-10">
              <h3 className="cd-section-title mb-2">Request the complete proposal document</h3>
              <p className="text-[#3D4A5C] mb-4 max-w-lg mx-auto">
                The full McKinsey-style HTML deck mirrors this programme with additional letter, team detail, and field
                matrices. Pricing is not included in the public document.
              </p>
              <Link to={CLINICAL_DIAGNOSTICS_PROPOSAL_REQUEST_PATH} className="cd-btn-gold">
                Register for the full proposal
              </Link>
            </div>
          </section>

          <section className="cd-page">
            <h2 className="cd-section-title mb-4">Frequently asked questions</h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details key={item.question} className="border border-[#D0D6DE] bg-white px-4 py-3 rounded-sm">
                  <summary className="cursor-pointer font-semibold text-[#002244]">{item.question}</summary>
                  <p className="mt-2 text-sm text-[#3D4A5C]">{item.answer}</p>
                </details>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {relatedLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm text-[#0069A3] border border-[#D0D6DE] px-3 py-2 rounded-sm hover:underline bg-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
