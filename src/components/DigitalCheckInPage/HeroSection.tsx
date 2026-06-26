import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import {
  floatingBadges,
  heroBadges,
  journeySteps,
} from "./data";

const heroReveal = (delaySeconds = 0) => ({
  animation: `idtoHeroReveal 0.5s ease-out ${delaySeconds}s both`,
});

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-12 pt-10 lg:px-12 lg:pb-[84px] lg:pt-[64px]">
      <style>
        {`@keyframes idtoHeroReveal { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }`}
      </style>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(48% 42% at 76% 42%, rgba(30,91,255,0.13) 0%, rgba(84,238,190,0.08) 42%, rgba(255,255,255,0) 72%)",
        }}
      />
      <div className="relative mx-auto grid max-w-[1112px] items-center gap-12 lg:grid-cols-[minmax(0,545px)_minmax(0,519px)]">
        <div style={heroReveal()} className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#dfe7f5] bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[1.6px] text-primary shadow-[0_12px_40px_-28px_rgba(4,10,28,0.45)]">
            <span className="size-1.5 rounded-full bg-[#54eebe]" />
            Hotel Check-In
          </span>
          <h1 className="mt-5 font-heading text-[36px] leading-[1.08] tracking-normal text-[#061027] sm:text-[46px] lg:text-[56px]">
            The Future of Check-In is No Check-In.
          </h1>
          <p className="mt-5 font-heading text-[22px] leading-[1.25] text-primary lg:text-[28px]">
            Skip the queue.
            <br />
            Complete check-in before you arrive.
          </p>
          <p className="mt-5 max-w-[545px] text-[14px] leading-[1.7] text-[#5f6573] lg:text-[16px]">
            Hotel check-in should not feel like paperwork after a long journey.
            With idto, guests complete identity verification before reaching the
            property through WhatsApp, SMS, email, or a simple QR code at
            reception. No photocopies. No manual forms. No long reception
            queues. No repeated ID uploads for returning guests.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="/demo/"
              className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full bg-primary px-6 text-[15px] font-semibold text-white shadow-[0_10px_24px_-12px_rgba(0,25,255,0.65)] transition-colors hover:bg-primary-dark"
            >
              Get Started
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#guest-flow"
              className="inline-flex h-[46px] items-center justify-center rounded-full border border-primary bg-white px-6 text-[15px] font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              See Guest Flow
            </a>
          </div>
          <p className="mt-5 max-w-[545px] text-[13px] leading-[1.5] text-[#6d7280]">
            Built for hotels, hostels, resorts, vacation rentals, co-living
            spaces, and serviced apartments.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-4 lg:justify-start">
            {heroBadges.map(({ label, icon: Icon }) => (
              <span key={label} className="inline-flex items-center gap-2 text-[13px] font-medium text-[#4c5463]">
                <CheckCircle2 className="size-[15px] text-[#16c784]" />
                <Icon className="size-[15px] text-primary" />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div style={heroReveal(0.08)} className="relative mx-auto w-full max-w-[519px]">
          <div className="relative min-h-[460px] overflow-hidden rounded-[34px] border border-[#dfe7f5] bg-[linear-gradient(135deg,#f8fbff_0%,#edf5ff_45%,#e8fff8_100%)] p-6 shadow-[0_28px_80px_-45px_rgba(0,25,255,0.55)]">
            <div className="absolute right-[-70px] top-10 size-56 rounded-full bg-[#7aa2ff]/30 blur-3xl" />
            <div className="absolute bottom-[-50px] left-[-40px] size-40 rounded-full bg-[#54eebe]/35 blur-3xl" />

            <div className="relative w-[300px] rounded-[28px] border border-white/80 bg-white/75 p-4 shadow-[0_20px_55px_-30px_rgba(4,10,28,0.55)] backdrop-blur">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[13px] font-semibold text-[#111827]">Guest Journey</span>
                <span className="rounded-full bg-[#eafff6] px-2 py-1 text-[11px] font-semibold text-[#0b9f71]">Live</span>
              </div>
              <div className="space-y-2.5">
                {journeySteps.map(({ label, icon: Icon }, index) => (
                  <div key={label} className="flex h-[46px] items-center gap-3 rounded-[18px] bg-white px-3 shadow-[0_10px_24px_-22px_rgba(4,10,28,0.7)]">
                    <span className="flex size-8 items-center justify-center rounded-full bg-[#eef4ff] text-primary">
                      <Icon className="size-4" />
                    </span>
                    <span className="min-w-0 flex-1 truncate text-[13px] font-medium text-[#172033]">{label}</span>
                    <span className="text-[11px] font-semibold text-[#9aa3b2]">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute right-10 top-14 w-[170px] rounded-[30px] border border-white/80 bg-[#101828] p-2 shadow-[0_28px_70px_-36px_rgba(4,10,28,0.75)]">
              <div className="rounded-[24px] bg-white p-3">
                <div className="mb-5 flex items-center gap-2 text-[11px] font-medium text-[#5f6573]">
                  <MessageCircle className="size-3.5 text-[#17b26a]" />
                  WhatsApp - idto
                </div>
                <div className="w-[102px] rounded-[14px] bg-[#edf2f7] px-3 py-2 text-[11px] leading-[1.35] text-[#263244]">
                  Welcome! Tap to check in before arrival.
                </div>
                <div className="ml-auto mt-2 w-[78px] rounded-[14px] bg-primary px-3 py-2 text-[11px] leading-[1.35] text-white">
                  Start check-in
                </div>
                <div className="mt-4 rounded-[16px] border border-[#dfe7f5] bg-[#f8fbff] p-3">
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-[#111827]">
                    <CheckCircle2 className="size-3.5 text-[#16c784]" />
                    Identity Verified
                  </div>
                  <p className="mt-1 text-[10px] text-[#687182]">DigiLocker - Aadhaar</p>
                </div>
                <button className="mt-8 inline-flex h-[28px] w-full items-center justify-center rounded-full bg-[#111827] text-[11px] font-semibold text-white">
                  Open digital key
                </button>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0">
              {floatingBadges.map((badge, index) => (
                <span
                  key={badge}
                  className="absolute inline-flex items-center gap-1.5 rounded-full border border-white/80 bg-white/85 px-3 py-1.5 text-[11px] font-semibold text-[#344054] shadow-[0_12px_30px_-22px_rgba(4,10,28,0.75)]"
                  style={{
                    left: ["8px", "397px", "16px", "208px", "384px", "362px"][index],
                    top: ["8px", "8px", "417px", "386px", "370px", "428px"][index],
                  }}
                >
                  <CheckCircle2 className="size-3 text-[#16c784]" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
