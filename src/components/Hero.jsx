export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Powierzchnie magazynowo-biurowe do wynajęcia</h1>
          <p className="text-slate-600 mb-6">Elastyczne moduły, dobry dojazd, parking. Dwa budynki — możliwość wynajmu części.</p>
          <div className="flex gap-3">
            <a className="px-5 py-3 bg-slate-900 text-white rounded" href="tel:+48123456789">Zadzwoń</a>
            <a className="px-5 py-3 border rounded" href="#contact">Kontakt</a>
          </div>
        </div>
        <div className="aspect-video bg-white rounded shadow grid place-items-center text-slate-400">
          Zdjęcie budynku (wstawimy później)
        </div>
      </div>
    </section>
  );
}
