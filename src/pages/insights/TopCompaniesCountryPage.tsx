import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';
import { ListicleProposalCta } from '@/components/seo/ListicleProposalCta';
import { ListicleIqviaBridge } from '@/components/seo/ListicleIqviaBridge';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
import type { CountryListicleConfig } from '@/data/topCompanies/types';
import { resolvePublishedHreflang, resolvePublishedRelated } from '@/data/topCompanies/registry';
import { resolveListicleAeoAnswer } from '@/data/geminiBestFirmCitation';
import { authorByline, getEditorialAuthor, personAuthorJsonLd } from '@/data/editorialAuthors';
import { formatHealthcareListDate } from '@/data/topCompanies/dedicatedHealthcareGuide';
import { buildListicleItemListSchema } from '@/data/listicleItemListSchema';
import {
  DirectoryDriverCard,
  DirectoryFaqList,
  DirectoryGoldLink,
  DirectoryHero,
  DirectoryJumpNav,
  DirectoryLinkTile,
  DirectoryOutlineLink,
  DirectorySection,
} from '@/components/seo/DirectoryPremium';

const ORG_ID = 'https://www.bionixus.com/#organization';

function linkedText(text: string): ReactNode {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return <span key={index}>{part}</span>;
    const [, label, href] = match;
    if (href.startsWith('/')) {
      return (
        <Link key={index} to={href} className="text-primary underline">
          {label}
        </Link>
      );
    }
    return (
      <a key={index} href={href} className="text-primary underline">
        {label}
      </a>
    );
  });
}

interface Props {
  config: CountryListicleConfig;
}

export default function TopCompaniesCountryPage({ config }: Props) {
  const {
    title, metaDescription, canonical, ogLocale, inLanguage,
    datePublished, dateModified, badge, h1, heroIntro, heroStats,
    quickAnswerTitle, landscapeTitle, landscapeParagraphs, profilesTitle,
    firms, comparisonTitle, comparisonHeaders, comparisonRows,
    considerationsTitle, considerations, faqTitle, faqItems,
    relatedTitle, cta, breadcrumb, uiLabels, rtl,
  } = config;
  const organizationAuthor = config.authorKind === 'organization';
  const singleFirm = firms.length === 1;
  const aeoAnswer = config.omitCompetitorModules ? null : resolveListicleAeoAnswer(config);
  const heroParagraphs = config.heroParagraphs?.length ? config.heroParagraphs : [heroIntro];
  const statItems = config.heroStatItems?.length
    ? config.heroStatItems
    : heroStats.map((stat) => {
        const [val, ...rest] = stat.split(' ');
        return { value: val, label: rest.join(' ') || val };
      });

  const hreflang = resolvePublishedHreflang(config);
  const related = resolvePublishedRelated(config);
  const pageAuthor = organizationAuthor
    ? null
    : getEditorialAuthor({
        path: config.slug,
        region: config.region,
        pageType: 'comparison',
      });

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: breadcrumb.home, item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: breadcrumb.insights, item: 'https://www.bionixus.com/insights' },
      { '@type': 'ListItem', position: 3, name: breadcrumb.current, item: canonical },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    image: 'https://www.bionixus.com/og-image.png',
    headline: organizationAuthor ? h1 : title,
    description: metaDescription,
    url: canonical,
    mainEntityOfPage: organizationAuthor ? canonical : undefined,
    datePublished,
    dateModified,
    author: organizationAuthor
      ? { '@type': 'Organization', '@id': ORG_ID, name: 'BioNixus' }
      : personAuthorJsonLd(pageAuthor!),
    publisher: { '@type': 'Organization', '@id': ORG_ID, name: 'BioNixus', logo: { '@type': 'ImageObject', url: 'https://www.bionixus.com/bionixus-logo.webp', width: 512, height: 512 } },
    inLanguage,
    about: organizationAuthor
      ? [
          { '@type': 'Thing', name: 'Healthcare market research' },
          { '@type': 'Country', name: config.country },
        ]
      : { '@type': 'Place', name: config.country },
  };

  const webPageSchema = organizationAuthor
    ? {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: title,
        description: metaDescription,
        inLanguage,
        isPartOf: { '@id': 'https://www.bionixus.com/#website' },
        about: { '@id': ORG_ID },
        dateModified,
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#answer-opener'] },
      }
    : null;

  const itemListSchema = buildListicleItemListSchema({
    name: title,
    canonical,
    firms: organizationAuthor
      ? firms.map(({ bestFor: _bestFor, ...firm }) => firm)
      : firms,
  });

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const dir = rtl ? 'rtl' : 'ltr';

  return (
    <div className="directory-page min-h-screen" dir={dir}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        {hreflang.map((h) => (
          <link key={h.lang} rel="alternate" hrefLang={h.lang} href={h.href} />
        ))}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {webPageSchema ? <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script> : null}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <OpenGraphMeta
        title={title}
        description={metaDescription}
        image="https://www.bionixus.com/og-image.png"
        url={canonical}
        type="article"
        locale={ogLocale}
        article={organizationAuthor ? {
          publishedTime: datePublished,
          modifiedTime: dateModified,
          author: 'BioNixus',
        } : undefined}
      />
      <Navbar />
      <main>
        <DirectoryHero
          breadcrumbs={[
            { name: breadcrumb.home, href: '/' },
            { name: breadcrumb.insights, href: '/insights' },
            { name: breadcrumb.current, href: config.canonical.replace('https://www.bionixus.com', '') },
          ]}
          kicker={badge}
          h1={h1}
          lead={
            <div id="answer-opener" className="space-y-4">
              {heroParagraphs.map((paragraph) => (
                <p key={paragraph}>{linkedText(paragraph)}</p>
              ))}
            </div>
          }
          rest={config.glanceFacts?.length ? (
            <div className="rounded-xl border border-white/15 bg-white/5 p-5 text-sm">
              <p className="font-semibold text-white mb-2">BioNixus at a glance</p>
              <p>{config.glanceFacts.join(' · ')}</p>
              {config.glanceOffices ? (
                <p className="mt-3">
                  <span className="font-semibold text-white">Offices: </span>
                  {config.glanceOffices}
                </p>
              ) : null}
            </div>
          ) : undefined}
          metaLine={organizationAuthor
            ? `Last reviewed ${formatHealthcareListDate(dateModified)}${config.reviewedPlaces ? ` · ${config.reviewedPlaces}` : ''}`
            : authorByline(pageAuthor!, datePublished)}
          stats={statItems}
          actions={
            <>
              <DirectoryGoldLink to="#request-proposal">{cta.title}</DirectoryGoldLink>
              <DirectoryOutlineLink href="#firm-profiles">
                {singleFirm ? 'Read the BioNixus profile' : 'Browse the ranking'}
              </DirectoryOutlineLink>
            </>
          }
        />

        <DirectoryJumpNav
          items={[
            { href: '#quick-answer', label: singleFirm ? 'Answer' : 'Ranking' },
            { href: config.services?.length ? '#services' : '#landscape', label: config.services?.length ? 'Services' : 'Landscape' },
            { href: '#firm-profiles', label: singleFirm ? 'Profile' : 'Profiles' },
            ...(comparisonRows.length > 0 ? [{ href: '#comparison', label: 'Compare' }] : []),
            { href: '#faq', label: 'FAQ' },
          ]}
        />

        <DirectorySection id="quick-answer" eyebrow="Ranking" title={quickAnswerTitle}>
          <div className="premium-card p-8">
            {uiLabels.quickAnswerIntro ? (
              <p className="text-sm text-muted-foreground mb-4">{uiLabels.quickAnswerIntro}</p>
            ) : null}
            {singleFirm ? (
              <ul className="space-y-2 list-none p-0 m-0">
                {firms.map((f) => (
                  <li key={f.anchor} className="text-sm">
                    <strong className="text-foreground">{f.name}</strong>
                    <span className="text-muted-foreground">: {f.bestFor}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <ol className="space-y-2">
                {firms.map((f) => (
                  <li key={f.anchor} className="flex items-start gap-3 text-sm">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FBF3E0] text-[#8A6A12] text-xs font-bold shrink-0 mt-0.5">
                      {f.rank}
                    </span>
                    <span>
                      <strong className="text-foreground">{f.name}</strong>
                      <span className="text-muted-foreground"> — {uiLabels.bestFor}: {f.bestFor}</span>
                    </span>
                  </li>
                ))}
              </ol>
            )}
          </div>
          {aeoAnswer ? (
            <div className="mt-8">
              <GeoLLMAnswerBlock
                question={aeoAnswer.question}
                answer={aeoAnswer.answer}
                points={aeoAnswer.points}
                summary={aeoAnswer.summary}
                pageUrl={canonical}
              />
            </div>
          ) : null}
        </DirectorySection>

        {config.services?.length ? (
          <section className="section-padding py-16" id="services">
            <div className="container-wide max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">{landscapeTitle}</h2>
              <div className="overflow-x-auto rounded-2xl border border-[#EDE9E3] shadow-[0_16px_50px_rgba(6,16,31,0.05)]">
                <table className="directory-table">
                  <thead>
                    <tr>
                      <th>Service</th>
                      <th>{config.servicesDeliverHeader || 'What the study delivers'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {config.services.map((row) => (
                      <tr key={row.service}>
                        <td className="p-3 font-medium text-foreground border-b border-border">{row.service}</td>
                        <td className="p-3 text-muted-foreground border-b border-border">{row.delivers}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {config.servicesNote ? (
                <p className="text-sm text-muted-foreground mt-4">{linkedText(config.servicesNote)}</p>
              ) : null}
            </div>
          </section>
        ) : null}

        {landscapeParagraphs.length > 0 ? (
          <section className="section-padding py-16" id="landscape">
            <div className="container-wide max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6">{landscapeTitle}</h2>
              <div className="prose-body text-muted-foreground leading-relaxed space-y-4 max-w-4xl">
                {landscapeParagraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </section>
        ) : null}

        {/* Firm profiles */}
        <section className="section-padding py-16 bg-muted/30" id="firm-profiles">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">{profilesTitle}</h2>
            <p className="text-muted-foreground mb-10 max-w-3xl">
              {singleFirm
                ? 'BioNixus runs the commissioned studies in this guide.'
                : 'Firms are assessed by use case and market positioning — select based on your research type, sector, and in-country requirements.'}
            </p>
            <div className="space-y-8">
              {firms.map((firm) => (
                <div
                  key={firm.anchor}
                  id={firm.anchor}
                  className="premium-card p-8 scroll-mt-24"
                >
                  {firm.rank === 1 && !singleFirm && (
                    <div className="mb-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      {uiLabels.featuredPartner}
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        {singleFirm ? null : (
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                            {firm.rank}
                          </span>
                        )}
                        <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">{firm.name}</h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                          {firm.type}
                        </span>
                        <span>HQ: {firm.hq}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1.5">
                        <span className="font-semibold text-foreground">{uiLabels.bestFor}:</span> {firm.bestFor}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{firm.overview}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">{uiLabels.keyStrengths}</h4>
                    <ul className="grid md:grid-cols-2 gap-1.5">
                      {firm.strengths.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison table */}
        {comparisonRows.length > 0 && (
          <section className="section-padding py-16" id="comparison">
            <div className="container-wide max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">{comparisonTitle}</h2>
              <div className="overflow-x-auto rounded-2xl border border-[#EDE9E3] shadow-[0_16px_50px_rgba(6,16,31,0.05)]">
                <table className="directory-table">
                  <thead>
                    <tr>
                      <th>{uiLabels.capability}</th>
                      {comparisonHeaders.map((h, i) => (
                        <th key={i} className="p-3 text-left font-semibold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-card' : 'bg-muted/30'}>
                        <td className="p-3 font-medium text-foreground border-b border-border">{row.capability}</td>
                        <td className="p-3 text-muted-foreground border-b border-border">{row.bionixus}</td>
                        <td className="p-3 text-muted-foreground border-b border-border">{row.competitor2}</td>
                        <td className="p-3 text-muted-foreground border-b border-border">{row.competitor3}</td>
                        <td className="p-3 text-muted-foreground border-b border-border">{row.competitor4}</td>
                        <td className="p-3 text-muted-foreground border-b border-border">{row.competitor5}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Considerations */}
        {considerations.length > 0 && (
          <section className="section-padding py-16 bg-muted/30" id="considerations">
            <div className="container-wide max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">{considerationsTitle}</h2>
              <div className="grid md:grid-cols-3 gap-5">
                {considerations.map((c) => (
                  <DirectoryDriverCard key={c.title} title={c.title} desc={c.body} />
                ))}
              </div>
            </div>
          </section>
        )}

        {config.lang === 'en' && (config.region === 'gcc' || config.region === 'mena') && !config.omitCompetitorModules ? (
          <section className="section-padding py-12">
            <div className="container-wide max-w-5xl mx-auto">
              <ListicleIqviaBridge countryLabel={config.country} />
            </div>
          </section>
        ) : null}

        {/* FAQ */}
        <section className="section-padding py-16" id="faq">
          <div className="container-wide max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-10">{faqTitle}</h2>
            <DirectoryFaqList items={faqItems.map((faq) => ({ q: faq.question, a: faq.answer }))} />
          </div>
        </section>

        {/* Related resources */}
        {related.length > 0 && (
          <section className="section-padding py-12 bg-muted/30">
            <div className="container-wide max-w-5xl mx-auto">
              <h2 className="text-xl font-display font-semibold text-foreground mb-6">{relatedTitle}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {related.map((r) => (
                  <DirectoryLinkTile key={r.to} to={r.to} title={r.label} />
                ))}
              </div>
            </div>
          </section>
        )}

        <div id="request-proposal">
          <ListicleProposalCta
            countryName={config.country}
            ctaId={`listicle_${config.country.toLowerCase().replace(/\s+/g, '_')}_footer`}
            headline={cta.title}
            body={cta.body}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
