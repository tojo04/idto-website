import { Helmet } from "react-helmet-async";
import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import SEOHead from "../components/SEOHead";
import HeroSection from "../components/solutions/fintech_and_lending/HeroSection";
import WhatThisSolvesSection from "../components/solutions/fintech_and_lending/WhatThisSolvesSection";
import ProductStackSection from "../components/solutions/fintech_and_lending/ProductStackSection";
import UseCasesSection from "../components/solutions/fintech_and_lending/UseCasesSection";
import CTASection from "../components/solutions/fintech_and_lending/CTASection";

export default function FintechLendingSolutionPage() {
  const bookDemo = () => {
    window.dispatchEvent(new Event("idto:open-demo-request-modal"));
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Fintech & Lending Identity Workflows | idto.ai"
        description="Build fintech and lending onboarding, borrower risk, CKYC, DigiLocker, mobile intelligence, and account verification workflows with idto.ai."
        path="/solutions/fintech-and-lending"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://idto.ai"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Solutions"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Fintech & Lending",
                  "item": "https://idto.ai/solutions/fintech-and-lending"
                }
              ]
            }
          ]
        })}</script>
      </Helmet>
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
