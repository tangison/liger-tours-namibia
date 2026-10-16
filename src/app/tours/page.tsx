import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import SiteLayout from '@/components/liger/SiteLayout';
import CTABanner from '@/components/liger/CTABanner';
import { TOURS } from '@/lib/liger-data';

export const metadata: Metadata = {
  title: 'Multi-Day Tours',
  description:
    'All Liger Tours Namibia multi-day routes: from the 3-day Etosha and Waterberg adventure to the 24-day Namibia Discovery. Departing from Windhoek.',
  alternates: { canonical: '/tours' },
};

export default function ToursPage() {
  return (
    <SiteLayout>
      <section className="pt-28 sm:pt-36 pb-12 bg-background texture-sand" aria-labelledby="tours-page-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[var(--color-liger-accent-deep)] uppercase tracking-[0.2em] text-xs font-semibold font-body mb-3">
            Multi-day tours
          </p>
          <h1 id="tours-page-heading" className="font-body text-4xl sm:text-5xl font-bold text-primary tracking-tight text-balance">
            Choose Your Route Across{' '}
            <span className="script-accent text-[var(--color-liger-accent-deep)]">Namibia</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl font-body text-base sm:text-lg leading-relaxed">
            Every itinerary is thoughtfully planned to suit your interests, pace,
            and travel style. If you are looking for a home away from home, just
            walk in here: an incredible and relaxing experience while you are on
            holiday.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 bg-background" aria-label="Tour list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {TOURS.map((tour, i) => (
              <article
                key={tour.slug}
                className={`group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(43,38,20,0.12)] hover:ring-1 hover:ring-accent/30 hover:-translate-y-0.5 flex flex-col ${
                  i === 0 ? 'md:col-span-2 lg:col-span-2 lg:flex-row' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${i === 0 ? 'lg:w-1/2 min-h-64' : 'h-56 sm:h-64'}`}>
                  <Image
                    src={tour.image}
                    alt={tour.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes={i === 0 ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
                  />
                  {tour.duration ? (
                    <div className="absolute top-4 left-4 bg-[#262115]/85 text-white px-3 py-1 rounded-full text-xs font-semibold font-body backdrop-blur-sm">
                      {tour.duration}
                    </div>
                  ) : null}
                </div>
                <div className={`p-5 sm:p-6 flex flex-col ${i === 0 ? 'lg:w-1/2 lg:justify-center' : 'flex-1'}`}>
                  <p className="flex items-center gap-1.5 text-[var(--color-liger-accent-deep)] text-xs font-semibold font-body mb-2">
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    {tour.featured ? 'Signature route' : 'Multi-day tour'}
                  </p>
                  <h2 className={`font-body font-bold text-primary mb-2 text-balance ${i === 0 ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
                    {tour.cardTitle}
                  </h2>
                  <p className="text-muted-foreground/80 text-sm font-body leading-relaxed mb-4 flex-1">
                    {tour.description}
                  </p>
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="inline-flex items-center gap-2 text-[var(--color-liger-accent-deep)] font-semibold text-sm font-body hover:gap-3 transition-all focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
                    aria-label={`View the ${tour.title} itinerary`}
                  >
                    View Tour
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 bg-[var(--color-liger-cream)] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="flex items-center gap-2 text-primary font-body text-sm sm:text-base">
              <Clock className="w-5 h-5 text-[var(--color-liger-accent-deep)]" aria-hidden="true" />
              Durations, dates and rates are confirmed personally for every enquiry.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-body font-semibold text-[var(--color-liger-accent-deep)] hover:text-primary transition-colors group focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
            >
              Ask about a route
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}
