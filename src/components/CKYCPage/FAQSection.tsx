import FAQSection from "../UI/FAQSection";
import questionMarkImage from "../../assets/product_pages/DIGILOCKER/question_mark_faq_section.png";

const faqs = [
  {
    question: "What CKYC flows does idto.ai support?",
    answer:
      "We support the complete CKYC lifecycle - Search, Download, Create, and Update.",
  },
  {
    question: "What inputs can be used for CKYC Search?",
    answer:
      "CKYC records can be searched using mobile number, PAN, CKYC ID, Aadhaar details, passport, voter ID, driving licence, and more.",
  },
  {
    question: "Do you help with CERSAI onboarding?",
    answer:
      "Yes. We support onboarding, setup, testing, and go-live, helping you move faster to production.",
  },
  {
    question: "Is idto.ai only an API provider?",
    answer:
      "No. We help operationalize CKYC end to end - from onboarding to production, not just API access.",
  },
  {
    question: "Can CKYC reduce onboarding cost?",
    answer:
      "Yes. CKYC helps avoid repeated verification flows for users with existing records, reducing cost per onboarding.",
  },
  {
    question: "Does this reduce DigiLocker dependency?",
    answer:
      "Yes. For users with valid CKYC records, you can reduce reliance on DigiLocker-based flows.",
  },
  {
    question: "Who is this built for?",
    answer:
      "Lenders, NBFCs, fintechs, insurers, and other regulated businesses across RBI, IRDAI, SEBI, and more.",
  },
  {
    question: "Do you provide post-live support?",
    answer:
      "Yes. We provide ongoing support even after go-live to ensure smooth operations.",
  },
];

export default function CKYCFAQSection() {
  return (
    <FAQSection
      faqs={faqs}
      subtitle="Everything you need to know about CKYC with idto.ai"
      questionMarkImage={questionMarkImage}
    />
  );
}
