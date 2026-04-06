import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import questionMark from "../../assets/product_pages/DIGILOCKER/question_mark_faq_section.png";

const faqItems = [
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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white rounded-[40px] lg:rounded-[112px] px-5 py-10 sm:px-10 sm:py-10 md:px-16 md:py-16 lg:px-[112.5px] lg:py-[112.5px] relative overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-[67.5px] items-start">
          {/* Left side: title + question mark */}
          <div className="flex-1 flex flex-col gap-[18px]">
            <div>
              <h2 className="font-heading text-[32px] md:text-[42px] lg:text-[56px] leading-[1.3] text-black text-center lg:text-left">
                Got Questions?
                <br />
                We've Got{" "}
                <span className="text-primary">Answers</span>
              </h2>
            </div>
            <p className="text-[18px] leading-[1.5] text-black/60 text-center lg:text-left">
              Everything you need to know about DigiLocker with idto.ai
            </p>

            {/* Question mark image with blur effect — hidden on mobile */}
            <div className="hidden lg:block relative mt-8">
              <div className="absolute -bottom-8 left-[100px] w-[252px] h-[75px] -rotate-[14deg] opacity-80 blur-[62px]"
                style={{
                  background: "linear-gradient(89deg, rgb(0, 130, 238) 0.6%, rgb(0, 51, 209) 49%, rgb(75, 146, 253) 103%)"
                }}
              />
              <img
                src={questionMark}
                alt="Question mark illustration"
                className="relative w-full max-w-[450px] h-auto"
              />
            </div>
          </div>

          {/* Right side: FAQ accordion */}
          <div className="w-full lg:w-[634px] flex flex-col gap-[11px] shrink-0">
            {faqItems.map((faq, index) => (
              <div
                key={faq.question}
                className="bg-white border-[1.66px] border-black/10 rounded-[20px] lg:rounded-[27px] shrink-0"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 lg:px-10 lg:py-8 text-left cursor-pointer gap-4 lg:gap-5"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="font-heading text-[16px] lg:text-[20px] leading-normal tracking-[-0.02em] text-black">
                    {faq.question}
                  </h3>
                  <span
                    className="relative w-6 h-6 lg:w-8 lg:h-8 shrink-0 flex items-center justify-center text-black select-none"
                    aria-hidden="true"
                  >
                    <span className="absolute h-[1.2px] w-4 lg:h-[1.4px] lg:w-5 rounded-full bg-current" />
                    <span
                      className={`absolute w-[1.2px] h-4 lg:w-[1.4px] lg:h-5 rounded-full bg-current transition-opacity duration-200 ${
                        openIndex === index ? "opacity-0" : "opacity-100"
                      }`}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 lg:px-10 lg:pb-8 text-sm lg:text-base text-black/60 leading-normal tracking-[-0.02em]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
