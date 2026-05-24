import { Helmet } from "react-helmet-async";
import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import SEOHead from "../components/SEOHead";
import HeroSection from "../components/solutions/insurance/HeroSection";
import WhatThisSolvesSection from "../components/solutions/insurance/WhatThisSolvesSection";
import ProductStackSection from "../components/solutions/insurance/ProductStackSection";
import UseCasesSection from "../components/solutions/insurance/UseCasesSection";
import CTASection from "../components/solutions/insurance/CTASection";

export default function InsuranceSolutionPage() {
  const bookDemo = () => {
    window.open("https://cal.com/adityaskx-idto/30min", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Insurance Verification Workflows | idto.ai"
        description="Build insurance verification workflows for policy onboarding, CKYC, claims payout validation, customer reachability, and renewals with idto.ai."
        path="/solutions/insurance"
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
                  "name": "Insurance",
                  "item": "https://idto.ai/solutions/insurance"
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
