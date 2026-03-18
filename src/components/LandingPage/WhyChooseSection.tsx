import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { createFadeInUp, viewportOnce } from "../../utils/animations";
import SectionHeading from "../UI/SectionHeading";
import PillTag from "../UI/PillTag";
import idtoUnderline from "../../assets/lines-01-idto.svg";

interface WhyCard {
  tag: string;
  title: string;
  description: string;
}

const whyCards: WhyCard[] = [
  {
    tag: "Identity Consultants",
    title: "Identity Consultants",
    description:
      "We don't just give you APIs.\nWe design the right verification stack for your use case – optimized for cost, success rate, and compliance from day one.",
  },
  {
    tag: "Transparent Commercials",
    title: "Transparent Commercials",
    description:
      "Clear pricing. No hidden markups.\nKeep your existing partner rates or use ours – one invoice, predictable costs, zero surprises.",
  },
  {
    tag: "Honest By Default",
    title: "Honest by Default",
    description:
      "We'll tell you what you don't need.\nNo unnecessary APIs. No forced bundles. Just what improves onboarding and reduces fraud.",
  },
  {
    tag: "Fast To Go Live",
    title: "Fast to Go Live",
    description:
      "One integration. Pre-built workflows. Production-ready SDKs. From sandbox to live without long sales cycles.",
  },
  {
    tag: "Startup-Friendly. Enterprise-Ready.",
    title: "Startup-Friendly. Enterprise-Ready",
    description:
      "Go live in days with self-serve workflows.\nScale to multi-partner orchestration, advanced fallbacks, and compliance automation as you grow.",
  },
  {
    tag: "No Vendor Lock-In",
    title: "No Vendor Lock-In",
    description:
      "No heavy prepaid wallet traps.\nBuilt-in auto-switching removes dependency on any single vendor.",
  },
  {
    tag: "Priority Support",
    title: "Priority Support",
    description:
      "Direct access to identity experts.\nFaster troubleshooting, optimization guidance, and continuous workflow improvements.",
  },
];

export default function WhyChooseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [centeredRenderIndex, setCenteredRenderIndex] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [manualSelection, setManualSelection] = useState<number | null>(null);
  const [marqueeDelaySeconds, setMarqueeDelaySeconds] = useState(0);
  const [manualTrackPosition, setManualTrackPosition] = useState<
    { x: number; animate: boolean } | null
  >(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeViewportRef = useRef<HTMLDivElement>(null);
  const manualSelectionTimerRef = useRef<number | null>(null);

  // Render a single card
  const renderCard = (
    card: WhyCard,
    i: number,
    keyPrefix: string,
    isMiddle: boolean,
    realIndex: number,
  ) => {
    return (
      <div
        key={`${keyPrefix}-${i}`}
        data-marquee-index={i}
        data-real-index={realIndex}
        className={`group shrink-0 border border-[#536bc9] flex flex-col
          bg-[rgba(55,87,200,0.43)]
          w-[260px] h-auto min-h-53.75 lg:w-120.25 lg:h-89.5 rounded-2xl lg:rounded-4xl p-[20px_24px] lg:p-[31px_41px]
          transition-all duration-500 ${
            isMiddle
              ? "opacity-100 scale-[1.08]"
              : "opacity-55 scale-100 lg:hover:opacity-70"
          }`}
      >
        <h3
          className="capitalize font-semibold text-white leading-7 lg:leading-9
            text-xl lg:text-[28px]"
        >
          {card.title}
        </h3>
        <div
          className="w-16.25 h-0 mt-5 lg:mt-9
            border-t-[1.62px] border-[#DBDFE3]"
        />
        <p
          className="text-white leading-[150%] tracking-[-0.02em] whitespace-pre-line mt-5 lg:mt-9
            text-sm lg:text-[20px] opacity-60"
        >
          {card.description}
        </p>
      </div>
    );
  };

  // Triple cards for seamless looping marquee.
  const tripled = [...whyCards, ...whyCards, ...whyCards];

  const getCurrentTrackX = (track: HTMLDivElement) => {
    const computedTransform = window.getComputedStyle(track).transform;
    return computedTransform && computedTransform !== "none"
      ? new DOMMatrixReadOnly(computedTransform).m41
      : 0;
  };

  const getCenteredXForIndex = (realIndex: number, trackX: number) => {
    const track = marqueeRef.current;
    const viewport = marqueeViewportRef.current;
    if (!track || !viewport) return null;

    const selectedRenderIndex = whyCards.length + realIndex;
    const selectedCard = track.querySelector<HTMLElement>(
      `[data-marquee-index="${selectedRenderIndex}"]`,
    );

    if (!selectedCard) return null;

    const viewportRect = viewport.getBoundingClientRect();
    const cardRect = selectedCard.getBoundingClientRect();
    const viewportCenter = viewportRect.left + viewportRect.width / 2;
    const cardCenter = cardRect.left + cardRect.width / 2;
    const deltaToCenter = viewportCenter - cardCenter;

    return trackX + deltaToCenter;
  };

  const getDelayFromTrackX = (trackX: number, track: HTMLDivElement) => {
    const cycleDistance = track.scrollWidth / 3;
    if (!cycleDistance) return 0;

    const normalizedDistance = ((-trackX % cycleDistance) + cycleDistance) % cycleDistance;
    const progress = normalizedDistance / cycleDistance;

    return -progress * 40;
  };

  const handlePillSelect = (index: number) => {
    const track = marqueeRef.current;
    if (!track) return;

    const currentX = getCurrentTrackX(track);
    const targetX = getCenteredXForIndex(index, currentX);
    if (targetX === null) return;

    setActiveIndex(index);
    setCenteredRenderIndex(whyCards.length + index);
    setManualSelection(index);
    setPaused(true);
    // Freeze current position, then animate to selected card.
    setManualTrackPosition({ x: currentX, animate: false });
    window.requestAnimationFrame(() => {
      setManualTrackPosition({ x: targetX, animate: true });
    });

    if (manualSelectionTimerRef.current !== null) {
      window.clearTimeout(manualSelectionTimerRef.current);
    }

    // Hold the selected pill briefly, then resume marquee from this exact position.
    manualSelectionTimerRef.current = window.setTimeout(() => {
      const resumedTrack = marqueeRef.current;
      if (!resumedTrack) return;

      setMarqueeDelaySeconds(getDelayFromTrackX(targetX, resumedTrack));
      setManualTrackPosition(null);
      setManualSelection(null);
      setPaused(false);
      manualSelectionTimerRef.current = null;
    }, 4000);
  };

  useEffect(() => {
    const track = marqueeRef.current;
    const viewport = marqueeViewportRef.current;
    if (!track || !viewport) return;

    const detectCenteredCard = () => {
      if (manualSelection !== null) return;

      const viewportRect = viewport.getBoundingClientRect();
      const viewportCenter = viewportRect.left + viewportRect.width / 2;
      const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-marquee-index]"));

      if (cards.length === 0) return;

      let nearestCardIndex = -1;
      let smallestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((cardEl, index) => {
        const rect = cardEl.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          nearestCardIndex = index;
        }
      });

      if (nearestCardIndex < 0) return;

      const nearestCard = cards[nearestCardIndex];

      const renderIndex = Number(nearestCard.dataset.marqueeIndex ?? "0");
      const realIndex = Number(nearestCard.dataset.realIndex ?? "0");

      setCenteredRenderIndex((prev) => (prev === renderIndex ? prev : renderIndex));
      setActiveIndex((prev) => (prev === realIndex ? prev : realIndex));
    };

    detectCenteredCard();
    const timer = window.setInterval(detectCenteredCard, 120);

    return () => window.clearInterval(timer);
  }, [manualSelection]);

  useEffect(() => {
    return () => {
      if (manualSelectionTimerRef.current !== null) {
        window.clearTimeout(manualSelectionTimerRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-blue-section px-5 lg:px-37.5 py-12 lg:py-37.5 overflow-hidden">
      <div className="max-w-480 mx-auto flex flex-col items-center gap-8 lg:gap-22.25">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp()}
        >
          <SectionHeading className="text-white">
            Why business choose{" "}
            <span className="relative inline-block">
              idto
              <img
                aria-hidden="true"
                src={idtoUnderline}
                className="absolute left-0 w-full pointer-events-none select-none"
                style={{ top: "100%", marginTop: "2px" }}
              />
            </span>
          </SectionHeading>
        </motion.div>

        {/* Pills */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.1)}
          className="flex gap-2.5 lg:gap-4 overflow-x-auto lg:flex-wrap lg:justify-center max-w-full lg:max-w-237.5 pb-2 lg:pb-0 scrollbar-hide"
        >
          {whyCards.map((card, i) => (
            <PillTag
              key={card.tag}
              label={card.tag}
              active={activeIndex === i}
              variant="dark"
              onClick={() => handlePillSelect(i)}
            />
          ))}
        </motion.div>

        {/* Marquee Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={createFadeInUp(0.2)}
          className="w-full overflow-hidden py-4 lg:py-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            if (manualSelection === null) {
              setPaused(false);
            }
          }}
          ref={marqueeViewportRef}
        >
          <div
            ref={marqueeRef}
            className="flex gap-7 lg:gap-10 w-max"
            style={
              manualTrackPosition
                ? {
                    transform: `translateX(${manualTrackPosition.x}px)`,
                    transition: manualTrackPosition.animate
                      ? "transform 650ms cubic-bezier(0.22, 1, 0.36, 1)"
                      : "none",
                  }
                : {
                    animation: "marquee-why 40s linear infinite",
                    animationDelay: `${marqueeDelaySeconds}s`,
                    animationPlayState: paused ? "paused" : "running",
                  }
            }
          >
            {tripled.map((card, i) =>
              renderCard(
                card,
                i,
                "marquee",
                centeredRenderIndex === i,
                i % whyCards.length,
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
