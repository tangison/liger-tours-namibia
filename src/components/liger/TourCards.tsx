'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { TOURS } from '@/lib/liger-data';

export default function TourCards() {
  const featured = TOURS.filter((t) => !t.cardTitle.includes('24 Days')).slice(0, 3);

  return (
    <section id="tour-cards" className="py-16 sm:py-24 bg-white" aria-labelledby="tours-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[var(--color-liger-accent-deep)] uppercase tracking-[0.2em] text-xs font-semibold font-body mb-3">
            Featured multi-day tours
          </p>
          <h2 id="tours-heading" className="font-body text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight text-balance">
            Signature Journeys Across{' '}
            <span className="script-accent text-[var(--color-liger-accent-deep)]">Namibia</span>
          </h2>
          <p className="mt-4 text-muted-foreground/80 max-w-2xl mx-auto font-body">
            Multi-day routes planned around your interests, pace, and travel style,
            departing from Windhoek.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((item, i) => (
            <motion.article
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-background/80 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(43,38,20,0.12)] hover:ring-1 hover:ring-accent/30 hover:-translate-y-0.5"
            >
              <div className="relative overflow-hidden h-56 sm:h-64">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {item.duration ? (
                  <div className="absolute top-4 left-4 bg-[#262115]/85 text-white px-3 py-1 rounded-full text-xs font-semibold font-body backdrop-blur-sm">
                    {item.duration}
                  </div>
                ) : null}
              </div>
              <div className="p-5 sm:p-6">
                <p className="flex items-center gap-1.5 text-[var(--color-liger-accent-deep)] text-xs font-semibold font-body mb-2">
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  Multi-day tour
                </p>
                <h3 className="font-body text-xl sm:text-2xl font-bold text-primary mb-2 text-balance">
                  {item.cardTitle}
                </h3>
                <p className="text-muted-foreground/80 text-sm font-body leading-relaxed mb-4">
                  {item.description}
                </p>
                <Link
                  href={`/tours/${item.slug}`}
                  className="inline-flex items-center gap-2 text-[var(--color-liger-accent-deep)] font-semibold text-sm font-body hover:gap-3 transition-all focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
                >
                  View Tour
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-10"
        >
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 font-body font-semibold text-primary hover:text-[var(--color-liger-accent-deep)] transition-colors group focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
          >
            See all tours, including the 24-day discovery route
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
