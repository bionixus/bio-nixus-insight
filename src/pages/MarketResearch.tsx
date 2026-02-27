import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, MessageSquareQuote, Trophy } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const pageUrl = 'https://www.bionixus.com/market-research';

const MarketResearch = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>BioNixus Market Research | Qualitative & Quantitative Services</title>
        <meta
          name="description"
          content="Discover BioNixus market research success across healthcare and pharma, with dedicated qualitative and quantitative research services."
        />
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      <Navbar />

      <main>
        <section className="section-padding pt-24 pb-12">
          <div className="container-wide max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4">
              BioNixus Market Research
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
              BioNixus supports healthcare and pharmaceutical teams with decision-ready market research built for
              launch planning, product optimization, access strategy, and market expansion. Our work combines local
              market depth with global rigor to help brands move from assumptions to confident actions.
            </p>
          </div>
        </section>

        <section className="section-padding py-8">
          <div className="container-wide max-w-5xl mx-auto grid md:grid-cols-3 gap-4">
            <article className="bg-card border border-border rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                <Trophy className="w-5 h-5" />
              </div>
              <h2 className="font-display font-semibold text-foreground mb-2">Proven success model</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Structured research programs aligned to commercial, medical, and access priorities.
              </p>
            </article>
            <article className="bg-card border border-border rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h2 className="font-display font-semibold text-foreground mb-2">Quantitative precision</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Robust sample design, advanced analytics, and measurable outputs for confident decisions.
              </p>
            </article>
            <article className="bg-card border border-border rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                <MessageSquareQuote className="w-5 h-5" />
              </div>
              <h2 className="font-display font-semibold text-foreground mb-2">Qualitative depth</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Deep stakeholder insight from physicians, payers, patients, and healthcare decision makers.
              </p>
            </article>
          </div>
        </section>

        <section className="section-padding py-8">
          <div className="container-wide max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Explore our market research services
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Choose a track to go directly to the dedicated service page.
              </p>

              <Tabs defaultValue="quantitative" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="quantitative">Quantitative</TabsTrigger>
                  <TabsTrigger value="qualitative">Qualitative</TabsTrigger>
                </TabsList>

                <TabsContent value="quantitative" className="pt-4">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Quantitative research services for healthcare and pharma teams, including market sizing,
                    segmentation, physician surveys, pricing research, and advanced statistical modeling.
                  </p>
                  <Link
                    to="/services/quantitative-research"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    Open Quantitative Market Research
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </TabsContent>

                <TabsContent value="qualitative" className="pt-4">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Qualitative research services including in-depth interviews, advisory boards, pathway mapping, and
                    insight synthesis to uncover decision drivers and adoption barriers.
                  </p>
                  <Link
                    to="/services/qualitative-research"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    Open Qualitative Market Research
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MarketResearch;
