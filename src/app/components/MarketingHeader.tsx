'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Facebook, Instagram, ChevronDown } from 'lucide-react';

export default function MarketingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleServicesClick = (e: React.MouseEvent) => {
    if (isHomePage) {
      // On home page, scroll to section
      e.preventDefault();
      const section = document.getElementById('services');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      setServicesDropdownOpen(false);
    } else {
      // On other pages, navigate to home then scroll
      window.location.href = '/#services';
    }
  };

  const handleResourcesClick = (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault();
      const section = document.getElementById('resources');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/#resources';
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[10000] bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-4">
            <img src="/photos/logoOpt.webp" alt="ReefTech Solutions Logo" className="h-12 w-auto" style={{ filter: 'drop-shadow(0 0 10px rgba(0, 206, 209, 0.3))' }} />
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold"><span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent font-tan-headline">ReefTech Solutions</span></h1>
              <p className="text-sm text-gray-600 font-medium">Your Property&apos;s Tech Department</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={handleServicesClick}
                className="text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-300 flex items-center gap-1"
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 pt-2 w-64 z-[10001]">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                    <Link
                      href="/plumbing-services"
                      className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors duration-200"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className="font-semibold">Plumbing Services</div>
                      <div className="text-xs text-gray-500">Emergency & repairs</div>
                    </Link>
                    <Link
                      href="/fire-alarm-support-waimea"
                      className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors duration-200"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className="font-semibold">Fire Alarm Services</div>
                      <div className="text-xs text-gray-500">Installation & inspection</div>
                    </Link>
                    <Link
                      href="/lock-locksmith-services"
                      className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors duration-200"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className="font-semibold">Lock & Locksmith</div>
                      <div className="text-xs text-gray-500">Installation & lockout service</div>
                    </Link>
                    <Link
                      href="/electrical-services"
                      className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors duration-200"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className="font-semibold">Electrical Services</div>
                      <div className="text-xs text-gray-500">Minor electrical work</div>
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <button
                      onClick={handleServicesClick}
                      className="block w-full text-left px-4 py-2 text-sm text-cyan-600 hover:bg-cyan-50 transition-colors duration-200"
                    >
                      View All Services →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handleResourcesClick}
              className="text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-300"
            >
              Resources
            </button>

            <a
              href="tel:+1-808-303-4627"
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-semibold hover:from-green-400 hover:to-emerald-400 transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
              style={{ boxShadow: '0 0 20px rgba(34,197,94,0.3)' }}
              data-gtm-event="phone_call"
              data-gtm-location="header_desktop"
            >
              <PhoneIcon /> Call Now
            </a>
            <a href="https://www.facebook.com/reeftechsolutions" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 p-2 transition-all duration-300" title="Follow us on Facebook"><Facebook className="w-5 h-5" /></a>
            <a href="https://www.instagram.com/reeftechsolutions/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-600 p-2 transition-all duration-300" title="Follow us on Instagram"><Instagram className="w-5 h-5" /></a>
            <a href={isHomePage ? "#request-form" : "/#request-form"} className="bg-gradient-to-r from-lime-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:from-lime-400 hover:to-cyan-400 transition-all duration-300 hover:scale-105 shadow-lg" style={{ boxShadow: '0 0 20px rgba(50,205,50,0.3)' }}>Get Started</a>
          </nav>
          <button onClick={() => setMobileMenuOpen(o => !o)} className="lg:hidden p-2 rounded-md text-gray-700 hover:text-cyan-600 hover:bg-gray-100 transition-colors duration-300" aria-label="Toggle menu">{mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}</button>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full text-left text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-300 py-2 flex items-center justify-between"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      href="/plumbing-services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-gray-600 hover:text-cyan-600 py-2"
                    >
                      Plumbing Services
                    </Link>
                    <Link
                      href="/fire-alarm-support-waimea"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-gray-600 hover:text-cyan-600 py-2"
                    >
                      Fire Alarm Services
                    </Link>
                    <Link
                      href="/lock-locksmith-services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-gray-600 hover:text-cyan-600 py-2"
                    >
                      Lock & Locksmith
                    </Link>
                    <Link
                      href="/electrical-services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-gray-600 hover:text-cyan-600 py-2"
                    >
                      Electrical Services
                    </Link>
                    <button
                      onClick={(e) => {
                        handleServicesClick(e);
                        setMobileMenuOpen(false);
                      }}
                      className="block text-cyan-600 hover:text-cyan-700 py-2 text-sm"
                    >
                      View All Services →
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={(e) => {
                  handleResourcesClick(e);
                  setMobileMenuOpen(false);
                }}
                className="text-left text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-300 py-2"
              >
                Resources
              </button>

              <a
                href="tel:+1-808-303-4627"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:from-green-400 hover:to-emerald-400 transition-all duration-300 text-center shadow-lg flex items-center justify-center gap-2"
                style={{ boxShadow: '0 0 20px rgba(34,197,94,0.3)' }}
                data-gtm-event="phone_call"
                data-gtm-location="header_mobile"
              >
                <PhoneIcon /> Call Now: (808) 303-4627
              </a>
              <a href="https://www.facebook.com/reeftechsolutions" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center shadow-md flex items-center justify-center gap-2"><Facebook className="w-5 h-5" /> Follow on Facebook</a>
              <a href="https://www.instagram.com/reeftechsolutions/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center shadow-md flex items-center justify-center gap-2"><Instagram className="w-5 h-5" /> Follow on Instagram</a>
              <a href={isHomePage ? "#request-form" : "/#request-form"} onClick={() => setMobileMenuOpen(false)} className="bg-gradient-to-r from-lime-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:from-lime-400 hover:to-cyan-400 transition-all duration-300 text-center shadow-lg" style={{ boxShadow: '0 0 20px rgba(50,205,50,0.3)' }}>Get Started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function PhoneIcon() { return (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>); }
function MenuIcon() { return (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>); }
function CloseIcon() { return (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>); }
