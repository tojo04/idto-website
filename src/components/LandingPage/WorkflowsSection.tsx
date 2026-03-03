import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import SectionHeading from "../UI/SectionHeading";

interface Workflow {
  title: string;
  description: string;
  tags: string[];
}

const workflows: Workflow[] = [
  {
    title: "User Verification (KYC)",
    description:
      "Onboard users across regions with flexible identity checks, fallbacks, and compliance built in.",
    tags: [
      "Digilocker Verification Suite",
      "PAN Verification Suite",
      "Passport Verification",
      "Global ID Verification Suite",
      "Document OCR Suite - Global Coverage",
      "RC Verification",
      "Bank Account Verification Suite",
      "CKYC Suite",
      "Face Match and Liveliness Check",
      "Driving Licence Verification",
    ],
  },
  {
    title: "Business Verification (KYB)",
    description:
      "Verify businesses end-to-end — from GST and PAN to director checks and beneficial ownership.",
    tags: [
      "GST Verification Suite",
      "Company Director KYC",
      "Business PAN Verification",
      "MCA Data Suite",
      "Beneficial Ownership Check",
      "FSSAI License Verification",
    ],
  },
  {
    title: "Employee & Workforce Verification",
    description:
      "Pre-employment and workforce verification — background, identity, and credential checks at scale.",
    tags: [
      "Employment History Verification",
      "Education Verification",
      "Criminal Record Check",
      "Address Verification Suite",
      "Reference Check Automation",
    ],
  },
  {
    title: "Fraud & Risk Intelligence",
    description:
      "Prevent fraud before it happens with real-time risk scoring, device intelligence, and AML checks.",
    tags: [
      "AML Screening",
      "Device Intelligence",
      "IP Risk Analysis",
      "Fraud Pattern Detection",
      "PEP & Sanctions Screening",
      "Risk Scoring Engine",
    ],
  },
  {
    title: "Global Verification Stack",
    description:
      "Go global with verification coverage across 190+ countries. Document OCR, biometrics, and more.",
    tags: [
      "Global Document OCR",
      "Biometric Verification",
      "International ID Check",
      "Cross-Border AML",
      "Multi-Language Support",
    ],
  },
];

export default function WorkflowsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="workflows"
      className="bg-white px-6 lg:px-[150px] py-20 lg:py-[150px] rounded-[100px] lg:rounded-[150px]"
    >
      <div className="max-w-[1620px] mx-auto flex flex-col items-center gap-16 lg:gap-[90px]">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
        >
          <SectionHeading>
            <span className="text-primary">One</span> platform.
            <br />
            <span className="text-primary">Multiple</span> identity workflows.
          </SectionHeading>
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.15)}
          className="flex flex-col lg:flex-row gap-8 lg:gap-[60px] items-start w-full"
        >
          {/* Accordion Left */}
          <div className="flex flex-col gap-3 w-full lg:w-[55%]">
            {workflows.map((wf, i) => (
              <div
                key={wf.title}
                onClick={() => setActiveIndex(i)}
                className={`rounded-[27px] border-[1.66px] border-black/10 overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeIndex === i
                    ? "bg-blue-section"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between p-8 lg:p-10">
                  <h3
                    className={`font-heading text-2xl lg:text-[28px] leading-[1.5] tracking-[-0.56px] ${
                      activeIndex === i ? "text-white" : "text-black"
                    }`}
                  >
                    {wf.title}
                  </h3>
                  <span
                    className={`text-3xl shrink-0 ml-4 ${
                      activeIndex === i ? "text-white" : "text-black/40"
                    }`}
                  >
                    {activeIndex === i ? "−" : "+"}
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-8 lg:px-10 pb-8 lg:pb-10 text-xl text-white/60 leading-[1.5] tracking-[-0.4px]">
                        {wf.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Tags Right Panel */}
          <div className="w-full lg:w-[45%] bg-gray-bg rounded-3xl p-8 lg:p-12 min-h-[500px] lg:min-h-[632px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                {workflows[activeIndex].tags.map((tag, i) => (
                  <div
                    key={tag}
                    className={`px-5 py-2.5 rounded-md text-xl capitalize leading-[1.5] ${
                      i === 0
                        ? "bg-blue-section text-white font-semibold"
                        : "bg-white text-black"
                    }`}
                  >
                    {tag}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
