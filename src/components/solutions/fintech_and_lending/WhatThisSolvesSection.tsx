import { motion } from "framer-motion";
import { createFadeInUp, fadeItem, staggerContainer, viewportOnce } from "../../../utils/animations";
import lightningIcon from "../../../assets/solution_pages/fintech_and_lending/sections/what_this_solves/lightining.svg";
import userSearchIcon from "../../../assets/solution_pages/fintech_and_lending/sections/what_this_solves/user_search.svg";
import fraudIcon from "../../../assets/solution_pages/fintech_and_lending/sections/what_this_solves/fraud.svg";
import callIcon from "../../../assets/solution_pages/fintech_and_lending/sections/what_this_solves/call.svg";

const problems = [
  {
    icon: lightningIcon,
    title: "Slow onboarding",
    description: "Multiple KYC steps, broken journeys, and high user drop-offs.",
  },
  {
    icon: userSearchIcon,
    title: "Thin user context",
    description: "Limited borrower understanding beyond PAN, Aadhaar, and basic bureau data.",
  },
  {
    icon: fraudIcon,
    title: "Fraud and duplicate users",
    description: "Fake profiles, risky numbers, suspicious accounts, and repeated applications.",
  },
  {
    icon: callIcon,
    title: "Collections blind spots",
    description: "Poor reachability and weak contact signals after loan disbursal.",
  },
];

export default function WhatThisSolvesSection() {
  return (
    <section className="solution-what-section px-5 lg:px-12 py-14 lg:min-h-[754px] lg:pt-[120px] lg:pb-[118px] flex items-center justify-center overflow-hidden">
      <div className="max-w-[924px] mx-auto flex flex-col gap-10 items-center">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0)}
          className="font-heading text-[20px] md:text-[42px] leading-[1.3] text-black text-center"
        >
          What this solves
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="fintech-problems-grid"
        >
          {problems.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeItem}
              className="group bg-white rounded-[12px] w-full px-6 py-6 sm:px-[45px] sm:py-[23px] min-h-[166px] flex flex-col justify-center border border-transparent hover:border-[#C53637]/35 transition-colors duration-200"
            >
              <div className="flex flex-col gap-3">
                <img
                  src={item.icon}
                  alt=""
                  className="h-[53.075px] w-[53.075px] shrink-0"
                  width="54"
                  height="54"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex flex-col gap-[10px]">
                  <h3 className="text-base font-semibold leading-none text-black capitalize">
                    {item.title}
                  </h3>
                  <div className="w-[65px] h-px bg-[#C53637]" />
                  <p className="text-sm leading-[1.5] tracking-[-0.28px] text-black/60">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
