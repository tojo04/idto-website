import { motion } from "framer-motion";
import verificationShield from "../../assets/product_pages/FaceMatchLiveness/verification_shield.png";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

const chips = [
  "Face Match",
  "Liveness Detection",
  "Image Quality",
  "Fraud Signals",
  "Real-time Decisions",
  "Verification Reports",
  "Similarity Scores",
];

export default function IntelligenceSection() {
  return (
    <section className="overflow-hidden bg-[#2448bd] px-5 py-16 text-white lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.8fr)]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
        >
          <h2 className="font-heading text-[30px] leading-[1.15] sm:text-[40px]">
            Real-Time Face Verification
            <br />
            Intelligence
          </h2>
          <p className="mt-5 max-w-[560px] text-[15px] leading-[1.7] text-white/78">
            Access face match, liveness detection, image quality validation,
            and fraud signals through a single API.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/22 bg-white/10 px-4 py-2 text-[13px] font-medium leading-none text-white"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.08)}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <img
            src={verificationShield}
            alt="Verification shield for face match and liveness checks"
            className="mx-auto w-full max-w-[390px] object-contain"
            width="489"
            height="489"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
