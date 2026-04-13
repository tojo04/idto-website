import { useAutoScroll } from "../../hooks/useAutoScroll";
import verifyIcon from "../../assets/product_pages/DIGILOCKER/sections/orchestration/verify_acc.svg";
import pngIcon from "../../assets/product_pages/DIGILOCKER/sections/orchestration/PNG.svg";
import aadharIcon from "../../assets/product_pages/DIGILOCKER/sections/orchestration/aadhar.svg";
import panIcon from "../../assets/product_pages/DIGILOCKER/sections/orchestration/PAN.svg";
import docsIcon from "../../assets/product_pages/DIGILOCKER/sections/orchestration/Docs.svg";
import orgMasterIcon from "../../assets/product_pages/DIGILOCKER/sections/orchestration/org_master.svg";

const orchestrationCards = [
  {
    icon: verifyIcon,
    title: "Verify Account",
    description: "Check whether the user already has DigiLocker and auto-route the journey",
  },
  {
    icon: pngIcon,
    title: "Initiate Session",
    description: "Start the DigiLocker flow with dynamic consent",
  },
  {
    icon: aadharIcon,
    title: "Fetch Aadhaar",
    description: "Get name, DOB, gender, mobile, email, photo, and response details",
  },
  {
    icon: panIcon,
    title: "Fetch PAN",
    description: "Retrieve PAN data in JSON, XML, or PDF format",
  },
  {
    icon: docsIcon,
    title: "Fetch Issued Docs",
    description: "Get all user-consented issued documents",
  },
  {
    icon: orgMasterIcon,
    title: "Org Master / Doc Master",
    description: "Full issuer and document coverage support",
  },
];

export default function OrchestrationSection() {
  const scrollRef = useAutoScroll(290, 20);

  return (
    <section className="bg-white rounded-[40px] lg:rounded-[112px] px-5 py-10 sm:px-10 sm:py-10 md:px-16 md:py-16 lg:px-[120px] lg:py-[120px] overflow-hidden">
      <div className="max-w-[924px] mx-auto flex flex-col gap-10 items-center">
          <div className="text-center max-w-[772px]">
            <h2 className="font-heading text-[20px] md:text-[42px] lg:text-[42px] leading-[1.3] tracking-[-1.12px] text-black">
              Built for flexible{" "}
              <span className="text-primary">DigiLocker orchestration</span>
            </h2>
          </div>

          <div ref={scrollRef} className="w-full flex gap-5 overflow-x-auto snap-x snap-mandatory sm:snap-none sm:flex-wrap sm:max-w-[925px] pb-3 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none]">
            {orchestrationCards.map((card) => (
              <div
                key={card.title}
                className="group bg-white border border-[#e5e7eb] hover:border-primary active:border-primary rounded-2xl p-5 flex flex-col gap-4 w-[290px] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] transition-colors duration-200"
              >
                <div className="w-[53px] h-[53px] rounded-full bg-[rgba(39,64,206,0.1)] flex items-center justify-center shrink-0">
                  <img src={card.icon} alt="" className="w-[26px] h-[26px]" />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-base font-semibold text-black capitalize">
                    {card.title}
                  </p>
                  <div className="w-[65px] h-px bg-[#CED4DA] group-hover:bg-primary group-active:bg-primary transition-colors duration-200" />
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
