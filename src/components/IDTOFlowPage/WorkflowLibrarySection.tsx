import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  Globe2,
  ShieldCheck,
  Store,
  Truck,
  UserRoundCheck,
} from "lucide-react";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

const workflows = [
  {
    title: "User Verification and KYC",
    icon: UserRoundCheck,
    tags: [
      "Mobile and PAN Prefill",
      "DigiLocker Verification",
      "Aadhaar Verification",
      "PAN Verification",
      "Passport Verification",
      "Driving Licence Verification",
      "Document OCR",
      "Face Match",
      "Liveness Check",
      "Bank Account Verification",
      "CKYC",
      "AML Screening",
      "Smart Fallbacks",
    ],
  },
  {
    title: "Business Verification and KYB",
    icon: Building2,
    tags: ["MCA", "GSTIN", "Business PAN", "Director KYC", "Bank Verification"],
  },
  {
    title: "Employee and Workforce Onboarding",
    icon: BriefcaseBusiness,
    tags: ["Document Checks", "Face Match", "Address Verification", "BGV Signals"],
  },
  {
    title: "Seller, Merchant and Partner Verification",
    icon: Store,
    tags: ["KYB", "Owner KYC", "Payout Account", "Risk Rules"],
  },
  {
    title: "Driver, Delivery and Field-Agent Verification",
    icon: Truck,
    tags: ["Licence Check", "Identity Match", "Bank Verification", "Field Readiness"],
  },
  {
    title: "Fraud and Risk Workflows",
    icon: ShieldCheck,
    tags: ["Device Signals", "Duplicate Detection", "AML", "Provider Fallbacks"],
  },
  {
    title: "Global Identity Verification",
    icon: Globe2,
    tags: ["Passport", "Address", "Document OCR", "Liveness", "Risk Checks"],
  },
];

export default function WorkflowLibrarySection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="workflow-library" className="bg-white px-5 py-12 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1215px]">
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="font-heading text-[26px] leading-[1.15] text-[#0c121a] sm:text-[36px] lg:text-[42px]">
            One SDK. Multiple identity workflows.
          </h2>
          <p className="mx-auto mt-5 max-w-[768px] text-[14px] leading-[1.65] text-[#5d646f] lg:text-[16px]">
            Start with a pre-built journey or combine individual checks into a
            workflow designed around your customer, risk model and operational
            process.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.05)}
          className="mx-auto mt-10 flex max-w-[896px] flex-col gap-3 lg:mt-14"
        >
          {workflows.map((workflow, index) => {
            const Icon = workflow.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={workflow.title}
                className="overflow-hidden rounded-[20px] border border-[#edf0f4] bg-white shadow-[0_1px_3px_rgba(16,24,40,0.06),0_1px_2px_rgba(16,24,40,0.04)]"
              >
                <button
                  type="button"
                  className="flex min-h-20 w-full items-center justify-between gap-4 px-5 text-left md:px-6"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-[20px] bg-[#e9eefc] text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-[16px] font-semibold leading-6 tracking-normal text-[#0c121a]">
                      {workflow.title}
                    </span>
                  </span>
                  <ChevronDown
                    className={`size-4 shrink-0 text-[#0c121a] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-wrap gap-2 px-5 pb-6 md:px-14">
                        {workflow.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(34,83,240,0.15)] bg-[#e9eefc] px-3 py-2 text-[12px] font-medium leading-none text-primary"
                          >
                            <BadgeCheck className="size-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
