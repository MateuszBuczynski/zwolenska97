import { useEffect } from "react";
import { trackEvent } from "../lib/analytics.js"; // <— z .js


export default function ObjectCard() {
  useEffect(() => {
    trackEvent("object_card_view", { location: "home" });
  }, []);

  const dossierHref = "/docs/dossier.pdf"; // wrzuć plik do public/docs/dossier.pdf

  const Row = ({ children }) => (
    <li className="flex items-start gap-2">
      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400"></span>
      <span>{children}</span>
    </li>
  );

  return (
    <section className="bg-white">
      <div className="container section">
        <h2 className="text-2xl font-semibold mb-4">Karta obiektu — cały budynek</h2>

        <div className="card p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-slate-700">
              <Row>Powierzchnia działki: <b>1&nbsp;362&nbsp;m²</b></Row>
              <Row>Powierzchnia budynku: <b>407,5&nbsp;m²</b>, <b>3&nbsp;kondygnacje</b></Row>
              <Row>Magazyn: wys. <b>6–8&nbsp;m</b></Row>
              <Row>Biura: gabinety + sala konf. + socjal</Row>
              <Row>Instalacje: ogrzewanie gazowe (CO+CWU), wentylacja mech., klimatyzacja, LED</Row>
            </ul>

            <ul className="space-y-2 text-slate-700">
              <Row>Zasilanie: <b>20&nbsp;kW</b>, podział na 2 obwody, jeden układ pomiarowy</Row>
              <Row>Sieć: sieć logiczna</Row>
              <Row>Bezpieczeństwo: monitoring zewnętrzny (kamery + rejestrator), okablowanie alarmu</Row>
              <Row>Dojazd: brama z napędem, plac manewrowy, wjazd TIR</Row>
              <Row>Status: <b>dostępny od zaraz</b></Row>
            </ul>
          </div>

          <div className="mt-5">
            <a
              className="btn-outline"
              href={dossierHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("object_dossier_download_click", { href: dossierHref })}
            >
              Pobierz dossier PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
