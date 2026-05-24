import { motion } from "framer-motion";
import { createFadeInUp, scaleIn, viewportOnce } from "../../../utils/animations";
import heroVisual from "../../../assets/solution_pages/social_and_community/sections/hero/5edf52fc04d2083fd3630cbb504f86f0e319c971.png";

export default function HeroSection() {
  return (
    <section className="solution-hero-section bg-white rounded-b-[40px] lg:rounded-b-[112px] px-5 lg:px-10 min-[1440px]:px-[111px] pt-8 lg:pt-[95px] pb-10 lg:pb-[95px] overflow-hidden">
      <div className="solution-hero-inner social-community-hero-inner relative isolate mx-auto flex max-w-[1253px] flex-col lg:block lg:h-[428px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0)}
          className="order-1 relative z-20 text-center lg:absolute lg:left-0 lg:top-[59px] lg:w-[723px] lg:text-left"
        >
          <h1 className="font-heading text-[20px] md:text-[42px] lg:w-[807px] lg:text-[42px] leading-[1.3] tracking-[0.6px] lg:tracking-[-0.84px] text-black">
            Identity and trust workflows for social
            <br className="hidden lg:block" />
            <span className="lg:hidden"> </span>
            and community platforms.
          </h1>
          <p className="mt-[18px] max-w-[329px] lg:max-w-[594px] mx-auto lg:mx-0 text-[12px] lg:text-[18px] leading-[1.5] tracking-[-0.24px] lg:tracking-[-0.36px] text-black/60">
            Reduce fake accounts, duplicate profiles, abuse, unsafe payouts, and trust gaps across user-generated platforms.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={scaleIn}
          className="solution-hero-visual social-community-hero-visual order-2 relative z-0 mx-auto mt-5 h-[235px] w-full max-w-[330px] overflow-hidden sm:h-[315px] sm:max-w-[440px] lg:absolute lg:left-[650px] lg:top-0 lg:mx-0 lg:mt-0 lg:h-[500px] lg:w-[705px] lg:max-w-none"
        >
          <img
            src={heroVisual}
            alt="Social and community trust workflow"
            className="social-community-hero-image absolute left-[-35.94%] top-0 h-full w-[135.94%] max-w-none object-cover"
            loading="eager"
            decoding="async"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.15)}
          className="order-3 relative z-20 mt-6 flex flex-col gap-[18px] items-center lg:absolute lg:left-0 lg:top-[281px] lg:mt-0 lg:items-start"
        >
          <div className="flex flex-wrap gap-[15px] items-center justify-center lg:gap-[13.5px] lg:justify-start">
            <a
              href="https://cal.com/adityaskx-idto/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-[1.125px] border-transparent bg-primary text-white w-[110px] h-[36px] lg:w-auto lg:h-12 lg:px-[27px] text-[12px] lg:text-base font-semibold tracking-[-0.32px] hover:bg-primary-dark transition-colors whitespace-nowrap"
            >
              Talk to us
            </a>
            <a
              href="#social-community-stack"
              className="inline-flex items-center justify-center rounded-full border-[1.125px] border-primary text-primary w-[150px] h-[36px] lg:w-[173px] lg:h-12 lg:px-[27px] text-[12px] lg:text-base font-semibold tracking-[-0.32px] hover:bg-primary/5 transition-colors whitespace-nowrap"
            >
              Explore Solutions
            </a>
          </div>
          <p className="max-w-[329px] lg:max-w-none text-xs leading-[1.5] tracking-[-0.24px] text-[#666] text-center lg:text-left">
            Built for teams across fintech, marketplaces, digital platforms, gig networks, and customer operations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
