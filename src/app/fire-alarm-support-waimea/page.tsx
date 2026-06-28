import type { Metadata } from 'next';
import Link from 'next/link';
import { FireIcon, ShieldCheckIcon, BeakerIcon } from '@heroicons/react/24/outline';

const SITE_URL = 'https://www.reeftech.io';

export const metadata: Metadata = {
  title: 'Fire Alarm & Suppression Services Waimea Hawaii | ReefTech Solutions',
  description: 'Professional fire alarm installation, inspection, and service in Waimea, Kamuela, and Big Island Hawaii. Fire hose service, kitchen hood suppression systems, and fire sprinkler maintenance. Call (808) 303-4627.',
  keywords: [
    'fire alarm service Waimea',
    'fire suppression Kamuela',
    'kitchen hood inspection Hawaii',
    'fire hose service Big Island',
    'fire sprinkler inspection Waimea',
    'commercial fire safety Hawaii',
    'fire alarm Big Island Hawaii',
    'fire suppression system Kona',
    'restaurant fire suppression Hawaii',
    'fire safety system Big Island'
  ],
  alternates: {
    canonical: `${SITE_URL}/fire-alarm-support-waimea`,
  },
  openGraph: {
    title: 'Fire Alarm & Suppression Services Waimea Hawaii | ReefTech Solutions',
    description: 'Professional fire alarm installation, inspection, and service in Waimea, Kamuela, and Big Island Hawaii. Fire hose, kitchen hood suppression, and fire sprinkler service.',
    url: `${SITE_URL}/fire-alarm-support-waimea`,
    siteName: 'ReefTech Solutions',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: `${SITE_URL}/photos/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Fire Alarm & Suppression Services — ReefTech Solutions, Big Island Hawaii',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fire Alarm & Suppression Services Waimea Hawaii | ReefTech Solutions',
    description: 'Professional fire alarm installation, inspection, and suppression system service on Hawaii\'s Big Island.',
    images: [`${SITE_URL}/photos/og-image.jpg`],
  },
};

const fireAlarmJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/fire-alarm-support-waimea#service`,
      serviceType: 'Fire Alarm & Suppression Services',
      name: 'Fire Alarm & Suppression Services',
      description:
        'Professional fire alarm installation, inspection, and service in Waimea, Kamuela, and Big Island Hawaii. Fire hose service, kitchen hood suppression systems, and fire sprinkler maintenance.',
      url: `${SITE_URL}/fire-alarm-support-waimea`,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: [
        { '@type': 'City', name: 'Waimea', alternateName: 'Kamuela' },
        { '@type': 'City', name: 'Kailua-Kona' },
        { '@type': 'City', name: 'Hilo' },
        { '@type': 'City', name: 'Captain Cook' },
        { '@type': 'City', name: 'Volcano' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Fire Safety Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Fire Hose & Cabinet Service',
              description:
                'Sales, installation, annual inspection, hydro-testing and service of fire hoses and cabinets.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Kitchen Hood Fire Suppression Inspection & Service',
              description:
                'Design, installation, semi-annual inspection, and service of restaurant range hood fire suppression systems.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Fire Sprinkler Installation, Inspection & Service',
              description:
                'Installation, inspection, maintenance, and repair of fire sprinkler systems.',
            },
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/fire-alarm-support-waimea#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Fire Alarm & Suppression Services', item: `${SITE_URL}/fire-alarm-support-waimea` },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/fire-alarm-support-waimea#webpage`,
      url: `${SITE_URL}/fire-alarm-support-waimea`,
      name: 'Fire Alarm & Suppression Services Waimea Hawaii | ReefTech Solutions',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/fire-alarm-support-waimea#service` },
      inLanguage: 'en-US',
    },
  ],
};

export default function FireAlarmWaimeaPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fireAlarmJsonLd) }}
      />
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#007595]">
            Fire Alarm & Suppression Services
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Professional Fire Safety Systems for Waimea, Kamuela & Big Island Hawaii
          </p>
          <p className="text-lg text-gray-500">
            Installation • Inspection • Service • Compliance
          </p>
        </div>
        <div className="space-y-12">
          <section className="border-l-4 border-[#007595] rounded-l-2xl py-3 pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <FireIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Fire Hose and Cabinet Service
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Like extinguishers, fire hoses are required to be inspected annually. They are hydro-tested or replaced after they&apos;ve been in use for five and eight years, then every two years thereafter.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-semibold text-[#007595] mb-2">Our Services Include:</p>
              <p className="text-gray-700">Sales, installation, inspection and service of fire hoses and cabinets</p>
            </div>
          </section>
          <section className="border-l-4 border-[#007595] rounded-l-2xl py-3 pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <ShieldCheckIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Restaurant Range Hood Fire Suppression System Inspection and Service
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Commercial restaurant kitchens require a full range of equipment which has the potential to lead to a fire. Federal and Hawaiʻi laws require kitchen hood fire suppression systems to be inspected on a semi-annual basis. Our certified range hood technicians can inspect and service all types of kitchen hood fire suppression systems.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-semibold text-[#007595] mb-3">Our Services Include:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Inspection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Semi-annual service</span>
                </li>
              </ul>
            </div>
          </section>
          <section className="border-l-4 border-[#007595] rounded-l-2xl py-3 pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <BeakerIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Fire Sprinkler Installation, Inspection and Service
                </h2>
              </div>
            </div>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-semibold text-[#007595] mb-2">Our Services Include:</p>
              <p className="text-gray-700">Installation, inspection, maintenance and repair</p>
            </div>
          </section>
        </div>
        <div className="mt-16 bg-[#f0f9ff] rounded-lg p-8">
          <h2 className="text-xl font-bold text-center mb-3 text-[#007595]">
            Serving Big Island Hawaii
          </h2>
          <p className="text-gray-700 text-center">
            Waimea <span className='text-[#007595]'>✦</span> Kamuela <span className='text-[#007595]'>✦</span> Kailua-Kona <span className='text-[#007595]'>✦</span> Hilo <span className='text-[#007595]'>✦</span> Captain Cook <span className='text-[#007595]'>✦</span> Volcano
          </p>
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Need Fire Safety Service?
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
