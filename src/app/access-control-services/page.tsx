import type { Metadata } from 'next';
import Link from 'next/link';
import { LockClosedIcon, KeyIcon, ShieldCheckIcon, AdjustmentsHorizontalIcon, HomeIcon, BuildingOfficeIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Access Control Services Big Island Hawaii | ReefTech Solutions',
  description: 'Access control and locksmith services on Big Island Hawaii. Electronic access control, card & fob readers, magnetic locks, panic hardware, smart locks, lock installation, repair, rekeying, and 24/7 lockout service in Kona, Waimea, and Hilo. Call (808) 303-4627.',
  keywords: [
    'access control big island',
    'access control systems hawaii',
    'electronic access control kona',
    'magnetic locks hawaii',
    'maglock installation',
    'panic hardware exit devices',
    'card reader access control',
    'keypad door locks',
    'smart lock installation hawaii',
    'locksmith big island',
    'lock installation hawaii',
    'lockout service kona',
    'lock repair waimea',
    'emergency locksmith hilo',
    'commercial locks',
    'residential locks',
    'deadbolt installation',
    'lock rekeying big island',
    '24/7 locksmith Big Island'
  ],
  openGraph: {
    title: 'Access Control Services Big Island Hawaii | ReefTech Solutions',
    description: 'Access control and locksmith services on Big Island Hawaii. Electronic access control, magnetic locks, panic hardware, smart locks, lock installation, repair, and emergency lockout service.',
    url: 'https://www.reeftech.io/access-control-services',
    siteName: 'ReefTech Solutions',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.reeftech.io/photos/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Access Control Services — ReefTech Solutions, Big Island Hawaii',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Access Control Services Big Island Hawaii | ReefTech Solutions',
    description: 'Access control and locksmith services in Kona, Waimea, and Hilo. Electronic access control, magnetic locks, panic hardware, smart locks, and 24/7 lockout service. Call (808) 303-4627.',
    images: ['https://www.reeftech.io/photos/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.reeftech.io/access-control-services',
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
            "serviceType": "Access Control & Locksmith Services",
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
              "name": "Access Control & Locksmith Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Electronic Access Control",
                    "description": "Keypads, card and fob readers, controllers, and electric strikes for residential and commercial doors"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Magnetic Locks & Panic Hardware",
                    "description": "Code-compliant maglock installation and exit devices integrated with egress and fire systems"
                  }
                },
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
                "@id": "https://www.reeftech.io/access-control-services#breadcrumb",
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
                    "name": "Access Control Services",
                    "item": "https://www.reeftech.io/access-control-services"
                  }
                ]
              },
              {
                "@type": "WebPage",
                "@id": "https://www.reeftech.io/access-control-services#webpage",
                "url": "https://www.reeftech.io/access-control-services",
                "name": "Access Control Services Big Island Hawaii | ReefTech Solutions",
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
            Professional Access Control Services
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Electronic Access Control, Locksmith & Emergency Lockout Service across Big Island Hawaii
          </p>
          <p className="text-lg text-gray-500">
            24/7 Emergency Service • Insured • Fast Response
          </p>
        </div>

        <div className="mb-12 text-gray-700 leading-relaxed">
          <p className="mb-4">
            Looking for dependable <strong className='text-[#007595]'>access control and locksmith service on Big Island Hawaii</strong>? ReefTech Solutions protects homes and businesses from Kailua-Kona to Waimea and Hilo with a complete range of door hardware and electronic security work. For homeowners, we install, repair, and rekey deadbolts, entry sets, and mortise locks, upgrade worn hardware to modern high-security cylinders, and fit smart locks that let you manage entry from your phone. Whether you have just moved into a new home, lost a key, or want stronger protection for your family, we match the right hardware to your doors and your budget. We also help homeowners add keyless entry to a front door, secure a garage side door, or bring an older lock set up to a modern Grade 1 or Grade 2 standard so it stands up to the coastal climate and years of daily use.
          </p>
          <p className="mb-4">
            Commercial properties have very different needs, and we design and install <strong className='text-[#007595]'>access control systems</strong> that scale with your building. Instead of handing out keys that can be copied or lost, an access control system lets you assign credentials to each employee, set schedules, and revoke access instantly when someone leaves. We work with keypads, card and fob readers, mobile credentials, and networked controllers that tie multiple doors together, so a single office, a multi-suite building, or a property with gates and storerooms can all be managed from one place.
          </p>
          <p className="mb-4">
            Electronic access control is more than a reader on the wall. A reliable installation combines the credential reader, a controller or control panel, a locking device, and a request-to-exit sensor, all wired so the door stays secure while still allowing safe, fast exit. We install and service electric strikes, electrified mortise and cylindrical locks, keypad locks, and IP or cloud-managed controllers that log every entry. For businesses that want to see who came and went, we can enable audit trails, time-based schedules, and remote lock and unlock from a web dashboard. We can also tie access control into an existing intercom, video surveillance, or alarm setup, and expand a single controlled door into a full multi-door system as your operation grows, without tearing out what is already working.
          </p>
          <p className="mb-4">
            Magnetic locks, or maglocks, are a popular choice for glass storefronts, offices, and interior doors because they hold securely with no moving parts. Because a maglock is fail-safe and releases when power is cut, it must be integrated with the building&apos;s fire alarm and egress path and paired with proper exit hardware such as a request-to-exit motion sensor and a push-to-exit button. We install maglocks correctly so they meet life-safety requirements, never trapping anyone inside during a power loss or emergency.
          </p>
          <p className="mb-4">
            For doors along a required exit route, we install and service <strong className='text-[#007595]'>panic hardware and exit devices</strong>, sometimes called crash bars or push bars. These devices let anyone leave instantly by pushing the bar, which is essential for occupant safety in commercial and public buildings, while still keeping the door locked from the outside. We can add electrified exit devices, alarmed exit hardware, and delayed-egress options where they are appropriate, and we service existing panic hardware that has become stiff, misaligned, or unreliable.
          </p>
          <p className="mb-4">
            Traditional locksmith work remains the backbone of what we do. We install and repair deadbolts and door locks, rekey existing hardware so old keys no longer work, duplicate keys, and set up master key systems that give managers one key while limiting staff to specific doors. If you are locked out of a home, office, or storeroom, our technicians respond quickly and use non-destructive entry methods whenever possible, so you get back inside without damaging the door or lock. When a lock is worn beyond repair, we recommend a durable replacement rather than a temporary fix. Rekeying is often the fastest and most affordable way to secure a property after a move, a lost key, or staff turnover, because we simply reset the existing lock to a new key instead of replacing the whole assembly.
          </p>
          <p className="mb-4">
            Smart lock and smart-home integration brings convenience to everyday access. We fit smart deadbolts and levers that unlock with a code, fob, or smartphone, support auto-lock and one-time guest codes for rentals, and connect compatible devices to the hubs and apps you already use. For vacation homes and short-term rentals across the Kona and Kohala coasts, remote access lets you grant and revoke entry without ever handing over a physical key, and integrate door status with cameras and alarms for a fuller picture of your property.
          </p>
          <p className="mb-4">
            Hardware lasts longer when it is maintained, and our ongoing maintenance and service plans keep locks, closers, readers, and access panels working through salt air, humidity, and heavy daily use. We offer scheduled inspections, lubrication and adjustment, battery replacement for electronic locks, firmware and credential updates for access systems, and priority response if something fails. Regular service prevents small problems from becoming lockouts or security gaps, and gives commercial clients a documented record of their door hardware.
          </p>
          <p>
            ReefTech Solutions is insured and serves the entire Big Island, including Kailua-Kona, Waimea, Kamuela, Hilo, Captain Cook, Kohala Coast, Holualoa, and Waikoloa. Whether you need a single deadbolt rekeyed or a full electronic access control system designed and installed, our team delivers accurate, professional work with fast response times. Call <a href="tel:+1-808-303-4627" className="text-[#007595] font-semibold hover:underline">(808) 303-4627</a> to talk through your project or schedule service.
          </p>
        </div>

        <div className="space-y-12">
          {/* Electronic Access Control */}
          <section className="border-l-4 border-[#007595] py-3 rounded-l-2xl pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <BuildingOfficeIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Electronic Access Control
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Manage who can open which doors, and when. We design and install keypad, card, fob, and mobile-credential systems with networked controllers, electric strikes, and request-to-exit devices for offices, storefronts, and multi-tenant buildings.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-bold text-[#007595] mb-3">Access Control Includes:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Keypad, card & fob readers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Controllers & electric strikes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Mobile credentials & remote access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Audit trails & scheduled access</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Magnetic Locks & Panic Hardware */}
          <section className="border-l-4 border-[#007595] py-3 rounded-l-2xl pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <ShieldCheckIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Magnetic Locks & Panic Hardware
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Secure commercial and glass doors with electromagnetic locks and code-compliant exit devices. We integrate maglocks with fire alarm and egress systems and install panic bars that allow instant, safe exit while keeping doors locked from the outside.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-semibold text-[#007595] mb-3">Life-Safety Hardware Includes:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Magnetic lock (maglock) installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Panic bars & exit devices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Request-to-exit & push-to-exit devices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Fire alarm & egress integration</span>
                </li>
              </ul>
            </div>
          </section>

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
              Expert repair of damaged or malfunctioning locks and rekeying services for enhanced security. Ideal for new property owners or after a security concern to ensure only authorized keys work.
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

          {/* Maintenance & Service Plans */}
          <section className="border-l-4 border-[#007595] rounded-l-2xl py-3 pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <HomeIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Maintenance & Service Plans
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Keep locks, closers, readers, and access panels reliable through salt air and heavy daily use. Our ongoing maintenance plans include scheduled inspections, adjustments, and priority response so small issues never turn into lockouts or security gaps.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-semibold text-[#007595] mb-3">Ongoing Support Includes:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Scheduled inspections & adjustments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Battery, firmware & credential updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Door closer & hardware tune-ups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span className='text-black/65'>Priority response for plan clients</span>
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
                Specialized Access Control Solutions
              </h3>
            </div>
          </div>
          <div className="bg-[#f0f9ff] rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#007595] mb-2">Commercial Security</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Electronic access control</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Panic hardware & exit devices</span></li>
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
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Magnetic lock integration</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#007595] mb-2">Why Choose Us</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Prompt service</span></li>
                  <li><span className='text-[#007595] mr-2'>✦</span> <span className='text-black/65'>Experienced technicians</span></li>
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
            Need Access Control or Locksmith Service?
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
