import StrategicServicePage from '@/pages/templates/StrategicServicePage';

export default function HeorConsulting() {
  return (
    <StrategicServicePage
      title="HEOR Consulting Services: Health Economics & Outcomes Research"
      description="BioNixus HEOR consulting — economic models, RWE studies, payer evidence and value dossiers for pharma & medtech across emerging and developed markets."
      canonicalUrl="https://www.bionixus.com/heor-consulting"
      breadcrumbLabel="HEOR Consulting"
      h1="HEOR Consulting — GCC, Middle East & Europe"
      intro={`Health economics and outcomes research is no longer a back-office technical exercise. Across the Gulf Cooperation Council, MENA region, and European markets, payers, hospital formulary committees, and national HTA bodies are demanding robust, locally anchored evidence before they will list or reimburse a new therapy. A global model built on Western epidemiology and cost assumptions fails the moment a Saudi, Emirati, or Kuwaiti committee opens the spreadsheet and checks whether the denominators reflect their own patient populations.\n\nBioNixus provides end-to-end HEOR consulting services calibrated to the markets where decisions actually get made. Our economists and evidence strategists work directly with medical affairs, market access, and commercial teams to construct budget impact models that use local prevalence data, treatment mix assumptions drawn from primary physician research, and pricing consistent with the target formulary. The result is an evidence package that holds up under cross-examination — not just in internal review, but in front of payer delegates, formulary chairs, and procurement boards.\n\nOur scope spans the full HEOR lifecycle. Early in asset development we help clients define the value story: which comparators matter, which endpoints are payer-relevant, and which patient subgroups will drive the economic argument. As the product moves toward registration we build cost-effectiveness models and budget impact tools. At launch we convert model outputs into value dossiers, HTA submission chapters, and payer-facing visual aids that can be used by field access teams in one-to-one conversations with institutional decision-makers.\n\nGeographically, BioNixus covers Saudi Arabia, the UAE, Kuwait, Qatar, Bahrain, Oman, Egypt, Jordan, Lebanon, and select European markets where our clients need reimbursement bridging strategies. We have experience with NCBE processes in Saudi Arabia, the UAE's DOH and DHA formulary pathways, Gulf-wide tender cycles, and the evidence standards that European HTA bodies apply to submissions from MENA-based sponsors. Whether you are launching a specialty biologic, a biosimilar, a medical device, or an in-vitro diagnostic, our HEOR team builds the economic case with the rigour the market demands and the clarity your internal stakeholders can act on.`}
      links={[
        { to: '/heor-consulting-saudi-arabia', label: 'HEOR Consulting Saudi Arabia', primary: true },
        { to: '/uae-market-access-research', label: 'UAE Market Access Research', primary: true },
        { to: '/real-world-evidence', label: 'Real-World Evidence Studies' },
        { to: '/gcc-market-access-guide', label: 'GCC Market Access Guide' },
        { to: '/market-research-healthcare', label: 'Healthcare Market Research Services' },
        { to: '/contact', label: 'Scope your HEOR engagement' },
        { to: '/services', label: 'Full service portfolio' },
        { to: '/methodology', label: 'Our research methodology' },
      ]}
      bullets={[
        'Budget impact model development using locally sourced GCC and MENA epidemiology, treatment mix data, and formulary-consistent pricing assumptions validated through primary physician research.',
        'Cost-effectiveness and cost-utility analysis designed to meet payer and HTA evidence thresholds across Saudi Arabia, UAE, Kuwait, Qatar, and broader MENA markets.',
        'Value dossier construction that integrates clinical evidence, real-world data, and economic modelling into a single coherent narrative aligned to committee evaluation criteria.',
        'HTA submission support including evidence gap analysis, dossier structuring, committee response preparation, and resubmission strategy after initial rejection.',
        'Payer evidence strategy workshops that align internal medical affairs, market access, and finance teams on a shared economic narrative before external submission.',
        'Comparative effectiveness research design incorporating local standard-of-care data gathered through qualitative and quantitative primary market research with treating physicians.',
        'Budget impact scenario modelling for tender and procurement negotiations, including sensitivity analyses on uptake curves, market share assumptions, and alternative pricing scenarios.',
        'Value communication materials development — executive summary decks, payer visual aids, and field access briefing documents converted from technical model outputs into decision-ready formats.',
        'Reimbursement strategy advisory covering formulary positioning, listing tier negotiation, risk-sharing arrangement design, and outcomes-based contract frameworks for GCC markets.',
        'Cross-market HEOR evidence adaptation for clients needing to align a global evidence package with the specific evidentiary expectations of multiple GCC and European payer audiences simultaneously.',
      ]}
      decisionPoints={[
        {
          title: 'Local assumptions determine credibility',
          body: 'When a formulary committee or national HTA body reviews an economic submission, the first question is always whether the underlying assumptions reflect their own healthcare system. A model populated with local Saudi or UAE prevalence figures, drawn from primary research with practising physicians rather than published Western registries, carries substantially more weight than a global template with country adjustments bolted on at the last minute. BioNixus embeds primary market research into every HEOR project we run. Before a single model cell is built, our qualitative and quantitative research teams have spoken to the physicians, pharmacists, and formulary advisors who will ultimately evaluate the submission. We use those conversations to calibrate treatment pathways, line-of-therapy assumptions, resource utilisation rates, and patient subgroup definitions. The economics that emerge are not assumptions — they are findings. That distinction is the difference between a model that survives committee scrutiny and one that is sent back for clarification.',
        },
        {
          title: 'One robust case outperforms a broad claim',
          body: 'It is tempting to build an HEOR argument that covers every indication, every patient subgroup, and every possible competitor simultaneously. In practice, diffuse economic arguments fail to move committees because no single member of the formulary panel sees a clear, specific case for action. BioNixus recommends a focused approach: identify the indication with the strongest clinical evidence base, the most favourable local epidemiology, and the highest unmet need signal from primary physician research, then build an economic case for that indication that is fully auditable from first principles. Sensitivity analyses can explore adjacent scenarios, but the base case should be so clearly defined that any committee member can retrace the logic in ten minutes. This disciplined approach builds institutional trust. Once one indication is listed, the credibility asset created by a rigorous first submission makes subsequent extensions substantially easier to advance through the same decision-making bodies.',
        },
        {
          title: 'Evidence must serve every internal audience',
          body: 'Health economics outputs are too often produced for a single technical audience — the market access team — and then struggle to gain traction with medical affairs, commercial leadership, or regional finance. BioNixus designs every HEOR engagement so that the core evidence package can be translated into formats that serve all internal stakeholders simultaneously. The technical model and full dossier satisfy the market access and regulatory teams. An executive summary with scenario-based decision trees equips the commercial and finance leadership. A simplified visual aid deck gives field access managers the talking points they need for institutional visits. Arabic-language versions of key outputs ensure that locally hired access teams can use the materials without depending on headquarters translation. When every function that touches reimbursement is working from the same underlying evidence, the submission process moves faster and the response to committee feedback is more coherent and consistent.',
        },
      ]}
      metrics={[
        {
          label: 'Model delivery',
          value: '3–4 weeks',
          detail: 'Typical timeline from objective lock and primary data collection to first draft decision model, including local assumption validation with in-market physicians.',
        },
        {
          label: 'Market coverage',
          value: '10+ markets',
          detail: 'Active HEOR project experience across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman, Egypt, Jordan, and select European HTA markets.',
        },
        {
          label: 'Output format',
          value: 'Payer-ready',
          detail: 'Every engagement delivers both the technical model and translated stakeholder outputs — committee summaries, access briefs, and Arabic-language versions where required.',
        },
      ]}
      regionalLandscapes={[
        {
          region: 'United States',
          paragraphs: [
            'The US has no centralized, government-run HTA body equivalent to NICE. Coverage and reimbursement decisions are made independently by commercial insurers, state Medicaid programs, pharmacy benefit managers (PBMs), and integrated delivery networks, each applying its own formulary and utilization-management criteria.',
            'The Institute for Clinical and Economic Review (ICER), a non-governmental organization, has become the closest equivalent to a de facto value-assessment body — its comparative-effectiveness reports and value-based price benchmarks are widely referenced by payers even though ICER has no regulatory authority and its recommendations are not binding. Manufacturers submit clinical and economic evidence to US payers primarily using the AMCP Format for Formulary Submissions (currently Version 4.1), which also supports Pre-Approval Information Exchange so payers can begin coverage planning before launch.',
          ],
        },
        {
          region: 'United Kingdom',
          paragraphs: [
            'The National Institute for Health and Care Excellence (NICE) is the primary HTA body for England and Wales, and its technology appraisals directly drive NHS coverage decisions. Assessment centers substantially on cost-effectiveness expressed as cost per quality-adjusted life year (QALY) gained, alongside clinical-expert input, patient testimony, and real-world evidence.',
            'NICE confirmed that, starting in April 2026, its cost-effectiveness threshold range rises for the first time in twenty years, from £20,000–£30,000 per QALY to £25,000–£35,000 per QALY — a change NICE itself estimates will result in three to five additional medicines being recommended per year.',
          ],
        },
        {
          region: 'Germany',
          paragraphs: [
            'Germany\'s AMNOG process, in force since 2011, requires every new medicine with a novel active substance to undergo an early benefit assessment as soon as it enters the market. The manufacturer submits a dossier to the Federal Joint Committee (G-BA) at launch, arguing added benefit relative to a G-BA-defined comparator therapy.',
            'The Institute for Quality and Efficiency in Health Care (IQWiG) — or the G-BA itself for orphan drugs — independently assesses that dossier, typically within about three months. After a stakeholder hearing, the G-BA issues a binding resolution on the extent of added benefit, and the manufacturer then negotiates a reimbursement price with the National Association of Statutory Health Insurance Funds within six months, or an arbitration board sets the price if no agreement is reached. Germany\'s pricing and rebate framework continues to evolve, so current guidance should always be checked against the latest G-BA and GKV-Spitzenverband publications.',
          ],
        },
        {
          region: 'Saudi Arabia / GCC',
          paragraphs: [
            'Saudi Arabia has moved from an informal, price-taker system to a formal HTA framework under its 2024 HTA Guidelines, jointly governed by the Saudi Food and Drug Authority (SFDA) and the Council of Cooperative Health Insurance (CCHI). As of July 2025, submission of a formal economic evaluation dossier — a budget impact analysis and/or a cost-effectiveness, cost-minimization, cost-utility, or cost-benefit analysis — became mandatory for high-cost or high-priority medicines.',
            'Once priced through SFDA and reviewed under this HTA process, a product can be submitted for the Unified Drug List/Unified Drug Formulary managed by CCHI and the Ministry of Health, and — once listed — becomes eligible for public-sector procurement through NUPCO\'s centralized tendering mechanism. Saudi Arabia does not currently publish an official government-mandated cost-per-QALY threshold; an academic estimate of SAR 50,000–75,000 per QALY circulates in the literature as an informal reference point, but the researchers behind it are explicit that it is not derived from a Saudi-specific willingness-to-pay study and has not been formally adopted as policy. Other GCC markets (UAE, Kuwait, Qatar) do not yet operate a comparable formal national HTA/QALY-threshold process and typically rely on formulary- and tender-level review instead.',
          ],
        },
      ]}
      faqs={[
        {
          question: 'Is there a centralized HTA body in the US comparable to NICE?',
          answer: 'No. The US has no single government-run HTA authority; coverage and reimbursement decisions are made independently by commercial insurers, state Medicaid programs, PBMs, and health systems. The Institute for Clinical and Economic Review (ICER), a non-governmental organization, has become the closest equivalent — its value-based price benchmarks and comparative-effectiveness reports are widely referenced by payers, including major PBMs, even though ICER has no regulatory authority and its recommendations are not binding.',
        },
        {
          question: 'What is the AMCP dossier, and when do US payers request it?',
          answer: 'The AMCP Format for Formulary Submissions (currently Version 4.1) is the standard template manufacturers use to present clinical and economic evidence to US managed care organizations, PBMs, and health systems for formulary and coverage decisions. Version 4.1 also introduced templates supporting Pre-Approval Information Exchange (PIE), letting manufacturers share evidence on products or indications still under FDA review so large payers can begin coverage and budget planning ahead of launch.',
        },
        {
          question: 'How does NICE evaluate cost-effectiveness in the UK?',
          answer: 'NICE\'s independent appraisal committees assess a new medicine primarily through cost-effectiveness expressed as cost per quality-adjusted life year (QALY) gained relative to current standard of care, but the process also weighs clinical-expert opinion, patient and carer testimony, and real-world evidence of how treatments perform outside trial conditions. From April 2026, NICE\'s cost-effectiveness threshold range rises from £20,000–£30,000 to £25,000–£35,000 per QALY, the first change to this range in two decades.',
        },
        {
          question: 'What changed with NICE\'s cost-effectiveness threshold in 2026?',
          answer: 'NICE confirmed its long-standing £20,000–£30,000 per QALY threshold range moves to £25,000–£35,000 per QALY starting April 2026. A higher threshold makes it mathematically easier for a therapy priced above the old ceiling to be judged cost-effective, which NICE itself projects will lead to three to five additional medicine recommendations per year. Robust real-world and comparative evidence remains central to a successful appraisal regardless of the threshold shift.',
        },
        {
          question: 'What is AMNOG in Germany, and what does it require from a manufacturer?',
          answer: 'AMNOG is the German law, in force since 2011, requiring every newly launched medicine with a novel active ingredient to undergo an early benefit assessment. The manufacturer must submit a dossier to the G-BA at launch demonstrating added benefit versus a G-BA-defined comparator; IQWiG (or the G-BA itself for orphan drugs) independently assesses that dossier, and the G-BA then issues a binding benefit determination that becomes the basis for the subsequent price negotiation with the German statutory health insurance association.',
        },
        {
          question: "What is IQWiG's role versus the G-BA's in the German assessment process?",
          answer: "IQWiG (the Institute for Quality and Efficiency in Health Care) is the scientific body that independently evaluates the manufacturer's dossier and produces an expert report on the drug's added benefit — it does not make the final decision. The G-BA (Federal Joint Committee) is the decision-making body: it defines the appropriate comparator therapy, considers IQWiG's report alongside a stakeholder hearing, and issues the binding resolution that determines the drug's benefit category and therefore its price-negotiation position.",
        },
        {
          question: 'Does Saudi Arabia have a formal HTA process?',
          answer: 'Yes — Saudi Arabia introduced formal HTA Guidelines in 2024, jointly administered by the SFDA and CCHI, and as of July 2025 a formal economic evaluation dossier (budget impact analysis and/or a cost-effectiveness/cost-utility/cost-minimization/cost-benefit analysis) became mandatory for high-cost or high-priority medicines. This sits alongside SFDA pricing review and precedes formulary listing (Unified Drug List/Unified Drug Formulary via CCHI/MOH) and NUPCO-tendered procurement.',
        },
        {
          question: 'Does Saudi Arabia publish an official cost-per-QALY threshold?',
          answer: 'No official government-mandated threshold has been published. An academic estimate of SAR 50,000–75,000 per QALY circulates in the literature and industry commentary as an informal reference point, but the researchers behind that estimate are explicit that it is not based on a Saudi-specific willingness-to-pay study and has not been formally adopted as policy — submissions should treat it as indicative context, not a binding target.',
        },
      ]}
      serviceType="HEOR Consulting"
      areaServed={['Saudi Arabia', 'UAE', 'Kuwait', 'Qatar', 'Bahrain', 'Oman', 'GCC', 'Middle East', 'MENA', 'Egypt', 'United States', 'United Kingdom', 'Germany']}
    />
  );
}
