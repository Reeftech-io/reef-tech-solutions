'use client'
import Link from 'next/link'
import { Phone, MapPin, Clock } from 'lucide-react'
import { BsTwitter } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand / blurb */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold mb-2 font-tan-headline">
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-lime-400 bg-clip-text text-transparent">
                ReefTech Solutions
              </span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your Property&apos;s Tech Department. Licensed, local, and on-call across the Big Island for property managers, vacation rentals, and luxury homes.
            </p>
            <div className="mt-5">
              <a
                href="tel:+1-808-303-4627"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-lime-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg transition-transform hover:scale-[1.03]"
                data-gtm-event="phone_call"
                data-gtm-location="footer"
              >
                <Phone className="w-4 h-4" /> (808) 303-4627
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/electrical-services" className="text-gray-300 hover:text-white transition-colors">
                  Electrical services
                </Link>
              </li>
              <li>
                <Link href="/plumbing-services" className="text-gray-300 hover:text-white transition-colors">
                  Plumbing services
                </Link>
              </li>
              <li>
                <Link href="/fire-alarm-support" className="text-gray-300 hover:text-white transition-colors">
                  Fire alarm &amp; suppression
                </Link>
              </li>
              <li>
                <Link href="/access-control-services" className="text-gray-300 hover:text-white transition-colors">
                  Locks &amp; access control
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/#request-form" className="text-gray-300 hover:text-white transition-colors">
                  Request a quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-300">
                <Phone className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                <a href="tel:+1-808-303-4627" className="hover:text-white transition-colors">
                  (808) 303-4627
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                <span>Based in Waimea, HI · Serving Big Island</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <Clock className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                <span>Mon–Sat · 24/7 emergency</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} ReefTech Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Visit our X profile"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <BsTwitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
