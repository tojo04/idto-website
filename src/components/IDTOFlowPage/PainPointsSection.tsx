import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

const painPoints = [
  {
    title: "Weeks of Product and Engineering Effort",
    description:
      "Every new workflow needs APIs, UI screens, consent capture, validation, error handling, retry logic, analytics and operational support.",
  },
  {
    title: "Rigid Journeys Lose Good Users",
    description:
      "Every customer is pushed through the same process regardless of context, risk or previous verification outcomes.",
  },
  {
    title: "One Provider Becomes One Point of Failure",
    description:
      "Downtime, limited coverage and poor success rates directly impact onboarding conversion.",
  },
  {
    title: "Little Visibility After Launch",
    description:
      "Teams know users dropped off but not where, why or how to improve the experience.",
  },
];

export default function PainPointsSection() {
  return (
    <section className="px-5 py-12 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1215px]">
        <div className="mx-auto max-w-[880px] text-center">
          <h2 className="font-heading text-[26px] leading-[1.15] text-[#0c121a] sm:text-[36px] lg:text-[42px]">
            Identity infrastructure should{" "}
            <span className="text-primary">not slow down your go-to-market.</span>
          </h2>
          <p className="mt-5 text-[14px] leading-[1.65] text-[#5d646f] lg:text-[16px]">
            Most onboarding journeys are still built one API, one screen and
            one exception at a time. The result is delayed launches,
            fragmented experiences, expensive engineering cycles and workflows
            that are difficult to improve after they go live.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[896px] gap-4 md:grid-cols-2 lg:mt-14">
          {painPoints.map((item, index) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={createFadeInUp(index * 0.04)}
              className="flex gap-4 rounded-[20px] border border-[#e1e5eb] bg-white p-6 shadow-[0_1px_3px_rgba(16,24,40,0.06),0_1px_2px_rgba(16,24,40,0.04)]"
            >
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-2xl bg-[#fceded] text-[#fd5839]">
                <AlertTriangle className="size-4" />
              </span>
              <div>
                <h3 className="text-[14px] font-semibold leading-5 tracking-normal text-[#0c121a]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-[1.62] text-[#5d646f]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
