import { useAutoScroll } from "../../hooks/useAutoScroll";
import pennyDropIcon from "../../assets/product_pages/BAV/sections/BAV_suite/penny_drop.svg";
import pennilessIcon from "../../assets/product_pages/BAV/sections/BAV_suite/pennyless.svg";
import hybridIcon from "../../assets/product_pages/BAV/sections/BAV_suite/hybrid.svg";
import rpdIcon from "../../assets/product_pages/BAV/sections/BAV_suite/RPD.svg";
import upiBasedIcon from "../../assets/product_pages/BAV/sections/BAV_suite/UPI_Based.svg";
import chequeOcrIcon from "../../assets/product_pages/BAV/sections/BAV_suite/Check_ocr.svg";
import ifscIcon from "../../assets/product_pages/BAV/sections/BAV_suite/IFSC.svg";

const suiteCards = [
  {
    icon: pennyDropIcon,
    title: "Penny Drop",
    description: "₹1 transaction to verify account ownership and name.",
  },
  {
    icon: pennilessIcon,
    title: "Penniless Verification",
    description: "Verify account number and IFSC without penny drop.",
  },
  {
    icon: hybridIcon,
    title: "Hybrid Verification",
    description: "Intelligent routing between methods for better success rates.",
  },
  {
    icon: rpdIcon,
    title: "Reverse Penny Drop (RPD)",
    description: "Reduce user friction with user-initiated verification.",
  },
  {
    icon: upiBasedIcon,
    title: "UPI-Based Penny Drop",
    description: "Built for payment-linked verification flows.",
  },
  {
    icon: chequeOcrIcon,
    title: "Cancelled Cheque OCR",
    description: "Extract account details automatically for digital verification.",
  },
  {
    icon: ifscIcon,
    title: "IFSC Verification",
    description: "Validate bank, branch, and IFSC before verification.",
  },
];

export default function BAVSuiteSection() {
  const scrollRef = useAutoScroll(295, 20);

  return (
    <section className="px-5 lg:px-12 py-10 lg:py-[120px] overflow-hidden">
      <div className="max-w-[924px] mx-auto flex flex-col gap-5 lg:gap-10 items-center">
        <div className="text-center max-w-[772px]">
          <h2 className="font-heading text-[20px] md:text-[42px] lg:text-[42px] leading-[1.3] tracking-[0.6px] lg:tracking-[-1.12px] text-black lg:whitespace-nowrap">
            Our{" "}
            <span className="text-primary">Bank Account Verification</span>{" "}
            product suite
          </h2>
          <p className="mt-[10px] lg:mt-[18px] text-[#666] lg:text-black/60 text-[12px] lg:text-[18px] leading-[1.5] tracking-[0.36px] lg:tracking-[-0.36px] max-w-[350px] lg:max-w-[614px] mx-auto">
            Flexible verification options for every use-case, budget, and user
            journey.
          </p>
        </div>
        <div
          ref={scrollRef}
          className="w-full flex gap-5 overflow-x-auto snap-x snap-mandatory sm:snap-none sm:flex-wrap sm:justify-center sm:max-w-[925px] pb-3 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {suiteCards.map((card) => (
            <div
              key={card.title}
              className="group bg-white rounded-2xl p-5 pb-6 flex flex-col gap-4 w-[295px] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] border border-[#e5e7eb] hover:border-primary active:border-primary transition-colors duration-200"
            >
              <div className="w-[53px] h-[53px] rounded-full bg-[#eceeff] flex items-center justify-center shrink-0">
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
        <p className="text-[12px] lg:text-[18px] leading-[1.5] text-black/60 text-center tracking-[0.36px] lg:tracking-normal">
          One suite. Multiple methods. Smarter verification at scale.
        </p>
      </div>
    </section>
  );
}
