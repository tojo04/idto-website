import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import SEOHead from "../components/SEOHead";
import HeroSection from "../components/solutions/banking_and_nbfcs/HeroSection";
import WhatThisSolvesSection from "../components/solutions/banking_and_nbfcs/WhatThisSolvesSection";
import ProductStackSection from "../components/solutions/banking_and_nbfcs/ProductStackSection";
import UseCasesSection from "../components/solutions/banking_and_nbfcs/UseCasesSection";
import CTASection from "../components/solutions/banking_and_nbfcs/CTASection";

export default function BankingNbfcsSolutionPage() {
  const bookDemo = () => {
    window.dispatchEvent(new Event("idto:open-demo-request-modal"));
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Banking & NBFC Identity Workflows | idto.ai"
        description="Run KYC, CKYC, bank account verification, document checks, and customer intelligence workflows for banks and NBFCs with idto.ai."
        path="/solutions/banking-and-nbfcs"
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
