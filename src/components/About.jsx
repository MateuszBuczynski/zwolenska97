export default function About() {
  return (
    <section className="bg-white">
      <div className="container section">
        <h2 className="text-2xl font-semibold mb-6">Najważniejsze atuty</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {/* 1 */}
<div className="card p-5">
  <div className="flex items-start gap-3">
    <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="text-slate-600 mt-0.5">
      <path d="M4 6h16v12H4z" strokeWidth="1.5"/>
      <path d="M8 10h8" strokeWidth="1.5"/>
    </svg>
    <div>
      <div className="font-medium">Powierzchnie</div>
      <div className="text-sm text-slate-600 mt-1">
        Działka 1&nbsp;362&nbsp;m² <span className="mx-1 text-slate-400">·</span>
        Budynek 407,5&nbsp;m² <span className="mx-1 text-slate-400">·</span>
        3&nbsp;kondygnacje
      </div>
    </div>
  </div>
</div>


          {/* 2 */}
          <div className="card p-5">
            <div className="flex items-start gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="text-slate-600 mt-0.5">
                <path d="M4 17h16M6 13h12M8 9h8M10 5h4" strokeWidth="1.5"/>
              </svg>
              <div>
                <div className="font-medium">Logistyka</div>
                <div className="text-sm text-slate-600 mt-1">Dostęp TIR, place manewrowe</div>
              </div>
            </div>
          </div>

          {/* 3 — Zaplecze biurowe */}
          <div className="card p-5">
            <div className="flex items-start gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" className="text-slate-600 mt-0.5">
                <path d="M4 6h16v12H4zM9 6v12M15 6v12" strokeWidth="1.5"/>
              </svg>
              <div>
                <div className="font-medium">Zaplecze biurowe</div>
                <div className="text-sm text-slate-600 mt-1">
                  – Klimatyzacja + wentylacja mechaniczna<br/>
                  – Światłowód/sieć logiczna, monitoring (kamery + rejestrator)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
