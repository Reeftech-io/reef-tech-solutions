import type { Metadata } from 'next';
import ResourcesSection from './components/home/ResourcesSection';
import RequestFormSection from './components/home/RequestFormSection';
import ServicesSection from './components/home/ServicesSection';
import VideoHeroSection from './components/home/VideoHeroSection';
import ReviewsSection from './components/home/ReviewsSection';

const SITE_URL = 'https://www.reeftech.io';

// Page-level metadata overrides layout defaults for the homepage.
// This adds a canonical, og:url, og:type=website, and per-page twitter card.
export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    url: SITE_URL,
    siteName: 'ReefTech Solutions',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: `${SITE_URL}/photos/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'ReefTech Solutions — Property Maintenance & Building Technology, Big Island Hawaii',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${SITE_URL}/photos/og-image.jpg`],
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD (Organization, WebSite, FAQPage) is rendered globally from layout.tsx */}
      <VideoHeroSection />
      <ServicesSection />
      <ResourcesSection />
      <RequestFormSection />
      <ReviewsSection />
    </>
  );
}
