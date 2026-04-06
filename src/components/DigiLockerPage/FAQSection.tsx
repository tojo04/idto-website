import FAQSection from "../UI/FAQSection";
import questionMarkImage from "../../assets/product_pages/DIGILOCKER/question_mark_faq_section.png";

const faqs = [
  {
    question: "What is DigiLocker 3.0 by idto.ai?",
    answer:
      "It is our DigiLocker suite built to reduce friction, improve conversion, and simplify compliant onboarding.",
  },
  {
    question: "Can you help migrate from OKYC to DigiLocker?",
    answer:
      "Yes. We help teams move from legacy OKYC flows to compliant DigiLocker journeys quickly.",
  },
  {
    question: "What makes this different from a basic DigiLocker API?",
    answer:
      "We support the full journey - login experience, SDK, fallback logic, analytics, and go-live support",
  },
  {
    question: "Do you support pin-less DigiLocker login?",
    answer:
      "Yes. We support lower-friction flows using mobile number and OTP.",
  },
  {
    question: "Do you offer a no-redirection SDK?",
    answer:
      "Yes. Our SDK helps keep users inside your product flow.",
  },
  {
    question: "What happens if DigiLocker fetch fails?",
    answer:
      "Fallback logic can route users through alternate verification journeys like OCR and Face Match.",
  },
  {
    question: "What documents are supported?",
    answer:
      "We support 15+ documents across identity, education, and compliance use cases.",
  },
  {
    question: "How is pricing handled?",
    answer:
      "We support outcome-based pricing, so you pay for successful document fetches",
  },
];

export default function DigiLockerFAQSection() {
  return (
    <FAQSection
      faqs={faqs}
      subtitle="Everything you need to know about DigiLocker with idto.ai"
      questionMarkImage={questionMarkImage}
    />
  );
}
