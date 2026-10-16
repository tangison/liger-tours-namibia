'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';
import { TOURS } from '@/lib/liger-data';

/**
 * Desire chapter: tour journeys with the Image Scale & Fade Scroll paradigm.
 * Images grow from scale 0.8 to 1.0 on entry, then darken and fade on exit.
 * All motion is gated behind prefers-reduced-motion.
 */
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ToursScroll() {
  const container = useRef<HTMLElement>(null);
  const [featured, ...rest] = TOURS;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('.tour-img-wrap').forEach((wrap) => {
          const img = wrap.querySelector('img');
          if (!img) return;
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: wrap,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
          tl.fromTo(
            img,
            { scale: 0.8, opacity: 0.55 },
            { scale: 1, opacity: 1, ease: 'none', duration: 0.5 }
          ).to(img, {
            scale: 1.04,
            opacity: 0.3,
            filter: 'brightness(0.5)',
            ease: 'none',
            duration: 0.5,
          });
        });

        gsap.utils.toArray<HTMLElement>('.tour-copy').forEach((copy) => {
          gsap.from(copy, {
            opacity: 0,
            y: 44,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: copy, start: 'top 85%', once: true },
          });
        });
      });
      return () => mm.revert();
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="chapter-dark grain relative py-32 md:py-48"
      aria-labelledby="tours-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-24">
          <h2
            id="tours-heading"
            className="font-display max-w-4xl text-balance text-[clamp(2rem,3.6vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#F3EDDE]"
          >
            Journeys built around{' '}
            <span className="text-[var(--color-liger-accent)]">your pace</span>,
            not a schedule.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#F3EDDE]/65">
            Seven real routes, from a three day Etosha sprint to a twenty four
            day crossing of the country. Every one is adjustable to you.
          </p>
        </div>

        {/* Featured journey */}
        <article className="mb-20 grid grid-cols-1 items-center gap-10 lg:mb-28 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="tour-img-wrap relative aspect-[16/10] overflow-hidden rounded-[2rem]">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover will-change-transform"
            />
          </div>
          <div className="tour-copy">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-liger-glow)]">
              {featured.duration ?? 'Signature journey'}
            </p>
            <h3 className="font-display mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#F3EDDE] sm:text-4xl">
              {featured.cardTitle}
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-[#F3EDDE]/70">
              {featured.description}
            </p>
            <Link
              href={`/tours/${featured.slug}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-liger-accent)] px-7 py-3.5 text-base font-bold text-[#201813] transition-all duration-200 hover:bg-[var(--color-liger-accent-hover)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2"
            >
              View the itinerary
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </article>

        {/* Remaining journeys */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {rest.map((tour, i) => (
            <article
              key={tour.slug}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Link
                href={`/tours/${tour.slug}`}
                className="tour-img-wrap group relative block aspect-[16/10] overflow-hidden rounded-[2rem] focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-4"
              >
                <Image
                  src={tour.image}
                  alt={tour.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
                />
              </Link>
              <div className="tour-copy">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-liger-glow)]">
                  {tour.duration ?? 'Multi-day tour'}
                </p>
                <h3 className="font-display mt-4 text-2xl font-extrabold leading-tight tracking-tight text-[#F3EDDE] sm:text-3xl">
                  {tour.cardTitle}
                </h3>
                <p className="mt-4 leading-relaxed text-[#F3EDDE]/70">
                  {tour.description}
                </p>
                <Link
                  href={`/tours/${tour.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-base font-bold text-[var(--color-liger-glow)] transition-colors hover:text-[var(--color-liger-accent)] focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2"
                >
                  View the itinerary
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 lg:mt-28">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 rounded-full border border-[#F3EDDE]/30 px-8 py-4 text-base font-bold text-[#F3EDDE] transition-all duration-200 hover:border-[var(--color-liger-glow)] hover:text-[var(--color-liger-glow)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2"
          >
            See all tours
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
