import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background texture-sand px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8 text-primary" aria-hidden="true" />
        </div>
        <p className="script-accent text-6xl text-[var(--color-liger-accent-deep)] mb-2">404</p>
        <h1 className="font-body text-2xl font-bold text-primary mb-3">
          This trail does not exist
        </h1>
        <p className="text-muted-foreground font-body mb-8 leading-relaxed">
          The page you are looking for has moved or never existed. The good
          news: Namibia is full of routes that do.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-[var(--color-liger-primary-hover)] text-primary-foreground font-body font-semibold rounded-lg px-6 py-3 transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[var(--color-liger-accent-deep)] focus-visible:outline-offset-2"
          >
            Back to Home
          </Link>
          <Link
            href="/tours"
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-liger-accent)] hover:bg-[var(--color-liger-accent-hover)] text-[#201813] font-body font-semibold rounded-lg px-6 py-3 transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-[var(--color-liger-accent-deep)] focus-visible:outline-offset-2"
          >
            Browse Tours
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
