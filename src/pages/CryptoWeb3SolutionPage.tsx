import { Helmet } from "react-helmet-async";
import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import SEOHead from "../components/SEOHead";
import HeroSection from "../components/solutions/crypto_and_web3/HeroSection";
import WhatThisSolvesSection from "../components/solutions/crypto_and_web3/WhatThisSolvesSection";
import ProductStackSection from "../components/solutions/crypto_and_web3/ProductStackSection";
import UseCasesSection from "../components/solutions/crypto_and_web3/UseCasesSection";
import CTASection from "../components/solutions/crypto_and_web3/CTASection";

export default function CryptoWeb3SolutionPage() {
  const bookDemo = () => {
    window.open("https://cal.com/adityaskx-idto/30min", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Crypto & Web3 Verification Workflows | idto.ai"
        description="Build safer crypto and Web3 onboarding, KYC, biometric checks, bank account validation, payout verification, and risk workflows with idto.ai."
        path="/solutions/crypto-and-web3"
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
                  "name": "Crypto & Web3",
                  "item": "https://idto.ai/solutions/crypto-and-web3"
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
