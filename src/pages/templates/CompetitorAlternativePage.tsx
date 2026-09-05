import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import OpenGraphMeta from '@/components/OpenGraphMeta';
import { GeoLLMAnswerBlock } from '@/components/seo/GeoLLMAnswerBlock';
import { ListicleProposalCta } from '@/components/seo/ListicleProposalCta';
import { getCtrSeo } from '@/data/ctr-seo-overrides';
import type { CompetitorAlternativeConfig } from '@/data/competitorAlternatives';
import {
  DirectoryFaqList,
  DirectoryGoldLink,
  DirectoryHero,
  DirectoryJumpNav,
  DirectoryLinkTile,
  DirectoryOutlineLink,
  DirectorySection,
} from '@/components/seo/DirectoryPremium';

type Props = {
  config: CompetitorAlternativeConfig;
};

export default function CompetitorAlternativePage({ config }: Props) {
  const canonical = `https://www.bionixus.com${config.path}`;
  const ctr = getCtrSeo(config.path);
  const pageTitle = ctr?.title ?? config.title;
  const pageDescription = ctr?.description ?? config.description;
  const crumb = config.eyebrow;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: config.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bionixus.com/' },
      { '@type': 'ListItem', position: 2, name: crumb, item: canonical },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: pageTitle,
    numberOfItems: config.alternatives.length,
    itemListElement: config.alternatives.map((alt, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: alt.name,
      description: alt.bestFor,
    })),
  };

  return (
    <div className="directory-page min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en" href={canonical} />
        <link rel="alternate" hrefLang="x-default" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>
      <OpenGraphMeta
        title={pageTitle}
        description={pageDescription}
        image="https://www.bionixus.com/og-image.png"
        url={canonical}
        type="article"
        locale="en_US"
      />
      <Navbar />
      <main>
        <DirectoryHero
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: crumb, href: config.path },
          ]}
          kicker={config.eyebrow}
          h1={config.h1}
          lead={config.intro[0] ?? pageDescription}
          rest={
            config.intro.length > 1 ? (
              <>
                {config.intro.slice(1).map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="mt-3">
                    {paragraph}
                  </p>
                ))}
              </>
            ) : undefined
          }
          stats={[
            { value: String(config.alternatives.length), label: 'options compared' },
            { value: 'Keep + add', label: 'usual model' },
            { value: '48h', label: 'to a scoped proposal' },
            { value: 'Primary', label: 'research, not a feed' },
          ]}
          actions={
            <>
              <DirectoryGoldLink to="#request-proposal">Request a proposal</DirectoryGoldLink>
              <DirectoryOutlineLink href="#compared">Compare alternatives</DirectoryOutlineLink>
            </>
          }
        />

        <DirectoryJumpNav
          items={[
            { href: '#who-for', label: 'Who each is for' },
            { href: '#compared', label: 'Compared' },
            { href: '#keep', label: 'Keep the feed' },
            { href: '#faq', label: 'FAQ' },
            { href: '#related', label: 'Related' },
          ]}
        />

        <DirectorySection id="who-for" eyebrow="Fit" title="Who each is for">
          <GeoLLMAnswerBlock
            className="mb-8"
            question={config.geoLLM.question}
            answer={config.geoLLM.answer}
            points={config.geoLLM.points}
            summary={config.geoLLM.summary}
          />
          <div className="grid md:grid-cols-2 gap-5">
            <div className="premium-card p-6 md:p-7">
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">Stay with the incumbent when</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {config.stayWhen.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="premium-card p-6 md:p-7">
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">Add BioNixus when</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {config.addWhen.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </DirectorySection>

        <DirectorySection
          id="compared"
          surface="cream"
          eyebrow="Shortlist"
          title="Alternatives compared"
          body="Include real options. Being listed here is not an attack on the incumbent — it is a shortlist for buyers who typed this query."
        >
          <div className="overflow-x-auto rounded-2xl border border-[#EDE9E3] shadow-[0_16px_50px_rgba(6,16,31,0.05)]">
            <table className="directory-table">
              <thead>
                <tr>
                  <th scope="col">Firm</th>
                  <th scope="col">Best for</th>
                  <th scope="col">Coverage</th>
                  <th scope="col">Model</th>
                </tr>
              </thead>
              <tbody>
                {config.alternatives.map((alt) => (
                  <tr key={alt.name}>
                    <td className="font-semibold text-foreground">{alt.name}</td>
                    <td className="text-muted-foreground">{alt.bestFor}</td>
                    <td className="text-muted-foreground">{alt.region}</td>
                    <td className="text-muted-foreground">{alt.model}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DirectorySection>

        <DirectorySection
          id="keep"
          eyebrow="Complement, not replace"
          title="You do not have to switch off"
          body={
            <>
              <p>
                The usual model is the subscription you already buy, plus a custom study for the accounts, cities, and
                SKUs the feed cannot produce. BioNixus complements Nielsen, Kantar, GfK, IMS Health, and IQVIA. It does
                not replace them.
              </p>
              <p className="mt-3">
                Proposal ready within 48 hours of a brief. Email{' '}
                <a href="mailto:admin@bionixus.com" className="text-primary underline">
                  admin@bionixus.com
                </a>{' '}
                or request a proposal below.
              </p>
            </>
          }
        >
          <div />
        </DirectorySection>

        <DirectorySection id="faq" surface="cream" eyebrow="Questions" title="Frequently asked questions">
          <DirectoryFaqList items={config.faq} />
        </DirectorySection>

        <DirectorySection id="related" eyebrow="Keep reading" title="Related resources">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {config.related.map((item) => (
              <DirectoryLinkTile key={item.to} to={item.to} title={item.label} sub={item.desc} />
            ))}
          </div>
        </DirectorySection>

        <div id="request-proposal">
          <ListicleProposalCta
            countryName={config.cta.countryName}
            ctaId={config.cta.ctaId}
            headline={config.cta.headline}
            body={config.cta.body}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
