import { useAutoScroll } from "../../hooks/useAutoScroll";
import onboardingVector from "../../assets/product_pages/ckyc/onboarding_vector.svg";
import icon60sec from "../../assets/product_pages/ckyc/sections/impact/60sec.svg";
import icon90 from "../../assets/product_pages/ckyc/sections/impact/90.svg";
import icon50 from "../../assets/product_pages/ckyc/sections/impact/50.svg";
import icon80 from "../../assets/product_pages/ckyc/sections/impact/80.svg";
import iconLess from "../../assets/product_pages/ckyc/sections/impact/less.svg";
import iconLower from "../../assets/product_pages/ckyc/sections/impact/lower.svg";

const impactMetrics = [
  {
    icon: icon60sec,
    value: "<60 sec",
    label: "onboarding",
    description: "Where CKYC records are available",
  },
  {
    icon: icon90,
    value: "90%+",
    label: "success rates",
    description: "Higher completion vs repeated KYC flows",
  },
  {
    icon: icon50,
    value: "50%",
    label: "Lower onboarding cost",
    description: "Reuse existing CKYC data",
  },
  {
    icon: icon80,
    value: "80%",
    label: "Reduced drop-offs",
    description: "Less friction, faster journeys",
  },
  {
    icon: iconLess,
    value: "Less",
    label: "DigiLocker dependency",
    description: "Avoid repeated document-based flows",
  },
  {
    icon: iconLower,
    value: "Lower",
    label: "ops effort",
    description: "Automated, search-first onboarding",
  },
];

export default function ImpactMetricsSection() {
  const scrollRef = useAutoScroll(295, 20);

  return (
    <section className="bg-blue-section px-5 lg:px-12 py-10 lg:py-[120px] overflow-hidden">
      <div className="max-w-[925px] mx-auto flex flex-col gap-5 lg:gap-10 items-center">
        {/* Title with decorative underline */}
        <div className="relative inline-block text-center">
          <h2 className="font-heading text-[20px] md:text-[42px] lg:text-[42px] leading-[1.3] text-white whitespace-nowrap">
            Real impact on your{" "}
            <span className="relative inline-block">
              onboarding
              <img
                src={onboardingVector}
                alt=""
                className="absolute -bottom-1 right-0 w-[273px] h-[11px] pointer-events-none"
              />
            </span>
          </h2>
        </div>

        {/* Metric cards grid */}
        <div
          ref={scrollRef}
          className="w-full flex gap-5 overflow-x-auto snap-x snap-mandatory sm:snap-none sm:flex-wrap pb-3 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {impactMetrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-[rgba(55,87,200,0.43)] border border-[#536bc9] rounded-xl p-5 flex flex-col gap-4 items-center justify-center text-center w-[295px] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] h-[181px]"
            >
              <div className="w-[53px] h-[53px] rounded-full bg-[#2747b8] border border-[#536bc9] flex items-center justify-center shrink-0">
                <img src={metric.icon} alt="" className="w-[26px] h-[26px]" />
              </div>
              <div className="flex flex-col gap-1 items-center text-white">
                <p className="text-2xl font-bold leading-8">{metric.value}</p>
                <p className="text-[14px] capitalize leading-5">{metric.label}</p>
                <p className="text-[14px] leading-4 text-white/70">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-white text-[12px] lg:text-[18px] leading-[1.5] text-center tracking-[0.36px] lg:tracking-normal">
          Faster onboarding. Lower cost. Better completion.
        </p>
      </div>
    </section>
  );
}
