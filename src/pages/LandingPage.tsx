import Header from "../components/LandingPage/Header";
import HeroSection from "../components/LandingPage/HeroSection";
import ProblemsSection from "../components/LandingPage/ProblemsSection";
import WorkflowsSection from "../components/LandingPage/WorkflowsSection";
import WhyChooseSection from "../components/LandingPage/WhyChooseSection";
import SingleApiSection from "../components/LandingPage/SingleApiSection";
import IndustriesSection from "../components/LandingPage/IndustriesSection";
import BlogSection from "../components/LandingPage/BlogSection";
import FAQSection from "../components/LandingPage/FAQSection";
import CTASection from "../components/LandingPage/CTASection";
import FooterSection from "../components/LandingPage/FooterSection";
import SEOHead from "../components/SEOHead";

export default function LandingPage() {
  const bookDemo = () => {
    window.open("https://cal.com/adityaskx-idto/30min", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Identity Verification Platform — KYC, KYB & Fraud API | idto.ai"
        description="One API for KYC, KYB, and employee verification. AI-powered fraud prevention with global orchestration. DPDP-compliant. Book a demo with idto.ai today."
        path="/"
      />
      <Header />

      <main>
        <HeroSection bookDemo={bookDemo} />
        <ProblemsSection />
        <WorkflowsSection />
        <WhyChooseSection />
        <SingleApiSection />
        <IndustriesSection />
        <BlogSection />
        <FAQSection />
        <CTASection bookDemo={bookDemo} />
      </main>

      <FooterSection bookDemo={bookDemo} />
    </div>
  );
}
