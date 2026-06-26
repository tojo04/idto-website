import heroVisual from "../../../assets/solution_pages/marketplaces/sections/hero/508c812f3d9585fc559095e9156caa1df27b2220.webp";

const heroReveal = (delaySeconds = 0) => ({
  animation: `idtoHeroReveal 0.5s ease-out ${delaySeconds}s both`,
});
export default function HeroSection() {
  return (
    <section className="solution-hero-section marketplaces-hero bg-white rounded-b-[40px] lg:rounded-b-[112px] px-5 lg:px-10 min-[1440px]:px-[111px] pt-8 lg:pt-[95px] pb-10 lg:pb-[95px] overflow-hidden">
      <style>
        {`@keyframes idtoHeroReveal { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }`}
      </style>
      <div className="solution-hero-inner marketplaces-hero-inner relative isolate mx-auto flex max-w-[1300px] flex-col lg:block lg:h-[344px]">
        <div
            style={heroReveal(0)}
          className="order-1 relative z-20 text-center lg:absolute lg:left-0 lg:top-[17px] lg:w-[723px] lg:text-left"
        >
          <h1 className="font-heading text-[20px] md:text-[42px] lg:w-[619px] lg:text-[42px] leading-[1.3] tracking-[0.6px] lg:tracking-[-0.84px] text-black">
            Trust and verification workflows
            <br className="hidden lg:block" />
            <span className="lg:hidden"> </span>
            for marketplaces.
          </h1>
          <p className="mt-[18px] max-w-[329px] lg:max-w-[594px] mx-auto lg:mx-0 text-[12px] lg:text-[18px] leading-[1.5] tracking-[-0.24px] lg:tracking-[-0.36px] text-black/60">
            Verify sellers, buyers, service providers, bank accounts, documents, and contactability with one flexible identity stack.
          </p>
        </div>

        <div
          style={heroReveal(0.08)}
          className="solution-hero-visual marketplaces-hero-visual order-2 relative z-0 mx-auto mt-5 w-full max-w-[330px] sm:max-w-[430px] lg:absolute lg:mx-0 lg:mt-0 lg:max-w-none"
        >
          <img
            src={heroVisual}
            alt="Marketplace trust and verification workflow"
            className="marketplaces-hero-image block h-auto"
            loading="eager"
            decoding="async"
          />
        </div>

        <div
            style={heroReveal(0.15)}
          className="marketplaces-hero-actions order-3 relative z-20 mt-6 flex flex-col gap-[18px] items-center lg:absolute lg:left-0 lg:top-[239px] lg:mt-0 lg:items-start"
        >
          <div className="flex flex-wrap gap-[15px] items-center justify-center lg:gap-[13.5px] lg:justify-start">
            <a
              href="/contact-us/"
              className="inline-flex items-center justify-center rounded-full border-[1.125px] border-transparent bg-primary text-white w-[110px] h-[36px] lg:w-auto lg:h-12 lg:px-[27px] text-[12px] lg:text-base font-semibold tracking-[-0.32px] hover:bg-primary-dark transition-colors whitespace-nowrap"
            >
              Talk to us
            </a>
            <a
              href="#marketplaces-stack"
              className="inline-flex items-center justify-center rounded-full border-[1.125px] border-primary text-primary w-[150px] h-[36px] lg:w-[173px] lg:h-12 lg:px-[27px] text-[12px] lg:text-base font-semibold tracking-[-0.32px] hover:bg-primary/5 transition-colors whitespace-nowrap"
            >
              Explore Solutions
            </a>
          </div>
          <p className="max-w-[329px] lg:max-w-none text-xs leading-[1.5] tracking-[-0.24px] text-[#666] text-center lg:text-left">
            Built for teams across fintech, marketplaces, digital platforms, gig networks, and customer operations.
          </p>
        </div>
      </div>
    </section>
  );
}
