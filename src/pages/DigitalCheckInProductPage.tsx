import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import HeroSection from "../components/DigitalCheckInPage/HeroSection";
import PainPointsSection from "../components/DigitalCheckInPage/PainPointsSection";
import CheckInModesSection from "../components/DigitalCheckInPage/CheckInModesSection";
import DocumentFlexibilitySection from "../components/DigitalCheckInPage/DocumentFlexibilitySection";
import ComplianceSection from "../components/DigitalCheckInPage/ComplianceSection";
import ImpactSection from "../components/DigitalCheckInPage/ImpactSection";
import ReturningGuestsSection from "../components/DigitalCheckInPage/ReturningGuestsSection";
import GuestIntelligenceSection from "../components/DigitalCheckInPage/GuestIntelligenceSection";
import MultiPropertySection from "../components/DigitalCheckInPage/MultiPropertySection";
import CTASection from "../components/DigitalCheckInPage/CTASection";
import SEOHead from "../components/SEOHead";

export default function DigitalCheckInProductPage() {
  const bookDemo = () => {
    window.dispatchEvent(new Event("idto:open-demo-request-modal"));
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Digital Check-In for Hotels | idto.ai"
        description="Let hotel guests complete DPDP-ready identity verification before arrival through WhatsApp, SMS, email, or QR code."
        path="/products/digital-check-in"
      />
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection />
        <CheckInModesSection />
        <DocumentFlexibilitySection />
        <ComplianceSection />
        <ImpactSection />
        <ReturningGuestsSection />
        <GuestIntelligenceSection />
        <MultiPropertySection />
        <CTASection />
      </main>
      <FooterSection bookDemo={bookDemo} />
    </div>
  );
}
