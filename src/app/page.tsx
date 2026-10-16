import Hero from '@/components/liger/Hero';
import Ticker from '@/components/liger/Ticker';
import BrandStory from '@/components/liger/BrandStory';
import TourCards from '@/components/liger/TourCards';
import WhyChoose from '@/components/liger/WhyChoose';
import ActivitiesShowcase from '@/components/liger/ActivitiesShowcase';
import Testimonials from '@/components/liger/Testimonials';
import CTABanner from '@/components/liger/CTABanner';
import SiteLayout from '@/components/liger/SiteLayout';

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Ticker />
      <BrandStory />
      <TourCards />
      <WhyChoose />
      <ActivitiesShowcase />
      <Testimonials />
      <CTABanner />
    </SiteLayout>
  );
}
