'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT } from '@/lib/liger-data';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Scroll craft: the hero photo drifts and deepens as you scroll away
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen min-h-[620px] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background image: Ken Burns on arrival, parallax on scroll */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/liger/jewels-of-namibia.webp"
          alt="Golden dunes of the Namib desert, the Jewels of Namibia route"
          fill
          className="object-cover animate-kenburns"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay: olive-black gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#262115]/55 via-[#262115]/25 to-[#262115]/60" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[var(--color-liger-glow)] uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold mb-4 font-body"
        >
          Windhoek, Namibia
        </motion.p>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white max-w-4xl leading-[1.08] tracking-tight text-balance"
        >
          Discover <span className="script-accent text-[var(--color-liger-accent)]">Namibia</span> with Liger Tours
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-white/90 max-w-2xl text-base sm:text-lg font-body leading-relaxed"
        >
          Authentic experiences, unforgettable adventures and breathtaking
          landscapes. Guided small-group tours and safaris across Sossusvlei,
          Etosha, Swakopmund and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <Button
            asChild
            size="lg"
            className="bg-[var(--color-liger-accent)] hover:bg-[var(--color-liger-accent-hover)] text-[#262115] rounded-lg px-8 py-6 text-base font-semibold shadow-[0_4px_24px_rgba(252,141,64,0.35)] active:scale-[0.98] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Adventure
            </a>
          </Button>
          <a
            href="/tours"
            className="relative inline-flex items-center gap-2 text-white font-body text-base font-semibold group focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded-sm"
          >
            Explore Our Tours
            <span className="inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-2">
              <ArrowRight className="w-4 h-4 text-[var(--color-liger-glow)] transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-px bg-[var(--color-liger-glow)] transition-all duration-300 group-hover:w-full" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
