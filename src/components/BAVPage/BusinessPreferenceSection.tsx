import { useAutoScroll } from "../../hooks/useAutoScroll";
import crystalClearIcon from "../../assets/product_pages/BAV/sections/business_preference/crystal_Clear_errors.svg";
import aiFirstIcon from "../../assets/product_pages/BAV/sections/business_preference/AI_first.svg";
import sixPartnersIcon from "../../assets/product_pages/BAV/sections/business_preference/6+_partners.svg";
import switchPartnersIcon from "../../assets/product_pages/BAV/sections/business_preference/switch_partners.svg";
import bestCountryIcon from "../../assets/product_pages/BAV/sections/business_preference/best_in_country.svg";
import largestCoverageIcon from "../../assets/product_pages/BAV/sections/business_preference/largest_coverage.svg";

const preferenceCards = [
  {
    icon: crystalClearIcon,
    title: "Crystal-Clear Error Codes & Standardized Responses",
    description: "World-class transparency.",
  },
  {
    icon: aiFirstIcon,
    title: "AI-First Design",
    description: "Improves success rates with intelligent routing.",
  },
  {
    icon: sixPartnersIcon,
    title: "6+ Partners, 1 Integration, 1 Agreement",
    description: "No renegotiation, no lock-in.",
  },
  {
    icon: switchPartnersIcon,
    title: "Switch Partners Without Re-Integrating",
    description: "Flexibility at scale.",
  },
  {
    icon: bestCountryIcon,
    title: "Best-In-Country Commercials",
    description: "Volume aggregation lowers your costs.",
  },
  {
    icon: largestCoverageIcon,
    title: "Largest Coverage Across Methods",
    description: "Penny drop, penniless, RPD, cheque OCR, IFSC, and more.",
  },
];

export default function BusinessPreferenceSection() {
  const scrollRef = useAutoScroll(295, 20);

  return (
    <section className="bg-white rounded-[40px] lg:rounded-[112px] px-5 py-10 sm:px-10 sm:py-10 md:px-16 md:py-16 lg:px-[120px] lg:py-[120px] overflow-hidden">
      <div className="max-w-[924px] mx-auto flex flex-col gap-5 lg:gap-10 items-center">
        <div className="text-center max-w-[772px]">
          <h2 className="font-heading text-[20px] md:text-[42px] lg:text-[42px] leading-[1.3] tracking-[0.6px] lg:tracking-[-1.12px] text-black">
            Why businesses prefer{" "}
            <span className="text-primary">idto.ai</span>
          </h2>
        </div>
        <div
          ref={scrollRef}
          className="w-full flex gap-5 overflow-x-auto snap-x snap-mandatory sm:snap-none sm:flex-wrap sm:max-w-[925px] pb-3 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {preferenceCards.map((card) => (
            <div
              key={card.title}
              className="group bg-white rounded-2xl p-5 pb-6 flex flex-col gap-4 w-[295px] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] border border-[#e5e7eb] hover:border-primary active:border-primary transition-colors duration-200"
            >
              <div className="w-[53px] h-[53px] rounded-full bg-[#eceeff] flex items-center justify-center shrink-0">
                <img src={card.icon} alt="" className="w-[26px] h-[26px]" />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="text-base font-semibold text-black">
                  {card.title}
                </p>
                <div className="w-[65px] h-px bg-[#CED4DA] group-hover:bg-primary group-active:bg-primary transition-colors duration-200" />
                <p className="text-sm text-black/60 leading-[1.5] tracking-[-0.28px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
