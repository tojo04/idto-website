import { motion } from "framer-motion";
import { createFadeInUp, staggerContainer, fadeItem, viewportOnce } from "../../utils/animations";
import SectionHeading from "../UI/SectionHeading";

const problemCards = [
  {
    title: "Building Fallbacks Manually",
    description: "Slow and error-prone",
    iconBg: "bg-[#ecf3fc]",
    icon: "https://www.figma.com/api/mcp/asset/492e9e29-c0f4-40c2-9dd5-de37238b3a36",
    highlight: false,
  },
  {
    title: "Unclear Pricing",
    description: "Unexpected overages",
    iconBg: "bg-[#e9e0fb]",
    icon: "https://www.figma.com/api/mcp/asset/a19f039c-48da-400d-a344-da2f5096cca7",
    highlight: false,
  },
  {
    title: "Keeping Wallets Recharged",
    description: "Service interruptions",
    iconBg: "bg-[#f9f1c6]",
    icon: "https://www.figma.com/api/mcp/asset/83cba12d-c7a4-4897-9674-ab7a7a9a3cbe",
    highlight: false,
  },
  {
    title: "Managing Multiple Vendors",
    description: "Integration delays & operational overhead",
    iconBg: "bg-[#bae5f0]",
    icon: "https://www.figma.com/api/mcp/asset/f53f1b20-5e68-4858-80c7-2b077d81eef8",
    highlight: false,
  },
  {
    title: "Handling Failures",
    description: "Failed onboarding & drop-offs",
    iconBg: "bg-[#fccfd5]",
    icon: "https://www.figma.com/api/mcp/asset/a93be7a7-5805-4d55-87ae-5e9c166355de",
    highlight: true,
  },
  {
    title: "Keeping Up with Regulatory Changes",
    description: "Compliance updates, circulars & audit pressure",
    iconBg: "bg-[#b3f2a8]",
    icon: "https://www.figma.com/api/mcp/asset/86d4155e-fd94-49f3-a0e6-d4b9079a1b53",
    highlight: false,
  },
];

export default function ProblemsSection() {
  return (
    <section className="bg-gray-bg px-6 lg:px-[150px] py-20 lg:py-[150px]">
      <div className="max-w-[1478px] mx-auto flex flex-col items-center gap-16 lg:gap-[90px]">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
        >
          <SectionHeading>
            Identity onboarding{" "}
            <span className="text-primary">shouldn't be this hard.</span>
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
              className={`relative bg-white rounded-2xl shadow-[8px_16px_24px_rgba(0,0,0,0.03)] px-6 py-8 flex items-center gap-5 ${
                card.highlight ? "border border-red-accent" : ""
              }`}
            >
              <div
                className={`${card.iconBg} w-[73px] h-[74px] rounded-full flex items-center justify-center shrink-0`}
              >
                <img src={card.icon} alt="" className="w-10 h-10" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-2xl lg:text-[28px] text-black capitalize">
                  {card.title}
                </h3>
                <div className="w-16 h-[2px] bg-primary/30 rounded" />
                <p className="text-xl text-black/60 tracking-[-0.4px]">
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
