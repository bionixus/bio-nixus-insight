/**
 * Hardcoded SEO blog post: /blog/womens-health-market-research-gcc
 * Article-waves brief, wave 7, article 19. Target question:
 * "women's health market research GCC (fertility, menopause, PCOS)"
 * Every number has an inline source. PCOS and menopause figures come from small,
 * mostly online or clinic samples in Saudi Arabia; the caveats are stated in the text.
 */
import { buildWaveArticle, citeFrom, figureHtml, type WaveFigure, type WaveReference } from '@/data/articleWaves/buildWaveArticle';

const SLUG = 'womens-health-market-research-gcc';

const REFERENCES: WaveReference[] = [
  {
    id: 'doh-merck',
    label:
      'Department of Health – Abu Dhabi. Department of Health – Abu Dhabi and Merck Partner to Advance Fertility Education, Research and Innovation. 23 October 2026.',
    url: 'https://www.doh.gov.ae/en/news/doh-and-merck-partner-to-advance-fertility-education-research-and-innovation',
  },
  {
    id: 'wam-mubadala',
    label:
      'Emirates News Agency (WAM). Mubadala Bio, Marcyrl Group sign strategic partnership to localize women’s health, fertility and respiratory therapies in UAE. 21 October 2026.',
    url: 'https://www.wam.ae/en/article/c2us57k-mubadala-bio-marcyrl-group-sign-strategic',
  },
  {
    id: 'wam-seha',
    label: 'Emirates News Agency (WAM). PureHealth launches Emirati reproductive medicine fellowship. 8 October 2026.',
    url: 'https://www.wam.ae/en/article/c2n1ibv-purehealth-launches-emirati-reproductive-medicine',
  },
  {
    id: 'uae-art-law',
    label:
      'UAE Federal Decree-Law No. 17 of 2023 amending Federal Law No. 7 of 2019 concerning Medical Assistance for Reproduction.',
    url: 'https://uaephl.mohap.gov.ae/admin/Attachment/Download?id=3c163d72-04b0-4b1a-9e5b-6fdd27e13d00&response=download',
  },
  {
    id: 'dha-art',
    label:
      'Dubai Health Authority. Standards for Assisted Reproductive Medicine Center. Issued 31 December 2025, effective 28 February 2026.',
    url: 'https://dha.gov.ae/uploads/032026/Standards%20for%20Assisted%20Reproductive%20Medicine%20Center202634255.pdf',
  },
  {
    id: 'thiqa',
    label: 'Department of Health – Abu Dhabi. Thiqa reimbursement policy for obesity medications. 11 June 2025.',
    url: 'https://www.doh.gov.ae/-/media/9F8611EF0B7841F28E2AAE4614327F59.ashx',
  },
  {
    id: 'frontiers-me',
    label:
      'Prevalence of Common Gynecological Conditions in the Middle East: Systematic Review and Meta-Analysis. Frontiers in Reproductive Health, 2021.',
    url: 'https://www.frontiersin.org/journals/reproductive-health/articles/10.3389/frph.2021.661360/full',
  },
  {
    id: 'heliyon',
    label:
      'Prevalence of polycystic ovary syndrome among infertile women in the Gulf Cooperation Council (GCC) countries: A systematic review and meta-analysis. Heliyon, 2024.',
    url: 'https://www.cell.com/heliyon/fulltext/S2405-8440(24)16634-0',
  },
  {
    id: 'frontiers-ep',
    label:
      'Prevalence of polycystic ovary syndrome and determinants of knowledge among women in the eastern province Saudi Arabia. Frontiers in Reproductive Health, 2026.',
    url: 'https://www.frontiersin.org/journals/reproductive-health/articles/10.3389/frph.2026.1780568/full',
  },
  {
    id: 'jeddah',
    label:
      'Knowledge and associated factors regarding menopause and hormone replacement therapy among women in Jeddah, Saudi Arabia: a cross-sectional study. Journal of Herbal Medicine, March 2026.',
    url: 'https://doi.org/10.1016/j.hermed.2026.101095',
  },
  {
    id: 'kap-saudi',
    label:
      'Women’s knowledge, attitude, and practice toward menopause and hormone replacement therapy in Saudi Arabia. International Journal of Medicine in Developing Countries.',
    url: 'https://doi.org/10.24911/ijmdc.51-1704542468',
  },
  {
    id: 'qassim',
    label:
      'Knowledge and Attitude of Saudi Women Towards Postmenopausal Symptoms and Management: A Cross-Sectional Study From Qassim Region, Saudi Arabia. Cureus, March 2026.',
    url: 'https://doi.org/10.7759/cureus.106096',
  },
  {
    id: 'rak',
    label: 'Dubai Global News. RAK Hospital Brings Women Together to Break the Silence around Menopause. 31 October 2026.',
    url: 'https://www.dubaiglobalnews.com/en/2026/10/31/general_news-en/354900/',
  },
  {
    id: 'banat',
    label: 'MENA Startup Digest. Banat Nareng Launches Comprehensive Health Ecosystem For Women in Saudi Arabia. 23 October 2026.',
    url: 'https://menastartupdigest.com/banat-nareng-launches-comprehensive-health-ecosystem-for-women-in-saudi-arabia/',
  },
];

const cite = citeFrom(REFERENCES);

const FIGURES: WaveFigure[] = [
  {
    src: `/images/blog/${SLUG}-autumn-2026.webp`,
    alt: 'Timeline of Gulf women’s health moves in autumn 2026: Banat Nareng platform in Riyadh in September, SEHA reproductive medicine fellowship on 8 October, Mubadala Bio and Marcyrl deal on 21 October, Abu Dhabi DoH and Merck fertility MoU on 23 October',
    caption: 'Four women’s health moves in Saudi Arabia and Abu Dhabi between September and late October 2026.',
    width: 800,
    height: 560,
  },
  {
    src: `/images/blog/${SLUG}-pcos-estimates.webp`,
    alt: 'Bar chart of PCOS estimates: 8.9% in Middle East population studies, 18.8% in Gulf Arab states, 19.9% symptom-based in Saudi Arabia’s Eastern Province and 30.0% among GCC women with infertility',
    caption: 'PCOS estimates in the region. Each bar counts a different population with different criteria, so they show a range, not a trend.',
    width: 800,
    height: 640,
  },
];

const SUMMARY_HTML = `<p>Abu Dhabi’s Department of Health signed a fertility agreement with Merck on 23 October 2026, two days after Mubadala Bio agreed to localise a portfolio of women’s health and fertility medicines in the UAE (${cite('doh-merck', 'DoH Abu Dhabi')}; ${cite('wam-mubadala', 'WAM')}). Gulf health systems are putting money and policy behind women’s health.</p>
<p>The evidence on what women in the region need has not kept up. Most prevalence figures for PCOS and menopause come from small Saudi surveys, and almost none describe how doctors treat these conditions or what payers cover.</p>
<p>This briefing covers fertility, menopause and PCOS in turn, and sets out the primary research a launch team should run. It is part of our <a href="/healthcare-market-research">healthcare market research</a> work; for the regional view, see <a href="/healthcare-market-research/gcc">healthcare market research in the GCC</a>.</p>`;

const NARRATIVE_HTML = `<h2 id="what-happened-in-abu-dhabi-this-autumn">What happened in Abu Dhabi this autumn</h2>
<p>The Department of Health (DoH) and Merck signed a memorandum of understanding at the Abu Dhabi Future Health Summit. It covers professional education, research and innovation in fertility and reproductive medicine (${cite('doh-merck', 'DoH Abu Dhabi')}).</p>
<p>A central part is a planned Fertility and IVF Centre of Excellence and Academy in the UAE, along with fellowships for Emirati clinicians (${cite('doh-merck', 'DoH Abu Dhabi')}).</p>
<p>At the same summit, Mubadala Bio signed with Marcyrl Group to localise women’s health, fertility and respiratory products. The women’s health portfolio spans fertility, pregnancy and childbirth, plus common gynaecological and hormonal conditions (${cite('wam-mubadala', 'WAM')}).</p>
<p>Earlier in October, PureHealth launched a three-year fellowship in reproductive medicine and surgery for Emirati physicians, at SEHA fertility centres in Al Ain and Abu Dhabi (${cite('wam-seha', 'WAM')}).</p>
${figureHtml(FIGURES[0])}
<p>The private sector is moving too. In September, Riyadh-based Banat Nareng launched an Arabic and English women’s health platform covering stages from puberty to menopause (${cite('banat', 'MENA Startup Digest')}).</p>

<h2 id="fertility-rules-shape-the-patient-pool">Fertility rules shape the patient pool</h2>
<p>Assisted reproduction is tightly regulated in the Gulf, and the rules decide who can be treated. Each country has its own law, so a fertility launch needs a country-by-country check.</p>
<p>In the UAE, federal law allows treatment only in licensed centres. Spouses must show an official document proving their marriage, and both must give written consent at the centre (${cite('uae-art-law', 'UAE Decree-Law 17/2023')}).</p>
<p>The 2023 amendment added a route for non-Muslim couples without a marriage certificate, provided they declare the child’s parentage (${cite('uae-art-law', 'UAE Decree-Law 17/2023')}). Each emirate may also regulate the field under its own local rules.</p>
<p>One requirement matters for research. Centres must explain the financial cost and the realistic pregnancy rate for similar cases at that centre (${cite('uae-art-law', 'UAE Decree-Law 17/2023')}). Patients can therefore compare centres on success rates and price, which makes clinic choice a researchable decision.</p>
<p>Dubai added its own layer. The Dubai Health Authority’s standards for assisted reproductive medicine centres took effect on 28 February 2026, and centres must hold a licence before offering services (${cite('dha-art', 'Dubai Health Authority')}).</p>

<h2 id="menopause-is-known-but-rarely-treated">Menopause is known but rarely treated</h2>
<p>Menopausal hormone therapy (MHT, also called HRT) relieves symptoms such as hot flushes. Saudi survey data suggests few women use it.</p>
<p>In a 2026 study of 302 women aged 35 to 65 in Jeddah, only 11.3% had been prescribed MHT. Participants knew the basics of menopause but had limited awareness of treatment (${cite('jeddah', 'Journal of Herbal Medicine')}).</p>
<p>A national online survey of 1,083 women found that 56.1% had poor knowledge of the benefits and risks of HRT, and social media was the most common information source (${cite('kap-saudi', 'IJMDC')}). Three in four respondents were aged 18 to 34, so the sample skews young.</p>
<p>In Qassim, 48.1% of 401 women at primary care centres had severe postmenopausal symptoms. The authors found gaps in recognising symptoms and in discussing them with doctors (${cite('qassim', 'Cureus')}).</p>
<p>Providers are starting to fill the gap. RAK Hospital in Ras Al Khaimah launched a menopause community called Evolve in September and held its first gathering on 23 October, offering assessments and HRT where clinically appropriate (${cite('rak', 'Dubai Global News')}).</p>
<p>These are convenience and online samples from one country. They show low treatment use, but not why: whether women decline therapy, doctors do not offer it, or the cost blocks it.</p>

<h2 id="pcos-links-fertility-to-obesity-coverage">PCOS links fertility to obesity coverage</h2>
<p>Polycystic ovary syndrome (PCOS) is a hormonal condition that affects ovulation and is a common cause of infertility. Estimates in the Gulf vary widely.</p>
<p>A 2021 meta-analysis of Middle East studies put PCOS at 8.9% under NIH criteria, rising to 18.8% in Gulf Arab states. The authors rated the evidence quality low (${cite('frontiers-me', 'Frontiers 2021')}).</p>
<p>Among GCC women with infertility, a 2024 meta-analysis of seven studies found a pooled prevalence of 30.0% (${cite('heliyon', 'Heliyon')}). A 2026 online survey in Saudi Arabia’s Eastern Province found 19.9% met a symptom-based definition, while 16.7% had a formal diagnosis (${cite('frontiers-ep', 'Frontiers 2026')}).</p>
${figureHtml(FIGURES[1])}
<p>Abu Dhabi ties PCOS to payer coverage. Under the Thiqa policy for obesity medicines, a patient with a BMI of 30 to 34.9 needs a complication to qualify, and “PCOS with infertility (confirmed by gynecologist)” is on the list (${cite('thiqa', 'Thiqa policy')}). We covered the policy in our <a href="/blog/thiqa-obesity-reimbursement-abu-dhabi">Thiqa obesity reimbursement briefing</a>.</p>
<p>The prescriber, though, must be an obesity-certified family or internal medicine doctor, or a specialist such as an endocrinologist (${cite('thiqa', 'Thiqa policy')}). A woman with PCOS may therefore need a gynaecologist to confirm it and a different doctor to prescribe. That hand-off is exactly what a research study can map.</p>

<h2 id="designing-research-women-will-take-part-in">Designing research women will take part in</h2>
<p>Fertility, menopause and PCOS are private topics everywhere. Women who worry about disclosure to family or employers may decline to take part, so the design has to earn their trust.</p>
<p>Use female moderators and interviewers for patient work, and offer remote interviews where privacy at home is limited. Run fieldwork in Arabic and English, because the patient population includes nationals and expatriates.</p>
<p>Keep consent and data handling explicit. Avoid recruitment routes that could reveal a fertility treatment or diagnosis to others, and put patient studies through ethics review before fieldwork.</p>
<p>On the physician side, survey gynaecologists, endocrinologists and fertility specialists separately. They see the same patient at different points and make different decisions.</p>

<h2 id="why-sizing-reports-are-not-enough">Why sizing reports are not enough</h2>
<p>Search for women’s health market research in the GCC and most results are paid market sizing reports. They estimate revenue by product class.</p>
<p>They rarely say who diagnoses, who prescribes, what the payer reimburses or why women do not seek care. With treatment uptake as low as the menopause data suggests, those are the questions that decide a launch forecast.</p>

<h2 id="our-take">Our take</h2>
<p>Abu Dhabi is building fertility capacity: training, a centre of excellence and local supply. That will grow the treated population, but through regulated centres with published success rates and strict eligibility rules.</p>
<p>Menopause looks like the larger unmet need and the thinner evidence base. PCOS sits between the two, and in Abu Dhabi it already has a coverage rule that crosses specialties.</p>

<h2 id="what-to-watch">What to watch</h2>
<p>Watch for details of the DoH and Merck centre of excellence, and for the first products Mubadala Bio and Marcyrl localise. Watch for new fertility regulation in Saudi Arabia and the other GCC states. And watch revisions to the Thiqa obesity policy, which is due for periodic review.</p>

<h2 id="what-womens-health-teams-should-do-now">What women’s health teams should do now</h2>
<p>Use female interviewers for every patient conversation, in Arabic and English.</p>
<p>Survey gynaecologists and endocrinologists separately, and add fertility specialists for IVF products.</p>
<p>Run patient research with privacy safeguards: ethics review, explicit consent and discreet recruitment.</p>
<p>Map coverage by payer, starting with Thiqa’s PCOS criterion and the cash market for fertility and menopause care.</p>
<p>Compare countries rather than treating the GCC as one market, because fertility law and coverage differ.</p>
<p>If you need GCC women’s health insight, BioNixus can design culturally sensitive patient and physician research; see our guide to <a href="/blog/pharmaceutical-healthcare-market-research-gcc">pharmaceutical and healthcare market research in the GCC</a>. We were founded in 2012, have worked with 118 clients in 48 countries, and run GCC fieldwork from our Cairo office with our field teams in the UAE and Saudi Arabia.</p>`;

export const WOMENS_HEALTH_GCC_ARTICLE = buildWaveArticle({
  briefNumber: 19,
  wave: 7,
  slug: SLUG,
  authorName: 'Laura McConaughey',
  metaTitle: 'Women’s Health Market Research GCC: Fertility, PCOS 2026',
  metaDescription:
    'Women’s health market research in the GCC: new fertility deals, PCOS in Thiqa obesity cover and low menopause therapy use. What to ask doctors and patients.',
  displayTitle: 'Gulf health systems are investing in fertility care, and drugmakers lack data on what women need',
  displaySubtitle: 'What to research before launching women’s health products in the GCC.',
  breadcrumbLabel: 'Women’s health market research GCC',
  excerpt:
    'Abu Dhabi signed fertility deals with Merck and Mubadala Bio in October 2026, but evidence on PCOS, menopause and fertility care in the Gulf is thin. What the data shows and what to research.',
  focusKeyword: 'Women’s health market research GCC',
  keywords: [
    'women’s health market research GCC',
    'fertility market research UAE',
    'menopause market research Saudi Arabia',
    'PCOS market research GCC',
    'IVF market UAE',
    'Thiqa PCOS obesity coverage',
    'gynecologist survey GCC',
  ],
  publishedIso: '2026-11-01T12:00:00.000Z',
  updatedIso: '2026-11-01T12:00:00.000Z',
  dateLabel: '1 Nov 2026',
  category: 'Market Research',
  sanityCategory: 'Healthcare Market Research',
  contentSilo: 'healthcare',
  country: 'GCC',
  tags: ['Women’s Health', 'Fertility', 'Menopause', 'PCOS', 'Physician Research', 'UAE', 'Saudi Arabia', 'GCC'],
  coverImageAlt: 'BioNixus navy and gold cover for women’s health market research in the GCC',
  heroImageAlt: 'Navy and gold BioNixus artwork for Gulf women’s health research: fertility, menopause and PCOS',
  figures: FIGURES,
  references: REFERENCES,
  summaryHtml: SUMMARY_HTML,
  narrativeHtml: NARRATIVE_HTML,
  faq: [
    {
      question: 'What happened in Gulf women’s health in October 2026?',
      answer:
        'Abu Dhabi’s Department of Health signed a fertility MoU with Merck on 23 October, Mubadala Bio agreed to localise Marcyrl’s women’s health and fertility medicines, and PureHealth launched a fertility fellowship.',
    },
    {
      question: 'Who can receive IVF in the UAE?',
      answer:
        'Under federal law, married couples with an official marriage document and joint written consent, in a licensed centre. Since 2023, non-Muslim couples without a marriage certificate may apply if they declare the child’s parentage.',
    },
    {
      question: 'How common is PCOS in the GCC?',
      answer:
        'Estimates range widely: 18.8% in population studies from Gulf Arab states, and 30.0% among GCC women with infertility. Most studies are small and the evidence quality is low.',
    },
    {
      question: 'Does Thiqa cover obesity medicines for women with PCOS?',
      answer:
        'Yes, under conditions. A Thiqa patient with a BMI of 30 to 34.9 qualifies if she has PCOS with infertility confirmed by a gynaecologist, and an obesity-certified doctor prescribes.',
    },
    {
      question: 'How many Saudi women use menopausal hormone therapy?',
      answer:
        'Few, on current data. In a 2026 Jeddah study of 302 women aged 35 to 65, only 11.3% had been prescribed it. National survey data shows poor knowledge of its benefits and risks.',
    },
    {
      question: 'How should women’s health research be run in the Gulf?',
      answer:
        'With female interviewers, Arabic and English fieldwork, ethics review, explicit consent and discreet recruitment, and separate samples of gynaecologists, endocrinologists and fertility specialists.',
    },
  ],
  steps: {
    title: 'What women’s health teams should do now',
    description: 'Five research steps before a women’s health launch in the GCC.',
    items: [
      { name: 'Use female interviewers', description: 'For every patient conversation, in Arabic and English.' },
      { name: 'Survey gynaecologists and endocrinologists', description: 'Separately, adding fertility specialists for IVF products.' },
      { name: 'Run patient research with privacy safeguards', description: 'Ethics review, explicit consent and discreet recruitment.' },
      { name: 'Map coverage by payer', description: 'Start with Thiqa’s PCOS criterion and the cash market for fertility and menopause care.' },
      { name: 'Compare countries', description: 'Fertility law and coverage differ across the GCC.' },
    ],
  },
  about: ['Women’s health market research', 'Fertility', 'Menopause', 'Polycystic ovary syndrome', 'GCC'],
  ctaSection: {
    title: 'Planning a women’s health launch in the GCC?',
    description: 'BioNixus can design culturally sensitive research with Gulf gynaecologists, endocrinologists and patients.',
    buttonText: 'GCC healthcare market research',
    buttonUrl: 'https://www.bionixus.com/blog/pharmaceutical-healthcare-market-research-gcc',
  },
  relatedPostSlugs: ['thiqa-obesity-reimbursement-abu-dhabi', 'pharmaceutical-healthcare-market-research-gcc'],
});
