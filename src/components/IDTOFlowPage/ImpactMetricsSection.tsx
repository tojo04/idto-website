import { motion } from "framer-motion";
import {
  Layers3,
  LineChart,
  Radar,
  Route,
  TimerReset,
  UserCheck,
} from "lucide-react";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

const impactCards = [
  {
    title: "Go Live Faster",
    description: "Launch workflows in days instead of months.",
    icon: TimerReset,
  },
  {
    title: "Higher Completion Rates",
    description: "Reduce user drop-offs with guided journeys.",
    icon: UserCheck,
  },
  {
    title: "Improved Verification Success",
    description: "Use smart routing and provider fallbacks.",
    icon: Route,
  },
  {
    title: "Lower Engineering Effort",
    description: "One SDK replaces multiple integrations.",
    icon: Layers3,
  },
  {
    title: "Better Visibility",
    description: "Track every step of the customer journey.",
    icon: LineChart,
  },
  {
    title: "Scale Without Rebuilding",
    description: "Add new checks without changing your front end.",
    icon: Radar,
  },
];

export default function ImpactMetricsSection() {
  return (
    <section className="bg-blue-section px-5 py-14 lg:px-12 lg:py-[72px]">
      <div className="mx-auto max-w-[1024px]">
        <h2 className="mx-auto max-w-[560px] text-center font-heading text-[28px] leading-[1.14] text-white sm:text-[36px] lg:text-[42px]">
          Real impact on your onboarding workflows.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {impactCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={createFadeInUp(index * 0.04)}
                className="min-h-[183px] rounded-3xl border border-[#536bc9] bg-[rgba(55,87,200,0.43)] p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-[20px] border border-[#536bc9] bg-[#2747b8] text-white">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-[16px] font-semibold leading-6 tracking-normal text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.62] text-white/80">
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
