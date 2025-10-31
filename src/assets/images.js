// KOLEJNOŚĆ: 1) wnętrze, 2) plac, 3) biura, 4) front, 5+ detale
export const photos = [
  { base: "DSC_6883_cleanup", alt: "Hala wysokiego składowania" },          // wnętrze
  { base: "DSC_6905_cleanup", alt: "Plac manewrowy z dojazdem TIR" },        // plac
  { base: "DSC_6922_cleanup", alt: "Biura – open space" },                   // biura
  { base: "DSC_6925_cleanup", alt: "Front budynku" },                        // front
  { base: "DSC_6866_cleanup", alt: "Detal obiektu (brama / dok)" },
  { base: "DSC_6848_cleanup", alt: "Detal obiektu (zaplecze)" },
  { base: "DSC_6896_cleanup", alt: "Detal obiektu (teren)" },
  { base: "DSC_6843_cleanup", alt: "Widok dodatkowy" },
  { base: "DSC_6861_cleanup", alt: "Widok dodatkowy" },
  { base: "DSC_6853_cleanup", alt: "Widok dodatkowy" },
  { base: "DSC_6924_cleanup", alt: "Widok dodatkowy" },
  { base: "DSC_6892_cleanup", alt: "Widok dodatkowy" },
];

export const imgSrc = (base, w = 1600) => `/images/optimized/${base}-${w}.webp`;
export const srcSet = (base) =>
  `/images/optimized/${base}-800.webp 800w, /images/optimized/${base}-1200.webp 1200w, /images/optimized/${base}-1600.webp 1600w`;

export const sizesHero = "(max-width: 640px) 100vw, 56.25vw";
export const sizesThumb = "(max-width: 640px) 50vw, 25vw";
