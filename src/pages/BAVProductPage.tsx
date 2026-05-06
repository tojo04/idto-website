import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import HeroSection from "../components/BAVPage/HeroSection";
import PainPointsSection from "../components/BAVPage/PainPointsSection";
import JourneysSection from "../components/BAVPage/JourneysSection";
import BAVSuiteSection from "../components/BAVPage/BAVSuiteSection";
import BusinessPreferenceSection from "../components/BAVPage/BusinessPreferenceSection";
import HowItWorksSection from "../components/BAVPage/HowItWorksSection";
import ImpactMetricsSection from "../components/BAVPage/ImpactMetricsSection";
import HighImpactSection from "../components/BAVPage/HighImpactSection";
import FAQSection from "../components/BAVPage/FAQSection";
import CTASection from "../components/BAVPage/CTASection";
import SEOHead from "../components/SEOHead";
import { Helmet } from "react-helmet-async";

export default function BAVProductPage() {
  const bookDemo = () => {
    window.open("https://cal.com/adityaskx-idto/30min", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Bank Account Verification API (Penny Drop & Pennyless) | idto.ai"
        description="Verify any Indian bank account in seconds. Penny-drop and pennyless BAV API with NPCI coverage, low TAT, and audit-ready logs. INR 1 per check."
        path="/products/BAV"
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
                  "name": "Products",
                  "item": "https://idto.ai/products"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Bank Account Verification",
                  "item": "https://idto.ai/products/BAV"
                }
              ]
            },
            {
              "@type": "Product",
              "name": "Bank Account Verification",
              "description": "Verify bank accounts via penny-drop and pennyless methods in real-time",
              "url": "https://idto.ai/products/BAV",
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
        <JourneysSection />
        <BAVSuiteSection />
        <BusinessPreferenceSection />
        <HowItWorksSection />
        <ImpactMetricsSection />
        <HighImpactSection />
        <FAQSection />
        <CTASection />
      </main>
      <FooterSection bookDemo={bookDemo} />
    </div>
  );
}
