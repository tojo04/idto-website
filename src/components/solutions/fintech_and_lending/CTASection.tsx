import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../../utils/animations";
import partner1 from "../../../assets/solution_pages/trust_partner/2279e26af44ce4966be21960219ca4e40dc8bcb8.png";
import partner2 from "../../../assets/solution_pages/trust_partner/c085f2d06d11f7587b1b367e1dde3bbff9df2b5c.png";
import partner3 from "../../../assets/solution_pages/trust_partner/c32420383094e102fb8b27a55fafa52b3a5abb73.png";

export default function CTASection() {
  return (
    <section className="solution-cta-section px-5 lg:px-12 py-10 lg:py-[112.5px]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={createFadeInUp(0)}
        className="max-w-[1215px] mx-auto bg-white rounded-[40px] lg:rounded-[45px] px-[25px] py-10 md:p-12 lg:p-[67.5px] overflow-hidden"
      >
        <div className="max-w-[1072px] mx-auto flex flex-col gap-[50px] items-center">
          <div className="flex flex-col gap-[45px] items-center justify-center w-full">
            <h2 className="max-w-[1069px] font-heading text-[20px] md:text-[42px] leading-[1.1] tracking-[-0.4px] lg:tracking-[-0.84px] text-black text-center">
              Build faster fintech onboarding and
              <br />
              risk workflows with idto.
            </h2>

            <div className="flex flex-wrap gap-[13.5px] items-center justify-center">
              <a
                href="https://cal.com/adityaskx-idto/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-[1.125px] border-transparent bg-primary text-white w-[110px] h-[36px] lg:w-auto lg:h-auto lg:px-[27px] lg:py-[13.5px] text-[12px] lg:text-base font-semibold tracking-[-0.32px] hover:bg-primary-dark transition-colors whitespace-nowrap"
              >
                Talk to us
              </a>
              <a
                href="https://dashboard.idto.ai/signup/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-[1.125px] border-primary text-primary w-[110px] h-[36px] lg:w-auto lg:h-auto lg:px-[27px] lg:py-[13.5px] text-[12px] lg:text-base font-medium lg:font-semibold tracking-[0.36px] lg:tracking-[-0.32px] hover:bg-primary/5 transition-colors whitespace-nowrap"
              >
                Sign-up
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-[30px] items-center w-full">
            <div className="flex flex-col gap-[10px] items-center w-full">
              <p className="text-xs uppercase tracking-[1.2px] text-[#666] text-center leading-4">
                Built for modern customer workflows across onboarding, fraud, operations, and recovery.
              </p>
              <div className="w-full h-px bg-black/10" />
            </div>
            <div className="solution-cta-logos">
              <img src={partner2} alt="Trusted partner" className="solution-cta-logo-wide" width="143" height="50" loading="lazy" decoding="async" />
              <span className="flex items-center justify-center">
                <img src={partner1} alt="Trusted partner" className="solution-cta-logo-badge" width="72" height="72" loading="lazy" decoding="async" />
              </span>
              <img src={partner3} alt="Trusted partner" className="solution-cta-logo-mid" width="112" height="50" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
