import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import SEOHead from "../components/SEOHead";
import HeroSection from "../components/solutions/gig_economy/HeroSection";
import WhatThisSolvesSection from "../components/solutions/gig_economy/WhatThisSolvesSection";
import ProductStackSection from "../components/solutions/gig_economy/ProductStackSection";
import UseCasesSection from "../components/solutions/gig_economy/UseCasesSection";
import CTASection from "../components/solutions/gig_economy/CTASection";

export default function GigEconomySolutionPage() {
  const bookDemo = () => {
    window.dispatchEvent(new Event("idto:open-demo-request-modal"));
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Gig Economy Verification Workflows | idto.ai"
        description="Verify gig workers, documents, bank accounts, face, and contactability quickly with idto.ai."
        path="/solutions/gig-economy"
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
