import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";

// Globe assets
const earthGlobe = "https://www.figma.com/api/mcp/asset/3e47cb91-b4cb-4660-927e-2441f5a99b15";
const ellipse1 = "https://www.figma.com/api/mcp/asset/23ff7d56-c53c-497f-9f03-655ae0de9113";
const ellipse2 = "https://www.figma.com/api/mcp/asset/56264dfa-2191-42e4-986c-8e09d1c3646e";
const ellipse3 = "https://www.figma.com/api/mcp/asset/92d2393e-c049-442b-89fc-d68c8bdc057f";
const circleDecoration = "https://www.figma.com/api/mcp/asset/926ce96f-0fdb-441a-8a32-5159367393d9";

// Partner logos
const partner1 = "https://www.figma.com/api/mcp/asset/a6fab1ae-eeb4-4007-881d-d5f18b814555";
const partner2 = "https://www.figma.com/api/mcp/asset/7c9a916d-157b-4eee-acd5-267d990c0002";
const partner3 = "https://www.figma.com/api/mcp/asset/0aca35e4-b827-4b21-a3a5-f4ead6295474";
const partner4 = "https://www.figma.com/api/mcp/asset/d46b2099-d59e-4811-83e4-9a918ff0c1bb";
const partner5 = "https://www.figma.com/api/mcp/asset/a065a8b6-163f-49d9-a621-86d3d086dac4";
const partner6 = "https://www.figma.com/api/mcp/asset/10ed48c5-49f7-4317-9be5-3bd470ffc5fc";

interface HeroSectionProps {
  bookDemo: () => void;
}

export default function HeroSection({ bookDemo }: HeroSectionProps) {
  return (
    // Section: 1920×869, white bg, border-radius 0 0 150 150
    <section className="relative bg-white rounded-b-[100px] lg:rounded-b-[150px] overflow-hidden min-h-[520px] lg:min-h-[869px]">

      {/* ── Earth globe: left calc(50%+189px), top 38px ── */}
      {/* At 1920: center of earth = 960+507.5 = 1467.5px → left = 1149px */}
      <div
        className="hidden lg:block absolute pointer-events-none"
        style={{
          left: "calc(50% + 189px)",
          top: 38,
          width: 636,
          height: 700,
        }}
      >
        {/* Ellipse 1: rotate(-15deg) */}
        <img src={ellipse1} alt="" className="absolute inset-0 w-full h-full object-contain" style={{ transform: "rotate(-15deg)" }} />
        {/* Ellipse 2: rotate(45deg) */}
        <img src={ellipse2} alt="" className="absolute inset-0 w-full h-full object-contain" style={{ transform: "rotate(45deg)" }} />
        {/* Ellipse 3: rotate(120deg) */}
        <img src={ellipse3} alt="" className="absolute inset-0 w-full h-full object-contain" style={{ transform: "rotate(120deg)" }} />
        {/* Globe: top 17.18%, left 14.27%, right 14.55%, bottom 18.13% → w≈453px h≈453px offset left≈91px top≈120px */}
        <div
          className="absolute rounded-full overflow-hidden"
          style={{ top: "17.18%", left: "14.27%", right: "14.55%", bottom: "18.13%" }}
        >
          <img src={earthGlobe} alt="Earth Globe" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* ── Content column: left 150px, starts at top 149px ── */}
      <div
        className="relative z-10 max-w-[1920px] mx-auto"
        style={{ paddingLeft: "clamp(24px, 7.8125%, 150px)", paddingRight: "clamp(24px, 7.8125%, 150px)" }}
      >
        {/* Heading: top 149px, width 971px, 60px Hedvig, 130% leading, -0.02em */}
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0)}
          className="font-heading text-[36px] lg:text-[60px] leading-[130%] tracking-[-0.02em] text-black max-w-[971px]"
          style={{ marginTop: "clamp(48px, 7.77%, 149px)" }}
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

        {/* Subtitle: top 327px → 178px below heading top (heading is ~156px tall), so mt ≈ 22px */}
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.1)}
          className="text-[16px] lg:text-[20px] leading-[150%] tracking-[-0.02em] text-black/60 max-w-[897px]"
          style={{ marginTop: "clamp(12px, 1.15%, 22px)" }}
        >
          Verify users, businesses, employees, and prevent fraud{" "}
          <span className="font-semibold text-primary">globally</span>{" "}
          using a single integration without the complexity.
        </motion.p>

        {/* Buttons: top 449px → ~62px below subtitle bottom (327+60=387, 449-387=62) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.2)}
          className="flex flex-wrap items-center gap-[18px]"
          style={{ marginTop: "clamp(28px, 3.22%, 62px)" }}
        >
          {/* Sign-up: 217×72, bg #0019FF, border 1.5px white/50, radius 157.5px, 21px 600 */}
          <a
            href="https://dashboard.idto.ai/signup/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center font-body font-semibold text-white bg-primary rounded-full transition-opacity hover:opacity-90"
            style={{
              width: "clamp(160px, 11.3%, 217px)",
              height: 72,
              fontSize: "clamp(17px, 1.09%, 21px)",
              letterSpacing: "-0.02em",
              border: "1.5px solid rgba(255,255,255,0.5)",
              padding: "18px 36px",
            }}
          >
            Sign-up
          </a>

          {/* Book a demo: 217×72, border 1.5px #0019FF, radius 157.5px, 24px 600, opacity 0.8 */}
          <button
            onClick={bookDemo}
            className="flex items-center justify-center font-body font-semibold rounded-full transition-opacity hover:opacity-70"
            style={{
              width: "clamp(160px, 11.3%, 217px)",
              height: 72,
              fontSize: "clamp(17px, 1.25%, 24px)",
              letterSpacing: "-0.02em",
              border: "1.5px solid #0019FF",
              color: "rgba(0, 25, 255, 0.8)",
              padding: "0 36px",
              background: "transparent",
            }}
          >
            Book a demo
          </button>
        </motion.div>

        {/* Trusted partners: top 559px → ~38px below buttons bottom (449+72=521, 559-521=38) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.3)}
          className="flex flex-col gap-5 max-w-[680px] pb-12 lg:pb-0"
          style={{ marginTop: "clamp(24px, 1.98%, 38px)", marginBottom: "clamp(48px, 0%, 0px)" }}
        >
          {/* Section bottom is at 869px, partners start at 559px, height ~97px → bottom padding ≈ 213px */}
          <p
            className="font-body text-[14px] lg:text-[16px] leading-[150%] tracking-[-0.02em]"
            style={{ color: "#666666" }}
          >
            Trusted by{" "}
            <span className="font-semibold text-black">100+</span>{" "}
            startups and enterprises building onboarding in India and beyond.
          </p>
          <div className="flex flex-wrap items-center gap-5 lg:hidden" style={{ minHeight: 53 }}>
            <img src={partner1} alt="Partner" style={{ height: 45 }} className="w-auto object-contain" />
            <img src={partner2} alt="Partner" style={{ height: 28 }} className="w-auto object-contain" />
            <img src={partner3} alt="Partner" style={{ height: 29 }} className="w-auto object-contain" />
            <img src={partner4} alt="Partner" style={{ height: 53 }} className="w-auto object-contain" />
            <img src={partner5} alt="Partner" style={{ height: 53 }} className="w-auto object-contain" />
            <img src={partner6} alt="Partner" style={{ height: 34 }} className="w-auto object-contain" />
          </div>

          {/* Desktop: infinite scrolling marquee */}
          <div className="hidden lg:block overflow-hidden" style={{ minHeight: 53 }}>
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
