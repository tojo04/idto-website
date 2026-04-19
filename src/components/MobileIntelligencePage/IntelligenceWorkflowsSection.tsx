import { useAutoScroll } from "../../hooks/useAutoScroll";
import userIcon from "../../assets/product_pages/Mobile_intelligence/sections/intelligence_workflows/User.svg";
import shieldCheckIcon from "../../assets/product_pages/Mobile_intelligence/sections/intelligence_workflows/Shield Check.svg";
import phoneCallingIcon from "../../assets/product_pages/Mobile_intelligence/sections/intelligence_workflows/Phone Calling Rounded.svg";
import routeIcon from "../../assets/product_pages/Mobile_intelligence/sections/intelligence_workflows/Route.svg";
import clipboardIcon from "../../assets/product_pages/Mobile_intelligence/sections/intelligence_workflows/Clipboard.svg";
import linkIcon from "../../assets/product_pages/Mobile_intelligence/sections/intelligence_workflows/Link Minimalistic 2.svg";

const workflowCards = [
  {
    icon: userIcon,
    title: "Profile Enrichment",
    description:
      "Bring in mobile-linked context to reduce form friction and improve onboarding quality.",
    highlighted: true,
  },
  {
    icon: shieldCheckIcon,
    title: "Fraud Detection Signals",
    description:
      "Detect suspicious, duplicate, synthetic, or recycled identities earlier in the flow.",
    highlighted: false,
  },
  {
    icon: phoneCallingIcon,
    title: "Reachability Intelligence",
    description:
      "Assess whether a number is active and contactable before triggering outreach or recovery.",
    highlighted: false,
  },
  {
    icon: routeIcon,
    title: "Multi-partner fallback",
    description:
      "Route requests across providers to improve reliability and reduce single-partner dependency.",
    highlighted: false,
  },
  {
    icon: clipboardIcon,
    title: "Workflow-Ready Outputs",
    description:
      "Deliver structured, normalized signals that plug directly into downstream decisioning layers.",
    highlighted: false,
  },
  {
    icon: linkIcon,
    title: "Flexible Integration",
    description:
      "Connect via API, SDK, or workflow-based configuration depending on the product setup.",
    highlighted: false,
  },
];

export default function IntelligenceWorkflowsSection() {
  const scrollRef = useAutoScroll(290, 20);

  return (
    <section className="bg-white rounded-[40px] lg:rounded-[112px] px-5 py-10 sm:px-10 sm:py-10 md:px-16 md:py-16 lg:px-[120px] lg:py-[120px] overflow-hidden">
      <div className="max-w-[924px] mx-auto flex flex-col gap-10 items-center">
        <div className="text-center max-w-[772px]">
          <h2 className="font-heading text-[20px] md:text-[42px] lg:text-[42px] leading-[1.3] tracking-[-1.12px] text-black">
            Built for modern{" "}
            <span className="text-primary">
              mobile intelligence workflows
            </span>
          </h2>
          <p className="mt-[18px] text-[12px] lg:text-[18px] leading-[1.5] tracking-[-0.36px] text-black/60">
            A mobile intelligence layer that helps businesses assess user
            quality, enrich onboarding, detect risk earlier, and understand
            contactability with more confidence.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="w-full flex gap-5 overflow-x-auto snap-x snap-mandatory sm:snap-none sm:flex-wrap sm:max-w-[925px] pb-3 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {workflowCards.map((card) => (
            <div
              key={card.title}
              className="group bg-white rounded-2xl p-5 flex flex-col gap-4 w-[290px] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] transition-colors duration-200 border border-[#e5e7eb] hover:border-[#1a9948] active:border-[#1a9948]"
            >
              <div className="w-[53px] h-[53px] rounded-full bg-[#e9fbf0] flex items-center justify-center shrink-0">
                <img src={card.icon} alt="" className="w-[26px] h-[26px]" />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="text-base font-semibold text-black capitalize">
                  {card.title}
                </p>
                <div className="w-[65px] h-px transition-colors duration-200 bg-[#CED4DA] group-hover:bg-[#1a9948] group-active:bg-[#1a9948]" />
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
