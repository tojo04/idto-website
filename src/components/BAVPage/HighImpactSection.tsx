import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import { useAutoScroll } from "../../hooks/useAutoScroll";
import lendingIcon from "../../assets/product_pages/BAV/sections/high_impact/lending.svg";
import payrollIcon from "../../assets/product_pages/BAV/sections/high_impact/payroll.svg";
import vendorIcon from "../../assets/product_pages/BAV/sections/high_impact/vendor.svg";
import marketplaceIcon from "../../assets/product_pages/BAV/sections/high_impact/marketplace.svg";
import insuranceIcon from "../../assets/product_pages/BAV/sections/high_impact/insurance.svg";
import merchantIcon from "../../assets/product_pages/BAV/sections/high_impact/merchant.svg";
import accountChangeIcon from "../../assets/product_pages/BAV/sections/high_impact/account_change.svg";
import fraudIcon from "../../assets/product_pages/BAV/sections/high_impact/fraud.svg";

const useCases = [
  { icon: lendingIcon, title: "Lending disbursals" },
  { icon: payrollIcon, title: "Payroll and salary payouts" },
  { icon: vendorIcon, title: "Vendor onboarding" },
  { icon: marketplaceIcon, title: "Marketplace settlements" },
  { icon: insuranceIcon, title: "Insurance claims payouts" },
  { icon: merchantIcon, title: "Merchant onboarding" },
  { icon: accountChangeIcon, title: "Account change verification" },
  { icon: fraudIcon, title: "Fraud prevention and ownership checks" },
];

export default function HighImpactSection() {
  const scrollRef = useAutoScroll(177, 20);

  return (
    <section className="px-5 lg:px-12 py-10 lg:py-[120px] overflow-hidden">
      <div className="max-w-[924px] mx-auto flex flex-col gap-5 lg:gap-10 items-center">
        <div className="text-center max-w-[772px]">
          <h2 className="font-heading text-[20px] md:text-[42px] lg:text-[42px] leading-[1.3] tracking-[0.6px] lg:tracking-[-1.12px] text-black">
            Built for <span className="text-primary">high-impact</span>{" "}
            use-cases
          </h2>
        </div>
        <div
          ref={scrollRef}
          className="w-full flex gap-5 overflow-x-auto snap-x snap-mandatory sm:snap-none sm:flex-wrap sm:justify-center pb-3 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {useCases.map((item) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={createFadeInUp(0.05)}
              className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center gap-3 text-center w-[177px] shrink-0 snap-start sm:w-[calc(25%-15px)] min-h-[167px] border border-[#e5e7eb]"
            >
              <div className="w-[53px] h-[53px] rounded-full bg-[#eceeff] flex items-center justify-center shrink-0">
                <img src={item.icon} alt="" className="w-[26px] h-[26px]" />
              </div>
              <p className="text-sm lg:text-base font-semibold text-black leading-tight">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
