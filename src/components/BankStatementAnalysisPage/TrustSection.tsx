import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import trustRiskAnalytics from "../../assets/product_pages/BankStatementAnalysis/trust_risk_analytics.webp";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

const trustPoints = [
  "Transaction Intelligence",
  "Income Verification",
  "EMI Detection",
  "Cash Flow Analysis",
  "Fraud Signals",
  "Risk Indicators",
];

export default function TrustSection() {
  return (
    <section className="px-5 py-12 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
        >
          <span className="text-[12px] font-semibold uppercase leading-[18px] tracking-[1.2px] text-primary">
            Trust & accuracy
          </span>
          <h2 className="mt-4 font-heading text-[30px] leading-[1.15] text-[#0b111f] sm:text-[38px] lg:text-[42px]">
            Trusted Financial Analysis.
            <br />
            <span className="text-primary">Reliable Credit Decisions.</span>
          </h2>
          <p className="mt-5 max-w-[512px] text-[15px] font-semibold leading-[1.55] text-[#626a75]">
            Enable underwriting teams to move faster with structured financial
            data, fraud indicators and transaction intelligence.
          </p>
          <div className="mt-7 grid max-w-[480px] gap-x-6 gap-y-3 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <span
                key={point}
                className="inline-flex items-center gap-2 text-[15px] font-semibold leading-5 text-[#0b111f]"
              >
                <span className="flex size-5 items-center justify-center rounded-full bg-primary text-white">
                  <CircleCheck className="size-3" />
                </span>
                {point}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.08)}
          className="mx-auto w-full max-w-[520px]"
        >
          <img
            src={trustRiskAnalytics}
            alt="Trust and risk analytics"
            className="w-full object-contain"
            width="520"
            height="520"
          />
        </motion.div>
      </div>
    </section>
  );
}
