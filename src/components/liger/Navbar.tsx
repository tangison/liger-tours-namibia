'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { CONTACT } from '@/lib/liger-data';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Tours', href: '/tours' },
  { label: 'Activities', href: '/activities' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        return;
      }
      if (e.key === 'Tab' && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'a, button, input, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      const firstFocusable = drawerRef.current?.querySelector<HTMLElement>('a, button');
      firstFocusable?.focus();
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50" aria-label="Main navigation">
        {/* Brand bar: accent strip sampled from the logo sun gradient */}
        <div className="brand-bar" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-3 flex items-center justify-between gap-4 rounded-2xl bg-[#201813]/80 px-4 py-2.5 shadow-[0_10px_40px_rgba(20,14,10,0.35)] backdrop-blur-xl sm:mt-4 sm:px-5">
            {/* The real client logo (tree, sun and brush-script wordmark) on
                the floating pill - cream/rose variant sampled from the artwork */}
            <Link
              href="/"
              className="flex shrink-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2"
              aria-label="Liger Tours Namibia, home"
            >
              <Image
                src="/images/liger/logo-white.webp"
                alt=""
                width={300}
                height={99}
                className="h-9 w-auto object-contain sm:h-11"
                priority
              />
            </Link>

            {/* Desktop links */}
            <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative rounded-full px-4 py-2 text-[15px] font-medium tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2 ${
                      isActive
                        ? 'text-[var(--color-liger-glow)]'
                        : 'text-[#F3EDDE]/85 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-4 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-[var(--color-liger-glow)] to-[var(--color-liger-accent)]"
                      />
                    ) : null}
                  </Link>
                );
              })}
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 rounded-full bg-[var(--color-liger-accent)] px-5 py-2 text-[15px] font-bold text-[#241C16] transition-all duration-200 hover:bg-[var(--color-liger-accent-hover)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2"
              >
                Book on WhatsApp
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2 md:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-6 bg-[#F3EDDE]" />
                <span className="block h-0.5 w-6 bg-[#F3EDDE]" />
                <span className="block h-0.5 w-4 bg-[var(--color-liger-accent)]" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-[60] flex flex-col bg-[#201813] transition-all duration-300 md:hidden ${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="brand-bar" aria-hidden="true" />
        <div className="flex items-center justify-between px-5 py-5">
          <Image
            src="/images/liger/logo-white.webp"
            alt=""
            width={300}
            height={99}
            className="h-14 w-auto object-contain"
          />
          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-lg p-2 text-[#F3EDDE] transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-1 px-8" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-white/10 py-4 text-3xl font-extrabold tracking-tight text-[#F3EDDE] transition-colors hover:text-[var(--color-liger-glow)] focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="px-8 pb-10">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-xl bg-[var(--color-liger-accent)] py-4 text-center text-lg font-bold text-[#241C16] transition-all active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
