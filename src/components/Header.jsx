export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-slate-200/60">
      <div className="container h-14 sm:h-16 flex items-center gap-3">
        {/* LEWA STRONA: tytuł/logo */}
        <div className="flex-1 min-w-0">
          {/* jeśli masz logo, wstaw tu <img> + tekst obok; ważne: min-w-0 i truncate */}
          <span className="block truncate text-slate-800 font-medium text-[15px] sm:text-base">
            Zwoleńska 97 — Hale i biura
          </span>
        </div>

        {/* (opcjonalnie) linki na desktopie */}
        <nav className="hidden sm:flex items-center gap-6 mr-3 text-slate-600">
          <a href="#oferta" className="hover:text-slate-900">Oferta</a>
          <a href="#atuty" className="hover:text-slate-900">Atuty</a>
          <a href="#contact" className="hover:text-slate-900">Kontakt</a>
        </nav>

        {/* PRAWA STRONA: przycisk "Zadzwoń" – element flex, nie absolute */}
        <a
          href="tel:+48690104850"
          className="btn-primary whitespace-nowrap px-3 sm:px-4 py-2 text-sm sm:text-[15px]"
        >
          Zadzwoń: +48 690 104 850
        </a>
      </div>
    </header>
  );
}
