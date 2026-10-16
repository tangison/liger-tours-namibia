import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { CONTACT } from "@/lib/liger-data";
import "./globals.css";

/* Cabinet Grotesk: single family site-wide (display 800/900, body 400/500/700).
   Self-hosted from Fontshare (ITF free license, commercial use allowed). */
const cabinetGrotesk = localFont({
  src: [
    { path: "../fonts/CabinetGrotesk-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/CabinetGrotesk-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/CabinetGrotesk-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/CabinetGrotesk-800.woff2", weight: "800", style: "normal" },
    { path: "../fonts/CabinetGrotesk-900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-cabinet",
  display: "swap",
});

const SITE_URL = "https://liger-tours-namibia.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Liger Tours Namibia | Authentic Tours & Safaris from Windhoek",
    template: "%s | Liger Tours Namibia",
  },
  description:
    "Discover Namibia with Liger Tours Namibia. Authentic experiences, unforgettable adventures and breathtaking landscapes: multi-day safaris, cultural walks and day tours from Windhoek.",
  keywords: [
    "Liger Tours Namibia",
    "Namibia tours",
    "Namibia safari",
    "Windhoek tour operator",
    "Sossusvlei tour",
    "Etosha safari",
    "Swakopmund tour",
    "Namibia Tourism Board registered",
  ],
  authors: [{ name: "Liger Tours Namibia" }],
  creator: "Liger Tours Namibia",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Liger Tours Namibia | Authentic Tours & Safaris from Windhoek",
    description:
      "Authentic experiences, unforgettable adventures and breathtaking landscapes. Multi-day safaris and day tours across Namibia.",
    url: SITE_URL,
    siteName: "Liger Tours Namibia",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/liger/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Liger Tours Namibia: the Jewels of Namibia tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liger Tours Namibia | Authentic Tours & Safaris from Windhoek",
    description:
      "Authentic experiences, unforgettable adventures and breathtaking landscapes across Namibia.",
    images: ["/images/liger/og-image.jpg"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#262115",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Liger Tours Namibia",
  description:
    "Locally owned tour company sharing the beauty, culture, and wildlife of Namibia. Registered with the Namibia Tourism Board.",
  url: SITE_URL,
  telephone: CONTACT.phoneTel,
  email: CONTACT.email,
  image: `${SITE_URL}/images/liger/og-image.jpg`,
  logo: `${SITE_URL}/icon-192.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Windhoek",
    addressCountry: "NA",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:30",
      closes: "23:00",
    },
  ],
  areaServed: { "@type": "Country", name: "Namibia" },
  slogan: "Travel and Tourism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cabinetGrotesk.variable} antialiased bg-background text-foreground`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
