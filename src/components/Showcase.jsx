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
      {/* HERO – XS: jedna kolumna, SM+: 2 kolumny
          scroll-mt-24 = kotwice nie „wchodzą” pod sticky nagłówek;
          pt-3 na XS daje oddech pod przyciskiem Zadzwoń */}
      <section className="bg-gradient-to-b from-slate-50 to-white scroll-mt-24 pt-3 sm:pt-0" id="oferta">
        <div className="container py-5 sm:py-10 grid sm:grid-cols-2 gap-3 sm:gap-8 lg:gap-12 items-start">
          {/* HERO najpierw na mobile */}
          <div className="order-1 sm:order-2">
            <button
              className="relative card overflow-hidden block w-full aspect-[16/10] min-h-[210px] sm:min-h-[280px]"
              onClick={() => { setIdx(0); setOpen(true); }}
              aria-label="Otwórz galerię"
              type="button"
            >
              <img
                src={imgSrc(hero.base, 1200)}
                srcSet={srcSet(hero.base)}
                sizes={sizesHero}
                alt={hero.alt}
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
              <span className="absolute top-2 right-2 badge bg-emerald-600 text-white px-2 py-1 text-xs">Dostępne od zaraz</span>
              <span className="absolute left-2 bottom-2 badge bg-black/55 text-white px-2 py-1 text-xs">1/{photos.length}</span>
            </button>
          </div>

          {/* TEKST – pod hero na XS, z lewej na SM+ */}
          <div className="order-2 sm:order-1">
            <span className="badge px-2 py-1 text-xs">Zwoleńska 97 — strefa magazynowa</span>

            {/* Adres – mniejsza typografia na XS */}
            <p className="mt-2 text-slate-600 flex flex-wrap items-center gap-2 text-[13px] sm:text-[15px] leading-snug">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 22s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>Warszawa, Zwoleńska 97, 04-761</span>
              <a href="#contact" className="underline text-slate-500 hover:text-slate-700">(pokaż na mapie)</a>
            </p>

            {/* H1 mniejszy na XS, większy na SM/MD */}
            <h1 className="mt-2 text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
              Powierzchnie magazynowo-biurowe do wynajęcia
            </h1>

            {/* Linia liczb – mniejsze litery i ciaśniejsze prowadzenie na XS */}
            <p className="mt-2 text-slate-800 font-medium text-[15px] sm:text-base leading-snug">
              Działka 1&nbsp;362&nbsp;m²
              <span className="mx-2 text-slate-400">·</span>
              Budynek 407,5&nbsp;m²
              <span className="mx-2 text-slate-400">·</span>
              3&nbsp;kondygnacje
              <span className="mx-2 text-slate-400">·</span>
              Dostęp od zaraz
            </p>

            {/* Instalacje – też kompaktowo na XS */}
            <p className="mt-1 text-slate-600 text-[15px] sm:text-base leading-snug">
              Ogrzewanie gazowe (kotłownia kondensacyjna)
              <span className="mx-2 text-slate-300">·</span>
              wentylacja mechaniczna
              <span className="mx-2 text-slate-300">·</span>
              klimatyzacja
              <span className="mx-2 text-slate-300">·</span>
              monitoring zewnętrzny
            </p>

            <div className="mt-3 flex gap-3">
              <a className="btn-primary" href="tel:+48690104850">Zadzwoń</a>
              <a className="btn-outline" href="#contact">Zapytaj o dostępność</a>
            </div>

            {/* Na bardzo wąskich ekranach 1 kolumna, od 360px dwie */}
            <ul className="mt-3 grid grid-cols-1 min-[360px]:grid-cols-2 gap-2 text-sm text-slate-600">
              <li>• Lokalizacja z szybkim zjazdem</li>
              <li>• Wysokość do 6–8 m*</li>
              <li>• Ogrzewanie, monitoring</li>
              <li>• Parking na miejscu</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SLIDER miniatur – większe kafle na mobile, ciaśniejsze odstępy */}
      <section className="bg-white">
        <div className="container pb-5 -mt-3">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent rounded-l-xl" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent rounded-r-xl" />

            {/* Strzałki pokazujemy od SM */}
            <button
              className="hidden sm:flex items-center justify-center absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900 text-white shadow-lg ring-1 ring-black/10 hover:scale-105 transition"
              onClick={() => scrollBy(-1)}
              aria-label="Przewiń w lewo"
              type="button"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              className="hidden sm:flex items-center justify-center absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-900 text-white shadow-lg ring-1 ring-black/10 hover:scale-105 transition"
              onClick={() => scrollBy(1)}
              aria-label="Przewiń w prawo"
              type="button"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              ref={railRef}
              className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth pl-5 pr-5 sm:pl-10 sm:pr-10"
            >
              {thumbs.map((t, i) => (
                <button
                  key={t.base}
                  className="relative shrink-0 w-[84vw] sm:w-[320px] md:w-[300px] aspect-[4/3] overflow-hidden rounded-xl border bg-white"
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

          {/* Link dla XS */}
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
