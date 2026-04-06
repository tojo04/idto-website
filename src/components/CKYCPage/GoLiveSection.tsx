import { useAutoScroll } from "../../hooks/useAutoScroll";
import idtoVector from "../../assets/product_pages/ckyc/idto.ai_vector.svg";
import searchIcon from "../../assets/product_pages/ckyc/sections/go_live/search.svg";
import downloadIcon from "../../assets/product_pages/ckyc/sections/go_live/download.svg";
import createUpdateIcon from "../../assets/product_pages/ckyc/sections/go_live/create_update.svg";
import rocketIcon from "../../assets/product_pages/ckyc/sections/go_live/rocket.svg";
import leafIcon from "../../assets/product_pages/ckyc/sections/go_live/leaf.svg";
import successRateIcon from "../../assets/product_pages/ckyc/sections/go_live/success_rate.svg";

const goLiveCards = [
  {
    icon: searchIcon,
    title: "Multi-ID CKYC Search",
    description: "Mobile, PAN, CKYC ID, Aadhaar details, and more",
  },
  {
    icon: downloadIcon,
    title: "Instant CKYC Download",
    description: "Fetch data where records already exist",
  },
  {
    icon: createUpdateIcon,
    title: "CKYC Create + Update",
    description: "Complete lifecycle support",
  },
  {
    icon: rocketIcon,
    title: "Faster CERSAI onboarding",
    description: "Guided setup and go-live support",
  },
  {
    icon: leafIcon,
    title: "Reduced DigiLocker dependency",
    description: "Use CKYC where available",
  },
  {
    icon: successRateIcon,
    title: "90%+ success rates",
    description: "Where CKYC records exist and identifiers match",
  },
];

export default function GoLiveSection() {
  const scrollRef = useAutoScroll(295, 20);

  return (
    <section className="bg-white rounded-[40px] lg:rounded-[112px] px-5 py-10 sm:px-10 sm:py-10 md:px-16 md:py-16 lg:px-[120px] lg:py-[120px] overflow-hidden">
      <div className="max-w-[924px] mx-auto flex flex-col gap-5 lg:gap-10 items-center">
        <div className="text-center max-w-[772px]">
          <h2 className="font-heading text-[20px] md:text-[42px] lg:text-[56px] leading-[1.3] tracking-[0.6px] lg:tracking-[-1.12px] text-black">
            <span className="text-primary">Go live</span> with CKYC faster, with{" "}
            <span className="relative inline-block">
              idto.ai
              <img
                src={idtoVector}
                alt=""
                className="absolute -bottom-1 left-0 w-full h-[11px] pointer-events-none"
              />
            </span>
          </h2>
          <p className="mt-[10px] lg:mt-[18px] text-[#666] lg:text-black/60 text-[12px] lg:text-[18px] leading-[1.5] tracking-[0.36px] lg:tracking-[-0.36px] max-w-[350px] lg:max-w-[614px] mx-auto">
            Search, Download, Create, and Update CKYC records through one
            integration — with hands-on onboarding and support.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="w-full flex gap-5 overflow-x-auto snap-x snap-mandatory sm:snap-none sm:flex-wrap sm:max-w-[925px] pb-3 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {goLiveCards.map((card) => (
            <div
              key={card.title}
              className="group bg-white rounded-2xl p-5 flex flex-col gap-4 w-[295px] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] border border-[#e5e7eb] hover:border-[#1a9948] active:border-[#1a9948] transition-colors duration-200 h-[181px]"
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
