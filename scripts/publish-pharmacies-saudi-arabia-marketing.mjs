/**
 * Creates the Sanity blogPost "Pharmacies in Saudi Arabia: Market Research & Marketing Automation"
 * SEO-optimized + conversion-focused article driving traffic to BioNixus Market Research.
 *
 * Requires repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (write)
 * Run: node scripts/publish-pharmacies-saudi-arabia-marketing.mjs
 * Sync existing: node scripts/publish-pharmacies-saudi-arabia-marketing.mjs --sync-existing
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@sanity/client'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const SLUG = 'pharmacies-saudi-arabia-market-research-marketing-automation'
const COVER_FILENAME = 'pharmacies-saudi-arabia-marketing-cover.png'
const ARTICLE_H1 =
  'Market Research & Marketing Automation for Pharmacies in Saudi Arabia: How to Grow Retail Sales and Customer Satisfaction'
const ARTICLE_EXCERPT =
  'A comprehensive guide to leveraging market research and marketing automation to grow pharmacy retail sales in Saudi Arabia. Covers key players (Nahdi, Al-Dawaa, United Pharmacies), SFDA compliance, Vision 2030 opportunities, and a case study showing 40% sales growth. Learn how BioNixus helps pharmacy chains make data-driven decisions.'
const SEO_META_DESCRIPTION =
  'How pharmacies in Saudi Arabia use market research and marketing automation to boost retail sales by 40%. Case study with Nahdi, Al-Dawaa insights. Contact BioNixus for expert pharmacy market research in KSA.'
const OG_DESCRIPTION =
  'Complete guide to pharmacy market research and marketing automation in Saudi Arabia. Key players, Vision 2030 opportunities, SFDA compliance, and proven strategies that drive 40% sales growth. Expert insights from BioNixus.'

function loadDotEnv() {
  const envPath = path.join(root, '.env')
  if (!fs.existsSync(envPath)) return
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    const eq = t.indexOf('=')
    if (eq === -1) continue
    const k = t.slice(0, eq).trim()
    let v = t.slice(eq + 1).trim()
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1)
    }
    if (!process.env[k]) process.env[k] = v
  }
}

loadDotEnv()

const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production'
const token = process.env.SANITY_TOKEN || process.env.SANITY_API_TOKEN || process.env.VITE_SANITY_API_TOKEN
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01'

function withKeys(items) {
  return items.map((item, i) => ({
    ...item,
    _key: item._key || `k-${i}-${Math.random().toString(36).slice(2, 9)}`,
  }))
}

function buildBodyHtml() {
  return `
<h2 id="introduction">Introduction to the Saudi Arabian Pharmacy Market</h2>
<p>The Saudi Arabian pharmacy market has experienced significant growth in recent years, driven by a combination of increasing healthcare expenditure, an expanding population, and a heightened focus on health and wellness. As of 2022, the market size was valued at approximately <strong>SAR 30 billion</strong>, with projections indicating continued growth in the coming years. This growth is attributed to the government's ambitious <strong>Vision 2030</strong> plan, which aims to diversify the economy and improve the quality of healthcare services across the Kingdom.</p>
<p>Key players in the Saudi Arabian pharmacy market include major chains such as <a href="https://www.nahdionline.com/" target="_blank" rel="noopener">Nahdi Medical Company</a>, <a href="https://www.al-dawaa.com/english/" target="_blank" rel="noopener">Al-Dawaa Pharmacies</a>, and <a href="https://unitedpharmacy.sa/en/" target="_blank" rel="noopener">United Pharmacies</a>. These chains dominate the landscape, offering a wide range of pharmaceutical products and services. Additionally, the market is seeing an influx of international pharmaceutical brands, further intensifying competition and driving innovation like <a href="https://www.asterpharmacy.ae/" target="_blank" rel="noopener">Aster Pharmacies</a> and also new competitors including <a href="https://www.innovaonline.sa/en" target="_blank" rel="noopener">Innova</a> and <a href="https://lemon.sa/" target="_blank" rel="noopener">Lemon Pharmacies</a>.</p>
<p>Despite its promising growth, the Saudi Arabian pharmacy market faces unique challenges. Regulatory compliance is stringent, with the <strong>Saudi Food and Drug Authority (SFDA)</strong> enforcing rigorous standards to ensure the safety and efficacy of pharmaceutical products. Pharmacies must also navigate complex pricing regulations and reimbursement policies, which can impact profitability. Moreover, the market is characterized by high customer expectations for quality service and personalized care, necessitating a robust customer relationship management strategy.</p>
<p>Opportunities abound in this dynamic market, particularly in the realms of <strong>market research</strong> and <strong>marketing automation</strong>. Market research enables pharmacies to gain deep insights into consumer behavior, preferences, and emerging trends, allowing them to tailor their offerings and marketing strategies effectively. Meanwhile, marketing automation streamlines and enhances customer engagement efforts, ensuring timely and relevant communication. Together, these tools are essential for pharmacies aiming to boost retail sales and customer satisfaction in Saudi Arabia.</p>
<p><em>Need expert guidance on pharmacy market research in Saudi Arabia? <a href="https://www.bionixus.com/contact">Contact BioNixus</a> for a free consultation on how data-driven insights can transform your pharmacy's performance.</em></p>

<h2 id="market-research-concepts">Understanding Market Research: Key Concepts and Benefits</h2>
<p>Market research is a systematic process of gathering, analyzing, and interpreting information about a market, including information about the target audience, competitors, and the industry as a whole. For pharmacies in Saudi Arabia, understanding the intricacies of market research can be pivotal to enhancing retail sales and customer satisfaction. This research enables pharmacies to identify customer needs, understand market trends, and stay ahead of competitive dynamics.</p>
<p>There are several methods of conducting market research:</p>
<ul>
<li><strong>Surveys</strong> — A popular tool for collecting quantitative data directly from customers. They can provide insights into customer preferences, satisfaction levels, and purchasing behavior.</li>
<li><strong>Focus groups</strong> — Allow for qualitative analysis by engaging a small group of participants in discussions to explore their perceptions and experiences in greater depth.</li>
<li><strong>Data analysis</strong> — Analysis of sales records, customer feedback, and social media interactions can reveal patterns and trends that are not immediately obvious.</li>
</ul>
<p>Pharmacies can leverage these methods to gain a comprehensive understanding of their market environment. Identifying customer needs is crucial, as it allows pharmacies to tailor their product offerings and services to meet those needs effectively. For example, if market research indicates a growing demand for wellness products, a pharmacy can expand its inventory to include a wider range of vitamins and supplements.</p>
<p>Market research also helps pharmacies stay attuned to market trends. By monitoring shifts in consumer behavior, pharmacies can adapt their marketing strategies and product lines to stay relevant. Furthermore, understanding competitive dynamics enables pharmacies to differentiate themselves from their competitors. They can identify gaps in the market that they can fill or areas where their competitors are excelling and learn from their strategies.</p>
<p>The benefits of informed decision-making and strategic planning based on market insights are manifold. Pharmacies that utilize market research can make data-driven decisions that enhance their operational efficiency, improve customer satisfaction, and ultimately drive sales growth. In a competitive market like Saudi Arabia, the ability to anticipate and respond to market demands can be a significant advantage.</p>

<h2 id="marketing-automation">Marketing Automation: Transforming Customer Engagement</h2>
<p>Marketing automation has emerged as a pivotal strategy for revolutionizing customer engagement in the pharmacy sector. By leveraging various automated tools and techniques, pharmacies can streamline their marketing efforts, enhance customer interaction, and ultimately drive increased sales and satisfaction. Among the primary tools in this domain are email marketing, social media campaigns, and personalized promotions, each playing a crucial role in optimizing customer outreach and engagement.</p>
<h3>Email Marketing</h3>
<p>Email marketing remains one of the most effective marketing automation tools for pharmacies. Through automated email campaigns, pharmacies can send timely and personalized updates to their customers, including information on new product launches, special promotions, and health tips. These targeted communications not only keep customers informed but also foster a sense of connection and loyalty, as they receive relevant content tailored to their needs.</p>
<h3>Social Media Campaigns</h3>
<p>Social media campaigns are another powerful tool in the arsenal of marketing automation. By automating social media posts and interactions, pharmacies can maintain a consistent online presence without the need for continuous manual effort. Automated social media tools allow pharmacies to schedule posts, respond to customer inquiries, and track engagement metrics, ensuring that their social media strategy is both efficient and effective. This consistent engagement helps to build a strong online community and drives traffic to the pharmacy's website or physical store.</p>
<h3>Personalized Promotions</h3>
<p>Personalized promotions are crucial for enhancing customer satisfaction and driving sales. Marketing automation enables pharmacies to analyze customer data and behavior, allowing them to create targeted promotions that resonate with individual customers. For example, a pharmacy can send personalized discount offers based on a customer's purchase history or health needs. By providing relevant and timely promotions, pharmacies can increase the likelihood of repeat purchases and foster long-term customer loyalty.</p>

<h2 id="case-study">Case Study: 40% Sales Growth Through Market Research and Automation</h2>
<p>In the dynamic retail landscape of Saudi Arabia, the pharmacy sector has increasingly recognized the importance of market research and marketing automation to enhance sales and customer satisfaction. This case study examines a prominent pharmacy chain that embarked on a transformative journey by integrating these strategies into their operational framework.</p>
<h3>Research Phase</h3>
<p>The initial step involved conducting surveys and focus group discussions with a diverse customer base. This qualitative data was supplemented by quantitative analysis of sales records and purchasing patterns. The market research revealed several key findings:</p>
<ul>
<li>A significant demand for specialized health supplements</li>
<li>A preference for personalized service</li>
<li>A notable trend towards online shopping among younger demographics</li>
</ul>
<p>These insights provided a clear direction for the pharmacy's strategic adjustments.</p>
<h3>Automation Implementation</h3>
<p>To address the identified needs, the pharmacy implemented a robust marketing automation system. This system integrated CRM tools with automated marketing workflows, enabling the pharmacy to deliver personalized communications and promotions. For instance, customers interested in health supplements began receiving tailored newsletters and special offers. Automated reminders for prescription refills and health check-ups were also introduced, enhancing the overall customer experience.</p>
<h3>Challenges Overcome</h3>
<p>Throughout the implementation process, the pharmacy faced several challenges: integration of new technology with existing systems required meticulous planning and staff training. Additionally, maintaining data privacy and complying with regulatory standards were critical concerns addressed through stringent data governance policies.</p>
<h3>Results</h3>
<p>The outcomes were remarkable:</p>
<ul>
<li><strong>40% increase in retail sales</strong> within the first six months</li>
<li><strong>Significant improvement in customer satisfaction scores</strong>, measured through feedback surveys</li>
<li>Customers appreciating the personalized service and timely communication</li>
</ul>
<p><em>Want to achieve similar results for your pharmacy chain? <a href="https://www.bionixus.com/contact">BioNixus Market Research</a> specializes in pharmacy and healthcare market studies in Saudi Arabia and the GCC region. <strong>Book a free strategy call today.</strong></em></p>

<h2 id="best-practices">Best Practices for Pharmacies: Integrating Market Research and Marketing Automation</h2>
<h3>Step 1: Comprehensive Market Research</h3>
<p>Pharmacies should gather data on customer preferences, purchasing behaviors, and competitive analysis. This can be achieved through surveys, focus groups, and analyzing sales data. The insights gained will form the foundation of a data-driven marketing strategy.</p>
<h3>Step 2: Select the Right Automation Tools</h3>
<p>Pharmacies should look for platforms that offer features such as customer segmentation, personalized email campaigns, and analytics. Tools like HubSpot, Mailchimp, or Salesforce Marketing Cloud can be effective. Choosing the right tool is crucial for streamlining marketing efforts and ensuring that campaigns are targeted and relevant.</p>
<h3>Step 3: Develop Your Automation Strategy</h3>
<p>Create a comprehensive plan that outlines the objectives, target audience, and key performance indicators (KPIs). Focus on creating personalized content that addresses the specific needs and preferences of customers. This could include personalized email offers, automated reminders for prescription refills, and targeted promotions based on purchasing history.</p>
<h3>Step 4: Continuous Improvement</h3>
<p>Regularly review and analyze the performance of marketing campaigns. Metrics such as open rates, click-through rates, and conversion rates should be monitored closely. Implementing A/B testing can help determine the most effective strategies.</p>
<h3>Step 5: Measure Success</h3>
<p>Establish clear KPIs and benchmarks to evaluate the effectiveness of marketing efforts. This enables identification of areas for improvement and ensures strategies are aligned with business goals.</p>

<h2 id="future-outlook">The Future of Pharmacies in Saudi Arabia</h2>
<p>The landscape of the pharmacy industry in Saudi Arabia is evolving rapidly, driven by advancements in technology and shifting consumer expectations. Market research and marketing automation are pivotal in navigating this dynamic environment.</p>
<p>Looking ahead, the future of pharmacies in Saudi Arabia appears promising, yet challenging:</p>
<ul>
<li><strong>Digital transformation</strong> demands that pharmacies continuously adapt and innovate</li>
<li><strong>Artificial intelligence and big data analytics</strong> will further refine market research processes and enhance the precision of marketing automation</li>
<li><strong>Evolving regulatory environment</strong> with greater emphasis on quality and safety standards requires vigilance and compliance</li>
</ul>
<p>Pharmacies that invest in these areas will be better positioned to anticipate market changes and respond proactively, ensuring sustained growth and customer loyalty.</p>

<h2 id="why-bionixus">Why BioNixus for Pharmacy Market Research in Saudi Arabia?</h2>
<p>BioNixus is the leading healthcare and pharmaceutical market research consultancy serving Saudi Arabia and the broader GCC region. With deep expertise in:</p>
<ul>
<li><strong>Quantitative &amp; qualitative research</strong> — Physician surveys, patient insights, and payer studies tailored to the Saudi healthcare landscape</li>
<li><strong>Competitive intelligence</strong> — Benchmarking against major pharmacy chains (Nahdi, Al-Dawaa, United, Aster) with actionable recommendations</li>
<li><strong>Marketing automation strategy</strong> — Designing CRM and marketing workflows that drive measurable sales growth</li>
<li><strong>SFDA-aware study design</strong> — Ensuring compliance with local regulatory frameworks</li>
<li><strong>Arabic-capable field execution</strong> — Native understanding of Saudi consumer culture and healthcare dynamics</li>
</ul>
<p>Whether you're an established pharmacy chain looking to optimize operations, a new entrant evaluating the Saudi market, or a pharmaceutical brand seeking distribution insights, BioNixus delivers precision market intelligence that translates into growth.</p>

<h2 id="contact-cta">Ready to Transform Your Pharmacy's Performance?</h2>
<p><strong>Get a free market research consultation</strong> from BioNixus — the healthcare market research experts trusted by leading pharmaceutical companies across the Middle East.</p>
<ul>
<li>📧 <a href="mailto:admin@bionixus.com">admin@bionixus.com</a></li>
<li>📞 <a href="tel:+447727666682">+44 7727 666 682</a></li>
<li>🌐 <a href="https://www.bionixus.com/contact">Book a Strategy Call</a></li>
</ul>
<p><em>BioNixus has helped pharmacy chains and pharmaceutical companies across Saudi Arabia, UAE, and the GCC achieve measurable growth through data-driven market research and strategic automation. Let us do the same for you.</em></p>
`
}

function buildSharedContent() {
  const bodyHtml = buildBodyHtml()
  return {
    title: ARTICLE_H1.slice(0, 200),
    bodyHtml,
    excerpt: ARTICLE_EXCERPT,
    executiveSummary: withKeys([
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'The Saudi Arabian pharmacy market (SAR 30 billion, 2022) presents massive opportunities for chains that leverage market research and marketing automation. This article explores how leading pharmacies are achieving 40% sales growth through data-driven strategies, and how BioNixus Market Research helps pharmacy businesses across the Kingdom make smarter decisions.',
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys([
      { heading: 'Introduction to the Saudi Arabian Pharmacy Market', anchor: 'introduction' },
      { heading: 'Understanding Market Research: Key Concepts and Benefits', anchor: 'market-research-concepts' },
      { heading: 'Marketing Automation: Transforming Customer Engagement', anchor: 'marketing-automation' },
      { heading: 'Case Study: 40% Sales Growth Through Research and Automation', anchor: 'case-study' },
      { heading: 'Best Practices for Pharmacies', anchor: 'best-practices' },
      { heading: 'The Future of Pharmacies in Saudi Arabia', anchor: 'future-outlook' },
      { heading: 'Why BioNixus for Pharmacy Market Research', anchor: 'why-bionixus' },
      { heading: 'Contact BioNixus', anchor: 'contact-cta' },
    ]),
    faq: withKeys([
      {
        question: 'What is the size of the pharmacy market in Saudi Arabia?',
        answer:
          'The Saudi Arabian pharmacy market was valued at approximately SAR 30 billion in 2022, with strong projected growth driven by Vision 2030 healthcare reforms, increasing population, and rising health awareness.',
      },
      {
        question: 'Who are the major pharmacy chains in Saudi Arabia?',
        answer:
          'The dominant pharmacy chains in Saudi Arabia include Nahdi Medical Company (largest by store count), Al-Dawaa Pharmacies, United Pharmacies, Aster Pharmacies, and newer entrants like Innova and Lemon Pharmacies.',
      },
      {
        question: 'How can market research help pharmacies increase sales in Saudi Arabia?',
        answer:
          'Market research helps pharmacies identify customer needs, understand purchasing behavior, spot emerging trends (e.g., wellness products demand among youth), and differentiate from competitors. Case studies show pharmacies achieving up to 40% sales growth by acting on research insights.',
      },
      {
        question: 'What marketing automation tools work best for pharmacies?',
        answer:
          'Effective pharmacy marketing automation tools include CRM platforms like HubSpot and Salesforce Marketing Cloud for customer segmentation, email automation for prescription refill reminders and health tips, and social media schedulers for consistent engagement. The key is personalization based on customer data.',
      },
      {
        question: 'How does BioNixus help pharmacy businesses in Saudi Arabia?',
        answer:
          'BioNixus provides comprehensive healthcare market research services including quantitative and qualitative studies, competitive intelligence against major chains, marketing automation strategy, SFDA-compliant study design, and Arabic-capable field execution. We help pharmacy chains and pharmaceutical companies make data-driven decisions for measurable growth.',
      },
      {
        question: 'What are the regulatory challenges for pharmacies in Saudi Arabia?',
        answer:
          'The Saudi Food and Drug Authority (SFDA) enforces rigorous standards for pharmaceutical products. Pharmacies must navigate complex pricing regulations, reimbursement policies, and data privacy requirements. Working with a research partner familiar with SFDA frameworks ensures compliance while gathering actionable insights.',
      },
      {
        question: 'How long does a pharmacy market research project take in Saudi Arabia?',
        answer:
          'Timeline varies by methodology and scope. Simple consumer surveys may complete in 3-4 weeks, while comprehensive multi-phase studies involving focus groups, mystery shopping, and competitive analysis typically run 8-12 weeks. BioNixus provides clear timelines during the scoping phase.',
      },
    ]),
  }
}

async function uploadImage(client, filePath, alt, filename) {
  let buf = fs.readFileSync(filePath)
  const ext = path.extname(filename).toLowerCase()
  const isPng = ext === '.png'
  if (isPng) {
    buf = await sharp(buf)
      .resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 88, progressive: true })
      .toBuffer()
  } else {
    buf = await sharp(buf)
      .resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 88, progressive: true })
      .toBuffer()
  }
  const asset = await client.assets.upload('image', buf, {
    contentType: 'image/jpeg',
    filename: filename.replace(/\.png$/, '.jpg'),
  })
  return {
    _type: 'image',
    alt,
    asset: { _type: 'reference', _ref: asset._id },
  }
}

async function main() {
  if (!projectId || !dataset || !token) {
    console.error('Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_TOKEN in environment (.env).')
    process.exit(1)
  }

  const syncExisting = process.argv.includes('--sync-existing')
  const shared = buildSharedContent()

  const client = createClient({ projectId, dataset, token, apiVersion, useCdn: false })

  const existingId = await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0]._id`, { slug: SLUG })

  if (syncExisting) {
    if (!existingId) {
      console.error(`No blogPost with slug "${SLUG}" found. Run without --sync-existing to create.`)
      process.exit(1)
    }
    await client
      .patch(existingId)
      .set({
        ...shared,
        'seo.metaDescription': SEO_META_DESCRIPTION,
        'openGraph.ogDescription': OG_DESCRIPTION,
        updatedAt: new Date().toISOString(),
      })
      .commit()
    console.log('Synced blogPost:', existingId)
    console.log('URL:', `https://www.bionixus.com/blog/${SLUG}`)
    console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${existingId}`)
    return
  }

  if (existingId) {
    console.error(`A blogPost with slug "${SLUG}" already exists (_id=${existingId}). Delete or change slug first, or run with --sync-existing.`)
    process.exit(1)
  }

  const coverPath = path.join(root, 'public/images/blog', COVER_FILENAME)
  if (!fs.existsSync(coverPath)) {
    console.error('Cover image missing:', coverPath)
    process.exit(1)
  }

  const authorId = await client.fetch(`*[_type == "author" && defined(name)][0]._id`)
  if (!authorId) {
    console.error('No author document found. Create an author in Sanity Studio first.')
    process.exit(1)
  }

  const categoryRef =
    (await client.fetch(
      `*[_type == "category" && (slug.current == "healthcare-market-research" || title == "Healthcare Market Research" || title == "Industry Insights")][0]._id`,
    )) || (await client.fetch(`*[_type == "category"][0]._id`))

  const mainImage = await uploadImage(
    client,
    coverPath,
    'Saudi Arabian pharmacy interior with digital analytics overlay showing market research data for pharmacy retail growth',
    COVER_FILENAME,
  )
  const ogImage = await uploadImage(
    client,
    coverPath,
    'Market research and marketing automation for pharmacies in Saudi Arabia - BioNixus',
    `og-${COVER_FILENAME}`,
  )

  const publishedAt = new Date().toISOString()

  const doc = {
    _type: 'blogPost',
    seo: {
      metaTitle: 'Pharmacy Market Research Saudi Arabia: Boost Sales 40% | BioNixus',
      metaDescription: SEO_META_DESCRIPTION,
      focusKeyword: 'pharmacy market research Saudi Arabia',
      keywords: [
        'pharmacy market research Saudi Arabia',
        'Saudi pharmacy market size',
        'Nahdi pharmacy market share',
        'Al-Dawaa pharmacies Saudi',
        'pharmacy marketing automation KSA',
        'SFDA pharmacy compliance',
        'Vision 2030 pharmacy',
        'BioNixus market research',
        'pharmacy retail sales growth',
        'pharmacy CRM Saudi Arabia',
        'healthcare market research Middle East',
      ],
      canonicalUrl: `https://www.bionixus.com/blog/${SLUG}`,
      noIndex: false,
    },
    openGraph: {
      ogTitle: 'Market Research & Marketing Automation for Saudi Pharmacies | BioNixus',
      ogDescription: OG_DESCRIPTION,
      ogImage,
    },
    ...shared,
    slug: { _type: 'slug', current: SLUG },
    publishedAt,
    updatedAt: publishedAt,
    author: { _type: 'reference', _ref: authorId },
    mainImage,
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-pharmacy-sa' }] : [],
    category: 'Healthcare Market Research',
    country: 'Saudi Arabia',
    language: 'en',
    readingTime: 12,
    tags: [
      'Saudi Arabia',
      'Pharmacy Market Research',
      'Marketing Automation',
      'Nahdi',
      'Al-Dawaa',
      'Vision 2030',
      'SFDA',
      'Retail Sales Growth',
      'CRM',
      'BioNixus',
      'Healthcare',
      'GCC',
    ],
    ctaSection: {
      title: 'Get Expert Pharmacy Market Research for Saudi Arabia',
      description:
        'BioNixus helps pharmacy chains and pharmaceutical companies across Saudi Arabia and the GCC achieve measurable growth through data-driven market research, competitive intelligence, and marketing automation strategy. Book a free consultation today.',
      buttonText: 'Request a Free Consultation',
      buttonUrl: 'https://www.bionixus.com/contact',
    },
    body: [],
  }

  const created = await client.create(doc)
  console.log('✅ Created blogPost:', created._id)
  console.log('URL:', `https://www.bionixus.com/blog/${SLUG}`)
  console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${created._id}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
