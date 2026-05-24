import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { createFadeInUp, fadeItem, staggerContainer, viewportOnce } from "../../../utils/animations";
import { useAutoScroll } from "../../../hooks/useAutoScroll";
import questionMarkIcon from "../../../assets/solution_pages/fintech_and_lending/sections/use_cases/question_mark.svg";
import rocketIcon from "../../../assets/solution_pages/fintech_and_lending/sections/use_cases/rocket.svg";
import repeatIcon from "../../../assets/solution_pages/fintech_and_lending/sections/use_cases/repeat.svg";
import trendingIcon from "../../../assets/solution_pages/fintech_and_lending/sections/use_cases/trending.svg";
import callIcon from "../../../assets/solution_pages/fintech_and_lending/sections/use_cases/call.svg";
import tickIcon from "../../../assets/solution_pages/fintech_and_lending/sections/use_cases/tick.svg";
import eyeIcon from "../../../assets/solution_pages/fintech_and_lending/sections/use_cases/eye.svg";

const useCases = [
  { icon: rocketIcon, title: "Account opening journeys" },
  { icon: repeatIcon, title: "Loan onboarding" },
  { icon: trendingIcon, title: "CKYC reuse and refresh" },
  { icon: callIcon, title: "Customer profile enrichment" },
  { icon: tickIcon, title: "Payout account checks" },
  { icon: eyeIcon, title: "Risk-based verification workflows" },
];

export default function UseCasesSection() {
  const scrollRef = useAutoScroll(300, 20);

  return (
    <section className="solution-usecases-section bg-white rounded-t-[40px] rounded-b-[40px] lg:rounded-t-[112px] lg:rounded-b-[112px] px-5 lg:px-12 min-[1440px]:px-[112.5px] py-14 lg:py-[112.5px] overflow-hidden">
      <div className="max-w-[1215px] mx-auto grid gap-10 lg:grid-cols-[481px_minmax(0,620px)] lg:items-start lg:justify-between">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0)}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-white px-[13px] py-[5px] text-[14px] font-normal leading-none text-[#135AE4]">
            <img src={questionMarkIcon} alt="" className="h-[14px] w-[14px]" width="14" height="14" loading="lazy" decoding="async" />
            Use cases
          </div>
          <h2 className="mt-4 font-heading text-[30px] md:text-[42px] leading-[1.3] text-black lg:w-[582.75px]">
            What you can <span className="text-primary">build</span>
          </h2>
          <p className="mt-4 max-w-[481px] mx-auto lg:mx-0 text-[13px] md:text-[16px] lg:text-[18px] leading-[1.5] tracking-[-0.36px] text-black/60">
            Mix and match the idto APIs to ship regulated identity flows from account opening to ongoing verification operations.
          </p>
          <a
            href="https://idtoai.readme.io/reference/idtoai-verification-apis"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-[14px] font-normal text-[#135AE4] transition-colors hover:text-primary-dark"
          >
            See API docs
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          ref={scrollRef}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="w-full flex gap-5 overflow-x-auto snap-x snap-mandatory pb-3 sm:grid sm:grid-cols-[repeat(2,300px)] sm:justify-center sm:overflow-visible sm:snap-none sm:pb-0 lg:w-[620px] [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {useCases.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeItem}
              className="group bg-white border border-[#e6e6e6] rounded-[12px] h-[160px] w-[300px] shrink-0 snap-start px-[45px] py-[23px] flex items-center justify-center transition-colors duration-200 hover:border-primary/40 sm:w-full sm:shrink"
            >
              <div className="flex flex-col gap-5 w-full">
                <img
                  src={item.icon}
                  alt=""
                  className="h-[53.075px] w-[53.075px] shrink-0"
                  width="54"
                  height="54"
                  loading="lazy"
                  decoding="async"
                />
                <h3 className="text-base font-semibold leading-[normal] text-black capitalize">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
