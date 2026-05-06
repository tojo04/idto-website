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
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Can we customize workflows without heavy engineering?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Use pre-built industry templates or configure workflows via dashboard. For advanced use cases, our API supports full rule-based customization."
              }
            },
            {
              "@type": "Question",
              "name": "What if we are not satisfied or idto isn't the right fit?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No lock-in, no long-term contracts. We believe in earning your business every month. If it's not working, you're free to move — we'll even help with the transition."
              }
            },
            {
              "@type": "Question",
              "name": "How is idto different from other verification vendors?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We're not just an API provider. idto acts as your identity consultant — designing the right verification stack, managing multi-partner orchestration, and optimizing for cost, success rates, and compliance."
              }
            },
            {
              "@type": "Question",
              "name": "How do you ensure DPDP compliance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All data processing follows DPDP guidelines. We offer consent management, data minimization, purpose limitation, and full audit trails. Your data is encrypted with 256-bit TLS and never stored beyond what's needed."
              }
            },
            {
              "@type": "Question",
              "name": "How are you offering enterprise pricing to startups?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "By aggregating volume across our client base and leveraging multi-partner pricing. You get enterprise-grade rates from day one — no minimums or prepaid wallet requirements."
              }
            },
            {
              "@type": "Question",
              "name": "Does using multiple partners increase cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Our intelligent routing finds the best-cost partner for each verification. In most cases, multi-partner orchestration actually reduces your per-verification cost."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to go live?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most teams go live in under a week. Our pre-built workflows, SDKs, and sandbox environment make it fast. Enterprise deployments with custom rules typically take 2-3 weeks."
              }
            },
            {
              "@type": "Question",
              "name": "Can we keep our existing verification partners?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. Bring your own partners and rates — we'll integrate them into your workflow alongside our partner network. One dashboard, unified reporting, zero disruption."
              }
            },
            {
              "@type": "Question",
              "name": "What kind of support do you provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dedicated support with direct access to identity experts. Priority Slack/email channels, integration guidance, and continuous optimization recommendations."
              }
            },
            {
              "@type": "Question",
              "name": "Do you support global verification?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We cover 190+ countries with document verification, biometric checks, and global AML screening. All through a single integration."
              }
            },
            {
              "@type": "Question",
              "name": "What happens during partner downtime?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our intelligent fallback system automatically switches to an alternate partner in real-time. You get zero downtime and consistent success rates regardless of individual partner issues."
              }
            },
            {
              "@type": "Question",
              "name": "Are you just an aggregator?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. We build proprietary orchestration, fallback logic, compliance layers, and workflow automation on top of partner APIs. We're a platform, not a proxy."
              }
            }
          ]
        })}</script>
      </Helmet>
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
