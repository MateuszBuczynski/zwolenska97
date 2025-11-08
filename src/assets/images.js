// —— rozmiary zgodne z generatorem (800/1200/1600 + thumb 380) ——
const BREAKPOINTS = [800, 1200, 1600];
export const sizesHero = "(min-width: 1024px) 56.25vw, 100vw";
export const sizesThumb = "280px";

function pathLarge(base, w) { return `/images/gallery/large/${base}-${w}.webp`; }
function pathThumb(base)   { return `/images/gallery/thumb/${base}-380.webp`; }

export function imgSrc(base, w = 1200) { return pathLarge(base, w); }
export function srcSet(base) { return BREAKPOINTS.map(w => `${pathLarge(base, w)} ${w}w`).join(", "); }

// === EDYTUJ PONIŻEJ: ręczne ALT-y i kolejność (pierwszy element = HERO) ===
export const photos = [
  { base: "DSC_6917",  alt: "Biura — open space" },
  { base: "DSC_6848",  alt: "Brama wjazdowa" },
  { base: "DSC_6853",  alt: "Brama wjazdowa i ulica Zwoleńska" },
  { base: "DSC_6855",  alt: "Widok z ulicy Zwoleńskiej" },
  { base: "DSC_6861",  alt: "Front budynku" },
  { base: "DSC_6869",  alt: "Teren zewnętrzny — parking" },
  { base: "DSC_6883",  alt: "Magazyn" },
  { base: "DSC_6889",  alt: "Wejście do budnku i magazynu" },
  { base: "DSC_6896",  alt: "Widok boku budynku" },
  { base: "DSC_6905",  alt: "Kostka brukowa na parkingu" },
  { base: "DSC_6924",  alt: "Front oraz parking" },
  { base: "DSC_6925",  alt: "Front budynku — wejście główne" },
].map((x, i) => ({
  ...x,
  // jeśli kiedyś zostawisz alt pusty — dostaniesz domyślny opis
  alt: x.alt && x.alt.trim() !== "" ? x.alt : `Zdjęcie ${i + 1} — ujęcie budynku`,
  thumb: pathThumb(x.base),
}));
