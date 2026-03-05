import { useState, useRef, useEffect, useCallback } from "react";
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
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Auto-cycle active card every 3s (synced with marquee feel)
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % whyCards.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [paused]);

  const handleCardClick = useCallback((i: number) => {
    setActiveIndex(i % whyCards.length);
    setPaused(true);
    // Resume auto-cycling after 5s
    setTimeout(() => setPaused(false), 5000);
  }, []);

  // Render a single card
  const renderCard = (card: WhyCard, i: number, keyPrefix: string) => {
    const realIndex = i % whyCards.length;
    const isActive = activeIndex === realIndex;
    return (
      <div
        key={`${keyPrefix}-${i}`}
        onClick={() => handleCardClick(i)}
        className={`shrink-0 cursor-pointer rounded-[32px] border border-[#536bc9] p-8 lg:p-10 flex flex-col gap-8 transition-all duration-300 ${
          isActive
            ? "w-[480px] lg:w-[529px] min-h-[394px] bg-[rgba(55,87,200,0.43)] opacity-100"
            : "w-[420px] lg:w-[481px] min-h-[358px] bg-[rgba(55,87,200,0.43)] opacity-60"
        }`}
      >
        <h3
          className={`capitalize font-semibold text-white ${
            isActive ? "text-[30px]" : "text-[28px]"
          }`}
        >
          {card.title}
        </h3>
        <div className="w-16 h-[2px] bg-white/40 rounded" />
        <p
          className={`text-white leading-[1.5] tracking-[-0.4px] whitespace-pre-line ${
            isActive ? "text-[22px]" : "text-xl opacity-60"
          }`}
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
              onClick={() => setActiveIndex(i)}
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
