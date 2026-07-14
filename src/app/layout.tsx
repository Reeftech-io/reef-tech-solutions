import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import MarketingHeader from "./components/MarketingHeader";
import Footer from "./components/Footer";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID ?? "G-58ZP7133E7";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const tanHeadline = localFont({
  src: "./fonts/TAN-Headline-Regular.woff2",
  variable: "--font-tan-headline",
  weight: "400",
});

const SITE_URL = "https://www.reeftech.io";
const PHONE = "+1-808-303-4627";
const EMAIL = "info@reeftech.io";

export const metadata: Metadata = {
  title: {
    default:
      "ReefTech Solutions | Electrical, Plumbing & Access Control | Big Island Hawaii",
    template: "%s | ReefTech Solutions",
  },
  description:
    "Expert electrical, plumbing, and access control services for Big Island vacation rentals & homes. Fast repairs and installations in Waimea, Hilo and Kona. Call (808) 303-4627.",
  applicationName: "ReefTech Solutions",
  authors: [{ name: "ReefTech Solutions", url: SITE_URL }],
  creator: "ReefTech Solutions",
  publisher: "ReefTech Solutions",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    languages: { "en-US": "/" },
  },
  openGraph: {
    title:
      "ReefTech Solutions | Electrical, Plumbing & Access Control | Big Island Hawaii",
    description:
      "Licensed electrician and property tech specialist for Hawaii's Big Island. Electrical, plumbing, access control, fire alarms, and spa & sauna service.",
    url: SITE_URL,
    siteName: "ReefTech Solutions",
    images: [
      {
        url: "/photos/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ReefTech Solutions — Electrical, Plumbing & Access Control, Big Island Hawaii",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "United States",
    emails: [EMAIL],
    phoneNumbers: [PHONE],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ReefTech Solutions | Electrical, Plumbing & Access Control | Big Island Hawaii",
    description:
      "Licensed electrician and property tech specialist for Hawaii's Big Island.",
    images: ["/photos/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google95fe311b9c002ae1",
  },
  category: "Property Maintenance & Repair",
  other: {
    "geo.region": "US-HI",
    "geo.placename": "Big Island, Hawaii",
    "geo.position": "19.8968;-155.5828",
    ICBM: "19.8968, -155.5828",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "ReefTech Solutions",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#00CED1",
  },
};

// Fetches the live Google review rating/count so the LocalBusiness schema below
// can include a real aggregateRating instead of a hardcoded value. Fails silently
// (returns null) if the reviews API is unavailable so the layout never breaks.
async function getAggregateRating(): Promise<{ ratingValue: number; reviewCount: number } | null> {
  try {
    const res = await fetch(`${SITE_URL}/api/google-reviews`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { rating?: number; totalRatings?: number };
    if (typeof data.rating !== "number" || typeof data.totalRatings !== "number") {
      return null;
    }
    return { ratingValue: data.rating, reviewCount: data.totalRatings };
  } catch {
    return null;
  }
}

// Single consolidated JSON-LD @graph (replaces previous duplicated LocalBusiness blocks).
// aggregateRating is populated from the live Google review data fetched above — the
// real reviews it's based on are visible on-page at /reviews and in the homepage
// ReviewsSection, satisfying Google's review-snippet visibility requirement.
function buildJsonLdGraph(
  aggregateRating: { ratingValue: number; reviewCount: number } | null
) {
  return {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ElectricalContractor", "HomeAndConstructionBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "ReefTech Solutions",
      alternateName: ["ReefTech", "Reef Tech Solutions"],
      description:
        "Licensed electrician and property tech specialist serving Hawaii's Big Island. Electrical, plumbing, access control, fire alarms, and spa & sauna service.",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/photos/logoOpt.webp`,
        width: 300,
        height: 300,
      },
      image: [
        `${SITE_URL}/photos/logoOpt.webp`,
        `${SITE_URL}/photos/og-image.jpg`,
      ],
      telephone: PHONE,
      email: EMAIL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kailua-Kona",
        addressRegion: "HI",
        addressCountry: "US",
        postalCode: "96740",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.8968,
        longitude: -155.5828,
      },
      areaServed: [
        { "@type": "City", name: "Kailua-Kona" },
        { "@type": "City", name: "Waimea", alternateName: "Kamuela" },
        { "@type": "City", name: "Hilo" },
        { "@type": "City", name: "Captain Cook" },
        { "@type": "City", name: "Volcano" },
      ],
      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 19.8968,
          longitude: -155.5828,
        },
        geoRadius: "100000",
      },
      priceRange: "$$-$$$",
      currenciesAccepted: "USD",
      paymentAccepted: "Cash, Credit Card, Check, Bank Transfer",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "16:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Property Maintenance & Building Technology",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Electrical Services",
              url: `${SITE_URL}/electrical-services`,
              description:
                "Licensed electrical repairs, lighting installation, troubleshooting, and emergency electrical service.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Plumbing Services",
              url: `${SITE_URL}/plumbing-services`,
              description:
                "Emergency plumbing repairs, leak detection, fixture installation, and water heater service.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fire Alarm & Suppression",
              url: `${SITE_URL}/fire-alarm-support-waimea`,
              description:
                "Fire alarm installation and inspection, kitchen hood suppression, and fire sprinkler service.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Locks & Access Control",
              url: `${SITE_URL}/lock-locksmith-services`,
              description:
                "Lock installation, lockout assistance, smart locks, mag locks, and access control systems.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Spa & Sauna Service",
              description:
                "Sauna and spa maintenance, repair, and smart spa system installation for residential and commercial properties.",
            },
          },
        ],
      },
      knowsAbout: [
        "Electrical Repair",
        "Plumbing Repair",
        "Fire Alarm Systems",
        "Access Control",
        "Smart Locks",
        "Sauna & Spa Service",
        "Property Maintenance",
        "Smart Home Integration",
      ],
      slogan: "Your one-stop shop for property repairs and building technology.",
      founder: { "@id": `${SITE_URL}/about#founder` },
      ...(aggregateRating
        ? {
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: aggregateRating.ratingValue,
              reviewCount: aggregateRating.reviewCount,
              bestRating: 5,
              worstRating: 1,
            },
          }
        : {}),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "ReefTech Solutions",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does ReefTech Solutions provide on the Big Island?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ReefTech Solutions provides electrical, plumbing, fire alarm, access control and locksmith, and spa & sauna service across Hawaii's Big Island, including Kailua-Kona, Waimea (Kamuela), and Hilo.",
          },
        },
        {
          "@type": "Question",
          name: "Do you service vacation rental properties on the Big Island?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We support vacation rentals with smart locks, automated check-in, remote monitoring, and maintenance for the building systems guests rely on.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer sauna and spa service on the Big Island?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We provide sauna and spa maintenance, repair, and smart spa system installation, including service for Sunlighten, Finnleo, and Amerec equipment.",
          },
        },
        {
          "@type": "Question",
          name: "What areas of Hawaii do you serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We serve Hawaii's Big Island, including Kailua-Kona, Waimea (Kamuela), Hilo, Captain Cook, Volcano, and surrounding areas.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer emergency tech support for properties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We respond to urgent issues with smart locks, access control, alarm and security systems, and other building technology. Call (808) 303-4627 for urgent property tech issues.",
          },
        },
        {
          "@type": "Question",
          name: "What smart home brands do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work with Allegion, Von Duprin, Adams Rite, Norton Rixson, and dormakaba for access control; Leviton and Lutron for lighting; and Sunlighten, Finnleo, and Amerec for saunas and spas.",
          },
        },
      ],
    },
  ],
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const aggregateRating = await getAggregateRating();
  const jsonLdGraph = buildJsonLdGraph(aggregateRating);

  return (
    <html lang="en-US">
      <head>
        {/* DNS prefetch / preconnect */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Consolidated JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />

        {/* Security headers */}
        <meta
          httpEquiv="Permissions-Policy"
          content="camera=(), microphone=(), geolocation=()"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tanHeadline.variable} antialiased`}
      >
        {/* Google Tag Manager (afterInteractive — non-blocking) */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W9LCF6ZJ');`}
        </Script>

        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9LCF6ZJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <MarketingHeader />
        {children}
        <Footer />

        {/* Google Analytics 4 (GA4) — loads gtag.js with afterInteractive strategy */}
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
