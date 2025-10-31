import { useEffect } from "react";
import { imgSrc, srcSet } from "../assets/images";

export default function Lightbox({ open, index, setOpen, setIndex, items }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, items.length, setIndex, setOpen]);

  useEffect(() => {
    if (!open) return;
    let sx = 0;
    const down = (e) => (sx = e.touches?.[0]?.clientX ?? 0);
    const up = (e) => {
      const dx = (e.changedTouches?.[0]?.clientX ?? 0) - sx;
      if (dx < -30) setIndex((i) => (i + 1) % items.length);
      if (dx > 30) setIndex((i) => (i - 1 + items.length) % items.length);
    };
    document.addEventListener("touchstart", down);
    document.addEventListener("touchend", up);
    return () => { document.removeEventListener("touchstart", down); document.removeEventListener("touchend", up); };
  }, [open, items.length, setIndex]);

  if (!open) return null;
  const x = items[index];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 select-none" onClick={() => setOpen(false)}>
      <div className="absolute inset-0 grid place-items-center p-4" onClick={(e) => e.stopPropagation()}>
        <figure className="relative w-full max-w-5xl">
          <img
            src={imgSrc(x.base, 1200)}
            srcSet={srcSet(x.base)}
            sizes="100vw"
            alt={x.alt}
            className="w-full h-auto rounded-lg"
          />
          <figcaption className="absolute bottom-2 left-2 right-2 text-white/90 text-sm bg-black/40 rounded px-3 py-2">
            {x.alt}
          </figcaption>
          <div className="absolute top-2 left-2 text-xs bg-black/60 text-white rounded px-2 py-1">
            {index + 1} / {items.length}
          </div>
        </figure>
      </div>

      <button
        type="button"
        className="fixed left-6 top-1/2 -translate-y-1/2 z-[60] w-14 h-14 rounded-full bg-white/15 text-white text-2xl grid place-items-center backdrop-blur hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/60 transition"
        onClick={(e) => { e.stopPropagation(); setIndex((i) => (i - 1 + items.length) % items.length); }}
        aria-label="Poprzednie"
      >‹</button>

      <button
        type="button"
        className="fixed right-6 top-1/2 -translate-y-1/2 z-[60] w-14 h-14 rounded-full bg-white/15 text-white text-2xl grid place-items-center backdrop-blur hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/60 transition"
        onClick={(e) => { e.stopPropagation(); setIndex((i) => (i + 1) % items.length); }}
        aria-label="Następne"
      >›</button>

      <button
        type="button"
        className="fixed top-4 right-4 z-[60] w-11 h-11 rounded-full bg-white/15 text-white text-xl grid place-items-center backdrop-blur hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/60 transition"
        onClick={(e) => { e.stopPropagation(); setOpen(false); }}
        aria-label="Zamknij"
      >✕</button>
    </div>
  );
}
