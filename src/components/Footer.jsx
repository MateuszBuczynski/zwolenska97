export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Zwoleńska — Wszystkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
