'use client';

import { motion } from 'framer-motion';
import { Compass, Heart, MapPin, ShieldCheck, Users } from 'lucide-react';
import { DIFFERENTIATORS } from '@/lib/liger-data';

const ICONS = [MapPin, Compass, Users, ShieldCheck, Heart];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-16 sm:py-24 bg-background texture-sand" aria-labelledby="why-choose-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[var(--color-liger-accent-deep)] uppercase tracking-[0.2em] text-xs font-semibold font-body mb-3">
            What makes us different
          </p>
          <h2 id="why-choose-heading" className="font-body text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight text-balance">
            Why Travel With{' '}
            <span className="script-accent text-[var(--color-liger-accent-deep)]">Liger Tours</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
          {DIFFERENTIATORS.map((feature, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl hover:shadow-[0_8px_30px_rgba(43,38,20,0.1)] hover:ring-1 hover:ring-accent/20 text-center group transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary group-hover:text-[var(--color-liger-accent-deep)] transition-colors" aria-hidden="true" />
                </div>
                <h3 className="font-body font-bold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground/80 text-sm font-body leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
