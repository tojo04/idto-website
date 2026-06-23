import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import SEOHead from "../components/SEOHead";
import {
  CONTACT_DEMO_FORM_ID,
  HeroSection,
} from "../components/ContactUs";

export default function ContactUs() {
  const scrollToForm = () => {
    document
      .getElementById(CONTACT_DEMO_FORM_ID)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Contact Us | Book a Demo | idto.ai"
        description="Contact idto.ai to book a product demo, discuss KYC, KYB, fraud prevention, onboarding workflows, APIs, pricing, and compliance."
        path="/contact-us"
      />
      <Header />

      <main>
        <HeroSection />
      </main>

      <FooterSection bookDemo={scrollToForm} />
    </div>
  );
}
