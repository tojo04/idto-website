import { useAutoScroll } from "../../hooks/useAutoScroll";
import mobileIcon from "../../assets/product_pages/DIGILOCKER/sections/journeys_section/Mobile.svg";
import desktopIcon from "../../assets/product_pages/DIGILOCKER/sections/journeys_section/Desktop.svg";
import fallbackIcon from "../../assets/product_pages/DIGILOCKER/sections/journeys_section/fallback.svg";
import documentIcon from "../../assets/product_pages/DIGILOCKER/sections/journeys_section/document (2).svg";
import pricingIcon from "../../assets/product_pages/DIGILOCKER/sections/journeys_section/pricing.svg";
import analyticsIcon from "../../assets/product_pages/DIGILOCKER/sections/journeys_section/Analytics.svg";

const journeyCards = [
  {
    icon: mobileIcon,
    title: "Pin-less login",
    description: "Just mobile number and OTP",
    highlighted: true,
  },
  {
    icon: desktopIcon,
    title: "No-redirection SDK",
    description: "Keep users inside your onboarding flow",
    highlighted: false,
  },
  {
    icon: fallbackIcon,
    title: "Smart fallback for failed cases",
    description: "OCR + Face Match for smoother recovery",
    highlighted: false,
  },
  {
    icon: documentIcon,
    title: "15+ document support",
    description: "Identity, education, and compliance documents",
    highlighted: false,
  },
  {
    icon: pricingIcon,
    title: "Outcome-based pricing",
    description: "Pay only for successful document fetches",
    highlighted: false,
  },
  {
    icon: analyticsIcon,
    title: "Real-time analytics",
    description: "Track exactly where users drop off",
    highlighted: false,
  },
];

export default function CompliantJourneysSection() {
  const scrollRef = useAutoScroll(290, 20);

  return (
    <section className="bg-white rounded-[40px] lg:rounded-[112px] px-5 py-10 sm:px-10 sm:py-10 md:px-16 md:py-16 lg:px-[120px] lg:py-[120px] overflow-hidden">
      <div className="max-w-[924px] mx-auto flex flex-col gap-10 items-center">
          <div className="text-center max-w-[772px]">
            <h2 className="font-heading text-[20px] md:text-[42px] lg:text-[42px] leading-[1.3] tracking-[-1.12px] text-black">
              Built for compliant{" "}
              <span className="text-primary">DigiLocker journeys</span>
            </h2>
            <p className="mt-[18px] text-black/60 text-[15px] lg:text-[18px] leading-[1.5] tracking-[-0.36px] whitespace-nowrap">
              A lower-friction DigiLocker suite built for better conversion, smoother journeys, and faster go-live.
            </p>
          </div>

          <div ref={scrollRef} className="w-full flex gap-5 overflow-x-auto snap-x snap-mandatory sm:snap-none sm:flex-wrap sm:max-w-[925px] pb-3 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none]">
            {journeyCards.map((card) => (
              <div
                key={card.title}
                className="group bg-white rounded-2xl p-5 flex flex-col gap-4 w-[290px] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] border border-[#e5e7eb] hover:border-[#1a9948] active:border-[#1a9948] transition-colors duration-200"
              >
                <div className="w-[53px] h-[53px] rounded-full bg-[#e9fbf0] flex items-center justify-center shrink-0">
                  <img src={card.icon} alt="" className="w-[26px] h-[26px]" />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-base font-semibold text-black capitalize">
                    {card.title}
                  </p>
                  <div className="w-[65px] h-px bg-[#CED4DA] group-hover:bg-[#1a9948] group-active:bg-[#1a9948] transition-colors duration-200" />
                  <p className="text-sm text-black/60 leading-[1.5] tracking-[-0.28px]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

    </section>
  );
}
