'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT, FOOTER_BLURB } from '@/lib/liger-data';

const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Tours', href: '/tours' },
  { label: 'Activities', href: '/activities' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const LEGAL_LINKS = [
  { label: 'Brand', href: '/brand' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className="chapter-dark relative" aria-labelledby="footer-heading">
      {/* Brand bar echo at the top edge of the footer */}
      <div className="brand-bar" aria-hidden="true" />
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_0.6fr_0.9fr] lg:gap-16">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="inline-block rounded-md focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2"
              aria-label="Liger Tours Namibia, home"
            >
              <Image
                src="/images/liger/logo-white.webp"
                alt="Liger Tours Namibia"
                width={170}
                height={56}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed text-[#F3EDDE]/60">
              {FOOTER_BLURB}
            </p>
          </div>

          {/* Explore column */}
          <nav aria-label="Footer">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-liger-glow)]">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-[#F3EDDE]/70 transition-colors hover:text-[var(--color-liger-glow)] focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2 rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-liger-glow)]">
              Talk to us
            </h3>
            <address className="mt-5 flex flex-col gap-3 text-[15px] not-italic">
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="flex items-center gap-2.5 text-[#F3EDDE]/70 transition-colors hover:text-[var(--color-liger-glow)] focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2 rounded-sm"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                {CONTACT.phoneDisplay}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2.5 text-[#F3EDDE]/70 transition-colors hover:text-[var(--color-liger-glow)] focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2 rounded-sm"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {CONTACT.email}
              </a>
              <span className="flex items-center gap-2.5 text-[#F3EDDE]/70">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                {CONTACT.location}
              </span>
              <span className="flex items-center gap-2.5 text-[#F3EDDE]/70">
                <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                7:30 AM - 11:00 PM
              </span>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-[#F3EDDE]/45">
            &copy; {new Date().getFullYear()} Liger Tours Namibia. All rights
            reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2" aria-label="Legal">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[#F3EDDE]/45 transition-colors hover:text-[#F3EDDE]/85 focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2 rounded-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-[#F3EDDE]/45">
            Made by{' '}
            <a
              href="https://studio.tangison.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-liger-accent)] transition-colors hover:text-[var(--color-liger-glow)] focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2 rounded-sm"
            >
              Tangison Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
