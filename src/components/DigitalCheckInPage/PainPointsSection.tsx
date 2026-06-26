import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import { painPoints } from "./data";

export default function PainPointsSection() {
  return (
    <section className="bg-[#f7f9fc] px-5 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1152px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
          className="mx-auto max-w-[768px] text-center"
        >
          <h2 className="font-heading text-[32px] leading-[1.16] text-[#07111f] lg:text-[46px]">
            Hotel check-in should
            <br />
            <span className="text-primary">not feel like paperwork.</span>
          </h2>
          <p className="mt-4 text-[16px] leading-[1.6] text-[#5f6573] lg:text-[18px]">
            Guests should arrive ready to stay. Not ready to stand in line.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {painPoints.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={createFadeInUp(index * 0.05)}
              className="rounded-[22px] border border-[#e2e8f2] bg-white p-6 shadow-[0_18px_50px_-38px_rgba(4,10,28,0.45)]"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-[#edf4ff] text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-[20px] font-semibold leading-[1.3] text-[#111827]">
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.55] text-[#667085]">
                {description}
              </p>
            </motion.article>
          ))}
        </div>

        <p className="mt-10 text-center text-[15px] font-medium text-[#5f6573]">
          Modern hospitality deserves a modern guest onboarding experience.
        </p>
      </div>
    </section>
  );
}
