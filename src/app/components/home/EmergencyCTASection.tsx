"use client";
import { AlertTriangle } from 'lucide-react';

export default function EmergencyCTASection() {
  return (
    <section
      id="emergency"
      className="relative py-16 overflow-hidden shadow-lg text-white"
      style={{ background: 'linear-gradient(100deg,#ff5722,#e64a19 45%,#d84315)' }}
    >
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Left: Headline & Copy with Siren */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <div className="relative">
                <AlertTriangle className="w-14 h-14 md:w-16 md:h-16 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.35)] animate-siren-pulse" aria-hidden="true" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 animate-ping-fast" aria-hidden="true"></span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-amber-100 to-yellow-300 bg-clip-text text-transparent">Have an Emergency?</span>
              </h2>
            </div>
          </div>
          {/* Right: Actions */}
          <div className="w-full md:w-auto flex md:flex-col items-stretch md:items-end justify-center gap-4">
            <a
              href="tel:+1-808-303-4627"
              className="group bg-white text-orange-700 hover:text-orange-800 px-6 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 border border-white/60 hover:scale-[1.03]"
              data-gtm-event="phone_call"
              data-gtm-location="emergency_section"
            >
              <PhoneIcon /> <span className="whitespace-nowrap">(808) 303-4627</span>
            </a>
            <a
              href="#request-form"
              className="bg-orange-900/20 hover:bg-orange-900/30 text-white px-8 py-4 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 backdrop-blur-sm hover:scale-[1.03]"
              data-gtm-event="request_service"
              data-gtm-location="emergency_section"
            >
              Request Service
            </a>
            
          </div>
        </div>
      </div>
      {/* Fallback subtle vignette */}
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: 'radial-gradient(circle at 30% 50%,rgba(255,255,255,0.18),transparent 60%),radial-gradient(circle at 80% 40%,rgba(255,255,255,0.12),transparent 65%)' }}></div>
      {/* Keyframes + reduced motion handling */}
      <style jsx>{`
        @keyframes warningGradient { 
          0% { background: linear-gradient(100deg,#ff6a00,#ff3d00 45%,#ff9a1e); }
          35% { background: linear-gradient(110deg,#ff7d00,#ff5600 50%,#ffb628); }
          70% { background: linear-gradient(95deg,#ff9a1e,#ff6a00 40%,#ffd24d); }
          100% { background: linear-gradient(100deg,#ff6a00,#ff3d00 45%,#ff9a1e); }
        }
        @keyframes haloPulse {
          0%,100% { transform: scale(1); opacity:.55; }
          50% { transform: scale(1.08); opacity:.9; }
        }
        @keyframes haloPulseDelayed {
          0%,100% { transform: scale(1); opacity:.35; }
          50% { transform: scale(1.15); opacity:.7; }
        }
        @keyframes sirenPulse {
          0%,100% { filter: drop-shadow(0 0 6px rgba(255,255,255,0.5)); transform: translateY(0); }
          50% { filter: drop-shadow(0 0 14px rgba(255,255,255,0.85)); transform: translateY(-2px); }
        }
        @keyframes pingFast { 0% { transform: scale(.75); opacity:.9;} 70% { transform: scale(1.5); opacity:0;} 100% { opacity:0;} }
        .animate-warning-gradient { animation: warningGradient 6s ease-in-out infinite; }
        .animate-halo-pulse { animation: haloPulse 7s ease-in-out infinite; }
        .animate-halo-pulse-delayed { animation: haloPulseDelayed 8s ease-in-out infinite 1s; }
        .animate-siren-pulse { animation: sirenPulse 2.8s ease-in-out infinite; }
        .animate-ping-fast { animation: pingFast 1.6s cubic-bezier(0,0,.2,1) infinite; }
        @media (prefers-reduced-motion: reduce) {
          .animate-warning-gradient,
          .animate-halo-pulse,
          .animate-halo-pulse-delayed,
          .animate-siren-pulse,
          .animate-ping-fast { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

function PhoneIcon() { return (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>); }
