'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function MarketingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHomePage]);

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
    <header className={`fixed top-0 left-0 right-0 z-[10000] transition-all duration-300 ${isHomePage && !scrolled ? 'bg-white/0' : 'border-b border-white/35 bg-white shadow-[0_6px_20px_-18px_rgba(0,0,0,0.35)]'}`}>
      <div className="container mx-auto px-4 lg:px-0 2xl:px-0">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="group flex items-center space-x-3 sm:space-x-1">
            <Image
              src="/photos/logoOpt.webp"
              alt="ReefTech Solutions Logo"
              width={72}
              height={72}
              priority
              className="h-18 w-18 transition-transform duration-300 group-hover:scale-[1.03]"
              style={{ filter: 'drop-shadow(0 0 12px rgba(0, 206, 209, 0.28))' }}
            />
            <div className="hidden sm:flex flex-col pt-2 justify-center">
              <span className="text-[1.48rem] font-bold leading-tight"><span className="bg-gradient-to-r from-teal-700 via-cyan-600 to-lime-600 bg-clip-text text-transparent font-tan-headline">ReefTech Solutions</span></span>
              <p className={`text-[0.76rem] tracking-wide font-semibold uppercase ${isHomePage && !scrolled ? 'text-white' : 'text-gray-600/90'}`}>Your Property&apos;s Tech Department</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
            {/* Services Dropdown */}
            {/* <div
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
            </div> */}

            <button
              onClick={handleResourcesClick}
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-lime-500 to-cyan-500 px-5 text-sm font-semibold text-white shadow-[0_12px_24px_-14px_rgba(6,182,212,0.9)] transition-all duration-300 hover:scale-[1.03] hover:from-lime-400 hover:to-cyan-400"
            >
              Resources
            </button>

            <a
              href="tel:+1-808-303-4627"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-lime-500 to-cyan-500 px-5 text-sm font-semibold text-white shadow-[0_12px_24px_-14px_rgba(6,182,212,0.9)] transition-all duration-300 hover:scale-[1.03] hover:from-lime-400 hover:to-cyan-400"
              data-gtm-event="phone_call"
              data-gtm-location="header_desktop"
            >
              <PhoneIcon /> Call Now
            </a>
            <a href={isHomePage ? "#request-form" : "/#request-form"} className="inline-flex h-11 items-center rounded-full bg-gradient-to-r from-lime-500 to-cyan-500 px-6 text-sm font-bold tracking-[0.01em] text-white shadow-[0_12px_24px_-14px_rgba(6,182,212,0.9)] transition-all duration-300 hover:scale-[1.03] hover:from-lime-400 hover:to-cyan-400">Get Started</a>
          </nav>
          <button
            onClick={() => setMobileMenuOpen(o => !o)}
            className={`lg:hidden rounded-xl p-2.5 transition-all duration-300 ${
              isHomePage && !scrolled
                ? 'border border-white/35 bg-black/20 text-white hover:bg-black/30'
                : 'border border-gray-200 bg-white text-gray-700 hover:bg-cyan-50 hover:text-cyan-700'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/80 py-4">
            <div className="flex flex-col gap-2 rounded-2xl border border-cyan-100/70 bg-white/88 p-4 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.45)] backdrop-blur">
              {/* Mobile Services Dropdown */}
              {/* <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left font-semibold text-gray-700 transition-colors duration-300 hover:bg-cyan-50 hover:text-cyan-700"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="mt-2 space-y-1 pl-3">
                    <Link
                      href="/plumbing-services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-2 py-2 text-gray-600 transition-colors hover:bg-cyan-50 hover:text-cyan-700"
                    >
                      Plumbing Services
                    </Link>
                    <Link
                      href="/fire-alarm-support-waimea"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-2 py-2 text-gray-600 transition-colors hover:bg-cyan-50 hover:text-cyan-700"
                    >
                      Fire Alarm Services
                    </Link>
                    <Link
                      href="/lock-locksmith-services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-2 py-2 text-gray-600 transition-colors hover:bg-cyan-50 hover:text-cyan-700"
                    >
                      Lock & Locksmith
                    </Link>
                    <Link
                      href="/electrical-services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-2 py-2 text-gray-600 transition-colors hover:bg-cyan-50 hover:text-cyan-700"
                    >
                      Electrical Services
                    </Link>
                    <button
                      onClick={(e) => {
                        handleServicesClick(e);
                        setMobileMenuOpen(false);
                      }}
                      className="block rounded-lg px-2 py-2 text-sm font-semibold text-cyan-700 transition-colors hover:bg-cyan-50 hover:text-cyan-800"
                    >
                      View All Services →
                    </button>
                  </div>
                )}
              </div> */}

              <button
                onClick={(e) => {
                  handleResourcesClick(e);
                  setMobileMenuOpen(false);
                }}
                type="button"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-lime-500 to-cyan-500 px-6 py-3 text-center font-semibold text-white shadow-[0_14px_28px_-16px_rgba(6,182,212,0.95)] transition-all duration-300 hover:from-lime-400 hover:to-cyan-400"
              >
                Resources
              </button>

              <a
                href="tel:+1-808-303-4627"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-lime-500 to-cyan-500 px-6 py-3 text-center font-semibold text-white shadow-[0_14px_28px_-16px_rgba(6,182,212,0.95)] transition-all duration-300 hover:from-lime-400 hover:to-cyan-400"
                data-gtm-event="phone_call"
                data-gtm-location="header_mobile"
              >
                <PhoneIcon /> Call Now: (808) 303-4627
              </a>
              <a href={isHomePage ? "#request-form" : "/#request-form"} onClick={() => setMobileMenuOpen(false)} className="rounded-full border border-cyan-300/60 bg-gradient-to-r from-lime-500 to-cyan-500 px-6 py-3 text-center font-bold text-white shadow-[0_14px_28px_-16px_rgba(6,182,212,0.95)] transition-all duration-300 hover:from-lime-400 hover:to-cyan-400">Get Started</a>
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
