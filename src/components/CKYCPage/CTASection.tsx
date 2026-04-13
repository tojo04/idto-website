import partner1 from "../../assets/product_pages/ckyc/partner_logo1.svg";
import partner2 from "../../assets/product_pages/ckyc/partner_logo2.svg";

export default function CTASection() {
  return (
    <section className="px-5 lg:px-12 py-10 lg:py-[112.5px]">
      <div className="max-w-[1215px] mx-auto bg-white rounded-[40px] lg:rounded-[45px] px-[25px] py-10 md:p-12 lg:p-[67.5px] overflow-hidden">
        <div className="max-w-[1072px] mx-auto flex flex-col gap-[50px] items-center">
          {/* Text and buttons */}
          <div className="flex flex-col gap-[45px] items-center justify-center w-full">
            <div className="flex flex-col gap-[18px] items-center text-center text-black">
              <h2 className="font-heading text-[20px] md:text-[42px] lg:text-[42px] leading-[1.1] tracking-[-0.4px] lg:tracking-[-1.12px]">
                CKYC onboarding, without the{" "}
                <span className="text-blue-section">complexity.</span>
              </h2>
              <p className="text-[12px] lg:text-[18px] leading-[1.5] text-black/60">
                Build on idto and focus on your product, not identity overhead.
              </p>
            </div>

            <div className="flex flex-wrap gap-[15px] items-center justify-center">
              <a
                href="https://cal.com/adityaskx-idto/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-[1.125px] border-transparent bg-primary text-white w-[110px] h-[36px] lg:w-auto lg:h-auto lg:px-[27px] lg:py-[13.5px] text-[12px] lg:text-base font-semibold tracking-[-0.32px] hover:bg-primary-dark transition-colors whitespace-nowrap"
              >
                Talk to sales
              </a>
              <a
                href="https://dashboard.idto.ai/signup/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-[1.125px] border-primary text-primary w-[110px] h-[36px] lg:w-[144px] lg:h-auto lg:px-[27px] lg:py-[13.5px] text-[12px] lg:text-base font-medium lg:font-semibold tracking-[0.36px] lg:tracking-[-0.32px] hover:bg-primary/5 transition-colors"
              >
                Sign-up
              </a>
            </div>
          </div>

          {/* Partner strip */}
          <div className="flex flex-col gap-[30px] items-center w-full">
            <div className="flex flex-col gap-[10px] items-center w-full">
              <p className="text-xs uppercase tracking-[1.2px] text-[#666] text-center leading-4">
                Backed by trusted partners
              </p>
              <div className="w-full h-px bg-black/10" />
            </div>
            <div className="flex items-center justify-center gap-6 sm:gap-10 lg:gap-[80px] flex-wrap">
              <img src={partner1} alt="Partner" className="h-[38px] sm:h-[48px] w-auto object-contain" />
              <img src={partner2} alt="Partner" className="h-[35px] sm:h-[45px] w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
