import FAQSection from "../UI/FAQSection";
import questionMarkImage from "../../assets/product_pages/DIGILOCKER/question_mark_faq_section.webp";

const faqs = [
  {
    question: "What is IDTO Flow?",
    answer:
      "IDTO Flow is a single SDK that lets you launch fully branded identity verification journeys - KYC, KYB, employee, seller, driver, fraud and global - without stitching together providers, screens and edge cases.",
  },
  {
    question: "How quickly can we go live?",
    answer:
      "Teams can start from pre-built workflows and go live quickly after configuring branding, checks, business rules and provider routing.",
  },
  {
    question: "Can we customize the workflow?",
    answer:
      "Yes. You can customize branding, field order, consent screens, workflow steps, fallback paths and review logic.",
  },
  {
    question: "Can we use our existing providers?",
    answer:
      "Yes. IDTO Flow can work with IDTO providers, your existing providers or a hybrid setup.",
  },
  {
    question: "How do provider fallbacks work?",
    answer:
      "Fallbacks can retry failed checks, switch providers and route exceptions based on your configured rules and customer context.",
  },
  {
    question: "Can workflows be optimized after launch?",
    answer:
      "Yes. You can monitor drop-offs, verification outcomes and provider performance, then adjust the workflow without rebuilding the front end.",
  },
];

export default function IDTOFlowFAQSection() {
  return (
    <FAQSection
      faqs={faqs}
      subtitle="Everything you need to know about launching identity workflows with IDTO Flow."
      questionMarkImage={questionMarkImage}
    />
  );
}
