import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import PolicySection from "@/components/PolicySection";
import NewsSection from "@/components/NewsSection";
import JoinSection from "@/components/JoinSection";
import AIPrinciplesSection from "@/components/AIPrinciplesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <PolicySection />
      <NewsSection />
      <JoinSection />
      <AIPrinciplesSection />
      <Footer />
    </div>
  );
};

export default Index;
