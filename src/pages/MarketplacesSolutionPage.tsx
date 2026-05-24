import { Helmet } from "react-helmet-async";
import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import SEOHead from "../components/SEOHead";
import HeroSection from "../components/solutions/marketplaces/HeroSection";
import WhatThisSolvesSection from "../components/solutions/marketplaces/WhatThisSolvesSection";
import ProductStackSection from "../components/solutions/marketplaces/ProductStackSection";
import UseCasesSection from "../components/solutions/marketplaces/UseCasesSection";
import CTASection from "../components/solutions/marketplaces/CTASection";

export default function MarketplacesSolutionPage() {
  const bookDemo = () => {
    window.open("https://cal.com/adityaskx-idto/30min", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Marketplace Trust & Verification Workflows | idto.ai"
        description="Verify sellers, buyers, service providers, bank accounts, documents, and contactability for marketplace trust workflows with idto.ai."
        path="/solutions/marketplaces"
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
                  "name": "Marketplaces",
                  "item": "https://idto.ai/solutions/marketplaces"
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
