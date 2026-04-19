import FAQSection from "../UI/FAQSection";
import questionMarkImage from "../../assets/product_pages/DIGILOCKER/question_mark_faq_section.png";

const faqs = [
  {
    question: "What is Mobile Intelligence?",
    answer:
      "Mobile Intelligence helps businesses extract richer signals from phone numbers — including identity context, fraud risk indicators, reachability status, and activity patterns — to improve onboarding, fraud detection, and recovery workflows.",
  },
  {
    question: "How is this different from basic phone verification?",
    answer:
      "Basic phone verification only confirms access to a number. Mobile Intelligence goes deeper — enriching profiles, detecting risk signals, checking reachability, and powering downstream decisioning across workflows.",
  },
  {
    question: "Can this be used beyond onboarding?",
    answer:
      "Yes. Mobile Intelligence is useful across fraud operations, collections, support prioritization, marketplace trust, and background verification — anywhere number-level signals can improve decisions.",
  },
  {
    question: "Do you support reachability and call activity checks?",
    answer:
      "Yes. We now support reachability signals and call activity data to help teams assess whether a number is active, contactable, and recently in use.",
  },
  {
    question: "How do teams integrate this?",
    answer:
      "Teams can integrate through API, SDK, or workflow-based configuration depending on the product setup and use case requirements.",
  },
  {
    question: "Can we use only specific signal layers?",
    answer:
      "Yes. You can start with a focused use case — like profile enrichment or fraud detection — and expand to other layers as needed.",
  },
];

export default function MobileIntelligenceFAQSection() {
  return (
    <FAQSection
      faqs={faqs}
      subtitle="Everything you need to know about Mobile Intelligence with idto.ai"
      questionMarkImage={questionMarkImage}
    />
  );
}
