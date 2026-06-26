import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

export default function CTASection() {
  return (
    <section className="bg-[#f7f9fc] px-5 py-16 lg:px-12 lg:py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={createFadeInUp()}
        className="mx-auto max-w-[1024px] rounded-[34px] bg-[#07111f] px-6 py-12 text-center text-white lg:px-12"
      >
        <h2 className="font-heading text-[32px] leading-[1.16] lg:text-[46px]">
          The future of check-in is <span className="text-[#54eebe]">no check-in.</span>
        </h2>
        <p className="mt-5 text-[16px] leading-[1.6] text-white/75 lg:text-[18px]">
          Digital. DPDP-ready. Plug-and-play. Personalized. Powered by idto.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="/demo/"
            className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full bg-white px-6 text-[15px] font-semibold text-primary transition-colors hover:bg-white/90"
          >
            Get Started
            <ArrowRight className="size-4" />
          </a>
          <a
            href="/contact-us/"
            className="inline-flex h-[46px] items-center justify-center rounded-full border border-white/50 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            Talk to an Expert
          </a>
        </div>
      </motion.div>
    </section>
  );
}
