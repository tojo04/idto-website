import { motion } from "framer-motion";
import { EyeOff, Images, UserX } from "lucide-react";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

const problems = [
  {
    title: "Identity Mismatches",
    description:
      "Identify when the submitted selfie does not match the photograph on the identity document.",
    icon: UserX,
  },
  {
    title: "Poor-Quality Captures",
    description:
      "Detect blurred images, low lighting, incorrect face alignment, and partially hidden faces.",
    icon: Images,
  },
  {
    title: "Suspicious Submissions",
    description:
      "Flag multiple faces, masks, closed eyes, occlusions, and other capture inconsistencies.",
    icon: EyeOff,
  },
];

export default function ProblemSection() {
  return (
    <section className="px-5 py-12 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1215px]">
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="font-heading text-[28px] leading-[1.15] text-[#0b111f] sm:text-[36px] lg:text-[42px]">
            Stop identity impersonation before{" "}
            <span className="text-primary">onboarding begins.</span>
          </h2>
          <p className="mt-5 text-[14px] leading-[1.65] text-[#5d646f] lg:text-[16px]">
            A valid identity document does not prove that the person submitting
            it is the document owner. Face Match and Liveness help businesses
            detect:
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-14">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={createFadeInUp(index * 0.04)}
                className="rounded-[20px] border border-[#e0e5eb] bg-white p-7 shadow-[0_8px_12px_rgba(0,0,0,0.06)]"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-[#fceded] text-[#fd5839]">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-[15px] font-semibold leading-5 text-[#0b111f]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.62] text-[#626a75]">
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
