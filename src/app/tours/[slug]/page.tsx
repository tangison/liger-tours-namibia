import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, MapPin, Star } from 'lucide-react';
import SiteLayout from '@/components/liger/SiteLayout';
import CTABanner from '@/components/liger/CTABanner';
import { TOURS } from '@/lib/liger-data';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return TOURS.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = TOURS.find((t) => t.slug === slug);
  if (!tour) return {};
  return {
    title: tour.title,
    description: tour.description,
    alternates: { canonical: `/tours/${tour.slug}` },
    openGraph: {
      title: `${tour.title} | Liger Tours Namibia`,
      description: tour.description,
      images: [{ url: tour.image, width: 1600, height: 1066, alt: tour.imageAlt }],
    },
  };
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  const tour = TOURS.find((t) => t.slug === slug);
  if (!tour) notFound();

  const others = TOURS.filter((t) => t.slug !== tour.slug).slice(0, 3);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-[52vh] min-h-[420px] overflow-hidden" aria-label={tour.title}>
        <Image
          src={tour.image}
          alt={tour.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#201813]/45 via-[#201813]/30 to-[#201813]/70" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-10">
          <nav aria-label="Breadcrumb" className="mb-4">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-body font-medium transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded-sm"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              All tours
            </Link>
          </nav>
          <h1 className="font-body text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight tracking-tight text-balance">
            {tour.title}
          </h1>
          {tour.duration ? (
            <p className="mt-3 inline-flex items-center gap-2 bg-[#201813]/70 text-white px-3 py-1.5 rounded-full text-xs font-semibold font-body backdrop-blur-sm w-fit">
              <Star className="w-3.5 h-3.5 text-[var(--color-liger-glow)]" aria-hidden="true" />
              {tour.duration}
            </p>
          ) : null}
        </div>
      </section>

      {/* Body */}
      <section className="py-14 sm:py-20 bg-background" aria-label="Tour details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <p className="text-[var(--color-liger-accent-deep)] uppercase tracking-[0.2em] text-xs font-semibold font-body mb-3">
                Overview
              </p>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                {tour.overview ? tour.overview : tour.description}
              </p>
            </div>

            {tour.experience ? (
              <div>
                <h2 className="font-body text-2xl font-bold text-primary mb-4">
                  What You&rsquo;ll Experience
                </h2>
                <ul className="space-y-3">
                  {tour.experience.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground font-body">
                      <span className="mt-0.5 w-6 h-6 shrink-0 bg-accent/15 rounded-full flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-[var(--color-liger-accent-deep)]" aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white rounded-2xl border border-border p-6">
              <h2 className="font-body text-lg font-bold text-primary mb-4">
                Tour Highlights
              </h2>
              <ul className="space-y-2.5">
                {tour.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-sm text-muted-foreground font-body">
                    <MapPin className="w-4 h-4 shrink-0 text-[var(--color-liger-accent-deep)]" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/264814722552"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[var(--color-liger-accent)] hover:bg-[var(--color-liger-accent-hover)] text-[#201813] font-body font-semibold rounded-lg px-5 py-3.5 transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[var(--color-liger-accent-deep)] focus-visible:outline-offset-2"
              >
                Enquire About This Tour
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <p className="text-xs text-muted-foreground/70 font-body mt-3 text-center">
                Personal reply between 7:30 AM and 11:00 PM.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Other tours */}
      <section className="py-14 bg-white" aria-label="Other tours">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-body text-2xl font-bold text-primary mb-8">Also consider</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((t) => (
              <Link
                key={t.slug}
                href={`/tours/${t.slug}`}
                className="group rounded-2xl overflow-hidden bg-background/80 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(43,38,20,0.12)] hover:ring-1 hover:ring-accent/30 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[var(--color-liger-accent-deep)] focus-visible:outline-offset-2"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-body font-bold text-primary text-balance">{t.cardTitle}</h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm text-[var(--color-liger-accent-deep)] font-semibold font-body group-hover:gap-2.5 transition-all">
                    View Tour
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}
