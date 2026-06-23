import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import SEOHead from "../components/SEOHead";
import HeroSection from "../components/solutions/kyb/HeroSection";
import WhatThisSolvesSection from "../components/solutions/kyb/WhatThisSolvesSection";
import ProductStackSection from "../components/solutions/kyb/ProductStackSection";
import UseCasesSection from "../components/solutions/kyb/UseCasesSection";
import CTASection from "../components/solutions/kyb/CTASection";

export default function KYBSolutionPage() {
  const bookDemo = () => {
    window.dispatchEvent(new Event("idto:open-demo-request-modal"));
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Merchant Onboarding & KYB Workflows | idto.ai"
        description="Verify businesses, owners, bank accounts, documents, and risk signals faster with one configurable KYB and merchant onboarding layer."
        path="/solutions/merchant-onboarding-kyb"
      />
      <Header />

      <main>
        <HeroSection />
        <WhatThisSolvesSection />
        <ProductStackSection />
        <UseCasesSection />
        <CTASection />
      </main>

      <FooterSection bookDemo={bookDemo} />
    </div>
  );
}
