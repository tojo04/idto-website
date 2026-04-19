import { useAutoScroll } from "../../hooks/useAutoScroll";
import vectorImage from "../../assets/product_pages/Mobile_intelligence/sections/customer_workflows/customer_workflow_vector.svg";
import userCheckIcon from "../../assets/product_pages/Mobile_intelligence/sections/impact/User Check (1).svg";
import shieldCheckIcon from "../../assets/product_pages/Mobile_intelligence/sections/impact/Shield Check (2).svg";
import refreshIcon from "../../assets/product_pages/Mobile_intelligence/sections/impact/Refresh.svg";
import tuningIcon from "../../assets/product_pages/Mobile_intelligence/sections/impact/Tuning 2.svg";
import boltIcon from "../../assets/product_pages/Mobile_intelligence/sections/impact/Bolt.svg";
import linkIcon from "../../assets/product_pages/Mobile_intelligence/sections/impact/Link Minimalistic 2.svg";

const impactMetrics = [
  {
    icon: userCheckIcon,
    value: "15-20%",
    label: "Higher sign-up completion",
    description: "Through better profile enrichment and lower form friction",
  },
  {
    icon: shieldCheckIcon,
    value: "10-20%",
    label: "Lower fraud exposure",
    description: "By catching suspicious and duplicate profiles earlier",
  },
  {
    icon: refreshIcon,
    value: "15-25%",
    label: "Better recovery efficiency",
    description:
      "Through stronger reachability and activity intelligence",
  },
  {
    icon: tuningIcon,
    value: "Lower ops overhead",
    label: "With fewer manual reviews",
    description: "And more decision-ready workflows",
  },
  {
    icon: boltIcon,
    value: "Faster approvals",
    label: "With richer number-level context",
    description: "Available earlier in the journey",
  },
  {
    icon: linkIcon,
    value: "One integration",
    label: "Across onboarding, fraud, support, and recovery workflows",
    description: "",
  },
];

export default function ImpactMetricsSection() {
  const scrollRef = useAutoScroll(295, 20);

  return (
    <section className="bg-blue-section px-5 lg:px-12 py-10 lg:py-[120px] overflow-hidden">
      <div className="max-w-[925px] mx-auto flex flex-col gap-5 lg:gap-[34px] items-center">
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="font-heading text-[20px] md:text-[42px] lg:text-[42px] leading-[1.3] text-white">
            Real impact on your
            <br />
            Customer Workflows
          </h2>
          <img
            src={vectorImage}
            alt=""
            className="hidden lg:block w-[370px]"
          />
        </div>

        <div
          ref={scrollRef}
          className="w-full flex gap-5 overflow-x-auto snap-x snap-mandatory sm:snap-none sm:flex-wrap pb-3 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {impactMetrics.map((metric) => (
            <div
              key={metric.label}
              className="backdrop-blur-sm bg-[rgba(55,87,200,0.43)] border border-[#536bc9] rounded-xl p-[25px] flex flex-col gap-1 w-[295px] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] min-h-[199px]"
            >
              <div className="w-[53px] h-[53px] rounded-full bg-[#2747b8] border border-[#536bc9] flex items-center justify-center shrink-0">
                <img src={metric.icon} alt="" className="w-[26px] h-[26px]" />
              </div>
              <div className="flex flex-col gap-1 text-white mt-3">
                <p className="text-[24px] lg:text-[24px] font-bold leading-[32px]">
                  {metric.value}
                </p>
                <p className="text-[14px] leading-5">{metric.label}</p>
                {metric.description && (
                  <p className="text-[14px] leading-5 text-white/70">
                    {metric.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden text-center">
          <p className="text-white text-[12px] leading-[1.5]">
            Higher signal depth. Better decisions. Stronger customer workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
