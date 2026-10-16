import type { Metadata } from 'next';
import Image from 'next/image';
import { Check, Compass, Eye, Flag, ShieldCheck, Users } from 'lucide-react';
import SiteLayout from '@/components/liger/SiteLayout';
import CTABanner from '@/components/liger/CTABanner';
import { ABOUT_STORY, DIFFERENTIATORS } from '@/lib/liger-data';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Liger Tours Namibia is a locally owned, Namibia Tourism Board registered tour company founded by an Environmental Sciences graduate, sharing the beauty, culture and wildlife of Namibia.',
  alternates: { canonical: '/about' },
};

const ICONS = [Compass, Eye, Users, ShieldCheck, Flag];

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="pt-28 sm:pt-36 pb-12 bg-background texture-sand" aria-labelledby="about-page-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[var(--color-liger-accent-deep)] uppercase tracking-[0.2em] text-xs font-semibold font-body mb-3">
            About us
          </p>
          <h1 id="about-page-heading" className="font-body text-4xl sm:text-5xl font-bold text-primary tracking-tight text-balance max-w-3xl">
            About{' '}
            <span className="script-accent text-[var(--color-liger-accent-deep)]">Liger Tours</span> Namibia
          </h1>
          <p className="mt-5 text-xl sm:text-2xl text-primary font-body font-medium max-w-3xl leading-relaxed">
            {ABOUT_STORY.lead}
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-20 bg-background" aria-label="Our story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-5">
            {ABOUT_STORY.paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground font-body leading-relaxed">
                {p}
              </p>
            ))}
            <p className="text-muted-foreground font-body leading-relaxed">
              At Liger Tours Namibia, we don&rsquo;t just take you places: we help
              you experience Namibia in a way you&rsquo;ll never forget.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(43,38,20,0.16)]">
              <Image
                src="/images/liger/wildlife-lion.webp"
                alt="A lion resting in the Namibian savanna"
                width={1600}
                height={1200}
                className="w-full h-[320px] sm:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201813]/35 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white" aria-labelledby="different-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="different-heading" className="font-body text-3xl sm:text-4xl font-bold text-primary tracking-tight text-balance mb-10 text-center">
            What Makes Us{' '}
            <span className="script-accent text-[var(--color-liger-accent-deep)]">Different</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {DIFFERENTIATORS.map((d, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <div key={d.title} className="bg-background/80 p-6 rounded-2xl hover:ring-1 hover:ring-accent/25 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-body font-bold text-primary mb-1.5">{d.title}</h3>
                  <p className="text-muted-foreground/80 text-sm font-body leading-relaxed">{d.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[var(--color-liger-cream)]" aria-labelledby="vision-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-7">
            <Eye className="w-8 h-8 text-[var(--color-liger-accent-deep)] mb-4" aria-hidden="true" />
            <h2 id="vision-heading" className="font-body text-xl font-bold text-primary mb-3">Our Vision</h2>
            <p className="text-muted-foreground font-body leading-relaxed text-sm">{ABOUT_STORY.vision}</p>
          </div>
          <div className="bg-white rounded-2xl p-7">
            <Flag className="w-8 h-8 text-[var(--color-liger-accent-deep)] mb-4" aria-hidden="true" />
            <h2 className="font-body text-xl font-bold text-primary mb-3">Our Mission</h2>
            <p className="text-muted-foreground font-body leading-relaxed text-sm">{ABOUT_STORY.mission}</p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="bg-white rounded-2xl p-7">
            <h2 className="font-body text-xl font-bold text-primary mb-4">Why Travel With Liger Tours Namibia?</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {ABOUT_STORY.whyWith.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground font-body">
                  <Check className="w-4 h-4 shrink-0 text-[var(--color-liger-accent-deep)]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}
