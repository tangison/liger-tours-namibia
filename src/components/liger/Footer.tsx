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
    <footer className="bg-[var(--color-liger-dark)] text-[#EDE7D3]">
      {/* Brand bar echo at the top edge of the footer */}
      <div className="brand-bar" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top: Logo center */}
        <div className="text-center mb-10">
          <span className="inline-block bg-white/95 rounded-xl px-4 py-3">
            <Image
              src="/images/liger/logo.webp"
              alt="Liger Tours Namibia logo: an acacia tree at sunset"
              width={180}
              height={59}
              className="w-40 sm:w-48 h-auto object-contain mx-auto"
            />
          </span>
          <p className="text-white/70 font-body text-sm sm:text-base max-w-xl mx-auto mt-5 leading-relaxed">
            {FOOTER_BLURB}
          </p>
        </div>

        {/* Middle: Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8" aria-label="Footer navigation">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-[var(--color-liger-glow)] transition-colors font-body text-sm font-medium focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2 rounded-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact info */}
        <address className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 mb-8 text-sm font-body not-italic">
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className="flex items-center gap-2 text-white/70 hover:text-[var(--color-liger-glow)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2 rounded-sm"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            {CONTACT.phoneDisplay}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 text-white/70 hover:text-[var(--color-liger-glow)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2 rounded-sm"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            {CONTACT.email}
          </a>
          <span className="flex items-center gap-2 text-white/70">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            {CONTACT.location}
          </span>
          <span className="flex items-center gap-2 text-white/70">
            <Clock className="w-4 h-4" aria-hidden="true" />
            7:30 AM - 11:00 PM
          </span>
        </address>

        {/* Legal links */}
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-8" aria-label="Legal">
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/45 hover:text-white/80 transition-colors font-body text-xs focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2 rounded-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/45 font-body">
            <p>&copy; {new Date().getFullYear()} Liger Tours Namibia. All rights reserved.</p>
            <p>
              Made by{' '}
              <a
                href="https://studio.tangison.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-liger-accent)] hover:text-[var(--color-liger-glow)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2 rounded-sm"
              >
                Tangison Studio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
