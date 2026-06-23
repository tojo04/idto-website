import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import SEOHead from "../components/SEOHead";
import HeroSection from "../components/solutions/bgv/HeroSection";
import WhatThisSolvesSection from "../components/solutions/bgv/WhatThisSolvesSection";
import ProductStackSection from "../components/solutions/bgv/ProductStackSection";
import UseCasesSection from "../components/solutions/bgv/UseCasesSection";
import CTASection from "../components/solutions/bgv/CTASection";

export default function BGVSolutionPage() {
  const bookDemo = () => {
    window.dispatchEvent(new Event("idto:open-demo-request-modal"));
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Employment & Candidate Verification Workflows | idto.ai"
        description="Verify candidates, documents, education records, bank accounts, and contactability with one configurable BGV stack from idto.ai."
        path="/solutions/background-verification"
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
