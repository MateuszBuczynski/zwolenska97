import { trackEvent } from "../lib/analytics.js";

const plans = [
  { title: "Parter — część magazynowa i biurowa", file: "/docs/plan-parter.pdf",    thumb: "/docs/plan-parter-thumb.webp",   level: "parter" },
  { title: "I piętro — biuro",                      file: "/docs/plan-pietro.pdf",    thumb: "/docs/plan-pietro-thumb.webp",   level: "pietro" },
  { title: "Poddasze — techniczne",        file: "/docs/plan-poddasze.pdf",  thumb: "/docs/plan-poddasze-thumb.webp", level: "poddasze" },
];

export default function Plans() {
  if (import.meta.env.DEV) console.log("[Plans] mounted");
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
              onClick={() => trackEvent("plan_pdf_download", { level: p.level, href: p.file })}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border bg-white mb-3">
                <img src={p.thumb} alt={`Podgląd: ${p.title}`} className="w-full h-full object-contain" loading="lazy" />
                <span className="absolute right-2 top-2 badge bg-slate-900 text-white">PDF</span>
              </div>
              <div className="font-medium group-hover:underline">{p.title}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
