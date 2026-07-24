import type { Metadata } from 'next';
import Link from 'next/link';
import {
  SparklesIcon,
  SunIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  BeakerIcon,
  HomeIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const SITE_URL = 'https://www.reeftech.io';

export const metadata: Metadata = {
  title: 'Pool, Spa & Sauna Services Big Island Hawaii | ReefTech Solutions',
  description:
    "Professional sauna installation, repair, and spa maintenance on Hawaii's Big Island. Serving Waimea, Hilo, and Kona. Sunlighten, Finnleo, and Amerec service. Call (808) 303-4627.",
  keywords: [
    'sauna service big island',
    'spa maintenance hawaii',
    'sauna installation waimea',
    'infrared sauna service kona',
    'finnleo sauna repair hawaii',
    'sunlighten service big island',
    'pool spa maintenance kona',
    'amerec steam generator repair',
    'pool water chemistry hawaii',
    'hot tub repair big island',
  ],
  alternates: {
    canonical: `${SITE_URL}/pool-spa-sauna`,
  },
  openGraph: {
    title: 'Pool, Spa & Sauna Services Big Island Hawaii | ReefTech Solutions',
    description:
      "Professional sauna installation, repair, and spa maintenance on Hawaii's Big Island. Serving Waimea, Hilo, and Kona.",
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
    description:
      "Professional sauna installation, repair, and spa maintenance on Hawaii's Big Island.",
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
              description:
                'Installation of traditional and infrared sauna systems from leading manufacturers like Finnleo and Sunlighten.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Sauna Repair & Maintenance',
              description:
                'Troubleshooting, repair, and ongoing maintenance of saunas, heaters, and control systems.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Spa & Wellness Equipment Service',
              description:
                'Maintenance and repair of luxury spa equipment and steam rooms.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Pool & Spa Water Chemistry Support',
              description:
                'Guidance and service for balanced pool and spa water chemistry on Big Island properties.',
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
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Pool, Spa & Sauna Services',
          item: `${SITE_URL}/pool-spa-sauna`,
        },
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

const chemistryRows = [
  {
    parameter: 'Free Chlorine',
    pool: '1.0 – 3.0 ppm',
    spa: '3.0 – 5.0 ppm',
    notes: 'Primary sanitizer; test more often after heavy use or rain.',
  },
  {
    parameter: 'Bromine (if used)',
    pool: '2.0 – 4.0 ppm',
    spa: '3.0 – 5.0 ppm',
    notes: 'Common in spas; holds up better in warm water than chlorine alone.',
  },
  {
    parameter: 'pH',
    pool: '7.2 – 7.6',
    spa: '7.2 – 7.6',
    notes: 'Out-of-range pH reduces sanitizer strength and irritates skin/eyes.',
  },
  {
    parameter: 'Total Alkalinity',
    pool: '80 – 120 ppm',
    spa: '80 – 120 ppm',
    notes: 'Buffers pH so it does not swing with rain or fill water.',
  },
  {
    parameter: 'Calcium Hardness',
    pool: '200 – 400 ppm',
    spa: '150 – 250 ppm',
    notes: 'Too low etches surfaces; too high causes scale on heaters and jets.',
  },
  {
    parameter: 'Cyanuric Acid (stabilizer)',
    pool: '30 – 50 ppm',
    spa: '0 – 30 ppm*',
    notes: '*Often lower or unused indoors; outdoor pools need UV protection.',
  },
  {
    parameter: 'Total Dissolved Solids',
    pool: 'Under 1,500 ppm',
    spa: 'Under 1,500 ppm',
    notes: 'High TDS dulls water; drain and refill when levels climb.',
  },
  {
    parameter: 'Water Temperature',
    pool: '78 – 82°F typical',
    spa: '100 – 104°F max',
    notes: 'Never exceed 104°F in spas; limit soak time for safety.',
  },
];

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
            Pool, Spa &amp; Sauna Services
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Professional Wellness and Relaxation Equipment Service for Big Island Hawaii
          </p>
          <p className="text-lg text-gray-500">
            Installation • Repair • Maintenance • Wellness Solutions
          </p>
        </div>

        <div className="space-y-6 mb-16">
          <p className="text-gray-700 leading-relaxed">
            A well-maintained pool, spa, or sauna is more than a luxury on the Big Island—it is a daily wellness amenity for homeowners, a guest-experience essential for vacation rentals, and a core offering for commercial wellness facilities. ReefTech Solutions provides professional sauna installation, repair, and spa maintenance across Waimea (Kamuela), Kailua-Kona, Hilo, and surrounding communities. We combine electrical, plumbing, and control-system expertise so you are not juggling multiple contractors when a heater fails, a control panel freezes, or water chemistry drifts out of range.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Hawaii&apos;s climate puts unique stress on wellness equipment. Coastal salt air accelerates corrosion on outdoor spa cabinets and electrical connections. Higher humidity can affect infrared emitters, wood interiors, and steam generators. Volcanic mineral content and variable fill-water quality make consistent pool and spa chemistry a real challenge—not a set-and-forget chore. Our approach is practical: keep systems safe, efficient, and ready for daily use, whether that means a residential infrared suite in Waimea or a multi-unit spa lineup in Kona.
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
              Modern infrared saunas represent the pinnacle of home wellness technology, offering therapeutic benefits at lower temperatures than traditional saunas. Instead of heating the air first, infrared systems warm the body more directly, which many people find more comfortable for longer sessions. We specialize in premium infrared systems that provide deep tissue penetration and enhanced comfort for daily use—ideal for residential wellness rooms and boutique spa environments that want reliable performance without the extreme heat of a traditional steam sauna.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Proper installation matters as much as the brand on the door. Infrared cabins need correct voltage, dedicated circuits, adequate ventilation, and safe clearances from moisture-prone areas. Smart controls, chromotherapy lighting, and air purification features only deliver value when wiring, grounding, and software integration are done cleanly the first time.
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
                  <span>Chromotherapy lighting &amp; air purification settings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Emitter diagnostics, panel resets, and power-supply troubleshooting</span>
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
                  Sauna Installation, Maintenance &amp; Repair
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We specialize in infrared and traditional sauna systems from leading manufacturers, offering complete installation, maintenance, and repair services. From residential wellness rooms to commercial spa facilities, our expertise ensures optimal performance and guest satisfaction. Traditional rock heaters, steam generators, and hybrid systems each have different electrical loads, water connections, and ventilation needs—we plan for those details before the first panel is set.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6 mb-4">
              <p className="font-semibold text-[#007595] mb-2">Brands We Service:</p>
              <p className="text-gray-700 font-medium">
                Sunlighten • Finnleo • Amerec • Custom Installations
              </p>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Common service calls include heater elements that no longer reach set temperature, control boards that lose programming after power events, door seals that leak heat, and wood interiors that need moisture-related care in Hawaii&apos;s climate. Addressing small issues early prevents guest complaints and expensive component failures.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-semibold text-[#007595] mb-3">Typical Sauna Installation Steps:</p>
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li>
                  <span className="font-semibold text-[#007595]">Site assessment</span> — Room dimensions, floor load, ventilation, moisture exposure, and available electrical service are reviewed for your Waimea, Kona, or Hilo property.
                </li>
                <li>
                  <span className="font-semibold text-[#007595]">Electrical &amp; plumbing planning</span> — Dedicated circuits, disconnects, GFCI protection where required, and any steam water lines are specified before install day.
                </li>
                <li>
                  <span className="font-semibold text-[#007595]">Cabin or unit placement</span> — Leveling, clearances, vapor barriers, and safe access for future service are confirmed.
                </li>
                <li>
                  <span className="font-semibold text-[#007595]">Heater, emitters &amp; controls</span> — Equipment is wired, bonded, and programmed; sensors and safety cutoffs are verified.
                </li>
                <li>
                  <span className="font-semibold text-[#007595]">Commissioning &amp; owner walkthrough</span> — We run a full heat cycle, explain safe use, and document settings for property staff or homeowners.
                </li>
              </ol>
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
                  Spa &amp; Wellness Equipment Support
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We provide comprehensive service for all major sauna and spa brands, including electrical, plumbing, and control systems. Hot tubs and spa packs rely on pumps, heaters, ozonators, and digital topside controls working together. When one piece fails—or when water balance attacks the heater—the whole experience suffers. We keep your wellness systems running smoothly, preventing costly breakdowns and extending equipment life.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Support covers jet pump rebuilds and replacements, heater element diagnosis, flow-switch and pressure-switch faults, leak tracing at unions and heater barrels, topside control replacement, and integration with property electrical systems. For vacation rentals and multi-property managers, that means fewer emergency callouts and more consistent guest reviews.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-semibold text-[#007595] mb-3">Spa Support Includes:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Pump, heater, and control pack troubleshooting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Steam room generator service and scale prevention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Electrical safety checks and bonding verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Preventive maintenance plans for residential and commercial sites</span>
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
                <h2 className="text-2xl font-bold text-[#007595]">Safety Tips for Pools, Spas &amp; Saunas</h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Wellness equipment is enjoyable when it is used and maintained safely. A few habits protect guests, equipment, and your liability exposure on Big Island properties.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-semibold text-[#007595] mb-3">Safety Tips You Can Use Today:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Never exceed 104°F in a spa; post clear temperature guidance for guests and tenants.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Keep GFCI protection and dedicated disconnects functional—test them on a schedule.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Do not operate pumps or heaters with low water level; dry-firing destroys elements quickly.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Limit continuous sauna sessions and allow cool-down; hydrate before and after use.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Store chemicals in a cool, dry, ventilated area—never mixed, and never near heat sources.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Secure spa covers and pool barriers to meet local safety expectations for homes and rentals.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Shut down and call for service if you smell burning plastic, see scorched wiring, or trip breakers repeatedly.</span>
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
                <h2 className="text-2xl font-bold text-[#007595]">Pool &amp; Spa Water Chemistry Chart</h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Balanced water protects skin, equipment, and finishes. On the Big Island, rain dilution, evaporation, and mineral-rich fill water can push chemistry off target faster than many mainland properties experience. Use this chart as a practical target range; always follow your equipment manufacturer&apos;s guidance and local health requirements for commercial facilities.
            </p>
            <div className="overflow-x-auto rounded-xl border border-[#007595]/25 shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm">
                <caption className="sr-only">
                  Recommended pool and spa water chemistry ranges
                </caption>
                <thead>
                  <tr className="bg-[#007595] text-white">
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Parameter
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Pool Target
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Spa Target
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Why It Matters
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {chemistryRows.map((row, index) => (
                    <tr
                      key={row.parameter}
                      className={index % 2 === 0 ? 'bg-[#f0f9ff]' : 'bg-white'}
                    >
                      <th
                        scope="row"
                        className="px-4 py-3 font-semibold text-[#007595] align-top"
                      >
                        {row.parameter}
                      </th>
                      <td className="px-4 py-3 text-gray-700 align-top whitespace-nowrap">
                        {row.pool}
                      </td>
                      <td className="px-4 py-3 text-gray-700 align-top whitespace-nowrap">
                        {row.spa}
                      </td>
                      <td className="px-4 py-3 text-gray-700 align-top">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-[#f0f9ff] rounded-lg p-6 mt-4 border-l-4 border-[#32CD32]">
              <p className="font-semibold text-[#007595] mb-2">Quick chemistry habits:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Test free chlorine (or bromine) and pH at least 2–3 times per week for active spas; more after parties or storms.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Adjust total alkalinity before chasing pH—alkaline buffer keeps pH stable.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Shock after heavy bather loads; run filtration long enough to turn the water fully.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#007595] mr-2">✦</span>
                  <span>Scale on heaters and cloudy water are early warnings—not cosmetic issues only.</span>
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
                <h2 className="text-2xl font-bold text-[#007595]">Maintenance Advice That Extends Equipment Life</h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Preventive care costs less than emergency heater replacements—especially when parts ship slowly to the islands. A simple rhythm keeps spa packs, sauna controls, and water systems reliable through busy visitor seasons.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Weekly</h3>
                <p className="text-gray-700 leading-relaxed">
                  Test and balance water, empty skimmer and pump baskets, wipe spa covers dry, and glance at error codes on topside panels. For saunas, wipe benches, check door seals, and confirm the unit reaches set temperature within a normal heat-up window.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Monthly</h3>
                <p className="text-gray-700 leading-relaxed">
                  Inspect for slow leaks at unions and heater barrels, clean or replace filters per manufacturer guidance, verify GFCI operation, and look for corrosion on outdoor electrical enclosures exposed to Kona salt air.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Seasonal / quarterly</h3>
                <p className="text-gray-700 leading-relaxed">
                  Deep-clean filters, review calcium and TDS levels, flush spa plumbing when recommended, service steam generators for scale, and schedule a professional electrical and equipment check before peak rental occupancy.
                </p>
              </div>
            </div>
            <div className="bg-[#f0f9ff] rounded-lg p-6 mt-4">
              <p className="text-gray-700">
                ReefTech can build a maintenance cadence around your property type—single-family home, short-term rental portfolio, or commercial wellness space—so service happens on purpose, not only after something breaks.
              </p>
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
                <h2 className="text-2xl font-bold text-[#007595]">Our Service Process</h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Whether you need a new infrared installation or a same-week repair on a down spa, the process stays clear and documented.
            </p>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li>
                  <span className="font-semibold text-[#007595]">Request &amp; triage</span> — Call{' '}
                  <a href="tel:+1-808-303-4627" className="text-[#007595] font-semibold hover:underline">
                    (808) 303-4627
                  </a>{' '}
                  or submit a service request. We gather brand, model, symptoms, and property access details.
                </li>
                <li>
                  <span className="font-semibold text-[#007595]">On-site diagnosis</span> — We inspect electrical supply, controls, water systems, and mechanical components to separate root causes from secondary damage.
                </li>
                <li>
                  <span className="font-semibold text-[#007595]">Clear scope</span> — You receive a straightforward explanation of repair vs. replace options, parts lead time, and what is needed to restore safe operation.
                </li>
                <li>
                  <span className="font-semibold text-[#007595]">Repair or install</span> — Work is completed with attention to bonding, water tightness, control programming, and manufacturer best practices.
                </li>
                <li>
                  <span className="font-semibold text-[#007595]">Verify &amp; educate</span> — Systems are tested under load. You or your property team get practical guidance on chemistry, safe use, and warning signs to watch.
                </li>
              </ol>
            </div>
          </section>

          <section className="border-l-4 border-[#007595] rounded-l-2xl py-3 pl-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
                  <HomeIcon className="w-8 h-8 text-[#007595]" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#007595]">
                  Built for Big Island Homes, Rentals &amp; Wellness Spaces
                </h2>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              ReefTech Solutions is structured for the realities of island property management: mixed electrical and plumbing skill sets, fast diagnosis, and service that respects both guest calendars and equipment longevity. If your sauna is offline before a high-season weekend, or your spa heater is scaling out after months of unbalanced water, we focus on durable fixes—not temporary workarounds.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ready to improve reliability across your wellness equipment? Reach out for installation planning, preventive maintenance, or repair service. We are proud to support property owners and managers who want pools, spas, and saunas that stay clean, safe, and ready to use.
            </p>
          </section>
        </div>

        <div className="mt-16 bg-[#f0f9ff] rounded-lg p-8">
          <h2 className="text-xl font-bold text-center mb-3 text-[#007595]">
            Serving Big Island Hawaii
          </h2>
          <p className="text-gray-700 text-center">
            Waimea <span className="text-[#007595]">✦</span> Kamuela{' '}
            <span className="text-[#007595]">✦</span> Kailua-Kona{' '}
            <span className="text-[#007595]">✦</span> Hilo
          </p>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Need Sauna or Spa Service?</h2>
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
