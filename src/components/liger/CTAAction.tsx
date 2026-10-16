import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { CONTACT } from '@/lib/liger-data';

/**
 * Action chapter: massive, high-contrast call to action over a
 * full-bleed sundowner photograph.
 */
export default function CTAAction() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="cta-heading">
      <Image
        src="/images/net/cta-sundowner.webp"
        alt=""
        role="presentation"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#201813]/80 via-[#201813]/60 to-[#201813]/90"
      />
      {/* dune contour lines over the photograph, sampled from the logo palette */}
      <div aria-hidden="true" className="pattern-dunes-dark absolute inset-0 opacity-70" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-36 sm:px-6 md:py-52 lg:px-8">
        <div className="max-w-3xl">
          {/* emblem anchor: the client's tree-and-sun mark opens the ask */}
          <Image
            src="/images/liger/emblem-white.webp"
            alt=""
            width={168}
            height={102}
            className="mb-8 h-16 w-auto object-contain opacity-95"
          />
          <h2
            id="cta-heading"
            className="font-display text-balance text-[clamp(2.6rem,5vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.02em] text-[#F3EDDE]"
          >
            Your route starts with{' '}
            <span className="text-[var(--color-liger-accent)]">one message.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#F3EDDE]/75">
            Tell us when you are coming, how long you have and what you want
            to see. We will plan the rest, from airport pickup to the last
            sundowner.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--color-liger-accent)] px-9 py-4 text-lg font-bold text-[#241C16] transition-all duration-200 hover:bg-[var(--color-liger-accent-hover)] hover:shadow-[0_12px_40px_rgba(204,132,132,0.45)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2"
            >
              WhatsApp Us Now
            </a>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="inline-flex items-center gap-2.5 rounded-full border border-[#F3EDDE]/35 px-8 py-4 text-lg font-bold text-[#F3EDDE] transition-all duration-200 hover:border-[var(--color-liger-glow)] hover:text-[var(--color-liger-glow)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {CONTACT.phoneDisplay}
            </a>
          </div>
          <p className="mt-8 text-sm tracking-wide text-[#F3EDDE]/55">
            {CONTACT.location} · {CONTACT.hours}
          </p>
        </div>
      </div>
    </section>
  );
}
