import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import HeroSection from "../components/MobileIntelligencePage/HeroSection";
import PainPointsSection from "../components/MobileIntelligencePage/PainPointsSection";
import IntelligenceWorkflowsSection from "../components/MobileIntelligencePage/IntelligenceWorkflowsSection";
import OrchestrationSection from "../components/MobileIntelligencePage/OrchestrationSection";
import CustomerWorkflowsSection from "../components/MobileIntelligencePage/CustomerWorkflowsSection";
import ImpactMetricsSection from "../components/MobileIntelligencePage/ImpactMetricsSection";
import FAQSection from "../components/MobileIntelligencePage/FAQSection";
import CTASection from "../components/MobileIntelligencePage/CTASection";
import SEOHead from "../components/SEOHead";

export default function MobileIntelligenceProductPage() {
  const bookDemo = () => {
    window.open("https://cal.com/idto-ai/30min", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Mobile Intelligence API — Identity &amp; Fraud Signals | idto.ai"
        description="Verify identity and detect fraud using mobile-derived signals. Network, device, and behavioural intelligence in one API for fintech onboarding."
        path="/products/mobile-intelligence"
      />
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection />
        <IntelligenceWorkflowsSection />
        <OrchestrationSection />
        <CustomerWorkflowsSection />
        <ImpactMetricsSection />
        <FAQSection />
        <CTASection />
      </main>
      <FooterSection bookDemo={bookDemo} />
    </div>
  );
}
