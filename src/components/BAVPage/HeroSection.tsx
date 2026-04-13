import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import heroVisual from "../../assets/product_pages/BAV/Hero_image.png";
import heroVisualDesktop from "../../assets/product_pages/BAV/bav_hero_desktop.png";


export default function HeroSection() {
  return (
    <section className="bg-white rounded-b-[40px] lg:rounded-b-[112px] px-5 lg:px-10 xl:px-16 pt-8 lg:pt-12 pb-10 lg:pb-16 overflow-hidden">
      <div className="max-w-[1237px] mx-auto relative">
        <div className="flex flex-col lg:grid lg:grid-cols-1 lg:relative">
          {/* Title + subtitle */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={createFadeInUp(0)}
            className="order-1 relative z-10 lg:mt-16 lg:max-w-[699px]"
          >
            <h1 className="font-heading text-[20px] md:text-[42px] lg:text-[42px] leading-[1.3] tracking-[0.6px] lg:tracking-[-0.02em] text-black text-center lg:text-left">
              <span className="text-primary">Bank Account Verification</span>
              {" \u2011 Smarter. Faster. Built for Scale."}
            </h1>
            <p className="mt-[18px] lg:mt-[36px] text-[12px] lg:text-[18px] leading-[1.5] tracking-[-0.24px] lg:tracking-[-0.36px] text-black/60 max-w-[329px] lg:max-w-[594px] mx-auto lg:mx-0 text-center lg:text-left">
              One intelligent verification layer for payouts, onboarding, and
              disbursals — built for higher success rates, broader coverage,
              transparent outputs, and enterprise-grade reliability.
            </p>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={createFadeInUp(0.08)}
            className="order-2 w-full max-w-[310px] mx-auto mt-5 lg:mt-0 lg:max-w-[580px] lg:absolute lg:right-0 lg:top-[40px] lg:w-[46%] lg:pointer-events-none"
          >
            <img
              src={heroVisual}
              alt="Bank Account Verification product interface"
              className="w-full h-auto object-cover lg:hidden"
            />
            <img
              src={heroVisualDesktop}
              alt="Bank Account Verification product interface"
              className="hidden lg:block w-full h-auto object-cover"
            />
          </motion.div>

          {/* Buttons + used-by text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={createFadeInUp(0.15)}
            className="order-3 relative z-10 mt-6 lg:mt-10 flex flex-col gap-[18px] items-center lg:items-start"
          >
            <div className="flex flex-wrap gap-[13.5px] items-center justify-center lg:justify-start">
              <a
                href="https://dashboard.idto.ai/signup/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-[1.125px] border-transparent bg-primary text-white w-[110px] h-[36px] lg:w-auto lg:h-auto lg:px-[27px] lg:py-[13.5px] text-[12px] lg:text-base font-semibold tracking-[-0.32px] hover:bg-primary-dark transition-colors whitespace-nowrap"
              >
                Start Testing
              </a>
              <a
                href="https://docs.idto.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-[1.125px] border-primary text-primary w-[110px] h-[36px] lg:w-auto lg:h-auto lg:px-[27px] lg:py-[13.5px] text-[12px] lg:text-base font-medium lg:font-semibold tracking-[0.36px] lg:tracking-[-0.32px] hover:bg-primary/5 transition-colors whitespace-nowrap"
              >
                View API Docs
              </a>
            </div>
            <p className="text-xs leading-[1.5] tracking-[-0.24px] text-[#666] text-center lg:text-left w-full lg:w-auto">
              Used by digital-first lenders, fintechs, and payout-heavy
              platforms.
            </p>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
