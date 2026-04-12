import { useState, useEffect, useRef } from "react";
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
import connectorLine from "../../assets/product_pages/BAV/sections/how_it_works/Connector line.svg";
import orchestrationAgentSprite from "../../assets/product_pages/BAV/sections/how_it_works/orchestration_agent_1.png";
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

/* Figma canvas = 1333 × 460 px (inner area of the illustration card) */
const CW = 1333;
const CH = 460;

const partnerLogos = [
  { src: kotak, alt: "Kotak", h: 122, mw: 60 },
  { src: razorpay, alt: "Razorpay", h: 14, mw: 60 },
  { src: easebuzz, alt: "Easebuzz", h: 10, mw: 58 },
  { src: nsdl, alt: "NSDL", h: 144, mw: 40 },
  { src: axis, alt: "Axis", h: 30, mw: 45 },
  { src: paysprint, alt: "Paysprint", h: 30, mw: 35 },
  { src: idfc, alt: "IDFC", h: 25, mw: 60 },
  { src: rblBank, alt: "RBL Bank", h: 25, mw: 35 },
  { src: cashfree, alt: "Cashfree", h: 16, mw: 55 },
  { src: yesBank, alt: "YES Bank", h: 50, mw: 40 },
  { src: setu, alt: "SETU", h: 30, mw: 30 },
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

function PartnerLogoPill({ src, alt, h, mw }: { src: string; alt: string; h: number; mw: number }) {
  return (
    <div className="bg-white border border-[rgba(224,228,235,0.6)] rounded-full flex items-center justify-center shadow-[0px_0.72px_1.44px_0px_rgba(0,0,0,0.05)]" style={{ height: 27, paddingInline: 9, paddingBlock: 5, width: 78, overflow: "hidden" }}>
      <img src={src} alt={alt} className="object-contain" style={{ height: h, maxWidth: mw }} />
    </div>
  );
}

function AcmeFormCard() {
  return (
    <div className="bg-white border border-[rgba(224,228,235,0.6)] rounded-[11.5px] flex flex-col relative shadow-[0px_14px_18px_-3.6px_rgba(0,0,0,0.1),0px_5.7px_7.2px_-4.3px_rgba(0,0,0,0.1)]" style={{ width: 187, padding: 18, gap: 11.5 }}>
      <p className="font-black italic text-[#e53935] leading-none" style={{ fontSize: 14 }}>
        ACME
      </p>
      <p className="font-semibold text-[#0a1729]" style={{ fontSize: 10, lineHeight: "14px" }}>
        Enter Bank Details
      </p>
      <div className="flex flex-col" style={{ gap: 8.6 }}>
        <div className="flex flex-col" style={{ gap: 2.9 }}>
          <span className="text-[#8f97a3]" style={{ fontSize: 7.2, lineHeight: "10.8px" }}>
            Enter your bank account number
          </span>
          <div className="bg-[#f6f7f9] border border-[#e0e4eb]" style={{ borderRadius: 6, padding: "4px 7px" }}>
            <span className="text-[#627084]" style={{ fontSize: 8.6, lineHeight: "11.5px" }}>
              00650047401
            </span>
          </div>
        </div>
        <div className="flex flex-col" style={{ gap: 2.9 }}>
          <span className="text-[#8f97a3]" style={{ fontSize: 7.2, lineHeight: "10.8px" }}>
            Enter your IFSC Code
          </span>
          <div className="bg-[#f6f7f9] border border-[#e0e4eb]" style={{ borderRadius: 6, padding: "4px 7px" }}>
            <span className="text-[#627084]" style={{ fontSize: 8.6, lineHeight: "11.5px" }}>
              ICIC0000068
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center" style={{ background: "linear-gradient(to right, #ef4444, #dc2626)", borderRadius: 8.6, padding: "7.2px 0", gap: 2.9 }}>
        <span className="text-white font-semibold" style={{ fontSize: 8.6, lineHeight: "11.5px" }}>
          Continue
        </span>
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" className="shrink-0">
          <path d="M3.5 2.5L6 4.5L3.5 6.5" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

function OrchestrationAgentCard({ clipLeft }: { clipLeft: number }) {
  return (
    <div className="bg-white border border-[#e1e4e7] flex flex-col items-center shadow-[0px_4px_8px_0px_rgba(0,0,0,0.12)]" style={{ borderRadius: 11.5, padding: 21.6, gap: 36, width: "100%" }}>
      <div className="overflow-hidden relative" style={{ width: 74, height: 70, borderRadius: 15 }}>
        <img
          src={orchestrationAgentSprite}
          alt=""
          className="absolute max-w-none"
          style={{ width: "474.76%", height: "332.65%", left: `${clipLeft}%`, top: "-104%" }}
        />
      </div>
      <div className="overflow-hidden" style={{ borderRadius: 4.4, padding: "7.1px 8.2px", backgroundImage: "linear-gradient(117deg, rgb(76, 218, 196) 48.37%, rgb(1, 26, 255) 97.48%)" }}>
        <span className="text-white font-medium whitespace-nowrap" style={{ fontSize: 13, lineHeight: 1.5, letterSpacing: -0.29 }}>
          Orchestration Agent
        </span>
      </div>
    </div>
  );
}

function FlowIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      setScale(entries[0].contentRect.width / CW);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full rounded-[24px] bg-white border border-[#e5e7eb] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden"
      style={{ aspectRatio: `${CW} / ${CH}` }}
    >
      <div
        className="relative"
        style={{ width: CW, height: CH, transform: `scale(${scale})`, transformOrigin: "top left" }}
      >
        {/* ── idto card ── */}
        <div className="absolute flex flex-col items-center" style={{ left: 161, top: 31, width: 120 }}>
          <div className="bg-white border border-[rgba(0,199,146,0.2)] flex flex-col items-center shadow-[0px_7.2px_10.8px_-2.16px_rgba(0,0,0,0.1),0px_2.88px_4.32px_-2.88px_rgba(0,0,0,0.1)]" style={{ borderRadius: 11.5, padding: 12.2 }}>
            <div className="bg-[#e0f3f0] flex items-center" style={{ borderRadius: 8.6, padding: "5.76px 11.5px" }}>
              <img src={idtoLogo} alt="idto" style={{ height: 31 }} />
            </div>
            <span className="text-[#00c792] font-bold uppercase whitespace-nowrap" style={{ fontSize: 6.5, letterSpacing: 0.65, marginTop: 5.76, lineHeight: "9.7px" }}>
              In-House Integrations
            </span>
          </div>
          <img src={connectorLine} alt="" style={{ width: 15, height: 90 }} />
        </div>

        {/* ── Partner logos grid ── */}
        <div className="absolute grid grid-cols-2" style={{ left: 21, top: 176, width: 161, gap: 5.76 }}>
          {partnerLogos.map((p) => (
            <PartnerLogoPill key={p.alt} src={p.src} alt={p.alt} h={p.h} mw={p.mw} />
          ))}
        </div>

        {/* ── Arrow 1: Logos → AI ── */}
        <img src={horizontalArrow} alt="" className="absolute" style={{ left: 190, top: 234, width: 61, height: 24 }} />

        {/* ── AI Image ── */}
        <img src={aiImage} alt="AI Orchestration" className="absolute object-contain" style={{ left: 220, top: 140, width: 320, height: 200 }} />

        {/* ── Arrow 2: AI → ACME ── */}
        <img src={horizontalArrow} alt="" className="absolute" style={{ left: 506, top: 234, width: 61, height: 24 }} />

        {/* ── ACME Form Card ── */}
        <div className="absolute" style={{ left: 574, top: 137 }}>
          <AcmeFormCard />
        </div>

        {/* ── Arrow 3: ACME → Orchestration ── */}
        <img src={horizontalArrow} alt="" className="absolute" style={{ left: 766, top: 234, width: 61, height: 24 }} />

        {/* ── Orchestration Agent Cards ── */}
        <div className="absolute flex flex-col" style={{ left: 834, top: 43, width: 200, gap: 22 }}>
          <OrchestrationAgentCard clipLeft={-91.26} />
          <OrchestrationAgentCard clipLeft={-280.13} />
        </div>

        {/* ── Arrow 4: Orchestration → Verified ── */}
        <img src={horizontalArrow} alt="" className="absolute" style={{ left: 1038, top: 234, width: 61, height: 24 }} />

        {/* ── Bank Account Verified ── */}
        <img src={bankVerified} alt="Bank Account Verified" className="absolute object-contain" style={{ left: 930, top: 1, width: 560, height: 420, maskImage: "radial-gradient(ellipse 55% 55% at 50% 50%, black 20%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 55% 55% at 50% 50%, black 20%, transparent 80%)" }} />
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

        {/* How it works flow illustration – hidden on mobile */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.05)}
          className="hidden lg:block w-full max-w-[1335px]"
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
