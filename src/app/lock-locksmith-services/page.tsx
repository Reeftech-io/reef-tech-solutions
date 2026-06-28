import type { Metadata } from 'next';
import Link from 'next/link';
import { LockClosedIcon, KeyIcon, ShieldCheckIcon, AdjustmentsHorizontalIcon, HomeIcon, BuildingOfficeIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Lock & Locksmith Services Big Island Hawaii | ReefTech Solutions',
  description: 'Professional locksmith services on Big Island Hawaii. Lock installation, repair, emergency lockout service, and security upgrades in Kona, Waimea, and Hilo. Fast response. Call (808) 303-4627.',
  keywords: [
    'locksmith big island',
    'lock installation hawaii',
    'lockout service kona',
    'lock repair waimea',
    'emergency locksmith hilo',
    'commercial locks',
    'residential locks',
    'deadbolt installation',
    'lock rekeying big island',
    'licensed locksmith Hawaii',
    '24/7 locksmith Big Island'
  ],
  openGraph: {
    title: 'Lock & Locksmith Services Big Island Hawaii | ReefTech Solutions',
    description: 'Professional locksmith services on Big Island Hawaii. Lock installation, repair, emergency lockout service, and security upgrades.',
    url: 'https://www.reeftech.io/lock-locksmith-services',
    siteName: 'ReefTech Solutions',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.reeftech.io/photos/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lock & Locksmith Services — ReefTech Solutions, Big Island Hawaii',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lock & Locksmith Services Big Island Hawaii | ReefTech Solutions',
    description: 'Professional locksmith services in Kona, Waimea, and Hilo. Lock installation, emergency lockout, smart locks, access control. Call (808) 303-4627.',
    images: ['https://www.reeftech.io/photos/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.reeftech.io/lock-locksmith-services',
  },
};

export default function LockLocksmithServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Locksmith Services",
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
              "name": "Locksmith Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Lock Installation",
                    "description": "Professional installation of deadbolts, smart locks, and high-security systems"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Lockout Service",
                    "description": "24/7 emergency lockout assistance for homes, offices, and vehicles"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Lock Repair & Rekeying",
                    "description": "Expert repair of damaged locks and rekeying for enhanced security"
                  }
                }
              ]
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id": "https://www.reeftech.io/lock-locksmith-services#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.reeftech.io/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Lock & Locksmith Services",
                    "item": "https://www.reeftech.io/lock-locksmith-services"
                  }
                ]
              },
              {
                "@type": "WebPage",
                "@id": "https://www.reeftech.io/lock-locksmith-services#webpage",
                "url": "https://www.reeftech.io/lock-locksmith-services",
                "name": "Lock & Locksmith Services Big Island Hawaii | ReefTech Solutions",
                "isPartOf": { "@id": "https://www.reeftech.io/#website" },
                "inLanguage": "en-US"
              }
            ]
          })
        }}
      />
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#007595]">
            Professional Lock & Locksmith Services
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Expert Lock Installation, Repair & Emergency Lockout Service across Big Island Hawaii
          </p>
          <p className="text-lg text-gray-500">
            24/7 Emergency Service • Licensed & Insured • Fast Response
          </p>
        </div>

        <div className="mb-12 text-gray-700 leading-relaxed">
          <p className="mb-4">
            Looking for a reliable <strong className='text-[#007595]'>locksmith on Big Island Hawaii</strong>? ReefTech Solutions provides professional lock installation, repair, and emergency lockout services throughout Kailua-Kona, Waimea, Hilo, and surrounding areas. Our experienced technicians handle everything from residential deadbolts to complex commercial access control systems.
          </p>
          <p>
            With fast response times and quality workmanship, we&apos;re your trusted choice for <strong className='text-[#007595]'>locksmith services on Big Island</strong>. Call <a href="tel:+1-808-303-4627" className="text-[#007595] font-semibold hover:underline">(808) 303-4627</a> for immediate assistance.
          </p>
        </div>

        <div className="space-y-12">
          {/* Lock Installation */}
          <section className="border-l-4 border-[#007595] py-3 rounded-l-2xl pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <LockClosedIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Lock Installation
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Professional installation of deadbolts, door locks, smart locks, and high-security lock systems for residential and commercial properties. We ensure your security hardware is mounted correctly for maximum protection.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-bold text-[#007595] mb-3">Installation Services Include:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Deadbolt installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Smart lock systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Commercial grade locks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>High-security locks</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Emergency Lockout Service */}
          <section className="border-l-4 border-[#007595] rounded-l-2xl py-3 pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <KeyIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Emergency Lockout Service
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Fast response for lockouts. Available 24/7 for residential, commercial, and vehicle lockout emergencies across Big Island. Our technicians use non-destructive entry methods whenever possible.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-semibold text-[#007595] mb-3">Emergency Services Include:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Home lockout service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Office lockout assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Vehicle entry assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Quick response time</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Lock Repair & Rekeying */}
          <section className="border-l-4 border-[#007595] rounded-l-2xl py-3 pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <AdjustmentsHorizontalIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Lock Repair & Rekeying
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Expert repair of damaged or malfunctioning locks and rekeying services for enhanced security. Ideal for new property owners or after a security breach to ensure only authorized keys work.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-semibold text-[#007595] mb-3">Repair Services Include:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Lock mechanism repair</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Key duplication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Rekey existing locks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Master key systems</span>
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
                Specialized Locksmith Solutions
              </h3>
            </div>
          </div>
          <div className="bg-[#f0f9ff] rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#007595] mb-2">Commercial Security</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Access control systems</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Panic bar installation</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Business lock upgrades</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#007595] mb-2">Residential Work</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Home lock replacement</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Smart lock configuration</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Deadbolt reinforcement</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#007595] mb-2">Security Upgrades</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Security assessments</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>High-security cylinders</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Electronic upgrades</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#007595] mb-2">Why Choose Us</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Prompt service</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Licensed professionals</span></li>
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
            Kailua-Kona <span className='text-[#007595]'>✦</span> Waimea <span className='text-[#007595]'>✦</span> Kamuela <span className='text-[#007595]'>✦</span> Hilo <span className='text-[#007595]'>✦</span> Captain Cook <span className='text-[#007595]'>✦</span> Kohala Coast <span className='text-[#007595]'>✦</span> Holualoa <span className='text-[#007595]'>✦</span> Waikoloa
          </p>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Need Locksmith Service?
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
