import FAQSection from "../UI/FAQSection";
import questionMarkImage from "../../assets/question_mark.png";

const faqs = [
  {
    question: "Can we customize workflows without heavy engineering?",
    answer:
      "Yes.\nUse pre-built industry templates or configure workflows via dashboard.\nFor advanced use cases, our API supports full rule-based customization.",
  },
  {
    question: "What if we are not satisfied or idto isn't the right fit?",
    answer:
      "No lock-in, no long-term contracts. We believe in earning your business every month. If it's not working, you're free to move — we'll even help with the transition.",
  },
  {
    question: "How is idto different from other verification vendors?",
    answer:
      "We're not just an API provider. idto acts as your identity consultant — designing the right verification stack, managing multi-partner orchestration, and optimizing for cost, success rates, and compliance.",
  },
  {
    question: "How do you ensure DPDP compliance?",
    answer:
      "All data processing follows DPDP guidelines. We offer consent management, data minimization, purpose limitation, and full audit trails. Your data is encrypted with 256-bit TLS and never stored beyond what's needed.",
  },
  {
    question: "How are you offering enterprise pricing to startups?",
    answer:
      "By aggregating volume across our client base and leveraging multi-partner pricing. You get enterprise-grade rates from day one — no minimums or prepaid wallet requirements.",
  },
  {
    question: "Does using multiple partners increase cost?",
    answer:
      "No. Our intelligent routing finds the best-cost partner for each verification. In most cases, multi-partner orchestration actually reduces your per-verification cost.",
  },
  {
    question: "How long does it take to go live?",
    answer:
      "Most teams go live in under a week. Our pre-built workflows, SDKs, and sandbox environment make it fast. Enterprise deployments with custom rules typically take 2-3 weeks.",
  },
  {
    question: "Can we keep our existing verification partners?",
    answer:
      "Absolutely. Bring your own partners and rates — we'll integrate them into your workflow alongside our partner network. One dashboard, unified reporting, zero disruption.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "Dedicated support with direct access to identity experts. Priority Slack/email channels, integration guidance, and continuous optimization recommendations.",
  },
  {
    question: "Do you support global verification?",
    answer:
      "Yes. We cover 190+ countries with document verification, biometric checks, and global AML screening. All through a single integration.",
  },
  {
    question: "What happens during partner downtime?",
    answer:
      "Our intelligent fallback system automatically switches to an alternate partner in real-time. You get zero downtime and consistent success rates regardless of individual partner issues.",
  },
  {
    question: "Are you just an aggregator?",
    answer:
      "No. We build proprietary orchestration, fallback logic, compliance layers, and workflow automation on top of partner APIs. We're a platform, not a proxy.",
  },
];

export default function LandingFAQSection() {
  return (
    <FAQSection
      faqs={faqs}
      subtitle="From onboarding to verification – here's what you need to know."
      questionMarkImage={questionMarkImage}
    />
  );
}
