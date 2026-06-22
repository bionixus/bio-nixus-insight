import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useMemo, useState, useCallback } from 'react';
import { ArrowLeft, BookOpen, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import BlogIndexFilters from '@/components/blog/BlogIndexFilters';
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
  const linksRef = useScrollReveal<HTMLElement>({ stagger: 60 });

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
        <div className="section-padding pt-24 pb-4">
          <div className="container-wide">
            <Link
              to={isArabicBlog ? '/ar' : basePath}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" aria-hidden />
              {isArabicBlog ? 'العودة للرئيسية' : 'Back to Home'}
            </Link>
          </div>
        </div>

        <section
          className="section-padding pt-4 pb-12 bg-gradient-to-br from-navy-deep via-navy-medium to-primary text-primary-foreground relative overflow-hidden"
          ref={heroRef}
        >
          <div
            className="pointer-events-none absolute -top-24 end-0 w-72 h-72 rounded-full bg-white/5 blur-3xl float-gentle"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 start-8 w-48 h-48 rounded-full bg-accent/20 blur-2xl float-gentle-delayed"
            aria-hidden
          />
          <div className="container-wide max-w-5xl mx-auto relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-primary-foreground text-sm font-medium mb-6 sr sr-left sr-fast revealed">
              <BookOpen className="w-4 h-4" aria-hidden />
              {isArabicBlog ? 'المدونة' : isGerman ? 'Blog' : isFrench ? 'Blog' : 'Insights & Blog'}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-6 max-w-4xl leading-tight sr sr-up sr-line revealed">
              {heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mb-8 sr sr-up revealed">
              {heroSubtitle}
            </p>
            {!isLoading && postCount > 0 ? (
              <ul
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 sr sr-up revealed"
                aria-label={isArabicBlog ? 'إحصائيات المدونة' : 'Blog highlights'}
              >
                <li className="rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-center">
                  <p className="text-2xl md:text-3xl font-display font-semibold text-primary-foreground glow-pop">
                    {postCount}
                  </p>
                  <p className="text-sm text-primary-foreground/80 mt-1">
                    {isArabicBlog ? 'مقالات منشورة' : 'Published articles'}
                  </p>
                </li>
                <li className="rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-center">
                  <p className="text-2xl md:text-3xl font-display font-semibold text-primary-foreground">
                    EMEA
                  </p>
                  <p className="text-sm text-primary-foreground/80 mt-1">
                    {isArabicBlog ? 'تغطية إقليمية' : 'Regional coverage'}
                  </p>
                </li>
                <li className="rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-center">
                  <p className="text-2xl md:text-3xl font-display font-semibold text-primary-foreground flex items-center justify-center gap-1">
                    <Sparkles className="w-6 h-6 text-accent" aria-hidden />
                  </p>
                  <p className="text-sm text-primary-foreground/80 mt-1">
                    {isArabicBlog ? 'رؤى ميدانية' : 'Fieldwork-led insights'}
                  </p>
                </li>
              </ul>
            ) : null}
            <div className="flex flex-wrap gap-3 sr sr-up revealed">
              <a
                href="#insights"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors duration-200 cursor-pointer shimmer"
              >
                {isArabicBlog ? 'تصفح المقالات' : 'Browse articles'}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/40 text-primary-foreground font-semibold hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              >
                {isArabicBlog ? 'اطلب عرضاً' : 'Request a proposal'}
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding py-10 bg-background" ref={introRef}>
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6 sr sr-up sr-line">
              {isArabicBlog
                ? 'ربط الاستراتيجية بأدلة السوق'
                : isGerman
                  ? 'Strategie mit Marktevidenz verbinden'
                  : isFrench
                    ? 'Relier stratégie et preuves de marché'
                    : 'From evidence to launch decisions'}
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

        <section className="section-padding py-10 bg-background" ref={linksRef}>
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 sr sr-up">
              {isArabicBlog ? 'روابط بحثية ذات صلة' : 'Related research paths'}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl sr sr-up">
              {isArabicBlog
                ? 'صفحات مرجعية تُستخدم غالباً مع مقالات المدونة.'
                : 'Hub pages and guides commonly paired with these insights.'}
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 sr sr-up">
              <li>
                <Link to="/healthcare-market-research" className="text-primary font-medium hover:underline cursor-pointer">
                  Healthcare market research hub
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-primary font-medium hover:underline cursor-pointer">
                  Insights overview
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary font-medium hover:underline cursor-pointer">
                  Research services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-primary font-medium hover:underline cursor-pointer">
                  Case studies
                </Link>
              </li>
            </ul>

            <details className="mt-8 rounded-xl border border-border bg-card p-6 sr sr-up">
              <summary className="cursor-pointer font-display font-semibold text-foreground list-none flex items-center justify-between gap-2">
                {isArabicBlog ? 'المزيد من روابط المقالات' : 'More article links'}
                <span className="text-sm font-normal text-muted-foreground">
                  {recoveryLinks.length} links
                </span>
              </summary>
              <ul className="grid sm:grid-cols-2 gap-2 mt-4 pt-4 border-t border-border max-h-64 overflow-y-auto">
                {recoveryLinks.map(({ path, label }) => (
                  <li key={path}>
                    <Link to={path} className="text-sm text-primary hover:underline cursor-pointer">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </section>

        {!isArabicBlog && !isGerman && !isFrench ? (
          <section className="section-padding py-12">
            <div className="container-wide max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8 text-center sr sr-up sr-line sr-line-center">
                Frequently asked questions
              </h2>
              <div className="space-y-3">
                {BLOG_FAQ_EN.map((item) => (
                  <details
                    key={item.question}
                    className="rounded-xl border border-border bg-card px-6 py-4 sr sr-up"
                  >
                    <summary className="cursor-pointer font-medium text-foreground list-none">
                      {item.question}
                    </summary>
                    <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <CTASection variant="research-proposal" />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
