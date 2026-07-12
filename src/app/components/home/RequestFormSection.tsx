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
              <circle cx="10" cy="10" r="0.8" fill="#00CED1" opacity="0.45" />
              <circle cx="5" cy="5" r="0.5" fill="#32CD32" opacity="0.35" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#form-circuit)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r leading-snug from-cyan-700 via-teal-600 to-cyan-700 bg-clip-text text-transparent font-tan-headline">
            Ready to Upgrade Your Property?
          </h2>
          <div className="text-3xl md:text-4xl font-semibold text-lime-200 mb-8">
            Get Complete Solutions Today
          </div>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Custom technology integration and maintenance solutions for your smart home, vacation rental, or luxury property
          </p>
        </div>
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-3 shadow-2xl max-w-6xl mx-auto border border-white/30">
          <iframe
            className="w-full rounded-2xl"
            sandbox="allow-forms allow-scripts allow-same-origin allow-modals"
            src="https://clienthub.getjobber.com/client_hubs/82c2ec52-21b5-4684-acbc-8aafff4565f1/public/work_request/embedded_new?source=embedded_inline&sp_websites_embed=true"
            loading="lazy"
            style={{
              visibility: 'visible',
              width: '100%',
              height: '800px',
              border: 'none',
              minHeight: '800px'
            }}
            title="Request Form"
          />
        </div>
        {/* Call to action below form */}
        
      </div>
    </section>
  );
}
