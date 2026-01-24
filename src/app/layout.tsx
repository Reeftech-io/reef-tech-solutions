import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import MarketingHeader from "./components/MarketingHeader";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const tanHeadline = localFont({
  src: "./fonts/TAN-Headline-Regular.woff2",
  variable: "--font-tan-headline",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "ReefTech Solutions - Property Maintenance & Repair Services | Big Island Hawaii",
    template: "%s | ReefTech Solutions - Hawaii Property Services"
  },
  description: "Professional property maintenance and repair services for Hawaii's Big Island. Plumbing, electrical, carpentry, sauna repair, lock service, and general maintenance. Fast, reliable service for residential and commercial properties in Kona, Waimea, and Hilo.",
  keywords: [
    // Primary Keywords
    "property maintenance Hawaii",
    "handyman Big Island",
    "property repair services Hawaii",
    "maintenance services Kona",

    // Service-specific Keywords
    "plumbing repairs Hawaii",
    "electrical repairs Big Island",
    "sauna repair Hawaii",
    "lock installation Hawaii",
    "lockout service Kona",
    "emergency plumbing Hawaii",
    "carpentry services Big Island",
    "general repairs Hawaii",

    // Location-specific Primary
    "handyman Kailua-Kona",
    "property maintenance Waimea",
    "repair services Hilo",
    "handyman Kamuela",
    "plumber Big Island",
    "electrician Kona",
    "sauna repair Big Island",
    "maintenance Waimea",
    "property repair Captain Cook",

    // Location + Service Combinations
    "emergency repairs Kona",
    "Big Island plumber",
    "electrician Waimea Hawaii",
    "property maintenance Hilo",
    "handyman services Kamuela",
    "lock service Big Island",
    "sauna maintenance Kona",
    "spa repair Hawaii",
    "fire alarm installation Big Island",
    "lighting repair Hawaii",
    "door repair Kona",
    "emergency locksmith Big Island",

    // Industry-specific
    "residential maintenance Hawaii",
    "commercial property maintenance",
    "vacation rental repairs",
    "property management repairs Hawaii",
    "emergency repair services",
    "licensed electrician Hawaii",
    "licensed plumber Big Island",
    "general contractor Kona",
    "home repair services Hawaii",
    "fixture installation Big Island",
    "leak detection Hawaii",
    "water heater repair Kona"
  ],
  authors: [{ name: "ReefTech Solutions", url: "https://reeftechsolutions.com" }],
  creator: "ReefTech Solutions",
  publisher: "ReefTech Solutions",
  applicationName: "ReefTech Solutions",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://reeftech.io'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  openGraph: {
    title: "ReefTech Solutions - Property Maintenance & Repair Services",
    description: "Professional property maintenance and repair services for Hawaii's Big Island. Plumbing, electrical, carpentry, sauna repair, and general maintenance. Fast, reliable service.",
    url: 'https://reeftech.io',
    siteName: 'ReefTech Solutions',
    images: [
      {
        url: '/photos/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ReefTech Solutions - Smart Home Integration and Building Technology Solutions in Hawaii',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'United States',
    emails: ['info@reeftech.io'],
    phoneNumbers: ['+1-808-303-4627'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@reeftechsolutions',
    creator: '@reeftechsolutions',
    title: "ReefTech Solutions - Hawaii Property Maintenance & Repair",
    description: "Professional property maintenance and repair services. Plumbing, electrical, carpentry, sauna repair, and general maintenance for Big Island properties.",
    images: {
      url: '/photos/og-image.jpg',
      alt: 'ReefTech Solutions - Smart Home Integration Hawaii',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google95fe311b9c002ae1', // Google Search Console verification
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  category: 'Property Maintenance & Repair',
  classification: 'Professional Property Maintenance and Repair Services',
  other: {
    'geo.region': 'US-HI',
    'geo.placename': 'Big Island, Hawaii',
    'geo.position': '19.8968;-155.5828',
    'ICBM': '19.8968, -155.5828',
    'rating': '5',
    'coverage': 'Hawaii Big Island Kailua-Kona Waimea Hilo Captain-Cook Volcano Kamuela',
    'distribution': 'Local',
    'target': 'property managers, vacation rental owners, homeowners, businesses, commercial properties',
    'service-areas': 'Kailua-Kona, Waimea, Kamuela, Hilo, Captain Cook, Volcano, Pahoa, Naalehu, Ocean View, Holualoa',
    'specialties': 'plumbing repairs, electrical services, sauna repair, lock installation, emergency repairs, general maintenance',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'ReefTech Solutions',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#00CED1',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W9LCF6ZJ');`
        }} />
        {/* End Google Tag Manager */}

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Enhanced Structured Data - Multiple Schema Types */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://reeftech.io/#organization",
                "name": "ReefTech Solutions",
                "alternateName": "ReefTech",
                "description": "Professional property maintenance and repair services for Hawaii properties. Plumbing, electrical, carpentry, sauna repair, lock service, and general maintenance for residential and commercial properties.",
                "url": "https://reeftech.io",
                "logo": "https://reeftech.io/photos/logoOpt.webp",
                "image": [
                  "https://reeftech.io/photos/logoOpt.webp",
                  "https://reeftech.io/photos/og-image.jpg"
                ],
                "telephone": "+1-808-303-4627",
                "email": "joshua@reeftech.io",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Kailua-Kona",
                  "addressRegion": "Hawaii",
                  "addressCountry": "US",
                  "postalCode": "96740"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 19.8968,
                  "longitude": -155.5828
                },
                "areaServed": [
                  {
                    "@type": "State",
                    "name": "Hawaii"
                  },
                  {
                    "@type": "City",
                    "name": "Kailua-Kona"
                  },
                  {
                    "@type": "City",
                    "name": "Hilo"
                  },
                  {
                    "@type": "City",
                    "name": "Waimea"
                  }
                ],
                "serviceArea": {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": 19.8968,
                    "longitude": -155.5828
                  },
                  "geoRadius": "100000"
                },
                "priceRange": "$$-$$$",
                "currenciesAccepted": "USD",
                "paymentAccepted": "Cash, Credit Card, Check, Bank Transfer",
                "openingHours": [
                  "Mo-Fr 08:00-18:00",
                  "Sa 09:00-16:00"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Property Maintenance & Repair Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Plumbing Services",
                        "description": "Emergency plumbing repairs, leak detection, fixture installation, water heater service, and drain cleaning",
                        "provider": {
                          "@id": "https://reeftech.io/#organization"
                        }
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Electrical Services",
                        "description": "Electrical repairs, lighting installation, fixture replacement, troubleshooting, and emergency electrical service",
                        "provider": {
                          "@id": "https://reeftech.io/#organization"
                        }
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Sauna & Spa Repair",
                        "description": "Professional sauna repair and maintenance, spa service, and wellness system repairs for residential and commercial properties",
                        "provider": {
                          "@id": "https://reeftech.io/#organization"
                        }
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Lock & Door Services",
                        "description": "Lock installation, lockout assistance, door hardware repair, and security solutions",
                        "provider": {
                          "@id": "https://reeftech.io/#organization"
                        }
                      }
                    }
                  ]
                },
                "makesOffer": [
                  {
                    "@type": "Offer",
                    "name": "Free Consultation",
                    "description": "Complimentary assessment of your property's technology needs",
                    "price": "0",
                    "priceCurrency": "USD"
                  }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "28",
                  "bestRating": "5",
                  "worstRating": "5"
                },
                "review": [
                  {
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5"
                    },
                    "author": {
                      "@type": "Person",
                      "name": "Property Manager"
                    },
                    "reviewBody": "ReefTech transformed our vacation rental operation with smart automation that saves us hours every week."
                  }
                ],
                "sameAs": [
                  "https://www.yelp.com/biz/reeftech-solutions",
                  "https://www.facebook.com/reeftechsolutions",
                  "https://www.linkedin.com/company/reeftech-solutions"
                ],
                "knowsAbout": [
                  "Property Maintenance",
                  "Plumbing Repairs",
                  "Electrical Services",
                  "Sauna Repair",
                  "Lock Installation",
                  "Carpentry",
                  "General Repairs",
                  "Emergency Repairs",
                  "Fire Alarm Installation"
                ],
                "slogan": "Your One-Stop Shop for All Property Repairs & Maintenance"
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://reeftech.io/#website",
                "url": "https://reeftech.io",
                "name": "ReefTech Solutions",
                "description": "Hawaii's premier smart home integration and building technology solutions provider",
                "publisher": {
                  "@id": "https://reeftech.io/#organization"
                },
                "potentialAction": [
                  {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://reeftech.io/search?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                ],
                "inLanguage": "en-US"
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "@id": "https://reeftech.io/#service",
                "name": "ReefTech Solutions Professional Services",
                "provider": {
                  "@id": "https://reeftech.io/#organization"
                },
                "areaServed": {
                  "@type": "State",
                  "name": "Hawaii"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Technology Integration Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Smart Home Consultation",
                        "description": "Professional assessment and planning for smart home integration"
                      }
                    }
                  ]
                }
              }
            ])
          }}
        />

        {/* Additional SEO enhancements */}
        <link rel="canonical" href="https://reeftech.io/" />
        <link rel="alternate" hrefLang="en-US" href="https://reeftech.io/" />

        {/* Security headers */}
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tanHeadline.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9LCF6ZJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <MarketingHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}