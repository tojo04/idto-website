import { Helmet } from "react-helmet-async";
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
                  "name": "Banking & NBFCs",
                  "item": "https://idto.ai/solutions/banking-and-nbfcs"
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
