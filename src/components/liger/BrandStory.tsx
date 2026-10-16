'use client';

import { motion } from 'framer-motion';
import { Award, Route } from 'lucide-react';
import Image from 'next/image';

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-24 bg-background texture-sand" aria-labelledby="brand-story-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image: real client photo from the Etosha portfolio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(43,38,20,0.16)]"
          >
            <Image
              src="/images/liger/etosha-rhino.webp"
              alt="Black rhino drinking at a waterhole in Etosha National Park"
              width={1600}
              height={1066}
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#201813]/35 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-[var(--color-liger-accent-deep)] uppercase tracking-[0.2em] text-xs font-semibold font-body">
              Our story
            </p>
            <h2 id="brand-story-heading" className="font-body text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight tracking-tight text-balance">
              Travel That Feels{' '}
              <span className="script-accent text-[var(--color-liger-accent-deep)]">Effortless</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed font-body text-base sm:text-lg">
              At Liger Tours Namibia, we believe travel should be effortless,
              meaningful, and unforgettable. Founded by an Environmental Sciences
              graduate with a deep appreciation for nature and sustainable travel,
              we create personalized experiences that connect visitors with the
              heart of our country: from iconic destinations to hidden gems,
              every itinerary is thoughtfully planned to suit your interests,
              pace, and travel style.
            </p>

            {/* Value cards: real claims from the client's own about page */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white/70 backdrop-blur-sm p-5 rounded-2xl hover:shadow-[0_8px_30px_rgba(43,38,20,0.12)] hover:ring-1 hover:ring-accent/30 transition-all duration-300 hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-accent">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-primary font-body text-sm">
                  Registered with the NTB
                </h3>
                <p className="text-muted-foreground/80 text-sm mt-1 font-body">
                  Professional standards and reliable, high-quality travel services.
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-5 rounded-2xl hover:shadow-[0_8px_30px_rgba(43,38,20,0.12)] hover:ring-1 hover:ring-accent/30 transition-all duration-300 hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-accent">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <Route className="w-5 h-5 text-[var(--color-liger-accent-deep)]" />
                </div>
                <h3 className="font-semibold text-primary font-body text-sm">
                  Personalized Itineraries
                </h3>
                <p className="text-muted-foreground/80 text-sm mt-1 font-body">
                  Planned around your interests, pace, and travel style.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
