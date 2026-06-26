import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import returningGuest from "../../assets/product_pages/DigitalCheckIn/returning_guest.png";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import { returningGuestPoints } from "./data";

export default function ReturningGuestsSection() {
  return (
    <section className="bg-white px-5 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-[1112px] gap-10 lg:grid-cols-[minmax(0,500px)_minmax(0,1fr)] lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#dfe7f5] bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[1.4px] text-primary">
            <span className="size-1.5 rounded-full bg-[#54eebe]" />
            Returning Guests
          </span>
          <h2 className="mt-5 font-heading text-[32px] leading-[1.16] text-[#07111f] lg:text-[46px]">
            Repeat Guests Check In
            <br />
            <span className="text-primary">Like Magic.</span>
          </h2>
          <p className="mt-4 text-[17px] font-medium text-[#111827]">
            Enter mobile number. Verify OTP. Done.
          </p>
          <div className="mt-6 space-y-3">
            {returningGuestPoints.map((point) => (
              <p key={point} className="flex items-center gap-3 text-[16px] text-[#5f6573]">
                <CheckCircle2 className="size-5 text-[#16c784]" />
                {point}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.08)}
          className="overflow-hidden rounded-[28px] border border-[#dfe7f5] bg-[#f8fbff] p-3 shadow-[0_22px_70px_-46px_rgba(0,25,255,0.55)]"
        >
          <img
            src={returningGuest}
            alt="Returning guest check-in dashboard"
            className="h-auto w-full rounded-[20px] object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  );
}
