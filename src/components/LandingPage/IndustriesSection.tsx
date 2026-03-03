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
      "End-to-end borrower verification with real-time data enrichment and credit signals.",
    bullets: [
      "Bureau pull + income verification in one flow",
      "CKYC + PAN + Aadhaar integrated",
      "Employment & salary verification",
      "Bank statement analysis",
      "Pre-approved offer generation",
    ],
    footer: "Reduce onboarding time and boost conversion with smart verification.",
  },
  {
    name: "E-Commerce & Gig Economy",
    title: "E-Commerce & Gig Economy",
    description:
      "Quick seller/driver onboarding with document verification and risk checks.",
    bullets: [
      "Identity verification for sellers & drivers",
      "Address verification suite",
      "Criminal background checks",
      "Vehicle & license verification",
      "Face match and liveness detection",
    ],
    footer: "Onboard vendors, sellers, and gig workers in minutes, not days.",
  },
  {
    name: "Marketplaces & Platforms",
    title: "Marketplaces & Platforms",
    description:
      "Trust and safety infrastructure for two-sided marketplaces.",
    bullets: [
      "Buyer and seller KYC",
      "Business verification for merchants",
      "Risk scoring for transactions",
      "Real-time AML screening",
      "Dispute identity verification",
    ],
    footer: "Build trust on your platform with seamless verification flows.",
  },
  {
    name: "Crypto & Digital Assets",
    title: "Crypto & Digital Assets",
    description:
      "Regulatory-compliant onboarding for crypto exchanges and digital asset platforms.",
    bullets: [
      "Global KYC with 190+ country coverage",
      "AML & PEP screening",
      "Wallet risk analysis",
      "Enhanced due diligence workflows",
      "Travel rule compliance",
    ],
    footer: "Stay compliant while scaling your crypto platform globally.",
  },
  {
    name: "SaaS & Global Platforms",
    title: "SaaS & Global Platforms",
    description:
      "Flexible verification APIs for global SaaS products and platforms.",
    bullets: [
      "Multi-country identity verification",
      "Document OCR with global coverage",
      "Biometric authentication",
      "Enterprise SSO integration",
      "Custom workflow builder",
    ],
    footer: "One integration. Global coverage. Built for scale.",
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
            <div className="w-full lg:w-1/2 bg-white border border-black/10 rounded-[27px] p-8 lg:p-10 flex flex-col gap-5 min-h-[394px]">
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
