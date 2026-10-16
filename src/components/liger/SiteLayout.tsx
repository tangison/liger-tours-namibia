import Navbar from '@/components/liger/Navbar';
import Footer from '@/components/liger/Footer';
import WhatsAppFloat from '@/components/liger/WhatsAppFloat';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* overflow guard: off-screen GSAP motion must never create a horizontal scrollbar */}
      <main id="main" className="w-full max-w-full flex-1 overflow-x-hidden">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
