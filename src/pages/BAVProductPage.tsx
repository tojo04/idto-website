import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import HeroSection from "../components/BAVPage/HeroSection";
import PainPointsSection from "../components/BAVPage/PainPointsSection";
import JourneysSection from "../components/BAVPage/JourneysSection";
import BAVSuiteSection from "../components/BAVPage/BAVSuiteSection";
import BusinessPreferenceSection from "../components/BAVPage/BusinessPreferenceSection";
import HowItWorksSection from "../components/BAVPage/HowItWorksSection";
import ImpactMetricsSection from "../components/BAVPage/ImpactMetricsSection";
import HighImpactSection from "../components/BAVPage/HighImpactSection";
import FAQSection from "../components/BAVPage/FAQSection";
import CTASection from "../components/BAVPage/CTASection";

export default function BAVProductPage() {
  const bookDemo = () => {
    window.open("https://cal.com/adityaskx-idto/30min", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection />
        <JourneysSection />
        <BAVSuiteSection />
        <BusinessPreferenceSection />
        <HowItWorksSection />
        <ImpactMetricsSection />
        <HighImpactSection />
        <FAQSection />
        <CTASection />
      </main>
      <FooterSection bookDemo={bookDemo} />
    </div>
  );
}
