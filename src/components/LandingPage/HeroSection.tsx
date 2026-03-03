import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import Button from "../UI/Button";

const earthGlobe = "https://www.figma.com/api/mcp/asset/3e47cb91-b4cb-4660-927e-2441f5a99b15";
const ellipse1 = "https://www.figma.com/api/mcp/asset/23ff7d56-c53c-497f-9f03-655ae0de9113";
const ellipse2 = "https://www.figma.com/api/mcp/asset/56264dfa-2191-42e4-986c-8e09d1c3646e";
const ellipse3 = "https://www.figma.com/api/mcp/asset/92d2393e-c049-442b-89fc-d68c8bdc057f";
const circleDecoration = "https://www.figma.com/api/mcp/asset/926ce96f-0fdb-441a-8a32-5159367393d9";

// Partner logos
const partner1 = "https://www.figma.com/api/mcp/asset/a6fab1ae-eeb4-4007-881d-d5f18b814555";
const partner2 = "https://www.figma.com/api/mcp/asset/7c9a916d-157b-4eee-acd5-267d990c0002";
const partner3 = "https://www.figma.com/api/mcp/asset/0aca35e4-b827-4b21-a3a5-f4ead6295474";
const partner4 = "https://www.figma.com/api/mcp/asset/d46b2099-d59e-4811-83e4-9a918ff0c1bb";
const partner5 = "https://www.figma.com/api/mcp/asset/a065a8b6-163f-49d9-a621-86d3d086dac4";
const partner6 = "https://www.figma.com/api/mcp/asset/10ed48c5-49f7-4317-9be5-3bd470ffc5fc";

interface HeroSectionProps {
  bookDemo: () => void;
}

export default function HeroSection({ bookDemo }: HeroSectionProps) {
  return (
    <section className="relative bg-white rounded-b-[100px] lg:rounded-b-[150px] overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[150px] py-16 lg:py-24 relative min-h-[600px] lg:min-h-[750px]">
        {/* Text Content */}
        <div className="relative z-10 max-w-[650px]">
          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={createFadeInUp(0)}
            className="font-heading text-[40px] lg:text-[60px] leading-[1.3] tracking-[-1.2px] text-black"
          >
            The{" "}
            <span className="text-primary relative">
              <span className="relative z-10"> only</span>
            </span>{" "}
            identity and onboarding platform your business needs.
          </motion.h1>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={createFadeInUp(0.1)}
            className="mt-6 text-lg lg:text-xl text-black/60 leading-[1.5] tracking-[-0.4px] max-w-[600px]"
          >
            Verify users, businesses, employees, and prevent fraud{" "}
            <span className="font-semibold text-primary">globally</span> using a
            single integration without the complexity.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={createFadeInUp(0.2)}
            className="mt-10 flex flex-wrap gap-4"
          >
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
          </motion.div>
        </div>

        {/* Earth Globe Illustration */}
        <div className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-[55%] w-[636px] h-[700px]">
          {/* Orbit rings */}
          <img
            src={ellipse1}
            alt=""
            className="absolute inset-0 w-full h-full object-contain -rotate-15 opacity-60"
          />
          <img
            src={ellipse2}
            alt=""
            className="absolute inset-0 w-full h-full object-contain rotate-45 opacity-60"
          />
          <img
            src={ellipse3}
            alt=""
            className="absolute inset-0 w-full h-full object-contain rotate-[120deg] opacity-60"
          />
          {/* Globe */}
          <div className="absolute top-[17%] left-[14%] w-[72%] h-[65%] rounded-full overflow-hidden">
            <img
              src={earthGlobe}
              alt="Earth Globe"
              className="w-full h-full object-cover scale-150"
            />
          </div>
        </div>

        {/* Circle decoration */}
        <img
          src={circleDecoration}
          alt=""
          className="hidden lg:block absolute top-[14%] left-[12%] w-[100px] h-[80px] -scale-y-100 rotate-[162deg] opacity-40"
        />

        {/* Trusted Partners */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.3)}
          className="relative z-10 mt-16 lg:mt-24 max-w-[680px]"
        >
          <p className="text-base text-[#666] tracking-[-0.32px]">
            Trusted by{" "}
            <span className="font-semibold text-black">100+</span> startups and
            enterprises building onboarding in India and beyond.
          </p>
          <div className="flex flex-wrap items-center gap-5 mt-5">
            <img src={partner1} alt="Partner" className="h-[45px] w-auto object-contain" />
            <img src={partner2} alt="Partner" className="h-[28px] w-auto object-contain" />
            <img src={partner3} alt="Partner" className="h-[29px] w-auto object-contain" />
            <img src={partner4} alt="Partner" className="h-[53px] w-auto object-contain" />
            <img src={partner5} alt="Partner" className="h-[53px] w-auto object-contain" />
            <img src={partner6} alt="Partner" className="h-[34px] w-auto object-contain" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
