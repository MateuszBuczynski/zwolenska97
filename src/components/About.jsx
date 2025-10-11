export default function About() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Najważniejsze atuty</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-slate-50 rounded">Powierzchnie: 100–3000 m²</div>
          <div className="p-4 bg-slate-50 rounded">Dostęp TIR, place manewrowe</div>
          <div className="p-4 bg-slate-50 rounded">Parking, ogrzewanie</div>
        </div>
      </div>
    </section>
  );
}
