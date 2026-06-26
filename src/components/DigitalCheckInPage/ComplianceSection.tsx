import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import { complianceSteps, whyItMatters } from "./data";

export default function ComplianceSection() {
  return (
    <section className="bg-white px-5 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1112px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
          className="text-center"
        >
          <h2 className="font-heading text-[32px] leading-[1.16] text-[#07111f] lg:text-[46px]">
            DPDP-Ready <span className="text-primary">Digital Check-In.</span>
          </h2>
          <p className="mt-4 text-[16px] leading-[1.6] text-[#5f6573] lg:text-[18px]">
            Protect guest privacy. Reduce hotel risk.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {complianceSteps.map((step, index) => (
            <motion.article
              key={step}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={createFadeInUp(index * 0.04)}
              className="rounded-[22px] border border-[#e2e8f2] bg-[#f9fbff] p-6"
            >
              <span className="text-[13px] font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-[19px] font-semibold text-[#111827]">{step}</h3>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.08)}
          className="mx-auto mt-10 max-w-[760px] rounded-[28px] border border-[#e2e8f2] bg-[#07111f] p-7 text-white"
        >
          <h3 className="font-heading text-[28px] leading-[1.2]">Why It Matters</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {whyItMatters.map((item) => (
              <p key={item} className="flex items-center gap-2 text-[15px] text-white/85">
                <CheckCircle2 className="size-4 text-[#54eebe]" />
                {item}
              </p>
            ))}
          </div>
          <p className="mt-5 text-[15px] font-medium text-white">
            Just a safer, cleaner and more compliant guest experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
