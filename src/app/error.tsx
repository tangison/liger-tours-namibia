'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface for observability tooling; never render raw details to guests
    console.error('Route error:', error.message);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <p className="script-accent text-5xl text-[var(--color-liger-accent-deep)] mb-2">500</p>
        <h1 className="font-body text-2xl font-bold text-primary mb-3">
          Something went wrong on our side
        </h1>
        <p className="text-muted-foreground font-body mb-8 leading-relaxed">
          Our team has been notified. Try again, and if the problem persists,
          reach us on WhatsApp and we will help you directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center bg-primary hover:bg-[var(--color-liger-primary-hover)] text-primary-foreground font-body font-semibold rounded-lg px-6 py-3 transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-[var(--color-liger-accent)] hover:bg-[var(--color-liger-accent-hover)] text-[#262115] font-body font-semibold rounded-lg px-6 py-3 transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
