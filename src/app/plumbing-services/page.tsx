import type { Metadata } from 'next';
import Link from 'next/link';
import {
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  BoltIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentCheckIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Plumber Big Island Hawaii | Emergency Plumbing Kona Waimea Hilo',
  description: 'Plumber serving Big Island Hawaii. 24/7 emergency plumbing repairs, leak detection, inspections, water heater service, drain cleaning in Kona, Waimea, Hilo. Call (808) 303-4627.',
  keywords: [
    'plumber Big Island Hawaii',
    'emergency plumber Kona',
    'plumbing services Waimea',
    'plumber Hilo Hawaii',
    'plumber Kamuela',
    'leak detection Big Island',
    'plumbing inspection Big Island',
    'water heater repair Kona',
    'drain cleaning Waimea',
    'plumber Hawaii',
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
    title: 'Plumber Big Island Hawaii | Emergency Plumbing Services',
    description: '24/7 emergency plumbing repairs in Kona, Waimea, Hilo. Plumber for residential and commercial properties. Fast response, quality service.',
    url: 'https://www.reeftech.io/plumbing-services',
    siteName: 'ReefTech Solutions',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.reeftech.io/photos/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Plumber Big Island Hawaii — ReefTech Solutions',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plumber Big Island Hawaii | ReefTech Solutions',
    description: '24/7 emergency plumbing in Kona, Waimea, and Hilo. Leak detection, inspections, water heater, drain cleaning. Call (808) 303-4627.',
    images: ['https://www.reeftech.io/photos/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.reeftech.io/plumbing-services',
  },
};

const SERVICE_AREAS = [
  'Kailua-Kona',
  'Waimea',
  'Kamuela',
  'Hilo',
  'Captain Cook',
  'Volcano',
  'Holualoa',
  'Waikoloa',
];

function ServiceList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-gray-700">
      {items.map((item) => (
        <li key={item} className="flex items-start">
          <span className="text-[#007595] mr-2">✦</span>
          <span className="text-black/65">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({
  icon: Icon,
  kicker,
  title,
}: {
  icon: typeof WrenchScrewdriverIcon;
  kicker: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-6 mb-4">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-[#f0f9ff] rounded-2xl flex items-center justify-center">
          <Icon className="w-8 h-8 text-[#007595]" />
        </div>
      </div>
      <div className="flex-1">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#007595]/70 mb-1">
          {kicker}
        </p>
        <h2 className="text-2xl font-bold text-[#007595]">{title}</h2>
      </div>
    </div>
  );
}

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
                    "name": "Plumbing Inspections",
                    "description": "Proactive plumbing inspections including video camera drain inspections to prevent leaks, backups, and water damage"
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id": "https://www.reeftech.io/plumbing-services#breadcrumb",
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
                    "name": "Plumbing Services",
                    "item": "https://www.reeftech.io/plumbing-services"
                  }
                ]
              },
              {
                "@type": "WebPage",
                "@id": "https://www.reeftech.io/plumbing-services#webpage",
                "url": "https://www.reeftech.io/plumbing-services",
                "name": "Plumber Big Island Hawaii | ReefTech Solutions",
                "isPartOf": { "@id": "https://www.reeftech.io/#website" },
                "inLanguage": "en-US"
              }
            ]
          })
        }}
      />

      <div className="container mx-auto px-4 py-32 max-w-4xl">

        <div className="mb-16">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#f0f9ff] border border-[#007595]/15 px-4 py-1.5 text-sm font-semibold text-[#007595] mb-6">
            Plumber ✦ Big Island Hawaii
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#007595]">
            Emergency Plumbing Services in Kona, Waimea, Hilo &amp; Kamuela
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            24/7 Emergency Service • Insured • Fast Response
          </p>
        </div>

        <div className="mb-12 text-gray-700 leading-relaxed">
          <p className="mb-4">
            Looking for a reliable <strong className="text-[#007595]">plumber in Big Island Hawaii</strong>? ReefTech Solutions provides professional plumbing services throughout Kailua-Kona, Waimea, Hilo, and surrounding areas. Our plumbers handle everything from emergency repairs to routine maintenance for residential and commercial properties.
          </p>
          <p className="mb-8">
            Whether you manage a portfolio of vacation rentals or are protecting the home your family depends on, you deserve calm, capable help when water starts where it should not. With fast response times and quality workmanship, we are your trusted choice for <strong className="text-[#007595]">emergency plumbing in Big Island</strong>. Call <a href="tel:8083034627" className="text-[#007595] font-semibold hover:underline">(808) 303-4627</a> for immediate service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="tel:8083034627"
              className="bg-[#007595]/80 hover:bg-[#007595] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
            >
              <PhoneIcon className="w-6 h-6" />
              Call (808) 303-4627
            </a>
            <a
              href="#contact"
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center"
            >
              Request Service
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-[#f0f9ff] rounded-2xl p-5">
              <p className="font-bold text-[#007595] mb-1">Always reachable</p>
              <p className="text-sm text-black/65">24/7 emergency response when minutes matter most.</p>
            </div>
            <div className="bg-[#f0f9ff] rounded-2xl p-5">
              <p className="font-bold text-[#007595] mb-1">Residential &amp; commercial</p>
              <p className="text-sm text-black/65">Homes, rentals, restaurants, and managed properties.</p>
            </div>
            <div className="bg-[#f0f9ff] rounded-2xl p-5">
              <p className="font-bold text-[#007595] mb-1">Island-wide coverage</p>
              <p className="text-sm text-black/65">Kona coast to Hilo and the communities between.</p>
            </div>
          </div>
        </div>

        {/* Why property owners call us */}
        <section className="mb-16 border-l-4 border-[#007595] rounded-l-2xl py-3 pl-6">
          <SectionHeading
            icon={CheckCircleIcon}
            kicker="Why property owners call us"
            title="Steady Hands When Water Puts Your Property at Risk"
          />
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Plumbing problems rarely feel small when they arrive. A quiet drip behind a wall can become stained drywall, warped flooring, and a guest who cannot stay. A clogged main line can shut down a restaurant kitchen at dinner service. A failed water heater can leave a family without hot water on a cool Waimea morning. In each case, what you need is not pressure — you need a professional who arrives prepared, explains what is happening, and restores order with care.
            </p>
            <p>
              ReefTech Solutions was built for the realities of Big Island property life: salt air and hard water that age fixtures faster than mainland climates, vacation homes that sit empty between guest stays, and commercial spaces that cannot afford long downtime. Homeowners trust us to protect their largest investment with honest diagnostics and lasting repairs. Property managers rely on us because one reliable plumbing partner is simpler than juggling multiple vendors across Kailua-Kona, Kamuela, and Hilo.
            </p>
            <p>
              Our approach is straightforward. We listen first. We locate the true source of the problem — not only the symptom you can see. We repair with materials and methods suited to the building, and we leave you with a clear understanding of what was done and what to watch for next. That is how trust is earned on island: one careful visit at a time.
            </p>
          </div>
        </section>

        <div className="space-y-12">

          {/* Emergency Plumbing Repairs */}
          <section id="emergency" className="border-l-4 border-[#007595] py-3 rounded-l-2xl pl-6 scroll-mt-28">
            <SectionHeading
              icon={WrenchScrewdriverIcon}
              kicker="Around the clock"
              title="Emergency Plumbing Repairs"
            />
            <div className="text-gray-700 leading-relaxed space-y-4 mb-6">
              <p>
                Plumbing emergencies do not wait for business hours. A pipe that fails at 2 a.m. will not wait until Monday morning, and neither should your response. Our emergency plumbing services are available when you need them most, with fast response times designed to minimize water damage and get your property back to normal quickly.
              </p>
              <p>
                For homeowners, after-hours emergencies are deeply personal. Water under a bedroom floor or seeping into a garage storage area is not only inconvenient — it threatens belongings, finishes, and peace of mind. Knowing that a trained technician will answer and mobilize reduces the panic that often makes a bad situation worse. We help you shut down risk first, then restore function with a repair that holds.
              </p>
              <p>
                For property managers, 24/7 emergency response is operational continuity. A flooded unit can cancel bookings, trigger guest relocation costs, and create liability exposure if moisture is left unaddressed. When your on-call plumber understands rental turnover pressure, master valve locations common to local builds, and the need for clear photo documentation, the entire recovery process moves faster — for you, for ownership, and for the guests who expect a seamless stay.
              </p>
            </div>

            <div className="border-l-2 border-[#007595] pl-4 mb-4">
              <p className="font-semibold text-[#007595] mb-1">Why minutes matter in a plumbing emergency</p>
              <p className="text-black/65 leading-relaxed">
                Every gallon that escapes a failed line multiplies cleanup scope. Early shutoff and professional assessment limit secondary damage to cabinets, subfloors, electrical pathways, and neighboring units. Speed is not about rushing the repair; it is about containing the loss while the right repair is planned.
              </p>
            </div>

            <div className="border-l-2 border-[#007595] pl-4 mb-6">
              <p className="font-semibold text-[#007595] mb-1">What reliable after-hours support looks like</p>
              <p className="text-black/65 leading-relaxed">
                You receive a real person who can triage severity, guide safe interim steps (main shutoff, fixture isolation, power considerations near standing water), and dispatch with the parts and tools the call is likely to need. Clear communication continues until water is controlled and the system is stable again.
              </p>
            </div>

            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-bold text-[#007595] mb-3">Emergency Services Include:</p>
              <ServiceList
                items={[
                  'Burst pipe repairs',
                  'Major leak repairs',
                  'Water heater failures',
                  'Sewer line backups',
                  'Toilet and drain clogs',
                ]}
              />
              <p className="mt-5 text-gray-700 leading-relaxed">
                If you are dealing with active flooding, unusual sewer odors, a water heater that is leaking at the tank, or drains that are backing up into fixtures, call <a href="tel:8083034627" className="text-[#007595] font-semibold hover:underline">(808) 303-4627</a> now. We will help you stabilize the situation and restore safe, dependable plumbing service.
              </p>
            </div>
          </section>

          {/* Leak Detection & Repair */}
          <section id="leak-detection" className="border-l-4 border-[#007595] rounded-l-2xl py-3 pl-6 scroll-mt-28">
            <SectionHeading
              icon={MagnifyingGlassIcon}
              kicker="Protect the structure you cannot see"
              title="Leak Detection & Repair"
            />
            <div className="text-gray-700 leading-relaxed space-y-4 mb-6">
              <p>
                Early leak detection saves money and prevents extensive water damage. We use professional diagnostic tools to locate hidden leaks and provide lasting repair solutions — because the most expensive leaks are often the ones you cannot hear until the damage has already begun.
              </p>
              <p>
                On the surface, a hidden leak can look like nothing at all. Water pressure seems fine. The bill creeps up a little each month. A closet smells faintly musty after rain. By the time staining appears on a ceiling or a slab feels soft under vinyl plank, moisture may have been traveling through framing, insulation, or subfloor for weeks or months. That is why professional leak detection is not a luxury service — it is one of the highest-return maintenance decisions a homeowner or property manager can make.
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#007595] mb-3">Why leak detection is critical</h3>
            <div className="text-gray-700 leading-relaxed space-y-4 mb-6">
              <p>
                Water damage is among the most common and costly forms of property loss. Even a slow supply-line leak can release hundreds of gallons over time, saturating wood, swelling cabinetry, delaminating flooring, and corroding fasteners. Repair costs escalate in layers: first the plumbing repair itself, then demolition to reach the failure, then drying, then rebuild of finishes that once looked perfect. Catching a leak early often means a targeted repair instead of a multi-room restoration project.
              </p>
              <p>
                Mold risk follows moisture as surely as night follows day. In Hawaii&apos;s warm, humid climate, organic building materials that stay damp create conditions where mold can establish quickly — inside wall cavities, under baseboards, behind shower walls, and beneath floating floors. Once established, mold remediation can involve containment, material removal, and specialized cleaning that far exceeds the cost of fixing the original leak. More importantly, moisture-related air quality concerns affect the people who live in or visit the property. For vacation rentals and long-term homes alike, protecting indoor air starts with keeping the building dry.
              </p>
              <p>
                Insurance claims introduce another layer of complexity. Many policies distinguish sudden failures from long-term seepage or maintenance-related neglect. A documented history of ignored high water bills, repeated staining, or postponed inspections can complicate coverage conversations. Conversely, prompt professional detection, clear findings, and timely repair demonstrate responsible stewardship of the property. While no service can guarantee how a carrier will respond to a specific claim, early action and professional records put owners and managers in the strongest possible position.
              </p>
              <p>
                Hidden leaks also erode property value in ways that are easy to underestimate. Buyers and inspectors look for moisture meters that spike, soft spots at slab edges, mineral trails on copper, and repaired drywall patches that do not match. A home with a history of unresolved water intrusion can face credits, repair demands, or lost offers. For income properties, chronic leak issues show up as higher maintenance reserves, guest complaints, and shortened asset life on flooring and cabinetry. Over time, water that was &ldquo;only a little drip&rdquo; becomes a story written into the building&apos;s condition report.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#f0f9ff] rounded-lg p-6">
                <h4 className="font-bold text-[#007595] mb-2">What advanced detection uncovers</h4>
                <p className="text-black/65 leading-relaxed">
                  Not every leak announces itself with a visible spray. We investigate pressure loss, fixture seepage, slab and underground water line concerns, and the subtle signs that moisture is traveling where it should not. Professional diagnostics help avoid unnecessary demolition and point repairs to the true source.
                </p>
              </div>
              <div className="bg-[#f0f9ff] rounded-lg p-6">
                <h4 className="font-bold text-[#007595] mb-2">What lasting repair requires</h4>
                <p className="text-black/65 leading-relaxed">
                  Finding the leak is only half the work. We complete pipe leak repairs, fixture leak repairs, slab leak detection and repair, and water line leak repairs with methods chosen for durability in island conditions — so you are not calling again next season for the same failure.
                </p>
              </div>
            </div>

            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-semibold text-[#007595] mb-3">Leak Services Include:</p>
              <ServiceList
                items={[
                  'Advanced leak detection',
                  'Pipe leak repairs',
                  'Fixture leak repairs',
                  'Slab leak detection and repair',
                  'Water line leak repairs',
                ]}
              />
            </div>
          </section>

          {/* Plumbing Inspections */}
          <section id="inspections" className="border-l-4 border-[#007595] rounded-l-2xl py-3 pl-6 scroll-mt-28">
            <SectionHeading
              icon={ClipboardDocumentCheckIcon}
              kicker="See problems before they become emergencies"
              title="Plumbing Inspections That Prevent Disasters"
            />
            <div className="text-gray-700 leading-relaxed space-y-4 mb-6">
              <p>
                The quietest plumbing failures are often the most expensive. A proactive plumbing inspection is how responsible owners and managers stay ahead of surprise shutdowns, guest disruptions, and structural moisture damage — especially on properties that cycle through heavy use or sit vacant between seasons.
              </p>
              <p>
                During a thorough inspection, we evaluate the systems people use every day and the ones they rarely think about. That includes supply lines and shutoff valves that may be stiff or failing, visible drain and vent conditions, toilet stability and seal integrity, faucet wear and under-sink corrosion, water heater age and safety components, and signs of past or active seepage at slabs, walls, and ceilings. Where drain performance raises questions, video camera inspections help us see inside lines for roots, grease buildup, offset joints, or foreign objects without guessing.
              </p>
              <p>
                What proactive inspections catch is often small — and that is precisely the point. A supply stop that no longer seals. A water heater anode that is spent. A slow trap leak staining the cabinet base. A shower valve that weeps only when the handle is at a certain angle. A cleanout that has never been accessible. Each of these findings is manageable on a scheduled visit. Left alone, any one of them can become an after-hours emergency, a mold remediation project, or a unit taken offline during peak booking season.
              </p>
              <p>
                Prevention is also about decision-making. Property managers overseeing multiple rentals need a clear picture of which buildings need attention first, which fixtures are near end of life, and where capital planning should focus before the next high season. Homeowners planning a renovation, a sale, or simply a more confident rainy season benefit from the same clarity. An inspection turns vague worry into a prioritized plan — repair now, monitor, or schedule replacement on your timeline instead of the pipe&apos;s.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#f0f9ff] rounded-lg p-6">
                <h4 className="font-bold text-[#007595] mb-2">For homeowners</h4>
                <p className="text-black/65 text-sm leading-relaxed">
                  Protect finishes, indoor air quality, and resale readiness. Know that the systems behind your walls are being watched by someone who understands how island homes age.
                </p>
              </div>
              <div className="bg-[#f0f9ff] rounded-lg p-6">
                <h4 className="font-bold text-[#007595] mb-2">For property managers</h4>
                <p className="text-black/65 text-sm leading-relaxed">
                  Reduce emergency call frequency, document condition for ownership, and keep units guest-ready with fewer surprise outages between turnovers.
                </p>
              </div>
              <div className="bg-[#f0f9ff] rounded-lg p-6">
                <h4 className="font-bold text-[#007595] mb-2">For commercial spaces</h4>
                <p className="text-black/65 text-sm leading-relaxed">
                  Support health-code readiness and operational uptime with scheduled attention to kitchens, restrooms, and high-demand water systems.
                </p>
              </div>
            </div>
          </section>

          {/* Fixture Installation */}
          <section id="fixtures" className="border-l-4 border-[#007595] rounded-l-2xl py-3 pl-6 scroll-mt-28">
            <SectionHeading
              icon={BoltIcon}
              kicker="Installed correctly the first time"
              title="Fixture Installation & Replacement"
            />
            <div className="text-gray-700 leading-relaxed space-y-4 mb-6">
              <p>
                Professional installation of plumbing fixtures ensures proper function and prevents future problems. We install and replace all types of plumbing fixtures for residential and commercial properties — matching quality workmanship to the standard your property deserves.
              </p>
              <p>
                A new faucet, toilet, or shower valve is only as reliable as the connections behind it. Improper torque, mismatched supply lines, incomplete sealant coverage, or overlooked shutoff condition can turn a simple upgrade into a slow leak and a ruined vanity. Our installation work prioritizes clean fit, correct materials, and functional testing before we leave, so you can use the fixture with confidence the same day.
              </p>
            </div>
            <div className="bg-[#f0f9ff] rounded-lg p-6">
              <p className="font-semibold text-[#007595] mb-3">Installation Services:</p>
              <ServiceList
                items={[
                  'Faucet installation and repair',
                  'Toilet installation and replacement',
                  'Sink and garbage disposal installation',
                  'Shower and bathtub installation',
                  'Water heater installation and replacement',
                ]}
              />
            </div>
          </section>

        </div>

        {/* Additional Services */}
        <section className="mt-16 border-l-4 border-[#007595] py-3 rounded-l-2xl pl-6">
          <SectionHeading
            icon={InformationCircleIcon}
            kicker="Complete plumbing support"
            title="Additional Plumbing Services"
          />
          <p className="text-gray-700 leading-relaxed mb-6">
            Beyond emergencies and leak response, ReefTech Solutions supports the full rhythm of property care — hot water reliability, clear drains, sound piping, and commercial systems that keep businesses and rentals running.
          </p>
          <div className="bg-[#f0f9ff] rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#007595] mb-2">Water Heater Service</h4>
                <p className="text-black/65 text-sm leading-relaxed mb-3">
                  Hot water is non-negotiable for comfort and hospitality. We service tank and tankless systems with attention to safety, efficiency, and the water conditions common across the Big Island.
                </p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><span className="text-[#007595] mr-2">✦</span> <span className="text-black/65">Tank and tankless water heaters</span></li>
                  <li><span className="text-[#007595] mr-2">✦</span> <span className="text-black/65">Maintenance and repairs</span></li>
                  <li><span className="text-[#007595] mr-2">✦</span> <span className="text-black/65">Installation and replacement</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#007595] mb-2">Drain Services</h4>
                <p className="text-black/65 text-sm leading-relaxed mb-3">
                  Slow drains rarely improve on their own. We clear blockages carefully and use video camera inspections when you need a clear view of what is happening inside the line.
                </p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><span className="text-[#007595] mr-2">✦</span> <span className="text-black/65">Drain cleaning and clearing</span></li>
                  <li><span className="text-[#007595] mr-2">✦</span> <span className="text-black/65">Clog removal</span></li>
                  <li><span className="text-[#007595] mr-2">✦</span> <span className="text-black/65">Video camera inspections</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#007595] mb-2">Pipe Services</h4>
                <p className="text-black/65 text-sm leading-relaxed mb-3">
                  Aging or damaged piping deserves a durable solution — not a temporary patch that fails under the next pressure cycle. We repair, replace, and protect piping for long-term reliability.
                </p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><span className="text-[#007595] mr-2">✦</span> <span className="text-black/65">Pipe repair and replacement</span></li>
                  <li><span className="text-[#007595] mr-2">✦</span> <span className="text-black/65">Repiping services</span></li>
                  <li><span className="text-[#007595] mr-2">✦</span> <span className="text-black/65">Pipe insulation</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#007595] mb-2">Commercial Plumbing</h4>
                <p className="text-black/65 text-sm leading-relaxed mb-3">
                  Commercial and hospitality properties need partners who respect schedules, cleanliness standards, and the cost of downtime. We support restaurants, vacation rentals, and ongoing commercial maintenance with professional care.
                </p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li><span className="text-[#007595] mr-2">✦</span> <span className="text-black/65">Restaurant plumbing</span></li>
                  <li><span className="text-[#007595] mr-2">✦</span> <span className="text-black/65">Vacation rental properties</span></li>
                  <li><span className="text-[#007595] mr-2">✦</span> <span className="text-black/65">Commercial maintenance</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reassurance */}
        <section className="mt-16 bg-[#007595] rounded-2xl p-8 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/70 mb-2">
            Built for Big Island realities
          </p>
          <h2 className="text-2xl font-bold mb-6">
            Reassurance for Every Kind of Property Steward
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">Homeowners protecting their biggest investment</h3>
              <p className="text-white/90 leading-relaxed">
                Your home is more than walls and a roof — it is the place where daily life unfolds. When plumbing trouble appears, you should not have to become an expert overnight. We explain findings in plain language, respect your home while we work, and focus on repairs that protect both comfort and long-term value. From a single dripping faucet to a whole-home concern about hidden moisture, you will have a steady partner who treats your property with care.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">Property managers overseeing multiple rentals</h3>
              <p className="text-white/90 leading-relaxed">
                Multiple keys, multiple guest calendars, and multiple ownership expectations leave little room for unreliable vendors. ReefTech Solutions understands turnover windows, after-hours guest issues, and the need for clear communication you can pass along to owners. Whether the call is a clogged toilet before check-in or a proactive inspection across a small portfolio, we help you keep properties dry, functional, and ready to welcome the next stay.
              </p>
            </div>
          </div>
          <p className="text-white/90 leading-relaxed mt-6">
            In every case, our tone is the same: calm, thorough, and accountable. Premium service does not mean complicated language or unnecessary upselling. It means showing up prepared, doing the job correctly, and leaving the system better than we found it.
          </p>
        </section>

        {/* Service Area */}
        <section className="mt-16 bg-[#f0f9ff] rounded-2xl p-8">
          <h3 className="text-xl text-center font-bold mb-3 text-[#007595]">
            Serving Big Island Hawaii
          </h3>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-6">
            ReefTech Solutions provides professional plumbing services across the communities that make the Big Island home and hospitality possible. If your property is in one of the areas below — or nearby — we are ready to help.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="bg-white border border-[#007595]/15 text-black/65 rounded-full px-4 py-2 text-sm font-semibold"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-700 mt-6">
            From coastal rentals to upcountry homes and commercial kitchens, island properties share one need: plumbing that works when life and guests depend on it. Call <a href="tel:8083034627" className="text-[#007595] font-semibold hover:underline">(808) 303-4627</a> to schedule service or request emergency response.
          </p>
        </section>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Need Plumbing Service?
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether water is actively escaping or you simply want a professional set of eyes on a property before the next season, we are here. Reach out for emergency help, leak detection, inspections, fixture work, or ongoing commercial support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:8083034627"
              className="bg-[#007595]/80 hover:bg-[#007595] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg"
            >
              <PhoneIcon className="w-6 h-6" />
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

        {/* Contact */}
        <section id="contact" className="mt-16 scroll-mt-28">
          <div className="bg-white border border-[#007595]/15 rounded-2xl shadow-lg p-8 grid md:grid-cols-[1.3fr_0.9fr] gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#007595]/70 mb-2">
                Contact ReefTech Solutions
              </p>
              <h2 className="text-2xl font-bold text-[#007595] mb-4">
                Speak With a Local Plumbing Professional
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Ready for help you can trust? Call us directly for immediate service, emergency dispatch, or to discuss inspections and scheduled maintenance for homes and managed properties.
              </p>
              <p className="text-3xl md:text-4xl font-bold text-[#007595] my-4">
                <a href="tel:8083034627" className="hover:underline">(808) 303-4627</a>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tell us what you are seeing, hearing, or smelling. We will help you prioritize safety, contain damage, and plan the right repair path — without unnecessary complexity.
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>
                  <span className="font-semibold text-[#007595]">Phone:</span>{' '}
                  <a href="tel:8083034627" className="text-[#007595] hover:underline">(808) 303-4627</a>
                </li>
                <li>
                  <span className="font-semibold text-[#007595]">Availability:</span>{' '}
                  <span className="text-black/65">24/7 emergency service ✦ Insured ✦ Fast response</span>
                </li>
                <li>
                  <span className="font-semibold text-[#007595]">Service focus:</span>{' '}
                  <span className="text-black/65">Residential, vacation rental, restaurant, and commercial plumbing</span>
                </li>
                <li>
                  <span className="font-semibold text-[#007595]">Areas:</span>{' '}
                  <span className="text-black/65">{SERVICE_AREAS.join(', ')}</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:8083034627"
                  className="bg-[#007595]/80 hover:bg-[#007595] text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Call Now for Service
                </a>
                <a
                  href="tel:8083034627"
                  className="bg-white border border-[#007595]/25 text-[#007595] hover:bg-[#f0f9ff] px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center"
                >
                  Request Emergency Help
                </a>
              </div>
            </div>
            <aside className="bg-[#f0f9ff] rounded-2xl p-6">
              <h3 className="font-bold text-[#007595] mb-3">What to have ready when you call</h3>
              <div className="space-y-3 text-black/65 text-sm leading-relaxed">
                <p>Your property address and the best callback number.</p>
                <p>A brief description of the issue — active leak, no hot water, backup, odor, or inspection request.</p>
                <p>Whether the main water can be shut off safely, and any access notes for gates, lockboxes, or occupied units.</p>
                <p>
                  If water is actively flowing and you can do so safely, shut off the fixture or main supply and call <a href="tel:8083034627" className="text-[#007595] font-semibold hover:underline">(808) 303-4627</a> right away. We will take it from there.
                </p>
              </div>
            </aside>
          </div>
        </section>

      </div>
    </div>
  );
}
