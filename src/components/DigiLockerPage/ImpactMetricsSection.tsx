import { useAutoScroll } from "../../hooks/useAutoScroll";
import linesDecoration from "../../assets/lines-01-idto.svg";
import icon5min from "../../assets/product_pages/DIGILOCKER/sections/Impact/5_min.svg";
import icon1520 from "../../assets/product_pages/DIGILOCKER/sections/Impact/15-20.svg";
import icon2030 from "../../assets/product_pages/DIGILOCKER/sections/Impact/20-30.svg";
import icon3040 from "../../assets/product_pages/DIGILOCKER/sections/Impact/30-40.svg";
import icon1015 from "../../assets/product_pages/DIGILOCKER/sections/Impact/10-15.svg";
import icon100 from "../../assets/product_pages/DIGILOCKER/sections/Impact/100.svg";

const impactMetrics = [
  {
    icon: icon5min,
    value: "<5 min",
    label: "go-live",
    description: "Move from OKYC to compliant DigiLocker faster",
  },
  {
    icon: icon1520,
    value: "15-20%",
    label: "higher conversions",
    description: "Pin-less SDK with fallback improves completion",
  },
  {
    icon: icon2030,
    value: "20-30%",
    label: "lower verification cost",
    description: "Outcome-based pricing reduces wasted spends",
  },
  {
    icon: icon3040,
    value: "30-40%",
    label: "less user friction",
    description: "No-redirection flows improve journey continuity",
  },
  {
    icon: icon1015,
    value: "10-15%",
    label: "better recovery on failed cases",
    description: "Fallback logic helps recover drop-offs more smoothly",
  },
  {
    icon: icon100,
    value: "100%",
    label: "compliant path",
    description: "Government-backed DigiLocker journeys built for scale",
  },
];

export default function ImpactMetricsSection() {
  const scrollRef = useAutoScroll(270, 20);

  return (
    <section className="bg-blue-section px-5 lg:px-12 py-10 lg:py-[120px] overflow-hidden">
      <div className="max-w-[925px] mx-auto flex flex-col gap-10 items-center">
        {/* Title with decorative underline */}
        <div className="relative inline-block text-center">
          <h2 className="font-heading text-[20px] md:text-[42px] lg:text-[42px] leading-[1.3] text-white">
            Real impact on your{" "}
            <span className="relative inline-block">
              onboarding
              <img
                src={linesDecoration}
                alt=""
                className="absolute -bottom-1 right-0 w-[273px] h-[11px] pointer-events-none"
              />
            </span>
          </h2>
        </div>

        {/* Metric cards grid */}
        <div ref={scrollRef} className="w-full flex gap-5 overflow-x-auto snap-x snap-mandatory sm:snap-none sm:flex-wrap pb-3 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none]">
          {impactMetrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-[rgba(55,87,200,0.43)] border border-[#536bc9] rounded-xl p-5 flex flex-col gap-4 items-center justify-center text-center w-[270px] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] h-[206px]"
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

        <p className="text-white text-[18px] leading-[1.5] text-center">
          Faster onboarding. Lower cost. Better completion.
        </p>
      </div>
    </section>
  );
}
