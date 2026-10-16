import type { Metadata } from 'next';
import Image from 'next/image';
import SiteLayout from '@/components/liger/SiteLayout';
import { BRAND_TOKENS } from '@/lib/liger-data';

export const metadata: Metadata = {
  title: 'Brand',
  description:
    'Liger Tours Namibia design tokens: colors sampled from the logo artwork, typography hierarchy, and logo usage rules.',
  alternates: { canonical: '/brand' },
};

const COLORS = [
  { name: 'Brand Primary (Olive)', token: '--color-liger-primary', hex: BRAND_TOKENS.olive, note: 'Sampled from the acacia tree artwork and the word Namibia', dark: true },
  { name: 'Brand Accent (Dusty Rose)', token: '--color-liger-accent', hex: BRAND_TOKENS.rose, note: 'Mid tone of the logo sun gradient, behind the tree' },
  { name: 'Accent Deep (AA text)', token: '--color-liger-accent-deep', hex: BRAND_TOKENS.roseText, note: 'Deepened script rose for WCAG AA text on light surfaces' },
  { name: 'Sun Glow (light rose)', token: '--color-liger-glow', hex: BRAND_TOKENS.sunLight, note: 'Lightest band of the logo sun gradient' },
  { name: 'Surface Sand', token: '--color-liger-surface', hex: BRAND_TOKENS.sand, note: 'Page background, warm sand' },
  { name: 'Cream', token: '--color-liger-cream', hex: BRAND_TOKENS.cream, note: 'Muted panels and chips' },
  { name: 'Espresso Black', token: '--color-liger-dark', hex: BRAND_TOKENS.dark, note: 'Footer, CTA and dark chapters, echoing the logo backdrop' },
];

export default function BrandPage() {
  return (
    <SiteLayout>
      <section className="pt-28 sm:pt-36 pb-12 bg-background texture-sand" aria-labelledby="brand-page-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[var(--color-liger-accent-deep)] uppercase tracking-[0.2em] text-xs font-semibold font-body mb-3">
            Design tokens
          </p>
          <h1 id="brand-page-heading" className="font-body text-4xl sm:text-5xl font-bold text-primary tracking-tight text-balance">
            The Liger Tours{' '}
            <span className="script-accent text-[var(--color-liger-accent-deep)]">Brand</span> System
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl font-body text-base sm:text-lg leading-relaxed">
            Every color on this site was sampled directly from the client logo
            artwork on 2026-10-16. No invented brand colors, no redrawn logo.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 bg-background" aria-label="Brand tokens and rules">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Logo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-white rounded-2xl border border-border p-8">
              <h2 className="font-body text-xl font-bold text-primary mb-4">Primary Logo</h2>
              <div className="bg-[var(--color-liger-cream)] rounded-xl p-6 flex items-center justify-center">
                <Image
                  src="/images/liger/logo.webp"
                  alt="Liger Tours Namibia logo: acacia tree and sunset with LigerTours wordmark"
                  width={420}
                  height={138}
                  className="w-full max-w-md h-auto"
                />
              </div>
              <div className="bg-[#201813] rounded-xl p-6 mt-3 flex items-center justify-center">
                <Image
                  src="/images/liger/logo-white.webp"
                  alt="Liger Tours Namibia logo in the cream and rose variant for dark surfaces"
                  width={420}
                  height={138}
                  className="w-full max-w-md h-auto"
                />
              </div>
              <p className="text-xs text-muted-foreground/70 font-body mt-4">
                Source of truth: client-supplied master artwork (PNG, 2968x1249,
                transparent). Optimized to WebP for the web. The vector original
                lives with the client.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border p-8">
              <h2 className="font-body text-xl font-bold text-primary mb-4">Logo Deconstruction</h2>
              <ul className="space-y-3 text-sm text-muted-foreground font-body leading-relaxed">
                <li>
                  <strong className="text-primary">LigerTours:</strong> warm brush script
                  letterforms, connected flow, slight forward slant. Classified: brush
                  script (humanist calligraphic).
                </li>
                <li>
                  <strong className="text-primary">Namibia:</strong> clean humanist sans,
                  open counters, medium weight.
                </li>
                <li>
                  <strong className="text-primary">Mark:</strong> acacia tree silhouette in
                  olive over a dusty-rose gradient sun, a classic Namibian sunset scene on
                  an espresso-black backdrop.
                </li>
                <li>
                  <strong className="text-primary">Rules:</strong> never redraw, recolor,
                  rotate or outline the logo. On dark surfaces use the cream/rose variant
                  (logo-white.webp); on light surfaces use the original. Minimum clear space
                  equals the height of the letter L.
                </li>
              </ul>
            </div>
          </div>

          {/* Colors */}
          <div>
            <h2 className="font-body text-2xl font-bold text-primary mb-6">Color Tokens</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {COLORS.map((c) => (
                <div key={c.token} className="bg-white rounded-2xl border border-border overflow-hidden">
                  <div
                    className="h-24 w-full"
                    style={{ backgroundColor: c.hex }}
                    role="img"
                    aria-label={`${c.name} swatch, hex ${c.hex}`}
                  />
                  <div className="p-4">
                    <p className="font-body font-bold text-primary text-sm">{c.name}</p>
                    <p className="font-body text-xs text-muted-foreground/70 mt-0.5">
                      {c.hex} · <code className="text-[11px]">{c.token}</code>
                    </p>
                    <p className="text-xs text-muted-foreground/70 font-body mt-1.5">{c.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-white rounded-2xl border border-border p-6">
              <p className="font-body text-sm text-muted-foreground">
                <strong className="text-primary">Brand bar gradient:</strong>{' '}
                <span className="inline-block align-middle w-40 h-4 rounded-full mx-2" style={{ background: 'linear-gradient(90deg, #E4B4B4, #CC8484 45%, #B37471)' }} aria-hidden="true" />
                linear-gradient(90deg, #E4B4B4, #CC8484 45%, #B37471), sampled from the
                logo sun gradient. Used at 4px height, top of viewport, CLS 0.
              </p>
            </div>
          </div>

          {/* Typography */}
          <div>
            <h2 className="font-body text-2xl font-bold text-primary mb-6">Typography Hierarchy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl border border-border p-8">
                <p className="font-display font-extrabold text-4xl text-primary">Cabinet Grotesk</p>
                <p className="font-body text-sm text-muted-foreground mt-3">
                  Single family site-wide: display weights (800-900) for headlines,
                  text weights (400-500) for body. Self-hosted via next/font/local
                  (Fontshare, ITF free license), font-display: swap. Two families
                  maximum was the rule; one was the better answer.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-border p-8">
                <p className="font-body font-bold text-3xl text-[var(--color-liger-accent-deep)]">Wordmark rule</p>
                <p className="font-body text-sm text-muted-foreground mt-3">
                  The brush-script LigerTours lettering is artwork, never a webfont:
                  it appears only inside the client logo files. UI headlines stay in
                  Cabinet Grotesk so the script keeps its special-occasion weight.
                </p>
              </div>
            </div>
          </div>

          {/* Staging note */}
          <div className="bg-[var(--color-liger-cream)] rounded-2xl p-6 sm:p-8">
            <h2 className="font-body text-lg font-bold text-primary mb-2">Deployment Status</h2>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              This deployment is a client preview on a Vercel staging URL
              (liger-tours-namibia.vercel.app). Search indexing is disabled via
              meta robots and the X-Robots-Tag header. When the production domain
              is attached, set robots.index to true in src/app/layout.tsx and
              remove the X-Robots-Tag header in next.config.ts, then submit the
              sitemap to Google Search Console.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
