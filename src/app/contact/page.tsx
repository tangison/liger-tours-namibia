import type { Metadata } from 'next';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import SiteLayout from '@/components/liger/SiteLayout';
import CTABanner from '@/components/liger/CTABanner';
import ContactForm from '@/components/liger/ContactForm';
import { CONTACT } from '@/lib/liger-data';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Liger Tours Namibia in Windhoek: +264 81 472 2552, info@ligertoursnamibia.com. Reception hours 7:30 AM to 11:00 PM. Enquire about pricing, current offers and arrangements.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <SiteLayout>
      <section className="pt-28 sm:pt-36 pb-12 bg-background texture-sand" aria-labelledby="contact-page-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[var(--color-liger-accent-deep)] uppercase tracking-[0.2em] text-xs font-semibold font-body mb-3">
            Contact
          </p>
          <h1 id="contact-page-heading" className="font-body text-4xl sm:text-5xl font-bold text-primary tracking-tight text-balance">
            Let&rsquo;s Plan Your{' '}
            <span className="script-accent text-[var(--color-liger-accent-deep)]">Trip</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl font-body text-base sm:text-lg leading-relaxed">
            Do you want to enquire about our pricing, current offers and
            arrangements we can help you with? Give us a call or send in your
            concerns through the form below.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 bg-background" aria-label="Contact details and form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Details */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl border border-border p-6">
              <h2 className="font-body text-lg font-bold text-primary mb-5">Reach Us Directly</h2>
              <ul className="space-y-5">
                <li>
                  <a
                    href={`tel:${CONTACT.phoneTel}`}
                    className="flex items-start gap-3 group focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-md"
                  >
                    <span className="w-10 h-10 shrink-0 bg-[var(--color-liger-cream)] rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs text-muted-foreground/70 font-body uppercase tracking-wide">Phone / WhatsApp</span>
                      <span className="block font-body font-semibold text-primary group-hover:text-[var(--color-liger-accent-deep)] transition-colors">
                        {CONTACT.phoneDisplay}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-start gap-3 group focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-md"
                  >
                    <span className="w-10 h-10 shrink-0 bg-[var(--color-liger-cream)] rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs text-muted-foreground/70 font-body uppercase tracking-wide">Email</span>
                      <span className="block font-body font-semibold text-primary group-hover:text-[var(--color-liger-accent-deep)] transition-colors break-all">
                        {CONTACT.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 shrink-0 bg-[var(--color-liger-cream)] rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground/70 font-body uppercase tracking-wide">Reception Hours</span>
                    <span className="block font-body font-semibold text-primary">7:30 AM - 11:00 PM</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-10 h-10 shrink-0 bg-[var(--color-liger-cream)] rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted-foreground/70 font-body uppercase tracking-wide">Location</span>
                    <span className="block font-body font-semibold text-primary">{CONTACT.location}</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[var(--color-liger-cream)] rounded-2xl p-6">
              <h2 className="font-body text-base font-bold text-primary mb-2">Follow Us</h2>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Find Liger Tours Namibia on Instagram and Facebook for the latest
                departures and photos from the road.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}
