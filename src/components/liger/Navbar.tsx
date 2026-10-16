'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Transparent over the hero on the home page only
  const isHome = pathname === '/';
  const isBrand = pathname === '/brand';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Focus trap + Escape key for mobile drawer
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

  const useTransparentText = (isHome || isBrand) && !scrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(43,38,20,0.08)]'
            : useTransparentText
              ? 'bg-transparent'
              : 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(43,38,20,0.08)]'
        }`}
        aria-label="Main navigation"
      >
        {/* Brand bar: accent strip sampled from the logo sun gradient */}
        <div className="brand-bar" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo: real client asset on a soft chip so the olive stays legible on any photo */}
            <Link
              href="/"
              className="flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-md"
              aria-label="Liger Tours Namibia, home"
            >
              <span
                className={`block rounded-lg px-2.5 py-1.5 ${
                  useTransparentText ? 'bg-white/85 backdrop-blur-sm' : ''
                }`}
              >
                <Image
                  src="/images/liger/logo.webp"
                  alt=""
                  width={150}
                  height={49}
                  className="h-9 sm:h-11 w-auto object-contain"
                  priority
                />
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-2 text-sm font-semibold tracking-wide transition-colors rounded-md focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                      isActive
                        ? 'text-[var(--color-liger-accent-deep)]'
                        : useTransparentText
                          ? 'text-white hover:text-[var(--color-liger-glow)]'
                          : 'text-primary hover:text-[var(--color-liger-accent-deep)]'
                    }`}
                  >
                    {link.label}
                    {isActive ? (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full"
                      />
                    ) : null}
                  </Link>
                );
              })}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 rounded-lg transition-colors flex items-center justify-center focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <div className="flex flex-col gap-1.5 transition-all duration-300">
                <span className={`block w-6 h-0.5 transition-all duration-300 ${useTransparentText ? 'bg-white' : 'bg-primary'}`} />
                <span className={`block w-6 h-0.5 transition-all duration-300 ${useTransparentText ? 'bg-white' : 'bg-primary'}`} />
                <span className="block w-4 h-0.5 transition-all duration-300 bg-accent" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              ref={drawerRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background shadow-[0_8px_30px_rgba(43,38,20,0.14)]"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <Image
                  src="/images/liger/logo.webp"
                  alt=""
                  width={130}
                  height={43}
                  className="h-9 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-primary hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col p-6 gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-lg font-semibold text-primary hover:text-[var(--color-liger-accent-deep)] hover:bg-primary/5 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="p-6 border-t border-border">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-[var(--color-liger-primary-hover)] text-primary-foreground rounded-lg active:scale-[0.98] transition-all duration-200"
                >
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
