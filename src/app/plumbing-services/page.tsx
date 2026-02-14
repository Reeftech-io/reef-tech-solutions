import type { Metadata } from 'next';
import Link from 'next/link';
import { WrenchScrewdriverIcon, CheckCircleIcon, BoltIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Plumber Big Island Hawaii | Emergency Plumbing Kona Waimea Hilo | ReefTech Solutions',
  description: 'Licensed plumber serving Big Island Hawaii. 24/7 emergency plumbing repairs, leak detection, water heater service, drain cleaning in Kona, Waimea, Hilo. Fast response. Call (808) 303-4627.',
  keywords: [
    'plumber Big Island Hawaii',
    'emergency plumber Kona',
    'plumbing services Waimea',
    'plumber Hilo Hawaii',
    'plumber Kamuela',
    'leak detection Big Island',
    'water heater repair Kona',
    'drain cleaning Waimea',
    'licensed plumber Hawaii',
    'emergency plumbing Big Island',
    'plumbing repairs Kailua-Kona',
    '24 hour plumber Big Island',
    'residential plumber Hawaii',
    'commercial plumber Kona',
    'fixture installation Big Island',
    'pipe repair Hawaii',
    'toilet repair Kona',
    'faucet installation Waimea'
  ],
  openGraph: {
    title: 'Licensed Plumber Big Island Hawaii | Emergency Plumbing Services',
    description: '24/7 emergency plumbing repairs in Kona, Waimea, Hilo. Licensed plumber for residential and commercial properties. Fast response, quality service.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://reeftech.io/plumbing-services',
  },
};

export default function PlumbingServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Plumbing Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "ReefTech Solutions",
              "telephone": "+1-808-303-4627",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kailua-Kona",
                "addressRegion": "HI",
                "addressCountry": "US"
              }
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Kailua-Kona"
              },
              {
                "@type": "City",
                "name": "Waimea"
              },
              {
                "@type": "City",
                "name": "Hilo"
              },
              {
                "@type": "City",
                "name": "Kamuela"
              },
              {
                "@type": "City",
                "name": "Captain Cook"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plumbing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Plumbing Repairs",
                    "description": "24/7 emergency plumbing service for burst pipes, major leaks, and urgent repairs"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Leak Detection and Repair",
                    "description": "Professional leak detection and repair services for residential and commercial properties"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Water Heater Service",
                    "description": "Water heater installation, repair, and maintenance for tank and tankless systems"
                  }
                }
              ]
            }
          })
        }}
      />

      <div className="container mx-auto px-4 py-32 max-w-4xl">

        {/* Header - H1 with primary keywords */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#007595]">
            Licensed Plumber Big Island Hawaii
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Emergency Plumbing Services in Kona, Waimea, Hilo & Kamuela
          </p>
          <p className="text-lg text-gray-500">
            24/7 Emergency Service • Licensed & Insured • Fast Response
          </p>
        </div>

        {/* Intro paragraph with keywords */}
        <div className="mb-12 text-gray-700 leading-relaxed">
          <p className="mb-4">
            Looking for a reliable <strong className='text-[#007595]'>plumber in Big Island Hawaii</strong>? ReefTech Solutions provides professional plumbing services throughout Kailua-Kona, Waimea, Hilo, and surrounding areas. Our licensed plumbers handle everything from emergency repairs to routine maintenance for residential and commercial properties.
          </p>
          <p>
            With fast response times and quality workmanship, we&apos;re your trusted choice for <strong className='text-[#007595]'>emergency plumbing in Big Island</strong>. Call <a href="tel:+1-808-303-4627" className="text-[#007595] font-semibold hover:underline">(808) 303-4627</a> for immediate service.
          </p>
        </div>

        {/* Services Section */}
        <div className="space-y-12">

          {/* Emergency Plumbing */}
          <section className="border-l-4 border-[#007595] py-3 rounded-l-2xl pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <WrenchScrewdriverIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Emergency Plumbing Repairs
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Plumbing emergencies don&apos;t wait for business hours. Our emergency plumbing services are available when you need them most. Fast response times to minimize water damage and get your property back to normal quickly.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-bold text-[#007595] mb-3">Emergency Services Include:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Burst pipe repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Major leak repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Water heater failures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Sewer line backups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Toilet and drain clogs</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Leak Detection & Repair */}
          <section className="border-l-4 border-[#007595] rounded-l-2xl py-3 pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <CheckCircleIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Leak Detection & Repair
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Early leak detection saves money and prevents extensive water damage. We use professional diagnostic tools to locate hidden leaks and provide lasting repair solutions.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-semibold text-[#007595] mb-3">Leak Services Include:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Advanced leak detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Pipe leak repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Fixture leak repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Slab leak detection and repair</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Water line leak repairs</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Fixture Installation */}
          <section className="border-l-4 border-[#007595] rounded-l-2xl py-3 pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <BoltIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Fixture Installation & Replacement
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Professional installation of plumbing fixtures ensures proper function and prevents future problems. We install and replace all types of plumbing fixtures for residential and commercial properties.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-semibold text-[#007595] mb-3">Installation Services:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Faucet installation and repair</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Toilet installation and replacement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Sink and garbage disposal installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Shower and bathtub installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Water heater installation and replacement</span>
                </li>
              </ul>
            </div>
          </section>

        </div>

        {/* Additional Services */}
        <section className="mt-16 border-l-4 border-[#007595] py-3 rounded-l-2xl pl-6">
          <div className="flex items-center gap-6 mb-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                <InformationCircleIcon className="w-8 h-8 text-[#007595]" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#007595]">
                Additional Plumbing Services
              </h3>
            </div>
          </div>
          <div className="bg-[#f0f9ff] rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#007595] mb-2">Water Heater Service</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Tank and tankless water heaters</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Maintenance and repairs</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Installation and replacement</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#007595] mb-2">Drain Services</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Drain cleaning and clearing</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Clog removal</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Video camera inspections</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#007595] mb-2">Pipe Services</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Pipe repair and replacement</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Repiping services</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Pipe insulation</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#007595] mb-2">Commercial Plumbing</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Restaurant plumbing</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Vacation rental properties</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Commercial maintenance</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <div className="mt-16 bg-gradient-to-r bg-[#f0f9ff] rounded-2xl p-6">
          <h3 className="text-xl text-center font-bold mb-3 text-[#007595]">
            Serving Big Island Hawaii
          </h3>
          <p className="text-center text-gray-700">
            Kailua-Kona <span className='text-[#007595]'>✦</span> Waimea <span className='text-[#007595]'>✦</span> Kamuela <span className='text-[#007595]'>✦</span> Hilo <span className='text-[#007595]'>✦</span> Captain Cook <span className='text-[#007595]'>✦</span> Volcano <span className='text-[#007595]'>✦</span> Holualoa <span className='text-[#007595]'>✦</span> Waikoloa
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Need Plumbing Service?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+1-808-303-4627"
              className="bg-[#007595]/80 hover:bg-[#007595]/100 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (808) 303-4627
            </a>
            <Link
              href="/#request-form"
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              Request Service
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
