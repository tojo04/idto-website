import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  subtitle: string;
  questionMarkImage: string;
}

export default function FAQSection({
  faqs,
  subtitle,
  questionMarkImage,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-5 lg:px-37.5 py-12 lg:py-37.5 rounded-[40px] lg:rounded-[150px] bg-gray-bg relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-22.5 lg:items-stretch relative">
        {/* Left — Header Container */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
          className="lg:flex-1 flex flex-col gap-6 relative items-center lg:items-start lg:h-199.5 lg:justify-center"
        >
          {/* Title */}
          <h2 className="font-heading text-[28px] lg:text-[56px] leading-[1.3] text-black text-center lg:text-left">
            Got Questions?
            <br />
            We've Got <span className="text-primary">Answers</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base lg:text-[18px] text-black/60 leading-normal max-w-132.5 text-center lg:text-left">
            {subtitle}
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
              className="relative w-[85%] lg:w-[135%] lg:max-w-[850px] h-auto object-contain -rotate-[0.26deg] lg:-translate-y-[50px]"
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
              className="bg-white border-[1.25px] border-black/10 rounded-[20px] lg:rounded-[20px] shrink-0"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between px-4 py-4 lg:px-[30px] lg:py-[30px] text-left cursor-pointer gap-4 lg:gap-5"
                aria-expanded={openIndex === i}
              >
                <h3 className="font-heading text-[18px] lg:text-[16px] leading-normal tracking-[-0.02em] text-black">
                  {faq.question}
                </h3>
                <span
                  className="relative w-6 h-6 lg:w-[36px] lg:h-[36px] shrink-0 flex items-center justify-center text-black select-none"
                  aria-hidden="true"
                >
                  <span className="absolute h-[1.2px] w-4 lg:h-[1.2px] lg:w-[21px] rounded-full bg-current" />
                  <span
                    className={`absolute w-[1.2px] h-4 lg:w-[1.2px] lg:h-[21px] rounded-full bg-current transition-opacity duration-200 ${
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
                    <p className="px-4 pb-4 lg:px-[30px] lg:pb-[30px] text-xs lg:text-[14px] text-black/60 leading-normal tracking-[-0.02em] whitespace-pre-line">
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
