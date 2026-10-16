'use client';

import { TICKER_DESTINATIONS, CONTACT } from '@/lib/liger-data';

export default function Ticker() {
  const content = `${TICKER_DESTINATIONS.join(' \u2022 ')} \u2022 TOURS DEPARTING FROM WINDHOEK \u2022 WHATSAPP ${CONTACT.phoneDisplay} \u2022`;

  return (
    <div
      className="bg-[var(--color-liger-primary)] overflow-hidden py-2.5 relative marquee-pause"
      role="region"
      aria-label="Tour destinations and contact information"
      aria-live="off"
    >
      <div className="animate-marquee flex whitespace-nowrap">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="text-[var(--color-liger-glow)] font-body font-semibold text-[13px] uppercase tracking-widest px-4"
            aria-hidden={i !== 0}
          >
            {content}
          </span>
        ))}
      </div>
    </div>
  );
}
