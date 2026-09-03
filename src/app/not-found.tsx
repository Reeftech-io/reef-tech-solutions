import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://www.reeftech.io';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description:
    "The page you're looking for doesn't exist. Browse ReefTech Solutions' electrical, plumbing, fire alarm, access control, and spa & sauna services on the Big Island of Hawaii.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_URL}/404`,
  },
  openGraph: {
    title: 'Page Not Found — ReefTech Solutions',
    description:
      "The page you're looking for doesn't exist. Browse our services on the Big Island of Hawaii.",
    url: `${SITE_URL}/404`,
    siteName: 'ReefTech Solutions',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Not Found — ReefTech Solutions',
    description:
      "The page you're looking for doesn't exist. Browse our services on the Big Island of Hawaii.",
  },
};

export default function NotFound() {
  const services = [
    { label: 'Electrical', href: '/electrical-services' },
    { label: 'Plumbing', href: '/plumbing-services' },
    { label: 'Fire Alarm & Suppression', href: '/fire-alarm-support' },
    { label: 'Access Control', href: '/access-control-services' },
    { label: 'Pool, Spa & Sauna', href: '/pool-spa-sauna' },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-xl text-center py-32">
        <p className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-teal-700 via-cyan-600 to-lime-600 bg-clip-text text-transparent font-tan-headline mb-4">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          The page you're looking for may have moved or no longer exists.
          Try one of our service pages, or head back to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className="inline-flex h-12 items-center rounded-full bg-gradient-to-r from-lime-500 to-cyan-500 px-7 font-semibold text-slate-900 shadow-lg transition hover:scale-105"
          >
            Back to Home
          </Link>
          <a
            href="tel:+1-808-303-4627"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-cyan-300 px-7 font-semibold text-cyan-700 transition hover:bg-cyan-50"
          >
            Call (808) 303-4627
          </a>
        </div>
        <div className="border-t border-slate-200 pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
            Our Services
          </h2>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="text-cyan-700 font-medium hover:underline"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
