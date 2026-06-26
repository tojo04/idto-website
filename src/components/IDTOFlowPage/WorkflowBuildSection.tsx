import { motion } from "framer-motion";
import {
  Bot,
  ChartNoAxesCombined,
  Compass,
  Palette,
  Route,
  Workflow,
} from "lucide-react";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

const buildSteps = [
  {
    title: "Start with a Pre-built Workflow",
    description:
      "Launch with ready-to-configure journeys for customer KYC, business verification, employee onboarding, seller verification, driver onboarding and fraud prevention.",
    icon: Workflow,
  },
  {
    title: "Make it Feel Completely Yours",
    description:
      "Customize logo, colours, typography, field order, consent screens and user journeys.",
    icon: Palette,
  },
  {
    title: "Guide Every User Through the Journey",
    description:
      "Voice-led instructions, multilingual screens and contextual guidance.",
    icon: Compass,
  },
  {
    title: "Let AI Reduce Avoidable Friction",
    description:
      "AI-assisted capture, extraction and validation to reduce failed verifications.",
    icon: Bot,
  },
  {
    title: "Build Fallbacks into the Workflow",
    description:
      "Retry checks, switch providers and route exceptions automatically.",
    icon: Route,
  },
  {
    title: "Track, Optimize and Scale",
    description:
      "Monitor drop-offs, outcomes and provider performance in one dashboard.",
    icon: ChartNoAxesCombined,
  },
];

export default function WorkflowBuildSection() {
  return (
    <section className="bg-white px-5 py-12 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1215px]">
        <div className="mx-auto max-w-[920px] text-center">
          <h2 className="font-heading text-[26px] leading-[1.15] text-[#0c121a] sm:text-[36px] lg:text-[42px]">
            From an onboarding brief to a production-ready workflow.
          </h2>
          <p className="mx-auto mt-5 max-w-[768px] text-[14px] leading-[1.65] text-[#5d646f] lg:text-[16px]">
            Choose a proven workflow, apply your branding and business rules,
            integrate once and start onboarding.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {buildSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={createFadeInUp(index * 0.04)}
                className="min-h-[184px] rounded-[20px] border border-[#e1e5eb] bg-white p-6 shadow-[0_1px_3px_rgba(16,24,40,0.06),0_1px_2px_rgba(16,24,40,0.04)]"
              >
                <span className="flex size-10 items-center justify-center rounded-[20px] bg-[#e9eefc] text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-[16px] font-semibold leading-6 tracking-normal text-[#0c121a]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.62] text-[#5d646f]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
