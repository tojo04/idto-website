import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import SectionHeading from "../UI/SectionHeading";
import PillTag from "../UI/PillTag";

interface WhyCard {
  tag: string;
  title: string;
  description: string;
}

const whyCards: WhyCard[] = [
  {
    tag: "Identity Consultants",
    title: "Identity Consultants",
    description:
      "We don't just give you APIs.\nWe design the right verification stack for your use case – optimized for cost, success rate, and compliance from day one.",
  },
  {
    tag: "Transparent Commercials",
    title: "Transparent Commercials",
    description:
      "Clear pricing. No hidden markups.\nKeep your existing partner rates or use ours – one invoice, predictable costs, zero surprises.",
  },
  {
    tag: "Honest By Default",
    title: "Honest by Default",
    description:
      "We'll tell you what you don't need.\nNo unnecessary APIs. No forced bundles. Just what improves onboarding and reduces fraud.",
  },
  {
    tag: "Fast To Go Live",
    title: "Fast to Go Live",
    description:
      "One integration. Pre-built workflows. Production-ready SDKs. From sandbox to live without long sales cycles.",
  },
  {
    tag: "Startup-Friendly. Enterprise-Ready.",
    title: "Startup-Friendly. Enterprise-Ready",
    description:
      "Go live in days with self-serve workflows.\nScale to multi-partner orchestration, advanced fallbacks, and compliance automation as you grow.",
  },
  {
    tag: "No Vendor Lock-In",
    title: "No Vendor Lock-In",
    description:
      "No heavy prepaid wallet traps.\nBuilt-in auto-switching removes dependency on any single vendor.",
  },
  {
    tag: "Priority Support",
    title: "Priority Support",
    description:
      "Direct access to identity experts.\nFaster troubleshooting, optimization guidance, and continuous workflow improvements.",
  },
];

export default function WhyChooseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const cards = scrollRef.current.children;
      if (cards[activeIndex]) {
        const card = cards[activeIndex] as HTMLElement;
        const container = scrollRef.current;
        const scrollLeft =
          card.offsetLeft -
          container.offsetWidth / 2 +
          card.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [activeIndex]);

  return (
    <section className="bg-blue-section px-6 lg:px-[150px] py-20 lg:py-[150px] overflow-hidden">
      <div className="max-w-[1920px] mx-auto flex flex-col items-center gap-12 lg:gap-[89px]">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
        >
          <SectionHeading className="text-white">
            Why business choose{" "}
            <span className="relative">
              idto
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-green rounded-full" />
            </span>
          </SectionHeading>
        </motion.div>

        {/* Pills */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.1)}
          className="flex flex-wrap gap-4 justify-center max-w-[950px]"
        >
          {whyCards.map((card, i) => (
            <PillTag
              key={card.tag}
              label={card.tag}
              active={activeIndex === i}
              onClick={() => setActiveIndex(i)}
              variant="dark"
            />
          ))}
        </motion.div>

        {/* Scrollable Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.2)}
          className="w-full"
        >
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {whyCards.map((card, i) => (
              <div
                key={card.title}
                onClick={() => setActiveIndex(i)}
                className={`snap-center shrink-0 cursor-pointer rounded-[32px] border border-[#536bc9] p-8 lg:p-10 flex flex-col gap-8 transition-all duration-300 ${
                  activeIndex === i
                    ? "w-[480px] lg:w-[529px] min-h-[394px] bg-[rgba(55,87,200,0.43)] opacity-100"
                    : "w-[420px] lg:w-[481px] min-h-[358px] bg-[rgba(55,87,200,0.43)] opacity-60"
                }`}
              >
                <h3
                  className={`capitalize font-semibold text-white ${
                    activeIndex === i ? "text-[30px]" : "text-[28px]"
                  }`}
                >
                  {card.title}
                </h3>
                <div className="w-16 h-[2px] bg-white/40 rounded" />
                <p
                  className={`text-white leading-[1.5] tracking-[-0.4px] whitespace-pre-line ${
                    activeIndex === i
                      ? "text-[22px]"
                      : "text-xl opacity-60"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
