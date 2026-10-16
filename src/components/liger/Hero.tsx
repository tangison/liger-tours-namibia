import Link from 'next/link';
import Image from 'next/image';
import { CONTACT } from '@/lib/liger-data';

/**
 * Attention chapter: Editorial Split.
 * Text left in a max-w-5xl container (H1 locked to 2 lines),
 * portrait photograph right, massive negative space between chapters.
 */
export default function Hero() {
  return (
    <section
      className="chapter-dark grain relative flex min-h-svh items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Ambient glows sampled from the logo sun gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[var(--color-liger-accent)] opacity-[0.14] blur-[140px]" />
        <div className="absolute -bottom-48 -left-32 h-[520px] w-[520px] rounded-full bg-[var(--color-liger-glow)] opacity-[0.08] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-4 pb-24 pt-36 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:px-8 lg:pb-32 lg:pt-40">
        {/* Text column */}
        <div className="reveal-up">
          <h1
            id="hero-heading"
            className="font-display max-w-5xl text-balance text-[clamp(2.5rem,4.6vw,4rem)] font-extrabold leading-[1.04] tracking-[-0.02em] text-[#F3EDDE]"
          >
            Discover{' '}
            <span
              aria-hidden="true"
              className="mx-1 inline-block h-[0.68em] w-[1.3em] translate-y-[0.06em] rounded-full bg-cover bg-center align-baseline shadow-[0_6px_24px_rgba(204,132,132,0.45)]"
              style={{ backgroundImage: "url('/images/net/pill-deadvlei.webp')" }}
            />
            Namibia with{' '}
            <span className="text-[var(--color-liger-accent)]">Liger Tours</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#F3EDDE]/70 sm:text-xl">
            Authentic experiences, unforgettable adventures and breathtaking
            landscapes. Guided small-group tours and safaris across Sossusvlei,
            Etosha, Swakopmund and beyond.
          </p>

          {/* Exactly two high-contrast CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/tours"
              className="rounded-full bg-[var(--color-liger-accent)] px-8 py-4 text-base font-bold text-[#241C16] transition-all duration-200 hover:bg-[var(--color-liger-accent-hover)] hover:shadow-[0_12px_40px_rgba(204,132,132,0.45)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2"
            >
              Plan My Tour
            </Link>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#F3EDDE]/30 px-8 py-4 text-base font-bold text-[#F3EDDE] transition-all duration-200 hover:border-[var(--color-liger-glow)] hover:text-[var(--color-liger-glow)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Image column: editorial portrait with location caption */}
        <div className="reveal-up relative mx-auto w-full max-w-md lg:max-w-none [animation-delay:150ms]">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
            <Image
              src="/images/net/hero-deadvlei.webp"
              alt="A traveller standing among the ancient dead trees of Deadvlei, framed by red dunes"
              width={1280}
              height={1600}
              priority
              className="h-[520px] w-full object-cover sm:h-[560px] lg:h-[640px]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#201813]/55 via-transparent to-transparent"
            />
            <p className="absolute bottom-5 left-5 text-sm font-medium tracking-wide text-[#F3EDDE]/90">
              Deadvlei, Namib-Naukluft
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
