'use client'
import { Phone } from 'lucide-react'
import { BsTwitter } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-6 items-center text-center">
          {/* Phone */}
          <a
            href="tel:+1-808-303-4627"
            className="group flex flex-col items-center gap-2 text-sm font-medium hover:text-amber-300 transition-colors"
            aria-label="Call ReefTech Solutions"
          >
            <span className="p-3 rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors">
              <Phone className="w-5 h-5" />
            </span>
            (808) 303-4627
          </a>
          {/* X (placeholder) */}
          <a
            href="#" /* TODO: replace with X.com profile link */
            className="group flex flex-col items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            aria-label="Visit our X profile (link coming soon)"
          >
            <span className="p-3 rounded-full bg-gray-800 group-hover:bg-black transition-colors flex items-center justify-center">
              {/* Using Twitter icon as placeholder; can swap for custom X glyph */}
              <BsTwitter className="w-5 h-5" />
            </span>
            X
          </a>
        </div>
        <div className="mt-8 text-center text-xs sm:text-sm tracking-wide text-gray-400 font-medium">
          <span className="text-base sm:text-lg font-semibold text-gray-200">&copy; {new Date().getFullYear()} ReefTech Solutions</span>
          <div className="mt-3">
            <p className="text-[10px] md:text-xs">
              <a
                href="https://xtremery.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse hover:animate-shimmer font-medium"
              >
                pixel‑polished by Xtremery · Deland, FL
              </a>
            </p>
          </div>
          <style jsx>{`
            @keyframes shimmerX {0%{background-position:0% 50%}100%{background-position:200% 50%}}
            .hover\\:animate-shimmer:hover{animation:shimmerX 1.75s linear infinite;background-size:200% 100%;}
          `}</style>
        </div>
      </div>
    </footer>
  )
}