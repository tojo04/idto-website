import { Building2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import { propertyCards } from "./data";

export default function MultiPropertySection() {
  return (
    <section className="bg-white px-5 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-[1112px] gap-10 lg:grid-cols-[minmax(0,532px)_minmax(0,532px)] lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#dfe7f5] bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[1.4px] text-primary">
            <span className="size-1.5 rounded-full bg-[#54eebe]" />
            Multi-Property Identity
          </span>
          <h2 className="mt-5 font-heading text-[32px] leading-[1.16] text-[#07111f] lg:text-[46px]">
            Verify Once.
            <br />
            <span className="text-primary">Travel Everywhere.</span>
          </h2>
          <p className="mt-5 max-w-[448px] text-[16px] leading-[1.65] text-[#5f6573]">
            A guest verified at one property should not feel unknown at the next.
            idto helps hospitality brands build a secure, privacy-first guest
            identity layer across locations.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.08)}
          className="rounded-[28px] border border-[#dfe7f5] bg-[#f8fbff] p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {propertyCards.map((property) => (
              <article key={property} className="rounded-[18px] border border-[#e2e8f2] bg-white p-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-[#edf4ff] text-primary">
                    <Building2 className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-[14px] font-semibold text-[#111827]">{property}</h3>
                    <p className="text-[12px] text-[#667085]">Identity recognized</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-[270px] rounded-[20px] border border-[#dfe7f5] bg-white p-4 shadow-[0_18px_50px_-36px_rgba(4,10,28,0.55)]">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-primary text-white">
                <ShieldCheck className="size-5" />
              </span>
              <div>
                <h3 className="text-[14px] font-semibold text-[#111827]">One verified guest identity</h3>
                <p className="text-[12px] text-[#667085]">Privacy-first - Consent-led</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
