import { motion } from "framer-motion";
import {
  Banknote,
  CircleCheck,
  CreditCard,
  Gauge,
  ListChecks,
  ReceiptText,
} from "lucide-react";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

const viewCards = [
  {
    title: "Account Summary",
    items: ["Account type", "Bank", "Statement duration"],
    icon: ReceiptText,
  },
  {
    title: "Income",
    items: ["Salary amount", "Frequency", "Latest credit"],
    icon: Banknote,
  },
  {
    title: "Cash Flow",
    items: ["Credits", "Debits", "Average balance"],
    icon: Gauge,
  },
  {
    title: "Obligations",
    items: ["EMIs", "Bounces", "Charges", "FOIR"],
    icon: CreditCard,
  },
  {
    title: "Risk Indicators",
    items: ["Tamper score", "Fraud checks", "Alert signals"],
    icon: ListChecks,
  },
];

const reportGroups = [
  {
    title: "Balance & Cash-Flow Insights",
    items: [
      "Minimum balance",
      "Maximum balance",
      "Average EOD balance",
      "Monthly average balance",
      "Opening & closing balance",
    ],
  },
  {
    title: "Income & Salary Analysis",
    items: ["Salary credits", "Average salary", "Salary consistency", "Recurring income"],
  },
  {
    title: "Credits, Debits & Obligations",
    items: ["Total credits", "Total debits", "EMI repayments", "EMI bounces", "Penalty charges"],
  },
  {
    title: "Transaction Behaviour",
    items: ["Cash deposits", "Cash withdrawals", "Transfers", "Bills", "Shopping", "Travel", "Medical"],
  },
  {
    title: "Fraud & Irregularity Checks",
    items: [
      "Tamper confidence",
      "Balance mismatch",
      "Suspicious withdrawals",
      "Negative balances",
      "Irregular salary patterns",
    ],
  },
];

export default function FinancialViewSection() {
  return (
    <section id="sample-report" className="px-5 py-12 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="mx-auto max-w-[780px] text-center font-heading text-[28px] leading-[1.15] text-[#0b111f] sm:text-[36px] lg:text-[42px]">
          A complete financial view from{" "}
          <span className="text-primary">one bank statement.</span>
        </h2>

        <div className="mt-10 rounded-[28px] border border-[#e0e5eb] bg-white p-5 shadow-[0_18px_50px_rgba(47,91,255,0.08)] lg:mt-14 lg:p-10">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {viewCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  variants={createFadeInUp(index * 0.04)}
                  className="rounded-2xl border border-[#e0e5eb] bg-[#fbfcff] p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-[#eef2ff] text-primary">
                      <Icon className="size-4" />
                    </span>
                    <h3 className="text-[14px] font-semibold text-[#0b111f]">
                      {card.title}
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-[13px] text-[#626a75]"
                      >
                        <span className="size-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {reportGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={createFadeInUp(index * 0.04)}
              className="rounded-[20px] border border-[#e0e5eb] bg-white p-7 shadow-[0_8px_12px_rgba(0,0,0,0.06)]"
            >
              <h3 className="min-h-[48px] text-[16px] font-semibold leading-6 text-[#0b111f]">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[14px] leading-[1.45] text-[#626a75]"
                  >
                    <CircleCheck className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
