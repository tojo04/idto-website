import { useAutoScroll } from "../../hooks/useAutoScroll";
import simpleApiIcon from "../../assets/product_pages/DIGILOCKER/sections/integrations/Simple_API.svg";
import plugPlayIcon from "../../assets/product_pages/DIGILOCKER/sections/integrations/Plug-and-play.svg";
import contextFallbackIcon from "../../assets/product_pages/DIGILOCKER/sections/integrations/Context-fallback.svg";

const integrationOptions = [
  {
    icon: simpleApiIcon,
    title: "Simple API Integration",
    description: "For teams that want more control over UX",
  },
  {
    icon: plugPlayIcon,
    title: "Plug-and-play SDK",
    description: "Branded flow with no redirection",
  },
  {
    icon: contextFallbackIcon,
    title: "SDK with context screen + fallback",
    description: "Smart retries and alternate document flows",
  },
];

export default function IntegrationOptionsSection() {
  const scrollRef = useAutoScroll(290, 20);

  return (
    <section className="px-5 lg:px-12 py-[120px]">
      <div className="max-w-[924px] mx-auto flex flex-col gap-10 items-center">
        <div className="text-center max-w-[772px]">
          <h2 className="font-heading text-[32px] md:text-[42px] lg:text-[56px] leading-[1.3] tracking-[-1.12px] text-black">
            Integration options built{" "}
            <span className="text-primary">for your team</span>
          </h2>
          <p className="mt-[18px] text-black/60 text-[15px] lg:text-[18px] leading-[1.5] tracking-[-0.36px]">
            Choose the DigiLocker setup that fits your product, UX, and go-live needs.
          </p>
        </div>

        <div ref={scrollRef} className="w-full flex gap-5 overflow-x-auto snap-x snap-mandatory sm:snap-none sm:flex-wrap sm:max-w-[925px] pb-3 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none]">
          {integrationOptions.map((item) => (
            <div
              key={item.title}
              className="group bg-white border border-[#e5e7eb] hover:border-primary active:border-primary rounded-2xl p-5 flex flex-col gap-4 w-[290px] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] transition-colors duration-200"
            >
              <div className="w-[53px] h-[53px] rounded-full bg-[rgba(39,64,206,0.1)] flex items-center justify-center shrink-0">
                <img src={item.icon} alt="" className="w-[26px] h-[26px]" />
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="text-base font-semibold text-black capitalize">
                  {item.title}
                </p>
                <div className="w-[65px] h-px bg-[#CED4DA] group-hover:bg-primary group-active:bg-primary transition-colors duration-200" />
                <p className="text-sm text-black/60 leading-[1.5] tracking-[-0.28px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
