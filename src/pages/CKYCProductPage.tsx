import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import HeroSection from "../components/CKYCPage/HeroSection";
import PainPointsSection from "../components/CKYCPage/PainPointsSection";
import GoLiveSection from "../components/CKYCPage/GoLiveSection";
import ImpactMetricsSection from "../components/CKYCPage/ImpactMetricsSection";
import FAQSection from "../components/CKYCPage/FAQSection";
import CTASection from "../components/CKYCPage/CTASection";
import SEOHead from "../components/SEOHead";
import { Helmet } from "react-helmet-async";

export default function CKYCProductPage() {
  const bookDemo = () => {
    window.open("https://cal.com/adityaskx-idto/30min", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="CKYC API — Central KYC Registry Integration | idto.ai"
        description="Pull and push CKYC records via a single API. Instant customer onboarding for fintechs, NBFCs, and banks in India. RBI-aligned, DPDP-compliant."
        path="/products/CKYC"
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
                  "name": "Central KYC Registry API",
                  "item": "https://idto.ai/products/CKYC"
                }
              ]
            },
            {
              "@type": "Product",
              "name": "Central KYC Registry API",
              "description": "Instant CKYC search, download and upload for RBI-regulated entities",
              "url": "https://idto.ai/products/CKYC",
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
        <GoLiveSection />
        <ImpactMetricsSection />
        <FAQSection />
        <CTASection />
      </main>

      <FooterSection bookDemo={bookDemo} />
    </div>
  );
}
