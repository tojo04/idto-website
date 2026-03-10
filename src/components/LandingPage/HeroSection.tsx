import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

// Globe animation frames
import globe1 from "../../assets/globe/globe=1.svg";
import globe2 from "../../assets/globe/globe=2.svg";
import globe3 from "../../assets/globe/globe=3.svg";
import globe4 from "../../assets/globe/globe=4.svg";
import circleDecoration from "../../assets/circleDecoration.svg";
const globeFrames = [globe1, globe2, globe3, globe4];

// Partner logos
import partner1 from "../../assets/partner1 (1).png";
import partner2 from "../../assets/partner2 (2).png";
import partner3 from "../../assets/partner3 (3).png";
import partner4 from "../../assets/partner4(4).png";
import partner5 from "../../assets/partner5 (5).png";
import partner6 from "../../assets/partner6(6).png";

interface HeroSectionProps {
  bookDemo: () => void;
}

export default function HeroSection({ bookDemo }: HeroSectionProps) {
  const [globeFrame, setGlobeFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlobeFrame((prev) => (prev + 1) % globeFrames.length);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    // Section: 1920×869, white bg, border-radius 0 0 150 150
    <section className="relative bg-white rounded-b-[40px] lg:rounded-b-[150px] overflow-hidden min-h-[520px] lg:min-h-[869px]">

      {/* ── Desktop Earth globe: left calc(50%+189px), top 38px ── */}
      <div
        className="hidden lg:block absolute pointer-events-none"
        style={{
          left: "calc(50% + 189px)",
          top: 38,
          width: 636,
          height: 700,
        }}
      >
        <div className="absolute inset-0">
          {globeFrames.map((frame, i) => (
            <img
              key={i}
              src={frame}
              alt="Earth Globe"
              className="absolute inset-0 w-full h-full object-contain"
              style={{
                opacity: i === globeFrame ? 1 : 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Content column: left 150px, starts at top 149px ── */}
      <div
        className="relative z-10 max-w-[1920px] mx-auto"
        style={{ paddingLeft: "clamp(21px, 7.8125%, 150px)", paddingRight: "clamp(21px, 7.8125%, 150px)" }}
      >
        {/* Heading */}
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0)}
          className="font-heading text-[20px] lg:text-[60px] leading-[130%] tracking-[0.6px] lg:tracking-[-0.02em] text-black max-w-[971px] text-center lg:text-left"
          style={{ marginTop: "clamp(20px, 7.77%, 149px)" }}
        >
          The{" "}
          <span
            className="relative inline-block text-primary"
            style={{
              padding: "0.05em 0.15em",
            }}
          >
            only
            <span
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `url(${circleDecoration})`,
                backgroundSize: "80% 90%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                transform: "scaleX(-1) scale(1.35, 1.3)",
              }}
            />
          </span>{" "}
          identity and onboarding platform your business needs.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.1)}
          className="text-[12px] lg:text-[20px] leading-[150%] tracking-[-0.02em] text-black/60 max-w-[897px] text-center lg:text-left"
          style={{ marginTop: "clamp(10px, 1.15%, 22px)" }}
        >
          Verify users, businesses, employees, and prevent fraud{" "}
          <span className="font-semibold text-primary">globally</span>{" "}
          using a single integration without the complexity.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.2)}
          className="flex flex-wrap items-center justify-center lg:justify-start gap-[15px]"
          style={{ marginTop: "clamp(20px, 3.22%, 62px)" }}
        >
          <a
            href="https://dashboard.idto.ai/signup/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center font-body font-medium lg:font-semibold text-white bg-primary rounded-full transition-opacity hover:opacity-90 w-[108px] h-[34px] text-[12px] lg:w-[217px] lg:h-[72px] lg:text-[21px]"
            style={{
              letterSpacing: "0.36px",
              border: "1.5px solid rgba(255,255,255,0.5)",
            }}
          >
            Sign-up
          </a>

          <button
            onClick={bookDemo}
            className="flex items-center justify-center font-body font-medium lg:font-semibold rounded-full transition-opacity hover:opacity-70 w-[130px] h-[34px] text-[12px] lg:w-[217px] lg:h-[72px] lg:text-[24px]"
            style={{
              letterSpacing: "0.36px",
              border: "1.5px solid #0019FF",
              color: "rgba(0, 25, 255, 0.8)",
              background: "transparent",
            }}
          >
            Book a demo
          </button>
        </motion.div>

        {/* ── Mobile Globe ── */}
        <div className="lg:hidden flex justify-center mt-5">
          <img
            src={globe1}
            alt="Earth Globe"
            width={272}
            height={299}
            className="block w-[272px] h-[299px] object-contain"
          />
        </div>

        {/* Trusted partners */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.3)}
          className="flex flex-col gap-2.5 lg:gap-5 max-w-[680px] pb-6 lg:pb-0 items-center lg:items-start"
          style={{ marginTop: "clamp(10px, 1.98%, 38px)" }}
        >
          <p
            className="font-body text-[12px] lg:text-[16px] leading-[150%] tracking-[-0.02em] text-center lg:text-left"
            style={{ color: "#666666" }}
          >
            Trusted by{" "}
            <span className="font-semibold text-black">100+</span>{" "}
            startups and enterprises building onboarding in India and beyond.
          </p>

          {/* Mobile: infinite scrolling marquee */}
          <div className="lg:hidden overflow-hidden w-full" style={{ minHeight: 20 }}>
            <div
              className="flex items-center gap-6 w-max"
              style={{ animation: "marquee 15s linear infinite" }}
            >
              {[...Array(4)].map((_, setIdx) => (
                <div key={setIdx} className="flex items-center gap-6 shrink-0">
                  <img src={partner1} alt="Partner" className="h-[18px] w-auto object-contain" />
                  <img src={partner2} alt="Partner" className="h-[14px] w-auto object-contain" />
                  <img src={partner3} alt="Partner" className="h-[12px] w-auto object-contain" />
                  <img src={partner4} alt="Partner" className="h-[18px] w-auto object-contain" />
                  <img src={partner5} alt="Partner" className="h-[16px] w-auto object-contain" />
                  <img src={partner6} alt="Partner" className="h-[10px] w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: infinite scrolling marquee */}
          <div className="hidden lg:block overflow-hidden max-w-[680px]" style={{ minHeight: 53 }}>
            <div className="flex items-center gap-16 animate-marquee w-max">
              {[...Array(3)].map((_, setIdx) => (
                <div key={setIdx} className="flex items-center gap-16 shrink-0">
                  <img src={partner1} alt="Partner" style={{ height: 45 }} className="w-auto object-contain" />
                  <img src={partner2} alt="Partner" style={{ height: 28 }} className="w-auto object-contain" />
                  <img src={partner3} alt="Partner" style={{ height: 29 }} className="w-auto object-contain" />
                  <img src={partner4} alt="Partner" style={{ height: 53 }} className="w-auto object-contain" />
                  <img src={partner5} alt="Partner" style={{ height: 53 }} className="w-auto object-contain" />
                  <img src={partner6} alt="Partner" style={{ height: 34 }} className="w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Spacer to reach section bottom of 869px (partners end ≈ 559+97=656, remaining ≈ 213px) */}
        <div className="hidden lg:block" style={{ height: 213 }} />
      </div>

    </section>
  );
}
