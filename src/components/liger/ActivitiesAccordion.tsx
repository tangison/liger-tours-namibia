'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Plus } from 'lucide-react';
import { ACTIVITIES } from '@/lib/liger-data';

const IMAGES: Record<string, { src: string; alt: string }> = {
  'swakopmund-coastal-adventure': {
    src: '/images/net/act-coastal.webp',
    alt: 'Red dunes running down to the Atlantic shore near Swakopmund',
  },
  'spitzkoppe-hiking-experience': {
    src: '/images/net/act-spitzkoppe.webp',
    alt: 'Granite peaks of Damaraland glowing at dusk',
  },
  'bushmen-walk': {
    src: '/images/net/act-bushmen.webp',
    alt: 'Camelthorn silhouettes on red Kalahari sand',
  },
  'traditional-cooking-class': {
    src: '/images/net/act-cooking.webp',
    alt: 'Cast iron pots steaming over an open fire',
  },
  'city-township-tour': {
    src: '/images/net/act-city.webp',
    alt: 'Windhoek city centre seen from the hills',
  },
  'game-drive-windhoek': {
    src: '/images/net/act-gamedrive.webp',
    alt: 'An open safari vehicle passing elephants at a waterhole',
  },
};

/**
 * Desire chapter: horizontal accordion (desktop hover/focus) and
 * tap-to-expand stack (mobile). Six real day activities.
 */
export default function ActivitiesAccordion() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      className="chapter-dark grain relative py-32 md:py-48"
      aria-labelledby="activities-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              id="activities-heading"
              className="font-display max-w-3xl text-balance text-[clamp(2rem,3.6vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#F3EDDE]"
            >
              Short on time? The country still{' '}
              <span className="text-[var(--color-liger-accent)]">shows up.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#F3EDDE]/65">
              Day activities from Windhoek and Swakopmund: a few hours or a
              full day, real culture and real wildlife.
            </p>
          </div>
          <Link
            href="/activities"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#F3EDDE]/30 px-7 py-3.5 text-base font-bold text-[#F3EDDE] transition-all duration-200 hover:border-[var(--color-liger-glow)] hover:text-[var(--color-liger-glow)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2"
          >
            All activities
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile: tap-to-expand stack */}
        <div className="flex flex-col gap-3 md:hidden">
          {ACTIVITIES.map((a, i) => {
            const img = IMAGES[a.slug];
            const isOpen = activeIdx === i;
            return (
              <div
                key={a.slug}
                className="overflow-hidden rounded-2xl bg-white/5"
              >
                <button
                  onClick={() => setActiveIdx(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2"
                >
                  <span className="font-display text-lg font-extrabold text-[#F3EDDE]">
                    {a.title}
                  </span>
                  <Plus
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 text-[var(--color-liger-glow)] transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                {isOpen && img ? (
                  <div className="px-5 pb-5">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-liger-glow)]">
                      {a.duration}
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-[#F3EDDE]/75">
                      {a.intro}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        {/* Desktop: horizontal accordion, expands on hover and focus */}
        <div className="hidden h-[560px] gap-2 md:flex" role="list">
          {ACTIVITIES.map((a) => {
            const img = IMAGES[a.slug];
            return (
              <Link
                key={a.slug}
                href="/activities"
                role="listitem"
                className="group acc-slice relative flex-1 overflow-hidden rounded-3xl transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:flex-[2.8] focus-visible:flex-[2.8] focus-within:flex-[2.8] focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2"
              >
                {img ? (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="20vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : null}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#201813]/90 via-[#201813]/25 to-[#201813]/40"
                />
                {/* Collapsed label */}
                <span className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-base font-bold tracking-wide text-[#F3EDDE] [writing-mode:vertical-rl] transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0">
                  {a.title}
                </span>
                {/* Expanded panel */}
                <span className="absolute inset-x-0 bottom-0 p-7 opacity-0 transition-opacity delay-150 duration-500 group-hover:opacity-100 group-focus-within:opacity-100">
                  <span className="block text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-liger-glow)]">
                    {a.duration}
                  </span>
                  <span className="font-display mt-2 block text-2xl font-extrabold leading-tight text-[#F3EDDE]">
                    {a.title}
                  </span>
                  <span className="mt-3 block text-[15px] leading-relaxed text-[#F3EDDE]/75">
                    {a.intro}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
