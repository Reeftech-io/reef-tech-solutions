import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BoltIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

const SITE_URL = 'https://www.reeftech.io';

export const metadata: Metadata = {
  title: 'About ReefTech Solutions — Licensed Electrician on the Big Island',
  description:
    "Meet the team behind ReefTech Solutions. Licensed electrician and property tech specialist serving Hawaii's Big Island with electrical, plumbing, access control, fire alarm, and spa & sauna service.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: 'About ReefTech Solutions — Licensed Electrician on the Big Island',
    description:
      "Meet the team behind ReefTech Solutions. Licensed electrician and property tech specialist serving Hawaii's Big Island.",
    url: `${SITE_URL}/about`,
    type: 'profile',
  },
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${SITE_URL}/about#aboutpage`,
      url: `${SITE_URL}/about`,
      name: 'About ReefTech Solutions',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      mainEntity: { '@id': `${SITE_URL}/about#founder` },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/about#founder`,
      name: 'Joshua',
      jobTitle: 'Licensed Electrician and Property Technology Specialist',
      worksFor: { '@id': `${SITE_URL}/#organization` },
      knowsAbout: [
        'Electrical Repair',
        'Electrical Troubleshooting',
        'Fire Alarm Systems',
        'Access Control',
        'Smart Home Integration',
        'Plumbing Service',
        'Sauna and Spa Maintenance',
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Licensed Electrician',
          credentialCategory: 'license',
          recognizedBy: {
            '@type': 'GovernmentOrganization',
            name: 'State of Hawaii',
          },
        },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Waimea',
        addressRegion: 'HI',
        addressCountry: 'US',
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            About ReefTech Solutions
          </h1>
          <p className="text-xl text-slate-600">
            Licensed electrician and property tech specialist serving Hawaii&apos;s Big Island.
          </p>
        </div>

        <section className="mb-12 rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-lime-50 p-8 shadow-sm">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-600/10 flex items-center justify-center shrink-0">
              <BoltIcon className="w-6 h-6 text-cyan-700" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Built by a licensed electrician
              </h2>
              <p className="text-slate-700 leading-relaxed">
                ReefTech Solutions was founded by a licensed Hawaii electrician who got
                tired of seeing Big Island property owners stuck between half a dozen
                different specialists for what should be one phone call. Today we cover
                the building systems most properties actually rely on — electrical,
                plumbing, access control, fire alarms, and spa &amp; sauna — under one
                roof.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What we do</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/electrical-services"
              className="group rounded-xl border border-slate-200 p-5 hover:border-cyan-300 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <BoltIcon className="w-5 h-5 text-cyan-700" />
                <h3 className="font-semibold text-slate-900 group-hover:text-cyan-700">
                  Electrical
                </h3>
              </div>
              <p className="text-sm text-slate-600">
                Outlets, switches, lighting, fixtures, troubleshooting, and minor work
                across the Big Island.
              </p>
            </Link>
            <Link
              href="/plumbing-services"
              className="group rounded-xl border border-slate-200 p-5 hover:border-cyan-300 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <WrenchScrewdriverIcon className="w-5 h-5 text-cyan-700" />
                <h3 className="font-semibold text-slate-900 group-hover:text-cyan-700">
                  Plumbing
                </h3>
              </div>
              <p className="text-sm text-slate-600">
                Emergency repairs, leak detection, fixture installs, water heaters, and
                FloLogic smart water shutoff systems.
              </p>
            </Link>
            <Link
              href="/fire-alarm-support-waimea"
              className="group rounded-xl border border-slate-200 p-5 hover:border-cyan-300 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheckIcon className="w-5 h-5 text-cyan-700" />
                <h3 className="font-semibold text-slate-900 group-hover:text-cyan-700">
                  Fire alarm &amp; suppression
                </h3>
              </div>
              <p className="text-sm text-slate-600">
                Fire alarm install and inspection, kitchen hood suppression, and fire
                sprinkler service in Waimea and across the island.
              </p>
            </Link>
            <Link
              href="/lock-locksmith-services"
              className="group rounded-xl border border-slate-200 p-5 hover:border-cyan-300 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheckIcon className="w-5 h-5 text-cyan-700" />
                <h3 className="font-semibold text-slate-900 group-hover:text-cyan-700">
                  Locks &amp; access control
                </h3>
              </div>
              <p className="text-sm text-slate-600">
                Lock installation, lockout assistance, smart locks, mag locks, and access
                control systems for homes and commercial properties.
              </p>
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Where we work</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            We cover Hawaii&apos;s Big Island, with most of our work in:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 text-slate-700">
            <li className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-cyan-700" /> Kailua-Kona
            </li>
            <li className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-cyan-700" /> Waimea / Kamuela
            </li>
            <li className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-cyan-700" /> Hilo
            </li>
            <li className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-cyan-700" /> Captain Cook
            </li>
            <li className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-cyan-700" /> Volcano
            </li>
            <li className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-cyan-700" /> Surrounding Big Island communities
            </li>
          </ul>
        </section>

        <section className="rounded-2xl bg-slate-900 text-white p-8">
          <h2 className="text-2xl font-bold mb-3">Get in touch</h2>
          <p className="text-slate-300 mb-6">
            Have something that needs to get fixed, installed, or upgraded? Reach out and
            we&apos;ll get you on the schedule.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+1-808-303-4627"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-lime-500 to-cyan-500 px-5 py-3 font-semibold text-slate-900 hover:opacity-90 transition"
            >
              <PhoneIcon className="w-5 h-5" />
              (808) 303-4627
            </a>
            <a
              href="mailto:info@reeftech.io"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              <EnvelopeIcon className="w-5 h-5" />
              info@reeftech.io
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
