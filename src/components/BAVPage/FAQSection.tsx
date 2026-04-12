import FAQSection from "../UI/FAQSection";
import questionMarkImage from "../../assets/product_pages/DIGILOCKER/question_mark_faq_section.png";

const faqs = [
  {
    question: "What verification methods does idto.ai support?",
    answer:
      "Penny drop, penniless, hybrid, reverse penny drop, UPI-based verification, cancelled cheque OCR, and IFSC verification.",
  },
  {
    question: "How is idto.ai different from a basic orchestration layer?",
    answer:
      "idto.ai combines orchestration, standardized outputs, clear error codes, analytics, and flexible verification methods in one BAV suite.",
  },
  {
    question: "Can I use my existing partners with idto.ai?",
    answer:
      "Yes. And if you want to add new partners, you can get access through idto.ai as well, since we are already integrated with them.",
  },
  {
    question: "Do I need to build retry and fallback logic myself?",
    answer:
      "No. idto.ai handles routing, retry logic, and fallback behavior.",
  },
  {
    question: "Do you provide standardized responses across providers?",
    answer:
      "Yes. We normalize outputs and error handling across partners.",
  },
  {
    question: "Who is this built for?",
    answer:
      "Lenders, fintechs, payroll businesses, marketplaces, insurers, and payout-heavy platforms.",
  },
  {
    question: "Can I test before full integration?",
    answer:
      "Yes. You can test through dashboard or sandbox before going live.",
  },
  {
    question: "Is this only for large enterprises?",
    answer: "No. It works for startups as well as large businesses.",
  },
];

export default function BAVFAQSection() {
  return (
    <FAQSection
      faqs={faqs}
      subtitle="Everything you need to know about BAV with idto.ai"
      questionMarkImage={questionMarkImage}
    />
  );
}
