import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useMemo, useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import BlogIndexFilters from '@/components/blog/BlogIndexFilters';
import { BlogIndexHero } from '@/components/blog/BlogIndexHero';
import { BlogRelatedPathways } from '@/components/blog/BlogRelatedPathways';
import { PremiumComplianceRibbon } from '@/components/home/PremiumComplianceRibbon';
import { FAQSection } from '@/components/healthcare-research/FAQSection';
import { CTASection } from '@/components/shared/CTASection';
import { useSanityBlog } from '@/hooks/useSanityBlog';
import { blogRecoveryPaths } from '@/lib/internalLinkRecovery';
import { INTERNAL_LINK_AMPLIFICATION_TARGETS } from '@/lib/internalLinkAmplificationTargets';
import { useInitialData } from '@/contexts/InitialDataContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getHreflangLinks, languagePaths } from '@/lib/seo';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import type { BlogPost } from '@/types/blog';
import {
  ALL_COUNTRIES,
  ALL_TOPICS,
  buildFilterOptions,
  filterBlogPosts,
  hasActiveBlogFilters,
  type BlogIndexFilterState,
} from '@/lib/blog-index-filters';

function buildBlogCollectionSchema(
  canonical: string,
  name: string,
  description: string,
  postCount: number,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: canonical,
    publisher: {
      '@type': 'Organization',
      name: 'BioNixus',
      url: 'https://www.bionixus.com',
    },
    ...(postCount > 0
      ? {
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: postCount,
            itemListElement: {
              '@type': 'ListItem',
              position: 1,
              name: 'Healthcare market research articles',
            },
          },
        }
      : {}),
  };
}

function buildBlogBreadcrumbSchema(canonical: string, blogLabel: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: blogLabel, item: canonical },
    ],
  };
}

const recoveryLinkLabels: Record<string, string> = {
  '/blog/pharma-market-entry-saudi-arabia-playbook': 'Pharma Market Entry Saudi Arabia Playbook',
  '/blog/competitive-intelligence-pharma-gcc': 'Competitive Intelligence Pharma GCC',
  '/blog/healthcare-market-research-europe-2026': 'Healthcare Market Research in Europe (2026 Guide)',
};

function pathToLabel(path: string): string {
  if (recoveryLinkLabels[path]) return recoveryLinkLabels[path];
  const slug = path.split('/').filter(Boolean).pop() ?? path;
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

const BLOG_FAQ_EN = [
  {
    question: 'What topics does the BioNixus blog cover?',
    answer:
      'Articles span quantitative physician research, qualitative KOL work, GCC and EU market access, hospital adoption, regulatory updates, and launch strategy—written for commercial, medical, and access teams.',
  },
  {
    question: 'How often are new insights published?',
    answer:
      'We add practical fieldwork-led articles as programs complete and markets shift. Subscribe via the site footer for monthly EMEA pharma research highlights.',
  },
  {
    question: 'Can I request a topic or country deep-dive?',
    answer:
      'Yes. Use the contact form with your therapy area, geography, and decision deadline—we typically respond with a tailored methodology outline within one business day.',
  },
] as const;

const Blog = () => {
  const { data: routeData } = useInitialData();
  const { language } = useLanguage();
  const basePath = languagePaths[language] || '/';
  const ssrPosts =
    routeData.pageType === 'blog-index' && Array.isArray(routeData.blogPosts)
      ? (routeData.blogPosts as BlogPost[])
      : undefined;
  const { data: posts, isLoading, isError, error } = useSanityBlog(ssrPosts);
  const { pathname } = useLocation();
  const isArabicBlog = pathname.startsWith('/ar/blog');
  const isGerman = pathname.startsWith('/de/');
  const isFrench = pathname.startsWith('/fr/');

  const allPosts = posts ?? ssrPosts ?? [];
  const [filterState, setFilterState] = useState<BlogIndexFilterState>({
    search: '',
    country: ALL_COUNTRIES,
    topic: ALL_TOPICS,
  });

  const countryOptions = useMemo(() => buildFilterOptions(allPosts, 'country'), [allPosts]);
  const topicOptions = useMemo(() => buildFilterOptions(allPosts, 'category'), [allPosts]);
  const filteredPosts = useMemo(
    () => filterBlogPosts(allPosts, filterState),
    [allPosts, filterState],
  );
  const filtersActive = hasActiveBlogFilters(filterState);
  const postCount = allPosts.length;
  const visibleCount = filteredPosts.length;

  const handleFilterChange = useCallback((patch: Partial<BlogIndexFilterState>) => {
    setFilterState((prev) => ({ ...prev, ...patch }));
  }, []);

  const handleClearFilters = useCallback(() => {
    setFilterState({ search: '', country: ALL_COUNTRIES, topic: ALL_TOPICS });
  }, []);

  const filterLabels = isArabicBlog
    ? {
        searchPlaceholder: 'ابحث في المقالات بالعنوان أو الموضوع…',
        countryLabel: 'الدولة / المنطقة',
        countryAll: 'جميع الدول',
        topicLabel: 'الموضوع',
        topicAll: 'جميع المواضيع',
        clear: 'مسح الفلاتر',
        showing: (visible: number, total: number) =>
          visible === total ? `${total} مقالة` : `عرض ${visible} من ${total} مقالة`,
      }
    : isGerman
      ? {
          searchPlaceholder: 'Artikel nach Titel, Thema oder Stichwort suchen…',
          countryLabel: 'Land / Region',
          countryAll: 'Alle Länder',
          topicLabel: 'Thema',
          topicAll: 'Alle Themen',
          clear: 'Filter zurücksetzen',
          showing: (visible: number, total: number) =>
            visible === total ? `${total} Artikel` : `${visible} von ${total} Artikeln`,
        }
      : isFrench
        ? {
            searchPlaceholder: 'Rechercher par titre, thème ou mot-clé…',
            countryLabel: 'Pays / région',
            countryAll: 'Tous les pays',
            topicLabel: 'Thème',
            topicAll: 'Tous les thèmes',
            clear: 'Effacer les filtres',
            showing: (visible: number, total: number) =>
              visible === total ? `${total} articles` : `${visible} sur ${total} articles`,
          }
        : undefined;

  const heroRef = useScrollReveal<HTMLElement>({ stagger: 80 });
  const introRef = useScrollReveal<HTMLElement>({ stagger: 100 });

  const canonical = isArabicBlog
    ? 'https://www.bionixus.com/ar/blog'
    : isGerman
      ? 'https://www.bionixus.com/de/blog'
      : isFrench
        ? 'https://www.bionixus.com/fr/blog'
        : 'https://www.bionixus.com/blog';
  const title = isArabicBlog
    ? 'المدونة العربية: أبحاث السوق الصحي والدوائي | BioNixus'
    : isGerman
      ? 'Healthcare Markt-Insights Blog | BioNixus'
      : isFrench
        ? 'Blog Insights Marché Santé | BioNixus'
        : 'Healthcare Market Research Blog | BioNixus';
  const description = isArabicBlog
    ? 'أبحاث السوق الدوائي والصحي في السعودية والخليج والوصول إلى السوق والتنظيم—مقالات تنفيذية، استبيانات أطباء، وروابط لصفحات الخدمات والدليل الإقليمي.'
    : isGerman
      ? 'Pharma- und Healthcare-Marktforschung, Market Access und Launch-Strategie für DACH & EMEA—Feldstudien, KOL-/Payer-Insights und praxisnahe Analysen von BioNixus.'
      : isFrench
        ? 'Études pharma & santé, accès marché et stratégie de lancement pour la France et l’EMEA—terrain, payeurs, KOL et analyses opérationnelles BioNixus.'
        : 'Expert insights on pharmaceutical market research, market access, clinical trials, and healthcare intelligence across Europe, UAE, Saudi Arabia, and MENA.';
  const heroTitle = isArabicBlog
    ? 'تحديثات عربية لأبحاث الرعاية الصحية والدواء'
    : isGerman
      ? 'Healthcare Markt-Insights für DACH & EMEA'
      : isFrench
        ? 'Insights marché santé pour la France & l’EMEA'
        : 'Healthcare Market Research Insights';
  const heroSubtitle = isArabicBlog
    ? 'مقالات عملية لفرق الأدوية والأجهزة الطبية في المملكة ودول الخليج.'
    : isGerman
      ? 'Praxisnahe Inhalte für pharmazeutische Teams in Deutschland, Europa und MENA.'
      : isFrench
        ? 'Analyses actionnables pour les équipes pharma en France, Europe et MENA.'
        : 'Practical pharmaceutical and healthcare intelligence across Europe, GCC, and MENA.';
  const introText = isArabicBlog
    ? 'تضم هذه الصفحة مقالات عملية باللغة العربية لفرق الأدوية والأجهزة الطبية في المملكة ودول الخليج.'
    : isGerman
      ? 'Diese Blog-Übersicht enthält praxisnahe Inhalte für pharmazeutische Teams in Deutschland, Europa und der MENA-Region.'
      : isFrench
        ? 'Cette page blog met en avant des analyses actionnables pour les équipes pharma en France, en Europe et en MENA.'
        : 'Connect product strategy with market evidence—from physician surveys and payer interviews to patient journey work and GCC access scenarios.';

  const contactPath =
    language === 'fr'
      ? '/fr/contacts'
      : language === 'ar'
        ? '/ar/contacts'
        : language === 'zh'
          ? '/zh/contact'
          : `${basePath === '/' ? '' : basePath}/contact`;

  const heroEyebrow = isArabicBlog
    ? 'المدونة'
    : isGerman
      ? 'Blog'
      : isFrench
        ? 'Blog'
        : 'Insights & Research';
  const heroStats =
    !isLoading && postCount > 0
      ? [
          {
            value: String(postCount),
            label: isArabicBlog
              ? 'مقالات منشورة'
              : isGerman
                ? 'Veröffentlichte Artikel'
                : isFrench
                  ? 'Articles publiés'
                  : 'Published articles',
          },
          {
            value: 'EMEA',
            label: isArabicBlog
              ? 'تغطية إقليمية'
              : isGerman
                ? 'Regionale Abdeckung'
                : isFrench
                  ? 'Couverture régionale'
                  : 'Regional coverage',
          },
          {
            value: '◈',
            label: isArabicBlog
              ? 'رؤى ميدانية'
              : isGerman
                ? 'Feldstudien-Insights'
                : isFrench
                  ? 'Insights terrain'
                  : 'Fieldwork-led insights',
          },
        ]
      : undefined;
  const browseLabel = isArabicBlog
    ? 'تصفح المقالات'
    : isGerman
      ? 'Artikel entdecken'
      : isFrench
        ? 'Parcourir les articles'
        : 'Browse articles';
  const proposalLabel = isArabicBlog
    ? 'اطلب عرضاً'
    : isGerman
      ? 'Angebot anfordern'
      : isFrench
        ? 'Demander une proposition'
        : 'Request a proposal';
  const homeLabel = isArabicBlog
    ? 'العودة للرئيسية'
    : isGerman
      ? 'Zur Startseite'
      : isFrench
        ? 'Retour à l’accueil'
        : 'Back to Home';
  const homeHref = isArabicBlog ? '/ar' : basePath;

  const relatedPathwayLinks = isArabicBlog
    ? [
        { to: '/healthcare-market-research/saudi-arabia', label: 'أبحاث سوق الرعاية الصحية في السعودية' },
        { to: '/ar/arabic-blog-alsawdyh', label: 'دليل أبحاث السوق الدوائي في السعودية' },
        { to: '/gcc-pharmaceutical-market-research', label: 'أبحاث السوق الدوائي في GCC' },
        { to: '/ar/contact', label: 'تواصل مع BioNixus' },
      ]
    : isGerman
      ? [
          { to: '/de/healthcare-market-research/germany', label: 'Gesundheitsmarktforschung Deutschland' },
          { to: '/europe', label: 'Healthcare-Marktforschung Europa' },
          { to: '/de/contact', label: 'BioNixus kontaktieren' },
          { to: '/case-studies', label: 'Fallstudien' },
        ]
      : isFrench
        ? [
            { to: '/fr/market-research-healthcare', label: 'Études de marché santé' },
            { to: '/healthcare-market-research/france', label: 'Recherche pharma France' },
            { to: '/fr/contacts', label: 'Contacter BioNixus' },
            { to: '/case-studies', label: 'Études de cas' },
          ]
        : [
            {
              to: '/healthcare-market-research',
              label: 'Healthcare market research hub',
              description: 'Country hubs, therapy areas, and research modules.',
            },
            {
              to: '/insights',
              label: 'Insights overview',
              description: 'Rankings, guides, and strategic market intelligence.',
            },
            {
              to: '/services',
              label: 'Research services',
              description: 'Quantitative, qualitative, access, and KOL programmes.',
            },
            {
              to: '/case-studies',
              label: 'Case studies',
              description: 'Evidence from recent pharma and healthcare engagements.',
            },
          ];

  const introHeading = isArabicBlog
    ? 'ربط الاستراتيجية بأدلة السوق'
    : isGerman
      ? 'Strategie mit Marktevidenz verbinden'
      : isFrench
        ? 'Relier stratégie et preuves de marché'
        : 'From evidence to launch decisions';

  const collectionSchema = buildBlogCollectionSchema(canonical, title, description, postCount);
  const breadcrumbSchema = isArabicBlog
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://www.bionixus.com/ar' },
          { '@type': 'ListItem', position: 2, name: 'المدونة العربية', item: canonical },
        ],
      }
    : buildBlogBreadcrumbSchema(canonical, 'Blog');

  const faqJsonLd = !isArabicBlog && !isGerman && !isFrench
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: BLOG_FAQ_EN.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      }
    : null;

  const recoveryLinks = useMemo(() => {
    const fromAmp = INTERNAL_LINK_AMPLIFICATION_TARGETS.map(({ to, label }) => ({ path: to, label }));
    const fromBlog = blogRecoveryPaths.map((path) => ({ path, label: pathToLabel(path) }));
    const seen = new Set<string>();
    const out: { path: string; label: string }[] = [];
    for (const row of [...fromAmp, ...fromBlog]) {
      if (seen.has(row.path)) continue;
      seen.add(row.path);
      out.push(row);
    }
    return out;
  }, []);

  const mainDir = isArabicBlog ? 'rtl' : 'ltr';
  const mainLang = isArabicBlog ? 'ar' : isGerman ? 'de' : isFrench ? 'fr' : 'en';
  const hreflangLinks = getHreflangLinks(pathname);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        {hreflangLinks.map(({ lang, href }) => (
          <link key={`${lang}-${href}`} rel="alternate" hrefLang={lang} href={href} />
        ))}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BioNixus" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://www.bionixus.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BioNixus" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.bionixus.com/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {faqJsonLd ? <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script> : null}
      </Helmet>
      <Navbar />
      <main dir={mainDir} lang={mainLang}>
        <BlogIndexHero
          dir={mainDir}
          lang={mainLang}
          homeHref={homeHref}
          homeLabel={homeLabel}
          eyebrow={heroEyebrow}
          title={heroTitle}
          subtitle={heroSubtitle}
          stats={heroStats}
          browseLabel={browseLabel}
          proposalLabel={proposalLabel}
          proposalHref={contactPath}
          sectionRef={heroRef}
        />
        <PremiumComplianceRibbon />

        <section className="section-padding border-b border-border/60 bg-[#FAF8F4] py-12" ref={introRef}>
          <div className="container-wide mx-auto max-w-5xl">
            <div className="mb-3 inline-flex items-center gap-2.5">
              <span className="h-px w-8 bg-[#C9A84C]/50" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C9A84C]">
                {isArabicBlog ? 'نهج البحث' : isGerman ? 'Forschungsansatz' : isFrench ? 'Approche' : 'Research approach'}
              </span>
            </div>
            <h2 className="mb-6 font-display text-2xl font-semibold text-foreground md:text-3xl sr sr-up sr-line">
              {introHeading}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed text-[15px]">
              <p className="sr sr-left">{introText}</p>
              {isArabicBlog ? (
                <p className="sr sr-right">
                  ننشر تحديثات منتظمة حول التنظيم الصحي وسلوك وصف الأطباء في الشرق الأوسط وشمال أفريقيا.
                  <Link to="/ar/arabic-blog-alsawdyh" className="block mt-4 text-primary font-medium hover:underline cursor-pointer">
                    دليل أبحاث السوق الدوائي في السعودية
                  </Link>
                </p>
              ) : isGerman ? (
                <p className="sr sr-right">
                  Nutzen Sie die Übersicht nach Entscheidungsphase—frühe Validierung, Zulassungsnahe Evidenz,
                  payerseitige Narrative und Post-Launch-Optimierung.
                </p>
              ) : isFrench ? (
                <p className="sr sr-right">
                  Parcourez les entrées selon votre question décisionnelle—preuve de valeur, segmentation,
                  adoption hospitalière ou dynamiques retail.
                </p>
              ) : (
                <p className="sr sr-right">
                  Pick articles that match your decision stage—pre-launch, pricing, or post-launch—then follow
                  through to{' '}
                  <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline cursor-pointer">
                    healthcare market research
                  </Link>{' '}
                  and service pages for a coherent evidence thread.
                </p>
              )}
            </div>
          </div>
        </section>

        {isError ? (
          <section className="section-padding py-8">
            <div className="container-wide max-w-xl mx-auto text-center py-12 px-6 rounded-2xl bg-destructive/10 border border-destructive/20 sr sr-up">
              <p className="font-semibold text-destructive">Unable to load latest articles</p>
              <p className="text-sm text-muted-foreground mt-2">
                {error instanceof Error ? error.message : String(error)}
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                If developing locally, add your origin to Sanity CORS origins (sanity.io/manage → API → CORS).
              </p>
            </div>
          </section>
        ) : null}

        {!isLoading && postCount > 0 ? (
          <BlogIndexFilters
            state={filterState}
            onChange={handleFilterChange}
            onClear={handleClearFilters}
            countryOptions={countryOptions}
            topicOptions={topicOptions}
            visibleCount={visibleCount}
            totalCount={postCount}
            labels={filterLabels}
            dir={mainDir}
          />
        ) : null}

        <BlogSection
          posts={filteredPosts}
          isLoading={isLoading && !ssrPosts?.length}
          variant="index"
          showHeader={false}
          showViewAllLink={false}
          disableFeatured={filtersActive}
        />

        <BlogRelatedPathways
          dir={mainDir}
          heading={
            isArabicBlog
              ? 'روابط بحثية ذات صلة'
              : isGerman
                ? 'Verwandte Forschungspfade'
                : isFrench
                  ? 'Parcours de recherche associés'
                  : 'Related research paths'
          }
          description={
            isArabicBlog
              ? 'صفحات مرجعية تُستخدم غالباً مع مقالات المدونة.'
              : isGerman
                ? 'Hub-Seiten und Leitfäden, die häufig mit diesen Insights kombiniert werden.'
                : isFrench
                  ? 'Pages hub et guides souvent associés à ces analyses.'
                  : 'Hub pages and guides commonly paired with these insights.'
          }
          links={relatedPathwayLinks}
          moreHeading={
            isArabicBlog
              ? 'المزيد من روابط المقالات'
              : isGerman
                ? 'Weitere Artikel-Links'
                : isFrench
                  ? 'Plus de liens d’articles'
                  : 'More article links'
          }
          moreLinks={recoveryLinks}
        />

        {!isArabicBlog && !isGerman && !isFrench ? (
          <section className="section-padding border-t border-border/60 bg-cream py-12">
            <FAQSection title="Frequently asked questions" items={[...BLOG_FAQ_EN]} className="bg-transparent py-0" />
          </section>
        ) : null}

        <CTASection variant="research-proposal" />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
