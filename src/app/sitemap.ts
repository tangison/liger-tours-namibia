import type { MetadataRoute } from 'next';
import { TOURS } from '@/lib/liger-data';

const SITE_URL = 'https://liger-tours-namibia.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ['', '/tours', '/activities', '/about', '/contact', '/privacy-policy', '/terms'].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
    })
  );

  const tourRoutes = TOURS.map((tour) => ({
    url: `${SITE_URL}/tours/${tour.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...tourRoutes];
}
