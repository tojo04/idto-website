import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import { impactItems } from "./data";

export default function ImpactSection() {
  return (
    <section className="bg-[#f7f9fc] px-5 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1112px]">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
          className="mx-auto max-w-[760px] text-center font-heading text-[32px] leading-[1.16] text-[#07111f] lg:text-[46px]"
        >
          Real impact on your guest experience.
        </motion.h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {impactItems.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={createFadeInUp(index * 0.04)}
              className="rounded-[22px] border border-[#e2e8f2] bg-white p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-[#edf4ff] text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-[19px] font-semibold text-[#111827]">{title}</h3>
              <p className="mt-2 text-[15px] leading-[1.55] text-[#667085]">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
