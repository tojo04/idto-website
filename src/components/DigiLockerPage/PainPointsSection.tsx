import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import clockIcon from "../../assets/product_pages/DIGILOCKER/sections/Problems_Section/Clock.svg";
import keyIcon from "../../assets/product_pages/DIGILOCKER/sections/Problems_Section/Key.svg";
import failedIcon from "../../assets/product_pages/DIGILOCKER/sections/Problems_Section/Failed.svg";
import documentIcon from "../../assets/product_pages/DIGILOCKER/sections/Problems_Section/Document.svg";
import dollarIcon from "../../assets/product_pages/DIGILOCKER/sections/Problems_Section/Dollar.svg";
import okycIcon from "../../assets/product_pages/DIGILOCKER/sections/Problems_Section/OKYC.svg";

const painPoints = [
  {
    icon: clockIcon,
    title: "Too many steps to integrate",
    description: "Basic DigiLocker flows still feel operationally heavy",
    highlighted: true,
  },
  {
    icon: keyIcon,
    title: "PIN-based login adds friction",
    description: "Users forget PINs or abandon the journey midway",
    highlighted: false,
  },
  {
    icon: failedIcon,
    title: "No fallback for failed cases",
    description: "Failed fetches often lead to avoidable drop-offs",
    highlighted: false,
  },
  {
    icon: documentIcon,
    title: "Minimal document coverage",
    description: "Limited support reduces real onboarding value",
    highlighted: false,
  },
  {
    icon: dollarIcon,
    title: "Unclear commercials",
    description: "Teams struggle to estimate cost and efficiency",
    highlighted: false,
  },
  {
    icon: okycIcon,
    title: "Legacy OKYC journeys are no longer viable",
    description: "A compliant migration path is now essential",
    highlighted: false,
  },
];

export default function PainPointsSection() {
  return (
    <section className="px-5 lg:px-12 py-10 lg:py-[120px] overflow-hidden">
      <div className="max-w-[1326px] mx-auto flex flex-col gap-10 items-center">
        <div className="text-center max-w-full">
          <h2 className="font-heading text-[32px] md:text-[42px] lg:text-[56px] leading-[1.3] text-black">
            DigiLocker should improve onboarding.
            <br />
            <span className="text-primary">Not increase drop-offs.</span>
          </h2>
          <p className="mt-[22px] mx-auto max-w-[588px] text-black/60 text-[15px] lg:text-[18px] leading-[1.5]">
            Most DigiLocker integrations today add unnecessary friction — too many
            steps, PIN-based login, limited document support, unclear commercials,
            and no fallback logic when the flow breaks.
          </p>
        </div>

        <div className="w-full max-w-[890px] flex flex-wrap justify-center gap-5">
          {painPoints.map((item) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={createFadeInUp(0.05)}
              className="group bg-white rounded-2xl p-5 flex gap-4 items-center w-full sm:w-[calc(50%-10px)] sm:min-h-[148px] border border-[#e5e7eb] hover:border-[#dc2828] active:border-[#dc2828] transition-colors duration-200"
            >
              <div className="w-[53px] h-[53px] rounded-full bg-[#fceded] flex items-center justify-center shrink-0">
                <img src={item.icon} alt="" className="w-[26px] h-[26px]" />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="text-base font-semibold text-black capitalize">
                  {item.title}
                </p>
                <div className="w-[65px] h-px bg-[#CED4DA] group-hover:bg-[#dc2828] group-active:bg-[#dc2828] transition-colors duration-200" />
                <p className="text-sm text-black/60 leading-[1.5] tracking-[-0.28px]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
