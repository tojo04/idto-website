import {
  Check,
  Gauge,
  ScanFace,
  Settings2,
  ClipboardCheck,
} from "lucide-react";
import heroVerification from "../../assets/product_pages/FaceMatchLiveness/hero_verification.png";

const featurePills = [
  { label: "Real-time Results", icon: Gauge },
  { label: "Configurable Thresholds", icon: Settings2 },
  { label: "Image Quality Checks", icon: ScanFace },
  { label: "Detailed Reports", icon: ClipboardCheck },
];

const heroReveal = (delaySeconds = 0) => ({
  animation: `idtoHeroReveal 0.5s ease-out ${delaySeconds}s both`,
});

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 lg:min-h-[712px] lg:px-12 lg:py-24">
      <style>
        {`@keyframes idtoHeroReveal { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }`}
      </style>
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(580px,1fr)]">
        <div
          style={heroReveal()}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <span className="rounded-full bg-white px-4 py-2 text-[12px] font-semibold uppercase leading-[18px] tracking-[1.2px] text-primary">
            Identity Verification
          </span>
          <h1 className="mt-7 font-heading text-[34px] leading-[1.2] tracking-normal text-[#0b111f] sm:text-[42px] lg:text-[42px]">
            Face Match &
            <br />
            <span className="text-primary">Liveness Check</span>
          </h1>
          <p className="mt-6 text-[17px] font-semibold leading-[1.55] text-[#202938]">
            Match the face. Confirm the person is live.
          </p>
          <p className="mt-4 max-w-[590px] text-[14px] leading-[1.75] text-[#626a75] lg:text-[16px]">
            Compare a live selfie with an identity document photograph and
            receive a clear match decision, similarity score, and liveness
            signals in real time.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="/demo/"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-[15px] font-semibold leading-none text-white shadow-[0_8px_20px_-6px_rgba(47,91,255,0.5)] transition-colors hover:bg-primary-dark"
            >
              Try Face Match
            </a>
            <a
              href="https://idtoai.readme.io/reference/idtoai-verification-apis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-primary bg-white px-7 text-[15px] font-semibold leading-none text-primary transition-colors hover:bg-primary/5"
            >
              View API Documentation
            </a>
          </div>
          <div className="mt-8 grid max-w-[520px] grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {featurePills.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-[14px] font-medium leading-5 text-[#626a75]"
              >
                <Check className="size-[15px] rounded-full bg-[#19f986] p-[2px] text-[#06130c]" />
                <Icon className="hidden size-[14px] text-[#19f986] sm:block" />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div
          style={heroReveal(0.08)}
          className="relative mx-auto flex w-full max-w-[685px] items-center justify-center lg:translate-x-8"
        >
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full lg:size-[620px]"
            style={{
              background:
                "radial-gradient(circle, rgba(47,91,255,0.22) 0%, rgba(47,91,255,0.16) 38%, rgba(47,91,255,0.06) 62%, rgba(47,91,255,0) 78%)",
            }}
          />
          <div className="relative w-full">
            <img
              src={heroVerification}
              alt="Face match and liveness verification dashboard"
              className="relative w-full object-contain"
              width="685"
              height="374"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
