import ReefBackdrop from './ReefBackdrop';

export default function RequestFormSection() {
  // Restored to original Jobber.com embed section from previous inline implementation
  return (
    <section id="request-form" className="py-24 bg-[#073a4d] text-white relative overflow-hidden">
      {/* Coral reef underwater backdrop */}
      <ReefBackdrop idPrefix="form-reef" />

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
