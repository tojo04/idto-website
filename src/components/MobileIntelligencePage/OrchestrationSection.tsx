import { useAutoScroll } from "../../hooks/useAutoScroll";
import databaseIcon from "../../assets/product_pages/Mobile_intelligence/sections/orchestration/Database.svg";
import shieldCheckIcon from "../../assets/product_pages/Mobile_intelligence/sections/orchestration/Shield Check.svg";
import pulseIcon from "../../assets/product_pages/Mobile_intelligence/sections/orchestration/Pulse.svg";
import shieldCrossIcon from "../../assets/product_pages/Mobile_intelligence/sections/orchestration/Shield Cross.svg";
import repeatIcon from "../../assets/product_pages/Mobile_intelligence/sections/orchestration/Repeat.svg";
import layersIcon from "../../assets/product_pages/Mobile_intelligence/sections/orchestration/Layers Minimalistic.svg";

const orchestrationCards = [
  {
    icon: databaseIcon,
    title: "Enrich Number",
    description:
      "Fetch mobile-linked context to strengthen profile quality and reduce manual inputs.",
  },
  {
    icon: shieldCheckIcon,
    title: "Verify Reachability",
    description:
      "Assess whether the number appears usable and contactable before deeper engagement.",
  },
  {
    icon: pulseIcon,
    title: "Fetch Activity Signals",
    description:
      "Pull call and usage data to evaluate number behavior and engagement patterns.",
  },
  {
    icon: shieldCrossIcon,
    title: "Screen for Risk",
    description:
      "Detect suspicious, recycled, or synthetic numbers before they enter the workflow.",
  },
  {
    icon: repeatIcon,
    title: "Route by Workflow",
    description:
      "Direct requests based on context — onboarding, fraud, recovery, or support.",
  },
  {
    icon: layersIcon,
    title: "Standardized Outputs",
    description:
      "Deliver clean, normalized responses across all signal types and providers.",
  },
];

export default function OrchestrationSection() {
  const scrollRef = useAutoScroll(290, 20);

  return (
    <section className="px-5 py-10 sm:px-10 sm:py-10 md:px-16 md:py-16 lg:px-[120px] lg:py-[120px] overflow-hidden">
      <div className="max-w-[924px] mx-auto flex flex-col gap-10 items-center">
        <div className="text-center max-w-[772px]">
          <h2 className="font-heading text-[20px] md:text-[42px] lg:text-[42px] leading-[1.3] tracking-[-1.12px] text-black">
            Built for flexible{" "}
            <span className="text-primary">
              mobile intelligence orchestration
            </span>
          </h2>
          <p className="mt-[18px] text-[12px] lg:text-[18px] leading-[1.5] tracking-[-0.36px] text-black/60">
            Use Mobile Intelligence as a single layer across onboarding, fraud
            checks, operations, and recovery workflows.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="w-full flex gap-5 overflow-x-auto snap-x snap-mandatory sm:snap-none sm:flex-wrap sm:max-w-[925px] pb-3 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {orchestrationCards.map((card) => (
            <div
              key={card.title}
              className="group bg-white border border-[#e5e7eb] hover:border-primary active:border-primary rounded-2xl p-5 flex flex-col gap-4 w-[290px] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] transition-colors duration-200"
            >
              <div className="w-[53px] h-[53px] rounded-full bg-[rgba(39,64,206,0.1)] flex items-center justify-center shrink-0">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
