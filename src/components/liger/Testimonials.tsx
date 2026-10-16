'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/liger-data';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-background texture-sand" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[var(--color-liger-accent-deep)] uppercase tracking-[0.2em] text-xs font-semibold font-body mb-3">
            Guest stories
          </p>
          <h2 id="testimonials-heading" className="font-body text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight text-balance">
            What Our Guests{' '}
            <span className="script-accent text-[var(--color-liger-accent-deep)]">Say</span>
          </h2>
          <p className="mt-4 text-muted-foreground/80 max-w-xl mx-auto font-body">
            We take pride in serving our guests with the best experience. Read
            what they say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:shadow-[0_8px_30px_rgba(43,38,20,0.12)] hover:ring-1 hover:ring-accent/30 transition-all duration-300 hover:-translate-y-0.5 relative"
            >
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-accent/40" aria-hidden="true" />
                <span className="flex items-center gap-0.5" aria-label="Rated 5 out of 5">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-[var(--color-liger-accent)] text-[var(--color-liger-accent)]" aria-hidden="true" />
                  ))}
                </span>
              </div>
              <blockquote className="text-muted-foreground font-body leading-relaxed text-sm sm:text-base mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="border-t border-muted-foreground/10 pt-4">
                <p className="font-body font-bold text-primary text-sm">
                  {t.name}
                </p>
                <p className="text-muted-foreground/80 text-xs font-body mt-0.5">
                  {t.location}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
