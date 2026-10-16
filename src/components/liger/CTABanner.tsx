'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Clock, Mail, MessageCircle, Phone } from 'lucide-react';
import { CONTACT } from '@/lib/liger-data';

export default function CTABanner() {
  return (
    <section id="cta" className="relative py-16 sm:py-20 bg-[var(--color-liger-dark)] overflow-hidden" aria-labelledby="cta-heading">
      {/* Sun gradient glow, sampled from the logo */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FFD54D 0%, #FC8D40 45%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="cta-heading" className="font-body text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight text-balance">
            Ready to Plan Your{' '}
            <span className="script-accent text-[var(--color-liger-accent)]">Namibian Adventure</span>?
          </h2>
          <p className="text-white/75 font-body text-base sm:text-lg max-w-xl mx-auto mb-8">
            Enquire about pricing, current offers and the arrangements we can
            help you with. We answer calls and messages between 7:30 AM and
            11:00 PM.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              asChild
              size="lg"
              className="bg-[var(--color-liger-accent)] hover:bg-[var(--color-liger-accent-hover)] text-[#262115] rounded-lg px-8 py-6 text-base font-semibold gap-2 shadow-[0_4px_24px_rgba(252,141,64,0.35)] active:scale-[0.98] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </Button>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="inline-flex items-center gap-2 text-white font-body text-base font-semibold group focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 rounded-sm px-2 py-2"
            >
              <Phone className="w-5 h-5 text-[var(--color-liger-glow)]" aria-hidden="true" />
              {CONTACT.phoneDisplay}
              <span className="absolute" />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-sm text-white/60 font-body">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-[var(--color-liger-accent)]" aria-hidden="true" />
              Reception: 7:30 AM - 11:00 PM
            </span>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 hover:text-[var(--color-liger-glow)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2 rounded-sm"
            >
              <Mail className="w-4 h-4 text-[var(--color-liger-accent)]" aria-hidden="true" />
              {CONTACT.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
