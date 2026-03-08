import { useRef, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Render a single card
  const renderCard = (card: WhyCard, i: number, keyPrefix: string) => {
    return (
      <div
        key={`${keyPrefix}-${i}`}
        className="group shrink-0 cursor-pointer border border-[#536bc9] flex flex-col transition-all duration-300 ease-out
          bg-[rgba(55,87,200,0.43)]
          w-[420px] lg:w-[481px] h-[358px] rounded-[32px] opacity-60 p-[31px_41px]
          hover:w-[480px] hover:lg:w-[529px] hover:h-[394px] hover:rounded-[35px] hover:opacity-100 hover:p-[40px_45px]"
      >
        <h3
          className="capitalize font-semibold text-white leading-[36px] transition-all duration-300
            text-[28px] group-hover:text-[30px] group-hover:leading-[39px]"
        >
          {card.title}
        </h3>
        <div
          className="w-[65px] h-0 mt-9 transition-colors duration-300
            border-t-[1.62px] border-[#DBDFE3] group-hover:border-white group-hover:border-t-[1.78px]"
        />
        <p
          className="text-white leading-[150%] tracking-[-0.02em] whitespace-pre-line mt-9 transition-all duration-300
            text-[20px] opacity-60 group-hover:text-[22px] group-hover:opacity-100"
        >
          {card.description}
        </p>
      </div>
    );
  };

  // Triple the cards for seamless looping
  const tripled = [...whyCards, ...whyCards, ...whyCards];

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
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              variant="dark"
            />
          ))}
        </motion.div>

        {/* Marquee Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.2)}
          className="w-full overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={marqueeRef}
            className="flex gap-8 w-max"
            style={{
              animation: `marquee-why 40s linear infinite`,
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {tripled.map((card, i) => renderCard(card, i, "marquee"))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
