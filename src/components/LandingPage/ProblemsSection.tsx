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
      <div className="max-w-369.5 mx-auto flex flex-col items-center gap-10 lg:gap-22.5">
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full"
        >
          {problemCards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeItem}
              className="group relative bg-white rounded-2xl shadow-[8.1px_16.2px_24.32px_rgba(0,0,0,0.03)] filter-[drop-shadow(3px_4px_6.3px_#C9D5EE)] px-3.5 lg:px-6.5 py-5 lg:py-7.75 flex items-center gap-4 lg:gap-5 border border-transparent hover:border-red-accent active:border-red-accent transition-colors duration-200"
            >
              <div
                className={`${card.iconBg} w-[60px] h-[61px] lg:w-18.25 lg:h-18.5 rounded-full flex items-center justify-center shrink-0`}
              >
                <img src={card.icon} alt="" className="w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-5">
                <h3 className="font-semibold text-[16px] lg:text-[28px] leading-[1.2] lg:leading-9 text-black capitalize">
                  {card.title}
                </h3>
                <div className="w-16.25 border-t-[1.62px] border-[#CED4DA] group-hover:border-red-accent group-active:border-red-accent transition-colors duration-200" />
                <p className="text-[14px] lg:text-[20px] leading-[150%] text-black/60 tracking-[-0.02em]">
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
