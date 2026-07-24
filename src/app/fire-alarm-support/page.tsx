import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FireIcon,
  ShieldCheckIcon,
  BeakerIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  HomeIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';

const SITE_URL = 'https://www.reeftech.io';

export const metadata: Metadata = {
  title: 'Fire Alarm & Suppression Services Big Island Hawaii | Waimea, Kona & Hilo | ReefTech Solutions',
  description: 'Professional fire alarm installation, inspection, and service in Waimea, Kona, Hilo, and Big Island Hawaii. Fire hose service, kitchen hood suppression systems, and fire sprinkler maintenance. Call (808) 303-4627.',
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
    canonical: `${SITE_URL}/fire-alarm-support`,
  },
  openGraph: {
    title: 'Fire Alarm & Suppression Services Big Island Hawaii | Waimea, Kona & Hilo | ReefTech Solutions',
    description: 'Professional fire alarm installation, inspection, and service in Waimea, Kona, Hilo, and Big Island Hawaii. Fire hose, kitchen hood suppression, and fire sprinkler service.',
    url: `${SITE_URL}/fire-alarm-support`,
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
    title: 'Fire Alarm & Suppression Services Big Island Hawaii | Waimea, Kona & Hilo | ReefTech Solutions',
    description: 'Professional fire alarm installation, inspection, and suppression system service on Hawaii\'s Big Island.',
    images: [`${SITE_URL}/photos/og-image.jpg`],
  },
};

const fireAlarmJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/fire-alarm-support#service`,
      serviceType: 'Fire Alarm & Suppression Services',
      name: 'Fire Alarm & Suppression Services',
      description:
        'Professional fire alarm and smoke detection installation, inspection, and service in Waimea, Kamuela, and Big Island Hawaii. Fire hose service, kitchen hood suppression systems, and fire sprinkler maintenance.',
      url: `${SITE_URL}/fire-alarm-support`,
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
      '@id': `${SITE_URL}/fire-alarm-support#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Fire Alarm & Suppression Services', item: `${SITE_URL}/fire-alarm-support` },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/fire-alarm-support#webpage`,
      url: `${SITE_URL}/fire-alarm-support`,
      name: 'Fire Alarm & Suppression Services Big Island Hawaii | Waimea, Kona & Hilo | ReefTech Solutions',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/fire-alarm-support#service` },
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
        <div className="space-y-6 mb-16">
          <p className="text-gray-700 leading-relaxed">
            When a fire starts, every second matters. On the Big Island of Hawaii, homes, restaurants, hotels, and commercial buildings face unique risks&mdash;from kitchen grease fires and electrical faults to dry-season brush exposure and busy visitor properties. ReefTech Solutions provides professional fire alarm, smoke detection, and fire suppression services across Waimea (Kamuela), Kailua-Kona, Hilo, Captain Cook, Volcano, and surrounding communities. Whether you need a new system installed, a code-required inspection, or reliable maintenance, our team helps you protect people, property, and peace of mind.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A properly designed fire safety system does more than sound an alarm. It detects smoke and heat early, alerts occupants, supports evacuation, and&mdash;when paired with hoses, sprinklers, or kitchen hood suppression&mdash;helps control the fire before it spreads. Our work covers smoke and heat detectors, fire alarm panels, fire hose and cabinet service, restaurant range hood suppression, and fire sprinkler installation, inspection, and repair.
          </p>
        </div>
        <div className="space-y-12">
          <section className="border-l-4 border-[#007595] rounded-l-2xl py-3 pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <HomeIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Why Fire Detection Matters on the Big Island
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Hawaii&apos;s climate and building mix create conditions where early warning is essential. Coastal humidity can affect electronics and battery life. Trade winds can push smoke and flames quickly through multi-unit buildings. Commercial kitchens in Kona and Hilo run high-heat equipment daily. Vacation rentals and multi-family housing need systems that work even when no one is on-site to notice a problem.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Smoke alarms and fire detectors are often the first&mdash;and only&mdash;warning before a small incident becomes a structural fire. Pairing detection with suppression equipment (hoses, sprinklers, and hood systems) creates layered protection that meets local expectations and helps property owners stay compliant with federal and Hawaiʻi requirements.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-semibold text-[#007595] mb-3">Safety Tips You Can Use Today:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Test residential smoke alarms monthly and replace batteries at least once a year&mdash;or sooner if the unit chirps.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Replace smoke alarms every 10 years (check the manufacture date on the back).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Keep detectors clear of dust, paint, and storage that blocks sensors.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Never disable an alarm &ldquo;just for cooking.&rdquo; Use the hush feature or improve ventilation instead.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Map exit routes for family members, tenants, and staff, and practice them.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>For commercial properties, keep inspection tags current and document every service visit.</span>
                </li>
              </ul>
            </div>
          </section>
          <section className="border-l-4 border-[#007595] rounded-l-2xl py-3 pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <CheckCircleIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Types of Fire Detectors Compared
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Choosing the right detector depends on the room, occupancy, and risk.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Ionization smoke detectors</h3>
                <p className="text-gray-700 leading-relaxed">
                  Respond quickly to fast-flaming fires (paper, wood, flammable liquids). They are common in many homes but can be more prone to nuisance alarms near kitchens if poorly placed.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Photoelectric smoke detectors</h3>
                <p className="text-gray-700 leading-relaxed">
                  Generally better at sensing smoldering fires (overheated wiring, upholstery, slow-burning materials). They are often preferred near living areas and sleeping rooms.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Dual-sensor detectors</h3>
                <p className="text-gray-700 leading-relaxed">
                  Combine ionization and photoelectric technology for broader coverage when a single technology is not enough.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Heat detectors</h3>
                <p className="text-gray-700 leading-relaxed">
                  Trigger on temperature rise rather than smoke. They are useful in garages, attics, mechanical rooms, and dusty or steamy spaces where smoke detectors may false-alarm.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Combination and interconnected systems</h3>
                <p className="text-gray-700 leading-relaxed">
                  Link detectors so that when one unit alarms, others sound too&mdash;critical in multi-story homes and commercial buildings. Addressable commercial fire alarm systems go further, identifying the exact device or zone that activated so responders can act faster.
                </p>
              </div>
            </div>
            <div className="bg-[#f0f9ff] rounded-lg p-6 mt-4">
              <p className="text-gray-700">
                ReefTech can help you select, place, and service the right mix of detectors and panels for residential, light commercial, and restaurant environments on the Big Island.
              </p>
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
                  Fire Alarm Installation Steps
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              A professional installation follows a clear process so your system is reliable and inspection-ready:
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li><span className="font-semibold text-[#007595]">Site assessment</span> &mdash; We review building layout, occupancy type, existing equipment, and local code needs for Waimea, Kona, Hilo, or your property&apos;s location.</li>
                <li><span className="font-semibold text-[#007595]">System design</span> &mdash; Detector types, panel capacity, notification devices, and suppression interfaces are planned for the space&mdash;not a one-size-fits-all kit.</li>
                <li><span className="font-semibold text-[#007595]">Placement and wiring</span> &mdash; Devices are installed in code-appropriate locations (hallways, sleeping areas, mechanical spaces, and commercial zones as required).</li>
                <li><span className="font-semibold text-[#007595]">Panel programming and testing</span> &mdash; Zones, sensitivity, and interconnects are configured; every device is functionally tested.</li>
                <li><span className="font-semibold text-[#007595]">Owner orientation</span> &mdash; You receive a walkthrough of silence/reset procedures, battery or power backup checks, and what to do if the system troubleshoots.</li>
                <li><span className="font-semibold text-[#007595]">Documentation</span> &mdash; Records support future inspections, insurance requests, and compliance reviews.</li>
              </ol>
            </div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              If you already have equipment, we can evaluate whether repair, partial upgrade, or full replacement is the smarter path.
            </p>
          </section>
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
              Like extinguishers, fire hoses are required to be inspected annually. They are hydro-tested or replaced after they&apos;ve been in use for five and eight years, then every two years thereafter. A hose that fails under pressure is a hazard, not a tool&mdash;so scheduled testing is non-negotiable for commercial and multi-unit properties.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Cabinets should open freely, remain unobstructed, and display current inspection tags. Cracked couplings, worn gaskets, mildew, UV damage, and kinked hose lines are common issues we find during service visits across the Big Island.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-semibold text-[#007595] mb-3">Our Services Include:</p>
              <p className="text-gray-700 mb-4">Sales, installation, inspection and service of fire hoses and cabinets.</p>
              <p className="font-semibold text-[#007595] mb-2">Maintenance Advice for Hose Stations:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Keep cabinet fronts clear of furniture, d&eacute;cor, and storage.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Report leaks, corrosion, or missing nozzles immediately.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Do not use fire hoses for non-emergency cleaning or watering.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Schedule annual inspections before busy seasons or occupancy changes.</span>
                </li>
              </ul>
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
              Commercial restaurant kitchens require a full range of equipment which has the potential to lead to a fire. Grease-laden vapors, open flames, and high-BTU appliances make the hood and duct path one of the highest-risk areas in food service. Federal and Hawaiʻi laws require kitchen hood fire suppression systems to be inspected on a semi-annual basis. Our certified range hood technicians can inspect and service all types of kitchen hood fire suppression systems.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              A hood system is designed to detect a cooking-line fire, discharge wet chemical agent over appliances and into the plenum/duct, and often shut down fuel or power sources. When the system is overdue for service, nozzles can clog, links can fail, and agent cylinders can fall out of date&mdash;leaving the kitchen unprotected and the business exposed to shutdown risk.
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
            <p className="text-gray-700 mt-4 leading-relaxed">
              <span className="font-semibold text-[#007595]">What to expect during hood service:</span> We verify fusible links and detection lines, confirm nozzle aiming and cap condition, check cylinder pressure and agent condition, test manual pulls where applicable, and document results for your records and the authority having jurisdiction. Between visits, keep filters clean on schedule and never move appliances out from under protected nozzles without calling for a system review.
            </p>
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
            <p className="text-gray-700 mb-4 leading-relaxed">
              Fire sprinklers are one of the most effective automatic defenses against structural fire loss. Contrary to movie myths, systems are designed so that heat at an individual head typically activates only the sprinklers needed&mdash;helping control fire while limiting water damage compared with unchecked flame spread.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We support properties that need new sprinkler work, corrective repairs after a trip or leak, and recurring inspections that keep systems ready. Common issues include painted or obstructed heads, damaged escutcheons, low pressure, corrosion, and outdated components that no longer meet the building&apos;s use.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-semibold text-[#007595] mb-3">Our Services Include:</p>
              <p className="text-gray-700 mb-4">Installation, inspection, maintenance and repair.</p>
              <p className="font-semibold text-[#007595] mb-2">Sprinkler Maintenance Tips:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Never hang items from sprinkler heads or piping.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Maintain clearance below heads as required for your system type.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Report drips, corrosion, or unexplained water stains right away.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>After any remodel, confirm coverage still matches the new layout.</span>
                </li>
              </ul>
            </div>
          </section>
          <section className="border-l-4 border-[#007595] rounded-l-2xl py-3 pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <ClipboardDocumentCheckIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Our Service Process
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Working with ReefTech is straightforward:
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li><span className="font-semibold text-[#007595]">Call or request service</span> &mdash; Reach us at (808) 303-4627 or submit a service request online.</li>
                <li><span className="font-semibold text-[#007595]">Scope the need</span> &mdash; Installation, inspection, repair, or full compliance review.</li>
                <li><span className="font-semibold text-[#007595]">Schedule a visit</span> &mdash; We coordinate around restaurant hours, tenant access, and property manager timelines when possible.</li>
                <li><span className="font-semibold text-[#007595]">Inspect, service, or install</span> &mdash; Work is performed with clear communication on findings.</li>
                <li><span className="font-semibold text-[#007595]">Tag, report, and follow up</span> &mdash; You leave with documentation and recommended next steps&mdash;not guesswork.</li>
              </ol>
            </div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              We serve property owners, facility managers, restaurants, and residents who want dependable fire safety support without the runaround.
            </p>
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
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-4">
            Do not wait for a failed inspection&mdash;or worse, an emergency&mdash;to discover gaps in your fire protection. Whether you need smoke and fire detector guidance, fire hose and cabinet service, kitchen hood suppression inspection, or sprinkler installation and repair, ReefTech Solutions is ready to help across the Big Island.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            Call (808) 303-4627 today or request service online. Protect your people, your property, and your operations with professional fire alarm and suppression support you can count on.
          </p>
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
