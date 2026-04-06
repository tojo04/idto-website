import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import SectionHeading from "../UI/SectionHeading";
import PillTag from "../UI/PillTag";

import industryImg0 from "../../assets/industriesSection_images/Image 0.png";
import industryImg1 from "../../assets/industriesSection_images/Image 1.png";
import industryImg2 from "../../assets/industriesSection_images/Image 2.png";
import industryImg3 from "../../assets/industriesSection_images/Image 3.png";
import industryImg4 from "../../assets/industriesSection_images/Image 4.png";
import industryImg5 from "../../assets/industriesSection_images/Image 5.png";

const industryImages = [industryImg0, industryImg1, industryImg2, industryImg3, industryImg4, industryImg5];

interface Industry {
  name: string;
  title: string;
  description: string;
  bullets: string[];
  footer: string;
}

const industries: Industry[] = [
  {
    name: "Fintech & Payments",
    title: "Fintech & Payments",
    description:
      "Pre-built onboarding stacks powered by APIs + alternate data + intelligent routing.",
    bullets: [
      "Lending-ready KYC with bureau & income signals",
      "CKYC & DigiLocker integrated flows",
      "Mobile Intelligence with 300+ insights",
      "Fraud detection + AML monitoring built-in",
      "Multi-partner orchestration for higher success rates",
    ],
    footer:
      "Go live with production-grade onboarding in days, not months",
  },
  {
    name: "Lending & Financial Services",
    title: "Lending & Financial Services",
    description:
      "Regulation-ready onboarding. Built for speed and scale.",
    bullets: [
      "Full KYC stack with intelligent fallbacks",
      "CKYC Suite + India Stack integrations",
      "Credit, income & alternate data signals",
      "Fraud detection + ongoing AML monitoring",
      "Auto-switching partner orchestration",
    ],
    footer: "Improve approvals. Reduce fraud. Go live faster.",
  },
  {
    name: "E-Commerce & Gig Economy",
    title: "E-commerce & Gig Economy",
    description:
      "High-volume, low-friction onboarding.",
    bullets: [
      "Instant KYC + face match",
      "Driving licence & RC verification",
      "Bank account validation",
      "Mobile profile insights",
      "Fraud & duplicate identity detection",
    ],
    footer: "Onboard fast. Prevent misuse. Reduce ops overhead.",
  },
  {
    name: "Marketplaces & Platforms",
    title: "Marketplaces & Platforms",
    description:
      "Pre-configured seller & merchant onboarding flows.",
    bullets: [
      "KYB + UBO identification",
      "Director & PAN validation",
      "GST, MCA, AML screening",
      "Auto-switching verification partners",
      "Risk scoring before activation",
    ],
    footer: "Reduce fraud. Activate sellers faster.",
  },
  {
    name: "Crypto & Digital Assets",
    title: "Crypto & Digital Assets",
    description:
      "Compliance-first onboarding for high-risk environments.",
    bullets: [
      "Global ID verification",
      "AML & sanction monitoring",
      "Device & behavioral risk signals",
      "Ongoing transaction monitoring",
      "Region-wise orchestration logic",
    ],
    footer: "Stay compliant without slowing growth.",
  },
  {
    name: "SaaS & Global Platforms",
    title: "SaaS & Global Platforms",
    description:
      "Lightweight global identity stack.",
    bullets: [
      "Global KYC & document OCR",
      "Tax ID / VAT validation",
      "Mobile & device intelligence",
      "Region-based verification logic",
      "Unified output across partners",
    ],
    footer: "Scale across regions without rebuilding infra.",
  },
];

export default function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isClickPaused, setIsClickPaused] = useState(false);
  const clickPauseTimerRef = useRef<number | null>(null);
  const pillsContainerRef = useRef<HTMLDivElement | null>(null);
  const pillRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (isHovered || isClickPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered, isClickPaused]);

  const handlePillClick = useCallback((i: number) => {
    setActiveIndex(i);
    setIsClickPaused(true);

    if (clickPauseTimerRef.current !== null) {
      window.clearTimeout(clickPauseTimerRef.current);
    }

    clickPauseTimerRef.current = window.setTimeout(() => {
      setIsClickPaused(false);
      clickPauseTimerRef.current = null;
    }, 5000);
  }, []);

  useEffect(() => {
    return () => {
      if (clickPauseTimerRef.current !== null) {
        window.clearTimeout(clickPauseTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1024) return;
    const container = pillsContainerRef.current;
    const pill = pillRefs.current[activeIndex];
    if (!container || !pill) return;

    const targetLeft = pill.offsetLeft - (container.clientWidth - pill.offsetWidth) / 2;
    const maxLeft = container.scrollWidth - container.clientWidth;
    const clampedLeft = Math.max(0, Math.min(targetLeft, maxLeft));

    container.scrollTo({
      left: clampedLeft,
      behavior: "smooth",
    });
  }, [activeIndex]);

  return (
    <section className="bg-gray-bg px-5 lg:px-37.5 py-12 lg:py-37.5 rounded-[40px] lg:rounded-[150px]">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-8 lg:gap-22.5">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
        >
          <SectionHeading>
            <span className="text-primary">Industry-Ready</span>
            <br />
            Verification Solutions
          </SectionHeading>
        </motion.div>

        {/* Industry Pills */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.1)}
          ref={pillsContainerRef}
          className="flex gap-3 lg:gap-4 lg:flex-wrap lg:justify-center max-w-full lg:max-w-273 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide"
        >
          {industries.map((ind, i) => (
            <div key={ind.name} ref={(el) => { pillRefs.current[i] = el; }}>
              <PillTag
                label={ind.name}
                active={activeIndex === i}
                onClick={() => handlePillClick(i)}
                variant="light"
              />
            </div>
          ))}
        </motion.div>

        {/* Content Card */}
        <div
          className="w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          onTouchCancel={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:flex-row gap-6 lg:gap-15 items-center w-full"
            >
            {/* Text */}
            <div className="w-full lg:w-1/2 bg-white border border-black/10 rounded-[20px] lg:rounded-[27px] p-5 lg:p-10 flex flex-col gap-4 lg:gap-5 min-h-0 lg:min-h-98.5">
              <h3 className="font-heading text-lg lg:text-[28px] leading-normal tracking-[-0.56px] text-black">
                {industries[activeIndex].title}
              </h3>
              <p className="text-sm lg:text-xl text-black/60 leading-normal tracking-[-0.4px]">
                {industries[activeIndex].description}
              </p>
              <ul className="list-disc ml-5 lg:ml-7 text-sm lg:text-xl text-black/60 leading-normal tracking-[-0.4px] space-y-1">
                {industries[activeIndex].bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="text-sm lg:text-xl text-black/60 leading-normal tracking-[-0.4px] mt-auto">
                {industries[activeIndex].footer}
              </p>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 bg-white rounded-2xl overflow-hidden h-52 lg:min-h-98.5">
              <img
                src={industryImages[activeIndex]}
                alt={industries[activeIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer text */}
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.2)}
          className="text-base lg:text-xl text-black/60 text-center leading-normal"
        >
          Pre-configured workflows. Alternate data integrated. Production-ready
          from day one.
        </motion.p>
      </div>
    </section>
  );
}
