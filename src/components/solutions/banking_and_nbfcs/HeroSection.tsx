import { motion } from "framer-motion";
import { createFadeInUp, scaleIn, viewportOnce } from "../../../utils/animations";
import heroVisual from "../../../assets/solution_pages/banking_and_nbfcs/sections/hero/2362868d260027300d99010ee0de8c38f6fc9637 (1).png";

export default function HeroSection() {
  return (
    <section className="solution-hero-section bg-white rounded-b-[40px] lg:rounded-b-[112px] px-5 lg:px-10 min-[1440px]:px-[111px] pt-8 lg:pt-[95px] pb-10 lg:pb-[95px] overflow-hidden">
      <div className="solution-hero-inner relative isolate mx-auto flex max-w-[1217px] flex-col lg:block lg:h-[345px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0)}
          className="order-1 relative z-20 text-center lg:absolute lg:left-0 lg:top-[39px] lg:w-[723px] lg:text-left"
        >
          <h1 className="font-heading text-[20px] md:text-[42px] lg:w-[807px] lg:text-[42px] leading-[1.3] tracking-[0.6px] lg:tracking-[-0.84px] text-black">
            Compliant verification workflows for
            <br className="hidden lg:block" />
            <span className="lg:hidden"> </span>
            banks and NBFCs.
          </h1>
          <p className="mt-[18px] max-w-[329px] lg:max-w-[594px] mx-auto lg:mx-0 text-[12px] lg:text-[18px] leading-[1.5] tracking-[-0.24px] lg:tracking-[-0.36px] text-black/60">
            Run KYC, CKYC, bank account verification, document checks, and customer intelligence workflows through one secure identity layer.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={scaleIn}
          className="solution-hero-visual order-2 relative z-0 mx-auto mt-5 h-[230px] w-full max-w-[330px] overflow-hidden sm:h-[300px] sm:max-w-[430px] lg:absolute lg:left-[668px] lg:top-0 lg:mx-0 lg:mt-0 lg:h-[345px] lg:w-[549px] lg:max-w-none"
        >
          <img
            src={heroVisual}
            alt="Banking and NBFC verification workflow"
            className="absolute left-[-40.09%] top-0 z-0 h-full w-[140.09%] max-w-none object-cover"
            loading="eager"
            decoding="async"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.15)}
          className="order-3 relative z-20 mt-6 flex flex-col gap-[18px] items-center lg:absolute lg:left-0 lg:top-[261px] lg:mt-0 lg:items-start"
        >
          <div className="flex flex-wrap gap-[15px] items-center justify-center lg:gap-[13.5px] lg:justify-start">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full border-[1.125px] border-transparent bg-primary text-white w-[110px] h-[36px] lg:w-auto lg:h-12 lg:px-[27px] text-[12px] lg:text-base font-semibold tracking-[-0.32px] hover:bg-primary-dark transition-colors whitespace-nowrap"
            >
              Talk to us
            </a>
            <a
              href="#banking-stack"
              className="inline-flex items-center justify-center rounded-full border-[1.125px] border-primary text-primary w-[150px] h-[36px] lg:w-[173px] lg:h-12 lg:px-[27px] text-[12px] lg:text-base font-semibold tracking-[-0.32px] hover:bg-primary/5 transition-colors whitespace-nowrap"
            >
              Explore Solutions
            </a>
          </div>
          <p className="max-w-[329px] lg:max-w-none text-xs leading-[1.5] tracking-[-0.24px] text-[#666] text-center lg:text-left">
            Built for regulated banks, NBFCs, lending operations, and digital customer teams.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
