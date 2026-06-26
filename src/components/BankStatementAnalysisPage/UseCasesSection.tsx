import { motion } from "framer-motion";
import { CreditCard, Gauge, Landmark, ShieldAlert, UserRoundCheck } from "lucide-react";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

const useCases = [
  {
    title: "Digital Lending",
    description:
      "Use bank statement intelligence to understand income, cash flow and repayment behaviour.",
    icon: Landmark,
  },
  {
    title: "Credit Cards & Credit Lines",
    description:
      "Analyse income, liabilities and transaction patterns before assigning limits.",
    icon: CreditCard,
  },
  {
    title: "Fraud & Risk Review",
    description:
      "Detect tampered statements and suspicious financial behaviour.",
    icon: ShieldAlert,
  },
  {
    title: "Income Verification",
    description:
      "Confirm salary credits, income consistency and recurring income sources.",
    icon: UserRoundCheck,
  },
  {
    title: "Underwriting Operations",
    description:
      "Give credit teams structured outputs that are easier to review, compare and audit.",
    icon: Gauge,
  },
];

export default function UseCasesSection() {
  return (
    <section className="bg-white px-5 py-12 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="mx-auto max-w-[760px] text-center font-heading text-[28px] leading-[1.15] text-[#0b111f] sm:text-[36px] lg:text-[42px]">
          Built for teams that need financial context before they approve.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 xl:grid-cols-5">
          {useCases.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={createFadeInUp(index * 0.04)}
                className="rounded-[20px] border border-[#e0e5eb] bg-white p-7 shadow-[0_8px_12px_rgba(0,0,0,0.06)]"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-[#eef2ff] text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-[16px] font-semibold leading-6 text-[#0b111f]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#626a75]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
