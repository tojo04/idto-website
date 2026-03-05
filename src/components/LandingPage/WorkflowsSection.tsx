import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import SectionHeading from "../UI/SectionHeading";

interface Workflow {
  title: string;
  description: string;
  tagRows: string[][];
  footnote?: string[];
}

const workflows: Workflow[] = [
  {
    title: "User Verification (KYC)",
    description:
      "Onboard users across regions with flexible identity checks, fallbacks, and compliance built in.",
    tagRows: [
      ["Digilocker Verification Suite", "PAN Verification Suite"],
      ["Passport Verification", "Global ID Verification Suite"],
      ["Document OCR Suite \u2013 Global Coverage", "RC Verification"],
      ["Bank Account Verification Suite", "CKYC Suite"],
      ["Face Match And Liveliness Check"],
      ["Driving Licence Verification"],
    ],
  },
  {
    title: "Business Verification (KYB)",
    description:
      "Onboard business across regions with flexible identity checks, fallbacks, and compliance built in.",
    tagRows: [
      ["Global Business Registry Verification"],
      ["Business Document OCR Suite", "Business License Validation"],
      ["MCA CIN Company Verification", "Business PAN Verification"],
      ["PAN To GST", "GSTIN Verification - Detailed + Lite"],
      ["UBO Identification", "PAN To CIN", "CKYC Entity Check"],
      ["Director KYC Verification", "Director DIN Verification"],
      ["AML / Sanction Screening", "Tax ID / VAT Verification"],
      ["Company Status & Incorporation Check"],
    ],
  },
  {
    title: "Employee & Workforce Verification",
    description:
      "Onboard employee across regions with flexible identity checks, fallbacks, and compliance built in.",
    tagRows: [
      ["Aadhaar + PAN Verification Suite", "EPFO / UAN Check"],
      ["Face Match & Liveness", "AML / Sanction Screening"],
      ["Salary Slip OCR", "Driving Licence Verification"],
      ["Criminal Record Search", "Court Record Check"],
      ["Degree Verification", "Previous Employer Validation"],
      ["Reference Check", "Ongoing Monitoring"],
    ],
    footnote: [
      "Startups \u2022 Fintechs \u2022 Logistics \u2022 Gig Platforms",
      "Marketplaces \u2022 Enterprises",
    ],
  },
  {
    title: "Fraud & Risk Intelligence",
    description:
      "Improve approval quality. Increase onboarding success.",
    tagRows: [
      ["Device Fingerprinting", "SIM / Mobile Risk Check", "Email Risk Scoring"],
      ["Geo Risk Detection", "Velocity Check", "Disposable Email Detection"],
      ["Face Match & Liveness", "Real-Time Fallback Switching", "Deepfake Detection"],
      ["Tampering Detection", "Fraud Pattern Learning", "Duplicate Identity Detection"],
      ["Aadhaar Mismatch Signals", "PEP Monitoring", "Unified Risk Dashboard"],
      ["Sanction Re-Screening", "Dynamic Rule Engine", "Account Takeover"],
      ["Risk Scoring", "Auto Risk Threshold Tuning", "Real-Time Risk Scoring"],
      ["Suspicious Activity Alerts", "Intelligent Risk Routing", "Synthetic Identity Fraud"],
    ],
  },
  {
    title: "Global Verification Stack",
    description:
      "Scale across markets without rebuilding integrations.",
    tagRows: [
      ["Passport", "OCR"],
      ["Globally Compliant KYC", "Globally Compliant KYB"],
      ["Globally Compliant KYE", "Globally Compliant AML"],
      ["Region-Wise Orchestration Logic", "Global Registry"],
      ["Global Tax ID", "Global Incorporation Checks", "Global VAT"],
      ["Global AML, Sanction & PEP Screening"],
      ["Auto-Fallback & Performance-Based Routing"],
      ["Cross-Border Compliance-Ready Workflows"],
      ["Document OCR With Multilingual Support"],
    ],
  },
];

export default function WorkflowsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Randomly cycle the highlighted tag
  const getRandomHighlight = useCallback(
    (wfIndex: number): [number, number] => {
      const rows = workflows[wfIndex].tagRows;
      const allTags: [number, number][] = [];
      rows.forEach((row, r) => row.forEach((_, c) => allTags.push([r, c])));
      return allTags[Math.floor(Math.random() * allTags.length)];
    },
    []
  );

  const [highlight, setHighlight] = useState<[number, number]>(() =>
    getRandomHighlight(0)
  );

  useEffect(() => {
    setHighlight(getRandomHighlight(activeIndex));
    const interval = setInterval(() => {
      setHighlight(getRandomHighlight(activeIndex));
    }, 2000);
    return () => clearInterval(interval);
  }, [activeIndex, getRandomHighlight]);

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
          className="flex flex-col lg:flex-row gap-8 lg:gap-[80px] items-center w-full"
        >
          {/* Accordion Left */}
          <div className="flex flex-col gap-[11px] w-full lg:w-[55%]">
            {workflows.map((wf, i) => (
              <div
                key={wf.title}
                onClick={() => setActiveIndex(i)}
                className={`rounded-[27px] border-[1.66px] border-black/10 overflow-hidden cursor-pointer transition-all duration-300 p-8 lg:p-10 ${
                  activeIndex === i
                    ? "bg-blue-section"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-heading text-2xl lg:text-[28px] leading-[1.5] tracking-[-0.02em] ${
                      activeIndex === i ? "text-white" : "text-black"
                    }`}
                  >
                    {wf.title}
                  </h3>
                  <span
                    className={`w-10 h-10 flex items-center justify-center text-[40px] leading-none shrink-0 ml-4 ${
                      activeIndex === i ? "text-white" : "text-black"
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
                      <p className="pt-5 text-[20px] text-white/60 leading-[1.5] tracking-[-0.02em]">
                        {wf.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Tags Right Panel — outer box */}
          <div className="w-full lg:w-[45%] bg-gray-bg rounded-[24px] p-8 lg:p-10 flex items-center justify-center overflow-hidden">
            {/* Inner box */}
            <div className="w-full h-full bg-black/[0.004] rounded-2xl flex items-center justify-center p-6 lg:p-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center gap-[15px] overflow-hidden w-full"
              >
                {workflows[activeIndex].tagRows.map((row, rowIdx) => {
                  return (
                    <div
                      key={rowIdx}
                      className="marquee-row overflow-hidden w-full"
                    >
                      <div className="marquee-track flex flex-row items-center gap-[15px] whitespace-nowrap">
                        {/* Original set */}
                        {row.map((tag, colIdx) => (
                          <div
                            key={tag}
                            className={`px-5 py-2.5 rounded-md text-[20px] capitalize leading-[1.5] whitespace-nowrap shrink-0 transition-colors duration-500 ${
                              rowIdx === highlight[0] && colIdx === highlight[1]
                                ? "bg-blue-section text-white font-semibold"
                                : "bg-white text-black"
                            }`}
                          >
                            {tag}
                          </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {row.map((tag, colIdx) => (
                          <div
                            key={`dup-${tag}`}
                            className={`px-5 py-2.5 rounded-md text-[20px] capitalize leading-[1.5] whitespace-nowrap shrink-0 transition-colors duration-500 ${
                              rowIdx === highlight[0] && colIdx === highlight[1]
                                ? "bg-blue-section text-white font-semibold"
                                : "bg-white text-black"
                            }`}
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
                {workflows[activeIndex].footnote && (
                  <div className="flex flex-col items-center gap-1 mt-2">
                    {workflows[activeIndex].footnote!.map((line) => (
                      <span
                        key={line}
                        className="text-[20px] leading-[1.5] text-black/60"
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
