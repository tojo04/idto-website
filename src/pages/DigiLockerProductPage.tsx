import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import HeroSection from "../components/DigiLockerPage/HeroSection";
import PainPointsSection from "../components/DigiLockerPage/PainPointsSection";
import CompliantJourneysSection from "../components/DigiLockerPage/CompliantJourneysSection";
import IntegrationOptionsSection from "../components/DigiLockerPage/IntegrationOptionsSection";
import OrchestrationSection from "../components/DigiLockerPage/OrchestrationSection";
import ImpactMetricsSection from "../components/DigiLockerPage/ImpactMetricsSection";
import FAQSection from "../components/DigiLockerPage/FAQSection";
import CTASection from "../components/DigiLockerPage/CTASection";
import SEOHead from "../components/SEOHead";
import { Helmet } from "react-helmet-async";

export default function DigiLockerProductPage() {
  const bookDemo = () => {
    window.open("https://cal.com/adityaskx-idto/30min", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="DigiLocker 3.0 API — Document Verification &amp; Fetch | idto.ai"
        description="Pull DigiLocker-issued documents and verify identities with one API. UIDAI-aligned, government-grade source-of-truth with audit logs."
        path="/products/digilocker-3.0"
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
                  "name": "Products"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "DigiLocker 3.0 Integration API",
                  "item": "https://idto.ai/products/digilocker-3.0"
                }
              ]
            },
            {
              "@type": "Product",
              "name": "DigiLocker 3.0 Integration API",
              "description": "Aadhaar-seeded document fetch, eSign, and DigiLocker 3.0 integration",
              "url": "https://idto.ai/products/digilocker-3.0",
              "brand": {
                "@type": "Brand",
                "name": "idto.ai"
              }
            }
          ]
        })}</script>
      </Helmet>
      <Header />

      <main>
        <HeroSection />
        <PainPointsSection />
        <CompliantJourneysSection />
        <IntegrationOptionsSection />
        <OrchestrationSection />
        <ImpactMetricsSection />
        <FAQSection />
        <CTASection />
      </main>

      <FooterSection bookDemo={bookDemo} />
    </div>
  );
}