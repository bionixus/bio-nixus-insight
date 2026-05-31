import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { CTASection } from '@/components/shared/CTASection';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import {
  CLINICAL_DIAGNOSTICS_PATH,
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

const PAGE_URL = `https://www.bionixus.com${CLINICAL_DIAGNOSTICS_PATH}`;
const HERO_IMAGE = '/images/quant-ai-validation-lab.png';

function PageRule({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="h-[3px] w-12 rounded-sm bg-gradient-to-r from-[#B8862D] to-[#D4A84B]" aria-hidden />
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#002244]">{label}</span>
    </div>
  );
}

export default function ClinicalDiagnosticsMarketResearch() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: clinicalDiagnosticsMeta.h1,
      serviceType: 'Clinical diagnostics market research — QC and immunohematology',
      description: clinicalDiagnosticsMeta.description,
      provider: {
        '@type': 'Organization',
        name: 'BioNixus',
        url: 'https://www.bionixus.com',
      },
      areaServed: ['Saudi Arabia', 'Türkiye', 'United Arab Emirates', 'Egypt', 'United Kingdom', 'European Union'],
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
    <div className="min-h-screen bg-[#FAFAF8]">
      <SEOHead
        title={clinicalDiagnosticsMeta.title}
        description={clinicalDiagnosticsMeta.description}
        canonical={CLINICAL_DIAGNOSTICS_PATH}
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Pharma & Healthcare', href: '/pharma-healthcare-industries' },
            { name: 'Clinical Diagnostics', href: CLINICAL_DIAGNOSTICS_PATH },
          ]}
        />

        {/* Cover — McKinsey-style */}
        <section className="relative overflow-hidden text-white bg-gradient-to-br from-[#000510] via-[#002244] to-[#063558]">
          <div className="absolute inset-0 opacity-25">
            <img
              src={HERO_IMAGE}
              alt="Clinical diagnostics market research — laboratory quality control and immunohematology intelligence"
              className="h-full w-full object-cover"
              width={1600}
              height={900}
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#000510]/90 via-[#002244]/70 to-transparent" aria-hidden />
          <div className="relative section-padding py-16 md:py-24">
            <div className="container-wide max-w-5xl mx-auto">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4A84B] mb-4">
                {clinicalDiagnosticsMeta.tagline}
              </p>
              <p className="text-xs uppercase tracking-widest text-white/70 mb-2">Market intelligence programme</p>
              <h1 className="text-3xl md:text-5xl font-display font-semibold leading-tight mb-2">
                {clinicalDiagnosticsMeta.h1}
              </h1>
              <p className="text-xl md:text-2xl font-display italic text-[#D4A84B]/95 mb-6">
                {clinicalDiagnosticsMeta.h1Accent}
              </p>
              <p className="text-lg text-white/90 max-w-3xl leading-relaxed mb-4">{clinicalDiagnosticsMeta.heroIntro}</p>
              <p className="text-base text-white/80 max-w-3xl leading-relaxed mb-8">
                For the broader pharmaceutical and healthcare map, see the{' '}
                <Link to="/healthcare-market-research" className="underline font-medium text-[#D4A84B]">
                  healthcare market research hub
                </Link>
                . This page is BioNixus&apos;s main offering for clinical diagnostics, QC, and immunohematology sponsors in
                Saudi Arabia, Türkiye, and adjacent MENA and EU markets.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-sm bg-white px-5 py-2.5 text-sm font-semibold text-[#002244] hover:bg-white/90"
                >
                  Request a scoped proposal
                </Link>
                <Link
                  to="/methodology"
                  className="rounded-sm border border-white/35 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Methodology &amp; governance
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-6 text-xs uppercase tracking-wider text-white/60">
                <span>KSA · Saudi Arabia</span>
                <span>TR · Türkiye</span>
                <span>QC · Immunohematology</span>
              </div>
            </div>
          </div>
        </section>

        {/* Programme spine */}
        <section className="section-padding py-14 border-b border-[#D0D6DE]">
          <div className="container-wide max-w-6xl mx-auto">
            <PageRule label="Methodology" />
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-[#002244] mb-3">
              {programmeSpine.heading}
            </h2>
            <p className="text-[#3D4A5C] max-w-3xl leading-relaxed mb-10">{programmeSpine.lede}</p>
            <div className="grid md:grid-cols-2 gap-5">
              {programmeSpine.markets.map((market) => (
                <article
                  key={market.flag}
                  className="rounded-sm border border-[#D0D6DE] bg-white p-6 shadow-sm"
                >
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#0069A3] mb-2">
                    {market.flag} · {market.title}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#002244] mb-3">Team &amp; execution</h3>
                  <p className="text-sm text-[#3D4A5C] leading-relaxed mb-4">{market.execution}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#6B7684] mb-1">Phase 1 — desk</p>
                  <p className="text-sm text-[#3D4A5C] leading-relaxed mb-3">{market.desk}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#6B7684] mb-1">
                    Phase 1 — branches
                  </p>
                  <p className="text-sm text-[#3D4A5C] leading-relaxed mb-3">{market.phase1}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#6B7684] mb-1">
                    Phase 2 — procurement
                  </p>
                  <p className="text-sm text-[#3D4A5C] leading-relaxed">{market.phase2}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Phases */}
        <section className="section-padding py-14 bg-[#F3F5F7]">
          <div className="container-wide max-w-6xl mx-auto">
            <PageRule label="Programme phases" />
            <div className="grid md:grid-cols-2 gap-5 mb-10">
              {phaseOverview.map((phase) => (
                <article
                  key={phase.id}
                  className="rounded-sm border-l-4 border-[#0069A3] bg-white p-6 shadow-sm border border-[#D0D6DE]"
                >
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#0069A3] mb-2">{phase.label}</div>
                  <h3 className="font-display text-xl font-semibold text-[#002244] mb-1">{phase.title}</h3>
                  <p className="text-xs text-[#6B7684] mb-4">{phase.duration}</p>
                  <ul className="space-y-2 text-sm text-[#3D4A5C] list-disc pl-5">
                    {phase.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {fieldVolumeStats.map((stat) => (
                <div key={stat.label} className="rounded-sm bg-[#E4EEF7] border border-[#D0D6DE] p-5 text-center">
                  <div className="text-3xl font-display font-semibold text-[#002244]">{stat.value}</div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-[#002244] mt-2">{stat.label}</div>
                  <div className="text-xs text-[#6B7684] mt-1">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fieldwork matrices */}
        <section className="section-padding py-14">
          <div className="container-wide max-w-6xl mx-auto">
            <PageRule label="Fieldwork" />
            <h2 className="text-2xl font-display font-semibold text-[#002244] mb-2">
              Branch insights &amp; procurement programmes
            </h2>
            <p className="text-[#3D4A5C] mb-8 max-w-3xl">
              Illustrative core samples for a dual-country QC and IH assessment. Final grids are set at kickoff with your
              statement of work.
            </p>

            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#002244] mb-3">{phase1BranchMatrix.heading}</h3>
            <div className="overflow-x-auto rounded-sm border border-[#D0D6DE] bg-white mb-10">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-[#E4EEF7] border-b border-[#D0D6DE]">
                    <th scope="col" className="px-4 py-3 font-semibold text-[#002244]">
                      Branch / site segment
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold text-[#002244]">
                      Insight stream
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold text-[#002244] w-16">
                      KSA
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold text-[#002244] w-16">
                      TR
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {phase1BranchMatrix.rows.map((row) => (
                    <tr key={row.segment} className="border-b border-[#D0D6DE]">
                      <td className="px-4 py-3 font-medium text-[#002244] align-top">{row.segment}</td>
                      <td className="px-4 py-3 text-[#3D4A5C]">{row.insight}</td>
                      <td className="px-4 py-3 text-[#002244] font-mono text-xs">{row.ksa}</td>
                      <td className="px-4 py-3 text-[#002244] font-mono text-xs">{row.tr}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#FAFAF8] font-semibold">
                    <td colSpan={2} className="px-4 py-3 text-[#002244]">
                      Total — Phase 1 core quantitative branches
                    </td>
                    <td className="px-4 py-3 font-mono text-xs">{phase1BranchMatrix.totals.ksa}</td>
                    <td className="px-4 py-3 font-mono text-xs">{phase1BranchMatrix.totals.tr}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#002244] mb-3">
              {phase2ProcurementMatrix.heading}
            </h3>
            <div className="overflow-x-auto rounded-sm border border-[#D0D6DE] bg-white">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-[#E4EEF7] border-b border-[#D0D6DE]">
                    <th scope="col" className="px-4 py-3 font-semibold text-[#002244]">
                      Role / procurement segment
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold text-[#002244]">
                      Insight stream
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold text-[#002244] w-16">
                      KSA
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold text-[#002244] w-16">
                      TR
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {phase2ProcurementMatrix.rows.map((row) => (
                    <tr key={row.segment} className="border-b border-[#D0D6DE]">
                      <td className="px-4 py-3 font-medium text-[#002244] align-top">{row.segment}</td>
                      <td className="px-4 py-3 text-[#3D4A5C]">{row.insight}</td>
                      <td className="px-4 py-3 font-mono text-xs">{row.ksa}</td>
                      <td className="px-4 py-3 font-mono text-xs">{row.tr}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#FAFAF8] font-semibold">
                    <td colSpan={2} className="px-4 py-3 text-[#002244]">
                      Total — Phase 2 procurement director interviews
                    </td>
                    <td className="px-4 py-3 font-mono text-xs">{phase2ProcurementMatrix.totals.ksa}</td>
                    <td className="px-4 py-3 font-mono text-xs">{phase2ProcurementMatrix.totals.tr}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding py-14 bg-[#F3F5F7]">
          <div className="container-wide max-w-6xl mx-auto">
            <PageRule label="Timeline" />
            <h2 className="text-2xl font-display font-semibold text-[#002244] mb-2">
              Fourteen-week Phase 1, optional procurement stream
            </h2>
            <p className="text-[#3D4A5C] mb-6">Governance cadence for sponsor alignment:</p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-[#3D4A5C] mb-8 list-disc pl-5">
              {governanceCadence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="overflow-x-auto rounded-sm border border-[#D0D6DE] bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#002244] text-white">
                    <th scope="col" className="px-4 py-3 text-left w-24">
                      Week
                    </th>
                    <th scope="col" className="px-4 py-3 text-left">
                      Milestone
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {timelineMilestones.map((row) => (
                    <tr key={row.week} className="border-b border-[#D0D6DE]">
                      <td className="px-4 py-3 font-mono text-xs text-[#0069A3] align-top">{row.week}</td>
                      <td className="px-4 py-3 text-[#3D4A5C]">{row.milestone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Why BioNixus */}
        <section className="section-padding py-14">
          <div className="container-wide max-w-6xl mx-auto">
            <PageRule label="Differentiation" />
            <h2 className="text-2xl font-display font-semibold text-[#002244] mb-2">
              What you get with us you do not get elsewhere
            </h2>
            <p className="text-[#3D4A5C] mb-8 max-w-2xl">Not &ldquo;same, cheaper&rdquo; — the mix that fits this mandate.</p>
            <div className="space-y-5">
              {whyBioNixus.map((item) => (
                <article key={item.num} className="flex gap-5 rounded-sm border border-[#D0D6DE] bg-white p-5">
                  <div className="text-2xl font-mono font-medium text-[#B8862D] shrink-0">{item.num}</div>
                  <div>
                    <h3 className="font-semibold text-[#002244] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#3D4A5C] leading-relaxed">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {trackRecordStats.map((s) => (
                <div key={s.label} className="text-center p-4 border border-[#D0D6DE] rounded-sm bg-[#FAFAF8]">
                  <div className="text-2xl font-display font-semibold text-[#002244]">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-[#6B7684] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding py-14 bg-[#002244] text-white">
          <div className="container-wide max-w-6xl mx-auto">
            <PageRule label="Team" />
            <h2 className="text-2xl font-display font-semibold mb-2">{teamRoster.heading}</h2>
            <p className="text-white/80 mb-8 max-w-3xl">{teamRoster.lede}</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {teamRoster.lead.map((person) => (
                <article key={person.title} className="rounded-sm border border-white/15 bg-white/5 p-5">
                  <h3 className="font-semibold text-[#D4A84B] mb-2">{person.title}</h3>
                  <p className="text-sm text-white/85 leading-relaxed">{person.body}</p>
                </article>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#D4A84B] mb-4">Saudi Arabia</h3>
                <ul className="space-y-3">
                  {teamRoster.ksa.map((r) => (
                    <li key={r.role} className="text-sm border-b border-white/10 pb-3">
                      <strong className="text-white">{r.role}</strong>
                      <p className="text-white/75 mt-1">{r.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#D4A84B] mb-4">Türkiye</h3>
                <ul className="space-y-3">
                  {teamRoster.tr.map((r) => (
                    <li key={r.role} className="text-sm border-b border-white/10 pb-3">
                      <strong className="text-white">{r.role}</strong>
                      <p className="text-white/75 mt-1">{r.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables — no pricing */}
        <section className="section-padding py-14">
          <div className="container-wide max-w-6xl mx-auto">
            <PageRule label="Deliverables" />
            <h2 className="text-2xl font-display font-semibold text-[#002244] mb-2">Main report — indicative table of contents</h2>
            <p className="text-[#3D4A5C] mb-6 max-w-3xl">
              Phase 1 desk and field outputs bind on executed brief and statement of work. Investment and sample tiers are
              scoped privately — not published on this page.
            </p>
            <ol className="space-y-2 text-sm text-[#3D4A5C] list-decimal pl-6 max-w-3xl">
              {reportTableOfContents.map((chapter) => (
                <li key={chapter} className="leading-relaxed">
                  {chapter}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Related + FAQ */}
        <section className="section-padding py-10 border-t border-[#D0D6DE]">
          <div className="container-wide max-w-6xl mx-auto">
            <h2 className="text-xl font-display font-semibold text-[#002244] mb-4">Related programmes</h2>
            <div className="flex flex-wrap gap-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-sm border border-[#D0D6DE] bg-white px-4 py-2 text-sm font-medium text-[#0069A3] hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-12 bg-[#F3F5F7]">
          <div className="container-wide max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-[#002244] mb-6">Frequently asked questions</h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-sm border border-[#D0D6DE] bg-white px-5 py-4 open:ring-1 open:ring-[#0069A3]/30"
                >
                  <summary className="cursor-pointer font-semibold text-[#002244] list-none flex justify-between items-center gap-4">
                    {item.question}
                    <span className="text-[#0069A3] text-lg shrink-0 group-open:rotate-45 transition-transform" aria-hidden>
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-[#3D4A5C] leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTASection variant="research-proposal" />
      </main>
      <Footer />
    </div>
  );
}
