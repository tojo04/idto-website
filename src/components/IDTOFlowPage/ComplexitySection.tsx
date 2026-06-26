import { motion } from "framer-motion";
import { Blocks, PlugZap, SlidersHorizontal } from "lucide-react";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

const cards = [
  {
    title: "Pre-built Journeys, Fully Configurable",
    description:
      "Start with proven flows, then tune screens, checks, fallbacks and review paths around your policy.",
    icon: Blocks,
  },
  {
    title: "One SDK. Your Complete Identity Stack.",
    description:
      "Connect identity, banking, business, employment, fraud and alternate-data checks behind one integration.",
    icon: PlugZap,
  },
  {
    title: "Your Workflow. Your Providers. Your Rules.",
    description:
      "Use IDTO providers, your own providers or a hybrid setup.",
    icon: SlidersHorizontal,
  },
];

export default function ComplexitySection() {
  return (
    <section className="px-5 py-12 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1215px]">
        <h2 className="mx-auto max-w-[768px] text-center font-heading text-[26px] leading-[1.15] text-[#0c121a] sm:text-[36px] lg:text-[42px]">
          Built for speed.
          <br />
          Designed for identity complexity.
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={createFadeInUp(index * 0.05)}
                className="rounded-[20px] border border-[#e1e5eb] bg-white p-7 shadow-[0_1px_3px_rgba(16,24,40,0.06),0_1px_2px_rgba(16,24,40,0.04)]"
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
