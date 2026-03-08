import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import SectionHeading from "../UI/SectionHeading";
import PillTag from "../UI/PillTag";

const industryImage = "https://www.figma.com/api/mcp/asset/b387b2b3-7abf-4fb3-9276-7fd3ef06df4d";

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

  return (
    <section className="bg-gray-bg px-6 lg:px-[150px] py-20 lg:py-[150px] rounded-[100px] lg:rounded-[150px]">
      <div className="max-w-[1620px] mx-auto flex flex-col items-center gap-12 lg:gap-[90px]">
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
          className="flex flex-wrap gap-4 justify-center max-w-[1092px]"
        >
          {industries.map((ind, i) => (
            <PillTag
              key={ind.name}
              label={ind.name}
              active={activeIndex === i}
              onClick={() => setActiveIndex(i)}
              variant="light"
            />
          ))}
        </motion.div>

        {/* Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-[60px] items-center w-full"
          >
            {/* Text */}
            <div className="w-full lg:w-1/2 bg-white border border-black/10 rounded-[27px] p-8 lg:p-10 flex flex-col gap-5 h-[394px]">
              <h3 className="font-heading text-2xl lg:text-[28px] leading-[1.5] tracking-[-0.56px] text-black">
                {industries[activeIndex].title}
              </h3>
              <p className="text-xl text-black/60 leading-[1.5] tracking-[-0.4px]">
                {industries[activeIndex].description}
              </p>
              <ul className="list-disc ml-7 text-xl text-black/60 leading-[1.5] tracking-[-0.4px] space-y-1">
                {industries[activeIndex].bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="text-xl text-black/60 leading-[1.5] tracking-[-0.4px] mt-auto">
                {industries[activeIndex].footer}
              </p>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 bg-white rounded-2xl overflow-hidden h-[300px] lg:h-[394px]">
              <img
                src={industryImage}
                alt={industries[activeIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer text */}
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.2)}
          className="text-xl text-black/60 text-center leading-[1.5]"
        >
          Pre-configured workflows. Alternate data integrated. Production-ready
          from day one.
        </motion.p>
      </div>
    </section>
  );
}
