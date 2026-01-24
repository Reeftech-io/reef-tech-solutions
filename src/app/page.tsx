'use client';

import EmergencyCTASection from './components/home/EmergencyCTASection';
import ResourcesSection from './components/home/ResourcesSection';
import RequestFormSection from './components/home/RequestFormSection';
import ServicesSection from './components/home/ServicesSection';
import FAQSchema from './components/SEO/FAQSchema';
import ServiceSchema from './components/SEO/ServiceSchema';
import LocationSchema from './components/SEO/LocationSchema';
import LocationKeywords from './components/SEO/LocationKeywords';
import GoogleBusinessSchema from './components/SEO/GoogleBusinessSchema';

export default function Home() {
  return (
    <>
      <FAQSchema />
      <ServiceSchema />
      <LocationSchema />
      <LocationKeywords />
      <GoogleBusinessSchema />
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Hero Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/Hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4 py-8 z-30">
          <div className="container mx-auto px-4 text-center text-white relative z-10">
            <div className="transition-all duration-1000">
              <div className="mb-8 sm:mb-12">
                {/* Logo */}
                <div className="flex items-center justify-center mb-8 sm:mb-12">
                  <img
                    src="/photos/logoOpt.webp"
                    alt="ReefTech Solutions Logo"
                    className="h-24 sm:h-32 md:h-40 lg:h-56 xl:h-64 w-auto animate-pulse"
                    style={{
                      filter: 'drop-shadow(0 0 20px rgba(0, 206, 209, 0.5))'
                    }}
                  />
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 sm:mb-8 font-tan-headline">
                  <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-lime-300 bg-clip-text text-transparent drop-shadow-2xl">
                    ReefTech Solutions
                  </span>
                </h1>


                {/* Sub-description */}
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-200 mb-8 sm:mb-12">
                  Your One-Stop Shop for All Property Repairs & Maintenance
                </p>

                {/* Services List */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-12 text-sm sm:text-base md:text-lg lg:text-xl max-w-5xl mx-auto">
                  <span className="font-semibold text-gray-200 hover:text-cyan-300 hover:scale-110 transition-all duration-300 cursor-default">Plumbing</span>
                  <span className="text-cyan-400">•</span>
                  <span className="font-semibold text-gray-200 hover:text-lime-300 hover:scale-110 transition-all duration-300 cursor-default">Electrical</span>
                  <span className="text-cyan-400">•</span>
                  <span className="font-semibold text-gray-200 hover:text-orange-300 hover:scale-110 transition-all duration-300 cursor-default">Fire Alarms</span>
                  <span className="text-cyan-400">•</span>
                  <span className="font-semibold text-gray-200 hover:text-yellow-300 hover:scale-110 transition-all duration-300 cursor-default">Lighting</span>
                  <span className="text-cyan-400">•</span>
                  <span className="font-semibold text-gray-200 hover:text-teal-300 hover:scale-110 transition-all duration-300 cursor-default">Lock Installation</span>
                  <span className="text-cyan-400">•</span>
                  <span className="font-semibold text-gray-200 hover:text-blue-300 hover:scale-110 transition-all duration-300 cursor-default">Lockout Service</span>
                  <span className="text-cyan-400">•</span>
                  <span className="font-semibold text-gray-200 hover:text-pink-300 hover:scale-110 transition-all duration-300 cursor-default">Sauna Repair</span>
                  <span className="text-cyan-400">•</span>
                  <span className="font-semibold text-gray-200 hover:text-purple-300 hover:scale-110 transition-all duration-300 cursor-default">Spa Service</span>
                  <span className="text-cyan-400">•</span>
                  <span className="font-semibold text-gray-200 hover:text-green-300 hover:scale-110 transition-all duration-300 cursor-default">General Repairs</span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a
                    href="#request-form"
                    className="bg-gradient-to-r from-lime-400 to-cyan-400 text-gray-900 px-8 py-4 rounded-full text-xl font-bold hover:from-lime-300 hover:to-cyan-300 transition-all duration-300 hover:scale-105 shadow-2xl"
                    style={{
                      boxShadow: '0 0 30px rgba(50, 205, 50, 0.4)'
                    }}
                    data-gtm-event="get_started"
                    data-gtm-location="hero"
                  >
                    Get Started Today
                  </a>
                  <a
                    href="tel:+1-808-303-4627"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-3"
                    data-gtm-event="phone_call"
                    data-gtm-location="hero"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call (808) 303-4627
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Emergency Section moved directly below Services */}
      <EmergencyCTASection />








      <ResourcesSection />

      <RequestFormSection />
    </>
  );
}

// (Services section now refactored into components/home/ServicesSection.tsx)