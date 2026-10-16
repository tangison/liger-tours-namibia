'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/liger-data';

function initialsOf(name: string): string {
  const parts = name.split(' ').filter((p) => p !== '&' && p !== '-');
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

/**
 * Desire chapter: testimonial carousel with overlapping monogram discs
 * and minimalist typography. Auto-advance is disabled for visitors
 * who prefer reduced motion.
 */
export default function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = window.setInterval(
      () => setIdx((i) => (i + 1) % TESTIMONIALS.length),
      6500
    );
    return () => window.clearInterval(id);
  }, [paused]);

  const t = TESTIMONIALS[idx];

  return (
    <section
      className="texture-sand relative py-32 md:py-48"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2
          id="testimonials-heading"
          className="sr-only"
        >
          What our guests say
        </h2>

        <div className="flex flex-col items-center text-center">
          {/* Overlapping monogram discs */}
          <div className="mb-10 flex -space-x-3">
            {TESTIMONIALS.map((tt, i) => (
              <button
                key={tt.name}
                onClick={() => setIdx(i)}
                aria-label={`Show testimonial from ${tt.name}`}
                aria-current={i === idx}
                className={`flex h-14 w-14 items-center justify-center rounded-full border-2 text-sm font-extrabold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[var(--color-liger-accent-deep)] focus-visible:outline-offset-2 ${
                  i === idx
                    ? 'z-10 scale-110 border-[var(--color-liger-accent)] bg-[var(--color-liger-accent)] text-[#241C16] shadow-[0_8px_24px_rgba(204,132,132,0.45)]'
                    : 'border-[#FAF7F0] bg-[var(--color-liger-primary)] text-[#F3EDDE] hover:scale-105'
                }`}
              >
                {initialsOf(tt.name)}
              </button>
            ))}
          </div>

          <Quote
            aria-hidden="true"
            className="mb-6 h-8 w-8 text-[var(--color-liger-accent)]"
          />

          <div className="min-h-[220px] sm:min-h-[190px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote className="font-display mx-auto max-w-3xl text-balance text-xl font-medium leading-relaxed text-[#2B2614] sm:text-2xl">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6">
                  <span className="block text-base font-bold text-[#2B2614]">
                    {t.name}
                  </span>
                  <span className="mt-0.5 block text-sm text-[#5D5339]">
                    {t.location}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Subtle arrows */}
          <div className="mt-10 flex items-center gap-3">
            <button
              onClick={() =>
                setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
              }
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4DCCA] text-[#2B2614] transition-all duration-200 hover:border-[var(--color-liger-accent)] hover:text-[var(--color-liger-accent-deep)] active:scale-95 focus-visible:outline-2 focus-visible:outline-[var(--color-liger-accent-deep)] focus-visible:outline-offset-2"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <span className="text-sm font-semibold tabular-nums text-[#5D5339]">
              {idx + 1} / {TESTIMONIALS.length}
            </span>
            <button
              onClick={() => setIdx((i) => (i + 1) % TESTIMONIALS.length)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4DCCA] text-[#2B2614] transition-all duration-200 hover:border-[var(--color-liger-accent)] hover:text-[var(--color-liger-accent-deep)] active:scale-95 focus-visible:outline-2 focus-visible:outline-[var(--color-liger-accent-deep)] focus-visible:outline-offset-2"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
