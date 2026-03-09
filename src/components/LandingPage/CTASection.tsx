import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import Button from "../UI/Button";
import earthGlobe from "../../assets/earthglobe.png";

interface CTASectionProps {
  bookDemo: () => void;
}

export default function CTASection({ bookDemo }: CTASectionProps) {
  return (
    <section className="px-5 lg:px-37.5 py-12 lg:py-37.5">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={createFadeInUp()}
        className="max-w-405 mx-auto bg-white rounded-[28px] lg:rounded-[60px] overflow-hidden relative"
      >
        {/* Background Globe — only ~1/4 visible, cropped right */}
        <div className="absolute right-[-75%] lg:right-[-55%] top-1/2 -translate-y-1/2 w-[350px] lg:w-300 h-[350px] lg:h-300 opacity-40 pointer-events-none">
          <img
            src={earthGlobe}
            alt=""
            className="w-full h-full object-contain rotate-[-21deg]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 lg:p-22.5">
            <div className="flex flex-col gap-8 lg:gap-15 max-w-150">
            <div className="flex flex-col gap-6">
              <h2 className="font-heading text-[22px] lg:text-[48px] leading-[1.1] tracking-[-0.96px] text-black">
                Identity onboarding, without the{" "}
                <span className="text-primary">complexity.</span>
              </h2>
              <p className="text-sm lg:text-xl text-black/60 leading-normal">
                Build on idto and focus on your product, not identity overhead.
              </p>
            </div>

            <div className="flex flex-wrap gap-[15px] lg:gap-4">
              <Button
                title="Sign-up"
                href="https://dashboard.idto.ai/signup/"
                variant="primary"
                size="lg"
              />
              <Button
                title="Book a demo"
                onClick={bookDemo}
                variant="outline"
                size="lg"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
