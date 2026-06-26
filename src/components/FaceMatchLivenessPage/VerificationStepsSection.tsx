import { motion } from "framer-motion";
import { Camera, CheckCircle2, FileImage } from "lucide-react";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

const steps = [
  {
    label: "Step 1",
    title: "Upload the Reference Photo",
    description:
      "Use the photograph extracted from Aadhaar, PAN, Passport, Driving Licence, or another identity document.",
    bullets: ["Any government ID", "PDF, JPG, PNG", "Auto face extraction"],
    icon: FileImage,
  },
  {
    label: "Step 2",
    title: "Capture a Live Selfie",
    description:
      "Guide the user to capture a clear selfie through your application or onboarding workflow.",
    bullets: ["Web & mobile SDKs", "Live capture prompts", "Quality feedback"],
    icon: Camera,
  },
  {
    label: "Step 3",
    title: "Receive the Result",
    description:
      "Get the face match decision, similarity score, liveness outcome, and image-quality signals.",
    bullets: ["Match decision", "Similarity score", "Detailed report"],
    icon: CheckCircle2,
  },
];

export default function VerificationStepsSection() {
  return (
    <section className="bg-white px-5 py-12 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1215px] rounded-[28px] bg-[#f8fafc] px-5 py-10 shadow-[0_18px_40px_rgba(14,29,61,0.08)] sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-heading text-[28px] leading-[1.15] text-[#0b111f] sm:text-[36px] lg:text-[42px]">
            Verify the person in three{" "}
            <span className="text-primary">simple steps.</span>
          </h2>
          <p className="mt-5 text-[14px] leading-[1.65] text-[#5d646f] lg:text-[16px]">
            A streamlined verification flow for modern digital onboarding.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:mt-14">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={createFadeInUp(index * 0.04)}
                className="rounded-[22px] border border-[#e0e5eb] bg-white p-7 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
              >
                <span className="text-[14px] font-semibold uppercase leading-5 tracking-[0.8px] text-primary">
                  {step.label}
                </span>
                <span className="mt-5 flex size-12 items-center justify-center rounded-2xl bg-[#eef2ff] text-primary">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-[18px] font-semibold leading-6 text-[#0b111f]">
                  {step.title}
                </h3>
                <p className="mt-3 min-h-[70px] text-[14px] leading-[1.62] text-[#626a75]">
                  {step.description}
                </p>
                <div className="mt-5 space-y-2">
                  {step.bullets.map((bullet) => (
                    <span
                      key={bullet}
                      className="flex items-center gap-2 text-[14px] leading-5 text-[#374151]"
                    >
                      <CheckCircle2 className="size-4 text-primary" />
                      {bullet}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
