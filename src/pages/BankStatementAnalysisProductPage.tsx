import Header from "../components/LandingPage/Header";
import FooterSection from "../components/LandingPage/FooterSection";
import HeroSection from "../components/BankStatementAnalysisPage/HeroSection";
import ProcessSection from "../components/BankStatementAnalysisPage/ProcessSection";
import FinancialIntelligenceSection from "../components/BankStatementAnalysisPage/FinancialIntelligenceSection";
import CapabilitiesSection from "../components/BankStatementAnalysisPage/CapabilitiesSection";
import FinancialViewSection from "../components/BankStatementAnalysisPage/FinancialViewSection";
import TrustSection from "../components/BankStatementAnalysisPage/TrustSection";
import UseCasesSection from "../components/BankStatementAnalysisPage/UseCasesSection";
import FAQSection from "../components/BankStatementAnalysisPage/FAQSection";
import CTASection from "../components/BankStatementAnalysisPage/CTASection";
import SEOHead from "../components/SEOHead";

export default function BankStatementAnalysisProductPage() {
  const bookDemo = () => {
    window.dispatchEvent(new Event("idto:open-demo-request-modal"));
  };

  return (
    <div className="min-h-screen bg-gray-bg font-body text-dark">
      <SEOHead
        title="Bank Statement Analysis API - Underwriting Insights | idto.ai"
        description="Convert bank statement PDFs into structured transaction data, cash-flow analysis, income insights, obligations and fraud signals for underwriting."
        path="/products/bank-statement-analysis"
      />
      <Header />
      <main>
        <HeroSection />
        <ProcessSection />
        <FinancialIntelligenceSection />
        <CapabilitiesSection />
        <FinancialViewSection />
        <TrustSection />
        <UseCasesSection />
        <FAQSection />
        <CTASection />
      </main>
      <FooterSection bookDemo={bookDemo} />
    </div>
  );
}
