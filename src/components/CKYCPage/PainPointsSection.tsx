import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import cersaiIcon from "../../assets/product_pages/ckyc/sections/problems/CERSAI.svg";
import complianceIcon from "../../assets/product_pages/ckyc/sections/problems/Compliance.svg";
import nonCompliantIcon from "../../assets/product_pages/ckyc/sections/problems/Non-compliant.svg";
import dollarIcon from "../../assets/product_pages/ckyc/sections/problems/Dollar (2).svg";
import mobileIcon from "../../assets/product_pages/ckyc/sections/problems/mobile (2).svg";
import headsetIcon from "../../assets/product_pages/ckyc/sections/problems/headset.svg";

const painPoints = [
  {
    icon: cersaiIcon,
    title: "Managing CERSAI onboarding is complex",
    description: "Multi-step setup slows down time to go-live",
  },
  {
    icon: complianceIcon,
    title: "Compliance + ops coordination gets heavy",
    description: "Multiple teams involved before onboarding even starts",
  },
  {
    icon: nonCompliantIcon,
    title: "Non-compliant or partial CKYC flows",
    description: "Vendors often support only search/download",
  },
  {
    icon: dollarIcon,
    title: "Higher onboarding cost due to ops",
    description: "Manual effort increases cost per user",
  },
  {
    icon: mobileIcon,
    title: "Over-reliance on DigiLocker journeys",
    description: "Even when CKYC records already exist",
  },
  {
    icon: headsetIcon,
    title: "Limited vendor support post-integration",
    description: "APIs without real onboarding or production help",
  },
];

export default function PainPointsSection() {
  return (
    <section className="px-5 lg:px-12 py-10 lg:py-[120px] overflow-hidden">
      <div className="max-w-[1326px] mx-auto flex flex-col gap-5 lg:gap-10 items-center">
        <div className="text-center max-w-full">
          <h2 className="font-heading text-[20px] md:text-[42px] lg:text-[56px] leading-[1.3] tracking-[0.6px] lg:tracking-normal text-black">
            CKYC should speed up onboarding.
            <br />
            <span className="text-primary">Not slow teams down.</span>
          </h2>
          <p className="mt-[10px] lg:mt-[22px] mx-auto max-w-[350px] lg:max-w-[612px] text-[#666] lg:text-black/60 text-[12px] lg:text-[18px] leading-[1.5] tracking-[0.36px] lg:tracking-normal">
            CERSAI onboarding, internal coordination, and setup dependencies
            often make CKYC slower and heavier than it should be.
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
