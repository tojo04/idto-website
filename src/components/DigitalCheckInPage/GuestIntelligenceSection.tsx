import { BrainCircuit, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import { intelligenceSignals, intelligenceStats } from "./data";

export default function GuestIntelligenceSection() {
  return (
    <section className="bg-[#f7f9fc] px-5 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1112px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
          className="mx-auto max-w-[780px] text-center"
        >
          <h2 className="font-heading text-[32px] leading-[1.16] text-[#07111f] lg:text-[46px]">
            Turn Check-In Into <span className="text-primary">Guest Intelligence.</span>
          </h2>
          <p className="mt-4 text-[16px] leading-[1.6] text-[#5f6573] lg:text-[18px]">
            Understand your guests better, with consent. Capture and structure
            guest insights across these signals.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {intelligenceSignals.map((signal, index) => (
            <motion.article
              key={signal}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={createFadeInUp(index * 0.03)}
              className="rounded-[20px] border border-[#e2e8f2] bg-white p-5"
            >
              <span className="flex size-8 items-center justify-center rounded-full bg-[#edf4ff] text-primary">
                <BrainCircuit className="size-4" />
              </span>
              <h3 className="mt-4 text-[16px] font-semibold text-[#111827]">{signal}</h3>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {intelligenceStats.map(({ label, value, detail }, index) => (
            <motion.article
              key={label}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={createFadeInUp(index * 0.05)}
              className="rounded-[22px] border border-[#e2e8f2] bg-white p-6"
            >
              <p className="text-[13px] font-medium text-[#667085]">{label}</p>
              <p className="mt-2 font-heading text-[42px] leading-none text-[#07111f]">{value}</p>
              <p className="mt-3 flex items-center gap-2 text-[14px] font-medium text-primary">
                <TrendingUp className="size-4" />
                {detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
