import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import questionMarkImage from "../../assets/question_mark.png";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-5 lg:px-37.5 py-12 lg:py-37.5 rounded-[40px] lg:rounded-[150px] bg-gray-bg relative overflow-hidden">
      <div className="max-w-405 mx-auto flex flex-col lg:flex-row gap-8 lg:gap-22.5 lg:items-stretch relative">
        {/* Left — Header Container */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
          className="lg:flex-1 flex flex-col gap-6 relative items-center lg:items-start lg:h-199.5 lg:justify-center"
        >
          {/* Title */}
          <h2 className="font-heading text-[28px] lg:text-[48px] leading-[1.3] text-black text-center lg:text-left">
            Got Questions?
            <br />
            We've Got <span className="text-primary">Answers</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base lg:text-xl text-black/60 leading-normal max-w-132.5 text-center lg:text-left">
            From onboarding to verification – here's what you need to know.
          </p>

          {/* Question mark illustration — desktop only */}
          <div className="hidden lg:flex lg:flex-1 relative overflow-visible pointer-events-none lg:h-[520px] justify-center lg:justify-start items-center lg:items-end w-full lg:-translate-x-[180px]">
            {/* Right fade gradient */}
            <div
              className="absolute right-0 bottom-[12%] w-[58%] h-[47%]"
              style={{
                background:
                  "linear-gradient(270deg, #F6F6F6 0%, rgba(246, 246, 246, 0) 100%)",
              }}
            />
            {/* Blue glow effect */}
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-[15%] w-[60%] h-[18%] lg:left-[29%] lg:translate-x-0 lg:bottom-[22%] lg:w-[52%] opacity-[0.78] blur-[62px] -rotate-[14.25deg] lg:-translate-y-[50px]"
              style={{
                backgroundImage:
                  "linear-gradient(88.7deg, #0082EE 0.62%, #0033D1 48.86%, #4B92FD 103.16%)",
              }}
            />
            {/* Question mark image */}
            <img
              src={questionMarkImage}
              alt=""
              className="relative w-[85%] lg:w-[150%] lg:max-w-[900px] h-auto object-contain -rotate-[0.26deg] lg:-translate-y-[50px]"
            />
          </div>
        </motion.div>

        {/* Right — FAQ Accordion (scrollable container) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.15)}
          className="w-full lg:flex-1 lg:max-w-211.75 h-[420px] lg:h-199.5 overflow-y-auto flex flex-col gap-2.75"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(0,0,0,0.15) transparent",
          }}
        >
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className="bg-white border-[1.66px] border-black/10 rounded-[20px] lg:rounded-[27px] shrink-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between px-4 py-4 lg:px-10 lg:py-10 text-left cursor-pointer gap-4 lg:gap-5"
                aria-expanded={openIndex === i}
              >
                <h3 className="font-heading text-[18px] lg:text-[24px] leading-normal tracking-[-0.02em] text-black">
                  {faq.question}
                </h3>
                <span className="relative w-6 h-6 lg:w-12 lg:h-12 shrink-0 flex items-center justify-center text-black select-none" aria-hidden="true">
                  <span className="absolute h-[1.2px] w-4 lg:h-[1.6px] lg:w-7 rounded-full bg-current" />
                  <span
                    className={`absolute w-[1.2px] h-4 lg:w-[1.6px] lg:h-7 rounded-full bg-current transition-opacity duration-200 ${
                      openIndex === i ? "opacity-0" : "opacity-100"
                    }`}
                  />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-4 lg:px-10 lg:pb-10 text-xs lg:text-xl text-black/60 leading-normal tracking-[-0.02em] whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
