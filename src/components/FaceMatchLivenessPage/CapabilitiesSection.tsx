import { motion } from "framer-motion";
import {
  BarChart3,
  Eye,
  FileCheck2,
  Image,
  ScanFace,
  ShieldAlert,
} from "lucide-react";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

const capabilities = [
  {
    title: "Face Match Score",
    description:
      "Measure the similarity between the document photograph and the submitted selfie.",
    icon: BarChart3,
  },
  {
    title: "Liveness Detection",
    description: "Confirm that a live person is present during verification.",
    icon: Eye,
  },
  {
    title: "Image Quality Checks",
    description:
      "Detect blur, low light, incorrect face alignment, and poor-quality captures.",
    icon: Image,
  },
  {
    title: "Fraud and Capture Signals",
    description:
      "Identify multiple faces, masks, occlusion, closed eyes, and suspicious submissions.",
    icon: ShieldAlert,
  },
  {
    title: "Detailed Verification Report",
    description:
      "View the reference photo, uploaded selfie, match result, and all liveness signals in one report.",
    icon: FileCheck2,
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="bg-white px-5 py-12 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="mx-auto max-w-[720px] text-center font-heading text-[28px] leading-[1.15] text-[#0b111f] sm:text-[36px] lg:text-[42px]">
          More than a basic{" "}
          <span className="text-primary">face comparison.</span>
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {capabilities.map((item, index) => {
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
                <span className="flex size-11 items-center justify-center rounded-xl bg-[#eef2ff] text-primary">
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
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={createFadeInUp(0.2)}
            className="rounded-[20px] border border-primary/20 bg-[#eef2ff] p-7 text-primary shadow-[0_8px_12px_rgba(0,0,0,0.06)]"
          >
            <ScanFace className="size-9" />
            <p className="mt-5 text-[18px] font-semibold leading-7 text-[#0b111f]">
              Built for real onboarding flows where selfie quality, identity
              match and liveness all matter.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
