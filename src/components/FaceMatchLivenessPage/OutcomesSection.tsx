import { CheckCircle2 } from "lucide-react";

const metrics = [
  { label: "Face Match", value: "Successful" },
  { label: "Match Score", value: "99.9%" },
  { label: "Liveness", value: "Live" },
  { label: "Face Quality", value: "Passed" },
];

export default function OutcomesSection() {
  return (
    <section className="px-5 py-12 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1215px]">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="text-[12px] font-semibold uppercase leading-[18px] tracking-[1.2px] text-primary">
            Results
          </span>
          <h2 className="mt-4 font-heading text-[28px] leading-[1.15] text-[#0b111f] sm:text-[36px] lg:text-[42px]">
            Instant Verification{" "}
            <span className="text-primary">Outcomes</span>
          </h2>
          <p className="mt-5 text-[14px] leading-[1.65] text-[#5d646f] lg:text-[16px]">
            A complete decision delivered in under two seconds.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[896px] rounded-[28px] border border-[#e0e5eb] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#e5e7eb] pb-6">
            <div>
              <p className="text-[12px] font-semibold uppercase leading-5 tracking-[0.9px] text-[#626a75]">
                Verification Status
              </p>
              <h3 className="mt-1 text-[22px] font-semibold leading-7 text-[#0b111f]">
                Verified Successfully
              </h3>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf8f0] px-4 py-2 text-[14px] font-semibold text-[#16794c]">
              <CheckCircle2 className="size-4" />
              Passed
            </span>
          </div>

          <div className="grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-[18px] bg-[#f8fafc] p-5">
                <p className="text-[11px] font-semibold uppercase leading-4 tracking-[0.7px] text-[#626a75]">
                  {metric.label}
                </p>
                <p className="mt-2 text-[20px] font-semibold leading-7 text-[#0b111f]">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-[18px] bg-[#eef2ff] p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[14px] font-semibold text-[#0b111f]">
                Confidence
              </p>
              <p className="text-[14px] font-semibold text-primary">99.9%</p>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
              <div className="h-full w-[99%] rounded-full bg-primary" />
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-[14px] text-[#626a75]">
              <span>Verified in less than 2 seconds</span>
              <span>Request ID: idto_fm_8e21c4a9</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
