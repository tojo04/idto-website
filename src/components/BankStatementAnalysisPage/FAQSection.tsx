import FAQSection from "../UI/FAQSection";
import questionMarkImage from "../../assets/product_pages/DIGILOCKER/question_mark_faq_section.webp";

const faqs = [
  {
    question: "What does Bank Statement Analysis extract?",
    answer:
      "It extracts account details, statement duration, transaction-level debits and credits, balances, salary credits, obligations, cash-flow patterns and risk signals.",
  },
  {
    question: "Can it work with scanned bank statement PDFs?",
    answer:
      "Yes. The workflow is designed for digital or scanned statements, with OCR extraction and structured transaction output.",
  },
  {
    question: "Does it detect fraud or tampering?",
    answer:
      "Yes. It can surface tamper confidence, balance mismatches, suspicious withdrawals, negative balances and irregular salary patterns.",
  },
  {
    question: "Who is this product built for?",
    answer:
      "It is built for lenders, NBFCs, fintechs, credit providers and risk teams that need underwriting-ready insights from uploaded statements.",
  },
  {
    question: "Can the output plug into an underwriting workflow?",
    answer:
      "Yes. Structured outputs can be consumed through your workflow, API or dashboard to support faster credit decisions.",
  },
];

export default function BankStatementAnalysisFAQSection() {
  return (
    <FAQSection
      faqs={faqs}
      subtitle="Everything you need to know about Bank Statement Analysis with idto.ai"
      questionMarkImage={questionMarkImage}
    />
  );
}
