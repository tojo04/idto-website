import { Helmet } from "react-helmet-async";
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
                  "name": "Gig Economy",
                  "item": "https://idto.ai/solutions/gig-economy"
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
