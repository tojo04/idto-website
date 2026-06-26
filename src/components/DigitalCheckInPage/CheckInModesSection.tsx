import { motion } from "framer-motion";
import guestFlow from "../../assets/product_pages/DigitalCheckIn/guest_flow.png";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import { checkInModes } from "./data";

export default function CheckInModesSection() {
  return (
    <section id="guest-flow" className="bg-white px-5 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1112px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
          className="text-center"
        >
          <h2 className="font-heading text-[32px] leading-[1.16] text-[#07111f] lg:text-[46px]">
            Two Ways to <span className="text-primary">Check In</span>
          </h2>
          <p className="mt-4 text-[16px] leading-[1.6] text-[#5f6573] lg:text-[18px]">
            Choose the journey that works best for your guests.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="grid gap-4">
            {checkInModes.map(({ title, description, icon: Icon }, index) => (
              <motion.article
                key={title}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={createFadeInUp(index * 0.06)}
                className="rounded-[22px] border border-[#e2e8f2] bg-[#f9fbff] p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-white text-primary shadow-[0_12px_30px_-24px_rgba(4,10,28,0.65)]">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-[20px] font-semibold text-[#111827]">{title}</h3>
                <p className="mt-2 text-[15px] leading-[1.55] text-[#667085]">{description}</p>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={createFadeInUp(0.08)}
            className="overflow-hidden rounded-[28px] border border-[#dfe7f5] bg-[#f8fbff] p-3 shadow-[0_22px_70px_-46px_rgba(0,25,255,0.55)]"
          >
            <img
              src={guestFlow}
              alt="Digital check-in guest flow"
              className="h-auto w-full rounded-[20px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
