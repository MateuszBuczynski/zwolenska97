export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white" id="oferta">
      <div className="container section grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="badge">Zwoleńska — strefa magazynowa</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
            Powierzchnie magazynowo-biurowe do wynajęcia
          </h1>
          <p className="mt-4 text-slate-600">
            Moduły od 100 m² do 3000 m². Dostęp TIR, place manewrowe, parking.
            Dwa budynki — możliwość wynajmu części.
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

        <div className="card aspect-video grid place-items-center text-slate-400">
          {/* podmień na <img src="/images/hero.jpg" className="w-full h-full object-cover rounded-xl" /> */}
          Zdjęcie budynku (wstawimy później)
        </div>
      </div>
    </section>
  );
}
