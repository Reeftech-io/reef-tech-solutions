export default function RequestFormSection() {
  // Restored to original Jobber.com embed section from previous inline implementation
  return (
    <section id="request-form" className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
      {/* Advanced circuit background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="form-circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10,0 L10,10 M0,10 L20,10 M5,5 L15,5" stroke="#00CED1" strokeWidth="0.4" opacity="0.6" />
              <path d="M5,0 L5,5 M15,5 L15,10" stroke="#32CD32" strokeWidth="0.3" opacity="0.5" />
              <circle cx="10" cy="10" r="0.8" fill="#00CED1" opacity="0.7">
                <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="5" cy="5" r="0.5" fill="#32CD32" opacity="0.6">
                <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.5s" repeatCount="indefinite" />
              </circle>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#form-circuit)" />
        </svg>
      </div>

      {/* Floating tech elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-6 h-6 bg-white/20 rounded-full animate-ping" />
        <div className="absolute top-32 right-24 w-4 h-4 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 left-32 w-5 h-5 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-24 right-16 w-3 h-3 bg-white/35 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-8 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-white drop-shadow-lg">
              Ready to Upgrade Your Property?
            </span>
          </h2>
          <div className="text-3xl md:text-4xl font-semibold text-lime-200 mb-8">
            Get Complete Solutions Today
          </div>
          <p className="text-2xl opacity-95 max-w-4xl mx-auto leading-relaxed">
            Custom technology integration and maintenance solutions for your smart home, vacation rental, or luxury property
          </p>
        </div>
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-3 shadow-2xl max-w-6xl mx-auto border border-white/30">
          <iframe
            className="w-full rounded-2xl"
            sandbox="allow-forms allow-scripts allow-same-origin allow-modals"
            src="https://clienthub.getjobber.com/client_hubs/82c2ec52-21b5-4684-acbc-8aafff4565f1/public/work_request/embedded_new?source=embedded_inline&sp_websites_embed=true"
            style={{
              visibility: 'visible',
              width: '100%',
              height: '1600px',
              border: 'none',
              minHeight: '1600px'
            }}
            title="Request Form"
          />
        </div>
        {/* Call to action below form */}
        <div className="flex justify-end max-sm:flex-wrap max-sm:justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 mt-12 max-w-6xl mx-auto">
          <a
            href="https://crypto.com/us"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:scale-105 transition-transform duration-300"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photos/crypto.jpg"
              alt="crypto.com"
              className="w-24 h-24 rounded-lg hover:opacity-80 transition-opacity duration-300"
            />
          </a>
          <a
            href="https://uphold.com/us"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:scale-105 transition-transform duration-300"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photos/uphold.jpg"
              alt="crypto.com"
              className="w-24 h-24 rounded-lg hover:opacity-80 transition-opacity duration-300"
            />
          </a>
          <a
            href="https://banksocial.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:scale-105 transition-transform duration-300"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photos/banksocial-logo.jpg"
              alt="Bank Social"
              className="w-24 h-24 rounded-lg hover:opacity-80 transition-opacity duration-300"
            />
          </a>
          <a
            href="https://joeywallet.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:scale-105 transition-transform duration-300"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photos/joey-wallet.png"
              alt="Joey Wallet"
              className="w-24 h-24 rounded-lg hover:opacity-80 transition-opacity duration-300"
            />
          </a>
          <a
            href="https://www.saucerswap.finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:scale-105 transition-transform duration-300"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photos/saucer-swap.png"
              alt="SaucerSwap"
              className="w-24 h-24 rounded-lg hover:opacity-80 transition-opacity duration-300"
            />
          </a>
          <a
            href="https://lobstr.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:scale-105 transition-transform duration-300"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photos/lobster.png"
              alt="Lobstr"
              className="w-24 h-24 rounded-lg hover:opacity-80 transition-opacity duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
