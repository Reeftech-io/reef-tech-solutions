import ResourcesSection from './components/home/ResourcesSection';
import RequestFormSection from './components/home/RequestFormSection';
import ServicesSection from './components/home/ServicesSection';
import VideoHeroSection from './components/home/VideoHeroSection';

export default function Home() {
  return (
    <>
      {/* JSON-LD (Organization, WebSite, FAQPage) is rendered globally from layout.tsx */}
      <VideoHeroSection />
      <ServicesSection />
      <ResourcesSection />
      <RequestFormSection />
    </>
  );
}
