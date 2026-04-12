import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

// Step card icons
import verificationRequestIcon from "../../assets/product_pages/BAV/sections/how_it_works/cards/verfication_request.svg";
import aiRoutesIcon from "../../assets/product_pages/BAV/sections/how_it_works/cards/AI_routes.svg";
import receiveStandardIcon from "../../assets/product_pages/BAV/sections/how_it_works/cards/receive_Standard.svg";
import monitorIcon from "../../assets/product_pages/BAV/sections/how_it_works/cards/monitor.svg";

// Illustration assets
import idtoLogo from "../../assets/product_pages/BAV/sections/how_it_works/idto_Logo.svg";
import aiImage from "../../assets/product_pages/BAV/sections/how_it_works/AI_image.png";
import horizontalArrow from "../../assets/product_pages/BAV/sections/how_it_works/Horizontal_arrow.svg";
import orchestrationAgent1 from "../../assets/product_pages/BAV/sections/how_it_works/orchestration_agent_1.png";
import orchestrationAgent2 from "../../assets/product_pages/BAV/sections/how_it_works/orchestration_agent_2.png";
import bankVerified from "../../assets/product_pages/BAV/sections/how_it_works/bank_account_verfication.png";

// Partner logos
import kotak from "../../assets/product_pages/BAV/sections/how_it_works/kotak.png";
import razorpay from "../../assets/product_pages/BAV/sections/how_it_works/razorpay.png";
import easebuzz from "../../assets/product_pages/BAV/sections/how_it_works/easebuzz.png";
import nsdl from "../../assets/product_pages/BAV/sections/how_it_works/NSDL.png";
import axis from "../../assets/product_pages/BAV/sections/how_it_works/axis.png";
import paysprint from "../../assets/product_pages/BAV/sections/how_it_works/paysprint.png";
import idfc from "../../assets/product_pages/BAV/sections/how_it_works/idfc.png";
import rblBank from "../../assets/product_pages/BAV/sections/how_it_works/RBL_bank.png";
import cashfree from "../../assets/product_pages/BAV/sections/how_it_works/cashfree.png";
import yesBank from "../../assets/product_pages/BAV/sections/how_it_works/yes_bank.png";
import setu from "../../assets/product_pages/BAV/sections/how_it_works/setu.png";

const partnerLogos = [
  { src: kotak, alt: "Kotak" },
  { src: razorpay, alt: "Razorpay" },
  { src: easebuzz, alt: "Easebuzz" },
  { src: nsdl, alt: "NSDL" },
  { src: axis, alt: "Axis" },
  { src: paysprint, alt: "Paysprint" },
  { src: idfc, alt: "IDFC" },
  { src: rblBank, alt: "RBL Bank" },
  { src: cashfree, alt: "Cashfree" },
  { src: yesBank, alt: "YES Bank" },
  { src: setu, alt: "SETU" },
];

const steps = [
  {
    icon: verificationRequestIcon,
    number: "01",
    title: "Send A Verification Request",
    description:
      "Submit account number, IFSC, and preferred method via a single API call.",
  },
  {
    icon: aiRoutesIcon,
    number: "02",
    title: "AI Routes Intelligently",
    description:
      "Our orchestration engine picks the best partner and method for highest success.",
  },
  {
    icon: receiveStandardIcon,
    number: "03",
    title: "Receive Standardized Results",
    description:
      "Get clean, consistent responses with clear error codes — regardless of partner.",
  },
  {
    icon: monitorIcon,
    number: "04",
    title: "Monitor & Optimize",
    description:
      "Track success rates, retries, and costs in real-time through your dashboard.",
  },
];

function PartnerLogoPill({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="bg-white border border-[rgba(224,228,235,0.6)] rounded-full px-[9px] py-[5px] flex items-center justify-center shadow-[0px_0.72px_1.44px_0px_rgba(0,0,0,0.05)] h-[27px]">
      <img src={src} alt={alt} className="h-[14px] max-w-[55px] object-contain" />
    </div>
  );
}

function AcmeFormCard() {
  return (
    <div className="bg-white border border-[rgba(224,228,235,0.6)] rounded-xl p-[18px] flex flex-col gap-[11px] w-[187px] relative shadow-[0px_14px_18px_-3.6px_rgba(0,0,0,0.1),0px_5.7px_7.2px_-4.3px_rgba(0,0,0,0.1)]">
      {/* ACME Logo */}
      <p className="font-black italic text-[#e53935] text-[14px] tracking-tight leading-none">
        ACME
      </p>
      {/* Form heading */}
      <p className="font-semibold text-[10px] text-[#0a1729] leading-[14px]">
        Enter Bank Details
      </p>
      {/* Input fields */}
      <div className="flex flex-col gap-[8.6px]">
        <div className="flex flex-col gap-[2.9px]">
          <span className="text-[7.2px] text-[#8f97a3] leading-[10.8px]">
            Enter your bank account number
          </span>
          <div className="bg-[#f6f7f9] border border-[#e0e4eb] rounded-lg px-[9px] py-[6.5px]">
            <span className="text-[8.6px] text-[#627084] leading-[11.5px]">
              00650047401
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[2.9px]">
          <span className="text-[7.2px] text-[#8f97a3] leading-[10.8px]">
            Enter your IFSC Code
          </span>
          <div className="bg-[#f6f7f9] border border-[#e0e4eb] rounded-lg px-[9px] py-[6.5px]">
            <span className="text-[8.6px] text-[#627084] leading-[11.5px]">
              ICIC0000068
            </span>
          </div>
        </div>
      </div>
      {/* Continue button */}
      <div className="bg-gradient-to-r from-[#ef4444] to-[#dc2626] rounded-lg py-[7.2px] flex items-center justify-center gap-[2.9px]">
        <span className="text-white text-[8.6px] font-semibold leading-[11.5px]">
          Continue
        </span>
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          className="shrink-0"
        >
          <path
            d="M3.5 2.5L6 4.5L3.5 6.5"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function OrchestrationAgentCard({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) {
  return (
    <div className="bg-white border border-[#e1e4e7] rounded-xl p-[21.6px] flex flex-col items-center gap-[36px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.12)]">
      <div className="w-[74px] h-[70px] rounded-[15px] overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-contain"
        />
      </div>
      <div
        className="rounded-[4.4px] px-[8.2px] py-[7.1px] overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(117deg, rgb(76, 218, 196) 48.37%, rgb(1, 26, 255) 97.48%)",
        }}
      >
        <span className="text-white text-[13px] font-medium leading-[1.5] tracking-[-0.29px] whitespace-nowrap">
          Orchestration Agent
        </span>
      </div>
    </div>
  );
}

function FlowIllustration() {
  return (
    <div className="w-full rounded-[24px] bg-white border border-[#e5e7eb] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
      <div className="relative w-full" style={{ aspectRatio: "1335 / 462" }}>
        {/* idto card — top left area */}
        <div className="absolute flex flex-col items-center" style={{ left: "12%", top: "6.7%", width: "9%" }}>
          <div className="bg-white border border-[rgba(0,199,146,0.2)] rounded-xl p-3 flex flex-col items-center shadow-[0px_7.2px_10.8px_-2.16px_rgba(0,0,0,0.1),0px_2.88px_4.32px_-2.88px_rgba(0,0,0,0.1)]">
            <div className="bg-[#e0f3f0] rounded-lg px-[11.5px] py-[5.8px]">
              <img src={idtoLogo} alt="idto" className="h-[31px] w-auto" />
            </div>
            <span className="text-[#00c792] text-[6.5px] font-bold tracking-[0.65px] uppercase mt-[5.8px] whitespace-nowrap">
              In-House Integrations
            </span>
          </div>
          {/* Dotted line connecting to partner grid */}
          <div className="border-l-[1.5px] border-dashed border-[#00c792]/40 h-[20px]" />
        </div>

        {/* Partner logos grid — left side */}
        <div
          className="absolute grid grid-cols-2 gap-[5.8px]"
          style={{ left: "1.6%", top: "38.2%", width: "12.2%" }}
        >
          {partnerLogos.map((p) => (
            <PartnerLogoPill key={p.alt} src={p.src} alt={p.alt} />
          ))}
        </div>

        {/* Arrow 1 — partners to AI */}
        <img
          src={horizontalArrow}
          alt=""
          className="absolute"
          style={{ left: "14.2%", top: "50.9%", width: "4.6%", transform: "translateY(-50%)" }}
        />

        {/* AI Image — center left */}
        <div
          className="absolute"
          style={{ left: "19.2%", top: "41%", width: "18.3%", height: "25.2%" }}
        >
          <img
            src={aiImage}
            alt="AI Orchestration"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Arrow 2 — AI to ACME form */}
        <img
          src={horizontalArrow}
          alt=""
          className="absolute"
          style={{ left: "37.9%", top: "50.9%", width: "4.6%", transform: "translateY(-50%)" }}
        />

        {/* ACME Form Card — center */}
        <div
          className="absolute"
          style={{ left: "43%", top: "29.6%" }}
        >
          <AcmeFormCard />
        </div>

        {/* Arrow 3 — ACME to orchestration agents */}
        <img
          src={horizontalArrow}
          alt=""
          className="absolute"
          style={{ left: "57.4%", top: "50.9%", width: "4.6%", transform: "translateY(-50%)" }}
        />

        {/* Orchestration Agent Cards — right of center */}
        <div
          className="absolute flex flex-col gap-[22px]"
          style={{ left: "62.5%", top: "9.2%", width: "15%" }}
        >
          <OrchestrationAgentCard
            image={orchestrationAgent1}
            alt="AI Orchestration Agent"
          />
          <OrchestrationAgentCard
            image={orchestrationAgent2}
            alt="Processing Orchestration Agent"
          />
        </div>

        {/* Arrow 4 — orchestration to verified */}
        <img
          src={horizontalArrow}
          alt=""
          className="absolute"
          style={{ left: "77.9%", top: "50.9%", width: "4.6%", transform: "translateY(-50%)" }}
        />

        {/* Bank Account Verified — far right */}
        <div
          className="absolute"
          style={{ left: "82.9%", top: "26.8%", width: "15.5%" }}
        >
          <img
            src={bankVerified}
            alt="Bank Account Verified"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="px-5 lg:px-12 py-10 lg:py-[120px] overflow-hidden">
      <div className="max-w-[1335px] mx-auto flex flex-col gap-5 lg:gap-10 items-center">
        <div className="text-center max-w-[772px]">
          <h2 className="font-heading text-[20px] md:text-[42px] lg:text-[56px] leading-[1.3] tracking-[0.6px] lg:tracking-[-1.12px] text-black">
            How it <span className="text-primary">works</span>
          </h2>
          <p className="mt-[10px] lg:mt-[18px] text-[#666] lg:text-black/60 text-[12px] lg:text-[18px] leading-[1.5] tracking-[0.36px] lg:tracking-[-0.36px] max-w-[350px] lg:max-w-[614px] mx-auto">
            From API call to verified result — in seconds.
          </p>
        </div>

        {/* How it works flow illustration */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.05)}
          className="w-full max-w-[1335px]"
        >
          <FlowIllustration />
        </motion.div>

        {/* Step cards */}
        <div className="w-full flex gap-5 overflow-x-auto snap-x snap-mandatory sm:snap-none sm:flex-wrap sm:justify-center pb-3 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none]">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={createFadeInUp(0.05)}
              className="bg-white rounded-2xl p-5 lg:p-[25px] flex flex-col gap-4 w-[238px] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] border border-[#e5e7eb]"
            >
              <div className="flex items-center justify-between">
                <div className="w-[53px] h-[53px] rounded-full bg-[#e9eefc] flex items-center justify-center shrink-0">
                  <img
                    src={step.icon}
                    alt=""
                    className="w-[26px] h-[26px]"
                  />
                </div>
                <span className="font-heading text-[32px] lg:text-[36px] text-[#1d212b]/10 leading-[40px]">
                  {step.number}
                </span>
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="text-base font-semibold text-black capitalize">
                  {step.title}
                </p>
                <div className="w-[65px] h-px bg-[#CED4DA]" />
                <p className="text-sm text-black/60 leading-[1.5] tracking-[-0.28px]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
