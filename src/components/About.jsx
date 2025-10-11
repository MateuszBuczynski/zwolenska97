export default function About() {
  const items = [
    { t: "Powierzchnie", d: "100–3000 m², elastyczne moduły", i: "📐" },
    { t: "Logistyka", d: "Dostęp TIR, place manewrowe", i: "🚚" },
    { t: "Komfort", d: "Ogrzewanie, monitoring", i: "🔥" },
  ];
  return (
    <section className="bg-white" id="atut">
      <div className="container section">
        <h2 className="text-2xl font-semibold mb-6">Najważniejsze atuty</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((x, i) => (
            <div key={i} className="card p-5">
              <div className="text-2xl">{x.i}</div>
              <div className="mt-2 font-medium">{x.t}</div>
              <div className="text-slate-600 text-sm">{x.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
