import type { Metadata } from 'next';
import { Check, Clock } from 'lucide-react';
import SiteLayout from '@/components/liger/SiteLayout';
import CTABanner from '@/components/liger/CTABanner';
import { ACTIVITIES } from '@/lib/liger-data';

export const metadata: Metadata = {
  title: 'Day Tours & Activities',
  description:
    'Half-day and full-day Namibian experiences: Swakopmund coastal adventure, Spitzkoppe hiking, San-guided Bushmen walk, traditional cooking class, Windhoek city and township tour, and game drives.',
  alternates: { canonical: '/activities' },
};

export default function ActivitiesPage() {
  return (
    <SiteLayout>
      <section className="pt-28 sm:pt-36 pb-12 bg-background texture-sand" aria-labelledby="activities-page-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[var(--color-liger-accent-deep)] uppercase tracking-[0.2em] text-xs font-semibold font-body mb-3">
            Day tours & activities
          </p>
          <h1 id="activities-page-heading" className="font-body text-4xl sm:text-5xl font-bold text-primary tracking-tight text-balance">
            Short Experiences,{' '}
            <span className="script-accent text-[var(--color-liger-accent-deep)]">Lasting Memories</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl font-body text-base sm:text-lg leading-relaxed">
            Cultural encounters, hikes, city stories and wildlife, all within a
            day. Perfect on their own or added before and after a multi-day tour.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 bg-background" aria-label="Activities list">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {ACTIVITIES.map((a) => (
            <article
              key={a.slug}
              id={a.slug}
              className="scroll-mt-28 bg-white rounded-2xl border border-border overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(43,38,20,0.10)]"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <h2 className="font-body text-xl sm:text-2xl font-bold text-primary text-balance">
                    {a.title}
                  </h2>
                  <span className="inline-flex items-center gap-1.5 bg-[var(--color-liger-cream)] text-primary text-xs font-semibold font-body px-3 py-1.5 rounded-full">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    Duration: {a.duration}
                  </span>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  {a.intro}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-body font-bold text-primary text-sm uppercase tracking-wide mb-3">
                      What Happens?
                    </h3>
                    <ul className="space-y-2.5">
                      {a.whatHappens.map((step) => (
                        <li key={step} className="flex items-start gap-2.5 text-sm text-muted-foreground font-body leading-relaxed">
                          <Check className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-liger-accent-deep)]" aria-hidden="true" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-body font-bold text-primary text-sm uppercase tracking-wide mb-3">
                      Highlights
                    </h3>
                    <ul className="space-y-2.5 mb-6">
                      {a.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-muted-foreground font-body">
                          <span className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-[var(--color-liger-accent)]" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    {a.youMaySee ? (
                      <div>
                        <h3 className="font-body font-bold text-primary text-sm uppercase tracking-wide mb-3">
                          You May See
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {a.youMaySee.map((animal) => (
                            <span key={animal} className="bg-[var(--color-liger-cream)] text-primary text-xs font-medium font-body px-3 py-1.5 rounded-full">
                              {animal}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}
