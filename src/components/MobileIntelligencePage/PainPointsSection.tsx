import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import userCrossIcon from "../../assets/product_pages/Mobile_intelligence/sections/problems/User Cross.svg";
import shieldCrossIcon from "../../assets/product_pages/Mobile_intelligence/sections/problems/Shield Cross.svg";
import callCancelIcon from "../../assets/product_pages/Mobile_intelligence/sections/problems/Call Cancel Rounded.svg";
import clockCircleIcon from "../../assets/product_pages/Mobile_intelligence/sections/problems/Clock Circle.svg";
import diagramDownIcon from "../../assets/product_pages/Mobile_intelligence/sections/problems/Diagram Down.svg";
import shuffleIcon from "../../assets/product_pages/Mobile_intelligence/sections/problems/Shuffle.svg";

const painPoints = [
  {
    icon: userCrossIcon,
    title: "No real user context",
    description:
      "A verified number does not tell you whether the user is genuine, stable, or high-intent.",
  },
  {
    icon: shieldCrossIcon,
    title: "Weak fraud visibility",
    description:
      "Duplicate users, low-quality signups, bonus abuse, and recycled numbers are hard to catch early.",
  },
  {
    icon: callCancelIcon,
    title: "Poor reachability insights",
    description:
      "No way to know if a number is contactable, active, or even in service before reaching out.",
  },
  {
    icon: clockCircleIcon,
    title: "Too much manual review",
    description:
      "Without number-level intelligence, teams rely on slow, manual checks to filter out bad actors.",
  },
  {
    icon: diagramDownIcon,
    title: "Limited downstream value",
    description:
      "Number data stays siloed at onboarding and never feeds into fraud, support, or recovery workflows.",
  },
  {
    icon: shuffleIcon,
    title: "Fragmented signal sources",
    description:
      "Teams stitch together multiple providers for basic number checks — creating complexity without clarity.",
  },
];

export default function PainPointsSection() {
  return (
    <section className="px-5 lg:px-12 py-10 lg:py-[120px] overflow-hidden">
      <div className="max-w-[1326px] mx-auto flex flex-col gap-5 lg:gap-10 items-center">
        <div className="text-center max-w-full">
          <h2 className="font-heading text-[18px] min-[375px]:text-[20px] md:text-[42px] lg:text-[42px] leading-[1.3] text-black">
            Phone numbers should improve decisioning.
            <br />
            <span className="text-primary">Not create blind spots.</span>
          </h2>
          <p className="mt-[18px] text-[12px] lg:text-[18px] leading-[1.5] tracking-[-0.36px] text-black/60 max-w-[614px] mx-auto">
            Most businesses still treat a phone number as just an OTP
            checkpoint. That means limited user context, weaker fraud detection,
            poor contactability visibility, and slower downstream operations.
          </p>
        </div>

        <div className="w-full max-w-[890px] flex flex-wrap justify-center gap-5">
          {painPoints.map((item, index) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={createFadeInUp(0.05 * index)}
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
      </div>
    </section>
  );
}
