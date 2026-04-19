
export default function CTASection() {
  return (
    <section className="px-5 lg:px-12 py-10 lg:py-[112.5px]">
      <div className="max-w-[1215px] mx-auto bg-white rounded-[40px] lg:rounded-[45px] px-[25px] py-10 md:p-12 lg:p-[67.5px] overflow-hidden">
        <div className="max-w-[1072px] mx-auto flex flex-col gap-[50px] items-center">
          <div className="flex flex-col gap-[45px] items-center justify-center w-full">
            <div className="flex flex-col gap-[18px] items-center text-center text-black">
              <h2 className="font-heading text-[20px] md:text-[42px] lg:text-[42px] leading-[1.1] tracking-[-0.4px] lg:tracking-[-1.12px]">
                Bank Account Verification, without the{" "}
                <span className="text-blue-section">complexity.</span>
              </h2>
              <p className="text-[12px] lg:text-[18px] leading-[1.5] text-black/60">
                Build on idto and focus on your product, not verification
                overhead.
              </p>
            </div>
            <div className="flex flex-wrap gap-[13.5px] items-center justify-center">
              <a
                href="https://dashboard.idto.ai/signup/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-[1.125px] border-transparent bg-primary text-white w-[110px] h-[36px] lg:w-auto lg:h-auto lg:px-[27px] lg:py-[13.5px] text-[12px] lg:text-base font-semibold tracking-[-0.32px] hover:bg-primary-dark transition-colors whitespace-nowrap"
              >
                Start Testing
              </a>
              <a
                href="https://idtoai.readme.io/reference/idtoai-verification-apis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-[1.125px] border-primary text-primary w-[110px] h-[36px] lg:w-auto lg:h-auto lg:px-[27px] lg:py-[13.5px] text-[12px] lg:text-base font-medium lg:font-semibold tracking-[0.36px] lg:tracking-[-0.32px] hover:bg-primary/5 transition-colors whitespace-nowrap"
              >
                View API Docs
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
