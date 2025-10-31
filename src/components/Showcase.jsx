import { useRef, useState } from "react";
import { photos, imgSrc, srcSet, sizesHero, sizesThumb } from "../assets/images";
import Lightbox from "./Lightbox";

export default function Showcase() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const railRef = useRef(null);

  const hero = photos[0];
  const thumbs = photos;

  const scrollBy = (dir) => {
    const rail = railRef.current;
    if (!rail) return;
    const cardW = rail.querySelector("button")?.offsetWidth ?? 260;
    rail.scrollBy({ left: dir * (cardW + 12) * 2, behavior: "smooth" });
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-slate-50 to-white" id="oferta">
        <div className="container section grid md:grid-cols-2 gap-12 items-center">
          <div className="order-1 md:order-2">
            <button
              className="relative card overflow-hidden block w-full"
              style={{ aspectRatio: "16 / 9", minHeight: "28rem" }}
              onClick={() => { setIdx(0); setOpen(true); }}
              aria-label="Otwórz galerię"
              type="button"
            >
              <img
                src={imgSrc(hero.base, 1200)}
                srcSet={srcSet(hero.base)}
                sizes={sizesHero}
                alt={hero.alt}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <span className="absolute top-3 right-3 badge bg-emerald-600 text-white">Dostępne od zaraz</span>
              <span className="absolute left-3 bottom-3 badge bg-black/55 text-white">1/{photos.length}</span>
            </button>
          </div>

          <div className="order-2 md:order-1">
            <span className="badge">Zwoleńska — strefa magazynowa</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
              Powierzchnie magazynowo-biurowe do wynajęcia
            </h1>
            <p className="mt-4 text-slate-600">
              Moduły od 100 m² do 3000 m². Dostęp TIR, place manewrowe, parking. Dwa budynki — możliwość wynajmu części.
            </p>
            <div className="mt-6 flex gap-3">
              <a className="btn-primary" href="tel:+48123456789">Zadzwoń</a>
              <a className="btn-outline" href="#contact">Zapytaj o dostępność</a>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-600">
              <li>• Lokalizacja z szybkim zjazdem</li>
              <li>• Wysokość do 6–8 m*</li>
              <li>• Ogrzewanie, monitoring</li>
              <li>• Parking na miejscu</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SLIDER miniatur */}
      <section className="bg-white">
        <div className="container pb-6 -mt-6">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-white to-transparent rounded-l-xl" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-white to-transparent rounded-r-xl" />

            <button
              className="hidden sm:flex items-center justify-center absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900 text-white shadow-lg ring-1 ring-black/10 hover:scale-105 transition"
              onClick={() => scrollBy(-1)} aria-label="Przewiń w lewo" type="button"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="hidden sm:flex items-center justify-center absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900 text-white shadow-lg ring-1 ring-black/10 hover:scale-105 transition"
              onClick={() => scrollBy(1)} aria-label="Przewiń w prawo" type="button"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div
              ref={railRef}
              className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth pl-10 pr-10 sm:pl-16 sm:pr-16"
            >
              {thumbs.map((t, i) => (
                <button
                  key={t.base}
                  className="relative shrink-0 w-[240px] md:w-[280px] aspect-[4/3] overflow-hidden rounded-xl border bg-white"
                  onClick={() => { setIdx(i); setOpen(true); }}
                  aria-label={`Otwórz zdjęcie ${i + 1}`}
                  type="button"
                >
                  <img
                    src={imgSrc(t.base, 800)}
                    srcSet={srcSet(t.base)}
                    sizes={sizesThumb}
                    alt={t.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="sm:hidden mt-3">
            <button className="underline text-slate-700" onClick={() => { setIdx(0); setOpen(true); }} type="button">
              Zobacz wszystkie zdjęcia
            </button>
          </div>
        </div>
      </section>

      <Lightbox open={open} index={idx} setOpen={setOpen} setIndex={setIdx} items={photos} />
    </>
  );
}
