import { motion } from "framer-motion";
import { createFadeInUp, staggerContainer, fadeItem, viewportOnce } from "../../utils/animations";
import SectionHeading from "../UI/SectionHeading";
import hardUnderline from "../../assets/lines-01 -hard.svg";
import hourglassIcon from "../../assets/boxicons_hourglass.png";
import dollarIcon from "../../assets/pepicons-pop_dollar.png";
import updatesIcon from "../../assets/stash_last-updates.png";
import puzzleIcon from "../../assets/Puzzle Streamline Iconoir.png";
import alertIcon from "../../assets/octicon_alert-24.png";
import thunderIcon from "../../assets/mdi_thunder-outline.png";

const problemCards = [
  {
    title: "Building Fallbacks Manually",
    description: "Slow and error-prone",
    iconBg: "bg-[#ecf3fc]",
    icon: hourglassIcon,
  },
  {
    title: "Keeping Wallets Recharged",
    description: "Service interruptions",
    iconBg: "bg-[#f9f1c6]",
    icon: thunderIcon,
  },
  {
    title: "Handling Failures",
    description: "Failed onboarding & drop-offs",
    iconBg: "bg-[#fccfd5]",
    icon: alertIcon,
  },
  {
    title: "Unclear Pricing",
    description: "Unexpected overages",
    iconBg: "bg-[#e9e0fb]",
    icon: dollarIcon,
  },
  {
    title: "Managing Multiple Vendors",
    description: "Integration delays & operational overhead",
    iconBg: "bg-[#bae5f0]",
    icon: puzzleIcon,
  },
  {
    title: "Keeping Up with Regulatory Changes",
    description: "Compliance updates, circulars & audit pressure",
    iconBg: "bg-[#b3f2a8]",
    icon: updatesIcon,
  },
];

export default function ProblemsSection() {
  return (
    <section className="bg-gray-bg px-5 lg:px-37.5 py-10 lg:py-37.5">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-10 lg:gap-22.5">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
        >
          <SectionHeading>
            Identity onboarding{" "}
            <span className="text-primary">
              shouldn't be this{" "}
              <span className="relative inline-block">
                hard.
                <img
                  aria-hidden="true"
                  src={hardUnderline}
                  className="absolute left-0 w-full pointer-events-none select-none"
                  style={{ top: "100%", marginTop: "2px" }}
                />
              </span>
            </span>
          </SectionHeading>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] w-full max-w-[1000px]"
        >
          {problemCards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeItem}
              className="group relative bg-white rounded-2xl shadow-[8px_16px_24px_0px_rgba(0,0,0,0.03)] lg:shadow-none p-5 flex items-center gap-4 border border-[#e5e7eb] hover:border-red-accent active:border-red-accent transition-colors duration-200"
            >
              <div
                className={`${card.iconBg} w-[53px] h-[53px] rounded-full flex items-center justify-center shrink-0`}
              >
                <img src={card.icon} alt="" className="w-[26px] h-[26px]" />
              </div>
              <div className="flex flex-col gap-[10px]">
                <h3 className="font-semibold text-[16px] lg:text-[16px] leading-[1.2] lg:leading-normal text-black capitalize">
                  {card.title}
                </h3>
                <div className="w-[65px] h-px bg-[#CED4DA] group-hover:bg-red-accent group-active:bg-red-accent transition-colors duration-200" />
                <p className="text-[14px] lg:text-[14px] leading-[150%] text-black/60 tracking-[-0.02em]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
