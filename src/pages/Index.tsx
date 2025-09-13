import { HeroSection } from "@/components/HeroSection";
import { MissionKillerSection } from "@/components/MissionKillerSection";
import { ImpactFrustrationSection } from "@/components/ImpactFrustrationSection";
import { SolutionSection } from "@/components/SolutionSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { ConversionForm } from "@/components/ConversionForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionKillerSection />
      <ImpactFrustrationSection />
      <SolutionSection />
      <SocialProofSection />
      <ConversionForm />
      <Footer />
    </div>
  );
};

export default Index;
