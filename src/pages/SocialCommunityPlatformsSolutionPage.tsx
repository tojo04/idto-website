import { Helmet } from "react-helmet-async";
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
    window.open("https://cal.com/adityaskx-idto/30min", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Social & Community Trust Workflows | idto.ai"
        description="Reduce fake accounts, duplicate profiles, abuse, unsafe payouts, and trust gaps across user-generated platforms with idto.ai."
        path="/solutions/social-and-community-platforms"
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
                  "name": "Social & Community Platforms",
                  "item": "https://idto.ai/solutions/social-and-community-platforms"
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
