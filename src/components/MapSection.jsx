import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { trackEvent } from "../lib/analytics.js";

// >>> PODMIEŃ KOORDY i OPISY <<<
const LAT = 52.22977;   // <-- wpisz szerokość geogr. (np. lokacja budynku)
const LNG = 21.01178;   // <-- wpisz długość geogr.
const ADDRESS_TITLE = "Zwoleńska 97, Warszawa";
const ADDRESS_LINES = ["Magazyn + biura", "Dostęp TIR, parking"];

const icon = L.icon({
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapSection() {
  const center = [LAT, LNG];
  const gmapsHref = `https://www.google.com/maps?q=${LAT},${LNG}`;

  // track view (raz na montaż)
  if (import.meta.env.DEV) trackEvent("map_view", { lat: LAT, lng: LNG });

  return (
    <section className="bg-white" id="mapa">
      <div className="container section">
        <h2 className="text-2xl font-semibold mb-4">Lokalizacja</h2>

        <div className="card overflow-hidden">
          <div className="h-[380px] md:h-[480px]">
            <MapContainer
              center={center}
              zoom={15}
              scrollWheelZoom={false}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; OpenStreetMap'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={center} icon={icon}>
                <Popup>
                  <div className="text-sm">
                    <div className="font-medium">{ADDRESS_TITLE}</div>
                    {ADDRESS_LINES.map((l) => (
                      <div key={l} className="text-slate-600">{l}</div>
                    ))}
                    <div className="mt-2">
                      <a
                        href={gmapsHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                        onClick={() => trackEvent("map_directions_click", { href: gmapsHref })}
                      >
                        Nawiguj w Google Maps
                      </a>
                    </div>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* Pasek pod mapą z adresem i przyciskami */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 p-4">
            <div>
              <div className="font-medium">{ADDRESS_TITLE}</div>
              <div className="text-sm text-slate-600">{ADDRESS_LINES.join(" · ")}</div>
            </div>
            <div className="flex gap-2">
              <a
                className="btn-outline"
                href={gmapsHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("map_directions_click", { href: gmapsHref })}
              >
                Nawiguj w Google Maps
              </a>
              <a
                className="btn"
                href={`https://www.openstreetmap.org/?mlat=${LAT}&mlon=${LNG}#map=17/${LAT}/${LNG}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Zobacz w OSM
              </a>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-500 mt-3">
          Scroll kółkiem wyłączony (UX). Przytrzymaj Ctrl + scroll, aby przybliżać.
        </p>
      </div>
    </section>
  );
}
