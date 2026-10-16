'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ABOUT_STORY } from '@/lib/liger-data';

/**
 * Desire chapter: Scrubbing Text Reveals.
 * The story paragraph words move from opacity 0.1 to 1.0 sequentially
 * as the visitor scrolls, next to a wide Namibian dusk photograph.
 */
gsap.registerPlugin(ScrollTrigger, useGSAP);

const STORY_TEXT =
  ABOUT_STORY.lead +
  ' ' +
  ABOUT_STORY.paragraphs[0];

export default function StoryScrub() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const words = gsap.utils.toArray<HTMLElement>('.scrub-word');
        gsap.set(words, { opacity: 0.1 });
        gsap.to(words, {
          opacity: 1,
          stagger: 0.08,
          ease: 'none',
          scrollTrigger: {
            trigger: '.scrub-paragraph',
            start: 'top 80%',
            end: 'bottom 45%',
            scrub: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="texture-sand relative py-32 md:py-48"
      aria-labelledby="story-heading"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_rgba(43,38,20,0.18)] lg:order-1">
          <Image
            src="/images/net/story-oryx.webp"
            alt="The Milky Way rising over granite rocks in the Namib desert at night"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2
            id="story-heading"
            className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-liger-accent-deep)]"
          >
            Liger Tours Namibia
          </h2>
          <p className="scrub-paragraph font-display mt-6 max-w-2xl text-2xl font-semibold leading-snug tracking-[-0.01em] text-[#2B2614] sm:text-3xl md:text-[2.6rem] md:leading-[1.2]">
            {STORY_TEXT.split(' ').map((word, i) => (
              <span key={i} className="scrub-word inline-block">
                {word}
                {'\u00A0'}
              </span>
            ))}
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 border-t border-[#E4DCCA] pt-8 sm:grid-cols-2">
            <p className="text-base leading-relaxed text-[#5D5339]">
              Registered with the Namibia Tourism Board, we hold every journey
              to professional standards, from the first enquiry to the last
              kilometre.
            </p>
            <p className="text-base leading-relaxed text-[#5D5339]">
              Founded by an Environmental Sciences graduate, our itineraries
              are planned with care for the landscapes and communities that
              host them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
