# Liger Tours Namibia

Official website for **Liger Tours Namibia**, a locally owned tour company based in Windhoek, Namibia. Rebuilt by Tangison Studio on the Amix Tours base with a fresh brand system derived from the client's real logo artwork.

**Live (client preview):** https://liger-tours-namibia.vercel.app

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4 + shadcn/ui primitives
- framer-motion (scroll-linked parallax, reveals, marquee)
- Deployed on Vercel

## Brand system

All tokens were sampled from the client logo on 2026-10-16 (see `/brand`):

| Token | Hex | Source |
|---|---|---|
| --color-liger-primary | #473E21 | Acacia tree + "Namibia" wordmark |
| --color-liger-accent | #FC8D40 | "LigerTours" script artwork |
| --color-liger-glow | #FFD54D | Sun gradient core |
| --color-liger-surface | #FAF7F0 | Warm sand page background |

Typography: **Kaushan Script** (display accents, echoes the brush-script logo) + **Figtree** (headings and body, matches the humanist sans wordmark). Two families total.

## Content authenticity

All tour descriptions, activity programs, testimonials, contact details and images are real client content sourced from ligertoursnamibia.com on 2026-10-16. Nothing is fabricated: no invented prices, reviews, awards or registration numbers.

## Staging shield (important at launch)

This preview deployment is intentionally excluded from search indexes:

1. `robots.index: false` in `src/app/layout.tsx` metadata
2. `X-Robots-Tag: noindex, nofollow` header in `next.config.ts`

When the production domain (ligertoursnamibia.com) is attached:

1. Set `robots.index: true` in layout metadata
2. Remove the X-Robots-Tag block from next.config.ts
3. Update `metadataBase` and the sitemap URL to the production domain
4. Submit the sitemap in Google Search Console

## Routes

- `/` Home (parallax hero, tours, activities, testimonials)
- `/tours` + `/tours/[slug]` (7 real multi-day tours)
- `/activities` (6 real day tours with real programs)
- `/about`, `/contact` (WhatsApp/email enquiry form)
- `/brand` design tokens, `/privacy-policy`, `/terms`, branded 404 + 500

## Commands

```bash
bun install
bun run dev     # local development
bun run lint    # ESLint
bun run build   # production build
```

Made by Tangison Studio: https://studio.tangison.com
