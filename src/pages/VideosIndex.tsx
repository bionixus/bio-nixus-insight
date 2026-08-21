import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav';
import { SEOHead } from '@/components/seo/SEOHead';
import { CTASection } from '@/components/shared/CTASection';
import { OptimizedImage } from '@/components/media/OptimizedImage';
import { getAllVideos } from '@/data/videos';
import { buildVideosIndexSchemas } from '@/lib/seo/schemas';

export default function VideosIndex() {
  const videos = getAllVideos();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Market Research Videos | BioNixus"
        description="Watch BioNixus healthcare and consumer market research overview videos — methodology, fieldwork, and decision-ready insight programmes."
        canonical="/videos"
        jsonLd={buildVideosIndexSchemas(videos)}
      />
      <Navbar />
      <main>
        <div className="container-wide max-w-4xl mx-auto pt-6">
          <BreadcrumbNav
            items={[
              { name: 'Home', href: '/' },
              { name: 'Videos', href: '/videos' },
            ]}
          />
        </div>

        <section className="container-wide max-w-4xl mx-auto section-padding pt-4">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-primary tracking-tight">
            Market research videos
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Dedicated watch pages for BioNixus overview videos. Each page focuses on a single video with
            transcript and programme context.
          </p>
        </section>

        <section className="container-wide max-w-4xl mx-auto pb-16" aria-label="Video list">
          <ul className="grid gap-8 sm:grid-cols-2">
            {videos.map((video) => (
              <li key={video.slug}>
                <Link
                  to={`/videos/${video.slug}`}
                  className="group block rounded-xl border border-border overflow-hidden bg-card hover:border-primary/40 transition-colors"
                >
                  <OptimizedImage
                    src={video.thumbnailUrl}
                    alt={`${video.name} — video thumbnail`}
                    width={480}
                    height={360}
                    className="w-full aspect-video object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h2 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {video.name}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{video.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <CTASection variant="service" />
      </main>
      <Footer />
    </div>
  );
}
