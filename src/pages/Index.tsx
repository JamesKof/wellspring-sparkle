import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import VideoSection from "@/components/VideoSection";
import TherapistSection from "@/components/TherapistSection";
import ResourcesSection from "@/components/ResourcesSection";
import CampaignHero from "@/components/CampaignHero";
import BookingSection from "@/components/BookingSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <VideoSection />
      <TherapistSection />
      <ResourcesSection />
      <CampaignHero />
      <BookingSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
