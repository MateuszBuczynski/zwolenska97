const plans = [
  {
    title: "Rzut – parter",
    file: "/docs/plan-parter.pdf",
    thumb: "/docs/plan-parter-thumb.webp",
    note: "Powierzchnia magazynowa i zaplecze",
  },
  {
    title: "Rzut – piętro",
    file: "/docs/plan-pietro.pdf",
    thumb: "/docs/plan-pietro-thumb.webp",
    note: "Powierzchnia biurowa",
  },
  {
    title: "Rzut – poddasze",
    file: "/docs/plan-poddasze.pdf",
    thumb: "/docs/plan-poddasze-thumb.webp",
    note: "Pomieszczenia techniczne / archiwum",
  },
];

export default function Plans() {
  return (
    <section className="bg-white" id="plany">
      <div className="container section">
        <h2 className="text-2xl font-semibold mb-6">Plany budynku (PDF)</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {plans.map((p) => (
            <a
              key={p.file}
              href={p.file}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-4 hover:shadow-md transition group"
              aria-label={`Otwórz: ${p.title}`}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border bg-white mb-3">
                <img
                  src={p.thumb}
                  alt={`Podgląd: ${p.title}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
                <span className="absolute right-2 top-2 badge bg-slate-900 text-white">PDF</span>
                <span className="pointer-events-none absolute inset-0 hidden sm:flex items-center justify-center
                                  text-white text-sm bg-black/0 group-hover:bg-black/15 transition">
                  Kliknij, aby otworzyć
                </span>
              </div>

              <div className="font-medium group-hover:underline">{p.title}</div>
              <div className="text-sm text-slate-600">{p.note}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
