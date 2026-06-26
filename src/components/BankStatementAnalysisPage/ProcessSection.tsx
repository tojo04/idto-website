import { motion } from "framer-motion";
import { BarChart3, FileUp, ListChecks, ScrollText } from "lucide-react";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

const steps = [
  {
    number: "01",
    title: "Upload the Statement",
    description:
      "Submit a digital or scanned bank statement through your workflow, API or dashboard.",
    icon: FileUp,
  },
  {
    number: "02",
    title: "Extract Every Transaction",
    description:
      "Capture account information, dates, descriptions, debits, credits, balances and statement periods.",
    icon: ListChecks,
  },
  {
    number: "03",
    title: "Categorise and Analyse",
    description:
      "Identify salary, EMI, cash, transfers, bills, medical, travel, shopping and other transaction categories.",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Generate the Report",
    description:
      "Receive structured outputs, monthly analysis, transaction-level data and potential fraud indicators.",
    icon: ScrollText,
  },
];

export default function ProcessSection() {
  return (
    <section className="px-5 py-12 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="mx-auto max-w-[768px] text-center font-heading text-[28px] leading-[1.15] text-[#0b111f] sm:text-[36px] lg:text-[42px]">
          Turn unstructured statements into{" "}
          <span className="text-primary">decision-ready data.</span>
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={createFadeInUp(index * 0.04)}
                className="min-h-[258px] rounded-[20px] border border-[#e0e5eb] bg-white p-7 shadow-[0_8px_12px_rgba(0,0,0,0.06)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[#eef2ff] text-primary">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-heading text-[36px] leading-none text-[#626a75]/70">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-7 text-[14px] font-semibold leading-5 text-[#0b111f]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.6] text-[#626a75]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
