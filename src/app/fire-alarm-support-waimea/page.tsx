import type { Metadata } from 'next';
import Link from 'next/link';
import { FireIcon, ShieldCheckIcon, BeakerIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Fire Alarm & Suppression Services Waimea | ReefTech Solutions',
  description: 'Professional fire alarm installation, inspection, and service in Waimea, Kamuela, and Big Island Hawaii. Fire hose service, kitchen hood suppression systems, and fire sprinkler maintenance.',
  keywords: [
    'fire alarm service Waimea',
    'fire suppression Kamuela',
    'kitchen hood inspection Hawaii',
    'fire hose service Big Island',
    'fire sprinkler inspection Waimea',
    'commercial fire safety Hawaii'
  ],
};

export default function FireAlarmWaimeaPage() {
  return (
    <div className="min-h-screen bg-white">
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

        {/* Services Section */}
        <div className="space-y-12">

          {/* Fire Hose and Cabinet Service */}
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

          {/* Restaurant Range Hood Fire Suppression */}
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

        {/* Service Area */}
        <div className="mt-16 bg-[#f0f9ff] rounded-lg p-8">
          <h3 className="text-xl font-bold text-center mb-3 text-[#007595]">
            Serving Big Island Hawaii
          </h3>
          <p className="text-gray-700 text-center">
            Waimea <span className='text-[#007595]'>✦</span> Kamuela <span className='text-[#007595]'>✦</span> Kailua-Kona <span className='text-[#007595]'>✦</span> Hilo <span className='text-[#007595]'>✦</span> Captain Cook <span className='text-[#007595]'>✦</span> Volcano
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Need Fire Safety Service?
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
