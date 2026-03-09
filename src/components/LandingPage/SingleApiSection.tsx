import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import SectionHeading from "../UI/SectionHeading";
import PillTag from "../UI/PillTag";

/* placeholder images — replace with real assets later */
const tabImages: Record<string, string> = {
  "Powerful REST API":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  "AI Workflow Builder":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  "No Code Verification":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  "Fraud & Intelligence Suite":
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
  "Global Verification Stack With Built-In Orchestration":
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  "CKYC & India Stack":
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
};

interface TabContent {
  name: string;
  title: string;
  description: string;
  bullets: string[];
  footer?: string;
  footerLink?: { text: string; href: string };
}

const tabs: TabContent[] = [
  {
    name: "Powerful REST API",
    title: "Powerful REST API",
    description:
      "Build fully custom KYC, KYB, KYE, and fraud workflows tailored to your logic and risk appetite.",
    bullets: [
      "Access 400+ APIs across identity, business verification, fraud & compliance",
      "Unified JSON output across all partners",
      "Built-in auto-fallback & smart routing",
      "Region-wise orchestration logic",
      "Real-time monitoring & error handling",
    ],
  },
  {
    name: "AI Workflow Builder",
    title: "AI Workflow Builder",
    description:
      "Design verification flows with prompts. Deploy instantly.",
    bullets: [
      "Prompt-to-workflow generation",
      "Pre-built templates for Lending, Gaming, Marketplaces",
      "Dynamic business rule engine",
      "Drop-off optimization with AI routing",
      "Sandbox preview & live testing",
    ],
  },
  {
    name: "No Code Verification",
    title: "No Code Verification",
    description:
      "Launch verification in minutes – without writing a single line of code and Generate secure verification links from dashboard.",
    bullets: [
      "Pre-built workflows for KYC, KYB, KYE & fraud",
      "Customizable branding & validation rules",
      "Built-in consent & compliance flows",
      "Real-time dashboard monitoring",
      "Shareable links for employment, business & vendor checks",
      "Upgrade to API integration anytime",
      "Exportable reports & audit-ready logs",
    ],
    footerLink: { text: "idto.ai/demo", href: "https://idto.ai/demo" },
  },
  {
    name: "Fraud & Intelligence Suite",
    title: "Fraud & Intelligence Suite",
    description: "Go beyond verification.",
    bullets: [
      "Mobile Intelligence Engine with 300+ behavioral insights",
      "Device & SIM risk signals",
      "Synthetic identity detection",
      "AML / Sanction monitoring",
      "AI Risk Orchestration Agent",
    ],
    footer: "Detect fraud before it becomes a loss.",
  },
  {
    name: "Global Verification Stack With Built-In Orchestration",
    title: "Global Verification stack with built-in Orchestration",
    description: "Multi-partner infra. Zero dependency.",
    bullets: [
      "5+ verification partners integrated per major region",
      "Real-time performance-based routing",
      "Cost optimization engine",
      "Auto-switching during downtime",
      "Single dashboard, single invoice",
    ],
    footer:
      "Increase reliability \u2022 Reduce vendor risk \u2022 Eliminate operational chaos.",
  },
  {
    name: "CKYC & India Stack",
    title: "CKYC & India Stack",
    description: "Built for regulated businesses.",
    bullets: [
      "CKYC Search, Download, Create & Update",
      "DigiLocker Suite",
      "PAN, GST, MCA, UBO, DIN",
      "Bank Account Verification",
      "Compliance-ready consent management",
    ],
    footer: "RBI, SEBI, IRDAI aligned infrastructure — production ready.",
  },
];

export default function SingleApiSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [paused]);

  const handlePillClick = useCallback((i: number) => {
    setActiveIndex(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 5000);
  }, []);

  const current = tabs[activeIndex];

  return (
    <section className="bg-white px-5 lg:px-37.5 py-12 lg:py-37.5 rounded-[40px] lg:rounded-[150px]">
      <div className="max-w-405 mx-auto flex flex-col items-center gap-8 lg:gap-22.5">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
          className="flex flex-col items-center gap-5"
        >
          <SectionHeading>
            <span className="text-primary">Single</span> API.
            <br />
            <span className="text-primary">Seamless</span> Integration.
          </SectionHeading>
          <p className="text-base lg:text-xl text-black/60 leading-normal tracking-[-0.4px] text-center max-w-175">
            One integration layer powering KYC, KYB, fraud intelligence, and
            compliance across 400+ APIs globally.
          </p>
        </motion.div>

        {/* Pill Tabs */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.1)}
          className="flex gap-3 lg:gap-4 lg:flex-wrap lg:justify-center max-w-full lg:max-w-273 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide"
        >
          {tabs.map((tab, i) => (
            <PillTag
              key={tab.name}
              label={tab.name}
              active={activeIndex === i}
              onClick={() => handlePillClick(i)}
              variant="light"
            />
          ))}
        </motion.div>

        {/* Content Card + Buttons */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col lg:flex-row gap-6 lg:gap-15 items-stretch w-full"
          >
            {/* Left column: Text card + CTA buttons */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <div className="bg-white border border-black/10 rounded-[20px] lg:rounded-[27px] p-5 lg:p-10 flex flex-col gap-4 lg:gap-5 flex-1">
                <h3 className="font-heading text-lg lg:text-[28px] leading-normal tracking-[-0.56px] text-black">
                  {current.title}
                </h3>
                <p className="text-sm lg:text-lg text-black/60 leading-normal tracking-[-0.36px]">
                  {current.description}
                </p>
                <ul className="list-disc ml-5 lg:ml-7 text-sm lg:text-lg text-black/60 leading-[1.7] tracking-[-0.36px] space-y-1">
                  {current.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {current.footer && (
                  <p className="text-base lg:text-lg text-black/60 leading-normal tracking-[-0.36px] mt-auto">
                    {current.footer}
                  </p>
                )}
                {current.footerLink && (
                  <a
                    href={current.footerLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline text-base lg:text-lg mt-auto"
                  >
                    {current.footerLink.text}
                  </a>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col lg:flex-row flex-wrap gap-3 lg:gap-10">
                <a
                  href="https://docs.idto.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-0 lg:px-5 py-2 lg:py-2.5 rounded-md text-sm lg:text-[21px] font-semibold leading-[27px] tracking-[-0.02em] text-primary hover:opacity-80 transition-opacity"
                >
                  <span className="underline underline-offset-4">Explore Documentation</span>
                  <ArrowRight size={16} className="lg:hidden" strokeWidth={2.5} />
                  <ArrowRight size={20} className="hidden lg:block" strokeWidth={2.5} />
                </a>
                <a
                  href="https://dashboard.idto.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-0 lg:px-5 py-2 lg:py-2.5 rounded-md text-sm lg:text-[21px] font-semibold leading-[27px] tracking-[-0.02em] text-primary hover:opacity-80 transition-opacity"
                >
                  <span className="underline underline-offset-4">View Demo Workflow</span>
                  <ArrowRight size={16} className="lg:hidden" strokeWidth={2.5} />
                  <ArrowRight size={20} className="hidden lg:block" strokeWidth={2.5} />
                </a>
              </div>
            </div>

            {/* Image — stretches full height of left column */}
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden h-75 lg:h-auto">
              <img
                src={tabImages[current.name]}
                alt={current.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
