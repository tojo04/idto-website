import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import Button from "../UI/Button";
import globeBackgroundDesktop from "../../assets/Background Images.png";
import globeBackgroundMobile from "../../assets/Background Images (1).png";

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
        className="max-w-405 mx-auto bg-white rounded-[40px] overflow-hidden relative min-h-[493px] lg:min-h-107.5"
      >
        {/* Mobile uses the original oversized Figma asset with fixed offsets */}
        <div className="absolute left-[-100%] top-[10px] w-[225.2%] max-w-none pointer-events-none lg:hidden">
          <img
            src={globeBackgroundMobile}
            alt=""
            className="block w-full h-auto"
          />
        </div>

        {/* Desktop background scales down on narrower desktops to preserve text-image breathing room */}
        <div
          className="hidden lg:block absolute inset-y-0 pointer-events-none"
          style={{
            right: "clamp(-24px, -1.2vw, 0px)",
            width: "clamp(420px, 45vw, 1005px)",
          }}
        >
          <img
            src={globeBackgroundDesktop}
            alt=""
            className="w-full h-full object-cover object-bottom-right"
          />
          <div className="absolute inset-y-0 left-0 w-[clamp(140px,12vw,240px)] bg-linear-to-r from-white via-white/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-7 pt-10 pb-[214px] lg:px-22.5 lg:py-[clamp(40px,3.5vw,64px)] lg:pr-[clamp(360px,38vw,640px)]">
          <div className="flex flex-col gap-5 lg:gap-15 max-w-[342px] lg:max-w-[clamp(430px,35vw,600px)]">
            <div className="flex flex-col gap-2.5 lg:gap-6">
              <h2 className="font-heading text-[20px] lg:text-[48px] leading-[1.1] tracking-[-0.02em] lg:tracking-[-0.96px] text-black">
                Identity onboarding, without the{" "}
                <span className="text-primary">complexity.</span>
              </h2>
              <p className="text-[12px] lg:text-xl text-black/60 leading-[150%]">
                Build on idto and focus on your product, not identity overhead.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-[15px] lg:gap-4">
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
