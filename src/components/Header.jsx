export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="container h-14 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight">Zwoleńska — Hale i biura</a>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#oferta" className="text-slate-600 hover:text-slate-900">Oferta</a>
          <a href="#atut" className="text-slate-600 hover:text-slate-900">Atuty</a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900">Kontakt</a>
        </nav>
        <a href="tel:+48123456789" className="btn-primary">Zadzwoń: +48 123 456 789</a>
      </div>
    </header>
  );
}
