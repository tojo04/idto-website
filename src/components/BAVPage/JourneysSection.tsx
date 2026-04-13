import { useAutoScroll } from "../../hooks/useAutoScroll";
import aiPoweredIcon from "../../assets/product_pages/BAV/sections/journeys/AI_powered.svg";
import standardResponseIcon from "../../assets/product_pages/BAV/sections/journeys/standard_Response.svg";
import crystalClearIcon from "../../assets/product_pages/BAV/sections/journeys/crystal_clear.svg";
import multiPartnerIcon from "../../assets/product_pages/BAV/sections/journeys/multi_partner.svg";
import flexibleIcon from "../../assets/product_pages/BAV/sections/journeys/flexible_verification.svg";
import analyticsIcon from "../../assets/product_pages/BAV/sections/journeys/analytics.svg";

const journeyCards = [
  {
    icon: aiPoweredIcon,
    title: "AI-Powered Orchestration",
    description: "Route traffic intelligently across methods and partners.",
  },
  {
    icon: standardResponseIcon,
    title: "Standardized Response Schema",
    description: "One clean output across all providers.",
  },
  {
    icon: crystalClearIcon,
    title: "Crystal-Clear Error Codes",
    description: "Know exactly why a verification failed.",
  },
  {
    icon: multiPartnerIcon,
    title: "Multi-Partner Fallback",
    description: "Reduce dependency on any one provider.",
  },
  {
    icon: flexibleIcon,
    title: "Flexible Verification Methods",
    description: "Choose the right flow for your use-case.",
  },
  {
    icon: analyticsIcon,
    title: "Real-Time Analytics",
    description: "Track success, retries, and partner performance.",
  },
];

export default function JourneysSection() {
  const scrollRef = useAutoScroll(295, 20);

  return (
    <section className="bg-white rounded-[40px] lg:rounded-[112px] px-5 py-10 sm:px-10 sm:py-10 md:px-16 md:py-16 lg:px-[120px] lg:py-[120px] overflow-hidden">
      <div className="max-w-[924px] mx-auto flex flex-col gap-5 lg:gap-10 items-center">
        <div className="text-center max-w-[772px]">
          <h2 className="font-heading text-[20px] md:text-[42px] lg:text-[42px] leading-[1.3] tracking-[0.6px] lg:tracking-[-1.12px] text-black">
            Built for modern{" "}
            <span className="text-primary">
              Bank Account Verification
            </span>{" "}
            journeys
          </h2>
          <p className="mt-[10px] lg:mt-[18px] text-[#666] lg:text-black/60 text-[12px] lg:text-[18px] leading-[1.5] tracking-[0.36px] lg:tracking-[-0.36px] max-w-[350px] lg:max-w-[614px] mx-auto">
            A complete verification suite with orchestration, fallback,
            standardization, and control built in.
          </p>
        </div>
        <div
          ref={scrollRef}
          className="w-full flex gap-5 overflow-x-auto snap-x snap-mandatory sm:snap-none sm:flex-wrap sm:max-w-[925px] pb-3 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {journeyCards.map((card) => (
            <div
              key={card.title}
              className="group bg-white rounded-2xl p-5 pb-6 flex flex-col gap-4 w-[295px] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] border border-[#e5e7eb] hover:border-[#1a9948] active:border-[#1a9948] transition-colors duration-200"
            >
              <div className="w-[53px] h-[53px] rounded-full bg-[#e9fbf0] flex items-center justify-center shrink-0">
                <img src={card.icon} alt="" className="w-[26px] h-[26px]" />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="text-base font-semibold text-black capitalize">
                  {card.title}
                </p>
                <div className="w-[65px] h-px bg-[#CED4DA] group-hover:bg-[#1a9948] group-active:bg-[#1a9948] transition-colors duration-200" />
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
