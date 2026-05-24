import { motion } from "framer-motion";
import { createFadeInUp, fadeItem, staggerContainer, viewportOnce } from "../../../utils/animations";
import { useAutoScroll } from "../../../hooks/useAutoScroll";
import dbIcon from "../../../assets/solution_pages/fintech_and_lending/sections/product_stack/db.svg";
import docIcon from "../../../assets/solution_pages/fintech_and_lending/sections/product_stack/doc.svg";
import faceMatchIcon from "../../../assets/solution_pages/fintech_and_lending/sections/product_stack/face_match.svg";
import linesAccent from "../../../assets/solution_pages/fintech_and_lending/sections/product_stack/lines-01 (1).svg";
import networkIcon from "../../../assets/solution_pages/fintech_and_lending/sections/product_stack/network.svg";
import trendingIcon from "../../../assets/solution_pages/fintech_and_lending/sections/product_stack/trending.svg";
import verificationIcon from "../../../assets/solution_pages/fintech_and_lending/sections/product_stack/verification.svg";

const stackItems = [
  {
    icon: docIcon,
    title: "Workflow Orchestration",
    description: "Create different checks for buyers, sellers, vendors, and service providers.",
  },
  {
    icon: dbIcon,
    title: "DigiLocker Verification Suite",
    description: "Verify user identity and documents where required.",
  },
  {
    icon: networkIcon,
    title: "Mobile Intelligence",
    description: "Understand reachability, number quality, and user trust signals.",
  },
  {
    icon: verificationIcon,
    title: "IntelliBank Account Verification",
    description: "Verify seller, vendor, and service provider bank accounts before payouts.",
  },
  {
    icon: faceMatchIcon,
    title: "Face Match + Liveness",
    description: "Add stronger verification for high-value sellers or service providers.",
  },
  {
    icon: trendingIcon,
    title: "KYB & Business Verification",
    description: "Verify business entities, GST, PAN, CIN, and other business data.",
  },
];

export default function ProductStackSection() {
  const scrollRef = useAutoScroll(282, 20);

  return (
    <section id="marketplaces-stack" className="solution-stack-section bg-[#1f44be] px-5 lg:px-12 min-[1440px]:px-[277px] py-16 lg:py-[117px] overflow-hidden">
      <div className="max-w-[886px] mx-auto flex flex-col gap-10 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0)}
          className="relative text-center"
        >
          <h2 className="font-heading text-[28px] md:text-[42px] leading-[1.3] text-white">
            idto stack for marketplaces
          </h2>
          <img
            src={linesAccent}
            alt=""
            className="hidden sm:block absolute left-1/2 top-[55px] w-[260px] md:w-[284px] -translate-x-[2%]"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        <motion.div
          ref={scrollRef}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="fintech-product-stack-grid"
        >
          {stackItems.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeItem}
              className="group h-[240px] w-[282px] shrink-0 snap-start rounded-[12px] border border-[#536bc9] bg-[rgba(55,87,200,0.43)] px-[25px] pb-[45px] pt-[25px] text-white backdrop-blur-[2px] transition-colors duration-200 hover:bg-[rgba(55,87,200,0.54)]"
            >
              <img
                src={item.icon}
                alt=""
                className="h-[53px] w-[53px]"
                width="53"
                height="53"
                loading="lazy"
                decoding="async"
              />
              <h3 className="mt-3 text-[24px] leading-[32px] font-bold">
                {item.title}
              </h3>
              <p className="mt-1 text-[14px] leading-[20px] text-white/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
