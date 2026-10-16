'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Binoculars, ChevronRight, Clock, CookingPot, Footprints, Landmark, TentTree } from 'lucide-react';
import Link from 'next/link';
import { ACTIVITIES } from '@/lib/liger-data';

const ICONS = [TentTree, Footprints, Binoculars, CookingPot, Landmark, Binoculars];

export default function ActivitiesShowcase() {
  return (
    <section id="activities" className="py-16 sm:py-24 bg-white" aria-labelledby="activities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[var(--color-liger-accent-deep)] uppercase tracking-[0.2em] text-xs font-semibold font-body mb-3">
            Day tours & experiences
          </p>
          <h2 id="activities-heading" className="font-body text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight text-balance">
            Short on Time?{' '}
            <span className="script-accent text-[var(--color-liger-accent-deep)]">Start Here</span>
          </h2>
          <p className="mt-4 text-muted-foreground/80 max-w-2xl mx-auto font-body">
            Half-day and full-day experiences around Windhoek and the coast, from
            San-guided bush walks to traditional cooking classes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {ACTIVITIES.map((activity, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={activity.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group bg-background/80 border border-border rounded-2xl p-6 hover:shadow-[0_8px_30px_rgba(43,38,20,0.12)] hover:ring-1 hover:ring-accent/30 hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-[var(--color-liger-accent-deep)] transition-colors" aria-hidden="true" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-[var(--color-liger-cream)] text-primary text-xs font-semibold font-body px-3 py-1.5 rounded-full">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    {activity.duration}
                  </span>
                </div>
                <h3 className="font-body text-lg font-bold text-primary mb-2 text-balance">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground/80 text-sm font-body leading-relaxed mb-4 flex-1">
                  {activity.intro}
                </p>
                <Link
                  href={`/activities#${activity.slug}`}
                  className="inline-flex items-center gap-1.5 text-[var(--color-liger-accent-deep)] font-semibold text-sm font-body group-hover:gap-2.5 transition-all focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
                  aria-label={`Read the full ${activity.title} itinerary`}
                >
                  What happens
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-10"
        >
          <Link
            href="/activities"
            className="inline-flex items-center gap-2 font-body font-semibold text-primary hover:text-[var(--color-liger-accent-deep)] transition-colors group focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
          >
            View all activities in detail
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
