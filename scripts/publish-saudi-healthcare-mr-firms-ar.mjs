/**
 * Creates or syncs Arabic Sanity blogPost (language: ar) for Saudi healthcare MR firms guide.
 * Public URL: https://www.bionixus.com/ar/blog/saudi-healthcare-market-research-firms-ar
 *
 * Requires repo-root .env: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN (write)
 * Run: node scripts/publish-saudi-healthcare-mr-firms-ar.mjs
 * Sync: node scripts/publish-saudi-healthcare-mr-firms-ar.mjs --sync-existing
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@sanity/client'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const SLUG = 'saudi-healthcare-market-research-firms-ar'
const COVER_FILENAME = 'top-healthcare-market-research-firms-saudi-arabia-cover.jpg'
const ARTICLE_H1 =
  'أبرز شركات أبحاث السوق الصحي في المملكة العربية السعودية: المشهد، معايير اختيار الشريك، وشركات يُعتد بها'
const ARTICLE_EXCERPT =
  'دليل باللغة العربية لاختيار شركات أبحاث السوق الصحي في السعودية ضمن رؤية 2030: أهمية البيانات المحلية، معايير التقييم، ونماذج لشركات عالمية وإقليمية وBioNixus كشريك متخصص، مع اتجاهات السوق وأسئلة المشتريات قبل التعاقد.'
const SEO_META_TITLE = 'شركات أبحاث السوق الصحي السعودية | BioNixus'
const SEO_META_DESCRIPTION =
  'دليل عملي: معايير اختيار شركات أبحاث السوق الصحي في السعودية، أهمية الخبرة المحلية، ونماذج شركات عالمية وإقليمية مع BioNixus كخيار متخصص.'
const OG_DESCRIPTION =
  'مقال عربي عن أبرز شركات أبحاث السوق الصحي في السعودية: لماذا تهم الخبرة المحلية، كيف تقيّم الشريك، ونماذج BioNixus وIQVIA وIpsos وKantar وGlobacom، مع أسئلة قبل التعاقد واتجاهات السوق.'

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

function buildSharedContent(bodyHtml) {
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
            text: 'النجاح في السعودية يتطلب تصميمًا يحترم السياق التنظيمي والميداني واللغوي، مع ربط واضح بين المقابلات والاستبيانات وقرارات الوصول إلى السوق. استخدم المقال لمقارنة الشركات العالمية والإقليمية والمتخصصة مثل BioNixus ضمن معايير موحّدة.',
          },
        ],
        markDefs: [],
      },
    ]),
    tableOfContents: withKeys([
      { heading: 'لماذا تُعد أبحاث السوق الصحي حاسمة في السعودية؟', anchor: 'why-saudi' },
      { heading: 'ما الذي تبحث عنه في شريك أبحاث صحي في السعودية؟', anchor: 'partner-criteria' },
      { heading: 'BioNixus', anchor: 'bionixus' },
      { heading: 'IQVIA', anchor: 'iqvia' },
      { heading: 'Ipsos Healthcare', anchor: 'ipsos-healthcare' },
      { heading: 'Kantar Health', anchor: 'kantar-health' },
      { heading: 'Globacom Consulting', anchor: 'globacom-consulting' },
      { heading: 'اتجاهات تشكّل أبحاث السوق الصحي في السعودية', anchor: 'trends-saudi' },
      { heading: 'أسئلة يجب طرحها قبل التعاقد', anchor: 'questions-before-hiring' },
      { heading: 'كيف تستخرج أقصى قيمة من استثمار الأبحاث؟', anchor: 'maximize-roi' },
      { heading: 'لماذا تهم الخبرة المحلية في السعودية؟', anchor: 'local-expertise-saudi' },
      { heading: 'مستقبل أبحاث السوق الصحي في المملكة', anchor: 'future-kingdom' },
      { heading: 'الخلاصة', anchor: 'conclusion' },
    ]),
    faq: withKeys([
      {
        question: 'ما الخدمات التي تقدّمها شركات أبحاث السوق الصحي في السعودية؟',
        answer:
          'تشمل غالبًا استبيانات الأطباء، دراسات المرضى، تقدير حجم السوق، الذكاء التنافسي، بحث الجهات الدافعة، المجالس الاستشارية، وورش العمل الاستراتيجية—مع ربط المخرجات بقرارات التجزئة والرسائل وترتيب خطوات الوصول إلى السوق.',
      },
      {
        question: 'كم تكلف أبحاث السوق الصحي في السعودية؟',
        answer:
          'يعتمد الاستثمار على نطاق المشروع، المنهجية، حجم العينة، وتعقيد الموافقات المستشفية. تُفضّل عروض أسعار مفصّلة من عدة شركاء مع جدول مراحل واضح يتوافق مع مواعيد القرار لديكم.',
      },
      {
        question: 'كم يستغرق مشروع أبحاث سوقية نموذجي في السعودية؟',
        answer:
          'قد تكتمل بعض المسوح في عدة أسابيع، بينما تتطلب الدراسات متعددة المراحل أو التخصصات الضيقة عدة أشهر. غالبًا ما يحدد استقطاب الأطباء المشغولين أو الفئات النادرة المسار الحرج—خططوا لهامش أمان زمني.',
      },
      {
        question: 'كيف تدعم BioNixus شركات الأدوية في السعودية؟',
        answer:
          'تقدّم BioNixus بحثًا كميًا ونوعيًا مع تنفيذ خليجي، بما في ذلك مقابلات الأطباء والجهات الدافئة والمجالس الاستشارية، مع تركيز على تركيب رؤى تدعم الوصول إلى السوق والذكاء التنافسي.',
      },
      {
        question: 'هل أحتاج شركة محلية أم عالمية؟',
        answer:
          'للشركات العالمية قوة في البيانات العابرة للأسواق، وللمحلي أو الإقليمي غالبًا عمق ثقافي ووصول أفضل. يعتمد الأفضل على أهدافكم—وكثير من الفرق يدمج النموذجين مع مسؤوليات واضحة عن جودة الميدان.',
      },
      {
        question: 'ما أكبر التحديات في تنفيذ الأبحاث في السعودية؟',
        answer:
          'منها ضيق وقت الأطباء، دورات موافقات المستشفيات، والحساسية الثقافية في صياغة الأسئلة، واختيار لغة المقابلة. يقلّل العمل مع شريك له علاقات مثبتة ومشرفين سعوديين من مخاطر التأخير وضعف الجودة.',
      },
      {
        question: 'هل يجب تنفيذ البحث بالعربية؟',
        answer:
          'كثير من الأطباء يعملون بالإنجليزية، لكن العربية تغني غالبًا رؤى المرضى وبعض المقابلات المعمّقة. حددوا اللغة أثناء التصميم بناءً على الجمهور والموافقات لا بعد بدء الميدان.',
      },
    ]),
  }
}

async function uploadImage(client, filePath, alt, filename) {
  let buf = fs.readFileSync(filePath)
  buf = await sharp(buf)
    .resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 88, progressive: true })
    .toBuffer()
  const asset = await client.assets.upload('image', buf, {
    contentType: 'image/jpeg',
    filename,
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
  const bodyHtmlPath = path.join(root, 'scripts/data/saudi-healthcare-mr-firms-ar-body.html')
  const bodyHtml = fs.readFileSync(bodyHtmlPath, 'utf8')
  const shared = buildSharedContent(bodyHtml)

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
        'seo.metaTitle': SEO_META_TITLE,
        'seo.metaDescription': SEO_META_DESCRIPTION,
        'openGraph.ogDescription': OG_DESCRIPTION,
        updatedAt: new Date().toISOString(),
      })
      .commit()
    console.log('Synced blogPost:', existingId)
    console.log('URL:', `https://www.bionixus.com/ar/blog/${SLUG}`)
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
    'غلاف تحريري لسوق الرعاية الصحي في السعودية: أفق مدن حديثة مع لمسة تحليلات صحية لأبحاث السوق الدوائي',
    `ar-${COVER_FILENAME}`,
  )
  const ogImage = await uploadImage(
    client,
    coverPath,
    'صورة مشاركة اجتماعية: أبرز شركات أبحاث السوق الصحي في المملكة العربية السعودية',
    `og-ar-${COVER_FILENAME}`,
  )

  const publishedAt = new Date().toISOString()
  const canonicalUrl = `https://www.bionixus.com/ar/blog/${SLUG}`

  const doc = {
    _type: 'blogPost',
    seo: {
      metaTitle: SEO_META_TITLE,
      metaDescription: SEO_META_DESCRIPTION,
      focusKeyword: 'أبحاث السوق الصحي السعودية',
      keywords: [
        'السعودية',
        'أبحاث السوق الصحي',
        'رؤية 2030',
        'الهيئة السعودية للغذاء والدواء',
        'BioNixus',
        'أدوية',
        'الجهات الدافعة',
        'البحث الكمي والنوعي',
      ],
      canonicalUrl,
      noIndex: false,
    },
    openGraph: {
      ogTitle: 'أبرز شركات أبحاث السوق الصحي في السعودية | BioNixus',
      ogDescription: OG_DESCRIPTION,
      ogImage,
    },
    ...shared,
    slug: { _type: 'slug', current: SLUG },
    publishedAt,
    updatedAt: publishedAt,
    author: { _type: 'reference', _ref: authorId },
    mainImage,
    categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef, _key: 'cat-sa-ar' }] : [],
    category: 'Healthcare Market Research',
    country: 'Saudi Arabia',
    language: 'ar',
    readingTime: 13,
    tags: ['العربية', 'السعودية', 'أبحاث السوق الصحي', 'BioNixus', 'رؤية 2030', 'GCC'],
    ctaSection: {
      title: 'خطّطوا لأبحاث السوق الصحي في السعودية',
      description:
        'BioNixus تدعم فرق الأدوية والأجهزة الطبية في المملكة ودول الخليج ببحث متكامل يربط الأطباء والجهات الدافعة والمرضى بقرارات الوصول إلى السوق.',
      buttonText: 'اطلب عرضًا',
      buttonUrl: 'https://www.bionixus.com/ar/contacts',
    },
    body: [],
  }

  const created = await client.create(doc)
  console.log('Created blogPost:', created._id)
  console.log('URL:', canonicalUrl)
  console.log('Studio:', `https://${projectId}.sanity.studio/desk/blogPost;${created._id}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
