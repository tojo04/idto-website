import { motion } from "framer-motion";
import { createFadeInUp, fadeItem, staggerContainer, viewportOnce } from "../../../utils/animations";
import paymentIcon from "../../../assets/solution_pages/marketplaces/sections/what_this_solves/payment.svg";
import shopIcon from "../../../assets/solution_pages/marketplaces/sections/what_this_solves/shop.svg";
import tickIcon from "../../../assets/solution_pages/marketplaces/sections/what_this_solves/tick.svg";
import userIcon from "../../../assets/solution_pages/marketplaces/sections/what_this_solves/user.svg";

const problems = [
  {
    icon: shopIcon,
    title: "Low seller trust",
    description: "Marketplaces need to know who is selling, servicing, or receiving money.",
  },
  {
    icon: userIcon,
    title: "Fake buyers and abuse",
    description: "Duplicate users, spam accounts, and risky numbers create platform friction.",
  },
  {
    icon: paymentIcon,
    title: "Payout issues",
    description: "Wrong bank accounts and weak beneficiary checks create operational problems.",
  },
  {
    icon: tickIcon,
    title: "Manual onboarding",
    description: "Ops teams spend too much time verifying users, sellers, and service providers.",
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
              className="group bg-white rounded-[12px] w-full px-6 py-6 sm:px-[45px] sm:py-[23px] min-h-[189px] flex flex-col justify-center border border-transparent hover:border-[#C53637]/35 transition-colors duration-200"
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
