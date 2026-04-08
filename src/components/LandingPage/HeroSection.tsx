import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

// Globe assets
import globeVideoMp4 from "../../assets/globe-hq.mp4";
import globeGif from "../../assets/GIF.gif";
import globe1 from "../../assets/globe/globe=1.svg";
import circleDecoration from "../../assets/circleDecoration.svg";

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
  const desktopGlobeWidth = "clamp(430px, 32vw, 636px)";
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);
  const [showMobileVideo, setShowMobileVideo] = useState(true);

  useEffect(() => {
    const video = mobileVideoRef.current;
    if (!video) return;

    // If MP4 playback isn't supported, fall back to GIF.
    if (video.canPlayType("video/mp4") === "") {
      setShowMobileVideo(false);
      return;
    }

    const handleError = () => setShowMobileVideo(false);
    video.addEventListener("error", handleError);

    void video.play().catch(() => {
      setShowMobileVideo(false);
    });

    return () => {
      video.removeEventListener("error", handleError);
    };
  }, []);

  return (
    // Section: 1920×869, white bg, border-radius 0 0 150 150
    <section className="relative bg-white px-5 lg:px-37.5 rounded-b-[40px] lg:rounded-b-[150px] overflow-hidden min-h-[520px] lg:min-h-[clamp(720px,45vw,869px)]">

      {/* ── Desktop Earth globe: left calc(50%+189px), top 38px ── */}
      <div
        className="hidden lg:block absolute pointer-events-none overflow-hidden"
        style={{
          right: "clamp(28px, 5vw, 120px)",
          top: "clamp(40px, 4vw, 90px)",
          width: desktopGlobeWidth,
          height: "auto",
          aspectRatio: "636 / 700",
        }}
      >
        <video
          className="absolute inset-0 w-full h-full object-contain"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={globe1}
          aria-label="Earth Globe animation"
        >
          <source src={globeVideoMp4} type="video/mp4" />
        </video>
      </div>

      {/* ── Content column: left 150px, starts at top 149px ── */}
      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Heading */}
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0)}
          className="font-heading text-[20px] lg:text-[clamp(44px,3.2vw,60px)] leading-[130%] tracking-[0.6px] lg:tracking-[-0.02em] text-black max-w-[971px] text-center lg:text-left lg:max-w-[860px] lg:mr-[clamp(120px,30%,520px)]"
          style={{
            marginTop: "clamp(20px, 7.77%, 149px)",
          }}
        >
          <span className="hidden lg:block whitespace-nowrap">The{" "}
          <span
            className="relative inline-block text-primary"
            style={{
              padding: "0.05em 0.15em",
            }}
          >
            only
            <img
              aria-hidden="true"
              src={circleDecoration}
              className="absolute pointer-events-none select-none"
              style={{
                top: "55%",
                left: "50%",
                transform: "translate(-50%, -50%) scaleX(-1) rotate(22deg)",
                width: "140%",
                height: "130%",
              }}
            />
          </span>{" "}
          identity and onboarding</span>
          <span className="hidden lg:block whitespace-nowrap">platform your business needs.</span>

          <span className="lg:hidden">The{" "}
            <span
              className="relative inline-block text-primary"
              style={{
                padding: "0.05em 0.15em",
              }}
            >
              only
              <img
                aria-hidden="true"
                src={circleDecoration}
                className="absolute pointer-events-none select-none"
                style={{
                  top: "55%",
                  left: "50%",
                  transform: "translate(-50%, -50%) scaleX(-1) rotate(8deg)",
                  width: "140%",
                  height: "130%",
                }}
              />
            </span>{" "}
            identity and onboarding platform your business needs.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.1)}
          className="text-[12px] lg:text-[20px] leading-[150%] tracking-[-0.02em] text-black/60 max-w-[897px] lg:max-w-[780px] text-center lg:text-left lg:mr-[clamp(120px,30%,520px)]"
          style={{
            marginTop: "clamp(10px, 1.15%, 22px)",
          }}
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
          className="flex flex-wrap items-center justify-center lg:justify-start gap-[15px] lg:mr-[clamp(120px,30%,520px)]"
          style={{
            marginTop: "clamp(20px, 3.22%, 62px)",
          }}
        >
          <a
            href="https://dashboard.idto.ai/signup/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center font-body font-medium lg:font-semibold text-white bg-primary rounded-full transition-opacity hover:opacity-90 w-[108px] h-[34px] text-[12px] lg:w-auto lg:h-auto lg:min-w-[clamp(170px,12vw,217px)] lg:px-[clamp(24px,2.2vw,40px)] lg:py-[clamp(13px,1vw,16px)] lg:text-[clamp(18px,1.2vw,21px)] whitespace-nowrap"
            style={{
              letterSpacing: "0.36px",
              border: "1.5px solid rgba(255,255,255,0.5)",
            }}
          >
            Sign-up
          </a>

          <button
            onClick={bookDemo}
            className="flex items-center justify-center font-body font-medium lg:font-semibold rounded-full transition-opacity hover:opacity-70 w-[130px] h-[34px] text-[12px] lg:w-auto lg:h-auto lg:min-w-[clamp(170px,12vw,217px)] lg:px-[clamp(24px,2.2vw,40px)] lg:py-[clamp(13px,1vw,16px)] lg:text-[clamp(19px,1.35vw,24px)] whitespace-nowrap"
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
          {showMobileVideo ? (
            <video
              ref={mobileVideoRef}
              width={272}
              height={299}
              className="block w-[272px] h-[299px] object-contain"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={globe1}
              aria-label="Earth Globe animation"
            >
              <source src={globeVideoMp4} type="video/mp4" />
            </video>
          ) : (
            <img
              src={globeGif}
              alt="Earth Globe animation"
              width={272}
              height={299}
              className="block w-[272px] h-[299px] object-contain"
              loading="eager"
            />
          )}
        </div>

        {/* Trusted partners */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.3)}
          className="flex flex-col gap-2.5 lg:gap-5 max-w-[680px] pb-6 lg:pb-0 items-center lg:items-start lg:mr-[clamp(120px,30%,520px)]"
          style={{
            marginTop: "clamp(10px, 1.98%, 38px)",
          }}
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

        {/* Desktop spacer kept fluid so 1440 doesn't retain 1920-level empty space */}
        <div className="hidden lg:block" style={{ height: "clamp(70px, 8vw, 213px)" }} />
      </div>

    </section>
  );
}
