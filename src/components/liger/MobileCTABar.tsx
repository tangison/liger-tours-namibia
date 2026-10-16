'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CONTACT } from '@/lib/liger-data';

/**
 * Sticky mobile CTA bar: the two conversions (plan + WhatsApp) stay
 * thumb-reachable once the visitor scrolls past the hero. Hidden on
 * desktop, where the navbar pill and floating WhatsApp button carry
 * the same actions. Slide-in is gated behind prefers-reduced-motion.
 */
export default function MobileCTABar() {
  const [past, setPast] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const raf0 = requestAnimationFrame(() => setReduced(mq.matches));
    const onMq = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', onMq);

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setPast(window.scrollY > 480);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
      cancelAnimationFrame(raf0);
      mq.removeEventListener('change', onMq);
    };
  }, []);

  const shown = reduced ? true : past;

  return (
    <div
      role="navigation"
      aria-label="Quick booking actions"
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#201813]/92 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl transition-transform duration-300 ease-out md:hidden ${
        shown ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <Link
          href="/tours"
          className="flex-1 rounded-full bg-[var(--color-liger-accent)] py-3 text-center text-[15px] font-bold text-[#241C16] transition-colors active:bg-[var(--color-liger-accent-hover)] focus-visible:outline-2 focus-visible:outline-[var(--color-liger-glow)] focus-visible:outline-offset-2"
        >
          Plan My Tour
        </Link>
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-liger-whatsapp)] px-5 py-3 text-[15px] font-bold text-white transition-colors active:bg-[var(--color-liger-whatsapp-hover)] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          aria-label="Chat with us on WhatsApp"
        >
          <svg
            viewBox="0 0 32 32"
            className="h-5 w-5 fill-white"
            aria-hidden="true"
          >
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.132 6.742 3.054 9.378L1.054 31.29l6.118-1.962C9.724 30.876 12.764 32 16.004 32 24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.306 22.606c-.39 1.1-1.932 2.014-3.168 2.28-.844.18-1.946.324-5.66-1.216-4.748-1.97-7.804-6.78-8.038-7.094-.226-.314-1.886-2.512-1.886-4.79s1.194-3.398 1.618-3.864c.39-.428.852-.536 1.136-.536.282 0 .566.002.812.016.262.012.614-.1.96.732.356.854 1.21 2.95 1.316 3.164.108.214.18.466.036.748-.136.282-.204.458-.408.706-.214.248-.448.554-.638.744-.214.214-.436.446-.188.876.248.428 1.104 1.82 2.37 2.948 1.63 1.452 3.004 1.902 3.432 2.116.428.214.676.18.924-.108.248-.288 1.064-1.24 1.348-1.666.282-.428.566-.356.952-.214.39.142 2.478 1.168 2.902 1.382.428.214.712.322.818.498.108.178.108 1.022-.282 2.12z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
