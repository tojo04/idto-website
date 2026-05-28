import { motion } from "framer-motion";
import { createFadeInUp, scaleIn, viewportOnce } from "../../../utils/animations";
import heroVisual from "../../../assets/solution_pages/gig_economy/sections/hero/31bac13510ca2e60d7fc56ebd5d768e7a66487af.png";

export default function HeroSection() {
  return (
    <section className="solution-hero-section bg-white rounded-b-[40px] lg:rounded-b-[112px] px-5 lg:px-10 min-[1440px]:px-[111px] pt-8 lg:pt-[95px] pb-10 lg:pb-[95px] overflow-hidden">
      <div className="solution-hero-inner gig-hero-inner relative isolate mx-auto flex max-w-[1215px] flex-col lg:block lg:h-[344px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0)}
          className="order-1 relative z-20 text-center lg:absolute lg:left-0 lg:top-[24px] lg:w-[723px] lg:text-left"
        >
          <h1 className="font-heading text-[20px] md:text-[42px] lg:w-[807px] lg:text-[42px] leading-[1.3] tracking-[0.6px] lg:tracking-[-0.84px] text-black">
            Gig worker verification in under 10 minutes.
          </h1>
          <p className="mt-[18px] max-w-[329px] lg:max-w-[594px] mx-auto lg:mx-0 text-[12px] lg:text-[18px] leading-[1.5] tracking-[-0.24px] lg:tracking-[-0.36px] text-black/60">
            Verify gig workers, documents, bank accounts, face, and contactability quickly so teams can onboard faster without compromising trust.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={scaleIn}
          className="solution-hero-visual gig-hero-visual order-2 relative z-0 mx-auto mt-5 h-[187px] w-full max-w-[330px] overflow-hidden sm:h-[249px] sm:max-w-[440px] lg:absolute lg:left-[720px] lg:top-0 lg:mx-0 lg:mt-0 lg:h-[344px] lg:w-[607px] lg:max-w-none"
        >
          <img
            src={heroVisual}
            alt="Gig worker verification workflow"
            className="gig-hero-image absolute left-[-16.48%] top-[-2.9%] h-[102.9%] w-[116.48%] max-w-none object-cover"
            loading="eager"
            decoding="async"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.15)}
          className="order-3 relative z-20 mt-6 flex flex-col gap-[18px] items-center lg:absolute lg:left-0 lg:top-[239px] lg:mt-0 lg:items-start"
        >
          <div className="flex flex-wrap gap-[15px] items-center justify-center lg:gap-[13.5px] lg:justify-start">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full border-[1.125px] border-transparent bg-primary text-white w-[110px] h-[36px] lg:w-auto lg:h-12 lg:px-[27px] text-[12px] lg:text-base font-semibold tracking-[-0.32px] hover:bg-primary-dark transition-colors whitespace-nowrap"
            >
              Talk to us
            </a>
            <a
              href="#gig-stack"
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
