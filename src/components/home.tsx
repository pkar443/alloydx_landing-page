import { Navigation } from "./landing/Navigation";
import { HeroSection } from "./landing/HeroSection";
import { ModalityStrip } from "./landing/ModalityStrip";
import { ProblemSection } from "./landing/ProblemSection";
import { SolutionSection } from "./landing/SolutionSection";
import { DashboardSection } from "./landing/DashboardSection";
import { HowItWorksSection } from "./landing/HowItWorksSection";
import { ResearchSection } from "./landing/ResearchSection";
import { ForClinicsSection } from "./landing/ForClinicsSection";
import { FounderSection } from "./landing/FounderSection";
import { SecuritySection } from "./landing/SecuritySection";
import { FinalCTASection } from "./landing/FinalCTASection";
import { Footer } from "./landing/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <HeroSection />
      <ModalityStrip />
      <ProblemSection />
      <SolutionSection />
      <DashboardSection />
      <HowItWorksSection />
      <ResearchSection />
      <ForClinicsSection />
      <FounderSection />
      <SecuritySection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}

export default Home
