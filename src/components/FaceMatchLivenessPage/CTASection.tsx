export default function CTASection() {
  return (
    <section className="bg-white px-5 py-12 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[896px] text-center">
        <h2 className="font-heading text-[28px] leading-[1.15] text-[#0b111f] sm:text-[36px] lg:text-[42px]">
          Ready to Strengthen Identity
          <br />
          <span className="text-primary">Verification?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[720px] text-[15px] font-semibold leading-[1.55] text-[#626a75]">
          Add face match decisions, similarity scoring and liveness signals to
          your onboarding workflow.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href="/demo/"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-[15px] font-semibold leading-none text-white shadow-[0_8px_20px_-6px_rgba(47,91,255,0.5)] transition-colors hover:bg-primary-dark"
          >
            Try Face Match
          </a>
          <a
            href="/demo/"
            className="inline-flex h-12 items-center justify-center rounded-full border border-primary bg-white px-7 text-[15px] font-semibold leading-none text-primary transition-colors hover:bg-primary/5"
          >
            Talk to Sales
          </a>
        </div>
        <p className="mt-6 text-[15px] font-semibold leading-[1.55] text-[#626a75]">
          Used by fintechs, lending platforms, marketplaces, insurance
          companies and regulated businesses.
        </p>
      </div>
    </section>
  );
}
