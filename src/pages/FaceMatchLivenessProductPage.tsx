import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import HeroSection from "../components/FaceMatchLivenessPage/HeroSection";
import ProblemSection from "../components/FaceMatchLivenessPage/ProblemSection";
import VerificationStepsSection from "../components/FaceMatchLivenessPage/VerificationStepsSection";
import IntelligenceSection from "../components/FaceMatchLivenessPage/IntelligenceSection";
import CapabilitiesSection from "../components/FaceMatchLivenessPage/CapabilitiesSection";
import OutcomesSection from "../components/FaceMatchLivenessPage/OutcomesSection";
import TrustSection from "../components/FaceMatchLivenessPage/TrustSection";
import FAQSection from "../components/FaceMatchLivenessPage/FAQSection";
import CTASection from "../components/FaceMatchLivenessPage/CTASection";
import SEOHead from "../components/SEOHead";

export default function FaceMatchLivenessProductPage() {
  const bookDemo = () => {
    window.dispatchEvent(new Event("idto:open-demo-request-modal"));
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Face Match & Liveness Check API | idto.ai"
        description="Compare a live selfie with an identity document photo and receive face match decisions, similarity scores, liveness checks and quality signals in real time."
        path="/products/face-match-liveness"
      />
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <VerificationStepsSection />
        <IntelligenceSection />
        <CapabilitiesSection />
        <OutcomesSection />
        <TrustSection />
        <FAQSection />
        <CTASection />
      </main>
      <FooterSection bookDemo={bookDemo} />
    </div>
  );
}
