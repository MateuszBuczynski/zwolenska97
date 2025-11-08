export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="container h-14 flex items-center justify-between">
        <a href="#" className="font-medium truncate max-w-[48vw] sm:max-w-none">
  Zwoleńska — Hale i biura
</a>

        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#oferta" className="text-slate-600 hover:text-slate-900">Oferta</a>
          <a href="#atut" className="text-slate-600 hover:text-slate-900">Atuty</a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900">Kontakt</a>
        </nav>
        <a
  href="tel:+48690104850"
  className="inline-flex items-center justify-center shrink-0
             px-3 py-1.5 text-[13px] rounded-lg
             sm:px-4 sm:py-2 sm:text-sm
             bg-slate-900 text-white shadow ring-1 ring-black/10"
>
  Zadzwoń: +48 690 104 850
</a>

      </div>
    </header>
  );
}
