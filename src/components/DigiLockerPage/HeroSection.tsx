import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import heroVisual from "../../assets/product_pages/DIGILOCKER/Hero_Image.png";
import partner1 from "../../assets/product_pages/DIGILOCKER/partner_logos/hero_partner_1.png";
import partner2 from "../../assets/product_pages/DIGILOCKER/partner_logos/hero_partner_2.png";
import partner3 from "../../assets/product_pages/DIGILOCKER/partner_logos/hero_partner_3.png";

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
            className="order-1 relative z-10 lg:mt-16 lg:max-w-[772px]"
          >
            <h1 className="font-heading text-[20px] md:text-[42px] lg:text-[42px] leading-[1.3] tracking-[-0.02em] text-black text-center lg:text-left lg:whitespace-nowrap">
              The most compliant and fastest
              <br className="hidden lg:block" /> way to verify your users with
              <br className="hidden lg:block" />{" "}
              <span className="text-primary">DigiLocker 3.0</span>
            </h1>

            <p className="mt-[18px] text-[12px] lg:text-[18px] leading-[1.5] tracking-[-0.36px] text-black/60 max-w-[764px] mx-auto lg:mx-0 text-center lg:text-left">
              Move to a compliant DigiLocker flow in under 5 minutes and improve
              <br className="hidden lg:block" /> onboarding conversion by 15-20%.
            </p>
          </motion.div>

          {/* Hero image — between text and buttons on mobile, overlaps on lg */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={createFadeInUp(0.08)}
            className="order-2 w-full max-w-[500px] mx-auto -ml-8 sm:ml-auto mt-6 lg:mt-0 lg:max-w-[770px] lg:absolute lg:right-0 lg:top-0 lg:w-[62%] lg:ml-0"
          >
            <img
              src={heroVisual}
              alt="DigiLocker product interface"
              className="w-full h-auto object-cover"
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
                href="https://cal.com/adityaskx-idto/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-[1.125px] border-transparent bg-primary text-white px-[27px] py-[13.5px] text-[12px] lg:text-base font-semibold tracking-[-0.32px] hover:bg-primary-dark transition-colors whitespace-nowrap"
              >
                Talk to sales
              </a>
              <a
                href="https://dashboard.idto.ai/signup/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-[1.125px] border-primary text-primary px-[27px] py-[13.5px] text-[12px] lg:text-base font-semibold tracking-[-0.32px] hover:bg-primary/5 transition-colors w-[144px]"
              >
                Sign-up
              </a>
            </div>
            <p className="text-xs leading-[1.5] tracking-[-0.24px] text-[#666] text-center lg:text-left w-full lg:w-auto">
              Used by digital-first lenders, fintechs, and regulated onboarding teams.
            </p>
          </motion.div>
        </div>

        {/* Partner strip */}
        <div className="mt-8 lg:mt-[30px] flex flex-col gap-[30px] items-center w-full">
          <div className="flex flex-col gap-[10px] items-center w-full">
            <p className="text-xs uppercase tracking-[1.2px] text-[#666] text-center leading-4">
              Backed by trusted partners
            </p>
            <div className="w-full h-px bg-black/10" />
          </div>
          <div className="flex items-center justify-center gap-6 sm:gap-10 lg:gap-[80px] flex-wrap">
            <img src={partner1} alt="Partner" className="h-[35px] sm:h-[45px] w-auto object-contain" />
            <img src={partner2} alt="Partner" className="h-[48px] sm:h-[60px] w-auto object-contain" />
            <img src={partner3} alt="Partner" className="h-[28px] sm:h-[38px] w-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
