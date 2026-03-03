import { useState } from "react";
import Header from "../components/LandingPage/Header";
import HeroSection from "../components/LandingPage/HeroSection";
import ProblemsSection from "../components/LandingPage/ProblemsSection";
import WorkflowsSection from "../components/LandingPage/WorkflowsSection";
import WhyChooseSection from "../components/LandingPage/WhyChooseSection";
import IndustriesSection from "../components/LandingPage/IndustriesSection";
import BlogSection from "../components/LandingPage/BlogSection";
import FAQSection from "../components/LandingPage/FAQSection";
import CTASection from "../components/LandingPage/CTASection";
import FooterSection from "../components/LandingPage/FooterSection";

export default function LandingPage() {
  const [_demoOpen, setDemoOpen] = useState(false);

  const bookDemo = () => {
    // For now, open Calendly or toggle a modal
    setDemoOpen(true);
    window.open("https://calendly.com/idto", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <Header bookDemo={bookDemo} />

      <main>
        <HeroSection bookDemo={bookDemo} />
        <ProblemsSection />
        <WorkflowsSection />
        <WhyChooseSection />
        <IndustriesSection />
        <BlogSection />
        <FAQSection />
        <CTASection bookDemo={bookDemo} />
      </main>

      <FooterSection bookDemo={bookDemo} />
    </div>
  );
}
