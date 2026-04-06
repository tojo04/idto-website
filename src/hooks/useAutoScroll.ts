import { useRef, useEffect } from "react";

export function useAutoScroll(cardWidth: number, gap: number, interval = 3000) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let idx = 0;
    let paused = false;
    let resumeTimer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (paused || el.scrollWidth <= el.clientWidth) return;
      idx++;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const target = idx * (cardWidth + gap);
      if (target > maxScroll) {
        idx = 0;
      }
      el.scrollTo({ left: idx * (cardWidth + gap), behavior: "smooth" });
    };

    const id = setInterval(tick, interval);

    const onTouch = () => {
      paused = true;
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        paused = false;
        idx = Math.round(el.scrollLeft / (cardWidth + gap));
      }, 5000);
    };

    el.addEventListener("touchstart", onTouch, { passive: true });

    return () => {
      clearInterval(id);
      clearTimeout(resumeTimer);
      el.removeEventListener("touchstart", onTouch);
    };
  }, [cardWidth, gap, interval]);

  return ref;
}
