import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import Button from "../UI/Button";
import globeBackgroundDesktop from "../../assets/Background Images.png";

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
        className="max-w-[1440px] mx-auto bg-white rounded-[40px] min-[700px]:rounded-[45px] overflow-hidden relative min-[700px]:min-h-107.5"
      >
        {/* Desktop globe (700px+): scales down on narrower screens */}
        <div
          className="hidden min-[700px]:block absolute inset-y-0 pointer-events-none"
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
        <div className="relative z-10 px-[25px] py-10 min-[700px]:px-22.5 min-[700px]:py-[clamp(40px,3.5vw,64px)] min-[700px]:pr-[clamp(360px,38vw,640px)]">
          <div className="flex flex-col gap-[45px] items-center text-center max-w-[342px] mx-auto min-[700px]:mx-0 min-[700px]:items-start min-[700px]:text-left min-[700px]:gap-15 min-[700px]:max-w-[clamp(430px,35vw,600px)]">
            <div className="flex flex-col gap-[18px] min-[700px]:gap-6">
              <h2 className="font-heading text-[20px] min-[700px]:text-[42px] leading-[1.1] tracking-[-0.02em] min-[700px]:tracking-[-0.96px] text-black">
                Identity onboarding, without the{" "}
                <span className="text-primary">complexity.</span>
              </h2>
              <p className="text-[12px] min-[700px]:text-[18px] text-black/60 leading-[150%]">
                Build on idto and focus on your product, not identity overhead.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-[15px] min-[700px]:justify-start min-[700px]:gap-4">
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
