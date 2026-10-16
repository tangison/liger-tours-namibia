import type { Metadata } from 'next';
import SiteLayout from '@/components/liger/SiteLayout';
import { CONTACT } from '@/lib/liger-data';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Liger Tours Namibia collects, uses and protects your personal information.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <section className="pt-28 sm:pt-36 pb-16 bg-background" aria-labelledby="privacy-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[var(--color-liger-accent-deep)] uppercase tracking-[0.2em] text-xs font-semibold font-body mb-3">
            Legal
          </p>
          <h1 id="privacy-heading" className="font-body text-4xl font-bold text-primary tracking-tight mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-muted-foreground font-body leading-relaxed text-sm sm:text-base">
            <p>
              <strong className="text-primary">Last updated:</strong> 16 October 2026. This
              policy explains how Liger Tours Namibia (&ldquo;we&rdquo;, &ldquo;us&rdquo;),
              a tour company based in Windhoek, Namibia, handles information when you use
              this website or contact us.
            </p>

            <div>
              <h2 className="text-xl font-bold text-primary mb-2">What we collect</h2>
              <p>
                We only receive personal information when you choose to share it: your
                name, email address, and the content of your enquiry when you contact us by
                phone, WhatsApp, email or the contact form on this site. The contact form
                on this website does not send or store data on the website itself: it
                opens WhatsApp or your email app with your message, so the message goes
                directly from your device to us.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-2">How we use it</h2>
              <p>
                We use your details to answer enquiries, plan and confirm bookings, and
                communicate about your trip. We do not sell your information, and we do
                not use it for unrelated marketing without your consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-2">Service providers</h2>
              <p>
                This website is hosted on Vercel, which serves pages and images. Standard,
                aggregate hosting logs may be processed by the host for security and
                performance. We do not run advertising trackers on this site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-2">Retention and your rights</h2>
              <p>
                We keep enquiry records only as long as needed to plan your trip and meet
                our bookkeeping obligations. You may ask us at any time to confirm,
                correct or delete the personal information we hold about you.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-2">Contact</h2>
              <p>
                Questions about this policy: {CONTACT.email} or {CONTACT.phoneDisplay},
                Windhoek, Namibia. Reception hours: 7:30 AM - 11:00 PM.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
