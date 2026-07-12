import type { Metadata } from 'next';
import Link from 'next/link';
import { SparklesIcon, SunIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const SITE_URL = 'https://www.reeftech.io';

export const metadata: Metadata = {
  title: 'Pool, Spa & Sauna Services Big Island Hawaii | ReefTech Solutions',
  description: 'Professional sauna installation, repair, and spa maintenance on Hawaii\'s Big Island. Serving Waimea, Hilo, and Kona. Sunlighten, Finnleo, and Amerec service. Call (808) 303-4627.',
  keywords: [
    'sauna service big island',
    'spa maintenance hawaii',
    'sauna installation waimea',
    'infrared sauna service kona',
    'finnleo sauna repair hawaii',
    'sunlighten service big island',
    'pool spa maintenance kona',
    'amerec steam generator repair'
  ],
  alternates: {
    canonical: `${SITE_URL}/pool-spa-sauna`,
  },
  openGraph: {
    title: 'Pool, Spa & Sauna Services Big Island Hawaii | ReefTech Solutions',
    description: 'Professional sauna installation, repair, and spa maintenance on Hawaii\'s Big Island. Serving Waimea, Hilo, and Kona.',
    url: `${SITE_URL}/pool-spa-sauna`,
    siteName: 'ReefTech Solutions',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: `${SITE_URL}/photos/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Pool, Spa & Sauna Services — ReefTech Solutions, Big Island Hawaii',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pool, Spa & Sauna Services Big Island Hawaii | ReefTech Solutions',
    description: 'Professional sauna installation, repair, and spa maintenance on Hawaii\'s Big Island.',
    images: [`${SITE_URL}/photos/og-image.jpg`],
  },
};

const spaSaunaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/pool-spa-sauna#service`,
      serviceType: 'Pool, Spa & Sauna Services',
      name: 'Pool, Spa & Sauna Services',
      description:
        'Professional sauna installation, maintenance, and repair services for luxury residential and commercial wellness facilities on the Big Island.',
      url: `${SITE_URL}/pool-spa-sauna`,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: [
        { '@type': 'City', name: 'Waimea', alternateName: 'Kamuela' },
        { '@type': 'City', name: 'Kailua-Kona' },
        { '@type': 'City', name: 'Hilo' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Sauna & Spa Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Sauna Installation',
              description: 'Installation of traditional and infrared sauna systems from leading manufacturers like Finnleo and Sunlighten.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Sauna Repair & Maintenance',
              description: 'Troubleshooting, repair, and ongoing maintenance of saunas, heaters, and control systems.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Spa & Wellness Equipment Service',
              description: 'Maintenance and repair of luxury spa equipment and steam rooms.',
            },
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/pool-spa-sauna#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Pool, Spa & Sauna Services', item: `${SITE_URL}/pool-spa-sauna` },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/pool-spa-sauna#webpage`,
      url: `${SITE_URL}/pool-spa-sauna`,
      name: 'Pool, Spa & Sauna Services Big Island Hawaii | ReefTech Solutions',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/pool-spa-sauna#service` },
      inLanguage: 'en-US',
    },
  ],
};

export default function PoolSpaSaunaPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(spaSaunaJsonLd) }}
      />
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#007595]">
            Pool, Spa & Sauna Services
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Professional Wellness and Relaxation Equipment Service for Big Island Hawaii
          </p>
          <p className="text-lg text-gray-500">
            Installation • Repair • Maintenance • Wellness Solutions
          </p>
        </div>

        <div className="space-y-12">
          <section className="border-l-4 border-[#007595] rounded-l-2xl py-3 pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <SunIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Infrared Wellness Technology
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Modern infrared saunas represent the pinnacle of home wellness technology, offering therapeutic benefits at lower temperatures than traditional saunas. We specialize in premium infrared systems that provide deep tissue penetration and enhanced comfort for daily use.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-semibold text-[#007595] mb-2">Our Infrared Expertise Includes:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Full Spectrum Infrared Systems (Near, Mid, and Far infrared)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Smart Control Integration (App-based and home automation)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Chromotherapy lighting & air purification settings</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="border-l-4 border-[#007595] rounded-l-2xl py-3 pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <WrenchScrewdriverIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Sauna Installation, Maintenance & Repair
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We specialize in infrared and traditional sauna systems from leading manufacturers, offering complete installation, maintenance, and repair services. From residential wellness rooms to commercial spa facilities, our expertise ensures optimal performance and guest satisfaction.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-semibold text-[#007595] mb-2">Brands We Service:</p>
              <p className="text-gray-700 font-medium">Sunlighten • Finnleo • Amerec • Custom Installations</p>
            </div>
          </section>

          <section className="border-l-4 border-[#007595] rounded-l-2xl py-3 pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <SparklesIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Spa & Wellness Equipment Support
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We provide comprehensive service for all major sauna and spa brands, including electrical, plumbing, and control systems. We keep your wellness systems running smoothly, preventing costly breakdowns and extending equipment life.
            </p>
          </section>
        </div>

        <div className="mt-16 bg-[#f0f9ff] rounded-lg p-8">
          <h2 className="text-xl font-bold text-center mb-3 text-[#007595]">
            Serving Big Island Hawaii
          </h2>
          <p className="text-gray-700 text-center">
            Waimea <span className='text-[#007595]'>✦</span> Kamuela <span className='text-[#007595]'>✦</span> Kailua-Kona <span className='text-[#007595]'>✦</span> Hilo
          </p>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Need Sauna or Spa Service?
          </h2>
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
