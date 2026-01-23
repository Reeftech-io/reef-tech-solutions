import { IoCalendar } from "react-icons/io5";
import { GiToolbox } from "react-icons/gi";
import { MdSettingsRemote } from "react-icons/md";



export default function ResourcesSection() {
  const resources = [
    {
      title: 'Vacation Rental Tech Checklist',
      description: 'Essential smart home + automation standards for seamless guest stays.',
      icon: <IoCalendar />,
      href: '/pdfs/TechChecklistNew.pdf',
      cta: 'Download PDF'
    },
    {
      title: 'Smart Home Setup Guide',
      description: 'Step-by-step framework to integrate reliable automation in premium properties.',
      icon: <GiToolbox />,
      href: '/pdfs/SmartHomeSetup.pdf',
      cta: 'Open Guide'
    },
    {
      title: 'Remote Monitoring Solutions',
      description: 'Technology options to manage multiple locations with proactive insight.',
      icon: <MdSettingsRemote />,
      href: '/pdfs/RemoteMonitoring.pdf',
      cta: 'View PDF'
    }
  ];
  return (
    <section id="resources" className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
      {/* Advanced circuit background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="resources-circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
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
          <rect width="100" height="100" fill="url(#resources-circuit)" />
        </svg>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10 max-w-5xl">
        <h2 className="text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-cyan-700 via-teal-600 to-cyan-700 bg-clip-text text-transparent font-tan-headline">Resources & Guides</h2>
        <p className="text-xl text-gray-300 font-medium leading-relaxed mb-16 max-w-2xl mx-auto">Empower your decisions with practical insights drawn from real-world electrical service experience.</p>
        <div className="grid max-[920px]:grid-cols-1 grid-cols-3 gap-10 mb-16">
          {resources.map(r => (
            <div key={r.title} className="relative group">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br text-start from-white via-cyan-50 to-teal-50 border border-gray-200/70 group-hover:border-cyan-300/80 transition-all duration-500 shadow-xl group-hover:shadow-2xl" style={{ boxShadow: '0 12px 30px -12px rgba(0,128,128,0.35)' }}></div>
              <div className="relative p-8 rounded-3xl border-l-[6px] h-full card-shadow border-lime-500 flex flex-col items-start text-start gap-5">
                <div className="text-5xl text-cyan-700" aria-hidden="true">{r.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800">{r.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed font-medium">{r.description}</p>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-700 font-semibold group-hover:gap-3 transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:rounded-2xl after:bg-cyan-700 after:transition-all after:duration-300 hover:after:w-full">
                  {r.cta} <span className="text-lg" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-6">
          <a href="#request-form" className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 via-teal-500 to-cyan-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-cyan-400/30" style={{ boxShadow: '0 12px 30px -12px rgba(0,128,128,0.5)' }}>Need Advice? Request an Assessment →</a>
          <p className="text-sm text-gray-300 font-medium">Personalized recommendations based on your property’s requirements.</p>
        </div>
      </div>
    </section>
  );
}
