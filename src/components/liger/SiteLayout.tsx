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
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
