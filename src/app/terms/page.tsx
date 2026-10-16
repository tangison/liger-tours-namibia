import type { Metadata } from 'next';
import SiteLayout from '@/components/liger/SiteLayout';
import { CONTACT } from '@/lib/liger-data';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms for using the Liger Tours Namibia website and booking tours and activities.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <SiteLayout>
      <section className="pt-28 sm:pt-36 pb-16 bg-background" aria-labelledby="terms-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[var(--color-liger-accent-deep)] uppercase tracking-[0.2em] text-xs font-semibold font-body mb-3">
            Legal
          </p>
          <h1 id="terms-heading" className="font-body text-4xl font-bold text-primary tracking-tight mb-8">
            Terms of Service
          </h1>

          <div className="space-y-6 text-muted-foreground font-body leading-relaxed text-sm sm:text-base">
            <p>
              <strong className="text-primary">Last updated:</strong> 16 October 2026. These
              terms apply to your use of this website and to tour and activity enquiries
              made through it. Liger Tours Namibia is based in Windhoek, Namibia.
            </p>

            <div>
              <h2 className="text-xl font-bold text-primary mb-2">Website content</h2>
              <p>
                Tour descriptions, itineraries and images on this site are provided for
                general information. Routes and experiences may be adjusted for weather,
                park conditions, road access or guest safety. Nothing on this site
                constitutes a binding offer: a booking exists only once we confirm it to
                you directly in writing.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-2">Bookings and pricing</h2>
              <p>
                Durations, departure dates and rates are confirmed personally for every
                enquiry, in Namibian dollars (N$) or the agreed currency. Payment terms,
                cancellation windows and refund conditions are set out in your booking
                confirmation, which governs that booking.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-2">Responsibilities</h2>
              <p>
                Guests are responsible for valid travel documents, required permits and
                adequate travel insurance, and for following the reasonable safety
                instructions of our guides. Namibian law applies to these terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-2">Contact</h2>
              <p>
                {CONTACT.email} · {CONTACT.phoneDisplay} · Windhoek, Namibia. Reception
                hours: 7:30 AM - 11:00 PM.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
