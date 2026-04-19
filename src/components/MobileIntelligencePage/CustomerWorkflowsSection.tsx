import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import { useAutoScroll } from "../../hooks/useAutoScroll";
import loginIcon from "../../assets/product_pages/Mobile_intelligence/sections/customer_workflows/Login 3.svg";
import shieldCheckIcon from "../../assets/product_pages/Mobile_intelligence/sections/customer_workflows/Shield Check (1).svg";
import userSpeakIcon from "../../assets/product_pages/Mobile_intelligence/sections/customer_workflows/User Speak.svg";
import walletIcon from "../../assets/product_pages/Mobile_intelligence/sections/customer_workflows/Wallet.svg";
import userCheckIcon from "../../assets/product_pages/Mobile_intelligence/sections/customer_workflows/User Check.svg";
import userIdIcon from "../../assets/product_pages/Mobile_intelligence/sections/customer_workflows/User Id.svg";

const workflowCards = [
  {
    icon: loginIcon,
    number: "01",
    title: "Onboarding & Sign-up Quality",
    description:
      "Reduce friction, enrich profiles, and improve approval confidence from the first user interaction.",
  },
  {
    icon: shieldCheckIcon,
    number: "02",
    title: "Fraud & Abuse Prevention",
    description:
      "Detect duplicate profiles, suspicious number patterns, and account abuse earlier.",
  },
  {
    icon: userSpeakIcon,
    number: "03",
    title: "Operations & Support Prioritization",
    description:
      "Route support efforts based on number quality and reachability to reduce wasted outbound effort.",
  },
  {
    icon: walletIcon,
    number: "04",
    title: "Collections & Recovery",
    description:
      "Prioritize outreach based on reachability, activity, and number quality intelligence.",
  },
  {
    icon: userCheckIcon,
    number: "05",
    title: "Marketplace Trust",
    description:
      "Improve seller and buyer trust scoring by layering in mobile signals at registration.",
  },
  {
    icon: userIdIcon,
    number: "06",
    title: "Background Verification",
    description:
      "Strengthen identity checks by adding mobile-linked context to standard background screening.",
  },
];

export default function CustomerWorkflowsSection() {
  const scrollRef = useAutoScroll(290, 20);

  return (
    <section className="bg-white rounded-t-[40px] lg:rounded-t-[112px] px-5 py-10 sm:px-10 sm:py-10 md:px-16 md:py-16 lg:px-[120px] lg:py-[120px] overflow-hidden">
      <div className="max-w-[1335px] mx-auto flex flex-col gap-10 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0)}
          className="text-center max-w-[772px]"
        >
          <h2 className="font-heading text-[20px] md:text-[42px] lg:text-[42px] leading-[1.3] tracking-[-1.12px] text-black">
            Built for high-volume{" "}
            <span className="text-primary">customer workflows</span>
          </h2>
          <p className="mt-[18px] text-[12px] lg:text-[18px] leading-[1.5] tracking-[-0.36px] text-black/60 max-w-[614px] mx-auto">
            Mobile Intelligence supports multiple decisioning layers across the
            customer lifecycle.
          </p>
        </motion.div>

        <div
          ref={scrollRef}
          className="w-full hidden sm:flex gap-5 overflow-x-auto snap-x snap-mandatory sm:snap-none sm:flex-wrap sm:justify-center sm:max-w-[925px] pb-3 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {workflowCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={createFadeInUp(0.05 * index)}
              className="group bg-white border border-[#e5e7eb] hover:border-primary active:border-primary rounded-2xl pt-[25px] px-[25px] pb-[65px] flex flex-col gap-[15px] w-[290px] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="w-[53px] h-[53px] rounded-[30px] bg-[#e9eefc] flex items-center justify-center shrink-0">
                  <img
                    src={card.icon}
                    alt=""
                    className="w-[26px] h-[26px]"
                  />
                </div>
                <span className="font-['DM_Serif_Display',serif] text-[36px] leading-[40px] text-[#1d212b] font-normal">
                  {card.number}
                </span>
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="text-base font-semibold text-black capitalize">
                  {card.title}
                </p>
                <div className="w-[65px] h-px bg-[#CED4DA] group-hover:bg-primary group-active:bg-primary transition-colors duration-200" />
                <p className="text-sm text-black/60 leading-[1.5] tracking-[-0.28px]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertically stacked icon-left layout, no numbers */}
        <div className="w-full flex flex-col gap-[10px] sm:hidden">
          {workflowCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={createFadeInUp(0.05 * index)}
              className="group bg-white rounded-2xl p-5 flex gap-4 items-center w-full border border-[#e5e7eb] hover:border-primary active:border-primary transition-colors duration-200 shadow-[8px_16px_24px_0px_rgba(0,0,0,0.03)]"
            >
              <div className="w-[53px] h-[53px] rounded-[30px] bg-[#e9eefc] flex items-center justify-center shrink-0">
                <img src={card.icon} alt="" className="w-[26px] h-[26px]" />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="text-base font-semibold text-black capitalize">
                  {card.title}
                </p>
                <div className="w-[65px] h-px bg-[#CED4DA] group-hover:bg-primary group-active:bg-primary transition-colors duration-200" />
                <p className="text-sm text-black/60 leading-[1.5] tracking-[-0.28px]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
