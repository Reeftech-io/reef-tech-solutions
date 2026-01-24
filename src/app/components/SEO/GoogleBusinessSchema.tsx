import React from 'react';

export default function GoogleBusinessSchema() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ElectricalContractor", "HomeAndConstructionBusiness"],
    "@id": "https://reeftech.io/#business",
    "name": "ReefTech Solutions",
    "alternateName": ["ReefTech", "Reef Tech Solutions"],
    "description": "Hawaii's premier smart home integration and building technology solutions provider specializing in vacation rental automation, sauna maintenance, and property technology management on Big Island.",
    "url": "https://reeftech.io",
    "telephone": "+18083034627",
    "email": "info@reeftech.io",
    "image": [
      "https://reeftech.io/photos/logoOpt.webp",
      "https://reeftech.io/photos/og-image.jpg"
    ],
    "logo": {
      "@type": "ImageObject",
      "url": "https://reeftech.io/photos/logoOpt.webp",
      "width": 300,
      "height": 300
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Serving Big Island",
      "addressLocality": "Kailua-Kona",
      "addressRegion": "HI",
      "postalCode": "96740",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.8968,
      "longitude": -155.5828
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Kailua-Kona",
        "sameAs": "https://en.wikipedia.org/wiki/Kailua-Kona,_Hawaii"
      },
      {
        "@type": "City",
        "name": "Waimea",
        "alternateName": "Kamuela",
        "sameAs": "https://en.wikipedia.org/wiki/Waimea,_Hawaii_County,_Hawaii"
      },
      {
        "@type": "City",
        "name": "Hilo",
        "sameAs": "https://en.wikipedia.org/wiki/Hilo,_Hawaii"
      },
      {
        "@type": "City",
        "name": "Captain Cook",
        "sameAs": "https://en.wikipedia.org/wiki/Captain_Cook,_Hawaii"
      },
      {
        "@type": "City",
        "name": "Volcano",
        "sameAs": "https://en.wikipedia.org/wiki/Volcano,_Hawaii"
      }
    ],
    "serviceArea": {
      "@type": "GeoShape",
      "addressCountry": "US",
      "addressRegion": "HI",
      "description": "Hawaii Big Island including Kailua-Kona, Waimea, Hilo, Captain Cook, Volcano, and surrounding areas"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Smart Home & Building Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sauna Maintenance & Repair Big Island",
            "description": "Professional sauna maintenance, repair, and smart system integration for residential and commercial properties across Hawaii's Big Island",
            "serviceType": "Sauna Maintenance",
            "areaServed": "Big Island Hawaii"
          },
          "priceRange": "$$"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smart Home Automation Waimea",
            "description": "Complete smart home integration including lighting, security, climate control, and voice automation for Waimea and Kamuela area properties",
            "serviceType": "Home Automation",
            "areaServed": "Waimea Hawaii"
          },
          "priceRange": "$$$"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vacation Rental Automation Kona",
            "description": "Automated guest management, smart locks, remote monitoring, and property management technology for Kailua-Kona vacation rentals",
            "serviceType": "Vacation Rental Technology",
            "areaServed": "Kailua-Kona Hawaii"
          },
          "priceRange": "$$-$$$"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "28",
      "bestRating": "5",
      "worstRating": "5"
    },
    "slogan": "Your Property's Complete Tech Department",
    "knowsAbout": [
      "Smart Home Integration",
      "Vacation Rental Automation",
      "Sauna Maintenance Big Island",
      "Pool Automation Hawaii",
      "Building Technology Solutions",
      "Home Security Systems",
      "Smart Locks Installation",
      "Property Management Technology"
    ],
    "sameAs": [
      "https://www.facebook.com/reeftechsolutions",
      "https://www.linkedin.com/company/reeftech-solutions"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+18083034627",
      "contactType": "customer service",
      "areaServed": "HI",
      "availableLanguage": "English"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
}
