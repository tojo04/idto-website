import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import errorCodeIcon from "../../assets/product_pages/BAV/sections/problems/error_code.svg";
import noStandardIcon from "../../assets/product_pages/BAV/sections/problems/no_standard_output.svg";
import singlePartnerIcon from "../../assets/product_pages/BAV/sections/problems/single_partner.svg";
import manualRetryIcon from "../../assets/product_pages/BAV/sections/problems/manual_retry.svg";

const painPoints = [
  {
    icon: errorCodeIcon,
    title: "Unclear Error Codes",
    description: "Hard to debug, retry, or take action.",
  },
  {
    icon: noStandardIcon,
    title: "No Standardized Outputs",
    description: "Every partner returns something different.",
  },
  {
    icon: singlePartnerIcon,
    title: "Single-Partner Dependency",
    description: "Downtime directly becomes failed verifications.",
  },
  {
    icon: manualRetryIcon,
    title: "Manual Retry Logic",
    description: "Engineering teams waste time building fallbacks.",
  },
];

export default function PainPointsSection() {
  return (
    <section className="px-5 lg:px-12 py-10 lg:py-[120px] overflow-hidden">
      <div className="max-w-[1326px] mx-auto flex flex-col gap-5 lg:gap-10 items-center">
        <div className="text-center max-w-full">
          <h2 className="font-heading text-[20px] md:text-[42px] lg:text-[56px] leading-[1.3] tracking-[0.6px] lg:tracking-normal text-black">
            Bank Account Verification should
            <br /> improve payouts.
            <br />
            <span className="text-primary">Not create more failure points.</span>
          </h2>
        </div>
        <div className="w-full max-w-[890px] flex flex-wrap justify-center gap-5">
          {painPoints.map((item) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={createFadeInUp(0.05)}
              className="group bg-white rounded-2xl p-5 flex gap-4 items-center w-full sm:w-[calc(50%-10px)] border border-[#e5e7eb] hover:border-[#dc2828] active:border-[#dc2828] transition-colors duration-200 shadow-[8px_16px_24px_0px_rgba(0,0,0,0.03)] lg:shadow-none"
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
        <p className="text-[12px] lg:text-[18px] leading-[1.5] text-black/60 text-center tracking-[0.36px] lg:tracking-normal max-w-[588px]">
          Result: lower success rates, failed payouts, hidden ops cost, and poor
          user experience.
        </p>
      </div>
    </section>
  );
}
