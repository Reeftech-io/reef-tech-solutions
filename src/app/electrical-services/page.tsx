import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { WrenchScrewdriverIcon, LightBulbIcon, BoltIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Minor Electrical Services Big Island Hawaii | Kona Waimea Hilo | ReefTech Solutions',
  description: 'Minor electrical services on Big Island Hawaii. Outlet repairs, switch replacement, lighting installation, and basic electrical work in Kona, Waimea, Hilo. Fast response. Call (808) 303-4627.',
  keywords: [
    'electrical services Big Island Hawaii',
    'electrical repair Kona',
    'outlet repair Waimea',
    'lighting installation Hilo',
    'switch replacement Big Island',
    'electrical troubleshooting Hawaii',
    'light fixture installation Kona',
    'ceiling fan installation Waimea',
    'minor electrical work Big Island',
    'licensed electrician Hawaii',
    'residential electrical Big Island',
    'commercial electrical Kona',
    'LED lighting installation',
    'dimmer switch installation Waimea'
  ],
  openGraph: {
    title: 'Minor Electrical Services Big Island Hawaii | ReefTech Solutions',
    description: 'Professional minor electrical services in Kona, Waimea, Hilo. Outlet repairs, lighting installation, switch replacement. Fast response, quality service.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://reeftech.io/electrical-services',
  },
};

export default function ElectricalServicesPage() {
  notFound();
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Electrical Services",
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
              "name": "Electrical Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Electrical Repairs",
                    "description": "Outlet and switch repairs, basic electrical troubleshooting for residential and commercial properties"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Lighting Installation",
                    "description": "Indoor, outdoor, LED lighting installation and ceiling fan installation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Fixture Installation",
                    "description": "Light fixture, ceiling fan, and dimmer switch installation and replacement"
                  }
                }
              ]
            }
          })
        }}
      />
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#007595]">
            Minor Electrical Services Big Island Hawaii
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Outlet Repairs, Lighting Installation &amp; Switch Replacement in Kona, Waimea &amp; Hilo
          </p>
          <p className="text-lg text-gray-500">
            Fast Response • Licensed &amp; Insured • Quality Workmanship
          </p>
        </div>
        <div className="mb-12 text-gray-700 leading-relaxed">
          <p className="mb-4">
            Need reliable <strong className='text-[#007595]'>minor electrical services on Big Island Hawaii</strong>? ReefTech Solutions provides professional electrical repair and installation services throughout Kailua-Kona, Waimea, Hilo, and surrounding areas. Our experienced team handles everything from outlet repairs to lighting installations for residential and commercial properties.
          </p>
          <p>
            With fast response times and quality workmanship, we&apos;re your trusted choice for <strong className='text-[#007595]'>electrical work on Big Island</strong>. Call <a href="tel:+1-808-303-4627" className="text-[#007595] font-semibold hover:underline">(808) 303-4627</a> for prompt service.
          </p>
        </div>
        <div className="space-y-12">
          <section className="border-l-4 border-[#007595] py-3 rounded-l-2xl pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <WrenchScrewdriverIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Electrical Repairs
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Basic electrical repair services for minor issues throughout your home or business. From faulty outlets to damaged switches, we diagnose and fix common electrical problems quickly and safely.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-bold text-[#007595] mb-3">Repair Services Include:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Outlet &amp; switch repair</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Replace damaged outlets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Switch replacement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Basic troubleshooting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>GFCI outlet installation</span>
                </li>
              </ul>
            </div>
          </section>
          <section className="border-l-4 border-[#007595] rounded-l-2xl py-3 pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <LightBulbIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Lighting Installation
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Professional lighting installation including indoor, outdoor, LED upgrades, and specialty lighting systems. We help transform your space with the right lighting solutions tailored to your needs.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-semibold text-[#007595] mb-3">Lighting Services Include:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Interior lighting installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Outdoor &amp; landscape lighting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>LED retrofits &amp; upgrades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Ceiling fan installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Dimmer switch installation</span>
                </li>
              </ul>
            </div>
          </section>
          <section className="border-l-4 border-[#007595] rounded-l-2xl py-3 pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <BoltIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Light Fixtures &amp; Fans
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Installation and replacement of light fixtures, ceiling fans, and other basic electrical fixtures. We ensure proper mounting, wiring, and safe operation of all installed fixtures.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-semibold text-[#007595] mb-3">Fixture Services Include:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Light fixture installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Ceiling fan installation &amp; replacement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Fixture replacement &amp; upgrades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Dimmer switch installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Chandelier installation</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <section className="mt-16 border-l-4 border-[#007595] py-3 rounded-l-2xl pl-6">
          <div className="flex items-center gap-6 mb-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                <InformationCircleIcon className="w-8 h-8 text-[#007595]" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#007595]">
                Additional Electrical Services
              </h3>
            </div>
          </div>
          <div className="bg-[#f0f9ff] rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#007595] mb-2">Commercial Minor Work</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Outlet repairs</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Light fixture replacement</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Switch installation</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#007595] mb-2">Common Issues We Fix</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Flickering lights</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Dead outlets</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>GFCI trips</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#007595] mb-2">Safety &amp; Quality</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Insured &amp; reliable</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Safety-focused work</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Quality workmanship</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#007595] mb-2">Why Choose Us</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Prompt service</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Experienced team</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Attention to detail</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-16 bg-[#f0f9ff] rounded-2xl p-6">
          <h3 className="text-xl text-center font-bold mb-3 text-[#007595]">
            Serving Big Island Hawaii
          </h3>
          <p className="text-center text-gray-700">
            Kailua-Kona <span className='text-[#007595]'>✦</span> Waimea <span className='text-[#007595]'>✦</span> Kamuela <span className='text-[#007595]'>✦</span> Hilo <span className='text-[#007595]'>✦</span> Captain Cook <span className='text-[#007595]'>✦</span> Volcano <span className='text-[#007595]'>✦</span> Holualoa <span className='text-[#007595]'>✦</span> Waikoloa
          </p>
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Need Electrical Service?
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
