import { motion } from "framer-motion";
import { Landmark, LineChart, ShieldCheck, Waves } from "lucide-react";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

const capabilities = [
  {
    title: "Account Verification",
    description:
      "Extract account holder name, account number, bank, IFSC, account type, PAN and statement duration.",
    icon: Landmark,
  },
  {
    title: "Transaction Intelligence",
    description:
      "Structure every debit and credit with date, description, category, amount and balance.",
    icon: Waves,
  },
  {
    title: "Cash-Flow Analysis",
    description:
      "Understand inflows, outflows, balance volatility and recurring transaction behaviour.",
    icon: LineChart,
  },
  {
    title: "Fraud and Tamper Signals",
    description:
      "Detect PDF manipulation, balance mismatches, unusual credits and suspicious activity.",
    icon: ShieldCheck,
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="bg-white px-5 py-12 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="mx-auto max-w-[768px] text-center font-heading text-[28px] leading-[1.15] text-[#0b111f] sm:text-[36px] lg:text-[42px]">
          More than just a bank{" "}
          <span className="text-primary">statement PDF OCR</span>
        </h2>
        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-2">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={createFadeInUp(index * 0.04)}
                className="flex gap-5 rounded-[20px] border border-[#e0e5eb] bg-white p-7 shadow-[0_8px_12px_rgba(0,0,0,0.06)]"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#eef2ff] text-primary">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-[14px] font-semibold leading-5 text-[#0b111f]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-[#626a75]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
