import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import Button from "../UI/Button";

const earthGlobe = "https://www.figma.com/api/mcp/asset/c1ab3249-f182-4eb9-84fd-ef9367f96bf3";

interface CTASectionProps {
  bookDemo: () => void;
}

export default function CTASection({ bookDemo }: CTASectionProps) {
  return (
    <section className="px-6 lg:px-[150px] py-20 lg:py-[150px]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={createFadeInUp()}
        className="max-w-[1620px] mx-auto bg-white rounded-[40px] lg:rounded-[60px] overflow-hidden relative"
      >
        {/* Background Globe */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] lg:w-[1000px] h-[600px] lg:h-[1000px] opacity-30 pointer-events-none">
          <img
            src={earthGlobe}
            alt=""
            className="w-full h-full object-contain rotate-[-21deg]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-10 lg:p-[90px]">
          <div className="flex flex-col gap-10 lg:gap-[60px] max-w-[600px]">
            <div className="flex flex-col gap-6">
              <h2 className="font-heading text-[36px] lg:text-[48px] leading-[1.1] tracking-[-0.96px] text-black">
                Identity onboarding, without the{" "}
                <span className="text-primary">complexity.</span>
              </h2>
              <p className="text-xl text-black/60 leading-[1.5]">
                Build on idto and focus on your product, not identity overhead.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
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
