import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import SEOHead from "../components/SEOHead";
import HeroSection from "../components/solutions/social_and_community/HeroSection";
import WhatThisSolvesSection from "../components/solutions/social_and_community/WhatThisSolvesSection";
import ProductStackSection from "../components/solutions/social_and_community/ProductStackSection";
import UseCasesSection from "../components/solutions/social_and_community/UseCasesSection";
import CTASection from "../components/solutions/social_and_community/CTASection";

export default function SocialCommunityPlatformsSolutionPage() {
  const bookDemo = () => {
    window.dispatchEvent(new Event("idto:open-demo-request-modal"));
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Social & Community Trust Workflows | idto.ai"
        description="Reduce fake accounts, duplicate profiles, abuse, unsafe payouts, and trust gaps across user-generated platforms with idto.ai."
        path="/solutions/social-and-community-platforms"
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
