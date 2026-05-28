import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import HeroSection from "../components/MobileIntelligencePage/HeroSection";
import PainPointsSection from "../components/MobileIntelligencePage/PainPointsSection";
import IntelligenceWorkflowsSection from "../components/MobileIntelligencePage/IntelligenceWorkflowsSection";
import OrchestrationSection from "../components/MobileIntelligencePage/OrchestrationSection";
import CustomerWorkflowsSection from "../components/MobileIntelligencePage/CustomerWorkflowsSection";
import ImpactMetricsSection from "../components/MobileIntelligencePage/ImpactMetricsSection";
import FAQSection from "../components/MobileIntelligencePage/FAQSection";
import CTASection from "../components/MobileIntelligencePage/CTASection";
import SEOHead from "../components/SEOHead";
import { Helmet } from "react-helmet-async";

export default function MobileIntelligenceProductPage() {
  const bookDemo = () => {
    window.dispatchEvent(new Event("idto:open-demo-request-modal"));
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Mobile Intelligence API — Identity &amp; Fraud Signals | idto.ai"
        description="Verify identity and detect fraud using mobile-derived signals. Network, device, and behavioural intelligence in one API for fintech onboarding."
        path="/products/mobile-intelligence"
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
                  "name": "Mobile Intelligence API",
                  "item": "https://idto.ai/products/mobile-intelligence"
                }
              ]
            },
            {
              "@type": "Product",
              "name": "Mobile Intelligence API",
              "description": "SIM swap detection, device intelligence and mobile number verification",
              "url": "https://idto.ai/products/mobile-intelligence",
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
        <IntelligenceWorkflowsSection />
        <OrchestrationSection />
        <CustomerWorkflowsSection />
        <ImpactMetricsSection />
        <FAQSection />
        <CTASection />
      </main>
      <FooterSection bookDemo={bookDemo} />
    </div>
  );
}
