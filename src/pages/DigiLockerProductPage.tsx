import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import HeroSection from "../components/DigiLockerPage/HeroSection";
import PainPointsSection from "../components/DigiLockerPage/PainPointsSection";
import CompliantJourneysSection from "../components/DigiLockerPage/CompliantJourneysSection";
import IntegrationOptionsSection from "../components/DigiLockerPage/IntegrationOptionsSection";
import OrchestrationSection from "../components/DigiLockerPage/OrchestrationSection";
import ImpactMetricsSection from "../components/DigiLockerPage/ImpactMetricsSection";
import FAQSection from "../components/DigiLockerPage/FAQSection";
import CTASection from "../components/DigiLockerPage/CTASection";

export default function DigiLockerProductPage() {
  const bookDemo = () => {
    window.open("https://cal.com/adityaskx-idto/30min", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <Header />

      <main>
        <HeroSection />
        <PainPointsSection />
        <CompliantJourneysSection />
        <IntegrationOptionsSection />
        <OrchestrationSection />
        <ImpactMetricsSection />
        <FAQSection />
        <CTASection />
      </main>

      <FooterSection bookDemo={bookDemo} />
    </div>
  );
}