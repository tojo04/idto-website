import {
  Bot,
  Languages,
  Mic2,
  Settings2,
  Shuffle,
} from "lucide-react";
import heroVisual from "../../assets/product_pages/IDTOFlow/hero_workflow.webp";

const pills = [
  { label: "Voice-guided", icon: Mic2 },
  { label: "Multilingual", icon: Languages },
  { label: "AI-assisted", icon: Bot },
  { label: "Multi-provider", icon: Shuffle },
  { label: "Fully Customizable", icon: Settings2 },
];

const heroReveal = (delaySeconds = 0) => ({
  animation: `idtoHeroReveal 0.5s ease-out ${delaySeconds}s both`,
});

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-12 pt-10 lg:px-12 lg:pb-[90px] lg:pt-24">
      <style>
        {`@keyframes idtoHeroReveal { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }`}
      </style>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 48% at 50% 45%, rgba(34,83,240,0.14) 0%, rgba(34,83,240,0.04) 43%, rgba(255,255,255,0) 75%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1215px] items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(480px,1fr)]">
        <div
          style={heroReveal()}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <span className="inline-flex rounded-full bg-[#e9eefc] px-[14px] py-[7px] text-[11px] font-semibold uppercase leading-none tracking-[2px] text-primary">
            IDTO Flow
          </span>
          <h1 className="mt-5 font-heading text-[34px] leading-[1.12] tracking-normal text-[#0c121a] sm:text-[42px] lg:text-[56px]">
            Your identity workflow.
            <br />
            Live in 1 day.
          </h1>
          <p className="mt-5 font-heading text-[22px] leading-[1.25] text-primary lg:text-[30px]">
            One SDK. Every onboarding journey.
          </p>
          <div className="mt-6 max-w-[565px] space-y-3 text-[14px] leading-[1.65] text-[#5d646f] lg:text-[16px]">
            <p>
              Build branded KYC, KYB, employee verification and fraud workflows
              without stitching together APIs, providers, screens and edge
              cases.
            </p>
            <p>
              idto Flow combines pre-built journeys, voice guidance,
              multilingual experiences, AI-assisted checks and multi-provider
              fallbacks into one plug-and-play integration.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="/demo/"
              className="inline-flex h-[49px] items-center justify-center rounded-full bg-primary px-6 text-[15px] font-semibold leading-none text-white shadow-[0_8px_18px_rgba(52,97,235,0.28)] transition-colors hover:bg-primary-dark"
            >
              Build My Workflow
            </a>
            <a
              href="#workflow-library"
              className="inline-flex h-[49px] items-center justify-center rounded-full border border-primary bg-white px-6 text-[15px] font-semibold leading-none text-primary transition-colors hover:bg-primary/5"
            >
              Explore Workflow Library
            </a>
          </div>
          <p className="mt-4 text-[12px] leading-[1.5] text-[#5d646f]">
            Start pre-built. Customize everything. Scale without rebuilding.
          </p>
          <div className="mt-6 flex max-w-[565px] flex-wrap justify-center gap-2.5 lg:justify-start">
            {pills.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-[#e1e5eb] bg-white px-3 py-2 text-[12px] font-medium leading-none text-[#5d646f]"
              >
                <Icon className="size-[14px] text-[#0c121a]" />
                {label}
              </span>
            ))}
          </div>
          <p className="mt-8 max-w-[512px] text-[12px] leading-[1.6] text-[#5d646f]">
            Trusted by fast-growing fintechs, marketplaces, lenders and
            enterprise teams to power their identity journeys.
          </p>
        </div>

        <div
          style={heroReveal(0.08)}
          className="relative mx-auto w-full max-w-[620px]"
        >
          <img
            src={heroVisual}
            alt="IDTO Flow workflow builder interface"
            className="w-full rounded-[10px] object-contain"
            width="596"
            height="477"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
