import { useAutoScroll } from "../../hooks/useAutoScroll";
import icon95 from "../../assets/product_pages/BAV/sections/impact/95.svg";
import icon30 from "../../assets/product_pages/BAV/sections/impact/30.svg";
import icon60 from "../../assets/product_pages/BAV/sections/impact/60.svg";
import icon30min from "../../assets/product_pages/BAV/sections/impact/30 (2).svg";
import icon45 from "../../assets/product_pages/BAV/sections/impact/45.svg";
import icon20 from "../../assets/product_pages/BAV/sections/impact/20.svg";

const impactMetrics = [
  {
    icon: icon95,
    value: "95%+",
    label: "Success rates",
    description: "Across methods and providers.",
  },
  {
    icon: icon30,
    value: "Up to 30%",
    label: "Fewer failed payouts",
    description: "Reliable account ownership verification.",
  },
  {
    icon: icon60,
    value: "Up to 60%",
    label: "Lower ops effort",
    description: "No manual retries, no wasted engineering effort.",
  },
  {
    icon: icon30min,
    value: "<30 min",
    label: "Go live time",
    description: "Launch in minutes, not weeks.",
  },
  {
    icon: icon45,
    value: "Up to 45%",
    label: "Lower verification cost",
    description: "Smarter routing improves efficiency.",
  },
  {
    icon: icon20,
    value: "Up to 20%",
    label: "Better user completion",
    description: "Fewer retries and less friction.",
  },
];

export default function ImpactMetricsSection() {
  const scrollRef = useAutoScroll(295, 20);

  return (
    <section className="bg-blue-section px-5 lg:px-12 py-10 lg:py-[120px] overflow-hidden">
      <div className="max-w-[925px] mx-auto flex flex-col gap-5 lg:gap-10 items-center">
        <div className="text-center">
          <h2 className="font-heading text-[20px] md:text-[42px] lg:text-[42px] leading-[1.3] text-white">
            Real impact on payouts,
            <br />
            onboarding, and disbursals
          </h2>
        </div>
        <div
          ref={scrollRef}
          className="w-full flex gap-5 overflow-x-auto snap-x snap-mandatory sm:snap-none sm:flex-wrap pb-3 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {impactMetrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-[rgba(55,87,200,0.43)] border border-[#536bc9] rounded-xl p-5 flex flex-col gap-4 items-center justify-center text-center w-[295px] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] min-h-[219px]"
            >
              <div className="w-[53px] h-[53px] rounded-full bg-[#2747b8] border border-[#536bc9] flex items-center justify-center shrink-0">
                <img src={metric.icon} alt="" className="w-[26px] h-[26px]" />
              </div>
              <div className="flex flex-col gap-1 items-center text-white">
                <p className="text-[24px] lg:text-[32px] font-bold leading-tight">
                  {metric.value}
                </p>
                <p className="text-[14px] leading-5">{metric.label}</p>
                <p className="text-[14px] leading-5 text-white/70">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
