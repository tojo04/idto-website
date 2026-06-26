import { motion } from "framer-motion";
import financialShield from "../../assets/product_pages/BankStatementAnalysis/financial_intelligence_shield.webp";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

const signals = [
  "OCR Extraction",
  "Transaction Categorisation",
  "Salary Detection",
  "Cash Flow Analysis",
  "EMI Tracking",
  "Fraud Detection",
  "Risk Indicators",
];

export default function FinancialIntelligenceSection() {
  return (
    <section className="overflow-hidden bg-blue-section px-5 py-14 shadow-[0_30px_80px_-30px_rgba(47,91,255,0.6)] lg:px-12 lg:py-16">
      <div className="mx-auto grid max-w-[1215px] items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
        >
          <h2 className="font-heading text-[30px] leading-[1.15] text-white sm:text-[38px] lg:text-[42px]">
            Financial Intelligence From
            <br />
            Every Transaction
          </h2>
          <p className="mt-5 max-w-[512px] text-[14px] font-medium leading-[1.6] text-white/85">
            Convert raw bank statement PDFs into structured financial
            intelligence through a single API.
          </p>
          <div className="mt-7 flex max-w-[580px] flex-wrap gap-3">
            {signals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-white/25 bg-white/15 px-4 py-2.5 text-[13px] font-medium leading-none text-white backdrop-blur"
              >
                {signal}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.08)}
          className="mx-auto w-full max-w-[460px]"
        >
          <img
            src={financialShield}
            alt="Financial intelligence shield"
            className="w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
            width="460"
            height="460"
          />
        </motion.div>
      </div>
    </section>
  );
}
