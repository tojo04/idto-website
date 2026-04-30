import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import HeroSection from "../components/CKYCPage/HeroSection";
import PainPointsSection from "../components/CKYCPage/PainPointsSection";
import GoLiveSection from "../components/CKYCPage/GoLiveSection";
import ImpactMetricsSection from "../components/CKYCPage/ImpactMetricsSection";
import FAQSection from "../components/CKYCPage/FAQSection";
import CTASection from "../components/CKYCPage/CTASection";
import SEOHead from "../components/SEOHead";

export default function CKYCProductPage() {
  const bookDemo = () => {
    window.open("https://cal.com/adityaskx-idto/30min", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="CKYC API — Central KYC Registry Integration | idto.ai"
        description="Pull and push CKYC records via a single API. Instant customer onboarding for fintechs, NBFCs, and banks in India. RBI-aligned, DPDP-compliant."
        path="/products/CKYC"
      />
      <Header />

      <main>
        <HeroSection />
        <PainPointsSection />
        <GoLiveSection />
        <ImpactMetricsSection />
        <FAQSection />
        <CTASection />
      </main>

      <FooterSection bookDemo={bookDemo} />
    </div>
  );
}
