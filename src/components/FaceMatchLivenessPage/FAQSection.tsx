import FAQSection from "../UI/FAQSection";
import questionMarkImage from "../../assets/product_pages/DIGILOCKER/question_mark_faq_section.webp";

const faqs = [
  {
    question: "What does Face Match & Liveness Check verify?",
    answer:
      "It compares the submitted selfie with the identity document photograph and returns a face match decision, similarity score, liveness outcome and quality signals.",
  },
  {
    question: "Can it work with Aadhaar, PAN, passport or driving licence photos?",
    answer:
      "Yes. The reference photo can be extracted from Aadhaar, PAN, passport, driving licence or another supported identity document.",
  },
  {
    question: "Does it detect poor-quality selfies?",
    answer:
      "Yes. It checks for blur, low lighting, face alignment, occlusion, closed eyes and other capture-quality issues.",
  },
  {
    question: "Can thresholds be configured?",
    answer:
      "Yes. Businesses can tune match thresholds and verification policies based on their onboarding and risk requirements.",
  },
  {
    question: "Who is this product built for?",
    answer:
      "It is built for fintechs, lending platforms, marketplaces, insurance companies and regulated businesses that need stronger digital onboarding.",
  },
];

export default function FaceMatchLivenessFAQSection() {
  return (
    <FAQSection
      faqs={faqs}
      subtitle="Everything you need to know about Face Match & Liveness with idto.ai"
      questionMarkImage={questionMarkImage}
    />
  );
}
