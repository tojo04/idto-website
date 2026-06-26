export default function CTASection() {
  return (
    <section className="px-5 py-10 lg:px-12 lg:py-[112.5px]">
      <div className="mx-auto max-w-[1215px] overflow-hidden rounded-[40px] bg-white px-[25px] py-10 md:p-12 lg:rounded-[45px] lg:p-[67.5px]">
        <div className="mx-auto flex max-w-[1072px] flex-col items-center gap-[42px] text-center">
          <div className="flex flex-col items-center gap-[18px] text-black">
            <h2 className="font-heading text-[24px] leading-[1.15] tracking-normal md:text-[42px]">
              Identity workflows, without the{" "}
              <span className="text-blue-section">complexity.</span>
            </h2>
            <p className="max-w-[672px] text-[14px] leading-[1.65] text-black/60 lg:text-[18px]">
              Launch branded onboarding journeys with voice guidance,
              multilingual experiences, AI-assisted checks and provider
              fallbacks through one SDK.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-[13.5px]">
            <a
              href="/demo/"
              className="inline-flex h-[44px] items-center justify-center rounded-full border-[1.125px] border-transparent bg-primary px-[24px] text-[14px] font-semibold tracking-normal text-white transition-colors hover:bg-primary-dark lg:h-auto lg:px-[27px] lg:py-[13.5px] lg:text-base"
            >
              Build My Workflow
            </a>
            <a
              href="/contact-us/"
              className="inline-flex h-[44px] items-center justify-center rounded-full border-[1.125px] border-primary px-[24px] text-[14px] font-semibold tracking-normal text-primary transition-colors hover:bg-primary/5 lg:h-auto lg:px-[27px] lg:py-[13.5px] lg:text-base"
            >
              Talk to an Expert
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-7 text-[12px] font-medium leading-none text-[#5d646f] lg:gap-10">
            <span>Fintech Co</span>
            <span>Lender Group</span>
            <span>Marketplace</span>
            <span>Enterprise Inc</span>
            <span>DigiSign</span>
          </div>
        </div>
      </div>
    </section>
  );
}
