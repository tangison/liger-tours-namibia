'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Interest chapter: gapless destination bento.
 * 6-col x 3-row grid = 18 cells; spans 8+2+2+2+2+2 = 18. grid-flow-dense.
 */
const TILES = [
  {
    name: 'Sossusvlei',
    line: 'The towering red dunes of the oldest desert on Earth.',
    image: '/images/net/bento-sossusvlei.webp',
    alt: 'Dead vlei trees on white clay pan surrounded by red dunes',
    href: '/tours/windhoek-sossusvlei-swakopmund-spitzkoppe-etosha',
    span: 'col-span-6 row-span-2 lg:col-span-4',
  },
  {
    name: 'Etosha',
    line: 'Big game gathered at the famous waterholes.',
    image: '/images/net/bento-etosha.webp',
    alt: 'Herd of elephants drinking at an Etosha waterhole',
    href: '/tours/etosha-national-park-waterberg-tour',
    span: 'col-span-3 row-span-1 lg:col-span-2',
  },
  {
    name: 'Swakopmund',
    line: 'Atlantic air, beach walks and coastal adventure.',
    image: '/images/net/bento-swakopmund.webp',
    alt: 'Aerial view of Swakopmund along the Atlantic coast',
    href: '/tours/sossusvlei-swakopmund-tour',
    span: 'col-span-3 row-span-1 lg:col-span-2',
  },
  {
    name: 'Fish River Canyon',
    line: 'One of the largest canyons in the world.',
    image: '/images/net/bento-fishriver.webp',
    alt: 'View over Fish River Canyon at dusk',
    href: '/tours/kalahari-quiver-tree-forest-fish-river-canyon',
    span: 'col-span-2 row-span-1 lg:col-span-2',
  },
  {
    name: 'Kalahari',
    line: 'Red sands and quiver trees at golden hour.',
    image: '/images/net/bento-kalahari.webp',
    alt: 'Quiver trees silhouetted against a Kalahari sunset',
    href: '/tours/kalahari-quiver-tree-forest-fish-river-canyon',
    span: 'col-span-2 row-span-1 lg:col-span-2',
  },
  {
    name: 'Skeleton Coast',
    line: 'Shipwrecks and fog where the desert meets the sea.',
    image: '/images/net/bento-skeleton.webp',
    alt: 'A shipwreck resting on the Skeleton Coast shore',
    href: '/tours/24-days-namibia-discovery-tour',
    span: 'col-span-2 row-span-1 lg:col-span-2',
  },
];

export default function DestinationBento() {
  return (
    <section
      className="texture-sand relative py-32 md:py-48"
      aria-labelledby="bento-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 md:mb-20"
        >
          <h2
            id="bento-heading"
            className="font-display max-w-4xl text-balance text-[clamp(2rem,3.6vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#2B2614]"
          >
            Six landscapes.{' '}
            <span
              aria-hidden="true"
              className="mx-1 inline-block h-[0.68em] w-[1.6em] translate-y-[0.06em] rounded-full bg-cover bg-center align-baseline"
              style={{ backgroundImage: "url('/images/net/pill-flamingos.webp')" }}
            />{' '}
            One country.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#5D5339]">
            Every Liger route is planned around the places that make Namibia
            unforgettable, at a pace that lets you actually take them in.
          </p>
        </motion.div>

        <div className="grid auto-rows-[180px] grid-flow-dense grid-cols-6 gap-3 sm:auto-rows-[210px] lg:auto-rows-[240px]">
          {TILES.map((tile, i) => (
            <motion.div
              key={tile.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`${tile.span} min-h-0`}
            >
              <Link
                href={tile.href}
                className="group relative block h-full w-full overflow-hidden rounded-3xl focus-visible:outline-2 focus-visible:outline-[var(--color-liger-accent-deep)] focus-visible:outline-offset-4"
              >
                <Image
                  src={tile.image}
                  alt={tile.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#221D10]/85 via-[#221D10]/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
                  <div>
                    <h3 className="font-display text-xl font-extrabold tracking-tight text-[#F3EDDE] sm:text-2xl">
                      {tile.name}
                    </h3>
                    <p className="mt-1 hidden max-w-[26ch] text-sm leading-snug text-[#F3EDDE]/75 sm:block">
                      {tile.line}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3EDDE]/15 text-[#F3EDDE] backdrop-blur-sm transition-all duration-500 group-hover:rotate-45 group-hover:bg-[var(--color-liger-accent)] group-hover:text-[#262115]"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
