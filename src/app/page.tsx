import EmergencyCTASection from './components/home/EmergencyCTASection';
import ResourcesSection from './components/home/ResourcesSection';
import RequestFormSection from './components/home/RequestFormSection';
import ServicesSection from './components/home/ServicesSection';
import FAQSchema from './components/SEO/FAQSchema';
import ServiceSchema from './components/SEO/ServiceSchema';
import LocationSchema from './components/SEO/LocationSchema';
import LocationKeywords from './components/SEO/LocationKeywords';
import GoogleBusinessSchema from './components/SEO/GoogleBusinessSchema';
import VideoHeroSection from './components/home/VideoHeroSection';

export default function Home() {
  return (
    <>
      <FAQSchema />
      <ServiceSchema />
      <LocationSchema />
      <LocationKeywords />
      <GoogleBusinessSchema />
      {/* Hero Section */}
      <VideoHeroSection/>

      <ServicesSection />

      {/* Emergency Section moved directly below Services */}
      <EmergencyCTASection />








      <ResourcesSection />

      <RequestFormSection />
    </>
  );
}

// (Services section now refactored into components/home/ServicesSection.tsx)
