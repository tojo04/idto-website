import { useRef, useEffect } from "react";

export function useAutoScroll(cardWidth: number, gap: number, interval = 3000) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let idx = 0;
    let atEnd = false;
    let paused = false;
    let resumeTimer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (paused || el.scrollWidth <= el.clientWidth) return;

      if (atEnd) {
        idx = 0;
        atEnd = false;
        el.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      idx++;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const target = idx * (cardWidth + gap);

      if (target >= maxScroll) {
        atEnd = true;
        el.scrollTo({ left: maxScroll, behavior: "smooth" });
        return;
      }

      el.scrollTo({ left: target, behavior: "smooth" });
    };

    const id = setInterval(tick, interval);

    const onTouch = () => {
      paused = true;
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        paused = false;
        const maxScroll = el.scrollWidth - el.clientWidth;
        idx = Math.round(el.scrollLeft / (cardWidth + gap));
        atEnd = el.scrollLeft >= maxScroll - 2;
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
