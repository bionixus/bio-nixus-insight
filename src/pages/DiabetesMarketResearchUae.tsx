import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { buildBreadcrumbSchema, buildFAQSchema } from '@/lib/seo/schemas';
import {
  ExecutiveDecisionBlock,
  PremiumHero,
  ProofMetricGrid,
} from '@/components/page/PremiumPageSections';

const pageUrl = 'https://www.bionixus.com/diabetes-market-research-uae';

const faqItems = [
  {
    question: 'How large is the UAE diabetes pharmaceutical market and what are the key product categories?',
    answer:
      'The UAE diabetes pharmaceutical market is one of the most commercially significant therapy area markets in the GCC, driven by a national adult diabetes prevalence of approximately 19% (IDF Diabetes Atlas 2023) — among the highest globally, ranking the UAE fourth in the world by age-adjusted adult diabetes prevalence. The total diabetes pharmaceutical market spans insulin (basal, bolus, and premixed analogue insulins), oral antidiabetic agents (metformin, DPP-4 inhibitors, SGLT2 inhibitors), GLP-1 receptor agonists (including the rapidly growing semaglutide segment), and newer combination products. Key commercial players include Novo Nordisk (dominant in insulin and GLP-1 agonists with Ozempic, Victoza, Rybelsus, and the insulin portfolio), Sanofi (Lantus, Toujeo, and Soliqua), Eli Lilly (Trulicity, and the insulin Humalog/Basaglar portfolio), AstraZeneca (Bydureon, Farxiga/dapagliflozin — a major SGLT2 inhibitor player), and Merck/MSD (Januvia/sitagliptin — a leading DPP-4 inhibitor). The biosimilar insulin segment is growing, with Indian manufacturers (Biocon/Mylan) and European biosimilar entrants competing on price in the MOH and DHA formulary segments. GLP-1 receptor agonists are experiencing the fastest growth, driven by the dual indication of diabetes management and weight loss — the UAE's high obesity rates amplify this commercial opportunity beyond the diabetes indication alone.',
  },
  {
    question: 'How does the UAE payer landscape specifically affect diabetes drug access?',
    answer:
      'UAE diabetes drug access operates through three distinct formulary channels, each with different coverage criteria and therapeutic substitution policies. The DHA Essential Drug List covers insured Dubai residents: metformin, sulfonylureas, and older insulin formulations are broadly listed; branded GLP-1 agonists and newer branded SGLT2 inhibitors are on the DHA formulary but may require prior authorisation or are restricted to specialist prescribers (endocrinologists or diabetologists) rather than general practitioners. The DOH/Daman Abu Dhabi formulary is similar in structure but historically more conservative on biosimilar insulin substitution: Daman has approved biosimilar insulins for listing but maintains prescriber authority over biologic-biosimilar switching in insulin. The MOHAP National Formulary covers public hospital facilities in the northern emirates and has a more cost-focused formulary committee that tends to prefer generic and biosimilar alternatives over branded originator products wherever bioequivalence is established. For novel, high-cost diabetes agents — such as the fixed-ratio GLP-1/basal insulin combinations or the GLP-1/GIP agonist tirzepatide (Mounjaro, Eli Lilly) — UAE formulary access requires a full payer dossier including clinical evidence of superiority over listed alternatives, budget impact modelling, and payer advisory board validation of the target population definition.',
  },
  {
    question: 'What does treatment pathway research in UAE diabetes reveal about GP versus specialist prescribing dynamics?',
    answer:
      'Treatment pathway research in the UAE diabetes market consistently reveals a complex two-tier prescribing system. General practitioners and family medicine physicians in polyclinic settings manage the majority of newly diagnosed and stable type 2 diabetes patients — particularly in the primary care polyclinic networks that have expanded significantly under both DHA and DOH primary care development programmes. GPs typically initiate treatment with metformin and make first-line oral antidiabetic agent choices. However, treatment intensification decisions — switching to injectable therapy, initiating GLP-1 agonists or SGLT2 inhibitors for cardioprotective or renal-protective indications, or managing poorly controlled patients — are predominantly made by endocrinologists and diabetologists at the specialist level. The GP-to-specialist referral trigger is typically documented HbA1c above 8–9% despite 3–6 months of oral therapy, or the presence of cardiovascular or renal comorbidities that activate the guideline-recommended use of SGLT2 inhibitors or GLP-1 agonists. BioNixus treatment pathway research maps this referral trigger landscape through physician surveys (n=50–100 GPs, n=40–60 endocrinologists) and patient journey IDIs, identifying the specific decision points where commercial intervention has the highest impact.',
  },
  {
    question: 'How does Ramadan fasting affect UAE diabetes research design and patient behaviour findings?',
    answer:
      'Ramadan fasting is a clinically and commercially significant context for diabetes management in the UAE and across GCC markets. An estimated 50–80% of Muslim patients with type 2 diabetes choose to fast during Ramadan despite medical advice, creating a well-documented period of increased clinical risk — hypoglycaemia risk with sulfonylureas and insulin, dehydration risk with SGLT2 inhibitors, and adherence disruption across multiple drug classes. For pharmaceutical market research, Ramadan has three important implications. First, patient journey research must include the Ramadan dimension explicitly: how patients adjust their medication regimens, how physicians advise patients about fasting management, and where the current standard of care is inadequate creates important positioning opportunity for drugs with Ramadan-specific management data (such as basal insulins with low hypoglycaemia risk profiles). Second, HCP research should include Ramadan-specific prescribing decision scenarios: which drugs GPs and endocrinologists prefer for patients who insist on fasting, and what clinical support they use for Ramadan fasting guidance. Third, research timing matters: conducting patient adherence research during Ramadan will capture non-representative behaviour; scheduling studies immediately after Eid to capture the behavioural reflection period is typically more productive for understanding normal treatment adherence patterns.',
  },
  {
    question: 'What is the feasibility of recruiting UAE diabetes patients for qualitative research?',
    answer:
      'Patient recruitment for UAE diabetes qualitative research is feasible but requires careful design for several UAE-specific reasons. The UAE diabetes patient population is approximately 88% expatriate, reflecting the national demographic structure: a large portion of patients are South Asian (Indian, Pakistani, Bangladeshi), Arab (Egyptian, Levantine, Arab expatriate), and East Asian, with a smaller proportion of UAE nationals. This demographic diversity means that Arabic and Urdu/Hindi language IDI and FGD instruments are required alongside English for representative patient recruitment — English-only research will systematically under-represent South Asian patients, who are disproportionately prevalent in the UAE diabetes patient population due to genetic predisposition. UAE national patients (approximately 12% of the diabetes patient population) are typically recruited through DHA or DOH clinical network referral rather than open panel recruitment, as UAE nationals are more likely to be engaged with public healthcare networks and SEHA facilities. Patient recruitment through clinic partnerships — diabetes clinics within SEHA hospitals, DHA polyclinic networks, and major private hospital endocrinology departments — is the most effective channel, typically achieving 70–80% recruitment success from clinic referral compared to 20–30% from panel or social media outreach. A target of 20–30 patient IDIs across 4–6 weeks is achievable through clinic network recruitment for most common diabetes sub-populations.',
  },
  {
    question: 'Is the UAE moving toward outcomes-based pricing for high-cost diabetes drugs?',
    answer:
      'The UAE is at an early but definite stage of movement toward outcomes-based pricing (OBP) for high-cost diabetes products, particularly within the Abu Dhabi DOH and Daman framework. Daman has begun exploring managed-entry agreements for selected high-cost products, and DOH health economics advisors have expressed interest in outcomes-linkage mechanisms for products where real-world outcomes in UAE patients may differ from trial outcomes in predominantly non-UAE populations. For GLP-1 agonists and SGLT2 inhibitors — where the clinical evidence for cardiovascular and renal outcomes is strong in international trial populations but UAE real-world data are limited — a credible OBP framework would require UAE-specific RWE commitments. BioNixus has conducted payer advisory boards in Abu Dhabi in which Daman medical directors explicitly identified outcomes-based access as a preferred model for novel high-cost diabetes agents. For pharmaceutical teams considering UAE access strategy for premium diabetes products, BioNixus recommends including an OBP feasibility assessment as part of payer primary research — specifically probing whether DOH/Daman decision-makers would be open to an outcomes-linkage arrangement and what outcomes metrics they would specify.',
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Diabetes Market Research UAE',
    serviceType: 'Diabetes pharmaceutical market research and access strategy in the UAE',
    areaServed: ['United Arab Emirates', 'Dubai', 'Abu Dhabi'],
    provider: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
    description:
      'BioNixus delivers diabetes market research in the UAE covering HCP prescribing behaviour, patient journey research, payer landscape analysis, and competitive intelligence across insulin, oral antidiabetics, GLP-1 agonists, and SGLT2 inhibitors.',
  },
  buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'UAE Pharmaceutical Market Research', href: '/uae-pharmaceutical-market-research' },
    { name: 'Diabetes Market Research UAE', href: '/diabetes-market-research-uae' },
  ]),
  buildFAQSchema(faqItems),
];

export default function DiabetesMarketResearchUae() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Diabetes Market Research UAE | BioNixus</title>
        <meta
          name="description"
          content="Diabetes market research UAE: HCP prescribing behaviour, patient journey research, payer landscape analysis, and competitive intelligence across insulin, GLP-1 agonists, and SGLT2 inhibitors. UAE has 19% adult diabetes prevalence — the 4th highest globally."
        />
        <link rel="canonical" href={pageUrl} />
        {jsonLd.map((schema, index) => (
          <script key={`dm-uae-schema-${index}`} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>
      <Navbar />
      <main>
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'UAE Pharmaceutical Market Research', href: '/uae-pharmaceutical-market-research' },
            { name: 'Diabetes Market Research UAE', href: '/diabetes-market-research-uae' },
          ]}
        />
        <PremiumHero
          h1="Diabetes Market Research UAE"
          intro="The UAE has one of the world's highest diabetes burdens — approximately 19% adult prevalence (IDF Diabetes Atlas 2023) — and a rapidly evolving pharmaceutical market spanning insulin, GLP-1 agonists, SGLT2 inhibitors, and DPP-4 inhibitors. BioNixus delivers the HCP, patient, and payer research that pharmaceutical teams need to navigate UAE diabetes prescribing dynamics, formulary access, and competitive positioning."
          links={[
            { to: '/uae-pharmaceutical-market-research', label: 'UAE pharmaceutical market research' },
            { to: '/patient-journey-research-gcc', label: 'Patient journey research GCC' },
            { to: '/uae-market-access-research', label: 'UAE market access research' },
            { to: '/uae-pricing-reimbursement-strategy', label: 'UAE pricing and reimbursement strategy' },
            { to: '/contact', label: 'Request diabetes research scope' },
          ]}
        />

        <ExecutiveDecisionBlock
          heading="UAE diabetes market: decision framework"
          points={[
            {
              title: 'Why it matters',
              body: 'UAE diabetes prevalence at 19% of adults (IDF 2023) — 4th highest globally — creates a large, commercially significant patient population. Rapid entry of GLP-1 agonists, biosimilar insulins, and SGLT2 inhibitors is reshaping the treatment landscape faster than most commercial intelligence systems can track.',
            },
            {
              title: 'What the evidence says',
              body: 'BioNixus UAE diabetes market research identifies that treatment intensification decisions, GLP-1 adoption, and formulary access are the three commercial dynamics with the most decision-relevant information gaps for most pharma teams operating in UAE diabetes.',
            },
            {
              title: 'What to do next',
              body: 'Commission an integrated UAE diabetes market study combining HCP prescribing behaviour research, patient journey IDIs, and payer landscape mapping. Expect 10–14 weeks and $75,000–$200,000 for a multi-method programme providing comprehensive commercial intelligence.',
            },
          ]}
        />

        <section className="section-padding py-10">
          <div className="container-wide max-w-5xl mx-auto space-y-10">

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                UAE diabetes burden and commercial context
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The United Arab Emirates faces one of the most severe diabetes burdens of any country globally. According to the International Diabetes Federation Diabetes Atlas 2023, approximately 19% of UAE adults have diabetes — equivalent to approximately 1.1 million people out of a total adult population of 6.5 million. The UAE's ranking as 4th highest in the world by age-adjusted adult diabetes prevalence (after Kuwait, Mauritius, and Kiribati) reflects the confluence of genetic predisposition among the South Asian expatriate workforce, sedentary lifestyle patterns, high caloric dietary habits, and the demographic skew toward working-age adults who have been exposed to risk factors for a decade or more. The obesity rate in the UAE — approximately 31% of adults by BMI criteria — is a key driver of both type 2 diabetes incidence and the recently expanded commercial opportunity in GLP-1 receptor agonists, which are approved for both glycaemic control and weight management.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The prediabetes burden is equally significant: an estimated additional 17–19% of UAE adults have impaired glucose tolerance or impaired fasting glucose, representing a large population at high conversion risk. This prediabetes segment is commercially relevant for pharmaceutical companies developing prevention-focused pharmacological interventions, as UAE health authorities — particularly DHA's Wellbeing and Community Health division — have launched national diabetes prevention programmes that create a policy environment supportive of early pharmacological intervention research.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Key players in the UAE diabetes pharmaceutical market
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The UAE diabetes pharmaceutical market is commercially competitive across multiple product segments. Understanding the competitive position of each major player is a prerequisite for meaningful market research design.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground leading-relaxed">
                <li>
                  <strong>Novo Nordisk</strong> holds the dominant position in both the insulin market (Levemir, Tresiba, NovoLog/NovoRapid, NovoMix) and the GLP-1 agonist class (Victoza/liraglutide, Ozempic/semaglutide injectable, Rybelsus/semaglutide oral). The semaglutide portfolio has experienced exceptional uptake in UAE driven by dual diabetes and obesity indications, and Novo Nordisk's UAE market presence is significant. Their sales force and medical affairs investment in endocrinology is the largest of any diabetes company in the market.
                </li>
                <li>
                  <strong>Sanofi</strong> competes primarily through the basal insulin segment (Lantus/glargine, Toujeo/glargine U300) and the fixed-ratio combination Soliqua (insulin glargine/lixisenatide). Sanofi faces increasing biosimilar pressure on Lantus, with Biosimilar glargines from Biocon/Mylan and Sandoz gaining formulary listings in the UAE public sector.
                </li>
                <li>
                  <strong>Eli Lilly</strong> participates in the GLP-1 class (Trulicity/dulaglutide), the insulin market (Humalog/lispro, Basaglar biosimilar glargine), and has launched tirzepatide (Mounjaro) as a GLP-1/GIP dual agonist — the highest-efficacy glucose-lowering agent available in the UAE as of 2024, with significant positioning opportunity but premium pricing requiring robust payer dossier support.
                </li>
                <li>
                  <strong>AstraZeneca</strong> is the leading SGLT2 inhibitor player through Farxiga/dapagliflozin, which has achieved DHA and DOH formulary listing with specific cardiorenal benefit indications. The DAPA-HF and DAPA-CKD trial data are well-recognised among UAE cardiologists and nephrologists and have expanded the relevant prescriber base beyond endocrinology.
                </li>
                <li>
                  <strong>Merck/MSD</strong> holds the dominant DPP-4 inhibitor position through Januvia/sitagliptin and its fixed-dose combinations, which are broadly listed across DHA, DOH, and MOHAP formularies and represent the most widely prescribed branded oral antidiabetic class in the UAE.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Treatment pathway research: GP to specialist referral dynamics
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Understanding UAE diabetes treatment pathway dynamics is essential for any commercial team seeking to optimise prescribing behaviour interventions. The UAE operates a two-tier diabetes management system: general practitioners and family medicine physicians in polyclinic settings manage the majority of newly diagnosed and stable type 2 diabetes patients, while endocrinologists and diabetologists in hospital-based outpatient departments handle complex, uncontrolled, or complication-heavy cases.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                First-line therapy — metformin initiation and early oral combination therapy — is predominantly driven by GP prescribing. Treatment intensification decisions, representing the highest commercial value inflection point, typically occur at specialist level. BioNixus treatment pathway research consistently identifies that the following clinical triggers drive GP-to-specialist referral in UAE: HbA1c above 8.5% despite 3–6 months of dual oral therapy; initiation of injectable therapy (insulin or GLP-1 agonist); the presence of documented cardiovascular disease, heart failure, or chronic kidney disease (activating SGLT2 inhibitor or GLP-1 agonist use under the 2024 ADA/EASD guidelines); and patient preference for specialist care when injectable therapy is initiated. The referral pathway research also identifies a significant gap: many UAE GPs report discomfort with initiating GLP-1 agonists due to lack of training and experience, defaulting to DPP-4 inhibitor or SGLT2 inhibitor additions instead. This GP comfort gap is a commercially relevant finding: it suggests that GP-directed education and support programmes for GLP-1 initiation could meaningfully expand prescribing beyond specialist-only audiences.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                HCP prescribing behaviour research: GLP-1 adoption and SGLT2 positioning
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Two product class questions dominate UAE diabetes HCP research in the current competitive period: GLP-1 agonist adoption barriers among endocrinologists and GPs, and the positioning of SGLT2 inhibitors across diabetes, cardiovascular, and renal disease indications.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3">GLP-1 adoption barriers</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Despite strong clinical evidence for HbA1c reduction, weight loss, and cardiovascular outcomes, GLP-1 agonist adoption in UAE faces several adoption barriers that quantitative and qualitative HCP research consistently identifies. Injection anxiety among patients — particularly in the South Asian patient population where self-injection is culturally stigmatised — leads to high rates of patient refusal when GLP-1 injectable therapy is proposed, creating a prescribing reluctance loop among GPs who have experienced repeated refusals. Cost and reimbursement barriers: GLP-1 agonists are listed on DHA and DOH formularies but often require endocrinologist specialist prescribing, limiting GP access in the primary care setting. Side effect concerns: nausea and gastrointestinal intolerance with GLP-1 agonists is well documented in clinical trials and is perceived by UAE GPs as a significant real-world tolerability barrier. HCP research exploring these barriers — through both quantitative physician surveys and qualitative IDIs with high-prescribing and low-prescribing endocrinologists — produces the commercial insights needed to design targeted intervention programmes.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3">SGLT2 inhibitor cross-specialty positioning</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SGLT2 inhibitors have undergone a significant positioning shift in UAE clinical practice following the publication of the DAPA-HF (heart failure), DAPA-CKD (chronic kidney disease), EMPA-REG OUTCOME, and CANVAS cardiovascular outcomes trial data. Cardiologists and nephrologists — not endocrinologists — are increasingly the primary prescribers of SGLT2 inhibitors for their cardiorenal protective indications, independent of glycaemic control. BioNixus HCP research in UAE cardiologist and nephrologist panels maps this cross-specialty prescribing dynamic, identifying the proportion of cardiologists who prescribe SGLT2 inhibitors as cardioprotective agents in non-diabetic patients, the level of awareness of SGLT2 inhibitor cardiorenal data among nephrologists, and the barriers to SGLT2 inhibitor initiation by non-endocrinologist specialists.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Patient journey research: adherence barriers and patient experience
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Patient journey research in UAE diabetes investigates the patient experience from initial diagnosis through disease progression, focusing on the adherence barriers, unmet needs, and patient decision-making processes that shape treatment outcomes and healthcare utilisation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Key adherence barriers identified in BioNixus UAE diabetes patient research include: injection anxiety among South Asian and Arab patients who are newly initiated on insulin or GLP-1 agonists; Ramadan fasting disruption of medication regimens, which affects Muslim patients — approximately 70–80% of the UAE diabetes patient population — for a defined annual period with significant clinical risk; cost sensitivity for self-pay patients in the private healthcare system who find GLP-1 agonist out-of-pocket costs (AED 500–900 per month) burdensome; language barriers affecting health literacy and understanding of treatment instructions among patients with limited English or formal education; and cultural concerns about disease disclosure to family or employer, which can delay help-seeking and impede medication adherence through concealment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Patient journey research for UAE diabetes is typically conducted through in-depth interviews (IDIs) — 45–60 minutes per patient — in Arabic (for Arab and UAE national patients), Hindi or Urdu (for South Asian patients), or English (for other nationalities). A target of 20–30 patient IDIs per study provides sufficient thematic saturation for most patient journey research questions. Recruitment through DHA or DOH polyclinic networks, endocrinology outpatient departments at major hospitals, and diabetes support group referrals typically achieves recruitment targets within 3–5 weeks.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Payer research and health technology assessment context
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                UAE payer research for diabetes products must account for the different evidence requirements and formulary committee priorities of DHA, DOH/Daman, and MOHAP. The payer landscape is evolving: DOH Abu Dhabi has begun incorporating outcomes-based access discussions for high-cost diabetes agents, and Daman medical directors have expressed interest in managed-entry agreements for premium GLP-1 agonists and GLP-1/GIP dual agonists such as tirzepatide (Mounjaro). BioNixus payer research for UAE diabetes studies typically includes 8–12 qualitative interviews with formulary committee members, Daman medical directors, DHA formulary committee members, and MOHAP pricing committee representatives, producing a current map of evidence requirements, price sensitivity thresholds, and payer openness to managed-entry or outcomes-based access arrangements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Research design, cost, and timeline
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A comprehensive UAE diabetes market study combining quantitative HCP surveys, qualitative patient IDIs, and payer interviews runs over <strong>10–14 weeks</strong> and costs between <strong>$75,000 and $200,000</strong> depending on scope.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                <li><strong>Quantitative HCP survey (n=50–100 GPs and endocrinologists):</strong> $20,000–$40,000 / 4–6 weeks</li>
                <li><strong>Qualitative patient IDIs (n=20–30 across 3–4 sub-groups):</strong> $20,000–$35,000 / 4–5 weeks</li>
                <li><strong>Payer landscape interviews (n=8–12):</strong> $15,000–$25,000 / 4–5 weeks</li>
                <li><strong>Competitive intelligence synthesis:</strong> $10,000–$20,000 / 2–3 weeks</li>
                <li><strong>Integrated commercial insights report:</strong> $10,000–$20,000 / 2–3 weeks</li>
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-muted/20 p-5">
              <h2 className="text-lg font-semibold text-foreground mb-3">UAE diabetes market research proof points</h2>
              <div className="grid md:grid-cols-3 gap-3">
                <article className="rounded-lg border border-border bg-card p-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">UAE adult diabetes prevalence</p>
                  <p className="text-xl font-semibold text-foreground">~19%</p>
                  <p className="text-xs text-muted-foreground mt-1">IDF Diabetes Atlas 2023. 4th highest globally by age-adjusted adult prevalence.</p>
                </article>
                <article className="rounded-lg border border-border bg-card p-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Programme timeline</p>
                  <p className="text-xl font-semibold text-foreground">10–14 weeks</p>
                  <p className="text-xs text-muted-foreground mt-1">Multi-method diabetes study: HCP surveys, patient IDIs, and payer interviews from brief to final report.</p>
                </article>
                <article className="rounded-lg border border-border bg-card p-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Programme cost range</p>
                  <p className="text-xl font-semibold text-foreground">$75K–$200K</p>
                  <p className="text-xs text-muted-foreground mt-1">Comprehensive UAE diabetes market study. Individual research modules available from $15,000.</p>
                </article>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/uae-pharmaceutical-market-research" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                UAE pharmaceutical market research
              </Link>
              <Link to="/patient-journey-research-gcc" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                Patient journey research GCC
              </Link>
              <Link to="/uae-market-access-research" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                UAE market access research
              </Link>
              <Link to="/uae-pricing-reimbursement-strategy" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                UAE pricing and reimbursement strategy
              </Link>
              <Link to="/contact" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                Request diabetes research scope
              </Link>
            </div>

            <section className="mt-8">
              <h2 className="text-lg font-semibold text-foreground mb-3">Diabetes market research UAE FAQs</h2>
              <div className="space-y-3">
                {faqItems.map((item) => (
                  <details key={item.question} className="rounded-xl border border-border bg-card p-4">
                    <summary className="cursor-pointer font-semibold text-foreground">{item.question}</summary>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
