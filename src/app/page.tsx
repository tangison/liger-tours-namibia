import Hero from '@/components/liger/Hero';
import DestinationBento from '@/components/liger/DestinationBento';
import ToursScroll from '@/components/liger/ToursScroll';
import StoryScrub from '@/components/liger/StoryScrub';
import ActivitiesAccordion from '@/components/liger/ActivitiesAccordion';
import TestimonialsCarousel from '@/components/liger/TestimonialsCarousel';
import CTAAction from '@/components/liger/CTAAction';
import SiteLayout from '@/components/liger/SiteLayout';

/**
 * Homepage chapters, in AIDA order:
 * Attention (Editorial Split hero) / Interest (destination bento) /
 * Desire (tours scroll, story scrub, activities accordion, testimonials) /
 * Action (CTA + footer).
 */
export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <DestinationBento />
      <ToursScroll />
      <StoryScrub />
      <ActivitiesAccordion />
      <TestimonialsCarousel />
      <CTAAction />
    </SiteLayout>
  );
}
