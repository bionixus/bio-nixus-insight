import { Link, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { SEOHead } from '@/components/seo/SEOHead';
import { CTASection } from '@/components/shared/CTASection';
import { YouTubeEmbed } from '@/components/media/YouTubeEmbed';
import NotFound from '@/pages/NotFound';
import { getVideoBySlug, type SiteVideo } from '@/data/videos';
import { buildVideoWatchPageSchemas } from '@/lib/seo/schemas';

function WatchPlayer({ video }: { video: SiteVideo }) {
  if (video.youtubeId) {
    return <YouTubeEmbed videoId={video.youtubeId} title={video.name} />;
  }
  if (video.contentUrl) {
    return (
      <video
        controls
        preload="metadata"
        poster={video.thumbnailUrl}
        width={1280}
        height={720}
        className="w-full aspect-video bg-muted"
      >
        <source src={video.contentUrl.replace('https://www.bionixus.com', '')} type="video/mp4" />
      </video>
    );
  }
  return null;
}

export default function VideoWatchPage() {
  const { slug } = useParams<{ slug: string }>();
  const video = slug ? getVideoBySlug(slug) : undefined;

  if (!video) {
    return <NotFound />;
  }

  const path = `/videos/${video.slug}`;
  const title = `${video.name} | BioNixus`;
  const description =
    video.description.length > 160 ? `${video.description.slice(0, 157)}...` : video.description;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={title}
        description={description}
        canonical={path}
        ogImage={video.thumbnailUrl}
        ogType="video.other"
        jsonLd={buildVideoWatchPageSchemas(video)}
      />
      <Navbar />
      <main>
        <div className="container-wide max-w-4xl mx-auto pt-6">
          <BreadcrumbNav
            items={[
              { name: 'Home', href: '/' },
              { name: 'Videos', href: '/videos' },
              { name: video.name, href: path },
            ]}
          />
        </div>

        <article className="container-wide max-w-4xl mx-auto section-padding pt-4 pb-12">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-primary tracking-tight mb-4">
            {video.name}
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-6">{video.description}</p>

          <figure className="rounded-xl border border-border bg-card overflow-hidden mb-8">
            <WatchPlayer video={video} />
          </figure>

          <section aria-labelledby="video-transcript-heading" className="mb-10">
            <h2 id="video-transcript-heading" className="font-display text-xl font-semibold text-foreground mb-3">
              Transcript
            </h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{video.transcript}</p>
          </section>

          {video.relatedLinks.length > 0 ? (
            <section aria-labelledby="video-related-heading" className="mb-4">
              <h2 id="video-related-heading" className="font-display text-xl font-semibold text-foreground mb-3">
                Related resources
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {video.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-primary font-medium hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </article>

        <CTASection variant="service" />
      </main>
      <Footer />
    </div>
  );
}
