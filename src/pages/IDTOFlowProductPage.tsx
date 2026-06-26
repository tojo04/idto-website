import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import HeroSection from "../components/IDTOFlowPage/HeroSection";
import PainPointsSection from "../components/IDTOFlowPage/PainPointsSection";
import WorkflowBuildSection from "../components/IDTOFlowPage/WorkflowBuildSection";
import ComplexitySection from "../components/IDTOFlowPage/ComplexitySection";
import WorkflowLibrarySection from "../components/IDTOFlowPage/WorkflowLibrarySection";
import ImpactMetricsSection from "../components/IDTOFlowPage/ImpactMetricsSection";
import FAQSection from "../components/IDTOFlowPage/FAQSection";
import CTASection from "../components/IDTOFlowPage/CTASection";
import SEOHead from "../components/SEOHead";

export default function IDTOFlowProductPage() {
  const bookDemo = () => {
    window.dispatchEvent(new Event("idto:open-demo-request-modal"));
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="IDTO Flow - Identity Workflow SDK | idto.ai"
        description="Launch branded KYC, KYB, employee, seller, driver, fraud and global identity workflows with one configurable SDK."
        path="/products/idto-flow"
      />
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection />
        <WorkflowBuildSection />
        <ComplexitySection />
        <WorkflowLibrarySection />
        <ImpactMetricsSection />
        <FAQSection />
        <CTASection />
      </main>
      <FooterSection bookDemo={bookDemo} />
    </div>
  );
}
