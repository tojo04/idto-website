import { motion } from "framer-motion";
import {
  BadgeCheck,
  CheckCircle2,
  Gauge,
  Image,
  ScanFace,
  ShieldCheck,
  Zap,
} from "lucide-react";
import enterpriseDashboard from "../../assets/product_pages/FaceMatchLiveness/enterprise_dashboard.png";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

const trustSignals = [
  { label: "Real-time Face Matching", icon: ScanFace },
  { label: "Advanced Liveness Detection", icon: ShieldCheck },
  { label: "Image Quality Validation", icon: Image },
  { label: "Fraud Signal Detection", icon: BadgeCheck },
  { label: "Detailed Verification Reports", icon: Gauge },
  { label: "Enterprise Scale APIs", icon: Zap },
];

export default function TrustSection() {
  return (
    <section className="bg-white px-5 py-12 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.8fr)]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
        >
          <span className="rounded-full bg-[#eef2ff] px-4 py-2 text-[12px] font-semibold uppercase leading-[18px] tracking-[1.2px] text-primary">
            Trusted Verification
          </span>
          <h2 className="mt-7 font-heading text-[30px] leading-[1.15] text-[#0b111f] sm:text-[40px] lg:text-[42px]">
            Trusted Face Verification.
            <br />
            <span className="text-primary">Reliable Decisions.</span>
          </h2>
          <p className="mt-5 max-w-[560px] text-[15px] leading-[1.7] text-[#626a75]">
            Reduce impersonation risks and strengthen digital onboarding with
            enterprise-grade face verification and liveness checks.
          </p>
          <div className="mt-7 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {trustSignals.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="flex items-center gap-3 text-[14px] font-medium leading-5 text-[#374151]"
              >
                <span className="relative flex size-4 shrink-0 items-center justify-center">
                  <CheckCircle2 className="absolute size-4 text-primary" />
                  <Icon className="size-2 text-primary" />
                </span>
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.08)}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div className="absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eef2ff]" />
          <img
            src={enterpriseDashboard}
            alt="Enterprise face verification analytics dashboard"
            className="relative mx-auto w-full max-w-[420px] object-contain"
            width="479"
            height="479"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
