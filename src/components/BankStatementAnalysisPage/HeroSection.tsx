import {
  Banknote,
  Check,
  FileSearch,
  LineChart,
  ReceiptText,
  ShieldAlert,
} from "lucide-react";
import heroDashboard from "../../assets/product_pages/BankStatementAnalysis/hero_dashboard.webp";

const featurePills = [
  { label: "PDF OCR", icon: FileSearch },
  { label: "Transaction Categorisation", icon: ReceiptText },
  { label: "Income Analysis", icon: Banknote },
  { label: "Fraud Detection", icon: ShieldAlert },
  { label: "Cash-Flow Insights", icon: LineChart },
];

const heroReveal = (delaySeconds = 0) => ({
  animation: `idtoHeroReveal 0.5s ease-out ${delaySeconds}s both`,
});

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-12 pt-10 lg:px-12 lg:pb-[96px] lg:pt-24">
      <style>
        {`@keyframes idtoHeroReveal { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }`}
      </style>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(42% 38% at 72% 8%, rgba(91,140,255,0.12) 0%, rgba(91,140,255,0) 72%), radial-gradient(34% 32% at 10% 30%, rgba(47,91,255,0.1) 0%, rgba(47,91,255,0) 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(480px,1fr)]">
        <div
          style={heroReveal()}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <span className="text-[12px] font-semibold uppercase leading-[18px] tracking-[1.2px] text-primary">
            Bank Statement Analysis
          </span>
          <h1 className="mt-5 font-heading text-[34px] leading-[1.15] tracking-normal text-[#0b111f] sm:text-[42px] lg:text-[56px]">
            From bank statement PDF
            <br />
            to <span className="text-primary">underwriting-ready</span>
            <br />
            <span className="text-primary">insights.</span>
          </h1>
          <p className="mt-6 max-w-[576px] text-[14px] leading-[1.7] text-[#626a75] lg:text-[16px]">
            Upload a bank statement and automatically extract transactions,
            identify income and obligations, analyse cash flows and detect
            potential fraud indicators. One upload. Structured data. Clearer
            credit decisions.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="/demo/"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-[15px] font-semibold leading-none text-white shadow-[0_8px_20px_-6px_rgba(47,91,255,0.5)] transition-colors hover:bg-primary-dark"
            >
              Analyse a Statement
            </a>
            <a
              href="#sample-report"
              className="inline-flex h-12 items-center justify-center rounded-full border border-primary bg-white px-7 text-[15px] font-semibold leading-none text-primary transition-colors hover:bg-primary/5"
            >
              View Sample Report
            </a>
          </div>
          <div className="mt-6 flex max-w-[560px] flex-wrap justify-center gap-2.5 lg:justify-start">
            {featurePills.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-[#e0e5eb] bg-white px-3.5 py-2 text-[13px] font-medium leading-none text-[#374151] shadow-[0_2px_3px_rgba(0,0,0,0.03)]"
              >
                <Check className="size-[13px] text-primary" />
                <Icon className="hidden size-[13px] text-primary sm:block" />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div
          style={heroReveal(0.08)}
          className="mx-auto w-full max-w-[640px]"
        >
          <img
            src={heroDashboard}
            alt="Bank statement analysis dashboard"
            className="w-full object-contain drop-shadow-[0_30px_60px_rgba(47,91,255,0.22)]"
            width="639"
            height="515"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
