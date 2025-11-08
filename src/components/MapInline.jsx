import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";

// >>> USTAW SWOJE KOORDYNATY I OPISY <<<
// (poniżej przykład – wstaw dokładne LAT/LNG Zwoleńska 97)
const LAT = 52.2028642;        // <-- PODMIEŃ
const LNG = 21.1568364;        // <-- PODMIEŃ
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

function ScrollToggle({ active, setActive }) {
  const map = useMap();
  useEffect(() => {
    active ? map.scrollWheelZoom.enable() : map.scrollWheelZoom.disable();
  }, [active, map]);

  return (
    <button
      type="button"
      onClick={() => setActive(!active)}
      className="absolute z-[500] right-3 top-3 rounded-md bg-white/90 px-3 py-1.5 text-sm shadow ring-1 ring-black/10 hover:bg-white"
    >
      {active ? "Wyłącz przewijanie" : "Włącz przewijanie"}
    </button>
  );
}

export default function MapInline() {
  const center = [LAT, LNG];
  const [scrollOn, setScrollOn] = useState(false);
  const gmapsHref = `https://www.google.com/maps?q=${LAT},${LNG}`;
  const osmHref = `https://www.openstreetmap.org/?mlat=${LAT}&mlon=${LNG}#map=17/${LAT}/${LNG}`;

  return (
    <div className="card overflow-hidden">
      {/* mapa */}
      <div className="h-[380px] md:h-[420px] relative">
        <MapContainer
          center={center}
          zoom={16}
          className="h-full w-full"
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={center} icon={icon}>
            <Popup>
              <div className="text-sm">
                <div className="font-medium">{ADDRESS_TITLE}</div>
                {ADDRESS_LINES.map(l => (
                  <div key={l} className="text-slate-600">{l}</div>
                ))}
                <div className="mt-2">
                  <a href={gmapsHref} target="_blank" rel="noopener noreferrer" className="underline">
                    Nawiguj w Google Maps
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>

          <ScrollToggle active={scrollOn} setActive={setScrollOn} />
        </MapContainer>
      </div>

      {/* pasek pod mapą – opis + przyciski */}
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
          >
            Nawiguj w Google Maps
          </a>
          <a
            className="btn"
            href={osmHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Zobacz w OSM
          </a>
        </div>
      </div>
    </div>
  );
}
